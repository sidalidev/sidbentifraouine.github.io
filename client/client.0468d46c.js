function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function o(){return Object.create(null)}function s(t){t.forEach(r)}function a(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e,r,o){return t[1]&&o?n(r.ctx.slice(),t[1](o(e))):r.ctx}function l(t,e,n,r,o,s,a){const c=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(c){const o=i(e,n,r,a);t.p(o,c)}}const u="undefined"!=typeof window;let f=u?()=>window.performance.now():()=>Date.now(),p=u?t=>requestAnimationFrame(t):t;const d=new Set;function h(t){d.forEach(e=>{e.c(t)||(d.delete(e),e.f())}),0!==d.size&&p(h)}function m(t,e){t.appendChild(e)}function g(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function y(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function b(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function _(){return v(" ")}function w(){return v("")}function E(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function S(t){return Array.from(t.childNodes)}function x(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):b(e)}function R(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return v(e)}function P(t){return R(t," ")}function A(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function C(t,e=document.body){return Array.from(e.querySelectorAll(t))}const j=new Set;let L,q=0;function N(t,e,n,r,o,s,a,c=0){const i=16.666/r;let l="{\n";for(let t=0;t<=1;t+=i){const r=e+(n-e)*s(t);l+=100*t+`%{${a(r,1-r)}}\n`}const u=l+`100% {${a(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${c}`,p=t.ownerDocument;j.add(p);const d=p.__svelte_stylesheet||(p.__svelte_stylesheet=p.head.appendChild(b("style")).sheet),h=p.__svelte_rules||(p.__svelte_rules={});h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${u}`,d.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?m+", ":""}${f} ${r}ms linear ${o}ms 1 both`,q+=1,f}function O(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-r.length;o&&(t.style.animation=r.join(", "),q-=o,q||p(()=>{q||(j.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),j.clear())}))}function k(t){L=t}function U(){if(!L)throw new Error("Function called outside component initialization");return L}function D(t){U().$$.on_mount.push(t)}const I=[],T=[],H=[],M=[],z=Promise.resolve();let B=!1;function J(t){H.push(t)}let V=!1;const K=new Set;function F(){if(!V){V=!0;do{for(let t=0;t<I.length;t+=1){const e=I[t];k(e),G(e.$$)}for(I.length=0;T.length;)T.pop()();for(let t=0;t<H.length;t+=1){const e=H[t];K.has(e)||(K.add(e),e())}H.length=0}while(I.length);for(;M.length;)M.pop()();B=!1,V=!1,K.clear()}}function G(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(J)}}let Y;function W(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const X=new Set;let Q;function Z(){Q={r:0,c:[],p:Q}}function tt(){Q.r||s(Q.c),Q=Q.p}function et(t,e){t&&t.i&&(X.delete(t),t.i(e))}function nt(t,e,n,r){if(t&&t.o){if(X.has(t))return;X.add(t),Q.c.push(()=>{X.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const rt={duration:0};function ot(n,r,o,c){let i=r(n,o),l=c?0:1,u=null,m=null,g=null;function $(){g&&O(n,g)}function y(t,e){const n=t.b-l;return e*=Math.abs(n),{a:l,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function b(r){const{delay:o=0,duration:a=300,easing:c=e,tick:b=t,css:v}=i||rt,_={start:f()+o,b:r};r||(_.group=Q,Q.r+=1),u?m=_:(v&&($(),g=N(n,l,r,a,o,c,v)),r&&b(0,1),u=y(_,a),J(()=>W(n,r,"start")),function(t){let e;0===d.size&&p(h),new Promise(n=>{d.add(e={c:t,f:n})})}(t=>{if(m&&t>m.start&&(u=y(m,a),m=null,W(n,u.b,"start"),v&&($(),g=N(n,l,u.b,u.duration,0,c,i.css))),u)if(t>=u.end)b(l=u.b,1-l),W(n,u.b,"end"),m||(u.b?$():--u.group.r||s(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;l=u.a+u.d*c(e/u.duration),b(l,1-l)}return!(!u&&!m)}))}return{run(t){a(i)?(Y||(Y=Promise.resolve(),Y.then(()=>{Y=null})),Y).then(()=>{i=i(),b(t)}):b(t)},end(){$(),u=m=null}}}function st(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function at(t){return"object"==typeof t&&null!==t?t:{}}function ct(t){t&&t.c()}function it(t,e){t&&t.l(e)}function lt(t,e,n){const{fragment:o,on_mount:c,on_destroy:i,after_update:l}=t.$$;o&&o.m(e,n),J(()=>{const e=c.map(r).filter(a);i?i.push(...e):s(e),t.$$.on_mount=[]}),l.forEach(J)}function ut(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ft(t,e){-1===t.$$.dirty[0]&&(I.push(t),B||(B=!0,z.then(F)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function pt(e,n,r,a,c,i,l=[-1]){const u=L;k(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:l};let d=!1;if(p.ctx=r?r(e,f,(t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),d&&ft(e,t)),n}):[],p.update(),d=!0,s(p.before_update),p.fragment=!!a&&a(p.ctx),n.target){if(n.hydrate){const t=S(n.target);p.fragment&&p.fragment.l(t),t.forEach($)}else p.fragment&&p.fragment.c();n.intro&&et(e.$$.fragment),lt(e,n.target,n.anchor),F()}k(u)}class dt{$destroy(){ut(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const ht=[];function mt(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!ht.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),ht.push(n,e)}if(t){for(let t=0;t<ht.length;t+=2)ht[t][0](ht[t+1]);ht.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const i=[a,c];return o.push(i),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const gt={},$t=()=>({});function yt(e){let n,r,o;return{c(){n=b("nav"),r=b("img"),this.h()},l(t){n=x(t,"NAV",{class:!0});var e=S(n);r=x(e,"IMG",{class:!0,src:!0,alt:!0}),e.forEach($),this.h()},h(){E(r,"class","logo svelte-c6f6sg"),r.src!==(o="images/logo.svg")&&E(r,"src","images/logo.svg"),E(r,"alt","Illustration used as a logo, handwritten Sid with a beret above the S"),E(n,"class","svelte-c6f6sg")},m(t,e){g(t,n,e),m(n,r)},p:t,i:t,o:t,d(t){t&&$(n)}}}function bt(t,e,n){let{segment:r}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class vt extends dt{constructor(t){super(),pt(this,t,bt,yt,c,{segment:0})}}function _t(t){let e,n,r,o;e=new vt({props:{segment:t[0]}});const s=t[2].default,a=function(t,e,n,r){if(t){const o=i(t,e,n,r);return t[0](o)}}(s,t,t[1],null);return{c(){ct(e.$$.fragment),n=_(),r=b("main"),a&&a.c(),this.h()},l(t){it(e.$$.fragment,t),n=P(t),r=x(t,"MAIN",{class:!0});var o=S(r);a&&a.l(o),o.forEach($),this.h()},h(){E(r,"class","svelte-1eeqiia")},m(t,s){lt(e,t,s),g(t,n,s),g(t,r,s),a&&a.m(r,null),o=!0},p(t,[n]){const r={};1&n&&(r.segment=t[0]),e.$set(r),a&&a.p&&2&n&&l(a,s,t,t[1],n,null,null)},i(t){o||(et(e.$$.fragment,t),et(a,t),o=!0)},o(t){nt(e.$$.fragment,t),nt(a,t),o=!1},d(t){ut(e,t),t&&$(n),t&&$(r),a&&a.d(t)}}}function wt(t,e,n){let{segment:r}=e,{$$slots:o={},$$scope:s}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[r,s,o]}class Et extends dt{constructor(t){super(),pt(this,t,wt,_t,c,{segment:0})}}function St(t){let e,n,r=t[1].stack+"";return{c(){e=b("pre"),n=v(r)},l(t){e=x(t,"PRE",{});var o=S(e);n=R(o,r),o.forEach($)},m(t,r){g(t,e,r),m(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&A(n,r)},d(t){t&&$(e)}}}function xt(e){let n,r,o,s,a,c,i,l,u,f=e[1].message+"";document.title=n=e[0];let p=e[2]&&e[1].stack&&St(e);return{c(){r=_(),o=b("h1"),s=v(e[0]),a=_(),c=b("p"),i=v(f),l=_(),p&&p.c(),u=w(),this.h()},l(t){C('[data-svelte="svelte-1o9r2ue"]',document.head).forEach($),r=P(t),o=x(t,"H1",{class:!0});var n=S(o);s=R(n,e[0]),n.forEach($),a=P(t),c=x(t,"P",{class:!0});var d=S(c);i=R(d,f),d.forEach($),l=P(t),p&&p.l(t),u=w(),this.h()},h(){E(o,"class","svelte-8od9u6"),E(c,"class","svelte-8od9u6")},m(t,e){g(t,r,e),g(t,o,e),m(o,s),g(t,a,e),g(t,c,e),m(c,i),g(t,l,e),p&&p.m(t,e),g(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&A(s,t[0]),2&e&&f!==(f=t[1].message+"")&&A(i,f),t[2]&&t[1].stack?p?p.p(t,e):(p=St(t),p.c(),p.m(u.parentNode,u)):p&&(p.d(1),p=null)},i:t,o:t,d(t){t&&$(r),t&&$(o),t&&$(a),t&&$(c),t&&$(l),p&&p.d(t),t&&$(u)}}}function Rt(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}class Pt extends dt{constructor(t){super(),pt(this,t,Rt,xt,c,{status:0,error:1})}}function At(t){let e,r,o;const s=[t[4].props];var a=t[4].component;function c(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return a&&(e=new a(c())),{c(){e&&ct(e.$$.fragment),r=w()},l(t){e&&it(e.$$.fragment,t),r=w()},m(t,n){e&&lt(e,t,n),g(t,r,n),o=!0},p(t,n){const o=16&n?st(s,[at(t[4].props)]):{};if(a!==(a=t[4].component)){if(e){Z();const t=e;nt(t.$$.fragment,1,0,()=>{ut(t,1)}),tt()}a?(e=new a(c()),ct(e.$$.fragment),et(e.$$.fragment,1),lt(e,r.parentNode,r)):e=null}else a&&e.$set(o)},i(t){o||(e&&et(e.$$.fragment,t),o=!0)},o(t){e&&nt(e.$$.fragment,t),o=!1},d(t){t&&$(r),e&&ut(e,t)}}}function Ct(t){let e,n;return e=new Pt({props:{error:t[0],status:t[1]}}),{c(){ct(e.$$.fragment)},l(t){it(e.$$.fragment,t)},m(t,r){lt(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(et(e.$$.fragment,t),n=!0)},o(t){nt(e.$$.fragment,t),n=!1},d(t){ut(e,t)}}}function jt(t){let e,n,r,o;const s=[Ct,At],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=w()},l(t){n.l(t),r=w()},m(t,n){a[e].m(t,n),g(t,r,n),o=!0},p(t,o){let i=e;e=c(t),e===i?a[e].p(t,o):(Z(),nt(a[i],1,1,()=>{a[i]=null}),tt(),n=a[e],n||(n=a[e]=s[e](t),n.c()),et(n,1),n.m(r.parentNode,r))},i(t){o||(et(n),o=!0)},o(t){nt(n),o=!1},d(t){a[e].d(t),t&&$(r)}}}function Lt(t){let e,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[jt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=n(s,o[t]);return e=new Et({props:s}),{c(){ct(e.$$.fragment)},l(t){it(e.$$.fragment,t)},m(t,n){lt(e,t,n),r=!0},p(t,[n]){const r=12&n?st(o,[4&n&&{segment:t[2][0]},8&n&&at(t[3].props)]):{};147&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){r||(et(e.$$.fragment,t),r=!0)},o(t){nt(e.$$.fragment,t),r=!1},d(t){ut(e,t)}}}function qt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e,{notify:l}=e;var u,f,p;return u=l,U().$$.after_update.push(u),f=gt,p=r,U().$$.context.set(f,p),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,a,c,i,r,l]}class Nt extends dt{constructor(t){super(),pt(this,t,qt,Lt,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Ot=[/^\/blog\.json$/,/^\/blog\/([^\/]+?)\.json$/],kt=[{js:()=>import("./index.299b049c.js"),css:[]},{js:()=>import("./about.5a0e4b11.js"),css:[]},{js:()=>import("./index.6f8c3799.js"),css:[]},{js:()=>import("./[slug].b8c7dbd3.js"),css:[]}],Ut=(Dt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:t=>({slug:Dt(t[1])})}]}]);var Dt;const It="undefined"!=typeof __SAPPER__&&__SAPPER__;let Tt,Ht,Mt,zt=!1,Bt=[],Jt="{}";const Vt={page:function(t){const e=mt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:mt(null),session:mt(It&&It.session)};let Kt,Ft;Vt.session.subscribe(async t=>{if(Kt=t,!zt)return;Ft=!0;const e=ee(new URL(location.href)),n=Ht={},{redirect:r,props:o,branch:s}=await se(e);n===Ht&&await oe(r,s,o,e.page)});let Gt,Yt=null;let Wt,Xt=1;const Qt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Zt={};function te(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function ee(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(It.baseUrl))return null;let e=t.pathname.slice(It.baseUrl.length);if(""===e&&(e="/"),!Ot.some(t=>t.test(e)))for(let n=0;n<Ut.length;n+=1){const r=Ut[n],o=r.pattern.exec(e);if(o){const n=te(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function ne(){return{x:pageXOffset,y:pageYOffset}}async function re(t,e,n,r){if(e)Wt=e;else{const t=ne();Zt[Wt]=t,e=Wt=++Xt,Zt[Wt]=n?t:{x:0,y:0}}Wt=e,Tt&&Vt.preloading.set(!0);const o=Yt&&Yt.href===t.href?Yt.promise:se(t);Yt=null;const s=Ht={},{redirect:a,props:c,branch:i}=await o;if(s===Ht&&(await oe(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Zt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Zt[Wt]=t,t&&scrollTo(t.x,t.y)}}async function oe(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=ee(new URL(t,document.baseURI));return n?(Qt[e.replaceState?"replaceState":"pushState"]({id:Wt},"",t),re(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Vt.page.set(r),Vt.preloading.set(!1),Tt)Tt.$set(n);else{n.stores={page:{subscribe:Vt.page.subscribe},preloading:{subscribe:Vt.preloading.subscribe},session:Vt.session},n.level0={props:await Mt},n.notify=Vt.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)ce(t.nextSibling);ce(t),ce(e)}Tt=new Nt({target:Gt,props:n,hydrate:!0})}Bt=e,Jt=JSON.stringify(r.query),zt=!0,Ft=!1}async function se(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let c;Mt||(Mt=It.preloaded[0]||$t.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Kt));let i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Jt)return!0;const o=Bt[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,l,o)&&(u=!0),s.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!Ft&&!u&&Bt[c]&&Bt[c].part===e.i)return Bt[c];u=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(ae);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(kt[e.i]);let m;return m=zt||!It.preloaded[c+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Kt):{}:It.preloaded[c+1],s["level"+p]={component:d,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}function ae(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function ce(t){t.parentNode.removeChild(t)}function ie(t){const e=ee(new URL(t,document.baseURI));if(e)return Yt&&t===Yt.href||function(t,e){Yt={href:t,promise:e}}(t,se(e)),Yt.promise}let le;function ue(t){clearTimeout(le),le=setTimeout(()=>{fe(t)},20)}function fe(t){const e=de(t.target);e&&"prefetch"===e.rel&&ie(e.href)}function pe(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=de(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=ee(o);if(s){re(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),Qt.pushState({id:Wt},"",o.href)}}function de(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function he(t){if(Zt[Wt]=ne(),t.state){const e=ee(new URL(location.href));e?re(e,t.state.id):location.href=location.href}else Xt=Xt+1,function(t){Wt=t}(Xt),Qt.replaceState({id:Wt},"",location.href)}var me;me={target:document.querySelector("#sapper")},"scrollRestoration"in Qt&&(Qt.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Qt.scrollRestoration="auto"}),addEventListener("load",()=>{Qt.scrollRestoration="manual"}),function(t){Gt=t}(me.target),addEventListener("click",pe),addEventListener("popstate",he),addEventListener("touchstart",fe),addEventListener("mousemove",ue),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Qt.replaceState({id:Xt},"",e);const n=new URL(location.href);if(It.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:c}=It;Mt||(Mt=s&&s[0]),oe(null,[],{error:c,status:a,session:o,level0:{props:Mt},level1:{props:{status:a,error:c},component:Pt},segments:s},{host:e,path:n,query:te(r),params:{}})}();const r=ee(n);return r?re(r,Xt,!0,t):void 0});export{dt as S,pt as a,_ as b,x as c,S as d,b as e,R as f,$ as g,P as h,e as i,E as j,g as k,m as l,ot as m,w as n,et as o,nt as p,C as q,tt as r,c as s,v as t,D as u,J as v,Z as w,t as x,A as y,y as z};
