"use strict";(self.webpackChunkdiva_docs=self.webpackChunkdiva_docs||[]).push([[8606],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,p=d["".concat(c,".").concat(u)]||d[u]||h[u]||o;return n?a.createElement(p,i(i({ref:t},m),{},{components:n})):a.createElement(p,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9048:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return d}});var a,r=n(7462),o=n(3366),i=(n(7294),n(3905)),s=["components"],c={id:"json-schemas",title:"Schemata"},l="Schemata",m={unversionedId:"Development/Architecture/json-schemas",id:"Development/Architecture/json-schemas",title:"Schemata",description:"To ensure high level of integrity and validity during write operations to the data storage and exchange of Kafka messages,",source:"@site/docs/04-Development/04-Architecture/02-json-schemas.md",sourceDirName:"04-Development/04-Architecture",slug:"/Development/Architecture/json-schemas",permalink:"/diva-docs/docs/next/Development/Architecture/json-schemas",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"json-schemas",title:"Schemata"},sidebar:"divaSidebar",previous:{title:"Overview",permalink:"/diva-docs/docs/next/Development/Architecture/introduction"},next:{title:"REST API",permalink:"/diva-docs/docs/next/Development/Architecture/rest-api"}},h={},d=[{value:"JSON Schema",id:"json-schema",level:2},{value:"Defining a schema",id:"defining-a-schema",level:3},{value:"Validation",id:"validation",level:3}],u=(a="JsonSchemasModel",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),p={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"schemata"},"Schemata"),(0,i.kt)("p",null,"To ensure high level of integrity and validity during write operations to the data storage and exchange of Kafka messages,\nwe use ",(0,i.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSON Schemas")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.asyncapi.com/"},"AsyncAPI")," accordingly. "),(0,i.kt)("h2",{id:"json-schema"},"JSON Schema"),(0,i.kt)("p",null,"JSON schemas are the fundamental building block of the whole DIVA architecture. In Diva 2 we have implemented a granular\nstructured hierarchical schema system that has saved us a lot of unnecessary complexity and hundreds lines of code compared to DIVA 1."),(0,i.kt)("p",null,"Every existing piece of data in DIVA is well defined in a schema. DIVA never accepts data that is not explicitly defined\nin a schema. This in turn means that schemas are the first place in the system to be tweaked when developing new functionality.\nSchema-drive development engages us to first clearly define the data model and then start with implementation.\nHowever, the most important benefit comes from the fact that thanks to the JSON Schema tools we were able to implement\nfully automated validation of the data in our services. "),(0,i.kt)("p",null,"You will find all the schemas in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FraunhoferISST/diva/blob/master/core/schemata/json-schema"},(0,i.kt)("inlineCode",{parentName:"a"},"core/schemata/json-schema/"))," directory.\nThe directory is structured like follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"artifacts")," - common reusable definitions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"resource")," - Resource and all subresources schemas"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"asset")," - Asset and all subassets schemas"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"review")," - Review schema"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"history")," - History schema"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user")," - User schema")),(0,i.kt)("p",null,"Json schema determine our ",(0,i.kt)("a",{parentName:"p",href:"../architecture/introduction#data-model"},"data model"),'. Since the attributes of different resource\ntypes can vary significantly, we define other sub-resources such as PDF, CSV, PNG, etc. for the resources and assets.\nThe type of sub-resource is generally determined by the format or type of data source. E.g. MongoDB, Hadoop or an API could be a sub-resource.\nThe entity abstracts common attributes that are "inherited" by all other entities.'),(0,i.kt)(u,{mdxType:"JsonSchemasModel"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Bottom-to-top schemas")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Practically, we define the schemas using the bottom-to-top approach. This means that the sub-resources do not extend the\nResource schema, rather they are included in the Resource."))),(0,i.kt)("p",null,"With the bottom-to-top approach, we include the subordinated schemas in the master schema according to certain conditions.\nBasically, for example, the resource schema contains all the schemas definition of the sub-resources.\nThe advantages of this way of constructing the schemas are especially evident in automated validation."),(0,i.kt)("p",null,"We will take a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FraunhoferISST/diva/blob/master/core/schemata/json-schema/resource/resource.json"},"Resource")," example to demonstrate the approach:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "allOf": [\n    {\n      "properties": {\n        "resourceType": {\n          ...\n        }\n      }\n    },\n    {\n      "$ref": "/entity" // extend Entity schema\n    },\n    // include sub-resource schema, if resourceType corresponds to this sub-resource\n    {\n      "if": {\n        "properties": {\n          "resourceType": {\n            "const": "urbanPulseSensor"\n          }\n        }\n      },\n      "then": {\n        "$ref": "/resourceUrbanPulseSensor"\n      }\n    },\n  ]\n}\n')),(0,i.kt)("p",null,"This schema tells us that if we have an entity of type Resource and this Resource has type ",(0,i.kt)("inlineCode",{parentName:"p"},"urbanPulseSensor"),", we need to validate\nagainst a composition of Entity, Resource and UrbanPulseSensor schemas."),(0,i.kt)("h3",{id:"defining-a-schema"},"Defining a schema"),(0,i.kt)("p",null,"The biggest disadvantage of schemas - they must be written. The important thing to note here is that each attribute has\na strict and detailed definition. And as mentioned before, every possible piece of data must be described in a schema,\nwhether it is a resource, user, etc. We will demonstrate the process of schema creation using a new resource type that\nshould be added to Diva, e.g., Excel file resource."),(0,i.kt)("p",null,"First, we need to find the right place for the new scheme. Since we know that this will be a new file Resource,\nwe follow the path below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"schemata\n\u2514\u2500\u2500\u2500json-schema\n\u2502   \u2514\u2500\u2500\u2500resources\n\u2502       \u2502   resource.json\n\u2502       \u2502   resourceFile.json\n\u2502       \u2502   resourceFileApplicationPdf.json\n\u2502       \u2502   ...\n\u2502       \u2502   resourceFileExcel.json # our new definition for file Resource \n")),(0,i.kt)("p",null,"Next create a ",(0,i.kt)("inlineCode",{parentName:"p"},"resourceFileExcel.json")," file and write down all required definitions here. You can use the existing schemas for other types as a guideline."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please define the schemas in detail and as strictly as possible! Always provide attributes with a title and description.\nWherever it makes sense, define concrete type, format, value range etc. and give a couple of examples."))),(0,i.kt)("p",null,"Since Excel is a file and a subtype of File Resource, we need to include the Excel Resource in ",(0,i.kt)("inlineCode",{parentName:"p"},"resourceFile.json")," according to the bottom-to-top approach:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'\n// resourceFile.json\n{\n  ...\n      "if": {\n        "properties": { "mimeType": { "const": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" } }\n      },\n      "then": {\n        "$ref": "/resourceFileExcel"\n      }\n    },\n}\n')),(0,i.kt)("p",null,"This is the general procedure. There is no one ultimate pattern for schema creation for all possible resources in the world.\nSchema composition is a logical process and should be derived from the real world."),(0,i.kt)("h3",{id:"validation"},"Validation"),(0,i.kt)("p",null,"There are many different tools in the JSON Schema ecosystem. For validating the data against a\nschema we use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ajv-validator/ajv"},"ajv")," library for Node.js. We recommend the use of similar tools for\nyour programming language."),(0,i.kt)("p",null,"Generally all write operations to the main MongoDB storage must pass validation first.\nSo all management services must always implement the validation. The management services like Resource or User Management\nfetch the required schema on a start time from the Schema Registry service. Important to note that the services have only\nto fetch the root schema (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"resource.json")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"user.json"),") thanks to the bottom-to-top approach and automated schema resolution\nin ajv. The services with read-only access to the entities can implement the validation, but do not have to."))}f.isMDXComponent=!0}}]);