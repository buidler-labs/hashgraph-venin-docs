"use strict";(self.webpackChunk_buidlerlabs_hashgraph_venin_docs=self.webpackChunk_buidlerlabs_hashgraph_venin_docs||[]).push([[733],{5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),i=n(6010);const o="tabItem_Ymn6";function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,r),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),i=n(7294),o=n(6010),r=n(2389),l=n(7392),s=n(7094),p=n(2466);const d="tabList__CuJ",u="tabItem_LNqP";function c(e){var t,n,r=e.lazy,c=e.block,m=e.defaultValue,h=e.values,k=e.groupId,f=e.className,g=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,l.l)(b,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==v&&!b.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var C=(0,s.U)(),y=C.tabGroupChoices,w=C.setTabGroupChoices,I=(0,i.useState)(v),T=I[0],A=I[1],E=[],_=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var j=y[k];null!=j&&j!==T&&b.some((function(e){return e.value===j}))&&A(j)}var x=function(e){var t=e.currentTarget,n=E.indexOf(t),a=b[n].value;a!==T&&(_(t),A(a),null!=k&&w(k,String(a)))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,i=E.indexOf(e.currentTarget)+1;n=null!=(a=E[i])?a:E[0];break;case"ArrowLeft":var o,r=E.indexOf(e.currentTarget)-1;n=null!=(o=E[r])?o:E[E.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",d)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},f)},b.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return E.push(e)},onKeyDown:S,onFocus:x,onClick:x},r,{className:(0,o.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),r?(0,i.cloneElement)(g.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,r.Z)();return i.createElement(c,(0,a.Z)({key:String(t)},e))}},2013:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>k,frontMatter:()=>p,metadata:()=>u,toc:()=>m});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=n(5488),l=n(5162),s=(n(1839),["components"]),p={id:"bundling",title:"Bundling"},d=void 0,u={unversionedId:"markdown/guides/bundling",id:"markdown/guides/bundling",title:"Bundling",description:"Currently we offer support for bundling venin via rollup with support for other bundlers being scheduled, yet not committed.",source:"@site/src.docs/markdown/guides/bundling.md",sourceDirName:"markdown/guides",slug:"/markdown/guides/bundling",permalink:"/markdown/guides/bundling",draft:!1,editUrl:"https://github.com/buidler-labs/hashgraph-venin-docs/edit/main/src.docs/markdown/guides/bundling.md",tags:[],version:"current",lastUpdatedBy:"Victor Holotescu",lastUpdatedAt:1669214508,formattedLastUpdatedAt:"Nov 23, 2022",frontMatter:{id:"bundling",title:"Bundling"},sidebar:"docs",previous:{title:"Playground",permalink:"/markdown/playground"},next:{title:"Wallets",permalink:"/markdown/guides/wallet"}},c={},m=[{value:"General considerations",id:"general-considerations",level:3},{value:"Rollup",id:"rollup",level:2}],h={toc:m};function k(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Currently we offer support for bundling venin via ",(0,o.kt)("a",{parentName:"p",href:"https://rollupjs.org/"},"rollup")," with support for other bundlers ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/buidler-labs/hashgraph-venin-js/issues/26"},"being scheduled"),", yet not committed."),(0,o.kt)("h3",{id:"general-considerations"},"General considerations"),(0,o.kt)("p",null,"Venin is delivered in both ",(0,o.kt)("inlineCode",{parentName:"p"},"es-module")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"common-js")," formats. The challenge with bundling the library boils down to whether or not you wish to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"SolidityCompiler")," function in-browser. If you wish in-browser compilation, a web-worker is provided which fetches the appropriate solidity-compiler binary before carring out the compilation itself via calling any of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Contract.newFrom"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"Contract.allFrom")," family of functions."),(0,o.kt)("p",null,"Compiling ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," variants of the same ",(0,o.kt)("inlineCode",{parentName:"p"},"Contract.newFrom"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"Contract.allFrom")," family of functions is made possible via a synthetically injected ",(0,o.kt)("inlineCode",{parentName:"p"},"ContractsInFileStorage")," class which is basically a dictionary mapping the path of each solidity file from a given folder (default ",(0,o.kt)("inlineCode",{parentName:"p"},"contracts"),") to its content."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You don't have to manually deal with ",(0,o.kt)("inlineCode",{parentName:"p"},"ContractsInFileStorage")," in code. The bundler ties everything up for you so that, for example, if you have a file ",(0,o.kt)("inlineCode",{parentName:"p"},"a.sol")," in a ",(0,o.kt)("inlineCode",{parentName:"p"},"contracts")," folder situated in the root of your repo, ",(0,o.kt)("inlineCode",{parentName:"p"},"ContractsInFileStorage")," would be generated holding something approximating:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},'export default {\n  "a.sol": <code of a.sol>,\n  ...\n}\n')),(0,o.kt)("p",{parentName:"admonition"},"This will, for instance, allow calling ",(0,o.kt)("inlineCode",{parentName:"p"},'Contract.newFrom({ path: "./a.sol" })'),".")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ContractsInFileStorage")," is not the only class being synthetically generated. ",(0,o.kt)("inlineCode",{parentName:"p"},"ContractRegistry")," is another one which gets injected regardless if in-browser compilation is being used or not. This one is important since it contains contract names to their ABI mappings which is needed for acquiring ",(0,o.kt)("inlineCode",{parentName:"p"},"LiveContract")," instances of already deployed ",(0,o.kt)("inlineCode",{parentName:"p"},"Contract"),"s. I'm talking here about the ",(0,o.kt)("inlineCode",{parentName:"p"},"ApiSession.getLiveContract({ id, abi })")," method call."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For the same ",(0,o.kt)("inlineCode",{parentName:"p"},"a.sol")," file situated in the ",(0,o.kt)("inlineCode",{parentName:"p"},"contracts")," folder described above, if, let's say, it contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," contract and a ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," contract inside, ",(0,o.kt)("inlineCode",{parentName:"p"},"ContractRegistry")," will end up looking something similar to:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},'export default {\n  "A": <ABI code for contract A>,\n  "B": <ABI code for contract B>,\n  ...\n}\n')),(0,o.kt)("p",{parentName:"admonition"},"This allows calling ",(0,o.kt)("inlineCode",{parentName:"p"},"ApiSession.getLiveContract({ id, abi: ContractRegistry.A })")," to get an instance of an already deployed ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," ",(0,o.kt)("inlineCode",{parentName:"p"},"LiveContract")," to interact with."),(0,o.kt)("h3",{parentName:"admonition",id:"what-about-nested-solidity-files"},"What about nested solidity files?"),(0,o.kt)("p",{parentName:"admonition"},"What if you have a ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," contract defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"a.sol")," which is situated in a subfolder 'others",(0,o.kt)("inlineCode",{parentName:"p"},"in"),"contracts",(0,o.kt)("inlineCode",{parentName:"p"},"? So basically, contract "),"A",(0,o.kt)("inlineCode",{parentName:"p"},"is located somewhere at"),"contracts/others/a.sol`. How does this work?"),(0,o.kt)("p",{parentName:"admonition"},"We've got you covered!"),(0,o.kt)("p",{parentName:"admonition"},"In this scenario, ",(0,o.kt)("inlineCode",{parentName:"p"},"ContractRegistry")," will be generated to something approximating:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},'export default {\n  "others/A": <ABI code for contract A>,\n  ...\n}\n')),(0,o.kt)("p",{parentName:"admonition"},"which will allow you to reference its ABI via ",(0,o.kt)("inlineCode",{parentName:"p"},'ContractRegistry["others/A"]'),".")),(0,o.kt)("p",null,"Besides synthetically generated classes, ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env")," also needs to be unpacked and injected to make the bundling possible."),(0,o.kt)("h2",{id:"rollup"},"Rollup"),(0,o.kt)("p",null,"If you're using ",(0,o.kt)("a",{parentName:"p",href:"https://rollupjs.org/"},"rollup")," to bundle your app, we have made available a plugin to take care of all the considerations described above. It's being available at ",(0,o.kt)("inlineCode",{parentName:"p"},"@buidlerlabs/rollup-plugin-hashgraph-venin")," and you can immediately dive into a working demo ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/buidler-labs/hsj-rollup-demo"},"here"),"."),(0,o.kt)("p",null,"If you're going down this path, you will need to first install it through something like"),(0,o.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @buidlerlabs/rollup-plugin-hashgraph-venin\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev @buidlerlabs/rollup-plugin-hashgraph-venin\n")))),(0,o.kt)("p",null,"Importing the ",(0,o.kt)("em",{parentName:"p"},"rollup-plugin")," gives access to a default-exported function that generates a rollup-behaved object."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can find more in-depth docs for our rollup-plugin in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/buidler-labs/hashgraph-venin-rollup"},"its dedicated github page"),". Feel free to scroll around and bash us with any issues you might hit."),(0,o.kt)("p",{parentName:"admonition"},"Following is just a quick summary of them.")),(0,o.kt)("p",null,"Currently, it accepts the following options object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  contracts?: {\n    path?: string,\n    recurse?: boolean,\n  },\n  environment?: NodeJS.ProcessEnv,\n  includeCompiler?: boolean,\n  sourceMap?: boolean,\n}\n")),(0,o.kt)("p",null,"where:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contracts.path")," is the path of the folder holding the contracts to load into ",(0,o.kt)("inlineCode",{parentName:"li"},"ContractRegistry")," and possibly ",(0,o.kt)("inlineCode",{parentName:"li"},"ContractsInFileStorage")," (if ",(0,o.kt)("inlineCode",{parentName:"li"},"includeCompiler")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"). Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"contracts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contracts.recurse")," controls the behavior of navigating the ",(0,o.kt)("inlineCode",{parentName:"li"},"contracts.path")," files. If set to ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),", it uses recursion to load everything from ",(0,o.kt)("inlineCode",{parentName:"li"},"contracts.path"),". ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," only loads the first level of files. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"environment")," is the environment object that gets unpacked and injected in the library. It defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"process.env")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"includeCompiler")," allows for in-browser compilation when set to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," and throws an error when trying to compile if set to ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),". Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sourceMap")," controls source-map generation. ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," generates the source-maps, ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," does not. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"false"))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you're changing ",(0,o.kt)("inlineCode",{parentName:"p"},"contracts.path")," to something non-default, be sure to also change ",(0,o.kt)("a",{parentName:"p",href:"/markdown/configuration"},"the ",(0,o.kt)("inlineCode",{parentName:"a"},"HEDERAS_CONTRACTS_RELATIVE_PATH")," config")," value so that Venin itself knows how to locate and compile your sources and have the synthetically defined classes (eg. ",(0,o.kt)("inlineCode",{parentName:"p"},"ContractRegistry"),") generated.")),(0,o.kt)("p",null,"For further guidance, please see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/buidler-labs/hsj-rollup-demo/blob/main/rollup.config.js"},"demo repo rollup.config.js")," which makes use of this rollup plugin with in-browser compilation turned on."))}k.isMDXComponent=!0}}]);