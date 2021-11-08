#![recursion_limit = "256"]
#![forbid(unsafe_code)]

// Objects
//
// Core Stencila objects e.g `File`, `Article`, `Project`

pub mod conversions;
pub mod documents;
pub mod files;
pub mod patches;
pub mod projects;
pub mod sessions;
pub mod sources;

// Methods
//
// Core functions that operate on Stencila objects and which
// may be delegated to plugins

pub mod methods {
    pub mod compile;
    pub mod import;
}

// Features
//
// Features that can be turned off

#[cfg(feature = "upgrade")]
pub mod upgrade;

#[cfg(feature = "request")]
pub mod request;

#[cfg(feature = "serve")]
pub mod serve;

#[cfg(any(feature = "request", feature = "serve"))]
pub mod jwt;

#[cfg(any(feature = "request", feature = "serve"))]
pub mod rpc;

// Internal configuration, messaging etc

pub mod config;
pub mod errors;
pub mod logging;
pub mod telemetry;

// Utilities
//
// Usually just small functions that are often wrappers around other crates.
pub mod utils;

// Re-export packages
//
// Mainly for use by stencila-* language packages in this workspace

pub use eyre;
pub use once_cell;
pub use regex;
pub use serde;
pub use serde_json;
pub use serde_yaml;
pub use strum;
pub use tokio;
pub use tracing;
pub use validator;
