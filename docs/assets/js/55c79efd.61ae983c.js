"use strict";(self.webpackChunk_buidlerlabs_hashgraph_venin_docs=self.webpackChunk_buidlerlabs_hashgraph_venin_docs||[]).push([[250],{45:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=i(7462),a=i(3366),o=(i(7294),i(3905)),s=(i(1839),["components"]),r={id:"topic",title:"Topic"},p=void 0,c={unversionedId:"markdown/guides/entities/topic",id:"markdown/guides/entities/topic",title:"Topic",description:"Topics (through the Hedera Consensus Service - HCS) are the backbone of Hedera's traffic accounting, at the time of this writing, for more then 85% of the network's traffic. This makes them the hottest services used on the network. Naturally, Venin supports them with more features planned for the upcoming future.",source:"@site/src.docs/markdown/guides/entities/topic.md",sourceDirName:"markdown/guides/entities",slug:"/markdown/guides/entities/topic",permalink:"/markdown/guides/entities/topic",draft:!1,editUrl:"https://github.com/buidler-labs/hashgraph-venin-docs/edit/main/src.docs/markdown/guides/entities/topic.md",tags:[],version:"current",lastUpdatedBy:"Victor Holotescu",lastUpdatedAt:1669214508,formattedLastUpdatedAt:"Nov 23, 2022",frontMatter:{id:"topic",title:"Topic"},sidebar:"docs",previous:{title:"Token",permalink:"/markdown/guides/entities/token"},next:{title:"Changelog",permalink:"/markdown/changelog"}},l={},d=[{value:"Creating a Topic",id:"creating-a-topic",level:3},{value:"Retrieving a Topic",id:"retrieving-a-topic",level:3},{value:"LiveTopic operations",id:"livetopic-operations",level:3},{value:"Deleting a Topic",id:"deleting-a-topic",level:4},{value:"Updating a Topic",id:"updating-a-topic",level:4}],u={toc:d};function h(e){var t=e.components,i=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Topics (through the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.hedera.com/guides/docs/sdks/consensus"},"Hedera Consensus Service - HCS"),") are the backbone of Hedera's traffic accounting, at the time of this writing, for ",(0,o.kt)("a",{parentName:"p",href:"https://app.dragonglass.me/chart?name=txn-service-type&period=1D"},"more then 85% of the network's traffic"),". This makes them the hottest services used on the network. Naturally, Venin supports them with more features planned for the upcoming future."),(0,o.kt)("h3",{id:"creating-a-topic"},"Creating a Topic"),(0,o.kt)("p",null,"To create a ",(0,o.kt)("inlineCode",{parentName:"p"},"LiveTopic")," to which you can post messages, you have a couple of constructor arguments to choose from:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export type TopicFeatures = {\n  autoRenewAccountId?: string | AccountId;\n  autoRenewPeriod?: number | Long.Long | Duration;\n  memo?: string;\n  keys?: TopicKeys;\n};\n\ntype TopicKeys = {\n  admin?: Key;\n  submit?: Key;\n};\n")),(0,o.kt)("p",null,"None of them are mandatory."),(0,o.kt)("p",null,"Once set, you ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," it as you would do with any ",(0,o.kt)("inlineCode",{parentName:"p"},"CreatableEntity")," and here is an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"live=true containerKey=create_a_topic",live:"true",containerKey:"create_a_topic"},"const { session } = await ApiSession.default();\nconst liveTopic = await session.create(new Topic());\n\nlog(`Topic is available at ${liveTopic.id}`);\n")),(0,o.kt)("h3",{id:"retrieving-a-topic"},"Retrieving a Topic"),(0,o.kt)("p",null,"Is not currently possible but will be once ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/buidler-labs/hashgraph-venin-js/issues/60"},"issue #60 gets resolved"),"."),(0,o.kt)("h3",{id:"livetopic-operations"},"LiveTopic operations"),(0,o.kt)("p",null,"Currently, ",(0,o.kt)("inlineCode",{parentName:"p"},"LiveTopic"),"s support sending messages via their ",(0,o.kt)("inlineCode",{parentName:"p"},"LiveTopic.submitMessage(message)")," method. ",(0,o.kt)("inlineCode",{parentName:"p"},"message")," can be either a ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," or a ",(0,o.kt)("inlineCode",{parentName:"p"},"Uint8Array"),". Subscribing to messages will be possible following the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/buidler-labs/hashgraph-venin-js/issues/47"},"resolving of issue #47"),"."),(0,o.kt)("h4",{id:"deleting-a-topic"},"Deleting a Topic"),(0,o.kt)("p",null,"To delete a ",(0,o.kt)("inlineCode",{parentName:"p"},"LiveTopic")," just call its ",(0,o.kt)("inlineCode",{parentName:"p"},"LiveTopic.deleteEntity()"),". This will succeeds if the account owning the wallet configured in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ApiSession")," has the rights to do so."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Once deleted, certain operations such as the ",(0,o.kt)("inlineCode",{parentName:"p"},"submitMessage")," one and, in general, all network-related actions, are no longer available.")),(0,o.kt)("h4",{id:"updating-a-topic"},"Updating a Topic"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"LiveTopic"),"s can be updated like any other ",(0,o.kt)("inlineCode",{parentName:"p"},"LiveEntity"),": by calling its ",(0,o.kt)("inlineCode",{parentName:"p"},"LiveTopic.updateEntity(TopicFeatures)")," method."))}h.isMDXComponent=!0}}]);