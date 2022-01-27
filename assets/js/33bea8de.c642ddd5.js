"use strict";(self.webpackChunk_stencila_help=self.webpackChunk_stencila_help||[]).push([[6771],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=p(a),d=r,u=h["".concat(l,".").concat(d)]||h[d]||m[d]||s;return a?n.createElement(u,i(i({ref:t},c),{},{components:a})):n.createElement(u,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3402:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>o,contentTitle:()=>l,metadata:()=>p,toc:()=>c,default:()=>h});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),i=["components"],o={sidebar_label:"Introduction",title:"Stencila Schema",slug:"/schema"},l=void 0,p={unversionedId:"schema/index",id:"schema/index",title:"Stencila Schema",description:"Extensions to schema.org to support semantic, composable, parameterize-able and executable documents",source:"@site/references/schema/index.md",sourceDirName:"schema",slug:"/schema",permalink:"/references/schema",editUrl:"https://github.com/stencila/stencila/edit/master/help/references/schema/index.md",tags:[],version:"current",lastUpdatedBy:"Nokome Bentley",lastUpdatedAt:1620283370,formattedLastUpdatedAt:"5/6/2021",frontMatter:{sidebar_label:"Introduction",title:"Stencila Schema",slug:"/schema"},sidebar:"sidebar",previous:{title:"References",permalink:"/references/"},next:{title:"Article",permalink:"/references/schema/Article"}},c=[{value:"Why an extension to schema.org?",id:"why-an-extension-to-schemaorg",children:[],level:3},{value:"It&#39;s about names, not formats",id:"its-about-names-not-formats",children:[],level:3},{value:"But, sometimes (often) we need more than just names",id:"but-sometimes-often-we-need-more-than-just-names",children:[],level:3},{value:"Using JSON Schema for validation and type safety",id:"using-json-schema-for-validation-and-type-safety",children:[],level:3},{value:"But, JSON Schema can be a pain to write",id:"but-json-schema-can-be-a-pain-to-write",children:[],level:3},{value:"Programming language bindings",id:"programming-language-bindings",children:[],level:3}],m={toc:c};function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Extensions to schema.org to support semantic, composable, parameterize-able and executable documents")),(0,s.kt)("p",null,"This is the Stencila Schema, an extension to ",(0,s.kt)("a",{parentName:"p",href:"https://schema.org"},"schema.org")," to support semantic, composable, parameterize-able and executable documents. It also provides implementations of schema.org types (and our extensions) for several languages including JSON Schema, Typescript, Python and R. It is a central part of our platform that is used widely throughout our open-source tools as the data model for executable documents."),(0,s.kt)("h3",{id:"why-an-extension-to-schemaorg"},"Why an extension to schema.org?"),(0,s.kt)("p",null,"Schema.org is ",(0,s.kt)("em",{parentName:"p"},'"a collaborative, community activity with a mission to create, maintain, and promote schemas for structured data on the Internet, on web pages, in email messages, and beyond."'),". Schema.org is is used by most major search engines to provide richer, more semantic, search results. More and more web sites are using the schema.org vocabulary and there is increasing uptake in the research community e.g. bioschemas.org, codemeta.github.io"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://schema.org/docs/full.html"},"schema.org vocabulary")," encompasses many varied concepts and topics. Of particular relevance to Stencila are types for research outputs such as ",(0,s.kt)("a",{parentName:"p",href:"https://schema.org/CreativeWork"},(0,s.kt)("inlineCode",{parentName:"a"},"ScholarlyArticle")),", ",(0,s.kt)("a",{parentName:"p",href:"https://schema.org/Dataset"},(0,s.kt)("inlineCode",{parentName:"a"},"Dataset"))," and ",(0,s.kt)("a",{parentName:"p",href:"https://schema.org/SoftwareSourceCode"},(0,s.kt)("inlineCode",{parentName:"a"},"SoftwareSourceCode"))," and their associated meta data e.g. ",(0,s.kt)("a",{parentName:"p",href:"https://schema.org/Person"},(0,s.kt)("inlineCode",{parentName:"a"},"Person")),", ",(0,s.kt)("a",{parentName:"p",href:"https://schema.org/Organization"},(0,s.kt)("inlineCode",{parentName:"a"},"Organization")),", and ",(0,s.kt)("a",{parentName:"p",href:"https://schema.org/Organization"},(0,s.kt)("inlineCode",{parentName:"a"},"Organization")),"."),(0,s.kt)("p",null,"However, schema.org does not provide types for the ",(0,s.kt)("em",{parentName:"p"},"content"),' of research articles. This is where our extensions come in. This schema adds types (and some properties to existing types) to be able to represent a complete executable, research article. These extensions types include "static" ',(0,s.kt)("em",{parentName:"p"},"nodes")," such as ",(0,s.kt)("a",{parentName:"p",href:"https://schema.stenci.la/paragraph"},(0,s.kt)("inlineCode",{parentName:"a"},"Paragraph")),", ",(0,s.kt)("a",{parentName:"p",href:"https://schema.stenci.la/heading"},(0,s.kt)("inlineCode",{parentName:"a"},"Heading"))," and ",(0,s.kt)("a",{parentName:"p",href:"https://schema.stenci.la/figure"},(0,s.kt)("inlineCode",{parentName:"a"},"Figure")),', and "dynamic" nodes involved in execution such as ',(0,s.kt)("a",{parentName:"p",href:"https://schema.stenci.la/codechunk"},(0,s.kt)("inlineCode",{parentName:"a"},"CodeChunk"))," and ",(0,s.kt)("a",{parentName:"p",href:"https://schema.stenci.la/parameter"},(0,s.kt)("inlineCode",{parentName:"a"},"Parameter")),"."),(0,s.kt)("h3",{id:"its-about-names-not-formats"},"It's about names, not formats"),(0,s.kt)("p",null,"An important aspect of schema.org and similar vocabularies are that they really just define a shared way of naming things. They are format agnostic. As schema.org says, it can be used with ",(0,s.kt)("em",{parentName:"p"},'"many different encodings, including RDFa, Microdata and JSON-LD"'),"."),(0,s.kt)("p",null,"We extend this philosophy to the encoding of executable articles, allowing them to be encoded in several existing document formats. For example, the following very small ",(0,s.kt)("a",{parentName:"p",href:"https://schema.stenci.la/article"},(0,s.kt)("inlineCode",{parentName:"a"},"Article")),", containing only one ",(0,s.kt)("a",{parentName:"p",href:"https://schema.stenci.la/paragraph"},(0,s.kt)("inlineCode",{parentName:"a"},"Paragraph")),", and with no metadata, can be represented in Markdown:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-md"},"Hello world!\n")),(0,s.kt)("p",null,"as YAML,"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"type: Article\ncontent:\n  - type: Paragraph\n    content:\n      - Hello world!\n")),(0,s.kt)("p",null,"as a Jupyter Notebook,"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "nbformat": 4,\n  "nbformat_minor": 4,\n  "metadata": {\n    "title": ""\n  },\n  "cells": [\n    {\n      "cell_type": "markdown",\n      "metadata": {},\n      "source": ["Hello world!"]\n    }\n  ]\n}\n')),(0,s.kt)("p",null,"as JSON-LD,"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": "http://schema.stenci.la/v1/jsonld/",\n  "type": "Article",\n  "content": [\n    {\n      "type": "Paragraph",\n      "content": ["Hello world!"]\n    }\n  ]\n}\n')),(0,s.kt)("p",null,"or as HTML with Microdata,"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<article itemscope="" itemtype="http://schema.org/Article">\n  <p itemscope="" itemtype="http://schema.stenci.la/Paragraph">Hello world!</p>\n</article>\n')),(0,s.kt)("p",null,"This repository does not deal with format conversion per se. Please see ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/stencila/encoda"},"Encoda")," for that. However, when developing our schema.org extensions, we aimed to not reinvent the wheel and maintain consistency and compatibility with existing ",(0,s.kt)("em",{parentName:"p"},"schemas")," for representing document content. Those include:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://jats.nlm.nih.gov/"},"JATS XML")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/syntax-tree/mdast"},"MDAST")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://docs.oasis-open.org/office/v1.2/OpenDocument-v1.2-part1.html"},"Open Document Format")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/jgm/pandoc-types"},"Pandoc Types"))),(0,s.kt)("h3",{id:"but-sometimes-often-we-need-more-than-just-names"},"But, sometimes (often) we need more than just names"),(0,s.kt)("p",null,"Despite its name, schema.org does not define strong rules around the ",(0,s.kt)("em",{parentName:"p"},"shape"),' of data, as say a database schema or XML schema does. All the properties of schema.org types are optional, and although they have "expected types", this is not enforced. In addition, properties can be singular values or array, but always have a singular name. For example, a ',(0,s.kt)("inlineCode",{parentName:"p"},"Article")," has a ",(0,s.kt)("inlineCode",{parentName:"p"},"author")," property which could be undefined, a string, a ",(0,s.kt)("inlineCode",{parentName:"p"},"Person")," or an ",(0,s.kt)("inlineCode",{parentName:"p"},"Organization"),", or an array of ",(0,s.kt)("inlineCode",{parentName:"p"},"Person")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"Organization")," items."),(0,s.kt)("p",null,"This flexibility makes a lot of sense for the primary purpose of schema.org: semantic annotation of other content. However, for use as an internal data model, as in Stencila, it can result in a lot of defensive code to check exactly which of these alternatives a property value is. And writing more code than you need to is A Bad Thing\u2122."),(0,s.kt)("p",null,'Instead, we wanted a schema that placed some restrictions on the shape of executable documents. This has flow on benefits for developer experience such as type inference and checking. To achieve this the Stencila Schema defines schema.org types using JSON Schema. Yes, that\'s a lot of "schemas", but bear with us...'),(0,s.kt)("h3",{id:"using-json-schema-for-validation-and-type-safety"},"Using JSON Schema for validation and type safety"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSON Schema")," is ",(0,s.kt)("em",{parentName:"p"},'"a vocabulary that allows you to annotate and validate JSON documents"'),". It is a draft internet standard, which like schema.org has a growing adoption e.g. ",(0,s.kt)("a",{parentName:"p",href:"https://www.schemastore.org/json/"},"schemastore.org"),"."),(0,s.kt)("p",null,"In Stencila Schema, when we define a type of document node, either a schema.org type, or an extension, we define it,"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"as a JSON Schema document, with restrictions on the marginality, type and shape of it's properties"),(0,s.kt)("li",{parentName:"ul"},"using schema.org type and property names, pluralized as appropriate to avoid confusion")),(0,s.kt)("p",null,"For example, an ",(0,s.kt)("inlineCode",{parentName:"p"},"Article")," is defined to have an optional ",(0,s.kt)("inlineCode",{parentName:"p"},"authors")," property (note the ",(0,s.kt)("inlineCode",{parentName:"p"},"s")," this time) which is always an array whose items are either a ",(0,s.kt)("inlineCode",{parentName:"p"},"Person")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"Organization"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "Article",\n  "@id": "schema:Article",\n  "description": "An article, including news and scholarly articles.",\n  "properties": {\n    "authors": {\n      "@id": "schema:author",\n      "description": "The authors of this creative work.",\n      "type": "array",\n      "items": {\n        "anyOf": [\n          {\n            "$ref": "Person.schema.json"\n          },\n          {\n            "$ref": "Organization.schema.json"\n          }\n        ]\n      }\n    }\n...\n\n')),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"To keep things simpler, this is a stripped down version of the actual",(0,s.kt)("a",{parentName:"em",href:"https://schema.stenci.la/Person.schema.json"},(0,s.kt)("inlineCode",{parentName:"a"},"Person.schema.json")),".")),(0,s.kt)("p",null,"With a JSON Schema, we are able to:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"use a JSON Schema validator to check that content meets the schema"),(0,s.kt)("li",{parentName:"ul"},"generate types (i.e. ",(0,s.kt)("inlineCode",{parentName:"li"},"interface")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"class")," elements) matching the schema in other languages.")),(0,s.kt)("h3",{id:"but-json-schema-can-be-a-pain-to-write"},"But, JSON Schema can be a pain to write"),(0,s.kt)("p",null,"JSON can be quite fiddly to write by hand. And JSON Schema lacks a way to easily express parent-child relationships between types. For these reasons, we define types using YAML with custom keywords such as ",(0,s.kt)("inlineCode",{parentName:"p"},"extends")," and generate JSON Schema and ultimately bindings for each language from those."),(0,s.kt)("h3",{id:"programming-language-bindings"},"Programming language bindings"),(0,s.kt)("p",null,"Binding for this schema, in the form of installable packages, are currently generated for:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://stencila.github.io/schema/py/docs"},"Python")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://stencila.github.io/schema/r/docs"},"R")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://stencila.github.io/schema/ts/docs"},"Typescript"))),(0,s.kt)("p",null,"Depending on the capabilities of the host language, these packages expose type definitions as well as utility functions for constructing valid Stencila Schema nodes. Each packages has its own documentation auto-generated from the code."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null}),(0,s.kt)("th",{parentName:"tr",align:null}),(0,s.kt)("th",{parentName:"tr",align:null}))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"JSON-LD"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://schema.stenci.la/stencila.jsonld"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/json--ld-%40context-success",alt:"Context"}))),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://stencila.github.io/schema/"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/docs-latest-blue.svg",alt:"Docs"})))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"JSON Schema"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://unpkg.com/browse/@stencila/schema@1/dist/"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/json%20schema-v1-success",alt:"Schema"}))),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://stencila.github.io/schema/"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/docs-latest-blue.svg",alt:"Docs"})))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"TypeScript/JavaScript"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@stencila/schema"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@stencila/schema.svg?style=flat",alt:"NPM"}))),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://stencila.github.io/schema/ts/docs"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/docs-latest-blue.svg",alt:"Docs"})))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Python"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://pypi.org/project/stencila-schema"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/stencila-schema.svg",alt:"PyPI"}))),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://stencila.github.io/schema/py/docs"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/docs-latest-blue.svg",alt:"Docs"})))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"R"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://cran.r-project.org/web/packages/stencilaschema/"},(0,s.kt)("img",{parentName:"a",src:"https://www.r-pkg.org/badges/version/stencilaschema",alt:"CRAN"}))),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://stencila.github.io/schema/r/docs"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/docs-latest-blue.svg",alt:"Docs"})))))))}h.isMDXComponent=!0}}]);