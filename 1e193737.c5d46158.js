(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{173:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/flow-07353206fa1962c7dd815bc5adc221d0.svg"},61:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n(2),i=n(6),r=(n(0),n(92)),o={id:"explainer",title:"Web Monetization Explainer",sidebar_label:"Web Monetization"},s={unversionedId:"explainer",id:"explainer",isDocsHomePage:!1,title:"Web Monetization Explainer",description:"Web Monetization (WM) is a proposed API standard that allows websites to request",source:"@site/docs/explainer.md",slug:"/explainer",permalink:"/docs/explainer",editUrl:"https://github.com/WICG/webmonetization/tree/master/docs/explainer.md",version:"current",sidebar_label:"Web Monetization",sidebar:"docs",previous:{title:"Receipt Verifier Service",permalink:"/docs/receipt-verifier"},next:{title:"Web Monetization Receivers",permalink:"/docs/receiving"}},l=[{value:"Goals",id:"goals",children:[]},{value:"Non-goals",id:"non-goals",children:[]},{value:"Flow overview",id:"flow-overview",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Sequence diagram",id:"sequence-diagram",children:[]},{value:"Flow",id:"flow",children:[]}]},{value:"Why is a standard required?",id:"why-is-a-standard-required",children:[]},{value:"Design discussion points",id:"design-discussion-points",children:[{value:"Declarative vs imperative API",id:"declarative-vs-imperative-api",children:[]},{value:"Use updated Payment Request and Payment Handler APIs",id:"use-updated-payment-request-and-payment-handler-apis",children:[]},{value:"This sounds a lot like streams...",id:"this-sounds-a-lot-like-streams",children:[]}]},{value:"Concepts",id:"concepts",children:[{value:"Interledger",id:"interledger",children:[]},{value:"Payment pointers",id:"payment-pointers",children:[]}]},{value:"Getting Started",id:"getting-started",children:[{value:"Set up a receiving account",id:"set-up-a-receiving-account",children:[]},{value:"Add &lt;meta&gt; tag to website header",id:"add-meta-tag-to-website-header",children:[]},{value:"Handle payments",id:"handle-payments",children:[]}]},{value:"Browser behavior",id:"browser-behavior",children:[{value:"Auditing / dashboard",id:"auditing--dashboard",children:[]}]},{value:"Web Monetization provider interface",id:"web-monetization-provider-interface",children:[]},{value:"Existing implementations",id:"existing-implementations",children:[{value:"Web Monetization receivers",id:"web-monetization-receivers",children:[]},{value:"Web Monetization providers (senders)",id:"web-monetization-providers-senders",children:[]},{value:"Browsers",id:"browsers",children:[]}]}],b={rightToc:l};function c(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Web Monetization (WM) is a proposed API standard that allows websites to request\na stream of very small payments (e.g. fractions of a cent) from a user."),Object(r.b)("p",null,"The API's framework provides new revenue models for websites and web-based\nservices and is an alternative to subscription services and advertising, all\nwhile preserving the user's privacy."),Object(r.b)("p",null,'In exchange for payments from the user, websites can provide the user with a\n"premium" experience, such as allowing access to exclusive content, removing\nadvertising, or even removing the need to log in to access content or services.'),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#handle-payments"}),"Skip straight to code...")),Object(r.b)("h2",{id:"goals"},"Goals"),Object(r.b)("h4",{id:"payment"},"Payment"),Object(r.b)("p",null,"Provide websites with a way to collect multiple small payments from users in\nexchange for consuming the site's content and/or services."),Object(r.b)("h4",{id:"frictionless-user-experience"},"Frictionless user experience"),Object(r.b)("p",null,"Allow users to pre-approve payments in aggregate or delegate the authorization\nof individual small payments to a component/service (a Web Monetization\nagent) that makes decisions about when and how much to pay websites without\nthe need for user interaction."),Object(r.b)("h4",{id:"user-privacy"},"User privacy"),Object(r.b)("p",null,"This system must preserve the user's privacy. It must not be possible for\nwebsites to track users on the basis of the payments they make, and it must not\nbe possible for the user's Web Monetization provider to get details of a\nuser's browsing history."),Object(r.b)("h2",{id:"non-goals"},"Non-goals"),Object(r.b)("h4",{id:"online-purchases"},"Online purchases"),Object(r.b)("p",null,"Web Monetization is intended to enable very small payments. This distinction is\nimportant because very small payments can be performed with different levels of\nuser consent, unlike larger payments, such as those used in traditional\ne-commerce."),Object(r.b)("h2",{id:"flow-overview"},"Flow overview"),Object(r.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Users must have an account or subscription with a ",Object(r.b)("strong",{parentName:"li"},"Web Monetization provider"),"\n(also known as a WM sender)."),Object(r.b)("li",{parentName:"ul"},"Users must have a ",Object(r.b)("strong",{parentName:"li"},"Web Monetization agent")," installed in their browser with\nthe necessary authorization to initiate payments from the WM provider on the\nuser's behalf."),Object(r.b)("li",{parentName:"ul"},"Websites must sign up with, or run their own, ",Object(r.b)("strong",{parentName:"li"},"Web Monetization receiver"),".",Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"The WM receiver and WM provider do not need a direct relationship. Their\nshared use of the Interledger network allows payments to be sent from the\nWM provider to the WM receiver.")))),Object(r.b)("h3",{id:"sequence-diagram"},"Sequence diagram"),Object(r.b)("p",null,Object(r.b)("img",{alt:"test",src:n(173).default})),Object(r.b)("h3",{id:"flow"},"Flow"),Object(r.b)("p",null,"The numbers correspond to the diagram above. The flow is simplified to exclude\nsome edge cases."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Sites that support Web Monetization include a ",Object(r.b)("inlineCode",{parentName:"p"},"<meta>")," tag containing a\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#payment-pointers"}),"payment pointer"),". The browser (user agent) parses the tag to\ndetermine where to send payments.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The browser uses its internal Web Monetization agent to calculate an\nappropriate rate of payments to make to the site.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The browser generates a unique session ID for this payment session.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The browser fetches a unique destination address and shared secret for the\nsession from the site's payment pointer URL.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"(Optional)")," A payment receipt verifier service (operated by the site or a\nthird party) proxies the request and sends a Receipt Secret to generate receipts\nand Receipt Nonce to include in those receipts to the WM Receiver.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"With the site's page still in focus, the browser begins initiating payments\nto the website at the calculated rate from the user's WM provider."),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/WICG/webmonetization/issues/17"}),"Issue 17 - Support Streaming to Background Tabs"),Object(r.b)("p",null,"What about people listening to monetized music in a background tab?")))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The WM provider sends the payment to the WM receiver.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"(Optional)")," The WM receiver generates and sends a receipt to the WM\nprovider.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The WM provider notifies the browser of successful payments.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The browser, in turn, dispatches an event that informs the page of the\npayment.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"(Optional)")," The page confirms payment by sending the receipt to the\nverifier service."))),Object(r.b)("h2",{id:"why-is-a-standard-required"},"Why is a standard required?"),Object(r.b)("p",null,"There are many services attempting to provide alternative means to monetize the\nweb and generate revenue for content creators and service providers without\nselling ads."),Object(r.b)("p",null,"However, most of these require that the user and the creator/producer/service\nprovider join a common network that offers to facilitate the transactions\nbetween users and these services."),Object(r.b)("p",null,"The result is a fragmented web of closed content and service silos, rather than\nthe global and open web we desire. Further, users sacrifice their privacy\nbecause the service is both collecting payments from the user and paying out\nto the creator/producer/service provider. The service is therefore able to\ncorrelate payments and collect data about which services are accessed by users."),Object(r.b)("p",null,"Web Monetization decouples the provider (sender) and the receiver. Using the\nbrowser as an intermediary, the privacy of users is protected and payments can't\nbe used to track a user across sites."),Object(r.b)("h2",{id:"design-discussion-points"},"Design discussion points"),Object(r.b)("p",null,"This proposal is modeled on a working implementation that uses a browser\nextension to provide the necessary browser-side functionality. However, there\nare various design decisions that may be worth discussing further as a community\nas we figure out how Web Monetization could be built directly into browsers."),Object(r.b)("p",null,"By bringing this work to the WICG, our goal is to get input from multiple Web\nMonetization providers and implementors to refine the design and produce a W3C\nstandards-track specification."),Object(r.b)("h3",{id:"declarative-vs-imperative-api"},"Declarative vs imperative API"),Object(r.b)("p",null,"The current proposal is for a hybrid declarative and imperative API. Websites\ndeclare their ability to accept web monetized payments using a ",Object(r.b)("inlineCode",{parentName:"p"},"<meta>")," tag in\nthe page header. Imperatively, a developer can then access the global\n",Object(r.b)("inlineCode",{parentName:"p"},"monetization")," object on the DOM to track incoming payment streams/events and\nreact to these (by showing/hiding ads, etc.)."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/WICG/webmonetization/issues/33"}),"Issue 33 - Declarative vs Imperative API"))),Object(r.b)("h3",{id:"use-updated-payment-request-and-payment-handler-apis"},"Use updated Payment Request and Payment Handler APIs"),Object(r.b)("p",null,"The Web Payments WG has designed two APIs that follow a similar pattern to Web\nMonetization but for a different use case."),Object(r.b)("p",null,"The Payment Request API is an imperative API that websites can use to request a\nsingle discrete payment. The API is designed to always prompt the user for\nauthorization as part of the flow, as the API is designed for payment sizes\nwhere this is necessary. However, nothing prevents the API from also\nsupporting a non-interactive flow that supports Web Monetization use cases."),Object(r.b)("p",null,"The Payment Handler API aligns well with the model anticipated for WM providers.\nA provider might manifest as a specialized payment handler capable of returning\nnot just a ",Object(r.b)("inlineCode",{parentName:"p"},"PaymentResponse")," but also a handle to a stream of micropayments."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/WICG/webmonetization/issues/34"}),"Issue 34 - Use Updated Payment Request and Payment Handler APIs?"))),Object(r.b)("h3",{id:"this-sounds-a-lot-like-streams"},"This sounds a lot like streams..."),Object(r.b)("p",null,"In keeping with the trend toward streaming APIs, the API surface could be\nupdated to implement the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://streams.spec.whatwg.org"}),"WHATWG Stream API"),"\nrather than events."),Object(r.b)("p",null,"We will investigate the pros/cons of using streams and events for Web\nMonetization as part of the incubation process."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/WICG/webmonetization/issues/27"}),"Issue 27 - Readable Stream vs Progress Event vs Both"))),Object(r.b)("h2",{id:"concepts"},"Concepts"),Object(r.b)("p",null,"Web Monetization depends on two critical technologies/concepts that enable open\nand interoperable payments between providers and websites for very small amounts:\nInterledger and payment pointers."),Object(r.b)("h3",{id:"interledger"},"Interledger"),Object(r.b)("p",null,"Interledger is a payment messaging protocol for making payments of any size that\ncan be aggregated and settled over existing payment networks (including those\nthat do not support very small payment sizes or real-time payments clearing)."),Object(r.b)("p",null,"The design of the protocol also allows for payments to be made that span\nmultiple underlying settlement networks, improving the interoperability and\nreach of existing networks."),Object(r.b)("p",null,"Web Monetization providers and receivers use the Interledger protocol to exchange\npayments. The provider and WM receiver might be directly connected or might\nconnect via one or more intermediaries. This will be driven by the regulatory\nrequirements and the status of intermediaries as registered money services businesses."),Object(r.b)("p",null,"For more details see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://interledger.org"}),"https://interledger.org"),"."),Object(r.b)("h3",{id:"payment-pointers"},"Payment pointers"),Object(r.b)("p",null,"Payment pointers are a convenient and concise way to express a URL that points\nto a secure payment initiation endpoint on the Web."),Object(r.b)("p",null,"Payment pointers resolve to an HTTPS URL using simple conversion rules."),Object(r.b)("p",null,"Using payment pointers, systems that offer payment accounts can give users a\nsimple and easy-to-remember identifier for their account that's ",Object(r.b)("strong",{parentName:"p"},"safe to\nshare")," with 3rd parties (unlike a credit card number) and is immediately\nidentifiable as a payment account identifier."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Example payment pointers:")," ",Object(r.b)("inlineCode",{parentName:"p"},"$alice.wallet.example")," and ",Object(r.b)("inlineCode",{parentName:"p"},"$wallet.example/alice"),"."),Object(r.b)("p",{parentName:"blockquote"},"These resolve to ",Object(r.b)("inlineCode",{parentName:"p"},"https://alice.wallet.example/.well-known/pay")," and ",Object(r.b)("inlineCode",{parentName:"p"},"https://wallet.example/alice")," respectively.")),Object(r.b)("p",null,"Websites that use Web Monetization require a destination address for their\npayments (which they will get from their WM receiver). The address must be inserted\ninto the appropriate ",Object(r.b)("inlineCode",{parentName:"p"},"meta")," tag."),Object(r.b)("p",null,"For more details see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://paymentpointers.org"}),"https://paymentpointers.org"),"."),Object(r.b)("h2",{id:"getting-started"},"Getting Started"),Object(r.b)("p",null,"For a high-level overview, see the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"./getting-started"}),"Quick start guide"),"."),Object(r.b)("h3",{id:"set-up-a-receiving-account"},"Set up a receiving account"),Object(r.b)("p",null,"To use Web Monetization a website owner must have a financial account at a\nservice provider capable of receiving payments (WM receiver) via the Interledger\nprotocol."),Object(r.b)("p",null,"Such a service (a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"./ilp-wallets"}),"digital wallet"),", bank, or similar) must provide the website\nowner with a payment pointer that serves as the public address for the\naccount."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Example:")," Alice owns the website at ",Object(r.b)("em",{parentName:"p"},Object(r.b)("strong",{parentName:"em"},"https://",Object(r.b)("span",null),"rocknrollblog.example"))," and\nopens an account at ",Object(r.b)("em",{parentName:"p"},"Secure Receiving Wallet Ltd."),". ",Object(r.b)("p",null,"Secure Wallet tells Alice that the\npayment pointer for her account is ",Object(r.b)("inlineCode",{parentName:"p"},"$secure-wallet.example/~alice"),".")," ",Object(r.b)("p",null,"For\nprivacy reasons Alice might also get the payment pointer"),"\n",Object(r.b)("inlineCode",{parentName:"p"},"$secure-wallet.example/db74f8b4-d6a0-4489-a021-e785e5efb229")," or be able to\ngenerate new addresses on demand (this would be a feature of her WM receiver).")),Object(r.b)("h3",{id:"add-meta-tag-to-website-header"},"Add ","<","meta",">"," tag to website header"),Object(r.b)("p",null,"The website contains a ",Object(r.b)("inlineCode",{parentName:"p"},"<meta>")," tag in the header of the HTML documents it\nserves. The tag's ",Object(r.b)("inlineCode",{parentName:"p"},"name")," attribute must always have the value ",Object(r.b)("inlineCode",{parentName:"p"},"monetization"),".\nThe value of the ",Object(r.b)("inlineCode",{parentName:"p"},"content")," attribute is the payment pointer where the website\nwill accept payments."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Example:")," Alice puts the tag\n",Object(r.b)("inlineCode",{parentName:"p"},'<meta name="monetization" content="$secure-wallet.example/~alice">')," into the\n",Object(r.b)("inlineCode",{parentName:"p"},"<head>")," section of ",Object(r.b)("em",{parentName:"p"},Object(r.b)("strong",{parentName:"em"},"https://",Object(r.b)("span",null),"rocknrollblog.example")),".")),Object(r.b)("p",null,"Web Monetization only works on pages containing the ",Object(r.b)("inlineCode",{parentName:"p"},"meta")," tag. Pages must be\nsecure (served over HTTPS, or ",Object(r.b)("inlineCode",{parentName:"p"},"http://localhost")," for testing) to preclude bad\nactors, like ISPs injecting their own ",Object(r.b)("inlineCode",{parentName:"p"},"<meta>")," tags into pages."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/WICG/webmonetization/issues/14"}),"Issue 14 (Closed) - Legitimate Meta Tags"),Object(r.b)("p",null,"\nHow do we ensure only legitimate tags are parsed by the browser?"))),Object(r.b)("h3",{id:"handle-payments"},"Handle payments"),Object(r.b)("p",null,"When a user visits a monetized site with a supported browser the site will find a\n",Object(r.b)("inlineCode",{parentName:"p"},"document.monetization")," object in the DOM. The object will have a ",Object(r.b)("inlineCode",{parentName:"p"},"state"),"\nproperty that the website can check to determine if the user's WM provider has\nstarted sending payments."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"document.monetization")," object will emit events when monetization starts and\nthen subsequently each time a payment is sent successfully by the WM provider. The\nstart event will contain a unique identifier for the payment stream that can be\nused to correlate the payments at the WM receiver with the user's current browser\nsession."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Example:")," Alice adds the client-side code shown below to her website to\nlisten for the relevant monetization events. Now her site only shows\nadvertising if she isn't receiving payments.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"<head>\n  <meta name=\"monetization\" content=\"$secure-wallet.example/~alice\" />\n</head>\n<script>\n  if (document.monetization) {\n    document.monetization.addEventListener('monetizationstart', event => {\n      // User has an open payment stream\n\n      // Connect to backend to validate the session using the request id\n      const { paymentPointer, requestId } = event.detail\n      if (!isValidSession(paymentPointer, requestId)) {\n        console.error('Invalid requestId for monetization')\n        showAdvertising()\n      }\n    })\n\n    document.monetization.addEventListener('monetizationprogress', event => {\n      // A payment has been received\n\n      // Connect to backend to validate the payment\n      const {\n        paymentPointer,\n        requestId,\n        amount,\n        assetCode,\n        assetScale,\n        receipt\n      } = event.detail\n      if (\n        isValidPayment(paymentPointer, requestId, amount, assetCode, assetScale, receipt)\n      ) {\n        // Hide ads for a period based on amount received\n        suspendAdvertising(amount, assetCode, assetScale)\n      }\n    })\n    // Wait 30 seconds and then show ads if advertising is no longer suspended\n    setTimeout(maybeShowAdvertising, 30000)\n  } else {\n    showAdvertising()\n  }\n<\/script>\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/WICG/webmonetization/issues/16"}),"Issue 16 - Use ",Object(r.b)("inlineCode",{parentName:"a"},"PaymentCurrencyAmount")," Dictionary"),Object(r.b)("p",null,"\nShould the amount in the ",Object(r.b)("inlineCode",{parentName:"p"},"monetizationprogress")," event use the existing ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3.org/TR/payment-request/#paymentcurrencyamount-dictionary"}),Object(r.b)("inlineCode",{parentName:"a"},"PaymentCurrencyAmount"))," type?"))),Object(r.b)("h2",{id:"browser-behavior"},"Browser behavior"),Object(r.b)("p",null,"A web monetized browser exposes a ",Object(r.b)("inlineCode",{parentName:"p"},"document.monetization")," DOM object that\nimplements ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget"}),"EventTarget"),"\nand has a read-only ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"./api#states"}),Object(r.b)("inlineCode",{parentName:"a"},"state")," property"),". The object allows you to\ntrack Web Monetization events and see whether the user visiting your page is web monetized."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"If the browser finds a valid payment pointer in a page's ",Object(r.b)("inlineCode",{parentName:"p"},"<meta>"),"\ntag it generates a fresh UUID (version 4) and uses this as the ",Object(r.b)("strong",{parentName:"p"},"session\nID")," from this point forward."),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"This session ID ",Object(r.b)("strong",{parentName:"p"},"MUST")," be unique per page load, ",Object(r.b)("strong",{parentName:"p"},"NOT")," per browser,\nsession, or site.")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"<meta>")," tag ",Object(r.b)("strong",{parentName:"li"},"MUST")," be in the ",Object(r.b)("inlineCode",{parentName:"li"},"<head>")," of the document."),Object(r.b)("li",{parentName:"ul"},"If the ",Object(r.b)("inlineCode",{parentName:"li"},"<meta>")," tag is well-formed, the browser will extract the payment\npointer."),Object(r.b)("li",{parentName:"ul"},"If the ",Object(r.b)("inlineCode",{parentName:"li"},"<meta>")," tag is malformed, the browser will\nabort monetization processing. The browser ",Object(r.b)("strong",{parentName:"li"},"SHOULD")," report a warning\nvia the console."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The browser uses its internal Web Monetization agent to calculate the rate\nit should pay the current website. If the result is 0 it aborts.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The browser resolves the payment pointer and gets a unique\nInterledger address (destination address) and shared secret to use for the\ncurrent session. The browser then begins sending payments via the WM provider.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The browser invokes the user's WM provider ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/sending"}),"by emitting new ",Object(r.b)("inlineCode",{parentName:"a"},"PaymentRequestEvent")," events"),"\nwith the necessary details.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Once the WM provider has successfully completed the first payment with a non-zero\namount, the browser sets the ",Object(r.b)("inlineCode",{parentName:"p"},"document.monetization.state")," to ",Object(r.b)("inlineCode",{parentName:"p"},"started")," and\nthen dispatches the ",Object(r.b)("inlineCode",{parentName:"p"},"monetizationstart")," event on ",Object(r.b)("inlineCode",{parentName:"p"},"document.monetization"),".\nThe event has a ",Object(r.b)("inlineCode",{parentName:"p"},"detail")," field with an object containing the payment pointer\nand the session ID (referred to as the ",Object(r.b)("inlineCode",{parentName:"p"},"requestId")," in the object).")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The browser continues to send payments at the calculated rate. Every time\nit completes a payment (including the first payment) it dispatches a\n",Object(r.b)("inlineCode",{parentName:"p"},"monetizationprogress")," event from ",Object(r.b)("inlineCode",{parentName:"p"},"document.monetization"),". The event has a\n",Object(r.b)("inlineCode",{parentName:"p"},"detail")," field with an object containing the amount and currency\n(",Object(r.b)("inlineCode",{parentName:"p"},"assetCode"),") of the payment as well as an optional receipt.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Payment continues until the user closes/leaves the page or the browser decides\nto stop payment. The browser can decide to start and stop payments at any time\n(e.g., if the user is idle or backgrounds the page)."))),Object(r.b)("h3",{id:"auditing--dashboard"},"Auditing / dashboard"),Object(r.b)("p",null,"It must be possible for users to get summaries of payments compiled by the\nbrowser. Summaries allow users to reconcile information from websites and WM\nproviders about how much they have paid. Payments should be broken down by the:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Origin of the websites paid"),Object(r.b)("li",{parentName:"ul"},"WM provider making the payments"),Object(r.b)("li",{parentName:"ul"},"Date and time")),Object(r.b)("p",null,"It should also be possible to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Tell the browser ",Object(r.b)("strong",{parentName:"li"},"NOT")," to pay a particular website any money. For example,\nwhen a web monetized user visits a monetized site containing opposing\nviewpoints or etc. and doesn't want to contribute financially."),Object(r.b)("li",{parentName:"ul"},"Give the browser a list of sites which can optionally be paid more than the\nusual sum. For example, when a web monetized user visits a favorite charity's\nmonetized website.")),Object(r.b)("h2",{id:"web-monetization-provider-interface"},"Web Monetization provider interface"),Object(r.b)("p",null,"The Web Monetization provider (sender) interface leverages the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3.org/TR/payment-handler/"}),"Payment Handler API"),"."),Object(r.b)("p",null,"More details are provided in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/sending"}),"Sending payments")," page."),Object(r.b)("h2",{id:"existing-implementations"},"Existing implementations"),Object(r.b)("p",null,"Please submit a PR if you are aware of updates to the lists below."),Object(r.b)("h3",{id:"web-monetization-receivers"},"Web Monetization receivers"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://gatehub.net/"}),"GateHub")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://uphold.com/"}),"Uphold"))),Object(r.b)("h3",{id:"web-monetization-providers-senders"},"Web Monetization providers (senders)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://coil.com"}),"Coil"))),Object(r.b)("h3",{id:"browsers"},"Browsers"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://chrome.google.com/webstore/detail/coil/locbifcbeldmnphbgkdigjmkbfkhbnca"}),"Google Chrome (desktop) + Coil Extension")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://addons.mozilla.org/en-US/firefox/addon/coil/"}),"Mozilla Firefox (desktop) + Coil Extension")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://microsoftedge.microsoft.com/addons/detail/ljionajlbinlfkdnpkloejeoogfgkojm"}),"Microsoft Edge (desktop) + Coil Extension")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://chrome.google.com/webstore/detail/coil/locbifcbeldmnphbgkdigjmkbfkhbnca"}),"Brave Browser (desktop) + Coil Extension")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.pumabrowser.com/"}),"Puma Browser (mobile)"))))}c.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),c=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,u=p["".concat(o,".").concat(m)]||p[m]||d[m]||r;return n?i.a.createElement(u,s(s({ref:t},b),{},{components:n})):i.a.createElement(u,s({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var b=2;b<r;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);