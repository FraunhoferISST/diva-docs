"use strict";(self.webpackChunkdiva_docs=self.webpackChunkdiva_docs||[]).push([[1867],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,h=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6971:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"introduction",title:"How you can help"},c="How you can help",l={unversionedId:"Development/Contribution/introduction",id:"Development/Contribution/introduction",title:"How you can help",description:"This is an ongoing project of the Data Business",source:"@site/docs/04-Development/05-Contribution/01-introduction.md",sourceDirName:"04-Development/05-Contribution",slug:"/Development/Contribution/introduction",permalink:"/docs/Development/Contribution/introduction",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"introduction",title:"How you can help"},sidebar:"divaSidebar",previous:{title:"Tooling",permalink:"/docs/Development/Architecture/tooling"},next:{title:"Issues and pull request",permalink:"/docs/Development/Contribution/issues-and-prs"}},u={},p=[{value:"Prepare for contribution",id:"prepare-for-contribution",level:2},{value:"Connect to new data source",id:"connect-to-new-data-source",level:2},{value:"Improving a core",id:"improving-a-core",level:2},{value:"Extending profiling workflows",id:"extending-profiling-workflows",level:2},{value:"Clients family",id:"clients-family",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-you-can-help"},"How you can help"),(0,i.kt)("p",null,"This is an ongoing project of the Data Business\ndepartment of the ",(0,i.kt)("a",{parentName:"p",href:"https://www.isst.fraunhofer.de/"},"Fraunhofer ISST")," hosted on GitHub. You can contribute to the project where you find a bug, suggest an\nimprovement, or have an idea for a useful feature, such as a new profiling service or need a new adapter to connect to some\nspecific data source, that DIVA does not support now. "),(0,i.kt)("p",null,"The following is a set of guidelines for contributing to DIVA. In general, you have\nalways to create an issue to discuss your attentions and a corresponding pull request, follow our rules for commit messages and direct code changes to ",(0,i.kt)("inlineCode",{parentName:"p"},"dev"),"\nbranch."),(0,i.kt)("p",null,"In order to achieve the highest possible level of code quality, all changes in the PR must satisfy checks in the CI pipeline.\nAfter a review by a member of the core team, the changes will be integrated into the main branch and released."),(0,i.kt)("h2",{id:"prepare-for-contribution"},"Prepare for contribution"),(0,i.kt)("p",null,"DIVA is a complex system with many components and services, all of them have their own requirements. To provide an\noverview, we have summarized all the most important information about installation and development on your own machine\nin our guide for ",(0,i.kt)("a",{parentName:"p",href:"../prerequisites"},"prerequisites")," and ",(0,i.kt)("a",{parentName:"p",href:"../development/local-development"},"local development"),"."),(0,i.kt)("p",null,"Make sure you have access to our ",(0,i.kt)("a",{parentName:"p",href:"../../deployment/prerequisites#access-to-container-registry"},"container registry")," on GitHub and read more information on how to use Docker to manage\nthe system components you need. "),(0,i.kt)("p",null,"Overview of the ",(0,i.kt)("a",{parentName:"p",href:"../architecture/introduction"},"architecture")," helps you to better understand how the components are organized and where your changes fit in.\nAlways feel free to ask any question if something is not clear, or you have a suggestion on how to improve the existing\narchitecture."),(0,i.kt)("h2",{id:"connect-to-new-data-source"},"Connect to new data source"),(0,i.kt)("p",null,"DIVA is expandable be design. Currently, we support uploading files via the browser and\nintegration with UrbanPulse and DSC. This is a point where DIVA can potentially grow very quickly and we plan to\nintegrate with more data sources such as databases or HTTP API's. If you want to integrate another data source like\nMongoDB, Dropbox or something specific with DIVA, that's a case for a new ",(0,i.kt)("a",{parentName:"p",href:"../architecture/introduction#diva-core"},"Adapter Service"),". A guide for the development\nof the Adapter services will be available soon."),(0,i.kt)("h2",{id:"improving-a-core"},"Improving a core"),(0,i.kt)("p",null,"DIVA's ",(0,i.kt)("a",{parentName:"p",href:"../architecture/introduction#diva-core"},"core")," is responsible for key management functionality and must be maintained consistently and with proper competence.\nHere everything focuses on data persistence, messaging, data model and management of internal entities through the strict API.\nOur guide for Node.js core services (coming soon) development will help you to get started."),(0,i.kt)("h2",{id:"extending-profiling-workflows"},"Extending profiling workflows"),(0,i.kt)("p",null,"Counting letters in a PDF file, object recognition for images or named entity recognition - our task-oriented FaaS's are\ncompact functions for such analyses. If you have an idea for our profiling workflow, feel free to create a new FaaS."),(0,i.kt)("h2",{id:"clients-family"},"Clients family"),(0,i.kt)("p",null,"Modern Vue.js based SPA ",(0,i.kt)("a",{parentName:"p",href:"../architecture/web-client"},"client")," is a part of DIVA and provides an interface for accessing all functionality of the system.\nWe are continuously improving our web client, adding new features and improving the UX. Here is plenty of room for your feedback and help."),(0,i.kt)("p",null,"Since we currently only have a web-based client, it would be nice to be able to offer the great and native usability of working\nwith DIVA on mobile devices as well. Android, IOS or hybrid with Dart, let's bring DIVA to all platforms.\nWe are open to any suggestions, even if it should be a client for an edge devices or a terminal, share your ideas with us."))}f.isMDXComponent=!0}}]);