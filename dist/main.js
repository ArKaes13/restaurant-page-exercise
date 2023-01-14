(()=>{var e={28:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(81),o=n.n(r),i=n(645),a=n.n(i),c=n(667),s=n.n(c),u=new URL(n(547),n.b),l=a()(o()),d=s()(u);l.push([e.id,"html {\r\n    font-size: 10px;\r\n}\r\n\r\nbody {\r\n    background-image: url("+d+");\r\n    margin: 0;\r\n    /* display: flex;\r\n    flex-direction: column;\r\n    align-items: center; */\r\n    /* height: 100vh; */\r\n}\r\n\r\nbody div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    height: 100vh;\r\n}\r\n\r\nheader {\r\n    display: grid;\r\n    grid-template-columns: 10rem 10rem 10rem;\r\n    grid-template-rows: 2fr 1fr;\r\n    justify-content: center;\r\n    background-color: black;\r\n    color: white;\r\n    padding: 1rem 0 1rem 0;\r\n    width: 100%;\r\n}\r\n\r\nheader h1 {\r\n    grid-column: 1 / 4;\r\n    justify-self: center;\r\n    font-size: 5rem;\r\n    font-family: 'Dancing Script', sans-serif;\r\n    margin: 1rem 0 1rem 0\r\n}\r\n\r\nheader button {\r\n    background-color: transparent;\r\n    color: white;\r\n    font-size: 2rem;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.active {\r\n    border-bottom: 2px solid white;\r\n}\r\n\r\nmain {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-color: rgba(0, 0, 0, .7);\r\n    width: 50rem;\r\n    height: 45rem;\r\n    margin: 5rem 0 0 0;\r\n}\r\n\r\nmain p {\r\n    color: white;\r\n    font-size: 2rem;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\nmain img {\r\n    width: 30rem;\r\n    height: 30rem;\r\n    border-radius: 50%;\r\n    object-fit: cover;\r\n}\r\n\r\nfooter {\r\n    display: flex;\r\n    justify-content: center;\r\n    color: white;\r\n    background-color: rgba(0, 0, 0, .7);\r\n    width: 100%;\r\n    margin: auto 0 0 0;\r\n    font-size: 1.2rem;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\nfooter a {\r\n    text-decoration: none;\r\n    color: white;\r\n}",""]);const p=l},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],l=i[u]||0,d="".concat(u," ").concat(l);i[u]=l+1;var p=n(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:m,references:1})}a.push(d)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=r(e,o),u=0;u<i.length;u++){var l=n(i[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},637:()=>{},83:()=>{},547:(e,t,n)=>{"use strict";e.exports=n.p+"b5283d22b84f58ceab04.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),a=n.n(i),c=n(565),s=n.n(c),u=n(216),l=n.n(u),d=n(589),p=n.n(d),f=n(28),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=n.p+"6a9156a6c1e1360d1478.jpg",v=function(){const e=document.querySelector("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div"),t=document.createElement("img");t.src=h,t.alt="Sushi Chef";const n=document.createElement("p");n.textContent="Authentic Sushi since 1950";const r=document.createElement("p");return r.textContent="Order Online or Dine In!",e.appendChild(n),e.appendChild(t),e.appendChild(r),e}())};var g=n(83),b=n.n(g),y=n(637),x=n.n(y);function C(e){document.querySelectorAll("button").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}!function(){const e=document.querySelector(".content");e.appendChild(function(){const e=document.createElement("header"),t=document.createElement("h1");t.textContent="Sushi Bar";const n=document.createElement("button");n.textContent="Home",n.addEventListener("click",(e=>{e.target.classList.contains("active")||(C(n),v())}));const r=document.createElement("button");r.textContent="Menu",r.addEventListener("click",(e=>{e.target.classList.contains("active")||(C(r),b()())}));const o=document.createElement("button");return o.textContent="Contact",o.addEventListener("click",(e=>{e.target.classList.contains("active")||(C(o),x()())})),e.appendChild(t),e.appendChild(n),e.appendChild(r),e.appendChild(o),e}()),e.appendChild(document.createElement("main")),e.appendChild(function(){const e=document.createElement("footer"),t=document.createElement("p");return t.innerHTML=`&copy; ${(new Date).getFullYear()} Tyler Montgomery <a href='https://github.com/ArKaes13' <i class='fa-brands fa-github'>`,e.appendChild(t),e}()),C(document.querySelector("button")),v()}()})()})();