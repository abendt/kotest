"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[885],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||a;return r?o.createElement(d,i(i({ref:t},c),{},{components:r})):o.createElement(d,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1195:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const a={title:"Timeouts",slug:"timeouts.html",id:"timeout",sidebar_label:"Timeouts"},i=void 0,s={unversionedId:"framework/timeout",id:"framework/timeout",title:"Timeouts",description:"Kotest supports timeouts at several execution points.",source:"@site/docs/framework/timeouts.md",sourceDirName:"framework",slug:"/framework/timeouts.html",permalink:"/docs/next/framework/timeouts.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/framework/timeouts.md",tags:[],version:"current",frontMatter:{title:"Timeouts",slug:"timeouts.html",id:"timeout",sidebar_label:"Timeouts"}},l={},u=[],c={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Kotest supports timeouts at several execution points.\nThese timeouts allow you to place a constraint on the overall execution time of a test, an invocation or an entire project."),(0,n.kt)("p",null,"The following pages detail how to enable timeouts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/framework/timeouts/test-timeouts.html"},"test and invocation timeouts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/framework/timeouts/project-timeouts.html"},"project timeouts"))))}m.isMDXComponent=!0}}]);