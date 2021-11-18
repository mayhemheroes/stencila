"use strict";(self.webpackChunk_stencila_help=self.webpackChunk_stencila_help||[]).push([[7444],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),s=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=s(a),d=n,u=h["".concat(m,".").concat(d)]||h[d]||c[d]||l;return a?r.createElement(u,i(i({ref:t},p),{},{components:a})):r.createElement(u,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2330:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>o,contentTitle:()=>m,metadata:()=>s,toc:()=>p,default:()=>h});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),i=["components"],o={category:"Other",slug:"/schema/MonetaryGrant",custom_edit_url:"https://github.com/stencila/schema/edit/master/schema/MonetaryGrant.schema.yaml"},m="Monetary Grant",s={unversionedId:"schema/docs/MonetaryGrant",id:"schema/docs/MonetaryGrant",isDocsHomePage:!1,title:"Monetary Grant",description:"A monetary grant.",source:"@site/references/schema/docs/MonetaryGrant.md",sourceDirName:"schema/docs",slug:"/schema/MonetaryGrant",permalink:"/references/schema/MonetaryGrant",editUrl:"https://github.com/stencila/schema/edit/master/schema/MonetaryGrant.schema.yaml",tags:[],version:"current",frontMatter:{category:"Other",slug:"/schema/MonetaryGrant",custom_edit_url:"https://github.com/stencila/schema/edit/master/schema/MonetaryGrant.schema.yaml"},sidebar:"sidebar",previous:{title:"Grant Types",permalink:"/references/schema/GrantTypes"},next:{title:"Node",permalink:"/references/schema/Node"}},p=[{value:"Properties",id:"properties",children:[],level:2},{value:"Notes",id:"notes",children:[],level:2},{value:"Related",id:"related",children:[],level:2},{value:"Available as",id:"available-as",children:[],level:2},{value:"Source",id:"source",children:[],level:2}],c={toc:p};function h(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"monetary-grant"},"Monetary Grant"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"A monetary grant.")),(0,l.kt)("p",null,"This type is an implementation of ",(0,l.kt)("a",{parentName:"p",href:"https://schema.org/MonetaryGrant"},"schema:MonetaryGrant"),"."),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"@id")),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Inherited from"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"alternateNames"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/alternateName"},"schema:alternateName")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,l.kt)("td",{parentName:"tr",align:null},"Alternate names (aliases) for the item."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Thing"},"Thing"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amounts"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/amount"},"schema:amount")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of money. See note ",(0,l.kt)("a",{parentName:"td",href:"#notes"},"1"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/MonetaryGrant"},"MonetaryGrant"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/description"},"schema:description")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of ",(0,l.kt)("a",{parentName:"td",href:"/references/schema/BlockContent"},"BlockContent")," ",(0,l.kt)("em",{parentName:"td"},"or")," Array of ",(0,l.kt)("a",{parentName:"td",href:"/references/schema/InlineContent"},"InlineContent")," ",(0,l.kt)("em",{parentName:"td"},"or")," string"),(0,l.kt)("td",{parentName:"tr",align:null},"A description of the item. See note ",(0,l.kt)("a",{parentName:"td",href:"#notes"},"2"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Thing"},"Thing"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fundedItems"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/fundedItem"},"schema:fundedItem")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of ",(0,l.kt)("a",{parentName:"td",href:"/references/schema/Thing"},"Thing")),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates an item funded or sponsored through a Grant. See note ",(0,l.kt)("a",{parentName:"td",href:"#notes"},"3"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Grant"},"Grant"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"funders"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/funder"},"schema:funder")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of (",(0,l.kt)("a",{parentName:"td",href:"/references/schema/Person"},"Person")," ",(0,l.kt)("em",{parentName:"td"},"or")," ",(0,l.kt)("a",{parentName:"td",href:"/references/schema/Organization"},"Organization"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"A person or organization that supports (sponsors) something through some kind of financial contribution.  See note ",(0,l.kt)("a",{parentName:"td",href:"#notes"},"4"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/MonetaryGrant"},"MonetaryGrant"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/id"},"schema:id")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The identifier for this item."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Entity"},"Entity"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"identifiers"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/identifier"},"schema:identifier")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of (",(0,l.kt)("a",{parentName:"td",href:"/references/schema/PropertyValue"},"PropertyValue")," ",(0,l.kt)("em",{parentName:"td"},"or")," string)"),(0,l.kt)("td",{parentName:"tr",align:null},"Any kind of identifier for any kind of Thing. See note ",(0,l.kt)("a",{parentName:"td",href:"#notes"},"5"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Thing"},"Thing"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"images"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/image"},"schema:image")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of (",(0,l.kt)("a",{parentName:"td",href:"/references/schema/ImageObject"},"ImageObject")," ",(0,l.kt)("em",{parentName:"td"},"or")," Format 'uri')"),(0,l.kt)("td",{parentName:"tr",align:null},"Images of the item."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Thing"},"Thing"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"meta"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.stenci.la/meta.jsonld"},"stencila:meta")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Metadata associated with this item."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Entity"},"Entity"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/name"},"schema:name")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the item."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Thing"},"Thing"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sponsors"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/sponsor"},"schema:sponsor")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of (",(0,l.kt)("a",{parentName:"td",href:"/references/schema/Person"},"Person")," ",(0,l.kt)("em",{parentName:"td"},"or")," ",(0,l.kt)("a",{parentName:"td",href:"/references/schema/Organization"},"Organization"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"A person or organization that supports a thing through a pledge, promise, or financial contribution. See note ",(0,l.kt)("a",{parentName:"td",href:"#notes"},"6"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Grant"},"Grant"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/url"},"schema:url")),(0,l.kt)("td",{parentName:"tr",align:null},"Format 'uri'"),(0,l.kt)("td",{parentName:"tr",align:null},"The URL of the item."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Thing"},"Thing"))))),(0,l.kt)("h2",{id:"notes"},"Notes"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"amounts")," : This property is an array, to allow for multiple amounts, possibly, but not necessarily, from multiple ",(0,l.kt)("inlineCode",{parentName:"li"},"funders"),"."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"description")," : Allows for the description to be an array of nodes (e.g. an array of inline content, or a couple of paragraphs), or a string. The ",(0,l.kt)("inlineCode",{parentName:"li"},"minItems")," restriction avoids a string being coerced into an array with a single string item."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"fundedItems")," : An array because a grant may have more than one funded item."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"funders")," : Often a ",(0,l.kt)("inlineCode",{parentName:"li"},"MonetaryGrant")," will have a single funder. This property is an array to be consistent with ",(0,l.kt)("inlineCode",{parentName:"li"},"funders")," on other types e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"CreativeWork"),"."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"identifiers")," : Some identifiers have specific properties e.g the ",(0,l.kt)("inlineCode",{parentName:"li"},"issn")," property for the ",(0,l.kt)("inlineCode",{parentName:"li"},"Periodical")," type. These should be used in preference to this property which is intended for identifiers that do not yet have a specific property. Identifiers can be represented as strings, but using a ",(0,l.kt)("inlineCode",{parentName:"li"},"PropertyValue")," will usually be better because it allows for ",(0,l.kt)("inlineCode",{parentName:"li"},"propertyID")," (i.e. the type of identifier)."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"sponsors")," : An array because a grant may have more than one sponsor.")),(0,l.kt)("h2",{id:"related"},"Related"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Parent: ",(0,l.kt)("a",{parentName:"li",href:"/references/schema/Grant"},"Grant")),(0,l.kt)("li",{parentName:"ul"},"Descendants: None")),(0,l.kt)("h2",{id:"available-as"},"Available as"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://schema.stenci.la/MonetaryGrant.jsonld"},"JSON-LD")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://schema.stenci.la/v1/MonetaryGrant.schema.json"},"JSON Schema")),(0,l.kt)("li",{parentName:"ul"},"Python ",(0,l.kt)("a",{parentName:"li",href:"https://stencila.github.io/schema/python/docs/types.html#schema.types.MonetaryGrant"},(0,l.kt)("inlineCode",{parentName:"a"},"class MonetaryGrant"))),(0,l.kt)("li",{parentName:"ul"},"TypeScript ",(0,l.kt)("a",{parentName:"li",href:"https://stencila.github.io/schema/ts/docs/interfaces/monetarygrant.html"},(0,l.kt)("inlineCode",{parentName:"a"},"interface MonetaryGrant"))),(0,l.kt)("li",{parentName:"ul"},"R ",(0,l.kt)("a",{parentName:"li",href:"https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf"},(0,l.kt)("inlineCode",{parentName:"a"},"class MonetaryGrant"))),(0,l.kt)("li",{parentName:"ul"},"Rust ",(0,l.kt)("a",{parentName:"li",href:"https://docs.rs/stencila-schema/latest/stencila_schema/struct.MonetaryGrant.html"},(0,l.kt)("inlineCode",{parentName:"a"},"struct MonetaryGrant")))),(0,l.kt)("h2",{id:"source"},"Source"),(0,l.kt)("p",null,"This documentation was generated from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/stencila/schema/blob/master/schema/MonetaryGrant.schema.yaml"},"MonetaryGrant.schema.yaml"),"."))}h.isMDXComponent=!0}}]);