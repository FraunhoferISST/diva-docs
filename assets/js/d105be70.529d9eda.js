"use strict";(self.webpackChunkdiva_docs=self.webpackChunkdiva_docs||[]).push([[9816],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4726:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"introduction",title:"How you can help"},c=void 0,l={unversionedId:"Development/Contribution/introduction",id:"Development/Contribution/introduction",title:"How you can help",description:"You can contribute to the project when you find a bug, suggest an improvement, or have an idea for a useful feature, such as a new profiling service or need a new adapter to connect to some specific data source, that DIVA does not support now.",source:"@site/docs/04-Development/06-Contribution/01-introduction.md",sourceDirName:"04-Development/06-Contribution",slug:"/Development/Contribution/introduction",permalink:"/diva-docs/docs/next/Development/Contribution/introduction",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"introduction",title:"How you can help"},sidebar:"divaSidebar",previous:{title:"Rules",permalink:"/diva-docs/docs/next/Development/Data Governance/rules"},next:{title:"Issues and Pull Request",permalink:"/diva-docs/docs/next/Development/Contribution/issues-and-prs"}},u={},d=[{value:"Prepare for contribution",id:"prepare-for-contribution",level:2},{value:"Connect to new Data Source",id:"connect-to-new-data-source",level:2},{value:"Improving a Core Service",id:"improving-a-core-service",level:2},{value:"Extending Profiling Workflows",id:"extending-profiling-workflows",level:2},{value:"Clients Family",id:"clients-family",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can contribute to the project when you find a bug, suggest an improvement, or have an idea for a useful feature, such as a new profiling service or need a new adapter to connect to some specific data source, that DIVA does not support now."),(0,i.kt)("p",null,"The following is a set of guidelines for contributing to DIVA.\nIn general, you have always to create an issue to discuss your attentions and a corresponding pull request, follow our rules for commit messages and direct code changes to ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," branch."),(0,i.kt)("p",null,"In order to achieve the highest possible level of code quality, all changes in the PR must satisfy checks in the CI pipeline.\nAfter a review by a member of the core team, the changes will be integrated into the main branch and released."),(0,i.kt)("h2",{id:"prepare-for-contribution"},"Prepare for contribution"),(0,i.kt)("p",null,"DIVA is a complex system with many components and services, all of them have their own requirements.\nTo provide an overview, we have summarized all the most important information about installation and development on your own machine in our guide for ",(0,i.kt)("a",{parentName:"p",href:"../prerequisites"},"prerequisites")," and ",(0,i.kt)("a",{parentName:"p",href:"../local-development"},"local development"),"."),(0,i.kt)("p",null,"Make sure you have access to our ",(0,i.kt)("a",{parentName:"p",href:"../../deployment/prerequisites#access-to-container-registry"},"container registry")," on GitHub and read more information on how to use Docker to manage the system components you need."),(0,i.kt)("p",null,"Overview of the ",(0,i.kt)("a",{parentName:"p",href:"../architecture/introduction"},"architecture")," helps you to better understand how the components are organized and where your changes fit in.\nAlways feel free to ask any question if something is not clear, or you have a suggestion on how to improve the existing architecture."),(0,i.kt)("h2",{id:"connect-to-new-data-source"},"Connect to new Data Source"),(0,i.kt)("p",null,"DIVA is expandable be design. Currently, we support uploading files via the browser and integration with UrbanPulse.\nThis is a point where DIVA can potentially grow very quickly and we plan to integrate with more data sources such as databases or HTTP API's.\nIf you want to integrate another data source like MongoDB, Dropbox or something specific with DIVA, that's a case for a new ",(0,i.kt)("a",{parentName:"p",href:"../architecture/introduction#diva-core"},"Adapter Service"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"A guide for the development of the Adapter services will be available soon."))),(0,i.kt)("h2",{id:"improving-a-core-service"},"Improving a Core Service"),(0,i.kt)("p",null,"DIVA's ",(0,i.kt)("a",{parentName:"p",href:"../architecture/introduction#diva-core"},"core")," is responsible for key management functionality and must be maintained consistently and with proper competence.\nHere everything focuses on data persistence, messaging, data model and management of internal entities through the strict API."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"A guide for the development of Node.js core services will be available soon."))),(0,i.kt)("h2",{id:"extending-profiling-workflows"},"Extending Profiling Workflows"),(0,i.kt)("p",null,"Counting letters in a PDF file, object recognition for images or named entity recognition - our task-oriented FaaS's are compact functions for such analyses.\nIf you have an idea for our profiling workflow, feel free to create a new FaaS."),(0,i.kt)("h2",{id:"clients-family"},"Clients Family"),(0,i.kt)("p",null,"Modern Vue.js based SPA ",(0,i.kt)("a",{parentName:"p",href:"../architecture/web-client"},"client")," is a part of DIVA and provides an interface for accessing all functionality of the system.\nWe are continuously improving our web client, adding new features and improving the UX.\nHere is plenty of room for your feedback and help.\nSince we currently only have a web-based client, it would be nice to be able to offer the great and native usability of working with DIVA on mobile devices as well.\nAndroid, IOS or hybrid with Dart, let's bring DIVA to all platforms.\nWe are open to any suggestions, even if it should be a client for an edge devices or a terminal, share your ideas with us."))}m.isMDXComponent=!0}}]);