"use strict";(self.webpackChunk_stencila_help=self.webpackChunk_stencila_help||[]).push([[8982],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},o=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,u=d["".concat(m,".").concat(h)]||d[h]||c[h]||i;return n?a.createElement(u,s(s({ref:t},o),{},{components:n})):a.createElement(u,s({ref:t},o))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5216:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>m,metadata:()=>p,toc:()=>o,default:()=>d});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],l={category:"Text",slug:"/schema/List",custom_edit_url:"https://github.com/stencila/schema/edit/master/schema/List.schema.yaml"},m="List",p={unversionedId:"schema/docs/List",id:"schema/docs/List",isDocsHomePage:!1,title:"List",description:"A list of items.",source:"@site/references/schema/docs/List.md",sourceDirName:"schema/docs",slug:"/schema/List",permalink:"/references/schema/List",editUrl:"https://github.com/stencila/schema/edit/master/schema/List.schema.yaml",tags:[],version:"current",frontMatter:{category:"Text",slug:"/schema/List",custom_edit_url:"https://github.com/stencila/schema/edit/master/schema/List.schema.yaml"},sidebar:"sidebar",previous:{title:"Link",permalink:"/references/schema/Link"},next:{title:"List Item",permalink:"/references/schema/ListItem"}},o=[{value:"Properties",id:"properties",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"Related",id:"related",children:[],level:2},{value:"Available as",id:"available-as",children:[],level:2},{value:"Source",id:"source",children:[],level:2}],c={toc:o};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"list"},"List"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"A list of items.")),(0,i.kt)("p",null,"This is an implementation, and renaming, of schema.org ",(0,i.kt)("a",{parentName:"p",href:"https://schema.org/ItemList"},(0,i.kt)("inlineCode",{parentName:"a"},"ItemList")),". Renaming was done as ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," was considered a more developer friendly alternative. Similarly, schema.org properties ",(0,i.kt)("inlineCode",{parentName:"p"},"itemListElement")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"itemListOrder")," were renamed to ",(0,i.kt)("inlineCode",{parentName:"p"},"items")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"order"),". Note that, as with every other such renaming in Stencila Schema, a mapping between names is defined and it is trivial to save Stencila Schema documents using the schema.org vocabulary if so desired.  Analogues of ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," in other schema include:   - JATS XML ",(0,i.kt)("a",{parentName:"p",href:"https://jats.nlm.nih.gov/articleauthoring/tag-library/1.2/element/list.html"},(0,i.kt)("inlineCode",{parentName:"a"},"<list>")),"   - HTML ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul"},(0,i.kt)("inlineCode",{parentName:"a"},"<ul>"))," and ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol"},(0,i.kt)("inlineCode",{parentName:"a"},"<ol>")),"   - MDAST ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/syntax-tree/mdast#list"},(0,i.kt)("inlineCode",{parentName:"a"},"List")),"   - OpenDocument ",(0,i.kt)("a",{parentName:"p",href:"http://docs.oasis-open.org/office/v1.2/os/OpenDocument-v1.2-os-part1.html#__RefHeading__1415148_253892949"},(0,i.kt)("inlineCode",{parentName:"a"},"<text:list>"))," "),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"th"},"@id")),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Inherited from"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"items")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.org/itemListElement"},"schema:itemListElement")),(0,i.kt)("td",{parentName:"tr",align:null},"Array of ",(0,i.kt)("a",{parentName:"td",href:"/references/schema/ListItem"},"ListItem")),(0,i.kt)("td",{parentName:"tr",align:null},"The items in the list"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/List"},"List"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.org/id"},"schema:id")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The identifier for this item."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Entity"},"Entity"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"meta"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.stenci.la/meta.jsonld"},"stencila:meta")),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"Metadata associated with this item."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Entity"},"Entity"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"order"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.org/itemListOrder"},"schema:itemListOrder")),(0,i.kt)("td",{parentName:"tr",align:null},"'Ascending', 'Descending', 'Unordered'"),(0,i.kt)("td",{parentName:"tr",align:null},"Type of ordering."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/List"},"List"))))),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "List",\n  "items": [\n    {\n      "type": "ListItem",\n      "content": [\n        "Item One"\n      ]\n    },\n    {\n      "type": "ListItem",\n      "content": [\n        "Item Two"\n      ]\n    },\n    {\n      "type": "ListItem",\n      "content": [\n        "Item Three"\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "List",\n  "items": [\n    {\n      "type": "ListItem",\n      "content": "Item One"\n    },\n    {\n      "type": "ListItem",\n      "content": [\n        "This is a nested item",\n        {\n          "type": "List",\n          "order": "ordered",\n          "items": [\n            {\n              "type": "ListItem",\n              "content": [\n                "Nested Item One"\n              ]\n            },\n            {\n              "type": "ListItem",\n              "content": [\n                "Nested Item Two"\n              ]\n            },\n            {\n              "type": "ListItem",\n              "content": [\n                "Nested Item Three"\n              ]\n            }\n          ]\n        }\n      ]\n    },\n    {\n      "type": "ListItem",\n      "content": [\n        "Item Three"\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "List",\n  "items": [\n    {\n      "type": "ListItem",\n      "checked": false,\n      "content": [\n        "Todo item"\n      ]\n    },\n    {\n      "type": "ListItem",\n      "checked": true,\n      "content": [\n        "Completed todo item"\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("h2",{id:"related"},"Related"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Parent: ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Entity"},"Entity")),(0,i.kt)("li",{parentName:"ul"},"Descendants: None")),(0,i.kt)("h2",{id:"available-as"},"Available as"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://schema.stenci.la/ItemList.jsonld"},"JSON-LD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://schema.stenci.la/v1/List.schema.json"},"JSON Schema")),(0,i.kt)("li",{parentName:"ul"},"Python ",(0,i.kt)("a",{parentName:"li",href:"https://stencila.github.io/schema/python/docs/types.html#schema.types.ItemList"},(0,i.kt)("inlineCode",{parentName:"a"},"class List"))),(0,i.kt)("li",{parentName:"ul"},"TypeScript ",(0,i.kt)("a",{parentName:"li",href:"https://stencila.github.io/schema/ts/docs/interfaces/itemlist.html"},(0,i.kt)("inlineCode",{parentName:"a"},"interface List"))),(0,i.kt)("li",{parentName:"ul"},"R ",(0,i.kt)("a",{parentName:"li",href:"https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf"},(0,i.kt)("inlineCode",{parentName:"a"},"class List"))),(0,i.kt)("li",{parentName:"ul"},"Rust ",(0,i.kt)("a",{parentName:"li",href:"https://docs.rs/stencila-schema/latest/stencila_schema/struct.ItemList.html"},(0,i.kt)("inlineCode",{parentName:"a"},"struct List")))),(0,i.kt)("h2",{id:"source"},"Source"),(0,i.kt)("p",null,"This documentation was generated from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stencila/schema/blob/master/schema/List.schema.yaml"},"List.schema.yaml"),"."))}d.isMDXComponent=!0}}]);