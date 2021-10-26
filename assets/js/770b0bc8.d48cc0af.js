(self.webpackChunk_stencila_help=self.webpackChunk_stencila_help||[]).push([[8630],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),g=r,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||i;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},297:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>u,default:()=>p});var o=n(2122),r=n(9756),i=(n(7294),n(3905)),a=["components"],l={title:"Getting started",description:"Overview of the workflows for executing code in your documents",authors:["Alexander Ketchakmadze <alexander@stenci.la> (https://stenci.la)"]},s=void 0,c={unversionedId:"gsuita/getting-started",id:"gsuita/getting-started",isDocsHomePage:!1,title:"Getting started",description:"Overview of the workflows for executing code in your documents",source:"@site/guides/gsuita/getting-started.md",sourceDirName:"gsuita",slug:"/gsuita/getting-started",permalink:"/guides/gsuita/getting-started",editUrl:"https://github.com/stencila/stencila/edit/master/help/guides/gsuita/getting-started.md",tags:[],version:"current",lastUpdatedBy:"Nokome Bentley",lastUpdatedAt:1620266904,formattedLastUpdatedAt:"5/6/2021",frontMatter:{title:"Getting started",description:"Overview of the workflows for executing code in your documents",authors:["Alexander Ketchakmadze <alexander@stenci.la> (https://stenci.la)"]},sidebar:"sidebar",previous:{title:"R Markdown",permalink:"/guides/formats/rmarkdown"},next:{title:"Google Docs Tutorial",permalink:"/guides/gsuita/google-docs-tutorial"}},u=[{value:"Overview",id:"overview",children:[],level:2},{value:"Linking document to a Stencila project",id:"linking-document-to-a-stencila-project",children:[],level:2},{value:"Code &amp; Equations Blocks",id:"code--equations-blocks",children:[],level:2},{value:"Inserting generated figures into the document",id:"inserting-generated-figures-into-the-document",children:[],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Link document to Stencila project"),(0,i.kt)("li",{parentName:"ol"},"Create a Block"),(0,i.kt)("li",{parentName:"ol"},"Write code or equation"),(0,i.kt)("li",{parentName:"ol"},"Run block to preview results"),(0,i.kt)("li",{parentName:"ol"},"Repeat steps 2 and 3 until satisfied"),(0,i.kt)("li",{parentName:"ol"},"Insert figure into document")),(0,i.kt)("h2",{id:"linking-document-to-a-stencila-project"},"Linking document to a Stencila project"),(0,i.kt)("p",null,"The add-on allows you to execute code and embed resulting figures in your document by communicating with the Stencila servers."),(0,i.kt)("p",null,"To ensure that documents use the right library versions and have access to project files, you need to link your Google Doc to an existing Stencila Hub project."),(0,i.kt)("p",null,"When opened, the add-on will detect if the document is not linked to a project, and ask you to link it to a project if needed."),(0,i.kt)("p",null,"Once linked to a project, the add-on will start a Docker container on a remote server with all your project assets. You will then be able to create, evaluate, and embed either Code or Equation Blocks."),(0,i.kt)("h2",{id:"code--equations-blocks"},"Code & Equations Blocks"),(0,i.kt)("p",null,"Blocks are the foundational elements for writing executable Google Docs."),(0,i.kt)("p",null,"They are PNG images enriched with either source code or LaTeX equations depending on the type of block, as well as other metadata such as resulting output and time of execution."),(0,i.kt)("p",null,"This allows you to embed generated charts and other figures as images within the flow of your document. The add-on is able to detect these images, allowing you to re-execute and modify them at will."),(0,i.kt)("h2",{id:"inserting-generated-figures-into-the-document"},"Inserting generated figures into the document"),(0,i.kt)("p",null,"Due to limitations with Google Docs add-ons, the process to generate a reproducible figure and embed it into the document can be relative slow."),(0,i.kt)("p",null,"In order to speed up your workflow, we don\u2019t immediately update the document contents when you run a block. Instead we show you a preview of the results in the sidebar, allowing you to rapidly refine and iterate the code."),(0,i.kt)("p",null,"Once you are satisfied with the results, click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Save")," button which will insert the figure into the document. If the figure being edited was already present in the document, the add-on will instead update the image with the new contents."))}p.isMDXComponent=!0}}]);