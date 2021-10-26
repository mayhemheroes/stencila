(self.webpackChunk_stencila_help=self.webpackChunk_stencila_help||[]).push([[7618],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>o,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),p=c(a),f=n,d=p["".concat(s,".").concat(f)]||p[f]||h[f]||i;return a?r.createElement(d,l(l({ref:t},o),{},{components:a})):r.createElement(d,l({ref:t},o))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=p;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m.mdxType="string"==typeof e?e:n,l[1]=m;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},300:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>m,contentTitle:()=>s,metadata:()=>c,toc:()=>o,default:()=>p});var r=a(2122),n=a(9756),i=(a(7294),a(3905)),l=["components"],m={category:"Other",slug:"/schema/Thing",custom_edit_url:"https://github.com/stencila/schema/edit/master/schema/Thing.schema.yaml"},s="Thing",c={unversionedId:"schema/docs/Thing",id:"schema/docs/Thing",isDocsHomePage:!1,title:"Thing",description:"The most generic type of item.",source:"@site/references/schema/docs/Thing.md",sourceDirName:"schema/docs",slug:"/schema/Thing",permalink:"/references/schema/Thing",editUrl:"https://github.com/stencila/schema/edit/master/schema/Thing.schema.yaml",tags:[],version:"current",frontMatter:{category:"Other",slug:"/schema/Thing",custom_edit_url:"https://github.com/stencila/schema/edit/master/schema/Thing.schema.yaml"},sidebar:"sidebar",previous:{title:"Property Value",permalink:"/references/schema/PropertyValue"},next:{title:"Thing Types",permalink:"/references/schema/ThingTypes"}},o=[{value:"Properties",id:"properties",children:[],level:2},{value:"Notes",id:"notes",children:[],level:2},{value:"Related",id:"related",children:[],level:2},{value:"Available as",id:"available-as",children:[],level:2},{value:"Source",id:"source",children:[],level:2}],h={toc:o};function p(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"thing"},"Thing"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The most generic type of item.")),(0,i.kt)("p",null,"This type is an implementation of ",(0,i.kt)("a",{parentName:"p",href:"https://schema.org/Thing"},"schema:Thing"),"."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"th"},"@id")),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Inherited from"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"alternateNames"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.org/alternateName"},"schema:alternateName")),(0,i.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,i.kt)("td",{parentName:"tr",align:null},"Alternate names (aliases) for the item."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Thing"},"Thing"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"description"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.org/description"},"schema:description")),(0,i.kt)("td",{parentName:"tr",align:null},"Array of ",(0,i.kt)("a",{parentName:"td",href:"/references/schema/BlockContent"},"BlockContent")," ",(0,i.kt)("em",{parentName:"td"},"or")," Array of ",(0,i.kt)("a",{parentName:"td",href:"/references/schema/InlineContent"},"InlineContent")," ",(0,i.kt)("em",{parentName:"td"},"or")," string"),(0,i.kt)("td",{parentName:"tr",align:null},"A description of the item. See note ",(0,i.kt)("a",{parentName:"td",href:"#notes"},"1"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Thing"},"Thing"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.org/id"},"schema:id")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The identifier for this item."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Entity"},"Entity"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"identifiers"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.org/identifier"},"schema:identifier")),(0,i.kt)("td",{parentName:"tr",align:null},"Array of (",(0,i.kt)("a",{parentName:"td",href:"/references/schema/PropertyValue"},"PropertyValue")," ",(0,i.kt)("em",{parentName:"td"},"or")," string)"),(0,i.kt)("td",{parentName:"tr",align:null},"Any kind of identifier for any kind of Thing. See note ",(0,i.kt)("a",{parentName:"td",href:"#notes"},"2"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Thing"},"Thing"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"images"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.org/image"},"schema:image")),(0,i.kt)("td",{parentName:"tr",align:null},"Array of (",(0,i.kt)("a",{parentName:"td",href:"/references/schema/ImageObject"},"ImageObject")," ",(0,i.kt)("em",{parentName:"td"},"or")," Format 'uri')"),(0,i.kt)("td",{parentName:"tr",align:null},"Images of the item."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Thing"},"Thing"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"meta"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.stenci.la/meta.jsonld"},"stencila:meta")),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"Metadata associated with this item."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Entity"},"Entity"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.org/name"},"schema:name")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the item."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Thing"},"Thing"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"url"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.org/url"},"schema:url")),(0,i.kt)("td",{parentName:"tr",align:null},"Format 'uri'"),(0,i.kt)("td",{parentName:"tr",align:null},"The URL of the item."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Thing"},"Thing"))))),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"description")," : Allows for the description to be an array of nodes (e.g. an array of inline content, or a couple of paragraphs), or a string. The ",(0,i.kt)("inlineCode",{parentName:"li"},"minItems")," restriction avoids a string being coerced into an array with a single string item."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"identifiers")," : Some identifiers have specific properties e.g the ",(0,i.kt)("inlineCode",{parentName:"li"},"issn")," property for the ",(0,i.kt)("inlineCode",{parentName:"li"},"Periodical")," type. These should be used in preference to this property which is intended for identifiers that do not yet have a specific property. Identifiers can be represented as strings, but using a ",(0,i.kt)("inlineCode",{parentName:"li"},"PropertyValue")," will usually be better because it allows for ",(0,i.kt)("inlineCode",{parentName:"li"},"propertyID")," (i.e. the type of identifier).")),(0,i.kt)("h2",{id:"related"},"Related"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Parent: ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Entity"},"Entity")),(0,i.kt)("li",{parentName:"ul"},"Descendants: ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Article"},"Article"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/AudioObject"},"AudioObject"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Brand"},"Brand"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/CitationIntentEnumeration"},"CitationIntentEnumeration"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Claim"},"Claim"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Collection"},"Collection"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Comment"},"Comment"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/ContactPoint"},"ContactPoint"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/CreativeWork"},"CreativeWork"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Datatable"},"Datatable"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/DatatableColumn"},"DatatableColumn"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/DefinedTerm"},"DefinedTerm"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Enumeration"},"Enumeration"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Figure"},"Figure"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Grant"},"Grant"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/ImageObject"},"ImageObject"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/ListItem"},"ListItem"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/MediaObject"},"MediaObject"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/MonetaryGrant"},"MonetaryGrant"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Organization"},"Organization"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Periodical"},"Periodical"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Person"},"Person"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/PostalAddress"},"PostalAddress"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Product"},"Product"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/PropertyValue"},"PropertyValue"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/PublicationIssue"},"PublicationIssue"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/PublicationVolume"},"PublicationVolume"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Review"},"Review"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/SoftwareApplication"},"SoftwareApplication"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/SoftwareEnvironment"},"SoftwareEnvironment"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/SoftwareSession"},"SoftwareSession"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/SoftwareSourceCode"},"SoftwareSourceCode"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Table"},"Table"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/VideoObject"},"VideoObject"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/VolumeMount"},"VolumeMount"))),(0,i.kt)("h2",{id:"available-as"},"Available as"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://schema.stenci.la/Thing.jsonld"},"JSON-LD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://schema.stenci.la/v1/Thing.schema.json"},"JSON Schema")),(0,i.kt)("li",{parentName:"ul"},"Python ",(0,i.kt)("a",{parentName:"li",href:"https://stencila.github.io/schema/python/docs/types.html#schema.types.Thing"},(0,i.kt)("inlineCode",{parentName:"a"},"class Thing"))),(0,i.kt)("li",{parentName:"ul"},"TypeScript ",(0,i.kt)("a",{parentName:"li",href:"https://stencila.github.io/schema/ts/docs/interfaces/thing.html"},(0,i.kt)("inlineCode",{parentName:"a"},"interface Thing"))),(0,i.kt)("li",{parentName:"ul"},"R ",(0,i.kt)("a",{parentName:"li",href:"https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf"},(0,i.kt)("inlineCode",{parentName:"a"},"class Thing"))),(0,i.kt)("li",{parentName:"ul"},"Rust ",(0,i.kt)("a",{parentName:"li",href:"https://docs.rs/stencila-schema/latest/stencila_schema/struct.Thing.html"},(0,i.kt)("inlineCode",{parentName:"a"},"struct Thing")))),(0,i.kt)("h2",{id:"source"},"Source"),(0,i.kt)("p",null,"This documentation was generated from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stencila/schema/blob/master/schema/Thing.schema.yaml"},"Thing.schema.yaml"),"."))}p.isMDXComponent=!0}}]);