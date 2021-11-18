"use strict";(self.webpackChunk_stencila_help=self.webpackChunk_stencila_help||[]).push([[6762],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),m=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=m(a),h=r,u=d["".concat(c,".").concat(h)]||d[h]||o[h]||l;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4165:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>m,toc:()=>p,default:()=>d});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],s={category:"Text",slug:"/schema/Heading",custom_edit_url:"https://github.com/stencila/schema/edit/master/schema/Heading.schema.yaml"},c="Heading",m={unversionedId:"schema/docs/Heading",id:"schema/docs/Heading",isDocsHomePage:!1,title:"Heading",description:"A heading.",source:"@site/references/schema/docs/Heading.md",sourceDirName:"schema/docs",slug:"/schema/Heading",permalink:"/references/schema/Heading",editUrl:"https://github.com/stencila/schema/edit/master/schema/Heading.schema.yaml",tags:[],version:"current",frontMatter:{category:"Text",slug:"/schema/Heading",custom_edit_url:"https://github.com/stencila/schema/edit/master/schema/Heading.schema.yaml"},sidebar:"sidebar",previous:{title:"Emphasis",permalink:"/references/schema/Emphasis"},next:{title:"Include",permalink:"/references/schema/Include"}},p=[{value:"Properties",id:"properties",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"Related",id:"related",children:[],level:2},{value:"Available as",id:"available-as",children:[],level:2},{value:"Source",id:"source",children:[],level:2}],o={toc:p};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"heading"},"Heading"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"A heading.")),(0,l.kt)("p",null,"Analogues of ",(0,l.kt)("inlineCode",{parentName:"p"},"Delete")," in other schema include:   - HTML ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1"},(0,l.kt)("inlineCode",{parentName:"a"},"<h1>")," to ",(0,l.kt)("inlineCode",{parentName:"a"},"<h6>")),"   - JATS XML ",(0,l.kt)("a",{parentName:"p",href:"https://jats.nlm.nih.gov/archiving/tag-library/1.1/element/title.html"},(0,l.kt)("inlineCode",{parentName:"a"},"<title>")),"   - Pandoc ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/jgm/pandoc-types/blob/1.17.5.4/Text/Pandoc/Definition.hs#L233"},(0,l.kt)("inlineCode",{parentName:"a"},"Header"))," "),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"@id")),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Inherited from"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"content")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.stenci.la/content.jsonld"},"stencila:content")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of ",(0,l.kt)("a",{parentName:"td",href:"/references/schema/InlineContent"},"InlineContent")),(0,l.kt)("td",{parentName:"tr",align:null},"Content of the heading."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Heading"},"Heading"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"depth"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.stenci.la/depth.jsonld"},"stencila:depth")),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"The depth of the heading."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Heading"},"Heading"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/id"},"schema:id")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The identifier for this item."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Entity"},"Entity"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"meta"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.stenci.la/meta.jsonld"},"stencila:meta")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Metadata associated with this item."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Entity"},"Entity"))))),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "Heading",\n  "depth": 2,\n  "content": [\n    "Secondary Heading"\n  ]\n}\n')),(0,l.kt)("h2",{id:"related"},"Related"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Parent: ",(0,l.kt)("a",{parentName:"li",href:"/references/schema/Entity"},"Entity")),(0,l.kt)("li",{parentName:"ul"},"Descendants: None")),(0,l.kt)("h2",{id:"available-as"},"Available as"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://schema.stenci.la/Heading.jsonld"},"JSON-LD")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://schema.stenci.la/v1/Heading.schema.json"},"JSON Schema")),(0,l.kt)("li",{parentName:"ul"},"Python ",(0,l.kt)("a",{parentName:"li",href:"https://stencila.github.io/schema/python/docs/types.html#schema.types.Heading"},(0,l.kt)("inlineCode",{parentName:"a"},"class Heading"))),(0,l.kt)("li",{parentName:"ul"},"TypeScript ",(0,l.kt)("a",{parentName:"li",href:"https://stencila.github.io/schema/ts/docs/interfaces/heading.html"},(0,l.kt)("inlineCode",{parentName:"a"},"interface Heading"))),(0,l.kt)("li",{parentName:"ul"},"R ",(0,l.kt)("a",{parentName:"li",href:"https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf"},(0,l.kt)("inlineCode",{parentName:"a"},"class Heading"))),(0,l.kt)("li",{parentName:"ul"},"Rust ",(0,l.kt)("a",{parentName:"li",href:"https://docs.rs/stencila-schema/latest/stencila_schema/struct.Heading.html"},(0,l.kt)("inlineCode",{parentName:"a"},"struct Heading")))),(0,l.kt)("h2",{id:"source"},"Source"),(0,l.kt)("p",null,"This documentation was generated from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/stencila/schema/blob/master/schema/Heading.schema.yaml"},"Heading.schema.yaml"),"."))}d.isMDXComponent=!0}}]);