"use strict";(self.webpackChunkdiva_docs=self.webpackChunkdiva_docs||[]).push([[2629],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=p(n),m=o,u=h["".concat(c,".").concat(m)]||h[m]||d[m]||i;return n?a.createElement(u,r(r({ref:t},s),{},{components:n})):a.createElement(u,r({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6214:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],l={id:"docker",title:"Docker Deployment"},c=void 0,p={unversionedId:"Deployment/docker",id:"Deployment/docker",title:"Docker Deployment",description:"DIVA is built with a focus on scalability, modularization and expandability using a microservice architecture.",source:"@site/docs/03-Deployment/02-docker.md",sourceDirName:"03-Deployment",slug:"/Deployment/docker",permalink:"/diva-docs/docs/next/Deployment/docker",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"docker",title:"Docker Deployment"},sidebar:"divaSidebar",previous:{title:"Prerequisites",permalink:"/diva-docs/docs/next/Deployment/prerequisites"},next:{title:"Configuration",permalink:"/diva-docs/docs/next/Deployment/configuration"}},s={},d=[{value:"Environment Variables",id:"environment-variables",level:2},{value:"Deployment with Nginx Reverse Proxy",id:"deployment-with-nginx-reverse-proxy",level:2}],h={toc:d};function m(e){var t=e.components,l=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"DIVA is built with a focus on scalability, modularization and expandability using a microservice architecture.\nOur team relies on the latest technologies for container-based development and deployment of the system using Docker.\nAll system components are containerized and have current images that are continuously built in the CI pipeline.\nIn this guide we will learn how to get DIVA running with ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Make sure to read the ",(0,i.kt)("a",{parentName:"p",href:"prerequisites"},"prerequisites")," to know what you need to get started with Docker and Docker Compose.\nAlso note that deployment with docker is not suitable for Production.\nNonetheless, it is convenient for local development  environment to quickly spin up most of the components like Kafka, Gateway and other services."))),(0,i.kt)("p",null,"All things related to docker are located in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FraunhoferISST/diva/blob/master/docker"},(0,i.kt)("inlineCode",{parentName:"a"},"docker/")),"\ndirectory. You can find this folder in the source code as well as in the release distribution.\nHere we have prepared a script which you can use to directly boot all components, with default environment setup.\nIf you need a quick start, just execute the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# navigate to docker/ directory\ncd docker\n# spin up the system\n./up_core.sh\n")),(0,i.kt)("p",null,"The script starts all core services, profiling workflow engine, DSC and the web client application.\nIt may take some time until all components are up and running.\nBy default, the client should be available on ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:70"),"."),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Container credentials")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Bei default containers start with dummy values for credentials (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"admin admin")," for MongoDB) what is completely fine for local development environment.\nIf you plan to make DIVA available publicity through the deployment with Docker, make sure to change all sensitive data.\nRefer to the ",(0,i.kt)("a",{parentName:"p",href:"#environment-variables"},"Environment variables")," section."))),(0,i.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,i.kt)("p",null,"First with the environment variables you have the possibility to propagate settings to the containers on run time.\nThe ENV's are used to configure exposed ports, Kafka topics, database connections, credentials etc.\nThis makes the deployment  of containers more flexible and provides you a way to configure the environment without potential collisions with other software on your machines."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Ports allocation")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"DIVA components allocate many default ports like 80, 3000 or 27017.\nTo avoid potential conflicts on deployment, most of the allocated ports can be configured in ",(0,i.kt)("inlineCode",{parentName:"p"},"docker/.env")," file."))),(0,i.kt)("p",null,"All available configuration possibilities are listed in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FraunhoferISST/diva/blob/master/docker/.env.default"},(0,i.kt)("inlineCode",{parentName:"a"},"docker/.env.default"))," file.\nThis ENV template is used by default to boot the system with ",(0,i.kt)("inlineCode",{parentName:"p"},"up_core.sh")," script.\nTo override default settings, create a ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker/")," directory and copy the contents of ",(0,i.kt)("inlineCode",{parentName:"p"},".env.default")," to it.\nThere you can adjust the deployment, should change all passwords and usernames and e.g. change the port of the web application as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-env"},"WEB_CLIENT_PORT=90\n")),(0,i.kt)("p",null,"In the development environment, the configuration in ",(0,i.kt)("inlineCode",{parentName:"p"},".env.default"),' and other templates are quite sufficient and must work immediately.\nHowever, in order to make DIVA "production-ready" in Docker, we need to do some tweaks. Just follow the configuration guides for\n',(0,i.kt)("a",{parentName:"p",href:"/docs/Development/Architecture/keycloak#configuration"},"Keycloak"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/Development/Architecture/gateway#configuration"},"API Gateway")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/Development/Architecture/web-client#configuration"},"Web-Client"),", in that order."),(0,i.kt)("h2",{id:"deployment-with-nginx-reverse-proxy"},"Deployment with Nginx Reverse Proxy"),(0,i.kt)("p",null,"As mentioned earlier, docker is not optimal for production deployment.\nHowever, it could be useful to quickly deliver to the world a DIVA instance in an experimental environment.\nFor this purpose, we provide an example reverse proxy configuration in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FraunhoferISST/diva/blob/master/docker/proxy/"},(0,i.kt)("inlineCode",{parentName:"a"},"docker/proxy/"))," that allows to easily expose DIVA with Docker Compose."),(0,i.kt)("p",null,"This simple nginx reverse proxy configuration serves as an example of how Diva could be exposed to the world.\nThe proxy configuration in ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx.example.conf")," is minimalistic and ",(0,i.kt)("strong",{parentName:"p"},"not")," suitable for production!"),(0,i.kt)("p",null,"In general, the ",(0,i.kt)("a",{parentName:"p",href:"/docs/Development/Architecture/web-client"},"Web client")," application and the ",(0,i.kt)("a",{parentName:"p",href:"/docs/Development/Architecture/gateway"},"API Gateway"),"\nshould be accessible through the network behind the proxy.\nIn addition, the client needs a running ",(0,i.kt)("a",{parentName:"p",href:"/docs/Development/Architecture/keycloak"},"Keycloak")," instance, which does not necessarily have to be delivered by the same reverse proxy server.\nSo the rule is that only 3 DIVA components must be accessible over the internet - Web Client, Kong Gateway and Keycloak.\nFurthermore, for the Web-Client app the access to API Gateway and Keycloak should be configured through the ",(0,i.kt)("a",{parentName:"p",href:"#environment-variables"},"environment variables")," on runtime."),(0,i.kt)("p",null,"In the following we will go through an example configuration, which must give a rough idea of how DIVA could be delivered with a secured reverse proxy server.\nTo make things look more realistic, we will not be working with ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost"),". We will simply imagine the domain name ",(0,i.kt)("inlineCode",{parentName:"p"},"diva.com")," and map it to ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost"),"\nin ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," on our machine:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"127.0.0.1 localhost diva.com\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Place your SSL certificate and key in ",(0,i.kt)("inlineCode",{parentName:"li"},"./certs"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Use letsencrypt, openssl or other tool of your choice. Here is a command that can quickly generate the required keys for you:"),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre"},"openssl req -x509 -sha256 -nodes -newkey rsa:4096 -keyout private.key -out certificate.crt\n")))),(0,i.kt)("li",{parentName:"ol"},"Create ",(0,i.kt)("inlineCode",{parentName:"li"},"nginx.conf")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"proxy/")," and copy the contents of ",(0,i.kt)("inlineCode",{parentName:"li"},"nginx.example.conf")," to it",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"In this file you can add more advanced configuration, e.g. caching.\nPlease note that your have to update the client app ENV's according to the changes in the config you made!\nIn the example configuration we instruct nginx to proxy to the underlying components like follows:"),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-nginx",metastring:"configuration",configuration:!0},"# API Gateaway should be accessable on https://diva.com/api/ endpoint\nlocation /api/ {\n      proxy_pass http://kong:8000/; # the requests are directed to the Kong API Gateaway container\n  }\n")),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-nginx",metastring:"configuration",configuration:!0},"# Keyclocak should be accessable on https://diva.com/auth/\nlocation /auth/ {\n      proxy_pass http://keycloak:8080/auth/; # the requests are directed to the Keycloak container, it could also be a URL of your own Keycloak instance\n  }\n")),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-nginx",metastring:"configuration",configuration:!0},"# And finally the client itself, all othe request on https://diva.com/ should go to the web app\nlocation / {\n      proxy_pass http://web-client:70;\n  }\n")))),(0,i.kt)("li",{parentName:"ol"},"Create ",(0,i.kt)("inlineCode",{parentName:"li"},".env")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"proxy/")," and copy the contents from ",(0,i.kt)("inlineCode",{parentName:"li"},".env.default")," to it",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"You can choose a port for the proxy server in ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"PROXY_PORT")," with default ",(0,i.kt)("inlineCode",{parentName:"p"},"443")," value."))),(0,i.kt)("li",{parentName:"ol"},"Set Web-Client ENV's and restart container",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Update the ",(0,i.kt)("inlineCode",{parentName:"p"},"VUE_APP_API_GATEWAY_URL")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"VUE_APP_KEYCLOAK_URL")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"docker/.env")," corresponding to your nginx configuration.\nMake sure the client can access all API endpoints and communicate with Keycloak. According to provided default configuration\nthe variables should be set for example as ",(0,i.kt)("inlineCode",{parentName:"p"},"VUE_APP_API_GATEWAY_URL=https://diva/api/")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"VUE_APP_KEYCLOAK_URL=https://diva.com/auth/")))),(0,i.kt)("li",{parentName:"ol"},"Set Keycloak ENV's and restart container (optional)",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"This step is only applicable if you do not have your own managed Keycloak instance running. In that case you have to update\nin your ",(0,i.kt)("inlineCode",{parentName:"p"},"docker/.env"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"KEYCLOAK_FRONTEND_URL=https://diva.com/auth/"),"."))),(0,i.kt)("li",{parentName:"ol"},"Create Kong production config and restart container",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"In ",(0,i.kt)("inlineCode",{parentName:"p"},"core/kong-gateway")," you have to create production config (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"kong.prod.yml"),"). Your can copy the contents from\n",(0,i.kt)("inlineCode",{parentName:"p"},"core/kong-gateway/kong.production.yml")," to it, but have at least to set everywhere the correct Keycloak token issuer:"),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre"},'plugins:\n   - name: jwt-keycloak\n     config:\n       allowed_iss: [ "https://diva.com/auth/realms/my-realm" ]\n')),(0,i.kt)("p",{parentName:"blockquote"},"For more details refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/Development/Architecture/gateway"},"Kong API Gateway configuration")))),(0,i.kt)("li",{parentName:"ol"},"Make sure DIVA Core is already running",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"You can spin up anything needed with ",(0,i.kt)("inlineCode",{parentName:"p"},"./up_core.sh")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"docker/")))),(0,i.kt)("li",{parentName:"ol"},"Run nginx proxy server in ",(0,i.kt)("inlineCode",{parentName:"li"},"proxy/")," with:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")))),(0,i.kt)("p",null,"On your local machine with the default nginx config the Web client is available on ",(0,i.kt)("inlineCode",{parentName:"p"},"https://diva.com/"),".\nNow just visit the URL, log in to the application through Keycloak, and make sure that the authentication does not work!\nYou will probably see something like:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"DIVA Login Error",src:n(9102).Z,width:"446",height:"131"})),(0,i.kt)("p",null,"And this is fine. Since Kong and Keycloak are running in the container in Docker and we are working with ",(0,i.kt)("inlineCode",{parentName:"p"},"diva.com")," fake domain, which maps to ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost"),", Kong cannot communicate with Keycloak for authentication.\nIn the real production environment this wouldn't be an issue, as Keycloak would be running on a real URL. Make sure to take a look at ",(0,i.kt)("a",{parentName:"p",href:"/docs/Deployment/Configuration#kong-gateway"},"API Gateway"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/Deployment/Configuration#keycloak"},"Keycloak")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/Deployment/Configuration#web-client"},"Web-client")," configurations to better prepare DIVA for production."))}m.isMDXComponent=!0},9102:function(e,t){t.Z="data:image/png;base64,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"}}]);