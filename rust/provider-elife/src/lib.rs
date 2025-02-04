use provider::{
    common::{once_cell::sync::Lazy, regex::Regex},
    stencila_schema::{Article, CreativeWorkPublisher, Node, Organization, ThingIdentifiers},
    ParseItem, Provider, ProviderTrait,
};

pub struct ElifeProvider;

impl ProviderTrait for ElifeProvider {
    fn spec() -> Provider {
        Provider::new("elife")
    }

    fn parse(string: &str) -> Vec<ParseItem> {
        // Regex targeting short identifiers e.g. elife:12345
        static SIMPLE_REGEX: Lazy<Regex> =
            Lazy::new(|| Regex::new(r"^elife:(?://)?(\d+)").expect("Unable to create regex"));

        // Regex targeting URL copied from the browser address bar
        static URL_REGEX: Lazy<Regex> = Lazy::new(|| {
            Regex::new(r"^(?:https?://)?elifesciences\.org/articles/(\d+).*$")
                .expect("Unable to create regex")
        });

        SIMPLE_REGEX
            .captures_iter(string)
            .into_iter()
            .map(|captures| {
                let capture = captures.get(0).unwrap();
                (capture.start(), capture.end(), captures[1].to_string())
            })
            .chain(URL_REGEX.captures_iter(string).into_iter().map(|captures| {
                let capture = captures.get(0).unwrap();
                (capture.start(), capture.end(), captures[1].to_string())
            }))
            .map(|(begin, end, id)| ParseItem {
                begin,
                end,
                node: Node::Article(Article {
                    identifiers: Some(vec![ThingIdentifiers::String(
                        ["https://doi.org/10.7554/eLife.", &id].concat(),
                    )]),
                    url: Some(Box::new(
                        ["https://elifesciences.org/articles/", &id].concat(),
                    )),
                    publisher: Some(Box::new(CreativeWorkPublisher::Organization(
                        Organization {
                            name: Some(Box::new("eLife Sciences Publications, Ltd".to_string())),
                            ..Default::default()
                        },
                    ))),
                    ..Default::default()
                }),
            })
            .collect()
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use test_utils::assert_json_is;

    #[test]
    fn parse() {
        for string in [
            "elife:52258",
            "elife://52258",
            "https://elifesciences.org/articles/52258",
            "elifesciences.org/articles/52258",
        ] {
            assert_json_is!(
                ElifeProvider::parse(string)[0].node,
                {
                    "type": "Article",
                    "publisher": {
                        "type": "Organization",
                        "name": "eLife Sciences Publications, Ltd"
                    },
                    "url": "https://elifesciences.org/articles/52258",
                    "identifiers": [
                        "https://doi.org/10.7554/eLife.52258",
                    ],

                }
            );
        }
    }
}
