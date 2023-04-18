"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[28824],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35104:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={id:"reflective_arbs",title:"Reflective Arbs",slug:"reflective-arbs.html"},i=void 0,l={unversionedId:"proptest/reflective_arbs",id:"version-5.6/proptest/reflective_arbs",title:"Reflective Arbs",description:"When running tests on JVM, Kotest supports generating more complex Arbs automatically.",source:"@site/versioned_docs/version-5.6/proptest/reflective_arbs.md",sourceDirName:"proptest",slug:"/proptest/reflective-arbs.html",permalink:"/docs/proptest/reflective-arbs.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.6/proptest/reflective_arbs.md",tags:[],version:"5.6",frontMatter:{id:"reflective_arbs",title:"Reflective Arbs",slug:"reflective-arbs.html"},sidebar:"proptest",previous:{title:"Extra Arbs",permalink:"/docs/proptest/property-test-extra-arbs.html"}},c={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When running tests on ",(0,a.kt)("strong",{parentName:"p"},"JVM"),", Kotest supports generating more complex ",(0,a.kt)("inlineCode",{parentName:"p"},"Arb"),"s automatically.\nThe generated ",(0,a.kt)("inlineCode",{parentName:"p"},"Arb")," relies on build-in default and further reflective ",(0,a.kt)("inlineCode",{parentName:"p"},"Arb"),"s to populate the class parameters.\nIf you just need to create and instance and don't need filtering you can use the class type in the ",(0,a.kt)("inlineCode",{parentName:"p"},"checkAll"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"forAll")," calls directly.\nWhen you want to obtain the ",(0,a.kt)("inlineCode",{parentName:"p"},"Arb")," to manipulate it further or filter invalid values, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"Arb.bind")," with the type argument to obtain the ",(0,a.kt)("inlineCode",{parentName:"p"},"Arb"),".\nIf the required type depends on types that are not supported by default, it is possible to provide ",(0,a.kt)("inlineCode",{parentName:"p"},"Arb"),"s for those types in the call to ",(0,a.kt)("inlineCode",{parentName:"p"},"Arb.bind"),"."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'enum class Currency {\n  USD, GBP, EUR\n}\n\nclass CurrencyAmount(\n  val amount: Long,\n  val currency: Currency\n)\n\ncontext("Currencies converts to EUR") { // In some spec\n  checkAll(Arb.bind<CurrencyAmount>().filter { it.currency != EUR }) { currencyAmount ->\n    val converted = currencyAmount.convertTo(EUR)\n    converted.currency shouldBe EUR\n  }\n}\n\ncontext("Converting to a currency and back yields the same amount") { // In some spec\n  checkAll<CurrencyAmount, Currency>() { currencyAmount, currency ->\n    val converted = currencyAmount.convertTo(currency).convertTo(currencyAmount.currency)\n    converted.currency shouldBe currencyAmount.currency\n  }\n}\n')),(0,a.kt)("p",null,"Reflective binding is supported for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Classes or dataclasses that are not private, which primary constructor is not private, and where constructor parameters are also supported types"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Pair"),", where 1st and 2nd fall into this category"),(0,a.kt)("li",{parentName:"ul"},"Primitives"),(0,a.kt)("li",{parentName:"ul"},"Enums"),(0,a.kt)("li",{parentName:"ul"},"Sealed classes, subtypes and their primary constructor must not be private"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LocalDate"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"LocalDateTime"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"LocalTime"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Period"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Instant")," from ",(0,a.kt)("inlineCode",{parentName:"li"},"java.time")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BigDecimal"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"BigInteger")),(0,a.kt)("li",{parentName:"ul"},"Collections (",(0,a.kt)("inlineCode",{parentName:"li"},"Set"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"List"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Map"),")"),(0,a.kt)("li",{parentName:"ul"},"Classes for which an Arb has been provided through ",(0,a.kt)("inlineCode",{parentName:"li"},"providedArbs"))))}u.isMDXComponent=!0}}]);