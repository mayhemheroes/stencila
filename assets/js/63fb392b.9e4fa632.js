"use strict";(self.webpackChunk_stencila_help=self.webpackChunk_stencila_help||[]).push([[4051],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(r),h=o,d=m["".concat(u,".").concat(h)]||m[h]||c[h]||a;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2144:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>u,metadata:()=>s,toc:()=>p,default:()=>m});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],i={title:"GitHub Sources",description:"Add a GitHub Repository to your Stencila project",authors:["Colette Doughty <colette@stenci.la> (https://stenci.la)"]},u=void 0,s={unversionedId:"sources/github",id:"sources/github",isDocsHomePage:!1,title:"GitHub Sources",description:"Add a GitHub Repository to your Stencila project",source:"@site/guides/sources/github.md",sourceDirName:"sources",slug:"/sources/github",permalink:"/guides/sources/github",editUrl:"https://github.com/stencila/stencila/edit/master/help/guides/sources/github.md",tags:[],version:"current",lastUpdatedBy:"Nokome Bentley",lastUpdatedAt:1620266904,formattedLastUpdatedAt:"5/6/2021",frontMatter:{title:"GitHub Sources",description:"Add a GitHub Repository to your Stencila project",authors:["Colette Doughty <colette@stenci.la> (https://stenci.la)"]},sidebar:"sidebar",previous:{title:"eLife Sources",permalink:"/guides/sources/elife"},next:{title:"Google Docs Sources",permalink:"/guides/sources/google-docs"}},p=[{value:"Before you start",id:"before-you-start",children:[],level:2},{value:"Create a GitHub source",id:"create-a-github-source",children:[],level:2},{value:"Refresh your repo",id:"refresh-your-repo",children:[],level:2},{value:"Next steps",id:"next-steps",children:[],level:2}],c={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can link a GitHub repository to your project as a source (both public and private). This allows you to take full advantage of all of GitHub's great source code management, version control and collaboration and to easily pull this information into your Stencila project."),(0,a.kt)("h2",{id:"before-you-start"},"Before you start"),(0,a.kt)("p",null,"Before you start make sure your GitHub account is connected to your Stencila account. Check via this ",(0,a.kt)("a",{parentName:"p",href:"https://hub.stenci.la/me/social/connections/"},"link"),"."),(0,a.kt)("h2",{id:"create-a-github-source"},"Create a GitHub source"),(0,a.kt)("p",null,"To add a GitHub repository as a project source:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to the project ",(0,a.kt)("strong",{parentName:"li"},"Sources")," page")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://stencila.github.io/hub/manager/snaps/project-sources-menu-item.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Press the ",(0,a.kt)("strong",{parentName:"li"},"New")," button and select ",(0,a.kt)("strong",{parentName:"li"},"GitHub"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://stencila.github.io/hub/manager/snaps/project-sources-new-button.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enter the repository ",(0,a.kt)("strong",{parentName:"li"},"name")," and ",(0,a.kt)("strong",{parentName:"li"},"subpath")," directly")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://stencila.github.io/hub/manager/snaps/project-sources-new-github-repo.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Or the ",(0,a.kt)("strong",{parentName:"li"},"URL"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://stencila.github.io/hub/manager/snaps/project-sources-new-github-url.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add the ",(0,a.kt)("strong",{parentName:"li"},"Path")," that you want to link it to within the project (what you want to name your source)")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://stencila.github.io/hub/manager/snaps/project-sources-new-path-field.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://stencila.github.io/hub/manager/snaps/project-sources-new-create-button.png",alt:null})),(0,a.kt)("p",null,"Your Github repository is automatically ",(0,a.kt)("strong",{parentName:"p"},"pulled")," into your project and stores in your project's working directory."),(0,a.kt)("h2",{id:"refresh-your-repo"},"Refresh your repo"),(0,a.kt)("p",null,"At any time in the future you can go back and pull in a new version of your repo."),(0,a.kt)("p",null,"To do this simply click the ",(0,a.kt)("strong",{parentName:"p"},"Source")," tab from the side bar, click to view the pop up at the end of Github source and ",(0,a.kt)("strong",{parentName:"p"},"Pull"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/wAxR8T8.png",alt:null})),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"You might like to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/guides/projects/manage-project-sources"},"Convert your file")," to one of the many different formats available."),(0,a.kt)("li",{parentName:"ul"},"Publish your document as an ",(0,a.kt)("a",{parentName:"li",href:"/guides/projects/publish-a-project"},"executable manuscript"),".")))}m.isMDXComponent=!0}}]);