(program (comment) @comment)

(import_statement
    source: (string) @module
)
(call_expression
    function: [(import)(identifier)] @function (#match? @function "^import|require$")
    arguments: (arguments . (string) @module)
)

(call_expression
    function: [
        (
            (identifier) @function (#match? @function "^readFile")
        )
        (
            member_expression
                object: (_)
                property: (property_identifier)  @function (#match? @function "^readFile")
        )
    ]
    arguments: (arguments . (string) @path)
)

(call_expression
    function: [
        (
            (identifier) @function (#match? @function "^writeFile")
        )
        (
            member_expression
                object: (_)
                property: (property_identifier)  @function (#match? @function "^writeFile")
        )
    ]
    arguments: (arguments . (string) @path)
)

(program
    [
        (variable_declaration
            (variable_declarator
                name: (identifier) @name
                .
                value: (_) @value
            )
        )
        (lexical_declaration
            (variable_declarator
                name: (identifier) @name
                .
                value: (_) @value
            )
        )
        (export_statement
            declaration: (lexical_declaration
                (variable_declarator
                    name: (identifier) @name
                    .
                    value: (_) @value
                )
            )
        )
    ]
)
(program
    [
        (function_declaration
            name: (identifier) @name
        )
        (export_statement
            declaration: (function_declaration
                name: (identifier) @name
            )
        )
    ]
)

(program
    (expression_statement
        (assignment_expression
            left: (identifier) @name
            right: (_) @value
        )
    )
)

((identifier) @identifer)
((shorthand_property_identifier) @identifer)
