"use strict";(self.webpackChunk_stencila_help=self.webpackChunk_stencila_help||[]).push([[5692],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,u=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return a?n.createElement(u,l(l({ref:t},m),{},{components:a})):n.createElement(u,l({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},394:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>p,toc:()=>m,default:()=>d});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={category:"Text",slug:"/schema/Cite",custom_edit_url:"https://github.com/stencila/schema/edit/master/schema/Cite.schema.yaml"},s="Cite",p={unversionedId:"schema/docs/Cite",id:"schema/docs/Cite",isDocsHomePage:!1,title:"Cite",description:"A reference to a CreativeWork that is cited in another CreativeWork.",source:"@site/references/schema/docs/Cite.md",sourceDirName:"schema/docs",slug:"/schema/Cite",permalink:"/references/schema/Cite",editUrl:"https://github.com/stencila/schema/edit/master/schema/Cite.schema.yaml",tags:[],version:"current",frontMatter:{category:"Text",slug:"/schema/Cite",custom_edit_url:"https://github.com/stencila/schema/edit/master/schema/Cite.schema.yaml"},sidebar:"sidebar",previous:{title:"Citation Intent Enumeration",permalink:"/references/schema/CitationIntentEnumeration"},next:{title:"Cite Group",permalink:"/references/schema/CiteGroup"}},m=[{value:"Properties",id:"properties",children:[],level:2},{value:"Notes",id:"notes",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"Related",id:"related",children:[],level:2},{value:"Available as",id:"available-as",children:[],level:2},{value:"Source",id:"source",children:[],level:2}],c={toc:m};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cite"},"Cite"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"A reference to a CreativeWork that is cited in another CreativeWork.")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"Cite")," node is used within a ",(0,i.kt)("a",{parentName:"p",href:"./CreativeWork"},(0,i.kt)("inlineCode",{parentName:"a"},"CreativeWork")),", usually an ",(0,i.kt)("a",{parentName:"p",href:"./Article"},(0,i.kt)("inlineCode",{parentName:"a"},"Article")),", to refer to an other ",(0,i.kt)("inlineCode",{parentName:"p"},"CreativeWork"),". Often a ",(0,i.kt)("inlineCode",{parentName:"p"},"Cite")," will be associated with other citations, in a ",(0,i.kt)("a",{parentName:"p",href:"./CiteGroup"},(0,i.kt)("inlineCode",{parentName:"a"},"CiteGroup")),". "),(0,i.kt)("p",null,"This schema type is marked as ",(0,i.kt)("strong",{parentName:"p"},"unstable")," \u26a0\ufe0f and is subject to change."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"th"},"@id")),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Inherited from"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"target")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.stenci.la/target.jsonld"},"stencila:target")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The target of the citation (URL or reference ID)."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Cite"},"Cite"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"citationIntent"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.stenci.la/citationIntent.jsonld"},"stencila:citationIntent")),(0,i.kt)("td",{parentName:"tr",align:null},"Array of ",(0,i.kt)("a",{parentName:"td",href:"/references/schema/CitationIntentEnumeration"},"CitationIntentEnumeration")),(0,i.kt)("td",{parentName:"tr",align:null},"The type/s of the citation, both factually and rhetorically."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Cite"},"Cite"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"citationMode"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.stenci.la/citationMode.jsonld"},"stencila:citationMode")),(0,i.kt)("td",{parentName:"tr",align:null},"'Parenthetical', 'Narrative', 'NarrativeAuthor', 'NarrativeYear', 'normal', 'suppressAuthor'"),(0,i.kt)("td",{parentName:"tr",align:null},"Determines how the citation is shown within the surrounding text. See note ",(0,i.kt)("a",{parentName:"td",href:"#notes"},"1"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Cite"},"Cite"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"citationPrefix"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.stenci.la/citationPrefix.jsonld"},"stencila:citationPrefix")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Text to show before the citation. See note ",(0,i.kt)("a",{parentName:"td",href:"#notes"},"2"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Cite"},"Cite"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"citationSuffix"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.stenci.la/citationSuffix.jsonld"},"stencila:citationSuffix")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Text to show after the citation. See note ",(0,i.kt)("a",{parentName:"td",href:"#notes"},"3"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Cite"},"Cite"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"content"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.stenci.la/content.jsonld"},"stencila:content")),(0,i.kt)("td",{parentName:"tr",align:null},"Array of ",(0,i.kt)("a",{parentName:"td",href:"/references/schema/InlineContent"},"InlineContent")),(0,i.kt)("td",{parentName:"tr",align:null},"Optional structured content/text of this citation."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Cite"},"Cite"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.org/id"},"schema:id")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The identifier for this item."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Entity"},"Entity"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"meta"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.stenci.la/meta.jsonld"},"stencila:meta")),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"Metadata associated with this item."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Entity"},"Entity"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pageEnd"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.org/pageEnd"},"schema:pageEnd")),(0,i.kt)("td",{parentName:"tr",align:null},"integer ",(0,i.kt)("em",{parentName:"td"},"or")," string"),(0,i.kt)("td",{parentName:"tr",align:null},'The page on which the work ends; for example "138" or "xvi".'),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Cite"},"Cite"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pageStart"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.org/pageStart"},"schema:pageStart")),(0,i.kt)("td",{parentName:"tr",align:null},"integer ",(0,i.kt)("em",{parentName:"td"},"or")," string"),(0,i.kt)("td",{parentName:"tr",align:null},'The page on which the work starts; for example "135" or "xiii".'),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Cite"},"Cite"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pagination"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.org/pagination"},"schema:pagination")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},'Any description of pages that is not separated into pageStart and pageEnd; for example, "1-6, 9, 55".'),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Cite"},"Cite"))))),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"citationMode")," : There are two main citation modes: parenthetical and narrative (a.k.a textual). See ",(0,i.kt)("a",{parentName:"li",href:"https://apastyle.apa.org/style-grammar-guidelines/citations/basic-principles/parenthetical-versus-narrative"},"https://apastyle.apa.org/style-grammar-guidelines/citations/basic-principles/parenthetical-versus-narrative")," for an explanation.  This property is optional and tools are recommended to assume ",(0,i.kt)("inlineCode",{parentName:"li"},"parenthetical"),' if missing.  Narrative citations will usually be of form "As noted by Smith (1992)," but ',(0,i.kt)("inlineCode",{parentName:"li"},"narrative-author"),' allows for "In the early nineties, Smith noted" and ',(0,i.kt)("inlineCode",{parentName:"li"},"narrative-year"),' allows for "As noted by Smith in 1992 and 1993".  Pandoc\'s ',(0,i.kt)("inlineCode",{parentName:"li"},"CitationMode")," enumeration has ",(0,i.kt)("inlineCode",{parentName:"li"},"Normal")," (for ",(0,i.kt)("inlineCode",{parentName:"li"},"parenthetical"),"), ",(0,i.kt)("inlineCode",{parentName:"li"},"AuthorInText")," (for ",(0,i.kt)("inlineCode",{parentName:"li"},"textual"),"), and ",(0,i.kt)("inlineCode",{parentName:"li"},"SuppressAuthor")," (for ",(0,i.kt)("inlineCode",{parentName:"li"},"textual-year"),"). See ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/jgm/pandoc-types/blob/0158cd0e2a2ca9d6f14389a1a57bc64cab45a7dd/src/Text/Pandoc/Definition.hs#L353"},"https://github.com/jgm/pandoc-types/blob/0158cd0e2a2ca9d6f14389a1a57bc64cab45a7dd/src/Text/Pandoc/Definition.hs#L353"),".  LaTeX's ",(0,i.kt)("inlineCode",{parentName:"li"},"natbib")," package has ",(0,i.kt)("inlineCode",{parentName:"li"},"\\citep{}")," (for ",(0,i.kt)("inlineCode",{parentName:"li"},"parenthetical"),"), ",(0,i.kt)("inlineCode",{parentName:"li"},"\\citet{}")," (for ",(0,i.kt)("inlineCode",{parentName:"li"},"textual"),"), ",(0,i.kt)("inlineCode",{parentName:"li"},"\\citeauthor{}")," (for ",(0,i.kt)("inlineCode",{parentName:"li"},"textual-author"),"), ",(0,i.kt)("inlineCode",{parentName:"li"},"\\citeyear{}")," (for ",(0,i.kt)("inlineCode",{parentName:"li"},"textual-year"),"). See ",(0,i.kt)("a",{parentName:"li",href:"https://www.overleaf.com/learn/latex/Natbib_citation_styles"},"https://www.overleaf.com/learn/latex/Natbib_citation_styles"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"citationPrefix")," : Previously this was name ",(0,i.kt)("inlineCode",{parentName:"li"},"prefix")," but for consistency with ",(0,i.kt)("inlineCode",{parentName:"li"},"citationMode")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"honorificPrefix"),", to avoid ambiguity with other prefixes was renamed to ",(0,i.kt)("inlineCode",{parentName:"li"},"citationPrefix"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"citationSuffix")," : See comment on ",(0,i.kt)("inlineCode",{parentName:"li"},"citationPrefix")," regarding naming.")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "Article",\n  "title": "An example of using the Cite node type",\n  "authors": [\n    {\n      "type": "Person",\n      "givenNames": [\n        "Joe"\n      ],\n      "familyNames": [\n        "Bloggs"\n      ]\n    }\n  ],\n  "content": [\n    {\n      "type": "Paragraph",\n      "content": [\n        "A citation of ",\n        {\n          "type": "Cite",\n          "target": "some-one-else-1991"\n        },\n        "."\n      ]\n    }\n  ],\n  "references": [\n    {\n      "type": "Article",\n      "id": "some-one-else-1991",\n      "title": "Another article by someone else",\n      "authors": [\n        {\n          "type": "Person",\n          "givenNames": [\n            "Some",\n            "One"\n          ],\n          "familyNames": [\n            "Else"\n          ]\n        }\n      ],\n      "datePublished": "1991"\n    }\n  ]\n}\n')),(0,i.kt)("h2",{id:"related"},"Related"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Parent: ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Entity"},"Entity")),(0,i.kt)("li",{parentName:"ul"},"Descendants: None")),(0,i.kt)("h2",{id:"available-as"},"Available as"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://schema.stenci.la/Cite.jsonld"},"JSON-LD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://schema.stenci.la/v1/Cite.schema.json"},"JSON Schema")),(0,i.kt)("li",{parentName:"ul"},"Python ",(0,i.kt)("a",{parentName:"li",href:"https://stencila.github.io/schema/python/docs/types.html#schema.types.Cite"},(0,i.kt)("inlineCode",{parentName:"a"},"class Cite"))),(0,i.kt)("li",{parentName:"ul"},"TypeScript ",(0,i.kt)("a",{parentName:"li",href:"https://stencila.github.io/schema/ts/docs/interfaces/cite.html"},(0,i.kt)("inlineCode",{parentName:"a"},"interface Cite"))),(0,i.kt)("li",{parentName:"ul"},"R ",(0,i.kt)("a",{parentName:"li",href:"https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf"},(0,i.kt)("inlineCode",{parentName:"a"},"class Cite"))),(0,i.kt)("li",{parentName:"ul"},"Rust ",(0,i.kt)("a",{parentName:"li",href:"https://docs.rs/stencila-schema/latest/stencila_schema/struct.Cite.html"},(0,i.kt)("inlineCode",{parentName:"a"},"struct Cite")))),(0,i.kt)("h2",{id:"source"},"Source"),(0,i.kt)("p",null,"This documentation was generated from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stencila/schema/blob/master/schema/Cite.schema.yaml"},"Cite.schema.yaml"),"."))}d.isMDXComponent=!0}}]);