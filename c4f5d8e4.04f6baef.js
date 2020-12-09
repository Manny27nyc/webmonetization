(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{78:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a(3),r=a(0),l=a.n(r),o=a(240),i=a(100),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.siteConfig,t=e.baseUrl,a=function(e){return l.a.createElement("div",{className:"homeContainer"},l.a.createElement("div",{className:"homeSplashFade"},l.a.createElement("div",{className:"wrapper homeWrapper"},e.children)))},n=function(e){return l.a.createElement("img",{src:e.img_src,alt:"Web Monetization Icon",style:{width:"120px"}})},r=function(){return l.a.createElement("div",{className:"projectTitle"},l.a.createElement("h2",null,e.title),l.a.createElement("small",null,e.tagline))};return l.a.createElement(a,null,l.a.createElement(n,{img_src:t+"img/wm-icon-animated.svg"}),l.a.createElement("img",{src:t+"img/grey_wm_logo.svg",className:"bgLogo",alt:""}),l.a.createElement("div",{className:"inner"},l.a.createElement(r,{siteConfig:e})))},t}(l.a.Component),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.config,n=t.language,r=void 0===n?"":n,s=a.baseUrl,m=a.docsUrl,u=m?m+"/":"",d=r?r+"/":"",p=function(e){return""+s+u+d+e},E=function(){return l.a.createElement("div",{className:"splashFooter"},l.a.createElement("div",null,"Web Monetization is being proposed as a W3C standard at\xa0",l.a.createElement("a",{href:"https://discourse.wicg.io/t/proposal-web-monetization-a-new-revenue-model-for-the-web/3785",target:"_blank",rel:"noreferrer noopener"},"the Web Platform Incubator Community Group"),"."))},h=function(e){return l.a.createElement("div",{className:"contentBlock"},l.a.createElement("div",{className:"contentContainer"},e.children))},f=function(){return l.a.createElement(h,null,l.a.createElement("h2",null,"Motivation"),l.a.createElement("p",null,"The ability to transfer money has been a long-standing omission from the web platform. As a result, the web suffers from a flood of advertising and corrupt business models. Web Monetization provides an open, native, efficient, and automatic way to compensate creators, pay for API calls, and support crucial web infrastructure."))},g=function(){return l.a.createElement(h,null,l.a.createElement("h2",null,"Why Now?"),l.a.createElement("p",null,"Until recently, there hasn't been an open, neutral protocol for transferring money. ",l.a.createElement("a",{href:"https://interledger.org",target:"_blank",rel:"noreferrer noopener"},"Interledger")," provides a simple, ledger-agnostic, and currency-agnostic method for the transfer of small quantities of money. This opens up the possibility for streaming money, which makes Web Monetization possible for the first time."))},b=function(e){return l.a.createElement("div",{className:"contentBlock",id:e.id},l.a.createElement("div",{className:"cardBlock"},e.children))},v=function(){return l.a.createElement("div",{className:"card"},l.a.createElement("span",null,"Do you know another provider?\xa0",l.a.createElement("a",{href:"https://github.com/WICG/webmonetization/edit/master/src/pages/index.js",target:"_blank",rel:"noreferrer noopener"},"Make a PR")))},w=function(e){return l.a.createElement("div",{className:"cardContainer"},e.cards.map((function(e){var t=e.name,a=e.image,n=e.link;return l.a.createElement("a",{className:"card",href:n,target:"_blank",rel:"noreferrer noopener",key:t},l.a.createElement("img",{src:s+"img/"+a,alt:t}))})),l.a.createElement(v,null))},y=function(){return l.a.createElement(b,{id:"wallets"},l.a.createElement("h2",null,"Web Monetization Wallets"),l.a.createElement("p",null,"These providers offer ILP-enabled wallets."),l.a.createElement(w,{cards:a.customFields.wallets}))},W=function(){return l.a.createElement(b,{id:"providers"},l.a.createElement("h2",null,"Web Monetization Providers"),l.a.createElement("p",null,"These providers offer Web Monetization services"),l.a.createElement(w,{cards:a.customFields.providers}))},N=function(){return l.a.createElement(b,{id:"browsers"},l.a.createElement("h2",null,"Web Monetization Enabled Browsers"),l.a.createElement("p",null,"These browsers implement Web Monetization natively or via an extension"),l.a.createElement(w,{cards:a.customFields.browsers}))},k=function(){return l.a.createElement(b,{id:"search"},l.a.createElement("h2",null,"Web Monetization Enabled Search Engines"),l.a.createElement("p",null,"These search engines implement Web Monetization features"),l.a.createElement(w,{cards:a.customFields.search}))},z=function(){return l.a.createElement(b,{id:"tools"},l.a.createElement("h2",null,"Web Monetization Tools"),l.a.createElement("p",null,"These tools enable Web Monetization features"),l.a.createElement(w,{cards:a.customFields.tools}))},M=function(){return l.a.createElement(o.a,{padding:["left","right"],className:"resources"},l.a.createElement("h2",null,"Resources"),l.a.createElement("div",{className:"resourceContainer"},l.a.createElement("div",{className:"resource"},l.a.createElement("h3",null,"Documentation"),l.a.createElement("p",null,"Resource on how to add Web Monetization to your site.",l.a.createElement("br",null),l.a.createElement("a",{href:p("docs/getting-started",e.props.language)},"Read docs \u203a"))),l.a.createElement("div",{className:"resource"},l.a.createElement("h3",null,"Explainer"),l.a.createElement("p",null,"The explainer submitted to the W3C.",l.a.createElement("br",null),l.a.createElement("a",{href:p("docs/explainer",e.props.language)},"Read explainer \u203a"))),l.a.createElement("div",{className:"resource"},l.a.createElement("h3",null,"Specification"),l.a.createElement("p",null,"The formal specification.",l.a.createElement("br",null),l.a.createElement("a",{href:p("specification.html",e.props.language),target:"_blank",rel:"noreferrer noopener"},"Read specs \u203a"))),l.a.createElement("div",{className:"resource"},l.a.createElement("h3",null,l.a.createElement("img",{src:"https://awesome.re/badge-flat2.svg",alt:"Awesome",style:{maxWidth:"100%"}})),l.a.createElement("p",null,"An ",l.a.createElement("a",{href:"https://github.com/sindresorhus/awesome#readme"},"awesome")," list of additional Web Monetization resources.",l.a.createElement("br",null),l.a.createElement("a",{href:"https://github.com/thomasbnt/awesome-web-monetization",target:"_blank",rel:"noreferrer noopener"},"View list \u203a")))),l.a.createElement("p",null,"Do you know other developer resources? ",l.a.createElement("a",{href:"https://github.com/WICG/webmonetization",target:"_blank",rel:"noreferrer noopener"},"Make a PR")))};return l.a.createElement(i.a,{permalink:"/",title:a.title,description:a.tagLine},l.a.createElement("div",null,l.a.createElement(c,{siteConfig:a,language:r}),l.a.createElement(E,null),l.a.createElement("div",{className:"mainContainer"},l.a.createElement(f,null),l.a.createElement(g,null),l.a.createElement(y,null),l.a.createElement(W,null),l.a.createElement(N,null),l.a.createElement(k,null),l.a.createElement(z,null),l.a.createElement(M,null))))},t}(l.a.Component)}}]);