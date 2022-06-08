"use strict";(self.webpackChunkdiva_docs=self.webpackChunkdiva_docs||[]).push([[7336],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,v=u["".concat(d,".").concat(c)]||u[c]||m[c]||i;return a?n.createElement(v,o(o({ref:t},s),{},{components:a})):n.createElement(v,o({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1530:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return u}});var n,r=a(7462),i=a(3366),o=(a(7294),a(3905)),l=["components"],d={id:"releases",title:"Releases and Migrations"},p="Releases and Migrations",s={unversionedId:"Deployment/releases",id:"version-3.3.1/Deployment/releases",title:"Releases and Migrations",description:"We are continuously working on new features, catching bugs and improving our architecture.",source:"@site/versioned_docs/version-3.3.1/03-Deployment/05-releases.md",sourceDirName:"03-Deployment",slug:"/Deployment/releases",permalink:"/diva-docs/docs/Deployment/releases",draft:!1,tags:[],version:"3.3.1",sidebarPosition:5,frontMatter:{id:"releases",title:"Releases and Migrations"},sidebar:"divaSidebar",previous:{title:"Configuration",permalink:"/diva-docs/docs/Deployment/configuration"},next:{title:"Introduction",permalink:"/diva-docs/docs/Development/introduction"}},m={},u=[{value:"Upgrade to the latest version",id:"upgrade-to-the-latest-version",level:2},{value:"Migration execution",id:"migration-execution",level:2},{value:"Releases",id:"releases",level:2},{value:"<code>v3.3.1</code>",id:"v331",level:3},{value:"<code>v3.3.0</code>",id:"v330",level:3},{value:"<code>v3.2.0</code>",id:"v320",level:3},{value:"<code>v3.1.0</code>",id:"v310",level:3},{value:"<code>v3.0.3</code>",id:"v303",level:3},{value:"<code>v3.0.2</code>",id:"v302",level:3},{value:"<code>v3.0.1</code>",id:"v301",level:3},{value:"<code>v3.0.0</code>",id:"v300",level:3}],c=(n="Badge",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),v={toc:u};function h(e){var t=e.components,a=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"releases-and-migrations"},"Releases and Migrations"),(0,o.kt)("p",null,"We are continuously working on new features, catching bugs and improving our architecture.\nTo get the latest changes to you faster, our pipeline produces releases quite often.\nYou can always find the latest version on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/FraunhoferISST/diva/releases"},"GitHub"),".\nOn this page we provide all the necessary knowledge you need to always keep DIVA up to date."),(0,o.kt)("p",null,"We recommend that you always use the latest stable version of DIVA.\nThe latest version of the source code can always be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/FraunhoferISST/diva/tree/main"},"main")," branch.\nThe latest unstable development state can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/FraunhoferISST/diva/tree/dev"},"dev")," branch."),(0,o.kt)("p",null,"In most cases you can safely use the newer patch or minor version of DIVA.\nHowever, it is possible that we may change the internal infrastructure or add new features.\nThen the existing data in your DIVA instance should also be brought up to date.\nMost migrations are ",(0,o.kt)("strong",{parentName:"p"},"mandatory"),"."),(0,o.kt)("p",null,"The update of the major version indicates a breaking change and the migration is necessary to guarantee the operability of the system."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/FraunhoferISST/diva/releases"},"Releases")," | ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/FraunhoferISST/diva/blob/main/CHANGELOG.md"},"Changelog")," | ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/FraunhoferISST/diva/tree/main/migration"},"Migration tool")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Release"),(0,o.kt)("th",{parentName:"tr",align:null},"Migration"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#v3-3-1"},(0,o.kt)(c,{type:"tip",text:"v3.3.1",vertical:"middle",mdxType:"Badge"}))),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705\ufe0f Not required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#v3-3-0"},(0,o.kt)(c,{type:"tip",text:"v3.3.0",vertical:"middle",mdxType:"Badge"}))),(0,o.kt)("td",{parentName:"tr",align:null},"\ud83c\udd98 Mandatory")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#v3-2-0"},(0,o.kt)(c,{type:"tip",text:"v3.2.0",vertical:"middle",mdxType:"Badge"}))),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705\ufe0f Not required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#v3-1-0"},(0,o.kt)(c,{type:"tip",text:"v3.1.0",vertical:"middle",mdxType:"Badge"}))),(0,o.kt)("td",{parentName:"tr",align:null},"\u26a0\ufe0f Recommended")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#v3-0-3"},(0,o.kt)(c,{type:"tip",text:"v3.0.3",vertical:"middle",mdxType:"Badge"}))),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705\ufe0f Not required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#v3-0-2"},(0,o.kt)(c,{type:"tip",text:"v3.0.2",vertical:"middle",mdxType:"Badge"}))),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705\ufe0f Not required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#v3-0-1"},(0,o.kt)(c,{type:"tip",text:"v3.0.1",vertical:"middle",mdxType:"Badge"}))),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705\ufe0f Not required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#v3-0-0"},(0,o.kt)(c,{type:"tip",text:"v3.0.0",vertical:"middle",mdxType:"Badge"}))),(0,o.kt)("td",{parentName:"tr",align:null},"\u2755   Not available")))),(0,o.kt)("h2",{id:"upgrade-to-the-latest-version"},"Upgrade to the latest version"),(0,o.kt)("p",null,"To bring DIVA up to date, simply download the latest Docker distribution ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-deployment.zip")," from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/FraunhoferISST/diva/releases"},"release page"),".\nIn both cases navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"docker/")," directory to execute the start script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./up_core.sh\n")),(0,o.kt)("h2",{id:"migration-execution"},"Migration execution"),(0,o.kt)("p",null,"To prepare for the migration, deploy the target DIVA version and then execute the migration, if available.\nMake sure your DIVA instance is not actively used in a production environment until the migration is completed to avoid potential inconsistencies."),(0,o.kt)("p",null,"We ship DIVA with a migration Docker service that you can also find in the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker/")," directory.\nThis service is attached to two specific versions, for which the migration is intended.\nSince not all releases need a migration, you may not find a migration service for a particular version.\nIf you want to upgrade from an older version, you must run all intermediate migrations sequentially.\nFor example, to upgrade from ",(0,o.kt)("inlineCode",{parentName:"p"},"v3.0.3")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"3.2.0"),", you have to deploy ",(0,o.kt)("inlineCode",{parentName:"p"},"3.2.0")," and execute the migration for ",(0,o.kt)("inlineCode",{parentName:"p"},"3.1.0"),"."),(0,o.kt)("p",null,"Execute the migration service with the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./migrate.sh\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Make a snapshot of your DIVA environment. It should be ok to save the volumes."))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"After a successful execution, the service should not be executed again, as this may cause undesired side effects."))),(0,o.kt)("h2",{id:"releases"},"Releases"),(0,o.kt)("h3",{id:"v331"},(0,o.kt)("inlineCode",{parentName:"h3"},"v3.3.1")),(0,o.kt)("p",null,"No migration from previous version required"),(0,o.kt)("h3",{id:"v330"},(0,o.kt)("inlineCode",{parentName:"h3"},"v3.3.0")),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"mandatory")," migration is available for DIVA ",(0,o.kt)("strong",{parentName:"p"},"3.3.0"),".\nWe provide a migration service to upgrade DIVA ",(0,o.kt)("strong",{parentName:"p"},"3.2.0")," to ",(0,o.kt)("strong",{parentName:"p"},"3.3.0"),"."),(0,o.kt)("p",null,"Affected Components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"JSON Schema: ",(0,o.kt)("inlineCode",{parentName:"li"},"licenses")," now is an object with more fields. Therefore we need to migrate the ",(0,o.kt)("inlineCode",{parentName:"li"},"licenses")," field in our ",(0,o.kt)("inlineCode",{parentName:"li"},"documentstore")," MongoDB and Elasticsearch.")),(0,o.kt)("h3",{id:"v320"},(0,o.kt)("inlineCode",{parentName:"h3"},"v3.2.0")),(0,o.kt)("p",null,"No migration from previous version required"),(0,o.kt)("h3",{id:"v310"},(0,o.kt)("inlineCode",{parentName:"h3"},"v3.1.0")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"recommended")," migration is available for DIVA ",(0,o.kt)("strong",{parentName:"p"},"3.1.0"),".\nYou can use the migration service to upgrade from DIVA ",(0,o.kt)("strong",{parentName:"p"},">=3.0.0"),"."),(0,o.kt)("p",null,"Affected Components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"DIVA Lake Adapter (DLA)")," - create dedicated MongoDB database, create ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," to uploaded file ",(0,o.kt)("inlineCode",{parentName:"p"},"hash")," mapping.\nRequired for new Resources delete functionality")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"DCS Adapter (DA)")," - create dedicated MongoDB database, migrate MongoDB old ",(0,o.kt)("inlineCode",{parentName:"p"},"dsc")," collection to new database and\ncreat ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"offer")," mapping for all on DSC offered resources. Required for new Resources delete functionality"))),(0,o.kt)("h3",{id:"v303"},(0,o.kt)("inlineCode",{parentName:"h3"},"v3.0.3")),(0,o.kt)("p",null,"No migration from previous version required"),(0,o.kt)("h3",{id:"v302"},(0,o.kt)("inlineCode",{parentName:"h3"},"v3.0.2")),(0,o.kt)("p",null,"No migration from previous version required"),(0,o.kt)("h3",{id:"v301"},(0,o.kt)("inlineCode",{parentName:"h3"},"v3.0.1")),(0,o.kt)("p",null,"No migration from previous version required"),(0,o.kt)("h3",{id:"v300"},(0,o.kt)("inlineCode",{parentName:"h3"},"v3.0.0")),(0,o.kt)("p",null,"No migration service available. Manual migration required"))}h.isMDXComponent=!0}}]);