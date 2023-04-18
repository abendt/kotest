"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[41122],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},93155:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const s={id:"html_reporter",title:"HTML Reporter",sidebar_label:"HTML Reporter",slug:"html_reporter.html"},a=void 0,i={unversionedId:"extensions/html_reporter",id:"version-5.6/extensions/html_reporter",title:"HTML Reporter",description:"Latest Release",source:"@site/versioned_docs/version-5.6/extensions/html_reporter.md",sourceDirName:"extensions",slug:"/extensions/html_reporter.html",permalink:"/docs/extensions/html_reporter.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.6/extensions/html_reporter.md",tags:[],version:"5.6",frontMatter:{id:"html_reporter",title:"HTML Reporter",sidebar_label:"HTML Reporter",slug:"html_reporter.html"},sidebar:"extensions",previous:{title:"JUnit XML",permalink:"/docs/extensions/junit_xml.html"},next:{title:"Allure",permalink:"/docs/extensions/allure.html"}},l={},p=[],c={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/io.kotest/kotest-extensions-htmlreporter"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/maven-central/v/io.kotest/kotest-extensions-htmlreporter",alt:"Latest Release"}))),(0,o.kt)("p",null,"When using ",(0,o.kt)("a",{parentName:"p",href:"/docs/extensions/junit_xml.html"},"JUnit XML"),", we can generate XML results from tests that are able to produce output with nested\ntests. Unfortunately, Gradle generates its HTML reports with the results it has in-memory, which doesn't support nested\ntests, and it doesn't seem to be able to fetch results from a different XML."),(0,o.kt)("p",null,"To solve this, Kotest has a listener that is able to generate HTML reports based on the XML reports that are generated\nby ",(0,o.kt)("a",{parentName:"p",href:"/docs/extensions/junit_xml.html"},"JUnit XML"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The following module is needed: ",(0,o.kt)("inlineCode",{parentName:"p"},"io.kotest:kotest-extensions-htmlreporter")," in your build. Search maven central for latest version ",(0,o.kt)("a",{parentName:"p",href:"https://search.maven.org/search?q=kotest-extensions-htmlreporter"},"here"),".")),(0,o.kt)("p",null,"In order to use it, we simply need to add it as a listener through ",(0,o.kt)("a",{parentName:"p",href:"/docs/framework/project-config.html"},"project config"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"class ProjectConfig : AbstractProjectConfig() {\n\n   override val specExecutionOrder = SpecExecutionOrder.Annotated\n\n    override fun extensions(): List<Extension> = listOf(\n        JunitXmlReporter(\n            includeContainers = false,\n            useTestPathAsName = true,\n        ),\n        HtmlReporter()\n    )\n}\n")),(0,o.kt)("p",null,"Additionally, prevent Gradle from generating its own html reports by adding ",(0,o.kt)("inlineCode",{parentName:"p"},"html.required.set(false)")," to the test task."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'tasks.test {\n  useJUnitPlatform()\n  reports {\n    html.required.set(false)\n    junitXml.required.set(false)\n  }\n  systemProperty("gradle.build.dir", project.buildDir)\n}\n')),(0,o.kt)("p",null,"Notice that we also add ",(0,o.kt)("inlineCode",{parentName:"p"},"JunitXmlReporter"),". This will generate the necessary XML reports, used to generate the HTML reports.\nThere's no additional configuration needed, it should simply start generating HTML reports."),(0,o.kt)("p",null,"By default, it stores reports in ",(0,o.kt)("inlineCode",{parentName:"p"},"path/to/buildDir/reports/tests/test")," but this can be modified by changing the parameter\n",(0,o.kt)("inlineCode",{parentName:"p"},"outputDir"),"."))}m.isMDXComponent=!0}}]);