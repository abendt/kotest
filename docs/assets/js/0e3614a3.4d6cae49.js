"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[31794],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=l,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},68034:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),l=(r(67294),r(3905));const o={id:"allure",title:"Allure",sidebar_label:"Allure",slug:"allure.html"},a=void 0,s={unversionedId:"extensions/allure",id:"version-5.5/extensions/allure",title:"Allure",description:"Allure is an open-source framework designed for detailed and interactive test reports.",source:"@site/versioned_docs/version-5.5/extensions/allure.md",sourceDirName:"extensions",slug:"/extensions/allure.html",permalink:"/docs/5.5/extensions/allure.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.5/extensions/allure.md",tags:[],version:"5.5",frontMatter:{id:"allure",title:"Allure",sidebar_label:"Allure",slug:"allure.html"},sidebar:"extensions",previous:{title:"HTML Reporter",permalink:"/docs/5.5/extensions/html_reporter.html"},next:{title:"Current Instant Listeners",permalink:"/docs/5.5/extensions/instant.html"}},i={},u=[{value:"Collect Data",id:"collect-data",level:3},{value:"Gradle Plugin",id:"gradle-plugin",level:3},{value:"Manually setting result directory",id:"manually-setting-result-directory",level:3},{value:"Final Report",id:"final-report",level:3}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://qameta.io/allure-report/"},"Allure")," is an open-source framework designed for detailed and interactive test reports.\nIt works by generating report files which are then used to create the final HTML report.\nYou can think of it as like the traditional JUnit report but more advanced and detailed."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If you prefer to see an example rather than read docs, then there is a sample project ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kotest/kotest-examples-allure"},"here"))),(0,l.kt)("p",null,"There are two steps to Allure. The first is to generate the raw data when executing tests, the second is to\ncompile that data into the interactive HTML report."),(0,l.kt)("p",null,"This module provides integration for using Allure with Kotest.\nTo start, add the below dependency to your Gradle build file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},"io.kotest.extensions:kotest-extensions-allure:${kotest.version}\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/io.kotest.extensions/kotest-extensions-allure"},(0,l.kt)("img",{src:"https://img.shields.io/maven-central/v/io.kotest.extensions/kotest-extensions-allure.svg?label=latest%20release"})),"\n",(0,l.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/snapshots/io/kotest/extensions/kotest-extensions-allure/"},(0,l.kt)("img",{src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/io.kotest.extensions/kotest-extensions-allure.svg?label=latest%20snapshot"}))),(0,l.kt)("p",null,"Note: The group ID is different (",(0,l.kt)("inlineCode",{parentName:"p"},"io.kotest.extensions"),") from the main Kotest dependencies (",(0,l.kt)("inlineCode",{parentName:"p"},"io.kotest"),")."),(0,l.kt)("h3",{id:"collect-data"},"Collect Data"),(0,l.kt)("p",null,"Allure has data collectors for most test frameworks and this module provides the integration for Kotest.\nOnce the module has been added to your build, wire in the ",(0,l.kt)("inlineCode",{parentName:"p"},"AllureTestReporter")," class globally\nusing ",(0,l.kt)("a",{parentName:"p",href:"/docs/5.5/framework/project-config.html"},"project config"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"class MyConfig : AbstractProjectConfig {\n    override fun listeners() = listOf(AllureTestReporter())\n}\n")),(0,l.kt)("p",null,"Now, whenever tests are executed, Kotest will produce test reports in the Allure JSON format."),(0,l.kt)("h3",{id:"gradle-plugin"},"Gradle Plugin"),(0,l.kt)("p",null,"Now that the tests have completed, we can compile them into\nthe ",(0,l.kt)("a",{parentName:"p",href:"https://docs.qameta.io/allure/#_report_generation"},"final report"),"."),(0,l.kt)("p",null,"This can be done manually using the Allure binary, or we can use\nthe ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/allure-framework/allure-gradle"},"Allure Gradle plugin"),". To use the Gradle plugin, first add the\nplugin to your build's plugins block."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'plugins {\n  ...\n  id("io.qameta.allure") version "2.11.2"\n}\n')),(0,l.kt)("p",null,"Next, add an Allure configuration section to set the version and disable autoconfigure (because Allure can only\nautoconfigure JUnit, and Kotest takes care of this for you anyway)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'allure {\n  autoconfigure = false\n  version = "2.13.1"\n}\n')),(0,l.kt)("p",null,"Finally, execute the Gradle task ",(0,l.kt)("inlineCode",{parentName:"p"},"allureReport")," and the report will be generated in ",(0,l.kt)("inlineCode",{parentName:"p"},"./build/reports/allure-report")," and\ninside you should find the ",(0,l.kt)("inlineCode",{parentName:"p"},"index.html")," entry point for the report."),(0,l.kt)("h3",{id:"manually-setting-result-directory"},"Manually setting result directory"),(0,l.kt)("p",null,"If you are not using the Gradle plugin then you will need to inform Allure where the results directory is by setting\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"allure.results.directory")," system property on your test task configuration. If you are using the Gradle plugin, then\nthis can be skipped as the Gradle plugin does this for you."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'tasks.named<Test>("test") { // or "jvmTest" etc\n   useJUnitPlatform()\n   systemProperty("allure.results.directory", project.buildDir.toString() + "/allure-results")\n}\n')),(0,l.kt)("h3",{id:"final-report"},"Final Report"),(0,l.kt)("p",null,"If all was successful, after test execution and report generation, you will see something like this:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"allure screenshot",src:r(90115).Z,width:"1932",height:"996"})))}c.isMDXComponent=!0},90115:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/allure-a95d026b3e0d686c7eb9f32e3f0eb2b8.png"}}]);