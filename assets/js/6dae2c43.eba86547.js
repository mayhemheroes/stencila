"use strict";(self.webpackChunk_stencila_help=self.webpackChunk_stencila_help||[]).push([[4508],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),o=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=o(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=o(a),u=n,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||c;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var o=2;o<c;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8068:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>o,toc:()=>p,default:()=>d});var r=a(7462),n=a(3366),c=(a(7294),a(3905)),i=["components"],s={category:"Works",slug:"/schema/MediaObjectTypes",custom_edit_url:"https://github.com/stencila/schema"},l="Media Object Types",o={unversionedId:"schema/docs/MediaObjectTypes",id:"schema/docs/MediaObjectTypes",isDocsHomePage:!1,title:"Media Object Types",description:"All type schemas that are derived from MediaObject",source:"@site/references/schema/docs/MediaObjectTypes.md",sourceDirName:"schema/docs",slug:"/schema/MediaObjectTypes",permalink:"/references/schema/MediaObjectTypes",editUrl:"https://github.com/stencila/schema",tags:[],version:"current",frontMatter:{category:"Works",slug:"/schema/MediaObjectTypes",custom_edit_url:"https://github.com/stencila/schema"},sidebar:"sidebar",previous:{title:"Media Object",permalink:"/references/schema/MediaObject"},next:{title:"Periodical",permalink:"/references/schema/Periodical"}},p=[{value:"Members",id:"members",children:[],level:2},{value:"Available as",id:"available-as",children:[],level:2}],m={toc:p};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"media-object-types"},"Media Object Types"),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"All type schemas that are derived from MediaObject")),(0,c.kt)("p",null,"This schema type is marked as ",(0,c.kt)("strong",{parentName:"p"},"experimental")," \ud83e\uddea and is subject to change."),(0,c.kt)("h2",{id:"members"},"Members"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:null},"@id"),(0,c.kt)("th",{parentName:"tr",align:null},"Type"),(0,c.kt)("th",{parentName:"tr",align:null},"Description"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("a",{parentName:"td",href:"https://schema.org/MediaObject"},"schema:MediaObject")),(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("a",{parentName:"td",href:"/references/schema/MediaObject"},"MediaObject")),(0,c.kt)("td",{parentName:"tr",align:null},"A media object, such as an image, video, or audio object embedded in a web page or a")))),(0,c.kt)("p",null,"downloadable dataset."),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://schema.org/AudioObject"},"schema:AudioObject")," | ",(0,c.kt)("a",{parentName:"p",href:"/references/schema/AudioObject"},"AudioObject")," | An audio file\n",(0,c.kt)("a",{parentName:"p",href:"https://schema.org/ImageObject"},"schema:ImageObject")," | ",(0,c.kt)("a",{parentName:"p",href:"/references/schema/ImageObject"},"ImageObject")," | An image file.\n",(0,c.kt)("a",{parentName:"p",href:"https://schema.org/VideoObject"},"schema:VideoObject")," | ",(0,c.kt)("a",{parentName:"p",href:"/references/schema/VideoObject"},"VideoObject")," | A video file."),(0,c.kt)("h2",{id:"available-as"},"Available as"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://schema.stenci.la/stencila.jsonld"},"JSON-LD")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://schema.stenci.la/v1/MediaObjectTypes.schema.json"},"JSON Schema"))))}d.isMDXComponent=!0}}]);