"use strict";(self.webpackChunkdiva_docs=self.webpackChunkdiva_docs||[]).push([[9545],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3068:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"business-rules",title:"Business Rules"},l=void 0,u={unversionedId:"User-Docs/Admin/business-rules",id:"User-Docs/Admin/business-rules",title:"Business Rules",description:"DIVA provides an RESTful API that allows an administrator to create, update and delte so called business rules.",source:"@site/docs/02-User-Docs/09-Admin/05-business-rules.md",sourceDirName:"02-User-Docs/09-Admin",slug:"/User-Docs/Admin/business-rules",permalink:"/diva-docs/docs/next/User-Docs/Admin/business-rules",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"business-rules",title:"Business Rules"},sidebar:"divaSidebar",previous:{title:"Policies",permalink:"/diva-docs/docs/next/User-Docs/Admin/policies"},next:{title:"Prerequisites",permalink:"/diva-docs/docs/next/Deployment/prerequisites"}},d={},c=[],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"DIVA provides an RESTful API that allows an administrator to create, update and delte so called business rules.\nBusiness rules are triggered by events that are available in a Kafka topic.\nA business rule has a specific data model that you need to consider.\nHere you can see an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    id: "rule:uuid:8622b14e-6ad4-4083-8748-2d0ea462a7ee",\n    title: "Delete review if corresponding entity was deleted",\n    isActive: true,\n    isEditable: true,\n    scope: {\n      channel: "datanetwork.events",\n      "payload.type": "delete",\n      "payload.object.id": "edge:.*",\n      "payload.attributedTo[0].object.id": "review:.*",\n    },\n    condition: {\n      and: [\n        {\n          cypher: {\n            query:\n              "MATCH (r:review {id:\'{{payload.attributedTo[0].object.id}}\'})-[:isReviewOf]->(entity) RETURN (count(entity)=0) as ruleMet",\n          },\n        },\n      ],\n    },\n    actions: [\n      {\n        headers: {\n          "x-diva": { actorId: "{{payload.actor.id}}" },\n        },\n        method: "DELETE",\n        endpoint:\n          "{{entity-management}}/reviews/{{payload.attributedTo[0].object.id}}",\n        ignoreErrors: [\n          {\n            statusCode: 404, // already deleted, ignore it\n          },\n          {\n            statusCode: 403, // forbidden is forbidden, try not to write rules that confront with the policies\n          },\n        ],\n      },\n    ],\n  }\n')),(0,i.kt)("p",null,"If you are using our RESTful API, you don't need to set an ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," when you create a new business rule.\nPlease take care, that you set all the other fields."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"field"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"title"),(0,i.kt)("td",{parentName:"tr",align:null},"give a good title so you can understand what this rule should do")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"isActive"),(0,i.kt)("td",{parentName:"tr",align:null},"DIVA only considers rules if they are active (true)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"isEditable"),(0,i.kt)("td",{parentName:"tr",align:null},"Prevents the accidental deletion of a rule. WARNING: If you want to delete this rule if this is set to false, ask a system admin to delete this rule insode our MongoDB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"scope"),(0,i.kt)("td",{parentName:"tr",align:null},"Here you can specify what must be present in a kafka message. You can use RegEx on the right hand of the key-value pais.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"condition"),(0,i.kt)("td",{parentName:"tr",align:null},"Here you can specify additional conditions that must be met, before we execute actions. There are different kinds of conditions. You can check in mongoDB or neo4j. For more examples check our code.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"actions"),(0,i.kt)("td",{parentName:"tr",align:null},"This is what should be triggered if scope and conditions are met. Currently only HTTP requests can be executed. You can ignore specific HTTP status code that are fine to you.")))))}m.isMDXComponent=!0}}]);