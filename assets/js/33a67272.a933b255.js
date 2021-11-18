"use strict";(self.webpackChunk_stencila_help=self.webpackChunk_stencila_help||[]).push([[8205],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,k=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return a?n.createElement(k,l(l({ref:t},o),{},{components:a})):n.createElement(k,l({ref:t},o))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m.mdxType="string"==typeof e?e:r,l[1]=m;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2315:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>m,contentTitle:()=>s,metadata:()=>p,toc:()=>o,default:()=>d});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],m={category:"Text",slug:"/schema/ListItem",custom_edit_url:"https://github.com/stencila/schema/edit/master/schema/ListItem.schema.yaml"},s="List Item",p={unversionedId:"schema/docs/ListItem",id:"schema/docs/ListItem",isDocsHomePage:!1,title:"List Item",description:"A single item in a list.",source:"@site/references/schema/docs/ListItem.md",sourceDirName:"schema/docs",slug:"/schema/ListItem",permalink:"/references/schema/ListItem",editUrl:"https://github.com/stencila/schema/edit/master/schema/ListItem.schema.yaml",tags:[],version:"current",frontMatter:{category:"Text",slug:"/schema/ListItem",custom_edit_url:"https://github.com/stencila/schema/edit/master/schema/ListItem.schema.yaml"},sidebar:"sidebar",previous:{title:"List",permalink:"/references/schema/List"},next:{title:"Mark",permalink:"/references/schema/Mark"}},o=[{value:"Properties",id:"properties",children:[],level:2},{value:"Notes",id:"notes",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"Related",id:"related",children:[],level:2},{value:"Available as",id:"available-as",children:[],level:2},{value:"Source",id:"source",children:[],level:2}],c={toc:o};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"list-item"},"List Item"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"A single item in a list.")),(0,i.kt)("p",null,"This is an implementation, and extension, of schema.org ",(0,i.kt)("a",{parentName:"p",href:"https://schema.org/ListItem"},(0,i.kt)("inlineCode",{parentName:"a"},"ListItem")),". It extends schema.ord ",(0,i.kt)("inlineCode",{parentName:"p"},"ListItem")," by adding ",(0,i.kt)("inlineCode",{parentName:"p"},"content")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"isChecked")," properties.  Analogues of ",(0,i.kt)("inlineCode",{parentName:"p"},"ListItem")," in other schema include:   - JATS XML ",(0,i.kt)("inlineCode",{parentName:"p"},"<list-item>"),"](",(0,i.kt)("a",{parentName:"p",href:"https://jats.nlm.nih.gov/articleauthoring/tag-library/1.2/element/list-item.html"},"https://jats.nlm.nih.gov/articleauthoring/tag-library/1.2/element/list-item.html"),")   - HTML ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li"},(0,i.kt)("inlineCode",{parentName:"a"},"<li>")),"   - MDAST ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/syntax-tree/mdast#listitem"},(0,i.kt)("inlineCode",{parentName:"a"},"ListItem")),"   - OpenDocument ",(0,i.kt)("a",{parentName:"p",href:"http://docs.oasis-open.org/office/v1.2/os/OpenDocument-v1.2-os-part1.html#__RefHeading__1415154_253892949"},(0,i.kt)("inlineCode",{parentName:"a"},"<text:list-item>"))," "),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"th"},"@id")),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Inherited from"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"alternateNames"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.org/alternateName"},"schema:alternateName")),(0,i.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,i.kt)("td",{parentName:"tr",align:null},"Alternate names (aliases) for the item."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Thing"},"Thing"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"content"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.stenci.la/content.jsonld"},"stencila:content")),(0,i.kt)("td",{parentName:"tr",align:null},"Array of ",(0,i.kt)("a",{parentName:"td",href:"/references/schema/BlockContent"},"BlockContent")," ",(0,i.kt)("em",{parentName:"td"},"or")," Array of ",(0,i.kt)("a",{parentName:"td",href:"/references/schema/InlineContent"},"InlineContent")),(0,i.kt)("td",{parentName:"tr",align:null},"The content of the list item. See note ",(0,i.kt)("a",{parentName:"td",href:"#notes"},"1"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/ListItem"},"ListItem"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"description"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.org/description"},"schema:description")),(0,i.kt)("td",{parentName:"tr",align:null},"Array of ",(0,i.kt)("a",{parentName:"td",href:"/references/schema/BlockContent"},"BlockContent")," ",(0,i.kt)("em",{parentName:"td"},"or")," Array of ",(0,i.kt)("a",{parentName:"td",href:"/references/schema/InlineContent"},"InlineContent")," ",(0,i.kt)("em",{parentName:"td"},"or")," string"),(0,i.kt)("td",{parentName:"tr",align:null},"A description of the item. See note ",(0,i.kt)("a",{parentName:"td",href:"#notes"},"2"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Thing"},"Thing"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.org/id"},"schema:id")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The identifier for this item."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Entity"},"Entity"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"identifiers"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.org/identifier"},"schema:identifier")),(0,i.kt)("td",{parentName:"tr",align:null},"Array of (",(0,i.kt)("a",{parentName:"td",href:"/references/schema/PropertyValue"},"PropertyValue")," ",(0,i.kt)("em",{parentName:"td"},"or")," string)"),(0,i.kt)("td",{parentName:"tr",align:null},"Any kind of identifier for any kind of Thing. See note ",(0,i.kt)("a",{parentName:"td",href:"#notes"},"3"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Thing"},"Thing"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"images"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.org/image"},"schema:image")),(0,i.kt)("td",{parentName:"tr",align:null},"Array of (",(0,i.kt)("a",{parentName:"td",href:"/references/schema/ImageObject"},"ImageObject")," ",(0,i.kt)("em",{parentName:"td"},"or")," Format 'uri')"),(0,i.kt)("td",{parentName:"tr",align:null},"Images of the item."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Thing"},"Thing"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"isChecked"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.stenci.la/isChecked.jsonld"},"stencila:isChecked")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"A flag to indicate if this list item is checked."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/ListItem"},"ListItem"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"item"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.org/item"},"schema:item")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Node"},"Node")),(0,i.kt)("td",{parentName:"tr",align:null},"The item represented by this list item. See note ",(0,i.kt)("a",{parentName:"td",href:"#notes"},"4"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/ListItem"},"ListItem"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"meta"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.stenci.la/meta.jsonld"},"stencila:meta")),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"Metadata associated with this item."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Entity"},"Entity"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.org/name"},"schema:name")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the item."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Thing"},"Thing"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"position"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.org/position"},"schema:position")),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"The position of the item in a series or sequence of items."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/ListItem"},"ListItem"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"url"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.org/url"},"schema:url")),(0,i.kt)("td",{parentName:"tr",align:null},"Format 'uri'"),(0,i.kt)("td",{parentName:"tr",align:null},"The URL of the item."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Thing"},"Thing"))))),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"content")," : Use either ",(0,i.kt)("inlineCode",{parentName:"li"},"content")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"item"),", not both."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"description")," : Allows for the description to be an array of nodes (e.g. an array of inline content, or a couple of paragraphs), or a string. The ",(0,i.kt)("inlineCode",{parentName:"li"},"minItems")," restriction avoids a string being coerced into an array with a single string item."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"identifiers")," : Some identifiers have specific properties e.g the ",(0,i.kt)("inlineCode",{parentName:"li"},"issn")," property for the ",(0,i.kt)("inlineCode",{parentName:"li"},"Periodical")," type. These should be used in preference to this property which is intended for identifiers that do not yet have a specific property. Identifiers can be represented as strings, but using a ",(0,i.kt)("inlineCode",{parentName:"li"},"PropertyValue")," will usually be better because it allows for ",(0,i.kt)("inlineCode",{parentName:"li"},"propertyID")," (i.e. the type of identifier)."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"item")," : Use either ",(0,i.kt)("inlineCode",{parentName:"li"},"item")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"content"),", not both.")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "ListItem",\n  "content": [\n    "List Item Content"\n  ]\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "ListItem",\n  "content": [\n    "List Item Content",\n    {\n      "type": "List",\n      "order": "ordered",\n      "items": [\n        "Nested Item One"\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "ListItem",\n  "isChecked": true,\n  "content": [\n    "Completed todo item"\n  ]\n}\n')),(0,i.kt)("h2",{id:"related"},"Related"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Parent: ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Thing"},"Thing")),(0,i.kt)("li",{parentName:"ul"},"Descendants: None")),(0,i.kt)("h2",{id:"available-as"},"Available as"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://schema.stenci.la/ListItem.jsonld"},"JSON-LD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://schema.stenci.la/v1/ListItem.schema.json"},"JSON Schema")),(0,i.kt)("li",{parentName:"ul"},"Python ",(0,i.kt)("a",{parentName:"li",href:"https://stencila.github.io/schema/python/docs/types.html#schema.types.ListItem"},(0,i.kt)("inlineCode",{parentName:"a"},"class ListItem"))),(0,i.kt)("li",{parentName:"ul"},"TypeScript ",(0,i.kt)("a",{parentName:"li",href:"https://stencila.github.io/schema/ts/docs/interfaces/listitem.html"},(0,i.kt)("inlineCode",{parentName:"a"},"interface ListItem"))),(0,i.kt)("li",{parentName:"ul"},"R ",(0,i.kt)("a",{parentName:"li",href:"https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf"},(0,i.kt)("inlineCode",{parentName:"a"},"class ListItem"))),(0,i.kt)("li",{parentName:"ul"},"Rust ",(0,i.kt)("a",{parentName:"li",href:"https://docs.rs/stencila-schema/latest/stencila_schema/struct.ListItem.html"},(0,i.kt)("inlineCode",{parentName:"a"},"struct ListItem")))),(0,i.kt)("h2",{id:"source"},"Source"),(0,i.kt)("p",null,"This documentation was generated from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stencila/schema/blob/master/schema/ListItem.schema.yaml"},"ListItem.schema.yaml"),"."))}d.isMDXComponent=!0}}]);