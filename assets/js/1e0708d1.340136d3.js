"use strict";(self.webpackChunk_stencila_help=self.webpackChunk_stencila_help||[]).push([[5794],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=i(r),d=o,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9723:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>u,contentTitle:()=>s,metadata:()=>i,toc:()=>c,default:()=>m});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],u={title:"URL Sources",description:"Add a URL to your Stencila project",authors:["Colette Doughty <colette@stenci.la> (https://stenci.la)"]},s=void 0,i={unversionedId:"sources/url",id:"sources/url",title:"URL Sources",description:"Add a URL to your Stencila project",source:"@site/guides/sources/url.md",sourceDirName:"sources",slug:"/sources/url",permalink:"/guides/sources/url",editUrl:"https://github.com/stencila/stencila/edit/master/help/guides/sources/url.md",tags:[],version:"current",lastUpdatedBy:"Nokome Bentley",lastUpdatedAt:1620266904,formattedLastUpdatedAt:"5/6/2021",frontMatter:{title:"URL Sources",description:"Add a URL to your Stencila project",authors:["Colette Doughty <colette@stenci.la> (https://stenci.la)"]},sidebar:"sidebar",previous:{title:"Upload Sources",permalink:"/guides/sources/upload"},next:{title:"Jupyter Notebooks",permalink:"/guides/formats/jupyter-notebooks"}},c=[{value:"Creating an URL source",id:"creating-an-url-source",children:[],level:2},{value:"Refresh your URL",id:"refresh-your-url",children:[],level:2},{value:"Next steps",id:"next-steps",children:[],level:2}],p={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A URL source lets you pull content from a website or API into your project. Useful when you wish to fetch and analysis data such as from data repositories or Github. Quite often these are CSV files."),(0,a.kt)("h2",{id:"creating-an-url-source"},"Creating an URL source"),(0,a.kt)("p",null,"To add an URL as a project source:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to the project ",(0,a.kt)("strong",{parentName:"li"},"Sources")," page")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://stencila.github.io/hub/manager/snaps/project-sources-menu-item.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Press the ",(0,a.kt)("strong",{parentName:"li"},"New")," button and select ",(0,a.kt)("strong",{parentName:"li"},"URL"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://stencila.github.io/hub/manager/snaps/project-sources-new-button.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enter the source ",(0,a.kt)("strong",{parentName:"li"},"URL")," and the ",(0,a.kt)("strong",{parentName:"li"},"Path")," that you want to link it to within the project (what you want to name your source) and ",(0,a.kt)("strong",{parentName:"li"},"Create Source"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://stencila.github.io/hub/manager/snaps/project-sources-new-url.png",alt:null})),(0,a.kt)("p",null,"Your URL source is automatically ",(0,a.kt)("strong",{parentName:"p"},"pulled")," into your project and stores in your project's working directory."),(0,a.kt)("h2",{id:"refresh-your-url"},"Refresh your URL"),(0,a.kt)("p",null,"At any time in the future you can go back and pull in an updated version of your source."),(0,a.kt)("p",null,"To do this simply click the ",(0,a.kt)("strong",{parentName:"p"},"Source")," tab from the side bar, click to view the pop up at the end of URL source and ",(0,a.kt)("strong",{parentName:"p"},"Pull"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/wAxR8T8.png",alt:null})),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"You might like to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/guides/projects/manage-project-sources"},"Link another source")," from Github, Google Docs or your Google Drive etc."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/guides/projects/manage-project-sources"},"Convert a file")," to one of the many different formats available."),(0,a.kt)("li",{parentName:"ul"},"Publish a document as an ",(0,a.kt)("a",{parentName:"li",href:"/guides/projects/publish-a-project"},"executable manuscript"),".")))}m.isMDXComponent=!0}}]);