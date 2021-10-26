(self.webpackChunk_stencila_help=self.webpackChunk_stencila_help||[]).push([[3235],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=m(a),h=r,u=d["".concat(s,".").concat(h)]||d[h]||p[h]||l;return a?n.createElement(u,o(o({ref:t},c),{},{components:a})):n.createElement(u,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6991:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>m,toc:()=>c,default:()=>d});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),o=["components"],i={category:"Code",slug:"/schema/Code",custom_edit_url:"https://github.com/stencila/schema/edit/master/schema/Code.schema.yaml"},s="Code",m={unversionedId:"schema/docs/Code",id:"schema/docs/Code",isDocsHomePage:!1,title:"Code",description:"Base type for non-executable (e.g. CodeBlock) and executable (e.g. CodeExpression) code nodes.",source:"@site/references/schema/docs/Code.md",sourceDirName:"schema/docs",slug:"/schema/Code",permalink:"/references/schema/Code",editUrl:"https://github.com/stencila/schema/edit/master/schema/Code.schema.yaml",tags:[],version:"current",frontMatter:{category:"Code",slug:"/schema/Code",custom_edit_url:"https://github.com/stencila/schema/edit/master/schema/Code.schema.yaml"},sidebar:"sidebar",previous:{title:"Math Types",permalink:"/references/schema/MathTypes"},next:{title:"Code Block",permalink:"/references/schema/CodeBlock"}},c=[{value:"Properties",id:"properties",children:[],level:2},{value:"Notes",id:"notes",children:[],level:2},{value:"Related",id:"related",children:[],level:2},{value:"Available as",id:"available-as",children:[],level:2},{value:"Source",id:"source",children:[],level:2}],p={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"code"},"Code"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Base type for non-executable (e.g. ",(0,l.kt)("inlineCode",{parentName:"strong"},"CodeBlock"),") and executable (e.g. ",(0,l.kt)("inlineCode",{parentName:"strong"},"CodeExpression"),") code nodes.")),(0,l.kt)("p",null,"The most important, and only required, property of a ",(0,l.kt)("inlineCode",{parentName:"p"},"Code")," node is ",(0,l.kt)("inlineCode",{parentName:"p"},"text"),", a ",(0,l.kt)("inlineCode",{parentName:"p"},"string")," of the source code. There are no restrictions on the length or content of ",(0,l.kt)("inlineCode",{parentName:"p"},"text")," and it is possible for it to be syntactically invalid for the specified ",(0,l.kt)("inlineCode",{parentName:"p"},"programmingLanguage"),". "),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"@id")),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Inherited from"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"text")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/text"},"schema:text")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The text of the code."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Code"},"Code"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/id"},"schema:id")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The identifier for this item."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Entity"},"Entity"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mediaType"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/encodingFormat"},"schema:encodingFormat")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Media type, typically expressed using a MIME format, of the code. See note ",(0,l.kt)("a",{parentName:"td",href:"#notes"},"1"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Code"},"Code"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"meta"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.stenci.la/meta.jsonld"},"stencila:meta")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Metadata associated with this item."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Entity"},"Entity"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"programmingLanguage"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://schema.org/programmingLanguage"},"schema:programmingLanguage")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The programming language of the code."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/references/schema/Code"},"Code"))))),(0,l.kt)("h2",{id:"notes"},"Notes"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"mediaType")," : This property allows the differentiation of formats using the same programming language or variants of a programming language. An example is using ",(0,l.kt)("inlineCode",{parentName:"li"},"programmingLanguage"),' "json" and ',(0,l.kt)("inlineCode",{parentName:"li"},"encodingFormat"),' "application/ld+json" for JSON-LD code examples.')),(0,l.kt)("h2",{id:"related"},"Related"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Parent: ",(0,l.kt)("a",{parentName:"li",href:"/references/schema/Entity"},"Entity")),(0,l.kt)("li",{parentName:"ul"},"Descendants: ",(0,l.kt)("a",{parentName:"li",href:"/references/schema/CodeBlock"},"CodeBlock"),", ",(0,l.kt)("a",{parentName:"li",href:"/references/schema/CodeChunk"},"CodeChunk"),", ",(0,l.kt)("a",{parentName:"li",href:"/references/schema/CodeExecutable"},"CodeExecutable"),", ",(0,l.kt)("a",{parentName:"li",href:"/references/schema/CodeExpression"},"CodeExpression"),", ",(0,l.kt)("a",{parentName:"li",href:"/references/schema/CodeFragment"},"CodeFragment"))),(0,l.kt)("h2",{id:"available-as"},"Available as"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://schema.stenci.la/Code.jsonld"},"JSON-LD")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://schema.stenci.la/v1/Code.schema.json"},"JSON Schema")),(0,l.kt)("li",{parentName:"ul"},"Python ",(0,l.kt)("a",{parentName:"li",href:"https://stencila.github.io/schema/python/docs/types.html#schema.types.Code"},(0,l.kt)("inlineCode",{parentName:"a"},"class Code"))),(0,l.kt)("li",{parentName:"ul"},"TypeScript ",(0,l.kt)("a",{parentName:"li",href:"https://stencila.github.io/schema/ts/docs/interfaces/code.html"},(0,l.kt)("inlineCode",{parentName:"a"},"interface Code"))),(0,l.kt)("li",{parentName:"ul"},"R ",(0,l.kt)("a",{parentName:"li",href:"https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf"},(0,l.kt)("inlineCode",{parentName:"a"},"class Code"))),(0,l.kt)("li",{parentName:"ul"},"Rust ",(0,l.kt)("a",{parentName:"li",href:"https://docs.rs/stencila-schema/latest/stencila_schema/struct.Code.html"},(0,l.kt)("inlineCode",{parentName:"a"},"struct Code")))),(0,l.kt)("h2",{id:"source"},"Source"),(0,l.kt)("p",null,"This documentation was generated from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/stencila/schema/blob/master/schema/Code.schema.yaml"},"Code.schema.yaml"),"."))}d.isMDXComponent=!0}}]);