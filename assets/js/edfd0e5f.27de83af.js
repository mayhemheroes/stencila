"use strict";(self.webpackChunk_stencila_help=self.webpackChunk_stencila_help||[]).push([[6070],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),u=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return r?o.createElement(f,l(l({ref:t},s),{},{components:r})):o.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7811:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>u,toc:()=>s,default:()=>d});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),l=["components"],i={title:"Upload Sources",description:"Upload a file from your computer to your Stencila project",authors:["Alexander Ketchakmadze <alexander@stenci.la> (https://stenci.la)"]},p=void 0,u={unversionedId:"sources/upload",id:"sources/upload",isDocsHomePage:!1,title:"Upload Sources",description:"Upload a file from your computer to your Stencila project",source:"@site/guides/sources/upload.md",sourceDirName:"sources",slug:"/sources/upload",permalink:"/guides/sources/upload",editUrl:"https://github.com/stencila/stencila/edit/master/help/guides/sources/upload.md",tags:[],version:"current",lastUpdatedBy:"Nokome Bentley",lastUpdatedAt:1620266904,formattedLastUpdatedAt:"5/6/2021",frontMatter:{title:"Upload Sources",description:"Upload a file from your computer to your Stencila project",authors:["Alexander Ketchakmadze <alexander@stenci.la> (https://stenci.la)"]},sidebar:"sidebar",previous:{title:"PLOS Sources",permalink:"/guides/sources/plos"},next:{title:"URL Sources",permalink:"/guides/sources/url"}},s=[{value:"Uploading a file",id:"uploading-a-file",children:[],level:2},{value:"Next steps",id:"next-steps",children:[],level:2}],c={toc:s};function d(e){var t=e.components,r=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can upload one more files directly to your Stencila project. You can then convert them to other formats or use them as data in you executable documents."),(0,a.kt)("h2",{id:"uploading-a-file"},"Uploading a file"),(0,a.kt)("p",null,"To upload a file to a project:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to the project ",(0,a.kt)("strong",{parentName:"li"},"Files")," page")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://stencila.github.io/hub/manager/snaps/an-org-first-project-owner-1920x1080.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Press the ",(0,a.kt)("strong",{parentName:"p"},"New")," button and select ",(0,a.kt)("strong",{parentName:"p"},"Upload"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click on the ",(0,a.kt)("strong",{parentName:"p"},"Choose some files\u2026")," button to open your browser's file browser. If you have files in sub-folders you can upload a .zip or .tar.gz archive to retain the folder structure."))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://stencila.github.io/hub/manager/snaps/project-sources-new-upload.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Once ready click ",(0,a.kt)("strong",{parentName:"li"},"Upload")," to begin the upload process. Once completed you can see the files that were pulled from the source and begin working with them.")),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"You might like to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/guides/projects/manage-project-sources"},"Link a source")," from Github, Google Docs or your Google Drive etc."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/guides/projects/manage-project-sources"},"Convert your file")," to one of the many different formats available."),(0,a.kt)("li",{parentName:"ul"},"Publish a document as an ",(0,a.kt)("a",{parentName:"li",href:"/guides/projects/publish-a-project"},"executable manuscript"),".")))}d.isMDXComponent=!0}}]);