"use strict";(self.webpackChunkdiva_docs=self.webpackChunkdiva_docs||[]).push([[8194],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2941:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={id:"signup",title:"Sign up / Sign in"},c="Sign up / Sign in",l={unversionedId:"User-Docs/signup",id:"User-Docs/signup",title:"Sign up / Sign in",description:"Identity management is provided by Keycloak.",source:"@site/docs/02-User-Docs/02-signup.md",sourceDirName:"02-User-Docs",slug:"/User-Docs/signup",permalink:"/docs/User-Docs/signup",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"signup",title:"Sign up / Sign in"},sidebar:"divaSidebar",previous:{title:"Introduction",permalink:"/docs/User-Docs/introduction"},next:{title:"Home-Page",permalink:"/docs/User-Docs/home"}},p={},u=[{value:"Sing Up",id:"sing-up",level:2},{value:"Sign In",id:"sign-in",level:2}],d={toc:u};function m(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sign-up--sign-in"},"Sign up / Sign in"),(0,r.kt)("p",null,"Identity management is provided by ",(0,r.kt)("a",{parentName:"p",href:"https://www.keycloak.org/"},"Keycloak"),".\nWhether you can register and log in depends on the Keycloak configuration.\nTo get more details regarding this topic, please contact your administrator."),(0,r.kt)("h2",{id:"sing-up"},"Sing Up"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Depending on your Keycloak configuration, this option may not be available."))),(0,r.kt)("p",null,"Perform the following steps to access Keycloak and sign up:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the DIVA web application (you can ask your administrator to provide you with the URL)"),(0,r.kt)("li",{parentName:"ol"},'On the login page click the button "Create new account". You will be redirected to our trusted Keycloak page.'),(0,r.kt)("li",{parentName:"ol"},"Enter your email address and password"),(0,r.kt)("li",{parentName:"ol"},'Click "Register" button')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DIVA login",src:n(7645).Z,width:"1848",height:"848"}),"\n",(0,r.kt)("img",{alt:"DIVA login",src:n(4139).Z,width:"1848",height:"787"})),(0,r.kt)("p",null,"After successful registration you will be logged in automatically."),(0,r.kt)("h2",{id:"sign-in"},"Sign In"),(0,r.kt)("p",null,"Perform the following steps to log in onto the DIVA application with your email and password:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the DIVA web application"),(0,r.kt)("li",{parentName:"ol"},'On the login page click the button "Login". You will be redirected to our trusted Keycloak page.'),(0,r.kt)("li",{parentName:"ol"},"Enter your email and password"),(0,r.kt)("li",{parentName:"ol"},'Click "Login" button')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DIVA login",src:n(3627).Z,width:"1848",height:"787"})),(0,r.kt)("p",null,"After successful login you will be automatically redirected to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/User-Docs/home"},"Home Page"),"."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Change your Username")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Initially, your username will be set to your email.\nIf you want a better experience, please change your username by visiting the ",(0,r.kt)("a",{parentName:"p",href:"user"},"User Details Page"),"."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Upload a profile image")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Visit the ",(0,r.kt)("a",{parentName:"p",href:"user"},"User Details Page")," to provide your account with further information or upload a profile picture."))))}m.isMDXComponent=!0},4139:function(e,t,n){t.Z=n.p+"assets/images/keycloak_register-4690e6a6ca707a3972b661d6537ceb95.png"},3627:function(e,t,n){t.Z=n.p+"assets/images/keycloak_signin-d1c3b1c4d63153936c9af1a9fd6c4d4c.png"},7645:function(e,t,n){t.Z=n.p+"assets/images/login-2c3676d867fe3174040847edcc8cc346.png"}}]);