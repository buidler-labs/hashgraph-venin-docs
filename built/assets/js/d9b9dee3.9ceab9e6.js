(self.webpackChunk_buidlerlabs_hedera_strato_docs=self.webpackChunk_buidlerlabs_hedera_strato_docs||[]).push([[569],{58215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(67294);function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},9877:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(87462),i=n(67294),r=n(72389),o=n(5979),l=n(86010);const s="tabItem_LplD";function c(e){var t,n,r,c=e.lazy,d=e.block,u=e.defaultValue,p=e.values,m=e.groupId,h=e.className,v=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=p?p:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,o.lx)(k,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===u?u:null!=(t=null!=u?u:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,o.UB)(),w=b.tabGroupChoices,N=b.setTabGroupChoices,y=(0,i.useState)(g),E=y[0],C=y[1],T=[],A=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var _=w[m];null!=_&&_!==E&&k.some((function(e){return e.value===_}))&&C(_)}var S=function(e){var t=e.currentTarget,n=T.indexOf(t),a=k[n].value;a!==E&&(A(t),C(a),null!=m&&N(m,a))},R=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var i=T.indexOf(e.currentTarget)-1;n=T[i]||T[T.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},h)},k.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return T.push(e)},onKeyDown:R,onFocus:S,onClick:S},r,{className:(0,l.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),c?(0,i.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function d(e){var t=(0,r.Z)();return i.createElement(c,(0,a.Z)({key:String(t)},e))}},62910:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>p,toc:()=>h});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=n(9877),l=n(58215),s=n(93456),c=["components"],d={id:"quick-start",title:"Quick Start"},u=void 0,p={unversionedId:"markdown/quick-start",id:"markdown/quick-start",title:"Quick Start",description:"Installing",source:"@site/docs/markdown/quick-start.md",sourceDirName:"markdown",slug:"/markdown/quick-start",permalink:"/markdown/quick-start",editUrl:"https://github.com/buidler-labs/hedera-strato-docs/edit/main/docs/docs/markdown/quick-start.md",tags:[],version:"current",lastUpdatedBy:"Victor ADASCALITEI",lastUpdatedAt:1650213410,formattedLastUpdatedAt:"4/17/2022",frontMatter:{id:"quick-start",title:"Quick Start"},sidebar:"docs",previous:{title:"\ud83d\udc4b Welcome to Strato! \ud83c\udf0c",permalink:"/"},next:{title:"Configuring",permalink:"/markdown/configuration"}},m={},h=[{value:"Installing",id:"installing",level:2},{value:"Hello Strato",id:"hello-strato",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Next up",id:"next-up",level:2}],v={toc:h};function k(e){var t=e.components,n=(0,i.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"installing"},"Installing"),(0,r.kt)("p",null,"Your normal"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @buidlerlabs/hedera-strato-js\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @buidlerlabs/hedera-strato-js\n")))),(0,r.kt)("p",null,"will suffice."),(0,r.kt)("h2",{id:"hello-strato"},"Hello Strato"),(0,r.kt)("p",null,"As we've seen in our introductory page, firing up your first Strato smart-contract example should be straight forward but let's kick it up a notch to make things a little more interesting. Suppose you have a trimmed down version (comments & ",(0,r.kt)("inlineCode",{parentName:"p"},"dec")," method stripped) of ",(0,r.kt)("a",{parentName:"p",href:"https://solidity-by-example.org/first-app/"},"the following contract"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol",metastring:'title="./increment.sol"',title:'"./increment.sol"'},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.9;\n\ncontract Counter {\n  uint public count;\n\n  function get() public view returns (uint) {\n    return count;\n  }\n\n  function inc() public {\n    count += 1;\n  }\n}\n")),(0,r.kt)("p",null,"Instead of having a value that we read from the contract, we have state-mutating methods and a way to query the inner state which is much closer to production scenarios and, therefore, much more useful for our learning journey."),(0,r.kt)("p",null,"Interacting with it via Strato could be as simple as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"live=true containerKey=increment_from_path",live:"true",containerKey:"increment_from_path"},'const { session } = await ApiSession.default();\nconst counterContract = await Contract.newFrom({ path: "./increment.sol" });\nconst liveContract = await session.upload(counterContract);\n\n// Increment then retrieve the counter\nawait liveContract.inc();\nconsole.log(await liveContract.get());\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We need the ",(0,r.kt)("inlineCode",{parentName:"p"},".toNumber")," call since the returned value of calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," method is an ",(0,r.kt)("inlineCode",{parentName:"p"},"uint")," which ",(0,r.kt)("a",{parentName:"p",href:"https://mikemcl.github.io/bignumber.js/"},"maps to a ",(0,r.kt)("inlineCode",{parentName:"a"},"BigNumber"))," and ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log")," does not know how to display such instances."))),(0,r.kt)("p",null,"By convention, when calling ",(0,r.kt)("inlineCode",{parentName:"p"},"Contract.newFrom")," passing it a ",(0,r.kt)("inlineCode",{parentName:"p"},"path"),", Strato expects to find the solidity contract code in the ",(0,r.kt)("inlineCode",{parentName:"p"},"contracts")," folder. This is configurable via the ",(0,r.kt)("inlineCode",{parentName:"p"},"HEDERAS_CONTRACTS_RELATIVE_PATH")," environment variable."),(0,r.kt)("p",null,"If you were to run this code snippet, you would end up with a complaint issued by ",(0,r.kt)("inlineCode",{parentName:"p"},"ApiSession.default")," saying something about a network not available issue. That's because Strato does not know, out of the box, to which network you want to connect."),(0,r.kt)("p",null,"We'll discuss configuration aspects in the upcoming page, but for now, to make this running, just create a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file in your project root directory and have the following values defined:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"HEDERAS_NETWORK=testnet\nHEDERAS_OPERATOR_ID=0.0...\nHEDERAS_OPERATOR_KEY=302e02...\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Further notes on the ",(0,r.kt)("code",null,".env")," config used by the code present in the ",(0,r.kt)("code",null,"Live Editor")," boxes"),"Together with the above mentioned credentials, the following options have been overwritten/defined:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  HEDERAS_DEFAULT_CONTRACT_REQUESTS_RETURN_ONLY_RECEIPTS=false\n  HEDERAS_DEFAULT_PAYMENT_FOR_CONTRACT_QUERY=1000000\n  HEDERAS_LOGGER_LEVEL=debug\n  HEDERAS_LOGGER_ENABLED=true\n")),(0,r.kt)("p",null,"You can head over to ",(0,r.kt)("a",{parentName:"p",href:"/markdown/configuration"},"the config page")," for a detailed explanation of what these (along with other) settings translate to.")),(0,r.kt)("p",null,"Make sure to replace the values as you see fit:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HEDERAS_NETWORK")," : can be either one of the official networks (",(0,r.kt)("inlineCode",{parentName:"li"},"previewnet"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"testnet")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"mainnet"),") or, for a more close-tight experience, ",(0,r.kt)("inlineCode",{parentName:"li"},"customnet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HEDERAS_OPERATOR_ID")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"HEDERAS_OPERATOR_KEY")," are the operator's account id and private key which will pay for the transactions.")),(0,r.kt)("p",null,"If you don't have a pair of operator credentials, you can create a ",(0,r.kt)("inlineCode",{parentName:"p"},"testnet"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"previewnet")," account for free if you register on the ",(0,r.kt)("a",{parentName:"p",href:"https://portal.hedera.com/register"},"Hedera Portal"),"."),(0,r.kt)("p",null,"Having the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file available with the required values is enough to allow for successfully re-running the above example."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If working locally and want to see a bit more console activity of what's happening underneath the hood, you can enable the logger and setup a sensible threshold by also adding to ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," the following values:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"HEDERAS_LOGGER_LEVEL=debug\nHEDERAS_LOGGER_ENABLED=true\n")))),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,"Before we move on, it's worth talking here a bit about Strato's envisioned design:"),(0,r.kt)(s.Mermaid,{config:{},chart:"classDiagram\n  class Account\n  class ApiSession {\n    +LiveEntity<T> upload(what: UploadableEntity<T>)\n    +LiveEntity<T> create(what: CreatableEntity<T>)\n  }\n  class BasicCreatableEntity {\n    +name: string\n  }\n  class BasicUploadableEntity {\n    +nameOfUpload: string\n  }\n  class Contract\n  class CreatableEntity {\n    <<interface>>\n  }\n  class File\n  class Json\n  class LiveAccount\n  class LiveContract\n  class LiveEntity\n  class LiveJson\n  class LiveToken\n  class UploadableEntity {\n    <<interface>>\n  }\n  class SolidityAddressable {\n    <<interface>>\n    getSolidityAddress() string\n  }\n  class Token\n  class Topic\n\n  SolidityAddressable <|.. ApiSession\n  ApiSession -- CreatableEntity\n  ApiSession -- UploadableEntity\n  ApiSession -- LiveEntity\n  CreatableEntity <|-- BasicCreatableEntity\n  BasicCreatableEntity <|-- Account\n  BasicCreatableEntity <|-- Token\n  BasicCreatableEntity <|-- Topic\n  SolidityAddressable <|.. LiveEntity\n  LiveEntity <|-- LiveAccount\n  LiveEntity <|-- LiveContract\n  LiveEntity <|-- LiveFile\n  LiveFile <|-- LiveJson\n  LiveEntity <|-- LiveToken\n  UploadableEntity <|-- BasicUploadableEntity\n  BasicUploadableEntity <|-- Contract\n  BasicUploadableEntity <|-- File\n  BasicUploadableEntity <|-- Json",mdxType:"Mermaid"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This is just a high level overview that helps arguing the library architecture decisions for most of the developer use-cases. It is, by no means, complete. More sophisticated entities such as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/buidler-labs/hedera-strato-js/tree/main/lib/core/wallet"},"the ",(0,r.kt)("inlineCode",{parentName:"a"},"StratoWallet")," interface")," (which helps configure the underlying network layer aiding ",(0,r.kt)("a",{parentName:"p",href:"/markdown/guides/wallet"},"the wallet bridge")," in the process) have been excluded from the diagram."),(0,r.kt)("p",{parentName:"div"},"This has been done both to conserve pixels and due to the fact that those entities are still in development."))),(0,r.kt)("p",null,"Basically, we tried to walk away from the ",(0,r.kt)("em",{parentName:"p"},"builder")," feel given by working with the official Hedera SDK and move towards a more ",(0,r.kt)("em",{parentName:"p"},"mapping")," kind of approach which, hopefully, should be more familiar to how Object Oriented Programing solutions are thought. This means that, instead of having"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"new FileCreateTransaction()\n  .setKeys([client.operatorPublicKey])\n  .setContents(contractByteCode)\n  .execute(client);\n")),(0,r.kt)("p",null,"we tweaked and reversed the execution to have"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"session.upload(contract);\n")),(0,r.kt)("p",null,"which would better approximate the mechanics of"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"instance = session.newInstance(class)\n")),(0,r.kt)("p",null,"with ",(0,r.kt)("inlineCode",{parentName:"p"},"instance")," being the ",(0,r.kt)("inlineCode",{parentName:"p"},"live"),", hedera-deployed, runtime object and ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," being the blueprint of whatever needs to be constructed on the network (eg. ",(0,r.kt)("inlineCode",{parentName:"p"},"Token")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Contract"),")."),(0,r.kt)("p",null,"Having said that, depending on the Hedera targeted service, there are 2 types of entities in the library:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"static entities - which are further down differentiable into ",(0,r.kt)("inlineCode",{parentName:"li"},"CreatableEntity"),"s and ",(0,r.kt)("inlineCode",{parentName:"li"},"UploadableEntity"),"s"),(0,r.kt)("li",{parentName:"ul"},'live entities - which are the "resulting instances" of having the ',(0,r.kt)("em",{parentName:"li"},"static entities")," deployed")),(0,r.kt)("h2",{id:"next-up"},"Next up"),(0,r.kt)("p",null,"Now that we've discussed a bit about installing and running some Strato code as well as the overall design vision of the library, it's high time we have a look at configuring/customizing a runtime ",(0,r.kt)("inlineCode",{parentName:"p"},"ApiSession"),"."))}k.isMDXComponent=!0},11748:(e,t,n)=>{var a={"./locale":89234,"./locale.js":89234};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id=11748}}]);