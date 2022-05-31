"use strict";(self.webpackChunkdiva_docs=self.webpackChunkdiva_docs||[]).push([[6584],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2506:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var a,o=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],s={id:"configuration",title:"Configuration"},c=void 0,d={unversionedId:"Deployment/configuration",id:"Deployment/configuration",title:"Configuration",description:"When building DIVA we rely on established opens source solutions for creating a scalable and transparent architecture.",source:"@site/docs/03-Deployment/03-configuration.md",sourceDirName:"03-Deployment",slug:"/Deployment/configuration",permalink:"/diva-docs/docs/next/Deployment/configuration",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"configuration",title:"Configuration"},sidebar:"divaSidebar",previous:{title:"Docker Deployment",permalink:"/diva-docs/docs/next/Deployment/docker"},next:{title:"Prerequisites",permalink:"/diva-docs/docs/next/Development/prerequisites"}},p={},m=[{value:"Keycloak",id:"keycloak",level:2},{value:"Environment",id:"environment",level:3},{value:"Realm",id:"realm",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Users Management",id:"users-management",level:3},{value:"Kong Gateway",id:"kong-gateway",level:2},{value:"Declarative Configuration",id:"declarative-configuration",level:3},{value:"Web Client",id:"web-client",level:2}],u=(a="Badge",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)}),h={toc:m};function k(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When building DIVA we rely on established opens source solutions for creating a scalable and transparent architecture.\nWe try to pick the best technologies like MongoDB, Elasticsearch or Kafka and others for communication of internal\ncomponents and persistent storage to focus on DIVA specific logic. Since we cannot know in which environments DIVA could\nbe deployed, we do not want to make strict assumptions about the necessary configuration of the external software."),(0,r.kt)("p",null,"Potentially, all external components can be configured flexibly. You can deploy and scale them where and how you want.\nThe only requirement is - our DIVA internal components still know how to connect to the external components.\nThe whole system can be configured through the environment variables.\nYou can customize all variables in ",(0,r.kt)("inlineCode",{parentName:"p"},"docker/.env"),". For more specific requirements, you can also set the variables for individual services.\nThe variables are documented in corresponding README's."),(0,r.kt)("p",null,"In the following we will go through the main configuration steps and learn how to best prepare DIVA for production environment."),(0,r.kt)("h2",{id:"keycloak"},"Keycloak"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.keycloak.org/"},"Keycloak")," is a popular Open Source identity and access management software. In DIVA v2.2 we\nintegrated Keycloak to 1) reuse enterprise ready identity and user account management that Keycloak provides out of the box and\n2) to open for the companies the possibility to configure more granular access and authentication flow in DIVA.\nIn this guide we assume that you are already familiar with the basic concepts of Keycloak."),(0,r.kt)("p",null,"DIVA is shipped with already ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FraunhoferISST/diva/blob/main/core/keycloak/default-realm.json"},"preconfigured"),"\nKeycloak 15 instance that can be started up directly with the other components. You will\nfind more details in the ",(0,r.kt)("a",{parentName:"p",href:"docker"},"Docker guide"),". The provided configuration has a realm with all necessary\nsettings to accept Web-Client connections and authorize users. Nevertheless, this configuration must be optimized for\nproduction environment to improve the security setting."),(0,r.kt)("p",null,"DIVA can also be used with own managed Keycloak instance. In this case you just have to configure ",(0,r.kt)("a",{parentName:"p",href:"#web-client"},"Web client")," and\n",(0,r.kt)("a",{parentName:"p",href:"#kong-gateway"},"API Gateway")," to work with your Keycloak."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Default realm configuration")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The provided configuration is very minimal and has only a set of features required for DIVA to function properly. You have\nto adjust the security setting corresponding to your policies and enable further features like emailing through advanced\nKeycloak configuration."))),(0,r.kt)("h3",{id:"environment"},"Environment"),(0,r.kt)("p",null,"First, Keycloak must be configured in Docker through the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Deployment/docker#environment-variables#environment-variables"},"environment variables"),".\nTo do this, we need to explicitly tell Keycloak in your ",(0,r.kt)("inlineCode",{parentName:"p"},"docker/.env")," on which URL the instance is running.\nFor example, if you plan to deploy Keycloak on ",(0,r.kt)("inlineCode",{parentName:"p"},"https://diva.com/auth/"),", we set the variable as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dotenv"},"KEYCLOAK_FRONTEND_URL=https://diva.com/auth/\n")),(0,r.kt)("p",null,"Below is the list of important variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dotenv"},"KEYCLOAK_PORT=7000\nKEYCLOAK_USER=admin\nKEYCLOAK_PASSWORD=my_secure_password\nKEYCLOAK_DB_USER=keycloak\nKEYCLOAK_DB_PASSWORD=my_secure_password\n")),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Change credentials")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Make sure to use secure Keycloak and Postgres usernames and passwords passed through the ENV's!"))),(0,r.kt)("h3",{id:"realm"},"Realm"),(0,r.kt)("p",null,"The pre-configured realm is automatically loaded into DIVA Keycloak at startup and has a client for DIVA Web app.\nThe default names for the realm and client are ",(0,r.kt)("inlineCode",{parentName:"p"},"diva-kc-realm")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"diva-kc-client"),". This names are not mandatory and\ncan be changed. You have only to reflect the name changes in the ",(0,r.kt)("a",{parentName:"p",href:"#web-client"},"Web Client configuration"),"."),(0,r.kt)("p",null,"To restrict access to the DIVA Keycloak, the redirect and origin URL's must be adjusted in the client. For this we have to\nnavigate to Keycloak admin console on ",(0,r.kt)("inlineCode",{parentName:"p"},"https://diva.com/auth/admin/master/console/#/realms/diva-kc-realm")," and\nunder ",(0,r.kt)("strong",{parentName:"p"},"Clients")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"diva-kc-client")," -> ",(0,r.kt)("strong",{parentName:"p"},"Settings")," set the ",(0,r.kt)("strong",{parentName:"p"},"Valid Redirect URIs")," and ",(0,r.kt)("strong",{parentName:"p"},"Web Origins")," options.\nThese options must contain URL's under which the Web-client can be reached. For example if the client is deployed on ",(0,r.kt)("inlineCode",{parentName:"p"},"https://diva.com/"),",\nwe set the setting like follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Valid Redirect URIs: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://diva.com*")),(0,r.kt)("li",{parentName:"ul"},"Web origins: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://diva.com"))),(0,r.kt)("p",null,"For the local development environment all values can be used as provided in the default configuration."),(0,r.kt)("h3",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"The Kong API Gateway uses JWT tokens issued by Keycloak to authenticate users for further access to the DIVA\nAPI. By default, we use tokens with RS256 signature algorithm with default expiration policies. The Web Client checks the token validity every\n",(0,r.kt)("strong",{parentName:"p"},"60")," seconds."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you change token settings in Keycloak, probably the adjustment in the API Gateway will be required. For more details refer\nto ",(0,r.kt)("a",{parentName:"p",href:"#kong-gateway"},"Kong configuration"),"."))),(0,r.kt)("h3",{id:"users-management"},"Users Management"),(0,r.kt)("p",null,"DIVA uses Keycloak ",(0,r.kt)("strong",{parentName:"p"},"only")," as identity management and log in service. That means all users date except ",(0,r.kt)("inlineCode",{parentName:"p"},"email")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"password"),"\nare still managed in DIVA. DIVA users have additional fields like ",(0,r.kt)("inlineCode",{parentName:"p"},"username"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"jobTitle"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"company")," etc. and a profile image.\nAll this data can be edited only in DIVA Web-client and the changes does not affect Keycloak users state."),(0,r.kt)("p",null,"The users from Keycloak are transferred to DIVA at login or register. Each time someone logs in or registers via Keycloak,\nthe user data is updated in DIVA or a new user is created, if it does not yet exist in DIVA. This means that email and password can\nbe updated in Keycloak, but only email and password."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Users attributes")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Please note that we only import the ",(0,r.kt)("strong",{parentName:"p"},"email")," of the keycloak user in DIVA.\nThe changes of other users attributes in DIVA do not affect Keycloak and vice versa."))),(0,r.kt)("h2",{id:"kong-gateway"},"Kong Gateway"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://konghq.com/kong/"},"Kong")," API Gateway acts as a secure access point to the backend services. It is an abstraction layer for the REST API's\nof the individual services used by our ",(0,r.kt)("a",{parentName:"p",href:"#web-client"},"Web client"),". Gateway provides an authentication mechanism and accepts\nrequests only from the clients with a valid ",(0,r.kt)("a",{parentName:"p",href:"https://jwt.io/"},"JWT"),". So the gateway is the security layer in the\nentire system and should be the only component accessible on the Internet. The backend of the system should always run\nbehind the gateway, since the services themselves do not implement any authentication."),(0,r.kt)("p",null,"As of DIVA v2.2 we use Keycloak as identity provider and user authorization service.\nThe client sends the JWT tokens created by Keycloak in each request. Kong uses the token to authenticate the\nuser by checking the token signature with the Keycloak public key."),(0,r.kt)("p",null,"This is the default flow for authorization and authentication by Keycloak and Kong, but it can be flexibly adjusted.\nIf e.g. a different algorithm is used in Keycloak for token creation, Kong configuration must be adjusted accordingly so\nthat Kong can correctly authenticate a user."),(0,r.kt)("h3",{id:"declarative-configuration"},"Declarative Configuration"),(0,r.kt)("p",null,"The Kong Gateway upstream services are configured through the declarative ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FraunhoferISST/diva/blob/master/core/kong-gateway/kong.yml"},(0,r.kt)("inlineCode",{parentName:"a"},"kong.yml")),".\nHere you can regulate access to the service and enable or disable authentication for some routes or methods.\nTo understand the configuration, we recommend reading the documentation on Kong."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"kong.yml")," contains configuration that is in no way suitable for production environment and is only useful for\nlocal development. We strongly encourage you to create and use other rather appropriate declarative configuration. As a baseline we\nprovide you with an example configuration in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FraunhoferISST/diva/blob/master/core/kong-gateway/kong.production.yml"},(0,r.kt)("inlineCode",{parentName:"a"},"kong.production.yml")),"."),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Exposed credentials")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"All sensitive information in default ",(0,r.kt)("inlineCode",{parentName:"p"},"kong.yml")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"kong.production.yml")," is exposed on GitHub. Make sure to not copy and paste any secrets or passwords\nfrom the default publicity visible configurations!"))),(0,r.kt)("p",null,"When deploying with Docker, you can easily switch between configurations with the ",(0,r.kt)("inlineCode",{parentName:"p"},"KONG_DECLARATIVE_CONFIG")," environment variable.\nPlease read more in our ",(0,r.kt)("a",{parentName:"p",href:"../deployment/docker#environment-variables"},"Docker guide")," about environment variables. For example,\nyou can place your configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},"core/kong-gateway/my-production-config.yml")," and set the ENV in your ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dotenv"},"KONG_DECLARATIVE_CONFIG=my-production-config.yml\n")),(0,r.kt)("p",null,"The next important point is that Kong needs to know the Keycloak token issuer for authentication. The field ",(0,r.kt)("inlineCode",{parentName:"p"},"iss")," in\nKeycloak generated token depends on how ",(0,r.kt)("a",{parentName:"p",href:"#keycloak"},"Keycloak is configured")," and on which URL it lives. Fo example, if the\nKeycloak instance is located on ",(0,r.kt)("inlineCode",{parentName:"p"},"https://my.kc.domain.com"),", you have to adjust the following everywhere authentication is required:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'plugins:\n  - name: jwt-keycloak\n    config:\n      allowed_iss: [ "https://my.kc.domain.com/auth/realms/<realm-name>" ]\n')),(0,r.kt)("p",null,"And again, ",(0,r.kt)("inlineCode",{parentName:"p"},"realm-name")," depends on how your Keycloak is configured to be used in DIVA. In the default configuration\nshipped with DIVA the realm name is ",(0,r.kt)("inlineCode",{parentName:"p"},"diva-kc-realm"),". In general the ",(0,r.kt)("inlineCode",{parentName:"p"},"iss")," URL origin part should correspond to with\n",(0,r.kt)("inlineCode",{parentName:"p"},"KEYCLOAK_FRONTEND_URL")," ENV specified URL origin.\nThe resulting URL is used from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gbbirkisson/kong-plugin-jwt-keycloak"},(0,r.kt)("inlineCode",{parentName:"a"},"kong-plugin-jwt-keycloak")),"\nto fetch the Keycloak public key and authenticate the user. It is important to note, that if you change the JWT token creation\nin Keycloak (e.g. signature algorithm), the provided token authentication may fail and you have to fix it on your own in your\n",(0,r.kt)("inlineCode",{parentName:"p"},"my-production-config.yml")," or create an issue and request the changes."),(0,r.kt)("h2",{id:"web-client"},"Web Client"),(0,r.kt)("p",null,"DIVA is a complex system with many services and different interfaces that drive the core functionality of the system.\nOperating the system requires a solid understanding of the underlying architecture and the technologies used.\nTo enable everyone to enjoy the benefits of data management with DIVA, we have implemented a web-based client application."),(0,r.kt)("p",null,"The client communicates with the backend through Kong API Gateway and requires the user to be authenticated with a valid JWT."),(0,r.kt)("p",null,"Once loaded, the client performs the identity check through Keycloak and initializes the user data in the browser, if user exists\nand is already logged in, or navigates to login page. There the authorization to the system is managed by ",(0,r.kt)("a",{parentName:"p",href:"#keycloak"},"Keycloak"),"."),(0,r.kt)("p",null,"For the web client, in order to be able to execute identity verification and access API Gateway, corresponding information\nshould be configured.\nThe app can be configured by several environment variables and is shipped from a containerized Nginx server over the internet to the browser. The communication\non ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," is not possible anymore and you have at least to configure correct URL's where client can rich Keycloak and API Gateway\ninstances."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"ENV's on runtime")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Yes, you do not have to rebuild the web-client Docker image every time any of the ENV's changes. The environment variables are injected\nin the app source code on each container start. You can adjust all accepted ENV's at any time without the need to build own image, just restart the container!"))),(0,r.kt)("p",null,"In the following we will list and explain environment variables that can be configured in you ",(0,r.kt)("inlineCode",{parentName:"p"},"docker/.env")," and are automatically\ninjected on runtime:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"VUE_APP_API_GATEWAY_URL"),"- the client must know how to reach the gateway and uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"VUE_APP_API_GATEWAY_URL")," environment variable as the base URL. You can\nlearn more about how to deploy web-client and the Gateway with reverse proxy in our ",(0,r.kt)("a",{parentName:"p",href:"../deployment/docker#deployment-with-nginx-reverse-proxy"},"Docker guide"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"VUE_APP_KEYCLOAK_URL")," - the client must also know how to reach the Keycloak instance for user authorization.\nHere applies the same, in production the variable must be set correctly so that the client can communicate with Keycloak.\nProbably you will have your own managed Keycloak instance running. If not, we give an example on how to deploy Keycloak behind reverse\nproxy in our ",(0,r.kt)("a",{parentName:"p",href:"../deployment/docker#deployment-with-nginx-reverse-proxy"},"Docker guide"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"VUE_APP_KEYCLOAK_REALM")," - if you have your own managed Keycloak instance, you can specify the realm that the client should\nuse for user authentication. We ship DIVA with already preconfigured Keycloak instance that you can adjust. Otherwise, the default value ca be left as is.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"VUE_APP_KEYCLOAK_CLIENT_ID")," - the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," of the Keycloak client that regulates the permission for our web-client.\nNo need to change this variable, if you use the Keycloak instance shipped with DIVA as is and do not have own managed Keycloak.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"VUE_APP_REGISTER_AVAILABLE")," ",(0,r.kt)(u,{type:"tip",text:"v3",vertical:"middle",mdxType:"Badge"})," - by default the Web Client login page provides\na link to the register page on Keycloak. If you want to disable the registration in Keycloak, this link can be deactivated and hidden.\nJust set ",(0,r.kt)("inlineCode",{parentName:"p"},"VUE_APP_REGISTER_AVAILABLE")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", empty string or let the variable empty. For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"VUE_APP_REGISTER_AVAILABLE=false\n# or\nVUE_APP_REGISTER_AVAILABLE\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"VUE_APP_DISABLE_PATCH")," ",(0,r.kt)(u,{type:"tip",text:"v3.3.1",vertical:"middle",mdxType:"Badge"})," - in the environments with the specific security\npolicies it is possible to disable PATCH requests. In this case all PATCH API requests will be mapped to POST. To disable PATCH requests\nthe variable should be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", e.g.:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"VUE_APP_DISABLE_PATCH=true\n")))),(0,r.kt)("p",null,"You can read more about how to use environment variables in the ",(0,r.kt)("a",{parentName:"p",href:"../deployment/docker#environment-variables"},"Docker guide"),".\nPlease note that for the client to successfully and securely connect to Keycloak in the production environment and authenticate\nin Kong, Kong and Keycloak must be configured correctly as well. At this point we refer the reader to the corresponding\n",(0,r.kt)("a",{parentName:"p",href:"#kong-gateway"},"Kong Gateway")," and ",(0,r.kt)("a",{parentName:"p",href:"#keycloak"},"Keycloak")," guides."))}k.isMDXComponent=!0}}]);