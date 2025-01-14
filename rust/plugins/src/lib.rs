use crate::{
    errors::Error,
    methods::Method,
    request::{Client, ClientStdio},
    utils::{self, schemas},
};
use bollard::{container::RemoveContainerOptions, models::CreateImageInfo};
use chrono::{DateTime, Duration, TimeZone, Utc};
use events::ProgressEvent;
use eyre::{bail, eyre, Result};
use futures::StreamExt;
use humantime::format_duration;
use jsonschema::JSONSchema;
use once_cell::sync::Lazy;
use rand::Rng;
use regex::Regex;
use schemars::{schema::Schema, JsonSchema};
use semver::Version;
use serde::{Deserialize, Serialize};
use std::{
    collections::HashMap,
    env, fs,
    path::PathBuf,
    process::{Command, Stdio},
    thread,
};
use stencila_schema::Node;
use strum::{Display, EnumIter, EnumString, IntoEnumIterator, VariantNames};
use tokio::sync::Mutex;

/// Get the directory within which plugins and their configurations are installed
pub fn plugins_dir(ensure: bool) -> Result<PathBuf> {
    let user_data_dir = dirs_next::data_dir().unwrap_or_else(|| env::current_dir().unwrap());
    let dir = match env::consts::OS {
        "macos" | "windows" => user_data_dir.join("Stencila").join("Plugins"),
        _ => user_data_dir.join("stencila").join("plugins"),
    };
    if ensure {
        fs::create_dir_all(&dir)?;
    }
    Ok(dir)
}

/// Plugin installation method
///
/// Which method to use to install a plugin.
#[derive(
    Debug, Display, Clone, Copy, EnumString, EnumIter, PartialEq, JsonSchema, Deserialize, Serialize,
)]
#[serde(rename_all = "lowercase")]
#[strum(serialize_all = "lowercase")]
pub enum PluginInstallation {
    #[cfg(any(feature = "plugins-docker"))]
    Docker,
    #[cfg(any(feature = "plugins-binary"))]
    Binary,
    #[cfg(any(feature = "plugins-javascript"))]
    Javascript,
    #[cfg(any(feature = "plugins-python"))]
    Python,
    #[cfg(any(feature = "plugins-r"))]
    R,
    #[cfg(any(feature = "plugins-link"))]
    Link,
}

/// Description of a plugin
///
/// As far as possible using existing properties defined in schema.org
/// [`SoftwareApplication`](https://schema.org/SoftwareApplication) but extensions
/// added where necessary.
#[derive(Debug, Default, Clone, JsonSchema, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
#[schemars(deny_unknown_fields)]
pub struct Plugin {
    // Property names use the Rust convention of snake_case but are renamed
    // to schema.org camelCase on serialization.

    // Properties that are read from the plugin's manifest file
    /// The name of the plugin
    name: String,

    /// The version of the plugin
    software_version: String,

    /// A description of the plugin
    description: String,

    /// URL of the image to be used when displaying the plugin
    #[serde(skip_serializing_if = "Option::is_none")]
    image: Option<String>,

    /// A list of URLS that the plugin can be installed from
    install_url: Vec<String>,

    /// A list of plugin "features"
    /// Each feature is a `JSONSchema` object describing a method
    /// (including its parameters).
    feature_list: Vec<serde_json::Value>,

    // Properties set / derived at runtime (should all be optional)
    /// If the plugin is installed, the installation type
    #[serde(skip_serializing_if = "Option::is_none")]
    installation: Option<PluginInstallation>,

    /// The last time that the plugin manifest was updated.
    /// Used to determine if a refresh is necessary.
    #[serde(skip_serializing_if = "Option::is_none")]
    refreshed: Option<DateTime<Utc>>,

    /// The next version of the plugin, if any.
    ///
    /// If the plugin is installed and there is a newer version of
    /// the plugin then this property should be set at the
    /// time of refresh.
    #[serde(skip_serializing_if = "Option::is_none")]
    #[schemars(schema_with = "Plugin::schema_next")]
    next: Option<Box<Plugin>>,

    /// The current alias for this plugin, if any
    #[serde(skip_serializing_if = "Option::is_none")]
    alias: Option<String>,
}

impl Plugin {
    /// The name of the plugin file within the plugin directory
    const FILE_NAME: &'static str = "codemeta.json";

    /// Get the JSON Schema for a plugin
    pub fn schema() -> Result<serde_json::Value> {
        schemas::generate::<Plugin>()
    }

    /// Generate the JSON Schema for the `next` property
    ///
    /// This is necessary because `schemars` does not seem to handle the
    /// self-referencing / recursive type. So here, we specify the
    /// TypeScript type to use.
    fn schema_next(_generator: &mut schemars::gen::SchemaGenerator) -> Schema {
        schemas::typescript("Plugin", false)
    }

    /// Create a Markdown document describing a plugin
    pub fn display(&self) -> Result<String> {
        let template = r#"
# {{name}} {{softwareVersion}}

{{description}}

## Installation options

{{#each installUrl}}
- {{this}}{{/each}}


## Methods

{{#each featureList}}
### {{title}}

{{description}}

{{#each properties}}
- **{{@key}}**: *{{type}}* : {{description}}{{/each}}
{{/each}}

"#;
        let hb = handlebars::Handlebars::new();
        let md = hb.render_template(template, self)?;
        Ok(md)
    }

    /// Split a plugin spec into `owner`, `name`, and `version`
    pub fn spec_to_parts(spec: &str) -> (&str, &str, &str) {
        let (owner, name) = if spec.contains('/') {
            let parts: Vec<&str> = spec.split('/').collect();
            (parts[0].trim(), parts[1].trim())
        } else {
            ("stencila", spec)
        };

        let (name, version) = if name.contains('@') {
            let parts: Vec<&str> = name.split('@').collect();
            (parts[0].trim(), parts[1].trim())
        } else {
            (name, "latest")
        };

        (owner, name, version)
    }

    /// Merge locally configured aliases into global aliases possibly extending
    /// and overriding them
    fn merge_aliases(
        global: &HashMap<String, String>,
        local: &HashMap<String, String>,
    ) -> HashMap<String, String> {
        let mut aliases = global.clone();
        aliases.extend(local.iter().map(|(k, v)| (k.clone(), v.clone())));
        aliases
    }

    /// Resolve a plugin alias to a plugin name
    ///
    /// If the provided string is a registered alias then returns the corresponding
    /// plugin name, otherwise assumes the string is a plugin name
    pub fn alias_to_name(alias: &str, aliases: &HashMap<String, String>) -> String {
        match aliases.get(alias) {
            Some(name) => name,
            None => alias,
        }
        .into()
    }

    /// Resolve a plugin name to a preferred alias
    pub fn name_to_alias(name: &str, aliases: &HashMap<String, String>) -> String {
        for (alias, value) in aliases.iter() {
            if name == value {
                return alias.into();
            }
        }
        name.into()
    }

    /// Get the path of the plugin's directory
    pub fn dir(name: &str) -> Result<PathBuf> {
        Ok(plugins_dir(false)?.join(name))
    }

    /// Get the path of the plugin's manifest file
    pub fn file(name: &str) -> Result<PathBuf> {
        Ok(Plugin::dir(name)?.join(Plugin::FILE_NAME))
    }

    /// Load a plugin from its JSON manifest
    pub fn load(json: &str) -> Result<Plugin> {
        let plugin: Plugin = match serde_json::from_str(json) {
            Ok(plugin) => plugin,
            Err(error) => bail!("Error parsing plugin manifest: {}", error),
        };
        Ok(plugin)
    }

    /// Load a plugin from its JSON manifest generated by running it with
    /// the manifest subcommand
    #[tracing::instrument]
    pub fn load_from_command(command: &mut Command) -> Result<Plugin> {
        let output = match command.stdout(Stdio::piped()).output() {
            Ok(output) => output,
            Err(error) => bail!("When attempting to run command: {}", error),
        };

        if !output.status.success() {
            bail!(
                "When attempting to get manifest: {} {}",
                String::from_utf8_lossy(&output.stdout),
                String::from_utf8_lossy(&output.stderr)
            )
        }

        let json = std::str::from_utf8(&output.stdout)?;
        let plugin: Plugin = serde_json::from_str(json)?;
        Ok(plugin)
    }

    /// Read the plugin from its file
    ///
    /// If the plugin directory is a symlink then set the installation
    /// method as `Link`.
    pub fn read(name: &str) -> Result<Plugin> {
        let json = match fs::read_to_string(Plugin::file(name)?) {
            Ok(json) => json,
            Err(_) => bail!("Plugin '{}' is not installed", name),
        };

        let mut plugin = Plugin::load(&json)?;

        if fs::symlink_metadata(Plugin::dir(name)?)?
            .file_type()
            .is_symlink()
        {
            plugin.installation = Some(PluginInstallation::Link);
        }

        Ok(plugin)
    }

    /// Write the plugin to its directory
    pub fn write(name: &str, plugin: &Plugin) -> Result<()> {
        let json = serde_json::to_string_pretty(plugin)?;

        let dir = Plugin::dir(name)?;
        fs::create_dir_all(dir)?;

        let file = Plugin::file(name)?;
        fs::write(file, json)?;

        Ok(())
    }

    /// Remove the plugin's directory
    pub fn remove(name: &str) -> Result<()> {
        let dir = Plugin::dir(name)?;
        if dir.exists() || fs::symlink_metadata(&dir).is_ok() {
            if dir.is_file() {
                fs::remove_file(dir)?
            } else {
                // Note that if `dir` is a symlink to a directory that
                // only the directory will be removed.
                fs::remove_dir_all(dir)?
            }
        }

        Ok(())
    }

    /// Replace a plugin
    ///
    /// Removes any existing plugin directory and then recreates it
    /// with the new plugin file
    pub fn replace(name: &str, plugin: &Plugin) -> Result<()> {
        Plugin::remove(name)?;
        Plugin::write(name, plugin)
    }

    /// Install a plugin
    pub async fn install(
        spec: &str,
        installs: &[PluginInstallation],
        aliases: &HashMap<String, String>,
        plugins: &mut Plugins,
        current_version: Option<String>,
    ) -> Result<()> {
        // Parse the spec to get it's parts.
        // If there is no matching plugin then we'll attempt to use these parts
        // to install using each of the installation methods.
        let (owner, name, version) = Plugin::spec_to_parts(spec);

        // Attempt to convert the parsed name using aliases
        let aliases = Plugin::merge_aliases(&plugins.aliases, aliases);
        let name = Plugin::alias_to_name(name, &aliases);
        let name = name.as_str();

        // Attempt to get the matching plugin so we can use it's `installUrl` property
        // if possible.
        let plugin = plugins.plugins.get(name);

        // If the plugin hasn't been refreshed for a while then fetch it's manifest
        let plugin = if let Some(plugin) = plugin {
            if Utc::now()
                > plugin
                    .refreshed
                    .unwrap_or_else(|| Utc.ymd(1900, 1, 1).and_hms(0, 0, 0))
                    + Duration::from_std(humantime::parse_duration("1 day")?)?
            {
                // Load the plugin's latest manifest from its URL
                let url = match plugins.registry.get::<str>(name) {
                    None => bail!("No plugin registered with alias or name '{}'", name),
                    Some(url) => url,
                };
                let json = reqwest::get(url).await?.text().await?;
                let latest = Plugin::load(&json)?;
                Some(latest)
            } else {
                Some(plugin.clone())
            }
        } else {
            None
        };

        for install in installs {
            let result = match install {
                PluginInstallation::Docker => {
                    Plugin::install_docker(&plugin, owner, name, version).await
                }
                PluginInstallation::Binary => Plugin::install_binary(
                    &plugin,
                    owner,
                    name,
                    version,
                    current_version.clone(),
                    false,
                    true,
                ),
                PluginInstallation::Javascript => {
                    Plugin::install_javascript(&plugin, owner, name, version)
                }
                PluginInstallation::Python => Plugin::install_python(&plugin, name, version),
                PluginInstallation::R => Plugin::install_r(&plugin, name, version),
                PluginInstallation::Link => Plugin::install_link(spec),
            };
            match result {
                // Success, so add the plugin to the in-memory store
                Ok(plugin) => {
                    plugins.add(plugin)?;
                    return Ok(());
                }
                // Error, keep trying other install methods, or if there is
                // only one method, return that error.
                Err(error) => {
                    if installs.len() == 1 {
                        return Err(error);
                    }
                }
            }
        }

        bail!(
            "Unable to install plugin '{}', tried installation methods {:?}",
            spec,
            installs
        )
    }

    /// Install a list of plugins
    pub async fn install_list(
        specs: Vec<String>,
        installs: &[PluginInstallation],
        aliases: &HashMap<String, String>,
        plugins: &mut Plugins,
    ) -> Result<()> {
        for spec in specs {
            match Plugin::install(&spec, installs, aliases, plugins, None).await {
                Ok(_) => tracing::info!("Added plugin {}", spec),
                Err(error) => bail!(error),
            }
        }
        Ok(())
    }

    /// Parse a plugin's NPM install URL (if any)
    #[cfg(any(feature = "plugins-javascript"))]
    pub fn parse_js_install_url(self: &Plugin) -> Option<(String, String)> {
        static REGEX: Lazy<Regex> = Lazy::new(|| {
            Regex::new(r"^https?://www.npmjs.com/package/@([a-z]+)/([a-z]+)")
                .expect("Unable to create regex")
        });
        for url in &self.install_url {
            if let Some(captures) = REGEX.captures(url) {
                return Some((
                    captures.get(1).map_or("", |matc| matc.as_str()).into(),
                    captures.get(2).map_or("", |matc| matc.as_str()).into(),
                ));
            }
        }
        None
    }

    /// Add a plugin as a NPM package
    ///
    /// Installs the package within the `plugins/node_modules` directory so that it
    /// is not necessary to run as root (the NPM `--global` flag requires sudo).
    #[cfg(any(feature = "plugins-javascript"))]
    pub fn install_javascript(
        plugin: &Option<Plugin>,
        owner: &str,
        name: &str,
        version: &str,
    ) -> Result<Plugin> {
        // If this is a known, registered plugin then check that it can be installed
        // as a NPM package and use declared repo owner and name.
        // Otherwise, use the repo owner and name parsed from the spec.
        let (owner, name) = if let Some(plugin) = plugin {
            if let Some((owner, name)) = plugin.parse_js_install_url() {
                (owner, name)
            } else {
                return Err(eyre!(
                    "Install as NPM package is not supported by plugin '{}'",
                    plugin.name
                ));
            }
        } else {
            (owner.into(), name.into())
        };

        let npm_prefix = plugins_dir(false)?;
        let node_modules = npm_prefix.join("node_modules");
        fs::create_dir_all(&node_modules)?;

        // Ensure we have a package.json in npm_prefix to avoid warnings
        let package_json = npm_prefix.join("package.json");
        if !package_json.exists() {
            let json = r#"{
  "description": "Stencila plugins installed as NPM packages",
  "repository": "https://github.com/stencila/stencila",
  "license": "Apache-2.0"
}"#;
            fs::write(package_json, json)?;
        }

        tracing::debug!(
            "Installing NPM package '{}/{}@{}' to '{}'",
            owner,
            name,
            version,
            node_modules.display()
        );

        match Command::new("npm")
            .arg(format!("--prefix={}", npm_prefix.display()))
            .arg("install")
            .arg(format!("@{}/{}@{}", owner, name, version))
            .stdout(Stdio::piped())
            .spawn()
        {
            Ok(child) => {
                let output = child.wait_with_output()?;
                if output.status.success() {
                    tracing::info!("NPM package '{}/{}@{}' installed", owner, name, version);

                    let bin = node_modules.join(".bin").join(&name).display().to_string();
                    tracing::debug!("Obtaining manifest from {}", bin);

                    let mut plugin = Plugin::load_from_command(
                        Command::new("node").arg(bin.clone()).arg("manifest"),
                    )?;
                    plugin.installation = Some(PluginInstallation::Javascript);
                    Plugin::replace(&name, &plugin)?;

                    // Create link to the bin script for easier spawning of the plugin
                    utils::fs::symlink_file(bin, Plugin::dir(&name)?.join(name))?;

                    Ok(plugin)
                } else {
                    bail!(
                        "When installing NPM package '{}': {} {}",
                        name,
                        String::from_utf8_lossy(&output.stdout),
                        String::from_utf8_lossy(&output.stderr)
                    )
                }
            }
            Err(error) => {
                bail!(
                    "When attempting to run `npm` (is it installed and on your PATH?): {}",
                    error.to_string()
                )
            }
        }
    }

    /// Parse a plugin's PyPI install URL (if any)
    #[cfg(any(feature = "plugins-python"))]
    pub fn parse_py_install_url(self: &Plugin) -> Option<String> {
        static REGEX: Lazy<Regex> = Lazy::new(|| {
            Regex::new(r"^https?://pypi.org/project/([\w\-\.]+)").expect("Unable to create regex")
        });
        for url in &self.install_url {
            if let Some(captures) = REGEX.captures(url) {
                return Some(captures.get(1).map_or("", |matc| matc.as_str()).into());
            }
        }
        None
    }

    /// Add a plugin as a Python package from PyPI
    ///
    /// Installs the package globally for the user.
    #[cfg(any(feature = "plugins-python"))]
    pub fn install_python(plugin: &Option<Plugin>, name: &str, version: &str) -> Result<Plugin> {
        // If this is a known, registered plugin then check that it can be installed
        // as a Python package and use declared package name.
        // Otherwise, use the name parsed from the spec.
        let name = if let Some(plugin) = plugin {
            if let Some(name) = plugin.parse_py_install_url() {
                name
            } else {
                return Err(eyre!(
                    "Install as Python package is not supported by plugin '{}'",
                    plugin.name
                ));
            }
        } else {
            name.into()
        };

        tracing::debug!("Installing PyPi package '{}@{}'", name, version);

        match Command::new("python3")
            .arg("-mpip")
            .arg("install")
            .arg(if version != "latest" {
                format!("{}=={}", name, version)
            } else {
                name.to_string()
            })
            .stdout(Stdio::piped())
            .spawn()
        {
            Ok(child) => {
                let output = child.wait_with_output()?;
                if output.status.success() {
                    tracing::info!("PyPi package '{}@{}' installed", name, version);

                    tracing::debug!("Obtaining manifest from Python module {}", name);
                    let mut plugin = Plugin::load_from_command(
                        Command::new("python3")
                            .arg(format!("-m{}", name))
                            .arg("manifest"),
                    )?;
                    plugin.installation = Some(PluginInstallation::Python);
                    Plugin::replace(&name, &plugin)?;
                    Ok(plugin)
                } else {
                    bail!(
                        "When installing CRAN package '{}': {} {}",
                        name,
                        String::from_utf8_lossy(&output.stdout),
                        String::from_utf8_lossy(&output.stderr)
                    )
                }
            }
            Err(error) => {
                bail!(
                    "When attempting to run `python3` (is it installed and on your PATH?): {}",
                    error.to_string()
                )
            }
        }
    }

    /// Parse a plugin's CRAN install URL (if any)
    #[cfg(any(feature = "plugins-r"))]
    pub fn parse_r_install_url(self: &Plugin) -> Option<String> {
        static REGEX: Lazy<Regex> = Lazy::new(|| {
            Regex::new(r"^https://cran.r-project.org/web/packages/([\w\-\.]+)")
                .expect("Unable to create regex")
        });
        for url in &self.install_url {
            if let Some(captures) = REGEX.captures(url) {
                return Some(captures.get(1).map_or("", |matc| matc.as_str()).into());
            }
        }
        None
    }

    /// Add a plugin as a R package from CRAN
    #[cfg(any(feature = "plugins-r"))]
    pub fn install_r(plugin: &Option<Plugin>, name: &str, version: &str) -> Result<Plugin> {
        // If this is a known, registered plugin then check that it can be installed
        // as a R package and use declared package name. Otherwise, use the name parsed from the spec.
        let name = if let Some(plugin) = plugin {
            if let Some(name) = plugin.parse_r_install_url() {
                name
            } else {
                return Err(eyre!(
                    "Install as R package is not supported by plugin '{}'",
                    plugin.name
                ));
            }
        } else {
            name.into()
        };

        tracing::debug!("Installing CRAN package '{}'", name);
        if version != "latest" {
            tracing::warn!("Installing specific versions of CRAN package is not currently support; will install latest version");
        }

        match Command::new("Rscript")
            .arg("-e")
            .arg(format!(
                "tryCatch(install.packages('{}'), warning = function(e) {{ cat(e$message); quit(status=1) }})",
                name
            ))
            .stdout(Stdio::piped())
            .spawn()
        {
            Ok(child) => {
                let output = child.wait_with_output()?;
                if output.status.success() {
                    tracing::info!("CRAN package '{}' installed", name);

                    tracing::debug!("Obtaining manifest from R package {}", name);
                    let mut plugin = Plugin::load_from_command(
                        Command::new("Rscript")
                            .arg("-e")
                            .arg(format!("{}::manifest()", name)),
                    )?;
                    plugin.installation = Some(PluginInstallation::R);
                    Plugin::replace(&name, &plugin)?;
                    Ok(plugin)
                } else {
                    bail!(
                        "When installing CRAN package '{}': {} {}",
                        name,
                        String::from_utf8_lossy(&output.stdout),
                        String::from_utf8_lossy(&output.stderr)
                    )
                }
            }
            Err(error) => {
                bail!("When attempting to run `Rscript` (is it installed and on your PATH?): {}", error.to_string())
            }
        }
    }

    /// Parse a plugin's binary install URL (if any)
    ///
    /// Currently this will parse a GitHub URL. In the future is may also
    /// parse other URLs used for distributing URLs.
    #[cfg(any(feature = "plugins-binary"))]
    pub fn parse_binary_install_url(self: &Plugin) -> Option<(String, String)> {
        static REGEX: Lazy<Regex> = Lazy::new(|| {
            Regex::new(r"^https?://github.com/([a-z]+)/([a-z]+)/releases")
                .expect("Unable to create regex")
        });
        for url in &self.install_url {
            if let Some(captures) = REGEX.captures(url) {
                return Some((
                    captures.get(1).map_or("", |matc| matc.as_str()).into(),
                    captures.get(2).map_or("", |matc| matc.as_str()).into(),
                ));
            }
        }
        None
    }

    /// Add a plugin as a downloaded binary
    #[cfg(any(feature = "plugins-binary"))]
    pub fn install_binary(
        plugin: &Option<Plugin>,
        owner: &str,
        name: &str,
        version: &str,
        current_version: Option<String>,
        confirm: bool,
        verbose: bool,
    ) -> Result<Plugin> {
        // If this is a known, registered plugin then check that it can be installed
        // as a binary and use declared repo owner and name.
        // Otherwise, use the repo owner and name parsed from the spec.
        let (owner, name) = if let Some(plugin) = plugin {
            if let Some((owner, name)) = plugin.parse_binary_install_url() {
                (owner, name)
            } else {
                return Err(eyre!(
                    "Binary install is not supported by plugin '{}'",
                    plugin.name
                ));
            }
        } else {
            (owner.into(), name.into())
        };

        // Remove the plugin directory if this is not an upgrade
        // (we don't want it remove if the user aborts download)
        if current_version.is_none() {
            Plugin::remove(&name)?
        }

        // (Re)create the directory where the binary will be downloaded to
        let install_dir = plugins_dir(false)?.join(&name);
        fs::create_dir_all(&install_dir)?;
        let install_path = install_dir.join(&name);

        // We need to pass a semver for current version
        let current_version = current_version.unwrap_or_default();
        let current_version = if current_version.is_empty() {
            "0.0.0".into()
        } else {
            current_version
        };

        let mut builder = self_update::backends::github::Update::configure();
        builder
            .repo_owner(&owner)
            .repo_name(&name)
            .bin_name(&name)
            .current_version(&current_version)
            .bin_install_path(&install_path)
            .no_confirm(!confirm)
            .show_output(verbose)
            .show_download_progress(verbose);
        if version != "latest" {
            builder.target_version_tag(format!("v{}", version).as_str());
        }

        // The download has to be done in another thread because it spawns
        // a new tokio runtime
        thread::spawn(move || -> Result<()> {
            if let Err(error) = builder.build()?.update() {
                match error {
                    self_update::errors::Error::Network(message) => {
                        if message.contains("404") {
                            bail!(
                                "Could not find repository or corresponding release in repository"
                            )
                        } else {
                            bail!(message)
                        }
                    }
                    _ => bail!(error.to_string()),
                }
            } else {
                Ok(())
            }
        })
        .join()
        .map_err(|_| eyre!("Error joining thread"))??;

        // Get plugin JSON manifest and write it to disk
        let mut plugin =
            Plugin::load_from_command(&mut Command::new(&install_path).arg("manifest"))?;
        plugin.installation = Some(PluginInstallation::Binary);
        Plugin::write(&name, &plugin)?;
        Ok(plugin)
    }

    /// Parse a plugin's Docker install URL (if any)
    ///
    /// Currently this will parse a Docker Hub URL. In the future is may also
    /// parse container registry URLs e.g. gcr.io
    #[cfg(any(feature = "plugins-docker"))]
    pub fn parse_docker_install_url(self: &Plugin) -> Option<(String, String)> {
        for url in &self.install_url {
            static REGEX: Lazy<Regex> = Lazy::new(|| {
                Regex::new(r"^https?://hub.docker.com/r/([a-z]+)/([a-z]+)")
                    .expect("Unable to create regex")
            });
            if let Some(captures) = REGEX.captures(url) {
                return Some((
                    captures.get(1).map_or("", |matc| matc.as_str()).into(),
                    captures.get(2).map_or("", |matc| matc.as_str()).into(),
                ));
            }
        }
        None
    }

    /// Add a plugin as a pulled Docker image
    ///
    /// For this to succeed must be able to connect to the local
    /// Docker server and be able to pull an image with corresponding
    /// name.
    #[cfg(any(feature = "plugins-docker"))]
    pub async fn install_docker(
        plugin: &Option<Plugin>,
        owner: &str,
        name: &str,
        version: &str,
    ) -> Result<Plugin> {
        // If this is a known, registered plugin then check that it can be installed
        // as a Docker image and use the declared image owner and name.
        // Otherwise, use the owner and name parsed from the spec.
        let (owner, name) = if let Some(plugin) = plugin {
            if let Some((owner, name)) = plugin.parse_docker_install_url() {
                (owner, name)
            } else {
                return Err(eyre!(
                    "Docker install is not supported by plugin '{}'",
                    plugin.name
                ));
            }
        } else {
            (owner.into(), name.into())
        };

        let docker = bollard::Docker::connect_with_local_defaults()?;

        // Pull the image (by creating an image from it)
        let image = format!("{}/{}:{}", owner, name, version);
        let mut stream = docker.create_image(
            Some(bollard::image::CreateImageOptions {
                from_image: image.clone(),
                ..Default::default()
            }),
            None,
            None,
        );

        // Publish progress of image pull
        let parent = Some(format!(
            "pull-docker-image-{}-{}",
            image,
            chrono::Utc::now().timestamp()
        ));
        events::publish(
            "progress",
            ProgressEvent {
                id: parent.clone(),
                message: Some(format!("Downloading Docker image {}", image)),
                ..Default::default()
            },
        );
        while let Some(item) = stream.next().await {
            match item {
                Ok(info) => {
                    if let Some(error) = info.error {
                        bail!("{}", error)
                    } else {
                        let CreateImageInfo {
                            id,
                            status,
                            progress_detail,
                            ..
                        } = info;
                        let (current, expected) = match progress_detail {
                            None => (None, None),
                            Some(detail) => (detail.current, detail.total),
                        };

                        // We create task ids based on the layer id and status
                        // to fit with our progress events.
                        let (id, message) =
                            if let (Some(id), Some(status)) = (id.clone(), status.clone()) {
                                let (id, message) = if status == "Pulling fs layer"
                                    || status == "Waiting"
                                    || status.starts_with("Verifying")
                                    || status.ends_with(" complete")
                                {
                                    // Ignore these events, they are not that useful and complicate progress reporting
                                    (None, None)
                                } else if status == "Downloading" {
                                    (
                                        Some(format!("download-docker-layer-{}", id)),
                                        Some(format!("Downloading: {}", id)),
                                    )
                                } else if status == "Extracting" {
                                    (
                                        Some(format!("extract-docker-layer-{}", id)),
                                        Some(format!("Extracting: {}", id)),
                                    )
                                } else {
                                    (Some(id), Some(status))
                                };
                                (id, message)
                            } else {
                                (id, status)
                            };

                        if id.is_some() || message.is_some() {
                            events::publish(
                                "progress",
                                ProgressEvent {
                                    parent: parent.clone(),
                                    id,
                                    message,
                                    current,
                                    expected,
                                    ..Default::default()
                                },
                            )
                        }
                    }
                }
                Err(error) => match error {
                    bollard::errors::Error::DockerResponseNotFoundError { .. } => {
                        bail!("Unable to find Docker image '{}'", image)
                    }
                    _ => bail!("{}", error),
                },
            }
        }

        // Create a container to obtain manifest from
        let container_name: String = rand::thread_rng()
            .sample_iter(&rand::distributions::Alphanumeric)
            .take(24)
            .map(char::from)
            .collect();
        let response = docker
            .create_container(
                Some(bollard::container::CreateContainerOptions {
                    name: &container_name,
                }),
                bollard::container::Config {
                    image: Some(image.clone()),
                    cmd: Some(vec!["manifest".to_string()]),
                    ..Default::default()
                },
            )
            .await?;
        if !response.warnings.is_empty() {
            for warning in response.warnings {
                tracing::warn!("When creating container: {}", warning);
            }
        }

        // Start the container
        docker
            .start_container(
                &container_name,
                None::<bollard::container::StartContainerOptions<String>>,
            )
            .await?;

        // Capture the container output into `manifest`
        let mut stream = docker.logs::<String>(
            &container_name,
            Some(bollard::container::LogsOptions {
                follow: true,
                stderr: true,
                stdout: true,
                ..Default::default()
            }),
        );
        let mut stdout = vec![];
        let mut stderr = vec![];
        while let Some(output) = stream.next().await {
            if let Ok(output) = output {
                match output {
                    bollard::container::LogOutput::StdOut { message } => {
                        stdout.extend_from_slice(&message)
                    }
                    bollard::container::LogOutput::StdErr { message } => {
                        stderr.extend_from_slice(&message)
                    }
                    _ => {}
                }
            }
        }

        // Remove the container so it does not pollute the user's
        // container list.
        docker
            .remove_container(
                &container_name,
                Some(RemoveContainerOptions {
                    force: true,
                    ..Default::default()
                }),
            )
            .await?;

        if !stderr.is_empty() {
            tracing::warn!("{}", std::str::from_utf8(&stderr)?);
        }

        let json = if !stdout.is_empty() {
            match std::str::from_utf8(&stdout) {
                Ok(stdout) => stdout,
                Err(error) => bail!("Error converting stream to UTF8: {}", error),
            }
        } else {
            bail!(
                "No output from Docker container manifest command; is {} a Stencila plugin?",
                image
            )
        };

        // Load and write the plugin file
        let mut plugin = Plugin::load(json)?;
        plugin.installation = Some(PluginInstallation::Docker);
        Plugin::replace(&name, &plugin)?;
        Ok(plugin)
    }

    /// Add a plugin as a soft link to a directory on the current machine
    ///
    /// # Arguments
    ///
    /// - `path`: Local file system path to the directory
    #[cfg(any(feature = "plugins-link"))]
    pub fn install_link(path: &str) -> Result<Plugin> {
        // Make the path absolute (for symlink to work)
        let path = fs::canonicalize(&path)?;

        // Check that the path is a directory
        if !path.is_dir() {
            bail!("Path must be a directory")
        }

        // Check that the directory has a plugin file
        let plugin_file = path.join(Plugin::FILE_NAME);
        if !plugin_file.is_file() {
            bail!("Directory must contain a '{}' file", Plugin::FILE_NAME)
        }

        // Check that the plugin's file can be loaded
        let json = fs::read_to_string(plugin_file)?;
        let mut plugin = Plugin::load(&json)?;
        plugin.installation = Some(PluginInstallation::Link);
        let name = plugin.name.as_str();

        // Remove the plugin directory
        Plugin::remove(name)?;

        // Create the soft link
        let link = Plugin::dir(name)?;
        utils::fs::symlink_dir(path, link)?;

        Ok(plugin)
    }

    /// Upgrade a plugin
    pub async fn upgrade(
        spec: &str,
        installs: &[PluginInstallation],
        aliases: &HashMap<String, String>,
        plugins: &mut Plugins,
    ) -> Result<()> {
        let aliases = Plugin::merge_aliases(&plugins.aliases, aliases);
        let name_or_spec = Plugin::alias_to_name(spec, &aliases);
        let (_owner, name, _version) = Plugin::spec_to_parts(&name_or_spec);

        let plugin = match plugins.plugins.get(name) {
            None => {
                tracing::info!(
                    "Plugin is not installed or registered, will attempt to install using spec: {}",
                    spec
                );
                return Plugin::install(spec, installs, &aliases, plugins, None).await;
            }
            Some(plugin) => plugin.clone(),
        };

        let (installs, current_version) = match plugin.installation {
            Some(PluginInstallation::Link) => {
                tracing::info!(
                    "Plugin '{}' is installed as a local link so can not be upgraded",
                    plugin.name
                );
                return Ok(());
            }
            Some(install) => {
                tracing::debug!(
                    "Plugin '{}' will be upgraded from version '{}' installation '{}'",
                    plugin.name,
                    plugin.software_version,
                    install
                );
                (vec![install], Some(plugin.software_version))
            }
            None => {
                tracing::debug!("Plugin is not yet installed");
                (Vec::from(installs), None)
            }
        };

        Plugin::install(spec, &installs, &aliases, plugins, current_version).await?;

        tracing::info!("Upgraded plugin '{}'", spec);
        Ok(())
    }

    /// Upgrade a list of plugins
    pub async fn upgrade_list(
        list: Vec<String>,
        installs: &[PluginInstallation],
        aliases: &HashMap<String, String>,
        plugins: &mut Plugins,
    ) -> Result<()> {
        let list = if list.is_empty() {
            plugins
                .plugins
                .iter()
                .filter(|(.., plugin)| {
                    if let Some(install) = plugin.installation {
                        if install != PluginInstallation::Link {
                            return true;
                        }
                    }
                    false
                })
                .map(|(name, ..)| name.clone())
                .collect()
        } else {
            list
        };
        for spec in list {
            Plugin::upgrade(&spec, installs, aliases, plugins).await?;
        }
        Ok(())
    }

    /// Upgrade all installed plugins
    ///
    /// This is equivalent to calling `upgrade_list` with an empty list but
    /// requires fewer arguments. Intended for auto upgrades primarily.
    pub async fn upgrade_all(plugins: &mut Plugins) -> Result<()> {
        Plugin::upgrade_list(Vec::new(), &Vec::new(), &HashMap::new(), plugins).await
    }

    /// Uninstall a plugin
    ///
    /// Removes the plugin directory and marks it as not installed in the plugins
    /// in-memory store.
    pub fn uninstall(
        alias: &str,
        aliases: &HashMap<String, String>,
        plugins: &mut Plugins,
    ) -> Result<()> {
        let aliases = Plugin::merge_aliases(&plugins.aliases, aliases);
        let name = Plugin::alias_to_name(alias, &aliases);

        Plugin::remove(&name)?;
        plugins.uninstall(&name)?;

        Ok(())
    }

    /// Remove a list of plugins
    pub fn uninstall_list(
        list: Vec<String>,
        aliases: &HashMap<String, String>,
        plugins: &mut Plugins,
    ) -> Result<()> {
        for alias in list {
            match Plugin::uninstall(&alias, aliases, plugins) {
                Ok(_) => tracing::info!("Removed plugin {}", alias),
                Err(error) => bail!(error),
            }
        }
        Ok(())
    }

    /// Refresh a plugin
    pub async fn refresh(
        alias: &str,
        aliases: &HashMap<String, String>,
        plugins: &mut Plugins,
    ) -> Result<()> {
        let aliases = Plugin::merge_aliases(&plugins.aliases, aliases);
        let name = Plugin::alias_to_name(alias, &aliases);

        let plugin = plugins.plugins.get(&name);

        // If the plugin is linked then there is nothing more to do
        // (we don't want to write anything into the directory)
        if let Some(plugin) = plugin {
            if let Some(PluginInstallation::Link) = plugin.installation {
                return Ok(());
            }
        }

        // Load the plugin's latest manifest from its URL
        let url = match plugins.registry.get(&name) {
            None => bail!("No plugin registered with alias or name '{}'", alias),
            Some(url) => url,
        };
        let json = reqwest::get(url).await?.error_for_status()?.text().await?;
        let latest = Plugin::load(&json)?;

        let mut plugin = if let Some(plugin) = plugin {
            // This plugin is previously known.
            if plugin.installation.is_some() {
                // Installed, so if the latest version is greater than the current then, indicate
                // it can be upgraded using `next`, otherwise return current manifest as is
                let mut plugin = plugin.clone();
                if Version::parse(&latest.software_version)?
                    > Version::parse(&plugin.software_version)?
                {
                    plugin.next = Some(Box::new(latest));
                }
                plugin
            } else {
                // No installed so return latest manifest
                latest
            }
        } else {
            // This plugin is previously "unknown" locally so just use the latest
            latest
        };

        // Write the plugin to disk and update in memory
        plugin.refreshed = Some(Utc::now());
        Plugin::write(&name, &plugin)?;
        plugins.plugins.insert(name, plugin);

        tracing::info!("Refreshed plugin {}", alias);
        Ok(())
    }

    /// Refresh a list of plugins
    pub async fn refresh_list(
        list: Vec<String>,
        aliases: &HashMap<String, String>,
        plugins: &mut Plugins,
    ) -> Result<()> {
        let list = if list.is_empty() {
            plugins.registry.keys().cloned().collect::<Vec<String>>()
        } else {
            list
        };

        for alias in list {
            if let Err(error) = Plugin::refresh(&alias, aliases, plugins).await {
                tracing::warn!("While refreshing plugin {}: {}", alias, error)
            }
        }
        Ok(())
    }

    /// Serve a plugin and return a client that can be used to send it
    /// JSON-RPC requests
    #[tracing::instrument(skip(self))]
    pub fn instance(&self) -> Result<PluginInstance> {
        tracing::debug!("Serving plugin '{}'", self.name);

        let client = self.client()?;

        Ok(PluginInstance {
            plugin: self.name.clone(),
            client,
        })
    }

    /// Create a client for a plugin based on its installation
    fn client(&self) -> Result<Client> {
        let installation = match self.installation {
            Some(installation) => installation,
            None => bail!(Error::PluginNotInstalled {
                plugin: self.name.clone(),
            }),
        };

        let name = self.name.as_str();
        match installation {
            PluginInstallation::Docker => Plugin::client_docker(name),
            PluginInstallation::Binary => Plugin::client_binary(name),
            PluginInstallation::Javascript => Plugin::client_javascript(name, installation),
            PluginInstallation::Python => Plugin::client_python(name),
            PluginInstallation::R => Plugin::client_r(name),
            PluginInstallation::Link => Plugin::client_link(name),
        }
    }

    /// Create a client for a Docker installation of a plugin
    ///
    /// # Arguments
    ///
    /// - `name`: The name of the plugin
    fn client_docker(_name: &str) -> Result<Client> {
        todo!("support for Docker plugin clients")
    }

    /// Create a client for a binary installation of a plugin
    ///
    /// # Arguments
    ///
    /// - `name`: The name of the plugin
    fn client_binary(name: &str) -> Result<Client> {
        let binary_path = Plugin::dir(name)?.join(&name);
        let command = vec![binary_path.display().to_string(), "serve".to_string()];
        Ok(Client::Stdio(ClientStdio::new(command)?))
    }

    /// Create a client for a JavaScript package installation of a plugin
    ///
    /// Gets the `bin` path of a Javascript package and runs `node` on it.
    /// For installed Javascript packages uses the symlink created at the time
    /// of install.
    /// For linked Javascript packages, gets the `package.json` file of the package,
    /// and extracts its `bin` property.
    ///
    /// # Arguments
    ///
    /// - `name`: The name of the plugin
    /// - `installation`: The installation method for the plugin (should be `Javascript` or `Link`)
    fn client_javascript(name: &str, installation: PluginInstallation) -> Result<Client> {
        let dir = Plugin::dir(name)?;
        let bin = match installation {
            PluginInstallation::Javascript => name.to_string(),
            PluginInstallation::Link => {
                let json = match fs::read_to_string(dir.join("package.json")) {
                    Ok(json) => json,
                    Err(error) => bail!(
                        "Unable to read package.json file for plugin '{}': {}",
                        name,
                        error
                    ),
                };

                let package: HashMap<String, serde_json::Value> = match serde_json::from_str(&json)
                {
                    Ok(package) => package,
                    Err(error) => bail!(
                        "While parsing `package.json` file for plugin '{}': {}",
                        name,
                        error
                    ),
                };

                let bin = match package.get("bin") {
                    Some(bin) => bin,
                    None => bail!(
                        "The package.json file for plugin '{}' appears to be missing a `bin` entry",
                        name
                    ),
                };

                let bin = match bin {
                    serde_json::Value::String(bin) => bin,
                    serde_json::Value::Object(obj) => {
                        match obj.get(name) {
                            Some(bin) => bin.as_str().ok_or_else(|| eyre!("The `{}` property of the `bin` property of the `package.json` file for plugin '{}' should be a string", name, name))?,
                            None => bail!("The `bin` property of the `package.json` file for plugin '{}' does not have an '{}' entry", name, name)
                        }
                    },
                    _ => bail!("Unexpected value type for the `bin` property of the `package.json` file for plugin '{}'", name)
                };

                bin.to_string()
            }
            _ => bail!("Unexpected plugin installation type `{}`", installation),
        };

        let bin = dir.join(bin).display().to_string();

        let command = vec!["node".to_string(), bin, "serve".to_string()];
        Ok(Client::Stdio(ClientStdio::new(command)?))
    }

    /// Create a client for a Python package installation of a plugin
    ///
    /// # Arguments
    ///
    /// - `name`: The name of the plugin
    fn client_python(_name: &str) -> Result<Client> {
        todo!("support for Python package clients")
    }

    /// Create a client for a R package installation of a plugin
    ///
    /// # Arguments
    ///
    /// - `name`: The name of the plugin
    fn client_r(_name: &str) -> Result<Client> {
        todo!("support for R package clients")
    }

    /// Create a client for a link installation of a plugin
    ///
    /// Inspects the symlinked folder to try to determine the type of plugin
    /// that is linked to e.g. `javascript` or `python`. Then dispatches to
    /// the appropriate `client_xxx` method e.g `client_javascript`.
    ///
    /// # Arguments
    ///
    /// - `name`: The name of the plugin
    fn client_link(name: &str) -> Result<Client> {
        let dir = Plugin::dir(name)?;
        if dir.join("package.json").exists() {
            Plugin::client_javascript(name, PluginInstallation::Link)
        } else {
            todo!("Unable to create a client for linked plugin '{}'. Please create an issue at https://github.com/stencila/stencila if you would like this implemented.", name)
        }
    }
}

/// An in-memory store for an implementation of a method
#[derive(Debug)]
struct MethodImplem {
    /// The name of the plugin which provides the implementation
    plugin: String,

    /// The plugin's JSON Schema which describes the method
    schema: serde_json::Value,

    /// The plugin's JSON Schema compiled for faster validation
    compiled_schema: JSONSchema,
}

/// A record of a plugin instance
#[derive(Debug, Serialize)]
pub struct PluginInstance {
    /// The name of the plugin that this is an instance of
    plugin: String,

    /// The client for the plugin
    client: Client,
}

/// An in-memory store of plugins and the methods that they implement
#[derive(Debug, Default, Deserialize)]
#[serde(default)]
pub struct Plugins {
    /// The global aliases for plugin names
    /// Can be overridden by local config.
    pub aliases: HashMap<String, String>,

    /// The global registry of plugins that maps their
    /// name to their manifest file
    pub registry: HashMap<String, String>,

    /// The plugins manifests
    pub plugins: HashMap<String, Plugin>,

    /// The methods that are implemented by plugins
    #[serde(skip)]
    methods: HashMap<String, Vec<MethodImplem>>,

    /// The current instances of plugins
    #[serde(skip)]
    instances: HashMap<String, PluginInstance>,
}

impl Plugins {
    /// Create an empty plugins store
    pub fn new() -> Self {
        Self::default()
    }

    /// Load the registry, aliases, and any plugin manifests
    pub fn load() -> Result<Self> {
        let mut plugins: Plugins = serde_json::from_str(include_str!("../../../plugins.json"))?;

        // Create an entry for all plugins in the registry
        for (name, _url) in plugins.registry.clone() {
            let plugin = Plugin {
                name,
                ..Default::default()
            };
            plugins.add(plugin)?
        }

        // Add / update using any manifests that are stored locally in plugins directory
        let dir = plugins_dir(true)?;
        for entry in fs::read_dir(dir)? {
            let entry = entry?;
            let path = entry.path();
            if path.is_dir() {
                let name = path.display().to_string();
                // Check this directory actually has a plugin file
                if Plugin::file(&name)?.exists() {
                    let plugin = Plugin::read(&name)?;
                    plugins.add(plugin)?
                }
            }
        }

        Ok(plugins)
    }

    /// Add / update a plugin
    ///
    /// Compiles the JSON Schema for each item in its `featureList`.
    pub fn add(&mut self, plugin: Plugin) -> Result<()> {
        let name = plugin.name.as_str();

        for feature in &plugin.feature_list {
            let title = match feature.get("title") {
                None => bail!("JSON Schema is missing 'title' property"),
                Some(serde_json::Value::String(value)) => value.clone(),
                Some(value) => value.to_string(),
            };

            // Compile the JSON Schema for this feature
            match JSONSchema::compile(feature) {
                Ok(compiled_schema) => {
                    self.methods
                        .entry(title)
                        .or_insert_with(Vec::new)
                        .push(MethodImplem {
                            plugin: name.into(),
                            schema: feature.clone(),
                            compiled_schema,
                        });
                }
                Err(error) => {
                    tracing::warn!(
                        "Error compiling schema for method '{}' of plugin '{}'; will ignore, please let the plugin maintainer know: {}",
                        title, name, error
                    )
                }
            };
        }

        self.plugins.insert(name.into(), plugin);

        Ok(())
    }

    /// Uninstall a plugin
    ///
    /// Does not remove the plugin, simply marks it as not installed.
    pub fn uninstall(&mut self, name: &str) -> Result<()> {
        if let Some(mut plugin) = self.plugins.get_mut(name) {
            plugin.installation = None
        } else {
            tracing::warn!("Plugin with name '{}' is not known", name)
        }
        Ok(())
    }

    /// List all the installed plugins
    ///
    /// Populates the alias of the plugin based on the passed aliases map
    pub fn list_plugins(&self, aliases: &HashMap<String, String>) -> Vec<Plugin> {
        let aliases = Plugin::merge_aliases(&self.aliases, aliases);

        let mut plugins = self
            .plugins
            .iter()
            .map(|(name, plugin)| Plugin {
                alias: Some(Plugin::name_to_alias(name, &aliases)),
                ..plugin.clone()
            })
            .collect::<Vec<Plugin>>();

        plugins.sort_by(|a, b| a.alias.cmp(&b.alias));
        plugins
    }

    /// Display an individual plugin
    pub fn display_plugin(
        &self,
        alias: &str,
        aliases: &HashMap<String, String>,
    ) -> Result<(Plugin, String)> {
        let aliases = Plugin::merge_aliases(&self.aliases, aliases);
        let name = Plugin::alias_to_name(alias, &aliases);

        Ok(match self.plugins.get(&name) {
            None => bail!("Plugin with name or alias '{}' is not loaded", alias),
            Some(plugin) => (plugin.clone(), plugin.display()?),
        })
    }

    /// Create a Markdown table of all the registered and/or installed plugins
    pub fn display_plugins(plugins: &[Plugin]) -> Result<String> {
        if plugins.is_empty() {
            return Ok("No plugins registered or installed.".to_string());
        }

        let head = r#"
| ----- | ------ | --------- | --------- | ----------- | ---------- |
|       | Plugin | Installed | Latest    | Description | Refreshed  |
| :---- | :----- | --------: | --------: | :---------- | ---------: |
    "#
        .trim();
        let body = plugins
            .iter()
            .map(|plugin| {
                let Plugin {
                    alias,
                    name,
                    software_version,
                    installation,
                    description,
                    next,
                    refreshed,
                    ..
                } = plugin.clone();
                let latest = match next {
                    // If not installed, then this is the latest known version
                    None => {
                        if installation.is_none() {
                            software_version.clone()
                        } else {
                            String::new()
                        }
                    }
                    // Use the version in `next`.
                    Some(next) => next.software_version,
                };
                let installation = match installation {
                    None => String::new(),
                    Some(value) => format!("{} *{}*", software_version, value),
                };
                let refreshed = match refreshed {
                    None => String::new(),
                    Some(refreshed) => {
                        use std::convert::TryFrom;
                        let duration = Utc::now() - refreshed;
                        format_duration(std::time::Duration::new(
                            u64::try_from(duration.num_seconds())
                                .expect("Unable to convert i64 to u64"),
                            0,
                        ))
                        .to_string()
                            + " ago"
                    }
                };
                format!(
                    "| **{}** | {} | {} | {} | {} | {} |",
                    alias.unwrap_or_else(|| name.clone()),
                    name,
                    installation,
                    latest,
                    description,
                    refreshed
                )
            })
            .collect::<Vec<String>>()
            .join("\n");
        let foot = "|-";
        Ok(format!("{}\n{}\n{}\n", head, body, foot))
    }

    /// Create a Markdown document describing a method and the plugins that implement it
    pub fn display_method(&self, name: &str) -> Result<String> {
        let plugins = match self.methods.get(name) {
            None => bail!("No implementations for method `{}`", name),
            Some(implems) => implems
                .iter()
                .map(|method_implem| {
                    serde_json::json!({
                        "name": name,
                        "schema": method_implem.schema
                    })
                })
                .collect::<serde_json::Value>(),
        };

        let method = &serde_json::json!({ "name": name, "plugins": plugins });

        let md = {
            let template = r#"
# {{name}}

{{#each plugins}}
## {{name}}

{{#with schema }}
{{description}}

{{#each properties}}
- **{{@key}}**: *{{type}}* : {{description}}{{/each}}
{{/with}}
{{/each}}
    "#
            .trim();
            use handlebars::Handlebars;
            let hb = Handlebars::new();
            hb.render_template(template, &method)?
        };
        Ok(md)
    }

    /// Create a Markdown table of all the registered aliases
    pub fn display_aliases(&self, aliases: &HashMap<String, String>) -> Result<String> {
        let aliases = Plugin::merge_aliases(&self.aliases, aliases);
        if aliases.is_empty() {
            return Ok("No aliases registered".into());
        }

        let head = r#"
| -------- | -------- |
| Alias    | Plugin   |
| :------- | :------- |
    "#
        .trim();
        let body = aliases
            .iter()
            .map(|(alias, plugin)| format!("| {} | {} |", alias, plugin))
            .collect::<Vec<String>>()
            .join("\n");
        let foot = "|-";
        Ok(format!("{}\n{}\n{}\n", head, body, foot))
    }

    /// Create a Markdown table of all the registered methods
    pub fn display_methods(&self) -> Result<String> {
        if self.methods.is_empty() {
            return Ok("No methods registered.".into());
        }

        let head = r#"
| -------- | -------- |
| Method   | Plugins  |
| :------- | :------- |
    "#
        .trim();
        let body = self
            .methods
            .iter()
            .map(|method| {
                let (name, implems) = method;
                let plugins = implems
                    .iter()
                    .map(|plugin| plugin.plugin.clone())
                    .collect::<Vec<String>>()
                    .join(", ");
                format!("| {} | {} |", name, plugins)
            })
            .collect::<Vec<String>>()
            .join("\n");
        let foot = "|-";
        Ok(format!("{}\n{}\n{}\n", head, body, foot))
    }

    /// Delegate a method call to a particular plugin
    ///
    /// This function,
    ///
    /// - checks that there is a known plugin with the name
    /// - if necessary creates an instance of the plugin
    /// - delegates the call to that instance
    #[tracing::instrument(skip(self, params))]
    pub async fn delegate_to_plugin(
        &mut self,
        plugin: &str,
        method: Method,
        params: HashMap<String, serde_json::Value>,
    ) -> Result<serde_json::Value> {
        tracing::debug!(
            "Delegating method '{}' to plugin '{}'",
            method.to_string(),
            plugin
        );

        let plugin = match self.plugins.get(plugin) {
            Some(plugin) => plugin,
            None => bail!("Unknown plugin {}", plugin),
        };

        // Get or create instance for plugin
        let instance = match self.instances.get_mut(&plugin.name) {
            Some(instance) => instance,
            None => {
                let instance = plugin.instance()?;
                self.instances.insert(plugin.name.clone(), instance);
                self.instances.get_mut(&plugin.name).unwrap()
            }
        };

        // "Call" the instance client
        return instance.client.call(method, params).await;
    }

    /// Delegate a method call to any of the plugins
    ///
    /// This function,
    ///
    /// - checks that the method is implemented by at least one
    ///   registered plugin
    /// - finds the first plugin for which the provided
    ///   parameters are valid for that method (with respect to the method's schema)
    /// - delegates the call to that plugin
    #[tracing::instrument(skip(self, params))]
    pub async fn delegate(
        &mut self,
        method: Method,
        params: HashMap<String, serde_json::Value>,
    ) -> Result<serde_json::Value> {
        tracing::debug!("Delegating method '{}'", method.to_string());

        // Get the implementations for the method
        let implems = match self.methods.get(&method.to_string()) {
            Some(method) => method,
            None => bail!(Error::UndelegatableMethod { method }),
        };

        // Find the first implementation for which the params validate against
        // the method schema
        let params_value = &serde_json::to_value(&params)?;
        let mut plugin: Option<String> = None;
        for implem in implems {
            if implem.compiled_schema.is_valid(params_value) {
                plugin = Some(implem.plugin.clone());
                break;
            }
        }

        match plugin {
            Some(plugin) => self.delegate_to_plugin(&plugin, method, params).await,
            None => bail!(Error::UndelegatableCall { method, params }),
        }
    }
}

/// A global plugins store
///
/// Previously, we loaded plugins on startup and then passed them to various
/// functions in other modules on each invocation (for delegation to each plugin).
/// However, this proved complicated for things like delegating method calls from
/// within documents. For that reason, we introduced this global.
pub static PLUGINS: Lazy<Mutex<Plugins>> =
    Lazy::new(|| Mutex::new(Plugins::load().expect("Unable to load plugins")));

/// Delegate a method call to a plugin
///
/// This is a convenience function that locks the global
/// `PLUGINS` store, delegates a call to it and transforms
/// the result into a `Node`.
pub async fn delegate(method: Method, params: HashMap<String, serde_json::Value>) -> Result<Node> {
    let value = PLUGINS.lock().await.delegate(method, params).await?;
    let node = serde_json::from_value(value)?;
    Ok(node)
}

pub mod config {
    use super::*;
    use defaults::Defaults;
    use validator::Validate;
    /// Plugins
    ///
    /// Configuration settings for plugin installation and management
    #[derive(Debug, Defaults, PartialEq, Clone, JsonSchema, Deserialize, Serialize, Validate)]
    #[serde(default)]
    #[schemars(deny_unknown_fields)]
    pub struct PluginsConfig {
        /// The order of preference of plugin installation method.
        #[def = "PluginInstallation::iter().collect()"]
        pub installations: Vec<PluginInstallation>,

        /// The local plugin aliases that extends and/or override those in the
        /// global aliases at <https://github.com/stencila/stencila/blob/master/plugins.json>
        pub aliases: HashMap<String, String>,
    }
}

#[cfg(feature = "cli")]
pub mod commands {
    use super::*;
    use crate::config::CONFIG;
    use async_trait::async_trait;
    use cli_utils::{result, Result, Run};
    use clap::Parser;

    #[derive(Parser)]
    #[clap(
        about = "Manage plugins",
        
        setting = AppSettings::VersionlessSubcommands
    )]
    pub struct Command {
        #[clap(subcommand)]
        pub action: Action,
    }

    #[derive(Parser)]
    #[clap(
        setting = AppSettings::DeriveDisplayOrder
    )]
    pub enum Action {
        #[clap(
            about = "List installed plugins",
            
        )]
        List,

        Show(Show),
        Install(Install),
        Link(Link),
        Upgrade(Upgrade),
        Uninstall(Uninstall),
        Unlink(Unlink),
        Refresh(Refresh),

        #[clap(
            about = "List registered plugin aliases",
            
        )]
        Aliases,

        #[clap(
            about = "List current plugin instances",
            
        )]
        Instances,

        Methods(Methods),

        Delegate(Delegate),

        #[clap(
            about = "Get the JSON Schema for plugins",
            
        )]
        Schema,
    }

    #[derive(Parser)]
    #[clap(
        about = "Show the details of an installed plugin",
        setting = AppSettings::DeriveDisplayOrder,
        
    )]
    pub struct Show {
        /// The name of the plugin to show
        #[clap()]
        pub plugin: String,
    }

    #[derive(Debug, Default, Parser)]
    #[clap(
        about = "Install one or more plugins",
        setting = AppSettings::DeriveDisplayOrder,
        
    )]
    pub struct Install {
        /// Install plugins as Docker images
        #[clap(short, long)]
        pub docker: bool,

        /// Install plugins as binaries
        #[clap(short, long)]
        pub binary: bool,

        /// Install plugins as Javascript packages
        #[clap(short, long)]
        pub javascript: bool,

        /// Install plugins as Python packages
        #[clap(short, long)]
        pub python: bool,

        /// Install plugins as R packages
        #[clap(short, long)]
        pub r: bool,

        /// Install plugins as soft links
        #[clap(short, long)]
        pub link: bool,

        /// The names or aliases of plugins to add
        #[clap(required = true, multiple = true)]
        pub plugins: Vec<String>,
    }

    #[derive(Parser)]
    #[clap(
        about = "Link to a local plugins",
        setting = AppSettings::DeriveDisplayOrder,
        
    )]
    pub struct Link {
        /// The path of a plugin directory
        #[clap()]
        pub path: String,
    }

    #[derive(Parser)]
    #[clap(
        about = "Upgrade one of more plugins",
        setting = AppSettings::DeriveDisplayOrder,
        
    )]
    pub struct Upgrade {
        /// The names or aliases of plugins to upgrade
        /// (omit to upgrade all plugins)
        #[clap(multiple = true)]
        pub plugins: Vec<String>,
    }

    #[derive(Parser)]
    #[clap(
        about = "Uninstall one or more plugins",
        setting = AppSettings::DeriveDisplayOrder,
        
    )]
    pub struct Uninstall {
        /// The names or aliases of plugins to uninstall
        #[clap(required = true, multiple = true)]
        pub plugins: Vec<String>,
    }

    #[derive(Parser)]
    #[clap(
        about = "Unlink a local plugins",
        setting = AppSettings::DeriveDisplayOrder,
        
    )]
    pub struct Unlink {
        /// The name of the plugin to unlink
        #[clap()]
        pub plugin: String,
    }

    #[derive(Parser)]
    #[clap(
        about = "Refresh details of one or more plugins",
        setting = AppSettings::DeriveDisplayOrder,
        
    )]
    pub struct Refresh {
        /// The names or aliases of plugins to refresh (leave blank for all)
        #[clap(required = false, multiple = true)]
        pub plugins: Vec<String>,
    }

    #[derive(Parser)]
    #[clap(
        about = "List methods and the plugins that implement them",
        setting = AppSettings::DeriveDisplayOrder,
        
    )]
    pub struct Methods {
        /// The name of the method to display
        #[clap()]
        pub method: Option<String>,
    }
    impl Methods {
        async fn run_with(&self, plugins: &mut Plugins) -> Result {
            let Methods { method } = self;

            let content = match method {
                None => plugins.display_methods()?,
                Some(method) => plugins.display_method(method)?,
            };
            result::content("md", &content)
        }
    }

    #[derive(Parser)]
    #[clap(
        about = "Delegate a method call to any, or a particular, plugin",
        setting = AppSettings::DeriveDisplayOrder,
        
    )]
    pub struct Delegate {
        /// The method to call
        #[clap(possible_values = Method::VARIANTS, case_insensitive = true)]
        method: Method,

        /// The plugin to delegate to
        plugin: Option<String>,

        /// Method parameters (after `--`) as strings (e.g. `format=json`) or JSON (e.g. `node:='{"type":...}'`)
        #[clap(raw(true))]
        params: Vec<String>,
    }
    impl Delegate {
        async fn run_with(&self, plugins: &mut Plugins) -> Result {
            let method = self.method;
            let params = cli_utils::args::params(&self.params);
            let result = match &self.plugin {
                Some(plugin) => plugins.delegate_to_plugin(plugin, method, params).await?,
                None => plugins.delegate(method, params).await?,
            };
            result::value(&result)
        }
    }

    #[async_trait]
    impl Run for Command {
        async fn run(&self) -> Result {
            let config::PluginsConfig {
                aliases,
                installations,
            } = &CONFIG.lock().await.plugins;

            let plugins = &mut *PLUGINS.lock().await;

            match &self.action {
                Action::List => {
                    let list = plugins.list_plugins(aliases);
                    let content = Plugins::display_plugins(&list)?;
                    result::new("md", &content, list)
                }
                Action::Show(action) => {
                    let Show { plugin } = action;

                    let (plugin, content) = plugins.display_plugin(plugin, aliases)?;
                    result::new("md", &content, plugin)
                }
                Action::Install(action) => {
                    let mut installs = vec![];
                    if action.docker {
                        installs.push(PluginInstallation::Docker)
                    }
                    if action.binary {
                        installs.push(PluginInstallation::Binary)
                    }
                    if action.javascript {
                        installs.push(PluginInstallation::Javascript)
                    }
                    if action.python {
                        installs.push(PluginInstallation::Python)
                    }
                    if action.r {
                        installs.push(PluginInstallation::R)
                    }
                    if action.link {
                        installs.push(PluginInstallation::Link)
                    }

                    let installs = if installs.is_empty() {
                        &installations
                    } else {
                        &installs
                    };

                    Plugin::install_list(action.plugins.clone(), installs, aliases, plugins)
                        .await?;
                    result::nothing()
                }
                Action::Link(action) => {
                    const INSTALLS: &[PluginInstallation] = &[PluginInstallation::Link];
                    Plugin::install(&action.path, INSTALLS, aliases, plugins, None).await?;
                    result::nothing()
                }
                Action::Upgrade(action) => {
                    Plugin::upgrade_list(action.plugins.clone(), installations, aliases, plugins)
                        .await?;
                    result::nothing()
                }
                Action::Uninstall(action) => {
                    Plugin::uninstall_list(action.plugins.clone(), aliases, plugins)?;
                    result::nothing()
                }
                Action::Unlink(action) => {
                    Plugin::uninstall(&action.plugin, aliases, plugins)?;
                    result::nothing()
                }
                Action::Refresh(action) => {
                    Plugin::refresh_list(action.plugins.clone(), aliases, plugins).await?;
                    result::nothing()
                }
                Action::Aliases => {
                    let md = plugins.display_aliases(aliases)?;
                    result::content("md", &md)
                }
                Action::Instances => result::value(&plugins.instances),
                Action::Methods(methods) => methods.run_with(plugins).await,
                Action::Delegate(delegate) => delegate.run_with(plugins).await,
                Action::Schema => {
                    let value = Plugin::schema()?;
                    result::value(value)
                }
            }
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[tokio::test]
    async fn test_cli() -> Result<()> {
        // These tests don't do anything other test that
        // actions run with expected `Ok` or `Err`.

        use super::commands::*;
        use cli_utils::Run;

        Command {
            action: Action::List,
        }
        .run()
        .await?;

        Command {
            action: Action::Show(Show {
                plugin: "foo".to_string(),
            }),
        }
        .run()
        .await
        .expect_err("Expected an error!");

        Command {
            action: Action::Link(Link {
                path: "../foo".to_string(),
            }),
        }
        .run()
        .await
        .expect_err("Expected an error!");

        Ok(())
    }

    #[ignore]
    #[tokio::test]
    async fn test_cli_slow() -> Result<()> {
        // Slow tests that are usually not run

        use super::commands::*;
        use cli_utils::Run;

        Command {
            action: Action::Install(Install {
                plugins: vec![],
                ..Default::default()
            }),
        }
        .run()
        .await?;

        Command {
            action: Action::Upgrade(Upgrade {
                plugins: vec!["jesta".to_string()],
            }),
        }
        .run()
        .await?;

        Command {
            action: Action::Uninstall(Uninstall { plugins: vec![] }),
        }
        .run()
        .await?;

        Ok(())
    }
}
