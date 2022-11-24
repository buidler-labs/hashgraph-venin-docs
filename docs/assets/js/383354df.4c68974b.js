"use strict";(self.webpackChunk_buidlerlabs_hashgraph_venin_docs=self.webpackChunk_buidlerlabs_hashgraph_venin_docs||[]).push([[731],{1262:(e,n,t)=>{t.d(n,{Z:()=>r});var o=t(7294),a=t(2389);function r(e){var n=e.children,t=e.fallback;return(0,a.Z)()?o.createElement(o.Fragment,null,null==n?void 0:n()):null!=t?t:null}},5183:(e,n,t)=>{t.d(n,{O:()=>s,f:()=>i});var o=t(1262),a=t(7294),r=t(867),i=function(){var e=a.useContext(r.L).bundledWalletInfo;return a.createElement(o.Z,{fallback:a.createElement("code",null,"unknown")},(function(){return e?a.createElement("a",{href:"https://hashscan.io/"+e.network+"/account/"+e.accountId,target:"_blank"},a.createElement("code",null,e.accountId)):a.createElement("code",null,"unknown")}))},s=function(){var e=a.useContext(r.L).bundledWalletInfo;return a.createElement(o.Z,{fallback:a.createElement("code",null,"unknown")},(function(){return a.createElement("code",null,e?e.network:"unknown")}))}},4133:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var o=t(7462),a=t(3366),r=(t(7294),t(3905)),i=(t(1839),t(5183)),s=["components"],l={id:"playground",title:"Playground"},u=void 0,d={unversionedId:"markdown/playground",id:"markdown/playground",title:"Playground",description:"Want to give it a in-browser spin, now you can. Type in your code and press the Run button and you should be set to go.",source:"@site/src.docs/markdown/playground.md",sourceDirName:"markdown",slug:"/markdown/playground",permalink:"/markdown/playground",draft:!1,editUrl:"https://github.com/buidler-labs/hashgraph-venin-docs/edit/main/src.docs/markdown/playground.md",tags:[],version:"current",lastUpdatedBy:"Victor ADASCALITEI",lastUpdatedAt:1665499930,formattedLastUpdatedAt:"Oct 11, 2022",frontMatter:{id:"playground",title:"Playground"},sidebar:"docs",previous:{title:"Configuring",permalink:"/markdown/configuration"},next:{title:"Bundling",permalink:"/markdown/guides/bundling"}},c={},p=[],m={toc:p};function k(e){var n=e.components,t=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Want to give it a in-browser spin, now you can. Type in your code and press the ",(0,r.kt)("inlineCode",{parentName:"p"},"Run")," button and you should be set to go."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"live=true containerKey=live_from_code",live:"true",containerKey:"live_from_code"},'const code = `\n// SPDX-License-Identifier: MIT\npragma solidity ^0.8.9;\n\n// TODO: add your solidity contract code here\n`;\nconst { session } = await ApiSession.default();\nconst contract = await Contract.newFrom({ code });\nconst liveContract = await hapiSession.upload(contract);\n\n// TODO: stuff with your contract or switch to a different entity such as a token or Json ...\n//       log("... something ..."); ?\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"A note on the account paying for these transactions"),(0,r.kt)("p",null,"Please be considerate with the transactions that you run as to also give others the opportunity to play and learn. By default, the session will be operated by ",(0,r.kt)(i.f,{mdxType:"OperatorId"})," on the ",(0,r.kt)(i.O,{mdxType:"OperatorNetwork"})," network. We strive to keep a working balance on it, but if we can't keep up with the usage, you might experience failed transactions due to insufficient funds. If this happens you can also\nuse your own hedera account to pay for them. ",(0,r.kt)("a",{parentName:"p",href:"https://portal.hedera.com/"},"Hedera's Portal")," is the best and easiest way to start out in this scenario."),(0,r.kt)("p",null,"Once available, you can create a session using your account like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'const { session } = await ApiSession.default({\n  wallet: {\n    sdk: {\n      operatorId: <Your operator account id>\n      operatorKey: <Your operator private key>\n    }\n  },\n  network: {\n    name: "testnet" / "previewnet" / "customnet"\n  }\n});\n')),(0,r.kt)("p",null,"To find out more configuration options, head over to our ",(0,r.kt)("a",{parentName:"p",href:"/markdown/configuration"},"configuration page"),".")))}k.isMDXComponent=!0}}]);