(self.webpackChunk_stencila_help=self.webpackChunk_stencila_help||[]).push([[622],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),h=o(a),u=r,d=h["".concat(s,".").concat(u)]||h[u]||c[u]||i;return a?n.createElement(d,l(l({ref:t},p),{},{components:a})):n.createElement(d,l({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=h;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m.mdxType="string"==typeof e?e:r,l[1]=m;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2895:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>m,contentTitle:()=>s,metadata:()=>o,toc:()=>p,default:()=>h});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),l=["components"],m={category:"Other",slug:"/schema/Enumeration",custom_edit_url:"https://github.com/stencila/schema/edit/master/schema/Enumeration.schema.yaml"},s="Enumeration",o={unversionedId:"schema/docs/Enumeration",id:"schema/docs/Enumeration",isDocsHomePage:!1,title:"Enumeration",description:"Lists or enumerations, for example, a list of cuisines or music genres, etc.",source:"@site/references/schema/docs/Enumeration.md",sourceDirName:"schema/docs",slug:"/schema/Enumeration",permalink:"/references/schema/Enumeration",editUrl:"https://github.com/stencila/schema/edit/master/schema/Enumeration.schema.yaml",tags:[],version:"current",frontMatter:{category:"Other",slug:"/schema/Enumeration",custom_edit_url:"https://github.com/stencila/schema/edit/master/schema/Enumeration.schema.yaml"},sidebar:"sidebar",previous:{title:"Entity Types",permalink:"/references/schema/EntityTypes"},next:{title:"Enumeration Types",permalink:"/references/schema/EnumerationTypes"}},p=[{value:"Properties",id:"properties",children:[],level:2},{value:"Notes",id:"notes",children:[],level:2},{value:"Related",id:"related",children:[],level:2},{value:"Available as",id:"available-as",children:[],level:2},{value:"Source",id:"source",children:[],level:2}],c={toc:p};function h(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"enumeration"},"Enumeration"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Lists or enumerations, for example, a list of cuisines or music genres, etc.")),(0,i.kt)("p",null,"This type is an implementation of ",(0,i.kt)("a",{parentName:"p",href:"https://schema.org/Enumeration"},"schema:Enumeration"),"."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"th"},"@id")),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Inherited from"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"alternateNames"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.org/alternateName"},"schema:alternateName")),(0,i.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,i.kt)("td",{parentName:"tr",align:null},"Alternate names (aliases) for the item."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Thing"},"Thing"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"description"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.org/description"},"schema:description")),(0,i.kt)("td",{parentName:"tr",align:null},"Array of ",(0,i.kt)("a",{parentName:"td",href:"/references/schema/BlockContent"},"BlockContent")," ",(0,i.kt)("em",{parentName:"td"},"or")," Array of ",(0,i.kt)("a",{parentName:"td",href:"/references/schema/InlineContent"},"InlineContent")," ",(0,i.kt)("em",{parentName:"td"},"or")," string"),(0,i.kt)("td",{parentName:"tr",align:null},"A description of the item. See note ",(0,i.kt)("a",{parentName:"td",href:"#notes"},"1"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Thing"},"Thing"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.org/id"},"schema:id")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The identifier for this item."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Entity"},"Entity"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"identifiers"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.org/identifier"},"schema:identifier")),(0,i.kt)("td",{parentName:"tr",align:null},"Array of (",(0,i.kt)("a",{parentName:"td",href:"/references/schema/PropertyValue"},"PropertyValue")," ",(0,i.kt)("em",{parentName:"td"},"or")," string)"),(0,i.kt)("td",{parentName:"tr",align:null},"Any kind of identifier for any kind of Thing. See note ",(0,i.kt)("a",{parentName:"td",href:"#notes"},"2"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Thing"},"Thing"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"images"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.org/image"},"schema:image")),(0,i.kt)("td",{parentName:"tr",align:null},"Array of (",(0,i.kt)("a",{parentName:"td",href:"/references/schema/ImageObject"},"ImageObject")," ",(0,i.kt)("em",{parentName:"td"},"or")," Format 'uri')"),(0,i.kt)("td",{parentName:"tr",align:null},"Images of the item."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Thing"},"Thing"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"meta"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.stenci.la/meta.jsonld"},"stencila:meta")),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"Metadata associated with this item."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Entity"},"Entity"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.org/name"},"schema:name")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the item."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Thing"},"Thing"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"url"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.org/url"},"schema:url")),(0,i.kt)("td",{parentName:"tr",align:null},"Format 'uri'"),(0,i.kt)("td",{parentName:"tr",align:null},"The URL of the item."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Thing"},"Thing"))))),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"description")," : Allows for the description to be an array of nodes (e.g. an array of inline content, or a couple of paragraphs), or a string. The ",(0,i.kt)("inlineCode",{parentName:"li"},"minItems")," restriction avoids a string being coerced into an array with a single string item."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"identifiers")," : Some identifiers have specific properties e.g the ",(0,i.kt)("inlineCode",{parentName:"li"},"issn")," property for the ",(0,i.kt)("inlineCode",{parentName:"li"},"Periodical")," type. These should be used in preference to this property which is intended for identifiers that do not yet have a specific property. Identifiers can be represented as strings, but using a ",(0,i.kt)("inlineCode",{parentName:"li"},"PropertyValue")," will usually be better because it allows for ",(0,i.kt)("inlineCode",{parentName:"li"},"propertyID")," (i.e. the type of identifier).")),(0,i.kt)("h2",{id:"related"},"Related"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Parent: ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Thing"},"Thing")),(0,i.kt)("li",{parentName:"ul"},"Descendants: ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/CitationIntentEnumeration"},"CitationIntentEnumeration"))),(0,i.kt)("h2",{id:"available-as"},"Available as"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://schema.stenci.la/Enumeration.jsonld"},"JSON-LD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://schema.stenci.la/v1/Enumeration.schema.json"},"JSON Schema")),(0,i.kt)("li",{parentName:"ul"},"Python ",(0,i.kt)("a",{parentName:"li",href:"https://stencila.github.io/schema/python/docs/types.html#schema.types.Enumeration"},(0,i.kt)("inlineCode",{parentName:"a"},"class Enumeration"))),(0,i.kt)("li",{parentName:"ul"},"TypeScript ",(0,i.kt)("a",{parentName:"li",href:"https://stencila.github.io/schema/ts/docs/interfaces/enumeration.html"},(0,i.kt)("inlineCode",{parentName:"a"},"interface Enumeration"))),(0,i.kt)("li",{parentName:"ul"},"R ",(0,i.kt)("a",{parentName:"li",href:"https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf"},(0,i.kt)("inlineCode",{parentName:"a"},"class Enumeration"))),(0,i.kt)("li",{parentName:"ul"},"Rust ",(0,i.kt)("a",{parentName:"li",href:"https://docs.rs/stencila-schema/latest/stencila_schema/struct.Enumeration.html"},(0,i.kt)("inlineCode",{parentName:"a"},"struct Enumeration")))),(0,i.kt)("h2",{id:"source"},"Source"),(0,i.kt)("p",null,"This documentation was generated from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stencila/schema/blob/master/schema/Enumeration.schema.yaml"},"Enumeration.schema.yaml"),"."))}h.isMDXComponent=!0}}]);