"use strict";(self.webpackChunkdiva_docs=self.webpackChunkdiva_docs||[]).push([[354],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},926:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),s=["components"],a={id:"rest-api",title:"REST API"},l="REST API",c={unversionedId:"Development/Architecture/rest-api",id:"version-3.3.1/Development/Architecture/rest-api",title:"REST API",description:"The core of our system consists of several services that provide their functionality through REST API.",source:"@site/versioned_docs/version-3.3.1/04-Development/04-Architecture/03-rest-api.md",sourceDirName:"04-Development/04-Architecture",slug:"/Development/Architecture/rest-api",permalink:"/diva-docs/docs/Development/Architecture/rest-api",draft:!1,tags:[],version:"3.3.1",sidebarPosition:3,frontMatter:{id:"rest-api",title:"REST API"},sidebar:"divaSidebar",previous:{title:"Schemata",permalink:"/diva-docs/docs/Development/Architecture/json-schemas"},next:{title:"Keycloak",permalink:"/diva-docs/docs/Development/Architecture/keycloak"}},u={},p=[{value:"Best practises",id:"best-practises",level:2},{value:"Describe your API with OpenAPI",id:"describe-your-api-with-openapi",level:3},{value:"Use nouns to represent resources",id:"use-nouns-to-represent-resources",level:3},{value:"Name collections with plural nouns",id:"name-collections-with-plural-nouns",level:3},{value:"Controller archetype",id:"controller-archetype",level:3},{value:"Pagination, projection and filtering",id:"pagination-projection-and-filtering",level:3},{value:"Pagination",id:"pagination",level:4},{value:"Projection",id:"projection",level:4},{value:"Filtering",id:"filtering",level:4},{value:"Nesting resources",id:"nesting-resources",level:3},{value:"Motivation",id:"motivation",level:4},{value:"Exception",id:"exception",level:4},{value:"Nesting resources: n:m",id:"nesting-resources-nm",level:4},{value:"Flat Resources Structure",id:"flat-resources-structure",level:3},{value:"Bulk request mode",id:"bulk-request-mode",level:3},{value:"Consistent Responses",id:"consistent-responses",level:3}],d={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rest-api"},"REST API"),(0,i.kt)("p",null,"The core of our system consists of several services that provide their functionality through REST API.\nThese are only the API's that are used internally by DIVA and should not be available to third party providers.\nSince the services do not implement authentication logic, the service must always run behind the ",(0,i.kt)("a",{parentName:"p",href:"gateway"},"Gateway"),"."),(0,i.kt)("h2",{id:"best-practises"},"Best practises"),(0,i.kt)("p",null,"The number of services will potentially continue to grow. This makes it more complicated to implement a\nsystem-wide consistent, clean and simple API. This guide provides us with a reference for developing the\nAPIs in a consistent manner and helps us make the right decisions."),(0,i.kt)("p",null,"The rules listed below are a derivation of the general REST API best practices. We only mention the points\nthat are relevant to us here. This guide is not intended to teach you REST API. Furthermore, REST is a style\nguide, so we adopt some practices to the architecture of our system."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Legend")),(0,i.kt)("p",null,"\u2705 - do"),(0,i.kt)("p",null,"\ud83d\uded1 - nope"),(0,i.kt)("p",null,"\u26a1 - not recommended"),(0,i.kt)("h3",{id:"describe-your-api-with-openapi"},"Describe your API with OpenAPI"),(0,i.kt)("p",null,"All services document their interfaces with OpenAPI. Please write the definition as detailed as possible and explain all existing edge cases.\nAll parameters, return values, etc. must have clear and strict type definitions."),(0,i.kt)("h3",{id:"use-nouns-to-represent-resources"},"Use nouns to represent resources"),(0,i.kt)("p",null,"In REST, primary data representation is called Resource. Do ",(0,i.kt)("strong",{parentName:"p"},"not")," use verbs to express manipulations on resources,\nas they are presented by HTTP methods."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u2705 service/users\n\ud83d\uded1 service/getUsers\n")),(0,i.kt)("h3",{id:"name-collections-with-plural-nouns"},"Name collections with plural nouns"),(0,i.kt)("p",null,"In most cases our REST interfaces represent collections. By using the plural it becomes obvious that we are\nworking with a set of resources (e.g. users). To express manipulation on a single resource use an endpoint with ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," path parameter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u2705 users\n\u2705 users/:id\n\ud83d\uded1 user\n\ud83d\uded1 user/:id\n")),(0,i.kt)("h3",{id:"controller-archetype"},"Controller archetype"),(0,i.kt)("p",null,"Sometimes the HTTP verbs are not sufficient to express an action on resources. Use ",(0,i.kt)("a",{parentName:"p",href:"https://restfulapi.net/resource-naming/"},"Controller Resources"),"\nto express special actions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u2705 POST users/:id/verify\n")),(0,i.kt)("h3",{id:"pagination-projection-and-filtering"},"Pagination, projection and filtering"),(0,i.kt)("p",null,"The APIs must provide pagination, projection and filtering for resources."),(0,i.kt)("h4",{id:"pagination"},"Pagination"),(0,i.kt)("p",null,"Pagination is the most important concept and must be present in all APIs. We also recommend to fallback to a default\nvalue for the page size, if not defined in the request. But make sure that this value is clearly documented.\nThe response must contain a ",(0,i.kt)("inlineCode",{parentName:"p"},"cursor")," that can be used to query the next page. The ",(0,i.kt)("inlineCode",{parentName:"p"},"cursor")," value is dependent on the\ntechnology used in the service, but the client does not have to worry about the internal mechanisms. If there is no\ncursor in the response, there is no further page. Also make sure to include the total number of entities as ",(0,i.kt)("inlineCode",{parentName:"p"},"total")," that could be returned\naccording to current filtering conditions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\u2705 GET resources RESPONSE BODY {"collection": [50], total: 1300, cursor: "12g3hhgfhg1f32"}\n\u2705 GET resources?cursor=12g3hhgfhg1f32\n\u2705 GET resources?cursor=12g3hhgfhg1f32&pageSize=20\n')),(0,i.kt)("h4",{id:"projection"},"Projection"),(0,i.kt)("p",null,"In oder for the client to be able to select the fields of a resource, the API must support projection. The ",(0,i.kt)("inlineCode",{parentName:"p"},"fields")," query parameter\nthat is a String with coma separated fields in it must be supported."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u2705 GET users?fields=name,email,imageId\n")),(0,i.kt)("h4",{id:"filtering"},"Filtering"),(0,i.kt)("p",null,"To keep the API simple and consistent, the API muss support simple filtering possibilities by specific entity fields with a\ngeneral scheme ",(0,i.kt)("inlineCode",{parentName:"p"},"[field]=[value]"),". In the corresponding OpenAPI specification it must be documented by which fields the entities can be filtered"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u2705 GET reviews?belongsTo=resource:uuid:some-id\n\ud83d\uded1 GET users/admin\n\ud83d\uded1 GET resources(type=pdf&rating>=4)\n")),(0,i.kt)("p",null,"For resources, assets, user and other entity types in the future we have to consider more complex search functionality.\nThe Search Assistant service is responsible for advanced search functionalities."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Summary")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Response:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "total": 1300,              // total number of entites\n  "collection": [],           // returned array of entites\n  "cursor": "dajkshjkh234kh"  // cursor to the next page\n}\n')),(0,i.kt)("p",{parentName:"div"},"Query:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cursor")," - cursor for the next page"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fields")," - coma separated list of projection fields as String"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[someField]")," - entity specific filtering fields")))),(0,i.kt)("h3",{id:"nesting-resources"},"Nesting resources"),(0,i.kt)("p",null,"There are different views regarding the representation of the hierarchy between resources. To be short, we prefer a\nflat structure without sub resources to keep the API as simple and clear as possible. In general, entities that can\nbe seen as independent resources should have their own endpoint. Instead of the nesting we express the relations between Resources\nlike stated in the ",(0,i.kt)("a",{parentName:"p",href:"introduction#data-model"},"data model")," section. So entities that are in a relation to another entity must store the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," of this entity\nas ",(0,i.kt)("inlineCode",{parentName:"p"},"belogsTo")," attribute. Corresponding to the ",(0,i.kt)("a",{parentName:"p",href:"#filtering"},"filtering")," rules we could request entities that belong to some other entity\nwith ",(0,i.kt)("inlineCode",{parentName:"p"},"belogsTo")," query parameter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u2705 reviews\n\u2705 reviews/:id\n\u2705 reviews?creatorId=user:uuid:some-id\n\u2705 reviews?belongsTo=entity:uuid:some-id\n\u26a1 users/:id/reviews\n\u26a1 users/:id/reviews/:reviewId\n")),(0,i.kt)("h4",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"First of all, by looking at the not recommended examples, we can't tell if we get a complete representation of the\ncomments or a list of IDs. This affects the readability of the API. If we want to be able to paginate, filter or\nproject the comment, URL will grow quickly in length and become confusing."),(0,i.kt)("p",null,"But the most important point is our microservice architecture. We already have Review Management service,\nwhich performs all operations on the Reviews. So it makes no sense to manage the Reviews via the\nendpoint ",(0,i.kt)("inlineCode",{parentName:"p"},"users/:id/reviews"),". It is semantically incorrect for Review Management service to provide ",(0,i.kt)("inlineCode",{parentName:"p"},"users"),"\nendpoint and User Management has nothing to do with Reviews."),(0,i.kt)("h4",{id:"exception"},"Exception"),(0,i.kt)("p",null,"We can break these rule if we are sure that there is a strong coupling between two resources and that this coupling\ndoes not go beyond several services. As an example we can take User Management Service. Users have an image profile\nand images are independent resources, because a binary file cannot be part of a user document. Nevertheless, there is\na strong coupling between users and images, since currently only user can have profile imgae. Without users the images\ndo not exist. In direct contrast to this, the existence of comments is not bound to a specific resource. Comments can\nalso be created by the system itself. So we can accept a subresources according to the user example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"users/:id/image\n")),(0,i.kt)("h4",{id:"nesting-resources-nm"},"Nesting resources: n:m"),(0,i.kt)("p",null,"Yes, the above definition allows us to develop simpler and cleaner APIs without service mesh. But what if we really want\nto express a dynamic relation between the entities? An example that will soon be on our desk is the ability for users to\nbookmark entities. That means, we want to somehow capture that a user bookmarks a resource or an asset or removes a\nbookmark, we want to display the list of bookmarks of a user and for an entity we want to display the list of users who\nhave bookmarked that entity. Obviously we have to manage the bookmarks in a set. But the question is, how this set has\nto look like and where it is stored. Furthermore it is clear that we need operations POST, GET and DELETE on this set."),(0,i.kt)("p",null,"But we only want to store the information about who has bookmarked what. We could consider creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"bookmarks")," REST\nresource. Extracting this information to an independent resource seems to be overwhelming. And this is a case for the\nsub resources. At this point it must be admitted that the ",(0,i.kt)("inlineCode",{parentName:"p"},"<someEntity>/:id/bookmarks")," cannot be avoided. We just need\nto replace ",(0,i.kt)("inlineCode",{parentName:"p"},"<someEntity>")," with concrete one. One option would be to store the information about bookmarks in the\nresource, asset etc. itself. But due to our micro service nature we would have to implement this endpoint for each\nservice. And redundancy is the thing we want to avoid the most. We know that only users can save the entities.\nSo the users are good candidates for it. Now we agree that we need the endpoint ",(0,i.kt)("inlineCode",{parentName:"p"},"users/:id/bookmarks"),". Again, we\nwant to avoid redundancies and of course do not save the whole entity object as a bookmark. Instead we only store\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),"'s. This means in turn that we cannot query complete entities at the endpoint ",(0,i.kt)("inlineCode",{parentName:"p"},"GET users/:id/bookmarks"),".\nInstead, the individual entities must be queried from the corresponding service by ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),". This approach helps us to\nkeep the individual APIs as simple as possible and decoupled from each other, but introduces a certain amount of\nadditional effort for the clients."),(0,i.kt)("p",null,"The concrete implementation can\nvary, we do not mention how the bookmarks are stored, they can be persisted as part of the user object in an array or\nindividually in an external collection. But through this endpoint we emphasize that bookmarks are not independent\nresources and are strongly related to the user."),(0,i.kt)("h3",{id:"flat-resources-structure"},"Flat Resources Structure"),(0,i.kt)("p",null,"Try to keep the structure of all resources as flat as possible. This will help us to keep the individual documents in\nthe collections clear and not too large. Especially try to avoid arrays of objects, which can potentially be very long.\nOne example is the history. Logically you can see the history as a subresource of resources. But we expect that the\nhistory will grow over time and make the resource document very large. In this case the option to represent history as\na separate REST resource should be considered."),(0,i.kt)("h3",{id:"bulk-request-mode"},"Bulk request mode"),(0,i.kt)("p",null,"The bulk mode allows to create and / or update multiple resources in one request. We should consider this option for\nour resources and asset APIs. The endpoints for creating new entities should support bulk mode, where an array of new\nresources is accepted. This can be useful when importing data sources that contain many individual resources."),(0,i.kt)("h3",{id:"consistent-responses"},"Consistent Responses"),(0,i.kt)("p",null,"Depending on the API endpoint and the status of the operation, we specify different response schemes.\nIn all cases, the use of HTTP status code must be implemented consistently and semantically correct and documented in the OpenAPI specification. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Collection response (according to ",(0,i.kt)("a",{parentName:"p",href:"#pagination"},"pagination"),"):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "total": 1500,\n    "collection": [],\n    "cursor": "akjzdaztsgdz32jg="\n  }\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Error response:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "type": "string",    // error type like "AuthentificationError"\n    "message": "string", // detailed human readable message\n    "code": 409,         // error code, HTTP Status Code or some specific code\n    "errors": [          // additional errors, mostly schema or specification validation errors\n      {}\n    ]\n  }\n')))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bulk collection response:\n",(0,i.kt)("inlineCode",{parentName:"li"},"Status 207"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'  [\n    {\n      "statusCode": 500,      // status code for each operation in the bulk\n      "data": "string",       // additional data\n      "error": {              // error must be included in error case\n        "type": "string",\n        "message": "string",\n        "code": 409,\n        "errors": [\n          {}\n        ]\n      }\n    }\n  ]\n')))))}h.isMDXComponent=!0}}]);