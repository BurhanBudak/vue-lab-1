(function(e){function t(t){for(var c,o,l=t[0],s=t[1],b=t[2],d=0,u=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&u.push(a[o][0]),a[o]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);i&&i(t);while(u.length)u.shift()();return r.push.apply(r,b||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,l=1;l<n.length;l++){var s=n[l];0!==a[s]&&(c=!1)}c&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},a={app:0},r=[];function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/ vue-lab-1/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var b=0;b<l.length;b++)t(l[b]);var i=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var c=n("7a23");function a(e,t,n,a,r,o){const l=Object(c["g"])("nav-bar"),s=Object(c["g"])("hero"),b=Object(c["g"])("lowFooter");return Object(c["f"])(),Object(c["b"])("div",null,[Object(c["e"])(l),Object(c["e"])(s),Object(c["e"])(b)])}const r={class:"page-footer font-small bg-primary"},o=Object(c["c"])("div",{class:"footer-copyright text-center py-3 white"},[Object(c["d"])("© 2020 Copyright: "),Object(c["c"])("a",{href:"/"}," MDBootstrap.com")],-1),l=[o];function s(e,t,n,a,o,s){return Object(c["f"])(),Object(c["b"])("footer",r,l)}var b={},i=n("6b0d"),d=n.n(i);const u=d()(b,[["render",s]]);var p=u;const f={class:"container my-5 py-5 z-depth-1"},v={class:"text-center px-md-5 mx-md-5 dark-grey-text"},O=Object(c["c"])("div",{class:"row mb-5"},[Object(c["c"])("div",{class:"col-md-4 mx-auto"},[Object(c["c"])("div",{class:"view mb-4 pb-2"},[Object(c["c"])("img",{src:"https://mdbootstrap.com/img/illustrations/undraw_connected_world_wuay.svg",class:"img-fluid",alt:"smaple image"})])])],-1);function j(e,t,n,a,r,o){return Object(c["f"])(),Object(c["b"])("div",f,[Object(c["c"])("section",v,[O,Object(c["c"])("button",{onClick:t[0]||(t[0]=(...e)=>o.buttonCallForAction&&o.buttonCallForAction(...e)),type:"button",class:"btn btn-deep-purple btn-rounded"},"Call for action")])])}var m={name:"Hero",methods:{buttonCallForAction(){let e="Grattis, du skapade en Navbar, Hero med fucntion och Footer för din första Lab";console.log(e)}}};const g=d()(m,[["render",j]]);var h=g;const y={class:"navbar navbar-expand-lg bg-body-tertiary"},w=Object(c["c"])("div",{class:"container-fluid"},[Object(c["c"])("a",{class:"navbar-brand",href:"#"},"Navbar"),Object(c["c"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["c"])("span",{class:"navbar-toggler-icon"})]),Object(c["c"])("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},[Object(c["c"])("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0"},[Object(c["c"])("li",{class:"nav-item"},[Object(c["c"])("a",{class:"nav-link active","aria-current":"page",href:"#"},"Home")]),Object(c["c"])("li",{class:"nav-item"},[Object(c["c"])("a",{class:"nav-link",href:"#"},"Link")]),Object(c["c"])("li",{class:"nav-item dropdown"},[Object(c["c"])("a",{class:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," Dropdown "),Object(c["c"])("ul",{class:"dropdown-menu"},[Object(c["c"])("li",null,[Object(c["c"])("a",{class:"dropdown-item",href:"#"},"Action")]),Object(c["c"])("li",null,[Object(c["c"])("a",{class:"dropdown-item",href:"#"},"Another action")]),Object(c["c"])("li",null,[Object(c["c"])("hr",{class:"dropdown-divider"})]),Object(c["c"])("li",null,[Object(c["c"])("a",{class:"dropdown-item",href:"#"},"Something else here")])])]),Object(c["c"])("li",{class:"nav-item"},[Object(c["c"])("a",{class:"nav-link disabled"},"Disabled")])]),Object(c["c"])("form",{class:"d-flex",role:"search"},[Object(c["c"])("input",{class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(c["c"])("button",{class:"btn btn-outline-success",type:"submit"},"Search")])])],-1),x=[w];function S(e,t,n,a,r,o){return Object(c["f"])(),Object(c["b"])("nav",y,x)}var k={name:"Navbar"};const C=d()(k,[["render",S]]);var _=C,P={name:"MyApp",components:{NavBar:_,Hero:h,lowFooter:p}};const A=d()(P,[["render",a]]);var F=A;Object(c["a"])(F).mount("#app")}});
//# sourceMappingURL=app.8a08f5d7.js.map