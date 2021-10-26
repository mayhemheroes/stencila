(self.webpackChunk_stencila_help=self.webpackChunk_stencila_help||[]).push([[8523],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=i(a),u=r,h=m["".concat(c,".").concat(u)]||m[u]||p[u]||l;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8567:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>i,toc:()=>d,default:()=>m});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),o=["components"],s={category:"Code",slug:"/schema/CodeTypes",custom_edit_url:"https://github.com/stencila/schema"},c="Code Types",i={unversionedId:"schema/docs/CodeTypes",id:"schema/docs/CodeTypes",isDocsHomePage:!1,title:"Code Types",description:"All type schemas that are derived from Code",source:"@site/references/schema/docs/CodeTypes.md",sourceDirName:"schema/docs",slug:"/schema/CodeTypes",permalink:"/references/schema/CodeTypes",editUrl:"https://github.com/stencila/schema",tags:[],version:"current",frontMatter:{category:"Code",slug:"/schema/CodeTypes",custom_edit_url:"https://github.com/stencila/schema"},sidebar:"sidebar",previous:{title:"Code Fragment",permalink:"/references/schema/CodeFragment"},next:{title:"Function",permalink:"/references/schema/Function"}},d=[{value:"Members",id:"members",children:[],level:2},{value:"Available as",id:"available-as",children:[],level:2}],p={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"code-types"},"Code Types"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"All type schemas that are derived from Code")),(0,l.kt)("p",null,"This schema type is marked as ",(0,l.kt)("strong",{parentName:"p"},"experimental")," \ud83e\uddea and is subject to change."),(0,l.kt)("h2",{id:"members"},"Members"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"@id"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.stenci.la/Code.jsonld"},"stencila:Code")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Code"},"Code")),(0,l.kt)("td",{parentName:"tr",align:null},"Base type for non-executable (e.g. ",(0,l.kt)("inlineCode",{parentName:"td"},"CodeBlock"),") and executable (e.g. ",(0,l.kt)("inlineCode",{parentName:"td"},"CodeExpression"),") code nodes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.stenci.la/CodeBlock.jsonld"},"stencila:CodeBlock")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/CodeBlock"},"CodeBlock")),(0,l.kt)("td",{parentName:"tr",align:null},"A code block.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.stenci.la/CodeChunk.jsonld"},"stencila:CodeChunk")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/CodeChunk"},"CodeChunk")),(0,l.kt)("td",{parentName:"tr",align:null},"A executable chunk of code.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.stenci.la/CodeExecutable.jsonld"},"stencila:CodeExecutable")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/CodeExecutable"},"CodeExecutable")),(0,l.kt)("td",{parentName:"tr",align:null},"Base type for executable code nodes (i.e. ",(0,l.kt)("inlineCode",{parentName:"td"},"CodeChunk")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"CodeExpression"),").")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.stenci.la/CodeExpression.jsonld"},"stencila:CodeExpression")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/CodeExpression"},"CodeExpression")),(0,l.kt)("td",{parentName:"tr",align:null},"An executable programming code expression.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.stenci.la/CodeFragment.jsonld"},"stencila:CodeFragment")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/CodeFragment"},"CodeFragment")),(0,l.kt)("td",{parentName:"tr",align:null},"Inline code.")))),(0,l.kt)("h2",{id:"available-as"},"Available as"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://schema.stenci.la/stencila.jsonld"},"JSON-LD")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://schema.stenci.la/v1/CodeTypes.schema.json"},"JSON Schema"))))}m.isMDXComponent=!0}}]);