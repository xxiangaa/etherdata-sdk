"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[492],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return b}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),d=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=d(r),b=o,h=l["".concat(i,".").concat(b)]||l[b]||u[b]||a;return r?n.createElement(h,s(s({ref:t},p),{},{components:r})):n.createElement(h,s({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=l;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var d=2;d<a;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},1678:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return d},toc:function(){return p},default:function(){return l}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],c={sidebar_label:"etd",title:"etherdata_sdk.json_rpc.etd"},i=void 0,d={unversionedId:"python/api/etherdata_sdk/json_rpc/etd",id:"python/api/etherdata_sdk/json_rpc/etd",title:"etherdata_sdk.json_rpc.etd",description:"Etd Objects",source:"@site/docs/python/api/etherdata_sdk/json_rpc/etd.md",sourceDirName:"python/api/etherdata_sdk/json_rpc",slug:"/python/api/etherdata_sdk/json_rpc/etd",permalink:"/etherdata-sdk/en/docs/python/api/etherdata_sdk/json_rpc/etd",editUrl:"https://github.com/etherdata-blockchain/etherdata-sdk/docs/docs/python/api/etherdata_sdk/json_rpc/etd.md",tags:[],version:"current",frontMatter:{sidebar_label:"etd",title:"etherdata_sdk.json_rpc.etd"},sidebar:"tutorialSidebar",previous:{title:"debug",permalink:"/etherdata-sdk/en/docs/python/api/etherdata_sdk/json_rpc/debug"},next:{title:"json_rpc_methods",permalink:"/etherdata-sdk/en/docs/python/api/etherdata_sdk/json_rpc/json_rpc_methods"}},p=[{value:"Etd Objects",id:"etd-objects",children:[{value:"subscribe",id:"subscribe",children:[],level:4},{value:"unsubscribe",id:"unsubscribe",children:[],level:4}],level:2}],u={toc:p};function l(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"etd-objects"},"Etd Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Etd()\n")),(0,a.kt)("p",null,"Getd provides several extensions to the standard etd JSON-RPC namespace"),(0,a.kt)("h4",{id:"subscribe"},"subscribe"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def subscribe() -> None\n")),(0,a.kt)("p",null,"This method is used for real-time events through subscriptions\nSee the subscription documentation for more information"),(0,a.kt)("h4",{id:"unsubscribe"},"unsubscribe"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def unsubscribe() -> None\n")),(0,a.kt)("p",null,"This method is used for real-time events through subscriptions\nSee the subscription documentation for more information"))}l.isMDXComponent=!0}}]);