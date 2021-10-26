(self.webpackChunk_stencila_help=self.webpackChunk_stencila_help||[]).push([[8047],{3905:(e,t,i)=>{"use strict";i.d(t,{Zo:()=>u,kt:()=>d});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(i),d=r,f=h["".concat(s,".").concat(d)]||h[d]||p[d]||a;return i?n.createElement(f,o(o({ref:t},u),{},{components:i})):n.createElement(f,o({ref:t},u))}));function d(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},8702:(e,t,i)=>{"use strict";i.r(t),i.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>u,default:()=>h});var n=i(2122),r=i(9756),a=(i(7294),i(3905)),o=["components"],l={title:"Enriching an eLife article",description:"A user guide for enriching a published eLife article",authors:["Colette Doughty<colette@stenci.la> (https://stenci.la)","Alexander Ketchakmadze<alexander@stenci.la> (https://stenci.la)"]},s=void 0,c={unversionedId:"enriching-an-elife-article",id:"enriching-an-elife-article",isDocsHomePage:!1,title:"Enriching an eLife article",description:"A user guide for enriching a published eLife article",source:"@site/tutorials/enriching-an-elife-article.md",sourceDirName:".",slug:"/enriching-an-elife-article",permalink:"/tutorials/enriching-an-elife-article",editUrl:"https://github.com/stencila/stencila/edit/master/help/tutorials/enriching-an-elife-article.md",tags:[],version:"current",lastUpdatedBy:"Nokome Bentley",lastUpdatedAt:1620269799,formattedLastUpdatedAt:"5/6/2021",frontMatter:{title:"Enriching an eLife article",description:"A user guide for enriching a published eLife article",authors:["Colette Doughty<colette@stenci.la> (https://stenci.la)","Alexander Ketchakmadze<alexander@stenci.la> (https://stenci.la)"]},sidebar:"sidebar",previous:{title:"Tutorials",permalink:"/tutorials/"}},u=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Overview",id:"overview",children:[],level:2},{value:"Getting started",id:"getting-started",children:[],level:2},{value:"Files vs Sources: Pulling in the content of the original article from the eLife website",id:"files-vs-sources-pulling-in-the-content-of-the-original-article-from-the-elife-website",children:[],level:2},{value:"Converting article to another format for editing",id:"converting-article-to-another-format-for-editing",children:[],level:2},{value:"Create an editable manuscript to publish",id:"create-an-editable-manuscript-to-publish",children:[],level:2}],p={toc:u};function h(e){var t=e.components,l=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ud83d\udc4b ",(0,a.kt)("em",{parentName:"p"},"This guide is under active development. Please feel free to contribute using the link at the bottom of the page!")),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Stemming from a longstanding legacy of print, the primary outputs of today\u2019s research publishing workflows are based\naround PDF and plain HTML. These formats strip out much of the underlying richness from research findings that\nincreasingly rely on the use of code and data."),(0,a.kt)("p",null,"Stencila has partnered with eLife, a leading publisher that aims to improve research communication through open science\nand open technology innovation."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://elifesciences.org/assets/patterns/img/patterns/organisms/elife-logo-xs@1x.24c98c55.png",alt:null})),(0,a.kt)("p",null,"The new, open-source, and web-native Executable Research Article (ERA) publication format allows you to embed code and\ndata natively, in a fully reproducible document that is designed to help transparency, collaboration, training, and\nreproducibility."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://elifesciences.org/"},"Learn more about eLife\u2019s ERA initiative.")),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The enrichment process will consist of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using Stencila Hub to fetch the published article XML"),(0,a.kt)("li",{parentName:"ul"},"Using Stencila Hub to convert the article XML back to the format you used to author the article for submission."),(0,a.kt)("li",{parentName:"ul"},"Replacing the static figures in the article with Code Chunks"),(0,a.kt)("li",{parentName:"ul"},"Uploading the enriched article and supporting assets to a Stencila project")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://i.imgur.com/i9EbbmA.png"},(0,a.kt)("img",{parentName:"a",src:"https://i.imgur.com/i9EbbmA.png",alt:null}))),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("p",null,"This guide assumes that you are already signed in to Stencila, and have set up a new project for your eLife article. If\nyou haven't signed up yet, see the ",(0,a.kt)("a",{parentName:"p",href:"../guides/accounts/getting-started"},"creating an account")," and ",(0,a.kt)("a",{parentName:"p",href:"../guides/projects/create-a-project"},"creating a project")," guides to get started."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"There is an interactive version of this guide if you'd rather follow along on the Hub.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hub.stenci.la/projects/?userflow=fede9de4-9bd4-4521-9c8e-6c15345cc157"},"Switch to Interactive Tutorial")),(0,a.kt)("p",null,"This guide uses the following eLife article as an example: Lewis, L. Michelle, et al. ",(0,a.kt)("a",{parentName:"p",href:"https://elifesciences.org/articles/30274"},'"Replication Study:\nTranscriptional amplification in tumor cells with elevated c-Myc." eLife 2018;7:e30274 DOI:\n10.7554/eLife.30274.')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/pqexnWj.png",alt:null})),(0,a.kt)("h2",{id:"files-vs-sources-pulling-in-the-content-of-the-original-article-from-the-elife-website"},"Files vs Sources: Pulling in the content of the original article from the eLife website"),(0,a.kt)("p",null,"An important concept to be aware of is that of linked (file) sources.\nIn addition to uploading files to a project, you can link to sources that are hosted elsewhere, such as public websites and GitHub.\nThese sources remain on the external service, but a versioned copy is downloaded and stored with your project to maintain reproducibility.\nYou can go to the sources tab and update the local copies of your source files by pulling them periodically."),(0,a.kt)("p",null,"For this guide, we will be linking to the published version of the article. This will allow you to save the article in\none of several formats so that you can replace the static tables and figures with reproducible code chunks."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../guides/sources/elife"},"Add an eLife source to your project")),(0,a.kt)("h2",{id:"converting-article-to-another-format-for-editing"},"Converting article to another format for editing"),(0,a.kt)("p",null,"Now that you have a link to the published version of your article, you can decide which format you will use to transform\nit into a reproducible article. See the available formats by clicking the ",(0,a.kt)("strong",{parentName:"p"},"Actions"),' menu, represented by the vertical ellipsis "...".'),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(5468).Z})),(0,a.kt)("p",null,"There are two primary pathways for enriching an article:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Save the article as a Google Doc and use the Stencila plugin for Google Docs to replace static tables and figures with reproducible versions"),(0,a.kt)("li",{parentName:"ol"},"Save the article as a Jupyter Notebook or R Markdown document, download it, and edit it locally. (See further notes below).")),(0,a.kt)("p",null,"Click on your desired format to begin the conversion process.\n",(0,a.kt)("strong",{parentName:"p"},"The conversion process can take some time.")," In the background, Stencila Encoda needs to do several things:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Search the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/elifesciences/elife-article-xml"},"eLife article Github repository")," to get the most recent version number"),(0,a.kt)("li",{parentName:"ol"},"Download the XML of the article from that repository"),(0,a.kt)("li",{parentName:"ol"},"Download images for each of the figures in the article"),(0,a.kt)("li",{parentName:"ol"},"Convert the XML and images to Google Docs format and upload the file to Google.")),(0,a.kt)("p",null,"Don\u2019t worry if the ",(0,a.kt)("strong",{parentName:"p"},"Save")," button spins for some time after you press it. When the conversion is complete, you\u2019ll have\na new entry in the project\u2019s list of files:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(6646).Z})),(0,a.kt)("h2",{id:"create-an-editable-manuscript-to-publish"},"Create an editable manuscript to publish"),(0,a.kt)("p",null,"If you use editable formats such as R Studio or Jupyter Notebooks and you've successsfully converted the article into your chosen format, your next step is to ",(0,a.kt)("a",{parentName:"p",href:"../guides/projects/publish-a-project"},"download the file to your computer"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(2499).Z})),(0,a.kt)("p",null,"The next step is to find the static figures in the article and replace them with Code Chunks. This will make your manuscript executable."),(0,a.kt)("p",null,"Please refer to the help documentation of ",(0,a.kt)("a",{parentName:"p",href:"https://bookdown.org/yihui/rmarkdown/r-code.html"},"R Studio"),", ",(0,a.kt)("a",{parentName:"p",href:"https://jupyter-notebook.readthedocs.io/en/stable/notebook.html"},"Jupyter\nNotebooks"),", or your editor for specific instructions."),(0,a.kt)("p",null,"If you have questions please don't hesitate to reach out to us via the chat widget on our website or emailing us at ",(0,a.kt)("a",{parentName:"p",href:"mailto:hello@stenci.la"},"hello@stenci.la")))}h.isMDXComponent=!0},5468:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});const n=i.p+"assets/images/elife-tutorial-action-447de8a967a846c25be19fd035a96af8.png"},6646:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});const n=i.p+"assets/images/elife-tutorial-converted-44e11d2ecf0cf54fb47f1e1119583515.png"},2499:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});const n=i.p+"assets/images/elife-tutorial-download-c30f9a9c78f9ace54fe5dc39ed9e6c42.png"}}]);