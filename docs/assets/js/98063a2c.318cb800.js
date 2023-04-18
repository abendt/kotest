"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[48401],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=s,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56065:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(87462),s=(n(67294),n(3905));const r={id:"writing_tests",title:"Writing Tests",slug:"writing-tests.html",sidebar_label:"Writing Tests"},l=void 0,i={unversionedId:"framework/writing_tests",id:"version-5.3/framework/writing_tests",title:"Writing Tests",description:"By using the language features available in Kotlin, Kotest is able to provide a more powerful and yet simple approach",source:"@site/versioned_docs/version-5.3/framework/writing_tests.md",sourceDirName:"framework",slug:"/framework/writing-tests.html",permalink:"/docs/5.3/framework/writing-tests.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.3/framework/writing_tests.md",tags:[],version:"5.3",frontMatter:{id:"writing_tests",title:"Writing Tests",slug:"writing-tests.html",sidebar_label:"Writing Tests"},sidebar:"framework",previous:{title:"Introduction",permalink:"/docs/5.3/framework/framework.html"},next:{title:"Testing Styles",permalink:"/docs/5.3/framework/testing-styles.html"}},o={},c=[{value:"Nested Tests",id:"nested-tests",level:3},{value:"Dynamic Tests",id:"dynamic-tests",level:3},{value:"Lifecycle Callbacks",id:"lifecycle-callbacks",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"By using the language features available in Kotlin, Kotest is able to provide a more powerful and yet simple approach\nto defining tests. Gone are the days when tests need to be methods defined in a Java file."),(0,s.kt)("p",null,"In Kotest a test is essentially just a function ",(0,s.kt)("inlineCode",{parentName:"p"},"TestContext -> Unit")," which contains your test logic.\nAny assert statements (",(0,s.kt)("em",{parentName:"p"},"matchers")," in Kotest nomenclature) invoked in this function that throw an exception\nwill be intercepted by the framework and used to mark that test as failed or success."),(0,s.kt)("p",null,"Test functions are not defined manually, but instead using the Kotest DSL, which provides several ways in which these functions\ncan be created and nested. The DSL is accessed by creating a class that extends from a class that implements a particular\n",(0,s.kt)("a",{parentName:"p",href:"/docs/5.3/framework/testing-styles.html"},"testing style"),"."),(0,s.kt)("p",null,"For example, using the ",(0,s.kt)("em",{parentName:"p"},"Fun Spec")," style, we create test functions using the ",(0,s.kt)("inlineCode",{parentName:"p"},"test")," keyword, providing a name, and the\nactual test function."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyFirstTestClass : FunSpec({\n\n   test("my first test") {\n      1 + 2 shouldBe 3\n   }\n\n})\n')),(0,s.kt)("p",null,"Note that tests must be defined inside an ",(0,s.kt)("inlineCode",{parentName:"p"},"init {}")," block or an init lambda as in the previous example."),(0,s.kt)("h3",{id:"nested-tests"},"Nested Tests"),(0,s.kt)("p",null,"All styles offer the ability to nest tests. The actual syntax varies from style to style,\nbut is essentially just a different keyword used for the outer tests."),(0,s.kt)("p",null,"For example, in ",(0,s.kt)("em",{parentName:"p"},"Describe Spec"),", the outer tests are created using the ",(0,s.kt)("inlineCode",{parentName:"p"},"describe")," function and\ninner tests using the ",(0,s.kt)("inlineCode",{parentName:"p"},"it")," function.\nJavaScript and Ruby developers will instantly recognize this style as it is commonly used in testing frameworks\nfor those languages."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class NestedTestExamples : DescribeSpec({\n\n   describe("an outer test") {\n\n      it("an inner test") {\n        1 + 2 shouldBe 3\n      }\n\n      it("an inner test too!") {\n        3 + 4 shouldBe 7\n      }\n   }\n\n})\n')),(0,s.kt)("p",null,"In Kotest nomenclature, tests that can contain other tests are called ",(0,s.kt)("em",{parentName:"p"},"test containers")," and tests\nthat are terminal or leaf nodes are called ",(0,s.kt)("em",{parentName:"p"},"test cases"),". Both can contain test logic and assertions."),(0,s.kt)("h3",{id:"dynamic-tests"},"Dynamic Tests"),(0,s.kt)("p",null,"Since tests are just functions, they are evaluated at runtime."),(0,s.kt)("p",null,"This approach offers a huge advantage - tests can be dynamically created. Unlike traditional JVM test frameworks,\nwhere tests are always methods and therefore declared at compile time, Kotest can add tests conditionally at runtime."),(0,s.kt)("p",null,"For example, we could add tests based on elements in a list."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class DynamicTests : FunSpec({\n\n    listOf(\n      "sam",\n      "pam",\n      "tim",\n    ).forEach {\n       test("$it should be a three letter name") {\n           it.shouldHaveLength(3)\n       }\n    }\n})\n')),(0,s.kt)("p",null,"This would result in three tests being created at runtime. It would be the equivalent to writing:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class DynamicTests : FunSpec({\n\n   test("sam should be a three letter name") {\n      "sam".shouldHaveLength(3)\n   }\n\n   test("pam should be a three letter name") {\n      "pam".shouldHaveLength(3)\n   }\n\n   test("tim should be a three letter name") {\n     "tim".shouldHaveLength(3)\n   }\n})\n')),(0,s.kt)("h3",{id:"lifecycle-callbacks"},"Lifecycle Callbacks"),(0,s.kt)("p",null,"Kotest provides several callbacks which are invoked at various points during a test's lifecycle.\nThese callbacks are useful for resetting state, setting up and tearing down resources that a test might use, and so on."),(0,s.kt)("p",null,"As mentioned earlier, test functions in Kotest are labelled either ",(0,s.kt)("em",{parentName:"p"},"test containers")," or ",(0,s.kt)("em",{parentName:"p"},"test cases"),", in addition to\nthe containing class being labelled a ",(0,s.kt)("em",{parentName:"p"},"spec"),". We can register callbacks that are invoked before or after any test function, container, test case, or a spec itself."),(0,s.kt)("p",null,"To register a callback, we just pass a function to one of the callback methods."),(0,s.kt)("p",null,"For example, we can add a callback before and after any ",(0,s.kt)("em",{parentName:"p"},"test case")," using a function literal:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class Callbacks : FunSpec({\n\n   beforeEach {\n      println("Hello from $it")\n   }\n\n   test("sam should be a three letter name") {\n      "sam".shouldHaveLength(3)\n   }\n\n   afterEach {\n      println("Goodbye from $it")\n   }\n})\n')),(0,s.kt)("p",null,"Note that the order of the callbacks in the file is not important.\nFor example, an ",(0,s.kt)("inlineCode",{parentName:"p"},"afterEach")," block can be placed first in the class if you so desired."),(0,s.kt)("p",null,"If we want to extract common code, we can create a named function and re-use it for multiple files.\nFor example, say we wanted to reset a database before every test in more than one file, we could do this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'val resetDatabase: BeforeTest = {\n  // truncate all tables here\n}\n\nclass ReusableCallbacks : FunSpec({\n\n   beforeTest(resetDatabase)\n\n   test("this test will have a sparkling clean database!") {\n       // test logic here\n   }\n})\n')),(0,s.kt)("p",null,"For details of all callbacks and when they are invoked, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/5.3/framework/lifecycle-hooks.html"},"here")," and ",(0,s.kt)("a",{parentName:"p",href:"/docs/5.3/framework/extensions/extensions-introduction.html"},"here"),"."))}p.isMDXComponent=!0}}]);