"use strict";(self.webpackChunk_stencila_help=self.webpackChunk_stencila_help||[]).push([[5436],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),o=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),h=o(a),c=n,k=h["".concat(s,".").concat(c)]||h[c]||d[c]||l;return a?r.createElement(k,i(i({ref:t},p),{},{components:a})):r.createElement(k,i({ref:t},p))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=h;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m.mdxType="string"==typeof e?e:n,i[1]=m;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2633:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>m,contentTitle:()=>s,metadata:()=>o,toc:()=>p,default:()=>h});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),i=["components"],m={category:"Works",slug:"/schema/Table",custom_edit_url:"https://github.com/stencila/schema/edit/master/schema/Table.schema.yaml"},s="Table",o={unversionedId:"schema/docs/Table",id:"schema/docs/Table",isDocsHomePage:!1,title:"Table",description:"A table.",source:"@site/references/schema/docs/Table.md",sourceDirName:"schema/docs",slug:"/schema/Table",permalink:"/references/schema/Table",editUrl:"https://github.com/stencila/schema/edit/master/schema/Table.schema.yaml",tags:[],version:"current",frontMatter:{category:"Works",slug:"/schema/Table",custom_edit_url:"https://github.com/stencila/schema/edit/master/schema/Table.schema.yaml"},sidebar:"sidebar",previous:{title:"Software Source Code",permalink:"/references/schema/SoftwareSourceCode"},next:{title:"Video Object",permalink:"/references/schema/VideoObject"}},p=[{value:"Properties",id:"properties",children:[],level:2},{value:"Notes",id:"notes",children:[],level:2},{value:"Related",id:"related",children:[],level:2},{value:"Available as",id:"available-as",children:[],level:2},{value:"Source",id:"source",children:[],level:2}],d={toc:p};function h(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"table"},"Table"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"A table.")),(0,l.kt)("p",null,"This type is an implementation of ",(0,l.kt)("a",{parentName:"p",href:"https://schema.org/Table"},"schema:Table"),"."),(0,l.kt)("p",null,"This schema type is marked as ",(0,l.kt)("strong",{parentName:"p"},"unstable")," \u26a0\ufe0f and is subject to change."),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"@id")),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Inherited from"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"rows")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.stenci.la/rows.jsonld"},"stencila:rows")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of ",(0,l.kt)("a",{parentName:"td",href:"/references/schema/TableRow"},"TableRow")),(0,l.kt)("td",{parentName:"tr",align:null},"Rows of cells in the table."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Table"},"Table"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"about"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/about"},"schema:about")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of ",(0,l.kt)("a",{parentName:"td",href:"/references/schema/ThingTypes"},"ThingTypes")),(0,l.kt)("td",{parentName:"tr",align:null},"The subject matter of the content. See note ",(0,l.kt)("a",{parentName:"td",href:"#notes"},"1"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/CreativeWork"},"CreativeWork"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"alternateNames"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/alternateName"},"schema:alternateName")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,l.kt)("td",{parentName:"tr",align:null},"Alternate names (aliases) for the item."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Thing"},"Thing"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"authors"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/author"},"schema:author")),(0,l.kt)("td",{parentName:"tr",align:null},"Parser 'scsi' ",(0,l.kt)("em",{parentName:"td"},"and")," Array of (",(0,l.kt)("a",{parentName:"td",href:"/references/schema/Person"},"Person")," ",(0,l.kt)("em",{parentName:"td"},"or")," ",(0,l.kt)("a",{parentName:"td",href:"/references/schema/Organization"},"Organization"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"The authors of this creative work."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/CreativeWork"},"CreativeWork"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"caption"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/caption"},"schema:caption")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of ",(0,l.kt)("a",{parentName:"td",href:"/references/schema/BlockContent"},"BlockContent")," ",(0,l.kt)("em",{parentName:"td"},"or")," string"),(0,l.kt)("td",{parentName:"tr",align:null},"A caption for the table. See note ",(0,l.kt)("a",{parentName:"td",href:"#notes"},"2"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Table"},"Table"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"comments"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/comment"},"schema:comment")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of ",(0,l.kt)("a",{parentName:"td",href:"/references/schema/Comment"},"Comment")),(0,l.kt)("td",{parentName:"tr",align:null},"Comments about this creative work."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/CreativeWork"},"CreativeWork"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"content"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.stenci.la/content.jsonld"},"stencila:content")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of ",(0,l.kt)("a",{parentName:"td",href:"/references/schema/Node"},"Node")," ",(0,l.kt)("em",{parentName:"td"},"or")," string"),(0,l.kt)("td",{parentName:"tr",align:null},"The structured content of this creative work c.f. property ",(0,l.kt)("inlineCode",{parentName:"td"},"text"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/CreativeWork"},"CreativeWork"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dateAccepted"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.stenci.la/dateAccepted.jsonld"},"stencila:dateAccepted")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Date"},"Date")),(0,l.kt)("td",{parentName:"tr",align:null},"Date/time of acceptance. See note ",(0,l.kt)("a",{parentName:"td",href:"#notes"},"3"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/CreativeWork"},"CreativeWork"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dateCreated"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/dateCreated"},"schema:dateCreated")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Date"},"Date")),(0,l.kt)("td",{parentName:"tr",align:null},"Date/time of creation."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/CreativeWork"},"CreativeWork"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dateModified"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/dateModified"},"schema:dateModified")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Date"},"Date")),(0,l.kt)("td",{parentName:"tr",align:null},"Date/time of most recent modification."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/CreativeWork"},"CreativeWork"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"datePublished"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/datePublished"},"schema:datePublished")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Date"},"Date")),(0,l.kt)("td",{parentName:"tr",align:null},"Date of first publication."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/CreativeWork"},"CreativeWork"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dateReceived"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/dateReceived"},"schema:dateReceived")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Date"},"Date")),(0,l.kt)("td",{parentName:"tr",align:null},"Date/time that work was received."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/CreativeWork"},"CreativeWork"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/description"},"schema:description")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of ",(0,l.kt)("a",{parentName:"td",href:"/references/schema/BlockContent"},"BlockContent")," ",(0,l.kt)("em",{parentName:"td"},"or")," Array of ",(0,l.kt)("a",{parentName:"td",href:"/references/schema/InlineContent"},"InlineContent")," ",(0,l.kt)("em",{parentName:"td"},"or")," string"),(0,l.kt)("td",{parentName:"tr",align:null},"A description of the item. See note ",(0,l.kt)("a",{parentName:"td",href:"#notes"},"4"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Thing"},"Thing"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"editors"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/editor"},"schema:editor")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of ",(0,l.kt)("a",{parentName:"td",href:"/references/schema/Person"},"Person")),(0,l.kt)("td",{parentName:"tr",align:null},"People who edited the ",(0,l.kt)("inlineCode",{parentName:"td"},"CreativeWork"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/CreativeWork"},"CreativeWork"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fundedBy"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.stenci.la/fundedBy.jsonld"},"stencila:fundedBy")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of (",(0,l.kt)("a",{parentName:"td",href:"/references/schema/Grant"},"Grant")," ",(0,l.kt)("em",{parentName:"td"},"or")," ",(0,l.kt)("a",{parentName:"td",href:"/references/schema/MonetaryGrant"},"MonetaryGrant"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"Grants that funded the ",(0,l.kt)("inlineCode",{parentName:"td"},"CreativeWork"),"; reverse of ",(0,l.kt)("inlineCode",{parentName:"td"},"fundedItems"),". See note ",(0,l.kt)("a",{parentName:"td",href:"#notes"},"5"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/CreativeWork"},"CreativeWork"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"funders"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/funder"},"schema:funder")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of (",(0,l.kt)("a",{parentName:"td",href:"/references/schema/Person"},"Person")," ",(0,l.kt)("em",{parentName:"td"},"or")," ",(0,l.kt)("a",{parentName:"td",href:"/references/schema/Organization"},"Organization"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"People or organizations that funded the ",(0,l.kt)("inlineCode",{parentName:"td"},"CreativeWork"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/CreativeWork"},"CreativeWork"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"genre"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/genre"},"schema:genre")),(0,l.kt)("td",{parentName:"tr",align:null},"Parser 'csi' ",(0,l.kt)("em",{parentName:"td"},"and")," Array of string"),(0,l.kt)("td",{parentName:"tr",align:null},"Genre of the creative work, broadcast channel or group."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/CreativeWork"},"CreativeWork"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/id"},"schema:id")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The identifier for this item."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Entity"},"Entity"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"identifiers"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/identifier"},"schema:identifier")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of (",(0,l.kt)("a",{parentName:"td",href:"/references/schema/PropertyValue"},"PropertyValue")," ",(0,l.kt)("em",{parentName:"td"},"or")," string)"),(0,l.kt)("td",{parentName:"tr",align:null},"Any kind of identifier for any kind of Thing. See note ",(0,l.kt)("a",{parentName:"td",href:"#notes"},"6"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Thing"},"Thing"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"images"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/image"},"schema:image")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of (",(0,l.kt)("a",{parentName:"td",href:"/references/schema/ImageObject"},"ImageObject")," ",(0,l.kt)("em",{parentName:"td"},"or")," Format 'uri')"),(0,l.kt)("td",{parentName:"tr",align:null},"Images of the item."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Thing"},"Thing"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isPartOf"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/isPartOf"},"schema:isPartOf")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/CreativeWorkTypes"},"CreativeWorkTypes")),(0,l.kt)("td",{parentName:"tr",align:null},"An item or other CreativeWork that this CreativeWork is a part of."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/CreativeWork"},"CreativeWork"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keywords"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/keywords"},"schema:keywords")),(0,l.kt)("td",{parentName:"tr",align:null},"Parser 'csi' ",(0,l.kt)("em",{parentName:"td"},"and")," Array of string"),(0,l.kt)("td",{parentName:"tr",align:null},"Keywords or tags used to describe this content. Multiple entries in a keywords list are typically delimited by commas."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/CreativeWork"},"CreativeWork"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"label"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.stenci.la/label.jsonld"},"stencila:label")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"A short label for the table."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Table"},"Table"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"licenses"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/license"},"schema:license")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of (",(0,l.kt)("a",{parentName:"td",href:"/references/schema/CreativeWorkTypes"},"CreativeWorkTypes")," ",(0,l.kt)("em",{parentName:"td"},"or")," Format 'uri')"),(0,l.kt)("td",{parentName:"tr",align:null},"License documents that applies to this content, typically indicated by URL."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/CreativeWork"},"CreativeWork"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maintainers"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/maintainer"},"schema:maintainer")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of (",(0,l.kt)("a",{parentName:"td",href:"/references/schema/Person"},"Person")," ",(0,l.kt)("em",{parentName:"td"},"or")," ",(0,l.kt)("a",{parentName:"td",href:"/references/schema/Organization"},"Organization"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"The people or organizations who maintain this CreativeWork. See note ",(0,l.kt)("a",{parentName:"td",href:"#notes"},"7"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/CreativeWork"},"CreativeWork"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"meta"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.stenci.la/meta.jsonld"},"stencila:meta")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Metadata associated with this item."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Entity"},"Entity"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/name"},"schema:name")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the item."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Thing"},"Thing"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"parts"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/hasParts"},"schema:hasParts")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of ",(0,l.kt)("a",{parentName:"td",href:"/references/schema/CreativeWorkTypes"},"CreativeWorkTypes")),(0,l.kt)("td",{parentName:"tr",align:null},"Elements of the collection which can be a variety of different elements, such as Articles, Datatables, Tables and more."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/CreativeWork"},"CreativeWork"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"publisher"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/publisher"},"schema:publisher")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Person"},"Person")," ",(0,l.kt)("em",{parentName:"td"},"or")," ",(0,l.kt)("a",{parentName:"td",href:"/references/schema/Organization"},"Organization")),(0,l.kt)("td",{parentName:"tr",align:null},"A publisher of the CreativeWork."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/CreativeWork"},"CreativeWork"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"references"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/citation"},"schema:citation")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of (",(0,l.kt)("a",{parentName:"td",href:"/references/schema/CreativeWorkTypes"},"CreativeWorkTypes")," ",(0,l.kt)("em",{parentName:"td"},"or")," string)"),(0,l.kt)("td",{parentName:"tr",align:null},"References to other creative works, such as another publication, web page, scholarly article, etc."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/CreativeWork"},"CreativeWork"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/text"},"schema:text")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The textual content of this creative work."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/CreativeWork"},"CreativeWork"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"title"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/headline"},"schema:headline")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of ",(0,l.kt)("a",{parentName:"td",href:"/references/schema/InlineContent"},"InlineContent")," ",(0,l.kt)("em",{parentName:"td"},"or")," string"),(0,l.kt)("td",{parentName:"tr",align:null},"The title of the creative work. See note ",(0,l.kt)("a",{parentName:"td",href:"#notes"},"8"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/CreativeWork"},"CreativeWork"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/url"},"schema:url")),(0,l.kt)("td",{parentName:"tr",align:null},"Format 'uri'"),(0,l.kt)("td",{parentName:"tr",align:null},"The URL of the item."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Thing"},"Thing"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/version"},"schema:version")),(0,l.kt)("td",{parentName:"tr",align:null},"string ",(0,l.kt)("em",{parentName:"td"},"or")," number"),(0,l.kt)("td",{parentName:"tr",align:null},"The version of the creative work. See note ",(0,l.kt)("a",{parentName:"td",href:"#notes"},"9"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/CreativeWork"},"CreativeWork"))))),(0,l.kt)("h2",{id:"notes"},"Notes"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"about")," : Consistent with ",(0,l.kt)("a",{parentName:"li",href:"https://schema.org/about"},"https://schema.org/about"),", this property allows for linking to one of more ",(0,l.kt)("inlineCode",{parentName:"li"},"Thing")," nodes. This could for example include a ",(0,l.kt)("inlineCode",{parentName:"li"},"Person")," (e.g for a bibliography) or a ",(0,l.kt)("inlineCode",{parentName:"li"},"DefinedTerm")," (e.g. for subject areas the creative work relates to)."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"caption")," : An array of nodes or, to be compatible with ",(0,l.kt)("a",{parentName:"li",href:"https://schema.org/caption"},"https://schema.org/caption"),", a string."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"dateAccepted")," : This is not yet a schema.org property but the term is used ",(0,l.kt)("a",{parentName:"li",href:"http://purl.org/dc/terms/dateAccepted"},"in Dublin Core"),"."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"description")," : Allows for the description to be an array of nodes (e.g. an array of inline content, or a couple of paragraphs), or a string. The ",(0,l.kt)("inlineCode",{parentName:"li"},"minItems")," restriction avoids a string being coerced into an array with a single string item."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"fundedBy")," : This follows the proposal ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/schemaorg/schemaorg/issues/2258"},"here")," for a property that is the reverse of ",(0,l.kt)("inlineCode",{parentName:"li"},"fundedItems"),". It is an any because a ",(0,l.kt)("inlineCode",{parentName:"li"},"CreativeWork")," may have been funded through more than one ",(0,l.kt)("inlineCode",{parentName:"li"},"Grant"),"."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"identifiers")," : Some identifiers have specific properties e.g the ",(0,l.kt)("inlineCode",{parentName:"li"},"issn")," property for the ",(0,l.kt)("inlineCode",{parentName:"li"},"Periodical")," type. These should be used in preference to this property which is intended for identifiers that do not yet have a specific property. Identifiers can be represented as strings, but using a ",(0,l.kt)("inlineCode",{parentName:"li"},"PropertyValue")," will usually be better because it allows for ",(0,l.kt)("inlineCode",{parentName:"li"},"propertyID")," (i.e. the type of identifier)."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"maintainers"),' : A maintainer of a Dataset, SoftwareApplication, or other CreativeWork. A maintainer is a Person or Organization that manages contributions to, and/or publication of, some (typically complex) artifact. It is common for distributions of software and data to be based on "upstream" sources. When maintainer is applied to a specific version of something e.g. a particular version or packaging of a Dataset, it is always possible that the upstream source has a different maintainer. The isBasedOn property can be used to indicate such relationships between datasets to make the different maintenance roles clear. Similarly in the case of software, a package may have dedicated maintainers working on integration into software distributions such as Ubuntu, as well as upstream maintainers of the underlying work.'),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"title")," : Allows for the title to include inline content (e.g ",(0,l.kt)("inlineCode",{parentName:"li"},"Strong"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Math"),") or a string. The title can not be block content e.g ",(0,l.kt)("inlineCode",{parentName:"li"},"Paragraph"),". The ",(0,l.kt)("inlineCode",{parentName:"li"},"minItems")," restriction avoids a string being coerced into an array with a single string item."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"version")," : In this case ",(0,l.kt)("inlineCode",{parentName:"li"},"string")," is listed as an alternative before ",(0,l.kt)("inlineCode",{parentName:"li"},"number")," to avoid semantic version numbers e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"1.0")," being parsed, and subsequently encoded, as ",(0,l.kt)("inlineCode",{parentName:"li"},"1")," thereby resulting in loss of information.")),(0,l.kt)("h2",{id:"related"},"Related"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Parent: ",(0,l.kt)("a",{parentName:"li",href:"/references/schema/CreativeWork"},"CreativeWork")),(0,l.kt)("li",{parentName:"ul"},"Descendants: None")),(0,l.kt)("h2",{id:"available-as"},"Available as"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://schema.stenci.la/Table.jsonld"},"JSON-LD")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://schema.stenci.la/v1/Table.schema.json"},"JSON Schema")),(0,l.kt)("li",{parentName:"ul"},"Python ",(0,l.kt)("a",{parentName:"li",href:"https://stencila.github.io/schema/python/docs/types.html#schema.types.Table"},(0,l.kt)("inlineCode",{parentName:"a"},"class Table"))),(0,l.kt)("li",{parentName:"ul"},"TypeScript ",(0,l.kt)("a",{parentName:"li",href:"https://stencila.github.io/schema/ts/docs/interfaces/table.html"},(0,l.kt)("inlineCode",{parentName:"a"},"interface Table"))),(0,l.kt)("li",{parentName:"ul"},"R ",(0,l.kt)("a",{parentName:"li",href:"https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf"},(0,l.kt)("inlineCode",{parentName:"a"},"class Table"))),(0,l.kt)("li",{parentName:"ul"},"Rust ",(0,l.kt)("a",{parentName:"li",href:"https://docs.rs/stencila-schema/latest/stencila_schema/struct.Table.html"},(0,l.kt)("inlineCode",{parentName:"a"},"struct Table")))),(0,l.kt)("h2",{id:"source"},"Source"),(0,l.kt)("p",null,"This documentation was generated from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/stencila/schema/blob/master/schema/Table.schema.yaml"},"Table.schema.yaml"),"."))}h.isMDXComponent=!0}}]);