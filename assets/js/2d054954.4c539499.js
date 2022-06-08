"use strict";(self.webpackChunkdiva_docs=self.webpackChunkdiva_docs||[]).push([[6351],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=s,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1991:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(7462),s=n(3366),a=(n(7294),n(3905)),o=["components"],i={id:"rest-api",title:"REST API"},l=void 0,c={unversionedId:"Development/Architecture/rest-api",id:"Development/Architecture/rest-api",title:"REST API",description:"The core of our system consists of several services that provide their functionality through REST API.",source:"@site/docs/04-Development/04-Architecture/03-rest-api.md",sourceDirName:"04-Development/04-Architecture",slug:"/Development/Architecture/rest-api",permalink:"/diva-docs/docs/next/Development/Architecture/rest-api",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"rest-api",title:"REST API"},sidebar:"divaSidebar",previous:{title:"Schemata",permalink:"/diva-docs/docs/next/Development/Architecture/json-schemas"},next:{title:"Keycloak",permalink:"/diva-docs/docs/next/Development/Architecture/keycloak"}},u={},p=[{value:"Best practises",id:"best-practises",level:2},{value:"Legend",id:"legend",level:3},{value:"Describe your API with OpenAPI",id:"describe-your-api-with-openapi",level:3},{value:"Use nouns to represent Resources",id:"use-nouns-to-represent-resources",level:3},{value:"Name collections with plural nouns",id:"name-collections-with-plural-nouns",level:3},{value:"Controller archetype",id:"controller-archetype",level:3},{value:"Pagination, projection and filtering",id:"pagination-projection-and-filtering",level:3},{value:"Pagination",id:"pagination",level:4},{value:"Projection",id:"projection",level:4},{value:"Filtering",id:"filtering",level:4},{value:"Nesting Resources",id:"nesting-resources",level:3},{value:"Flat Resources Structure",id:"flat-resources-structure",level:3},{value:"Bulk request mode",id:"bulk-request-mode",level:3},{value:"Consistent Responses",id:"consistent-responses",level:3}],d={toc:p};function h(e){var t=e.components,n=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The core of our system consists of several services that provide their functionality through REST API.\nThese are only the API's that are used internally by DIVA and should not be available to third party providers.\nSince the services do not implement authentication logic, the service must always run behind the ",(0,a.kt)("a",{parentName:"p",href:"gateway"},"Gateway"),"."),(0,a.kt)("h2",{id:"best-practises"},"Best practises"),(0,a.kt)("p",null,"The number of services will potentially continue to grow.\nThis makes it more complicated to implement a system-wide consistent, clean and simple API.\nThis guide provides us with a reference for developing the APIs in a consistent manner and helps us make the right decisions."),(0,a.kt)("p",null,"The rules listed below are a derivation of the general REST API best practices.\nWe only mention the points that are relevant to us here.\nThis guide is not intended to teach you REST API.\nFurthermore, REST is a style guide, so we adopt some practices to the architecture of our system."),(0,a.kt)("h3",{id:"legend"},"Legend"),(0,a.kt)("p",null,"\u2705 - do"),(0,a.kt)("p",null,"\ud83d\uded1 - don't"),(0,a.kt)("p",null,"\u26a1 - not recommended"),(0,a.kt)("h3",{id:"describe-your-api-with-openapi"},"Describe your API with OpenAPI"),(0,a.kt)("p",null,"All services document their interfaces with OpenAPI.\nPlease write the definition as detailed as possible and explain all existing edge cases.\nAll parameters, return values, etc. must have clear and strict type definitions."),(0,a.kt)("h3",{id:"use-nouns-to-represent-resources"},"Use nouns to represent Resources"),(0,a.kt)("p",null,"In REST, primary data representation is called Resource.\nDo ",(0,a.kt)("strong",{parentName:"p"},"not")," use verbs to express manipulations on resources, as they are presented by HTTP methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u2705 service/users\n\ud83d\uded1 service/getUsers\n")),(0,a.kt)("h3",{id:"name-collections-with-plural-nouns"},"Name collections with plural nouns"),(0,a.kt)("p",null,"In most cases our REST interfaces represent collections.\nBy using the plural it becomes obvious that we are working with a set of resources (e.g. users).\nTo express manipulation on a single resource use an endpoint with ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," path parameter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u2705 users\n\u2705 users/:id\n\ud83d\uded1 user\n\ud83d\uded1 user/:id\n")),(0,a.kt)("h3",{id:"controller-archetype"},"Controller archetype"),(0,a.kt)("p",null,"Sometimes the HTTP verbs are not sufficient to express an action on resources.\nUse ",(0,a.kt)("a",{parentName:"p",href:"https://restfulapi.net/resource-naming/"},"Controller Resources")," to express special actions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u2705 POST users/:id/verify\n")),(0,a.kt)("h3",{id:"pagination-projection-and-filtering"},"Pagination, projection and filtering"),(0,a.kt)("p",null,"The APIs must provide pagination, projection and filtering for resources."),(0,a.kt)("h4",{id:"pagination"},"Pagination"),(0,a.kt)("p",null,"Pagination is the most important concept and must be present in all APIs.\nWe also recommend to fallback to a default value for the page size, if not defined in the request.\nBut make sure that this value is clearly documented.\nThe response must contain a ",(0,a.kt)("inlineCode",{parentName:"p"},"cursor")," that can be used to query the next page. The ",(0,a.kt)("inlineCode",{parentName:"p"},"cursor")," value is dependent on the technology used in the service, but the client does not have to worry about the internal mechanisms.\nIf there is no cursor in the response, there is no further page.\nAlso make sure to include the total number of entities as ",(0,a.kt)("inlineCode",{parentName:"p"},"total")," that could be returned according to current filtering conditions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'\u2705 GET resources RESPONSE BODY {"collection": [50], total: 1300, cursor: "12g3hhgfhg1f32"}\n\u2705 GET resources?cursor=12g3hhgfhg1f32\n\u2705 GET resources?cursor=12g3hhgfhg1f32&pageSize=20\n')),(0,a.kt)("h4",{id:"projection"},"Projection"),(0,a.kt)("p",null,"In oder for the client to be able to select the fields of a resource, the API must support projection.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"fields")," query parameter that is a String with coma separated fields in it must be supported."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u2705 GET users?fields=name,email,imageId\n")),(0,a.kt)("h4",{id:"filtering"},"Filtering"),(0,a.kt)("p",null,"To keep the API simple and consistent, the API muss support simple filtering possibilities by specific entity fields with a\ngeneral scheme ",(0,a.kt)("inlineCode",{parentName:"p"},"[field]=[value]"),".\nIn the corresponding OpenAPI specification it must be documented by which fields the entities can be filtered."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u2705 GET reviews?belongsTo=resource:uuid:some-id\n\ud83d\uded1 GET users/admin\n\ud83d\uded1 GET resources(type=pdf&rating>=4)\n")),(0,a.kt)("p",null,"For resources, assets, user and other entity types in the future we have to consider more complex search functionality.\nThe Search Assistant service is responsible for advanced search functionalities."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Summary")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Response:"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "total": 1300,              // total number of entites\n  "collection": [],           // returned array of entites\n  "cursor": "dajkshjkh234kh"  // cursor to the next page\n}\n')),(0,a.kt)("p",{parentName:"div"},"Query:"),(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cursor")," - cursor for the next page"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fields")," - coma separated list of projection fields as String"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[someField]")," - entity specific filtering fields")))),(0,a.kt)("h3",{id:"nesting-resources"},"Nesting Resources"),(0,a.kt)("p",null,"There are different views regarding the representation of the hierarchy between resources.\nTo be short, we prefer a flat structure without sub resources to keep the API as simple and clear as possible.\nIn general, entities that can be seen as independent resources should have their own endpoint.\nInstead of the nesting we express the relations between Resources using our neo4j database.\nSo entities that are in a relation to another entity can be connected by adding an edge between them.\nIf we want to resolve relations we need to ask for the edges on the entity's node."),(0,a.kt)("h3",{id:"flat-resources-structure"},"Flat Resources Structure"),(0,a.kt)("p",null,"Try to keep the structure of all resources as flat as possible.\nThis will help us to keep the individual documents in the collections clear and not too large.\nEspecially try to avoid arrays of objects, which can potentially be very long.\nOne example is the history.\nLogically you can see the history as a subresource of resources.\nBut we expect that the history will grow over time and make the resource document very large.\nIn this case the option to represent history as a separate REST resource should be considered."),(0,a.kt)("h3",{id:"bulk-request-mode"},"Bulk request mode"),(0,a.kt)("p",null,"The bulk mode allows to create and/or update multiple resources in one request.\nWe should consider this option for our resources and asset APIs.\nThe endpoints for creating new entities should support bulk mode, where an array of new resources is accepted.\nThis can be useful when importing data sources that contain many individual resources."),(0,a.kt)("h3",{id:"consistent-responses"},"Consistent Responses"),(0,a.kt)("p",null,"Depending on the API endpoint and the status of the operation, we specify different response schemes.\nIn all cases, the use of HTTP status code must be implemented consistently and semantically correct and documented in the OpenAPI specification."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Collection response (according to ",(0,a.kt)("a",{parentName:"p",href:"#pagination"},"pagination"),"):"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "total": 1500,\n    "collection": [],\n    "cursor": "akjzdaztsgdz32jg="\n  }\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Error response:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "type": "string",    // error type like "AuthentificationError"\n    "message": "string", // detailed human readable message\n    "code": 409,         // error code, HTTP Status Code or some specific code\n    "errors": [          // additional errors, mostly schema or specification validation errors\n      {}\n    ]\n  }\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Bulk collection response:\n",(0,a.kt)("inlineCode",{parentName:"p"},"Status 207")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'  [\n    {\n      "statusCode": 500,      // status code for each operation in the bulk\n      "data": "string",       // additional data\n      "error": {              // error must be included in error case\n        "type": "string",\n        "message": "string",\n        "code": 409,\n        "errors": [\n          {}\n        ]\n      }\n    }\n  ]\n')))))}h.isMDXComponent=!0}}]);