use std::collections::HashMap;

use common::{
    eyre::{self, bail, Result},
    maplit::hashmap,
    serde_json::{self, json},
    tracing,
};
use http_utils::CLIENT;

use crate::{
    api,
    errors::Error,
    types::{LogEntry, Org, OrgMember, OrgUsedQuota},
    utils::{token_read, user_read, user_write},
};

/// Get the id of the default organization for the user
pub fn org_default() -> Result<u64> {
    let user = user_read()?;
    match user.default_org {
        Some(org) => Ok(org),
        None => bail!("Current user does not have a default organization set"),
    }
}

pub async fn org_list(search: Option<&str>, role: Option<&str>, all: bool) -> Result<Vec<Org>> {
    let mut request = CLIENT.get(api!("orgs")).bearer_auth(token_read()?);
    if let Some(search) = search {
        request = request.query(&[("search", search)]);
    }
    if let Some(role) = role {
        request = request.query(&[("role", role)]);
    }
    if all {
        request = request.query(&[("all", all)]);
    }

    let response = request.send().await?;
    if response.status().is_success() {
        Ok(response.json().await?)
    } else {
        Error::from_response(response).await
    }
}

pub async fn org_create(
    short_name: Option<&str>,
    long_name: Option<&str>,
    default: bool,
) -> Result<Org> {
    let response = CLIENT
        .post(api!("orgs"))
        .bearer_auth(token_read()?)
        .json(&json!({
            "shortName": short_name,
            "longName": long_name
        }))
        .send()
        .await?;

    let org: Org = if response.status().is_success() {
        response.json().await?
    } else {
        return Error::from_response(response).await;
    };

    if default {
        let response = CLIENT
            .patch(api!("me"))
            .bearer_auth(token_read()?)
            .json(&json!({
                "defaultOrg": org.id
            }))
            .send()
            .await?;

        let user = if response.status().is_success() {
            response.json().await?
        } else {
            return Error::from_response(response).await;
        };
        user_write(&user)?;

        tracing::info!(
            "Successfully created organization #{} and made it your default",
            org.id
        );
    } else {
        tracing::info!("Successfully created organization #{}", org.id);
    }

    Ok(org)
}

pub async fn org_retrieve(org_id: &str) -> Result<Org> {
    let response = CLIENT
        .get(api!("orgs/{}", org_id))
        .bearer_auth(token_read()?)
        .send()
        .await?;
    if response.status().is_success() {
        Ok(response.json().await?)
    } else {
        Error::from_response(response).await
    }
}

pub async fn org_usage(org_id: &str) -> Result<Vec<OrgUsedQuota>> {
    let response = CLIENT
        .get(api!("orgs/{}/usage", org_id))
        .bearer_auth(token_read()?)
        .send()
        .await?;
    if response.status().is_success() {
        let names: HashMap<String, String> = hashmap! {
            "orgProjectsPublic".to_string() => "Public projects (num)".to_string(),
            "orgProjectsPrivate".to_string() => "Private projects (num)".to_string(),
            "orgMembersNum".to_string() => "Organization members".to_string(),
            "orgTeamsNum".to_string() => "Teams (num)".to_string(),
            "orgDeploymentsNum".to_string() => "Deployment templates (num)".to_string(),
            "orgComputeTime".to_string() => "Compute time (hrs)".to_string(),
            "orgNetworkEgress".to_string() => "Data out (GB)".to_string(),
        };
        let usages: HashMap<String, HashMap<String, f64>> = response.json().await?;
        let usages = usages
            .into_iter()
            .map(|(name, resource)| {
                let used = resource.get("used").cloned().unwrap_or_default();
                let quota = resource.get("quota").cloned().unwrap_or_default();
                let percent = used / quota * 100.;
                OrgUsedQuota {
                    name: names.get(&name).cloned().unwrap_or(name),
                    used,
                    quota,
                    percent,
                }
            })
            .collect();
        Ok(usages)
    } else {
        Error::from_response(response).await
    }
}

pub async fn org_activity(
    org_id: &str,
    subject: Option<&str>,
    action: Option<&str>,
    limit: u32,
) -> Result<Vec<LogEntry>> {
    let mut request = CLIENT
        .get(api!("orgs/{}/logs", org_id))
        .bearer_auth(token_read()?)
        .query(&[("limit", limit)]);
    if let Some(subject) = subject {
        request = request.query(&[("subjectType", subject)]);
    }
    if let Some(action) = action {
        request = request.query(&[("actionType", action)]);
    }

    let response = request.send().await?;
    if response.status().is_success() {
        Ok(response.json().await?)
    } else {
        Error::from_response(response).await
    }
}

pub async fn members_list(org_id: &str) -> Result<Vec<OrgMember>> {
    let response = CLIENT
        .get(api!("orgs/{}/members", org_id))
        .bearer_auth(token_read()?)
        .send()
        .await?;
    if response.status().is_success() {
        Ok(response.json().await?)
    } else {
        Error::from_response(response).await
    }
}

pub async fn members_create(
    org_id: &str,
    user_id: Option<&str>,
    user_name: Option<&str>,
    role: &str,
) -> Result<OrgMember> {
    let response = CLIENT
        .post(api!("orgs/{}/members", org_id))
        .bearer_auth(token_read()?)
        .json(&json!({
            "userId": user_id,
            "userName": user_name,
            "role": role
        }))
        .send()
        .await?;
    if response.status().is_success() {
        let member: OrgMember = response.json().await?;
        tracing::info!(
            "Successfully added user #{} as {} of organization #{}",
            member.user.id,
            member.role,
            org_id
        );
        Ok(member)
    } else {
        Error::from_response(response).await
    }
}

pub async fn members_update(org_id: &str, membership_id: &str, role: &str) -> Result<OrgMember> {
    let json = serde_json::to_string(&serde_json::json!({ "role": role }))?;
    let response = CLIENT
        .patch(api!("orgs/{}/members/{}", org_id, membership_id))
        .bearer_auth(token_read()?)
        .body(json)
        .send()
        .await?;
    if response.status().is_success() {
        let member: OrgMember = response.json().await?;
        tracing::info!(
            "Successfully changed role of user #{} to {} on organization #{}",
            member.user.id,
            member.role,
            org_id
        );
        Ok(member)
    } else {
        Error::from_response(response).await
    }
}

pub async fn members_delete(org_id: &str, membership_id: &str) -> Result<()> {
    let response = CLIENT
        .delete(api!("orgs/{}/members/{}", org_id, membership_id))
        .bearer_auth(token_read()?)
        .send()
        .await?;
    if response.status().is_success() {
        tracing::info!("Successfully removed user from organization #{}", org_id);
        Ok(())
    } else {
        Error::from_response(response).await
    }
}

pub mod cli {
    use cli_utils::{
        clap::{self, Parser},
        cli_table::Title,
        common::async_trait::async_trait,
        result, Result, Run,
    };

    use crate::{page, utils::WebArg};

    use super::*;

    // An option that is reused in several subcommands below to
    // allow the user to specify the target org for the command.
    #[derive(Default, Parser)]
    pub struct OrgArg {
        /// The id of the org
        ///
        /// If this option is not supplied, Stencila will use your default organization.
        #[clap(long, short)]
        org: Option<String>,
    }

    impl OrgArg {
        pub fn resolve(&self) -> eyre::Result<String> {
            match &self.org {
                Some(id) => Ok(id.clone()),
                None => Ok(org_default()?.to_string()),
            }
        }
    }

    /// Manage organizations
    ///
    /// Use this command to list your Stencila organizations, manage their members,
    /// plans and usage, and view activity logs.
    #[derive(Parser)]
    #[clap(alias = "org")]
    pub struct Command {
        #[clap(subcommand)]
        action: Action,
    }

    #[derive(Parser)]
    enum Action {
        List(List),
        Show(Show),
        Create(Create),
        Members(members::Command),
        Plan(Plan),
        Usage(Usage),
        Activity(Activity),
    }

    #[async_trait]
    impl Run for Command {
        async fn run(&self) -> Result {
            match &self.action {
                Action::List(action) => action.run().await,
                Action::Show(action) => action.run().await,
                Action::Create(action) => action.run().await,
                Action::Members(action) => action.run().await,
                Action::Plan(action) => action.run().await,
                Action::Usage(action) => action.run().await,
                Action::Activity(action) => action.run().await,
            }
        }
    }

    /// List organizations
    ///
    /// Use this command to get a list of Stencila organizations.
    /// For more details on a particular organization use the `show` sibling command.
    ///
    /// Use the optional search string to filter organizations using their names (short and long).
    ///
    /// By default, only shows organizations that you are a member of, use the `--all` option to include
    /// all organizations. Use the `--role` option to only include organizations for which you have a particular role.
    #[derive(Default, Parser)]
    struct List {
        /// A search string to filter organizations by
        #[clap(short, long)]
        search: Option<String>,

        /// Only list organizations for which you have a specific role
        ///
        /// The role may be granted directly to you, or via a team.
        #[clap(short, long, possible_values = ["owner", "admin", "member"])]
        role: Option<String>,

        /// List all organizations, including organization that you are not a member of
        ///
        /// To avoid getting a long list of organizations, you generally only want to use
        /// this flag in conjunction with a search string.
        #[clap(short, long)]
        all: bool,
    }

    #[async_trait]
    impl Run for List {
        async fn run(&self) -> Result {
            let orgs = org_list(self.search.as_deref(), self.role.as_deref(), self.all).await?;
            result::table(orgs, Org::title())
        }
    }

    /// Show details of a org
    ///
    /// Use this command to get details on a Stencila org such as when it was last updated.
    /// By default, this command shows details for the current org. Use the `--org` option
    /// to target another org.
    #[derive(Parser)]
    struct Show {
        #[clap(flatten)]
        org: OrgArg,
    }

    #[async_trait]
    impl Run for Show {
        async fn run(&self) -> Result {
            let org = org_retrieve(&self.org.resolve()?).await?;
            result::value(org)
        }
    }

    /// Create an organization
    ///
    /// Use this command to create a new Stencila organization. Use the `--default`
    /// option to make the new organization your default.
    #[derive(Parser)]
    #[clap(alias = "new")]
    struct Create {
        /// A "short name" of the organization
        ///
        /// Must be unique. Used in URLs for the organization on Stencila Cloud.
        /// Defaults to a randomly generated name.
        #[clap(short, long)]
        short_name: Option<String>,

        /// A "long name" of the organization
        ///
        /// Used mainly for display purposes.
        #[clap(short, long)]
        long_name: Option<String>,

        /// Make the new organization your default organization
        ///
        /// Use this option to make the new organization your default.
        /// It will then be used instead of having to specify the `--org` option
        /// in the CLI or on the web.
        #[clap(short, long)]
        default: bool,
    }

    #[async_trait]
    impl Run for Create {
        async fn run(&self) -> Result {
            let org = org_create(
                self.long_name.as_deref(),
                self.long_name.as_deref(),
                self.default,
            )
            .await?;
            result::invisible(org)
        }
    }

    /// Manage organization's plan and extras settings
    ///
    /// Currently this command simply opens a web browser at the page for the organizations plan.
    /// You can view and make changes to the plan there.
    #[derive(Parser)]
    struct Plan {
        #[clap(flatten)]
        org: OrgArg,

        #[clap(flatten)]
        web: WebArg,
    }

    #[async_trait]
    impl Run for Plan {
        async fn run(&self) -> Result {
            self.web.open(page!("orgs/{}/plan", self.org.resolve()?))?;
            result::nothing()
        }
    }

    /// View an organization's resource usage against quotas
    ///
    /// Use this command to quickly see the usage of various resources (e.g. compute time)
    /// against the quota for an organization.
    #[derive(Parser)]
    struct Usage {
        #[clap(flatten)]
        org: OrgArg,

        #[clap(flatten)]
        web: WebArg,
    }

    #[async_trait]
    impl Run for Usage {
        async fn run(&self) -> Result {
            let org_id = self.org.resolve()?;
            if self.web.yes {
                self.web.open(page!("orgs/{}/usage", org_id))
            } else {
                let usage = org_usage(&org_id).await?;
                result::table(usage, OrgUsedQuota::title())
            }
        }
    }

    /// Get activity logs for an organization
    ///
    /// Use this command to get logs of activity relation to the organization and projects
    /// it owns. Note that the duration that logs are retained is dependant upon the organizations
    /// plan, so there may be no entries if there has been no recent activity.
    #[derive(Parser)]
    struct Activity {
        /// The subject to filter logs by (e.g. "org", "project")
        #[clap(short, long)]
        subject: Option<String>,

        /// The action to filter logs by (e.g. "updated")
        #[clap(short, long, possible_values = &["created", "read", "updated", "deleted", "started", "stopped"])]
        action: Option<String>,

        /// The number of entries to limit the result to
        #[clap(short, long, default_value_t = 100)]
        limit: u32,

        #[clap(flatten)]
        org: OrgArg,

        #[clap(flatten)]
        web: WebArg,
    }

    #[async_trait]
    impl Run for Activity {
        async fn run(&self) -> Result {
            let org_id = self.org.resolve()?;
            if self.web.yes {
                self.web.open(page!("orgs/{}/activity", org_id))
            } else {
                let activity = org_activity(
                    &self.org.resolve()?,
                    self.subject.as_deref(),
                    self.action.as_deref(),
                    self.limit,
                )
                .await?;
                result::table(activity, LogEntry::title())
            }
        }
    }

    mod members {
        use crate::utils::UUID_REGEX;

        use super::*;

        /// Manage org members
        #[derive(Parser)]
        pub struct Command {
            #[clap(subcommand)]
            action: Action,
        }

        #[derive(Parser)]
        enum Action {
            List(List),
            Add(Add),
            Change(Change),
            Remove(Remove),
        }

        #[async_trait]
        impl Run for Command {
            async fn run(&self) -> Result {
                match &self.action {
                    Action::List(action) => action.run().await,
                    Action::Add(action) => action.run().await,
                    Action::Change(action) => action.run().await,
                    Action::Remove(action) => action.run().await,
                }
            }
        }

        /// List members of a org
        ///
        /// Use this command to retrieve a list of a orgs members and their role
        /// on the org. Each item in this list has a membership id which you can
        /// use to remove, or modify, a membership.
        #[derive(Default, Parser)]
        struct List {
            #[clap(flatten)]
            org: cli::OrgArg,
        }

        #[async_trait]
        impl Run for List {
            async fn run(&self) -> Result {
                let members = members_list(&self.org.resolve()?).await?;
                result::table(members, OrgMember::title())
            }
        }

        /// Add a user as a member of a organization
        ///
        /// Use this command to a add a user to a organization. When you add a team to a
        /// organization, all the users that are members of that team get the same role on the organization.
        /// The default role is "member". Specify "owner" or "admin" roles for greater permissions
        /// on the organization.
        #[derive(Parser)]
        struct Add {
            /// The username or id of the user
            ///
            /// Use the user's username (e.g. "mike21") or their id (e.g. "b18beb15-af3a-4696-98ea-f89e0cf6149a").
            user: String,

            /// The role to give the user
            ///
            /// Defaults to "member". Use "admin" or "owner" to give the user greater
            /// permissions on the organization.
            #[clap(default_value = "member", possible_values = ["owner", "admin", "member"])]
            role: String,

            #[clap(flatten)]
            org: cli::OrgArg,
        }

        #[async_trait]
        impl Run for Add {
            async fn run(&self) -> Result {
                let org_id = self.org.resolve()?;

                let (user_id, user_name) = if UUID_REGEX.is_match(&self.user) {
                    (Some(self.user.as_str()), None)
                } else {
                    (None, Some(self.user.as_str()))
                };

                let member = members_create(&org_id, user_id, user_name, &self.role).await?;
                result::invisible(member)
            }
        }

        /// Change the role of a user within an organization
        #[derive(Parser)]
        struct Change {
            /// The id of the membership
            ///
            /// Note: this is the id of the membership, as shown in the membership list of the organization,
            /// not the id of the user themselves.
            id: String,

            /// The role to give the user or team
            ///
            /// Defaults to "member". Use "admin" or "owner" to give the user or team greater
            /// permissions on the org.
            #[clap(default_value = "member", possible_values = ["owner", "admin", "member"])]
            role: String,

            #[clap(flatten)]
            org: cli::OrgArg,
        }

        #[async_trait]
        impl Run for Change {
            async fn run(&self) -> Result {
                let org_id = &self.org.resolve()?;
                let member = members_update(org_id, &self.id, &self.role).await?;
                result::invisible(member)
            }
        }

        /// Remove a user as a member of an organization
        #[derive(Parser)]
        struct Remove {
            /// The id of the membership
            ///
            /// Note: this is the id of the membership, as shown in the membership list of the organization,
            /// not the id of the user themselves.
            id: String,

            #[clap(flatten)]
            org: cli::OrgArg,
        }

        #[async_trait]
        impl Run for Remove {
            async fn run(&self) -> Result {
                members_delete(&self.org.resolve()?, &self.id).await?;
                result::nothing()
            }
        }
    }
}
