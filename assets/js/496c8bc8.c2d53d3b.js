"use strict";(self.webpackChunkdiva_docs=self.webpackChunkdiva_docs||[]).push([[2710],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(a),u=i,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||o;return a?n.createElement(m,r(r({ref:t},d),{},{components:a})):n.createElement(m,r({ref:t},d))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8920:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),r=["components"],s={id:"policies",title:"Policies"},l="Policies",c={unversionedId:"Development/Data Governance/policies",id:"Development/Data Governance/policies",title:"Policies",description:"As explained in the Introduction to Data Governance in the DIVA ecosystem, policies are a set of conditions that allow a query to be executed with a certain scope. For the task of restricting access and enforcing policies, we provide a policy decision service similar to popular solutions such as Open Policy Agent or Oso. What distinguishes our solution from the alternatives is its scope, i.e., its wide-ranging and generic configuration options and, in particular, deeper capabilities for incorporating input data into the decision-making process. Since we provide a variety of ways to query the different data sources on the platform and the fields included in the requests, a good understanding of DIVAs architecture is recommended before starting to work on policies.",source:"@site/docs/04-Development/05-Data Governance/02-policies.md",sourceDirName:"04-Development/05-Data Governance",slug:"/Development/Data Governance/policies",permalink:"/diva-docs/docs/next/Development/Data Governance/policies",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"policies",title:"Policies"},sidebar:"divaSidebar",previous:{title:"Data Governance",permalink:"/diva-docs/docs/next/Development/Data Governance/introduction"},next:{title:"Rules",permalink:"/diva-docs/docs/next/Development/Data Governance/rules"}},d={},p=[{value:"Basic Behaviour",id:"basic-behaviour",level:2},{value:"Structure of Policies",id:"structure-of-policies",level:2},{value:"scope",id:"scope",level:3},{value:"condition",id:"condition",level:3},{value:"templates",id:"templates",level:3},{value:"Business Decision Point",id:"business-decision-point",level:2},{value:"Securing a Service",id:"securing-a-service",level:2}],h={toc:p};function u(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"policies"},"Policies"),(0,o.kt)("p",null,"As explained in the ",(0,o.kt)("a",{parentName:"p",href:"./introduction"},"Introduction to Data Governance")," in the DIVA ecosystem, policies are a set of conditions that allow a query to be executed with a certain scope. For the task of restricting access and enforcing policies, we provide a policy decision service similar to popular solutions such as ",(0,o.kt)("a",{parentName:"p",href:"https://www.openpolicyagent.org/"},"Open Policy Agent")," or ",(0,o.kt)("a",{parentName:"p",href:"https://www.osohq.com/"},"Oso"),". What distinguishes our solution from the alternatives is its scope, i.e., its wide-ranging and generic configuration options and, in particular, deeper capabilities for incorporating input data into the decision-making process. Since we provide a variety of ways to query the different data sources on the platform and the fields included in the requests, a good understanding of DIVAs architecture is recommended before starting to work on policies."),(0,o.kt)("p",null,"In the next sections you will find information about the ",(0,o.kt)("a",{parentName:"p",href:"#basic-behaviour"},"basic-behaviour")," and the specifications we have made, the ",(0,o.kt)("a",{parentName:"p",href:"#structure-of-policies"},"structure-of-policies"),", the ",(0,o.kt)("a",{parentName:"p",href:"#business-decision-point"},"business-decision-point")," and how to use all these tools and concepts to ",(0,o.kt)("a",{parentName:"p",href:"#securing-a-service"},"secure-a-service"),". Since the whole policy system can be quite complex and therefore error-prone, we have also put together some best practices for the ",(0,o.kt)("a",{parentName:"p",href:"#troubleshooting"},"troubleshooting process"),"."),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Danger zone!")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Be aware that changing policies can have far-reaching consequences. Policies should be checked for errors, in the best case automatically. Policies should also be deliberately kept more restrictive so as not to accidentally allow too much."))),(0,o.kt)("h2",{id:"basic-behaviour"},"Basic Behaviour"),(0,o.kt)("p",null,"The most basic concept of policies and the business-decision-point is, that all actions (on services where the business-decision-point is integrated) are ",(0,o.kt)("strong",{parentName:"p"},"forbidden-by-default"),". That means that policies are used to specifically ",(0,o.kt)("strong",{parentName:"p"},"allow")," request rather than to deny them. So when you ",(0,o.kt)("a",{parentName:"p",href:"#securing-a-service"},"secure a service")," with the business-decision-point, you wont be able to initially access any endpoint because the service cannot find any policies that allow requests for those endpoints (regardless of whether an admin is accessing, for example). "),(0,o.kt)("p",null,"As explained in the section on ",(0,o.kt)("a",{parentName:"p",href:"introduction#management-of-policies--rules"},"Management of Policies & Rules")," defaultEntities can be loaded, when the platform is first launched - this includes policies. You will find a ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultEntities"),"-folder in the directory of ",(0,o.kt)("inlineCode",{parentName:"p"},"entity-management"),". The systemEntities-collection in the MongoDB is populated with all the default policies found there (if they have not already been loaded into the DB). An important feature of our policies-system is, that you can edit, delete or even create policies while all platform services are running. It is not necessary to reload the business-decision-point, which could cause some user requests to be unintentionally rejected because the service does not handle policy-requests. The business decision point caches the policies from the DB internally. There are several reasons for this, but most importantly it avoids a possible bottleneck due to DB queries. When you use one of the CRUD-endpoints of the entity-management to create, update or delete a policy, the entity-management will produce a new message to a Kafka topic which the business-decision-point listens to, resulting in a re-cache of the policies."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\ud83d\udd01 Re-caching policies")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When you update (or delete/create) a policy, the expected behavior is not available immediately. It can take a moment for the messages to propagate and for the service to complete the re-caching process."))),(0,o.kt)("p",null,"When you start writing policies to allow requests you wil first have to define a scope. You should try to limit the scope to a specific request or a group of requests. With regex logic (see below) it would be possible to define a wide scope or even allow any request - be careful not to write scopes that are too wide unless absolutely necessary. For conditions, we have added ways to chain multiple queries using Boolean expressions. The queries can be of different types. For example, you could query the Neo4j-datanetwork or even the headers of the request set by the Kong gateway. See ",(0,o.kt)("a",{parentName:"p",href:"#structure-of-policies"},"below")," for more explanations of the fields available in policy-objects."),(0,o.kt)("h2",{id:"structure-of-policies"},"Structure of Policies"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example of a policy-object that allows PATCH-requests to a user's own data:")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"How the example works")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For the ",(0,o.kt)("ins",null,(0,o.kt)("strong",{parentName:"p"},"scope")),", the policy targets ",(0,o.kt)("inlineCode",{parentName:"p"},"PATCH"),"-requests to a path starting with ",(0,o.kt)("inlineCode",{parentName:"p"},"/users/")," followed by a user-uuid. As you can see the path is a regular expression.\nFurther, the policy only targets requests that are handled by the service with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"entity-management")," - the field ",(0,o.kt)("inlineCode",{parentName:"p"},"headers.serviceName")," is automatically added to the header by the middleware-handler."),(0,o.kt)("p",{parentName:"div"},"As for the ",(0,o.kt)("ins",null,(0,o.kt)("strong",{parentName:"p"},"condition"))," field, an ",(0,o.kt)("inlineCode",{parentName:"p"},"and"),"-connector is used at the top level - this is required by the syntax, but in this case it is not used for concatenating different queries. The ",(0,o.kt)("inlineCode",{parentName:"p"},"and"),"-connector contains only one ",(0,o.kt)("inlineCode",{parentName:"p"},"inputData"),"-query, which is used to query the request objects DIVA-header for the actorId (the DIVA-header is added to the request by DIVA, i.e. the Gateway, and contains important information like the actorID.) The actorId from the DIVA-header is then checked for equality with the id from the url-params (which itself is a template). This is the check to only allow requests to the user's own data."),(0,o.kt)("p",{parentName:"div"},"Finally, the policy also ",(0,o.kt)("ins",null,(0,o.kt)("strong",{parentName:"p"},"excludes"))," some fields from beeing PATCH-able. The fields for ",(0,o.kt)("inlineCode",{parentName:"p"},"groups")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"roles")," directly control access rights and should not be able to be changed by a simple user. Here you can also see how important it is to carefully check each policy for errors or overly broad access rights."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  id: "policy:uuid:a229c1a9-9371-4d84-89b7-81b662250c7d",\n  title: "User can execute PATCH on itself (excluding roles and groups)",\n  description:\n    "The policy allows an user to edit own data, excluding the fields for roles and groups",\n  isActive: true,\n  isEditable: true,\n  scope: {\n    "headers.serviceName": "entity-management",\n    path: "^/users/user:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}.*",\n    method: "PATCH",\n  },\n  condition: {\n    and: [\n      {\n        inputData: {\n          query: {\n            "headers.diva.actorId": "{{params.id}}",\n          },\n        },\n      },\n    ],\n  },\n  excludes: ["groups", "roles"],\n}\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"id"),(0,o.kt)("td",{parentName:"tr",align:null},"Every entity has a random uuid. Use a ",(0,o.kt)("a",{parentName:"td",href:"https://www.uuidgenerator.net/"},"uuid-generator")," to generate a fresh uuid for new default policies. Remember to add the prefix ",(0,o.kt)("inlineCode",{parentName:"td"},"policy:uuid:"),"!")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"title"),(0,o.kt)("td",{parentName:"tr",align:null},"The title of the policy. The text should allow another person to quickly see what the policy is about.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"description"),(0,o.kt)("td",{parentName:"tr",align:null},"A more in-depth description of the policy. This field is optional, but can be used to e.g. explain under which conditions the policy allows requests.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"isActive"),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean variable to switch policies on or off.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"isEditable"),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean variable to make policies immutable. This is necessary, for example, for 'allow-all'-style policies for admins. If these are turned off, admins may not be able to edit policies and consequently lose access to the system.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"scope"),(0,o.kt)("td",{parentName:"tr",align:null},"An object describing the scope the policy applies to. This can be, for example, a specific endpoint. ",(0,o.kt)("a",{parentName:"td",href:"#scope"},"Below")," is a more detailed explanation of the object.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"condition"),(0,o.kt)("td",{parentName:"tr",align:null},"An object that describes what conditions must be met for the policy to allow the query. This object can become complex as it allows for chaining and different query types and mechanisms for entering data for decision making. ",(0,o.kt)("a",{parentName:"td",href:"#condition"},"Below")," is a more detailed explanation of the object.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"includes ",(0,o.kt)("strong",{parentName:"td"},"or")," excludes"),(0,o.kt)("td",{parentName:"tr",align:null},"Policies can also allow a query but, for example, display only a subset of the fields of the object associated with the query or allow only a few of them to be modified. You can use includes or excludes to specify which fields to include or exclude. Please note that you should not use includes and excludes in the same policy and that includes cause only the specified fields to be visible.")))),(0,o.kt)("h3",{id:"scope"},"scope"),(0,o.kt)("p",null,"The scope defines which requests the policy applies to. It usually contains values taken directly from the request-object, e.g.:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},'"headers.serviceName"'),": a value added by the middleware-handler"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"path"),": the path-string of the request-object"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"method"),": the HTTP method of the request-object")),(0,o.kt)("p",null,"The scope-object works as follows: On the key-side you can define the header-key whose value should be regex-tested for a match with the value-side of the scope-object. As you can see in the (admin power / allow all rights) example below, you can use any kind of regular expression to customize the scope to your needs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'scope: {\n  "headers.serviceName": ".*",\n  path: "^/[a-zA-Z0-9]+/[a-zA-Z0-9]+:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}.*",\n  method: "(PUT|POST|PATCH|DELETE|OPTIONS)",\n},\n')),(0,o.kt)("h3",{id:"condition"},"condition"),(0,o.kt)("p",null,"The condition is the heart of each policy. Here you can use input data from queries on the MongoDB, the data-network or data from the request-object to check if the requirements are met for the policy to allow a request. The structure of the condition-object is that of a boolean expression. At the top-level, you must either use the ",(0,o.kt)("inlineCode",{parentName:"p"},"and"),"- or the ",(0,o.kt)("inlineCode",{parentName:"p"},"or"),"-keyword, even if the policy contains only one query. However, of course you can also chain together many different search queries with these keywords."),(0,o.kt)("p",null,"As for the input data and its source, we currently offer three types of queries:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"cypher"),": a query to the neo4j db in cypher language - must return true or false",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},"// A query for checking if the current user is the owner of the entity he requested \ncypher: {\n  query:\n    \"MATCH (e {entityId:'{{params.id}}'})<-[r:isOwnerOf]-(:user {entityId:'{{headers.diva.actorId}}'}) RETURN (count(r)>0) as ruleMet\",\n},\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"mongo"),": a query to the MongoDB in MongoDB Query Language - must return true or false",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// A query to ensure that the requested entity is not set to private\nmongo: {\n query: {\n   id: "{{params.id}}",\n   isPrivate: { $ne: true },\n },\n},\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"inputData"),": a query on information stored in the request-object (this also includes the DIVA-header)",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// A query for checking if the current user has the realm_access-role ("admin")\ninputData: {\n  query: {\n    "headers.diva.realm_access.roles": \'("admin")\',\n  },\n},\n')))),(0,o.kt)("h3",{id:"templates"},"templates"),(0,o.kt)("p",null,"You may have noticed that the above example queries often contain ",(0,o.kt)("inlineCode",{parentName:"p"},"{{expression}}"),". These are ",(0,o.kt)("strong",{parentName:"p"},"templates")," that can be used to express variable values that depend on the request. For example you could use {{headers.diva.actorId}} to access the actorId in the DIVA-header. The templates are replaced with their true value by the business decision point during the policy check - this is the second important reason why policies are cached and not retrieved from the DB on every query, as this would not be possible with templates. For templates we provide a variety of values taken from the request: ",(0,o.kt)("inlineCode",{parentName:"p"},"headers")," (including headers.diva.actorId), ",(0,o.kt)("inlineCode",{parentName:"p"},"body"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"method"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"path"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"params"),"."),(0,o.kt)("p",null,"It may also happen that you need only a substring of a field (e.g. only the part after the last / of a URL). For this we have introduced the doublepipe operator ",(0,o.kt)("inlineCode",{parentName:"p"},"||"),", which can be used to extract a substring that matches a certain pattern. The following example shows how to use the doublepipe operator to extract the resource-uuid from a path to be used in a cypher query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"// NOTE: This can also be achieved more easily by using {{params.id}} instead\ncypher: {\n  query:\n    \"MATCH (r:resource {entityId:'{{path||resource:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$}}'})<-[e:isCreatorOf]-(:user {entityId:'{{headers[\\\"x-actorid\\\"]}}'}) RETURN (count(e)>0) as ruleMet\",\n},\n")),(0,o.kt)("h2",{id:"business-decision-point"},"Business Decision Point"),(0,o.kt)("p",null,"The business-decision-point is the service that handles the decision-making process based on the policies. It also handles template substitution and the merging of includes and excludes. For more information about how the service caches and re-caches policies, and how template substitution works, see above."),(0,o.kt)("p",null,"The decision-making service itsself is - although you should not use it - accessible through the ",(0,o.kt)("inlineCode",{parentName:"p"},"/enforcePolicies")," endpoint which will return the decision (true or false) and, in some cases, a payload object (containing, for example, the projection object for includes and excludes). "),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Usage of the business-decision-point-service")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please note that you are not supposed to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"/enforcePolicies"),"-endpoint. Rather, the service should be integrated as a middleware that ensures the policy enforcement across all endpoints of the service. Further information on ",(0,o.kt)("a",{parentName:"p",href:"#securing-a-service"},"securing a service")," with the business-decision-point can be found below!"))),(0,o.kt)("p",null,"Regarding includes and excludes the behaviour we have implemented is as follows: From every policy from the matching policies (those where the scope matches the request) that returns true (the condition is met and the policy allows the request), the includes- or excludes-array will be stored and concatenated to a big includes- and excludes-array-set. When all policies to be considered for the query have been checked, the two array sets are converted to a classic MongoDB projection and added to the response as payload."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Multiple policies matching a request")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It is quite possible and even common that several policies match a request and have to be considered in the decision-making process. For example, a simple PATCH request on an entity might have one policy that allows the owner/creator of the entity to PATCH and another policy that allows the administrator to PATCH any entity. Now, when the administrator performs a PATCH on an entity of which he is also the owner/creator, both policies apply."))),(0,o.kt)("p",null,"If you want to take a look at the code for matching policies to a request or the logic behind template replacement, or if you want to add your own behavior, you can find the code at ",(0,o.kt)("inlineCode",{parentName:"p"},"core/services/business-decision-point/util/utils.js"),"!"),(0,o.kt)("h2",{id:"securing-a-service"},"Securing a Service"),(0,o.kt)("p",null,"If you want to use policies for own of your own services a few steps need to be completed. Most importantly, as mentioned earlier, the ",(0,o.kt)("a",{parentName:"p",href:"#business-decision-point"},"business-decision-point")," should be integrated as middleware via the expressServer provided in ",(0,o.kt)("inlineCode",{parentName:"p"},"/core/services/common"),". This ensures that policy enforcement works as expected for all endpoints of the service in question. Perform these steps to use policies in a service:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Use the expressServer provided in ",(0,o.kt)("inlineCode",{parentName:"li"},"/core/services/common")," (although not recommended you could also copy the middleware-behaviour mentioned in the next steps)"),(0,o.kt)("li",{parentName:"ol"},"Setup the server with standard behaviour: basic middleware, openAPIValidator middleware etc."),(0,o.kt)("li",{parentName:"ol"},"Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"addPolicyValidatorMiddleware()"),"-function provided in the expressServer: ",(0,o.kt)("inlineCode",{parentName:"li"},"server.addPolicyValidatorMiddleware()")," to add the business-decision-point as a middleware"),(0,o.kt)("li",{parentName:"ol"},"Start your service and call any endpoint. Since there is no policy for your service, you should get a ",(0,o.kt)("inlineCode",{parentName:"li"},'304 "There is no policy that allows the current request"'),"-response (AccessDeniedError). If you can still access the endpoint check the .env-file for a POLICY_MIDDLEWARE flag. If you do not find one or it is set to something else, set the flag to the string ",(0,o.kt)("inlineCode",{parentName:"li"},"active"),"."),(0,o.kt)("li",{parentName:"ol"},"You can now start adding policies for your service. You can do this either by writing new default policies (restart the entity-management to get these into the DB) or by adding the policies via the ",(0,o.kt)("inlineCode",{parentName:"li"},"/policy/")," endpoint of ",(0,o.kt)("inlineCode",{parentName:"li"},"/policy/"),"-endpoint of the entity-management.")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"A good example of the above explanation can be found at the  ",(0,o.kt)("inlineCode",{parentName:"p"},"entity-management"),"-service."))),(0,o.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},'"Policies are not working, although I have added the middleware!"'),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Check the .env-file for a POLICY_MIDDLEWARE flag. If you do not find one or it is set to something else, set the flag to the string ",(0,o.kt)("inlineCode",{parentName:"li"},"active"),"."),(0,o.kt)("li",{parentName:"ul"},"If the problem still occurs, double-check your implementation: Is the middleware really called? Are there hidden error messages?"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},'"Every request returns ',(0,o.kt)("inlineCode",{parentName:"strong"},'"There is no policy that allows the current request"'),'!"'),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"As the system denies requests by default (if there are no policies allowing it) this is the expected behaviour. If you have written a policy that explicitly allows the request in question, you have most likely made a mistake. Run the ",(0,o.kt)("inlineCode",{parentName:"li"},"business-decision-point")," in dev-mode and look at the output in the console. It might also help to set a breakpoint in ",(0,o.kt)("inlineCode",{parentName:"li"},"business-decision-point/services/PoliciesService.js")," somewhere in the code that checks the conditions (in the enforcePolicies-function) and see which policies actually matched your request. Most likely your request is either not included or the condition is not met. Start small an run your queries against the MongoDB or Neo4j."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},'"I managed to lock myself out."'),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Some of the admin-power-rights-policies have the isEditable flag set to false to prevent this. Maybe you are just not logged in with an admin-user. Go to the Keycloak-Admin-Console > Users > Show all users > Select your current user > Realm_access and add the admin-role to your user."),(0,o.kt)("li",{parentName:"ul"},"If that didn't help, check the MongoDB collection (e.g. via the MongoDB extension for VSCode under divaDb > systemEntities) for policies. You may have managed to delete the admin privileges. In this case, you probably won't be able to add them via the endpoint, as it will be restricted. Add the following admin power right to the collection, for example, using the VSCode extension:")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "_id": {\n    "$oid": "62a0a532f531b8de9798ee74"\n  },\n  "id": "policy:uuid:c269f6ae-d5ad-4522-952e-244d0f10ac1e",\n  "title": "Admin Power Right",\n  "isActive": true,\n  "isEditable": false,\n  "scope": {\n    "headers.serviceName": ".*",\n    "path": "^/[a-zA-Z0-9]+/[a-zA-Z0-9]+:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}.*",\n    "method": "(PUT|POST|PATCH|DELETE|OPTIONS)",\n  },\n  "condition": {\n    "and": [\n      {\n        "inputData": {\n          "query": {\n            "headers.diva.realm_access.roles": \'("admin")\',\n          },\n        },\n      },\n      {\n        "mongo": {\n          "query": {\n            "id": "{{params.id}}",\n            "isEditable": true,\n          },\n        },\n      },\n    ],\n  },\n  "entityType": "systemEntity",\n  "systemEntityType": "policy",\n  "createdAt": "2022-06-08T15:04:16.202Z",\n  "modifiedAt": "2022-06-08T15:04:16.202Z"\n}\n')))))}u.isMDXComponent=!0}}]);