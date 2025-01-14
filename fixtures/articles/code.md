This article fixture is focussed on the Markdown representation of executable code nodes such as `CodeChunk`, `CodeExpression`, and `Parameter` nodes. See also `../fragments/md/code-*.md` fixtures. This fixture intentionally does not have any relations between code nodes (e.g a variable assigned in one, used in another).

## Inline code

Code expressions have a language and the `exec` keyword in curly braces, like this `1+1`{r exec} and this `2+2`{python exec}. The language may be omitted e.g. `3+3`{exec} (in which case it will default to the language of the previous code element).

Double brace syntax is also supported, but generally not recommended e.g. {{2+3}}{python} an {{4+5}}.

Non-executable code fragments, lack the `exec` keyword but can have a language e.g. `3+3`{r}.

## Block code

Code chunk use the `exec` keyword to differentiate them from code blocks,

```r exec
"Hello from R"
```

Non executable code blocks do not have the `exec` keyword,

```python
# Not executed
```
