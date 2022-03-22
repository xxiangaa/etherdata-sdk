"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[151],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=i(n),h=a,k=p["".concat(c,".").concat(h)]||p[h]||d[h]||s;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var i=2;i<s;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4014:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return p}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),l=["components"],o={sidebar_label:"personal",title:"etherdata_sdk.json_rpc.personal"},c=void 0,i={unversionedId:"python/api/etherdata_sdk/json_rpc/personal",id:"python/api/etherdata_sdk/json_rpc/personal",title:"etherdata_sdk.json_rpc.personal",description:"Tx Objects",source:"@site/docs/python/api/etherdata_sdk/json_rpc/personal.md",sourceDirName:"python/api/etherdata_sdk/json_rpc",slug:"/python/api/etherdata_sdk/json_rpc/personal",permalink:"/docs/python/api/etherdata_sdk/json_rpc/personal",editUrl:"https://github.com/etherdata-blockchain/etherdata-sdk/docs/docs/python/api/etherdata_sdk/json_rpc/personal.md",tags:[],version:"current",frontMatter:{sidebar_label:"personal",title:"etherdata_sdk.json_rpc.personal"},sidebar:"tutorialSidebar",previous:{title:"miner",permalink:"/docs/python/api/etherdata_sdk/json_rpc/miner"},next:{title:"real_time",permalink:"/docs/python/api/etherdata_sdk/json_rpc/real_time"}},u=[{value:"Tx Objects",id:"tx-objects",children:[{value:"from_field",id:"from_field",children:[],level:4},{value:"to",id:"to",children:[],level:4},{value:"value",id:"value",children:[],level:4}],level:2},{value:"Personal Objects",id:"personal-objects",children:[{value:"import_raw_key",id:"import_raw_key",children:[],level:4},{value:"Arguments",id:"arguments",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"list_accounts",id:"list_accounts",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"lock_account",id:"lock_account",children:[],level:4},{value:"new_account",id:"new_account",children:[],level:4},{value:"Arguments",id:"arguments-1",children:[],level:4},{value:"Returns",id:"returns-2",children:[],level:4},{value:"unlock_account",id:"unlock_account",children:[],level:4},{value:"Arguments",id:"arguments-2",children:[],level:4},{value:"Returns",id:"returns-3",children:[],level:4},{value:"send_transaction",id:"send_transaction",children:[],level:4},{value:"Arguments",id:"arguments-3",children:[],level:4},{value:"Returns",id:"returns-4",children:[],level:4},{value:"sign",id:"sign",children:[],level:4},{value:"Arguments",id:"arguments-4",children:[],level:4},{value:"Returns",id:"returns-5",children:[],level:4},{value:"ec_recover",id:"ec_recover",children:[],level:4},{value:"Arguments",id:"arguments-5",children:[],level:4},{value:"Returns",id:"returns-6",children:[],level:4}],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"tx-objects"},"Tx Objects"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"@dataclass_json\n\n@dataclass\nclass Tx()\n")),(0,s.kt)("h4",{id:"from_field"},"from","_","field"),(0,s.kt)("p",null,"The from value"),(0,s.kt)("h4",{id:"to"},"to"),(0,s.kt)("p",null,"The to value"),(0,s.kt)("h4",{id:"value"},"value"),(0,s.kt)("p",null,"The value to be transcated"),(0,s.kt)("h2",{id:"personal-objects"},"Personal Objects"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"class Personal()\n")),(0,s.kt)("p",null,"The personal API manages private keys in the key store"),(0,s.kt)("h4",{id:"import_raw_key"},"import","_","raw","_","key"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def import_raw_key(privete_key: str) -> str\n")),(0,s.kt)("p",null,"Imports the given unencrypted private key (hex string) into the key store, encrypting it with the passphrase\nReturns the address of the new account"),(0,s.kt)("h4",{id:"arguments"},"Arguments"),(0,s.kt)("p",null,"priveteKey: An unencrypted private key (hex string)"),(0,s.kt)("h4",{id:"returns"},"Returns"),(0,s.kt)("p",null,"accountAddress: The address of the new account."),(0,s.kt)("h4",{id:"list_accounts"},"list","_","accounts"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def list_accounts() -> List[str]\n")),(0,s.kt)("p",null,"Returns all the Ethereum account addresses of all keys in the key store"),(0,s.kt)("h4",{id:"returns-1"},"Returns"),(0,s.kt)("p",null,"accountAddress: The list of ethereum account addresses"),(0,s.kt)("h4",{id:"lock_account"},"lock","_","account"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def lock_account() -> None\n")),(0,s.kt)("p",null,"Removes the private key with given address from memory\nThe account can no longer be used to send transactions"),(0,s.kt)("h4",{id:"new_account"},"new","_","account"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def new_account(passphrase: Optional[str]) -> str\n")),(0,s.kt)("p",null,"Generates a new private key and stores it in the key store directory\nThe key file is encrypted with the given passphrase\nReturns the address of the new account"),(0,s.kt)("p",null,"At the Getd console, newAccount will prompt for a passphrase when it is not supplied as the argument"),(0,s.kt)("h4",{id:"arguments-1"},"Arguments"),(0,s.kt)("p",null,"passphrase: The passphrase used to generate a new private key"),(0,s.kt)("h4",{id:"returns-2"},"Returns"),(0,s.kt)("p",null,"priveteKey: The generated priveteKey"),(0,s.kt)("h4",{id:"unlock_account"},"unlock","_","account"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def unlock_account(account_address: str, passphrase: Optional[str],\n                   unlock_duration: Optional[float]) -> bool\n")),(0,s.kt)("p",null,"Decrypts the key with the given address from the key store"),(0,s.kt)("p",null,"Both passphrase and unlock duration are optional when using the JavaScript console\nIf the passphrase is not supplied as an argument, the console will prompt for the passphrase interactively"),(0,s.kt)("p",null,"The unencrypted key will be held in memory until the unlock duration expires\nIf the unlock duration defaults to 300 seconds\nAn explicit duration of zero seconds unlocks the key until Getd exits"),(0,s.kt)("p",null,"The account can be used with etd_sign and etd_sendTransaction while it is unlocked"),(0,s.kt)("h4",{id:"arguments-2"},"Arguments"),(0,s.kt)("p",null,"accountAddress: The account address\npassphrase: The passphrase If you want to type in the passphrase and stil override the default unlock duration, pass null as the passphrase.\nunlockDuration: The unlock duration"),(0,s.kt)("h4",{id:"returns-3"},"Returns"),(0,s.kt)("p",null,"unlockState: Indicating whether is the account unlocked successfully"),(0,s.kt)("h4",{id:"send_transaction"},"send","_","transaction"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def send_transaction(tx: Tx) -> str\n")),(0,s.kt)("p",null,"Validate the given passphrase and submit transaction"),(0,s.kt)("p",null,"The transaction is the same argument as for etd_sendTransaction and contains the from address\nIf the passphrase can be used to decrypt the private key belogging to tx\nfrom the transaction is verified, signed and send onto the network\nThe account is not unlocked globally in the node and cannot be used in other RPC calls"),(0,s.kt)("p",null,"Note, prior to Getd 1\n5, please use personal_signAndSendTransaction as that was the original introductory name and only later renamed to the current final version"),(0,s.kt)("p",null,"Example ","'",">"," var tx = {from","'",":","'"," ",'"',"0x391694e7e0b0cce554cb130d723a9d27458f9298",'"',", to","'",":","'"," ",'"',"0xafa3f8684e54059998bc3a7b0d2b0da075154d66",'"',", value","'",":","'"," web3\ntoWei(1\n23, ",'"',"ether",'"',")} undefined ",'"',">"," personal\nsendTransaction(tx, ",'"',"passphrase",'"',")",'"'," 0x8474441674cdd47b35b875fd1a530b800b51a5264b9975fb21129eeb8c18582f","'"),(0,s.kt)("h4",{id:"arguments-3"},"Arguments"),(0,s.kt)("p",null,"tx: The transaction"),(0,s.kt)("h4",{id:"returns-4"},"Returns"),(0,s.kt)("p",null,"address: The address"),(0,s.kt)("h4",{id:"sign"},"sign"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def sign(a: str, b: str, c: str) -> str\n")),(0,s.kt)("p",null,"The sign method calculates an Ethereum specific signature with ","'"," sign(keccack256(",'"',"\\x19Ethereum Signed Message:\\n",'"'," + len(message) + message)))\n","'","\nBy adding a prefix to the message makes the calculated signature recognisable as an Ethereum specific signature\nThis prevents misuse where a malicious DApp can sign arbitrary data (e\ng\ntransaction) and use the signature to impersonate the victim"),(0,s.kt)("p",null,"See ecRecover to verify the signature"),(0,s.kt)("h4",{id:"arguments-4"},"Arguments"),(0,s.kt)("p",null,"a: abcde\nb: abcde\nc: abcde"),(0,s.kt)("h4",{id:"returns-5"},"Returns"),(0,s.kt)("p",null,"value: abcde"),(0,s.kt)("h4",{id:"ec_recover"},"ec","_","recover"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def ec_recover(a: str, b: str) -> str\n")),(0,s.kt)("p",null,"ecRecover returns the address associated with the private key that was used to calculate the signature in personal_sign"),(0,s.kt)("h4",{id:"arguments-5"},"Arguments"),(0,s.kt)("p",null,"a: abcde\nb: abcde"),(0,s.kt)("h4",{id:"returns-6"},"Returns"),(0,s.kt)("p",null,"address: The address associated with the private key"))}p.isMDXComponent=!0}}]);