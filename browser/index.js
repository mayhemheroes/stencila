!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("thema",[],t):"object"==typeof exports?exports.thema=t():e.thema=t()}(self,(function(){return(()=>{"use strict";var e={7907:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getTheme=t.generateCDNUrl=t.isTheme=t.scriptEntry=t.styleEntry=t.themePath=t.themes=void 0;const s=r(1536);Object.defineProperty(t,"themes",{enumerable:!0,get:function(){return s.themes}});const n=null==="2.24.4"?void 0:"2.24.4".split(".")[0];t.themePath="dist/themes",t.styleEntry="styles.css",t.scriptEntry="index.js",t.isTheme=e=>Object.keys(s.themes).includes(e),t.generateCDNUrl=e=>`https://unpkg.com/@stencila/thema@${null!=n?n:"latest"}/${e}`.replace(/\\/g,"/"),t.getTheme=(e,r=!1)=>{const s=e.trim().toLowerCase();if(!(0,t.isTheme)(s))return;const n=`${t.themePath}/${s}/${t.styleEntry}`,o=`${t.themePath}/${s}/${t.scriptEntry}`,i=e=>r?e.map(t.generateCDNUrl):e;return{styles:i([n]),scripts:i([o])}}},1536:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.themes=void 0,t.themes={bootstrap:"bootstrap",elife:"elife",f1000:"f1000",galleria:"galleria",giga:"giga",latex:"latex",nature:"nature",plos:"plos",rpng:"rpng",skeleton:"skeleton",stencila:"stencila",tufte:"tufte",wilmore:"wilmore"}}},t={};return function r(s){var n=t[s];if(void 0!==n)return n.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,r),o.exports}(7907)})()}));