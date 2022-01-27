"use strict";(self.webpackChunk_stencila_help=self.webpackChunk_stencila_help||[]).push([[6884],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=n.createContext({}),o=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=o(e.components);return n.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=o(a),d=l,u=h["".concat(m,".").concat(d)]||h[d]||c[d]||r;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var o=2;o<r;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4769:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>m,metadata:()=>o,toc:()=>p,default:()=>h});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=["components"],s={category:"Text",slug:"/schema/TableCell",custom_edit_url:"https://github.com/stencila/schema/edit/master/schema/TableCell.schema.yaml"},m="Table Cell",o={unversionedId:"schema/docs/TableCell",id:"schema/docs/TableCell",title:"Table Cell",description:"**A cell within a Table.",source:"@site/references/schema/docs/TableCell.md",sourceDirName:"schema/docs",slug:"/schema/TableCell",permalink:"/references/schema/TableCell",editUrl:"https://github.com/stencila/schema/edit/master/schema/TableCell.schema.yaml",tags:[],version:"current",frontMatter:{category:"Text",slug:"/schema/TableCell",custom_edit_url:"https://github.com/stencila/schema/edit/master/schema/TableCell.schema.yaml"},sidebar:"sidebar",previous:{title:"Superscript",permalink:"/references/schema/Superscript"},next:{title:"Table Row",permalink:"/references/schema/TableRow"}},p=[{value:"Properties",id:"properties",children:[],level:2},{value:"Notes",id:"notes",children:[],level:2},{value:"Related",id:"related",children:[],level:2},{value:"Available as",id:"available-as",children:[],level:2},{value:"Source",id:"source",children:[],level:2}],c={toc:p};function h(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"table-cell"},"Table Cell"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A cell within a ",(0,r.kt)("inlineCode",{parentName:"strong"},"Table"),".\n")),(0,r.kt)("p",null,"This schema type is marked as ",(0,r.kt)("strong",{parentName:"p"},"unstable")," \u26a0\ufe0f and is subject to change."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"@id")),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Inherited from"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cellType"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://schema.stenci.la/cellType.jsonld"},"stencila:cellType")),(0,r.kt)("td",{parentName:"tr",align:null},"'Data', 'Header'"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether the cell is a header or data. See note ",(0,r.kt)("a",{parentName:"td",href:"#notes"},"1"),"."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/references/schema/TableCell"},"TableCell"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"colspan"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://schema.stenci.la/colspan.jsonld"},"stencila:colspan")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"How many columns the cell extends.  See note ",(0,r.kt)("a",{parentName:"td",href:"#notes"},"2"),"."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/references/schema/TableCell"},"TableCell"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://schema.stenci.la/content.jsonld"},"stencila:content")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of ",(0,r.kt)("a",{parentName:"td",href:"/references/schema/BlockContent"},"BlockContent")," ",(0,r.kt)("em",{parentName:"td"},"or")," Array of ",(0,r.kt)("a",{parentName:"td",href:"/references/schema/InlineContent"},"InlineContent")),(0,r.kt)("td",{parentName:"tr",align:null},"Contents of the table cell."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/references/schema/TableCell"},"TableCell"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://schema.org/id"},"schema:id")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The identifier for this item."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/references/schema/Entity"},"Entity"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"meta"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://schema.stenci.la/meta.jsonld"},"stencila:meta")),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Metadata associated with this item."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/references/schema/Entity"},"Entity"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://schema.org/name"},"schema:name")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the cell. See note ",(0,r.kt)("a",{parentName:"td",href:"#notes"},"3"),"."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/references/schema/TableCell"},"TableCell"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rowspan"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://schema.stenci.la/rowspan.jsonld"},"stencila:rowspan")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"How many columns the cell extends. See note ",(0,r.kt)("a",{parentName:"td",href:"#notes"},"4"),"."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/references/schema/TableCell"},"TableCell"))))),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"cellType")," : When ",(0,r.kt)("inlineCode",{parentName:"li"},"header"),", the cell is similar to the HTML ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th"},(0,r.kt)("inlineCode",{parentName:"a"},"<th>")," element"),"). When ",(0,r.kt)("inlineCode",{parentName:"li"},"data"),", the cell is similar to the HTML ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td"},(0,r.kt)("inlineCode",{parentName:"a"},"<td>")," element"),")."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"colspan")," : Based on the HTML ",(0,r.kt)("inlineCode",{parentName:"li"},"colspan")," attribute for ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td"},"table cells"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"name")," : Cell's have an implicit name derived from their position in the table e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"C4")," for the cell in the third column and fourth row. However this name can be overridden with an explicit name, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"rate"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"rowspan")," : Based on the HTML ",(0,r.kt)("inlineCode",{parentName:"li"},"rowspan")," attribute for ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td"},"table cells"),".")),(0,r.kt)("h2",{id:"related"},"Related"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Parent: ",(0,r.kt)("a",{parentName:"li",href:"/references/schema/Entity"},"Entity")),(0,r.kt)("li",{parentName:"ul"},"Descendants: None")),(0,r.kt)("h2",{id:"available-as"},"Available as"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://schema.stenci.la/TableCell.jsonld"},"JSON-LD")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://schema.stenci.la/v1/TableCell.schema.json"},"JSON Schema")),(0,r.kt)("li",{parentName:"ul"},"Python ",(0,r.kt)("a",{parentName:"li",href:"https://stencila.github.io/schema/python/docs/types.html#schema.types.TableCell"},(0,r.kt)("inlineCode",{parentName:"a"},"class TableCell"))),(0,r.kt)("li",{parentName:"ul"},"TypeScript ",(0,r.kt)("a",{parentName:"li",href:"https://stencila.github.io/schema/ts/docs/interfaces/tablecell.html"},(0,r.kt)("inlineCode",{parentName:"a"},"interface TableCell"))),(0,r.kt)("li",{parentName:"ul"},"R ",(0,r.kt)("a",{parentName:"li",href:"https://cran.r-project.org/web/packages/stencilaschema/stencilaschema.pdf"},(0,r.kt)("inlineCode",{parentName:"a"},"class TableCell"))),(0,r.kt)("li",{parentName:"ul"},"Rust ",(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/stencila-schema/latest/stencila_schema/struct.TableCell.html"},(0,r.kt)("inlineCode",{parentName:"a"},"struct TableCell")))),(0,r.kt)("h2",{id:"source"},"Source"),(0,r.kt)("p",null,"This documentation was generated from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stencila/schema/blob/master/schema/TableCell.schema.yaml"},"TableCell.schema.yaml"),"."))}h.isMDXComponent=!0}}]);