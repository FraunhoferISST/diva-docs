"use strict";(self.webpackChunkdiva_docs=self.webpackChunkdiva_docs||[]).push([[8503],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6634:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"issues-and-prs",title:"Issues and pull request"},u="Issues and pull request",l={unversionedId:"Development/Contribution/issues-and-prs",id:"Development/Contribution/issues-and-prs",title:"Issues and pull request",description:"We are really excited that you are interested in contributing to DIVA.",source:"@site/docs/04-Development/05-Contribution/02-issues-and-prs.md",sourceDirName:"04-Development/05-Contribution",slug:"/Development/Contribution/issues-and-prs",permalink:"/diva-docs/docs/Development/Contribution/issues-and-prs",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"issues-and-prs",title:"Issues and pull request"},sidebar:"divaSidebar",previous:{title:"How you can help",permalink:"/diva-docs/docs/Development/Contribution/introduction"},next:{title:"Committing changes",permalink:"/diva-docs/docs/Development/Contribution/commits"}},c={},p=[{value:"Creating an issue",id:"creating-an-issue",level:2},{value:"Sending a pull Request",id:"sending-a-pull-request",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"issues-and-pull-request"},"Issues and pull request"),(0,i.kt)("p",null,"We are really excited that you are interested in contributing to DIVA.\nWhen contributing to this repository, please first discuss the change you wish to make via issue, email, or any other\nmethod with the owners of this repository before making a change."),(0,i.kt)("h2",{id:"creating-an-issue"},"Creating an issue"),(0,i.kt)("p",null,"In an issue you can propose your ideas or report a bug in the system.\nDescribe briefly and clearly in your issue what the purpose of your contribution is. Furthermore, the predefined labels\nimprove the understanding of your intentions and help to more precisely define the scope of your changes.\nAdhere to the template for issues, it will assist you in providing all the necessary information that will help us to\ninvestigate your inquiry faster. IN short, the common rules are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Give your issue a short and concise title"),(0,i.kt)("li",{parentName:"ul"},"Clearly indicate, if you report a bug or propose a feature"),(0,i.kt)("li",{parentName:"ul"},"Try to provide the scope of the issue, if known (service, web client, JSON schema ...)"),(0,i.kt)("li",{parentName:"ul"},"Very important is the information about your platform, DIVA version and how you execute the system")),(0,i.kt)("h2",{id:"sending-a-pull-request"},"Sending a pull Request"),(0,i.kt)("p",null,"The DIVA core contributor team is monitoring for pull requests. We will review your pull request and either merge it, propose changes to it,\nor close it with a reason."),(0,i.kt)("p",null,"If you have chosen to make a pull request after we have discussed your concern in an issue or other communication channel,\nfollow the rules below to incorporate your changes into DIVA."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create your fork of the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/FraunhoferISST/diva"},"DIVA repository"),". You can learn more about\n",(0,i.kt)("a",{parentName:"li",href:"https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github"},"How to Contribute to an Open Source Project on GitHub")),(0,i.kt)("li",{parentName:"ul"},"When issuing PR's, make your changes in a new git branch based on ",(0,i.kt)("inlineCode",{parentName:"li"},"dev")),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"master")," branch is a snapshot of the latest stable release. All development should be done in dedicated branches.\nDo not submit PR's against the ",(0,i.kt)("inlineCode",{parentName:"li"},"master")," branch."),(0,i.kt)("li",{parentName:"ul"},"Don't be afraid to commit frequently. Just make sure to follow our ",(0,i.kt)("a",{parentName:"li",href:"commits"},"commit convention")," "),(0,i.kt)("li",{parentName:"ul"},"Update the corresponding README.md with details of changes, this includes new environment variables, exposed ports, useful file locations and other information."),(0,i.kt)("li",{parentName:"ul"},"Always update OpenAPI specification of the corresponding service, if any changes to the REST API were applied"),(0,i.kt)("li",{parentName:"ul"},"Lint the code and follow our source code ",(0,i.kt)("a",{parentName:"li",href:"code-styles"},"style guide"),", if applicable"),(0,i.kt)("li",{parentName:"ul"},"Increase the version numbers in language specific file (e.g. package.json) and corresponding ",(0,i.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," file to the new version that this\nPull Request would represent. The versioning scheme we use is ",(0,i.kt)("a",{parentName:"li",href:"http://semver.org/"},"SemVer"),"."),(0,i.kt)("li",{parentName:"ul"},"Propose your changes to be included in this documentation. Contribute in the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/FraunhoferISST/diva-docs"},"documentation repository")," according to the same principle "),(0,i.kt)("li",{parentName:"ul"},"You may merge the Pull Request in once you have the sign-off of the core team and the pipeline check are completed, or if you\ndo not have permission to do that, you may request the team to merge it for you.")))}m.isMDXComponent=!0}}]);