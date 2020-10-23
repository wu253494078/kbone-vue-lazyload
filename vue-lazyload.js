/*!
 * Vue-Lazyload.js v1.3.17
 * (c) 2020 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.VueLazyload=t()}(this,function(){"use strict";function e(e){return e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function t(e){e=e||{};var t=arguments.length,i=0;if(1===t)return e;for(;++i<t;){var o=arguments[i];m(e)&&(e=o),r(o)&&n(e,o)}return e}function n(e,n){w(e,n);for(var a in n)if(o(a)&&i(n,a)){var s=n[a];r(s)?("undefined"===_(e[a])&&"function"===_(s)&&(e[a]=s),e[a]=t(e[a]||{},s)):e[a]=s}return e}function r(e){return"object"===_(e)||"function"===_(e)}function i(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function o(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e}function a(e,t){if(e.length){var n=e.indexOf(t);return n>-1?e.splice(n,1):void 0}}function s(e,t){for(var n=!1,r=0,i=e.length;r<i;r++)if(t(e[r])){n=!0;break}return n}function u(e,t){if("IMG"===e.tagName&&e.getAttribute("data-srcset")){var n=e.getAttribute("data-srcset"),r=[],i=e.parentNode,o=i.offsetWidth*t,a=void 0,s=void 0,u=void 0;n=n.trim().split(","),n.map(function(e){e=e.trim(),a=e.lastIndexOf(" "),-1===a?(s=e,u=999998):(s=e.substr(0,a),u=parseInt(e.substr(a+1,e.length-a-2),10)),r.push([u,s])}),r.sort(function(e,t){if(e[0]<t[0])return 1;if(e[0]>t[0])return-1;if(e[0]===t[0]){if(-1!==t[1].indexOf(".webp",t[1].length-5))return 1;if(-1!==e[1].indexOf(".webp",e[1].length-5))return-1}return 0});for(var c="",d=void 0,l=0;l<r.length;l++){d=r[l],c=d[1];var h=r[l+1];if(h&&h[0]<o){c=d[1];break}if(!h){c=d[1];break}}return c}}function c(e,t){for(var n=void 0,r=0,i=e.length;r<i;r++)if(t(e[r])){n=e[r];break}return n}function d(){if(!k)return!1;var e=!0;try{var t=document.createElement("canvas");t.getContext&&t.getContext("2d")&&(e=0===t.toDataURL("image/webp").indexOf("data:image/webp"))}catch(t){e=!1}return e}function l(e,t){var n=null,r=0;return function(){if(!n){var i=Date.now()-r,o=this,a=arguments,s=function(){r=Date.now(),n=!1,e.apply(o,a)};i>=t?s():n=setTimeout(s,t)}}}function h(e){return null!==e&&"object"===(void 0===e?"undefined":g(e))}function f(e){if(!(e instanceof Object))return[];if(Object.keys)return Object.keys(e);var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t}function v(e){for(var t=e.length,n=[],r=0;r<t;r++)n.push(e[r]);return n}function p(){}var g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),m=function(e){return null==e||"function"!=typeof e&&"object"!==(void 0===e?"undefined":g(e))},w=function(e,t){if(null===e||void 0===e)throw new TypeError("expected first argument to be an object.");if(void 0===t||"undefined"==typeof Symbol)return e;if("function"!=typeof Object.getOwnPropertySymbols)return e;for(var n=Object.prototype.propertyIsEnumerable,r=Object(e),i=arguments.length,o=0;++o<i;)for(var a=Object(arguments[o]),s=Object.getOwnPropertySymbols(a),u=0;u<s.length;u++){var c=s[u];n.call(a,c)&&(r[c]=a[c])}return r},L=Object.prototype.toString,_=function(t){var n=void 0===t?"undefined":g(t);return"undefined"===n?"undefined":null===t?"null":!0===t||!1===t||t instanceof Boolean?"boolean":"string"===n||t instanceof String?"string":"number"===n||t instanceof Number?"number":"function"===n||t instanceof Function?void 0!==t.constructor.name&&"Generator"===t.constructor.name.slice(0,9)?"generatorfunction":"function":void 0!==Array.isArray&&Array.isArray(t)?"array":t instanceof RegExp?"regexp":t instanceof Date?"date":(n=L.call(t),"[object RegExp]"===n?"regexp":"[object Date]"===n?"date":"[object Arguments]"===n?"arguments":"[object Error]"===n?"error":"[object Promise]"===n?"promise":e(t)?"buffer":"[object Set]"===n?"set":"[object WeakSet]"===n?"weakset":"[object Map]"===n?"map":"[object WeakMap]"===n?"weakmap":"[object Symbol]"===n?"symbol":"[object Map Iterator]"===n?"mapiterator":"[object Set Iterator]"===n?"setiterator":"[object String Iterator]"===n?"stringiterator":"[object Array Iterator]"===n?"arrayiterator":"[object Int8Array]"===n?"int8array":"[object Uint8Array]"===n?"uint8array":"[object Uint8ClampedArray]"===n?"uint8clampedarray":"[object Int16Array]"===n?"int16array":"[object Uint16Array]"===n?"uint16array":"[object Int32Array]"===n?"int32array":"[object Uint32Array]"===n?"uint32array":"[object Float32Array]"===n?"float32array":"[object Float64Array]"===n?"float64array":"object")},E=t,k=!0,A=function(){return!!(k&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)&&("isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}}),!0)}(),$={event:"event",observer:"observer"},z=function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}if(k)return"function"==typeof window.CustomEvent?window.CustomEvent:(e.prototype=window.Event.prototype,e)}(),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return k?window.devicePixelRatio||e:e},I=function(){if(k){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(e){}return e}}(),O={on:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];I?e.addEventListener(t,n,{capture:r,passive:!0}):e.addEventListener(t,n,r)},off:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.removeEventListener(t,n,r)}},x=function(e,t,n){var r=document.createElement("img");if(!e||!e.src){var i=new Error("image src is required");return n(i)}r.src=e.src,e.cors&&(r.crossOrigin=e.cors),r.onload=function(){t({naturalHeight:r.naturalHeight,naturalWidth:r.naturalWidth,src:r.src})},r.onerror=function(t){console.log(e,r,t,"图片加载失败"),n(t)}},T=function(e,t){window.$$getComputedStyle(e,[t]).then(function(e){return e.prop})},S=function(e){return T(e,"overflow")+T(e,"overflow-y")+T(e,"overflow-x")},C=function(e){if(k){if(!(e instanceof HTMLElement))return window;for(var t=e;t&&t!==document.body&&t!==document.documentElement&&t.parentNode;){if(/(scroll|auto)/.test(S(t)))return t;t=t.parentNode}return window}},H=function(){function e(t){var n=t.max;b(this,e),this.options={max:n||100},this._caches=[]}return y(e,[{key:"has",value:function(e){return this._caches.indexOf(e)>-1}},{key:"add",value:function(e){this.has(e)||(this._caches.push(e),this._caches.length>this.options.max&&this.free())}},{key:"free",value:function(){this._caches.shift()}}]),e}(),R=function(){function e(t){var n=t.el,r=t.src,i=t.error,o=t.loading,a=t.bindType,s=t.$parent,u=t.options,c=t.cors,d=t.elRenderer,l=t.imageCache;b(this,e),this.el=n,this.src=r,this.error=i,this.loading=o,this.bindType=a,this.attempt=0,this.cors=c,this.naturalHeight=0,this.naturalWidth=0,this.options=u,this.rect=null,this.isInView=!1,this.$parent=s,this.elRenderer=d,this._imageCache=l,this.performanceData={init:Date.now(),loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}return y(e,[{key:"initState",value:function(){"dataset"in this.el?this.el.dataset.src=this.src:this.el.setAttribute("data-src",this.src),this.state={loading:!1,error:!1,loaded:!1,rendered:!1}}},{key:"record",value:function(e){this.performanceData[e]=Date.now()}},{key:"update",value:function(e){var t=e.src,n=e.loading,r=e.error,i=this.src;this.src=t,this.loading=n,this.error=r,this.filter(),i!==this.src&&(this.attempt=0,this.initState())}},{key:"getRect",value:function(){var e=this;this.el.$$getBoundingClientRect().then(function(t){e.rect=t})}},{key:"checkInView",value:function(){var e=this;this.el.$$getBoundingClientRect().then(function(t){e.rect=t,e.isInView=e.rect.top<window.innerHeight*e.options.preLoad&&e.rect.bottom>e.options.preLoadTop&&e.rect.left<window.innerWidth*e.options.preLoad&&e.rect.right>0})}},{key:"filter",value:function(){var e=this;f(this.options.filter).map(function(t){e.options.filter[t](e,e.options)})}},{key:"renderLoading",value:function(e){var t=this;this.state.loading=!0,x({src:this.loading,cors:this.cors},function(n){t.render("loading",!1),t.state.loading=!1,e()},function(){e(),t.state.loading=!1,t.options.silent||console.warn("VueLazyload log: load failed with loading image("+t.loading+")")})}},{key:"load",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return this.attempt>this.options.attempt-1&&this.state.error?(this.options.silent||console.log("VueLazyload log: "+this.src+" tried too more than "+this.options.attempt+" times"),void t()):this.state.rendered&&this.state.loaded?void 0:this._imageCache.has(this.src)?(this.state.loaded=!0,this.render("loaded",!0),this.state.rendered=!0,t()):void this.renderLoading(function(){e.attempt++,e.options.adapter.beforeLoad&&e.options.adapter.beforeLoad(e,e.options),e.record("loadStart"),x({src:e.src,cors:e.cors},function(n){e.naturalHeight=n.naturalHeight,e.naturalWidth=n.naturalWidth,e.state.loaded=!0,e.state.error=!1,e.record("loadEnd"),e.render("loaded",!1),e.state.rendered=!0,e._imageCache.add(e.src),t()},function(t){!e.options.silent&&console.error(t),e.state.error=!0,e.state.loaded=!1,e.render("error",!1)})})}},{key:"render",value:function(e,t){this.elRenderer(this,e,t)}},{key:"performance",value:function(){var e="loading",t=0;return this.state.loaded&&(e="loaded",t=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(e="error"),{src:this.src,state:e,time:t}}},{key:"$destroy",value:function(){this.el=null,this.src=null,this.error=null,this.loading=null,this.bindType=null,this.attempt=0}}]),e}(),Q="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",V=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],B={rootMargin:"0px",threshold:0},D=function(e){return function(){function t(e){var n=e.preLoad,r=e.error,i=e.throttleWait,o=e.preLoadTop,a=e.dispatchEvent,s=e.loading,u=e.attempt,c=e.silent,h=void 0===c||c,f=e.scale,v=e.listenEvents,p=(e.hasbind,e.filter),g=e.adapter,y=e.observer,m=e.observerOptions;b(this,t),this.version="1.3.17",this.mode=$.event,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:h,dispatchEvent:!!a,throttleWait:i||200,preLoad:n||1.3,preLoadTop:o||0,error:r||Q,loading:s||Q,attempt:u||3,scale:f||j(f),ListenEvents:v||V,hasbind:!1,supportWebp:d(),filter:p||{},adapter:g||{},observer:!!y,observerOptions:m||B},this._initEvent(),this._imageCache=new H({max:200}),this.lazyLoadHandler=l(this._lazyLoadHandler.bind(this),this.options.throttleWait),this.setMode(this.options.observer?$.observer:$.event)}return y(t,[{key:"config",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};E(this.options,e)}},{key:"performance",value:function(){var e=[];return this.ListenerQueue.map(function(t){e.push(t.performance())}),e}},{key:"addLazyBox",value:function(e){this.ListenerQueue.push(e),k&&(this._addListenerTarget(window),this._observer&&this._observer.observe(e.el),e.$el&&e.$el.parentNode&&this._addListenerTarget(e.$el.parentNode))}},{key:"add",value:function(t,n,r){var i=this;if(s(this.ListenerQueue,function(e){return e.el===t}))return this.update(t,n),e.nextTick(this.lazyLoadHandler);var o=this._valueFormatter(n.value),a=o.src,c=o.loading,d=o.error,l=o.cors;e.nextTick(function(){a=u(t,i.options.scale)||a,i._observer&&i._observer.observe(t);var o=Object.keys(n.modifiers)[0],s=void 0;o&&(s=r.context.$refs[o],s=s?s.$el||s:document.getElementById(o)),s||(s=C(t));var h=new R({bindType:n.arg,$parent:s,el:t,loading:c,error:d,src:a,cors:l,elRenderer:i._elRenderer.bind(i),options:i.options,imageCache:i._imageCache});i.ListenerQueue.push(h),k&&(i._addListenerTarget(window),i._addListenerTarget(s)),i.lazyLoadHandler(),e.nextTick(function(){return i.lazyLoadHandler()})})}},{key:"update",value:function(t,n,r){var i=this,o=this._valueFormatter(n.value),a=o.src,s=o.loading,d=o.error;a=u(t,this.options.scale)||a;var l=c(this.ListenerQueue,function(e){return e.el===t});l?l.update({src:a,loading:s,error:d}):this.add(t,n,r),this._observer&&(this._observer.unobserve(t),this._observer.observe(t)),this.lazyLoadHandler(),e.nextTick(function(){return i.lazyLoadHandler()})}},{key:"remove",value:function(e){if(e){this._observer&&this._observer.unobserve(e);var t=c(this.ListenerQueue,function(t){return t.el===e});t&&(this._removeListenerTarget(t.$parent),this._removeListenerTarget(window),a(this.ListenerQueue,t),t.$destroy())}}},{key:"removeComponent",value:function(e){e&&(a(this.ListenerQueue,e),this._observer&&this._observer.unobserve(e.el),e.$parent&&e.$el.parentNode&&this._removeListenerTarget(e.$el.parentNode),this._removeListenerTarget(window))}},{key:"setMode",value:function(e){var t=this;A||e!==$.observer||(e=$.event),this.mode=e,e===$.event?(this._observer&&(this.ListenerQueue.forEach(function(e){t._observer.unobserve(e.el)}),this._observer=null),this.TargetQueue.forEach(function(e){t._initListen(e.el,!0)})):(this.TargetQueue.forEach(function(e){t._initListen(e.el,!1)}),this._initIntersectionObserver())}},{key:"_addListenerTarget",value:function(e){if(e){var t=c(this.TargetQueue,function(t){return t.el===e});return t?t.childrenCount++:(t={el:e,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===$.event&&this._initListen(t.el,!0),this.TargetQueue.push(t)),this.TargetIndex}}},{key:"_removeListenerTarget",value:function(e){var t=this;this.TargetQueue.forEach(function(n,r){n.el===e&&(--n.childrenCount||(t._initListen(n.el,!1),t.TargetQueue.splice(r,1),n=null))})}},{key:"_initListen",value:function(e,t){var n=this;this.options.ListenEvents.forEach(function(r){return O[t?"on":"off"](e,r,n.lazyLoadHandler)})}},{key:"_initEvent",value:function(){var e=this;this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=function(t,n){e.Event.listeners[t]||(e.Event.listeners[t]=[]),e.Event.listeners[t].push(n)},this.$once=function(t,n){function r(){i.$off(t,r),n.apply(i,arguments)}var i=e;e.$on(t,r)},this.$off=function(t,n){if(!n){if(!e.Event.listeners[t])return;return void(e.Event.listeners[t].length=0)}a(e.Event.listeners[t],n)},this.$emit=function(t,n,r){e.Event.listeners[t]&&e.Event.listeners[t].forEach(function(e){return e(n,r)})}}},{key:"_lazyLoadHandler",value:function(){var e=this,t=[];this.ListenerQueue.forEach(function(e,n){e.el&&e.el.parentNode||t.push(e);e.checkInView();e.isInView&&e.load()}),t.forEach(function(t){a(e.ListenerQueue,t),t.$destroy()})}},{key:"_initIntersectionObserver",value:function(){var e=this;A&&(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach(function(t){e._observer.observe(t.el)}))}},{key:"_observerHandler",value:function(e,t){var n=this;e.forEach(function(e){e.isIntersecting&&n.ListenerQueue.forEach(function(t){if(t.el===e.target){if(t.state.loaded)return n._observer.unobserve(t.el);t.load()}})})}},{key:"_elRenderer",value:function(e,t,n){if(e.el){var r=e.el,i=e.bindType,o=void 0;switch(t){case"loading":o=e.loading;break;case"error":o=e.error;break;default:o=e.src}if(i?r.style[i]='url("'+o+'")':r.getAttribute("src")!==o&&r.setAttribute("src",o),r.setAttribute("lazy",t),this.$emit(t,e,n),this.options.adapter[t]&&this.options.adapter[t](e,this.options),this.options.dispatchEvent){var a=new z(t,{detail:e});r.dispatchEvent(a)}}}},{key:"_valueFormatter",value:function(e){var t=e,n=this.options.loading,r=this.options.error;return h(e)&&(e.src||this.options.silent||console.error("Vue Lazyload warning: miss src with "+e),t=e.src,n=e.loading||this.options.loading,r=e.error||this.options.error),{src:t,loading:n,error:r}}}]),t}()},W=function(e){return{props:{tag:{type:String,default:"div"}},render:function(e){return e(this.tag,null,this.show?this.$slots.default:null)},data:function(){return{el:null,state:{loaded:!1},rect:{},show:!1,isInView:!1}},mounted:function(){this.el=this.$el,e.addLazyBox(this),e.lazyLoadHandler()},beforeDestroy:function(){e.removeComponent(this)},methods:{getRect:function(){var e=this;this.$el.$$getBoundingClientRect().then(function(t){e.rect=t})},checkInView:function(){var t=this;this.$el.$$getBoundingClientRect().then(function(n){t.rect=n,t.isInView=k&&t.rect.top<window.innerHeight*e.options.preLoad&&t.rect.bottom>0&&t.rect.left<window.innerWidth*e.options.preLoad&&t.rect.right>0})},load:function(){this.show=!0,this.state.loaded=!0,this.$emit("show",this)},destroy:function(){return this.$destroy}}}},N=function(){function e(t){var n=t.lazy;b(this,e),this.lazy=n,n.lazyContainerMananger=this,this._queue=[]}return y(e,[{key:"bind",value:function(e,t,n){var r=new M({el:e,binding:t,vnode:n,lazy:this.lazy});this._queue.push(r)}},{key:"update",value:function(e,t,n){var r=c(this._queue,function(t){return t.el===e});r&&r.update({el:e,binding:t,vnode:n})}},{key:"unbind",value:function(e,t,n){var r=c(this._queue,function(t){return t.el===e});r&&(r.clear(),a(this._queue,r))}}]),e}(),P={selector:"img"},M=function(){function e(t){var n=t.el,r=t.binding,i=t.vnode,o=t.lazy;b(this,e),this.el=null,this.vnode=i,this.binding=r,this.options={},this.lazy=o,this._queue=[],this.update({el:n,binding:r})}return y(e,[{key:"update",value:function(e){var t=this,n=e.el,r=e.binding;this.el=n,this.options=E({},P,r.value),this.getImgs().forEach(function(e){t.lazy.add(e,E({},t.binding,{value:{src:"dataset"in e?e.dataset.src:e.getAttribute("data-src"),error:("dataset"in e?e.dataset.error:e.getAttribute("data-error"))||t.options.error,loading:("dataset"in e?e.dataset.loading:e.getAttribute("data-loading"))||t.options.loading}}),t.vnode)})}},{key:"getImgs",value:function(){return v(this.el.querySelectorAll(this.options.selector))}},{key:"clear",value:function(){var e=this;this.getImgs().forEach(function(t){return e.lazy.remove(t)}),this.vnode=null,this.binding=null,this.lazy=null}}]),e}(),q=function(e){return{props:{src:[String,Object],tag:{type:String,default:"img"}},render:function(e){return e(this.tag,{attrs:{src:this.renderSrc}},this.$slots.default)},data:function(){return{el:null,options:{src:"",error:"",loading:"",attempt:e.options.attempt},state:{loaded:!1,error:!1,attempt:0},rect:{},renderSrc:"",isInView:!1}},watch:{src:function(){this.init(),e.addLazyBox(this),e.lazyLoadHandler()}},created:function(){this.init(),this.renderSrc=this.options.loading},mounted:function(){this.el=this.$el,e.addLazyBox(this),e.lazyLoadHandler()},beforeDestroy:function(){e.removeComponent(this)},methods:{init:function(){var t=e._valueFormatter(this.src),n=t.src,r=t.loading,i=t.error;this.state.loaded=!1,this.options.src=n,this.options.error=i,this.options.loading=r,this.renderSrc=this.options.loading},getRect:function(){var e=this;this.$el.$$getBoundingClientRect().then(function(t){e.rect=t})},checkInView:function(){var t=this;this.$el.$$getBoundingClientRect().then(function(n){t.rect=n,t.isInView=k&&t.rect.top<window.innerHeight*e.options.preLoad&&t.rect.bottom>0&&t.rect.left<window.innerWidth*e.options.preLoad&&t.rect.right>0})},load:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;if(this.state.attempt>this.options.attempt-1&&this.state.error)return e.options.silent||console.log("VueLazyload log: "+this.options.src+" tried too more than "+this.options.attempt+" times"),void n();var r=this.options.src;x({src:r},function(e){var n=e.src;t.renderSrc=n,t.state.loaded=!0},function(e){t.state.attempt++,t.renderSrc=t.options.error,t.state.error=!0})}}}};return{install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=D(e),r=new n(t),i=new N({lazy:r}),o="2"===e.version.split(".")[0];e.prototype.$Lazyload=r,t.lazyComponent&&e.component("lazy-component",W(r)),t.lazyImage&&e.component("lazy-image",q(r)),o?(e.directive("lazy",{bind:r.add.bind(r),update:r.update.bind(r),componentUpdated:r.lazyLoadHandler.bind(r),unbind:r.remove.bind(r)}),e.directive("lazy-container",{bind:i.bind.bind(i),componentUpdated:i.update.bind(i),unbind:i.unbind.bind(i)})):(e.directive("lazy",{bind:r.lazyLoadHandler.bind(r),update:function(e,t){E(this.vm.$refs,this.vm.$els),r.add(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:e,oldValue:t},{context:this.vm})},unbind:function(){r.remove(this.el)}}),e.directive("lazy-container",{update:function(e,t){i.update(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:e,oldValue:t},{context:this.vm})},unbind:function(){i.unbind(this.el)}}))}}});
