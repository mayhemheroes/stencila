"use strict";(self.webpackChunk_stencila_help=self.webpackChunk_stencila_help||[]).push([[4659],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),h=l(r),d=n,b=h["".concat(c,".").concat(d)]||h[d]||u[d]||a;return r?o.createElement(b,i(i({ref:t},s),{},{components:r})):o.createElement(b,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=h;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7737:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>p,contentTitle:()=>c,metadata:()=>l,toc:()=>s,default:()=>h});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),i=["components"],p={sidebar_position:5,title:"Share a project",description:"Share your public or private project URL with others"},c=void 0,l={unversionedId:"projects/share-a-project",id:"projects/share-a-project",isDocsHomePage:!1,title:"Share a project",description:"Share your public or private project URL with others",source:"@site/guides/projects/share-a-project.md",sourceDirName:"projects",slug:"/projects/share-a-project",permalink:"/guides/projects/share-a-project",editUrl:"https://github.com/stencila/stencila/edit/master/help/guides/projects/share-a-project.md",tags:[],version:"current",lastUpdatedBy:"Nokome Bentley",lastUpdatedAt:1620266904,formattedLastUpdatedAt:"5/6/2021",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Share a project",description:"Share your public or private project URL with others"},sidebar:"sidebar",previous:{title:"Manage project sources",permalink:"/guides/projects/manage-project-sources"},next:{title:"Publish a project",permalink:"/guides/projects/publish-a-project"}},s=[{value:"Public project",id:"public-project",children:[],level:2},{value:"Private project",id:"private-project",children:[],level:2},{value:"Invite someone to collaborate",id:"invite-someone-to-collaborate",children:[],level:2}],u={toc:s};function h(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As soon as you have ",(0,a.kt)("a",{parentName:"p",href:"/guides/projects/publish-a-project"},"published a project")," you can share it with others."),(0,a.kt)("p",null,"Click ",(0,a.kt)("strong",{parentName:"p"},"sharing")," on the left hand side bar."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://stencila.github.io/hub/manager/snaps/project-sharing-menu-item.png",alt:null})),(0,a.kt)("p",null,"Check if your project is ",(0,a.kt)("strong",{parentName:"p"},"public")," or ",(0,a.kt)("strong",{parentName:"p"},"private"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://stencila.github.io/hub/manager/snaps/project-sharing-public.png",alt:null})),(0,a.kt)("h2",{id:"public-project"},"Public project"),(0,a.kt)("p",null,"If your project is set as public then anyone can already view it."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://stencila.github.io/hub/manager/snaps/project-sharing-add-agent.png",alt:null})),(0,a.kt)("p",null,"You can also copy the URL and share it. Anyone can read it and execute code chunks but they won't be able to modify the project."),(0,a.kt)("h2",{id:"private-project"},"Private project"),(0,a.kt)("p",null,"If your project is set as private then others can only see it if you copy and send them the sharable link. They will be able to read it and execute code chunks but they won't be able to modify the project."),(0,a.kt)("h2",{id:"invite-someone-to-collaborate"},"Invite someone to collaborate"),(0,a.kt)("p",null,"If you would like someone to collaborate and modify you can invite them to ",(0,a.kt)("a",{parentName:"p",href:"/guides/projects/collaborate-on-a-project"},"collaborate on your project")))}h.isMDXComponent=!0}}]);