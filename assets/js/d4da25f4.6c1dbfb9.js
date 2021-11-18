"use strict";(self.webpackChunk_stencila_help=self.webpackChunk_stencila_help||[]).push([[8643],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},o=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),h=c(a),d=n,u=h["".concat(s,".").concat(d)]||h[d]||m[d]||l;return a?r.createElement(u,p(p({ref:t},o),{},{components:a})):r.createElement(u,p({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var c=2;c<l;c++)p[c]=a[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5552:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>c,toc:()=>o,default:()=>h});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),p=["components"],i={category:"Text",slug:"/schema/Paragraph",custom_edit_url:"https://github.com/stencila/schema/edit/master/schema/Paragraph.schema.yaml"},s="Paragraph",c={unversionedId:"schema/docs/Paragraph",id:"schema/docs/Paragraph",isDocsHomePage:!1,title:"Paragraph",description:"Paragraph",source:"@site/references/schema/docs/Paragraph.md",sourceDirName:"schema/docs",slug:"/schema/Paragraph",permalink:"/references/schema/Paragraph",editUrl:"https://github.com/stencila/schema/edit/master/schema/Paragraph.schema.yaml",tags:[],version:"current",frontMatter:{category:"Text",slug:"/schema/Paragraph",custom_edit_url:"https://github.com/stencila/schema/edit/master/schema/Paragraph.schema.yaml"},sidebar:"sidebar",previous:{title:"Note",permalink:"/references/schema/Note"},next:{title:"Quote",permalink:"/references/schema/Quote"}},o=[{value:"Properties",id:"properties",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"Related",id:"related",children:[],level:2},{value:"Available as",id:"available-as",children:[],level:2},{value:"Source",id:"source",children:[],level:2}],m={toc:o};function h(e){var t=e.components,a=(0,n.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"paragraph"},"Paragraph"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Paragraph")),(0,l.kt)("p",null,"Analogues of ",(0,l.kt)("inlineCode",{parentName:"p"},"Paragraph")," in other schema include:   - HTML ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p"},(0,l.kt)("inlineCode",{parentName:"a"},"<p>")),"   - JATS XML ",(0,l.kt)("a",{parentName:"p",href:"https://jats.nlm.nih.gov/articleauthoring/tag-library/1.2/element/p.html"},(0,l.kt)("inlineCode",{parentName:"a"},"<p>")),"   - MDAST ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/syntax-tree/mdast#Paragraph"},(0,l.kt)("inlineCode",{parentName:"a"},"Paragraph")),"   - OpenDocument ",(0,l.kt)("a",{parentName:"p",href:"http://docs.oasis-open.org/office/v1.2/os/OpenDocument-v1.2-os-part1.html#__RefHeading__1415138_253892949"},(0,l.kt)("inlineCode",{parentName:"a"},"<text:p>")),"   - Pandoc ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/jgm/pandoc-types/blob/1.17.5.4/Text/Pandoc/Definition.hs#L220"},(0,l.kt)("inlineCode",{parentName:"a"},"Para"))," "),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"@id")),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Inherited from"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"content")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.stenci.la/content.jsonld"},"stencila:content")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of ",(0,l.kt)("a",{parentName:"td",href:"/references/schema/InlineContent"},"InlineContent")),(0,l.kt)("td",{parentName:"tr",align:null},"The contents of the paragraph."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Paragraph"},"Paragraph"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/id"},"schema:id")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The identifier for this item."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Entity"},"Entity"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"meta"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.stenci.la/meta.jsonld"},"stencila:meta")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Metadata associated with this item."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Entity"},"Entity"))))),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "Paragraph",\n  "content": [\n    "Some text content representing ideas expressed as words."\n  ]\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "Paragraph",\n  "content": [\n    "Some text with some",\n    {\n      "type": "Emphasis",\n      "content": [\n        "emphasized words"\n      ]\n    },\n    " and ",\n    {\n      "type": "Strong",\n      "content": [\n        "some strongly emphasized words"\n      ]\n    }\n  ]\n}\n')),(0,l.kt)("h2",{id:"related"},"Related"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Parent: ",(0,l.kt)("a",{parentName:"li",href:"/references/schema/Entity"},"Entity")),(0,l.kt)("li",{parentName:"ul"},"Descendants: None")),(0,l.kt)("h2",{id:"available-as"},"Available as"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://schema.stenci.la/Paragraph.jsonld"},"JSON-LD")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://schema.stenci.la/v1/Paragraph.schema.json"},"JSON Schema")),(0,l.kt)("li",{parentName:"ul"},"Python ",(0,l.kt)("a",{parentName:"li",href:"https://stencila.github.io/schema/python/docs/types.html#schema.types.Paragraph"},(0,l.kt)("inlineCode",{parentName:"a"},"class Paragraph"))),(0,l.kt)("li",{parentName:"ul"},"TypeScript ",(0,l.kt)("a",{parentName:"li",href:"https://stencila.github.io/schema/ts/docs/interfaces/paragraph.html"},(0,l.kt)("inlineCode",{parentName:"a"},"interface Paragraph"))),(0,l.kt)("li",{parentName:"ul"},"R ",(0,l.kt)("a",{parentName:"li",href:"https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf"},(0,l.kt)("inlineCode",{parentName:"a"},"class Paragraph"))),(0,l.kt)("li",{parentName:"ul"},"Rust ",(0,l.kt)("a",{parentName:"li",href:"https://docs.rs/stencila-schema/latest/stencila_schema/struct.Paragraph.html"},(0,l.kt)("inlineCode",{parentName:"a"},"struct Paragraph")))),(0,l.kt)("h2",{id:"source"},"Source"),(0,l.kt)("p",null,"This documentation was generated from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/stencila/schema/blob/master/schema/Paragraph.schema.yaml"},"Paragraph.schema.yaml"),"."))}h.isMDXComponent=!0}}]);