use codec::{
    common::{
        eyre::{bail, Result},
        regex::Regex,
        serde_json,
    },
    stencila_schema::{Article, BlockContent, CodeChunk, InlineContent, Node, Parameter},
    utils::vec_string,
    Codec, CodecTrait, DecodeOptions, EncodeOptions,
};
use codec_md::ToMd;
use common::itertools::Itertools;
use node_pointer::{walk, Visitor};

// A codec for programming language scripts
pub struct ScriptCodec;

impl CodecTrait for ScriptCodec {
    fn spec() -> Codec {
        Codec {
            status: "beta".to_string(),
            formats: vec_string!["bash", "js", "py", "r", "sh", "sql", "zsh"],
            root_types: vec_string!["Article"],
            ..Default::default()
        }
    }

    fn from_str(str: &str, options: Option<DecodeOptions>) -> Result<Node> {
        let options = options.unwrap_or_default();
        let lang = match options.format {
            Some(format) => format.to_lowercase(),
            None => bail!("A format option (the programming language of the script) is required"),
        };

        // Define single line comment regexes for each language
        let single_line_regex = Regex::new(match lang.as_str() {
            "js" => r"^//\s*(.*)$",
            "sql" => r"^--\s*(.*)$",
            "bash" | "py" | "r" | "sh" | "zsh" => r"^#\s*(.*)$",
            _ => bail!("Unhandled programming language `{}`", lang),
        })
        .expect("Regex should compile");

        // Define multi-line block comment regexes (begin, mid, end)
        let multi_line_regexes = match lang.as_str() {
            "js" | "sql" => Some((r"^/\*+\s*(.*)$", r"^\s*\*?\s*(.*)$", r"^\s*(.*?)\*+/$")),
            _ => None,
        }
        .map(|regexes| {
            (
                Regex::new(regexes.0).expect("Regex should compile"),
                Regex::new(regexes.1).expect("Regex should compile"),
                Regex::new(regexes.2).expect("Regex should compile"),
            )
        });

        // Split into lines and classify each as either Markdown or code
        // using the regexes
        let mut blocks = Vec::new();
        let md_blocks = |md: &str| -> Vec<BlockContent> {
            codec_md::decode_fragment(md, Some(lang.to_string()))
        };
        let code_chunk = |code: &str| -> BlockContent {
            BlockContent::CodeChunk(CodeChunk {
                programming_language: lang.clone(),
                text: code.trim().to_string(),
                ..Default::default()
            })
        };
        let mut in_multiline = false;
        let mut md = String::new();
        let mut code = String::new();
        let mut skip = false;
        for line in str.lines() {
            if skip {
                skip = false;
                continue;
            }

            if let Some((start_regex, mid_regex, end_regex)) = &multi_line_regexes {
                if in_multiline {
                    let line_md = if let Some(captures) = end_regex.captures(line) {
                        in_multiline = false;
                        captures[1].to_string()
                    } else if let Some(captures) = mid_regex.captures(line) {
                        captures[1].to_string()
                    } else {
                        line.to_string()
                    };
                    md.push_str(&line_md);
                    md.push('\n');
                    continue;
                } else if let Some(captures) = start_regex.captures(line) {
                    if !code.trim().is_empty() {
                        blocks.push(code_chunk(&code));
                        code.clear();
                    }

                    in_multiline = true;
                    md.push_str(&captures[1]);
                    md.push('\n');
                    continue;
                } else {
                    in_multiline = false;
                }
            }

            // Either add the line to Markdown or to code and if switching between them then
            // add to blocks and clear the buffer.
            if let Some(captures) = single_line_regex.captures(line) {
                let content = captures[1].to_string();
                if content.starts_with("@ignore") {
                    continue;
                } else if content.starts_with("@skip") {
                    skip = true;
                    continue;
                }

                if !code.trim().is_empty() {
                    blocks.push(code_chunk(&code));
                    code.clear();
                }

                md.push_str(&content);
                md.push('\n');
            } else {
                if !md.is_empty() {
                    blocks.append(&mut md_blocks(&md));
                    md.clear();
                }

                code.push_str(line);
                code.push('\n');
            }
        }

        // Any remaining code to add?
        if !code.trim().is_empty() {
            blocks.push(code_chunk(&code));
        }

        // Any remaining Markdown to add?
        if !md.is_empty() {
            blocks.append(&mut md_blocks(&md));
        }

        Ok(Node::Article(Article {
            content: Some(blocks),
            ..Default::default()
        }))
    }

    fn to_string(node: &Node, options: Option<EncodeOptions>) -> Result<String> {
        let mut options = options.unwrap_or_default();
        if options.max_width.is_none() {
            options.max_width = Some(100);
        }

        // Determine language and language-specific variables
        let lang = match &options.format {
            Some(format) => format.to_lowercase(),
            None => bail!("A format option (the programming language of the script) is required"),
        };
        let comment_start = match lang.as_str() {
            "bash" | "py" | "r" | "sh" | "zsh" => "# ",
            "js" => "// ",
            "sql" => "-- ",
            _ => bail!(
                "No comment start defined for programming language `{}`",
                lang
            ),
        };
        let params_prelude = match lang.as_str() {
            "js" => "// @skip\nconst __param__ = (type, index, def) => (type === 'string' ? String : JSON.parse)(process.argv[2 + index] || def)\n\n",
            "py" =>"# @skip\ndef __param__(type, index, default): import sys, json; return (str if type == 'string' else json.loads)(sys.argv[1 + index] if len(sys.argv) > index + 1 else default)\n\n",
            "r" =>"# @skip\nparam__ <- function(type, index, def) { argv <- commandArgs(trailingOnly=TRUE); ifelse(type == 'string', identity, jsonlite::fromJSON)(ifelse(length(argv) > index + 1, argv[1 + index], def)) }\n\n",
            _ => "",
        };
        let param_template = match lang.as_str() {
            "bash" | "sh" | "zsh" => "$name=${1:-$default}\n\n",
            "js" => "let $name = __param__('$type', $index, $default);\n\n",
            "py" => "$name = __param__('$type', $index, $default)\n\n",
            "r" => "$name = param__('$type', $index, $default)\n\n",
            "sql" => "", // Not supported
            _ => bail!(
                "No param template defined for programming language `{}`",
                lang
            ),
        };

        // Get blocks, returning early if none
        let blocks = match node {
            Node::Article(Article { content, .. }) => match content {
                Some(blocks) => blocks,
                None => return Ok(String::new()),
            },
            _ => bail!("Unhandled node type `{}`", node.as_ref()),
        };

        let mut script = String::new();
        let mut code = String::new();

        // Iterate over blocks, adding `CodeChunk`s and `Parameters` as code, and everything else, as Markdown comments
        let mut comment_blocks = Vec::new();
        let mut params_preluded = false;
        let blocks_to_comment = |blocks: &Vec<&BlockContent>| -> String {
            blocks
                .iter()
                .map(|block| block.to_md(&options).trim_end().to_string())
                .join("\n\n")
                .lines()
                .map(|line| [comment_start, line].concat())
                .join("\n")
        };
        for block in blocks {
            if let BlockContent::CodeChunk(CodeChunk { text, .. }) = block {
                if !comment_blocks.is_empty() {
                    script.push_str(&blocks_to_comment(&comment_blocks));
                    script.push_str("\n\n");

                    comment_blocks.clear();
                }

                if !code.is_empty() {
                    script.push_str(&code);
                    code.clear();
                }

                script.push_str(text);

                if text.ends_with('\n') {
                    script.push('\n');
                } else {
                    script.push_str("\n\n");
                }
            } else {
                if !code.is_empty() {
                    script.push_str(&code);
                    code.clear();
                }

                comment_blocks.push(block);

                // Get parameters and add a code section to instantiate them
                let mut params = ParameterGetter::default();
                walk(block, &mut params);
                if !params.params.is_empty() {
                    if !params_preluded {
                        code += params_prelude;
                        params_preluded = true;
                    }

                    for (index, param) in params.params.into_iter().enumerate() {
                        let typ = param
                            .validator
                            .map(|validator| {
                                validator
                                    .as_ref()
                                    .as_ref()
                                    .strip_suffix("Validator")
                                    .unwrap_or_default()
                                    .to_string()
                                    .to_lowercase()
                            })
                            .unwrap_or_else(|| "string".to_string());
                        let default = param
                            .default
                            .unwrap_or_else(|| Box::new(Node::String(String::new())));
                        let param_line = param_template
                            .replace("$name", &param.name)
                            .replace("$type", &typ)
                            .replace("$index", &index.to_string())
                            .replace(
                                "$default",
                                &serde_json::to_string(&default).unwrap_or_default(),
                            );
                        code += &[comment_start, "@skip\n", &param_line].concat();
                    }
                }
            }
        }

        if !comment_blocks.is_empty() {
            script.push_str(&blocks_to_comment(&comment_blocks));
            script.push_str("\n\n");
        }

        if !code.is_empty() {
            script.push_str(&code)
        }

        Ok(script.trim_end().to_string() + "\n")
    }
}

#[derive(Default)]
struct ParameterGetter {
    params: Vec<Parameter>,
}

impl Visitor for ParameterGetter {
    fn visit_inline(
        &mut self,
        _address: &node_pointer::Address,
        node: &codec::stencila_schema::InlineContent,
    ) -> bool {
        if let InlineContent::Parameter(param) = node {
            self.params.push(param.clone());
            return false;
        }
        true
    }
}

#[cfg(test)]
mod tests {
    use std::path::Path;

    use test_snaps::{
        insta::{assert_json_snapshot, assert_snapshot},
        snapshot_fixtures_path_content,
    };

    use super::*;

    #[test]
    fn decode_and_encode_articles() {
        snapshot_fixtures_path_content("articles/scripts/*", |path: &Path, content| {
            let format = path
                .extension()
                .unwrap_or_default()
                .to_string_lossy()
                .to_string();

            let article = ScriptCodec::from_str(
                content,
                Some(DecodeOptions {
                    format: Some(format.clone()),
                }),
            )
            .unwrap();
            assert_json_snapshot!(article);

            let script = ScriptCodec::to_string(
                &article,
                Some(EncodeOptions {
                    format: Some(format),
                    ..Default::default()
                }),
            )
            .unwrap();
            assert_snapshot!(script);
        });
    }
}
