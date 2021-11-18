"use strict";(self.webpackChunk_stencila_help=self.webpackChunk_stencila_help||[]).push([[482],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),m=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},o=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=m(a),f=n,k=p["".concat(c,".").concat(f)]||p[f]||h[f]||i;return a?r.createElement(k,s(s({ref:t},o),{},{components:a})):r.createElement(k,s({ref:t},o))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var m=2;m<i;m++)s[m]=a[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7592:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>m,toc:()=>o,default:()=>p});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),s=["components"],l={category:"Other",slug:"/schema/Entity",custom_edit_url:"https://github.com/stencila/schema/edit/master/schema/Entity.schema.yaml"},c="Entity",m={unversionedId:"schema/docs/Entity",id:"schema/docs/Entity",isDocsHomePage:!1,title:"Entity",description:"The most simple compound (ie. non-atomic like number, string etc) type.",source:"@site/references/schema/docs/Entity.md",sourceDirName:"schema/docs",slug:"/schema/Entity",permalink:"/references/schema/Entity",editUrl:"https://github.com/stencila/schema/edit/master/schema/Entity.schema.yaml",tags:[],version:"current",frontMatter:{category:"Other",slug:"/schema/Entity",custom_edit_url:"https://github.com/stencila/schema/edit/master/schema/Entity.schema.yaml"},sidebar:"sidebar",previous:{title:"Defined Term",permalink:"/references/schema/DefinedTerm"},next:{title:"Entity Types",permalink:"/references/schema/EntityTypes"}},o=[{value:"Properties",id:"properties",children:[],level:2},{value:"Related",id:"related",children:[],level:2},{value:"Available as",id:"available-as",children:[],level:2},{value:"Source",id:"source",children:[],level:2}],h={toc:o};function p(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"entity"},"Entity"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The most simple compound (ie. non-atomic like ",(0,i.kt)("inlineCode",{parentName:"strong"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"strong"},"string")," etc) type.")),(0,i.kt)("p",null,"This type exists mainly to have a more simple base class than schema.org's ",(0,i.kt)("inlineCode",{parentName:"p"},"Thing"),". This schema includes special properties that are analogous to JSON-LDs ",(0,i.kt)("inlineCode",{parentName:"p"},"@type")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@id"),", as well as a ",(0,i.kt)("inlineCode",{parentName:"p"},"meta")," property that can be used by applications for ad-hoc extensions. "),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"th"},"@id")),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Inherited from"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.org/id"},"schema:id")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The identifier for this item."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Entity"},"Entity"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"meta"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://schema.stenci.la/meta.jsonld"},"stencila:meta")),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"Metadata associated with this item."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/references/schema/Entity"},"Entity"))))),(0,i.kt)("h2",{id:"related"},"Related"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Parent: None"),(0,i.kt)("li",{parentName:"ul"},"Descendants: ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/ArrayValidator"},"ArrayValidator"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Article"},"Article"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/AudioObject"},"AudioObject"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/BooleanValidator"},"BooleanValidator"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Brand"},"Brand"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/CitationIntentEnumeration"},"CitationIntentEnumeration"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Cite"},"Cite"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/CiteGroup"},"CiteGroup"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Claim"},"Claim"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Code"},"Code"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/CodeBlock"},"CodeBlock"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/CodeChunk"},"CodeChunk"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/CodeError"},"CodeError"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/CodeExecutable"},"CodeExecutable"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/CodeExpression"},"CodeExpression"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/CodeFragment"},"CodeFragment"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Collection"},"Collection"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Comment"},"Comment"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/ConstantValidator"},"ConstantValidator"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/ContactPoint"},"ContactPoint"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/CreativeWork"},"CreativeWork"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Datatable"},"Datatable"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/DatatableColumn"},"DatatableColumn"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Date"},"Date"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/DefinedTerm"},"DefinedTerm"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Delete"},"Delete"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Emphasis"},"Emphasis"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/EnumValidator"},"EnumValidator"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Enumeration"},"Enumeration"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Figure"},"Figure"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Function"},"Function"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Grant"},"Grant"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Heading"},"Heading"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/ImageObject"},"ImageObject"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Include"},"Include"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/IntegerValidator"},"IntegerValidator"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Link"},"Link"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/List"},"List"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/ListItem"},"ListItem"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Mark"},"Mark"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Math"},"Math"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/MathBlock"},"MathBlock"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/MathFragment"},"MathFragment"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/MediaObject"},"MediaObject"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/MonetaryGrant"},"MonetaryGrant"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/NontextualAnnotation"},"NontextualAnnotation"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Note"},"Note"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/NumberValidator"},"NumberValidator"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Organization"},"Organization"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Paragraph"},"Paragraph"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Parameter"},"Parameter"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Periodical"},"Periodical"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Person"},"Person"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/PostalAddress"},"PostalAddress"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Product"},"Product"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/PropertyValue"},"PropertyValue"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/PublicationIssue"},"PublicationIssue"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/PublicationVolume"},"PublicationVolume"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Quote"},"Quote"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/QuoteBlock"},"QuoteBlock"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Review"},"Review"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/SoftwareApplication"},"SoftwareApplication"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/SoftwareEnvironment"},"SoftwareEnvironment"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/SoftwareSession"},"SoftwareSession"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/SoftwareSourceCode"},"SoftwareSourceCode"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/StringValidator"},"StringValidator"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Strong"},"Strong"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Subscript"},"Subscript"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Superscript"},"Superscript"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Table"},"Table"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/TableCell"},"TableCell"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/TableRow"},"TableRow"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/ThematicBreak"},"ThematicBreak"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Thing"},"Thing"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/TupleValidator"},"TupleValidator"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Validator"},"Validator"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/Variable"},"Variable"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/VideoObject"},"VideoObject"),", ",(0,i.kt)("a",{parentName:"li",href:"/references/schema/VolumeMount"},"VolumeMount"))),(0,i.kt)("h2",{id:"available-as"},"Available as"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://schema.stenci.la/Entity.jsonld"},"JSON-LD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://schema.stenci.la/v1/Entity.schema.json"},"JSON Schema")),(0,i.kt)("li",{parentName:"ul"},"Python ",(0,i.kt)("a",{parentName:"li",href:"https://stencila.github.io/schema/python/docs/types.html#schema.types.Entity"},(0,i.kt)("inlineCode",{parentName:"a"},"class Entity"))),(0,i.kt)("li",{parentName:"ul"},"TypeScript ",(0,i.kt)("a",{parentName:"li",href:"https://stencila.github.io/schema/ts/docs/interfaces/entity.html"},(0,i.kt)("inlineCode",{parentName:"a"},"interface Entity"))),(0,i.kt)("li",{parentName:"ul"},"R ",(0,i.kt)("a",{parentName:"li",href:"https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf"},(0,i.kt)("inlineCode",{parentName:"a"},"class Entity"))),(0,i.kt)("li",{parentName:"ul"},"Rust ",(0,i.kt)("a",{parentName:"li",href:"https://docs.rs/stencila-schema/latest/stencila_schema/struct.Entity.html"},(0,i.kt)("inlineCode",{parentName:"a"},"struct Entity")))),(0,i.kt)("h2",{id:"source"},"Source"),(0,i.kt)("p",null,"This documentation was generated from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stencila/schema/blob/master/schema/Entity.schema.yaml"},"Entity.schema.yaml"),"."))}p.isMDXComponent=!0}}]);