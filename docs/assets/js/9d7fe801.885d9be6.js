"use strict";(self.webpackChunk_buidlerlabs_hashgraph_venin_docs=self.webpackChunk_buidlerlabs_hashgraph_venin_docs||[]).push([[276],{5235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),s=(n(1839),["components"]),r={id:"session",title:"The Session"},l=void 0,c={unversionedId:"markdown/guides/session",id:"markdown/guides/session",title:"The Session",description:"Sessions are the life-blood of the library. Virtually, you can't do anything meaningful (aka on network) without one.",source:"@site/src.docs/markdown/guides/session.md",sourceDirName:"markdown/guides",slug:"/markdown/guides/session",permalink:"/markdown/guides/session",draft:!1,editUrl:"https://github.com/buidler-labs/hashgraph-venin-docs/edit/main/src.docs/markdown/guides/session.md",tags:[],version:"current",lastUpdatedBy:"Victor Holotescu",lastUpdatedAt:1669205446,formattedLastUpdatedAt:"Nov 23, 2022",frontMatter:{id:"session",title:"The Session"},sidebar:"docs",previous:{title:"Wallets",permalink:"/markdown/guides/wallet"},next:{title:"Account",permalink:"/markdown/guides/entities/account"}},d={},p=[{value:"Creating a session",id:"creating-a-session",level:2},{value:"What can it do?",id:"what-can-it-do",level:2},{value:"Subscribing to receipts",id:"subscribing-to-receipts",level:2}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sessions are the life-blood of the library. Virtually, you can't do anything meaningful (aka ",(0,o.kt)("em",{parentName:"p"},"on network"),") without one."),(0,o.kt)("h2",{id:"creating-a-session"},"Creating a session"),(0,o.kt)("p",null,"Head over to the ",(0,o.kt)("a",{parentName:"p",href:"/markdown/configuration#introduction"},"Configuration page")," to find out what are the session creating options available."),(0,o.kt)("h2",{id:"what-can-it-do"},"What can it do?"),(0,o.kt)("p",null,"... a couple of things spread into 2 categories:"),(0,o.kt)("p",null,"Creational operations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"create")," a ",(0,o.kt)("inlineCode",{parentName:"li"},"Token")," or an ",(0,o.kt)("inlineCode",{parentName:"li"},"Account")," via the ",(0,o.kt)("inlineCode",{parentName:"li"},"create(what)")," method with ",(0,o.kt)("inlineCode",{parentName:"li"},"what")," being a ",(0,o.kt)("inlineCode",{parentName:"li"},"CreatableEntity")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"upload")," a ",(0,o.kt)("inlineCode",{parentName:"li"},"Contract")," or a ",(0,o.kt)("inlineCode",{parentName:"li"},"Json")," object via the conveniently named method, ",(0,o.kt)("inlineCode",{parentName:"li"},"upload(what, ...args)"),", with ",(0,o.kt)("inlineCode",{parentName:"li"},"what")," being a ",(0,o.kt)("inlineCode",{parentName:"li"},"UploadableEntity")," in this case. ",(0,o.kt)("inlineCode",{parentName:"li"},"...args")," are any additional info required to tweak the process (such as meta-arguments to control the parameters of the hedera transactions with) and/or any constructor arguments that might be required.")),(0,o.kt)("p",null,"Retrieval operations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getLiveContract({ id, abi = [] })")," - retrieves a ",(0,o.kt)("inlineCode",{parentName:"li"},"LiveContract")," given its id and ABI info"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getLiveJson({ id })")," - retrieves a ",(0,o.kt)("inlineCode",{parentName:"li"},"LiveJson")," object that was previously stored on-graph")),(0,o.kt)("h2",{id:"subscribing-to-receipts"},"Subscribing to receipts"),(0,o.kt)("p",null,"The session also allows to get notified of transaction receipts via the ",(0,o.kt)("inlineCode",{parentName:"p"},"subscribeToReceiptsWith")," method. You pass it a callback, do some contract transactions and wait to get called like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"live=true containerKey=subscribe_to_receipts",live:"true",containerKey:"subscribe_to_receipts"},"const code = `\n// SPDX-License-Identifier: MIT\npragma solidity ^0.8.9;\n\ncontract Counter {\n    uint public count;\n\n    function inc() public { count += 1; }\n}`;\nconst { session } = await ApiSession.default();\nconst contract = await Contract.newFrom({ code });\nconst receiptsSubscription = session.subscribeToReceiptsWith(\n  ({ transaction, receipt }) => {\n    log(\n      `Transaction ${transaction.transactionId} receipt reported finishing with status ${receipt.status}`\n    );\n  }\n);\nconst liveContract = await session.upload(contract);\n\nawait liveContract.inc({ emitReceipt: true });\nreceiptsSubscription.unsubscribe();\n")),(0,o.kt)("p",null,"The above example also shows how you can cancel such a subscription via the ",(0,o.kt)("inlineCode",{parentName:"p"},"Subscription.unsubscribe()")," method."),(0,o.kt)("p",null,"Also, if you were to ",(0,o.kt)("inlineCode",{parentName:"p"},"Run")," the example, you could see multiple transaction receipts being logged. What gives? Well, only the last one is reflecting our ",(0,o.kt)("inlineCode",{parentName:"p"},"liveContract.inc")," operation, the rest are due to the transactions being carried out under the hood for uploading the actual ",(0,o.kt)("inlineCode",{parentName:"p"},"Counter")," contract (both with the file service and with hedera's contract service)."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Emitting receipts by default, across the entire session, for all ",(0,o.kt)("code",null,"LiveContract")," interactions"),(0,o.kt)("p",null,"In the above snippet we saw how one could emit an on-demand receipt (via the live-contract meta-arguments property of ",(0,o.kt)("inlineCode",{parentName:"p"},"emitReceipt")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"liveContract.inc({ emitReceipt: true })"),") per individual contract method calls. That's great for controlling and keeping costs down, but what if we would like to have this behavior as default across the session usage?"),(0,o.kt)("p",null,"To do that, you could either ",(0,o.kt)("a",{parentName:"p",href:"/markdown/configuration#big-table-o-parameters"},"set the ",(0,o.kt)("inlineCode",{parentName:"a"},"HEDERAS_DEFAULT_EMIT_LIVE_CONTRACT_RECEIPTS")," environment option to ",(0,o.kt)("inlineCode",{parentName:"a"},"true"))," or have its runtime counter-part, ",(0,o.kt)("inlineCode",{parentName:"p"},"session.defaults.emitLiveContractReceipts"),", to the same value."),(0,o.kt)("p",null,"The runtime variant will look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"const { session } = await ApiSession.default({\n  session: { defaults: { emitLiveContractReceipts: true } }\n});\n")),(0,o.kt)("p",null,"Following this, you could get rid of the ",(0,o.kt)("inlineCode",{parentName:"p"},"{ emitReceipt: true }")," meta-argument and just end up with a clean and more easily readable, ",(0,o.kt)("inlineCode",{parentName:"p"},"await liveContract.greet()")," call.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Setting ",(0,o.kt)("inlineCode",{parentName:"p"},"emitReceipt")," meta-argument to true on contract functions that do not modify state will not have any effect."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"pure"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"view")," solidity functions resolve to a ",(0,o.kt)("inlineCode",{parentName:"p"},"ContractCallQuery")," that is being executed in Venin, which returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"ContractFunctionResult"),". The result of the contract call does not contain receipts or records as the call runs on a single node.")))}m.isMDXComponent=!0}}]);