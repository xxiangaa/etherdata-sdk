"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[578],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8858:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],i={sidebar_label:"json_rpc",title:"etherdata_sdk.json_rpc.json_rpc"},c=void 0,p={unversionedId:"python/api/etherdata_sdk/json_rpc/json_rpc",id:"python/api/etherdata_sdk/json_rpc/json_rpc",title:"etherdata_sdk.json_rpc.json_rpc",description:"JsonRpc Objects",source:"@site/docs/python/api/etherdata_sdk/json_rpc/json_rpc.md",sourceDirName:"python/api/etherdata_sdk/json_rpc",slug:"/python/api/etherdata_sdk/json_rpc/",permalink:"/en/docs/python/api/etherdata_sdk/json_rpc/",editUrl:"https://github.com/etherdata-blockchain/etherdata-sdk/docs/docs/python/api/etherdata_sdk/json_rpc/json_rpc.md",tags:[],version:"current",frontMatter:{sidebar_label:"json_rpc",title:"etherdata_sdk.json_rpc.json_rpc"},sidebar:"tutorialSidebar",previous:{title:"upload_create",permalink:"/en/docs/python/api/etherdata_sdk/file/upload_create"},next:{title:"admin",permalink:"/en/docs/python/api/etherdata_sdk/json_rpc/admin"}},l=[{value:"JsonRpc Objects",id:"jsonrpc-objects",children:[{value:"h_t_t_p_server",id:"h_t_t_p_server",children:[],level:4},{value:"web_socket_server",id:"web_socket_server",children:[],level:4},{value:"i_p_c_server",id:"i_p_c_server",children:[],level:4}],level:2}],d={toc:l};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"jsonrpc-objects"},"JsonRpc Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class JsonRpc()\n")),(0,a.kt)("p",null,"Getd supports all standard web3 JSON-RPC APIs\nYou can find documentation for these APIs on the  Ethereum Wiki JSON-RPC page"),(0,a.kt)("p",null,"JSON-RPC is provided on multiple transports\nGetd supports JSON-RPC over HTTP, WebSocket and Unix  Domain Sockets\nTransports must be enabled through command-line flags"),(0,a.kt)("p",null,"Ethereum JSON-RPC APIs use a name-space system\nRPC methods are grouped into several categories  depending on their purpose\nAll method names are composed of the namespace, an underscore, and the  actual method name within the namespace\nFor example, the eth_call method resides in the etd  namespace"),(0,a.kt)("p",null,"Access to RPC methods can be enabled on a per-namespace basis\nFind documentation for individual  namespaces in the sidebar"),(0,a.kt)("h4",{id:"h_t_t_p_server"},"h","_","t","_","t","_","p","_","server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def h_t_t_p_server() -> None\n")),(0,a.kt)("p",null,"To enable the HTTP server, use the --http flag\n","'","Getd --http","'","\nBy default, Getd accepts connections from the loopback interface (127\n0\n0\n1)\nThe default  listening port is 8545\nYou can customize address and port using  the --http\nport and --http\naddr flags\n","'","Getd --http --http\nport 3334","'","\nJSON-RPC method namespaces must be whitelisted in order to be available through the HTTP server\nAn RPC error with error code -32602 is generated if you call a namespace that isn\u2019t whitelisted\nThe default whitelist allows access to the \u201cetd\u201d and \u201cshh\u201d namespaces\nTo enable access to  other APIs like account management (\u201cpersonal\u201d) and debugging (\u201cdebug\u201d), they must be  configured via the --http\napi flag\nWe do not recommend enabling such APIs over HTTP,  however, since access to these methods increases the attack surface\n","'","Getd --http --http\napi personal,etd,net,web3","'","\nSince the HTTP server is reachable from any local application, additional protection is built  into the server to prevent misuse of the API from web pages\nIf you want enable access to the  API from a web page, you must configure the server to accept Cross-Origin requests with  the --http\ncorsdomain flag"),(0,a.kt)("p",null,"Example: if you want to use Remix with Getd, allow requests from the remix domain\n","'","Getd --http --http\ncorsdomain https://remix\nethereum\norg","'"," Use --http\ncorsdomain ","'","*","'"," to enable access from any origin"),(0,a.kt)("h4",{id:"web_socket_server"},"web","_","socket","_","server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def web_socket_server() -> None\n")),(0,a.kt)("p",null,"Configuration of the WebSocket endpoint is similar to the HTTP transport\nTo enable WebSocket  access, use --ws flag\nThe default WebSocket port is 8546\nThe --ws\naddr, --ws\nport and --ws\napi flags can be used to customize settings for the  WebSocket server\n","'","Getd --ws --ws\nport 3334 --ws\napi etd,net,web3","'","\nCross-Origin request protection also applies to the WebSocket server\nUse the --ws\norigins flag to allow access to the server from web pages: ","'","Getd --ws --ws\norigins http://myapp\nexample\ncom","'","\nAs with --http\ncorsdomain, using --ws\norigins ","'","*","'"," allows access from any origin"),(0,a.kt)("h4",{id:"i_p_c_server"},"i","_","p","_","c","_","server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def i_p_c_server() -> None\n")),(0,a.kt)("p",null,"JSON-RPC APIs are also provided on a UNIX domain socket\nThis server is enabled by default  and has access to all JSON-RPC namespaces"),(0,a.kt)("p",null,"The listening socket is placed into the data directory by default\nOn Linux and macOS, the  default location of the Getd socket is ~/\nethereum/Getd\nipc\nOn Windows, IPC is provided via named pipes\nThe default location of the Getd pipe is: //\n/pipe/Getd\nipc\nYou can configure the location of the socket using the --ipcpath flag\nIPC can be disabled  using the --ipcdisable flag"))}u.isMDXComponent=!0}}]);