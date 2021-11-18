"use strict";(self.webpackChunk_stencila_help=self.webpackChunk_stencila_help||[]).push([[4016],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),g=a,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9327:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>u,toc:()=>c,default:()=>d});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={sidebar_position:3,title:"Manage organization users",description:"Once your organization is created you can add users to work collaboratively on projects"},l=void 0,u={unversionedId:"organizations/manage-organization-users",id:"organizations/manage-organization-users",isDocsHomePage:!1,title:"Manage organization users",description:"Once your organization is created you can add users to work collaboratively on projects",source:"@site/guides/organizations/manage-organization-users.md",sourceDirName:"organizations",slug:"/organizations/manage-organization-users",permalink:"/guides/organizations/manage-organization-users",editUrl:"https://github.com/stencila/stencila/edit/master/help/guides/organizations/manage-organization-users.md",tags:[],version:"current",lastUpdatedBy:"Nokome Bentley",lastUpdatedAt:1620266904,formattedLastUpdatedAt:"5/6/2021",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Manage organization users",description:"Once your organization is created you can add users to work collaboratively on projects"},sidebar:"sidebar",previous:{title:"Manage your organization settings",permalink:"/guides/organizations/manage-organization-settings"},next:{title:"Create a project",permalink:"/guides/projects/create-a-project"}},c=[{value:"User roles",id:"user-roles",children:[],level:2},{value:"Add a user",id:"add-a-user",children:[],level:2},{value:"Invite a user",id:"invite-a-user",children:[],level:2},{value:"Change roles",id:"change-roles",children:[],level:2},{value:"Remove a user",id:"remove-a-user",children:[],level:2}],p={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The advance of ",(0,o.kt)("a",{parentName:"p",href:"/guides/organizations/create-an-organization"},"creating an organization")," is so that a collection of user accounts can be associated with it and work collaboratively on projects."),(0,o.kt)("h2",{id:"user-roles"},"User roles"),(0,o.kt)("p",null,"There are three different user roles to choose from:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Member"),": can create, update and delete projects."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Manager"),": as for member and can create, update and delete teams."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Owner"),": as for manager and can also add and remove users and change their role."),(0,o.kt)("h2",{id:"add-a-user"},"Add a user"),(0,o.kt)("p",null,"If you know someone is already a user of Stencila you can easily search and add them to your organization and assign then a role."),(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},"Users")," under your organization image."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://stencila.github.io/hub/manager/snaps/org-users-menu-item.png",alt:null})),(0,o.kt)("p",null,"Type their username, or full name, into the search bar."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://stencila.github.io/hub/manager/snaps/org-users-add-user.png",alt:null})),(0,o.kt)("h2",{id:"invite-a-user"},"Invite a user"),(0,o.kt)("p",null,"If the person you want to add to your organization is not already a Stencila user you can invite them to join with this URL ",(0,o.kt)("a",{parentName:"p",href:"https://hub.stenci.la/"},"https://hub.stenci.la/")," \u2b50"),(0,o.kt)("h2",{id:"change-roles"},"Change roles"),(0,o.kt)("p",null,"You can change the role of a user at any time."),(0,o.kt)("h2",{id:"remove-a-user"},"Remove a user"),(0,o.kt)("p",null,"Delete a user from your organisation by selecting the eclipse button at the end of their name and ",(0,o.kt)("strong",{parentName:"p"},"remove from account"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://stencila.github.io/hub/manager/snaps/org-users-change-user.png",alt:null})))}d.isMDXComponent=!0}}]);