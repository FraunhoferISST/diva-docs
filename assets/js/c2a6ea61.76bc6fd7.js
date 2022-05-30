"use strict";(self.webpackChunkdiva_docs=self.webpackChunkdiva_docs||[]).push([[4464],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5841:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),l=["components"],o={id:"profiling-metadata",title:"Profiling Metadata"},s="Profiling Metadata",c={unversionedId:"User-Docs/Details/profiling-metadata",id:"User-Docs/Details/profiling-metadata",title:"Profiling Metadata",description:"Currently we support automatic analysis of 5 different file types.",source:"@site/docs/02-User-Docs/08-Details/04-profiling-metadata.md",sourceDirName:"02-User-Docs/08-Details",slug:"/User-Docs/Details/profiling-metadata",permalink:"/diva-docs/docs/next/User-Docs/Details/profiling-metadata",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"profiling-metadata",title:"Profiling Metadata"},sidebar:"divaSidebar",previous:{title:"Asset Data Network",permalink:"/diva-docs/docs/next/User-Docs/Details/asset-data-network"},next:{title:"Introduction",permalink:"/diva-docs/docs/next/Deployment/introduction"}},p={},u=[{value:"Text Files",id:"text-files",level:2},{value:"Table Files",id:"table-files",level:2},{value:"Image Files",id:"image-files",level:2}],d={toc:u};function m(e){var t=e.components,o=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"profiling-metadata"},"Profiling Metadata"),(0,r.kt)("p",null,"Currently we support automatic analysis of ",(0,r.kt)("strong",{parentName:"p"},"5")," different file types.\nThe metadata is only populated by our automatic profiling and cannot be edited.\nThis is because we want to preserve the objective analysis by a computer system here."),(0,r.kt)("h2",{id:"text-files"},"Text Files"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"application/pdf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"text/plain"))),(0,r.kt)("p",null,"The automatic analyses are listed and explained below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A set of simple metadata is extracted from the text file (size, PDF version, creation date, ...)"),(0,r.kt)("li",{parentName:"ul"},"We are trying to determine the language of the text. A score is additionally stored, which indicates the confidence."),(0,r.kt)("li",{parentName:"ul"},"Keywords are extracted automatically. These are displayed on the main page of the entity."),(0,r.kt)("li",{parentName:"ul"},"Key phrases are extracted using two algorithms. Currently, these are ",(0,r.kt)("strong",{parentName:"li"},"LSA")," and ",(0,r.kt)("strong",{parentName:"li"},"Luhn"),"."),(0,r.kt)("li",{parentName:"ul"},"A simple statistical evaluation on the distribution of charcters and number of different tokens (words, sentences, and characters)."),(0,r.kt)("li",{parentName:"ul"},"We perform a scan for personal data and give a score between 0 and 100, where 100 means that the resource is very likely to be GDPR relevant.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DIVA Text Profiling",src:a(6046).Z,width:"1924",height:"1194"})),(0,r.kt)("h2",{id:"table-files"},"Table Files"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"text/csv")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"application/x-sas-data"))),(0,r.kt)("p",null,"The automatic analyses are listed and explained below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We extract the schema of the table and visualize it."),(0,r.kt)("li",{parentName:"ul"},"We perform a statistical analysis that looks at each column and extracts key metrics."),(0,r.kt)("li",{parentName:"ul"},"We extract a sample set of the table to give an insight into the data.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DIVA Table Data Profiling",src:a(6990).Z,width:"1933",height:"3158"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DIVA Table Data Sample",src:a(831).Z,width:"1933",height:"1305"})),(0,r.kt)("h2",{id:"image-files"},"Image Files"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"image/jpeg"))),(0,r.kt)("p",null,"The automatic analyses are listed and explained below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We create a thumbnail so that you can see which image we are dealing with."),(0,r.kt)("li",{parentName:"ul"},"We try to recognize the objects seen in the picture."),(0,r.kt)("li",{parentName:"ul"},"We try to generate a caption for the image."),(0,r.kt)("li",{parentName:"ul"},"We perform OCR text recognition on the image to make text on images search relevant in our catalog as well."),(0,r.kt)("li",{parentName:"ul"},"We extract EXIF metadata, e.g. about the camera with which the photo was taken.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DIVA Image Profiling",src:a(1847).Z,width:"1930",height:"1136"})))}m.isMDXComponent=!0},1847:function(e,t,a){t.Z=a.p+"assets/images/profiling_images-6a2a2207227e980460167a2d5326c977.png"},6990:function(e,t,a){t.Z=a.p+"assets/images/profiling_tabledata-1a45667bee9e4716055da056157febbb.png"},6046:function(e,t,a){t.Z=a.p+"assets/images/profiling_text-1a27099ccbb479ca559ea7e17e1b6fbe.png"},831:function(e,t,a){t.Z=a.p+"assets/images/tabledata_sample-11a34745552ea62e1cd0f5acbd673221.png"}}]);