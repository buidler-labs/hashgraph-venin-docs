"use strict";(self.webpackChunk_buidlerlabs_hedera_strato_docs=self.webpackChunk_buidlerlabs_hedera_strato_docs||[]).push([[996],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),h=r,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},91262:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(72389);function o(e){var t=e.children,a=e.fallback;return(0,r.Z)()?n.createElement(n.Fragment,null,t()):null!=a?a:null}},58215:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),r=a(67294),o=a(72389),i=a(5979),l=a(86010);const s="tabItem_LplD";function c(e){var t,a,o,c=e.lazy,d=e.block,u=e.defaultValue,p=e.values,h=e.groupId,m=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=p?p:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.lx)(g,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===u?u:null!=(t=null!=u?u:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.UB)(),w=b.tabGroupChoices,y=b.setTabGroupChoices,N=(0,r.useState)(k),T=N[0],j=N[1],C=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var I=w[h];null!=I&&I!==T&&g.some((function(e){return e.value===I}))&&j(I)}var S=function(e){var t=e.currentTarget,a=C.indexOf(t),n=g[a].value;n!==T&&(O(t),j(n),null!=h&&y(h,n))},E=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=C.indexOf(e.currentTarget)+1;a=C[n]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;a=C[r]||C[C.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},m)},g.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return C.push(e)},onKeyDown:E,onFocus:S,onClick:S},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),c?(0,r.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,o.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},25183:(e,t,a)=>{a.d(t,{O:()=>p,f:()=>u});var n=a(15861),r=a(87757),o=a.n(r),i=a(91262),l=a(67294),s=null;function c(){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s||(s=fetch("https://eu2.contabostorage.com/963797152a304f4bb7f75cc0af884bd7:buidler-labs/projects/hedera-strato-js/docs-operator.json").then((function(e){return e.body.getReader().read()})).then((function(e){var t=e.value;return(new TextDecoder).decode(t)})).then((function(e){return JSON.parse(e)}))),e.abrupt("return",s);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var u=function(){var e=l.useState({accountId:"unknown",network:"unknown"}),t=e[0],a=e[1];return l.useEffect((function(){c().then((function(e){return a(e)}))}),[]),l.createElement(i.Z,{fallback:l.createElement("code",null,"unknown")},(function(){return"testnet"===t.network?l.createElement("a",{href:"https://testnet.dragonglass.me/hedera/accounts/"+t.accountId},l.createElement("code",null,t.accountId)):l.createElement("code",null,t.accountId)}))},p=function(){var e=l.useState({accountId:"unknown",network:"unknown"}),t=e[0],a=e[1];return l.useEffect((function(){c().then((function(e){return a(e)}))}),[]),l.createElement(i.Z,{fallback:l.createElement("code",null,"unknown")},(function(){return l.createElement("code",null,t.network)}))}},95995:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>g,frontMatter:()=>d,metadata:()=>p,toc:()=>m});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=a(9877),l=a(58215),s=a(25183),c=["components"],d={slug:"/",id:"introduction",title:"\ud83d\udc4b Welcome to Strato! \ud83c\udf0c"},u=void 0,p={unversionedId:"markdown/introduction",id:"markdown/introduction",title:"\ud83d\udc4b Welcome to Strato! \ud83c\udf0c",description:"NodeJS/JsDOM/Browser tests",source:"@site/docs/markdown/introduction.md",sourceDirName:"markdown",slug:"/",permalink:"/",editUrl:"https://github.com/buidler-labs/hedera-strato-docs/edit/main/docs/docs/markdown/introduction.md",tags:[],version:"current",lastUpdatedBy:"Victor ADASCALITEI",lastUpdatedAt:1650213410,formattedLastUpdatedAt:"4/17/2022",frontMatter:{slug:"/",id:"introduction",title:"\ud83d\udc4b Welcome to Strato! \ud83c\udf0c"},sidebar:"docs",next:{title:"Quick Start",permalink:"/markdown/quick-start"}},h={},m=[{value:"The drive",id:"the-drive",level:2},{value:"The gist",id:"the-gist",level:2},{value:"Give it a spin",id:"give-it-a-spin",level:2},{value:"Features",id:"features",level:2},{value:"... with more planned for development:",id:"-with-more-planned-for-development",level:4},{value:"Contributions",id:"contributions",level:2},{value:"License",id:"license",level:2}],f={toc:m};function g(e){var t=e.components,a=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/github/workflow/status/buidler-labs/hedera-strato-js/test-nodejs-jsdom-browser?style=flat-square&label=tests&color=yellowgreen",alt:"NodeJS/JsDOM/Browser tests"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://codecov.io/gh/buidler-labs/hedera-strato-js"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/codecov/c/github/buidler-labs/hedera-strato-js?style=flat-square",alt:"codecov"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/4mYCre869F"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/949250301792239686?style=flat-square",alt:"Discord support channel"})),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square",alt:"contributions"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/github/license/buidler-labs/hedera-strato-js.svg?colorB=ff0000&style=flat-square",alt:"license"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/Node.js-%3E%3D14.8.0-orange.svg?style=flat-square",alt:"node version"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/npm/v/@buidlerlabs/hedera-strato-js.svg?style=flat-square",alt:"npm version"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://nodei.co/npm/@buidlerlabs/hedera-strato-js/"},(0,o.kt)("img",{parentName:"a",src:"https://nodei.co/npm/@buidlerlabs/hedera-strato-js.png?mini=true",alt:"NPM"})))),(0,o.kt)("p",null,"... because it's time we start writing ",(0,o.kt)("a",{parentName:"p",href:"https://hedera.com/"},"Hedera")," smart-contract dApps",(0,o.kt)("sup",{parentName:"p",id:"fnref-dapp"},(0,o.kt)("a",{parentName:"sup",href:"#fn-dapp",className:"footnote-ref"},"1"))," frictionless and with ease, without having to deal with the hustle and bustle of ",(0,o.kt)("a",{parentName:"p",href:"https://docs.hedera.com/guides/docs/sdks"},"Hedera's verbose, underlying services"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Disclaimer")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This project is not an official Hedera project. It is an independent, community driven, effort to bring clarity and ",(0,o.kt)("em",{parentName:"p"},"joy")," towards developing smart-contract applications on the Hedera network-chain ecosystem."),(0,o.kt)("p",{parentName:"div"},"Having said that, we have been ",(0,o.kt)("a",{parentName:"p",href:"https://hedera.com/blog/meet-strato-a-concise-yet-powerful-sdk-alternative-for-js-devs"},"featured on Hedera's blog")," and, hopefully, will continue to be so as Strato draws closer to a more stable-badge status."))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please keep in mind that, although core features are extensively tested and appear to be working, this is still currently under ",(0,o.kt)("em",{parentName:"p"},"heavy-active")," development and, as such, we don't recommend this just yet for production use. The API is also very likely to change before we reach there! We strive to document all the changes, including braking ones, in ",(0,o.kt)("a",{parentName:"p",href:"/markdown/changelog"},"the appropriate docs section"),"."),(0,o.kt)("p",{parentName:"div"},'We will continue to use it "as is" in production even in this initial stage just because we are really familiar with the library and are quick to solve any issues that we might encounter.'))),(0,o.kt)("h2",{id:"the-drive"},"The drive"),(0,o.kt)("p",null,"As any good-striving, long-lasting, endeavour, we are using Strato to hopefully fuel everything that we, here at ",(0,o.kt)("a",{parentName:"p",href:"https://buidlerlabs.com/"},"Buidler Labs"),", build on Hedera. Our Hedera portfolio currently consists of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/taskbar-team/hedera-filecoin-devgrant"},"FileCoin-Hedera Grant")," - a development grant used to put the foundations of ",(0,o.kt)("a",{parentName:"li",href:"https://mytaskbar.io/"},"MyTaskbar")," v2, the more decentralized version"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://headstarter.org"},"HeadStarter")," - the first Hedera IDO platform")),(0,o.kt)("p",null,"We're basically eating our own dog food. That way, we can hopefully prove that it's something delicious or, if not, we have a good incentive to make it so. This also makes it a good reason to not have it as a \"shot and forget\" kind of effort."),(0,o.kt)("p",null,"We will support this for as long as we're going to build on Hedera and, depending on general community interest, even beyond that."),(0,o.kt)("h2",{id:"the-gist"},"The gist"),(0,o.kt)("p",null,"Suppose you want to upload, execute and print the resulting ",(0,o.kt)("inlineCode",{parentName:"p"},"greet")," message for ",(0,o.kt)("a",{parentName:"p",href:"https://solidity-by-example.org/hello-world/"},"the following contract"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sol",metastring:'title="./hello_world.sol"',title:'"./hello_world.sol"'},'// SPDX-License-Identifier: MIT\n// compiler version must be greater than or equal to 0.8.9 and less than 0.9.0\npragma solidity ^0.8.9;\n\n// highlight-start\ncontract HelloWorld {\n  string public greet = "Hello World!";\n}\n// highlight-end\n')),(0,o.kt)("p",null,"Here's how you would do it in Strato:"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"strato-code",label:"Strato",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"live=true containerKey=greet_from_path",live:"true",containerKey:"greet_from_path"},'const { session } = await ApiSession.default();\nconst helloWorldContract = await Contract.newFrom({\n  path: "./hello_world.sol",\n});\nconst liveContract = await session.upload(helloWorldContract);\n\nconsole.log(await liveContract.greet());\n'))),(0,o.kt)(l.Z,{value:"hedera-code",label:"Hedera",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./hello-hedera.js"',title:'"./hello-hedera.js"'},'import {\n  Client,\n  PrivateKey,\n  ContractCreateTransaction,\n  FileCreateTransaction,\n  ContractDeleteTransaction,\n  ContractCallQuery,\n  Hbar,\n  AccountId,\n} from "@hashgraph/sdk";\nimport helloWorld from "./hello_world.json";\n\n// highlight-start\nconst client = Client.forName(process.env.HEDERA_NETWORK).setOperator(\n  AccountId.fromString(process.env.OPERATOR_ID),\n  PrivateKey.fromString(process.env.OPERATOR_KEY)\n);\nconst contractByteCode = helloWorld.object;\nconst fileTransactionResponse = await new FileCreateTransaction()\n  .setKeys([client.operatorPublicKey])\n  .setContents(contractByteCode)\n  .execute(client);\nconst fileReceipt = await fileTransactionResponse.getReceipt(client);\nconst fileId = fileReceipt.fileId;\nconst contractTransactionResponse = await new ContractCreateTransaction()\n  .setGas(75000)\n  .setBytecodeFileId(fileId)\n  .execute(client);\nconst contractReceipt = await contractTransactionResponse.getReceipt(client);\nconst contractId = contractReceipt.contractId;\nconst contractCallResult = await new ContractCallQuery()\n  .setGas(75000)\n  .setContractId(contractId)\n  .setFunction("greet")\n  .setQueryPayment(new Hbar(1))\n  .execute(client);\nconst greet = contractCallResult.getString(0);\n// highlight-end\n\nconsole.log(greet);\n')))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},'(click on the "Hedera" tab to find out what would be the equivalent of this snippet written solely using the ',(0,o.kt)("a",{parentName:"em",href:"https://github.com/hashgraph/hedera-sdk-js"},"official Hedera SDK JS library"),")")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Oh, by the way, if you haven't done it already, click ",(0,o.kt)("code",null,"Run")," on the ",(0,o.kt)("code",null,"Strato")," tab. See what happens."),(0,o.kt)("p",null,"It should run the code targeting the ",(0,o.kt)(s.f,{mdxType:"OperatorId"})," account id on the ",(0,o.kt)(s.O,{mdxType:"OperatorNetwork"})," network. We strive to keep a working balance on it, but if we can't keep up with the usage, you can also\nuse your own hedera account instead. ",(0,o.kt)("a",{parentName:"p",href:"https://portal.hedera.com/"},"Hedera's Portal")," is the best and easiest way to start in this sense."),(0,o.kt)("p",null,"Once ready, just edit the above code to use it in your own session like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"const { session } = await ApiSession.default({\n  wallet: {\n    sdk: {\n      operatorId: <Your operator account id>\n      operatorKey: <Your operator private key>\n    }\n  },\n  network: {\n    name: testnet / previewnet / customnet\n  }\n});\n")),(0,o.kt)("p",null,"Head over to our ",(0,o.kt)("a",{parentName:"p",href:"/markdown/configuration"},"configuration page")," for more info on other available options.")),(0,o.kt)("p",null,"In both cases, we've left out the error handling part for brevity. Besides that, the Hedera code assumes that the developer has precompiled the contract and that its bytecode is provided to it via the ",(0,o.kt)("inlineCode",{parentName:"p"},"./hello_world.json")," file. Strato does not enforce such an assumption. It takes care of the underlying compilation so that the developer does not have to."),(0,o.kt)("p",null,"Speaking of that, here's a more self-contained code snippet version that basically does the same thing, but gives even more in-browser control to play around with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"live=true containerKey=greet_from_code",live:"true",containerKey:"greet_from_code"},'const code = `\n// SPDX-License-Identifier: MIT\npragma solidity ^0.8.9;\n\ncontract HelloWorld {\n  string public greet = "Hello World!";\n}`;\nconst { session } = await ApiSession.default();\nconst helloWorldContract = await Contract.newFrom({ code });\nconst liveContract = await session.upload(helloWorldContract);\n\nconsole.log(await liveContract.greet());\n')),(0,o.kt)("p",null,"... you get the idea. ",(0,o.kt)("strong",{parentName:"p"},"It's that simple!")),(0,o.kt)("h2",{id:"give-it-a-spin"},"Give it a spin"),(0,o.kt)("p",null,"If you want to quickly get your hands dirty, we prepared a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/buidler-labs/hsj-example"},"quick-start demo repo")," for you to play with. You'll first need to setup an ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file, but don't worry, there are a few mandatory entries and everything is explained in ",(0,o.kt)("a",{parentName:"p",href:"/markdown/configuration"},"configuration section"),"."),(0,o.kt)("p",null,"You can also start from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/buidler-labs/hedera-strato-js/blob/main/.env.sample"},"the ",(0,o.kt)("inlineCode",{parentName:"a"},".env.sample")," file")," which is meant to be a minimal-config template. This also means that not all the config options are directly available there so you might as well cross-reference them with the ",(0,o.kt)("a",{parentName:"p",href:"/markdown/configuration"},"online config values"),"."),(0,o.kt)("p",null,"Another option would be to just code in-browser using our ",(0,o.kt)("a",{parentName:"p",href:"/markdown/playground"},"playground"),"."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("p",null,"Strato already is packed with a lot of stuff:",(0,o.kt)("br",{parentName:"p"}),"\n","\u2714\ufe0f Compile a Solidity contract to obtain its Hedera accepted ABI directly from within the library (no external compiler required)",(0,o.kt)("br",{parentName:"p"}),"\n","\u2714\ufe0f Deploy a contract to the network",(0,o.kt)("br",{parentName:"p"}),"\n","\u2714\ufe0f Use a fluent API to interact with deployed, ",(0,o.kt)("em",{parentName:"p"},"live entities")," such as contracts",(0,o.kt)("br",{parentName:"p"}),"\n","\u2714\ufe0f Pubsub for contract emitted events",(0,o.kt)("br",{parentName:"p"}),"\n","\u2714\ufe0f Pubsub for transaction receipts",(0,o.kt)("br",{parentName:"p"}),"\n","\u2714\ufe0f Fine grained cost-control",(0,o.kt)("br",{parentName:"p"}),"\n","\u2714\ufe0f Browser bundle-able via a custom made Rollup plugin (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/buidler-labs/hedera-strato-js/issues/26"},"webpack pending"),")",(0,o.kt)("br",{parentName:"p"}),"\n","\u2714\ufe0f Using Hedera File Storage as a place to store generic files and JSONs",(0,o.kt)("br",{parentName:"p"}),"\n","\u2714\ufe0f Create token via the Hedera Token Service (HTS)",(0,o.kt)("br",{parentName:"p"}),"\n","\u2714\ufe0f Create a Hedera account",(0,o.kt)("br",{parentName:"p"}),"\n","\u2714\ufe0f Ready to be plugged into a web3 wallet (aka ",(0,o.kt)("a",{parentName:"p",href:"https://hips.hedera.com/hip/hip-338"},"HIP-338")," ",(0,o.kt)("a",{parentName:"p",href:"/markdown/guides/wallet"},"supported"),")",(0,o.kt)("br",{parentName:"p"}),"\n","\u2714\ufe0f End to end tested, high coverage (targeting a minimum of 85%) sourcing multiple contracts for the test-base from places such as ",(0,o.kt)("a",{parentName:"p",href:"https://solidity-by-example.org/"},"solidity-by-example")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hashgraph/hedera-sdk-js/tree/main/examples"},"hedera-sdk-js repo")),(0,o.kt)("h4",{id:"-with-more-planned-for-development"},"... with more planned for development:"),(0,o.kt)("p",null,"\ud83d\udd32 Better integration of ",(0,o.kt)("em",{parentName:"p"},"entities")," across the code-base",(0,o.kt)("br",{parentName:"p"}),"\n","\ud83d\udd32 Pubsub mechanics for Hedera's Consensus Service",(0,o.kt)("br",{parentName:"p"}),"\n","\ud83d\udd32 Other account operations",(0,o.kt)("br",{parentName:"p"}),"\n","\ud83d\udd32 Better error reporting",(0,o.kt)("br",{parentName:"p"}),"\n","\ud83d\udd32 Increase logging support",(0,o.kt)("br",{parentName:"p"}),"\n","... AND more."),(0,o.kt)("h2",{id:"contributions"},"Contributions"),(0,o.kt)("p",null,"Do you think we missed anything? Want some important feature prioritized? Do you have an idea of something that we might improve? Head over to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/buidler-labs/hedera-strato-js/issues"},"our issues page")," and let us know! We want Strato to be a community-lead initiative. This means that any opinion or critic is encouraged (and even welcomed)!"),(0,o.kt)("p",null,"Of course, if you're eager to write it yourself, that's also fine and dandy! Just fork us, add your changes and open a pull request. We'll take it from there ..."),(0,o.kt)("p",null,"Oh! And if you ever feel like talking to us, you can ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/4mYCre869F"},"reach us on discord"),". We're \xfcber friendly! \ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66"),(0,o.kt)("h2",{id:"license"},"License"),(0,o.kt)("p",null,"This work has been published under the ",(0,o.kt)("inlineCode",{parentName:"p"},"MIT License"),"."),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-dapp"},"decentralized application",(0,o.kt)("a",{parentName:"li",href:"#fnref-dapp",className:"footnote-backref"},"\u21a9")))))}g.isMDXComponent=!0}}]);