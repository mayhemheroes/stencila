(self.webpackChunk_stencila_help=self.webpackChunk_stencila_help||[]).push([[1890],{3905:(t,e,a)=>{"use strict";a.d(e,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=m(a),h=r,g=d["".concat(o,".").concat(h)]||d[h]||p[h]||i;return a?n.createElement(g,l(l({ref:e},c),{},{components:a})):n.createElement(g,l({ref:e},c))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=d;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,l[1]=s;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9957:(t,e,a)=>{"use strict";a.r(e),a.d(e,{frontMatter:()=>s,contentTitle:()=>o,metadata:()=>m,toc:()=>c,default:()=>d});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),l=["components"],s={category:"Data",slug:"/schema/StringValidator",custom_edit_url:"https://github.com/stencila/schema/edit/master/schema/StringValidator.schema.yaml"},o="String Validator",m={unversionedId:"schema/docs/StringValidator",id:"schema/docs/StringValidator",isDocsHomePage:!1,title:"String Validator",description:"A schema specifying constraints on a string node.",source:"@site/references/schema/docs/StringValidator.md",sourceDirName:"schema/docs",slug:"/schema/StringValidator",permalink:"/references/schema/StringValidator",editUrl:"https://github.com/stencila/schema/edit/master/schema/StringValidator.schema.yaml",tags:[],version:"current",frontMatter:{category:"Data",slug:"/schema/StringValidator",custom_edit_url:"https://github.com/stencila/schema/edit/master/schema/StringValidator.schema.yaml"},sidebar:"sidebar",previous:{title:"String",permalink:"/references/schema/String"},next:{title:"Tuple Validator",permalink:"/references/schema/TupleValidator"}},c=[{value:"Properties",id:"properties",children:[],level:2},{value:"Notes",id:"notes",children:[],level:2},{value:"Related",id:"related",children:[],level:2},{value:"Available as",id:"available-as",children:[],level:2},{value:"Source",id:"source",children:[],level:2}],p={toc:c};function d(t){var e=t.components,a=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"string-validator"},"String Validator"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"A schema specifying constraints on a string node.")),(0,i.kt)("p",null,"A node will be valid against the schema if it is a string that meets the schemas ",(0,i.kt)("inlineCode",{parentName:"p"},"minLength"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"maxLength")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"pattern")," properties. Analogous to the JSON Schema ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," validation ",(0,i.kt)("a",{parentName:"p",href:"https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.1.1"},"type"),". "),(0,i.kt)("p",null,"This schema type is marked as ",(0,i.kt)("strong",{parentName:"p"},"unstable")," \u26a0\ufe0f and is subject to change."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"th"},"@id")),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Inherited from"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.org/id"},"schema:id")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The identifier for this item."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Entity"},"Entity"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"maxLength"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.stenci.la/maxLength.jsonld"},"stencila:maxLength")),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"The maximum length for a string node. See note ",(0,i.kt)("a",{parentName:"td",href:"#notes"},"1"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/StringValidator"},"StringValidator"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"meta"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.stenci.la/meta.jsonld"},"stencila:meta")),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"Metadata associated with this item."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Entity"},"Entity"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"minLength"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.stenci.la/minLength.jsonld"},"stencila:minLength")),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"The minimum length for a string node. See note ",(0,i.kt)("a",{parentName:"td",href:"#notes"},"2"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/StringValidator"},"StringValidator"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pattern"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.stenci.la/pattern.jsonld"},"stencila:pattern")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"A regular expression that a string node must match. See note ",(0,i.kt)("a",{parentName:"td",href:"#notes"},"3"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/StringValidator"},"StringValidator"))))),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"maxLength")," : A string is valid if its length is less than, or exactly equal to, ",(0,i.kt)("inlineCode",{parentName:"li"},"maxLength"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"minLength")," : A string is valid if its length is greater than, or exactly equal to, ",(0,i.kt)("inlineCode",{parentName:"li"},"minLength"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"pattern")," : A string is valid if it is matched by the regular expression.")),(0,i.kt)("h2",{id:"related"},"Related"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Parent: ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Validator"},"Validator")),(0,i.kt)("li",{parentName:"ul"},"Descendants: None")),(0,i.kt)("h2",{id:"available-as"},"Available as"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://schema.stenci.la/StringValidator.jsonld"},"JSON-LD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://schema.stenci.la/v1/StringValidator.schema.json"},"JSON Schema")),(0,i.kt)("li",{parentName:"ul"},"Python ",(0,i.kt)("a",{parentName:"li",href:"https://stencila.github.io/schema/python/docs/types.html#schema.types.StringValidator"},(0,i.kt)("inlineCode",{parentName:"a"},"class StringValidator"))),(0,i.kt)("li",{parentName:"ul"},"TypeScript ",(0,i.kt)("a",{parentName:"li",href:"https://stencila.github.io/schema/ts/docs/interfaces/stringvalidator.html"},(0,i.kt)("inlineCode",{parentName:"a"},"interface StringValidator"))),(0,i.kt)("li",{parentName:"ul"},"R ",(0,i.kt)("a",{parentName:"li",href:"https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf"},(0,i.kt)("inlineCode",{parentName:"a"},"class StringValidator"))),(0,i.kt)("li",{parentName:"ul"},"Rust ",(0,i.kt)("a",{parentName:"li",href:"https://docs.rs/stencila-schema/latest/stencila_schema/struct.StringValidator.html"},(0,i.kt)("inlineCode",{parentName:"a"},"struct StringValidator")))),(0,i.kt)("h2",{id:"source"},"Source"),(0,i.kt)("p",null,"This documentation was generated from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stencila/schema/blob/master/schema/StringValidator.schema.yaml"},"StringValidator.schema.yaml"),"."))}d.isMDXComponent=!0}}]);