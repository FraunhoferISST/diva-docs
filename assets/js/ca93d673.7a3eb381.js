"use strict";(self.webpackChunkdiva_docs=self.webpackChunkdiva_docs||[]).push([[5312],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),c=i,k=u["".concat(d,".").concat(c)]||u[c]||p[c]||r;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9594:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"upgrading-3.3.1-to-4.0.0",title:"Upgrading from 3.3.1 to 4.0.0"},d=void 0,s={unversionedId:"Migration/upgrading-3.3.1-to-4.0.0",id:"Migration/upgrading-3.3.1-to-4.0.0",title:"Upgrading from 3.3.1 to 4.0.0",description:"Currently, there is no automatic migration from 3.3.1 to 4.0.0.",source:"@site/docs/05-Migration/02-upgrading-3.3.1-to-4.0.0.md",sourceDirName:"05-Migration",slug:"/Migration/upgrading-3.3.1-to-4.0.0",permalink:"/diva-docs/docs/next/Migration/upgrading-3.3.1-to-4.0.0",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"upgrading-3.3.1-to-4.0.0",title:"Upgrading from 3.3.1 to 4.0.0"},sidebar:"divaSidebar",previous:{title:"Introduction",permalink:"/diva-docs/docs/next/Migration/introduction"}},m={},p=[{value:"First Steps",id:"first-steps",level:2},{value:"Remove outdated Services",id:"remove-outdated-services",level:2},{value:"Remove Kafka Volume",id:"remove-kafka-volume",level:2},{value:"Upgrade to neo4j",id:"upgrade-to-neo4j",level:2},{value:"Upgrade MongoDB",id:"upgrade-mongodb",level:2},{value:"Upgrade MinIO Buckets",id:"upgrade-minio-buckets",level:2},{value:"Upgrade Elasticsearch",id:"upgrade-elasticsearch",level:2}],u={toc:p};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Currently, there is no automatic migration from 3.3.1 to 4.0.0.\nThis is due to the fact that an extremely large number of things have changed in the system.\nWe think it is saver to do a migration by hand."))),(0,r.kt)("h2",{id:"first-steps"},"First Steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We recommend stopping a large part of the DIVA deployment first."),(0,r.kt)("li",{parentName:"ul"},"However, keep ",(0,r.kt)("strong",{parentName:"li"},"MongoDB"),", ",(0,r.kt)("strong",{parentName:"li"},"Elasticsearch")," and ",(0,r.kt)("strong",{parentName:"li"},"MinIO")," running."),(0,r.kt)("li",{parentName:"ul"},"make backups from these three databases")),(0,r.kt)("h2",{id:"remove-outdated-services"},"Remove outdated Services"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"remove container and image for ",(0,r.kt)("strong",{parentName:"li"},"resource-management")),(0,r.kt)("li",{parentName:"ul"},"remove container and image for ",(0,r.kt)("strong",{parentName:"li"},"asset-management")),(0,r.kt)("li",{parentName:"ul"},"remove container and image for ",(0,r.kt)("strong",{parentName:"li"},"review-management")),(0,r.kt)("li",{parentName:"ul"},"remove container and image for ",(0,r.kt)("strong",{parentName:"li"},"user-management")),(0,r.kt)("li",{parentName:"ul"},"remove container and image for ",(0,r.kt)("strong",{parentName:"li"},"dsc-adapter")),(0,r.kt)("li",{parentName:"ul"},"remove container and image for ",(0,r.kt)("strong",{parentName:"li"},"schema-registry")),(0,r.kt)("li",{parentName:"ul"},"remove container and image for ",(0,r.kt)("strong",{parentName:"li"},"resource-management-sink")),(0,r.kt)("li",{parentName:"ul"},"remove container and image for ",(0,r.kt)("strong",{parentName:"li"},"service-management"))),(0,r.kt)("h2",{id:"remove-kafka-volume"},"Remove Kafka Volume"),(0,r.kt)("p",null,"We also added new topics and have a few new data models for the Kafka messages.\nWe recommend to delete the Kafka docker volumes to give you a fresh start.\nJust stop Kafka and Zookeeper, remove the Volumes and then restart Kafka and Zookeeper."),(0,r.kt)("h2",{id:"upgrade-to-neo4j"},"Upgrade to neo4j"),(0,r.kt)("p",null,"neo4j is our new database that stores the relations between the entities."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a new node for every entity that is stored in the MongoDB collections ",(0,r.kt)("inlineCode",{parentName:"li"},"resources"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"assets"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"users"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"reviews"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"services"),"."),(0,r.kt)("li",{parentName:"ul"},"Every node needs a label. The label to be set can be found in the entityType field of the entity."),(0,r.kt)("li",{parentName:"ul"},"Also set a node property called ",(0,r.kt)("inlineCode",{parentName:"li"},"entityId")," with the value found in the entities ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," field."),(0,r.kt)("li",{parentName:"ul"},"Every entity also has relations. We need to set edges for all the relations.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In MongoDB check every record for the ",(0,r.kt)("inlineCode",{parentName:"li"},"creatorId")," field. Add an edge from the creator to the entity with an label called ",(0,r.kt)("inlineCode",{parentName:"li"},"isCreatorOf"),". Remove the ",(0,r.kt)("inlineCode",{parentName:"li"},"creatorId")," field."),(0,r.kt)("li",{parentName:"ul"},"In MongoDB check every record for the ",(0,r.kt)("inlineCode",{parentName:"li"},"ownerId")," field. Add an edge from the creator to the entity with an label called ",(0,r.kt)("inlineCode",{parentName:"li"},"isOwnerOf"),". Remove the ",(0,r.kt)("inlineCode",{parentName:"li"},"ownerId")," field."),(0,r.kt)("li",{parentName:"ul"},"Assets have a field called ",(0,r.kt)("inlineCode",{parentName:"li"},"entities"),". For every entry in ",(0,r.kt)("inlineCode",{parentName:"li"},"entities")," create a new edge from the entity in the list to the asset with a label called ",(0,r.kt)("inlineCode",{parentName:"li"},"isPartOf"),". Remove the ",(0,r.kt)("inlineCode",{parentName:"li"},"entities")," field."),(0,r.kt)("li",{parentName:"ul"},"Every review has a ",(0,r.kt)("inlineCode",{parentName:"li"},"belongsTo")," field with an id. Please create an edge from the review to the entity with corresponding id. You need to set a label called ",(0,r.kt)("inlineCode",{parentName:"li"},"reviewOf"),".")))),(0,r.kt)("h2",{id:"upgrade-mongodb"},"Upgrade MongoDB"),(0,r.kt)("p",null,"We merged the different entity collections (",(0,r.kt)("inlineCode",{parentName:"p"},"resources"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"assets"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"users"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"reviews"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"services"),") into one ",(0,r.kt)("inlineCode",{parentName:"p"},"entities")," collection."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"copy all entries of these collections in a new ",(0,r.kt)("inlineCode",{parentName:"li"},"entities")," collection."),(0,r.kt)("li",{parentName:"ul"},"Please change the field name ",(0,r.kt)("inlineCode",{parentName:"li"},"created")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"createdAt"),"."),(0,r.kt)("li",{parentName:"ul"},"Please change the field name ",(0,r.kt)("inlineCode",{parentName:"li"},"modified")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"modifiedAt"),"."),(0,r.kt)("li",{parentName:"ul"},"Please change the field name ",(0,r.kt)("inlineCode",{parentName:"li"},"belongsTo")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"attributedTo"),".")),(0,r.kt)("h2",{id:"upgrade-minio-buckets"},"Upgrade MinIO Buckets"),(0,r.kt)("p",null,"You need to rename all files in the ",(0,r.kt)("inlineCode",{parentName:"p"},"file-lake")," bucket.\nIn 3.3.1 we used the file hash as unique name.\nFrom 4.0.0 on, we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," stored in MongoDB as unique name in the bucket.\nThe following is pseudo code that you can script to help you doing this task:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"forEach in MongoDB.Collection.resources => (e):\n  if field e.uniqueFingerprint exists:\n    rename MinIO(e.uniqueFingerprint) to MinIO(e.id)\n")),(0,r.kt)("h2",{id:"upgrade-elasticsearch"},"Upgrade Elasticsearch"),(0,r.kt)("p",null,"You can delete the whole Elasticsearch Volume as we need to reindex the system."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Stop Elasticsearch"),(0,r.kt)("li",{parentName:"ul"},"Delete all Volumes that store data"),(0,r.kt)("li",{parentName:"ul"},"Start Elasticsearch (using our docker-compose with settings)"),(0,r.kt)("li",{parentName:"ul"},"To trigger a complete reindex we currently need a little hack:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Start our ",(0,r.kt)("inlineCode",{parentName:"li"},"entity-management")," and wait till it is booted."),(0,r.kt)("li",{parentName:"ul"},"Use the API to create a new JSON Schema (see ",(0,r.kt)("inlineCode",{parentName:"li"},"/api")," when ",(0,r.kt)("inlineCode",{parentName:"li"},"entity-management")," is running)."),(0,r.kt)("li",{parentName:"ul"},"Now just delete that JSON Schema you created. This will trigger a complete reindex of the Elasticsearch data.")))))}c.isMDXComponent=!0}}]);