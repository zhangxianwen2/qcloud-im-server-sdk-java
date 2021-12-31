"use strict";(self.webpackChunkqcloud_im_server_sdk_java=self.webpackChunkqcloud_im_server_sdk_java||[]).push([[482],{5223:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-5d738fbc",path:"/guide/profile.html",title:"资料管理",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"设置资料",slug:"设置资料",children:[]},{level:2,title:"拉取资料",slug:"拉取资料",children:[]}],filePathRelative:"guide/profile.md",git:{updatedTime:1636356679e3,contributors:[{name:"Yang Libin",email:"szuyanglb@outlook.com",commits:2}]}}},2068:(n,s,a)=>{a.r(s),a.d(s,{default:()=>P});var t=a(6252);const p=(0,t._)("h1",{id:"资料管理",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#资料管理","aria-hidden":"true"},"#"),(0,t.Uk)(" 资料管理")],-1),e=(0,t._)("h2",{id:"设置资料",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#设置资料","aria-hidden":"true"},"#"),(0,t.Uk)(" 设置资料")],-1),o=(0,t.Uk)("支持 "),c={href:"https://cloud.tencent.com/document/product/269/1500#.E6.A0.87.E9.85.8D.E8.B5.84.E6.96.99.E5.AD.97.E6.AE.B5",target:"_blank",rel:"noopener noreferrer"},l=(0,t.Uk)("标配资料字段"),u=(0,t.Uk)(" 和 "),i={href:"https://cloud.tencent.com/document/product/269/1500#.E8.87.AA.E5.AE.9A.E4.B9.89.E8.B5.84.E6.96.99.E5.AD.97.E6.AE.B5",target:"_blank",rel:"noopener noreferrer"},r=(0,t.Uk)("自定义资料字段"),k=(0,t.Uk)(" 的设置。"),m=(0,t.uE)('<p>使用示例：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">ProfileItem</span> profileItem <span class="token operator">=</span> <span class="token class-name">ProfileItem</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">tag</span><span class="token punctuation">(</span><span class="token class-name">TagProfile</span><span class="token punctuation">.</span>IM_NICK<span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token string">&quot;MyNickName&quot;</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ProfileItem</span><span class="token punctuation">&gt;</span></span> profiles <span class="token operator">=</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">singletonList</span><span class="token punctuation">(</span>profileItem<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">PortraitSetRequest</span> request <span class="token operator">=</span> <span class="token class-name">PortraitSetRequest</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">fromAccount</span><span class="token punctuation">(</span><span class="token string">&quot;test1&quot;</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">profileItemList</span><span class="token punctuation">(</span>profiles<span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token class-name">PortraitSetResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>profile<span class="token punctuation">.</span><span class="token function">portraitSet</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="拉取资料" tabindex="-1"><a class="header-anchor" href="#拉取资料" aria-hidden="true">#</a> 拉取资料</h2>',3),d=(0,t._)("li",null,"支持拉取好友和非好友的资料字段。",-1),b=(0,t.Uk)("支持拉取 "),f={href:"https://cloud.tencent.com/document/product/269/1500#.E6.A0.87.E9.85.8D.E8.B5.84.E6.96.99.E5.AD.97.E6.AE.B5",target:"_blank",rel:"noopener noreferrer"},g=(0,t.Uk)("标配资料字段"),h=(0,t.Uk)(" 和 "),E={href:"https://cloud.tencent.com/document/product/269/1500#.E8.87.AA.E5.AE.9A.E4.B9.89.E8.B5.84.E6.96.99.E5.AD.97.E6.AE.B5",target:"_blank",rel:"noopener noreferrer"},_=(0,t.Uk)("自定义资料字段"),v=(0,t.Uk)("。"),A=(0,t._)("li",null,"建议每次拉取的用户数不超过 100，避免因回包数据量太大导致回包失败。",-1),q=(0,t._)("li",null,"请确保请求中的所有帐号都已导入即时通信 IM，如果请求中含有未导入即时通信 IM 的帐号，即时通信 IM 后台将会提示错误。",-1),I=(0,t.uE)('<p>使用示例：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> tagList <span class="token operator">=</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">singletonList</span><span class="token punctuation">(</span><span class="token class-name">TagProfile</span><span class="token punctuation">.</span>IM_NICK<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> toAccount <span class="token operator">=</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">singletonList</span><span class="token punctuation">(</span><span class="token string">&quot;test1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">PortraitGetRequest</span> request <span class="token operator">=</span> <span class="token class-name">PortraitGetRequest</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">tagList</span><span class="token punctuation">(</span>tagList<span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">toAccount</span><span class="token punctuation">(</span>toAccount<span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token class-name">PortraitGetResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>profile<span class="token punctuation">.</span><span class="token function">portraitGet</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>',2),L={},P=(0,a(3744).Z)(L,[["render",function(n,s){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,e,(0,t._)("p",null,[o,(0,t._)("a",c,[l,(0,t.Wm)(a)]),u,(0,t._)("a",i,[r,(0,t.Wm)(a)]),k]),m,(0,t._)("ul",null,[d,(0,t._)("li",null,[b,(0,t._)("a",f,[g,(0,t.Wm)(a)]),h,(0,t._)("a",E,[_,(0,t.Wm)(a)]),v]),A,q]),I],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);