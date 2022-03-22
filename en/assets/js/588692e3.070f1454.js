"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[118],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),m=p(n),h=i,k=m["".concat(s,".").concat(h)]||m[h]||c[h]||a;return n?r.createElement(k,l(l({ref:t},o),{},{components:n})):r.createElement(k,l({ref:t},o))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:i,l[1]=d;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1661:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return o},default:function(){return m}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],d={},s="Class: Miner",p={unversionedId:"typescript/api/classes/Miner",id:"typescript/api/classes/Miner",title:"Class: Miner",description:"The miner API allows you to remote control the node\u2019s mining operation and set various mining specific settings",source:"@site/docs/typescript/api/classes/Miner.md",sourceDirName:"typescript/api/classes",slug:"/typescript/api/classes/Miner",permalink:"/en/docs/typescript/api/classes/Miner",editUrl:"https://github.com/etherdata-blockchain/etherdata-sdk/docs/docs/typescript/api/classes/Miner.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Class: Json\\_rpc\\_methods",permalink:"/en/docs/typescript/api/classes/Json_rpc_methods"},next:{title:"Class: Personal",permalink:"/en/docs/typescript/api/classes/Personal"}},o=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"baseURL",id:"baseurl",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"port",id:"port",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"url",id:"url",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"Getdashrate",id:"getdashrate",children:[{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"setEtherbase",id:"setetherbase",children:[{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3},{value:"setExtra",id:"setextra",children:[{value:"Returns",id:"returns-2",children:[],level:4},{value:"Defined in",id:"defined-in-6",children:[],level:4}],level:3},{value:"setGasPrice",id:"setgasprice",children:[{value:"Parameters",id:"parameters-2",children:[],level:4},{value:"Returns",id:"returns-3",children:[],level:4},{value:"Defined in",id:"defined-in-7",children:[],level:4}],level:3},{value:"start",id:"start",children:[{value:"Returns",id:"returns-4",children:[],level:4},{value:"Defined in",id:"defined-in-8",children:[],level:4}],level:3},{value:"stop",id:"stop",children:[{value:"Returns",id:"returns-5",children:[],level:4},{value:"Defined in",id:"defined-in-9",children:[],level:4}],level:3}],level:2}],c={toc:o};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"class-miner"},"Class: Miner"),(0,a.kt)("p",null,"The miner API allows you to remote control the node\u2019s mining operation and set various mining specific settings"),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new Miner"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"baseURL"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"port?"),")"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"baseURL")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"port?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number"))))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/miner.ts#L11"},"miner.ts:11")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"baseurl"},"baseURL"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"baseURL"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/miner.ts#L7"},"miner.ts:7")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"port"},"port"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"port"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/miner.ts#L8"},"miner.ts:8")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"url"},"url"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"url"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/miner.ts#L9"},"miner.ts:9")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"getdashrate"},"Getdashrate"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"Getdashrate"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,a.kt)("p",null,"Get your hashrate in H/s (Hash operations per second)"),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,a.kt)("p",null,"dashRate The hashrate in Hs (Hash operations per second)"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/miner.ts#L20"},"miner.ts:20")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"setetherbase"},"setEtherbase"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"setEtherbase"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"etherbase"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("p",null,"Sets the etherbase, where mining rewards will go"),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"etherbase")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The new etherbase.")))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/miner.ts#L94"},"miner.ts:94")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"setextra"},"setExtra"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"setExtra"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("p",null,"Sets the extra data a miner can include when miner blocks\nThis is capped at 32 bytes"),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/miner.ts#L35"},"miner.ts:35")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"setgasprice"},"setGasPrice"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"setGasPrice"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"price"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("p",null,"Sets the minimal accepted gas price when mining transactions\nAny transactions that are below this limit are excluded from the mining process"),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"price")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The new minimal accepted gas price when mining transactions.")))),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/miner.ts#L51"},"miner.ts:51")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"start"},"start"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"start"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("p",null,"Start the CPU mining process with the given number of threads and generate a new DAG if need be"),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/miner.ts#L65"},"miner.ts:65")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"stop"},"stop"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"stop"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("p",null,"Stop the CPU mining operation"),(0,a.kt)("h4",{id:"returns-5"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/miner.ts#L79"},"miner.ts:79")))}m.isMDXComponent=!0}}]);