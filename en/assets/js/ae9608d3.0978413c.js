"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,k=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(k,s(s({ref:t},c),{},{components:n})):a.createElement(k,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3357:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],o={},l="Class: Txpool",p={unversionedId:"typescript/api/classes/Txpool",id:"typescript/api/classes/Txpool",title:"Class: Txpool",description:"The txpool API gives you access to several non-standard RPC methods to inspect the contents of  the transaction pool containing all the currently pending transactions as well as the ones queued  for future processing",source:"@site/docs/typescript/api/classes/Txpool.md",sourceDirName:"typescript/api/classes",slug:"/typescript/api/classes/Txpool",permalink:"/etherdata-sdk/en/docs/typescript/api/classes/Txpool",editUrl:"https://github.com/etherdata-blockchain/etherdata-sdk/docs/docs/typescript/api/classes/Txpool.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Class: Real\\_time",permalink:"/etherdata-sdk/en/docs/typescript/api/classes/Real_time"}},c=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"baseURL",id:"baseurl",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"port",id:"port",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"url",id:"url",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"content",id:"content",children:[{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"inspect",id:"inspect",children:[{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3},{value:"status",id:"status",children:[{value:"Returns",id:"returns-2",children:[],level:4},{value:"Defined in",id:"defined-in-6",children:[],level:4}],level:3}],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"class-txpool"},"Class: Txpool"),(0,i.kt)("p",null,"The txpool API gives you access to several non-standard RPC methods to inspect the contents of  the transaction pool containing all the currently pending transactions as well as the ones queued  for future processing"),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new Txpool"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"baseURL"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"port?"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"baseURL")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"port?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/txpool.ts#L51"},"txpool.ts:51")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"baseurl"},"baseURL"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"baseURL"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/txpool.ts#L47"},"txpool.ts:47")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"port"},"port"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"port"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/txpool.ts#L48"},"txpool.ts:48")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"url"},"url"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"url"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/txpool.ts#L49"},"txpool.ts:49")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"content"},"content"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"content"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ContentResponseTransactionObject"),">"),(0,i.kt)("p",null,"The content inspection property can be queried to list the exact details of all the transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only"),(0,i.kt)("p",null,"The result is an object with two fields pending and queued\nEach of these fields are associative arrays, in which each entry maps an origin-address to a batch of scheduled transactions\nThese batches themselves are maps associating nonces with actual transactions"),(0,i.kt)("p",null,"Please note, there may be multiple transactions associated with the same account and nonce\nThis can happen if the user broadcast mutliple ones with varying gas allowances (or even complerely different transactions)"),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"ContentResponseTransactionObject"),">"),(0,i.kt)("p",null,"transactionObject The return transaction object"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/txpool.ts#L67"},"txpool.ts:67")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"inspect"},"inspect"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"inspect"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"InspectResponseTransactionObject"),">"),(0,i.kt)("p",null,"The inspect inspection property can be queried to list a textual summary of all the transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only\nThis is a method specifically tailored to developers to quickly see the transactions in the pool and find any potential issues"),(0,i.kt)("p",null,"The result is an object with two fields pending and queued\nEach of these fields are associative arrays, in which each entry maps an origin-address to a batch of scheduled transactions\nThese batches themselves are maps associating nonces with transactions summary strings"),(0,i.kt)("p",null,"Please note, there may be multiple transactions associated with the same account and nonce\nThis can happen if the user broadcast mutliple ones with varying gas allowances (or even complerely different transactions)"),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"InspectResponseTransactionObject"),">"),(0,i.kt)("p",null,"transactionObject the return transcation object"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/txpool.ts#L90"},"txpool.ts:90")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"status"},"status"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"status"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"StatusResponseStatusObject"),">"),(0,i.kt)("p",null,"The status inspection property can be queried for the number of transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only"),(0,i.kt)("p",null,"The result is an object with two fields pending and queued, each of which is a counter representing the number of transactions in that particular state"),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"StatusResponseStatusObject"),">"),(0,i.kt)("p",null,"statusObject An object containing transaction status"),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/etherdata-blockchain/etherdata-sdk/blob/904fd0a/sdk-dist/typescript/lib/txpool.ts#L107"},"txpool.ts:107")))}u.isMDXComponent=!0}}]);