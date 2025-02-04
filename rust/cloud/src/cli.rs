use cli_utils::{
    clap::{self, Parser},
    common::async_trait::async_trait,
    Result, Run,
};

use crate::{auth, orgs, projects, teams, users};

#[derive(Parser)]
pub struct Command {
    #[clap(subcommand)]
    action: Action,
}

/// Manage your Stencila account, organizations, teams and projects
///
/// Only intended to be used during development as a "mini-cli".
/// At the top level `stencila` command, most of these will be pulled
/// out as separate commands.
#[derive(Parser)]
enum Action {
    Projects(projects::cli::Command),
    Orgs(orgs::cli::Command),
    Teams(teams::cli::Command),
    Users(users::cli::Command),
    Auth(auth::cli::Command),
}

#[async_trait]
impl Run for Command {
    async fn run(&self) -> Result {
        match &self.action {
            Action::Projects(action) => action.run().await,
            Action::Orgs(action) => action.run().await,
            Action::Teams(action) => action.run().await,
            Action::Users(action) => action.run().await,
            Action::Auth(action) => action.run().await,
        }
    }
}
