"use strict";(self.webpackChunkdiva_docs=self.webpackChunkdiva_docs||[]).push([[1754],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},583:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={id:"prerequisites",title:"Prerequisites"},u="Prerequisites",s={unversionedId:"Deployment/prerequisites",id:"Deployment/prerequisites",title:"Prerequisites",description:"DIVA can be deployed anywhere you can run containers, be it your laptop or cloud infrastructure.",source:"@site/docs/03-Deployment/02-prerequisites.md",sourceDirName:"03-Deployment",slug:"/Deployment/prerequisites",permalink:"/diva-docs/docs/next/Deployment/prerequisites",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"prerequisites",title:"Prerequisites"},sidebar:"divaSidebar",previous:{title:"Introduction",permalink:"/diva-docs/docs/next/Deployment/introduction"},next:{title:"Docker Deployment",permalink:"/diva-docs/docs/next/Deployment/docker"}},c={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Find latest release",id:"find-latest-release",level:2},{value:"Access to container registry",id:"access-to-container-registry",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"DIVA can be deployed anywhere you can run containers, be it your laptop or cloud infrastructure.\nThe following instructions are not mandatory, it should be possible to use other operating systems or software versions, but we can not guarantee a flawless experience."),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"The following is a list of requirements that must be met in order to work comfortably with all DIVA components during local development or deployment:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Linux distribution (We recommend to use Ubuntu 18.04 or 20.04)"),(0,i.kt)("li",{parentName:"ul"},"Docker 20.10.x"),(0,i.kt)("li",{parentName:"ul"},"Docker Compose 1.28.x")),(0,i.kt)("p",null,"The requirements for the technical specification of the machine depend strongly on what you intend to do with DIVA.\nOn our development machines we run DIVA without any problems with the following specifications:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"i7 with 4 physical CPUs"),(0,i.kt)("li",{parentName:"ul"},"16GB RAM"),(0,i.kt)("li",{parentName:"ul"},"150GB SSD")),(0,i.kt)("p",null,"The production environment for DIVA must of course take into account a much higher volume of storage capacity requirements"),(0,i.kt)("h2",{id:"find-latest-release"},"Find latest release"),(0,i.kt)("p",null,"All DIVA repositories are freely accessible on GitHub and can be cloned without authentication. Below is the list of existing repos:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/FraunhoferISST/diva"},"diva")," - DIVA System Core containing all necessary components"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/FraunhoferISST/diva-docs"},"diva-docs")," - Repository for this documentation")),(0,i.kt)("p",null,"You can always find the latest Docker distribution under ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FraunhoferISST/diva/releases"},"releases"),".\nFollow our ",(0,i.kt)("a",{parentName:"p",href:"docker"},"docker guide")," to  deploy DIVA."),(0,i.kt)("h2",{id:"access-to-container-registry"},"Access to container registry"),(0,i.kt)("p",null,"All docker images are continuously built in the CI\npipeline and publicly available to pull without authentication in GitHub container registry."))}m.isMDXComponent=!0}}]);