"use strict";(self.webpackChunkdiva_docs=self.webpackChunkdiva_docs||[]).push([[3085],{6416:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var a=t(7294),l=t(6010),r=t(8277),i=t(5290),c=t(1575),o=t(1944),s=t(5281),u="mdxPageWrapper_zHyg";function m(e){var n=e.content,t=n.metadata,m=t.title,d=t.description,v=t.frontMatter,f=v.wrapperClassName,g=v.hide_table_of_contents;return a.createElement(o.FG,{className:(0,l.Z)(null!=f?f:s.k.wrapper.mdxPages,s.k.page.mdxPage)},a.createElement(o.d,{title:m,description:d}),a.createElement(r.Z,null,a.createElement("main",{className:"container container--fluid margin-vert--lg"},a.createElement("div",{className:(0,l.Z)("row",u)},a.createElement("div",{className:(0,l.Z)("col",!g&&"col--8")},a.createElement(i.Z,null,a.createElement(n,null))),!g&&n.toc&&a.createElement("div",{className:"col col--2"},a.createElement(c.Z,{toc:n.toc,minHeadingLevel:v.toc_min_heading_level,maxHeadingLevel:v.toc_max_heading_level}))))))}},1575:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(7462),l=t(3366),r=t(7294),i=t(6010),c=t(721),o="tableOfContents_cNA8",s=["className"];function u(e){var n=e.className,t=(0,l.Z)(e,s);return r.createElement("div",{className:(0,i.Z)(o,"thin-scrollbar",n)},r.createElement(c.Z,(0,a.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},721:function(e,n,t){t.d(n,{Z:function(){return L}});var a=t(7462),l=t(3366),r=t(7294);function i(e){var n=e.toc,t=e.className,a=e.linkClassName,l=e.isChild;return n.length?r.createElement("ul",{className:l?void 0:t},n.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(i,{isChild:!0,toc:e.children,className:t,linkClassName:a}))}))):null}var c=r.memo(i),o=["parentIndex"];function s(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var a=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),t[e.level]=n}));var a=[];return n.forEach((function(e){var t=e.parentIndex,r=(0,l.Z)(e,o);t>=0?n[t].children.push(r):a.push(r)})),a}function u(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return n.flatMap((function(e){var n=u({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[Object.assign({},e,{children:n})]:n}))}var m=t(6668);function d(e){var n=e.getBoundingClientRect();return n.top===n.bottom?d(e.parentNode):n}function v(e,n){var t,a,l=n.anchorTopOffset,r=e.find((function(e){return d(e).top>=l}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(r))?r:null!=(a=e[e.indexOf(r)-1])?a:null:null!=(t=e[e.length-1])?t:null}function f(){var e=(0,r.useRef)(0),n=(0,m.L)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function g(e){var n=(0,r.useRef)(void 0),t=f();(0,r.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,l=e.linkActiveClassName,r=e.minHeadingLevel,i=e.maxHeadingLevel;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,a=[],l=n;l<=t;l+=1)a.push("h"+l+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),o=v(c,{anchorTopOffset:t.current}),s=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){if(t){var a;n.current&&n.current!==e&&(null==(a=n.current)||a.classList.remove(l)),e.classList.add(l),n.current=e}else e.classList.remove(l)}(e,e===s)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])}var h=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function L(e){var n=e.toc,t=e.className,i=void 0===t?"table-of-contents table-of-contents__left-border":t,o=e.linkClassName,d=void 0===o?"table-of-contents__link":o,v=e.linkActiveClassName,f=void 0===v?void 0:v,L=e.minHeadingLevel,N=e.maxHeadingLevel,p=(0,l.Z)(e,h),H=(0,m.L)(),E=null!=L?L:H.tableOfContents.minHeadingLevel,x=null!=N?N:H.tableOfContents.maxHeadingLevel,C=function(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,r.useMemo)((function(){return u({toc:s(n),minHeadingLevel:t,maxHeadingLevel:a})}),[n,t,a])}({toc:n,minHeadingLevel:E,maxHeadingLevel:x});return g((0,r.useMemo)((function(){if(d&&f)return{linkClassName:d,linkActiveClassName:f,minHeadingLevel:E,maxHeadingLevel:x}}),[d,f,E,x])),r.createElement(c,(0,a.Z)({toc:C,className:i,linkClassName:d},p))}}}]);