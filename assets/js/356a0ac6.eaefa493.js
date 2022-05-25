"use strict";(self.webpackChunkdiva_docs=self.webpackChunkdiva_docs||[]).push([[1117],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7384:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"about-diva",title:"About"},l="About DIVA",c={type:"mdx",permalink:"/about",source:"@site/src/pages/about.md",title:"About",description:"DIVA stands for Data Inventory and Valuation Approach and is a project for managing data in companies,",frontMatter:{id:"about-diva",title:"About"}},u=[{value:"Main Features",id:"main-features",level:2},{value:"Core Concepts and terminology",id:"core-concepts-and-terminology",level:2},{value:"Resource",id:"resource",level:3},{value:"Asset",id:"asset",level:3},{value:"User",id:"user",level:3},{value:"Profiling",id:"profiling",level:3}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"about-diva"},"About DIVA"),(0,o.kt)("p",null,"DIVA stands for Data Inventory and Valuation Approach and is a project for managing data in companies,\ndeveloped for evaluating the newest data management technologies in context of data transparency, data insight and data networking."),(0,o.kt)("p",null,"This is an ongoing project of the ",(0,o.kt)("a",{parentName:"p",href:"https://www.isst.fraunhofer.de/en/business-units/data-business.html"},"Data Business")," unit of the ",(0,o.kt)("a",{parentName:"p",href:"https://www.isst.fraunhofer.de/en.html"},"Fraunhofer ISST"),".\nData is getting more and more important to companies.\nBy utilizing the right data, companies can get more productive and will be able to succeed their competitors.\nThus, we believe it is time for a data management solution, that evaluates new innovative solutions to support companies in their daily work with data.\nThis tool will grow day by day and we try our best to tackle data management challenges in companies."),(0,o.kt)("p",null,"We also use this tool as a playground for our students, where they can work out topics for their bachelor or master thesis.\nEven the PhD students profit from this tool as a platform for their doctoral thesis."),(0,o.kt)("h2",{id:"main-features"},"Main Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\ud83c\udfdb\ufe0f microservice architecture: allows to choose the best technology for solving a problem and a more easy scaling")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\ud83d\udcbb client application: an easy to use web application for managing all kinds of data management related topics")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\ud83d\udda5\ufe0f portal application: simple search for interesting files on different devices (WIP)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\ud83d\udc33 docker ready: all microservices and core components are docker ready so you can start them right out of the box."))),(0,o.kt)("h2",{id:"core-concepts-and-terminology"},"Core Concepts and terminology"),(0,o.kt)("p",null,"DIVA is built with flexibility and extensibility in mind. We are aware of the dynamics, dimensions and complexity of data management in an organisation.\nOur goal is to build an ultimate framework for all your data that simply solves all management problems, fully automated."),(0,o.kt)("p",null,"To realize this vision, we define a concept of resources. A resource in DIVA is an abstraction for a relevant information source.\nThis can be a PDF file, a database, an image or anything else, with important metadata around it.\nThe resources can be grouped into further abstraction - an asset. An asset helps you to better organize the resource."),(0,o.kt)("p",null,"Automated profiling provides the resources in DIVA with further interesting analysis and metadata.\nProfiling enriches the data with valuable additional attributes and brings out the hidden potential of the data."),(0,o.kt)("h3",{id:"resource"},"Resource"),(0,o.kt)("p",null,"A resource is a representation of any data source that has value to you.\nAs a resource in DIVA you can import any kind of information sources such as files, databases, other data platforms, API services, etc.\nBy definition, a resource has no restrictions to represent any type of data.\nAll you need to do - provide information on how DIVA can get your data."),(0,o.kt)("p",null,"Profiling can be performed on resources to enrich them with metadata.\nIf required, the metadata such as description, title or keywords can be adjusted manually."),(0,o.kt)("h3",{id:"asset"},"Asset"),(0,o.kt)("p",null,"Multiple resources can be logically grouped into one asset. An asset can have resources of different types.\nMetadata for an asset can be managed as well."),(0,o.kt)("h3",{id:"user"},"User"),(0,o.kt)("p",null,"A user is you. Users can register in the web application to get full access to DIVA functionalities."),(0,o.kt)("h3",{id:"profiling"},"Profiling"),(0,o.kt)("p",null,"Under profiling we understand the automatic extraction or generation of useful metadata which enriches a resource.\nProfiling is performed by a small service through the access to the actual data behind a resource.\nExamples of profiling are the extraction of keywords from a PDF file or the generation of a caption for an image."))}d.isMDXComponent=!0}}]);