(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var o=n(2),i=n(6),a=(n(0),n(92)),r={id:"start-stop",title:"Start/Stop Monetization",sidebar_label:"Start/stop monetization"},s={unversionedId:"start-stop",id:"start-stop",isDocsHomePage:!1,title:"Start/Stop Monetization",description:"Sometimes you don't want your entire site to be web monetized. The easiest way to partially monetize your site is to just include the Web Monetization meta tag on specific pages. But if you want to turn Web Monetization on and off dynamically, you can do that too!",source:"@site/docs/start-stop.md",slug:"/start-stop",permalink:"/docs/start-stop",editUrl:"https://github.com/WICG/webmonetization/tree/master/docs/start-stop.md",version:"current",sidebar_label:"Start/stop monetization",sidebar:"docs",previous:{title:"Probabilistic Revenue Sharing",permalink:"/docs/probabilistic-rev-sharing"},next:{title:"Receipt Verifier Service",permalink:"/docs/receipt-verifier"}},c=[{value:"Code",id:"code",children:[]},{value:"How does it work?",id:"how-does-it-work",children:[]},{value:"Interactive example",id:"interactive-example",children:[]}],l={rightToc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Sometimes you don't want your entire site to be web monetized. The easiest way to partially monetize your site is to just include the Web Monetization ",Object(a.b)("inlineCode",{parentName:"p"},"meta")," tag on specific pages. But if you want to turn Web Monetization on and off dynamically, you can do that too!"),Object(a.b)("p",null,"This example shows how to turn Web Monetization on and off dynamically in response to a visitor clicking a button."),Object(a.b)("h2",{id:"code"},"Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-html"}),"<head>\n  \x3c!-- the \"content\" should be set to your own payment pointer --\x3e\n  <meta name=\"monetization\" content=\"$wallet.example.com/alice\">\n\n  <script>\n    function showMonetizationState () {\n      document.getElementById('state').innerText = document.monetization.state\n    }\n\n    if (document.monetization) {\n      document.monetization.addEventListener('monetizationstop', showMonetizationState)\n      document.monetization.addEventListener('monetizationpending', showMonetizationState)\n      document.monetization.addEventListener('monetizationstart', showMonetizationState)\n    }\n\n    window.addEventListener('load', () => {\n      if (!document.monetization) {\n        document.getElementById('state').innerText = 'Not enabled in browser'\n      } else {\n        showMonetizationState()\n      }\n\n      const stopButton = document.getElementById('stop-button')\n      const startButton = document.getElementById('start-button')\n      const monetizationTag = document.querySelector('meta[name=\"monetization\"]')\n\n      stopButton.addEventListener('click', () => {\n        monetizationTag.remove()\n\n        stopButton.disabled = true\n        startButton.disabled = false\n      })\n\n      startButton.addEventListener('click', () => {\n        document.head.appendChild(monetizationTag)\n\n        stopButton.disabled = false\n        startButton.disabled = true\n      })\n    })\n  <\/script>\n</head>\n\n<body>\n  <div id=\"loading\">\n    Current Monetization State: <span id=\"state\"></span>\n  </div>\n\n  <button id=\"stop-button\">Stop Monetization</button>\n  <button id=\"start-button\" disabled>Start Monetization</button>\n</body>\n")),Object(a.b)("h2",{id:"how-does-it-work"},"How does it work?"),Object(a.b)("p",null,"To display the current monetization state on the page, we bind the\nthree monetization state events: ",Object(a.b)("inlineCode",{parentName:"p"},"monetizationstop"),", ",Object(a.b)("inlineCode",{parentName:"p"},"monetizationpending"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"monetizationstart"),". Each time one of them fires we display the current monetization state."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"This isn't required to start and stop monetization but it helps visualize it on\nthe example page.")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"function showMonetizationState () {\n  document.getElementById('state').innerText = document.monetization.state\n}\n\nif (document.monetization) {\n  document.monetization.addEventListener('monetizationstop', showMonetizationState)\n  document.monetization.addEventListener('monetizationpending', showMonetizationState)\n  document.monetization.addEventListener('monetizationstart', showMonetizationState)\n}\n")),Object(a.b)("p",null,"When the page loads we set an initial state. If the visitor doesn't have Web Monetization (",Object(a.b)("inlineCode",{parentName:"p"},"document.monetization")," is not defined), we say ",Object(a.b)("em",{parentName:"p"},"Not enabled in browser.")," Otherwise, we display the current monetization state."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"window.addEventListener('load', () => {\n  if (!document.monetization) {\n    document.getElementById('state').innerText = 'Not enabled in browser'\n  } else {\n    showMonetizationState()\n  }\n")),Object(a.b)("p",null,"We need to grab the meta tag's element object in order to add and remove it. The query selector, ",Object(a.b)("inlineCode",{parentName:"p"},'meta[name="monetization"]'),", selects a ",Object(a.b)("inlineCode",{parentName:"p"},"<meta>")," tag with a ",Object(a.b)("inlineCode",{parentName:"p"},"name")," attribute of ",Object(a.b)("inlineCode",{parentName:"p"},"monetization")," (the Web Monetization meta tag)."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const monetizationTag = document.querySelector('meta[name=\"monetization\"]')\n")),Object(a.b)("p",null,"When the ",Object(a.b)("em",{parentName:"p"},"Stop")," button is clicked, we call ",Object(a.b)("inlineCode",{parentName:"p"},"remove()")," on the monetization tag element. Your Web Monetization extension will pick up this change and stop monetization right away."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"stopButton.addEventListener('click', () => {\n  monetizationTag.remove()\n\n  stopButton.disabled = true\n  startButton.disabled = false\n})\n")),Object(a.b)("p",null,"When the ",Object(a.b)("em",{parentName:"p"},"Start")," button is clicked, we append the monetization tag to the\ndocument's head. Your Web Monetization extension will pick up this change and begin initializing Web Monetization."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"startButton.addEventListener('click', () => {\n  document.head.appendChild(monetizationTag)\n\n  stopButton.disabled = false\n  startButton.disabled = true\n})\n")),Object(a.b)("h2",{id:"interactive-example"},"Interactive example"),Object(a.b)("p",null,"This example simulates turning Web Monetization on and off dynamically in response to a visitor clicking a button."),Object(a.b)("p",null,"A web monetized visitor can see the monetization state and control it with the buttons. The state changes to ",Object(a.b)("inlineCode",{parentName:"p"},"stopped")," when ",Object(a.b)("em",{parentName:"p"},"Stop Monetization")," is clicked. When ",Object(a.b)("em",{parentName:"p"},"Start Monetization")," is clicked, the state changes to ",Object(a.b)("inlineCode",{parentName:"p"},"pending"),", then to ",Object(a.b)("inlineCode",{parentName:"p"},"started")," after Web Monetization initializes."),Object(a.b)("p",null,'A non-web monetized visitor will see "Not enabled in browser" as the state, regardless of which button is clicked.'),Object(a.b)("p",null,"The example doesn't require you to have Web Monetization enabled in your browser. No real payments are occurring."),Object(a.b)("p",null,"Click the ",Object(a.b)("strong",{parentName:"p"},"View as Web Monetized/non-Web Monetized visitor")," button to toggle your monetization state."),Object(a.b)("p",null,"If you see the source files instead of the example, click ",Object(a.b)("strong",{parentName:"p"},"View App")," in the bottom right."),Object(a.b)("div",{class:"glitch-embed-wrap",style:{height:"420px",width:"100%"}},Object(a.b)("iframe",{src:"https://glitch.com/embed/#!/embed/wm-start-stop?path=README.md&previewSize=100",title:"wm-start-stop on Glitch",allow:"geolocation; microphone; camera; midi; vr; encrypted-media",style:{height:"100%",width:"100%",border:"0"}})))}d.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var o=n(0),i=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,u=p["".concat(r,".").concat(m)]||p[m]||b[m]||a;return n?i.a.createElement(u,s(s({ref:t},l),{},{components:n})):i.a.createElement(u,s({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);