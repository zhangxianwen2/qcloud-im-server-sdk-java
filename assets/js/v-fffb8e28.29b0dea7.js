"use strict";(self.webpackChunkqcloud_im_server_sdk_java=self.webpackChunkqcloud_im_server_sdk_java||[]).push([[807],{9570:(e,r,t)=>{t.r(r),t.d(r,{data:()=>n});const n={key:"v-fffb8e28",path:"/guide/",title:"介绍",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"前提条件",slug:"前提条件",children:[]},{level:2,title:"SDK 环境依赖",slug:"sdk-环境依赖",children:[]},{level:2,title:"SDK 源码",slug:"sdk-源码",children:[]},{level:2,title:"项目贡献者",slug:"项目贡献者",children:[]}],filePathRelative:"guide/README.md",git:{updatedTime:1640934076e3,contributors:[{name:"Yang Libin",email:"szuyanglb@outlook.com",commits:12},{name:"yanglbme",email:"szuyanglb@outlook.com",commits:4},{name:"怡蘅",email:"hongyihengg@gmail.com",commits:2},{name:"yu",email:"502400992@qq.com",commits:1}]}}},2324:(e,r,t)=>{t.r(r),t.d(r,{default:()=>L});var n=t(6252);const l=(0,n._)("h1",{id:"介绍",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),(0,n.Uk)(" 介绍")],-1),a=(0,n.Uk)("本文档基于腾讯云 IM Server SDK Java "),o=(0,n.Uk)(" 编写。"),d=(0,n._)("h2",{id:"前提条件",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#前提条件","aria-hidden":"true"},"#"),(0,n.Uk)(" 前提条件")],-1),i=(0,n.Uk)("已 "),c={href:"https://cloud.tencent.com/document/product/378/17985",target:"_blank",rel:"noopener noreferrer"},s=(0,n.Uk)("注册腾讯云"),u=(0,n.Uk)(" 账号并完成 "),h={href:"https://cloud.tencent.com/document/product/378/3629",target:"_blank",rel:"noopener noreferrer"},_=(0,n.Uk)("实名认证"),k=(0,n.Uk)("。"),m=(0,n.Uk)("已登录 "),p={href:"https://console.cloud.tencent.com/im",target:"_blank",rel:"noopener noreferrer"},g=(0,n.Uk)("即时通信 IM 控制台"),f=(0,n.Uk)(" 并创建了应用。创建完成后，可以拿到 "),v=(0,n._)("code",null,"sdkAppId",-1),U=(0,n.Uk)(" 以及 "),b=(0,n._)("code",null,"key",-1),j=(0,n.Uk)("。"),q=(0,n._)("li",null,[(0,n._)("p",null,[(0,n.Uk)("已创建 App 管理员帐号 "),(0,n._)("code",null,"userId"),(0,n.Uk)("，也即 "),(0,n._)("code",null,"identifier"),(0,n.Uk)("。")]),(0,n._)("img",{src:"https://cdn.jsdelivr.net/gh/doocs/qcloud-im-server-sdk-java@main/docs/assets/create_identifier.png"})],-1),y={class:"custom-container tip"},D=(0,n._)("p",{class:"custom-container-title"},"说明",-1),S=(0,n.Uk)("“App 管理员”是对 App 具有最高管理权限的角色，可调用 "),x={href:"https://cloud.tencent.com/document/product/269/1519?from_cn_redirect=1",target:"_blank",rel:"noopener noreferrer"},A=(0,n.Uk)("REST API 接口"),K=(0,n.Uk)("，进行创建/解散群组、发送全员推送消息等操作。每个应用最多支持配置 10 个管理员。"),W=(0,n._)("h2",{id:"sdk-环境依赖",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#sdk-环境依赖","aria-hidden":"true"},"#"),(0,n.Uk)(" SDK 环境依赖")],-1),I=(0,n._)("ul",null,[(0,n._)("li",null,"Java 8 及以上版本"),(0,n._)("li",null,"Maven")],-1),M=(0,n._)("h2",{id:"sdk-源码",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#sdk-源码","aria-hidden":"true"},"#"),(0,n.Uk)(" SDK 源码")],-1),w=(0,n.Uk)("SDK 源码请参见 "),z={href:"https://github.com/doocs/qcloud-im-server-sdk-java",target:"_blank",rel:"noopener noreferrer"},C=(0,n.Uk)("GitHub"),E=(0,n.Uk)("。"),R=(0,n._)("h2",{id:"项目贡献者",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#项目贡献者","aria-hidden":"true"},"#"),(0,n.Uk)(" 项目贡献者")],-1),H=(0,n._)("p",null,[(0,n._)("a",{href:"https://github.com/doocs/qcloud-im-server-sdk-java/graphs/contributors",target:"_blank"},[(0,n._)("img",{src:"https://cdn.jsdelivr.net/gh/doocs/qcloud-im-server-sdk-java@main/docs/assets/contributors.svg"})])],-1),J={},L=(0,t(3744).Z)(J,[["render",function(e,r){const t=(0,n.up)("Badge"),J=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[l,(0,n._)("p",null,[a,(0,n.Wm)(t,{type:"tip",text:"v0.3.5",vertical:"top"}),o]),d,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("p",null,[i,(0,n._)("a",c,[s,(0,n.Wm)(J)]),u,(0,n._)("a",h,[_,(0,n.Wm)(J)]),k])]),(0,n._)("li",null,[(0,n._)("p",null,[m,(0,n._)("a",p,[g,(0,n.Wm)(J)]),f,v,U,b,j])]),q]),(0,n._)("div",y,[D,(0,n._)("p",null,[S,(0,n._)("a",x,[A,(0,n.Wm)(J)]),K])]),W,I,M,(0,n._)("p",null,[w,(0,n._)("a",z,[C,(0,n.Wm)(J)]),E]),R,H],64)}]])},3744:(e,r)=>{r.Z=(e,r)=>{const t=e.__vccOpts||e;for(const[e,n]of r)t[e]=n;return t}}}]);