use codec::CodecTrait;
use codec_date::DateCodec;
use codec_person::PersonCodec;
use codec_txt::ToTxt;
use common::{defaults::Defaults, eyre::Result, once_cell::sync::Lazy, regex::Regex};
use stencila_schema::*;
use utils::vec_string;

/// Reshaping aggressiveness level
///
/// Controls the degree of inference applied to various properties
/// and content types.
#[derive(PartialEq, PartialOrd)]
enum ReshapeLevel {
    /// If a property is missing, attempt to detect it from explicit labels.
    /// e.g. detect a figure caption when a paragraph after an image begins with the word "Figure".
    Detect,
    /// If a property is missing, and detection failed, infer it from the content if possible.
    /// e.g. infer a figure caption when a paragraph after an image is emphasized.
    Infer,
    /// If a property is missing, and detection or inference failed, always make a guess.
    /// e.g. guess an article title from the first sentence of the first paragraph.
    #[allow(dead_code)]
    Guess,
}

/// Reshaping options
#[derive(Defaults)]
pub struct ReshapeOptions {
    /// Node types to reshape
    #[def = r#"vec_string!["Article"]"#]
    types: Vec<String>,

    /// Reshaping level for the title of a `CreativeWork`
    #[def = "ReshapeLevel::Infer"]
    title: ReshapeLevel,

    /// Reshaping level for the authors of a `CreativeWork`
    #[def = "ReshapeLevel::Infer"]
    authors: ReshapeLevel,

    /// Reshaping level for the date modified of a `CreativeWork`
    #[def = "ReshapeLevel::Infer"]
    date: ReshapeLevel,

    /// Reshaping level for the keywords of a `CreativeWork`
    #[def = "ReshapeLevel::Infer"]
    keywords: ReshapeLevel,

    /// Reshaping level for the abstract of a `CreativeWork`
    #[def = "ReshapeLevel::Infer"]
    abstract_: ReshapeLevel,
}

/// Reshape a node by inferring its semantic structure
///
/// Most often used on a `CreativeWork` to do things like infer
/// `title`, `authors`, `references` etc from its `content`.
pub fn reshape(node: &mut Node, options: Option<ReshapeOptions>) -> Result<()> {
    let options = options.unwrap_or_default();

    if let (Node::Article(article), true) = (node, options.types.contains(&"Article".to_string())) {
        reshape_article(article, &options)
    }
    Ok(())
}

/// Reshape an `Article`
pub fn reshape_article(article: &mut Article, options: &ReshapeOptions) {
    if let Some(blocks) = &mut article.content {
        let mut index = 0;
        while index < blocks.len() {
            let mut delta = 1;

            if index == 0 {
                // Detections and inferences of meta-data that are only done at the top of the content.
                // Note that, because these functions will pop blocks off the content if they
                // match (i.e. effectively reset index to 0), there can be more than one of these,
                // and they can be in any order (although the code is optimized for the following
                // order).

                if article.title.is_none() && options.title >= ReshapeLevel::Detect {
                    delta += detect_title(&mut article.title, blocks, index)
                }
                if !blocks.is_empty()
                    && article.title.is_none()
                    && options.title >= ReshapeLevel::Infer
                {
                    delta += infer_title(&mut article.title, blocks, index)
                }

                if !blocks.is_empty()
                    && article.authors.is_none()
                    && options.authors >= ReshapeLevel::Detect
                {
                    delta += detect_authors(&mut article.authors, blocks, index)
                }
                if !blocks.is_empty()
                    && article.authors.is_none()
                    && options.authors >= ReshapeLevel::Infer
                {
                    delta += infer_authors(&mut article.authors, blocks, index)
                }

                if !blocks.is_empty()
                    && article.date_modified.is_none()
                    && options.date >= ReshapeLevel::Detect
                {
                    delta += detect_date(&mut article.date_modified, blocks, index)
                }
                if !blocks.is_empty()
                    && article.date_modified.is_none()
                    && options.date >= ReshapeLevel::Infer
                {
                    delta += infer_date(&mut article.date_modified, blocks, index)
                }

                if !blocks.is_empty()
                    && article.keywords.is_none()
                    && options.keywords >= ReshapeLevel::Detect
                {
                    delta += detect_keywords(&mut article.keywords, blocks, index)
                }

                if !blocks.is_empty()
                    && article.description.is_none()
                    && options.abstract_ >= ReshapeLevel::Detect
                {
                    delta += detect_abstract(&mut article.description, blocks, index)
                }
            }

            index = index.saturating_add(delta.max(0) as usize);
        }
    }
}

/// Does a paragraph begin with a `Strong` node?
fn first_is_strong(paragraph: &Paragraph) -> bool {
    matches!(paragraph.content.first(), Some(InlineContent::Strong(_)))
}

/// Does a paragraph begin with a `Emphasis` node?
fn first_is_emphasis(paragraph: &Paragraph) -> bool {
    matches!(paragraph.content.first(), Some(InlineContent::Emphasis(_)))
}

/// Does a paragraph have a `Superscript` in it?
fn has_superscript(paragraph: &Paragraph) -> bool {
    paragraph
        .content
        .iter()
        .any(|inline| matches!(inline, InlineContent::Superscript(_)))
}

/// Remove the first `Mark` node from the start of a paragraph.
fn remove_first_mark(paragraph: &Paragraph) -> Vec<InlineContent> {
    let mut content = match paragraph.content.first() {
        Some(InlineContent::Emphasis(emphasis)) => emphasis.content.clone(),
        Some(InlineContent::Strong(strong)) => strong.content.clone(),
        _ => Vec::new(),
    };
    let mut rest = paragraph.content.clone();
    rest.remove(0);
    content.append(&mut rest);
    content
}

/// Detect the title of a `CreativeWork` from a paragraph starting with "title"
fn detect_title(
    title: &mut Option<Box<CreativeWorkTitle>>,
    blocks: &mut Vec<BlockContent>,
    index: usize,
) -> i32 {
    static BEGINS_REGEX: Lazy<Regex> = Lazy::new(|| {
        Regex::new("^(?:T|t)itle\\b(?:[^\\w]*)?(.*)").expect("Unable to create regex")
    });

    if let BlockContent::Paragraph(paragraph) = &blocks[index] {
        let txt = paragraph.to_txt();
        if let Some(captures) = BEGINS_REGEX.captures(&txt) {
            *title = Some(Box::new(CreativeWorkTitle::VecInlineContent(vec![
                InlineContent::String(captures[1].to_string()),
            ])));
            blocks.remove(index);
            return -1;
        }
    }

    0
}

/// Infer the title of a `CreativeWork` from a `BlockContent` node
fn infer_title(
    title: &mut Option<Box<CreativeWorkTitle>>,
    blocks: &mut Vec<BlockContent>,
    index: usize,
) -> i32 {
    let inferred = match &blocks[index] {
        BlockContent::Heading(heading) => {
            if heading.depth == Some(1) {
                Some(Box::new(CreativeWorkTitle::VecInlineContent(
                    heading.content.clone(),
                )))
            } else {
                None
            }
        }
        BlockContent::Paragraph(paragraph) => {
            if first_is_strong(paragraph) || first_is_emphasis(paragraph) {
                Some(Box::new(CreativeWorkTitle::VecInlineContent(
                    remove_first_mark(paragraph),
                )))
            } else {
                None
            }
        }
        _ => None,
    };

    if inferred.is_some() {
        *title = inferred;
        blocks.remove(index);
        -1
    } else {
        0
    }
}

/// Detect the authors of a `CreativeWork` from a paragraph starting with "authors"
fn detect_authors(
    authors: &mut Option<Vec<CreativeWorkAuthors>>,
    blocks: &mut Vec<BlockContent>,
    index: usize,
) -> i32 {
    static BEGINS_REGEX: Lazy<Regex> = Lazy::new(|| {
        Regex::new("^(?:A|a)uthors?\\b(?:[^\\w]*)?(.*)").expect("Unable to create regex")
    });
    static SPLIT_REGEX: Lazy<Regex> =
        Lazy::new(|| Regex::new("\\s*;|(and)|&\\s*").expect("Unable to create regex"));

    if let BlockContent::Paragraph(paragraph) = &blocks[index] {
        let txt = paragraph.to_txt();
        if let Some(captures) = BEGINS_REGEX.captures(&txt) {
            let authors_ = SPLIT_REGEX
                .split(&captures[1])
                .map(|str| {
                    let person = if let Ok(Node::Person(person)) = PersonCodec::from_str(str, None)
                    {
                        person
                    } else {
                        Person {
                            name: Some(Box::new(str.to_string())),
                            ..Default::default()
                        }
                    };
                    CreativeWorkAuthors::Person(person)
                })
                .collect();
            *authors = Some(authors_);
            blocks.remove(index);
            return -1;
        }
    }

    0
}

/// Infer the authors of a `CreativeWork` from a paragraph with superscripts, and/or ORCIDs.
fn infer_authors(
    authors: &mut Option<Vec<CreativeWorkAuthors>>,
    blocks: &mut Vec<BlockContent>,
    index: usize,
) -> i32 {
    let inferred = match &blocks[index] {
        BlockContent::Paragraph(paragraph) => {
            //let txt = paragraph.to_txt();
            if has_superscript(paragraph) {
                Some(vec![CreativeWorkAuthors::Person(Person {
                    // TODO: Remove superscripts and record affiliations
                    name: Some(Box::new("superscripted".to_string())),
                    ..Default::default()
                })])
            } else {
                None
            }
        }
        _ => None,
    };

    if inferred.is_some() {
        *authors = inferred;
        blocks.remove(index);
        -1
    } else {
        0
    }
}

/// Detect the date of a `CreativeWork` from a paragraph starting with "date"
fn detect_date(date: &mut Option<Box<Date>>, blocks: &mut Vec<BlockContent>, index: usize) -> i32 {
    static BEGINS_REGEX: Lazy<Regex> =
        Lazy::new(|| Regex::new("^(?:D|d)ate\\b(?:[^\\w]*)?(.*)").expect("Unable to create regex"));

    if let BlockContent::Paragraph(paragraph) = &blocks[index] {
        let txt = paragraph.to_txt();
        if let Some(captures) = BEGINS_REGEX.captures(&txt) {
            if let Ok(Node::Date(date_)) = DateCodec::from_str(&captures[1], None) {
                *date = Some(Box::new(date_));
                blocks.remove(index);
                return -1;
            }
        }
    }

    0
}

/// Infer the date of a `CreativeWork` from a `Paragraph` containing a date string
fn infer_date(date: &mut Option<Box<Date>>, blocks: &mut Vec<BlockContent>, index: usize) -> i32 {
    if let BlockContent::Paragraph(paragraph) = &blocks[index] {
        let txt = paragraph.to_txt();
        if let Ok(Node::Date(date_)) = DateCodec::from_str(&txt, None) {
            *date = Some(Box::new(date_));
            blocks.remove(index);
            return -1;
        }
    }

    0
}

/// Detect the keywords of a `CreativeWork` from a paragraph starting with "keywords"
fn detect_keywords(
    keywords: &mut Option<Vec<String>>,
    blocks: &mut Vec<BlockContent>,
    index: usize,
) -> i32 {
    static BEGINS_REGEX: Lazy<Regex> = Lazy::new(|| {
        Regex::new("^(?:K|k)eywords?\\b(?:[^\\w]*)?(.*)").expect("Unable to create regex")
    });
    static SPLIT_REGEX: Lazy<Regex> =
        Lazy::new(|| Regex::new("\\s*;|,\\s*").expect("Unable to create regex"));

    if let BlockContent::Paragraph(paragraph) = &blocks[index] {
        let txt = paragraph.to_txt();
        if let Some(captures) = BEGINS_REGEX.captures(&txt) {
            let keywords_ = SPLIT_REGEX
                .split(&captures[1])
                .map(|str| str.to_string())
                .collect();
            *keywords = Some(keywords_);
            blocks.remove(index);
            return -1;
        }
    }

    0
}

/// Detect the abstract of a `CreativeWork` from a series of blocks
///
/// If the current block looks like an abstract heading, consumes all
/// the following paragraphs.
fn detect_abstract(
    abstract_: &mut Option<Box<ThingDescription>>,
    blocks: &mut Vec<BlockContent>,
    index: usize,
) -> i32 {
    let is_abstract = match &blocks[index] {
        BlockContent::Heading(heading) => {
            let txt = heading.to_txt();
            txt.trim() == "Abstract"
        }
        BlockContent::Paragraph(paragraph) => {
            let txt = paragraph.to_txt();
            txt.trim() == "Abstract"
        }
        _ => false,
    };
    if !is_abstract {
        return 0;
    }

    blocks.remove(index);
    let mut removed = 1;

    let mut content: Vec<BlockContent> = Vec::new();
    while index < blocks.len() {
        let next = &blocks[index];
        match next {
            BlockContent::Paragraph(_) => {
                content.push(next.clone());
                blocks.remove(index);
                removed += 1;
            }
            _ => break,
        }
    }

    *abstract_ = Some(Box::new(ThingDescription::VecBlockContent(content)));
    -removed
}

#[cfg(test)]
mod tests {
    use super::*;
    use common::serde_yaml;
    use test_snaps::{insta::assert_json_snapshot, snapshot_fixtures_content};

    #[test]
    fn reshape_yaml_articles() {
        snapshot_fixtures_content("articles/reshape-*.yaml", |content| {
            let mut article = serde_yaml::from_str(content).expect("Unable to decode YAML");
            reshape(&mut article, None).expect("Unable to reshape");
            assert_json_snapshot!(article);
        });
    }
}
