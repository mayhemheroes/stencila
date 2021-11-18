"use strict";(self.webpackChunk_stencila_help=self.webpackChunk_stencila_help||[]).push([[1948],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),h=c(n),u=r,d=h["".concat(s,".").concat(u)]||h[u]||p[u]||l;return n?a.createElement(d,o(o({ref:e},m),{},{components:n})):a.createElement(d,o({ref:e},m))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=h;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6163:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>c,toc:()=>m,default:()=>h});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={category:"Text",slug:"/schema/NontextualAnnotation",custom_edit_url:"https://github.com/stencila/schema/edit/master/schema/NontextualAnnotation.schema.yaml"},s="Nontextual Annotation",c={unversionedId:"schema/docs/NontextualAnnotation",id:"schema/docs/NontextualAnnotation",isDocsHomePage:!1,title:"Nontextual Annotation",description:"Inline text that has a non-textual annotation.",source:"@site/references/schema/docs/NontextualAnnotation.md",sourceDirName:"schema/docs",slug:"/schema/NontextualAnnotation",permalink:"/references/schema/NontextualAnnotation",editUrl:"https://github.com/stencila/schema/edit/master/schema/NontextualAnnotation.schema.yaml",tags:[],version:"current",frontMatter:{category:"Text",slug:"/schema/NontextualAnnotation",custom_edit_url:"https://github.com/stencila/schema/edit/master/schema/NontextualAnnotation.schema.yaml"},sidebar:"sidebar",previous:{title:"Mark Types",permalink:"/references/schema/MarkTypes"},next:{title:"Note",permalink:"/references/schema/Note"}},m=[{value:"Properties",id:"properties",children:[],level:2},{value:"Related",id:"related",children:[],level:2},{value:"Available as",id:"available-as",children:[],level:2},{value:"Source",id:"source",children:[],level:2}],p={toc:m};function h(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nontextual-annotation"},"Nontextual Annotation"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Inline text that has a non-textual annotation.")),(0,l.kt)("p",null,"Use cases include annotating spelling errors, denoting proper names in Chinese text, representing underline text, and other forms of annotation. See - ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u"},"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u")," - ",(0,l.kt)("a",{parentName:"p",href:"http://html5doctor.com/u-element/"},"http://html5doctor.com/u-element/")," - ",(0,l.kt)("a",{parentName:"p",href:"https://jats.nlm.nih.gov/archiving/tag-library/1.1/element/underline.html"},"https://jats.nlm.nih.gov/archiving/tag-library/1.1/element/underline.html")," - ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/jgm/pandoc-types/blob/master/src/Text/Pandoc/Definition.hs#L320"},"https://github.com/jgm/pandoc-types/blob/master/src/Text/Pandoc/Definition.hs#L320")," "),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"@id")),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Inherited from"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"content")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.stenci.la/content.jsonld"},"stencila:content")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of ",(0,l.kt)("a",{parentName:"td",href:"/references/schema/InlineContent"},"InlineContent")),(0,l.kt)("td",{parentName:"tr",align:null},"The content that is marked."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Mark"},"Mark"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/id"},"schema:id")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The identifier for this item."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Entity"},"Entity"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"meta"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.stenci.la/meta.jsonld"},"stencila:meta")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Metadata associated with this item."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Entity"},"Entity"))))),(0,l.kt)("h2",{id:"related"},"Related"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Parent: ",(0,l.kt)("a",{parentName:"li",href:"/references/schema/Mark"},"Mark")),(0,l.kt)("li",{parentName:"ul"},"Descendants: None")),(0,l.kt)("h2",{id:"available-as"},"Available as"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://schema.stenci.la/NontextualAnnotation.jsonld"},"JSON-LD")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://schema.stenci.la/v1/NontextualAnnotation.schema.json"},"JSON Schema")),(0,l.kt)("li",{parentName:"ul"},"Python ",(0,l.kt)("a",{parentName:"li",href:"https://stencila.github.io/schema/python/docs/types.html#schema.types.NontextualAnnotation"},(0,l.kt)("inlineCode",{parentName:"a"},"class NontextualAnnotation"))),(0,l.kt)("li",{parentName:"ul"},"TypeScript ",(0,l.kt)("a",{parentName:"li",href:"https://stencila.github.io/schema/ts/docs/interfaces/nontextualannotation.html"},(0,l.kt)("inlineCode",{parentName:"a"},"interface NontextualAnnotation"))),(0,l.kt)("li",{parentName:"ul"},"R ",(0,l.kt)("a",{parentName:"li",href:"https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf"},(0,l.kt)("inlineCode",{parentName:"a"},"class NontextualAnnotation"))),(0,l.kt)("li",{parentName:"ul"},"Rust ",(0,l.kt)("a",{parentName:"li",href:"https://docs.rs/stencila-schema/latest/stencila_schema/struct.NontextualAnnotation.html"},(0,l.kt)("inlineCode",{parentName:"a"},"struct NontextualAnnotation")))),(0,l.kt)("h2",{id:"source"},"Source"),(0,l.kt)("p",null,"This documentation was generated from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/stencila/schema/blob/master/schema/NontextualAnnotation.schema.yaml"},"NontextualAnnotation.schema.yaml"),"."))}h.isMDXComponent=!0}}]);