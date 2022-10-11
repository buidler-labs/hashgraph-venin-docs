"use strict";(self.webpackChunk_buidlerlabs_hedera_strato_docs=self.webpackChunk_buidlerlabs_hedera_strato_docs||[]).push([[831],{1262:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),i=n(2389);function o(e){var t=e.children,n=e.fallback;return(0,i.Z)()?a.createElement(a.Fragment,null,null==t?void 0:t()):null!=n?n:null}},4745:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>w,default:()=>v,frontMatter:()=>g,metadata:()=>f,toc:()=>y});var a=n(7462),i=n(3366),o=n(7294),r=n(3905),l=n(1839),s=n(1262),c=n(4165),d=n(5861),p=n(867),u={description:"Hedera Strato Documentation",icon:"https://www.hashpack.app/img/logo.svg",name:"hStrato"},m=function(){var e=function(e){if(e){var t=function(){var t=(0,d.Z)((0,c.Z)().mark((function t(){var n;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getAccountBalance();case 2:return n=t.sent,t.abrupt("return",n&&n.hbars);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();window.hedera=e,s(e),t().then((function(e){i(e.toString())}))}},t=o.useContext(p.C).Bridges,n=o.useState(null),a=n[0],i=n[1],r=o.useState(null),l=r[0],s=r[1],m=function(){var n=(0,d.Z)((0,c.Z)().mark((function n(){return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.HashPackWallet.newConnection({networkName:"testnet",debug:!1,appMetadata:u}).then((function(t){e(t)}));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return o.useEffect((function(){t&&t.HashPackWallet.getConnection(!1).then((function(t){null!==t&&e(t)}))}),[t]),o.createElement("center",{style:{margin:"16px"}},l?o.createElement(h,{accountId:l.getAccountId().toString()||"",balance:a,onDisconnect:function(){l.disconnect(),i(null),s(null)}}):o.createElement("button",{className:t?"wallet-connect connect":"wallet-connect loading",enabled:null!=t,onClick:m},t?"CONNECT WALLET":"Loading"))},h=function(e){var t=e.accountId,n=e.balance,a=e.onDisconnect;return o.createElement("div",{className:"connected-stats"},o.createElement("div",{className:"info"},o.createElement("span",{className:"id"},t),o.createElement("span",{className:"balance"},n||"-")),o.createElement("button",{className:"wallet-connect disconnect",onClick:a},"Disconnect"))},k=["components"],g={id:"wallet",title:"Wallets"},w=void 0,f={unversionedId:"markdown/guides/wallet",id:"markdown/guides/wallet",title:"Wallets",description:"HIP-338 compliant",source:"@site/src.docs/markdown/guides/wallet.md",sourceDirName:"markdown/guides",slug:"/markdown/guides/wallet",permalink:"/markdown/guides/wallet",draft:!1,editUrl:"https://github.com/buidler-labs/hedera-strato-docs/edit/main/src.docs/markdown/guides/wallet.md",tags:[],version:"current",lastUpdatedBy:"Victor ADASCALITEI",lastUpdatedAt:1665499930,formattedLastUpdatedAt:"Oct 11, 2022",frontMatter:{id:"wallet",title:"Wallets"},sidebar:"docs",previous:{title:"Bundling",permalink:"/markdown/guides/bundling"},next:{title:"The Session",permalink:"/markdown/guides/session"}},N={},y=[{value:"HIP-338 compliant",id:"hip-338-compliant",level:2},{value:"Under the hood",id:"under-the-hood",level:2},{value:"Configuring",id:"configuring",level:2}],b={toc:y};function v(e){var t=e.components,n=(0,i.Z)(e,k);return(0,r.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"hip-338-compliant"},(0,r.kt)("a",{parentName:"h2",href:"https://hips.hedera.com/hip/hip-338"},"HIP-338")," compliant"),(0,r.kt)("p",null,"We might be the first non-official library to support Hedera's standardized wallet proposal and we're damn proud of it."),(0,r.kt)("p",null,"Want to give it a spin? Make sure you have ",(0,r.kt)("a",{parentName:"p",href:"https://www.hashpack.app/"},"HashPack installed")," and then connect to the docs page by clicking"),(0,r.kt)(s.Z,{fallback:(0,r.kt)("p",null,"Wallet Button"),mdxType:"BrowserOnly"},(function(){return(0,r.kt)(m,{mdxType:"HeadStarterConnectWallet"})})),(0,r.kt)("p",null,"Then get a hold of ",(0,r.kt)("a",{parentName:"p",href:"/markdown/configuration#HEDERAS_WALLET_TYPE"},"a Session that targets a ",(0,r.kt)("inlineCode",{parentName:"a"},"Browser")," wallet")," and use it normally:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},'const { session } = await ApiSession.default({ wallet: { type: "Browser" } });\nconst liveJson = await session.upload(new Json({ theAnswer: 42 }));\n\nlog(`Wallet account id used: ${session.wallet.account.id}`);\nlog(`Json is stored at ${liveJson.id}`);\nlog(`The answer is: ${liveJson.theAnswer}`);\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We need here to intentionally specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"{ wallet: { type: 'Browser' } }")," object argument to ",(0,r.kt)("inlineCode",{parentName:"p"},"ApiSession.default")," otherwise, ",(0,r.kt)("a",{parentName:"p",href:"/markdown/configuration#parameters-resolution"},"fallowing normal parameters resolution"),", the strato bundle would have defaulted to using the implicit ",(0,r.kt)("inlineCode",{parentName:"p"},"Sdk")," wallet type which was configured when bundling for use with these docs. This is actually the case for other live-code edits present on other pages.")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Due to Hedera's pricing model as well as ",(0,r.kt)("inlineCode",{parentName:"p"},"Query")," mechanics and, in general, overall ",(0,r.kt)("inlineCode",{parentName:"p"},"Executable")," support from wallet extensions, only ",(0,r.kt)("inlineCode",{parentName:"p"},"Transaction"),"s are currently supported by our wallet-bridge implementation."),(0,r.kt)("p",{parentName:"admonition"},"This means that only ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet.getAccountBalance()")," is supported and that, consequently, ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet.getAccountInfo()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet.getAccountRecords()")," are not."),(0,r.kt)("p",{parentName:"admonition"},"This also means that contract creation/querying is not currently supported. We plan on mitigating this with a future Strato release by augmenting the data via ",(0,r.kt)("a",{parentName:"p",href:"https://docs.hedera.com/guides/docs/mirror-node-api/rest-api"},"a mirror-node response"),".")),(0,r.kt)("h2",{id:"under-the-hood"},"Under the hood"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This feature is currently in active development. As such, it is very likely that the final API, once the stable release hits the streets, will differ.")),(0,r.kt)("p",null,"Based on the original HIP-338 proposal, we went on and simplified the overall ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet")," interface to a ",(0,r.kt)("inlineCode",{parentName:"p"},"StratoWallet")," which only currently knows 2 operations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"executing ",(0,r.kt)("inlineCode",{parentName:"li"},"Transaction"),"s and ",(0,r.kt)("inlineCode",{parentName:"li"},"Query"),"s"),(0,r.kt)("li",{parentName:"ul"},"getting a ",(0,r.kt)("inlineCode",{parentName:"li"},"TransactionReceipt")," for a ",(0,r.kt)("inlineCode",{parentName:"li"},"TransactionResponse"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"Sign"),"-ing mechanics are still being designed and considered and will probably see the light of day in a future release.")),(0,r.kt)("p",null,"We then extracted away the ",(0,r.kt)("inlineCode",{parentName:"p"},"Signer")," query calls and isolated them into their own ",(0,r.kt)("inlineCode",{parentName:"p"},"SignerInfo")," interface. ",(0,r.kt)("inlineCode",{parentName:"p"},"WalletInfo")," glues everything up nicely and is made available on every session at ",(0,r.kt)("inlineCode",{parentName:"p"},"ApiSession.wallet"),"."),(0,r.kt)(l.G,{chart:" classDiagram\n  direction TB\n\n  WalletInfo o-- SignerInfo\n  WalletInfo <|-- StratoWallet\n\n  class SignerInfo {\n    <<interface>>\n    +getLedgerId() LedgerId\n    +getAccountId() AccountId\n    +getNetwork()\n    +getMirrorNetwork() string[]\n    +getAccountBalance() Promise(AccountBalance)\n    +getAccountInfo() Promise(AccountInfo)\n    +getAccountRecords() Promise(TransactionRecord[])\n  }\n\n  class WalletInfo {\n    <<interface>>\n    +account PublicAccountInfo\n    +signer SignerInfo\n  }\n\n  class StratoWallet {\n    <<interface>>\n    +execute(Transaction|Query) Promise(...)\n    +getReceipt(TransactionResponse) Promise(TransactionReceipt)\n  }",mdxType:"Mermaid"}),(0,r.kt)("h2",{id:"configuring"},"Configuring"),(0,r.kt)("p",null,"As seen above, there are currently 2 types of ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet")," backends:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a, default, ",(0,r.kt)("inlineCode",{parentName:"li"},"Sdk")," one which uses a re-implemented version of Hedera's ",(0,r.kt)("inlineCode",{parentName:"li"},"LocalWallet")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"LocalProvider")," to also work with ",(0,r.kt)("inlineCode",{parentName:"li"},"customnet")," networks"),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"Browser")," one which, when selected, looks at a global ",(0,r.kt)("inlineCode",{parentName:"li"},"window.hedera")," object and uses that as the ",(0,r.kt)("inlineCode",{parentName:"li"},"Wallet")," sync for all transactions of that particular session")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For ",(0,r.kt)("inlineCode",{parentName:"p"},"Browser")," wallets, property names can be changed via the ",(0,r.kt)("inlineCode",{parentName:"p"},"HEDERAS_WALLET_WINDOW_PROPERTY_NAME"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"wallet.window.propName")," config.")),(0,r.kt)("p",null,"The code for the HashPack HIP-338 wallet-bridge used in this page can be ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/buidler-labs/hedera-strato-js/tree/va/hip-338/lib.docs/src/hashconnect"},"found here"),". In the future, this will most likely be contained within the hashconnect codebase for obvious reasons."))}v.isMDXComponent=!0}}]);