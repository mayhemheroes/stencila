(self.webpackChunk_stencila_help=self.webpackChunk_stencila_help||[]).push([[5374],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>l,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(g,c(c({ref:t},l),{},{components:r})):a.createElement(g,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4549:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>s,toc:()=>l,default:()=>d});var a=r(2122),n=r(9756),o=(r(7294),r(3905)),c=["components"],i={sidebar_position:1,title:"Create a project",description:"Projects are where you upload and link data sources and publish files"},p=void 0,s={unversionedId:"projects/create-a-project",id:"projects/create-a-project",isDocsHomePage:!1,title:"Create a project",description:"Projects are where you upload and link data sources and publish files",source:"@site/guides/projects/create-a-project.md",sourceDirName:"projects",slug:"/projects/create-a-project",permalink:"/guides/projects/create-a-project",editUrl:"https://github.com/stencila/stencila/edit/master/help/guides/projects/create-a-project.md",tags:[],version:"current",lastUpdatedBy:"Nokome Bentley",lastUpdatedAt:1620269799,formattedLastUpdatedAt:"5/6/2021",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Create a project",description:"Projects are where you upload and link data sources and publish files"},sidebar:"sidebar",previous:{title:"Manage organization users",permalink:"/guides/organizations/manage-organization-users"},next:{title:"Project settings",permalink:"/guides/projects/project-settings"}},l=[{value:"Create a project",id:"create-a-project",children:[],level:2}],u={toc:l};function d(e){var t=e.components,r=(0,n.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Once you're ",(0,o.kt)("a",{parentName:"p",href:"/guides/accounts/getting-started"},"set up")," as a Stencila account user decide whether you want to create a project under your personal account or ",(0,o.kt)("a",{parentName:"p",href:"/guides/organizations/create-an-organization"},"under your organization"),". The advance of creating an organization is so that a collection of users can be associated with it and work collaboratively on projects."),(0,o.kt)("h2",{id:"create-a-project"},"Create a project"),(0,o.kt)("p",null,"Navigate to ",(0,o.kt)("strong",{parentName:"p"},"projects")," on the top header bar."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://stencila.github.io/hub/manager/snaps/project-new-button.png",alt:null})),(0,o.kt)("p",null,"Choose the account which the project will be owned by."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://stencila.github.io/hub/manager/snaps/project-new-account-field.png",alt:null})),(0,o.kt)("p",null,"Create a ",(0,o.kt)("strong",{parentName:"p"},"project name"),". All lower case and unique for your account. Note it will be used in the URLs. e.g. ",(0,o.kt)("a",{parentName:"p",href:"https://hub.stenci.la/awesome-org/great-project"},"https://hub.stenci.la/awesome-org/great-project")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://stencila.github.io/hub/manager/snaps/project-new-name-field.png",alt:null})),(0,o.kt)("p",null,"Your project will automatically be ",(0,o.kt)("strong",{parentName:"p"},"public")," which means any Stencila users can view it. Click if you want your project to be ",(0,o.kt)("strong",{parentName:"p"},"private"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://stencila.github.io/hub/manager/snaps/project-sharing-public.png",alt:null})),(0,o.kt)("p",null,"As the creator of the project you automatically become the project ",(0,o.kt)("strong",{parentName:"p"},"owner"),". This gives you full authority to make changes or delete the project."),(0,o.kt)("p",null,"You're now set up \ud83d\udc4f and ready to ",(0,o.kt)("a",{parentName:"p",href:"/guides/projects/manage-project-sources"},"manage your project sources"),". Before you do we highly recommend you finalise your ",(0,o.kt)("a",{parentName:"p",href:"/guides/projects/project-settings"},"project settings")," and chose your theme. It won't take a moment \u26a1"))}d.isMDXComponent=!0}}]);