use std::{fs, io::Write, path::PathBuf};

use fs_utils::open_file_600;
use hmac::Mac;

use kernel::common::{
    defaults::Defaults,
    eyre::{eyre, Result},
    serde::{Deserialize, Serialize},
    serde_json,
};

use crate::{
    dirs::{data_dir, runtime_dirs},
    messages::HmacSha256,
};

/// A Jupyter kernel connection
///
/// See https://jupyter-client.readthedocs.io/en/stable/kernels.html#connection-files
#[derive(Debug, Clone, Defaults, Deserialize, Serialize)]
#[serde(default, crate = "kernel::common::serde")]
pub struct JupyterConnection {
    /// The path to the connection file
    #[serde(skip_deserializing)]
    pub(crate) path: PathBuf,

    /// The transport protocol to use for ZeroMQ
    #[def = "\"tcp\".to_string()"]
    transport: String,

    /// The IP address of the kernel
    #[def = "\"127.0.0.1\".to_string()"]
    ip: String,

    /// The message signature scheme
    #[def = "\"hmac-sha256\".to_string()"]
    signature_scheme: String,

    /// The HMAC key
    key: String,

    /// The control port
    #[def = "JupyterConnection::pick_port()"]
    control_port: u16,

    /// The shell port
    #[def = "JupyterConnection::pick_port()"]
    shell_port: u16,

    /// The stdin port
    #[def = "JupyterConnection::pick_port()"]
    stdin_port: u16,

    /// The heartbeat port
    #[def = "JupyterConnection::pick_port()"]
    hb_port: u16,

    /// The iopub port
    #[def = "JupyterConnection::pick_port()"]
    iopub_port: u16,
}

impl JupyterConnection {
    /// Create a new connection
    ///
    /// # Arguments
    ///
    /// `id`: The id of the kernel
    pub fn new(id: &str) -> Self {
        let name = format!("stencila-{}.json", id);
        let path = runtime_dirs()
            .first()
            .expect("Should always be at least one runtime directory")
            .join(name);
        let key = key_utils::generate("sjk");

        JupyterConnection {
            path,
            key,
            ..Default::default()
        }
    }

    /// Pick a port to use for one of the connection sockets
    pub fn pick_port() -> u16 {
        portpicker::pick_unused_port().expect("There are no free ports")
    }

    /// Read a connection file from disk
    pub fn read_file(id: &str) -> Result<Self> {
        let path = data_dir()
            .join("runtime")
            .join(format!("kernel-{}.json", id));
        let file = fs::File::open(&path)?;
        let mut connection: Self = serde_json::from_reader(file)?;
        connection.path = path;
        Ok(connection)
    }

    /// Write the connection file to disk
    ///
    /// The file is created with permissions that only allow the current user to read the file.
    /// On Mac and Linux using mode `600` and on Windows using share mode `0`.
    pub fn write_file(&self) -> Result<()> {
        if let Some(dir) = self.path.parent() {
            fs::create_dir_all(dir)?;
        }

        let mut file = open_file_600(&self.path)?;
        let json = serde_json::to_string_pretty(&self)?;
        file.write_all(json.as_bytes())?;

        Ok(())
    }

    /// Remove the connection file from disk
    pub fn remove_file(&self) -> Result<()> {
        if self.path.exists() {
            fs::remove_file(&self.path)?
        }
        Ok(())
    }

    /// Get the HMAC for the connection
    pub fn hmac(&self) -> Result<HmacSha256> {
        HmacSha256::new_from_slice(self.key.as_bytes())
            .map_err(|error| eyre!("When generating HMAC: {}", error))
    }

    /// Get the base URI for the connection
    pub fn base_url(&self) -> String {
        format!("{}://{}:", transport = self.transport, ip = self.ip)
    }

    /// Get the URL of the control channel
    pub fn _control_url(&self) -> String {
        [self.base_url(), self.control_port.to_string()].concat()
    }

    /// Get the URL of the shell channel
    pub fn shell_url(&self) -> String {
        [self.base_url(), self.shell_port.to_string()].concat()
    }

    /// Get the URL of the iopub channel
    pub fn iopub_url(&self) -> String {
        [self.base_url(), self.iopub_port.to_string()].concat()
    }

    /// Get the URL of the heartbeat channel
    pub fn heartbeat_url(&self) -> String {
        [self.base_url(), self.hb_port.to_string()].concat()
    }
}
