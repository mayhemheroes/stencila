(self.webpackChunk_stencila_help=self.webpackChunk_stencila_help||[]).push([[9382],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5648:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>d,toc:()=>p,default:()=>u});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],l={title:"Installing Stencila for Google Workspace",description:"How to install & open the Google Workspace add-on",authors:["Alexander Ketchakmadze <alexander@stenci.la> (https://stenci.la)"]},s=void 0,d={unversionedId:"gsuita/installation",id:"gsuita/installation",isDocsHomePage:!1,title:"Installing Stencila for Google Workspace",description:"How to install & open the Google Workspace add-on",source:"@site/guides/gsuita/installation.md",sourceDirName:"gsuita",slug:"/gsuita/installation",permalink:"/guides/gsuita/installation",editUrl:"https://github.com/stencila/stencila/edit/master/help/guides/gsuita/installation.md",tags:[],version:"current",lastUpdatedBy:"alex-ketch",lastUpdatedAt:1622054810,formattedLastUpdatedAt:"5/26/2021",frontMatter:{title:"Installing Stencila for Google Workspace",description:"How to install & open the Google Workspace add-on",authors:["Alexander Ketchakmadze <alexander@stenci.la> (https://stenci.la)"]},sidebar:"sidebar",previous:{title:"Google Docs Tutorial",permalink:"/guides/gsuita/google-docs-tutorial"},next:{title:"Add-on interface overview",permalink:"/guides/gsuita/interface-overview"}},p=[{value:"Installation",id:"installation",children:[],level:2},{value:"Opening the add-on",id:"opening-the-add-on",children:[],level:2}],c={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Stencila for Google Docs enables you to execute and embed reproducible figures inside Google Docs."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"You will be presented with several dialogue windows asking permission for us to work with your documents in Google Drive."),(0,o.kt)("p",null,"Outlined below are the permissions we ask for, and the explanations for why they are needed.\nWe strive to request the least amount of permissions needed while still being able to provide\na feature rich add-on. If you notice areas for improvement, please let us know."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1646307/109692342-6792a600-7b56-11eb-86f1-730d92ae9417.png",alt:"Stencila for Google Docs Permissions request"})),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Permission"),(0,o.kt)("th",{parentName:"tr",align:null},"Reason"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"View and manage Google Drive files and folders that you have opened or created with this app"),(0,o.kt)("td",{parentName:"tr",align:null},"Only the files you select, or open the add-on in, will be shared with Stencila")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"View and manage documents that this application has been installed in"),(0,o.kt)("td",{parentName:"tr",align:null},"Lets Stencila run the add-on and insert code blocks inside Google Docs")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"View and manage spreadsheets that this application has been installed in"),(0,o.kt)("td",{parentName:"tr",align:null},"Lets Stencila run the add-on and insert code blocks inside Google Sheets (Currently in beta)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Connect to an external service"),(0,o.kt)("td",{parentName:"tr",align:null},"Allows you to sign in to Stencila, load project details, and run code elements from the add-on")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Display and run third-party web content in prompts and sidebars inside Google applications"),(0,o.kt)("td",{parentName:"tr",align:null},"Allows us to display the add-on interface and code editor inside Google Docs and Sheets")))),(0,o.kt)("h2",{id:"opening-the-add-on"},"Opening the add-on"),(0,o.kt)("p",null,"Once installed, you can find the add-on in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Add-ons")," menu bar."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1646307/106334554-eb582a80-6258-11eb-9027-71239e16151f.png",alt:"Open Add-on"})))}u.isMDXComponent=!0}}]);