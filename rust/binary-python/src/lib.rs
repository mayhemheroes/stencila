use std::path::Path;

use binary::{
    binary_clone_box,
    common::{
        async_trait::async_trait,
        eyre::{bail, Result},
    },
};
pub use binary::{Binary, BinaryInstallation, BinaryTrait};
use binary_asdf::AsdfBinary;

mod versions;

pub struct PythonBinary;

#[async_trait]
impl BinaryTrait for PythonBinary {
    fn spec(&self) -> Binary {
        Binary::new("python3", &["python"], &["C:\\Python3*"])
    }

    binary_clone_box!();

    async fn versions(&self, _os: &str) -> Result<Vec<String>> {
        Ok(self.versions_update_maybe(
            versions::VERSIONS,
            self.versions_github_tags("python", "cpython").await,
        ))
    }

    async fn install_version(
        &self,
        version: &str,
        dest: &Path,
        os: &str,
        arch: &str,
    ) -> Result<()> {
        // On Linux or Mac use `asdf` to install
        if os == "linux" || os == "macos" {
            AsdfBinary::install("python", version).await
        } else if os == "windows" {
            // On Windows uses Python's "embeddable" distributions intended for this purpose.
            let url = format!(
                "https://www.python.org/ftp/python/{version}/python-{version}-embed-",
                version = version
            ) + match arch {
                "x86" => "win32.zip",
                "x86_64" => "amd64.zip",
                _ => bail!("Unhandled arch '{}", arch),
            };
            let archive = self.download(&url, None, None).await?;

            self.extract(&archive, dest, 0)?;
            self.executables(dest, &["bin/python3", "python3.exe"])
        } else {
            bail!(
                "Installation of `python` for operating system `{}` is not supported",
                os
            );
        }
    }
}
