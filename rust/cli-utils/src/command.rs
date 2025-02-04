use common::async_trait::async_trait;

use crate::{result, Result};

#[async_trait]
pub trait Run {
    /// Run the command
    async fn run(&self) -> Result;

    /// Run the command and print it to the console
    async fn print(&self, value_formats: &[String], error_format: &str) {
        match self.run().await {
            Ok(value) => {
                if let Err(error) = result::print::value(value, value_formats) {
                    result::print::error(error, error_format)
                }
            }
            Err(error) => result::print::error(error, error_format),
        }
    }
}

/// Mini CLI for testing crates at the command line without compiling the whole `stencila` binary.
#[macro_export]
macro_rules! mini_main {
    ($command:ident) => {
        use cli_utils::common::tokio;
        #[tokio::main]
        async fn main() {
            use cli_utils::{
                clap::{self, Parser},
                tracing_subscriber, Run,
            };

            tracing_subscriber::fmt().pretty().init();

            $command::parse()
                .print(
                    &["md".to_string(), "yaml".to_string(), "json".to_string()],
                    "",
                )
                .await
        }
    };
}
