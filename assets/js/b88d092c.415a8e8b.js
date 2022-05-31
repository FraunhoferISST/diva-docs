"use strict";(self.webpackChunkdiva_docs=self.webpackChunkdiva_docs||[]).push([[3430],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=i,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3388:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var a,i=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],c={id:"web-client",title:"Web Client"},s=void 0,p={unversionedId:"Development/Architecture/web-client",id:"Development/Architecture/web-client",title:"Web Client",description:"DIVA is a complex system with many services and different interfaces that drive the core functionality of the system.",source:"@site/docs/04-Development/04-Architecture/06-web-client.md",sourceDirName:"04-Development/04-Architecture",slug:"/Development/Architecture/web-client",permalink:"/diva-docs/docs/next/Development/Architecture/web-client",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"web-client",title:"Web Client"},sidebar:"divaSidebar",previous:{title:"Gateway",permalink:"/diva-docs/docs/next/Development/Architecture/gateway"},next:{title:"Entities",permalink:"/diva-docs/docs/next/Development/Architecture/entities"}},d={},u=[{value:"Configuration",id:"configuration",level:2}],h=(a="Badge",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),m={toc:u};function y(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"DIVA is a complex system with many services and different interfaces that drive the core functionality of the system.\nOperating the system requires a solid understanding of the underlying architecture and the technologies used.\nTo enable everyone to enjoy the benefits of data management with DIVA, we have implemented a web-based client application."),(0,o.kt)("p",null,"The web application is a Vue 2 single page app and is currently the only client that allows managing DIVA Catalog through an intuitive and modern UI. For non-developers this is the only way to interact with the backend.\nMake sure to take a look at the ",(0,o.kt)("a",{parentName:"p",href:"../../user-docs/introduction"},"users guide"),"!"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://vuetifyjs.com/en/"},"Vuetify")," is used as the frontend framework.\nTherefore, the look & feel is basically determined by the material design pattern.\nNevertheless, we implement slight adjustments to the components to create an individual and recognizable form with a smoother and breezier feeling."),(0,o.kt)("p",null,"The web client project was originally created with vue-cli.\nMore information on how to run the client for local development can be found in the corresponding README.md."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In the near future we plan to update the client to Vue 3.\nWith this update will come new features, improved structure and design of the pages.\nThe update will depend on when ",(0,o.kt)("inlineCode",{parentName:"p"},"vuetify")," is Vue 3 ready."))),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"In this chapter we will discuss how to prepare the client application for execution.\nThe client communicates with the backend through Kong API Gateway and requires the user to be authenticated with a valid JWT.\nYou can read more about authentication flow in the ",(0,o.kt)("a",{parentName:"p",href:"gateway"},"API Gateway")," section."),(0,o.kt)("p",null,"Once loaded, the client performs the identity check through Keycloak and initializes the user data in the browser, if user exists\nand is already logged in, or navigates to login page.\nThere the authorization to the system is managed by ",(0,o.kt)("a",{parentName:"p",href:"keycloak"},"Keycloak"),".\nTo get access to the functionalities of the system the developers have to register first as well."),(0,o.kt)("p",null,"For the web client, in order to be able to execute identity verification and access API Gateway, corresponding information\nshould be configured.\nThe app can be configured by several environment variables. During development on your own machine, the default values should be completely sufficient.\nIn production, however, the built app is shipped in the container from a Nginx server over the internet to the browser. The communication\non ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost")," is not possible anymore and you have at least configure correct domains where client can rich Keycloak and API Gateway instances."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"ENV's on runtime")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Yes, you do not have to rebuild the web-client Docker image every time any of the ENV's changes.\nThe environment variables are injected in the app source code on each container start.\nYou can adjust all accepted ENV's at any time without the need to build own image, just restart the container!"))),(0,o.kt)("p",null,"In the following we will list and explain environment variables that can be set on runtime:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"VUE_APP_API_GATEWAY_URL"),"- the client must know how to reach the gateway. When working on the system locally, in most cases the gateway will be running on ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost"),"\nand the client will know, how to communicat to it. For more flexibility, the URL to the gateway can be configured\nthrough the environment variables. The client uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"VUE_APP_API_GATEWAY_URL")," environment variable as the base URL.\nThe variable can be set either in the local development environment directly when running with NPM or in Docker container. You can\nlearn more about how to deploy web-client and the Gateway with reverse proxy in our ",(0,o.kt)("a",{parentName:"p",href:"../../deployment/docker#deployment-with-nginx-reverse-proxy"},"Docker guide"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"VUE_APP_KEYCLOAK_URL"),"  ",(0,o.kt)(h,{type:"tip",text:"v2.2.0",vertical:"middle",mdxType:"Badge"})," - the client must also know how to reach the Keycloak instance for user authorization.\nHere the same applies, in production the variable must be set correctly so that the client can communicate with Keycloak.\nProbably you will have your own managed Keycloak instance running. If not, we give an example on how to deploy Keycloak behind reverse\nproxy in our ",(0,o.kt)("a",{parentName:"p",href:"../../deployment/docker#deployment-with-nginx-reverse-proxy"},"Docker guide"),". ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"VUE_APP_KEYCLOAK_REALM")," ",(0,o.kt)(h,{type:"tip",text:"v2.2.0",vertical:"middle",mdxType:"Badge"})," - if you have your own managed Keycloak instance, you can specify the realm that the client should\nuse for user authentication. We ship DIVA with already preconfigured Keycloak instance that you can adjust. Otherwise, the default value ca be left as is.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"VUE_APP_KEYCLOAK_CLIENT_ID")," ",(0,o.kt)(h,{type:"tip",text:"v2.2.0",vertical:"middle",mdxType:"Badge"})," - the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," of the Keycloak client that regulates the permission for our web-client.\nNo need to change this variable, if you use the Keycloak instance shipped with DIVA as is and do not have own managed Keycloak.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"VUE_APP_REGISTER_AVAILABLE")," ",(0,o.kt)(h,{type:"tip",text:"v3",vertical:"middle",mdxType:"Badge"})," - by default the Web Client login page provides\na link to the register page on Keycloak. If you want to disable the registration in Keycloak, this link can be deactivated and hidden.\nJust set ",(0,o.kt)("inlineCode",{parentName:"p"},"VUE_APP_REGISTER_AVAILABLE")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", empty string or let the variable empty. For example:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"VUE_APP_REGISTER_AVAILABLE=false\n# or\nVUE_APP_REGISTER_AVAILABLE\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"VUE_APP_DISABLE_PATCH")," ",(0,o.kt)(h,{type:"tip",text:"v3.3.1",vertical:"middle",mdxType:"Badge"})," - in the environments with the specific security\npolicies it is possible to disable PATCH requests. In this case all PATCH API requests will be mapped to POST. To disable PATCH requests\nthe variable should be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", e.g.:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"VUE_APP_DISABLE_PATCH=true\n")))),(0,o.kt)("p",null,"You can read more about how to use environment variables in the ",(0,o.kt)("a",{parentName:"p",href:"../../deployment/docker#environment-variables"},"Docker guide"),".\nPlease note that for the client to successfully and securely connect to Keycloak in the production environment and authenticate in Kong, Kong and Keycloak must be configured correctly as well.\nAt this point we refer the reader to the corresponding ",(0,o.kt)("a",{parentName:"p",href:"gateway"},"Kong Gateway")," and ",(0,o.kt)("a",{parentName:"p",href:"keycloak"},"Keycloak")," guides."))}y.isMDXComponent=!0}}]);