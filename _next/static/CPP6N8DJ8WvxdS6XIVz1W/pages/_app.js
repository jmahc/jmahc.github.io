(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=l,e.useAmp=function(){return l(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,a=void 0!==r&&r,o=t.hasQuery;return n||a&&(void 0!==o&&o)}},0:function(t,e,n){n("GcxT"),t.exports=n("nOHt")},"5fIB":function(t,e,n){var r=n("7eYB");t.exports=function(t){if(Array.isArray(t))return r(t)}},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},"8Kt/":function(t,e,n){"use strict";e.__esModule=!0,e.defaultHead=u,e.default=void 0;var r=s(n("q1tI")),a=s(n("Xuae")),o=n("lwAK"),l=n("FYa8"),i=n("/0+H");function s(t){return t&&t.__esModule?t:{default:t}}function u(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[r.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function c(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===r.default.Fragment?t.concat(r.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var f=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=r.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(c,[]).reverse().concat(u(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var l=a.key.slice(a.key.indexOf("$")+1);t.has(l)?o=!1:t.add(l)}switch(a.type){case"title":case"base":e.has(a.type)?o=!1:e.add(a.type);break;case"meta":for(var i=0,s=f.length;i<s;i++){var u=f[i];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var c=a.props[u],p=r[u]||new Set;p.has(c)?o=!1:(p.add(c),r[u]=p)}}}return o}}()).reverse().map((function(t,e){var n=t.key||e;return r.default.cloneElement(t,{key:n})}))}var m=(0,a.default)();function d(t){var e=t.children;return(r.default.createElement(o.AmpStateContext.Consumer,null,(function(t){return r.default.createElement(l.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(m,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:(0,i.isInAmpMode)(t)},e)}))})))}d.rewind=m.rewind;var y=d;e.default=y},B5Ud:function(t,e,n){"use strict";var r=n("vJKn"),a=n("/GRZ"),o=n("i2R6"),l=n("48fX"),i=n("tCBg"),s=n("T0f4"),u=n("qVT1");function c(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}var f=n("AroE");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=g,e.default=void 0;var p=f(n("q1tI")),m=n("g/15");function d(t){return y.apply(this,arguments)}function y(){return(y=u(r.mark((function t(e){var n,a,o;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.Component,a=e.ctx,t.next=3,(0,m.loadGetInitialProps)(n,a);case 3:return o=t.sent,t.abrupt("return",{pageProps:o});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.AppInitialProps=m.AppInitialProps;var h=function(t){l(n,t);var e=c(n);function n(){return a(this,n),e.apply(this,arguments)}return o(n,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,a=t.__N_SSG,o=t.__N_SSP;return(p.default.createElement(n,Object.assign({},r,a||o?{}:{url:g(e)})))}}]),n}(p.default.Component);function g(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",a=n||e;return t.push(r,a)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",a=n||e;return t.replace(r,a)}}}e.default=h,h.origGetInitialProps=d,h.getInitialProps=d},FYa8:function(t,e,n){"use strict";var r;e.__esModule=!0,e.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);e.HeadManagerContext=a},GcxT:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("IlR1")}])},IlR1:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return _}));var r=n("o0o1"),a=n.n(r);function o(t,e,n,r,a,o,l){try{var i=t[o](l),s=i.value}catch(u){return void n(u)}i.done?e(s):Promise.resolve(s).then(r,a)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){return!e||"object"!==s(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var f=n("q1tI"),p=n.n(f),m=n("8Bbg"),d=n.n(m),y=n("8Kt/"),h=n.n(y);function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,o=void 0;try{for(var l,i=t[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return g(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var x=p.a.createElement;function v(t){var e=b(p.a.useState(!1),2),n=e[0],r=e[1];return x(p.a.Fragment,null,x("nav",{className:(t.transparent?"top-0 absolute z-50 w-full":"relative shadow-lg bg-white shadow-lg")+" flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"},x("div",{className:"container px-4 mx-auto flex flex-wrap items-center justify-between"},x("div",{className:"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"},x("span",{className:(t.transparent?"text-white":"text-gray-800")+" text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"},"Shalito Page"),x("button",{className:"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",type:"button",onClick:function(){return r(!n)}},x("i",{className:(t.transparent?"text-white":"text-gray-800")+" fas fa-bars"}))),x("div",{className:"lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none"+(n?" block rounded shadow-lg":" hidden"),id:"example-navbar-warning"},x("ul",{className:"flex flex-col lg:flex-row list-none mr-auto"},x("li",{className:"flex items-center"},x("a",{className:(t.transparent?"lg:text-white lg:hover:text-gray-300 text-gray-800":"text-gray-800 hover:text-gray-600")+" px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",href:"https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/profile"},x("i",{className:(t.transparent?"lg:text-gray-300 text-gray-500":"text-gray-500")+" far fa-file-alt text-lg leading-lg mr-2"})," ","Docs"))),x("ul",{className:"flex flex-col lg:flex-row list-none lg:ml-auto"},x("li",{className:"flex items-center"},x("a",{className:(t.transparent?"lg:text-white lg:hover:text-gray-300 text-gray-800":"text-gray-800 hover:text-gray-600")+" px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",href:"#pablo"},x("i",{className:(t.transparent?"lg:text-gray-300 text-gray-500":"text-gray-500")+" fab fa-facebook text-lg leading-lg "}),x("span",{className:"lg:hidden inline-block ml-2"},"Share"))),x("li",{className:"flex items-center"},x("a",{className:(t.transparent?"lg:text-white lg:hover:text-gray-300 text-gray-800":"text-gray-800 hover:text-gray-600")+" px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",href:"#pablo"},x("i",{className:(t.transparent?"lg:text-gray-300 text-gray-500":"text-gray-500")+" fab fa-twitter text-lg leading-lg "}),x("span",{className:"lg:hidden inline-block ml-2"},"Tweet"))),x("li",{className:"flex items-center"},x("a",{className:(t.transparent?"lg:text-white lg:hover:text-gray-300 text-gray-800":"text-gray-800 hover:text-gray-600")+" px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",href:"#pablo"},x("i",{className:(t.transparent?"lg:text-gray-300 text-gray-500":"text-gray-500")+" fab fa-github text-lg leading-lg "}),x("span",{className:"lg:hidden inline-block ml-2"},"Star"))),x("li",{className:"flex items-center"},x("button",{className:(t.transparent?"bg-white text-gray-800 active:bg-gray-100":"bg-blue-500 text-white active:bg-blue-600")+" text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3",type:"button",style:{transition:"all .15s ease"}},x("i",{className:"fas fa-arrow-alt-circle-down"})," Download")))))))}var w=p.a.createElement;function N(){return w(p.a.Fragment,null,w("footer",{className:"relative bg-gray-300 pt-8 pb-6"},w("div",{className:"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20",style:{height:"80px",transform:"translateZ(0)"}},w("svg",{className:"absolute bottom-0 overflow-hidden",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0"},w("polygon",{className:"text-gray-300 fill-current",points:"2560 0 2560 100 0 100"}))),w("div",{className:"container mx-auto px-4"},w("div",{className:"flex flex-wrap"},w("div",{className:"w-full lg:w-6/12 px-4"},w("h4",{className:"text-3xl font-semibold"},"Let's keep in touch!"),w("h5",{className:"text-lg mt-0 mb-2 text-gray-700"},"Find us on any of these platforms, we respond 1-2 business days."),w("div",{className:"mt-6"},w("button",{className:"bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2",type:"button"},w("i",{className:"fab fa-twitter"})),w("button",{className:"bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2",type:"button"},w("i",{className:"fab fa-facebook-square"})),w("button",{className:"bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2",type:"button"},w("i",{className:"fab fa-dribbble"})),w("button",{className:"bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2",type:"button"},w("i",{className:"fab fa-github"})))),w("div",{className:"w-full lg:w-6/12 px-4"},w("div",{className:"flex flex-wrap items-top mb-6"},w("div",{className:"w-full lg:w-4/12 px-4 ml-auto"},w("span",{className:"block uppercase text-gray-600 text-sm font-semibold mb-2"},"Useful Links"),w("ul",{className:"list-unstyled"},w("li",null,w("a",{className:"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm",href:"https://github.io/jmahc"},"GitHub")),w("li",null,w("a",{className:"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm",href:"https://linkedin.com"},"LinkedIn")),w("li",null,w("a",{className:"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm",href:"https://www.github.com/creativetimofficial"},"Github")),w("li",null,w("a",{className:"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm",href:"https://www.creative-tim.com/bootstrap-themes/free"},"Free Products")))),w("div",{className:"w-full lg:w-4/12 px-4"},w("span",{className:"block uppercase text-gray-600 text-sm font-semibold mb-2"},"Other Resources"),w("ul",{className:"list-unstyled"},w("li",null,w("a",{className:"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm",href:"https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"},"MIT License")),w("li",null,w("a",{className:"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm",href:"https://creative-tim.com/terms"},"Terms & Conditions")),w("li",null,w("a",{className:"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm",href:"https://creative-tim.com/privacy"},"Privacy Policy")),w("li",null,w("a",{className:"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm",href:"https://creative-tim.com/contact-us"},"Contact Us"))))))))))}n("VxdY"),n("vs8Z");var k=p.a.createElement;function S(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}var _=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(u,t);var e,n,r,s=S(u);function u(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),s.apply(this,arguments)}return e=u,n=[{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps;return k(p.a.Fragment,null,k(h.a,null,k("title",null,"My new cool app"),k("meta",{charSet:"utf-8"}),k("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),k(v,null),k(e,n),k(N,null))}}],r=[{key:"getInitialProps",value:function(){var t,e=(t=a.a.mark((function t(e){var n,r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.Component,r=e.ctx,o={},!n.getInitialProps){t.next=6;break}return t.next=5,n.getInitialProps(r);case 5:o=t.sent;case 6:return t.abrupt("return",{pageProps:o});case 7:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var l=t.apply(e,n);function i(t){o(l,r,a,i,s,"next",t)}function s(t){o(l,r,a,i,s,"throw",t)}i(void 0)}))});return function(t){return e.apply(this,arguments)}}()}],n&&l(e.prototype,n),r&&l(e,r),u}(d.a)},VxdY:function(t,e,n){},Xuae:function(t,e,n){"use strict";var r=n("/GRZ"),a=n("qXWd"),o=n("i2R6"),l=n("48fX"),i=n("tCBg"),s=n("T0f4"),u=n("mPvQ");function c(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}e.__esModule=!0,e.default=void 0;var f=n("q1tI"),p=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(u(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return(function(i){l(u,i);var s=c(u);function u(t){var o;return r(this,u),o=s.call(this,t),p&&(e.add(a(o)),n(a(o))),o}return o(u,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),o(u,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),u}(f.Component))}},kG2m:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=a},mPvQ:function(t,e,n){var r=n("5fIB"),a=n("rlHP"),o=n("KckH"),l=n("kG2m");t.exports=function(t){return r(t)||a(t)||o(t)||l()}},o0o1:function(t,e,n){t.exports=n("ls82")},rlHP:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},vs8Z:function(t,e,n){}},[[0,0,1,2]]]);