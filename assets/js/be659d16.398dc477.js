"use strict";(self.webpackChunkdiva_docs=self.webpackChunkdiva_docs||[]).push([[9252],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1572:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var o,r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],c={id:"local-development",title:"Local Development"},s="Local Development",p={unversionedId:"Development/Development/local-development",id:"version-3.3.1/Development/Development/local-development",title:"Local Development",description:"In this chapter we will look at what is needed to develop existing services or create new ones locally on your own development machine.",source:"@site/versioned_docs/version-3.3.1/04-Development/03-Development/01-local-development.md",sourceDirName:"04-Development/03-Development",slug:"/Development/Development/local-development",permalink:"/diva-docs/docs/Development/Development/local-development",draft:!1,tags:[],version:"3.3.1",sidebarPosition:1,frontMatter:{id:"local-development",title:"Local Development"},sidebar:"divaSidebar",previous:{title:"Prerequisites",permalink:"/diva-docs/docs/Development/prerequisites"},next:{title:"Docker Deployment",permalink:"/diva-docs/docs/Development/Development/docker-deployment"}},m={},d=[],u=(o="CardLink",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),h={toc:d};function v(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"local-development"},"Local Development"),(0,i.kt)("p",null,"In this chapter we will look at what is needed to develop existing services or create new ones locally on your own development machine.\nThis guide is for the developers who want to actively contribute to the implementation of the system and assumes that the respective components must be run locally without Docker. Read this if you want to improve one of the existing components or add a new one."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Make sure to read the ",(0,i.kt)("a",{parentName:"p",href:"../prerequisites"},"prerequisites")," to know what do you need to be able to set up DIVA on your machine"))),(0,i.kt)("p",null,"DIVA consist of many components, each with it own requirements.\nAll components are provided with  corresponding readmes where you can find detailed descriptions of the requirements and execution instructions."),(0,i.kt)("p",null,"In general, a common routine will look like this: check out the necessary repository, change to the right folder, install dependencies and start the component.\nWhile there are system components that can run completely independently, most of our core services rely on Kafka or databases.\nFor example ",(0,i.kt)("a",{parentName:"p",href:"../architecture/web-client"},"Web client")," relies on ",(0,i.kt)("a",{parentName:"p",href:"../architecture/gateway"},"API Gateway"),", and the ",(0,i.kt)("a",{parentName:"p",href:"../architecture/gateway"},"API Gateway")," needs\nother services to be running.\nIn order to be able to work properly with the client, other services have to operate as well.\nTo avoid this problem, the necessary components such as Kafka, databases or other service can be run directly with Docker Compose.\nTherefore, we propose the following workflow for local development:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"We recommend you to specify a host name forwarding for Kafka. Please map ",(0,i.kt)("inlineCode",{parentName:"p"},"broker")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," file:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"127.0.0.1 localhost broker\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Spin up the system with Docker. Read our guide for ",(0,i.kt)("a",{parentName:"p",href:"docker-deployment"},"Docker deployment")," for further information"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd docker\n./up_core.sh\n")),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"It is not required to boot the complete system. If you are already familiar with the DIVA architecture, you can start only\nthese components that are required by corresponding dependent component"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Stop the component you want to work on. For example, if you want to develop on Resource Management, stop the corresponding container"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd docker\ndocker-compose stop resource-management\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now you can execute the service locally"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd code/services/resource-management\nnpm i\nnpm run dev\n")))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Due to docker network configuration not all services can talk to each other service.\nYou might also need to start other services locally without docker!"))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Elasticsearch Warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Elasticsearch uses a mmapfs directory by default to store its indices. The default operating system limits on mmap counts is likely to be too low, which may result in out of memory exceptions. Please configure your machine like described ",(0,i.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/vm-max-map-count.html"},"here")))),(0,i.kt)("p",null,"This is the general procedure, the details in the steps may vary depending on the specific component. From this point on,\nyou should learn more about DIVA architecture, know what to consider when developing services and other components, and\nhow to containerize the software. "),(0,i.kt)("div",{class:"grid grid-cols-1 md:grid-cols-2 gap-3"},(0,i.kt)("div",null,(0,i.kt)(u,{link:"/dev-docs/architecture",title:"Architecture overview",mdxType:"CardLink"},"Learn DIVA architecture to understand components relations")),(0,i.kt)("div",null,(0,i.kt)(u,{class:"fill",link:"/dev-docs/architecture/services.html#services",title:"Services development",mdxType:"CardLink"},"Learn the core principles of our core and FaaS Services")),(0,i.kt)("div",null,(0,i.kt)(u,{link:"/dev-docs/architecture/web-client.html",title:"Web client",mdxType:"CardLink"},"Build our Vue based web application")),(0,i.kt)("div",null,(0,i.kt)(u,{class:"fill",link:"/dev-docs/architecture/tooling.html#services",title:"DIVA tools",mdxType:"CardLink"},"Develop helpful tools for the every day life with DIVA"))))}v.isMDXComponent=!0}}]);