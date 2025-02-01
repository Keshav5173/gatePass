(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function fw(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var dp={exports:{}},xl={},fp={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv;function vR(){if(rv)return ke;rv=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),E=Symbol.iterator;function T(V){return V===null||typeof V!="object"?null:(V=E&&V[E]||V["@@iterator"],typeof V=="function"?V:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,M={};function L(V,q,ce){this.props=V,this.context=q,this.refs=M,this.updater=ce||A}L.prototype.isReactComponent={},L.prototype.setState=function(V,q){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,q,"setState")},L.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function H(){}H.prototype=L.prototype;function G(V,q,ce){this.props=V,this.context=q,this.refs=M,this.updater=ce||A}var ie=G.prototype=new H;ie.constructor=G,k(ie,L.prototype),ie.isPureReactComponent=!0;var de=Array.isArray,Re=Object.prototype.hasOwnProperty,Ie={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function S(V,q,ce){var Ae,Pe={},Fe=null,He=null;if(q!=null)for(Ae in q.ref!==void 0&&(He=q.ref),q.key!==void 0&&(Fe=""+q.key),q)Re.call(q,Ae)&&!D.hasOwnProperty(Ae)&&(Pe[Ae]=q[Ae]);var qe=arguments.length-2;if(qe===1)Pe.children=ce;else if(1<qe){for(var et=Array(qe),Ot=0;Ot<qe;Ot++)et[Ot]=arguments[Ot+2];Pe.children=et}if(V&&V.defaultProps)for(Ae in qe=V.defaultProps,qe)Pe[Ae]===void 0&&(Pe[Ae]=qe[Ae]);return{$$typeof:n,type:V,key:Fe,ref:He,props:Pe,_owner:Ie.current}}function P(V,q){return{$$typeof:n,type:V.type,key:q,ref:V.ref,props:V.props,_owner:V._owner}}function x(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function b(V){var q={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(ce){return q[ce]})}var F=/\/+/g;function R(V,q){return typeof V=="object"&&V!==null&&V.key!=null?b(""+V.key):q.toString(36)}function We(V,q,ce,Ae,Pe){var Fe=typeof V;(Fe==="undefined"||Fe==="boolean")&&(V=null);var He=!1;if(V===null)He=!0;else switch(Fe){case"string":case"number":He=!0;break;case"object":switch(V.$$typeof){case n:case e:He=!0}}if(He)return He=V,Pe=Pe(He),V=Ae===""?"."+R(He,0):Ae,de(Pe)?(ce="",V!=null&&(ce=V.replace(F,"$&/")+"/"),We(Pe,q,ce,"",function(Ot){return Ot})):Pe!=null&&(x(Pe)&&(Pe=P(Pe,ce+(!Pe.key||He&&He.key===Pe.key?"":(""+Pe.key).replace(F,"$&/")+"/")+V)),q.push(Pe)),1;if(He=0,Ae=Ae===""?".":Ae+":",de(V))for(var qe=0;qe<V.length;qe++){Fe=V[qe];var et=Ae+R(Fe,qe);He+=We(Fe,q,ce,et,Pe)}else if(et=T(V),typeof et=="function")for(V=et.call(V),qe=0;!(Fe=V.next()).done;)Fe=Fe.value,et=Ae+R(Fe,qe++),He+=We(Fe,q,ce,et,Pe);else if(Fe==="object")throw q=String(V),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return He}function Ye(V,q,ce){if(V==null)return V;var Ae=[],Pe=0;return We(V,Ae,"","",function(Fe){return q.call(ce,Fe,Pe++)}),Ae}function Xe(V){if(V._status===-1){var q=V._result;q=q(),q.then(function(ce){(V._status===0||V._status===-1)&&(V._status=1,V._result=ce)},function(ce){(V._status===0||V._status===-1)&&(V._status=2,V._result=ce)}),V._status===-1&&(V._status=0,V._result=q)}if(V._status===1)return V._result.default;throw V._result}var xe={current:null},re={transition:null},pe={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:re,ReactCurrentOwner:Ie};function se(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:Ye,forEach:function(V,q,ce){Ye(V,function(){q.apply(this,arguments)},ce)},count:function(V){var q=0;return Ye(V,function(){q++}),q},toArray:function(V){return Ye(V,function(q){return q})||[]},only:function(V){if(!x(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},ke.Component=L,ke.Fragment=t,ke.Profiler=s,ke.PureComponent=G,ke.StrictMode=r,ke.Suspense=f,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,ke.act=se,ke.cloneElement=function(V,q,ce){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Ae=k({},V.props),Pe=V.key,Fe=V.ref,He=V._owner;if(q!=null){if(q.ref!==void 0&&(Fe=q.ref,He=Ie.current),q.key!==void 0&&(Pe=""+q.key),V.type&&V.type.defaultProps)var qe=V.type.defaultProps;for(et in q)Re.call(q,et)&&!D.hasOwnProperty(et)&&(Ae[et]=q[et]===void 0&&qe!==void 0?qe[et]:q[et])}var et=arguments.length-2;if(et===1)Ae.children=ce;else if(1<et){qe=Array(et);for(var Ot=0;Ot<et;Ot++)qe[Ot]=arguments[Ot+2];Ae.children=qe}return{$$typeof:n,type:V.type,key:Pe,ref:Fe,props:Ae,_owner:He}},ke.createContext=function(V){return V={$$typeof:u,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:a,_context:V},V.Consumer=V},ke.createElement=S,ke.createFactory=function(V){var q=S.bind(null,V);return q.type=V,q},ke.createRef=function(){return{current:null}},ke.forwardRef=function(V){return{$$typeof:d,render:V}},ke.isValidElement=x,ke.lazy=function(V){return{$$typeof:v,_payload:{_status:-1,_result:V},_init:Xe}},ke.memo=function(V,q){return{$$typeof:m,type:V,compare:q===void 0?null:q}},ke.startTransition=function(V){var q=re.transition;re.transition={};try{V()}finally{re.transition=q}},ke.unstable_act=se,ke.useCallback=function(V,q){return xe.current.useCallback(V,q)},ke.useContext=function(V){return xe.current.useContext(V)},ke.useDebugValue=function(){},ke.useDeferredValue=function(V){return xe.current.useDeferredValue(V)},ke.useEffect=function(V,q){return xe.current.useEffect(V,q)},ke.useId=function(){return xe.current.useId()},ke.useImperativeHandle=function(V,q,ce){return xe.current.useImperativeHandle(V,q,ce)},ke.useInsertionEffect=function(V,q){return xe.current.useInsertionEffect(V,q)},ke.useLayoutEffect=function(V,q){return xe.current.useLayoutEffect(V,q)},ke.useMemo=function(V,q){return xe.current.useMemo(V,q)},ke.useReducer=function(V,q,ce){return xe.current.useReducer(V,q,ce)},ke.useRef=function(V){return xe.current.useRef(V)},ke.useState=function(V){return xe.current.useState(V)},ke.useSyncExternalStore=function(V,q,ce){return xe.current.useSyncExternalStore(V,q,ce)},ke.useTransition=function(){return xe.current.useTransition()},ke.version="18.3.1",ke}var iv;function wm(){return iv||(iv=1,fp.exports=vR()),fp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sv;function ER(){if(sv)return xl;sv=1;var n=wm(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,m){var v,E={},T=null,A=null;m!==void 0&&(T=""+m),f.key!==void 0&&(T=""+f.key),f.ref!==void 0&&(A=f.ref);for(v in f)r.call(f,v)&&!a.hasOwnProperty(v)&&(E[v]=f[v]);if(d&&d.defaultProps)for(v in f=d.defaultProps,f)E[v]===void 0&&(E[v]=f[v]);return{$$typeof:e,type:d,key:T,ref:A,props:E,_owner:s.current}}return xl.Fragment=t,xl.jsx=u,xl.jsxs=u,xl}var ov;function wR(){return ov||(ov=1,dp.exports=ER()),dp.exports}var Y=wR(),$=wm();const TR=fw($);var Dl={},av;function IR(){if(av)return Dl;av=1,Object.defineProperty(Dl,"__esModule",{value:!0}),Dl.parse=u,Dl.serialize=m;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,a=(()=>{const T=function(){};return T.prototype=Object.create(null),T})();function u(T,A){const k=new a,M=T.length;if(M<2)return k;const L=(A==null?void 0:A.decode)||v;let H=0;do{const G=T.indexOf("=",H);if(G===-1)break;const ie=T.indexOf(";",H),de=ie===-1?M:ie;if(G>de){H=T.lastIndexOf(";",G-1)+1;continue}const Re=d(T,H,G),Ie=f(T,G,Re),D=T.slice(Re,Ie);if(k[D]===void 0){let S=d(T,G+1,de),P=f(T,de,S);const x=L(T.slice(S,P));k[D]=x}H=de+1}while(H<M);return k}function d(T,A,k){do{const M=T.charCodeAt(A);if(M!==32&&M!==9)return A}while(++A<k);return k}function f(T,A,k){for(;A>k;){const M=T.charCodeAt(--A);if(M!==32&&M!==9)return A+1}return k}function m(T,A,k){const M=(k==null?void 0:k.encode)||encodeURIComponent;if(!n.test(T))throw new TypeError(`argument name is invalid: ${T}`);const L=M(A);if(!e.test(L))throw new TypeError(`argument val is invalid: ${A}`);let H=T+"="+L;if(!k)return H;if(k.maxAge!==void 0){if(!Number.isInteger(k.maxAge))throw new TypeError(`option maxAge is invalid: ${k.maxAge}`);H+="; Max-Age="+k.maxAge}if(k.domain){if(!t.test(k.domain))throw new TypeError(`option domain is invalid: ${k.domain}`);H+="; Domain="+k.domain}if(k.path){if(!r.test(k.path))throw new TypeError(`option path is invalid: ${k.path}`);H+="; Path="+k.path}if(k.expires){if(!E(k.expires)||!Number.isFinite(k.expires.valueOf()))throw new TypeError(`option expires is invalid: ${k.expires}`);H+="; Expires="+k.expires.toUTCString()}if(k.httpOnly&&(H+="; HttpOnly"),k.secure&&(H+="; Secure"),k.partitioned&&(H+="; Partitioned"),k.priority)switch(typeof k.priority=="string"?k.priority.toLowerCase():void 0){case"low":H+="; Priority=Low";break;case"medium":H+="; Priority=Medium";break;case"high":H+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${k.priority}`)}if(k.sameSite)switch(typeof k.sameSite=="string"?k.sameSite.toLowerCase():k.sameSite){case!0:case"strict":H+="; SameSite=Strict";break;case"lax":H+="; SameSite=Lax";break;case"none":H+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${k.sameSite}`)}return H}function v(T){if(T.indexOf("%")===-1)return T;try{return decodeURIComponent(T)}catch{return T}}function E(T){return s.call(T)==="[object Date]"}return Dl}IR();/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var lv="popstate";function SR(n={}){function e(r,s){let{pathname:a,search:u,hash:d}=r.location;return Fp("",{pathname:a,search:u,hash:d},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(r,s){return typeof s=="string"?s:nu(s)}return RR(e,t,null,n)}function ct(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function or(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function CR(){return Math.random().toString(36).substring(2,10)}function uv(n,e){return{usr:n.state,key:n.key,idx:e}}function Fp(n,e,t=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Ta(e):e,state:t,key:e&&e.key||r||CR()}}function nu({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Ta(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function RR(n,e,t,r={}){let{window:s=document.defaultView,v5Compat:a=!1}=r,u=s.history,d="POP",f=null,m=v();m==null&&(m=0,u.replaceState({...u.state,idx:m},""));function v(){return(u.state||{idx:null}).idx}function E(){d="POP";let L=v(),H=L==null?null:L-m;m=L,f&&f({action:d,location:M.location,delta:H})}function T(L,H){d="PUSH";let G=Fp(M.location,L,H);m=v()+1;let ie=uv(G,m),de=M.createHref(G);try{u.pushState(ie,"",de)}catch(Re){if(Re instanceof DOMException&&Re.name==="DataCloneError")throw Re;s.location.assign(de)}a&&f&&f({action:d,location:M.location,delta:1})}function A(L,H){d="REPLACE";let G=Fp(M.location,L,H);m=v();let ie=uv(G,m),de=M.createHref(G);u.replaceState(ie,"",de),a&&f&&f({action:d,location:M.location,delta:0})}function k(L){let H=s.location.origin!=="null"?s.location.origin:s.location.href,G=typeof L=="string"?L:nu(L);return G=G.replace(/ $/,"%20"),ct(H,`No window.location.(origin|href) available to create URL for href: ${G}`),new URL(G,H)}let M={get action(){return d},get location(){return n(s,u)},listen(L){if(f)throw new Error("A history only accepts one active listener");return s.addEventListener(lv,E),f=L,()=>{s.removeEventListener(lv,E),f=null}},createHref(L){return e(s,L)},createURL:k,encodeLocation(L){let H=k(L);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:T,replace:A,go(L){return u.go(L)}};return M}function pw(n,e,t="/"){return AR(n,e,t,!1)}function AR(n,e,t,r){let s=typeof e=="string"?Ta(e):e,a=ns(s.pathname||"/",t);if(a==null)return null;let u=mw(n);PR(u);let d=null;for(let f=0;d==null&&f<u.length;++f){let m=UR(a);d=VR(u[f],m,r)}return d}function mw(n,e=[],t=[],r=""){let s=(a,u,d)=>{let f={relativePath:d===void 0?a.path||"":d,caseSensitive:a.caseSensitive===!0,childrenIndex:u,route:a};f.relativePath.startsWith("/")&&(ct(f.relativePath.startsWith(r),`Absolute route path "${f.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(r.length));let m=ni([r,f.relativePath]),v=t.concat(f);a.children&&a.children.length>0&&(ct(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),mw(a.children,e,v,m)),!(a.path==null&&!a.index)&&e.push({path:m,score:bR(m,a.index),routesMeta:v})};return n.forEach((a,u)=>{var d;if(a.path===""||!((d=a.path)!=null&&d.includes("?")))s(a,u);else for(let f of gw(a.path))s(a,u,f)}),e}function gw(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,s=t.endsWith("?"),a=t.replace(/\?$/,"");if(r.length===0)return s?[a,""]:[a];let u=gw(r.join("/")),d=[];return d.push(...u.map(f=>f===""?a:[a,f].join("/"))),s&&d.push(...u),d.map(f=>n.startsWith("/")&&f===""?"/":f)}function PR(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:MR(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var kR=/^:[\w-]+$/,NR=3,xR=2,DR=1,OR=10,LR=-2,cv=n=>n==="*";function bR(n,e){let t=n.split("/"),r=t.length;return t.some(cv)&&(r+=LR),e&&(r+=xR),t.filter(s=>!cv(s)).reduce((s,a)=>s+(kR.test(a)?NR:a===""?DR:OR),r)}function MR(n,e){return n.length===e.length&&n.slice(0,-1).every((r,s)=>r===e[s])?n[n.length-1]-e[e.length-1]:0}function VR(n,e,t=!1){let{routesMeta:r}=n,s={},a="/",u=[];for(let d=0;d<r.length;++d){let f=r[d],m=d===r.length-1,v=a==="/"?e:e.slice(a.length)||"/",E=Rh({path:f.relativePath,caseSensitive:f.caseSensitive,end:m},v),T=f.route;if(!E&&m&&t&&!r[r.length-1].route.index&&(E=Rh({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},v)),!E)return null;Object.assign(s,E.params),u.push({params:s,pathname:ni([a,E.pathname]),pathnameBase:$R(ni([a,E.pathnameBase])),route:T}),E.pathnameBase!=="/"&&(a=ni([a,E.pathnameBase]))}return u}function Rh(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=FR(n.path,n.caseSensitive,n.end),s=e.match(t);if(!s)return null;let a=s[0],u=a.replace(/(.)\/+$/,"$1"),d=s.slice(1);return{params:r.reduce((m,{paramName:v,isOptional:E},T)=>{if(v==="*"){let k=d[T]||"";u=a.slice(0,a.length-k.length).replace(/(.)\/+$/,"$1")}const A=d[T];return E&&!A?m[v]=void 0:m[v]=(A||"").replace(/%2F/g,"/"),m},{}),pathname:a,pathnameBase:u,pattern:n}}function FR(n,e=!1,t=!0){or(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,f)=>(r.push({paramName:d,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function UR(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return or(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function ns(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function BR(n,e="/"){let{pathname:t,search:r="",hash:s=""}=typeof n=="string"?Ta(n):n;return{pathname:t?t.startsWith("/")?t:jR(t,e):e,search:WR(r),hash:HR(s)}}function jR(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function pp(n,e,t,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function zR(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Tm(n){let e=zR(n);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function Im(n,e,t,r=!1){let s;typeof n=="string"?s=Ta(n):(s={...n},ct(!s.pathname||!s.pathname.includes("?"),pp("?","pathname","search",s)),ct(!s.pathname||!s.pathname.includes("#"),pp("#","pathname","hash",s)),ct(!s.search||!s.search.includes("#"),pp("#","search","hash",s)));let a=n===""||s.pathname==="",u=a?"/":s.pathname,d;if(u==null)d=t;else{let E=e.length-1;if(!r&&u.startsWith("..")){let T=u.split("/");for(;T[0]==="..";)T.shift(),E-=1;s.pathname=T.join("/")}d=E>=0?e[E]:"/"}let f=BR(s,d),m=u&&u!=="/"&&u.endsWith("/"),v=(a||u===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(m||v)&&(f.pathname+="/"),f}var ni=n=>n.join("/").replace(/\/\/+/g,"/"),$R=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),WR=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,HR=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function qR(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var _w=["POST","PUT","PATCH","DELETE"];new Set(_w);var GR=["GET",..._w];new Set(GR);var Ia=$.createContext(null);Ia.displayName="DataRouter";var od=$.createContext(null);od.displayName="DataRouterState";var yw=$.createContext({isTransitioning:!1});yw.displayName="ViewTransition";var KR=$.createContext(new Map);KR.displayName="Fetchers";var QR=$.createContext(null);QR.displayName="Await";var lr=$.createContext(null);lr.displayName="Navigation";var wu=$.createContext(null);wu.displayName="Location";var Or=$.createContext({outlet:null,matches:[],isDataRoute:!1});Or.displayName="Route";var Sm=$.createContext(null);Sm.displayName="RouteError";function YR(n,{relative:e}={}){ct(Sa(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=$.useContext(lr),{hash:s,pathname:a,search:u}=Tu(n,{relative:e}),d=a;return t!=="/"&&(d=a==="/"?t:ni([t,a])),r.createHref({pathname:d,search:u,hash:s})}function Sa(){return $.useContext(wu)!=null}function ds(){return ct(Sa(),"useLocation() may be used only in the context of a <Router> component."),$.useContext(wu).location}var vw="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ew(n){$.useContext(lr).static||$.useLayoutEffect(n)}function Ca(){let{isDataRoute:n}=$.useContext(Or);return n?u0():XR()}function XR(){ct(Sa(),"useNavigate() may be used only in the context of a <Router> component.");let n=$.useContext(Ia),{basename:e,navigator:t}=$.useContext(lr),{matches:r}=$.useContext(Or),{pathname:s}=ds(),a=JSON.stringify(Tm(r)),u=$.useRef(!1);return Ew(()=>{u.current=!0}),$.useCallback((f,m={})=>{if(or(u.current,vw),!u.current)return;if(typeof f=="number"){t.go(f);return}let v=Im(f,JSON.parse(a),s,m.relative==="path");n==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:ni([e,v.pathname])),(m.replace?t.replace:t.push)(v,m.state,m)},[e,t,a,s,n])}$.createContext(null);function Tu(n,{relative:e}={}){let{matches:t}=$.useContext(Or),{pathname:r}=ds(),s=JSON.stringify(Tm(t));return $.useMemo(()=>Im(n,JSON.parse(s),r,e==="path"),[n,s,r,e])}function JR(n,e){return ww(n,e)}function ww(n,e,t,r){var H;ct(Sa(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=$.useContext(lr),{matches:a}=$.useContext(Or),u=a[a.length-1],d=u?u.params:{},f=u?u.pathname:"/",m=u?u.pathnameBase:"/",v=u&&u.route;{let G=v&&v.path||"";Tw(f,!v||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let E=ds(),T;if(e){let G=typeof e=="string"?Ta(e):e;ct(m==="/"||((H=G.pathname)==null?void 0:H.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${G.pathname}" was given in the \`location\` prop.`),T=G}else T=E;let A=T.pathname||"/",k=A;if(m!=="/"){let G=m.replace(/^\//,"").split("/");k="/"+A.replace(/^\//,"").split("/").slice(G.length).join("/")}let M=pw(n,{pathname:k});or(v||M!=null,`No routes matched location "${T.pathname}${T.search}${T.hash}" `),or(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=r0(M&&M.map(G=>Object.assign({},G,{params:Object.assign({},d,G.params),pathname:ni([m,s.encodeLocation?s.encodeLocation(G.pathname).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?m:ni([m,s.encodeLocation?s.encodeLocation(G.pathnameBase).pathname:G.pathnameBase])})),a,t,r);return e&&L?$.createElement(wu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...T},navigationType:"POP"}},L):L}function ZR(){let n=l0(),e=qR(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:r},a={padding:"2px 4px",backgroundColor:r},u=null;return console.error("Error handled by React Router default ErrorBoundary:",n),u=$.createElement($.Fragment,null,$.createElement("p",null,"💿 Hey developer 👋"),$.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",$.createElement("code",{style:a},"ErrorBoundary")," or"," ",$.createElement("code",{style:a},"errorElement")," prop on your route.")),$.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},e),t?$.createElement("pre",{style:s},t):null,u)}var e0=$.createElement(ZR,null),t0=class extends $.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?$.createElement(Or.Provider,{value:this.props.routeContext},$.createElement(Sm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function n0({routeContext:n,match:e,children:t}){let r=$.useContext(Ia);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),$.createElement(Or.Provider,{value:n},t)}function r0(n,e=[],t=null,r=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let s=n,a=t==null?void 0:t.errors;if(a!=null){let f=s.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);ct(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),s=s.slice(0,Math.min(s.length,f+1))}let u=!1,d=-1;if(t)for(let f=0;f<s.length;f++){let m=s[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=f),m.route.id){let{loaderData:v,errors:E}=t,T=m.route.loader&&!v.hasOwnProperty(m.route.id)&&(!E||E[m.route.id]===void 0);if(m.route.lazy||T){u=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((f,m,v)=>{let E,T=!1,A=null,k=null;t&&(E=a&&m.route.id?a[m.route.id]:void 0,A=m.route.errorElement||e0,u&&(d<0&&v===0?(Tw("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,k=null):d===v&&(T=!0,k=m.route.hydrateFallbackElement||null)));let M=e.concat(s.slice(0,v+1)),L=()=>{let H;return E?H=A:T?H=k:m.route.Component?H=$.createElement(m.route.Component,null):m.route.element?H=m.route.element:H=f,$.createElement(n0,{match:m,routeContext:{outlet:f,matches:M,isDataRoute:t!=null},children:H})};return t&&(m.route.ErrorBoundary||m.route.errorElement||v===0)?$.createElement(t0,{location:t.location,revalidation:t.revalidation,component:A,error:E,children:L(),routeContext:{outlet:null,matches:M,isDataRoute:!0}}):L()},null)}function Cm(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function i0(n){let e=$.useContext(Ia);return ct(e,Cm(n)),e}function s0(n){let e=$.useContext(od);return ct(e,Cm(n)),e}function o0(n){let e=$.useContext(Or);return ct(e,Cm(n)),e}function Rm(n){let e=o0(n),t=e.matches[e.matches.length-1];return ct(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function a0(){return Rm("useRouteId")}function l0(){var r;let n=$.useContext(Sm),e=s0("useRouteError"),t=Rm("useRouteError");return n!==void 0?n:(r=e.errors)==null?void 0:r[t]}function u0(){let{router:n}=i0("useNavigate"),e=Rm("useNavigate"),t=$.useRef(!1);return Ew(()=>{t.current=!0}),$.useCallback(async(s,a={})=>{or(t.current,vw),t.current&&(typeof s=="number"?n.navigate(s):await n.navigate(s,{fromRouteId:e,...a}))},[n,e])}var hv={};function Tw(n,e,t){!e&&!hv[n]&&(hv[n]=!0,or(!1,t))}$.memo(c0);function c0({routes:n,future:e,state:t}){return ww(n,void 0,t,e)}function ad({to:n,replace:e,state:t,relative:r}){ct(Sa(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=$.useContext(lr);or(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:a}=$.useContext(Or),{pathname:u}=ds(),d=Ca(),f=Im(n,Tm(a),u,r==="path"),m=JSON.stringify(f);return $.useEffect(()=>{d(JSON.parse(m),{replace:e,state:t,relative:r})},[d,m,r,e,t]),null}function Jo(n){ct(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function h0({basename:n="/",children:e=null,location:t,navigationType:r="POP",navigator:s,static:a=!1}){ct(!Sa(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=n.replace(/^\/*/,"/"),d=$.useMemo(()=>({basename:u,navigator:s,static:a,future:{}}),[u,s,a]);typeof t=="string"&&(t=Ta(t));let{pathname:f="/",search:m="",hash:v="",state:E=null,key:T="default"}=t,A=$.useMemo(()=>{let k=ns(f,u);return k==null?null:{location:{pathname:k,search:m,hash:v,state:E,key:T},navigationType:r}},[u,f,m,v,E,T,r]);return or(A!=null,`<Router basename="${u}"> is not able to match the URL "${f}${m}${v}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:$.createElement(lr.Provider,{value:d},$.createElement(wu.Provider,{children:e,value:A}))}function d0({children:n,location:e}){return JR(Up(n),e)}function Up(n,e=[]){let t=[];return $.Children.forEach(n,(r,s)=>{if(!$.isValidElement(r))return;let a=[...e,s];if(r.type===$.Fragment){t.push.apply(t,Up(r.props.children,a));return}ct(r.type===Jo,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ct(!r.props.index||!r.props.children,"An index route cannot have child routes.");let u={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=Up(r.props.children,a)),t.push(u)}),t}var hh="get",dh="application/x-www-form-urlencoded";function ld(n){return n!=null&&typeof n.tagName=="string"}function f0(n){return ld(n)&&n.tagName.toLowerCase()==="button"}function p0(n){return ld(n)&&n.tagName.toLowerCase()==="form"}function m0(n){return ld(n)&&n.tagName.toLowerCase()==="input"}function g0(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function _0(n,e){return n.button===0&&(!e||e==="_self")&&!g0(n)}var eh=null;function y0(){if(eh===null)try{new FormData(document.createElement("form"),0),eh=!1}catch{eh=!0}return eh}var v0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function mp(n){return n!=null&&!v0.has(n)?(or(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${dh}"`),null):n}function E0(n,e){let t,r,s,a,u;if(p0(n)){let d=n.getAttribute("action");r=d?ns(d,e):null,t=n.getAttribute("method")||hh,s=mp(n.getAttribute("enctype"))||dh,a=new FormData(n)}else if(f0(n)||m0(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=n.getAttribute("formaction")||d.getAttribute("action");if(r=f?ns(f,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||hh,s=mp(n.getAttribute("formenctype"))||mp(d.getAttribute("enctype"))||dh,a=new FormData(d,n),!y0()){let{name:m,type:v,value:E}=n;if(v==="image"){let T=m?`${m}.`:"";a.append(`${T}x`,"0"),a.append(`${T}y`,"0")}else m&&a.append(m,E)}}else{if(ld(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=hh,r=null,s=dh,u=n}return a&&s==="text/plain"&&(u=a,a=void 0),{action:r,method:t.toLowerCase(),encType:s,formData:a,body:u}}function Am(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function w0(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function T0(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function I0(n,e,t){let r=await Promise.all(n.map(async s=>{let a=e.routes[s.route.id];if(a){let u=await w0(a,t);return u.links?u.links():[]}return[]}));return A0(r.flat(1).filter(T0).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function dv(n,e,t,r,s,a){let u=(f,m)=>t[m]?f.route.id!==t[m].route.id:!0,d=(f,m)=>{var v;return t[m].pathname!==f.pathname||((v=t[m].route.path)==null?void 0:v.endsWith("*"))&&t[m].params["*"]!==f.params["*"]};return a==="assets"?e.filter((f,m)=>u(f,m)||d(f,m)):a==="data"?e.filter((f,m)=>{var E;let v=r.routes[f.route.id];if(!v||!v.hasLoader)return!1;if(u(f,m)||d(f,m))return!0;if(f.route.shouldRevalidate){let T=f.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((E=t[0])==null?void 0:E.params)||{},nextUrl:new URL(n,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof T=="boolean")return T}return!0}):[]}function S0(n,e){return C0(n.map(t=>{let r=e.routes[t.route.id];if(!r)return[];let s=[r.module];return r.imports&&(s=s.concat(r.imports)),s}).flat(1))}function C0(n){return[...new Set(n)]}function R0(n){let e={},t=Object.keys(n).sort();for(let r of t)e[r]=n[r];return e}function A0(n,e){let t=new Set;return new Set(e),n.reduce((r,s)=>{let a=JSON.stringify(R0(s));return t.has(a)||(t.add(a),r.push({key:a,link:s})),r},[])}function P0(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function k0(){let n=$.useContext(Ia);return Am(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function N0(){let n=$.useContext(od);return Am(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Pm=$.createContext(void 0);Pm.displayName="FrameworkContext";function Iw(){let n=$.useContext(Pm);return Am(n,"You must render this element inside a <HydratedRouter> element"),n}function x0(n,e){let t=$.useContext(Pm),[r,s]=$.useState(!1),[a,u]=$.useState(!1),{onFocus:d,onBlur:f,onMouseEnter:m,onMouseLeave:v,onTouchStart:E}=e,T=$.useRef(null);$.useEffect(()=>{if(n==="render"&&u(!0),n==="viewport"){let M=H=>{H.forEach(G=>{u(G.isIntersecting)})},L=new IntersectionObserver(M,{threshold:.5});return T.current&&L.observe(T.current),()=>{L.disconnect()}}},[n]),$.useEffect(()=>{if(r){let M=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(M)}}},[r]);let A=()=>{s(!0)},k=()=>{s(!1),u(!1)};return t?n!=="intent"?[a,T,{}]:[a,T,{onFocus:Ol(d,A),onBlur:Ol(f,k),onMouseEnter:Ol(m,A),onMouseLeave:Ol(v,k),onTouchStart:Ol(E,A)}]:[!1,T,{}]}function Ol(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function D0({page:n,...e}){let{router:t}=k0(),r=$.useMemo(()=>pw(t.routes,n,t.basename),[t.routes,n,t.basename]);return r?$.createElement(L0,{page:n,matches:r,...e}):null}function O0(n){let{manifest:e,routeModules:t}=Iw(),[r,s]=$.useState([]);return $.useEffect(()=>{let a=!1;return I0(n,e,t).then(u=>{a||s(u)}),()=>{a=!0}},[n,e,t]),r}function L0({page:n,matches:e,...t}){let r=ds(),{manifest:s,routeModules:a}=Iw(),{loaderData:u,matches:d}=N0(),f=$.useMemo(()=>dv(n,e,d,s,r,"data"),[n,e,d,s,r]),m=$.useMemo(()=>dv(n,e,d,s,r,"assets"),[n,e,d,s,r]),v=$.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let A=new Set,k=!1;if(e.forEach(L=>{var G;let H=s.routes[L.route.id];!H||!H.hasLoader||(!f.some(ie=>ie.route.id===L.route.id)&&L.route.id in u&&((G=a[L.route.id])!=null&&G.shouldRevalidate)||H.hasClientLoader?k=!0:A.add(L.route.id))}),A.size===0)return[];let M=P0(n);return k&&A.size>0&&M.searchParams.set("_routes",e.filter(L=>A.has(L.route.id)).map(L=>L.route.id).join(",")),[M.pathname+M.search]},[u,r,s,f,e,n,a]),E=$.useMemo(()=>S0(m,s),[m,s]),T=O0(m);return $.createElement($.Fragment,null,v.map(A=>$.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...t})),E.map(A=>$.createElement("link",{key:A,rel:"modulepreload",href:A,...t})),T.map(({key:A,link:k})=>$.createElement("link",{key:A,...k})))}function b0(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Sw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Sw&&(window.__reactRouterVersion="7.1.3")}catch{}function M0({basename:n,children:e,window:t}){let r=$.useRef();r.current==null&&(r.current=SR({window:t,v5Compat:!0}));let s=r.current,[a,u]=$.useState({action:s.action,location:s.location}),d=$.useCallback(f=>{$.startTransition(()=>u(f))},[u]);return $.useLayoutEffect(()=>s.listen(d),[s,d]),$.createElement(h0,{basename:n,children:e,location:a.location,navigationType:a.action,navigator:s})}var Cw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,km=$.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:s,reloadDocument:a,replace:u,state:d,target:f,to:m,preventScrollReset:v,viewTransition:E,...T},A){let{basename:k}=$.useContext(lr),M=typeof m=="string"&&Cw.test(m),L,H=!1;if(typeof m=="string"&&M&&(L=m,Sw))try{let P=new URL(window.location.href),x=m.startsWith("//")?new URL(P.protocol+m):new URL(m),b=ns(x.pathname,k);x.origin===P.origin&&b!=null?m=b+x.search+x.hash:H=!0}catch{or(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let G=YR(m,{relative:s}),[ie,de,Re]=x0(r,T),Ie=B0(m,{replace:u,state:d,target:f,preventScrollReset:v,relative:s,viewTransition:E});function D(P){e&&e(P),P.defaultPrevented||Ie(P)}let S=$.createElement("a",{...T,...Re,href:L||G,onClick:H||a?e:D,ref:b0(A,de),target:f,"data-discover":!M&&t==="render"?"true":void 0});return ie&&!M?$.createElement($.Fragment,null,S,$.createElement(D0,{page:G})):S});km.displayName="Link";var V0=$.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:s=!1,style:a,to:u,viewTransition:d,children:f,...m},v){let E=Tu(u,{relative:m.relative}),T=ds(),A=$.useContext(od),{navigator:k,basename:M}=$.useContext(lr),L=A!=null&&H0(E)&&d===!0,H=k.encodeLocation?k.encodeLocation(E).pathname:E.pathname,G=T.pathname,ie=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;t||(G=G.toLowerCase(),ie=ie?ie.toLowerCase():null,H=H.toLowerCase()),ie&&M&&(ie=ns(ie,M)||ie);const de=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let Re=G===H||!s&&G.startsWith(H)&&G.charAt(de)==="/",Ie=ie!=null&&(ie===H||!s&&ie.startsWith(H)&&ie.charAt(H.length)==="/"),D={isActive:Re,isPending:Ie,isTransitioning:L},S=Re?e:void 0,P;typeof r=="function"?P=r(D):P=[r,Re?"active":null,Ie?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let x=typeof a=="function"?a(D):a;return $.createElement(km,{...m,"aria-current":S,className:P,ref:v,style:x,to:u,viewTransition:d},typeof f=="function"?f(D):f)});V0.displayName="NavLink";var F0=$.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:s,state:a,method:u=hh,action:d,onSubmit:f,relative:m,preventScrollReset:v,viewTransition:E,...T},A)=>{let k=$0(),M=W0(d,{relative:m}),L=u.toLowerCase()==="get"?"get":"post",H=typeof d=="string"&&Cw.test(d),G=ie=>{if(f&&f(ie),ie.defaultPrevented)return;ie.preventDefault();let de=ie.nativeEvent.submitter,Re=(de==null?void 0:de.getAttribute("formmethod"))||u;k(de||ie.currentTarget,{fetcherKey:e,method:Re,navigate:t,replace:s,state:a,relative:m,preventScrollReset:v,viewTransition:E})};return $.createElement("form",{ref:A,method:L,action:M,onSubmit:r?f:G,...T,"data-discover":!H&&n==="render"?"true":void 0})});F0.displayName="Form";function U0(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rw(n){let e=$.useContext(Ia);return ct(e,U0(n)),e}function B0(n,{target:e,replace:t,state:r,preventScrollReset:s,relative:a,viewTransition:u}={}){let d=Ca(),f=ds(),m=Tu(n,{relative:a});return $.useCallback(v=>{if(_0(v,e)){v.preventDefault();let E=t!==void 0?t:nu(f)===nu(m);d(n,{replace:E,state:r,preventScrollReset:s,relative:a,viewTransition:u})}},[f,d,m,t,r,e,n,s,a,u])}var j0=0,z0=()=>`__${String(++j0)}__`;function $0(){let{router:n}=Rw("useSubmit"),{basename:e}=$.useContext(lr),t=a0();return $.useCallback(async(r,s={})=>{let{action:a,method:u,encType:d,formData:f,body:m}=E0(r,e);if(s.navigate===!1){let v=s.fetcherKey||z0();await n.fetch(v,t,s.action||a,{preventScrollReset:s.preventScrollReset,formData:f,body:m,formMethod:s.method||u,formEncType:s.encType||d,flushSync:s.flushSync})}else await n.navigate(s.action||a,{preventScrollReset:s.preventScrollReset,formData:f,body:m,formMethod:s.method||u,formEncType:s.encType||d,replace:s.replace,state:s.state,fromRouteId:t,flushSync:s.flushSync,viewTransition:s.viewTransition})},[n,e,t])}function W0(n,{relative:e}={}){let{basename:t}=$.useContext(lr),r=$.useContext(Or);ct(r,"useFormAction must be used inside a RouteContext");let[s]=r.matches.slice(-1),a={...Tu(n||".",{relative:e})},u=ds();if(n==null){a.search=u.search;let d=new URLSearchParams(a.search),f=d.getAll("index");if(f.some(v=>v==="")){d.delete("index"),f.filter(E=>E).forEach(E=>d.append("index",E));let v=d.toString();a.search=v?`?${v}`:""}}return(!n||n===".")&&s.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(a.pathname=a.pathname==="/"?t:ni([t,a.pathname])),nu(a)}function H0(n,e={}){let t=$.useContext(yw);ct(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Rw("useViewTransitionState"),s=Tu(n,{relative:e.relative});if(!t.isTransitioning)return!1;let a=ns(t.currentLocation.pathname,r)||t.currentLocation.pathname,u=ns(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Rh(s.pathname,u)!=null||Rh(s.pathname,a)!=null}new TextEncoder;var gp={exports:{}},gn={},_p={exports:{}},yp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fv;function q0(){return fv||(fv=1,function(n){function e(re,pe){var se=re.length;re.push(pe);e:for(;0<se;){var V=se-1>>>1,q=re[V];if(0<s(q,pe))re[V]=pe,re[se]=q,se=V;else break e}}function t(re){return re.length===0?null:re[0]}function r(re){if(re.length===0)return null;var pe=re[0],se=re.pop();if(se!==pe){re[0]=se;e:for(var V=0,q=re.length,ce=q>>>1;V<ce;){var Ae=2*(V+1)-1,Pe=re[Ae],Fe=Ae+1,He=re[Fe];if(0>s(Pe,se))Fe<q&&0>s(He,Pe)?(re[V]=He,re[Fe]=se,V=Fe):(re[V]=Pe,re[Ae]=se,V=Ae);else if(Fe<q&&0>s(He,se))re[V]=He,re[Fe]=se,V=Fe;else break e}}return pe}function s(re,pe){var se=re.sortIndex-pe.sortIndex;return se!==0?se:re.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],m=[],v=1,E=null,T=3,A=!1,k=!1,M=!1,L=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ie(re){for(var pe=t(m);pe!==null;){if(pe.callback===null)r(m);else if(pe.startTime<=re)r(m),pe.sortIndex=pe.expirationTime,e(f,pe);else break;pe=t(m)}}function de(re){if(M=!1,ie(re),!k)if(t(f)!==null)k=!0,Xe(Re);else{var pe=t(m);pe!==null&&xe(de,pe.startTime-re)}}function Re(re,pe){k=!1,M&&(M=!1,H(S),S=-1),A=!0;var se=T;try{for(ie(pe),E=t(f);E!==null&&(!(E.expirationTime>pe)||re&&!b());){var V=E.callback;if(typeof V=="function"){E.callback=null,T=E.priorityLevel;var q=V(E.expirationTime<=pe);pe=n.unstable_now(),typeof q=="function"?E.callback=q:E===t(f)&&r(f),ie(pe)}else r(f);E=t(f)}if(E!==null)var ce=!0;else{var Ae=t(m);Ae!==null&&xe(de,Ae.startTime-pe),ce=!1}return ce}finally{E=null,T=se,A=!1}}var Ie=!1,D=null,S=-1,P=5,x=-1;function b(){return!(n.unstable_now()-x<P)}function F(){if(D!==null){var re=n.unstable_now();x=re;var pe=!0;try{pe=D(!0,re)}finally{pe?R():(Ie=!1,D=null)}}else Ie=!1}var R;if(typeof G=="function")R=function(){G(F)};else if(typeof MessageChannel<"u"){var We=new MessageChannel,Ye=We.port2;We.port1.onmessage=F,R=function(){Ye.postMessage(null)}}else R=function(){L(F,0)};function Xe(re){D=re,Ie||(Ie=!0,R())}function xe(re,pe){S=L(function(){re(n.unstable_now())},pe)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(re){re.callback=null},n.unstable_continueExecution=function(){k||A||(k=!0,Xe(Re))},n.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<re?Math.floor(1e3/re):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(re){switch(T){case 1:case 2:case 3:var pe=3;break;default:pe=T}var se=T;T=pe;try{return re()}finally{T=se}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(re,pe){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var se=T;T=re;try{return pe()}finally{T=se}},n.unstable_scheduleCallback=function(re,pe,se){var V=n.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?V+se:V):se=V,re){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=se+q,re={id:v++,callback:pe,priorityLevel:re,startTime:se,expirationTime:q,sortIndex:-1},se>V?(re.sortIndex=se,e(m,re),t(f)===null&&re===t(m)&&(M?(H(S),S=-1):M=!0,xe(de,se-V))):(re.sortIndex=q,e(f,re),k||A||(k=!0,Xe(Re))),re},n.unstable_shouldYield=b,n.unstable_wrapCallback=function(re){var pe=T;return function(){var se=T;T=pe;try{return re.apply(this,arguments)}finally{T=se}}}}(yp)),yp}var pv;function G0(){return pv||(pv=1,_p.exports=q0()),_p.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv;function K0(){if(mv)return gn;mv=1;var n=wm(),e=G0();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function a(i,o){u(i,o),u(i+"Capture",o)}function u(i,o){for(s[i]=o,i=0;i<o.length;i++)r.add(o[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},E={};function T(i){return f.call(E,i)?!0:f.call(v,i)?!1:m.test(i)?E[i]=!0:(v[i]=!0,!1)}function A(i,o,l,h){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function k(i,o,l,h){if(o===null||typeof o>"u"||A(i,o,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function M(i,o,l,h,p,_,w){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=o,this.sanitizeURL=_,this.removeEmptyString=w}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){L[i]=new M(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];L[o]=new M(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){L[i]=new M(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){L[i]=new M(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){L[i]=new M(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){L[i]=new M(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){L[i]=new M(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){L[i]=new M(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){L[i]=new M(i,5,!1,i.toLowerCase(),null,!1,!1)});var H=/[\-:]([a-z])/g;function G(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(H,G);L[o]=new M(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(H,G);L[o]=new M(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(H,G);L[o]=new M(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){L[i]=new M(i,1,!1,i.toLowerCase(),null,!1,!1)}),L.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){L[i]=new M(i,1,!1,i.toLowerCase(),null,!0,!0)});function ie(i,o,l,h){var p=L.hasOwnProperty(o)?L[o]:null;(p!==null?p.type!==0:h||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(k(o,l,p,h)&&(l=null),h||p===null?T(o)&&(l===null?i.removeAttribute(o):i.setAttribute(o,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(o=p.attributeName,h=p.attributeNamespace,l===null?i.removeAttribute(o):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?i.setAttributeNS(h,o,l):i.setAttribute(o,l))))}var de=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Re=Symbol.for("react.element"),Ie=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),b=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),We=Symbol.for("react.suspense_list"),Ye=Symbol.for("react.memo"),Xe=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),re=Symbol.iterator;function pe(i){return i===null||typeof i!="object"?null:(i=re&&i[re]||i["@@iterator"],typeof i=="function"?i:null)}var se=Object.assign,V;function q(i){if(V===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);V=o&&o[1]||""}return`
`+V+i}var ce=!1;function Ae(i,o){if(!i||ce)return"";ce=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(z){var h=z}Reflect.construct(i,[],o)}else{try{o.call()}catch(z){h=z}i.call(o.prototype)}else{try{throw Error()}catch(z){h=z}i()}}catch(z){if(z&&h&&typeof z.stack=="string"){for(var p=z.stack.split(`
`),_=h.stack.split(`
`),w=p.length-1,C=_.length-1;1<=w&&0<=C&&p[w]!==_[C];)C--;for(;1<=w&&0<=C;w--,C--)if(p[w]!==_[C]){if(w!==1||C!==1)do if(w--,C--,0>C||p[w]!==_[C]){var N=`
`+p[w].replace(" at new "," at ");return i.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",i.displayName)),N}while(1<=w&&0<=C);break}}}finally{ce=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?q(i):""}function Pe(i){switch(i.tag){case 5:return q(i.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return i=Ae(i.type,!1),i;case 11:return i=Ae(i.type.render,!1),i;case 1:return i=Ae(i.type,!0),i;default:return""}}function Fe(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case D:return"Fragment";case Ie:return"Portal";case P:return"Profiler";case S:return"StrictMode";case R:return"Suspense";case We:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case b:return(i.displayName||"Context")+".Consumer";case x:return(i._context.displayName||"Context")+".Provider";case F:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case Ye:return o=i.displayName||null,o!==null?o:Fe(i.type)||"Memo";case Xe:o=i._payload,i=i._init;try{return Fe(i(o))}catch{}}return null}function He(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fe(o);case 8:return o===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function qe(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function et(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Ot(i){var o=et(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),h=""+i[o];if(!i.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return p.call(this)},set:function(w){h=""+w,_.call(this,w)}}),Object.defineProperty(i,o,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(w){h=""+w},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function Lr(i){i._valueTracker||(i._valueTracker=Ot(i))}function so(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var l=o.getValue(),h="";return i&&(h=et(i)?i.checked?"true":"false":i.value),i=h,i!==l?(o.setValue(i),!0):!1}function _i(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function fs(i,o){var l=o.checked;return se({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function oo(i,o){var l=o.defaultValue==null?"":o.defaultValue,h=o.checked!=null?o.checked:o.defaultChecked;l=qe(o.value!=null?o.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function Va(i,o){o=o.checked,o!=null&&ie(i,"checked",o,!1)}function Fa(i,o){Va(i,o);var l=qe(o.value),h=o.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?ao(i,o.type,l):o.hasOwnProperty("defaultValue")&&ao(i,o.type,qe(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function Uu(i,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var h=o.type;if(!(h!=="submit"&&h!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,l||o===i.value||(i.value=o),i.defaultValue=o}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function ao(i,o,l){(o!=="number"||_i(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var br=Array.isArray;function Mr(i,o,l,h){if(i=i.options,o){o={};for(var p=0;p<l.length;p++)o["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=o.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&h&&(i[l].defaultSelected=!0)}else{for(l=""+qe(l),o=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,h&&(i[p].defaultSelected=!0);return}o!==null||i[p].disabled||(o=i[p])}o!==null&&(o.selected=!0)}}function Ua(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function lo(i,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(br(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}i._wrapperState={initialValue:qe(l)}}function uo(i,o){var l=qe(o.value),h=qe(o.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),o.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function Ba(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function It(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function St(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?It(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Vr,ja=function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,h,p){MSApp.execUnsafeLocalFunction(function(){return i(o,l,h,p)})}:i}(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(Vr=Vr||document.createElement("div"),Vr.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Vr.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function yi(i,o){if(o){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=o;return}}i.textContent=o}var ps={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ms=["Webkit","ms","Moz","O"];Object.keys(ps).forEach(function(i){ms.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),ps[o]=ps[i]})});function za(i,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||ps.hasOwnProperty(i)&&ps[i]?(""+o).trim():o+"px"}function $a(i,o){i=i.style;for(var l in o)if(o.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=za(l,o[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,p):i[l]=p}}var Wa=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ha(i,o){if(o){if(Wa[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function qa(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gs=null;function co(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var ho=null,kn=null,ur=null;function fo(i){if(i=gl(i)){if(typeof ho!="function")throw Error(t(280));var o=i.stateNode;o&&(o=mc(o),ho(i.stateNode,i.type,o))}}function cr(i){kn?ur?ur.push(i):ur=[i]:kn=i}function Ga(){if(kn){var i=kn,o=ur;if(ur=kn=null,fo(i),o)for(i=0;i<o.length;i++)fo(o[i])}}function _s(i,o){return i(o)}function Ka(){}var Fr=!1;function Qa(i,o,l){if(Fr)return i(o,l);Fr=!0;try{return _s(i,o,l)}finally{Fr=!1,(kn!==null||ur!==null)&&(Ka(),Ga())}}function gt(i,o){var l=i.stateNode;if(l===null)return null;var h=mc(l);if(h===null)return null;l=h[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var po=!1;if(d)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){po=!0}}),window.addEventListener("test",jn,jn),window.removeEventListener("test",jn,jn)}catch{po=!1}function ys(i,o,l,h,p,_,w,C,N){var z=Array.prototype.slice.call(arguments,3);try{o.apply(l,z)}catch(X){this.onError(X)}}var vs=!1,mo=null,zn=!1,Ya=null,Ud={onError:function(i){vs=!0,mo=i}};function go(i,o,l,h,p,_,w,C,N){vs=!1,mo=null,ys.apply(Ud,arguments)}function Bu(i,o,l,h,p,_,w,C,N){if(go.apply(this,arguments),vs){if(vs){var z=mo;vs=!1,mo=null}else throw Error(t(198));zn||(zn=!0,Ya=z)}}function $n(i){var o=i,l=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,o.flags&4098&&(l=o.return),i=o.return;while(i)}return o.tag===3?l:null}function Es(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function Wn(i){if($n(i)!==i)throw Error(t(188))}function ju(i){var o=i.alternate;if(!o){if(o=$n(i),o===null)throw Error(t(188));return o!==i?null:i}for(var l=i,h=o;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return Wn(p),i;if(_===h)return Wn(p),o;_=_.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=_;else{for(var w=!1,C=p.child;C;){if(C===l){w=!0,l=p,h=_;break}if(C===h){w=!0,h=p,l=_;break}C=C.sibling}if(!w){for(C=_.child;C;){if(C===l){w=!0,l=_,h=p;break}if(C===h){w=!0,h=_,l=p;break}C=C.sibling}if(!w)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:o}function Xa(i){return i=ju(i),i!==null?_o(i):null}function _o(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=_o(i);if(o!==null)return o;i=i.sibling}return null}var yo=e.unstable_scheduleCallback,Ja=e.unstable_cancelCallback,zu=e.unstable_shouldYield,Bd=e.unstable_requestPaint,tt=e.unstable_now,$u=e.unstable_getCurrentPriorityLevel,ws=e.unstable_ImmediatePriority,vi=e.unstable_UserBlockingPriority,Nn=e.unstable_NormalPriority,Za=e.unstable_LowPriority,Wu=e.unstable_IdlePriority,Ts=null,En=null;function Hu(i){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(Ts,i,void 0,(i.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:Gu,el=Math.log,qu=Math.LN2;function Gu(i){return i>>>=0,i===0?32:31-(el(i)/qu|0)|0}var vo=64,Eo=4194304;function Ei(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Is(i,o){var l=i.pendingLanes;if(l===0)return 0;var h=0,p=i.suspendedLanes,_=i.pingedLanes,w=l&268435455;if(w!==0){var C=w&~p;C!==0?h=Ei(C):(_&=w,_!==0&&(h=Ei(_)))}else w=l&~p,w!==0?h=Ei(w):_!==0&&(h=Ei(_));if(h===0)return 0;if(o!==0&&o!==h&&!(o&p)&&(p=h&-h,_=o&-o,p>=_||p===16&&(_&4194240)!==0))return o;if(h&4&&(h|=l&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=h;0<o;)l=31-rn(o),p=1<<l,h|=i[l],o&=~p;return h}function jd(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ur(i,o){for(var l=i.suspendedLanes,h=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var w=31-rn(_),C=1<<w,N=p[w];N===-1?(!(C&l)||C&h)&&(p[w]=jd(C,o)):N<=o&&(i.expiredLanes|=C),_&=~C}}function wn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Ss(){var i=vo;return vo<<=1,!(vo&4194240)&&(vo=64),i}function wi(i){for(var o=[],l=0;31>l;l++)o.push(i);return o}function Ti(i,o,l){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-rn(o),i[o]=l}function Je(i,o){var l=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-rn(l),_=1<<p;o[p]=0,h[p]=-1,i[p]=-1,l&=~_}}function Ii(i,o){var l=i.entangledLanes|=o;for(i=i.entanglements;l;){var h=31-rn(l),p=1<<h;p&o|i[h]&o&&(i[h]|=o),l&=~p}}var Me=0;function Si(i){return i&=-i,1<i?4<i?i&268435455?16:536870912:4:1}var Ku,wo,Qu,Yu,Xu,tl=!1,hr=[],jt=null,Hn=null,qn=null,Ci=new Map,xn=new Map,dr=[],zd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ju(i,o){switch(i){case"focusin":case"focusout":jt=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":Ci.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":xn.delete(o.pointerId)}}function un(i,o,l,h,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:o,domEventName:l,eventSystemFlags:h,nativeEvent:_,targetContainers:[p]},o!==null&&(o=gl(o),o!==null&&wo(o)),i):(i.eventSystemFlags|=h,o=i.targetContainers,p!==null&&o.indexOf(p)===-1&&o.push(p),i)}function $d(i,o,l,h,p){switch(o){case"focusin":return jt=un(jt,i,o,l,h,p),!0;case"dragenter":return Hn=un(Hn,i,o,l,h,p),!0;case"mouseover":return qn=un(qn,i,o,l,h,p),!0;case"pointerover":var _=p.pointerId;return Ci.set(_,un(Ci.get(_)||null,i,o,l,h,p)),!0;case"gotpointercapture":return _=p.pointerId,xn.set(_,un(xn.get(_)||null,i,o,l,h,p)),!0}return!1}function Zu(i){var o=ks(i.target);if(o!==null){var l=$n(o);if(l!==null){if(o=l.tag,o===13){if(o=Es(l),o!==null){i.blockedOn=o,Xu(i.priority,function(){Qu(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Br(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var l=To(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);gs=h,l.target.dispatchEvent(h),gs=null}else return o=gl(l),o!==null&&wo(o),i.blockedOn=l,!1;o.shift()}return!0}function Cs(i,o,l){Br(i)&&l.delete(o)}function ec(){tl=!1,jt!==null&&Br(jt)&&(jt=null),Hn!==null&&Br(Hn)&&(Hn=null),qn!==null&&Br(qn)&&(qn=null),Ci.forEach(Cs),xn.forEach(Cs)}function Gn(i,o){i.blockedOn===o&&(i.blockedOn=null,tl||(tl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ec)))}function Kn(i){function o(p){return Gn(p,i)}if(0<hr.length){Gn(hr[0],i);for(var l=1;l<hr.length;l++){var h=hr[l];h.blockedOn===i&&(h.blockedOn=null)}}for(jt!==null&&Gn(jt,i),Hn!==null&&Gn(Hn,i),qn!==null&&Gn(qn,i),Ci.forEach(o),xn.forEach(o),l=0;l<dr.length;l++)h=dr[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<dr.length&&(l=dr[0],l.blockedOn===null);)Zu(l),l.blockedOn===null&&dr.shift()}var jr=de.ReactCurrentBatchConfig,Ri=!0;function at(i,o,l,h){var p=Me,_=jr.transition;jr.transition=null;try{Me=1,nl(i,o,l,h)}finally{Me=p,jr.transition=_}}function Wd(i,o,l,h){var p=Me,_=jr.transition;jr.transition=null;try{Me=4,nl(i,o,l,h)}finally{Me=p,jr.transition=_}}function nl(i,o,l,h){if(Ri){var p=To(i,o,l,h);if(p===null)tf(i,o,h,Rs,l),Ju(i,h);else if($d(p,i,o,l,h))h.stopPropagation();else if(Ju(i,h),o&4&&-1<zd.indexOf(i)){for(;p!==null;){var _=gl(p);if(_!==null&&Ku(_),_=To(i,o,l,h),_===null&&tf(i,o,h,Rs,l),_===p)break;p=_}p!==null&&h.stopPropagation()}else tf(i,o,h,null,l)}}var Rs=null;function To(i,o,l,h){if(Rs=null,i=co(h),i=ks(i),i!==null)if(o=$n(i),o===null)i=null;else if(l=o.tag,l===13){if(i=Es(o),i!==null)return i;i=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return Rs=i,null}function rl(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($u()){case ws:return 1;case vi:return 4;case Nn:case Za:return 16;case Wu:return 536870912;default:return 16}default:return 16}}var Tn=null,Io=null,cn=null;function il(){if(cn)return cn;var i,o=Io,l=o.length,h,p="value"in Tn?Tn.value:Tn.textContent,_=p.length;for(i=0;i<l&&o[i]===p[i];i++);var w=l-i;for(h=1;h<=w&&o[l-h]===p[_-h];h++);return cn=p.slice(i,1<h?1-h:void 0)}function So(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function fr(){return!0}function sl(){return!1}function zt(i){function o(l,h,p,_,w){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=_,this.target=w,this.currentTarget=null;for(var C in i)i.hasOwnProperty(C)&&(l=i[C],this[C]=l?l(_):_[C]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?fr:sl,this.isPropagationStopped=sl,this}return se(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=fr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=fr)},persist:function(){},isPersistent:fr}),o}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Co=zt(Qn),pr=se({},Qn,{view:0,detail:0}),Hd=zt(pr),Ro,zr,Ai,As=se({},pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mr,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Ai&&(Ai&&i.type==="mousemove"?(Ro=i.screenX-Ai.screenX,zr=i.screenY-Ai.screenY):zr=Ro=0,Ai=i),Ro)},movementY:function(i){return"movementY"in i?i.movementY:zr}}),Ao=zt(As),ol=se({},As,{dataTransfer:0}),tc=zt(ol),Po=se({},pr,{relatedTarget:0}),ko=zt(Po),nc=se({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),$r=zt(nc),rc=se({},Qn,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),ic=zt(rc),sc=se({},Qn,{data:0}),al=zt(sc),No={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ac(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=oc[i])?!!o[i]:!1}function mr(){return ac}var c=se({},pr,{key:function(i){if(i.key){var o=No[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=So(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?sn[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mr,charCode:function(i){return i.type==="keypress"?So(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?So(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),g=zt(c),y=se({},As,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I=zt(y),U=se({},pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mr}),W=zt(U),ne=se({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qe=zt(ne),Ct=se({},As,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Ue=zt(Ct),Lt=[9,13,27,32],vt=d&&"CompositionEvent"in window,Dn=null;d&&"documentMode"in document&&(Dn=document.documentMode);var In=d&&"TextEvent"in window&&!Dn,Ps=d&&(!vt||Dn&&8<Dn&&11>=Dn),xo=" ",Xg=!1;function Jg(i,o){switch(i){case"keyup":return Lt.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zg(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Do=!1;function _C(i,o){switch(i){case"compositionend":return Zg(o);case"keypress":return o.which!==32?null:(Xg=!0,xo);case"textInput":return i=o.data,i===xo&&Xg?null:i;default:return null}}function yC(i,o){if(Do)return i==="compositionend"||!vt&&Jg(i,o)?(i=il(),cn=Io=Tn=null,Do=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Ps&&o.locale!=="ko"?null:o.data;default:return null}}var vC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function e_(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!vC[i.type]:o==="textarea"}function t_(i,o,l,h){cr(h),o=dc(o,"onChange"),0<o.length&&(l=new Co("onChange","change",null,l,h),i.push({event:l,listeners:o}))}var ll=null,ul=null;function EC(i){v_(i,0)}function lc(i){var o=Vo(i);if(so(o))return i}function wC(i,o){if(i==="change")return o}var n_=!1;if(d){var qd;if(d){var Gd="oninput"in document;if(!Gd){var r_=document.createElement("div");r_.setAttribute("oninput","return;"),Gd=typeof r_.oninput=="function"}qd=Gd}else qd=!1;n_=qd&&(!document.documentMode||9<document.documentMode)}function i_(){ll&&(ll.detachEvent("onpropertychange",s_),ul=ll=null)}function s_(i){if(i.propertyName==="value"&&lc(ul)){var o=[];t_(o,ul,i,co(i)),Qa(EC,o)}}function TC(i,o,l){i==="focusin"?(i_(),ll=o,ul=l,ll.attachEvent("onpropertychange",s_)):i==="focusout"&&i_()}function IC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return lc(ul)}function SC(i,o){if(i==="click")return lc(o)}function CC(i,o){if(i==="input"||i==="change")return lc(o)}function RC(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var Yn=typeof Object.is=="function"?Object.is:RC;function cl(i,o){if(Yn(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var l=Object.keys(i),h=Object.keys(o);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(o,p)||!Yn(i[p],o[p]))return!1}return!0}function o_(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function a_(i,o){var l=o_(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=o&&h>=o)return{node:l,offset:o-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=o_(l)}}function l_(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?l_(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function u_(){for(var i=window,o=_i();o instanceof i.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)i=o.contentWindow;else break;o=_i(i.document)}return o}function Kd(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function AC(i){var o=u_(),l=i.focusedElem,h=i.selectionRange;if(o!==l&&l&&l.ownerDocument&&l_(l.ownerDocument.documentElement,l)){if(h!==null&&Kd(l)){if(o=h.start,i=h.end,i===void 0&&(i=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(i,l.value.length);else if(i=(o=l.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,_=Math.min(h.start,p);h=h.end===void 0?_:Math.min(h.end,p),!i.extend&&_>h&&(p=h,h=_,_=p),p=a_(l,_);var w=a_(l,h);p&&w&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==w.node||i.focusOffset!==w.offset)&&(o=o.createRange(),o.setStart(p.node,p.offset),i.removeAllRanges(),_>h?(i.addRange(o),i.extend(w.node,w.offset)):(o.setEnd(w.node,w.offset),i.addRange(o)))}}for(o=[],i=l;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)i=o[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var PC=d&&"documentMode"in document&&11>=document.documentMode,Oo=null,Qd=null,hl=null,Yd=!1;function c_(i,o,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Yd||Oo==null||Oo!==_i(h)||(h=Oo,"selectionStart"in h&&Kd(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),hl&&cl(hl,h)||(hl=h,h=dc(Qd,"onSelect"),0<h.length&&(o=new Co("onSelect","select",null,o,l),i.push({event:o,listeners:h}),o.target=Oo)))}function uc(i,o){var l={};return l[i.toLowerCase()]=o.toLowerCase(),l["Webkit"+i]="webkit"+o,l["Moz"+i]="moz"+o,l}var Lo={animationend:uc("Animation","AnimationEnd"),animationiteration:uc("Animation","AnimationIteration"),animationstart:uc("Animation","AnimationStart"),transitionend:uc("Transition","TransitionEnd")},Xd={},h_={};d&&(h_=document.createElement("div").style,"AnimationEvent"in window||(delete Lo.animationend.animation,delete Lo.animationiteration.animation,delete Lo.animationstart.animation),"TransitionEvent"in window||delete Lo.transitionend.transition);function cc(i){if(Xd[i])return Xd[i];if(!Lo[i])return i;var o=Lo[i],l;for(l in o)if(o.hasOwnProperty(l)&&l in h_)return Xd[i]=o[l];return i}var d_=cc("animationend"),f_=cc("animationiteration"),p_=cc("animationstart"),m_=cc("transitionend"),g_=new Map,__="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pi(i,o){g_.set(i,o),a(o,[i])}for(var Jd=0;Jd<__.length;Jd++){var Zd=__[Jd],kC=Zd.toLowerCase(),NC=Zd[0].toUpperCase()+Zd.slice(1);Pi(kC,"on"+NC)}Pi(d_,"onAnimationEnd"),Pi(f_,"onAnimationIteration"),Pi(p_,"onAnimationStart"),Pi("dblclick","onDoubleClick"),Pi("focusin","onFocus"),Pi("focusout","onBlur"),Pi(m_,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xC=new Set("cancel close invalid load scroll toggle".split(" ").concat(dl));function y_(i,o,l){var h=i.type||"unknown-event";i.currentTarget=l,Bu(h,o,void 0,i),i.currentTarget=null}function v_(i,o){o=(o&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],p=h.event;h=h.listeners;e:{var _=void 0;if(o)for(var w=h.length-1;0<=w;w--){var C=h[w],N=C.instance,z=C.currentTarget;if(C=C.listener,N!==_&&p.isPropagationStopped())break e;y_(p,C,z),_=N}else for(w=0;w<h.length;w++){if(C=h[w],N=C.instance,z=C.currentTarget,C=C.listener,N!==_&&p.isPropagationStopped())break e;y_(p,C,z),_=N}}}if(zn)throw i=Ya,zn=!1,Ya=null,i}function it(i,o){var l=o[lf];l===void 0&&(l=o[lf]=new Set);var h=i+"__bubble";l.has(h)||(E_(o,i,2,!1),l.add(h))}function ef(i,o,l){var h=0;o&&(h|=4),E_(l,i,h,o)}var hc="_reactListening"+Math.random().toString(36).slice(2);function fl(i){if(!i[hc]){i[hc]=!0,r.forEach(function(l){l!=="selectionchange"&&(xC.has(l)||ef(l,!1,i),ef(l,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[hc]||(o[hc]=!0,ef("selectionchange",!1,o))}}function E_(i,o,l,h){switch(rl(o)){case 1:var p=at;break;case 4:p=Wd;break;default:p=nl}l=p.bind(null,o,l,i),p=void 0,!po||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(p=!0),h?p!==void 0?i.addEventListener(o,l,{capture:!0,passive:p}):i.addEventListener(o,l,!0):p!==void 0?i.addEventListener(o,l,{passive:p}):i.addEventListener(o,l,!1)}function tf(i,o,l,h,p){var _=h;if(!(o&1)&&!(o&2)&&h!==null)e:for(;;){if(h===null)return;var w=h.tag;if(w===3||w===4){var C=h.stateNode.containerInfo;if(C===p||C.nodeType===8&&C.parentNode===p)break;if(w===4)for(w=h.return;w!==null;){var N=w.tag;if((N===3||N===4)&&(N=w.stateNode.containerInfo,N===p||N.nodeType===8&&N.parentNode===p))return;w=w.return}for(;C!==null;){if(w=ks(C),w===null)return;if(N=w.tag,N===5||N===6){h=_=w;continue e}C=C.parentNode}}h=h.return}Qa(function(){var z=_,X=co(l),Z=[];e:{var Q=g_.get(i);if(Q!==void 0){var oe=Co,ue=i;switch(i){case"keypress":if(So(l)===0)break e;case"keydown":case"keyup":oe=g;break;case"focusin":ue="focus",oe=ko;break;case"focusout":ue="blur",oe=ko;break;case"beforeblur":case"afterblur":oe=ko;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=Ao;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=tc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=W;break;case d_:case f_:case p_:oe=$r;break;case m_:oe=Qe;break;case"scroll":oe=Hd;break;case"wheel":oe=Ue;break;case"copy":case"cut":case"paste":oe=ic;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=I}var he=(o&4)!==0,_t=!he&&i==="scroll",B=he?Q!==null?Q+"Capture":null:Q;he=[];for(var O=z,j;O!==null;){j=O;var ee=j.stateNode;if(j.tag===5&&ee!==null&&(j=ee,B!==null&&(ee=gt(O,B),ee!=null&&he.push(pl(O,ee,j)))),_t)break;O=O.return}0<he.length&&(Q=new oe(Q,ue,null,l,X),Z.push({event:Q,listeners:he}))}}if(!(o&7)){e:{if(Q=i==="mouseover"||i==="pointerover",oe=i==="mouseout"||i==="pointerout",Q&&l!==gs&&(ue=l.relatedTarget||l.fromElement)&&(ks(ue)||ue[Wr]))break e;if((oe||Q)&&(Q=X.window===X?X:(Q=X.ownerDocument)?Q.defaultView||Q.parentWindow:window,oe?(ue=l.relatedTarget||l.toElement,oe=z,ue=ue?ks(ue):null,ue!==null&&(_t=$n(ue),ue!==_t||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(oe=null,ue=z),oe!==ue)){if(he=Ao,ee="onMouseLeave",B="onMouseEnter",O="mouse",(i==="pointerout"||i==="pointerover")&&(he=I,ee="onPointerLeave",B="onPointerEnter",O="pointer"),_t=oe==null?Q:Vo(oe),j=ue==null?Q:Vo(ue),Q=new he(ee,O+"leave",oe,l,X),Q.target=_t,Q.relatedTarget=j,ee=null,ks(X)===z&&(he=new he(B,O+"enter",ue,l,X),he.target=j,he.relatedTarget=_t,ee=he),_t=ee,oe&&ue)t:{for(he=oe,B=ue,O=0,j=he;j;j=bo(j))O++;for(j=0,ee=B;ee;ee=bo(ee))j++;for(;0<O-j;)he=bo(he),O--;for(;0<j-O;)B=bo(B),j--;for(;O--;){if(he===B||B!==null&&he===B.alternate)break t;he=bo(he),B=bo(B)}he=null}else he=null;oe!==null&&w_(Z,Q,oe,he,!1),ue!==null&&_t!==null&&w_(Z,_t,ue,he,!0)}}e:{if(Q=z?Vo(z):window,oe=Q.nodeName&&Q.nodeName.toLowerCase(),oe==="select"||oe==="input"&&Q.type==="file")var fe=wC;else if(e_(Q))if(n_)fe=CC;else{fe=IC;var ge=TC}else(oe=Q.nodeName)&&oe.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(fe=SC);if(fe&&(fe=fe(i,z))){t_(Z,fe,l,X);break e}ge&&ge(i,Q,z),i==="focusout"&&(ge=Q._wrapperState)&&ge.controlled&&Q.type==="number"&&ao(Q,"number",Q.value)}switch(ge=z?Vo(z):window,i){case"focusin":(e_(ge)||ge.contentEditable==="true")&&(Oo=ge,Qd=z,hl=null);break;case"focusout":hl=Qd=Oo=null;break;case"mousedown":Yd=!0;break;case"contextmenu":case"mouseup":case"dragend":Yd=!1,c_(Z,l,X);break;case"selectionchange":if(PC)break;case"keydown":case"keyup":c_(Z,l,X)}var _e;if(vt)e:{switch(i){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else Do?Jg(i,l)&&(we="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(we="onCompositionStart");we&&(Ps&&l.locale!=="ko"&&(Do||we!=="onCompositionStart"?we==="onCompositionEnd"&&Do&&(_e=il()):(Tn=X,Io="value"in Tn?Tn.value:Tn.textContent,Do=!0)),ge=dc(z,we),0<ge.length&&(we=new al(we,i,null,l,X),Z.push({event:we,listeners:ge}),_e?we.data=_e:(_e=Zg(l),_e!==null&&(we.data=_e)))),(_e=In?_C(i,l):yC(i,l))&&(z=dc(z,"onBeforeInput"),0<z.length&&(X=new al("onBeforeInput","beforeinput",null,l,X),Z.push({event:X,listeners:z}),X.data=_e))}v_(Z,o)})}function pl(i,o,l){return{instance:i,listener:o,currentTarget:l}}function dc(i,o){for(var l=o+"Capture",h=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=gt(i,l),_!=null&&h.unshift(pl(i,_,p)),_=gt(i,o),_!=null&&h.push(pl(i,_,p))),i=i.return}return h}function bo(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function w_(i,o,l,h,p){for(var _=o._reactName,w=[];l!==null&&l!==h;){var C=l,N=C.alternate,z=C.stateNode;if(N!==null&&N===h)break;C.tag===5&&z!==null&&(C=z,p?(N=gt(l,_),N!=null&&w.unshift(pl(l,N,C))):p||(N=gt(l,_),N!=null&&w.push(pl(l,N,C)))),l=l.return}w.length!==0&&i.push({event:o,listeners:w})}var DC=/\r\n?/g,OC=/\u0000|\uFFFD/g;function T_(i){return(typeof i=="string"?i:""+i).replace(DC,`
`).replace(OC,"")}function fc(i,o,l){if(o=T_(o),T_(i)!==o&&l)throw Error(t(425))}function pc(){}var nf=null,rf=null;function sf(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var of=typeof setTimeout=="function"?setTimeout:void 0,LC=typeof clearTimeout=="function"?clearTimeout:void 0,I_=typeof Promise=="function"?Promise:void 0,bC=typeof queueMicrotask=="function"?queueMicrotask:typeof I_<"u"?function(i){return I_.resolve(null).then(i).catch(MC)}:of;function MC(i){setTimeout(function(){throw i})}function af(i,o){var l=o,h=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){i.removeChild(p),Kn(o);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);Kn(o)}function ki(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function S_(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return i;o--}else l==="/$"&&o++}i=i.previousSibling}return null}var Mo=Math.random().toString(36).slice(2),gr="__reactFiber$"+Mo,ml="__reactProps$"+Mo,Wr="__reactContainer$"+Mo,lf="__reactEvents$"+Mo,VC="__reactListeners$"+Mo,FC="__reactHandles$"+Mo;function ks(i){var o=i[gr];if(o)return o;for(var l=i.parentNode;l;){if(o=l[Wr]||l[gr]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(i=S_(i);i!==null;){if(l=i[gr])return l;i=S_(i)}return o}i=l,l=i.parentNode}return null}function gl(i){return i=i[gr]||i[Wr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Vo(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function mc(i){return i[ml]||null}var uf=[],Fo=-1;function Ni(i){return{current:i}}function st(i){0>Fo||(i.current=uf[Fo],uf[Fo]=null,Fo--)}function nt(i,o){Fo++,uf[Fo]=i.current,i.current=o}var xi={},Kt=Ni(xi),hn=Ni(!1),Ns=xi;function Uo(i,o){var l=i.type.contextTypes;if(!l)return xi;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===o)return h.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=o[_];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=p),p}function dn(i){return i=i.childContextTypes,i!=null}function gc(){st(hn),st(Kt)}function C_(i,o,l){if(Kt.current!==xi)throw Error(t(168));nt(Kt,o),nt(hn,l)}function R_(i,o,l){var h=i.stateNode;if(o=o.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in o))throw Error(t(108,He(i)||"Unknown",p));return se({},l,h)}function _c(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||xi,Ns=Kt.current,nt(Kt,i),nt(hn,hn.current),!0}function A_(i,o,l){var h=i.stateNode;if(!h)throw Error(t(169));l?(i=R_(i,o,Ns),h.__reactInternalMemoizedMergedChildContext=i,st(hn),st(Kt),nt(Kt,i)):st(hn),nt(hn,l)}var Hr=null,yc=!1,cf=!1;function P_(i){Hr===null?Hr=[i]:Hr.push(i)}function UC(i){yc=!0,P_(i)}function Di(){if(!cf&&Hr!==null){cf=!0;var i=0,o=Me;try{var l=Hr;for(Me=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}Hr=null,yc=!1}catch(p){throw Hr!==null&&(Hr=Hr.slice(i+1)),yo(ws,Di),p}finally{Me=o,cf=!1}}return null}var Bo=[],jo=0,vc=null,Ec=0,On=[],Ln=0,xs=null,qr=1,Gr="";function Ds(i,o){Bo[jo++]=Ec,Bo[jo++]=vc,vc=i,Ec=o}function k_(i,o,l){On[Ln++]=qr,On[Ln++]=Gr,On[Ln++]=xs,xs=i;var h=qr;i=Gr;var p=32-rn(h)-1;h&=~(1<<p),l+=1;var _=32-rn(o)+p;if(30<_){var w=p-p%5;_=(h&(1<<w)-1).toString(32),h>>=w,p-=w,qr=1<<32-rn(o)+p|l<<p|h,Gr=_+i}else qr=1<<_|l<<p|h,Gr=i}function hf(i){i.return!==null&&(Ds(i,1),k_(i,1,0))}function df(i){for(;i===vc;)vc=Bo[--jo],Bo[jo]=null,Ec=Bo[--jo],Bo[jo]=null;for(;i===xs;)xs=On[--Ln],On[Ln]=null,Gr=On[--Ln],On[Ln]=null,qr=On[--Ln],On[Ln]=null}var Sn=null,Cn=null,lt=!1,Xn=null;function N_(i,o){var l=Fn(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=i,o=i.deletions,o===null?(i.deletions=[l],i.flags|=16):o.push(l)}function x_(i,o){switch(i.tag){case 5:var l=i.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,Sn=i,Cn=ki(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,Sn=i,Cn=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=xs!==null?{id:qr,overflow:Gr}:null,i.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=Fn(18,null,null,0),l.stateNode=o,l.return=i,i.child=l,Sn=i,Cn=null,!0):!1;default:return!1}}function ff(i){return(i.mode&1)!==0&&(i.flags&128)===0}function pf(i){if(lt){var o=Cn;if(o){var l=o;if(!x_(i,o)){if(ff(i))throw Error(t(418));o=ki(l.nextSibling);var h=Sn;o&&x_(i,o)?N_(h,l):(i.flags=i.flags&-4097|2,lt=!1,Sn=i)}}else{if(ff(i))throw Error(t(418));i.flags=i.flags&-4097|2,lt=!1,Sn=i}}}function D_(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Sn=i}function wc(i){if(i!==Sn)return!1;if(!lt)return D_(i),lt=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!sf(i.type,i.memoizedProps)),o&&(o=Cn)){if(ff(i))throw O_(),Error(t(418));for(;o;)N_(i,o),o=ki(o.nextSibling)}if(D_(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(o===0){Cn=ki(i.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}i=i.nextSibling}Cn=null}}else Cn=Sn?ki(i.stateNode.nextSibling):null;return!0}function O_(){for(var i=Cn;i;)i=ki(i.nextSibling)}function zo(){Cn=Sn=null,lt=!1}function mf(i){Xn===null?Xn=[i]:Xn.push(i)}var BC=de.ReactCurrentBatchConfig;function _l(i,o,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,i));var p=h,_=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===_?o.ref:(o=function(w){var C=p.refs;w===null?delete C[_]:C[_]=w},o._stringRef=_,o)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Tc(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function L_(i){var o=i._init;return o(i._payload)}function b_(i){function o(B,O){if(i){var j=B.deletions;j===null?(B.deletions=[O],B.flags|=16):j.push(O)}}function l(B,O){if(!i)return null;for(;O!==null;)o(B,O),O=O.sibling;return null}function h(B,O){for(B=new Map;O!==null;)O.key!==null?B.set(O.key,O):B.set(O.index,O),O=O.sibling;return B}function p(B,O){return B=Bi(B,O),B.index=0,B.sibling=null,B}function _(B,O,j){return B.index=j,i?(j=B.alternate,j!==null?(j=j.index,j<O?(B.flags|=2,O):j):(B.flags|=2,O)):(B.flags|=1048576,O)}function w(B){return i&&B.alternate===null&&(B.flags|=2),B}function C(B,O,j,ee){return O===null||O.tag!==6?(O=op(j,B.mode,ee),O.return=B,O):(O=p(O,j),O.return=B,O)}function N(B,O,j,ee){var fe=j.type;return fe===D?X(B,O,j.props.children,ee,j.key):O!==null&&(O.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===Xe&&L_(fe)===O.type)?(ee=p(O,j.props),ee.ref=_l(B,O,j),ee.return=B,ee):(ee=qc(j.type,j.key,j.props,null,B.mode,ee),ee.ref=_l(B,O,j),ee.return=B,ee)}function z(B,O,j,ee){return O===null||O.tag!==4||O.stateNode.containerInfo!==j.containerInfo||O.stateNode.implementation!==j.implementation?(O=ap(j,B.mode,ee),O.return=B,O):(O=p(O,j.children||[]),O.return=B,O)}function X(B,O,j,ee,fe){return O===null||O.tag!==7?(O=Bs(j,B.mode,ee,fe),O.return=B,O):(O=p(O,j),O.return=B,O)}function Z(B,O,j){if(typeof O=="string"&&O!==""||typeof O=="number")return O=op(""+O,B.mode,j),O.return=B,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Re:return j=qc(O.type,O.key,O.props,null,B.mode,j),j.ref=_l(B,null,O),j.return=B,j;case Ie:return O=ap(O,B.mode,j),O.return=B,O;case Xe:var ee=O._init;return Z(B,ee(O._payload),j)}if(br(O)||pe(O))return O=Bs(O,B.mode,j,null),O.return=B,O;Tc(B,O)}return null}function Q(B,O,j,ee){var fe=O!==null?O.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return fe!==null?null:C(B,O,""+j,ee);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Re:return j.key===fe?N(B,O,j,ee):null;case Ie:return j.key===fe?z(B,O,j,ee):null;case Xe:return fe=j._init,Q(B,O,fe(j._payload),ee)}if(br(j)||pe(j))return fe!==null?null:X(B,O,j,ee,null);Tc(B,j)}return null}function oe(B,O,j,ee,fe){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return B=B.get(j)||null,C(O,B,""+ee,fe);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case Re:return B=B.get(ee.key===null?j:ee.key)||null,N(O,B,ee,fe);case Ie:return B=B.get(ee.key===null?j:ee.key)||null,z(O,B,ee,fe);case Xe:var ge=ee._init;return oe(B,O,j,ge(ee._payload),fe)}if(br(ee)||pe(ee))return B=B.get(j)||null,X(O,B,ee,fe,null);Tc(O,ee)}return null}function ue(B,O,j,ee){for(var fe=null,ge=null,_e=O,we=O=0,Vt=null;_e!==null&&we<j.length;we++){_e.index>we?(Vt=_e,_e=null):Vt=_e.sibling;var ze=Q(B,_e,j[we],ee);if(ze===null){_e===null&&(_e=Vt);break}i&&_e&&ze.alternate===null&&o(B,_e),O=_(ze,O,we),ge===null?fe=ze:ge.sibling=ze,ge=ze,_e=Vt}if(we===j.length)return l(B,_e),lt&&Ds(B,we),fe;if(_e===null){for(;we<j.length;we++)_e=Z(B,j[we],ee),_e!==null&&(O=_(_e,O,we),ge===null?fe=_e:ge.sibling=_e,ge=_e);return lt&&Ds(B,we),fe}for(_e=h(B,_e);we<j.length;we++)Vt=oe(_e,B,we,j[we],ee),Vt!==null&&(i&&Vt.alternate!==null&&_e.delete(Vt.key===null?we:Vt.key),O=_(Vt,O,we),ge===null?fe=Vt:ge.sibling=Vt,ge=Vt);return i&&_e.forEach(function(ji){return o(B,ji)}),lt&&Ds(B,we),fe}function he(B,O,j,ee){var fe=pe(j);if(typeof fe!="function")throw Error(t(150));if(j=fe.call(j),j==null)throw Error(t(151));for(var ge=fe=null,_e=O,we=O=0,Vt=null,ze=j.next();_e!==null&&!ze.done;we++,ze=j.next()){_e.index>we?(Vt=_e,_e=null):Vt=_e.sibling;var ji=Q(B,_e,ze.value,ee);if(ji===null){_e===null&&(_e=Vt);break}i&&_e&&ji.alternate===null&&o(B,_e),O=_(ji,O,we),ge===null?fe=ji:ge.sibling=ji,ge=ji,_e=Vt}if(ze.done)return l(B,_e),lt&&Ds(B,we),fe;if(_e===null){for(;!ze.done;we++,ze=j.next())ze=Z(B,ze.value,ee),ze!==null&&(O=_(ze,O,we),ge===null?fe=ze:ge.sibling=ze,ge=ze);return lt&&Ds(B,we),fe}for(_e=h(B,_e);!ze.done;we++,ze=j.next())ze=oe(_e,B,we,ze.value,ee),ze!==null&&(i&&ze.alternate!==null&&_e.delete(ze.key===null?we:ze.key),O=_(ze,O,we),ge===null?fe=ze:ge.sibling=ze,ge=ze);return i&&_e.forEach(function(yR){return o(B,yR)}),lt&&Ds(B,we),fe}function _t(B,O,j,ee){if(typeof j=="object"&&j!==null&&j.type===D&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Re:e:{for(var fe=j.key,ge=O;ge!==null;){if(ge.key===fe){if(fe=j.type,fe===D){if(ge.tag===7){l(B,ge.sibling),O=p(ge,j.props.children),O.return=B,B=O;break e}}else if(ge.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===Xe&&L_(fe)===ge.type){l(B,ge.sibling),O=p(ge,j.props),O.ref=_l(B,ge,j),O.return=B,B=O;break e}l(B,ge);break}else o(B,ge);ge=ge.sibling}j.type===D?(O=Bs(j.props.children,B.mode,ee,j.key),O.return=B,B=O):(ee=qc(j.type,j.key,j.props,null,B.mode,ee),ee.ref=_l(B,O,j),ee.return=B,B=ee)}return w(B);case Ie:e:{for(ge=j.key;O!==null;){if(O.key===ge)if(O.tag===4&&O.stateNode.containerInfo===j.containerInfo&&O.stateNode.implementation===j.implementation){l(B,O.sibling),O=p(O,j.children||[]),O.return=B,B=O;break e}else{l(B,O);break}else o(B,O);O=O.sibling}O=ap(j,B.mode,ee),O.return=B,B=O}return w(B);case Xe:return ge=j._init,_t(B,O,ge(j._payload),ee)}if(br(j))return ue(B,O,j,ee);if(pe(j))return he(B,O,j,ee);Tc(B,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,O!==null&&O.tag===6?(l(B,O.sibling),O=p(O,j),O.return=B,B=O):(l(B,O),O=op(j,B.mode,ee),O.return=B,B=O),w(B)):l(B,O)}return _t}var $o=b_(!0),M_=b_(!1),Ic=Ni(null),Sc=null,Wo=null,gf=null;function _f(){gf=Wo=Sc=null}function yf(i){var o=Ic.current;st(Ic),i._currentValue=o}function vf(i,o,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,h!==null&&(h.childLanes|=o)):h!==null&&(h.childLanes&o)!==o&&(h.childLanes|=o),i===l)break;i=i.return}}function Ho(i,o){Sc=i,gf=Wo=null,i=i.dependencies,i!==null&&i.firstContext!==null&&(i.lanes&o&&(fn=!0),i.firstContext=null)}function bn(i){var o=i._currentValue;if(gf!==i)if(i={context:i,memoizedValue:o,next:null},Wo===null){if(Sc===null)throw Error(t(308));Wo=i,Sc.dependencies={lanes:0,firstContext:i}}else Wo=Wo.next=i;return o}var Os=null;function Ef(i){Os===null?Os=[i]:Os.push(i)}function V_(i,o,l,h){var p=o.interleaved;return p===null?(l.next=l,Ef(o)):(l.next=p.next,p.next=l),o.interleaved=l,Kr(i,h)}function Kr(i,o){i.lanes|=o;var l=i.alternate;for(l!==null&&(l.lanes|=o),l=i,i=i.return;i!==null;)i.childLanes|=o,l=i.alternate,l!==null&&(l.childLanes|=o),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Oi=!1;function wf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function F_(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Qr(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function Li(i,o,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,je&2){var p=h.pending;return p===null?o.next=o:(o.next=p.next,p.next=o),h.pending=o,Kr(i,l)}return p=h.interleaved,p===null?(o.next=o,Ef(h)):(o.next=p.next,p.next=o),h.interleaved=o,Kr(i,l)}function Cc(i,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,Ii(i,l)}}function U_(i,o){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var w={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=w:_=_.next=w,l=l.next}while(l!==null);_===null?p=_=o:_=_.next=o}else p=_=o;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=o:i.next=o,l.lastBaseUpdate=o}function Rc(i,o,l,h){var p=i.updateQueue;Oi=!1;var _=p.firstBaseUpdate,w=p.lastBaseUpdate,C=p.shared.pending;if(C!==null){p.shared.pending=null;var N=C,z=N.next;N.next=null,w===null?_=z:w.next=z,w=N;var X=i.alternate;X!==null&&(X=X.updateQueue,C=X.lastBaseUpdate,C!==w&&(C===null?X.firstBaseUpdate=z:C.next=z,X.lastBaseUpdate=N))}if(_!==null){var Z=p.baseState;w=0,X=z=N=null,C=_;do{var Q=C.lane,oe=C.eventTime;if((h&Q)===Q){X!==null&&(X=X.next={eventTime:oe,lane:0,tag:C.tag,payload:C.payload,callback:C.callback,next:null});e:{var ue=i,he=C;switch(Q=o,oe=l,he.tag){case 1:if(ue=he.payload,typeof ue=="function"){Z=ue.call(oe,Z,Q);break e}Z=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=he.payload,Q=typeof ue=="function"?ue.call(oe,Z,Q):ue,Q==null)break e;Z=se({},Z,Q);break e;case 2:Oi=!0}}C.callback!==null&&C.lane!==0&&(i.flags|=64,Q=p.effects,Q===null?p.effects=[C]:Q.push(C))}else oe={eventTime:oe,lane:Q,tag:C.tag,payload:C.payload,callback:C.callback,next:null},X===null?(z=X=oe,N=Z):X=X.next=oe,w|=Q;if(C=C.next,C===null){if(C=p.shared.pending,C===null)break;Q=C,C=Q.next,Q.next=null,p.lastBaseUpdate=Q,p.shared.pending=null}}while(!0);if(X===null&&(N=Z),p.baseState=N,p.firstBaseUpdate=z,p.lastBaseUpdate=X,o=p.shared.interleaved,o!==null){p=o;do w|=p.lane,p=p.next;while(p!==o)}else _===null&&(p.shared.lanes=0);Ms|=w,i.lanes=w,i.memoizedState=Z}}function B_(i,o,l){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var h=i[o],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var yl={},_r=Ni(yl),vl=Ni(yl),El=Ni(yl);function Ls(i){if(i===yl)throw Error(t(174));return i}function Tf(i,o){switch(nt(El,o),nt(vl,i),nt(_r,yl),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:St(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=St(o,i)}st(_r),nt(_r,o)}function qo(){st(_r),st(vl),st(El)}function j_(i){Ls(El.current);var o=Ls(_r.current),l=St(o,i.type);o!==l&&(nt(vl,i),nt(_r,l))}function If(i){vl.current===i&&(st(_r),st(vl))}var ht=Ni(0);function Ac(i){for(var o=i;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if(o.flags&128)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Sf=[];function Cf(){for(var i=0;i<Sf.length;i++)Sf[i]._workInProgressVersionPrimary=null;Sf.length=0}var Pc=de.ReactCurrentDispatcher,Rf=de.ReactCurrentBatchConfig,bs=0,dt=null,Rt=null,bt=null,kc=!1,wl=!1,Tl=0,jC=0;function Qt(){throw Error(t(321))}function Af(i,o){if(o===null)return!1;for(var l=0;l<o.length&&l<i.length;l++)if(!Yn(i[l],o[l]))return!1;return!0}function Pf(i,o,l,h,p,_){if(bs=_,dt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Pc.current=i===null||i.memoizedState===null?HC:qC,i=l(h,p),wl){_=0;do{if(wl=!1,Tl=0,25<=_)throw Error(t(301));_+=1,bt=Rt=null,o.updateQueue=null,Pc.current=GC,i=l(h,p)}while(wl)}if(Pc.current=Dc,o=Rt!==null&&Rt.next!==null,bs=0,bt=Rt=dt=null,kc=!1,o)throw Error(t(300));return i}function kf(){var i=Tl!==0;return Tl=0,i}function yr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?dt.memoizedState=bt=i:bt=bt.next=i,bt}function Mn(){if(Rt===null){var i=dt.alternate;i=i!==null?i.memoizedState:null}else i=Rt.next;var o=bt===null?dt.memoizedState:bt.next;if(o!==null)bt=o,Rt=i;else{if(i===null)throw Error(t(310));Rt=i,i={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},bt===null?dt.memoizedState=bt=i:bt=bt.next=i}return bt}function Il(i,o){return typeof o=="function"?o(i):o}function Nf(i){var o=Mn(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=Rt,p=h.baseQueue,_=l.pending;if(_!==null){if(p!==null){var w=p.next;p.next=_.next,_.next=w}h.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,h=h.baseState;var C=w=null,N=null,z=_;do{var X=z.lane;if((bs&X)===X)N!==null&&(N=N.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),h=z.hasEagerState?z.eagerState:i(h,z.action);else{var Z={lane:X,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};N===null?(C=N=Z,w=h):N=N.next=Z,dt.lanes|=X,Ms|=X}z=z.next}while(z!==null&&z!==_);N===null?w=h:N.next=C,Yn(h,o.memoizedState)||(fn=!0),o.memoizedState=h,o.baseState=w,o.baseQueue=N,l.lastRenderedState=h}if(i=l.interleaved,i!==null){p=i;do _=p.lane,dt.lanes|=_,Ms|=_,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function xf(i){var o=Mn(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=l.dispatch,p=l.pending,_=o.memoizedState;if(p!==null){l.pending=null;var w=p=p.next;do _=i(_,w.action),w=w.next;while(w!==p);Yn(_,o.memoizedState)||(fn=!0),o.memoizedState=_,o.baseQueue===null&&(o.baseState=_),l.lastRenderedState=_}return[_,h]}function z_(){}function $_(i,o){var l=dt,h=Mn(),p=o(),_=!Yn(h.memoizedState,p);if(_&&(h.memoizedState=p,fn=!0),h=h.queue,Df(q_.bind(null,l,h,i),[i]),h.getSnapshot!==o||_||bt!==null&&bt.memoizedState.tag&1){if(l.flags|=2048,Sl(9,H_.bind(null,l,h,p,o),void 0,null),Mt===null)throw Error(t(349));bs&30||W_(l,o,p)}return p}function W_(i,o,l){i.flags|=16384,i={getSnapshot:o,value:l},o=dt.updateQueue,o===null?(o={lastEffect:null,stores:null},dt.updateQueue=o,o.stores=[i]):(l=o.stores,l===null?o.stores=[i]:l.push(i))}function H_(i,o,l,h){o.value=l,o.getSnapshot=h,G_(o)&&K_(i)}function q_(i,o,l){return l(function(){G_(o)&&K_(i)})}function G_(i){var o=i.getSnapshot;i=i.value;try{var l=o();return!Yn(i,l)}catch{return!0}}function K_(i){var o=Kr(i,1);o!==null&&tr(o,i,1,-1)}function Q_(i){var o=yr();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Il,lastRenderedState:i},o.queue=i,i=i.dispatch=WC.bind(null,dt,i),[o.memoizedState,i]}function Sl(i,o,l,h){return i={tag:i,create:o,destroy:l,deps:h,next:null},o=dt.updateQueue,o===null?(o={lastEffect:null,stores:null},dt.updateQueue=o,o.lastEffect=i.next=i):(l=o.lastEffect,l===null?o.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,o.lastEffect=i)),i}function Y_(){return Mn().memoizedState}function Nc(i,o,l,h){var p=yr();dt.flags|=i,p.memoizedState=Sl(1|o,l,void 0,h===void 0?null:h)}function xc(i,o,l,h){var p=Mn();h=h===void 0?null:h;var _=void 0;if(Rt!==null){var w=Rt.memoizedState;if(_=w.destroy,h!==null&&Af(h,w.deps)){p.memoizedState=Sl(o,l,_,h);return}}dt.flags|=i,p.memoizedState=Sl(1|o,l,_,h)}function X_(i,o){return Nc(8390656,8,i,o)}function Df(i,o){return xc(2048,8,i,o)}function J_(i,o){return xc(4,2,i,o)}function Z_(i,o){return xc(4,4,i,o)}function ey(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function ty(i,o,l){return l=l!=null?l.concat([i]):null,xc(4,4,ey.bind(null,o,i),l)}function Of(){}function ny(i,o){var l=Mn();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&Af(o,h[1])?h[0]:(l.memoizedState=[i,o],i)}function ry(i,o){var l=Mn();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&Af(o,h[1])?h[0]:(i=i(),l.memoizedState=[i,o],i)}function iy(i,o,l){return bs&21?(Yn(l,o)||(l=Ss(),dt.lanes|=l,Ms|=l,i.baseState=!0),o):(i.baseState&&(i.baseState=!1,fn=!0),i.memoizedState=l)}function zC(i,o){var l=Me;Me=l!==0&&4>l?l:4,i(!0);var h=Rf.transition;Rf.transition={};try{i(!1),o()}finally{Me=l,Rf.transition=h}}function sy(){return Mn().memoizedState}function $C(i,o,l){var h=Fi(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},oy(i))ay(o,l);else if(l=V_(i,o,l,h),l!==null){var p=an();tr(l,i,h,p),ly(l,o,h)}}function WC(i,o,l){var h=Fi(i),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(oy(i))ay(o,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=o.lastRenderedReducer,_!==null))try{var w=o.lastRenderedState,C=_(w,l);if(p.hasEagerState=!0,p.eagerState=C,Yn(C,w)){var N=o.interleaved;N===null?(p.next=p,Ef(o)):(p.next=N.next,N.next=p),o.interleaved=p;return}}catch{}finally{}l=V_(i,o,p,h),l!==null&&(p=an(),tr(l,i,h,p),ly(l,o,h))}}function oy(i){var o=i.alternate;return i===dt||o!==null&&o===dt}function ay(i,o){wl=kc=!0;var l=i.pending;l===null?o.next=o:(o.next=l.next,l.next=o),i.pending=o}function ly(i,o,l){if(l&4194240){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,Ii(i,l)}}var Dc={readContext:bn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},HC={readContext:bn,useCallback:function(i,o){return yr().memoizedState=[i,o===void 0?null:o],i},useContext:bn,useEffect:X_,useImperativeHandle:function(i,o,l){return l=l!=null?l.concat([i]):null,Nc(4194308,4,ey.bind(null,o,i),l)},useLayoutEffect:function(i,o){return Nc(4194308,4,i,o)},useInsertionEffect:function(i,o){return Nc(4,2,i,o)},useMemo:function(i,o){var l=yr();return o=o===void 0?null:o,i=i(),l.memoizedState=[i,o],i},useReducer:function(i,o,l){var h=yr();return o=l!==void 0?l(o):o,h.memoizedState=h.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},h.queue=i,i=i.dispatch=$C.bind(null,dt,i),[h.memoizedState,i]},useRef:function(i){var o=yr();return i={current:i},o.memoizedState=i},useState:Q_,useDebugValue:Of,useDeferredValue:function(i){return yr().memoizedState=i},useTransition:function(){var i=Q_(!1),o=i[0];return i=zC.bind(null,i[1]),yr().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,l){var h=dt,p=yr();if(lt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),Mt===null)throw Error(t(349));bs&30||W_(h,o,l)}p.memoizedState=l;var _={value:l,getSnapshot:o};return p.queue=_,X_(q_.bind(null,h,_,i),[i]),h.flags|=2048,Sl(9,H_.bind(null,h,_,l,o),void 0,null),l},useId:function(){var i=yr(),o=Mt.identifierPrefix;if(lt){var l=Gr,h=qr;l=(h&~(1<<32-rn(h)-1)).toString(32)+l,o=":"+o+"R"+l,l=Tl++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=jC++,o=":"+o+"r"+l.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},qC={readContext:bn,useCallback:ny,useContext:bn,useEffect:Df,useImperativeHandle:ty,useInsertionEffect:J_,useLayoutEffect:Z_,useMemo:ry,useReducer:Nf,useRef:Y_,useState:function(){return Nf(Il)},useDebugValue:Of,useDeferredValue:function(i){var o=Mn();return iy(o,Rt.memoizedState,i)},useTransition:function(){var i=Nf(Il)[0],o=Mn().memoizedState;return[i,o]},useMutableSource:z_,useSyncExternalStore:$_,useId:sy,unstable_isNewReconciler:!1},GC={readContext:bn,useCallback:ny,useContext:bn,useEffect:Df,useImperativeHandle:ty,useInsertionEffect:J_,useLayoutEffect:Z_,useMemo:ry,useReducer:xf,useRef:Y_,useState:function(){return xf(Il)},useDebugValue:Of,useDeferredValue:function(i){var o=Mn();return Rt===null?o.memoizedState=i:iy(o,Rt.memoizedState,i)},useTransition:function(){var i=xf(Il)[0],o=Mn().memoizedState;return[i,o]},useMutableSource:z_,useSyncExternalStore:$_,useId:sy,unstable_isNewReconciler:!1};function Jn(i,o){if(i&&i.defaultProps){o=se({},o),i=i.defaultProps;for(var l in i)o[l]===void 0&&(o[l]=i[l]);return o}return o}function Lf(i,o,l,h){o=i.memoizedState,l=l(h,o),l=l==null?o:se({},o,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Oc={isMounted:function(i){return(i=i._reactInternals)?$n(i)===i:!1},enqueueSetState:function(i,o,l){i=i._reactInternals;var h=an(),p=Fi(i),_=Qr(h,p);_.payload=o,l!=null&&(_.callback=l),o=Li(i,_,p),o!==null&&(tr(o,i,p,h),Cc(o,i,p))},enqueueReplaceState:function(i,o,l){i=i._reactInternals;var h=an(),p=Fi(i),_=Qr(h,p);_.tag=1,_.payload=o,l!=null&&(_.callback=l),o=Li(i,_,p),o!==null&&(tr(o,i,p,h),Cc(o,i,p))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var l=an(),h=Fi(i),p=Qr(l,h);p.tag=2,o!=null&&(p.callback=o),o=Li(i,p,h),o!==null&&(tr(o,i,h,l),Cc(o,i,h))}};function uy(i,o,l,h,p,_,w){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,_,w):o.prototype&&o.prototype.isPureReactComponent?!cl(l,h)||!cl(p,_):!0}function cy(i,o,l){var h=!1,p=xi,_=o.contextType;return typeof _=="object"&&_!==null?_=bn(_):(p=dn(o)?Ns:Kt.current,h=o.contextTypes,_=(h=h!=null)?Uo(i,p):xi),o=new o(l,_),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Oc,i.stateNode=o,o._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),o}function hy(i,o,l,h){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,h),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,h),o.state!==i&&Oc.enqueueReplaceState(o,o.state,null)}function bf(i,o,l,h){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},wf(i);var _=o.contextType;typeof _=="object"&&_!==null?p.context=bn(_):(_=dn(o)?Ns:Kt.current,p.context=Uo(i,_)),p.state=i.memoizedState,_=o.getDerivedStateFromProps,typeof _=="function"&&(Lf(i,o,_,l),p.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(o=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),o!==p.state&&Oc.enqueueReplaceState(p,p.state,null),Rc(i,l,p,h),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function Go(i,o){try{var l="",h=o;do l+=Pe(h),h=h.return;while(h);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:o,stack:p,digest:null}}function Mf(i,o,l){return{value:i,source:null,stack:l??null,digest:o??null}}function Vf(i,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var KC=typeof WeakMap=="function"?WeakMap:Map;function dy(i,o,l){l=Qr(-1,l),l.tag=3,l.payload={element:null};var h=o.value;return l.callback=function(){Bc||(Bc=!0,Jf=h),Vf(i,o)},l}function fy(i,o,l){l=Qr(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var p=o.value;l.payload=function(){return h(p)},l.callback=function(){Vf(i,o)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){Vf(i,o),typeof h!="function"&&(Mi===null?Mi=new Set([this]):Mi.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})}),l}function py(i,o,l){var h=i.pingCache;if(h===null){h=i.pingCache=new KC;var p=new Set;h.set(o,p)}else p=h.get(o),p===void 0&&(p=new Set,h.set(o,p));p.has(l)||(p.add(l),i=lR.bind(null,i,o,l),o.then(i,i))}function my(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function gy(i,o,l,h,p){return i.mode&1?(i.flags|=65536,i.lanes=p,i):(i===o?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=Qr(-1,1),o.tag=2,Li(l,o,1))),l.lanes|=1),i)}var QC=de.ReactCurrentOwner,fn=!1;function on(i,o,l,h){o.child=i===null?M_(o,null,l,h):$o(o,i.child,l,h)}function _y(i,o,l,h,p){l=l.render;var _=o.ref;return Ho(o,p),h=Pf(i,o,l,h,_,p),l=kf(),i!==null&&!fn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,Yr(i,o,p)):(lt&&l&&hf(o),o.flags|=1,on(i,o,h,p),o.child)}function yy(i,o,l,h,p){if(i===null){var _=l.type;return typeof _=="function"&&!sp(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=_,vy(i,o,_,h,p)):(i=qc(l.type,null,h,o,o.mode,p),i.ref=o.ref,i.return=o,o.child=i)}if(_=i.child,!(i.lanes&p)){var w=_.memoizedProps;if(l=l.compare,l=l!==null?l:cl,l(w,h)&&i.ref===o.ref)return Yr(i,o,p)}return o.flags|=1,i=Bi(_,h),i.ref=o.ref,i.return=o,o.child=i}function vy(i,o,l,h,p){if(i!==null){var _=i.memoizedProps;if(cl(_,h)&&i.ref===o.ref)if(fn=!1,o.pendingProps=h=_,(i.lanes&p)!==0)i.flags&131072&&(fn=!0);else return o.lanes=i.lanes,Yr(i,o,p)}return Ff(i,o,l,h,p)}function Ey(i,o,l){var h=o.pendingProps,p=h.children,_=i!==null?i.memoizedState:null;if(h.mode==="hidden")if(!(o.mode&1))o.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(Qo,Rn),Rn|=l;else{if(!(l&1073741824))return i=_!==null?_.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,nt(Qo,Rn),Rn|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=_!==null?_.baseLanes:l,nt(Qo,Rn),Rn|=h}else _!==null?(h=_.baseLanes|l,o.memoizedState=null):h=l,nt(Qo,Rn),Rn|=h;return on(i,o,p,l),o.child}function wy(i,o){var l=o.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function Ff(i,o,l,h,p){var _=dn(l)?Ns:Kt.current;return _=Uo(o,_),Ho(o,p),l=Pf(i,o,l,h,_,p),h=kf(),i!==null&&!fn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,Yr(i,o,p)):(lt&&h&&hf(o),o.flags|=1,on(i,o,l,p),o.child)}function Ty(i,o,l,h,p){if(dn(l)){var _=!0;_c(o)}else _=!1;if(Ho(o,p),o.stateNode===null)bc(i,o),cy(o,l,h),bf(o,l,h,p),h=!0;else if(i===null){var w=o.stateNode,C=o.memoizedProps;w.props=C;var N=w.context,z=l.contextType;typeof z=="object"&&z!==null?z=bn(z):(z=dn(l)?Ns:Kt.current,z=Uo(o,z));var X=l.getDerivedStateFromProps,Z=typeof X=="function"||typeof w.getSnapshotBeforeUpdate=="function";Z||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(C!==h||N!==z)&&hy(o,w,h,z),Oi=!1;var Q=o.memoizedState;w.state=Q,Rc(o,h,w,p),N=o.memoizedState,C!==h||Q!==N||hn.current||Oi?(typeof X=="function"&&(Lf(o,l,X,h),N=o.memoizedState),(C=Oi||uy(o,l,C,h,Q,N,z))?(Z||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(o.flags|=4194308)):(typeof w.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=h,o.memoizedState=N),w.props=h,w.state=N,w.context=z,h=C):(typeof w.componentDidMount=="function"&&(o.flags|=4194308),h=!1)}else{w=o.stateNode,F_(i,o),C=o.memoizedProps,z=o.type===o.elementType?C:Jn(o.type,C),w.props=z,Z=o.pendingProps,Q=w.context,N=l.contextType,typeof N=="object"&&N!==null?N=bn(N):(N=dn(l)?Ns:Kt.current,N=Uo(o,N));var oe=l.getDerivedStateFromProps;(X=typeof oe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(C!==Z||Q!==N)&&hy(o,w,h,N),Oi=!1,Q=o.memoizedState,w.state=Q,Rc(o,h,w,p);var ue=o.memoizedState;C!==Z||Q!==ue||hn.current||Oi?(typeof oe=="function"&&(Lf(o,l,oe,h),ue=o.memoizedState),(z=Oi||uy(o,l,z,h,Q,ue,N)||!1)?(X||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(h,ue,N),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(h,ue,N)),typeof w.componentDidUpdate=="function"&&(o.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof w.componentDidUpdate!="function"||C===i.memoizedProps&&Q===i.memoizedState||(o.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||C===i.memoizedProps&&Q===i.memoizedState||(o.flags|=1024),o.memoizedProps=h,o.memoizedState=ue),w.props=h,w.state=ue,w.context=N,h=z):(typeof w.componentDidUpdate!="function"||C===i.memoizedProps&&Q===i.memoizedState||(o.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||C===i.memoizedProps&&Q===i.memoizedState||(o.flags|=1024),h=!1)}return Uf(i,o,l,h,_,p)}function Uf(i,o,l,h,p,_){wy(i,o);var w=(o.flags&128)!==0;if(!h&&!w)return p&&A_(o,l,!1),Yr(i,o,_);h=o.stateNode,QC.current=o;var C=w&&typeof l.getDerivedStateFromError!="function"?null:h.render();return o.flags|=1,i!==null&&w?(o.child=$o(o,i.child,null,_),o.child=$o(o,null,C,_)):on(i,o,C,_),o.memoizedState=h.state,p&&A_(o,l,!0),o.child}function Iy(i){var o=i.stateNode;o.pendingContext?C_(i,o.pendingContext,o.pendingContext!==o.context):o.context&&C_(i,o.context,!1),Tf(i,o.containerInfo)}function Sy(i,o,l,h,p){return zo(),mf(p),o.flags|=256,on(i,o,l,h),o.child}var Bf={dehydrated:null,treeContext:null,retryLane:0};function jf(i){return{baseLanes:i,cachePool:null,transitions:null}}function Cy(i,o,l){var h=o.pendingProps,p=ht.current,_=!1,w=(o.flags&128)!==0,C;if((C=w)||(C=i!==null&&i.memoizedState===null?!1:(p&2)!==0),C?(_=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),nt(ht,p&1),i===null)return pf(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?(o.mode&1?i.data==="$!"?o.lanes=8:o.lanes=1073741824:o.lanes=1,null):(w=h.children,i=h.fallback,_?(h=o.mode,_=o.child,w={mode:"hidden",children:w},!(h&1)&&_!==null?(_.childLanes=0,_.pendingProps=w):_=Gc(w,h,0,null),i=Bs(i,h,l,null),_.return=o,i.return=o,_.sibling=i,o.child=_,o.child.memoizedState=jf(l),o.memoizedState=Bf,i):zf(o,w));if(p=i.memoizedState,p!==null&&(C=p.dehydrated,C!==null))return YC(i,o,w,h,C,p,l);if(_){_=h.fallback,w=o.mode,p=i.child,C=p.sibling;var N={mode:"hidden",children:h.children};return!(w&1)&&o.child!==p?(h=o.child,h.childLanes=0,h.pendingProps=N,o.deletions=null):(h=Bi(p,N),h.subtreeFlags=p.subtreeFlags&14680064),C!==null?_=Bi(C,_):(_=Bs(_,w,l,null),_.flags|=2),_.return=o,h.return=o,h.sibling=_,o.child=h,h=_,_=o.child,w=i.child.memoizedState,w=w===null?jf(l):{baseLanes:w.baseLanes|l,cachePool:null,transitions:w.transitions},_.memoizedState=w,_.childLanes=i.childLanes&~l,o.memoizedState=Bf,h}return _=i.child,i=_.sibling,h=Bi(_,{mode:"visible",children:h.children}),!(o.mode&1)&&(h.lanes=l),h.return=o,h.sibling=null,i!==null&&(l=o.deletions,l===null?(o.deletions=[i],o.flags|=16):l.push(i)),o.child=h,o.memoizedState=null,h}function zf(i,o){return o=Gc({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function Lc(i,o,l,h){return h!==null&&mf(h),$o(o,i.child,null,l),i=zf(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function YC(i,o,l,h,p,_,w){if(l)return o.flags&256?(o.flags&=-257,h=Mf(Error(t(422))),Lc(i,o,w,h)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(_=h.fallback,p=o.mode,h=Gc({mode:"visible",children:h.children},p,0,null),_=Bs(_,p,w,null),_.flags|=2,h.return=o,_.return=o,h.sibling=_,o.child=h,o.mode&1&&$o(o,i.child,null,w),o.child.memoizedState=jf(w),o.memoizedState=Bf,_);if(!(o.mode&1))return Lc(i,o,w,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var C=h.dgst;return h=C,_=Error(t(419)),h=Mf(_,h,void 0),Lc(i,o,w,h)}if(C=(w&i.childLanes)!==0,fn||C){if(h=Mt,h!==null){switch(w&-w){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=p&(h.suspendedLanes|w)?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,Kr(i,p),tr(h,i,p,-1))}return ip(),h=Mf(Error(t(421))),Lc(i,o,w,h)}return p.data==="$?"?(o.flags|=128,o.child=i.child,o=uR.bind(null,i),p._reactRetry=o,null):(i=_.treeContext,Cn=ki(p.nextSibling),Sn=o,lt=!0,Xn=null,i!==null&&(On[Ln++]=qr,On[Ln++]=Gr,On[Ln++]=xs,qr=i.id,Gr=i.overflow,xs=o),o=zf(o,h.children),o.flags|=4096,o)}function Ry(i,o,l){i.lanes|=o;var h=i.alternate;h!==null&&(h.lanes|=o),vf(i.return,o,l)}function $f(i,o,l,h,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(_.isBackwards=o,_.rendering=null,_.renderingStartTime=0,_.last=h,_.tail=l,_.tailMode=p)}function Ay(i,o,l){var h=o.pendingProps,p=h.revealOrder,_=h.tail;if(on(i,o,h.children,l),h=ht.current,h&2)h=h&1|2,o.flags|=128;else{if(i!==null&&i.flags&128)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Ry(i,l,o);else if(i.tag===19)Ry(i,l,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(nt(ht,h),!(o.mode&1))o.memoizedState=null;else switch(p){case"forwards":for(l=o.child,p=null;l!==null;)i=l.alternate,i!==null&&Ac(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=o.child,o.child=null):(p=l.sibling,l.sibling=null),$f(o,!1,p,l,_);break;case"backwards":for(l=null,p=o.child,o.child=null;p!==null;){if(i=p.alternate,i!==null&&Ac(i)===null){o.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}$f(o,!0,l,null,_);break;case"together":$f(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function bc(i,o){!(o.mode&1)&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function Yr(i,o,l){if(i!==null&&(o.dependencies=i.dependencies),Ms|=o.lanes,!(l&o.childLanes))return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,l=Bi(i,i.pendingProps),o.child=l,l.return=o;i.sibling!==null;)i=i.sibling,l=l.sibling=Bi(i,i.pendingProps),l.return=o;l.sibling=null}return o.child}function XC(i,o,l){switch(o.tag){case 3:Iy(o),zo();break;case 5:j_(o);break;case 1:dn(o.type)&&_c(o);break;case 4:Tf(o,o.stateNode.containerInfo);break;case 10:var h=o.type._context,p=o.memoizedProps.value;nt(Ic,h._currentValue),h._currentValue=p;break;case 13:if(h=o.memoizedState,h!==null)return h.dehydrated!==null?(nt(ht,ht.current&1),o.flags|=128,null):l&o.child.childLanes?Cy(i,o,l):(nt(ht,ht.current&1),i=Yr(i,o,l),i!==null?i.sibling:null);nt(ht,ht.current&1);break;case 19:if(h=(l&o.childLanes)!==0,i.flags&128){if(h)return Ay(i,o,l);o.flags|=128}if(p=o.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),nt(ht,ht.current),h)break;return null;case 22:case 23:return o.lanes=0,Ey(i,o,l)}return Yr(i,o,l)}var Py,Wf,ky,Ny;Py=function(i,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Wf=function(){},ky=function(i,o,l,h){var p=i.memoizedProps;if(p!==h){i=o.stateNode,Ls(_r.current);var _=null;switch(l){case"input":p=fs(i,p),h=fs(i,h),_=[];break;case"select":p=se({},p,{value:void 0}),h=se({},h,{value:void 0}),_=[];break;case"textarea":p=Ua(i,p),h=Ua(i,h),_=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=pc)}Ha(l,h);var w;l=null;for(z in p)if(!h.hasOwnProperty(z)&&p.hasOwnProperty(z)&&p[z]!=null)if(z==="style"){var C=p[z];for(w in C)C.hasOwnProperty(w)&&(l||(l={}),l[w]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(s.hasOwnProperty(z)?_||(_=[]):(_=_||[]).push(z,null));for(z in h){var N=h[z];if(C=p!=null?p[z]:void 0,h.hasOwnProperty(z)&&N!==C&&(N!=null||C!=null))if(z==="style")if(C){for(w in C)!C.hasOwnProperty(w)||N&&N.hasOwnProperty(w)||(l||(l={}),l[w]="");for(w in N)N.hasOwnProperty(w)&&C[w]!==N[w]&&(l||(l={}),l[w]=N[w])}else l||(_||(_=[]),_.push(z,l)),l=N;else z==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,C=C?C.__html:void 0,N!=null&&C!==N&&(_=_||[]).push(z,N)):z==="children"?typeof N!="string"&&typeof N!="number"||(_=_||[]).push(z,""+N):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(s.hasOwnProperty(z)?(N!=null&&z==="onScroll"&&it("scroll",i),_||C===N||(_=[])):(_=_||[]).push(z,N))}l&&(_=_||[]).push("style",l);var z=_;(o.updateQueue=z)&&(o.flags|=4)}},Ny=function(i,o,l,h){l!==h&&(o.flags|=4)};function Cl(i,o){if(!lt)switch(i.tailMode){case"hidden":o=i.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function Yt(i){var o=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(o)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=h,i.childLanes=l,o}function JC(i,o,l){var h=o.pendingProps;switch(df(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(o),null;case 1:return dn(o.type)&&gc(),Yt(o),null;case 3:return h=o.stateNode,qo(),st(hn),st(Kt),Cf(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(wc(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&!(o.flags&256)||(o.flags|=1024,Xn!==null&&(tp(Xn),Xn=null))),Wf(i,o),Yt(o),null;case 5:If(o);var p=Ls(El.current);if(l=o.type,i!==null&&o.stateNode!=null)ky(i,o,l,h,p),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!h){if(o.stateNode===null)throw Error(t(166));return Yt(o),null}if(i=Ls(_r.current),wc(o)){h=o.stateNode,l=o.type;var _=o.memoizedProps;switch(h[gr]=o,h[ml]=_,i=(o.mode&1)!==0,l){case"dialog":it("cancel",h),it("close",h);break;case"iframe":case"object":case"embed":it("load",h);break;case"video":case"audio":for(p=0;p<dl.length;p++)it(dl[p],h);break;case"source":it("error",h);break;case"img":case"image":case"link":it("error",h),it("load",h);break;case"details":it("toggle",h);break;case"input":oo(h,_),it("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!_.multiple},it("invalid",h);break;case"textarea":lo(h,_),it("invalid",h)}Ha(l,_),p=null;for(var w in _)if(_.hasOwnProperty(w)){var C=_[w];w==="children"?typeof C=="string"?h.textContent!==C&&(_.suppressHydrationWarning!==!0&&fc(h.textContent,C,i),p=["children",C]):typeof C=="number"&&h.textContent!==""+C&&(_.suppressHydrationWarning!==!0&&fc(h.textContent,C,i),p=["children",""+C]):s.hasOwnProperty(w)&&C!=null&&w==="onScroll"&&it("scroll",h)}switch(l){case"input":Lr(h),Uu(h,_,!0);break;case"textarea":Lr(h),Ba(h);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(h.onclick=pc)}h=p,o.updateQueue=h,h!==null&&(o.flags|=4)}else{w=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=It(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=w.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=w.createElement(l,{is:h.is}):(i=w.createElement(l),l==="select"&&(w=i,h.multiple?w.multiple=!0:h.size&&(w.size=h.size))):i=w.createElementNS(i,l),i[gr]=o,i[ml]=h,Py(i,o,!1,!1),o.stateNode=i;e:{switch(w=qa(l,h),l){case"dialog":it("cancel",i),it("close",i),p=h;break;case"iframe":case"object":case"embed":it("load",i),p=h;break;case"video":case"audio":for(p=0;p<dl.length;p++)it(dl[p],i);p=h;break;case"source":it("error",i),p=h;break;case"img":case"image":case"link":it("error",i),it("load",i),p=h;break;case"details":it("toggle",i),p=h;break;case"input":oo(i,h),p=fs(i,h),it("invalid",i);break;case"option":p=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},p=se({},h,{value:void 0}),it("invalid",i);break;case"textarea":lo(i,h),p=Ua(i,h),it("invalid",i);break;default:p=h}Ha(l,p),C=p;for(_ in C)if(C.hasOwnProperty(_)){var N=C[_];_==="style"?$a(i,N):_==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,N!=null&&ja(i,N)):_==="children"?typeof N=="string"?(l!=="textarea"||N!=="")&&yi(i,N):typeof N=="number"&&yi(i,""+N):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(s.hasOwnProperty(_)?N!=null&&_==="onScroll"&&it("scroll",i):N!=null&&ie(i,_,N,w))}switch(l){case"input":Lr(i),Uu(i,h,!1);break;case"textarea":Lr(i),Ba(i);break;case"option":h.value!=null&&i.setAttribute("value",""+qe(h.value));break;case"select":i.multiple=!!h.multiple,_=h.value,_!=null?Mr(i,!!h.multiple,_,!1):h.defaultValue!=null&&Mr(i,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=pc)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Yt(o),null;case 6:if(i&&o.stateNode!=null)Ny(i,o,i.memoizedProps,h);else{if(typeof h!="string"&&o.stateNode===null)throw Error(t(166));if(l=Ls(El.current),Ls(_r.current),wc(o)){if(h=o.stateNode,l=o.memoizedProps,h[gr]=o,(_=h.nodeValue!==l)&&(i=Sn,i!==null))switch(i.tag){case 3:fc(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&fc(h.nodeValue,l,(i.mode&1)!==0)}_&&(o.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[gr]=o,o.stateNode=h}return Yt(o),null;case 13:if(st(ht),h=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(lt&&Cn!==null&&o.mode&1&&!(o.flags&128))O_(),zo(),o.flags|=98560,_=!1;else if(_=wc(o),h!==null&&h.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=o.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[gr]=o}else zo(),!(o.flags&128)&&(o.memoizedState=null),o.flags|=4;Yt(o),_=!1}else Xn!==null&&(tp(Xn),Xn=null),_=!0;if(!_)return o.flags&65536?o:null}return o.flags&128?(o.lanes=l,o):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(o.child.flags|=8192,o.mode&1&&(i===null||ht.current&1?At===0&&(At=3):ip())),o.updateQueue!==null&&(o.flags|=4),Yt(o),null);case 4:return qo(),Wf(i,o),i===null&&fl(o.stateNode.containerInfo),Yt(o),null;case 10:return yf(o.type._context),Yt(o),null;case 17:return dn(o.type)&&gc(),Yt(o),null;case 19:if(st(ht),_=o.memoizedState,_===null)return Yt(o),null;if(h=(o.flags&128)!==0,w=_.rendering,w===null)if(h)Cl(_,!1);else{if(At!==0||i!==null&&i.flags&128)for(i=o.child;i!==null;){if(w=Ac(i),w!==null){for(o.flags|=128,Cl(_,!1),h=w.updateQueue,h!==null&&(o.updateQueue=h,o.flags|=4),o.subtreeFlags=0,h=l,l=o.child;l!==null;)_=l,i=h,_.flags&=14680066,w=_.alternate,w===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=w.childLanes,_.lanes=w.lanes,_.child=w.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=w.memoizedProps,_.memoizedState=w.memoizedState,_.updateQueue=w.updateQueue,_.type=w.type,i=w.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return nt(ht,ht.current&1|2),o.child}i=i.sibling}_.tail!==null&&tt()>Yo&&(o.flags|=128,h=!0,Cl(_,!1),o.lanes=4194304)}else{if(!h)if(i=Ac(w),i!==null){if(o.flags|=128,h=!0,l=i.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),Cl(_,!0),_.tail===null&&_.tailMode==="hidden"&&!w.alternate&&!lt)return Yt(o),null}else 2*tt()-_.renderingStartTime>Yo&&l!==1073741824&&(o.flags|=128,h=!0,Cl(_,!1),o.lanes=4194304);_.isBackwards?(w.sibling=o.child,o.child=w):(l=_.last,l!==null?l.sibling=w:o.child=w,_.last=w)}return _.tail!==null?(o=_.tail,_.rendering=o,_.tail=o.sibling,_.renderingStartTime=tt(),o.sibling=null,l=ht.current,nt(ht,h?l&1|2:l&1),o):(Yt(o),null);case 22:case 23:return rp(),h=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(o.flags|=8192),h&&o.mode&1?Rn&1073741824&&(Yt(o),o.subtreeFlags&6&&(o.flags|=8192)):Yt(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function ZC(i,o){switch(df(o),o.tag){case 1:return dn(o.type)&&gc(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return qo(),st(hn),st(Kt),Cf(),i=o.flags,i&65536&&!(i&128)?(o.flags=i&-65537|128,o):null;case 5:return If(o),null;case 13:if(st(ht),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));zo()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return st(ht),null;case 4:return qo(),null;case 10:return yf(o.type._context),null;case 22:case 23:return rp(),null;case 24:return null;default:return null}}var Mc=!1,Xt=!1,eR=typeof WeakSet=="function"?WeakSet:Set,le=null;function Ko(i,o){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){pt(i,o,h)}else l.current=null}function Hf(i,o,l){try{l()}catch(h){pt(i,o,h)}}var xy=!1;function tR(i,o){if(nf=Ri,i=u_(),Kd(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,_=h.focusNode;h=h.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var w=0,C=-1,N=-1,z=0,X=0,Z=i,Q=null;t:for(;;){for(var oe;Z!==l||p!==0&&Z.nodeType!==3||(C=w+p),Z!==_||h!==0&&Z.nodeType!==3||(N=w+h),Z.nodeType===3&&(w+=Z.nodeValue.length),(oe=Z.firstChild)!==null;)Q=Z,Z=oe;for(;;){if(Z===i)break t;if(Q===l&&++z===p&&(C=w),Q===_&&++X===h&&(N=w),(oe=Z.nextSibling)!==null)break;Z=Q,Q=Z.parentNode}Z=oe}l=C===-1||N===-1?null:{start:C,end:N}}else l=null}l=l||{start:0,end:0}}else l=null;for(rf={focusedElem:i,selectionRange:l},Ri=!1,le=o;le!==null;)if(o=le,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,le=i;else for(;le!==null;){o=le;try{var ue=o.alternate;if(o.flags&1024)switch(o.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var he=ue.memoizedProps,_t=ue.memoizedState,B=o.stateNode,O=B.getSnapshotBeforeUpdate(o.elementType===o.type?he:Jn(o.type,he),_t);B.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var j=o.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ee){pt(o,o.return,ee)}if(i=o.sibling,i!==null){i.return=o.return,le=i;break}le=o.return}return ue=xy,xy=!1,ue}function Rl(i,o,l){var h=o.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&Hf(o,l,_)}p=p.next}while(p!==h)}}function Vc(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==o)}}function qf(i){var o=i.ref;if(o!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof o=="function"?o(i):o.current=i}}function Dy(i){var o=i.alternate;o!==null&&(i.alternate=null,Dy(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[gr],delete o[ml],delete o[lf],delete o[VC],delete o[FC])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Oy(i){return i.tag===5||i.tag===3||i.tag===4}function Ly(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Oy(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Gf(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(i,o):l.insertBefore(i,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(i,l)):(o=l,o.appendChild(i)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=pc));else if(h!==4&&(i=i.child,i!==null))for(Gf(i,o,l),i=i.sibling;i!==null;)Gf(i,o,l),i=i.sibling}function Kf(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.insertBefore(i,o):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(Kf(i,o,l),i=i.sibling;i!==null;)Kf(i,o,l),i=i.sibling}var $t=null,Zn=!1;function bi(i,o,l){for(l=l.child;l!==null;)by(i,o,l),l=l.sibling}function by(i,o,l){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(Ts,l)}catch{}switch(l.tag){case 5:Xt||Ko(l,o);case 6:var h=$t,p=Zn;$t=null,bi(i,o,l),$t=h,Zn=p,$t!==null&&(Zn?(i=$t,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):$t.removeChild(l.stateNode));break;case 18:$t!==null&&(Zn?(i=$t,l=l.stateNode,i.nodeType===8?af(i.parentNode,l):i.nodeType===1&&af(i,l),Kn(i)):af($t,l.stateNode));break;case 4:h=$t,p=Zn,$t=l.stateNode.containerInfo,Zn=!0,bi(i,o,l),$t=h,Zn=p;break;case 0:case 11:case 14:case 15:if(!Xt&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var _=p,w=_.destroy;_=_.tag,w!==void 0&&(_&2||_&4)&&Hf(l,o,w),p=p.next}while(p!==h)}bi(i,o,l);break;case 1:if(!Xt&&(Ko(l,o),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(C){pt(l,o,C)}bi(i,o,l);break;case 21:bi(i,o,l);break;case 22:l.mode&1?(Xt=(h=Xt)||l.memoizedState!==null,bi(i,o,l),Xt=h):bi(i,o,l);break;default:bi(i,o,l)}}function My(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new eR),o.forEach(function(h){var p=cR.bind(null,i,h);l.has(h)||(l.add(h),h.then(p,p))})}}function er(i,o){var l=o.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var _=i,w=o,C=w;e:for(;C!==null;){switch(C.tag){case 5:$t=C.stateNode,Zn=!1;break e;case 3:$t=C.stateNode.containerInfo,Zn=!0;break e;case 4:$t=C.stateNode.containerInfo,Zn=!0;break e}C=C.return}if($t===null)throw Error(t(160));by(_,w,p),$t=null,Zn=!1;var N=p.alternate;N!==null&&(N.return=null),p.return=null}catch(z){pt(p,o,z)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)Vy(o,i),o=o.sibling}function Vy(i,o){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(er(o,i),vr(i),h&4){try{Rl(3,i,i.return),Vc(3,i)}catch(he){pt(i,i.return,he)}try{Rl(5,i,i.return)}catch(he){pt(i,i.return,he)}}break;case 1:er(o,i),vr(i),h&512&&l!==null&&Ko(l,l.return);break;case 5:if(er(o,i),vr(i),h&512&&l!==null&&Ko(l,l.return),i.flags&32){var p=i.stateNode;try{yi(p,"")}catch(he){pt(i,i.return,he)}}if(h&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,w=l!==null?l.memoizedProps:_,C=i.type,N=i.updateQueue;if(i.updateQueue=null,N!==null)try{C==="input"&&_.type==="radio"&&_.name!=null&&Va(p,_),qa(C,w);var z=qa(C,_);for(w=0;w<N.length;w+=2){var X=N[w],Z=N[w+1];X==="style"?$a(p,Z):X==="dangerouslySetInnerHTML"?ja(p,Z):X==="children"?yi(p,Z):ie(p,X,Z,z)}switch(C){case"input":Fa(p,_);break;case"textarea":uo(p,_);break;case"select":var Q=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var oe=_.value;oe!=null?Mr(p,!!_.multiple,oe,!1):Q!==!!_.multiple&&(_.defaultValue!=null?Mr(p,!!_.multiple,_.defaultValue,!0):Mr(p,!!_.multiple,_.multiple?[]:"",!1))}p[ml]=_}catch(he){pt(i,i.return,he)}}break;case 6:if(er(o,i),vr(i),h&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(he){pt(i,i.return,he)}}break;case 3:if(er(o,i),vr(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{Kn(o.containerInfo)}catch(he){pt(i,i.return,he)}break;case 4:er(o,i),vr(i);break;case 13:er(o,i),vr(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Xf=tt())),h&4&&My(i);break;case 22:if(X=l!==null&&l.memoizedState!==null,i.mode&1?(Xt=(z=Xt)||X,er(o,i),Xt=z):er(o,i),vr(i),h&8192){if(z=i.memoizedState!==null,(i.stateNode.isHidden=z)&&!X&&i.mode&1)for(le=i,X=i.child;X!==null;){for(Z=le=X;le!==null;){switch(Q=le,oe=Q.child,Q.tag){case 0:case 11:case 14:case 15:Rl(4,Q,Q.return);break;case 1:Ko(Q,Q.return);var ue=Q.stateNode;if(typeof ue.componentWillUnmount=="function"){h=Q,l=Q.return;try{o=h,ue.props=o.memoizedProps,ue.state=o.memoizedState,ue.componentWillUnmount()}catch(he){pt(h,l,he)}}break;case 5:Ko(Q,Q.return);break;case 22:if(Q.memoizedState!==null){By(Z);continue}}oe!==null?(oe.return=Q,le=oe):By(Z)}X=X.sibling}e:for(X=null,Z=i;;){if(Z.tag===5){if(X===null){X=Z;try{p=Z.stateNode,z?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(C=Z.stateNode,N=Z.memoizedProps.style,w=N!=null&&N.hasOwnProperty("display")?N.display:null,C.style.display=za("display",w))}catch(he){pt(i,i.return,he)}}}else if(Z.tag===6){if(X===null)try{Z.stateNode.nodeValue=z?"":Z.memoizedProps}catch(he){pt(i,i.return,he)}}else if((Z.tag!==22&&Z.tag!==23||Z.memoizedState===null||Z===i)&&Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===i)break e;for(;Z.sibling===null;){if(Z.return===null||Z.return===i)break e;X===Z&&(X=null),Z=Z.return}X===Z&&(X=null),Z.sibling.return=Z.return,Z=Z.sibling}}break;case 19:er(o,i),vr(i),h&4&&My(i);break;case 21:break;default:er(o,i),vr(i)}}function vr(i){var o=i.flags;if(o&2){try{e:{for(var l=i.return;l!==null;){if(Oy(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(yi(p,""),h.flags&=-33);var _=Ly(i);Kf(i,_,p);break;case 3:case 4:var w=h.stateNode.containerInfo,C=Ly(i);Gf(i,C,w);break;default:throw Error(t(161))}}catch(N){pt(i,i.return,N)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function nR(i,o,l){le=i,Fy(i)}function Fy(i,o,l){for(var h=(i.mode&1)!==0;le!==null;){var p=le,_=p.child;if(p.tag===22&&h){var w=p.memoizedState!==null||Mc;if(!w){var C=p.alternate,N=C!==null&&C.memoizedState!==null||Xt;C=Mc;var z=Xt;if(Mc=w,(Xt=N)&&!z)for(le=p;le!==null;)w=le,N=w.child,w.tag===22&&w.memoizedState!==null?jy(p):N!==null?(N.return=w,le=N):jy(p);for(;_!==null;)le=_,Fy(_),_=_.sibling;le=p,Mc=C,Xt=z}Uy(i)}else p.subtreeFlags&8772&&_!==null?(_.return=p,le=_):Uy(i)}}function Uy(i){for(;le!==null;){var o=le;if(o.flags&8772){var l=o.alternate;try{if(o.flags&8772)switch(o.tag){case 0:case 11:case 15:Xt||Vc(5,o);break;case 1:var h=o.stateNode;if(o.flags&4&&!Xt)if(l===null)h.componentDidMount();else{var p=o.elementType===o.type?l.memoizedProps:Jn(o.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var _=o.updateQueue;_!==null&&B_(o,_,h);break;case 3:var w=o.updateQueue;if(w!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}B_(o,w,l)}break;case 5:var C=o.stateNode;if(l===null&&o.flags&4){l=C;var N=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":N.autoFocus&&l.focus();break;case"img":N.src&&(l.src=N.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var z=o.alternate;if(z!==null){var X=z.memoizedState;if(X!==null){var Z=X.dehydrated;Z!==null&&Kn(Z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Xt||o.flags&512&&qf(o)}catch(Q){pt(o,o.return,Q)}}if(o===i){le=null;break}if(l=o.sibling,l!==null){l.return=o.return,le=l;break}le=o.return}}function By(i){for(;le!==null;){var o=le;if(o===i){le=null;break}var l=o.sibling;if(l!==null){l.return=o.return,le=l;break}le=o.return}}function jy(i){for(;le!==null;){var o=le;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{Vc(4,o)}catch(N){pt(o,l,N)}break;case 1:var h=o.stateNode;if(typeof h.componentDidMount=="function"){var p=o.return;try{h.componentDidMount()}catch(N){pt(o,p,N)}}var _=o.return;try{qf(o)}catch(N){pt(o,_,N)}break;case 5:var w=o.return;try{qf(o)}catch(N){pt(o,w,N)}}}catch(N){pt(o,o.return,N)}if(o===i){le=null;break}var C=o.sibling;if(C!==null){C.return=o.return,le=C;break}le=o.return}}var rR=Math.ceil,Fc=de.ReactCurrentDispatcher,Qf=de.ReactCurrentOwner,Vn=de.ReactCurrentBatchConfig,je=0,Mt=null,Et=null,Wt=0,Rn=0,Qo=Ni(0),At=0,Al=null,Ms=0,Uc=0,Yf=0,Pl=null,pn=null,Xf=0,Yo=1/0,Xr=null,Bc=!1,Jf=null,Mi=null,jc=!1,Vi=null,zc=0,kl=0,Zf=null,$c=-1,Wc=0;function an(){return je&6?tt():$c!==-1?$c:$c=tt()}function Fi(i){return i.mode&1?je&2&&Wt!==0?Wt&-Wt:BC.transition!==null?(Wc===0&&(Wc=Ss()),Wc):(i=Me,i!==0||(i=window.event,i=i===void 0?16:rl(i.type)),i):1}function tr(i,o,l,h){if(50<kl)throw kl=0,Zf=null,Error(t(185));Ti(i,l,h),(!(je&2)||i!==Mt)&&(i===Mt&&(!(je&2)&&(Uc|=l),At===4&&Ui(i,Wt)),mn(i,h),l===1&&je===0&&!(o.mode&1)&&(Yo=tt()+500,yc&&Di()))}function mn(i,o){var l=i.callbackNode;Ur(i,o);var h=Is(i,i===Mt?Wt:0);if(h===0)l!==null&&Ja(l),i.callbackNode=null,i.callbackPriority=0;else if(o=h&-h,i.callbackPriority!==o){if(l!=null&&Ja(l),o===1)i.tag===0?UC($y.bind(null,i)):P_($y.bind(null,i)),bC(function(){!(je&6)&&Di()}),l=null;else{switch(Si(h)){case 1:l=ws;break;case 4:l=vi;break;case 16:l=Nn;break;case 536870912:l=Wu;break;default:l=Nn}l=Xy(l,zy.bind(null,i))}i.callbackPriority=o,i.callbackNode=l}}function zy(i,o){if($c=-1,Wc=0,je&6)throw Error(t(327));var l=i.callbackNode;if(Xo()&&i.callbackNode!==l)return null;var h=Is(i,i===Mt?Wt:0);if(h===0)return null;if(h&30||h&i.expiredLanes||o)o=Hc(i,h);else{o=h;var p=je;je|=2;var _=Hy();(Mt!==i||Wt!==o)&&(Xr=null,Yo=tt()+500,Fs(i,o));do try{oR();break}catch(C){Wy(i,C)}while(!0);_f(),Fc.current=_,je=p,Et!==null?o=0:(Mt=null,Wt=0,o=At)}if(o!==0){if(o===2&&(p=wn(i),p!==0&&(h=p,o=ep(i,p))),o===1)throw l=Al,Fs(i,0),Ui(i,h),mn(i,tt()),l;if(o===6)Ui(i,h);else{if(p=i.current.alternate,!(h&30)&&!iR(p)&&(o=Hc(i,h),o===2&&(_=wn(i),_!==0&&(h=_,o=ep(i,_))),o===1))throw l=Al,Fs(i,0),Ui(i,h),mn(i,tt()),l;switch(i.finishedWork=p,i.finishedLanes=h,o){case 0:case 1:throw Error(t(345));case 2:Us(i,pn,Xr);break;case 3:if(Ui(i,h),(h&130023424)===h&&(o=Xf+500-tt(),10<o)){if(Is(i,0)!==0)break;if(p=i.suspendedLanes,(p&h)!==h){an(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=of(Us.bind(null,i,pn,Xr),o);break}Us(i,pn,Xr);break;case 4:if(Ui(i,h),(h&4194240)===h)break;for(o=i.eventTimes,p=-1;0<h;){var w=31-rn(h);_=1<<w,w=o[w],w>p&&(p=w),h&=~_}if(h=p,h=tt()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*rR(h/1960))-h,10<h){i.timeoutHandle=of(Us.bind(null,i,pn,Xr),h);break}Us(i,pn,Xr);break;case 5:Us(i,pn,Xr);break;default:throw Error(t(329))}}}return mn(i,tt()),i.callbackNode===l?zy.bind(null,i):null}function ep(i,o){var l=Pl;return i.current.memoizedState.isDehydrated&&(Fs(i,o).flags|=256),i=Hc(i,o),i!==2&&(o=pn,pn=l,o!==null&&tp(o)),i}function tp(i){pn===null?pn=i:pn.push.apply(pn,i)}function iR(i){for(var o=i;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],_=p.getSnapshot;p=p.value;try{if(!Yn(_(),p))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Ui(i,o){for(o&=~Yf,o&=~Uc,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var l=31-rn(o),h=1<<l;i[l]=-1,o&=~h}}function $y(i){if(je&6)throw Error(t(327));Xo();var o=Is(i,0);if(!(o&1))return mn(i,tt()),null;var l=Hc(i,o);if(i.tag!==0&&l===2){var h=wn(i);h!==0&&(o=h,l=ep(i,h))}if(l===1)throw l=Al,Fs(i,0),Ui(i,o),mn(i,tt()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,Us(i,pn,Xr),mn(i,tt()),null}function np(i,o){var l=je;je|=1;try{return i(o)}finally{je=l,je===0&&(Yo=tt()+500,yc&&Di())}}function Vs(i){Vi!==null&&Vi.tag===0&&!(je&6)&&Xo();var o=je;je|=1;var l=Vn.transition,h=Me;try{if(Vn.transition=null,Me=1,i)return i()}finally{Me=h,Vn.transition=l,je=o,!(je&6)&&Di()}}function rp(){Rn=Qo.current,st(Qo)}function Fs(i,o){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,LC(l)),Et!==null)for(l=Et.return;l!==null;){var h=l;switch(df(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&gc();break;case 3:qo(),st(hn),st(Kt),Cf();break;case 5:If(h);break;case 4:qo();break;case 13:st(ht);break;case 19:st(ht);break;case 10:yf(h.type._context);break;case 22:case 23:rp()}l=l.return}if(Mt=i,Et=i=Bi(i.current,null),Wt=Rn=o,At=0,Al=null,Yf=Uc=Ms=0,pn=Pl=null,Os!==null){for(o=0;o<Os.length;o++)if(l=Os[o],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,_=l.pending;if(_!==null){var w=_.next;_.next=p,h.next=w}l.pending=h}Os=null}return i}function Wy(i,o){do{var l=Et;try{if(_f(),Pc.current=Dc,kc){for(var h=dt.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}kc=!1}if(bs=0,bt=Rt=dt=null,wl=!1,Tl=0,Qf.current=null,l===null||l.return===null){At=1,Al=o,Et=null;break}e:{var _=i,w=l.return,C=l,N=o;if(o=Wt,C.flags|=32768,N!==null&&typeof N=="object"&&typeof N.then=="function"){var z=N,X=C,Z=X.tag;if(!(X.mode&1)&&(Z===0||Z===11||Z===15)){var Q=X.alternate;Q?(X.updateQueue=Q.updateQueue,X.memoizedState=Q.memoizedState,X.lanes=Q.lanes):(X.updateQueue=null,X.memoizedState=null)}var oe=my(w);if(oe!==null){oe.flags&=-257,gy(oe,w,C,_,o),oe.mode&1&&py(_,z,o),o=oe,N=z;var ue=o.updateQueue;if(ue===null){var he=new Set;he.add(N),o.updateQueue=he}else ue.add(N);break e}else{if(!(o&1)){py(_,z,o),ip();break e}N=Error(t(426))}}else if(lt&&C.mode&1){var _t=my(w);if(_t!==null){!(_t.flags&65536)&&(_t.flags|=256),gy(_t,w,C,_,o),mf(Go(N,C));break e}}_=N=Go(N,C),At!==4&&(At=2),Pl===null?Pl=[_]:Pl.push(_),_=w;do{switch(_.tag){case 3:_.flags|=65536,o&=-o,_.lanes|=o;var B=dy(_,N,o);U_(_,B);break e;case 1:C=N;var O=_.type,j=_.stateNode;if(!(_.flags&128)&&(typeof O.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(Mi===null||!Mi.has(j)))){_.flags|=65536,o&=-o,_.lanes|=o;var ee=fy(_,C,o);U_(_,ee);break e}}_=_.return}while(_!==null)}Gy(l)}catch(fe){o=fe,Et===l&&l!==null&&(Et=l=l.return);continue}break}while(!0)}function Hy(){var i=Fc.current;return Fc.current=Dc,i===null?Dc:i}function ip(){(At===0||At===3||At===2)&&(At=4),Mt===null||!(Ms&268435455)&&!(Uc&268435455)||Ui(Mt,Wt)}function Hc(i,o){var l=je;je|=2;var h=Hy();(Mt!==i||Wt!==o)&&(Xr=null,Fs(i,o));do try{sR();break}catch(p){Wy(i,p)}while(!0);if(_f(),je=l,Fc.current=h,Et!==null)throw Error(t(261));return Mt=null,Wt=0,At}function sR(){for(;Et!==null;)qy(Et)}function oR(){for(;Et!==null&&!zu();)qy(Et)}function qy(i){var o=Yy(i.alternate,i,Rn);i.memoizedProps=i.pendingProps,o===null?Gy(i):Et=o,Qf.current=null}function Gy(i){var o=i;do{var l=o.alternate;if(i=o.return,o.flags&32768){if(l=ZC(l,o),l!==null){l.flags&=32767,Et=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{At=6,Et=null;return}}else if(l=JC(l,o,Rn),l!==null){Et=l;return}if(o=o.sibling,o!==null){Et=o;return}Et=o=i}while(o!==null);At===0&&(At=5)}function Us(i,o,l){var h=Me,p=Vn.transition;try{Vn.transition=null,Me=1,aR(i,o,l,h)}finally{Vn.transition=p,Me=h}return null}function aR(i,o,l,h){do Xo();while(Vi!==null);if(je&6)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(Je(i,_),i===Mt&&(Et=Mt=null,Wt=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||jc||(jc=!0,Xy(Nn,function(){return Xo(),null})),_=(l.flags&15990)!==0,l.subtreeFlags&15990||_){_=Vn.transition,Vn.transition=null;var w=Me;Me=1;var C=je;je|=4,Qf.current=null,tR(i,l),Vy(l,i),AC(rf),Ri=!!nf,rf=nf=null,i.current=l,nR(l),Bd(),je=C,Me=w,Vn.transition=_}else i.current=l;if(jc&&(jc=!1,Vi=i,zc=p),_=i.pendingLanes,_===0&&(Mi=null),Hu(l.stateNode),mn(i,tt()),o!==null)for(h=i.onRecoverableError,l=0;l<o.length;l++)p=o[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(Bc)throw Bc=!1,i=Jf,Jf=null,i;return zc&1&&i.tag!==0&&Xo(),_=i.pendingLanes,_&1?i===Zf?kl++:(kl=0,Zf=i):kl=0,Di(),null}function Xo(){if(Vi!==null){var i=Si(zc),o=Vn.transition,l=Me;try{if(Vn.transition=null,Me=16>i?16:i,Vi===null)var h=!1;else{if(i=Vi,Vi=null,zc=0,je&6)throw Error(t(331));var p=je;for(je|=4,le=i.current;le!==null;){var _=le,w=_.child;if(le.flags&16){var C=_.deletions;if(C!==null){for(var N=0;N<C.length;N++){var z=C[N];for(le=z;le!==null;){var X=le;switch(X.tag){case 0:case 11:case 15:Rl(8,X,_)}var Z=X.child;if(Z!==null)Z.return=X,le=Z;else for(;le!==null;){X=le;var Q=X.sibling,oe=X.return;if(Dy(X),X===z){le=null;break}if(Q!==null){Q.return=oe,le=Q;break}le=oe}}}var ue=_.alternate;if(ue!==null){var he=ue.child;if(he!==null){ue.child=null;do{var _t=he.sibling;he.sibling=null,he=_t}while(he!==null)}}le=_}}if(_.subtreeFlags&2064&&w!==null)w.return=_,le=w;else e:for(;le!==null;){if(_=le,_.flags&2048)switch(_.tag){case 0:case 11:case 15:Rl(9,_,_.return)}var B=_.sibling;if(B!==null){B.return=_.return,le=B;break e}le=_.return}}var O=i.current;for(le=O;le!==null;){w=le;var j=w.child;if(w.subtreeFlags&2064&&j!==null)j.return=w,le=j;else e:for(w=O;le!==null;){if(C=le,C.flags&2048)try{switch(C.tag){case 0:case 11:case 15:Vc(9,C)}}catch(fe){pt(C,C.return,fe)}if(C===w){le=null;break e}var ee=C.sibling;if(ee!==null){ee.return=C.return,le=ee;break e}le=C.return}}if(je=p,Di(),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(Ts,i)}catch{}h=!0}return h}finally{Me=l,Vn.transition=o}}return!1}function Ky(i,o,l){o=Go(l,o),o=dy(i,o,1),i=Li(i,o,1),o=an(),i!==null&&(Ti(i,1,o),mn(i,o))}function pt(i,o,l){if(i.tag===3)Ky(i,i,l);else for(;o!==null;){if(o.tag===3){Ky(o,i,l);break}else if(o.tag===1){var h=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Mi===null||!Mi.has(h))){i=Go(l,i),i=fy(o,i,1),o=Li(o,i,1),i=an(),o!==null&&(Ti(o,1,i),mn(o,i));break}}o=o.return}}function lR(i,o,l){var h=i.pingCache;h!==null&&h.delete(o),o=an(),i.pingedLanes|=i.suspendedLanes&l,Mt===i&&(Wt&l)===l&&(At===4||At===3&&(Wt&130023424)===Wt&&500>tt()-Xf?Fs(i,0):Yf|=l),mn(i,o)}function Qy(i,o){o===0&&(i.mode&1?(o=Eo,Eo<<=1,!(Eo&130023424)&&(Eo=4194304)):o=1);var l=an();i=Kr(i,o),i!==null&&(Ti(i,o,l),mn(i,l))}function uR(i){var o=i.memoizedState,l=0;o!==null&&(l=o.retryLane),Qy(i,l)}function cR(i,o){var l=0;switch(i.tag){case 13:var h=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(o),Qy(i,l)}var Yy;Yy=function(i,o,l){if(i!==null)if(i.memoizedProps!==o.pendingProps||hn.current)fn=!0;else{if(!(i.lanes&l)&&!(o.flags&128))return fn=!1,XC(i,o,l);fn=!!(i.flags&131072)}else fn=!1,lt&&o.flags&1048576&&k_(o,Ec,o.index);switch(o.lanes=0,o.tag){case 2:var h=o.type;bc(i,o),i=o.pendingProps;var p=Uo(o,Kt.current);Ho(o,l),p=Pf(null,o,h,i,p,l);var _=kf();return o.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,dn(h)?(_=!0,_c(o)):_=!1,o.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,wf(o),p.updater=Oc,o.stateNode=p,p._reactInternals=o,bf(o,h,i,l),o=Uf(null,o,h,!0,_,l)):(o.tag=0,lt&&_&&hf(o),on(null,o,p,l),o=o.child),o;case 16:h=o.elementType;e:{switch(bc(i,o),i=o.pendingProps,p=h._init,h=p(h._payload),o.type=h,p=o.tag=dR(h),i=Jn(h,i),p){case 0:o=Ff(null,o,h,i,l);break e;case 1:o=Ty(null,o,h,i,l);break e;case 11:o=_y(null,o,h,i,l);break e;case 14:o=yy(null,o,h,Jn(h.type,i),l);break e}throw Error(t(306,h,""))}return o;case 0:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Jn(h,p),Ff(i,o,h,p,l);case 1:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Jn(h,p),Ty(i,o,h,p,l);case 3:e:{if(Iy(o),i===null)throw Error(t(387));h=o.pendingProps,_=o.memoizedState,p=_.element,F_(i,o),Rc(o,h,null,l);var w=o.memoizedState;if(h=w.element,_.isDehydrated)if(_={element:h,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},o.updateQueue.baseState=_,o.memoizedState=_,o.flags&256){p=Go(Error(t(423)),o),o=Sy(i,o,h,l,p);break e}else if(h!==p){p=Go(Error(t(424)),o),o=Sy(i,o,h,l,p);break e}else for(Cn=ki(o.stateNode.containerInfo.firstChild),Sn=o,lt=!0,Xn=null,l=M_(o,null,h,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(zo(),h===p){o=Yr(i,o,l);break e}on(i,o,h,l)}o=o.child}return o;case 5:return j_(o),i===null&&pf(o),h=o.type,p=o.pendingProps,_=i!==null?i.memoizedProps:null,w=p.children,sf(h,p)?w=null:_!==null&&sf(h,_)&&(o.flags|=32),wy(i,o),on(i,o,w,l),o.child;case 6:return i===null&&pf(o),null;case 13:return Cy(i,o,l);case 4:return Tf(o,o.stateNode.containerInfo),h=o.pendingProps,i===null?o.child=$o(o,null,h,l):on(i,o,h,l),o.child;case 11:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Jn(h,p),_y(i,o,h,p,l);case 7:return on(i,o,o.pendingProps,l),o.child;case 8:return on(i,o,o.pendingProps.children,l),o.child;case 12:return on(i,o,o.pendingProps.children,l),o.child;case 10:e:{if(h=o.type._context,p=o.pendingProps,_=o.memoizedProps,w=p.value,nt(Ic,h._currentValue),h._currentValue=w,_!==null)if(Yn(_.value,w)){if(_.children===p.children&&!hn.current){o=Yr(i,o,l);break e}}else for(_=o.child,_!==null&&(_.return=o);_!==null;){var C=_.dependencies;if(C!==null){w=_.child;for(var N=C.firstContext;N!==null;){if(N.context===h){if(_.tag===1){N=Qr(-1,l&-l),N.tag=2;var z=_.updateQueue;if(z!==null){z=z.shared;var X=z.pending;X===null?N.next=N:(N.next=X.next,X.next=N),z.pending=N}}_.lanes|=l,N=_.alternate,N!==null&&(N.lanes|=l),vf(_.return,l,o),C.lanes|=l;break}N=N.next}}else if(_.tag===10)w=_.type===o.type?null:_.child;else if(_.tag===18){if(w=_.return,w===null)throw Error(t(341));w.lanes|=l,C=w.alternate,C!==null&&(C.lanes|=l),vf(w,l,o),w=_.sibling}else w=_.child;if(w!==null)w.return=_;else for(w=_;w!==null;){if(w===o){w=null;break}if(_=w.sibling,_!==null){_.return=w.return,w=_;break}w=w.return}_=w}on(i,o,p.children,l),o=o.child}return o;case 9:return p=o.type,h=o.pendingProps.children,Ho(o,l),p=bn(p),h=h(p),o.flags|=1,on(i,o,h,l),o.child;case 14:return h=o.type,p=Jn(h,o.pendingProps),p=Jn(h.type,p),yy(i,o,h,p,l);case 15:return vy(i,o,o.type,o.pendingProps,l);case 17:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:Jn(h,p),bc(i,o),o.tag=1,dn(h)?(i=!0,_c(o)):i=!1,Ho(o,l),cy(o,h,p),bf(o,h,p,l),Uf(null,o,h,!0,i,l);case 19:return Ay(i,o,l);case 22:return Ey(i,o,l)}throw Error(t(156,o.tag))};function Xy(i,o){return yo(i,o)}function hR(i,o,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(i,o,l,h){return new hR(i,o,l,h)}function sp(i){return i=i.prototype,!(!i||!i.isReactComponent)}function dR(i){if(typeof i=="function")return sp(i)?1:0;if(i!=null){if(i=i.$$typeof,i===F)return 11;if(i===Ye)return 14}return 2}function Bi(i,o){var l=i.alternate;return l===null?(l=Fn(i.tag,o,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=o,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,o=i.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function qc(i,o,l,h,p,_){var w=2;if(h=i,typeof i=="function")sp(i)&&(w=1);else if(typeof i=="string")w=5;else e:switch(i){case D:return Bs(l.children,p,_,o);case S:w=8,p|=8;break;case P:return i=Fn(12,l,o,p|2),i.elementType=P,i.lanes=_,i;case R:return i=Fn(13,l,o,p),i.elementType=R,i.lanes=_,i;case We:return i=Fn(19,l,o,p),i.elementType=We,i.lanes=_,i;case xe:return Gc(l,p,_,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case x:w=10;break e;case b:w=9;break e;case F:w=11;break e;case Ye:w=14;break e;case Xe:w=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=Fn(w,l,o,p),o.elementType=i,o.type=h,o.lanes=_,o}function Bs(i,o,l,h){return i=Fn(7,i,h,o),i.lanes=l,i}function Gc(i,o,l,h){return i=Fn(22,i,h,o),i.elementType=xe,i.lanes=l,i.stateNode={isHidden:!1},i}function op(i,o,l){return i=Fn(6,i,null,o),i.lanes=l,i}function ap(i,o,l){return o=Fn(4,i.children!==null?i.children:[],i.key,o),o.lanes=l,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function fR(i,o,l,h,p){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wi(0),this.expirationTimes=wi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wi(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function lp(i,o,l,h,p,_,w,C,N){return i=new fR(i,o,l,C,N),o===1?(o=1,_===!0&&(o|=8)):o=0,_=Fn(3,null,null,o),i.current=_,_.stateNode=i,_.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},wf(_),i}function pR(i,o,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ie,key:h==null?null:""+h,children:i,containerInfo:o,implementation:l}}function Jy(i){if(!i)return xi;i=i._reactInternals;e:{if($n(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(dn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(dn(l))return R_(i,l,o)}return o}function Zy(i,o,l,h,p,_,w,C,N){return i=lp(l,h,!0,i,p,_,w,C,N),i.context=Jy(null),l=i.current,h=an(),p=Fi(l),_=Qr(h,p),_.callback=o??null,Li(l,_,p),i.current.lanes=p,Ti(i,p,h),mn(i,h),i}function Kc(i,o,l,h){var p=o.current,_=an(),w=Fi(p);return l=Jy(l),o.context===null?o.context=l:o.pendingContext=l,o=Qr(_,w),o.payload={element:i},h=h===void 0?null:h,h!==null&&(o.callback=h),i=Li(p,o,w),i!==null&&(tr(i,p,w,_),Cc(i,p,w)),w}function Qc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function ev(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<o?l:o}}function up(i,o){ev(i,o),(i=i.alternate)&&ev(i,o)}var tv=typeof reportError=="function"?reportError:function(i){console.error(i)};function cp(i){this._internalRoot=i}Yc.prototype.render=cp.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));Kc(i,o,null,null)},Yc.prototype.unmount=cp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;Vs(function(){Kc(null,i,null,null)}),o[Wr]=null}};function Yc(i){this._internalRoot=i}Yc.prototype.unstable_scheduleHydration=function(i){if(i){var o=Yu();i={blockedOn:null,target:i,priority:o};for(var l=0;l<dr.length&&o!==0&&o<dr[l].priority;l++);dr.splice(l,0,i),l===0&&Zu(i)}};function hp(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Xc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function nv(){}function mR(i,o,l,h,p){if(p){if(typeof h=="function"){var _=h;h=function(){var z=Qc(w);_.call(z)}}var w=Zy(o,h,i,0,null,!1,!1,"",nv);return i._reactRootContainer=w,i[Wr]=w.current,fl(i.nodeType===8?i.parentNode:i),Vs(),w}for(;p=i.lastChild;)i.removeChild(p);if(typeof h=="function"){var C=h;h=function(){var z=Qc(N);C.call(z)}}var N=lp(i,0,!1,null,null,!1,!1,"",nv);return i._reactRootContainer=N,i[Wr]=N.current,fl(i.nodeType===8?i.parentNode:i),Vs(function(){Kc(o,N,l,h)}),N}function Jc(i,o,l,h,p){var _=l._reactRootContainer;if(_){var w=_;if(typeof p=="function"){var C=p;p=function(){var N=Qc(w);C.call(N)}}Kc(o,w,i,p)}else w=mR(l,o,i,p,h);return Qc(w)}Ku=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var l=Ei(o.pendingLanes);l!==0&&(Ii(o,l|1),mn(o,tt()),!(je&6)&&(Yo=tt()+500,Di()))}break;case 13:Vs(function(){var h=Kr(i,1);if(h!==null){var p=an();tr(h,i,1,p)}}),up(i,1)}},wo=function(i){if(i.tag===13){var o=Kr(i,134217728);if(o!==null){var l=an();tr(o,i,134217728,l)}up(i,134217728)}},Qu=function(i){if(i.tag===13){var o=Fi(i),l=Kr(i,o);if(l!==null){var h=an();tr(l,i,o,h)}up(i,o)}},Yu=function(){return Me},Xu=function(i,o){var l=Me;try{return Me=i,o()}finally{Me=l}},ho=function(i,o,l){switch(o){case"input":if(Fa(i,l),o=l.name,l.type==="radio"&&o!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var h=l[o];if(h!==i&&h.form===i.form){var p=mc(h);if(!p)throw Error(t(90));so(h),Fa(h,p)}}}break;case"textarea":uo(i,l);break;case"select":o=l.value,o!=null&&Mr(i,!!l.multiple,o,!1)}},_s=np,Ka=Vs;var gR={usingClientEntryPoint:!1,Events:[gl,Vo,mc,cr,Ga,np]},Nl={findFiberByHostInstance:ks,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_R={bundleType:Nl.bundleType,version:Nl.version,rendererPackageName:Nl.rendererPackageName,rendererConfig:Nl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:de.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Xa(i),i===null?null:i.stateNode},findFiberByHostInstance:Nl.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zc.isDisabled&&Zc.supportsFiber)try{Ts=Zc.inject(_R),En=Zc}catch{}}return gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gR,gn.createPortal=function(i,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hp(o))throw Error(t(200));return pR(i,o,null,l)},gn.createRoot=function(i,o){if(!hp(i))throw Error(t(299));var l=!1,h="",p=tv;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),o=lp(i,1,!1,null,null,l,!1,h,p),i[Wr]=o.current,fl(i.nodeType===8?i.parentNode:i),new cp(o)},gn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=Xa(o),i=i===null?null:i.stateNode,i},gn.flushSync=function(i){return Vs(i)},gn.hydrate=function(i,o,l){if(!Xc(o))throw Error(t(200));return Jc(null,i,o,!0,l)},gn.hydrateRoot=function(i,o,l){if(!hp(i))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,_="",w=tv;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(w=l.onRecoverableError)),o=Zy(o,null,i,1,l??null,p,!1,_,w),i[Wr]=o.current,fl(i),h)for(i=0;i<h.length;i++)l=h[i],p=l._getVersion,p=p(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,p]:o.mutableSourceEagerHydrationData.push(l,p);return new Yc(o)},gn.render=function(i,o,l){if(!Xc(o))throw Error(t(200));return Jc(null,i,o,!1,l)},gn.unmountComponentAtNode=function(i){if(!Xc(i))throw Error(t(40));return i._reactRootContainer?(Vs(function(){Jc(null,null,i,!1,function(){i._reactRootContainer=null,i[Wr]=null})}),!0):!1},gn.unstable_batchedUpdates=np,gn.unstable_renderSubtreeIntoContainer=function(i,o,l,h){if(!Xc(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Jc(i,o,l,!1,h)},gn.version="18.3.1-next-f1338f8080-20240426",gn}var gv;function Q0(){if(gv)return gp.exports;gv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),gp.exports=K0(),gp.exports}var th={},_v;function Y0(){if(_v)return th;_v=1;var n=Q0();return th.createRoot=n.createRoot,th.hydrateRoot=n.hydrateRoot,th}var X0=Y0();const J0=fw(X0),Z0="_buttons_syl1d_11",eA="_x_syl1d_29",tA="_logo_syl1d_47",nA="_login_syl1d_65",rA="_register_syl1d_101",nh={buttons:Z0,x:eA,logo:tA,login:nA,register:rA};var yv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te=function(n,e){if(!n)throw Ra(e)},Ra=function(n){return new Error("Firebase Database ("+Aw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},iA=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],u=n[t++],d=n[t++],f=((s&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return e.join("")},Nm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const a=n[s],u=s+1<n.length,d=u?n[s+1]:0,f=s+2<n.length,m=f?n[s+2]:0,v=a>>2,E=(a&3)<<4|d>>4;let T=(d&15)<<2|m>>6,A=m&63;f||(A=64,u||(T=64)),r.push(t[v],t[E],t[T],t[A])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Pw(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):iA(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],d=s<n.length?t[n.charAt(s)]:0;++s;const m=s<n.length?t[n.charAt(s)]:64;++s;const E=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||d==null||m==null||E==null)throw new sA;const T=a<<2|d>>4;if(r.push(T),m!==64){const A=d<<4&240|m>>2;if(r.push(A),E!==64){const k=m<<6&192|E;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class sA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kw=function(n){const e=Pw(n);return Nm.encodeByteArray(e,!0)},Ah=function(n){return kw(n).replace(/\./g,"")},Ph=function(n){try{return Nm.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(n){return Nw(void 0,n)}function Nw(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!aA(t)||(n[t]=Nw(n[t],e[t]));return n}function aA(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA=()=>lA().__FIREBASE_DEFAULTS__,cA=()=>{if(typeof process>"u"||typeof yv>"u")return;const n=yv.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},hA=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ph(n[1]);return e&&JSON.parse(e)},ud=()=>{try{return uA()||cA()||hA()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},xw=n=>{var e,t;return(t=(e=ud())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Dw=n=>{const e=xw(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Ow=()=>{var n;return(n=ud())===null||n===void 0?void 0:n.config},Lw=n=>{var e;return(e=ud())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ah(JSON.stringify(t)),Ah(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nn())}function dA(){var n;const e=(n=ud())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pA(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Mw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mA(){const n=nn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function gA(){return Aw.NODE_ADMIN===!0}function _A(){return!dA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yA(){try{return typeof indexedDB=="object"}catch{return!1}}function vA(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA="FirebaseError";class hi extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=EA,Object.setPrototypeOf(this,hi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Iu.prototype.create)}}class Iu{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],u=a?wA(a,r):"Error",d=`${this.serviceName}: ${u} (${s}).`;return new hi(s,d,r)}}function wA(n,e){return n.replace(TA,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const TA=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(n){return JSON.parse(n)}function Pt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw=function(n){let e={},t={},r={},s="";try{const a=n.split(".");e=ru(Ph(a[0])||""),t=ru(Ph(a[1])||""),s=a[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:s}},IA=function(n){const e=Vw(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},SA=function(n){const e=Vw(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ha(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Bp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function kh(n,e,t){const r={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=e.call(t,n[s],s,n));return r}function Nh(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const a=n[s],u=e[s];if(vv(a)&&vv(u)){if(!Nh(a,u))return!1}else if(a!==u)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function vv(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ul(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,a]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(a)}}),e}function Bl(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let E=0;E<16;E++)r[E]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let E=0;E<16;E++)r[E]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let E=16;E<80;E++){const T=r[E-3]^r[E-8]^r[E-14]^r[E-16];r[E]=(T<<1|T>>>31)&4294967295}let s=this.chain_[0],a=this.chain_[1],u=this.chain_[2],d=this.chain_[3],f=this.chain_[4],m,v;for(let E=0;E<80;E++){E<40?E<20?(m=d^a&(u^d),v=1518500249):(m=a^u^d,v=1859775393):E<60?(m=a&u|d&(a|u),v=2400959708):(m=a^u^d,v=3395469782);const T=(s<<5|s>>>27)+m+f+v+r[E]&4294967295;f=d,d=u,u=(a<<30|a>>>2)&4294967295,a=s,s=T}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let s=0;const a=this.buf_;let u=this.inbuf_;for(;s<t;){if(u===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(a[u]=e.charCodeAt(s),++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}else for(;s<t;)if(a[u]=e[s],++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let a=24;a>=0;a-=8)e[r]=this.chain_[s]>>a&255,++r;return e}}function RA(n,e){const t=new AA(n,e);return t.subscribe.bind(t)}class AA{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");PA(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=vp),s.error===void 0&&(s.error=vp),s.complete===void 0&&(s.complete=vp);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function PA(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function vp(){}function Dm(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);if(s>=55296&&s<=56319){const a=s-55296;r++,te(r<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(r)-56320;s=65536+(a<<10)+u}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},hd=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(n){return n&&n._delegate?n._delegate:n}class rs{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new cd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(DA(e))try{this.getOrInitializeService({instanceIdentifier:js})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(e=js){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=js){return this.instances.has(e)}getOptions(e=js){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);r===d&&u.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(s,a);const u=this.instances.get(s);return u&&e(u,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xA(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=js){return this.component?this.component.multipleInstances?e:js:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xA(n){return n===js?void 0:n}function DA(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new NA(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(De||(De={}));const LA={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},bA=De.INFO,MA={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},VA=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=MA[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dd{constructor(e){this.name=e,this._logLevel=bA,this._logHandler=VA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?LA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}}const FA=(n,e)=>e.some(t=>n instanceof t);let Ev,wv;function UA(){return Ev||(Ev=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BA(){return wv||(wv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fw=new WeakMap,jp=new WeakMap,Uw=new WeakMap,Ep=new WeakMap,Om=new WeakMap;function jA(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(Ki(n.result)),s()},u=()=>{r(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&Fw.set(t,n)}).catch(()=>{}),Om.set(e,n),e}function zA(n){if(jp.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),s()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});jp.set(n,e)}let zp={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return jp.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Uw.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ki(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function $A(n){zp=n(zp)}function WA(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(wp(this),e,...t);return Uw.set(r,e.sort?e.sort():[e]),Ki(r)}:BA().includes(n)?function(...e){return n.apply(wp(this),e),Ki(Fw.get(this))}:function(...e){return Ki(n.apply(wp(this),e))}}function HA(n){return typeof n=="function"?WA(n):(n instanceof IDBTransaction&&zA(n),FA(n,UA())?new Proxy(n,zp):n)}function Ki(n){if(n instanceof IDBRequest)return jA(n);if(Ep.has(n))return Ep.get(n);const e=HA(n);return e!==n&&(Ep.set(n,e),Om.set(e,n)),e}const wp=n=>Om.get(n);function qA(n,e,{blocked:t,upgrade:r,blocking:s,terminated:a}={}){const u=indexedDB.open(n,e),d=Ki(u);return r&&u.addEventListener("upgradeneeded",f=>{r(Ki(u.result),f.oldVersion,f.newVersion,Ki(u.transaction),f)}),t&&u.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),d.then(f=>{a&&f.addEventListener("close",()=>a()),s&&f.addEventListener("versionchange",m=>s(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const GA=["get","getKey","getAll","getAllKeys","count"],KA=["put","add","delete","clear"],Tp=new Map;function Tv(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Tp.get(e))return Tp.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=KA.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||GA.includes(t)))return;const a=async function(u,...d){const f=this.transaction(u,s?"readwrite":"readonly");let m=f.store;return r&&(m=m.index(d.shift())),(await Promise.all([m[t](...d),s&&f.done]))[0]};return Tp.set(e,a),a}$A(n=>({...n,get:(e,t,r)=>Tv(e,t)||n.get(e,t,r),has:(e,t)=>!!Tv(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(YA(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function YA(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $p="@firebase/app",Iv="0.10.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=new dd("@firebase/app"),XA="@firebase/app-compat",JA="@firebase/analytics-compat",ZA="@firebase/analytics",eP="@firebase/app-check-compat",tP="@firebase/app-check",nP="@firebase/auth",rP="@firebase/auth-compat",iP="@firebase/database",sP="@firebase/data-connect",oP="@firebase/database-compat",aP="@firebase/functions",lP="@firebase/functions-compat",uP="@firebase/installations",cP="@firebase/installations-compat",hP="@firebase/messaging",dP="@firebase/messaging-compat",fP="@firebase/performance",pP="@firebase/performance-compat",mP="@firebase/remote-config",gP="@firebase/remote-config-compat",_P="@firebase/storage",yP="@firebase/storage-compat",vP="@firebase/firestore",EP="@firebase/vertexai",wP="@firebase/firestore-compat",TP="firebase",IP="11.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp="[DEFAULT]",SP={[$p]:"fire-core",[XA]:"fire-core-compat",[ZA]:"fire-analytics",[JA]:"fire-analytics-compat",[tP]:"fire-app-check",[eP]:"fire-app-check-compat",[nP]:"fire-auth",[rP]:"fire-auth-compat",[iP]:"fire-rtdb",[sP]:"fire-data-connect",[oP]:"fire-rtdb-compat",[aP]:"fire-fn",[lP]:"fire-fn-compat",[uP]:"fire-iid",[cP]:"fire-iid-compat",[hP]:"fire-fcm",[dP]:"fire-fcm-compat",[fP]:"fire-perf",[pP]:"fire-perf-compat",[mP]:"fire-rc",[gP]:"fire-rc-compat",[_P]:"fire-gcs",[yP]:"fire-gcs-compat",[vP]:"fire-fst",[wP]:"fire-fst-compat",[EP]:"fire-vertex","fire-js":"fire-js",[TP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh=new Map,CP=new Map,Hp=new Map;function Sv(n,e){try{n.container.addComponent(e)}catch(t){oi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function qs(n){const e=n.name;if(Hp.has(e))return oi.debug(`There were multiple attempts to register component ${e}.`),!1;Hp.set(e,n);for(const t of xh.values())Sv(t,n);for(const t of CP.values())Sv(t,n);return!0}function fd(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Tr(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qi=new Iu("app","Firebase",RP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=IP;function Bw(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Wp,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Qi.create("bad-app-name",{appName:String(s)});if(t||(t=Ow()),!t)throw Qi.create("no-options");const a=xh.get(s);if(a){if(Nh(t,a.options)&&Nh(r,a.config))return a;throw Qi.create("duplicate-app",{appName:s})}const u=new OA(s);for(const f of Hp.values())u.addComponent(f);const d=new AP(t,r,u);return xh.set(s,d),d}function Lm(n=Wp){const e=xh.get(n);if(!e&&n===Wp&&Ow())return Bw();if(!e)throw Qi.create("no-app",{appName:n});return e}function Cr(n,e,t){var r;let s=(r=SP[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const d=[`Unable to register library "${s}" with version "${e}":`];a&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),oi.warn(d.join(" "));return}qs(new rs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP="firebase-heartbeat-database",kP=1,iu="firebase-heartbeat-store";let Ip=null;function jw(){return Ip||(Ip=qA(PP,kP,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(iu)}catch(t){console.warn(t)}}}}).catch(n=>{throw Qi.create("idb-open",{originalErrorMessage:n.message})})),Ip}async function NP(n){try{const t=(await jw()).transaction(iu),r=await t.objectStore(iu).get(zw(n));return await t.done,r}catch(e){if(e instanceof hi)oi.warn(e.message);else{const t=Qi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});oi.warn(t.message)}}}async function Cv(n,e){try{const r=(await jw()).transaction(iu,"readwrite");await r.objectStore(iu).put(e,zw(n)),await r.done}catch(t){if(t instanceof hi)oi.warn(t.message);else{const r=Qi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});oi.warn(r.message)}}}function zw(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP=1024,DP=30*24*60*60*1e3;class OP{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new bP(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Rv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a)?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const d=new Date(u.date).valueOf();return Date.now()-d<=DP}),this._storage.overwrite(this._heartbeatsCache))}catch(r){oi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Rv(),{heartbeatsToSend:r,unsentEntries:s}=LP(this._heartbeatsCache.heartbeats),a=Ah(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return oi.warn(t),""}}}function Rv(){return new Date().toISOString().substring(0,10)}function LP(n,e=xP){const t=[];let r=n.slice();for(const s of n){const a=t.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),Av(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Av(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class bP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yA()?vA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await NP(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Cv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Cv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Av(n){return Ah(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MP(n){qs(new rs("platform-logger",e=>new QA(e),"PRIVATE")),qs(new rs("heartbeat",e=>new OP(e),"PRIVATE")),Cr($p,Iv,n),Cr($p,Iv,"esm2017"),Cr("fire-js","")}MP("");var VP="firebase",FP="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cr(VP,FP,"app");function bm(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function $w(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const UP=$w,Ww=new Iu("auth","Firebase",$w());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh=new dd("@firebase/auth");function BP(n,...e){Dh.logLevel<=De.WARN&&Dh.warn(`Auth (${Zs}): ${n}`,...e)}function fh(n,...e){Dh.logLevel<=De.ERROR&&Dh.error(`Auth (${Zs}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(n,...e){throw Mm(n,...e)}function Rr(n,...e){return Mm(n,...e)}function Hw(n,e,t){const r=Object.assign(Object.assign({},UP()),{[e]:t});return new Iu("auth","Firebase",r).create(e,{appName:n.name})}function ri(n){return Hw(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mm(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ww.create(n,...e)}function Ee(n,e,...t){if(!n)throw Mm(e,...t)}function Jr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw fh(e),new Error(e)}function ai(n,e){n||Jr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function jP(){return Pv()==="http:"||Pv()==="https:"}function Pv(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jP()||pA()||"connection"in navigator)?navigator.onLine:!0}function $P(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,t){this.shortDelay=e,this.longDelay=t,ai(t>e,"Short delay should be less than long delay!"),this.isMobile=xm()||Mw()}get(){return zP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(n,e){ai(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Jr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Jr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Jr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP=new Su(3e4,6e4);function fi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function pi(n,e,t,r,s={}){return Gw(n,s,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const d=Aa(Object.assign({key:n.config.apiKey},u)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:f},a);return fA()||(m.referrerPolicy="no-referrer"),qw.fetch()(Kw(n,n.config.apiHost,t,d),m)})}async function Gw(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},WP),e);try{const s=new GP(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw rh(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[f,m]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw rh(n,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw rh(n,"email-already-in-use",u);if(f==="USER_DISABLED")throw rh(n,"user-disabled",u);const v=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw Hw(n,v,m);ar(n,v)}}catch(s){if(s instanceof hi)throw s;ar(n,"network-request-failed",{message:String(s)})}}async function Cu(n,e,t,r,s={}){const a=await pi(n,e,t,r,s);return"mfaPendingCredential"in a&&ar(n,"multi-factor-auth-required",{_serverResponse:a}),a}function Kw(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Vm(n.config,s):`${n.config.apiScheme}://${s}`}function qP(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class GP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Rr(this.auth,"network-request-failed")),HP.get())})}}function rh(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Rr(n,e,r);return s.customData._tokenResponse=t,s}function kv(n){return n!==void 0&&n.enterprise!==void 0}class KP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return qP(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function QP(n,e){return pi(n,"GET","/v2/recaptchaConfig",fi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YP(n,e){return pi(n,"POST","/v1/accounts:delete",e)}async function Qw(n,e){return pi(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function XP(n,e=!1){const t=Tt(n),r=await t.getIdToken(e),s=Fm(r);Ee(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:ql(Sp(s.auth_time)),issuedAtTime:ql(Sp(s.iat)),expirationTime:ql(Sp(s.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Sp(n){return Number(n)*1e3}function Fm(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return fh("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ph(t);return s?JSON.parse(s):(fh("Failed to decode base64 JWT payload"),null)}catch(s){return fh("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Nv(n){const e=Fm(n);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function su(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof hi&&JP(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function JP({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ql(this.lastLoginAt),this.creationTime=ql(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oh(n){var e;const t=n.auth,r=await n.getIdToken(),s=await su(n,Qw(t,{idToken:r}));Ee(s==null?void 0:s.users.length,t,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?Yw(a.providerUserInfo):[],d=tk(n.providerData,u),f=n.isAnonymous,m=!(n.email&&a.passwordHash)&&!(d!=null&&d.length),v=f?m:!1,E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new Gp(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(n,E)}async function ek(n){const e=Tt(n);await Oh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tk(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Yw(n){return n.map(e=>{var{providerId:t}=e,r=bm(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nk(n,e){const t=await Gw(n,{},async()=>{const r=Aa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,u=Kw(n,s,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",qw.fetch()(u,{method:"POST",headers:d,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function rk(n,e){return pi(n,"POST","/v2/accounts:revokeToken",fi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Nv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const t=Nv(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:a}=await nk(e,t);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:a}=t,u=new sa;return r&&(Ee(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),s&&(Ee(typeof s=="string","internal-error",{appName:e}),u.accessToken=s),a&&(Ee(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new sa,this.toJSON())}_performRefresh(){return Jr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(n,e){Ee(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Zr{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,a=bm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ZP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Gp(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await su(this,this.stsTokenManager.getToken(this.auth,e));return Ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return XP(this,e)}reload(){return ek(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Zr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Oh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tr(this.auth.app))return Promise.reject(ri(this.auth));const e=await this.getIdToken();return await su(this,YP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,a,u,d,f,m,v;const E=(r=t.displayName)!==null&&r!==void 0?r:void 0,T=(s=t.email)!==null&&s!==void 0?s:void 0,A=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,k=(u=t.photoURL)!==null&&u!==void 0?u:void 0,M=(d=t.tenantId)!==null&&d!==void 0?d:void 0,L=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,H=(m=t.createdAt)!==null&&m!==void 0?m:void 0,G=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:ie,emailVerified:de,isAnonymous:Re,providerData:Ie,stsTokenManager:D}=t;Ee(ie&&D,e,"internal-error");const S=sa.fromJSON(this.name,D);Ee(typeof ie=="string",e,"internal-error"),zi(E,e.name),zi(T,e.name),Ee(typeof de=="boolean",e,"internal-error"),Ee(typeof Re=="boolean",e,"internal-error"),zi(A,e.name),zi(k,e.name),zi(M,e.name),zi(L,e.name),zi(H,e.name),zi(G,e.name);const P=new Zr({uid:ie,auth:e,email:T,emailVerified:de,displayName:E,isAnonymous:Re,photoURL:k,phoneNumber:A,tenantId:M,stsTokenManager:S,createdAt:H,lastLoginAt:G});return Ie&&Array.isArray(Ie)&&(P.providerData=Ie.map(x=>Object.assign({},x))),L&&(P._redirectEventId=L),P}static async _fromIdTokenResponse(e,t,r=!1){const s=new sa;s.updateFromServerResponse(t);const a=new Zr({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Oh(a),a}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Ee(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?Yw(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),d=new sa;d.updateFromIdToken(r);const f=new Zr({uid:s.localId,auth:e,stsTokenManager:d,isAnonymous:u}),m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Gp(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,m),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv=new Map;function ei(n){ai(n instanceof Function,"Expected a class definition");let e=xv.get(n);return e?(ai(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,xv.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Xw.type="NONE";const Dv=Xw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(n,e,t){return`firebase:${n}:${e}:${t}`}class oa{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=ph(this.userKey,s.apiKey,a),this.fullPersistenceKey=ph("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new oa(ei(Dv),e,r);const s=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=s[0]||ei(Dv);const u=ph(r,e.config.apiKey,e.name);let d=null;for(const m of t)try{const v=await m._get(u);if(v){const E=Zr._fromJSON(e,v);m!==a&&(d=E),a=m;break}}catch{}const f=s.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new oa(a,e,r):(a=f[0],d&&await a._set(u,d.toJSON()),await Promise.all(t.map(async m=>{if(m!==a)try{await m._remove(u)}catch{}})),new oa(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rT(e))return"Blackberry";if(iT(e))return"Webos";if(Zw(e))return"Safari";if((e.includes("chrome/")||eT(e))&&!e.includes("edge/"))return"Chrome";if(nT(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Jw(n=nn()){return/firefox\//i.test(n)}function Zw(n=nn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function eT(n=nn()){return/crios\//i.test(n)}function tT(n=nn()){return/iemobile/i.test(n)}function nT(n=nn()){return/android/i.test(n)}function rT(n=nn()){return/blackberry/i.test(n)}function iT(n=nn()){return/webos/i.test(n)}function Um(n=nn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ik(n=nn()){var e;return Um(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sk(){return mA()&&document.documentMode===10}function sT(n=nn()){return Um(n)||nT(n)||iT(n)||rT(n)||/windows phone/i.test(n)||tT(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(n,e=[]){let t;switch(n){case"Browser":t=Ov(nn());break;case"Worker":t=`${Ov(nn())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Zs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,d)=>{try{const f=e(a);u(f)}catch(f){d(f)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ak(n,e={}){return pi(n,"GET","/v2/passwordPolicy",fi(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk=6;class uk{constructor(e){var t,r,s,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:lk,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,a,u,d;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(s=f.containsLowercaseLetter)!==null&&s!==void 0?s:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(u=f.containsNumericCharacter)!==null&&u!==void 0?u:!0),f.isValid&&(f.isValid=(d=f.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),f}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lv(this),this.idTokenSubscription=new Lv(this),this.beforeStateQueue=new ok(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ww,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ei(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await oa.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Qw(this,{idToken:e}),r=await Zr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Tr(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=s==null?void 0:s._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===d)&&(f!=null&&f.user)&&(s=f.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Oh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$P()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tr(this.app))return Promise.reject(ri(this));const t=e?Tt(e):null;return t&&Ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tr(this.app)?Promise.reject(ri(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tr(this.app)?Promise.reject(ri(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ei(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ak(this),t=new uk(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Iu("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await rk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ei(e)||this._popupRedirectResolver;Ee(t,this,"argument-error"),this.redirectPersistenceManager=await oa.create(this,[ei(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,s);return()=>{u=!0,f()}}else{const f=e.addObserver(t);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=oT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&BP(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function mi(n){return Tt(n)}class Lv{constructor(e){this.auth=e,this.observer=null,this.addObserver=RA(t=>this.observer=t)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hk(n){pd=n}function aT(n){return pd.loadJS(n)}function dk(){return pd.recaptchaEnterpriseScript}function fk(){return pd.gapiScript}function pk(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class mk{constructor(){this.enterprise=new gk}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class gk{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const _k="recaptcha-enterprise",lT="NO_RECAPTCHA";class yk{constructor(e){this.type=_k,this.auth=mi(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,d)=>{QP(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new KP(f);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,u(m.siteKey)}}).catch(f=>{d(f)})})}function s(a,u,d){const f=window.grecaptcha;kv(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(m=>{u(m)}).catch(()=>{u(lT)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new mk().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(d=>{if(!t&&kv(window.grecaptcha))s(d,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=dk();f.length!==0&&(f+=d),aT(f).then(()=>{s(d,a,u)}).catch(m=>{u(m)})}}).catch(d=>{u(d)})})}}async function bv(n,e,t,r=!1,s=!1){const a=new yk(n);let u;if(s)u=lT;else try{u=await a.verify(t)}catch{u=await a.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const f=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const f=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Lh(n,e,t,r,s){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await bv(n,e,t,t==="getOobCode");return r(n,u)}else return r(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await bv(n,e,t,t==="getOobCode");return r(n,d)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vk(n,e){const t=fd(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(Nh(a,e??{}))return s;ar(s,"already-initialized")}return t.initialize({options:e})}function Ek(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ei);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function wk(n,e,t){const r=mi(n);Ee(r._canInitEmulator,r,"emulator-config-failed"),Ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,a=uT(e),{host:u,port:d}=Tk(e),f=d===null?"":`:${d}`;r.config.emulator={url:`${a}//${u}${f}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})}),Ik()}function uT(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Tk(n){const e=uT(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const a=s[1];return{host:a,port:Mv(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:Mv(u)}}}function Mv(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Ik(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Jr("not implemented")}_getIdTokenResponse(e){return Jr("not implemented")}_linkToIdToken(e,t){return Jr("not implemented")}_getReauthenticationResolver(e){return Jr("not implemented")}}async function Sk(n,e){return pi(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ck(n,e){return Cu(n,"POST","/v1/accounts:signInWithPassword",fi(n,e))}async function Rk(n,e){return pi(n,"POST","/v1/accounts:sendOobCode",fi(n,e))}async function Ak(n,e){return Rk(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pk(n,e){return Cu(n,"POST","/v1/accounts:signInWithEmailLink",fi(n,e))}async function kk(n,e){return Cu(n,"POST","/v1/accounts:signInWithEmailLink",fi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou extends Bm{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ou(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ou(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Lh(e,t,"signInWithPassword",Ck);case"emailLink":return Pk(e,{email:this._email,oobCode:this._password});default:ar(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Lh(e,r,"signUpPassword",Sk);case"emailLink":return kk(e,{idToken:t,email:this._email,oobCode:this._password});default:ar(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aa(n,e){return Cu(n,"POST","/v1/accounts:signInWithIdp",fi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk="http://localhost";class Gs extends Bm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Gs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ar("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,a=bm(t,["providerId","signInMethod"]);if(!r||!s)return null;const u=new Gs(r,s);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return aa(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,aa(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,aa(e,t)}buildRequest(){const e={requestUri:Nk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Aa(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xk(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Dk(n){const e=Ul(Bl(n)).link,t=e?Ul(Bl(e)).deep_link_id:null,r=Ul(Bl(n)).deep_link_id;return(r?Ul(Bl(r)).link:null)||r||t||e||n}class jm{constructor(e){var t,r,s,a,u,d;const f=Ul(Bl(e)),m=(t=f.apiKey)!==null&&t!==void 0?t:null,v=(r=f.oobCode)!==null&&r!==void 0?r:null,E=xk((s=f.mode)!==null&&s!==void 0?s:null);Ee(m&&v&&E,"argument-error"),this.apiKey=m,this.operation=E,this.code=v,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(u=f.languageCode)!==null&&u!==void 0?u:null,this.tenantId=(d=f.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=Dk(e);try{return new jm(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(){this.providerId=Pa.PROVIDER_ID}static credential(e,t){return ou._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=jm.parseLink(t);return Ee(r,"argument-error"),ou._fromEmailAndCode(e,r.code,r.tenantId)}}Pa.PROVIDER_ID="password";Pa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Pa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru extends cT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i extends Ru{constructor(){super("facebook.com")}static credential(e){return Gs._fromParams({providerId:$i.PROVIDER_ID,signInMethod:$i.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $i.credentialFromTaggedObject(e)}static credentialFromError(e){return $i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $i.credential(e.oauthAccessToken)}catch{return null}}}$i.FACEBOOK_SIGN_IN_METHOD="facebook.com";$i.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi extends Ru{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Gs._fromParams({providerId:Wi.PROVIDER_ID,signInMethod:Wi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Wi.credentialFromTaggedObject(e)}static credentialFromError(e){return Wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Wi.credential(t,r)}catch{return null}}}Wi.GOOGLE_SIGN_IN_METHOD="google.com";Wi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi extends Ru{constructor(){super("github.com")}static credential(e){return Gs._fromParams({providerId:Hi.PROVIDER_ID,signInMethod:Hi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hi.credentialFromTaggedObject(e)}static credentialFromError(e){return Hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hi.credential(e.oauthAccessToken)}catch{return null}}}Hi.GITHUB_SIGN_IN_METHOD="github.com";Hi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi extends Ru{constructor(){super("twitter.com")}static credential(e,t){return Gs._fromParams({providerId:qi.PROVIDER_ID,signInMethod:qi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return qi.credentialFromTaggedObject(e)}static credentialFromError(e){return qi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return qi.credential(t,r)}catch{return null}}}qi.TWITTER_SIGN_IN_METHOD="twitter.com";qi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ok(n,e){return Cu(n,"POST","/v1/accounts:signUp",fi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const a=await Zr._fromIdTokenResponse(e,r,s),u=Vv(r);return new Ks({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Vv(r);return new Ks({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Vv(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh extends hi{constructor(e,t,r,s){var a;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,bh.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new bh(e,t,r,s)}}function hT(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?bh._fromErrorAndOperation(n,a,e,r):a})}async function Lk(n,e,t=!1){const r=await su(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ks._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bk(n,e,t=!1){const{auth:r}=n;if(Tr(r.app))return Promise.reject(ri(r));const s="reauthenticate";try{const a=await su(n,hT(r,s,e,n),t);Ee(a.idToken,r,"internal-error");const u=Fm(a.idToken);Ee(u,r,"internal-error");const{sub:d}=u;return Ee(n.uid===d,r,"user-mismatch"),Ks._forOperation(n,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&ar(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dT(n,e,t=!1){if(Tr(n.app))return Promise.reject(ri(n));const r="signIn",s=await hT(n,r,e),a=await Ks._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(a.user),a}async function Mk(n,e){return dT(mi(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fT(n){const e=mi(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Vk(n,e,t){const r=mi(n);await Lh(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Ak)}async function Fk(n,e,t){if(Tr(n.app))return Promise.reject(ri(n));const r=mi(n),u=await Lh(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ok).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&fT(n),f}),d=await Ks._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(d.user),d}function Uk(n,e,t){return Tr(n.app)?Promise.reject(ri(n)):Mk(Tt(n),Pa.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&fT(n),r})}function Bk(n,e,t,r){return Tt(n).onIdTokenChanged(e,t,r)}function jk(n,e,t){return Tt(n).beforeAuthStateChanged(e,t)}function zk(n,e,t,r){return Tt(n).onAuthStateChanged(e,t,r)}const Mh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Mh,"1"),this.storage.removeItem(Mh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k=1e3,Wk=10;class mT extends pT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,f)=>{this.notifyListeners(u,f)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);sk()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Wk):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},$k)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}mT.type="LOCAL";const Hk=mT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT extends pT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}gT.type="SESSION";const _T=gT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new md(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:a}=t.data,u=this.handlersMap[s];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const d=Array.from(u).map(async m=>m(t.origin,a)),f=await qk(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}md.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,u;return new Promise((d,f)=>{const m=zm("",20);s.port1.start();const v=setTimeout(()=>{f(new Error("unsupported_event"))},r);u={messageChannel:s,onMessage(E){const T=E;if(T.data.eventId===m)switch(T.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(T.data.response);break;default:clearTimeout(v),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(){return window}function Kk(n){Ar().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(){return typeof Ar().WorkerGlobalScope<"u"&&typeof Ar().importScripts=="function"}async function Qk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Yk(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Xk(){return yT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT="firebaseLocalStorageDb",Jk=1,Vh="firebaseLocalStorage",ET="fbase_key";class Au{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function gd(n,e){return n.transaction([Vh],e?"readwrite":"readonly").objectStore(Vh)}function Zk(){const n=indexedDB.deleteDatabase(vT);return new Au(n).toPromise()}function Kp(){const n=indexedDB.open(vT,Jk);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Vh,{keyPath:ET})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Vh)?e(r):(r.close(),await Zk(),e(await Kp()))})})}async function Fv(n,e,t){const r=gd(n,!0).put({[ET]:e,value:t});return new Au(r).toPromise()}async function e1(n,e){const t=gd(n,!1).get(e),r=await new Au(t).toPromise();return r===void 0?null:r.value}function Uv(n,e){const t=gd(n,!0).delete(e);return new Au(t).toPromise()}const t1=800,n1=3;class wT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>n1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=md._getInstance(Xk()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Qk(),!this.activeServiceWorker)return;this.sender=new Gk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Yk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Kp();return await Fv(e,Mh,"1"),await Uv(e,Mh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Fv(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>e1(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Uv(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=gd(s,!1).getAll();return new Au(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),t1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wT.type="LOCAL";const r1=wT;new Su(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i1(n,e){return e?ei(e):(Ee(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m extends Bm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return aa(e,this._buildIdpRequest())}_linkToIdToken(e,t){return aa(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return aa(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function s1(n){return dT(n.auth,new $m(n),n.bypassAuthState)}function o1(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),bk(t,new $m(n),n.bypassAuthState)}async function a1(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),Lk(t,new $m(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e,t,r,s,a=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:a,error:u,type:d}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return s1;case"linkViaPopup":case"linkViaRedirect":return a1;case"reauthViaPopup":case"reauthViaRedirect":return o1;default:ar(this.auth,"internal-error")}}resolve(e){ai(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ai(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1=new Su(2e3,1e4);class ra extends TT{constructor(e,t,r,s,a){super(e,t,s,a),this.provider=r,this.authWindow=null,this.pollId=null,ra.currentPopupAction&&ra.currentPopupAction.cancel(),ra.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){ai(this.filter.length===1,"Popup operations only handle one event");const e=zm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Rr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ra.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,l1.get())};e()}}ra.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1="pendingRedirect",mh=new Map;class c1 extends TT{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=mh.get(this.auth._key());if(!e){try{const r=await h1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}mh.set(this.auth._key(),e)}return this.bypassAuthState||mh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function h1(n,e){const t=p1(e),r=f1(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function d1(n,e){mh.set(n._key(),e)}function f1(n){return ei(n._redirectPersistence)}function p1(n){return ph(u1,n.config.apiKey,n.name)}async function m1(n,e){return await mi(n)._initializationPromise,IT(n,e,!1)}async function IT(n,e,t=!1){if(Tr(n.app))return Promise.reject(ri(n));const r=mi(n),s=i1(r,e),u=await new c1(r,s,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1=10*60*1e3;class _1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!y1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!ST(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Rr(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=g1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bv(e))}saveEventToCache(e){this.cachedEventUids.add(Bv(e)),this.lastProcessedEventTime=Date.now()}}function Bv(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ST({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function y1(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ST(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v1(n,e={}){return pi(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,w1=/^https?/;async function T1(n){if(n.config.emulator)return;const{authorizedDomains:e}=await v1(n);for(const t of e)try{if(I1(t))return}catch{}ar(n,"unauthorized-domain")}function I1(n){const e=qp(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!w1.test(t))return!1;if(E1.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1=new Su(3e4,6e4);function jv(){const n=Ar().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function C1(n){return new Promise((e,t)=>{var r,s,a;function u(){jv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jv(),t(Rr(n,"network-request-failed"))},timeout:S1.get()})}if(!((s=(r=Ar().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=Ar().gapi)===null||a===void 0)&&a.load)u();else{const d=pk("iframefcb");return Ar()[d]=()=>{gapi.load?u():t(Rr(n,"network-request-failed"))},aT(`${fk()}?onload=${d}`).catch(f=>t(f))}}).catch(e=>{throw gh=null,e})}let gh=null;function R1(n){return gh=gh||C1(n),gh}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1=new Su(5e3,15e3),P1="__/auth/iframe",k1="emulator/auth/iframe",N1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},x1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function D1(n){const e=n.config;Ee(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Vm(e,k1):`https://${n.config.authDomain}/${P1}`,r={apiKey:e.apiKey,appName:n.name,v:Zs},s=x1.get(n.config.apiHost);s&&(r.eid=s);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${Aa(r).slice(1)}`}async function O1(n){const e=await R1(n),t=Ar().gapi;return Ee(t,n,"internal-error"),e.open({where:document.body,url:D1(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:N1,dontclear:!0},r=>new Promise(async(s,a)=>{await r.restyle({setHideOnLeave:!1});const u=Rr(n,"network-request-failed"),d=Ar().setTimeout(()=>{a(u)},A1.get());function f(){Ar().clearTimeout(d),s(r)}r.ping(f).then(f,()=>{a(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},b1=500,M1=600,V1="_blank",F1="http://localhost";class zv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function U1(n,e,t,r=b1,s=M1){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const f=Object.assign(Object.assign({},L1),{width:r.toString(),height:s.toString(),top:a,left:u}),m=nn().toLowerCase();t&&(d=eT(m)?V1:t),Jw(m)&&(e=e||F1,f.scrollbars="yes");const v=Object.entries(f).reduce((T,[A,k])=>`${T}${A}=${k},`,"");if(ik(m)&&d!=="_self")return B1(e||"",d),new zv(null);const E=window.open(e||"",d,v);Ee(E,n,"popup-blocked");try{E.focus()}catch{}return new zv(E)}function B1(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1="__/auth/handler",z1="emulator/auth/handler",$1=encodeURIComponent("fac");async function $v(n,e,t,r,s,a){Ee(n.config.authDomain,n,"auth-domain-config-required"),Ee(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Zs,eventId:s};if(e instanceof cT){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",Bp(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,E]of Object.entries({}))u[v]=E}if(e instanceof Ru){const v=e.getScopes().filter(E=>E!=="");v.length>0&&(u.scopes=v.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const f=await n._getAppCheckToken(),m=f?`#${$1}=${encodeURIComponent(f)}`:"";return`${W1(n)}?${Aa(d).slice(1)}${m}`}function W1({config:n}){return n.emulator?Vm(n,z1):`https://${n.authDomain}/${j1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp="webStorageSupport";class H1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_T,this._completeRedirectFn=IT,this._overrideRedirectResult=d1}async _openPopup(e,t,r,s){var a;ai((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await $v(e,t,r,qp(),s);return U1(e,u,zm())}async _openRedirect(e,t,r,s){await this._originValidation(e);const a=await $v(e,t,r,qp(),s);return Kk(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(ai(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await O1(e),r=new _1(e);return t.register("authEvent",s=>(Ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Cp,{type:Cp},s=>{var a;const u=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[Cp];u!==void 0&&t(!!u),ar(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=T1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return sT()||Zw()||Um()}}const q1=H1;var Wv="@firebase/auth",Hv="1.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Q1(n){qs(new rs("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;Ee(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oT(n)},m=new ck(r,s,a,f);return Ek(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),qs(new rs("auth-internal",e=>{const t=mi(e.getProvider("auth").getImmediate());return(r=>new G1(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Cr(Wv,Hv,K1(n)),Cr(Wv,Hv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1=5*60,X1=Lw("authIdTokenMaxAge")||Y1;let qv=null;const J1=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>X1)return;const s=t==null?void 0:t.token;qv!==s&&(qv=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Z1(n=Lm()){const e=fd(n,"auth");if(e.isInitialized())return e.getImmediate();const t=vk(n,{popupRedirectResolver:q1,persistence:[r1,Hk,_T]}),r=Lw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=J1(a.toString());jk(t,u,()=>u(t.currentUser)),Bk(t,d=>u(d))}}const s=xw("auth");return s&&wk(t,`http://${s}`),t}function eN(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}hk({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const a=Rr("internal-error");a.customData=s,t(a)},r.type="text/javascript",r.charset="UTF-8",eN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Q1("Browser");var Gv={};const Kv="@firebase/database",Qv="1.0.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let CT="";function tN(n){CT=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Pt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:ru(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return di(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new nN(e)}}catch{}return new rN},$s=RT("localStorage"),iN=RT("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=new dd("@firebase/database"),sN=function(){let n=1;return function(){return n++}}(),AT=function(n){const e=kA(n),t=new CA;t.update(e);const r=t.digest();return Nm.encodeByteArray(r)},Pu=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Pu.apply(null,r):typeof r=="object"?e+=Pt(r):e+=r,e+=" "}return e};let Gl=null,Yv=!0;const oN=function(n,e){te(!0,"Can't turn on custom loggers persistently."),la.logLevel=De.VERBOSE,Gl=la.log.bind(la)},en=function(...n){if(Yv===!0&&(Yv=!1,Gl===null&&iN.get("logging_enabled")===!0&&oN()),Gl){const e=Pu.apply(null,n);Gl(e)}},ku=function(n){return function(...e){en(n,...e)}},Qp=function(...n){const e="FIREBASE INTERNAL ERROR: "+Pu(...n);la.error(e)},li=function(...n){const e=`FIREBASE FATAL ERROR: ${Pu(...n)}`;throw la.error(e),new Error(e)},yn=function(...n){const e="FIREBASE WARNING: "+Pu(...n);la.warn(e)},aN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&yn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},PT=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},lN=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},da="[MIN_NAME]",Qs="[MAX_NAME]",ka=function(n,e){if(n===e)return 0;if(n===da||e===Qs)return-1;if(e===da||n===Qs)return 1;{const t=Xv(n),r=Xv(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},uN=function(n,e){return n===e?0:n<e?-1:1},Ll=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Pt(e))},Wm=function(n){if(typeof n!="object"||n===null)return Pt(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Pt(e[r]),t+=":",t+=Wm(n[e[r]]);return t+="}",t},kT=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let s=0;s<t;s+=e)s+e>t?r.push(n.substring(s,t)):r.push(n.substring(s,s+e));return r};function vn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const NT=function(n){te(!PT(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let s,a,u,d,f;n===0?(a=0,u=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),r),a=d+r,u=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(a=0,u=Math.round(n/Math.pow(2,1-r-t))));const m=[];for(f=t;f;f-=1)m.push(u%2?1:0),u=Math.floor(u/2);for(f=e;f;f-=1)m.push(a%2?1:0),a=Math.floor(a/2);m.push(s?1:0),m.reverse();const v=m.join("");let E="";for(f=0;f<64;f+=8){let T=parseInt(v.substr(f,8),2).toString(16);T.length===1&&(T="0"+T),E=E+T}return E.toLowerCase()},cN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},hN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function dN(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const fN=new RegExp("^-?(0*)\\d{1,10}$"),pN=-2147483648,mN=2147483647,Xv=function(n){if(fN.test(n)){const e=Number(n);if(e>=pN&&e<=mN)return e}return null},Na=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw yn("Exception was thrown by user callback.",t),e},Math.floor(0))}},gN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Kl=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){yn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(en("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',yn(e)}}class _h{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}_h.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm="5",xT="v",DT="s",OT="r",LT="f",bT=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,MT="ls",VT="p",Yp="ac",FT="websocket",UT="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e,t,r,s,a=!1,u="",d=!1,f=!1){this.secure=t,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=a,this.persistenceKey=u,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=f,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=$s.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&$s.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function vN(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function jT(n,e,t){te(typeof e=="string","typeof type must == string"),te(typeof t=="object","typeof params must == object");let r;if(e===FT)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===UT)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);vN(n)&&(t.ns=n.namespace);const s=[];return vn(t,(a,u)=>{s.push(a+"="+u)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(){this.counters_={}}incrementCounter(e,t=1){di(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return oA(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp={},Ap={};function qm(n){const e=n.toString();return Rp[e]||(Rp[e]=new EN),Rp[e]}function wN(n,e){const t=n.toString();return Ap[t]||(Ap[t]=e()),Ap[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Na(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv="start",IN="close",SN="pLPCommand",CN="pRTLPCB",zT="id",$T="pw",WT="ser",RN="cb",AN="seg",PN="ts",kN="d",NN="dframe",HT=1870,qT=30,xN=HT-qT,DN=25e3,ON=3e4;class ia{constructor(e,t,r,s,a,u,d){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.transportSessionId=u,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ku(e),this.stats_=qm(t),this.urlFn=f=>(this.appCheckToken&&(f[Yp]=this.appCheckToken),jT(t,UT,f))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new TN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ON)),lN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Gm((...a)=>{const[u,d,f,m,v]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===Jv)this.id=d,this.password=f;else if(u===IN)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...a)=>{const[u,d]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(u,d)},()=>{this.onClosed_()},this.urlFn);const r={};r[Jv]="t",r[WT]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[RN]=this.scriptTagHolder.uniqueCallbackIdentifier),r[xT]=Hm,this.transportSessionId&&(r[DT]=this.transportSessionId),this.lastSessionId&&(r[MT]=this.lastSessionId),this.applicationId&&(r[VT]=this.applicationId),this.appCheckToken&&(r[Yp]=this.appCheckToken),typeof location<"u"&&location.hostname&&bT.test(location.hostname)&&(r[OT]=LT);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ia.forceAllow_=!0}static forceDisallow(){ia.forceDisallow_=!0}static isAvailable(){return ia.forceAllow_?!0:!ia.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!cN()&&!hN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Pt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=kw(t),s=kT(r,xN);for(let a=0;a<s.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[NN]="t",r[zT]=e,r[$T]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Pt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Gm{constructor(e,t,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=sN(),window[SN+this.uniqueCallbackIdentifier]=e,window[CN+this.uniqueCallbackIdentifier]=t,this.myIFrame=Gm.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(d){en("frame writing exception"),d.stack&&en(d.stack),en(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||en("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[zT]=this.myID,e[$T]=this.myPW,e[WT]=this.currentSerial;let t=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+qT+r.length<=HT;){const u=this.pendingSegs.shift();r=r+"&"+AN+s+"="+u.seg+"&"+PN+s+"="+u.ts+"&"+kN+s+"="+u.d,s++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(r,Math.floor(DN)),a=()=>{clearTimeout(s),r()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{en("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN=16384,bN=45e3;let Fh=null;typeof MozWebSocket<"u"?Fh=MozWebSocket:typeof WebSocket<"u"&&(Fh=WebSocket);class Ir{constructor(e,t,r,s,a,u,d){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ku(this.connId),this.stats_=qm(t),this.connURL=Ir.connectionURL_(t,u,d,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,s,a){const u={};return u[xT]=Hm,typeof location<"u"&&location.hostname&&bT.test(location.hostname)&&(u[OT]=LT),t&&(u[DT]=t),r&&(u[MT]=r),s&&(u[Yp]=s),a&&(u[VT]=a),jT(e,FT,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,$s.set("previous_websocket_failure",!0);try{let r;gA(),this.mySock=new Fh(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Ir.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Fh!==null&&!Ir.forceDisallow_}static previouslyFailed(){return $s.isInMemoryStorage||$s.get("previous_websocket_failure")===!0}markConnectionHealthy(){$s.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=ru(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(te(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Pt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=kT(t,LN);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(bN))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ir.responsesRequiredToBeHealthy=2;Ir.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{static get ALL_TRANSPORTS(){return[ia,Ir]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Ir.isAvailable();let r=t&&!Ir.previouslyFailed();if(e.webSocketOnly&&(t||yn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Ir];else{const s=this.transports_=[];for(const a of au.ALL_TRANSPORTS)a&&a.isAvailable()&&s.push(a);au.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}au.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN=6e4,VN=5e3,FN=10*1024,UN=100*1024,Pp="t",Zv="d",BN="s",eE="r",jN="e",tE="o",nE="a",rE="n",iE="p",zN="h";class $N{constructor(e,t,r,s,a,u,d,f,m,v){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=a,this.onMessage_=u,this.onReady_=d,this.onDisconnect_=f,this.onKill_=m,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ku("c:"+this.id+":"),this.transportManager_=new au(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Kl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>UN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>FN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Pp in e){const t=e[Pp];t===nE?this.upgradeIfSecondaryHealthy_():t===eE?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===tE&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ll("t",e),r=Ll("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:iE,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:nE,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:rE,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ll("t",e),r=Ll("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ll(Pp,e);if(Zv in e){const r=e[Zv];if(t===zN){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===rE){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===BN?this.onConnectionShutdown_(r):t===eE?this.onReset_(r):t===jN?Qp("Server Error: "+r):t===tE?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Qp("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Hm!==r&&yn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),Kl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(MN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Kl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(VN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:iE,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&($s.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{put(e,t,r,s){}merge(e,t,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e){this.allowedEvents_=e,this.listeners_={},te(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const s=this.getInitialEvent(e);s&&t.apply(r,s)}off(e,t,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let a=0;a<s.length;a++)if(s[a].callback===t&&(!r||r===s[a].context)){s.splice(a,1);return}}validateEventType_(e){te(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh extends KT{static getInstance(){return new Uh}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!xm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return te(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE=32,oE=768;class Ze{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function $e(){return new Ze("")}function Le(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function is(n){return n.pieces_.length-n.pieceNum_}function rt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Ze(n.pieces_,e)}function QT(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function WN(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function YT(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function XT(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Ze(e,0)}function kt(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof Ze)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&t.push(r[s])}return new Ze(t,0)}function Oe(n){return n.pieceNum_>=n.pieces_.length}function ln(n,e){const t=Le(n),r=Le(e);if(t===null)return e;if(t===r)return ln(rt(n),rt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function JT(n,e){if(is(n)!==is(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function nr(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(is(n)>is(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class HN{constructor(e,t){this.errorPrefix_=t,this.parts_=YT(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=hd(this.parts_[r]);ZT(this)}}function qN(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=hd(e),ZT(n)}function GN(n){const e=n.parts_.pop();n.byteLength_-=hd(e),n.parts_.length>0&&(n.byteLength_-=1)}function ZT(n){if(n.byteLength_>oE)throw new Error(n.errorPrefix_+"has a key path longer than "+oE+" bytes ("+n.byteLength_+").");if(n.parts_.length>sE)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+sE+") or object contains a cycle "+zs(n))}function zs(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km extends KT{static getInstance(){return new Km}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return te(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl=1e3,KN=60*5*1e3,aE=30*1e3,QN=1.3,YN=3e4,XN="server_kill",lE=3;class ii extends GT{constructor(e,t,r,s,a,u,d,f){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=a,this.authTokenProvider_=u,this.appCheckTokenProvider_=d,this.authOverride_=f,this.id=ii.nextPersistentConnectionId_++,this.log_=ku("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=bl,this.maxReconnectDelay_=KN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,f)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Km.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Uh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const s=++this.requestNumber_,a={r:s,a:e,b:t};this.log_(Pt(a)),te(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const t=new cd,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const d=u.d;u.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,r,s){this.initConnection_();const a=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+a),this.listens.has(u)||this.listens.set(u,new Map),te(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),te(!this.listens.get(u).has(a),"listen() called twice for same path/queryId.");const d={onComplete:s,hashFn:t,query:e,tag:r};this.listens.get(u).set(a,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+r+" for "+s);const a={p:r},u="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(u,a,d=>{const f=d.d,m=d.s;ii.warnOnListenWarnings_(f,t),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",d),m!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(m,f))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&di(e,"w")){const r=ha(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();yn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||SA(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=aE)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=IA(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,s=>{const a=s.s,u=s.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),te(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,t)}sendUnlisten_(e,t,r,s){this.log_("Unlisten on "+e+" for "+t);const a={p:e},u="n";s&&(a.q=r,a.t=s),this.sendRequest(u,a)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,s){const a={p:t,d:r};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,u=>{s&&setTimeout(()=>{s(u.s,u.d)},Math.floor(0))})}put(e,t,r,s){this.putInternal("p",e,t,r,s)}merge(e,t,r,s){this.putInternal("m",e,t,r,s)}putInternal(e,t,r,s,a){this.initConnection_();const u={p:t,d:r};a!==void 0&&(u.h=a),this.outstandingPuts_.push({action:e,request:u,onComplete:s}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const a=r.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Pt(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Qp("Unrecognized action received from server: "+Pt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){te(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=bl,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=bl,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>YN&&(this.reconnectDelay_=bl),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*QN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+ii.nextConnectionId_++,a=this.lastSessionId;let u=!1,d=null;const f=function(){d?d.close():(u=!0,r())},m=function(E){te(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(E)};this.realtime_={close:f,sendRequest:m};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[E,T]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);u?en("getToken() completed but was canceled"):(en("getToken() completed. Creating connection."),this.authToken_=E&&E.accessToken,this.appCheckToken_=T&&T.token,d=new $N(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,A=>{yn(A+" ("+this.repoInfo_.toString()+")"),this.interrupt(XN)},a))}catch(E){this.log_("Failed to get token: "+E),u||(this.repoInfo_.nodeAdmin&&yn(E),f())}}}interrupt(e){en("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){en("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Bp(this.interruptReasons_)&&(this.reconnectDelay_=bl,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(a=>Wm(a)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const r=new Ze(e).toString();let s;if(this.listens.has(r)){const a=this.listens.get(r);s=a.get(t),a.delete(t),a.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,t){en("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=lE&&(this.reconnectDelay_=aE,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){en("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=lE&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+CT.replace(/\./g,"-")]=1,xm()?e["framework.cordova"]=1:Mw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Uh.getInstance().currentlyOnline();return Bp(this.interruptReasons_)&&e}}ii.nextPersistentConnectionId_=0;ii.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ne(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new Ne(da,e),s=new Ne(da,t);return this.compare(r,s)!==0}minPost(){return Ne.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ih;class eI extends _d{static get __EMPTY_NODE(){return ih}static set __EMPTY_NODE(e){ih=e}compare(e,t){return ka(e.name,t.name)}isDefinedOn(e){throw Ra("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ne.MIN}maxPost(){return new Ne(Qs,ih)}makePost(e,t){return te(typeof e=="string","KeyIndex indexValue must always be a string."),new Ne(e,ih)}toString(){return".key"}}const ua=new eI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sh=class{constructor(e,t,r,s,a=null){this.isReverse_=s,this.resultGenerator_=a,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?r(e.key,t):1,s&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},An=class jl{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??jl.RED,this.left=s??Sr.EMPTY_NODE,this.right=a??Sr.EMPTY_NODE}copy(e,t,r,s,a){return new jl(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return a<0?s=s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Sr.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,s;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return Sr.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,jl.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,jl.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};An.RED=!0;An.BLACK=!1;class JN{copy(e,t,r,s,a){return this}insert(e,t,r){return new An(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Sr=class yh{constructor(e,t=yh.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new yh(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,An.BLACK,null,null))}remove(e){return new yh(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,An.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,s=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new sh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new sh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new sh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new sh(this.root_,null,this.comparator_,!0,e)}};Sr.EMPTY_NODE=new JN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZN(n,e){return ka(n.name,e.name)}function Qm(n,e){return ka(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xp;function ex(n){Xp=n}const tI=function(n){return typeof n=="number"?"number:"+NT(n):"string:"+n},nI=function(n){if(n.isLeafNode()){const e=n.val();te(typeof e=="string"||typeof e=="number"||typeof e=="object"&&di(e,".sv"),"Priority must be a string or number.")}else te(n===Xp||n.isEmpty(),"priority of unexpected type.");te(n===Xp||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uE;class Ft{static set __childrenNodeConstructor(e){uE=e}static get __childrenNodeConstructor(){return uE}constructor(e,t=Ft.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,te(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),nI(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ft(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ft.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Oe(e)?this:Le(e)===".priority"?this.priorityNode_:Ft.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ft.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Le(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(te(r!==".priority"||is(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ft.__childrenNodeConstructor.EMPTY_NODE.updateChild(rt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+tI(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=NT(this.value_):e+=this.value_,this.lazyHash_=AT(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ft.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ft.__childrenNodeConstructor?-1:(te(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,s=Ft.VALUE_TYPE_ORDER.indexOf(t),a=Ft.VALUE_TYPE_ORDER.indexOf(r);return te(s>=0,"Unknown leaf type: "+t),te(a>=0,"Unknown leaf type: "+r),s===a?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ft.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rI,iI;function tx(n){rI=n}function nx(n){iI=n}class rx extends _d{compare(e,t){const r=e.node.getPriority(),s=t.node.getPriority(),a=r.compareTo(s);return a===0?ka(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ne.MIN}maxPost(){return new Ne(Qs,new Ft("[PRIORITY-POST]",iI))}makePost(e,t){const r=rI(e);return new Ne(t,new Ft("[PRIORITY-POST]",r))}toString(){return".priority"}}const mt=new rx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix=Math.log(2);class sx{constructor(e){const t=a=>parseInt(Math.log(a)/ix,10),r=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Bh=function(n,e,t,r){n.sort(e);const s=function(f,m){const v=m-f;let E,T;if(v===0)return null;if(v===1)return E=n[f],T=t?t(E):E,new An(T,E.node,An.BLACK,null,null);{const A=parseInt(v/2,10)+f,k=s(f,A),M=s(A+1,m);return E=n[A],T=t?t(E):E,new An(T,E.node,An.BLACK,k,M)}},a=function(f){let m=null,v=null,E=n.length;const T=function(k,M){const L=E-k,H=E;E-=k;const G=s(L+1,H),ie=n[L],de=t?t(ie):ie;A(new An(de,ie.node,M,null,G))},A=function(k){m?(m.left=k,m=k):(v=k,m=k)};for(let k=0;k<f.count;++k){const M=f.nextBitIsOne(),L=Math.pow(2,f.count-(k+1));M?T(L,An.BLACK):(T(L,An.BLACK),T(L,An.RED))}return v},u=new sx(n.length),d=a(u);return new Sr(r||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kp;const Ml={};class ti{static get Default(){return te(mt,"ChildrenNode.ts has not been loaded"),kp=kp||new ti({".priority":Ml},{".priority":mt}),kp}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=ha(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Sr?t:null}hasIndex(e){return di(this.indexSet_,e.toString())}addIndex(e,t){te(e!==ua,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const a=t.getIterator(Ne.Wrap);let u=a.getNext();for(;u;)s=s||e.isDefinedOn(u.node),r.push(u),u=a.getNext();let d;s?d=Bh(r,e.getCompare()):d=Ml;const f=e.toString(),m=Object.assign({},this.indexSet_);m[f]=e;const v=Object.assign({},this.indexes_);return v[f]=d,new ti(v,m)}addToIndexes(e,t){const r=kh(this.indexes_,(s,a)=>{const u=ha(this.indexSet_,a);if(te(u,"Missing index implementation for "+a),s===Ml)if(u.isDefinedOn(e.node)){const d=[],f=t.getIterator(Ne.Wrap);let m=f.getNext();for(;m;)m.name!==e.name&&d.push(m),m=f.getNext();return d.push(e),Bh(d,u.getCompare())}else return Ml;else{const d=t.get(e.name);let f=s;return d&&(f=f.remove(new Ne(e.name,d))),f.insert(e,e.node)}});return new ti(r,this.indexSet_)}removeFromIndexes(e,t){const r=kh(this.indexes_,s=>{if(s===Ml)return s;{const a=t.get(e.name);return a?s.remove(new Ne(e.name,a)):s}});return new ti(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vl;class ve{static get EMPTY_NODE(){return Vl||(Vl=new ve(new Sr(Qm),null,ti.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&nI(this.priorityNode_),this.children_.isEmpty()&&te(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Vl}updatePriority(e){return this.children_.isEmpty()?this:new ve(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Vl:t}}getChild(e){const t=Le(e);return t===null?this:this.getImmediateChild(t).getChild(rt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(te(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new Ne(e,t);let s,a;t.isEmpty()?(s=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(r,this.children_));const u=s.isEmpty()?Vl:this.priorityNode_;return new ve(s,u,a)}}updateChild(e,t){const r=Le(e);if(r===null)return t;{te(Le(e)!==".priority"||is(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(rt(e),t);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,s=0,a=!0;if(this.forEachChild(mt,(u,d)=>{t[u]=d.val(e),r++,a&&ve.INTEGER_REGEXP_.test(u)?s=Math.max(s,Number(u)):a=!1}),!e&&a&&s<2*r){const u=[];for(const d in t)u[d]=t[d];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+tI(this.getPriority().val())+":"),this.forEachChild(mt,(t,r)=>{const s=r.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":AT(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const s=this.resolveIndex_(r);if(s){const a=s.getPredecessorKey(new Ne(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ne(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ne(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Ne.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)<0;)s.getNext(),a=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Ne.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)>0;)s.getNext(),a=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Nu?-1:0}withIndex(e){if(e===ua||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ve(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ua||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(mt),s=t.getIterator(mt);let a=r.getNext(),u=s.getNext();for(;a&&u;){if(a.name!==u.name||!a.node.equals(u.node))return!1;a=r.getNext(),u=s.getNext()}return a===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===ua?null:this.indexMap_.get(e.toString())}}ve.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ox extends ve{constructor(){super(new Sr(Qm),ve.EMPTY_NODE,ti.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ve.EMPTY_NODE}isEmpty(){return!1}}const Nu=new ox;Object.defineProperties(Ne,{MIN:{value:new Ne(da,ve.EMPTY_NODE)},MAX:{value:new Ne(Qs,Nu)}});eI.__EMPTY_NODE=ve.EMPTY_NODE;Ft.__childrenNodeConstructor=ve;ex(Nu);nx(Nu);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ax=!0;function Bt(n,e=null){if(n===null)return ve.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),te(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Ft(t,Bt(e))}if(!(n instanceof Array)&&ax){const t=[];let r=!1;if(vn(n,(u,d)=>{if(u.substring(0,1)!=="."){const f=Bt(d);f.isEmpty()||(r=r||!f.getPriority().isEmpty(),t.push(new Ne(u,f)))}}),t.length===0)return ve.EMPTY_NODE;const a=Bh(t,ZN,u=>u.name,Qm);if(r){const u=Bh(t,mt.getCompare());return new ve(a,Bt(e),new ti({".priority":u},{".priority":mt}))}else return new ve(a,Bt(e),ti.Default)}else{let t=ve.EMPTY_NODE;return vn(n,(r,s)=>{if(di(n,r)&&r.substring(0,1)!=="."){const a=Bt(s);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(r,a))}}),t.updatePriority(Bt(e))}}tx(Bt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx extends _d{constructor(e){super(),this.indexPath_=e,te(!Oe(e)&&Le(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),s=this.extractChild(t.node),a=r.compareTo(s);return a===0?ka(e.name,t.name):a}makePost(e,t){const r=Bt(e),s=ve.EMPTY_NODE.updateChild(this.indexPath_,r);return new Ne(t,s)}maxPost(){const e=ve.EMPTY_NODE.updateChild(this.indexPath_,Nu);return new Ne(Qs,e)}toString(){return YT(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux extends _d{compare(e,t){const r=e.node.compareTo(t.node);return r===0?ka(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ne.MIN}maxPost(){return Ne.MAX}makePost(e,t){const r=Bt(e);return new Ne(t,r)}toString(){return".value"}}const cx=new ux;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(n){return{type:"value",snapshotNode:n}}function fa(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function lu(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function uu(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function hx(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e){this.index_=e}updateChild(e,t,r,s,a,u){te(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(s).equals(r.getChild(s))&&d.isEmpty()===r.isEmpty()||(u!=null&&(r.isEmpty()?e.hasChild(t)?u.trackChildChange(lu(t,d)):te(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?u.trackChildChange(fa(t,r)):u.trackChildChange(uu(t,r,d))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(mt,(s,a)=>{t.hasChild(s)||r.trackChildChange(lu(s,a))}),t.isLeafNode()||t.forEachChild(mt,(s,a)=>{if(e.hasChild(s)){const u=e.getImmediateChild(s);u.equals(a)||r.trackChildChange(uu(s,a,u))}else r.trackChildChange(fa(s,a))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ve.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e){this.indexedFilter_=new Ym(e.getIndex()),this.index_=e.getIndex(),this.startPost_=cu.getStartPost_(e),this.endPost_=cu.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,s,a,u){return this.matches(new Ne(t,r))||(r=ve.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,s,a,u)}updateFullNode(e,t,r){t.isLeafNode()&&(t=ve.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(ve.EMPTY_NODE);const a=this;return t.forEachChild(mt,(u,d)=>{a.matches(new Ne(u,d))||(s=s.updateImmediateChild(u,ve.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new cu(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,s,a,u){return this.rangedFilter_.matches(new Ne(t,r))||(r=ve.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,s,a,u):this.fullLimitUpdateChild_(e,t,r,a,u)}updateFullNode(e,t,r){let s;if(t.isLeafNode()||t.isEmpty())s=ve.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=ve.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;a.hasNext()&&u<this.limit_;){const d=a.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))s=s.updateImmediateChild(d.name,d.node),u++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(ve.EMPTY_NODE);let a;this.reverse_?a=s.getReverseIterator(this.index_):a=s.getIterator(this.index_);let u=0;for(;a.hasNext();){const d=a.getNext();u<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?u++:s=s.updateImmediateChild(d.name,ve.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,s,a){let u;if(this.reverse_){const E=this.index_.getCompare();u=(T,A)=>E(A,T)}else u=this.index_.getCompare();const d=e;te(d.numChildren()===this.limit_,"");const f=new Ne(t,r),m=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),v=this.rangedFilter_.matches(f);if(d.hasChild(t)){const E=d.getImmediateChild(t);let T=s.getChildAfterChild(this.index_,m,this.reverse_);for(;T!=null&&(T.name===t||d.hasChild(T.name));)T=s.getChildAfterChild(this.index_,T,this.reverse_);const A=T==null?1:u(T,f);if(v&&!r.isEmpty()&&A>=0)return a!=null&&a.trackChildChange(uu(t,r,E)),d.updateImmediateChild(t,r);{a!=null&&a.trackChildChange(lu(t,E));const M=d.updateImmediateChild(t,ve.EMPTY_NODE);return T!=null&&this.rangedFilter_.matches(T)?(a!=null&&a.trackChildChange(fa(T.name,T.node)),M.updateImmediateChild(T.name,T.node)):M}}else return r.isEmpty()?e:v&&u(m,f)>=0?(a!=null&&(a.trackChildChange(lu(m.name,m.node)),a.trackChildChange(fa(t,r))),d.updateImmediateChild(t,r).updateImmediateChild(m.name,ve.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=mt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return te(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return te(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:da}hasEnd(){return this.endSet_}getIndexEndValue(){return te(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return te(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Qs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return te(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===mt}copy(){const e=new Xm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function fx(n){return n.loadsAllData()?new Ym(n.getIndex()):n.hasLimit()?new dx(n):new cu(n)}function cE(n){const e={};if(n.isDefault())return e;let t;if(n.index_===mt?t="$priority":n.index_===cx?t="$value":n.index_===ua?t="$key":(te(n.index_ instanceof lx,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Pt(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Pt(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Pt(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Pt(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Pt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function hE(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==mt&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh extends GT{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(te(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=ku("p:rest:"),this.listens_={}}listen(e,t,r,s){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const u=jh.getListenId_(e,r),d={};this.listens_[u]=d;const f=cE(e._queryParams);this.restRequest_(a+".json",f,(m,v)=>{let E=v;if(m===404&&(E=null,m=null),m===null&&this.onDataUpdate_(a,E,!1,r),ha(this.listens_,u)===d){let T;m?m===401?T="permission_denied":T="rest_error:"+m:T="ok",s(T,null)}})}unlisten(e,t){const r=jh.getListenId_(e,t);delete this.listens_[r]}get(e){const t=cE(e._queryParams),r=e._path.toString(),s=new cd;return this.restRequest_(r+".json",t,(a,u)=>{let d=u;a===404&&(d=null,a=null),a===null?(this.onDataUpdate_(r,d,!1,null),s.resolve(d)):s.reject(new Error(d))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,a])=>{s&&s.accessToken&&(t.auth=s.accessToken),a&&a.token&&(t.ac=a.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Aa(t);this.log_("Sending REST request for "+u);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(r&&d.readyState===4){this.log_("REST Response for "+u+" received. status:",d.status,"response:",d.responseText);let f=null;if(d.status>=200&&d.status<300){try{f=ru(d.responseText)}catch{yn("Failed to parse JSON response for "+u+": "+d.responseText)}r(null,f)}else d.status!==401&&d.status!==404&&yn("Got unsuccessful REST response for "+u+" Status: "+d.status),r(d.status);r=null}},d.open("GET",u,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(){this.rootNode_=ve.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(){return{value:null,children:new Map}}function oI(n,e,t){if(Oe(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Le(e);n.children.has(r)||n.children.set(r,zh());const s=n.children.get(r);e=rt(e),oI(s,e,t)}}function Jp(n,e,t){n.value!==null?t(e,n.value):mx(n,(r,s)=>{const a=new Ze(e.toString()+"/"+r);Jp(s,a,t)})}function mx(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&vn(this.last_,(r,s)=>{t[r]=t[r]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE=10*1e3,_x=30*1e3,yx=5*60*1e3;class vx{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new gx(e);const r=dE+(_x-dE)*Math.random();Kl(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;vn(e,(s,a)=>{a>0&&di(this.statsToReport_,s)&&(t[s]=a,r=!0)}),r&&this.server_.reportStats(t),Kl(this.reportStats_.bind(this),Math.floor(Math.random()*2*yx))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rr;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(rr||(rr={}));function aI(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Jm(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Zm(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=rr.ACK_USER_WRITE,this.source=aI()}operationForChild(e){if(Oe(this.path)){if(this.affectedTree.value!=null)return te(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ze(e));return new $h($e(),t,this.revert)}}else return te(Le(this.path)===e,"operationForChild called for unrelated child."),new $h(rt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,t){this.source=e,this.path=t,this.type=rr.LISTEN_COMPLETE}operationForChild(e){return Oe(this.path)?new hu(this.source,$e()):new hu(this.source,rt(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=rr.OVERWRITE}operationForChild(e){return Oe(this.path)?new Ys(this.source,$e(),this.snap.getImmediateChild(e)):new Ys(this.source,rt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=rr.MERGE}operationForChild(e){if(Oe(this.path)){const t=this.children.subtree(new Ze(e));return t.isEmpty()?null:t.value?new Ys(this.source,$e(),t.value):new du(this.source,$e(),t)}else return te(Le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new du(this.source,rt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Oe(e))return this.isFullyInitialized()&&!this.filtered_;const t=Le(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function wx(n,e,t,r){const s=[],a=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&a.push(hx(u.childName,u.snapshotNode))}),Fl(n,s,"child_removed",e,r,t),Fl(n,s,"child_added",e,r,t),Fl(n,s,"child_moved",a,r,t),Fl(n,s,"child_changed",e,r,t),Fl(n,s,"value",e,r,t),s}function Fl(n,e,t,r,s,a){const u=r.filter(d=>d.type===t);u.sort((d,f)=>Ix(n,d,f)),u.forEach(d=>{const f=Tx(n,d,a);s.forEach(m=>{m.respondsTo(d.type)&&e.push(m.createEvent(f,n.query_))})})}function Tx(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Ix(n,e,t){if(e.childName==null||t.childName==null)throw Ra("Should only compare child_ events.");const r=new Ne(e.childName,e.snapshotNode),s=new Ne(t.childName,t.snapshotNode);return n.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(n,e){return{eventCache:n,serverCache:e}}function Ql(n,e,t,r){return yd(new ss(e,t,r),n.serverCache)}function lI(n,e,t,r){return yd(n.eventCache,new ss(e,t,r))}function Wh(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Xs(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Np;const Sx=()=>(Np||(Np=new Sr(uN)),Np);class ot{static fromObject(e){let t=new ot(null);return vn(e,(r,s)=>{t=t.set(new Ze(r),s)}),t}constructor(e,t=Sx()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:$e(),value:this.value};if(Oe(e))return null;{const r=Le(e),s=this.children.get(r);if(s!==null){const a=s.findRootMostMatchingPathAndValue(rt(e),t);return a!=null?{path:kt(new Ze(r),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Oe(e))return this;{const t=Le(e),r=this.children.get(t);return r!==null?r.subtree(rt(e)):new ot(null)}}set(e,t){if(Oe(e))return new ot(t,this.children);{const r=Le(e),a=(this.children.get(r)||new ot(null)).set(rt(e),t),u=this.children.insert(r,a);return new ot(this.value,u)}}remove(e){if(Oe(e))return this.children.isEmpty()?new ot(null):new ot(null,this.children);{const t=Le(e),r=this.children.get(t);if(r){const s=r.remove(rt(e));let a;return s.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,s),this.value===null&&a.isEmpty()?new ot(null):new ot(this.value,a)}else return this}}get(e){if(Oe(e))return this.value;{const t=Le(e),r=this.children.get(t);return r?r.get(rt(e)):null}}setTree(e,t){if(Oe(e))return t;{const r=Le(e),a=(this.children.get(r)||new ot(null)).setTree(rt(e),t);let u;return a.isEmpty()?u=this.children.remove(r):u=this.children.insert(r,a),new ot(this.value,u)}}fold(e){return this.fold_($e(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((s,a)=>{r[s]=a.fold_(kt(e,s),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,$e(),t)}findOnPath_(e,t,r){const s=this.value?r(t,this.value):!1;if(s)return s;if(Oe(e))return null;{const a=Le(e),u=this.children.get(a);return u?u.findOnPath_(rt(e),kt(t,a),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,$e(),t)}foreachOnPath_(e,t,r){if(Oe(e))return this;{this.value&&r(t,this.value);const s=Le(e),a=this.children.get(s);return a?a.foreachOnPath_(rt(e),kt(t,s),r):new ot(null)}}foreach(e){this.foreach_($e(),e)}foreach_(e,t){this.children.inorderTraversal((r,s)=>{s.foreach_(kt(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this.writeTree_=e}static empty(){return new sr(new ot(null))}}function Yl(n,e,t){if(Oe(e))return new sr(new ot(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let a=r.value;const u=ln(s,e);return a=a.updateChild(u,t),new sr(n.writeTree_.set(s,a))}else{const s=new ot(t),a=n.writeTree_.setTree(e,s);return new sr(a)}}}function fE(n,e,t){let r=n;return vn(t,(s,a)=>{r=Yl(r,kt(e,s),a)}),r}function pE(n,e){if(Oe(e))return sr.empty();{const t=n.writeTree_.setTree(e,new ot(null));return new sr(t)}}function Zp(n,e){return eo(n,e)!=null}function eo(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ln(t.path,e)):null}function mE(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(mt,(r,s)=>{e.push(new Ne(r,s))}):n.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Ne(r,s.value))}),e}function Yi(n,e){if(Oe(e))return n;{const t=eo(n,e);return t!=null?new sr(new ot(t)):new sr(n.writeTree_.subtree(e))}}function em(n){return n.writeTree_.isEmpty()}function pa(n,e){return uI($e(),n.writeTree_,e)}function uI(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((s,a)=>{s===".priority"?(te(a.value!==null,"Priority writes must always be leaf nodes"),r=a.value):t=uI(kt(n,s),a,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(kt(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(n,e){return fI(e,n)}function Cx(n,e,t,r,s){te(r>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:s}),s&&(n.visibleWrites=Yl(n.visibleWrites,e,t)),n.lastWriteId=r}function Rx(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function Ax(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);te(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let s=r.visible,a=!1,u=n.allWrites.length-1;for(;s&&u>=0;){const d=n.allWrites[u];d.visible&&(u>=t&&Px(d,r.path)?s=!1:nr(r.path,d.path)&&(a=!0)),u--}if(s){if(a)return kx(n),!0;if(r.snap)n.visibleWrites=pE(n.visibleWrites,r.path);else{const d=r.children;vn(d,f=>{n.visibleWrites=pE(n.visibleWrites,kt(r.path,f))})}return!0}else return!1}function Px(n,e){if(n.snap)return nr(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&nr(kt(n.path,t),e))return!0;return!1}function kx(n){n.visibleWrites=cI(n.allWrites,Nx,$e()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Nx(n){return n.visible}function cI(n,e,t){let r=sr.empty();for(let s=0;s<n.length;++s){const a=n[s];if(e(a)){const u=a.path;let d;if(a.snap)nr(t,u)?(d=ln(t,u),r=Yl(r,d,a.snap)):nr(u,t)&&(d=ln(u,t),r=Yl(r,$e(),a.snap.getChild(d)));else if(a.children){if(nr(t,u))d=ln(t,u),r=fE(r,d,a.children);else if(nr(u,t))if(d=ln(u,t),Oe(d))r=fE(r,$e(),a.children);else{const f=ha(a.children,Le(d));if(f){const m=f.getChild(rt(d));r=Yl(r,$e(),m)}}}else throw Ra("WriteRecord should have .snap or .children")}}return r}function hI(n,e,t,r,s){if(!r&&!s){const a=eo(n.visibleWrites,e);if(a!=null)return a;{const u=Yi(n.visibleWrites,e);if(em(u))return t;if(t==null&&!Zp(u,$e()))return null;{const d=t||ve.EMPTY_NODE;return pa(u,d)}}}else{const a=Yi(n.visibleWrites,e);if(!s&&em(a))return t;if(!s&&t==null&&!Zp(a,$e()))return null;{const u=function(m){return(m.visible||s)&&(!r||!~r.indexOf(m.writeId))&&(nr(m.path,e)||nr(e,m.path))},d=cI(n.allWrites,u,e),f=t||ve.EMPTY_NODE;return pa(d,f)}}}function xx(n,e,t){let r=ve.EMPTY_NODE;const s=eo(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(mt,(a,u)=>{r=r.updateImmediateChild(a,u)}),r;if(t){const a=Yi(n.visibleWrites,e);return t.forEachChild(mt,(u,d)=>{const f=pa(Yi(a,new Ze(u)),d);r=r.updateImmediateChild(u,f)}),mE(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}else{const a=Yi(n.visibleWrites,e);return mE(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}}function Dx(n,e,t,r,s){te(r||s,"Either existingEventSnap or existingServerSnap must exist");const a=kt(e,t);if(Zp(n.visibleWrites,a))return null;{const u=Yi(n.visibleWrites,a);return em(u)?s.getChild(t):pa(u,s.getChild(t))}}function Ox(n,e,t,r){const s=kt(e,t),a=eo(n.visibleWrites,s);if(a!=null)return a;if(r.isCompleteForChild(t)){const u=Yi(n.visibleWrites,s);return pa(u,r.getNode().getImmediateChild(t))}else return null}function Lx(n,e){return eo(n.visibleWrites,e)}function bx(n,e,t,r,s,a,u){let d;const f=Yi(n.visibleWrites,e),m=eo(f,$e());if(m!=null)d=m;else if(t!=null)d=pa(f,t);else return[];if(d=d.withIndex(u),!d.isEmpty()&&!d.isLeafNode()){const v=[],E=u.getCompare(),T=a?d.getReverseIteratorFrom(r,u):d.getIteratorFrom(r,u);let A=T.getNext();for(;A&&v.length<s;)E(A,r)!==0&&v.push(A),A=T.getNext();return v}else return[]}function Mx(){return{visibleWrites:sr.empty(),allWrites:[],lastWriteId:-1}}function Hh(n,e,t,r){return hI(n.writeTree,n.treePath,e,t,r)}function eg(n,e){return xx(n.writeTree,n.treePath,e)}function gE(n,e,t,r){return Dx(n.writeTree,n.treePath,e,t,r)}function qh(n,e){return Lx(n.writeTree,kt(n.treePath,e))}function Vx(n,e,t,r,s,a){return bx(n.writeTree,n.treePath,e,t,r,s,a)}function tg(n,e,t){return Ox(n.writeTree,n.treePath,e,t)}function dI(n,e){return fI(kt(n.treePath,e),n.writeTree)}function fI(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;te(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),te(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const a=s.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(r,uu(r,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(r,lu(r,s.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(r,fa(r,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(r,uu(r,e.snapshotNode,s.oldSnap));else throw Ra("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const pI=new Ux;class ng{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ss(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return tg(this.writes_,e,r)}}getChildAfterChild(e,t,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Xs(this.viewCache_),a=Vx(this.writes_,s,t,1,r,e);return a.length===0?null:a[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bx(n){return{filter:n}}function jx(n,e){te(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),te(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function zx(n,e,t,r,s){const a=new Fx;let u,d;if(t.type===rr.OVERWRITE){const m=t;m.source.fromUser?u=tm(n,e,m.path,m.snap,r,s,a):(te(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered()&&!Oe(m.path),u=Gh(n,e,m.path,m.snap,r,s,d,a))}else if(t.type===rr.MERGE){const m=t;m.source.fromUser?u=Wx(n,e,m.path,m.children,r,s,a):(te(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered(),u=nm(n,e,m.path,m.children,r,s,d,a))}else if(t.type===rr.ACK_USER_WRITE){const m=t;m.revert?u=Gx(n,e,m.path,r,s,a):u=Hx(n,e,m.path,m.affectedTree,r,s,a)}else if(t.type===rr.LISTEN_COMPLETE)u=qx(n,e,t.path,r,a);else throw Ra("Unknown operation type: "+t.type);const f=a.getChanges();return $x(e,u,f),{viewCache:u,changes:f}}function $x(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=Wh(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&t.push(sI(Wh(e)))}}function mI(n,e,t,r,s,a){const u=e.eventCache;if(qh(r,t)!=null)return e;{let d,f;if(Oe(t))if(te(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=Xs(e),v=m instanceof ve?m:ve.EMPTY_NODE,E=eg(r,v);d=n.filter.updateFullNode(e.eventCache.getNode(),E,a)}else{const m=Hh(r,Xs(e));d=n.filter.updateFullNode(e.eventCache.getNode(),m,a)}else{const m=Le(t);if(m===".priority"){te(is(t)===1,"Can't have a priority with additional path components");const v=u.getNode();f=e.serverCache.getNode();const E=gE(r,t,v,f);E!=null?d=n.filter.updatePriority(v,E):d=u.getNode()}else{const v=rt(t);let E;if(u.isCompleteForChild(m)){f=e.serverCache.getNode();const T=gE(r,t,u.getNode(),f);T!=null?E=u.getNode().getImmediateChild(m).updateChild(v,T):E=u.getNode().getImmediateChild(m)}else E=tg(r,m,e.serverCache);E!=null?d=n.filter.updateChild(u.getNode(),m,E,v,s,a):d=u.getNode()}}return Ql(e,d,u.isFullyInitialized()||Oe(t),n.filter.filtersNodes())}}function Gh(n,e,t,r,s,a,u,d){const f=e.serverCache;let m;const v=u?n.filter:n.filter.getIndexedFilter();if(Oe(t))m=v.updateFullNode(f.getNode(),r,null);else if(v.filtersNodes()&&!f.isFiltered()){const A=f.getNode().updateChild(t,r);m=v.updateFullNode(f.getNode(),A,null)}else{const A=Le(t);if(!f.isCompleteForPath(t)&&is(t)>1)return e;const k=rt(t),L=f.getNode().getImmediateChild(A).updateChild(k,r);A===".priority"?m=v.updatePriority(f.getNode(),L):m=v.updateChild(f.getNode(),A,L,k,pI,null)}const E=lI(e,m,f.isFullyInitialized()||Oe(t),v.filtersNodes()),T=new ng(s,E,a);return mI(n,E,t,s,T,d)}function tm(n,e,t,r,s,a,u){const d=e.eventCache;let f,m;const v=new ng(s,e,a);if(Oe(t))m=n.filter.updateFullNode(e.eventCache.getNode(),r,u),f=Ql(e,m,!0,n.filter.filtersNodes());else{const E=Le(t);if(E===".priority")m=n.filter.updatePriority(e.eventCache.getNode(),r),f=Ql(e,m,d.isFullyInitialized(),d.isFiltered());else{const T=rt(t),A=d.getNode().getImmediateChild(E);let k;if(Oe(T))k=r;else{const M=v.getCompleteChild(E);M!=null?QT(T)===".priority"&&M.getChild(XT(T)).isEmpty()?k=M:k=M.updateChild(T,r):k=ve.EMPTY_NODE}if(A.equals(k))f=e;else{const M=n.filter.updateChild(d.getNode(),E,k,T,v,u);f=Ql(e,M,d.isFullyInitialized(),n.filter.filtersNodes())}}}return f}function _E(n,e){return n.eventCache.isCompleteForChild(e)}function Wx(n,e,t,r,s,a,u){let d=e;return r.foreach((f,m)=>{const v=kt(t,f);_E(e,Le(v))&&(d=tm(n,d,v,m,s,a,u))}),r.foreach((f,m)=>{const v=kt(t,f);_E(e,Le(v))||(d=tm(n,d,v,m,s,a,u))}),d}function yE(n,e,t){return t.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function nm(n,e,t,r,s,a,u,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let f=e,m;Oe(t)?m=r:m=new ot(null).setTree(t,r);const v=e.serverCache.getNode();return m.children.inorderTraversal((E,T)=>{if(v.hasChild(E)){const A=e.serverCache.getNode().getImmediateChild(E),k=yE(n,A,T);f=Gh(n,f,new Ze(E),k,s,a,u,d)}}),m.children.inorderTraversal((E,T)=>{const A=!e.serverCache.isCompleteForChild(E)&&T.value===null;if(!v.hasChild(E)&&!A){const k=e.serverCache.getNode().getImmediateChild(E),M=yE(n,k,T);f=Gh(n,f,new Ze(E),M,s,a,u,d)}}),f}function Hx(n,e,t,r,s,a,u){if(qh(s,t)!=null)return e;const d=e.serverCache.isFiltered(),f=e.serverCache;if(r.value!=null){if(Oe(t)&&f.isFullyInitialized()||f.isCompleteForPath(t))return Gh(n,e,t,f.getNode().getChild(t),s,a,d,u);if(Oe(t)){let m=new ot(null);return f.getNode().forEachChild(ua,(v,E)=>{m=m.set(new Ze(v),E)}),nm(n,e,t,m,s,a,d,u)}else return e}else{let m=new ot(null);return r.foreach((v,E)=>{const T=kt(t,v);f.isCompleteForPath(T)&&(m=m.set(v,f.getNode().getChild(T)))}),nm(n,e,t,m,s,a,d,u)}}function qx(n,e,t,r,s){const a=e.serverCache,u=lI(e,a.getNode(),a.isFullyInitialized()||Oe(t),a.isFiltered());return mI(n,u,t,r,pI,s)}function Gx(n,e,t,r,s,a){let u;if(qh(r,t)!=null)return e;{const d=new ng(r,e,s),f=e.eventCache.getNode();let m;if(Oe(t)||Le(t)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=Hh(r,Xs(e));else{const E=e.serverCache.getNode();te(E instanceof ve,"serverChildren would be complete if leaf node"),v=eg(r,E)}v=v,m=n.filter.updateFullNode(f,v,a)}else{const v=Le(t);let E=tg(r,v,e.serverCache);E==null&&e.serverCache.isCompleteForChild(v)&&(E=f.getImmediateChild(v)),E!=null?m=n.filter.updateChild(f,v,E,rt(t),d,a):e.eventCache.getNode().hasChild(v)?m=n.filter.updateChild(f,v,ve.EMPTY_NODE,rt(t),d,a):m=f,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=Hh(r,Xs(e)),u.isLeafNode()&&(m=n.filter.updateFullNode(m,u,a)))}return u=e.serverCache.isFullyInitialized()||qh(r,$e())!=null,Ql(e,m,u,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new Ym(r.getIndex()),a=fx(r);this.processor_=Bx(a);const u=t.serverCache,d=t.eventCache,f=s.updateFullNode(ve.EMPTY_NODE,u.getNode(),null),m=a.updateFullNode(ve.EMPTY_NODE,d.getNode(),null),v=new ss(f,u.isFullyInitialized(),s.filtersNodes()),E=new ss(m,d.isFullyInitialized(),a.filtersNodes());this.viewCache_=yd(E,v),this.eventGenerator_=new Ex(this.query_)}get query(){return this.query_}}function Qx(n){return n.viewCache_.serverCache.getNode()}function Yx(n){return Wh(n.viewCache_)}function Xx(n,e){const t=Xs(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Oe(e)&&!t.getImmediateChild(Le(e)).isEmpty())?t.getChild(e):null}function vE(n){return n.eventRegistrations_.length===0}function Jx(n,e){n.eventRegistrations_.push(e)}function EE(n,e,t){const r=[];if(t){te(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(a=>{const u=a.createCancelEvent(t,s);u&&r.push(u)})}if(e){let s=[];for(let a=0;a<n.eventRegistrations_.length;++a){const u=n.eventRegistrations_[a];if(!u.matches(e))s.push(u);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(a+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return r}function wE(n,e,t,r){e.type===rr.MERGE&&e.source.queryId!==null&&(te(Xs(n.viewCache_),"We should always have a full cache before handling merges"),te(Wh(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,a=zx(n.processor_,s,e,t,r);return jx(n.processor_,a.viewCache),te(a.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,gI(n,a.changes,a.viewCache.eventCache.getNode(),null)}function Zx(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(mt,(a,u)=>{r.push(fa(a,u))}),t.isFullyInitialized()&&r.push(sI(t.getNode())),gI(n,r,t.getNode(),e)}function gI(n,e,t,r){const s=r?[r]:n.eventRegistrations_;return wx(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kh;class _I{constructor(){this.views=new Map}}function eD(n){te(!Kh,"__referenceConstructor has already been defined"),Kh=n}function tD(){return te(Kh,"Reference.ts has not been loaded"),Kh}function nD(n){return n.views.size===0}function rg(n,e,t,r){const s=e.source.queryId;if(s!==null){const a=n.views.get(s);return te(a!=null,"SyncTree gave us an op for an invalid query."),wE(a,e,t,r)}else{let a=[];for(const u of n.views.values())a=a.concat(wE(u,e,t,r));return a}}function yI(n,e,t,r,s){const a=e._queryIdentifier,u=n.views.get(a);if(!u){let d=Hh(t,s?r:null),f=!1;d?f=!0:r instanceof ve?(d=eg(t,r),f=!1):(d=ve.EMPTY_NODE,f=!1);const m=yd(new ss(d,f,!1),new ss(r,s,!1));return new Kx(e,m)}return u}function rD(n,e,t,r,s,a){const u=yI(n,e,r,s,a);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,u),Jx(u,t),Zx(u,t)}function iD(n,e,t,r){const s=e._queryIdentifier,a=[];let u=[];const d=os(n);if(s==="default")for(const[f,m]of n.views.entries())u=u.concat(EE(m,t,r)),vE(m)&&(n.views.delete(f),m.query._queryParams.loadsAllData()||a.push(m.query));else{const f=n.views.get(s);f&&(u=u.concat(EE(f,t,r)),vE(f)&&(n.views.delete(s),f.query._queryParams.loadsAllData()||a.push(f.query)))}return d&&!os(n)&&a.push(new(tD())(e._repo,e._path)),{removed:a,events:u}}function vI(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Xi(n,e){let t=null;for(const r of n.views.values())t=t||Xx(r,e);return t}function EI(n,e){if(e._queryParams.loadsAllData())return Ed(n);{const r=e._queryIdentifier;return n.views.get(r)}}function wI(n,e){return EI(n,e)!=null}function os(n){return Ed(n)!=null}function Ed(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qh;function sD(n){te(!Qh,"__referenceConstructor has already been defined"),Qh=n}function oD(){return te(Qh,"Reference.ts has not been loaded"),Qh}let aD=1;class TE{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ot(null),this.pendingWriteTree_=Mx(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function TI(n,e,t,r,s){return Cx(n.pendingWriteTree_,e,t,r,s),s?Du(n,new Ys(aI(),e,t)):[]}function Ws(n,e,t=!1){const r=Rx(n.pendingWriteTree_,e);if(Ax(n.pendingWriteTree_,e)){let a=new ot(null);return r.snap!=null?a=a.set($e(),!0):vn(r.children,u=>{a=a.set(new Ze(u),!0)}),Du(n,new $h(r.path,a,t))}else return[]}function xu(n,e,t){return Du(n,new Ys(Jm(),e,t))}function lD(n,e,t){const r=ot.fromObject(t);return Du(n,new du(Jm(),e,r))}function uD(n,e){return Du(n,new hu(Jm(),e))}function cD(n,e,t){const r=sg(n,t);if(r){const s=og(r),a=s.path,u=s.queryId,d=ln(a,e),f=new hu(Zm(u),d);return ag(n,a,f)}else return[]}function II(n,e,t,r,s=!1){const a=e._path,u=n.syncPointTree_.get(a);let d=[];if(u&&(e._queryIdentifier==="default"||wI(u,e))){const f=iD(u,e,t,r);nD(u)&&(n.syncPointTree_=n.syncPointTree_.remove(a));const m=f.removed;if(d=f.events,!s){const v=m.findIndex(T=>T._queryParams.loadsAllData())!==-1,E=n.syncPointTree_.findOnPath(a,(T,A)=>os(A));if(v&&!E){const T=n.syncPointTree_.subtree(a);if(!T.isEmpty()){const A=pD(T);for(let k=0;k<A.length;++k){const M=A[k],L=M.query,H=AI(n,M);n.listenProvider_.startListening(Xl(L),fu(n,L),H.hashFn,H.onComplete)}}}!E&&m.length>0&&!r&&(v?n.listenProvider_.stopListening(Xl(e),null):m.forEach(T=>{const A=n.queryToTagMap.get(wd(T));n.listenProvider_.stopListening(Xl(T),A)}))}mD(n,m)}return d}function SI(n,e,t,r){const s=sg(n,r);if(s!=null){const a=og(s),u=a.path,d=a.queryId,f=ln(u,e),m=new Ys(Zm(d),f,t);return ag(n,u,m)}else return[]}function hD(n,e,t,r){const s=sg(n,r);if(s){const a=og(s),u=a.path,d=a.queryId,f=ln(u,e),m=ot.fromObject(t),v=new du(Zm(d),f,m);return ag(n,u,v)}else return[]}function dD(n,e,t,r=!1){const s=e._path;let a=null,u=!1;n.syncPointTree_.foreachOnPath(s,(T,A)=>{const k=ln(T,s);a=a||Xi(A,k),u=u||os(A)});let d=n.syncPointTree_.get(s);d?(u=u||os(d),a=a||Xi(d,$e())):(d=new _I,n.syncPointTree_=n.syncPointTree_.set(s,d));let f;a!=null?f=!0:(f=!1,a=ve.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((A,k)=>{const M=Xi(k,$e());M&&(a=a.updateImmediateChild(A,M))}));const m=wI(d,e);if(!m&&!e._queryParams.loadsAllData()){const T=wd(e);te(!n.queryToTagMap.has(T),"View does not exist, but we have a tag");const A=gD();n.queryToTagMap.set(T,A),n.tagToQueryMap.set(A,T)}const v=vd(n.pendingWriteTree_,s);let E=rD(d,e,t,v,a,f);if(!m&&!u&&!r){const T=EI(d,e);E=E.concat(_D(n,e,T))}return E}function ig(n,e,t){const s=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(u,d)=>{const f=ln(u,e),m=Xi(d,f);if(m)return m});return hI(s,e,a,t,!0)}function fD(n,e){const t=e._path;let r=null;n.syncPointTree_.foreachOnPath(t,(m,v)=>{const E=ln(m,t);r=r||Xi(v,E)});let s=n.syncPointTree_.get(t);s?r=r||Xi(s,$e()):(s=new _I,n.syncPointTree_=n.syncPointTree_.set(t,s));const a=r!=null,u=a?new ss(r,!0,!1):null,d=vd(n.pendingWriteTree_,e._path),f=yI(s,e,d,a?u.getNode():ve.EMPTY_NODE,a);return Yx(f)}function Du(n,e){return CI(e,n.syncPointTree_,null,vd(n.pendingWriteTree_,$e()))}function CI(n,e,t,r){if(Oe(n.path))return RI(n,e,t,r);{const s=e.get($e());t==null&&s!=null&&(t=Xi(s,$e()));let a=[];const u=Le(n.path),d=n.operationForChild(u),f=e.children.get(u);if(f&&d){const m=t?t.getImmediateChild(u):null,v=dI(r,u);a=a.concat(CI(d,f,m,v))}return s&&(a=a.concat(rg(s,n,r,t))),a}}function RI(n,e,t,r){const s=e.get($e());t==null&&s!=null&&(t=Xi(s,$e()));let a=[];return e.children.inorderTraversal((u,d)=>{const f=t?t.getImmediateChild(u):null,m=dI(r,u),v=n.operationForChild(u);v&&(a=a.concat(RI(v,d,f,m)))}),s&&(a=a.concat(rg(s,n,r,t))),a}function AI(n,e){const t=e.query,r=fu(n,t);return{hashFn:()=>(Qx(e)||ve.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?cD(n,t._path,r):uD(n,t._path);{const a=dN(s,t);return II(n,t,null,a)}}}}function fu(n,e){const t=wd(e);return n.queryToTagMap.get(t)}function wd(n){return n._path.toString()+"$"+n._queryIdentifier}function sg(n,e){return n.tagToQueryMap.get(e)}function og(n){const e=n.indexOf("$");return te(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Ze(n.substr(0,e))}}function ag(n,e,t){const r=n.syncPointTree_.get(e);te(r,"Missing sync point for query tag that we're tracking");const s=vd(n.pendingWriteTree_,e);return rg(r,t,s,null)}function pD(n){return n.fold((e,t,r)=>{if(t&&os(t))return[Ed(t)];{let s=[];return t&&(s=vI(t)),vn(r,(a,u)=>{s=s.concat(u)}),s}})}function Xl(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(oD())(n._repo,n._path):n}function mD(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const s=wd(r),a=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(a)}}}function gD(){return aD++}function _D(n,e,t){const r=e._path,s=fu(n,e),a=AI(n,t),u=n.listenProvider_.startListening(Xl(e),s,a.hashFn,a.onComplete),d=n.syncPointTree_.subtree(r);if(s)te(!os(d.value),"If we're adding a query, it shouldn't be shadowed");else{const f=d.fold((m,v,E)=>{if(!Oe(m)&&v&&os(v))return[Ed(v).query];{let T=[];return v&&(T=T.concat(vI(v).map(A=>A.query))),vn(E,(A,k)=>{T=T.concat(k)}),T}});for(let m=0;m<f.length;++m){const v=f[m];n.listenProvider_.stopListening(Xl(v),fu(n,v))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new lg(t)}node(){return this.node_}}class ug{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=kt(this.path_,e);return new ug(this.syncTree_,t)}node(){return ig(this.syncTree_,this.path_)}}const yD=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},IE=function(n,e,t){if(!n||typeof n!="object")return n;if(te(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return vD(n[".sv"],e,t);if(typeof n[".sv"]=="object")return ED(n[".sv"],e);te(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},vD=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:te(!1,"Unexpected server value: "+n)}},ED=function(n,e,t){n.hasOwnProperty("increment")||te(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&te(!1,"Unexpected increment value: "+r);const s=e.node();if(te(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const u=s.getValue();return typeof u!="number"?r:u+r},wD=function(n,e,t,r){return cg(e,new ug(t,n),r)},PI=function(n,e,t){return cg(n,new lg(e),t)};function cg(n,e,t){const r=n.getPriority().val(),s=IE(r,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const u=n,d=IE(u.getValue(),e,t);return d!==u.getValue()||s!==u.getPriority().val()?new Ft(d,Bt(s)):n}else{const u=n;return a=u,s!==u.getPriority().val()&&(a=a.updatePriority(new Ft(s))),u.forEachChild(mt,(d,f)=>{const m=cg(f,e.getImmediateChild(d),t);m!==f&&(a=a.updateImmediateChild(d,m))}),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function dg(n,e){let t=e instanceof Ze?e:new Ze(e),r=n,s=Le(t);for(;s!==null;){const a=ha(r.node.children,s)||{children:{},childCount:0};r=new hg(s,r,a),t=rt(t),s=Le(t)}return r}function xa(n){return n.node.value}function kI(n,e){n.node.value=e,rm(n)}function NI(n){return n.node.childCount>0}function TD(n){return xa(n)===void 0&&!NI(n)}function Td(n,e){vn(n.node.children,(t,r)=>{e(new hg(t,n,r))})}function xI(n,e,t,r){t&&e(n),Td(n,s=>{xI(s,e,!0)})}function ID(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ou(n){return new Ze(n.parent===null?n.name:Ou(n.parent)+"/"+n.name)}function rm(n){n.parent!==null&&SD(n.parent,n.name,n)}function SD(n,e,t){const r=TD(t),s=di(n.node.children,e);r&&s?(delete n.node.children[e],n.node.childCount--,rm(n)):!r&&!s&&(n.node.children[e]=t.node,n.node.childCount++,rm(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD=/[\[\].#$\/\u0000-\u001F\u007F]/,RD=/[\[\].#$\u0000-\u001F\u007F]/,xp=10*1024*1024,DI=function(n){return typeof n=="string"&&n.length!==0&&!CD.test(n)},OI=function(n){return typeof n=="string"&&n.length!==0&&!RD.test(n)},AD=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),OI(n)},PD=function(n,e,t,r){fg(Dm(n,"value"),e,t)},fg=function(n,e,t){const r=t instanceof Ze?new HN(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+zs(r));if(typeof e=="function")throw new Error(n+"contains a function "+zs(r)+" with contents = "+e.toString());if(PT(e))throw new Error(n+"contains "+e.toString()+" "+zs(r));if(typeof e=="string"&&e.length>xp/3&&hd(e)>xp)throw new Error(n+"contains a string greater than "+xp+" utf8 bytes "+zs(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,a=!1;if(vn(e,(u,d)=>{if(u===".value")s=!0;else if(u!==".priority"&&u!==".sv"&&(a=!0,!DI(u)))throw new Error(n+" contains an invalid key ("+u+") "+zs(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);qN(r,u),fg(n,d,r),GN(r)}),s&&a)throw new Error(n+' contains ".value" child '+zs(r)+" in addition to actual children.")}},LI=function(n,e,t,r){if(!OI(t))throw new Error(Dm(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},kD=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),LI(n,e,t)},bI=function(n,e){if(Le(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},ND=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!DI(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!AD(t))throw new Error(Dm(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function MI(n,e){let t=null;for(let r=0;r<e.length;r++){const s=e[r],a=s.getPath();t!==null&&!JT(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(s)}t&&n.eventLists_.push(t)}function Nr(n,e,t){MI(n,t),DD(n,r=>nr(r,e)||nr(e,r))}function DD(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const s=n.eventLists_[r];if(s){const a=s.path;e(a)?(OD(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function OD(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();Gl&&en("event: "+t.toString()),Na(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD="repo_interrupt",bD=25;class MD{constructor(e,t,r,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new xD,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=zh(),this.transactionQueueTree_=new hg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function VD(n,e,t){if(n.stats_=qm(n.repoInfo_),n.forceRestClient_||gN())n.server_=new jh(n.repoInfo_,(r,s,a,u)=>{SE(n,r,s,a,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>CE(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Pt(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new ii(n.repoInfo_,e,(r,s,a,u)=>{SE(n,r,s,a,u)},r=>{CE(n,r)},r=>{UD(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=wN(n.repoInfo_,()=>new vx(n.stats_,n.server_)),n.infoData_=new px,n.infoSyncTree_=new TE({startListening:(r,s,a,u)=>{let d=[];const f=n.infoData_.getNode(r._path);return f.isEmpty()||(d=xu(n.infoSyncTree_,r._path,f),setTimeout(()=>{u("ok")},0)),d},stopListening:()=>{}}),mg(n,"connected",!1),n.serverSyncTree_=new TE({startListening:(r,s,a,u)=>(n.server_.listen(r,a,s,(d,f)=>{const m=u(d,f);Nr(n.eventQueue_,r._path,m)}),[]),stopListening:(r,s)=>{n.server_.unlisten(r,s)}})}function FD(n){const t=n.infoData_.getNode(new Ze(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function pg(n){return yD({timestamp:FD(n)})}function SE(n,e,t,r,s){n.dataUpdateCount++;const a=new Ze(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(s)if(r){const f=kh(t,m=>Bt(m));u=hD(n.serverSyncTree_,a,f,s)}else{const f=Bt(t);u=SI(n.serverSyncTree_,a,f,s)}else if(r){const f=kh(t,m=>Bt(m));u=lD(n.serverSyncTree_,a,f)}else{const f=Bt(t);u=xu(n.serverSyncTree_,a,f)}let d=a;u.length>0&&(d=Sd(n,a)),Nr(n.eventQueue_,d,u)}function CE(n,e){mg(n,"connected",e),e===!1&&zD(n)}function UD(n,e){vn(e,(t,r)=>{mg(n,t,r)})}function mg(n,e,t){const r=new Ze("/.info/"+e),s=Bt(t);n.infoData_.updateSnapshot(r,s);const a=xu(n.infoSyncTree_,r,s);Nr(n.eventQueue_,r,a)}function VI(n){return n.nextWriteId_++}function BD(n,e,t){const r=fD(n.serverSyncTree_,e);return r!=null?Promise.resolve(r):n.server_.get(e).then(s=>{const a=Bt(s).withIndex(e._queryParams.getIndex());dD(n.serverSyncTree_,e,t,!0);let u;if(e._queryParams.loadsAllData())u=xu(n.serverSyncTree_,e._path,a);else{const d=fu(n.serverSyncTree_,e);u=SI(n.serverSyncTree_,e._path,a,d)}return Nr(n.eventQueue_,e._path,u),II(n.serverSyncTree_,e,t,null,!0),a},s=>(Id(n,"get for query "+Pt(e)+" failed: "+s),Promise.reject(new Error(s))))}function jD(n,e,t,r,s){Id(n,"set",{path:e.toString(),value:t,priority:r});const a=pg(n),u=Bt(t,r),d=ig(n.serverSyncTree_,e),f=PI(u,d,a),m=VI(n),v=TI(n.serverSyncTree_,e,f,m,!0);MI(n.eventQueue_,v),n.server_.put(e.toString(),u.val(!0),(T,A)=>{const k=T==="ok";k||yn("set at "+e+" failed: "+T);const M=Ws(n.serverSyncTree_,m,!k);Nr(n.eventQueue_,e,M),WD(n,s,T,A)});const E=zI(n,e);Sd(n,E),Nr(n.eventQueue_,E,[])}function zD(n){Id(n,"onDisconnectEvents");const e=pg(n),t=zh();Jp(n.onDisconnect_,$e(),(s,a)=>{const u=wD(s,a,n.serverSyncTree_,e);oI(t,s,u)});let r=[];Jp(t,$e(),(s,a)=>{r=r.concat(xu(n.serverSyncTree_,s,a));const u=zI(n,s);Sd(n,u)}),n.onDisconnect_=zh(),Nr(n.eventQueue_,$e(),r)}function $D(n){n.persistentConnection_&&n.persistentConnection_.interrupt(LD)}function Id(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),en(t,...e)}function WD(n,e,t,r){e&&Na(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let a=s;r&&(a+=": "+r);const u=new Error(a);u.code=s,e(u)}})}function FI(n,e,t){return ig(n.serverSyncTree_,e,t)||ve.EMPTY_NODE}function gg(n,e=n.transactionQueueTree_){if(e||Cd(n,e),xa(e)){const t=BI(n,e);te(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&HD(n,Ou(e),t)}else NI(e)&&Td(e,t=>{gg(n,t)})}function HD(n,e,t){const r=t.map(m=>m.currentWriteId),s=FI(n,e,r);let a=s;const u=s.hash();for(let m=0;m<t.length;m++){const v=t[m];te(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const E=ln(e,v.path);a=a.updateChild(E,v.currentOutputSnapshotRaw)}const d=a.val(!0),f=e;n.server_.put(f.toString(),d,m=>{Id(n,"transaction put response",{path:f.toString(),status:m});let v=[];if(m==="ok"){const E=[];for(let T=0;T<t.length;T++)t[T].status=2,v=v.concat(Ws(n.serverSyncTree_,t[T].currentWriteId)),t[T].onComplete&&E.push(()=>t[T].onComplete(null,!0,t[T].currentOutputSnapshotResolved)),t[T].unwatcher();Cd(n,dg(n.transactionQueueTree_,e)),gg(n,n.transactionQueueTree_),Nr(n.eventQueue_,e,v);for(let T=0;T<E.length;T++)Na(E[T])}else{if(m==="datastale")for(let E=0;E<t.length;E++)t[E].status===3?t[E].status=4:t[E].status=0;else{yn("transaction at "+f.toString()+" failed: "+m);for(let E=0;E<t.length;E++)t[E].status=4,t[E].abortReason=m}Sd(n,e)}},u)}function Sd(n,e){const t=UI(n,e),r=Ou(t),s=BI(n,t);return qD(n,s,r),r}function qD(n,e,t){if(e.length===0)return;const r=[];let s=[];const u=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const f=e[d],m=ln(t,f.path);let v=!1,E;if(te(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),f.status===4)v=!0,E=f.abortReason,s=s.concat(Ws(n.serverSyncTree_,f.currentWriteId,!0));else if(f.status===0)if(f.retryCount>=bD)v=!0,E="maxretry",s=s.concat(Ws(n.serverSyncTree_,f.currentWriteId,!0));else{const T=FI(n,f.path,u);f.currentInputSnapshot=T;const A=e[d].update(T.val());if(A!==void 0){fg("transaction failed: Data returned ",A,f.path);let k=Bt(A);typeof A=="object"&&A!=null&&di(A,".priority")||(k=k.updatePriority(T.getPriority()));const L=f.currentWriteId,H=pg(n),G=PI(k,T,H);f.currentOutputSnapshotRaw=k,f.currentOutputSnapshotResolved=G,f.currentWriteId=VI(n),u.splice(u.indexOf(L),1),s=s.concat(TI(n.serverSyncTree_,f.path,G,f.currentWriteId,f.applyLocally)),s=s.concat(Ws(n.serverSyncTree_,L,!0))}else v=!0,E="nodata",s=s.concat(Ws(n.serverSyncTree_,f.currentWriteId,!0))}Nr(n.eventQueue_,t,s),s=[],v&&(e[d].status=2,function(T){setTimeout(T,Math.floor(0))}(e[d].unwatcher),e[d].onComplete&&(E==="nodata"?r.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):r.push(()=>e[d].onComplete(new Error(E),!1,null))))}Cd(n,n.transactionQueueTree_);for(let d=0;d<r.length;d++)Na(r[d]);gg(n,n.transactionQueueTree_)}function UI(n,e){let t,r=n.transactionQueueTree_;for(t=Le(e);t!==null&&xa(r)===void 0;)r=dg(r,t),e=rt(e),t=Le(e);return r}function BI(n,e){const t=[];return jI(n,e,t),t.sort((r,s)=>r.order-s.order),t}function jI(n,e,t){const r=xa(e);if(r)for(let s=0;s<r.length;s++)t.push(r[s]);Td(e,s=>{jI(n,s,t)})}function Cd(n,e){const t=xa(e);if(t){let r=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[r]=t[s],r++);t.length=r,kI(e,t.length>0?t:void 0)}Td(e,r=>{Cd(n,r)})}function zI(n,e){const t=Ou(UI(n,e)),r=dg(n.transactionQueueTree_,e);return ID(r,s=>{Dp(n,s)}),Dp(n,r),xI(r,s=>{Dp(n,s)}),t}function Dp(n,e){const t=xa(e);if(t){const r=[];let s=[],a=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(te(a===u-1,"All SENT items should be at beginning of queue."),a=u,t[u].status=3,t[u].abortReason="set"):(te(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),s=s.concat(Ws(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&r.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));a===-1?kI(e,void 0):t.length=a+1,Nr(n.eventQueue_,Ou(e),s);for(let u=0;u<r.length;u++)Na(r[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GD(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let s=t[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function KD(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):yn(`Invalid query segment '${t}' in query '${n}'`)}return e}const RE=function(n,e){const t=QD(n),r=t.namespace;t.domain==="firebase.com"&&li(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&li("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||aN();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new BT(t.host,t.secure,r,s,e,"",r!==t.subdomain),path:new Ze(t.pathString)}},QD=function(n){let e="",t="",r="",s="",a="",u=!0,d="https",f=443;if(typeof n=="string"){let m=n.indexOf("//");m>=0&&(d=n.substring(0,m-1),n=n.substring(m+2));let v=n.indexOf("/");v===-1&&(v=n.length);let E=n.indexOf("?");E===-1&&(E=n.length),e=n.substring(0,Math.min(v,E)),v<E&&(s=GD(n.substring(v,E)));const T=KD(n.substring(Math.min(n.length,E)));m=e.indexOf(":"),m>=0?(u=d==="https"||d==="wss",f=parseInt(e.substring(m+1),10)):m=e.length;const A=e.slice(0,m);if(A.toLowerCase()==="localhost")t="localhost";else if(A.split(".").length<=2)t=A;else{const k=e.indexOf(".");r=e.substring(0,k).toLowerCase(),t=e.substring(k+1),a=r}"ns"in T&&(a=T.ns)}return{host:e,port:f,domain:t,subdomain:r,secure:u,scheme:d,pathString:s,namespace:a}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(e,t,r,s){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Pt(this.snapshot.exportVal())}}class XD{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return te(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e,t,r,s){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=s}get key(){return Oe(this._path)?null:QT(this._path)}get ref(){return new gi(this._repo,this._path)}get _queryIdentifier(){const e=hE(this._queryParams),t=Wm(e);return t==="{}"?"default":t}get _queryObject(){return hE(this._queryParams)}isEqual(e){if(e=Tt(e),!(e instanceof _g))return!1;const t=this._repo===e._repo,r=JT(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+WN(this._path)}}class gi extends _g{constructor(e,t){super(e,t,new Xm,!1)}get parent(){const e=XT(this._path);return e===null?null:new gi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class pu{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Ze(e),r=im(this.ref,e);return new pu(this._node.getChild(t),r,mt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new pu(s,im(this.ref,r),mt)))}hasChild(e){const t=new Ze(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Op(n,e){return n=Tt(n),n._checkNotDeleted("ref"),e!==void 0?im(n._root,e):n._root}function im(n,e){return n=Tt(n),Le(n._path)===null?kD("child","path",e):LI("child","path",e),new gi(n._repo,kt(n._path,e))}function ZD(n){return bI("remove",n._path),$I(n,null)}function $I(n,e){n=Tt(n),bI("set",n._path),PD("set",e,n._path);const t=new cd;return jD(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function eO(n){n=Tt(n);const e=new JD(()=>{}),t=new yg(e);return BD(n._repo,n,t).then(r=>new pu(r,new gi(n._repo,n._path),n._queryParams.getIndex()))}class yg{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new YD("value",this,new pu(e.snapshotNode,new gi(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new XD(this,e,t):null}matches(e){return e instanceof yg?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}eD(gi);sD(gi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tO="FIREBASE_DATABASE_EMULATOR_HOST",sm={};let nO=!1;function rO(n,e,t,r){n.repoInfo_=new BT(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),r&&(n.authTokenProvider_=r)}function iO(n,e,t,r,s){let a=r||n.options.databaseURL;a===void 0&&(n.options.projectId||li("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),en("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=RE(a,s),d=u.repoInfo,f;typeof process<"u"&&Gv&&(f=Gv[tO]),f?(a=`http://${f}?ns=${d.namespace}`,u=RE(a,s),d=u.repoInfo):u.repoInfo.secure;const m=new yN(n.name,n.options,e);ND("Invalid Firebase Database URL",u),Oe(u.path)||li("Database URL must point to the root of a Firebase Database (not including a child path).");const v=oO(d,n,m,new _N(n.name,t));return new aO(v,n)}function sO(n,e){const t=sm[e];(!t||t[n.key]!==n)&&li(`Database ${e}(${n.repoInfo_}) has already been deleted.`),$D(n),delete t[n.key]}function oO(n,e,t,r){let s=sm[e.name];s||(s={},sm[e.name]=s);let a=s[n.toURLString()];return a&&li("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new MD(n,nO,t,r),s[n.toURLString()]=a,a}class aO{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(VD(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new gi(this._repo,$e())),this._rootInternal}_delete(){return this._rootInternal!==null&&(sO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&li("Cannot call "+e+" on a deleted database.")}}function vh(n=Lm(),e){const t=fd(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=Dw("database");r&&lO(t,...r)}return t}function lO(n,e,t,r={}){n=Tt(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&li("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let a;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&li('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),a=new _h(_h.OWNER);else if(r.mockUserToken){const u=typeof r.mockUserToken=="string"?r.mockUserToken:bw(r.mockUserToken,n.app.options.projectId);a=new _h(u)}rO(s,e,t,a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uO(n){tN(Zs),qs(new rs("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return iO(r,s,a,t)},"PUBLIC").setMultipleInstances(!0)),Cr(Kv,Qv,n),Cr(Kv,Qv,"esm2017")}ii.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ii.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};uO();var AE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ji,WI;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,S){function P(){}P.prototype=S.prototype,D.D=S.prototype,D.prototype=new P,D.prototype.constructor=D,D.C=function(x,b,F){for(var R=Array(arguments.length-2),We=2;We<arguments.length;We++)R[We-2]=arguments[We];return S.prototype[b].apply(x,R)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(D,S,P){P||(P=0);var x=Array(16);if(typeof S=="string")for(var b=0;16>b;++b)x[b]=S.charCodeAt(P++)|S.charCodeAt(P++)<<8|S.charCodeAt(P++)<<16|S.charCodeAt(P++)<<24;else for(b=0;16>b;++b)x[b]=S[P++]|S[P++]<<8|S[P++]<<16|S[P++]<<24;S=D.g[0],P=D.g[1],b=D.g[2];var F=D.g[3],R=S+(F^P&(b^F))+x[0]+3614090360&4294967295;S=P+(R<<7&4294967295|R>>>25),R=F+(b^S&(P^b))+x[1]+3905402710&4294967295,F=S+(R<<12&4294967295|R>>>20),R=b+(P^F&(S^P))+x[2]+606105819&4294967295,b=F+(R<<17&4294967295|R>>>15),R=P+(S^b&(F^S))+x[3]+3250441966&4294967295,P=b+(R<<22&4294967295|R>>>10),R=S+(F^P&(b^F))+x[4]+4118548399&4294967295,S=P+(R<<7&4294967295|R>>>25),R=F+(b^S&(P^b))+x[5]+1200080426&4294967295,F=S+(R<<12&4294967295|R>>>20),R=b+(P^F&(S^P))+x[6]+2821735955&4294967295,b=F+(R<<17&4294967295|R>>>15),R=P+(S^b&(F^S))+x[7]+4249261313&4294967295,P=b+(R<<22&4294967295|R>>>10),R=S+(F^P&(b^F))+x[8]+1770035416&4294967295,S=P+(R<<7&4294967295|R>>>25),R=F+(b^S&(P^b))+x[9]+2336552879&4294967295,F=S+(R<<12&4294967295|R>>>20),R=b+(P^F&(S^P))+x[10]+4294925233&4294967295,b=F+(R<<17&4294967295|R>>>15),R=P+(S^b&(F^S))+x[11]+2304563134&4294967295,P=b+(R<<22&4294967295|R>>>10),R=S+(F^P&(b^F))+x[12]+1804603682&4294967295,S=P+(R<<7&4294967295|R>>>25),R=F+(b^S&(P^b))+x[13]+4254626195&4294967295,F=S+(R<<12&4294967295|R>>>20),R=b+(P^F&(S^P))+x[14]+2792965006&4294967295,b=F+(R<<17&4294967295|R>>>15),R=P+(S^b&(F^S))+x[15]+1236535329&4294967295,P=b+(R<<22&4294967295|R>>>10),R=S+(b^F&(P^b))+x[1]+4129170786&4294967295,S=P+(R<<5&4294967295|R>>>27),R=F+(P^b&(S^P))+x[6]+3225465664&4294967295,F=S+(R<<9&4294967295|R>>>23),R=b+(S^P&(F^S))+x[11]+643717713&4294967295,b=F+(R<<14&4294967295|R>>>18),R=P+(F^S&(b^F))+x[0]+3921069994&4294967295,P=b+(R<<20&4294967295|R>>>12),R=S+(b^F&(P^b))+x[5]+3593408605&4294967295,S=P+(R<<5&4294967295|R>>>27),R=F+(P^b&(S^P))+x[10]+38016083&4294967295,F=S+(R<<9&4294967295|R>>>23),R=b+(S^P&(F^S))+x[15]+3634488961&4294967295,b=F+(R<<14&4294967295|R>>>18),R=P+(F^S&(b^F))+x[4]+3889429448&4294967295,P=b+(R<<20&4294967295|R>>>12),R=S+(b^F&(P^b))+x[9]+568446438&4294967295,S=P+(R<<5&4294967295|R>>>27),R=F+(P^b&(S^P))+x[14]+3275163606&4294967295,F=S+(R<<9&4294967295|R>>>23),R=b+(S^P&(F^S))+x[3]+4107603335&4294967295,b=F+(R<<14&4294967295|R>>>18),R=P+(F^S&(b^F))+x[8]+1163531501&4294967295,P=b+(R<<20&4294967295|R>>>12),R=S+(b^F&(P^b))+x[13]+2850285829&4294967295,S=P+(R<<5&4294967295|R>>>27),R=F+(P^b&(S^P))+x[2]+4243563512&4294967295,F=S+(R<<9&4294967295|R>>>23),R=b+(S^P&(F^S))+x[7]+1735328473&4294967295,b=F+(R<<14&4294967295|R>>>18),R=P+(F^S&(b^F))+x[12]+2368359562&4294967295,P=b+(R<<20&4294967295|R>>>12),R=S+(P^b^F)+x[5]+4294588738&4294967295,S=P+(R<<4&4294967295|R>>>28),R=F+(S^P^b)+x[8]+2272392833&4294967295,F=S+(R<<11&4294967295|R>>>21),R=b+(F^S^P)+x[11]+1839030562&4294967295,b=F+(R<<16&4294967295|R>>>16),R=P+(b^F^S)+x[14]+4259657740&4294967295,P=b+(R<<23&4294967295|R>>>9),R=S+(P^b^F)+x[1]+2763975236&4294967295,S=P+(R<<4&4294967295|R>>>28),R=F+(S^P^b)+x[4]+1272893353&4294967295,F=S+(R<<11&4294967295|R>>>21),R=b+(F^S^P)+x[7]+4139469664&4294967295,b=F+(R<<16&4294967295|R>>>16),R=P+(b^F^S)+x[10]+3200236656&4294967295,P=b+(R<<23&4294967295|R>>>9),R=S+(P^b^F)+x[13]+681279174&4294967295,S=P+(R<<4&4294967295|R>>>28),R=F+(S^P^b)+x[0]+3936430074&4294967295,F=S+(R<<11&4294967295|R>>>21),R=b+(F^S^P)+x[3]+3572445317&4294967295,b=F+(R<<16&4294967295|R>>>16),R=P+(b^F^S)+x[6]+76029189&4294967295,P=b+(R<<23&4294967295|R>>>9),R=S+(P^b^F)+x[9]+3654602809&4294967295,S=P+(R<<4&4294967295|R>>>28),R=F+(S^P^b)+x[12]+3873151461&4294967295,F=S+(R<<11&4294967295|R>>>21),R=b+(F^S^P)+x[15]+530742520&4294967295,b=F+(R<<16&4294967295|R>>>16),R=P+(b^F^S)+x[2]+3299628645&4294967295,P=b+(R<<23&4294967295|R>>>9),R=S+(b^(P|~F))+x[0]+4096336452&4294967295,S=P+(R<<6&4294967295|R>>>26),R=F+(P^(S|~b))+x[7]+1126891415&4294967295,F=S+(R<<10&4294967295|R>>>22),R=b+(S^(F|~P))+x[14]+2878612391&4294967295,b=F+(R<<15&4294967295|R>>>17),R=P+(F^(b|~S))+x[5]+4237533241&4294967295,P=b+(R<<21&4294967295|R>>>11),R=S+(b^(P|~F))+x[12]+1700485571&4294967295,S=P+(R<<6&4294967295|R>>>26),R=F+(P^(S|~b))+x[3]+2399980690&4294967295,F=S+(R<<10&4294967295|R>>>22),R=b+(S^(F|~P))+x[10]+4293915773&4294967295,b=F+(R<<15&4294967295|R>>>17),R=P+(F^(b|~S))+x[1]+2240044497&4294967295,P=b+(R<<21&4294967295|R>>>11),R=S+(b^(P|~F))+x[8]+1873313359&4294967295,S=P+(R<<6&4294967295|R>>>26),R=F+(P^(S|~b))+x[15]+4264355552&4294967295,F=S+(R<<10&4294967295|R>>>22),R=b+(S^(F|~P))+x[6]+2734768916&4294967295,b=F+(R<<15&4294967295|R>>>17),R=P+(F^(b|~S))+x[13]+1309151649&4294967295,P=b+(R<<21&4294967295|R>>>11),R=S+(b^(P|~F))+x[4]+4149444226&4294967295,S=P+(R<<6&4294967295|R>>>26),R=F+(P^(S|~b))+x[11]+3174756917&4294967295,F=S+(R<<10&4294967295|R>>>22),R=b+(S^(F|~P))+x[2]+718787259&4294967295,b=F+(R<<15&4294967295|R>>>17),R=P+(F^(b|~S))+x[9]+3951481745&4294967295,D.g[0]=D.g[0]+S&4294967295,D.g[1]=D.g[1]+(b+(R<<21&4294967295|R>>>11))&4294967295,D.g[2]=D.g[2]+b&4294967295,D.g[3]=D.g[3]+F&4294967295}r.prototype.u=function(D,S){S===void 0&&(S=D.length);for(var P=S-this.blockSize,x=this.B,b=this.h,F=0;F<S;){if(b==0)for(;F<=P;)s(this,D,F),F+=this.blockSize;if(typeof D=="string"){for(;F<S;)if(x[b++]=D.charCodeAt(F++),b==this.blockSize){s(this,x),b=0;break}}else for(;F<S;)if(x[b++]=D[F++],b==this.blockSize){s(this,x),b=0;break}}this.h=b,this.o+=S},r.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var S=1;S<D.length-8;++S)D[S]=0;var P=8*this.o;for(S=D.length-8;S<D.length;++S)D[S]=P&255,P/=256;for(this.u(D),D=Array(16),S=P=0;4>S;++S)for(var x=0;32>x;x+=8)D[P++]=this.g[S]>>>x&255;return D};function a(D,S){var P=d;return Object.prototype.hasOwnProperty.call(P,D)?P[D]:P[D]=S(D)}function u(D,S){this.h=S;for(var P=[],x=!0,b=D.length-1;0<=b;b--){var F=D[b]|0;x&&F==S||(P[b]=F,x=!1)}this.g=P}var d={};function f(D){return-128<=D&&128>D?a(D,function(S){return new u([S|0],0>S?-1:0)}):new u([D|0],0>D?-1:0)}function m(D){if(isNaN(D)||!isFinite(D))return E;if(0>D)return L(m(-D));for(var S=[],P=1,x=0;D>=P;x++)S[x]=D/P|0,P*=4294967296;return new u(S,0)}function v(D,S){if(D.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(D.charAt(0)=="-")return L(v(D.substring(1),S));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var P=m(Math.pow(S,8)),x=E,b=0;b<D.length;b+=8){var F=Math.min(8,D.length-b),R=parseInt(D.substring(b,b+F),S);8>F?(F=m(Math.pow(S,F)),x=x.j(F).add(m(R))):(x=x.j(P),x=x.add(m(R)))}return x}var E=f(0),T=f(1),A=f(16777216);n=u.prototype,n.m=function(){if(M(this))return-L(this).m();for(var D=0,S=1,P=0;P<this.g.length;P++){var x=this.i(P);D+=(0<=x?x:4294967296+x)*S,S*=4294967296}return D},n.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(k(this))return"0";if(M(this))return"-"+L(this).toString(D);for(var S=m(Math.pow(D,6)),P=this,x="";;){var b=de(P,S).g;P=H(P,b.j(S));var F=((0<P.g.length?P.g[0]:P.h)>>>0).toString(D);if(P=b,k(P))return F+x;for(;6>F.length;)F="0"+F;x=F+x}},n.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function k(D){if(D.h!=0)return!1;for(var S=0;S<D.g.length;S++)if(D.g[S]!=0)return!1;return!0}function M(D){return D.h==-1}n.l=function(D){return D=H(this,D),M(D)?-1:k(D)?0:1};function L(D){for(var S=D.g.length,P=[],x=0;x<S;x++)P[x]=~D.g[x];return new u(P,~D.h).add(T)}n.abs=function(){return M(this)?L(this):this},n.add=function(D){for(var S=Math.max(this.g.length,D.g.length),P=[],x=0,b=0;b<=S;b++){var F=x+(this.i(b)&65535)+(D.i(b)&65535),R=(F>>>16)+(this.i(b)>>>16)+(D.i(b)>>>16);x=R>>>16,F&=65535,R&=65535,P[b]=R<<16|F}return new u(P,P[P.length-1]&-2147483648?-1:0)};function H(D,S){return D.add(L(S))}n.j=function(D){if(k(this)||k(D))return E;if(M(this))return M(D)?L(this).j(L(D)):L(L(this).j(D));if(M(D))return L(this.j(L(D)));if(0>this.l(A)&&0>D.l(A))return m(this.m()*D.m());for(var S=this.g.length+D.g.length,P=[],x=0;x<2*S;x++)P[x]=0;for(x=0;x<this.g.length;x++)for(var b=0;b<D.g.length;b++){var F=this.i(x)>>>16,R=this.i(x)&65535,We=D.i(b)>>>16,Ye=D.i(b)&65535;P[2*x+2*b]+=R*Ye,G(P,2*x+2*b),P[2*x+2*b+1]+=F*Ye,G(P,2*x+2*b+1),P[2*x+2*b+1]+=R*We,G(P,2*x+2*b+1),P[2*x+2*b+2]+=F*We,G(P,2*x+2*b+2)}for(x=0;x<S;x++)P[x]=P[2*x+1]<<16|P[2*x];for(x=S;x<2*S;x++)P[x]=0;return new u(P,0)};function G(D,S){for(;(D[S]&65535)!=D[S];)D[S+1]+=D[S]>>>16,D[S]&=65535,S++}function ie(D,S){this.g=D,this.h=S}function de(D,S){if(k(S))throw Error("division by zero");if(k(D))return new ie(E,E);if(M(D))return S=de(L(D),S),new ie(L(S.g),L(S.h));if(M(S))return S=de(D,L(S)),new ie(L(S.g),S.h);if(30<D.g.length){if(M(D)||M(S))throw Error("slowDivide_ only works with positive integers.");for(var P=T,x=S;0>=x.l(D);)P=Re(P),x=Re(x);var b=Ie(P,1),F=Ie(x,1);for(x=Ie(x,2),P=Ie(P,2);!k(x);){var R=F.add(x);0>=R.l(D)&&(b=b.add(P),F=R),x=Ie(x,1),P=Ie(P,1)}return S=H(D,b.j(S)),new ie(b,S)}for(b=E;0<=D.l(S);){for(P=Math.max(1,Math.floor(D.m()/S.m())),x=Math.ceil(Math.log(P)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),F=m(P),R=F.j(S);M(R)||0<R.l(D);)P-=x,F=m(P),R=F.j(S);k(F)&&(F=T),b=b.add(F),D=H(D,R)}return new ie(b,D)}n.A=function(D){return de(this,D).h},n.and=function(D){for(var S=Math.max(this.g.length,D.g.length),P=[],x=0;x<S;x++)P[x]=this.i(x)&D.i(x);return new u(P,this.h&D.h)},n.or=function(D){for(var S=Math.max(this.g.length,D.g.length),P=[],x=0;x<S;x++)P[x]=this.i(x)|D.i(x);return new u(P,this.h|D.h)},n.xor=function(D){for(var S=Math.max(this.g.length,D.g.length),P=[],x=0;x<S;x++)P[x]=this.i(x)^D.i(x);return new u(P,this.h^D.h)};function Re(D){for(var S=D.g.length+1,P=[],x=0;x<S;x++)P[x]=D.i(x)<<1|D.i(x-1)>>>31;return new u(P,D.h)}function Ie(D,S){var P=S>>5;S%=32;for(var x=D.g.length-P,b=[],F=0;F<x;F++)b[F]=0<S?D.i(F+P)>>>S|D.i(F+P+1)<<32-S:D.i(F+P);return new u(b,D.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,WI=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=v,Ji=u}).apply(typeof AE<"u"?AE:typeof self<"u"?self:typeof window<"u"?window:{});var oh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var HI,zl,qI,Eh,om,GI,KI,QI;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,y){return c==Array.prototype||c==Object.prototype||(c[g]=y.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof oh=="object"&&oh];for(var g=0;g<c.length;++g){var y=c[g];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var r=t(this);function s(c,g){if(g)e:{var y=r;c=c.split(".");for(var I=0;I<c.length-1;I++){var U=c[I];if(!(U in y))break e;y=y[U]}c=c[c.length-1],I=y[c],g=g(I),g!=I&&g!=null&&e(y,c,{configurable:!0,writable:!0,value:g})}}function a(c,g){c instanceof String&&(c+="");var y=0,I=!1,U={next:function(){if(!I&&y<c.length){var W=y++;return{value:g(W,c[W]),done:!1}}return I=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}s("Array.prototype.values",function(c){return c||function(){return a(this,function(g,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function f(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function m(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function v(c,g,y){return c.call.apply(c.bind,arguments)}function E(c,g,y){if(!c)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,I),c.apply(g,U)}}return function(){return c.apply(g,arguments)}}function T(c,g,y){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:E,T.apply(null,arguments)}function A(c,g){var y=Array.prototype.slice.call(arguments,1);return function(){var I=y.slice();return I.push.apply(I,arguments),c.apply(this,I)}}function k(c,g){function y(){}y.prototype=g.prototype,c.aa=g.prototype,c.prototype=new y,c.prototype.constructor=c,c.Qb=function(I,U,W){for(var ne=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)ne[Qe-2]=arguments[Qe];return g.prototype[U].apply(I,ne)}}function M(c){const g=c.length;if(0<g){const y=Array(g);for(let I=0;I<g;I++)y[I]=c[I];return y}return[]}function L(c,g){for(let y=1;y<arguments.length;y++){const I=arguments[y];if(f(I)){const U=c.length||0,W=I.length||0;c.length=U+W;for(let ne=0;ne<W;ne++)c[U+ne]=I[ne]}else c.push(I)}}class H{constructor(g,y){this.i=g,this.j=y,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function G(c){return/^[\s\xa0]*$/.test(c)}function ie(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function de(c){return de[" "](c),c}de[" "]=function(){};var Re=ie().indexOf("Gecko")!=-1&&!(ie().toLowerCase().indexOf("webkit")!=-1&&ie().indexOf("Edge")==-1)&&!(ie().indexOf("Trident")!=-1||ie().indexOf("MSIE")!=-1)&&ie().indexOf("Edge")==-1;function Ie(c,g,y){for(const I in c)g.call(y,c[I],I,c)}function D(c,g){for(const y in c)g.call(void 0,c[y],y,c)}function S(c){const g={};for(const y in c)g[y]=c[y];return g}const P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(c,g){let y,I;for(let U=1;U<arguments.length;U++){I=arguments[U];for(y in I)c[y]=I[y];for(let W=0;W<P.length;W++)y=P[W],Object.prototype.hasOwnProperty.call(I,y)&&(c[y]=I[y])}}function b(c){var g=1;c=c.split(":");const y=[];for(;0<g&&c.length;)y.push(c.shift()),g--;return c.length&&y.push(c.join(":")),y}function F(c){d.setTimeout(()=>{throw c},0)}function R(){var c=pe;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class We{constructor(){this.h=this.g=null}add(g,y){const I=Ye.get();I.set(g,y),this.h?this.h.next=I:this.g=I,this.h=I}}var Ye=new H(()=>new Xe,c=>c.reset());class Xe{constructor(){this.next=this.g=this.h=null}set(g,y){this.h=g,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let xe,re=!1,pe=new We,se=()=>{const c=d.Promise.resolve(void 0);xe=()=>{c.then(V)}};var V=()=>{for(var c;c=R();){try{c.h.call(c.g)}catch(y){F(y)}var g=Ye;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}re=!1};function q(){this.s=this.s,this.C=this.C}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ce(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}ce.prototype.h=function(){this.defaultPrevented=!0};var Ae=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const y=()=>{};d.addEventListener("test",y,g),d.removeEventListener("test",y,g)}catch{}return c}();function Pe(c,g){if(ce.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var y=this.type=c.type,I=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(Re){e:{try{de(g.nodeName);var U=!0;break e}catch{}U=!1}U||(g=null)}}else y=="mouseover"?g=c.fromElement:y=="mouseout"&&(g=c.toElement);this.relatedTarget=g,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Fe[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Pe.aa.h.call(this)}}k(Pe,ce);var Fe={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var He="closure_listenable_"+(1e6*Math.random()|0),qe=0;function et(c,g,y,I,U){this.listener=c,this.proxy=null,this.src=g,this.type=y,this.capture=!!I,this.ha=U,this.key=++qe,this.da=this.fa=!1}function Ot(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Lr(c){this.src=c,this.g={},this.h=0}Lr.prototype.add=function(c,g,y,I,U){var W=c.toString();c=this.g[W],c||(c=this.g[W]=[],this.h++);var ne=_i(c,g,I,U);return-1<ne?(g=c[ne],y||(g.fa=!1)):(g=new et(g,this.src,W,!!I,U),g.fa=y,c.push(g)),g};function so(c,g){var y=g.type;if(y in c.g){var I=c.g[y],U=Array.prototype.indexOf.call(I,g,void 0),W;(W=0<=U)&&Array.prototype.splice.call(I,U,1),W&&(Ot(g),c.g[y].length==0&&(delete c.g[y],c.h--))}}function _i(c,g,y,I){for(var U=0;U<c.length;++U){var W=c[U];if(!W.da&&W.listener==g&&W.capture==!!y&&W.ha==I)return U}return-1}var fs="closure_lm_"+(1e6*Math.random()|0),oo={};function Va(c,g,y,I,U){if(Array.isArray(g)){for(var W=0;W<g.length;W++)Va(c,g[W],y,I,U);return null}return y=Ba(y),c&&c[He]?c.K(g,y,m(I)?!!I.capture:!1,U):Fa(c,g,y,!1,I,U)}function Fa(c,g,y,I,U,W){if(!g)throw Error("Invalid event type");var ne=m(U)?!!U.capture:!!U,Qe=lo(c);if(Qe||(c[fs]=Qe=new Lr(c)),y=Qe.add(g,y,I,ne,W),y.proxy)return y;if(I=Uu(),y.proxy=I,I.src=c,I.listener=y,c.addEventListener)Ae||(U=ne),U===void 0&&(U=!1),c.addEventListener(g.toString(),I,U);else if(c.attachEvent)c.attachEvent(Mr(g.toString()),I);else if(c.addListener&&c.removeListener)c.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Uu(){function c(y){return g.call(c.src,c.listener,y)}const g=Ua;return c}function ao(c,g,y,I,U){if(Array.isArray(g))for(var W=0;W<g.length;W++)ao(c,g[W],y,I,U);else I=m(I)?!!I.capture:!!I,y=Ba(y),c&&c[He]?(c=c.i,g=String(g).toString(),g in c.g&&(W=c.g[g],y=_i(W,y,I,U),-1<y&&(Ot(W[y]),Array.prototype.splice.call(W,y,1),W.length==0&&(delete c.g[g],c.h--)))):c&&(c=lo(c))&&(g=c.g[g.toString()],c=-1,g&&(c=_i(g,y,I,U)),(y=-1<c?g[c]:null)&&br(y))}function br(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[He])so(g.i,c);else{var y=c.type,I=c.proxy;g.removeEventListener?g.removeEventListener(y,I,c.capture):g.detachEvent?g.detachEvent(Mr(y),I):g.addListener&&g.removeListener&&g.removeListener(I),(y=lo(g))?(so(y,c),y.h==0&&(y.src=null,g[fs]=null)):Ot(c)}}}function Mr(c){return c in oo?oo[c]:oo[c]="on"+c}function Ua(c,g){if(c.da)c=!0;else{g=new Pe(g,this);var y=c.listener,I=c.ha||c.src;c.fa&&br(c),c=y.call(I,g)}return c}function lo(c){return c=c[fs],c instanceof Lr?c:null}var uo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ba(c){return typeof c=="function"?c:(c[uo]||(c[uo]=function(g){return c.handleEvent(g)}),c[uo])}function It(){q.call(this),this.i=new Lr(this),this.M=this,this.F=null}k(It,q),It.prototype[He]=!0,It.prototype.removeEventListener=function(c,g,y,I){ao(this,c,g,y,I)};function St(c,g){var y,I=c.F;if(I)for(y=[];I;I=I.F)y.push(I);if(c=c.M,I=g.type||g,typeof g=="string")g=new ce(g,c);else if(g instanceof ce)g.target=g.target||c;else{var U=g;g=new ce(I,c),x(g,U)}if(U=!0,y)for(var W=y.length-1;0<=W;W--){var ne=g.g=y[W];U=Vr(ne,I,!0,g)&&U}if(ne=g.g=c,U=Vr(ne,I,!0,g)&&U,U=Vr(ne,I,!1,g)&&U,y)for(W=0;W<y.length;W++)ne=g.g=y[W],U=Vr(ne,I,!1,g)&&U}It.prototype.N=function(){if(It.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var y=c.g[g],I=0;I<y.length;I++)Ot(y[I]);delete c.g[g],c.h--}}this.F=null},It.prototype.K=function(c,g,y,I){return this.i.add(String(c),g,!1,y,I)},It.prototype.L=function(c,g,y,I){return this.i.add(String(c),g,!0,y,I)};function Vr(c,g,y,I){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var U=!0,W=0;W<g.length;++W){var ne=g[W];if(ne&&!ne.da&&ne.capture==y){var Qe=ne.listener,Ct=ne.ha||ne.src;ne.fa&&so(c.i,ne),U=Qe.call(Ct,I)!==!1&&U}}return U&&!I.defaultPrevented}function ja(c,g,y){if(typeof c=="function")y&&(c=T(c,y));else if(c&&typeof c.handleEvent=="function")c=T(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:d.setTimeout(c,g||0)}function yi(c){c.g=ja(()=>{c.g=null,c.i&&(c.i=!1,yi(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class ps extends q{constructor(g,y){super(),this.m=g,this.l=y,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:yi(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ms(c){q.call(this),this.h=c,this.g={}}k(ms,q);var za=[];function $a(c){Ie(c.g,function(g,y){this.g.hasOwnProperty(y)&&br(g)},c),c.g={}}ms.prototype.N=function(){ms.aa.N.call(this),$a(this)},ms.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Wa=d.JSON.stringify,Ha=d.JSON.parse,qa=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function gs(){}gs.prototype.h=null;function co(c){return c.h||(c.h=c.i())}function ho(){}var kn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ur(){ce.call(this,"d")}k(ur,ce);function fo(){ce.call(this,"c")}k(fo,ce);var cr={},Ga=null;function _s(){return Ga=Ga||new It}cr.La="serverreachability";function Ka(c){ce.call(this,cr.La,c)}k(Ka,ce);function Fr(c){const g=_s();St(g,new Ka(g))}cr.STAT_EVENT="statevent";function Qa(c,g){ce.call(this,cr.STAT_EVENT,c),this.stat=g}k(Qa,ce);function gt(c){const g=_s();St(g,new Qa(g,c))}cr.Ma="timingevent";function po(c,g){ce.call(this,cr.Ma,c),this.size=g}k(po,ce);function jn(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},g)}function ys(){this.g=!0}ys.prototype.xa=function(){this.g=!1};function vs(c,g,y,I,U,W){c.info(function(){if(c.g)if(W)for(var ne="",Qe=W.split("&"),Ct=0;Ct<Qe.length;Ct++){var Ue=Qe[Ct].split("=");if(1<Ue.length){var Lt=Ue[0];Ue=Ue[1];var vt=Lt.split("_");ne=2<=vt.length&&vt[1]=="type"?ne+(Lt+"="+Ue+"&"):ne+(Lt+"=redacted&")}}else ne=null;else ne=W;return"XMLHTTP REQ ("+I+") [attempt "+U+"]: "+g+`
`+y+`
`+ne})}function mo(c,g,y,I,U,W,ne){c.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+U+"]: "+g+`
`+y+`
`+W+" "+ne})}function zn(c,g,y,I){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+Ud(c,y)+(I?" "+I:"")})}function Ya(c,g){c.info(function(){return"TIMEOUT: "+g})}ys.prototype.info=function(){};function Ud(c,g){if(!c.g)return g;if(!g)return null;try{var y=JSON.parse(g);if(y){for(c=0;c<y.length;c++)if(Array.isArray(y[c])){var I=y[c];if(!(2>I.length)){var U=I[1];if(Array.isArray(U)&&!(1>U.length)){var W=U[0];if(W!="noop"&&W!="stop"&&W!="close")for(var ne=1;ne<U.length;ne++)U[ne]=""}}}}return Wa(y)}catch{return g}}var go={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Bu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},$n;function Es(){}k(Es,gs),Es.prototype.g=function(){return new XMLHttpRequest},Es.prototype.i=function(){return{}},$n=new Es;function Wn(c,g,y,I){this.j=c,this.i=g,this.l=y,this.R=I||1,this.U=new ms(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ju}function ju(){this.i=null,this.g="",this.h=!1}var Xa={},_o={};function yo(c,g,y){c.L=1,c.v=Ii(wn(g)),c.m=y,c.P=!0,Ja(c,null)}function Ja(c,g){c.F=Date.now(),tt(c),c.A=wn(c.v);var y=c.A,I=c.R;Array.isArray(I)||(I=[String(I)]),Ci(y.i,"t",I),c.C=0,y=c.j.J,c.h=new ju,c.g=sc(c.j,y?g:null,!c.m),0<c.O&&(c.M=new ps(T(c.Y,c,c.g),c.O)),g=c.U,y=c.g,I=c.ca;var U="readystatechange";Array.isArray(U)||(U&&(za[0]=U.toString()),U=za);for(var W=0;W<U.length;W++){var ne=Va(y,U[W],I||g.handleEvent,!1,g.h||g);if(!ne)break;g.g[ne.key]=ne}g=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),Fr(),vs(c.i,c.u,c.A,c.l,c.R,c.m)}Wn.prototype.ca=function(c){c=c.target;const g=this.M;g&&cn(c)==3?g.j():this.Y(c)},Wn.prototype.Y=function(c){try{if(c==this.g)e:{const vt=cn(this.g);var g=this.g.Ba();const Dn=this.g.Z();if(!(3>vt)&&(vt!=3||this.g&&(this.h.h||this.g.oa()||il(this.g)))){this.J||vt!=4||g==7||(g==8||0>=Dn?Fr(3):Fr(2)),ws(this);var y=this.g.Z();this.X=y;t:if(zu(this)){var I=il(this.g);c="";var U=I.length,W=cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nn(this),vi(this);var ne="";break t}this.h.i=new d.TextDecoder}for(g=0;g<U;g++)this.h.h=!0,c+=this.h.i.decode(I[g],{stream:!(W&&g==U-1)});I.length=0,this.h.g+=c,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=y==200,mo(this.i,this.u,this.A,this.l,this.R,vt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Qe,Ct=this.g;if((Qe=Ct.g?Ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(Qe)){var Ue=Qe;break t}}Ue=null}if(y=Ue)zn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Za(this,y);else{this.o=!1,this.s=3,gt(12),Nn(this),vi(this);break e}}if(this.P){y=!0;let In;for(;!this.J&&this.C<ne.length;)if(In=Bd(this,ne),In==_o){vt==4&&(this.s=4,gt(14),y=!1),zn(this.i,this.l,null,"[Incomplete Response]");break}else if(In==Xa){this.s=4,gt(15),zn(this.i,this.l,ne,"[Invalid Chunk]"),y=!1;break}else zn(this.i,this.l,In,null),Za(this,In);if(zu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),vt!=4||ne.length!=0||this.h.h||(this.s=1,gt(16),y=!1),this.o=this.o&&y,!y)zn(this.i,this.l,ne,"[Invalid Chunked Response]"),Nn(this),vi(this);else if(0<ne.length&&!this.W){this.W=!0;var Lt=this.j;Lt.g==this&&Lt.ba&&!Lt.M&&(Lt.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),ol(Lt),Lt.M=!0,gt(11))}}else zn(this.i,this.l,ne,null),Za(this,ne);vt==4&&Nn(this),this.o&&!this.J&&(vt==4?ko(this.j,this):(this.o=!1,tt(this)))}else So(this.g),y==400&&0<ne.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),Nn(this),vi(this)}}}catch{}finally{}};function zu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Bd(c,g){var y=c.C,I=g.indexOf(`
`,y);return I==-1?_o:(y=Number(g.substring(y,I)),isNaN(y)?Xa:(I+=1,I+y>g.length?_o:(g=g.slice(I,I+y),c.C=I+y,g)))}Wn.prototype.cancel=function(){this.J=!0,Nn(this)};function tt(c){c.S=Date.now()+c.I,$u(c,c.I)}function $u(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=jn(T(c.ba,c),g)}function ws(c){c.B&&(d.clearTimeout(c.B),c.B=null)}Wn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Ya(this.i,this.A),this.L!=2&&(Fr(),gt(17)),Nn(this),this.s=2,vi(this)):$u(this,this.S-c)};function vi(c){c.j.G==0||c.J||ko(c.j,c)}function Nn(c){ws(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,$a(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function Za(c,g){try{var y=c.j;if(y.G!=0&&(y.g==c||rn(y.h,c))){if(!c.K&&rn(y.h,c)&&y.G==3){try{var I=y.Da.g.parse(g)}catch{I=null}if(Array.isArray(I)&&I.length==3){var U=I;if(U[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<c.F)Po(y),Qn(y);else break e;Ao(y),gt(18)}}else y.za=U[1],0<y.za-y.T&&37500>U[2]&&y.F&&y.v==0&&!y.C&&(y.C=jn(T(y.Za,y),6e3));if(1>=Hu(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else $r(y,11)}else if((c.K||y.g==c)&&Po(y),!G(g))for(U=y.Da.g.parse(g),g=0;g<U.length;g++){let Ue=U[g];if(y.T=Ue[0],Ue=Ue[1],y.G==2)if(Ue[0]=="c"){y.K=Ue[1],y.ia=Ue[2];const Lt=Ue[3];Lt!=null&&(y.la=Lt,y.j.info("VER="+y.la));const vt=Ue[4];vt!=null&&(y.Aa=vt,y.j.info("SVER="+y.Aa));const Dn=Ue[5];Dn!=null&&typeof Dn=="number"&&0<Dn&&(I=1.5*Dn,y.L=I,y.j.info("backChannelRequestTimeoutMs_="+I)),I=y;const In=c.g;if(In){const Ps=In.g?In.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ps){var W=I.h;W.g||Ps.indexOf("spdy")==-1&&Ps.indexOf("quic")==-1&&Ps.indexOf("h2")==-1||(W.j=W.l,W.g=new Set,W.h&&(el(W,W.h),W.h=null))}if(I.D){const xo=In.g?In.g.getResponseHeader("X-HTTP-Session-Id"):null;xo&&(I.ya=xo,Je(I.I,I.D,xo))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-c.F,y.j.info("Handshake RTT: "+y.R+"ms")),I=y;var ne=c;if(I.qa=ic(I,I.J?I.ia:null,I.W),ne.K){qu(I.h,ne);var Qe=ne,Ct=I.L;Ct&&(Qe.I=Ct),Qe.B&&(ws(Qe),tt(Qe)),I.g=ne}else As(I);0<y.i.length&&pr(y)}else Ue[0]!="stop"&&Ue[0]!="close"||$r(y,7);else y.G==3&&(Ue[0]=="stop"||Ue[0]=="close"?Ue[0]=="stop"?$r(y,7):zt(y):Ue[0]!="noop"&&y.l&&y.l.ta(Ue),y.v=0)}}Fr(4)}catch{}}var Wu=class{constructor(c,g){this.g=c,this.map=g}};function Ts(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function En(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Hu(c){return c.h?1:c.g?c.g.size:0}function rn(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function el(c,g){c.g?c.g.add(g):c.h=g}function qu(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}Ts.prototype.cancel=function(){if(this.i=Gu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Gu(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const y of c.g.values())g=g.concat(y.D);return g}return M(c.i)}function vo(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var g=[],y=c.length,I=0;I<y;I++)g.push(c[I]);return g}g=[],y=0;for(I in c)g[y++]=c[I];return g}function Eo(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var g=[];c=c.length;for(var y=0;y<c;y++)g.push(y);return g}g=[],y=0;for(const I in c)g[y++]=I;return g}}}function Ei(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var y=Eo(c),I=vo(c),U=I.length,W=0;W<U;W++)g.call(void 0,I[W],y&&y[W],c)}var Is=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jd(c,g){if(c){c=c.split("&");for(var y=0;y<c.length;y++){var I=c[y].indexOf("="),U=null;if(0<=I){var W=c[y].substring(0,I);U=c[y].substring(I+1)}else W=c[y];g(W,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Ur(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Ur){this.h=c.h,Ss(this,c.j),this.o=c.o,this.g=c.g,wi(this,c.s),this.l=c.l;var g=c.i,y=new hr;y.i=g.i,g.g&&(y.g=new Map(g.g),y.h=g.h),Ti(this,y),this.m=c.m}else c&&(g=String(c).match(Is))?(this.h=!1,Ss(this,g[1]||"",!0),this.o=Me(g[2]||""),this.g=Me(g[3]||"",!0),wi(this,g[4]),this.l=Me(g[5]||"",!0),Ti(this,g[6]||"",!0),this.m=Me(g[7]||"")):(this.h=!1,this.i=new hr(null,this.h))}Ur.prototype.toString=function(){var c=[],g=this.j;g&&c.push(Si(g,wo,!0),":");var y=this.g;return(y||g=="file")&&(c.push("//"),(g=this.o)&&c.push(Si(g,wo,!0),"@"),c.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&c.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&c.push("/"),c.push(Si(y,y.charAt(0)=="/"?Yu:Qu,!0))),(y=this.i.toString())&&c.push("?",y),(y=this.m)&&c.push("#",Si(y,tl)),c.join("")};function wn(c){return new Ur(c)}function Ss(c,g,y){c.j=y?Me(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function wi(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function Ti(c,g,y){g instanceof hr?(c.i=g,dr(c.i,c.h)):(y||(g=Si(g,Xu)),c.i=new hr(g,c.h))}function Je(c,g,y){c.i.set(g,y)}function Ii(c){return Je(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Me(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Si(c,g,y){return typeof c=="string"?(c=encodeURI(c).replace(g,Ku),y&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Ku(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var wo=/[#\/\?@]/g,Qu=/[#\?:]/g,Yu=/[#\?]/g,Xu=/[#\?@]/g,tl=/#/g;function hr(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function jt(c){c.g||(c.g=new Map,c.h=0,c.i&&jd(c.i,function(g,y){c.add(decodeURIComponent(g.replace(/\+/g," ")),y)}))}n=hr.prototype,n.add=function(c,g){jt(this),this.i=null,c=xn(this,c);var y=this.g.get(c);return y||this.g.set(c,y=[]),y.push(g),this.h+=1,this};function Hn(c,g){jt(c),g=xn(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function qn(c,g){return jt(c),g=xn(c,g),c.g.has(g)}n.forEach=function(c,g){jt(this),this.g.forEach(function(y,I){y.forEach(function(U){c.call(g,U,I,this)},this)},this)},n.na=function(){jt(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),y=[];for(let I=0;I<g.length;I++){const U=c[I];for(let W=0;W<U.length;W++)y.push(g[I])}return y},n.V=function(c){jt(this);let g=[];if(typeof c=="string")qn(this,c)&&(g=g.concat(this.g.get(xn(this,c))));else{c=Array.from(this.g.values());for(let y=0;y<c.length;y++)g=g.concat(c[y])}return g},n.set=function(c,g){return jt(this),this.i=null,c=xn(this,c),qn(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},n.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Ci(c,g,y){Hn(c,g),0<y.length&&(c.i=null,c.g.set(xn(c,g),M(y)),c.h+=y.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var y=0;y<g.length;y++){var I=g[y];const W=encodeURIComponent(String(I)),ne=this.V(I);for(I=0;I<ne.length;I++){var U=W;ne[I]!==""&&(U+="="+encodeURIComponent(String(ne[I]))),c.push(U)}}return this.i=c.join("&")};function xn(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function dr(c,g){g&&!c.j&&(jt(c),c.i=null,c.g.forEach(function(y,I){var U=I.toLowerCase();I!=U&&(Hn(this,I),Ci(this,U,y))},c)),c.j=g}function zd(c,g){const y=new ys;if(d.Image){const I=new Image;I.onload=A(un,y,"TestLoadImage: loaded",!0,g,I),I.onerror=A(un,y,"TestLoadImage: error",!1,g,I),I.onabort=A(un,y,"TestLoadImage: abort",!1,g,I),I.ontimeout=A(un,y,"TestLoadImage: timeout",!1,g,I),d.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=c}else g(!1)}function Ju(c,g){const y=new ys,I=new AbortController,U=setTimeout(()=>{I.abort(),un(y,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:I.signal}).then(W=>{clearTimeout(U),W.ok?un(y,"TestPingServer: ok",!0,g):un(y,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(U),un(y,"TestPingServer: error",!1,g)})}function un(c,g,y,I,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),I(y)}catch{}}function $d(){this.g=new qa}function Zu(c,g,y){const I=y||"";try{Ei(c,function(U,W){let ne=U;m(U)&&(ne=Wa(U)),g.push(I+W+"="+encodeURIComponent(ne))})}catch(U){throw g.push(I+"type="+encodeURIComponent("_badmap")),U}}function Br(c){this.l=c.Ub||null,this.j=c.eb||!1}k(Br,gs),Br.prototype.g=function(){return new Cs(this.l,this.j)},Br.prototype.i=function(c){return function(){return c}}({});function Cs(c,g){It.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Cs,It),n=Cs.prototype,n.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,Kn(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||d).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gn(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Kn(this)),this.g&&(this.readyState=3,Kn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ec(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function ec(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?Gn(this):Kn(this),this.readyState==3&&ec(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,Gn(this))},n.Qa=function(c){this.g&&(this.response=c,Gn(this))},n.ga=function(){this.g&&Gn(this)};function Gn(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Kn(c)}n.setRequestHeader=function(c,g){this.u.append(c,g)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var y=g.next();!y.done;)y=y.value,c.push(y[0]+": "+y[1]),y=g.next();return c.join(`\r
`)};function Kn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Cs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function jr(c){let g="";return Ie(c,function(y,I){g+=I,g+=":",g+=y,g+=`\r
`}),g}function Ri(c,g,y){e:{for(I in y){var I=!1;break e}I=!0}I||(y=jr(y),typeof c=="string"?y!=null&&encodeURIComponent(String(y)):Je(c,g,y))}function at(c){It.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(at,It);var Wd=/^https?$/i,nl=["POST","PUT"];n=at.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,g,y,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$n.g(),this.v=this.o?co(this.o):co($n),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(W){Rs(this,W);return}if(c=y||"",y=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var U in I)y.set(U,I[U]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const W of I.keys())y.set(W,I.get(W));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(y.keys()).find(W=>W.toLowerCase()=="content-type"),U=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(nl,g,void 0))||I||U||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[W,ne]of y)this.g.setRequestHeader(W,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Io(this),this.u=!0,this.g.send(c),this.u=!1}catch(W){Rs(this,W)}};function Rs(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,To(c),Tn(c)}function To(c){c.A||(c.A=!0,St(c,"complete"),St(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,St(this,"complete"),St(this,"abort"),Tn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Tn(this,!0)),at.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?rl(this):this.bb())},n.bb=function(){rl(this)};function rl(c){if(c.h&&typeof u<"u"&&(!c.v[1]||cn(c)!=4||c.Z()!=2)){if(c.u&&cn(c)==4)ja(c.Ea,0,c);else if(St(c,"readystatechange"),cn(c)==4){c.h=!1;try{const ne=c.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var y;if(!(y=g)){var I;if(I=ne===0){var U=String(c.D).match(Is)[1]||null;!U&&d.self&&d.self.location&&(U=d.self.location.protocol.slice(0,-1)),I=!Wd.test(U?U.toLowerCase():"")}y=I}if(y)St(c,"complete"),St(c,"success");else{c.m=6;try{var W=2<cn(c)?c.g.statusText:""}catch{W=""}c.l=W+" ["+c.Z()+"]",To(c)}}finally{Tn(c)}}}}function Tn(c,g){if(c.g){Io(c);const y=c.g,I=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||St(c,"ready");try{y.onreadystatechange=I}catch{}}}function Io(c){c.I&&(d.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function cn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<cn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),Ha(g)}};function il(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function So(c){const g={};c=(c.g&&2<=cn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<c.length;I++){if(G(c[I]))continue;var y=b(c[I]);const U=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const W=g[U]||[];g[U]=W,W.push(y)}D(g,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function fr(c,g,y){return y&&y.internalChannelParams&&y.internalChannelParams[c]||g}function sl(c){this.Aa=0,this.i=[],this.j=new ys,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=fr("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=fr("baseRetryDelayMs",5e3,c),this.cb=fr("retryDelaySeedMs",1e4,c),this.Wa=fr("forwardChannelMaxRetries",2,c),this.wa=fr("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Ts(c&&c.concurrentRequestLimit),this.Da=new $d,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=sl.prototype,n.la=8,n.G=1,n.connect=function(c,g,y,I){gt(0),this.W=c,this.H=g||{},y&&I!==void 0&&(this.H.OSID=y,this.H.OAID=I),this.F=this.X,this.I=ic(this,null,this.W),pr(this)};function zt(c){if(Co(c),c.G==3){var g=c.U++,y=wn(c.I);if(Je(y,"SID",c.K),Je(y,"RID",g),Je(y,"TYPE","terminate"),zr(c,y),g=new Wn(c,c.j,g),g.L=2,g.v=Ii(wn(y)),y=!1,d.navigator&&d.navigator.sendBeacon)try{y=d.navigator.sendBeacon(g.v.toString(),"")}catch{}!y&&d.Image&&(new Image().src=g.v,y=!0),y||(g.g=sc(g.j,null),g.g.ea(g.v)),g.F=Date.now(),tt(g)}rc(c)}function Qn(c){c.g&&(ol(c),c.g.cancel(),c.g=null)}function Co(c){Qn(c),c.u&&(d.clearTimeout(c.u),c.u=null),Po(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function pr(c){if(!En(c.h)&&!c.s){c.s=!0;var g=c.Ga;xe||se(),re||(xe(),re=!0),pe.add(g,c),c.B=0}}function Hd(c,g){return Hu(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=jn(T(c.Ga,c,g),nc(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const U=new Wn(this,this.j,c);let W=this.o;if(this.S&&(W?(W=S(W),x(W,this.S)):W=this.S),this.m!==null||this.O||(U.H=W,W=null),this.P)e:{for(var g=0,y=0;y<this.i.length;y++){t:{var I=this.i[y];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(g+=I,4096<g){g=y;break e}if(g===4096||y===this.i.length-1){g=y+1;break e}}g=1e3}else g=1e3;g=Ai(this,U,g),y=wn(this.I),Je(y,"RID",c),Je(y,"CVER",22),this.D&&Je(y,"X-HTTP-Session-Id",this.D),zr(this,y),W&&(this.O?g="headers="+encodeURIComponent(String(jr(W)))+"&"+g:this.m&&Ri(y,this.m,W)),el(this.h,U),this.Ua&&Je(y,"TYPE","init"),this.P?(Je(y,"$req",g),Je(y,"SID","null"),U.T=!0,yo(U,y,null)):yo(U,y,g),this.G=2}}else this.G==3&&(c?Ro(this,c):this.i.length==0||En(this.h)||Ro(this))};function Ro(c,g){var y;g?y=g.l:y=c.U++;const I=wn(c.I);Je(I,"SID",c.K),Je(I,"RID",y),Je(I,"AID",c.T),zr(c,I),c.m&&c.o&&Ri(I,c.m,c.o),y=new Wn(c,c.j,y,c.B+1),c.m===null&&(y.H=c.o),g&&(c.i=g.D.concat(c.i)),g=Ai(c,y,1e3),y.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),el(c.h,y),yo(y,I,g)}function zr(c,g){c.H&&Ie(c.H,function(y,I){Je(g,I,y)}),c.l&&Ei({},function(y,I){Je(g,I,y)})}function Ai(c,g,y){y=Math.min(c.i.length,y);var I=c.l?T(c.l.Na,c.l,c):null;e:{var U=c.i;let W=-1;for(;;){const ne=["count="+y];W==-1?0<y?(W=U[0].g,ne.push("ofs="+W)):W=0:ne.push("ofs="+W);let Qe=!0;for(let Ct=0;Ct<y;Ct++){let Ue=U[Ct].g;const Lt=U[Ct].map;if(Ue-=W,0>Ue)W=Math.max(0,U[Ct].g-100),Qe=!1;else try{Zu(Lt,ne,"req"+Ue+"_")}catch{I&&I(Lt)}}if(Qe){I=ne.join("&");break e}}}return c=c.i.splice(0,y),g.D=c,I}function As(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;xe||se(),re||(xe(),re=!0),pe.add(g,c),c.v=0}}function Ao(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=jn(T(c.Fa,c),nc(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,tc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=jn(T(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,gt(10),Qn(this),tc(this))};function ol(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function tc(c){c.g=new Wn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=wn(c.qa);Je(g,"RID","rpc"),Je(g,"SID",c.K),Je(g,"AID",c.T),Je(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&Je(g,"TO",c.ja),Je(g,"TYPE","xmlhttp"),zr(c,g),c.m&&c.o&&Ri(g,c.m,c.o),c.L&&(c.g.I=c.L);var y=c.g;c=c.ia,y.L=1,y.v=Ii(wn(g)),y.m=null,y.P=!0,Ja(y,c)}n.Za=function(){this.C!=null&&(this.C=null,Qn(this),Ao(this),gt(19))};function Po(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function ko(c,g){var y=null;if(c.g==g){Po(c),ol(c),c.g=null;var I=2}else if(rn(c.h,g))y=g.D,qu(c.h,g),I=1;else return;if(c.G!=0){if(g.o)if(I==1){y=g.m?g.m.length:0,g=Date.now()-g.F;var U=c.B;I=_s(),St(I,new po(I,y)),pr(c)}else As(c);else if(U=g.s,U==3||U==0&&0<g.X||!(I==1&&Hd(c,g)||I==2&&Ao(c)))switch(y&&0<y.length&&(g=c.h,g.i=g.i.concat(y)),U){case 1:$r(c,5);break;case 4:$r(c,10);break;case 3:$r(c,6);break;default:$r(c,2)}}}function nc(c,g){let y=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(y*=2),y*g}function $r(c,g){if(c.j.info("Error code "+g),g==2){var y=T(c.fb,c),I=c.Xa;const U=!I;I=new Ur(I||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Ss(I,"https"),Ii(I),U?zd(I.toString(),y):Ju(I.toString(),y)}else gt(2);c.G=0,c.l&&c.l.sa(g),rc(c),Co(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function rc(c){if(c.G=0,c.ka=[],c.l){const g=Gu(c.h);(g.length!=0||c.i.length!=0)&&(L(c.ka,g),L(c.ka,c.i),c.h.i.length=0,M(c.i),c.i.length=0),c.l.ra()}}function ic(c,g,y){var I=y instanceof Ur?wn(y):new Ur(y);if(I.g!="")g&&(I.g=g+"."+I.g),wi(I,I.s);else{var U=d.location;I=U.protocol,g=g?g+"."+U.hostname:U.hostname,U=+U.port;var W=new Ur(null);I&&Ss(W,I),g&&(W.g=g),U&&wi(W,U),y&&(W.l=y),I=W}return y=c.D,g=c.ya,y&&g&&Je(I,y,g),Je(I,"VER",c.la),zr(c,I),I}function sc(c,g,y){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new at(new Br({eb:y})):new at(c.pa),g.Ha(c.J),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function al(){}n=al.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function No(){}No.prototype.g=function(c,g){return new sn(c,g)};function sn(c,g){It.call(this),this.g=new sl(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!G(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!G(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new mr(this)}k(sn,It),sn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},sn.prototype.close=function(){zt(this.g)},sn.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var y={};y.__data__=c,c=y}else this.u&&(y={},y.__data__=Wa(c),c=y);g.i.push(new Wu(g.Ya++,c)),g.G==3&&pr(g)},sn.prototype.N=function(){this.g.l=null,delete this.j,zt(this.g),delete this.g,sn.aa.N.call(this)};function oc(c){ur.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const y in g){c=y;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}k(oc,ur);function ac(){fo.call(this),this.status=1}k(ac,fo);function mr(c){this.g=c}k(mr,al),mr.prototype.ua=function(){St(this.g,"a")},mr.prototype.ta=function(c){St(this.g,new oc(c))},mr.prototype.sa=function(c){St(this.g,new ac)},mr.prototype.ra=function(){St(this.g,"b")},No.prototype.createWebChannel=No.prototype.g,sn.prototype.send=sn.prototype.o,sn.prototype.open=sn.prototype.m,sn.prototype.close=sn.prototype.close,QI=function(){return new No},KI=function(){return _s()},GI=cr,om={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},go.NO_ERROR=0,go.TIMEOUT=8,go.HTTP_ERROR=6,Eh=go,Bu.COMPLETE="complete",qI=Bu,ho.EventType=kn,kn.OPEN="a",kn.CLOSE="b",kn.ERROR="c",kn.MESSAGE="d",It.prototype.listen=It.prototype.K,zl=ho,at.prototype.listenOnce=at.prototype.L,at.prototype.getLastError=at.prototype.Ka,at.prototype.getLastErrorCode=at.prototype.Ba,at.prototype.getStatus=at.prototype.Z,at.prototype.getResponseJson=at.prototype.Oa,at.prototype.getResponseText=at.prototype.oa,at.prototype.send=at.prototype.ea,at.prototype.setWithCredentials=at.prototype.Ha,HI=at}).apply(typeof oh<"u"?oh:typeof self<"u"?self:typeof window<"u"?window:{});const PE="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Zt.UNAUTHENTICATED=new Zt(null),Zt.GOOGLE_CREDENTIALS=new Zt("google-credentials-uid"),Zt.FIRST_PARTY=new Zt("first-party-uid"),Zt.MOCK_USER=new Zt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Da="11.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=new dd("@firebase/firestore");function Zo(){return Js.logLevel}function ae(n,...e){if(Js.logLevel<=De.DEBUG){const t=e.map(vg);Js.debug(`Firestore (${Da}): ${n}`,...t)}}function ui(n,...e){if(Js.logLevel<=De.ERROR){const t=e.map(vg);Js.error(`Firestore (${Da}): ${n}`,...t)}}function ma(n,...e){if(Js.logLevel<=De.WARN){const t=e.map(vg);Js.warn(`Firestore (${Da}): ${n}`,...t)}}function vg(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(n="Unexpected state"){const e=`FIRESTORE (${Da}) INTERNAL ASSERTION FAILED: `+n;throw ui(e),new Error(e)}function Ke(n,e){n||Te()}function Ce(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class me extends hi{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Zt.UNAUTHENTICATED))}shutdown(){}}class hO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class dO{constructor(e){this.t=e,this.currentUser=Zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ke(this.o===void 0);let r=this.i;const s=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let a=new Zi;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Zi,e.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const f=a;e.enqueueRetryable(async()=>{await f.promise,await s(this.currentUser)})},d=f=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(f=>d(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Zi)}},0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ke(typeof r.accessToken=="string"),new YI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ke(e===null||typeof e=="string"),new Zt(e)}}class fO{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Zt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class pO{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new fO(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Zt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Ke(this.o===void 0);const r=a=>{a.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.R;return this.R=a.token,ae("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>r(a))};const s=a=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(a=>s(a)),setTimeout(()=>{if(!this.appCheck){const a=this.A.getImmediate({optional:!0});a?s(a):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ke(typeof t.token=="string"),this.R=t.token,new mO(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _O(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=_O(40);for(let a=0;a<s.length;++a)r.length<20&&s[a]<t&&(r+=e.charAt(s[a]%e.length))}return r}}function Ve(n,e){return n<e?-1:n>e?1:0}function ga(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{static now(){return xt.fromMillis(Date.now())}static fromDate(e){return xt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new xt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new me(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new me(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new me(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new me(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ve(this.nanoseconds,e.nanoseconds):Ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{static fromTimestamp(e){return new Se(e)}static min(){return new Se(new xt(0,0))}static max(){return new Se(new xt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,t,r){t===void 0?t=0:t>e.length&&Te(),r===void 0?r=e.length-t:r>e.length-t&&Te(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return wr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof wr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const a=wr.compareSegments(e.get(s),t.get(s));if(a!==0)return a}return Math.sign(e.length-t.length)}static compareSegments(e,t){const r=wr.isNumericId(e),s=wr.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?wr.extractNumericId(e).compare(wr.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ji.fromString(e.substring(4,e.length-2))}}class ut extends wr{construct(e,t,r){return new ut(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new me(J.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ut(t)}static emptyPath(){return new ut([])}}const yO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qt extends wr{construct(e,t,r){return new qt(e,t,r)}static isValidIdentifier(e){return yO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new qt(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const a=()=>{if(r.length===0)throw new me(J.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;s<e.length;){const d=e[s];if(d==="\\"){if(s+1===e.length)throw new me(J.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new me(J.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,s+=2}else d==="`"?(u=!u,s++):d!=="."||u?(r+=d,s++):(a(),s++)}if(a(),u)throw new me(J.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qt(t)}static emptyPath(){return new qt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(ut.fromString(e))}static fromName(e){return new ye(ut.fromString(e).popFirst(5))}static empty(){return new ye(ut.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ut.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ut.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new ut(e.slice()))}}function vO(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Se.fromTimestamp(r===1e9?new xt(t+1,0):new xt(t,r));return new as(s,ye.empty(),e)}function EO(n){return new as(n.readTime,n.key,-1)}class as{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new as(Se.min(),ye.empty(),-1)}static max(){return new as(Se.max(),ye.empty(),-1)}}function wO(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(n.documentKey,e.documentKey),t!==0?t:Ve(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class IO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oa(n){if(n.code!==J.FAILED_PRECONDITION||n.message!==TO)throw n;ae("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K((r,s)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,s)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):K.reject(t)}static resolve(e){return new K((t,r)=>{t(e)})}static reject(e){return new K((t,r)=>{r(e)})}static waitFor(e){return new K((t,r)=>{let s=0,a=0,u=!1;e.forEach(d=>{++s,d.next(()=>{++a,u&&a===s&&t()},f=>r(f))}),u=!0,a===s&&t()})}static or(e){let t=K.resolve(!1);for(const r of e)t=t.next(s=>s?K.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,a)=>{r.push(t.call(this,s,a))}),this.waitFor(r)}static mapArray(e,t){return new K((r,s)=>{const a=e.length,u=new Array(a);let d=0;for(let f=0;f<a;f++){const m=f;t(e[m]).next(v=>{u[m]=v,++d,d===a&&r(u)},v=>s(v))}})}static doWhile(e,t){return new K((r,s)=>{const a=()=>{e()===!0?t().next(()=>{a()},s):r()};a()})}}function SO(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function La(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Rd.oe=-1;function Ad(n){return n==null}function Yh(n){return n===0&&1/n==-1/0}function CO(n){return typeof n=="number"&&Number.isInteger(n)&&!Yh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RO(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=kE(e)),e=AO(n.get(t),e);return kE(e)}function AO(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const a=n.charAt(s);switch(a){case"\0":t+="";break;case"":t+="";break;default:t+=a}}return t}function kE(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function to(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function JI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t){this.comparator=e,this.root=t||Ht.EMPTY}insert(e,t){return new ft(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ht.BLACK,null,null))}remove(e){return new ft(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ht.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ah(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ah(this.root,e,this.comparator,!1)}getReverseIterator(){return new ah(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ah(this.root,e,this.comparator,!0)}}class ah{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ht{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??Ht.RED,this.left=s??Ht.EMPTY,this.right=a??Ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,a){return new Ht(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ht.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Te();const e=this.left.check();if(e!==this.right.check())throw Te();return e+(this.isRed()?0:1)}}Ht.EMPTY=null,Ht.RED=!0,Ht.BLACK=!1;Ht.EMPTY=new class{constructor(){this.size=0}get key(){throw Te()}get value(){throw Te()}get color(){throw Te()}get left(){throw Te()}get right(){throw Te()}copy(e,t,r,s,a){return this}insert(e,t,r){return new Ht(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.comparator=e,this.data=new ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new xE(this.data.getIterator())}getIteratorFrom(e){return new xE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Dt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Dt(this.comparator);return t.data=e,t}}class xE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this.fields=e,e.sort(qt.comparator)}static empty(){return new ir([])}unionWith(e){let t=new Dt(qt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ir(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ga(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new ZI("Invalid base64 string: "+a):a}}(e);return new Gt(t)}static fromUint8Array(e){const t=function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a}(e);return new Gt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Gt.EMPTY_BYTE_STRING=new Gt("");const PO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ls(n){if(Ke(!!n),typeof n=="string"){let e=0;const t=PO.exec(n);if(Ke(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:yt(n.seconds),nanos:yt(n.nanos)}}function yt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function us(n){return typeof n=="string"?Gt.fromBase64String(n):Gt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Pd(n){const e=n.mapValue.fields.__previous_value__;return Eg(e)?Pd(e):e}function mu(n){const e=ls(n.mapValue.fields.__local_write_time__.timestampValue);return new xt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(e,t,r,s,a,u,d,f,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=m}}class gu{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new gu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof gu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function cs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Eg(n)?4:xO(n)?9007199254740991:NO(n)?10:11:Te()}function xr(n,e){if(n===e)return!0;const t=cs(n);if(t!==cs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return mu(n).isEqual(mu(e));case 3:return function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=ls(s.timestampValue),d=ls(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,a){return us(s.bytesValue).isEqual(us(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,a){return yt(s.geoPointValue.latitude)===yt(a.geoPointValue.latitude)&&yt(s.geoPointValue.longitude)===yt(a.geoPointValue.longitude)}(n,e);case 2:return function(s,a){if("integerValue"in s&&"integerValue"in a)return yt(s.integerValue)===yt(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=yt(s.doubleValue),d=yt(a.doubleValue);return u===d?Yh(u)===Yh(d):isNaN(u)&&isNaN(d)}return!1}(n,e);case 9:return ga(n.arrayValue.values||[],e.arrayValue.values||[],xr);case 10:case 11:return function(s,a){const u=s.mapValue.fields||{},d=a.mapValue.fields||{};if(NE(u)!==NE(d))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(d[f]===void 0||!xr(u[f],d[f])))return!1;return!0}(n,e);default:return Te()}}function _u(n,e){return(n.values||[]).find(t=>xr(t,e))!==void 0}function _a(n,e){if(n===e)return 0;const t=cs(n),r=cs(e);if(t!==r)return Ve(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ve(n.booleanValue,e.booleanValue);case 2:return function(a,u){const d=yt(a.integerValue||a.doubleValue),f=yt(u.integerValue||u.doubleValue);return d<f?-1:d>f?1:d===f?0:isNaN(d)?isNaN(f)?0:-1:1}(n,e);case 3:return DE(n.timestampValue,e.timestampValue);case 4:return DE(mu(n),mu(e));case 5:return Ve(n.stringValue,e.stringValue);case 6:return function(a,u){const d=us(a),f=us(u);return d.compareTo(f)}(n.bytesValue,e.bytesValue);case 7:return function(a,u){const d=a.split("/"),f=u.split("/");for(let m=0;m<d.length&&m<f.length;m++){const v=Ve(d[m],f[m]);if(v!==0)return v}return Ve(d.length,f.length)}(n.referenceValue,e.referenceValue);case 8:return function(a,u){const d=Ve(yt(a.latitude),yt(u.latitude));return d!==0?d:Ve(yt(a.longitude),yt(u.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return OE(n.arrayValue,e.arrayValue);case 10:return function(a,u){var d,f,m,v;const E=a.fields||{},T=u.fields||{},A=(d=E.value)===null||d===void 0?void 0:d.arrayValue,k=(f=T.value)===null||f===void 0?void 0:f.arrayValue,M=Ve(((m=A==null?void 0:A.values)===null||m===void 0?void 0:m.length)||0,((v=k==null?void 0:k.values)===null||v===void 0?void 0:v.length)||0);return M!==0?M:OE(A,k)}(n.mapValue,e.mapValue);case 11:return function(a,u){if(a===lh.mapValue&&u===lh.mapValue)return 0;if(a===lh.mapValue)return 1;if(u===lh.mapValue)return-1;const d=a.fields||{},f=Object.keys(d),m=u.fields||{},v=Object.keys(m);f.sort(),v.sort();for(let E=0;E<f.length&&E<v.length;++E){const T=Ve(f[E],v[E]);if(T!==0)return T;const A=_a(d[f[E]],m[v[E]]);if(A!==0)return A}return Ve(f.length,v.length)}(n.mapValue,e.mapValue);default:throw Te()}}function DE(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ve(n,e);const t=ls(n),r=ls(e),s=Ve(t.seconds,r.seconds);return s!==0?s:Ve(t.nanos,r.nanos)}function OE(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const a=_a(t[s],r[s]);if(a)return a}return Ve(t.length,r.length)}function ya(n){return am(n)}function am(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=ls(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return us(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ye.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const a of t.values||[])s?s=!1:r+=",",r+=am(a);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",a=!0;for(const u of r)a?a=!1:s+=",",s+=`${u}:${am(t.fields[u])}`;return s+"}"}(n.mapValue):Te()}function wh(n){switch(cs(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Pd(n);return e?16+wh(e):16;case 5:return 2*n.stringValue.length;case 6:return us(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,a)=>s+wh(a),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return to(r.fields,(a,u)=>{s+=a.length+wh(u)}),s}(n.mapValue);default:throw Te()}}function lm(n){return!!n&&"integerValue"in n}function wg(n){return!!n&&"arrayValue"in n}function LE(n){return!!n&&"nullValue"in n}function bE(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Th(n){return!!n&&"mapValue"in n}function NO(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Jl(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return to(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Jl(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Jl(n.arrayValue.values[t]);return e}return Object.assign({},n)}function xO(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e){this.value=e}static empty(){return new Bn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Th(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jl(t)}setAll(e){let t=qt.emptyPath(),r={},s=[];e.forEach((u,d)=>{if(!t.isImmediateParentOf(d)){const f=this.getFieldsMap(t);this.applyChanges(f,r,s),r={},s=[],t=d.popLast()}u?r[d.lastSegment()]=Jl(u):s.push(d.lastSegment())});const a=this.getFieldsMap(t);this.applyChanges(a,r,s)}delete(e){const t=this.field(e.popLast());Th(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return xr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Th(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){to(t,(s,a)=>e[s]=a);for(const s of r)delete e[s]}clone(){return new Bn(Jl(this.value))}}function eS(n){const e=[];return to(n.fields,(t,r)=>{const s=new qt([t]);if(Th(r)){const a=eS(r.mapValue).fields;if(a.length===0)e.push(s);else for(const u of a)e.push(s.child(u))}else e.push(s)}),new ir(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,t,r,s,a,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=a,this.data=u,this.documentState=d}static newInvalidDocument(e){return new tn(e,0,Se.min(),Se.min(),Se.min(),Bn.empty(),0)}static newFoundDocument(e,t,r,s){return new tn(e,1,t,Se.min(),r,s,0)}static newNoDocument(e,t){return new tn(e,2,t,Se.min(),Se.min(),Bn.empty(),0)}static newUnknownDocument(e,t){return new tn(e,3,t,Se.min(),Se.min(),Bn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Bn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Bn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,t){this.position=e,this.inclusive=t}}function ME(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const a=e[s],u=n.position[s];if(a.field.isKeyField()?r=ye.comparator(ye.fromName(u.referenceValue),t.key):r=_a(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function VE(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!xr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,t="asc"){this.field=e,this.dir=t}}function DO(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{}class Nt extends tS{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new LO(e,t,r):t==="array-contains"?new VO(e,r):t==="in"?new FO(e,r):t==="not-in"?new UO(e,r):t==="array-contains-any"?new BO(e,r):new Nt(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new bO(e,r):new MO(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(_a(t,this.value)):t!==null&&cs(this.value)===cs(t)&&this.matchesComparison(_a(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dr extends tS{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Dr(e,t)}matches(e){return nS(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function nS(n){return n.op==="and"}function rS(n){return OO(n)&&nS(n)}function OO(n){for(const e of n.filters)if(e instanceof Dr)return!1;return!0}function um(n){if(n instanceof Nt)return n.field.canonicalString()+n.op.toString()+ya(n.value);if(rS(n))return n.filters.map(e=>um(e)).join(",");{const e=n.filters.map(t=>um(t)).join(",");return`${n.op}(${e})`}}function iS(n,e){return n instanceof Nt?function(r,s){return s instanceof Nt&&r.op===s.op&&r.field.isEqual(s.field)&&xr(r.value,s.value)}(n,e):n instanceof Dr?function(r,s){return s instanceof Dr&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((a,u,d)=>a&&iS(u,s.filters[d]),!0):!1}(n,e):void Te()}function sS(n){return n instanceof Nt?function(t){return`${t.field.canonicalString()} ${t.op} ${ya(t.value)}`}(n):n instanceof Dr?function(t){return t.op.toString()+" {"+t.getFilters().map(sS).join(" ,")+"}"}(n):"Filter"}class LO extends Nt{constructor(e,t,r){super(e,t,r),this.key=ye.fromName(r.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class bO extends Nt{constructor(e,t){super(e,"in",t),this.keys=oS("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class MO extends Nt{constructor(e,t){super(e,"not-in",t),this.keys=oS("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function oS(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>ye.fromName(r.referenceValue))}class VO extends Nt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return wg(t)&&_u(t.arrayValue,this.value)}}class FO extends Nt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&_u(this.value.arrayValue,t)}}class UO extends Nt{constructor(e,t){super(e,"not-in",t)}matches(e){if(_u(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!_u(this.value.arrayValue,t)}}class BO extends Nt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!wg(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>_u(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(e,t=null,r=[],s=[],a=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=a,this.startAt=u,this.endAt=d,this.ue=null}}function FE(n,e=null,t=[],r=[],s=null,a=null,u=null){return new jO(n,e,t,r,s,a,u)}function Tg(n){const e=Ce(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>um(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(a){return a.field.canonicalString()+a.dir}(r)).join(","),Ad(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>ya(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>ya(r)).join(",")),e.ue=t}return e.ue}function Ig(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!DO(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!iS(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!VE(n.startAt,e.startAt)&&VE(n.endAt,e.endAt)}function cm(n){return ye.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,t=null,r=[],s=[],a=null,u="F",d=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=f,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function zO(n,e,t,r,s,a,u,d){return new kd(n,e,t,r,s,a,u,d)}function Sg(n){return new kd(n)}function UE(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function $O(n){return n.collectionGroup!==null}function Zl(n){const e=Ce(n);if(e.ce===null){e.ce=[];const t=new Set;for(const a of e.explicitOrderBy)e.ce.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new Dt(qt.comparator);return u.filters.forEach(f=>{f.getFlattenedFilters().forEach(m=>{m.isInequality()&&(d=d.add(m.field))})}),d})(e).forEach(a=>{t.has(a.canonicalString())||a.isKeyField()||e.ce.push(new Jh(a,r))}),t.has(qt.keyField().canonicalString())||e.ce.push(new Jh(qt.keyField(),r))}return e.ce}function Pr(n){const e=Ce(n);return e.le||(e.le=WO(e,Zl(n))),e.le}function WO(n,e){if(n.limitType==="F")return FE(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const a=s.dir==="desc"?"asc":"desc";return new Jh(s.field,a)});const t=n.endAt?new Xh(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Xh(n.startAt.position,n.startAt.inclusive):null;return FE(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function hm(n,e,t){return new kd(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Nd(n,e){return Ig(Pr(n),Pr(e))&&n.limitType===e.limitType}function aS(n){return`${Tg(Pr(n))}|lt:${n.limitType}`}function ea(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>sS(s)).join(", ")}]`),Ad(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>ya(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>ya(s)).join(",")),`Target(${r})`}(Pr(n))}; limitType=${n.limitType})`}function xd(n,e){return e.isFoundDocument()&&function(r,s){const a=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):ye.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)}(n,e)&&function(r,s){for(const a of Zl(r))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const a of r.filters)if(!a.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(u,d,f){const m=ME(u,d,f);return u.inclusive?m<=0:m<0}(r.startAt,Zl(r),s)||r.endAt&&!function(u,d,f){const m=ME(u,d,f);return u.inclusive?m>=0:m>0}(r.endAt,Zl(r),s))}(n,e)}function HO(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function lS(n){return(e,t)=>{let r=!1;for(const s of Zl(n)){const a=qO(s,e,t);if(a!==0)return a;r=r||s.field.isKeyField()}return 0}}function qO(n,e,t){const r=n.field.isKeyField()?ye.comparator(e.key,t.key):function(a,u,d){const f=u.data.field(a),m=d.data.field(a);return f!==null&&m!==null?_a(f,m):Te()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Te()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,a]of r)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){to(this.inner,(t,r)=>{for(const[s,a]of r)e(s,a)})}isEmpty(){return JI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GO=new ft(ye.comparator);function ci(){return GO}const uS=new ft(ye.comparator);function $l(...n){let e=uS;for(const t of n)e=e.insert(t.key,t);return e}function cS(n){let e=uS;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Hs(){return eu()}function hS(){return eu()}function eu(){return new no(n=>n.toString(),(n,e)=>n.isEqual(e))}const KO=new ft(ye.comparator),QO=new Dt(ye.comparator);function be(...n){let e=QO;for(const t of n)e=e.add(t);return e}const YO=new Dt(Ve);function XO(){return YO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yh(e)?"-0":e}}function dS(n){return{integerValue:""+n}}function JO(n,e){return CO(e)?dS(e):Cg(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(){this._=void 0}}function ZO(n,e,t){return n instanceof Zh?function(s,a){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&Eg(a)&&(a=Pd(a)),a&&(u.fields.__previous_value__=a),{mapValue:u}}(t,e):n instanceof yu?pS(n,e):n instanceof vu?mS(n,e):function(s,a){const u=fS(s,a),d=BE(u)+BE(s.Pe);return lm(u)&&lm(s.Pe)?dS(d):Cg(s.serializer,d)}(n,e)}function eL(n,e,t){return n instanceof yu?pS(n,e):n instanceof vu?mS(n,e):t}function fS(n,e){return n instanceof ed?function(r){return lm(r)||function(a){return!!a&&"doubleValue"in a}(r)}(e)?e:{integerValue:0}:null}class Zh extends Dd{}class yu extends Dd{constructor(e){super(),this.elements=e}}function pS(n,e){const t=gS(e);for(const r of n.elements)t.some(s=>xr(s,r))||t.push(r);return{arrayValue:{values:t}}}class vu extends Dd{constructor(e){super(),this.elements=e}}function mS(n,e){let t=gS(e);for(const r of n.elements)t=t.filter(s=>!xr(s,r));return{arrayValue:{values:t}}}class ed extends Dd{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function BE(n){return yt(n.integerValue||n.doubleValue)}function gS(n){return wg(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function tL(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof yu&&s instanceof yu||r instanceof vu&&s instanceof vu?ga(r.elements,s.elements,xr):r instanceof ed&&s instanceof ed?xr(r.Pe,s.Pe):r instanceof Zh&&s instanceof Zh}(n.transform,e.transform)}class nL{constructor(e,t){this.version=e,this.transformResults=t}}class si{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new si}static exists(e){return new si(void 0,e)}static updateTime(e){return new si(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ih(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Od{}function _S(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new vS(n.key,si.none()):new Lu(n.key,n.data,si.none());{const t=n.data,r=Bn.empty();let s=new Dt(qt.comparator);for(let a of e.fields)if(!s.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),s=s.add(a)}return new ro(n.key,r,new ir(s.toArray()),si.none())}}function rL(n,e,t){n instanceof Lu?function(s,a,u){const d=s.value.clone(),f=zE(s.fieldTransforms,a,u.transformResults);d.setAll(f),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(n,e,t):n instanceof ro?function(s,a,u){if(!Ih(s.precondition,a))return void a.convertToUnknownDocument(u.version);const d=zE(s.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(yS(s)),f.setAll(d),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(n,e,t):function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()}(0,e,t)}function tu(n,e,t,r){return n instanceof Lu?function(a,u,d,f){if(!Ih(a.precondition,u))return d;const m=a.value.clone(),v=$E(a.fieldTransforms,f,u);return m.setAll(v),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null}(n,e,t,r):n instanceof ro?function(a,u,d,f){if(!Ih(a.precondition,u))return d;const m=$E(a.fieldTransforms,f,u),v=u.data;return v.setAll(yS(a)),v.setAll(m),u.convertToFoundDocument(u.version,v).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(E=>E.field))}(n,e,t,r):function(a,u,d){return Ih(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d}(n,e,t)}function iL(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),a=fS(r.transform,s||null);a!=null&&(t===null&&(t=Bn.empty()),t.set(r.field,a))}return t||null}function jE(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ga(r,s,(a,u)=>tL(a,u))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Lu extends Od{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ro extends Od{constructor(e,t,r,s,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function yS(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function zE(n,e,t){const r=new Map;Ke(n.length===t.length);for(let s=0;s<t.length;s++){const a=n[s],u=a.transform,d=e.data.field(a.field);r.set(a.field,eL(u,d,t[s]))}return r}function $E(n,e,t){const r=new Map;for(const s of n){const a=s.transform,u=t.data.field(s.field);r.set(s.field,ZO(a,u,e))}return r}class vS extends Od{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sL extends Od{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oL{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(e.key)&&rL(a,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=tu(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=tu(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=hS();return this.mutations.forEach(s=>{const a=e.get(s.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=t.has(s.key)?null:d;const f=_S(u,d);f!==null&&r.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(Se.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),be())}isEqual(e){return this.batchId===e.batchId&&ga(this.mutations,e.mutations,(t,r)=>jE(t,r))&&ga(this.baseMutations,e.baseMutations,(t,r)=>jE(t,r))}}class Rg{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Ke(e.mutations.length===r.length);let s=function(){return KO}();const a=e.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,r[u].version);return new Rg(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aL{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lL{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wt,Be;function uL(n){switch(n){default:return Te();case J.CANCELLED:case J.UNKNOWN:case J.DEADLINE_EXCEEDED:case J.RESOURCE_EXHAUSTED:case J.INTERNAL:case J.UNAVAILABLE:case J.UNAUTHENTICATED:return!1;case J.INVALID_ARGUMENT:case J.NOT_FOUND:case J.ALREADY_EXISTS:case J.PERMISSION_DENIED:case J.FAILED_PRECONDITION:case J.ABORTED:case J.OUT_OF_RANGE:case J.UNIMPLEMENTED:case J.DATA_LOSS:return!0}}function ES(n){if(n===void 0)return ui("GRPC error has no .code"),J.UNKNOWN;switch(n){case wt.OK:return J.OK;case wt.CANCELLED:return J.CANCELLED;case wt.UNKNOWN:return J.UNKNOWN;case wt.DEADLINE_EXCEEDED:return J.DEADLINE_EXCEEDED;case wt.RESOURCE_EXHAUSTED:return J.RESOURCE_EXHAUSTED;case wt.INTERNAL:return J.INTERNAL;case wt.UNAVAILABLE:return J.UNAVAILABLE;case wt.UNAUTHENTICATED:return J.UNAUTHENTICATED;case wt.INVALID_ARGUMENT:return J.INVALID_ARGUMENT;case wt.NOT_FOUND:return J.NOT_FOUND;case wt.ALREADY_EXISTS:return J.ALREADY_EXISTS;case wt.PERMISSION_DENIED:return J.PERMISSION_DENIED;case wt.FAILED_PRECONDITION:return J.FAILED_PRECONDITION;case wt.ABORTED:return J.ABORTED;case wt.OUT_OF_RANGE:return J.OUT_OF_RANGE;case wt.UNIMPLEMENTED:return J.UNIMPLEMENTED;case wt.DATA_LOSS:return J.DATA_LOSS;default:return Te()}}(Be=wt||(wt={}))[Be.OK=0]="OK",Be[Be.CANCELLED=1]="CANCELLED",Be[Be.UNKNOWN=2]="UNKNOWN",Be[Be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Be[Be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Be[Be.NOT_FOUND=5]="NOT_FOUND",Be[Be.ALREADY_EXISTS=6]="ALREADY_EXISTS",Be[Be.PERMISSION_DENIED=7]="PERMISSION_DENIED",Be[Be.UNAUTHENTICATED=16]="UNAUTHENTICATED",Be[Be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Be[Be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Be[Be.ABORTED=10]="ABORTED",Be[Be.OUT_OF_RANGE=11]="OUT_OF_RANGE",Be[Be.UNIMPLEMENTED=12]="UNIMPLEMENTED",Be[Be.INTERNAL=13]="INTERNAL",Be[Be.UNAVAILABLE=14]="UNAVAILABLE",Be[Be.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cL(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hL=new Ji([4294967295,4294967295],0);function WE(n){const e=cL().encode(n),t=new WI;return t.update(e),new Uint8Array(t.digest())}function HE(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Ji([t,r],0),new Ji([s,a],0)]}class Ag{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Wl(`Invalid padding: ${t}`);if(r<0)throw new Wl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Wl(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Wl(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Ji.fromNumber(this.Te)}de(e,t,r){let s=e.add(t.multiply(Ji.fromNumber(r)));return s.compare(hL)===1&&(s=new Ji([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=WE(e),[r,s]=HE(t);for(let a=0;a<this.hashCount;a++){const u=this.de(r,s,a);if(!this.Ee(u))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new Ag(a,s,t);return r.forEach(d=>u.insert(d)),u}insert(e){if(this.Te===0)return;const t=WE(e),[r,s]=HE(t);for(let a=0;a<this.hashCount;a++){const u=this.de(r,s,a);this.Ae(u)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Wl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,t,r,s,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,bu.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ld(Se.min(),s,new ft(Ve),ci(),be())}}class bu{constructor(e,t,r,s,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new bu(r,t,be(),be(),be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class wS{constructor(e,t){this.targetId=e,this.me=t}}class TS{constructor(e,t,r=Gt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class qE{constructor(){this.fe=0,this.ge=GE(),this.pe=Gt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=be(),t=be(),r=be();return this.ge.forEach((s,a)=>{switch(a){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:Te()}}),new bu(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=GE()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ke(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class dL{constructor(e){this.Be=e,this.Le=new Map,this.ke=ci(),this.qe=uh(),this.Qe=uh(),this.Ke=new ft(Ve)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.je(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.De(e.resumeToken));break;default:Te()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((r,s)=>{this.je(s)&&t(s)})}Je(e){const t=e.targetId,r=e.me.count,s=this.Ye(t);if(s){const a=s.target;if(cm(a))if(r===0){const u=new ye(a.path);this.We(t,u,tn.newNoDocument(u,Se.min()))}else Ke(r===1);else{const u=this.Ze(t);if(u!==r){const d=this.Xe(e),f=d?this.et(d,e,u):1;if(f!==0){this.He(t);const m=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,m)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=t;let u,d;try{u=us(r).toUint8Array()}catch(f){if(f instanceof ZI)return ma("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{d=new Ag(u,s,a)}catch(f){return ma(f instanceof Wl?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return d.Te===0?null:d}et(e,t,r){return t.me.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){const r=this.Be.getRemoteKeysForTarget(t);let s=0;return r.forEach(a=>{const u=this.Be.nt(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.We(t,a,null),s++)}),s}it(e){const t=new Map;this.Le.forEach((a,u)=>{const d=this.Ye(u);if(d){if(a.current&&cm(d.target)){const f=new ye(d.target.path);this.st(f).has(u)||this.ot(u,f)||this.We(u,f,tn.newNoDocument(f,e))}a.be&&(t.set(u,a.ve()),a.Ce())}});let r=be();this.Qe.forEach((a,u)=>{let d=!0;u.forEachWhile(f=>{const m=this.Ye(f);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(r=r.add(a))}),this.ke.forEach((a,u)=>u.setReadTime(e));const s=new Ld(e,t,this.Ke,this.ke,r);return this.ke=ci(),this.qe=uh(),this.Qe=uh(),this.Ke=new ft(Ve),s}Ue(e,t){if(!this.je(e))return;const r=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,t)?s.Fe(t,1):s.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Le.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new qE,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new Dt(Ve),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Dt(Ve),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new qE),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function uh(){return new ft(ye.comparator)}function GE(){return new ft(ye.comparator)}const fL={asc:"ASCENDING",desc:"DESCENDING"},pL={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},mL={and:"AND",or:"OR"};class gL{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function dm(n,e){return n.useProto3Json||Ad(e)?e:{value:e}}function td(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function IS(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function _L(n,e){return td(n,e.toTimestamp())}function kr(n){return Ke(!!n),Se.fromTimestamp(function(t){const r=ls(t);return new xt(r.seconds,r.nanos)}(n))}function Pg(n,e){return fm(n,e).canonicalString()}function fm(n,e){const t=function(s){return new ut(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function SS(n){const e=ut.fromString(n);return Ke(kS(e)),e}function pm(n,e){return Pg(n.databaseId,e.path)}function Lp(n,e){const t=SS(e);if(t.get(1)!==n.databaseId.projectId)throw new me(J.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new me(J.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ye(RS(t))}function CS(n,e){return Pg(n.databaseId,e)}function yL(n){const e=SS(n);return e.length===4?ut.emptyPath():RS(e)}function mm(n){return new ut(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function RS(n){return Ke(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function KE(n,e,t){return{name:pm(n,e),fields:t.value.mapValue.fields}}function vL(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:Te()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],a=function(m,v){return m.useProto3Json?(Ke(v===void 0||typeof v=="string"),Gt.fromBase64String(v||"")):(Ke(v===void 0||v instanceof Buffer||v instanceof Uint8Array),Gt.fromUint8Array(v||new Uint8Array))}(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&function(m){const v=m.code===void 0?J.UNKNOWN:ES(m.code);return new me(v,m.message||"")}(u);t=new TS(r,s,a,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Lp(n,r.document.name),a=kr(r.document.updateTime),u=r.document.createTime?kr(r.document.createTime):Se.min(),d=new Bn({mapValue:{fields:r.document.fields}}),f=tn.newFoundDocument(s,a,u,d),m=r.targetIds||[],v=r.removedTargetIds||[];t=new Sh(m,v,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Lp(n,r.document),a=r.readTime?kr(r.readTime):Se.min(),u=tn.newNoDocument(s,a),d=r.removedTargetIds||[];t=new Sh([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Lp(n,r.document),a=r.removedTargetIds||[];t=new Sh([],a,s,null)}else{if(!("filter"in e))return Te();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:a}=r,u=new lL(s,a),d=r.targetId;t=new wS(d,u)}}return t}function EL(n,e){let t;if(e instanceof Lu)t={update:KE(n,e.key,e.value)};else if(e instanceof vS)t={delete:pm(n,e.key)};else if(e instanceof ro)t={update:KE(n,e.key,e.data),updateMask:kL(e.fieldMask)};else{if(!(e instanceof sL))return Te();t={verify:pm(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(a,u){const d=u.transform;if(d instanceof Zh)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof yu)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof vu)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof ed)return{fieldPath:u.field.canonicalString(),increment:d.Pe};throw Te()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,a){return a.updateTime!==void 0?{updateTime:_L(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Te()}(n,e.precondition)),t}function wL(n,e){return n&&n.length>0?(Ke(e!==void 0),n.map(t=>function(s,a){let u=s.updateTime?kr(s.updateTime):kr(a);return u.isEqual(Se.min())&&(u=kr(a)),new nL(u,s.transformResults||[])}(t,e))):[]}function TL(n,e){return{documents:[CS(n,e.path)]}}function IL(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=CS(n,s);const a=function(m){if(m.length!==0)return PS(Dr.create(m,"and"))}(e.filters);a&&(t.structuredQuery.where=a);const u=function(m){if(m.length!==0)return m.map(v=>function(T){return{field:ta(T.field),direction:RL(T.dir)}}(v))}(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=dm(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{ct:t,parent:s}}function SL(n){let e=yL(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Ke(r===1);const v=t.from[0];v.allDescendants?s=v.collectionId:e=e.child(v.collectionId)}let a=[];t.where&&(a=function(E){const T=AS(E);return T instanceof Dr&&rS(T)?T.getFilters():[T]}(t.where));let u=[];t.orderBy&&(u=function(E){return E.map(T=>function(k){return new Jh(na(k.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(T))}(t.orderBy));let d=null;t.limit&&(d=function(E){let T;return T=typeof E=="object"?E.value:E,Ad(T)?null:T}(t.limit));let f=null;t.startAt&&(f=function(E){const T=!!E.before,A=E.values||[];return new Xh(A,T)}(t.startAt));let m=null;return t.endAt&&(m=function(E){const T=!E.before,A=E.values||[];return new Xh(A,T)}(t.endAt)),zO(e,s,u,a,d,"F",f,m)}function CL(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function AS(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=na(t.unaryFilter.field);return Nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=na(t.unaryFilter.field);return Nt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=na(t.unaryFilter.field);return Nt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=na(t.unaryFilter.field);return Nt.create(u,"!=",{nullValue:"NULL_VALUE"});default:return Te()}}(n):n.fieldFilter!==void 0?function(t){return Nt.create(na(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Te()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Dr.create(t.compositeFilter.filters.map(r=>AS(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Te()}}(t.compositeFilter.op))}(n):Te()}function RL(n){return fL[n]}function AL(n){return pL[n]}function PL(n){return mL[n]}function ta(n){return{fieldPath:n.canonicalString()}}function na(n){return qt.fromServerFormat(n.fieldPath)}function PS(n){return n instanceof Nt?function(t){if(t.op==="=="){if(bE(t.value))return{unaryFilter:{field:ta(t.field),op:"IS_NAN"}};if(LE(t.value))return{unaryFilter:{field:ta(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(bE(t.value))return{unaryFilter:{field:ta(t.field),op:"IS_NOT_NAN"}};if(LE(t.value))return{unaryFilter:{field:ta(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ta(t.field),op:AL(t.op),value:t.value}}}(n):n instanceof Dr?function(t){const r=t.getFilters().map(s=>PS(s));return r.length===1?r[0]:{compositeFilter:{op:PL(t.op),filters:r}}}(n):Te()}function kL(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function kS(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t,r,s,a=Se.min(),u=Se.min(),d=Gt.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=f}withSequenceNumber(e){return new Gi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Gi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NL{constructor(e){this.ht=e}}function xL(n){const e=SL({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?hm(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DL{constructor(){this.ln=new OL}addToCollectionParentIndex(e,t){return this.ln.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(as.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(as.min())}updateCollectionGroup(e,t,r){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class OL{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Dt(ut.comparator),a=!s.has(r);return this.index[t]=s.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Dt(ut.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class _n{static withCacheSize(e){return new _n(e,_n.DEFAULT_COLLECTION_PERCENTILE,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_n.DEFAULT_COLLECTION_PERCENTILE=10,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_n.DEFAULT=new _n(41943040,_n.DEFAULT_COLLECTION_PERCENTILE,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_n.DISABLED=new _n(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new va(0)}static Qn(){return new va(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE([n,e],[t,r]){const s=Ve(n,t);return s===0?Ve(e,r):s}class LL{constructor(e){this.Gn=e,this.buffer=new Dt(YE),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();YE(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class bL{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ae("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){La(t)?ae("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Oa(t)}await this.Yn(3e5)})}}class ML{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return K.resolve(Rd.oe);const r=new LL(t);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(QE)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),QE):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let r,s,a,u,d,f,m;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(E=>(E>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),s=this.params.maximumSequenceNumbersToCollect):s=E,u=Date.now(),this.nthSequenceNumber(e,s))).next(E=>(r=E,d=Date.now(),this.removeTargets(e,r,t))).next(E=>(a=E,f=Date.now(),this.removeOrphanedDocuments(e,r))).next(E=>(m=Date.now(),Zo()<=De.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-v}ms
	Determined least recently used ${s} in `+(d-u)+`ms
	Removed ${a} targets in `+(f-d)+`ms
	Removed ${E} documents in `+(m-f)+`ms
Total Duration: ${m-v}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:E})))}}function VL(n,e){return new ML(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FL{constructor(){this.changes=new no(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,tn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?K.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UL{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BL{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&tu(r.mutation,s,ir.empty(),xt.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,be()).next(()=>r))}getLocalViewOfDocuments(e,t,r=be()){const s=Hs();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(a=>{let u=$l();return a.forEach((d,f)=>{u=u.insert(d,f.overlayedDocument)}),u}))}getOverlayedDocuments(e,t){const r=Hs();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,be()))}populateOverlays(e,t,r){const s=[];return r.forEach(a=>{t.has(a)||s.push(a)}),this.documentOverlayCache.getOverlays(e,s).next(a=>{a.forEach((u,d)=>{t.set(u,d)})})}computeViews(e,t,r,s){let a=ci();const u=eu(),d=function(){return eu()}();return t.forEach((f,m)=>{const v=r.get(m.key);s.has(m.key)&&(v===void 0||v.mutation instanceof ro)?a=a.insert(m.key,m):v!==void 0?(u.set(m.key,v.mutation.getFieldMask()),tu(v.mutation,m,v.mutation.getFieldMask(),xt.now())):u.set(m.key,ir.empty())}),this.recalculateAndSaveOverlays(e,a).next(f=>(f.forEach((m,v)=>u.set(m,v)),t.forEach((m,v)=>{var E;return d.set(m,new UL(v,(E=u.get(m))!==null&&E!==void 0?E:null))}),d))}recalculateAndSaveOverlays(e,t){const r=eu();let s=new ft((u,d)=>u-d),a=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(u=>{for(const d of u)d.keys().forEach(f=>{const m=t.get(f);if(m===null)return;let v=r.get(f)||ir.empty();v=d.applyToLocalView(m,v),r.set(f,v);const E=(s.get(d.batchId)||be()).add(f);s=s.insert(d.batchId,E)})}).next(()=>{const u=[],d=s.getReverseIterator();for(;d.hasNext();){const f=d.getNext(),m=f.key,v=f.value,E=hS();v.forEach(T=>{if(!a.has(T)){const A=_S(t.get(T),r.get(T));A!==null&&E.set(T,A),a=a.add(T)}}),u.push(this.documentOverlayCache.saveOverlays(e,m,E))}return K.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(u){return ye.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):$O(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-a.size):K.resolve(Hs());let d=-1,f=a;return u.next(m=>K.forEach(m,(v,E)=>(d<E.largestBatchId&&(d=E.largestBatchId),a.get(v)?K.resolve():this.remoteDocumentCache.getEntry(e,v).next(T=>{f=f.insert(v,T)}))).next(()=>this.populateOverlays(e,m,a)).next(()=>this.computeViews(e,f,m,be())).next(v=>({batchId:d,changes:cS(v)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next(r=>{let s=$l();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const a=t.collectionGroup;let u=$l();return this.indexManager.getCollectionParents(e,a).next(d=>K.forEach(d,f=>{const m=function(E,T){return new kd(T,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,m,r,s).next(v=>{v.forEach((E,T)=>{u=u.insert(E,T)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,t,r,s){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,s))).next(u=>{a.forEach((f,m)=>{const v=m.getKey();u.get(v)===null&&(u=u.insert(v,tn.newInvalidDocument(v)))});let d=$l();return u.forEach((f,m)=>{const v=a.get(f);v!==void 0&&tu(v.mutation,m,ir.empty(),xt.now()),xd(t,m)&&(d=d.insert(f,m))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jL{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return K.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:kr(s.createTime)}}(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(s){return{name:s.name,query:xL(s.bundledQuery),readTime:kr(s.readTime)}}(t)),K.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zL{constructor(){this.overlays=new ft(ye.comparator),this.dr=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Hs();return K.forEach(t,s=>this.getOverlay(e,s).next(a=>{a!==null&&r.set(s,a)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,a)=>{this.Tt(e,t,a)}),K.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.dr.get(r);return s!==void 0&&(s.forEach(a=>this.overlays=this.overlays.remove(a)),this.dr.delete(r)),K.resolve()}getOverlaysForCollection(e,t,r){const s=Hs(),a=t.length+1,u=new ye(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const f=d.getNext().value,m=f.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===a&&f.largestBatchId>r&&s.set(f.getKey(),f)}return K.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let a=new ft((m,v)=>m-v);const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>r){let v=a.get(m.largestBatchId);v===null&&(v=Hs(),a=a.insert(m.largestBatchId,v)),v.set(m.getKey(),m)}}const d=Hs(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((m,v)=>d.set(m,v)),!(d.size()>=s)););return K.resolve(d)}Tt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.dr.get(s.largestBatchId).delete(r.key);this.dr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new aL(t,r));let a=this.dr.get(t);a===void 0&&(a=be(),this.dr.set(t,a)),this.dr.set(t,a.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $L{constructor(){this.sessionToken=Gt.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(){this.Er=new Dt(Ut.Ar),this.Rr=new Dt(Ut.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){const r=new Ut(e,t);this.Er=this.Er.add(r),this.Rr=this.Rr.add(r)}mr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.gr(new Ut(e,t))}pr(e,t){e.forEach(r=>this.removeReference(r,t))}yr(e){const t=new ye(new ut([])),r=new Ut(t,e),s=new Ut(t,e+1),a=[];return this.Rr.forEachInRange([r,s],u=>{this.gr(u),a.push(u.key)}),a}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new ye(new ut([])),r=new Ut(t,e),s=new Ut(t,e+1);let a=be();return this.Rr.forEachInRange([r,s],u=>{a=a.add(u.key)}),a}containsKey(e){const t=new Ut(e,0),r=this.Er.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ut{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return ye.comparator(e.key,t.key)||Ve(e.br,t.br)}static Vr(e,t){return Ve(e.br,t.br)||ye.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new Dt(Ut.Ar)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const a=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new oL(a,t,r,s);this.mutationQueue.push(u);for(const d of s)this.vr=this.vr.add(new Ut(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return K.resolve(u)}lookupMutationBatch(e,t){return K.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Fr(r),a=s<0?0:s;return K.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ut(t,0),s=new Ut(t,Number.POSITIVE_INFINITY),a=[];return this.vr.forEachInRange([r,s],u=>{const d=this.Cr(u.br);a.push(d)}),K.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Dt(Ve);return t.forEach(s=>{const a=new Ut(s,0),u=new Ut(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([a,u],d=>{r=r.add(d.br)})}),K.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let a=r;ye.isDocumentKey(a)||(a=a.child(""));const u=new Ut(new ye(a),0);let d=new Dt(Ve);return this.vr.forEachWhile(f=>{const m=f.key.path;return!!r.isPrefixOf(m)&&(m.length===s&&(d=d.add(f.br)),!0)},u),K.resolve(this.Mr(d))}Mr(e){const t=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Ke(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return K.forEach(t.mutations,s=>{const a=new Ut(s.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Bn(e){}containsKey(e,t){const r=new Ut(t,0),s=this.vr.firstAfterOrEqual(r);return K.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HL{constructor(e){this.Nr=e,this.docs=function(){return new ft(ye.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),a=s?s.size:0,u=this.Nr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return K.resolve(r?r.document.mutableCopy():tn.newInvalidDocument(t))}getEntries(e,t){let r=ci();return t.forEach(s=>{const a=this.docs.get(s);r=r.insert(s,a?a.document.mutableCopy():tn.newInvalidDocument(s))}),K.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let a=ci();const u=t.path,d=new ye(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){const{key:m,value:{document:v}}=f.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||wO(EO(v),r)<=0||(s.has(v.key)||xd(t,v))&&(a=a.insert(v.key,v.mutableCopy()))}return K.resolve(a)}getAllFromCollectionGroup(e,t,r,s){Te()}Br(e,t){return K.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new qL(this)}getSize(e){return K.resolve(this.size)}}class qL extends FL{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),K.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GL{constructor(e){this.persistence=e,this.Lr=new no(t=>Tg(t),Ig),this.lastRemoteSnapshotVersion=Se.min(),this.highestTargetId=0,this.kr=0,this.qr=new kg,this.targetCount=0,this.Qr=va.qn()}forEachTarget(e,t){return this.Lr.forEach((r,s)=>t(s)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.kr&&(this.kr=t),K.resolve()}Un(e){this.Lr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new va(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.Un(t),K.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,r){let s=0;const a=[];return this.Lr.forEach((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.Lr.delete(u),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),s++)}),K.waitFor(a).next(()=>s)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const r=this.Lr.get(t)||null;return K.resolve(r)}addMatchingKeys(e,t,r){return this.qr.mr(t,r),K.resolve()}removeMatchingKeys(e,t,r){this.qr.pr(t,r);const s=this.persistence.referenceDelegate,a=[];return s&&t.forEach(u=>{a.push(s.markPotentiallyOrphaned(e,u))}),K.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),K.resolve()}getMatchingKeysForTargetId(e,t){const r=this.qr.Sr(t);return K.resolve(r)}containsKey(e,t){return K.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Rd(0),this.Ur=!1,this.Ur=!0,this.Wr=new $L,this.referenceDelegate=e(this),this.Gr=new GL(this),this.indexManager=new DL,this.remoteDocumentCache=function(s){return new HL(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new NL(t),this.jr=new jL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new zL,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Kr[e.toKey()];return r||(r=new WL(t,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,r){ae("MemoryPersistence","Starting transaction:",e);const s=new KL(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(a=>this.referenceDelegate.Jr(s).next(()=>a)).toPromise().then(a=>(s.raiseOnCommittedEvent(),a))}Yr(e,t){return K.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,t)))}}class KL extends IO{constructor(e){super(),this.currentSequenceNumber=e}}class Ng{constructor(e){this.persistence=e,this.Zr=new kg,this.Xr=null}static ei(e){return new Ng(e)}get ti(){if(this.Xr)return this.Xr;throw Te()}addReference(e,t,r){return this.Zr.addReference(r,t),this.ti.delete(r.toString()),K.resolve()}removeReference(e,t,r){return this.Zr.removeReference(r,t),this.ti.add(r.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),K.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(a=>this.ti.add(a.toString()))}).next(()=>r.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.ti,r=>{const s=ye.fromPath(r);return this.ni(e,s).next(a=>{a||t.removeEntry(s,Se.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(r=>{r?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return K.or([()=>K.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class nd{constructor(e,t){this.persistence=e,this.ri=new no(r=>RO(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=VL(this,t)}static ei(e,t){return new nd(e,t)}Hr(){}Jr(e){return K.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}nr(e){let t=0;return this.er(e,r=>{t++}).next(()=>t)}er(e,t){return K.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(a=>a?K.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.Br(e,u=>this.ir(e,u,t).next(d=>{d||(r++,a.removeEntry(u,Se.min()))})).next(()=>a.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),K.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),K.resolve()}removeReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),K.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=wh(e.data.value)),t}ir(e,t,r){return K.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.ri.get(t);return K.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Wi=r,this.Gi=s}static zi(e,t){let r=be(),s=be();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new xg(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return _A()?8:SO(nn())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,r,s){const a={result:null};return this.Xi(e,t).next(u=>{a.result=u}).next(()=>{if(!a.result)return this.es(e,t,s,r).next(u=>{a.result=u})}).next(()=>{if(a.result)return;const u=new QL;return this.ts(e,t,u).next(d=>{if(a.result=d,this.Hi)return this.ns(e,t,u,d.size)})}).next(()=>a.result)}ns(e,t,r,s){return r.documentReadCount<this.Ji?(Zo()<=De.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",ea(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),K.resolve()):(Zo()<=De.DEBUG&&ae("QueryEngine","Query:",ea(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(Zo()<=De.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",ea(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pr(t))):K.resolve())}Xi(e,t){if(UE(t))return K.resolve(null);let r=Pr(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=hm(t,null,"F"),r=Pr(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(a=>{const u=be(...a);return this.Zi.getDocuments(e,u).next(d=>this.indexManager.getMinOffset(e,r).next(f=>{const m=this.rs(t,d);return this.ss(t,m,u,f.readTime)?this.Xi(e,hm(t,null,"F")):this.os(e,m,t,f)}))})))}es(e,t,r,s){return UE(t)||s.isEqual(Se.min())?K.resolve(null):this.Zi.getDocuments(e,r).next(a=>{const u=this.rs(t,a);return this.ss(t,u,r,s)?K.resolve(null):(Zo()<=De.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ea(t)),this.os(e,u,t,vO(s,-1)).next(d=>d))})}rs(e,t){let r=new Dt(lS(e));return t.forEach((s,a)=>{xd(e,a)&&(r=r.add(a))}),r}ss(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}ts(e,t,r){return Zo()<=De.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",ea(t)),this.Zi.getDocumentsMatchingQuery(e,t,as.min(),r)}os(e,t,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(a=>(t.forEach(u=>{a=a.insert(u.key,u)}),a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XL{constructor(e,t,r,s){this.persistence=e,this._s=t,this.serializer=s,this.us=new ft(Ve),this.cs=new no(a=>Tg(a),Ig),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BL(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function JL(n,e,t,r){return new XL(n,e,t,r)}async function xS(n,e){const t=Ce(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(a=>(s=a,t.Ps(e),t.mutationQueue.getAllMutationBatches(r))).next(a=>{const u=[],d=[];let f=be();for(const m of s){u.push(m.batchId);for(const v of m.mutations)f=f.add(v.key)}for(const m of a){d.push(m.batchId);for(const v of m.mutations)f=f.add(v.key)}return t.localDocuments.getDocuments(r,f).next(m=>({Ts:m,removedBatchIds:u,addedBatchIds:d}))})})}function ZL(n,e){const t=Ce(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),a=t.hs.newChangeBuffer({trackRemovals:!0});return function(d,f,m,v){const E=m.batch,T=E.keys();let A=K.resolve();return T.forEach(k=>{A=A.next(()=>v.getEntry(f,k)).next(M=>{const L=m.docVersions.get(k);Ke(L!==null),M.version.compareTo(L)<0&&(E.applyToRemoteDocument(M,m),M.isValidDocument()&&(M.setReadTime(m.commitVersion),v.addEntry(M)))})}),A.next(()=>d.mutationQueue.removeMutationBatch(f,E))}(t,r,e,a).next(()=>a.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(d){let f=be();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(f=f.add(d.batch.mutations[m].key));return f}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function DS(n){const e=Ce(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function eb(n,e){const t=Ce(n),r=e.snapshotVersion;let s=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const u=t.hs.newChangeBuffer({trackRemovals:!0});s=t.us;const d=[];e.targetChanges.forEach((v,E)=>{const T=s.get(E);if(!T)return;d.push(t.Gr.removeMatchingKeys(a,v.removedDocuments,E).next(()=>t.Gr.addMatchingKeys(a,v.addedDocuments,E)));let A=T.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(E)!==null?A=A.withResumeToken(Gt.EMPTY_BYTE_STRING,Se.min()).withLastLimboFreeSnapshotVersion(Se.min()):v.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(v.resumeToken,r)),s=s.insert(E,A),function(M,L,H){return M.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=3e8?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(T,A,v)&&d.push(t.Gr.updateTargetData(a,A))});let f=ci(),m=be();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,v))}),d.push(tb(a,u,e.documentUpdates).next(v=>{f=v.Is,m=v.ds})),!r.isEqual(Se.min())){const v=t.Gr.getLastRemoteSnapshotVersion(a).next(E=>t.Gr.setTargetsMetadata(a,a.currentSequenceNumber,r));d.push(v)}return K.waitFor(d).next(()=>u.apply(a)).next(()=>t.localDocuments.getLocalViewOfDocuments(a,f,m)).next(()=>f)}).then(a=>(t.us=s,a))}function tb(n,e,t){let r=be(),s=be();return t.forEach(a=>r=r.add(a)),e.getEntries(n,r).next(a=>{let u=ci();return t.forEach((d,f)=>{const m=a.get(d);f.isFoundDocument()!==m.isFoundDocument()&&(s=s.add(d)),f.isNoDocument()&&f.version.isEqual(Se.min())?(e.removeEntry(d,f.readTime),u=u.insert(d,f)):!m.isValidDocument()||f.version.compareTo(m.version)>0||f.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(f),u=u.insert(d,f)):ae("LocalStore","Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",f.version)}),{Is:u,ds:s}})}function nb(n,e){const t=Ce(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function rb(n,e){const t=Ce(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Gr.getTargetData(r,e).next(a=>a?(s=a,K.resolve(s)):t.Gr.allocateTargetId(r).next(u=>(s=new Gi(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.us=t.us.insert(r.targetId,r),t.cs.set(e,r.targetId)),r})}async function gm(n,e,t){const r=Ce(n),s=r.us.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,u=>r.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!La(u))throw u;ae("LocalStore",`Failed to update sequence numbers for target ${e}: ${u}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function XE(n,e,t){const r=Ce(n);let s=Se.min(),a=be();return r.persistence.runTransaction("Execute query","readwrite",u=>function(f,m,v){const E=Ce(f),T=E.cs.get(v);return T!==void 0?K.resolve(E.us.get(T)):E.Gr.getTargetData(m,v)}(r,u,Pr(e)).next(d=>{if(d)return s=d.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(u,d.targetId).next(f=>{a=f})}).next(()=>r._s.getDocumentsMatchingQuery(u,e,t?s:Se.min(),t?a:be())).next(d=>(ib(r,HO(e),d),{documents:d,Es:a})))}function ib(n,e,t){let r=n.ls.get(e)||Se.min();t.forEach((s,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)}),n.ls.set(e,r)}class JE{constructor(){this.activeTargetIds=XO()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sb{constructor(){this._o=new JE,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,r){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new JE,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ae("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ae("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ch=null;function bp(){return ch===null?ch=function(){return 268435456+Math.round(2147483648*Math.random())}():ch++,"0x"+ch.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="WebChannelConnection";class ub extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+t.host,this.Mo=`projects/${s}/databases/${a}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Oo(t,r,s,a,u){const d=bp(),f=this.No(t,r.toUriEncodedString());ae("RestConnection",`Sending RPC '${t}' ${d}:`,f,s);const m={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(m,a,u),this.Lo(t,f,m,s).then(v=>(ae("RestConnection",`Received RPC '${t}' ${d}: `,v),v),v=>{throw ma("RestConnection",`RPC '${t}' ${d} failed with error: `,v,"url: ",f,"request:",s),v})}ko(t,r,s,a,u,d){return this.Oo(t,r,s,a,u)}Bo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Da}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((a,u)=>t[u]=a),s&&s.headers.forEach((a,u)=>t[u]=a)}No(t,r){const s=ab[t];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,r,s){const a=bp();return new Promise((u,d)=>{const f=new HI;f.setWithCredentials(!0),f.listenOnce(qI.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Eh.NO_ERROR:const v=f.getResponseJson();ae(Jt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(v)),u(v);break;case Eh.TIMEOUT:ae(Jt,`RPC '${e}' ${a} timed out`),d(new me(J.DEADLINE_EXCEEDED,"Request time out"));break;case Eh.HTTP_ERROR:const E=f.getStatus();if(ae(Jt,`RPC '${e}' ${a} failed with status:`,E,"response text:",f.getResponseText()),E>0){let T=f.getResponseJson();Array.isArray(T)&&(T=T[0]);const A=T==null?void 0:T.error;if(A&&A.status&&A.message){const k=function(L){const H=L.toLowerCase().replace(/_/g,"-");return Object.values(J).indexOf(H)>=0?H:J.UNKNOWN}(A.status);d(new me(k,A.message))}else d(new me(J.UNKNOWN,"Server responded with status "+f.getStatus()))}else d(new me(J.UNAVAILABLE,"Connection failed."));break;default:Te()}}finally{ae(Jt,`RPC '${e}' ${a} completed.`)}});const m=JSON.stringify(s);ae(Jt,`RPC '${e}' ${a} sending request:`,s),f.send(t,"POST",m,r,15)})}qo(e,t,r){const s=bp(),a=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=QI(),d=KI(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(f.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Bo(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const v=a.join("");ae(Jt,`Creating RPC '${e}' stream ${s}: ${v}`,f);const E=u.createWebChannel(v,f);let T=!1,A=!1;const k=new lb({Eo:L=>{A?ae(Jt,`Not sending because RPC '${e}' stream ${s} is closed:`,L):(T||(ae(Jt,`Opening RPC '${e}' stream ${s} transport.`),E.open(),T=!0),ae(Jt,`RPC '${e}' stream ${s} sending:`,L),E.send(L))},Ao:()=>E.close()}),M=(L,H,G)=>{L.listen(H,ie=>{try{G(ie)}catch(de){setTimeout(()=>{throw de},0)}})};return M(E,zl.EventType.OPEN,()=>{A||(ae(Jt,`RPC '${e}' stream ${s} transport opened.`),k.So())}),M(E,zl.EventType.CLOSE,()=>{A||(A=!0,ae(Jt,`RPC '${e}' stream ${s} transport closed`),k.Do())}),M(E,zl.EventType.ERROR,L=>{A||(A=!0,ma(Jt,`RPC '${e}' stream ${s} transport errored:`,L),k.Do(new me(J.UNAVAILABLE,"The operation could not be completed")))}),M(E,zl.EventType.MESSAGE,L=>{var H;if(!A){const G=L.data[0];Ke(!!G);const ie=G,de=(ie==null?void 0:ie.error)||((H=ie[0])===null||H===void 0?void 0:H.error);if(de){ae(Jt,`RPC '${e}' stream ${s} received error:`,de);const Re=de.status;let Ie=function(P){const x=wt[P];if(x!==void 0)return ES(x)}(Re),D=de.message;Ie===void 0&&(Ie=J.INTERNAL,D="Unknown error status: "+Re+" with message "+de.message),A=!0,k.Do(new me(Ie,D)),E.close()}else ae(Jt,`RPC '${e}' stream ${s} received:`,G),k.vo(G)}}),M(d,GI.STAT_EVENT,L=>{L.stat===om.PROXY?ae(Jt,`RPC '${e}' stream ${s} detected buffering proxy`):L.stat===om.NOPROXY&&ae(Jt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.bo()},0),k}}function Mp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(n){return new gL(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e,t,r=1e3,s=1.5,a=6e4){this.li=e,this.timerId=t,this.Qo=r,this.Ko=s,this.$o=a,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,t-r);s>0&&ae("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e,t,r,s,a,u,d,f){this.li=e,this.Yo=r,this.Zo=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new OS(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===J.RESOURCE_EXHAUSTED?(ui(t.toString()),ui("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===J.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===t&&this.I_(r,s)},r=>{e(()=>{const s=new me(J.UNKNOWN,"Fetching auth token failed: "+r.message);return this.d_(s)})})}I_(e,t){const r=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.d_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return ae("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(ae("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cb extends LS{constructor(e,t,r,s,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=vL(this.serializer,e),r=function(a){if(!("targetChange"in a))return Se.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?Se.min():u.readTime?kr(u.readTime):Se.min()}(e);return this.listener.R_(t,r)}V_(e){const t={};t.database=mm(this.serializer),t.addTarget=function(a,u){let d;const f=u.target;if(d=cm(f)?{documents:TL(a,f)}:{query:IL(a,f).ct},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=IS(a,u.resumeToken);const m=dm(a,u.expectedCount);m!==null&&(d.expectedCount=m)}else if(u.snapshotVersion.compareTo(Se.min())>0){d.readTime=td(a,u.snapshotVersion.toTimestamp());const m=dm(a,u.expectedCount);m!==null&&(d.expectedCount=m)}return d}(this.serializer,e);const r=CL(this.serializer,e);r&&(t.labels=r),this.c_(t)}m_(e){const t={};t.database=mm(this.serializer),t.removeTarget=e,this.c_(t)}}class hb extends LS{constructor(e,t,r,s,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Ke(!!e.streamToken),this.lastStreamToken=e.streamToken,Ke(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Ke(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=wL(e.writeResults,e.commitTime),r=kr(e.commitTime);return this.listener.y_(r,t)}w_(){const e={};e.database=mm(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>EL(this.serializer,r))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new me(J.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Oo(e,fm(t,r),s,a,u)).catch(a=>{throw a.name==="FirebaseError"?(a.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new me(J.UNKNOWN,a.toString())})}ko(e,t,r,s,a){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,d])=>this.connection.ko(e,fm(t,r),s,u,d,a)).catch(u=>{throw u.name==="FirebaseError"?(u.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new me(J.UNKNOWN,u.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class fb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(ui(t),this.C_=!1):ae("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,t,r,s,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=a,this.Q_.uo(u=>{r.enqueueAndForget(async()=>{io(this)&&(ae("RemoteStore","Restarting streams for network reachability change."),await async function(f){const m=Ce(f);m.k_.add(4),await Mu(m),m.K_.set("Unknown"),m.k_.delete(4),await Md(m)}(this))})}),this.K_=new fb(r,s)}}async function Md(n){if(io(n))for(const e of n.q_)await e(!0)}async function Mu(n){for(const e of n.q_)await e(!1)}function bS(n,e){const t=Ce(n);t.L_.has(e.targetId)||(t.L_.set(e.targetId,e),bg(t)?Lg(t):ba(t).s_()&&Og(t,e))}function Dg(n,e){const t=Ce(n),r=ba(t);t.L_.delete(e),r.s_()&&MS(t,e),t.L_.size===0&&(r.s_()?r.a_():io(t)&&t.K_.set("Unknown"))}function Og(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ba(n).V_(e)}function MS(n,e){n.U_.xe(e),ba(n).m_(e)}function Lg(n){n.U_=new dL({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.L_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),ba(n).start(),n.K_.F_()}function bg(n){return io(n)&&!ba(n).i_()&&n.L_.size>0}function io(n){return Ce(n).k_.size===0}function VS(n){n.U_=void 0}async function mb(n){n.K_.set("Online")}async function gb(n){n.L_.forEach((e,t)=>{Og(n,e)})}async function _b(n,e){VS(n),bg(n)?(n.K_.O_(e),Lg(n)):n.K_.set("Unknown")}async function yb(n,e,t){if(n.K_.set("Online"),e instanceof TS&&e.state===2&&e.cause)try{await async function(s,a){const u=a.cause;for(const d of a.targetIds)s.L_.has(d)&&(await s.remoteSyncer.rejectListen(d,u),s.L_.delete(d),s.U_.removeTarget(d))}(n,e)}catch(r){ae("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await rd(n,r)}else if(e instanceof Sh?n.U_.$e(e):e instanceof wS?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(Se.min()))try{const r=await DS(n.localStore);t.compareTo(r)>=0&&await function(a,u){const d=a.U_.it(u);return d.targetChanges.forEach((f,m)=>{if(f.resumeToken.approximateByteSize()>0){const v=a.L_.get(m);v&&a.L_.set(m,v.withResumeToken(f.resumeToken,u))}}),d.targetMismatches.forEach((f,m)=>{const v=a.L_.get(f);if(!v)return;a.L_.set(f,v.withResumeToken(Gt.EMPTY_BYTE_STRING,v.snapshotVersion)),MS(a,f);const E=new Gi(v.target,f,m,v.sequenceNumber);Og(a,E)}),a.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(r){ae("RemoteStore","Failed to raise snapshot:",r),await rd(n,r)}}async function rd(n,e,t){if(!La(e))throw e;n.k_.add(1),await Mu(n),n.K_.set("Offline"),t||(t=()=>DS(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ae("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await Md(n)})}function FS(n,e){return e().catch(t=>rd(n,t,e))}async function Vd(n){const e=Ce(n),t=hs(e);let r=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;vb(e);)try{const s=await nb(e.localStore,r);if(s===null){e.B_.length===0&&t.a_();break}r=s.batchId,Eb(e,s)}catch(s){await rd(e,s)}US(e)&&BS(e)}function vb(n){return io(n)&&n.B_.length<10}function Eb(n,e){n.B_.push(e);const t=hs(n);t.s_()&&t.f_&&t.g_(e.mutations)}function US(n){return io(n)&&!hs(n).i_()&&n.B_.length>0}function BS(n){hs(n).start()}async function wb(n){hs(n).w_()}async function Tb(n){const e=hs(n);for(const t of n.B_)e.g_(t.mutations)}async function Ib(n,e,t){const r=n.B_.shift(),s=Rg.from(r,e,t);await FS(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Vd(n)}async function Sb(n,e){e&&hs(n).f_&&await async function(r,s){if(function(u){return uL(u)&&u!==J.ABORTED}(s.code)){const a=r.B_.shift();hs(r).__(),await FS(r,()=>r.remoteSyncer.rejectFailedWrite(a.batchId,s)),await Vd(r)}}(n,e),US(n)&&BS(n)}async function ew(n,e){const t=Ce(n);t.asyncQueue.verifyOperationInProgress(),ae("RemoteStore","RemoteStore received new credentials");const r=io(t);t.k_.add(3),await Mu(t),r&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Md(t)}async function Cb(n,e){const t=Ce(n);e?(t.k_.delete(2),await Md(t)):e||(t.k_.add(2),await Mu(t),t.K_.set("Unknown"))}function ba(n){return n.W_||(n.W_=function(t,r,s){const a=Ce(t);return a.b_(),new cb(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(n.datastore,n.asyncQueue,{Ro:mb.bind(null,n),mo:gb.bind(null,n),po:_b.bind(null,n),R_:yb.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),bg(n)?Lg(n):n.K_.set("Unknown")):(await n.W_.stop(),VS(n))})),n.W_}function hs(n){return n.G_||(n.G_=function(t,r,s){const a=Ce(t);return a.b_(),new hb(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:wb.bind(null,n),po:Sb.bind(null,n),p_:Tb.bind(null,n),y_:Ib.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await Vd(n)):(await n.G_.stop(),n.B_.length>0&&(ae("RemoteStore",`Stopping write stream with ${n.B_.length} pending writes`),n.B_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,t,r,s,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=a,this.deferred=new Zi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,a){const u=Date.now()+r,d=new Mg(e,t,u,s,a);return d.start(r),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new me(J.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vg(n,e){if(ui("AsyncQueue",`${e}: ${n}`),La(n))return new me(J.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{static emptySet(e){return new ca(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ye.comparator(t.key,r.key):(t,r)=>ye.comparator(t.key,r.key),this.keyedMap=$l(),this.sortedSet=new ft(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ca)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new ca;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(){this.z_=new ft(ye.comparator)}track(e){const t=e.doc.key,r=this.z_.get(t);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(t,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(t):e.type===1&&r.type===2?this.z_=this.z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):Te():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Ea{constructor(e,t,r,s,a,u,d,f,m){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=m}static fromInitialDocuments(e,t,r,s,a){const u=[];return t.forEach(d=>{u.push({type:0,doc:d})}),new Ea(e,t,ca.emptySet(t),u,r,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class Ab{constructor(){this.queries=nw(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,r){const s=Ce(t),a=s.queries;s.queries=nw(),a.forEach((u,d)=>{for(const f of d.J_)f.onError(r)})})(this,new me(J.ABORTED,"Firestore shutting down"))}}function nw(){return new no(n=>aS(n),Nd)}async function jS(n,e){const t=Ce(n);let r=3;const s=e.query;let a=t.queries.get(s);a?!a.Y_()&&e.Z_()&&(r=2):(a=new Rb,r=e.Z_()?0:1);try{switch(r){case 0:a.H_=await t.onListen(s,!0);break;case 1:a.H_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(u){const d=Vg(u,`Initialization of query '${ea(e.query)}' failed`);return void e.onError(d)}t.queries.set(s,a),a.J_.push(e),e.ea(t.onlineState),a.H_&&e.ta(a.H_)&&Fg(t)}async function zS(n,e){const t=Ce(n),r=e.query;let s=3;const a=t.queries.get(r);if(a){const u=a.J_.indexOf(e);u>=0&&(a.J_.splice(u,1),a.J_.length===0?s=e.Z_()?0:1:!a.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Pb(n,e){const t=Ce(n);let r=!1;for(const s of e){const a=s.query,u=t.queries.get(a);if(u){for(const d of u.J_)d.ta(s)&&(r=!0);u.H_=s}}r&&Fg(t)}function kb(n,e,t){const r=Ce(n),s=r.queries.get(e);if(s)for(const a of s.J_)a.onError(t);r.queries.delete(e)}function Fg(n){n.X_.forEach(e=>{e.next()})}var _m,rw;(rw=_m||(_m={})).na="default",rw.Cache="cache";class $S{constructor(e,t,r){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ea(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const r=t!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=Ea.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==_m.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e){this.key=e}}class HS{constructor(e){this.key=e}}class Nb{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=be(),this.mutatedKeys=be(),this.Va=lS(e),this.ma=new ca(this.Va)}get fa(){return this.Ea}ga(e,t){const r=t?t.pa:new tw,s=t?t.ma:this.ma;let a=t?t.mutatedKeys:this.mutatedKeys,u=s,d=!1;const f=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,m=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((v,E)=>{const T=s.get(v),A=xd(this.query,E)?E:null,k=!!T&&this.mutatedKeys.has(T.key),M=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let L=!1;T&&A?T.data.isEqual(A.data)?k!==M&&(r.track({type:3,doc:A}),L=!0):this.ya(T,A)||(r.track({type:2,doc:A}),L=!0,(f&&this.Va(A,f)>0||m&&this.Va(A,m)<0)&&(d=!0)):!T&&A?(r.track({type:0,doc:A}),L=!0):T&&!A&&(r.track({type:1,doc:T}),L=!0,(f||m)&&(d=!0)),L&&(A?(u=u.add(A),a=M?a.add(v):a.delete(v)):(u=u.delete(v),a=a.delete(v)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const v=this.query.limitType==="F"?u.last():u.first();u=u.delete(v.key),a=a.delete(v.key),r.track({type:1,doc:v})}return{ma:u,pa:r,ss:d,mutatedKeys:a}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const a=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const u=e.pa.j_();u.sort((v,E)=>function(A,k){const M=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te()}};return M(A)-M(k)}(v.type,E.type)||this.Va(v.doc,E.doc)),this.wa(r),s=s!=null&&s;const d=t&&!s?this.Sa():[],f=this.Ra.size===0&&this.current&&!s?1:0,m=f!==this.Aa;return this.Aa=f,u.length!==0||m?{snapshot:new Ea(this.query,e.ma,a,u,e.mutatedKeys,f===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:d}:{ba:d}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new tw,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.Ea=this.Ea.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ea=this.Ea.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=be(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const t=[];return e.forEach(r=>{this.Ra.has(r)||t.push(new HS(r))}),this.Ra.forEach(r=>{e.has(r)||t.push(new WS(r))}),t}va(e){this.Ea=e.Es,this.Ra=be();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return Ea.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class xb{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Db{constructor(e){this.key=e,this.Fa=!1}}class Ob{constructor(e,t,r,s,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.Ma={},this.xa=new no(d=>aS(d),Nd),this.Oa=new Map,this.Na=new Set,this.Ba=new ft(ye.comparator),this.La=new Map,this.ka=new kg,this.qa={},this.Qa=new Map,this.Ka=va.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function Lb(n,e,t=!0){const r=XS(n);let s;const a=r.xa.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.Ca()):s=await qS(r,e,t,!0),s}async function bb(n,e){const t=XS(n);await qS(t,e,!0,!1)}async function qS(n,e,t,r){const s=await rb(n.localStore,Pr(e)),a=s.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let d;return r&&(d=await Mb(n,e,a,u==="current",s.resumeToken)),n.isPrimaryClient&&t&&bS(n.remoteStore,s),d}async function Mb(n,e,t,r,s){n.Ua=(E,T,A)=>async function(M,L,H,G){let ie=L.view.ga(H);ie.ss&&(ie=await XE(M.localStore,L.query,!1).then(({documents:D})=>L.view.ga(D,ie)));const de=G&&G.targetChanges.get(L.targetId),Re=G&&G.targetMismatches.get(L.targetId)!=null,Ie=L.view.applyChanges(ie,M.isPrimaryClient,de,Re);return sw(M,L.targetId,Ie.ba),Ie.snapshot}(n,E,T,A);const a=await XE(n.localStore,e,!0),u=new Nb(e,a.Es),d=u.ga(a.documents),f=bu.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),m=u.applyChanges(d,n.isPrimaryClient,f);sw(n,t,m.ba);const v=new xb(e,t,u);return n.xa.set(e,v),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),m.snapshot}async function Vb(n,e,t){const r=Ce(n),s=r.xa.get(e),a=r.Oa.get(s.targetId);if(a.length>1)return r.Oa.set(s.targetId,a.filter(u=>!Nd(u,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await gm(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Dg(r.remoteStore,s.targetId),ym(r,s.targetId)}).catch(Oa)):(ym(r,s.targetId),await gm(r.localStore,s.targetId,!0))}async function Fb(n,e){const t=Ce(n),r=t.xa.get(e),s=t.Oa.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Dg(t.remoteStore,r.targetId))}async function Ub(n,e,t){const r=qb(n);try{const s=await function(u,d){const f=Ce(u),m=xt.now(),v=d.reduce((A,k)=>A.add(k.key),be());let E,T;return f.persistence.runTransaction("Locally write mutations","readwrite",A=>{let k=ci(),M=be();return f.hs.getEntries(A,v).next(L=>{k=L,k.forEach((H,G)=>{G.isValidDocument()||(M=M.add(H))})}).next(()=>f.localDocuments.getOverlayedDocuments(A,k)).next(L=>{E=L;const H=[];for(const G of d){const ie=iL(G,E.get(G.key).overlayedDocument);ie!=null&&H.push(new ro(G.key,ie,eS(ie.value.mapValue),si.exists(!0)))}return f.mutationQueue.addMutationBatch(A,m,H,d)}).next(L=>{T=L;const H=L.applyToLocalDocumentSet(E,M);return f.documentOverlayCache.saveOverlays(A,L.batchId,H)})}).then(()=>({batchId:T.batchId,changes:cS(E)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(u,d,f){let m=u.qa[u.currentUser.toKey()];m||(m=new ft(Ve)),m=m.insert(d,f),u.qa[u.currentUser.toKey()]=m}(r,s.batchId,t),await Vu(r,s.changes),await Vd(r.remoteStore)}catch(s){const a=Vg(s,"Failed to persist write");t.reject(a)}}async function GS(n,e){const t=Ce(n);try{const r=await eb(t.localStore,e);e.targetChanges.forEach((s,a)=>{const u=t.La.get(a);u&&(Ke(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?u.Fa=!0:s.modifiedDocuments.size>0?Ke(u.Fa):s.removedDocuments.size>0&&(Ke(u.Fa),u.Fa=!1))}),await Vu(t,r,e)}catch(r){await Oa(r)}}function iw(n,e,t){const r=Ce(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.xa.forEach((a,u)=>{const d=u.view.ea(e);d.snapshot&&s.push(d.snapshot)}),function(u,d){const f=Ce(u);f.onlineState=d;let m=!1;f.queries.forEach((v,E)=>{for(const T of E.J_)T.ea(d)&&(m=!0)}),m&&Fg(f)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Bb(n,e,t){const r=Ce(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.La.get(e),a=s&&s.key;if(a){let u=new ft(ye.comparator);u=u.insert(a,tn.newNoDocument(a,Se.min()));const d=be().add(a),f=new Ld(Se.min(),new Map,new ft(Ve),u,d);await GS(r,f),r.Ba=r.Ba.remove(a),r.La.delete(e),Ug(r)}else await gm(r.localStore,e,!1).then(()=>ym(r,e,t)).catch(Oa)}async function jb(n,e){const t=Ce(n),r=e.batch.batchId;try{const s=await ZL(t.localStore,e);QS(t,r,null),KS(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Vu(t,s)}catch(s){await Oa(s)}}async function zb(n,e,t){const r=Ce(n);try{const s=await function(u,d){const f=Ce(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let v;return f.mutationQueue.lookupMutationBatch(m,d).next(E=>(Ke(E!==null),v=E.keys(),f.mutationQueue.removeMutationBatch(m,E))).next(()=>f.mutationQueue.performConsistencyCheck(m)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(m,v,d)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,v)).next(()=>f.localDocuments.getDocuments(m,v))})}(r.localStore,e);QS(r,e,t),KS(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Vu(r,s)}catch(s){await Oa(s)}}function KS(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function QS(n,e,t){const r=Ce(n);let s=r.qa[r.currentUser.toKey()];if(s){const a=s.get(e);a&&(t?a.reject(t):a.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function ym(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Oa.get(e))n.xa.delete(r),t&&n.Ma.Wa(r,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(r=>{n.ka.containsKey(r)||YS(n,r)})}function YS(n,e){n.Na.delete(e.path.canonicalString());const t=n.Ba.get(e);t!==null&&(Dg(n.remoteStore,t),n.Ba=n.Ba.remove(e),n.La.delete(t),Ug(n))}function sw(n,e,t){for(const r of t)r instanceof WS?(n.ka.addReference(r.key,e),$b(n,r)):r instanceof HS?(ae("SyncEngine","Document no longer in limbo: "+r.key),n.ka.removeReference(r.key,e),n.ka.containsKey(r.key)||YS(n,r.key)):Te()}function $b(n,e){const t=e.key,r=t.path.canonicalString();n.Ba.get(t)||n.Na.has(r)||(ae("SyncEngine","New document in limbo: "+t),n.Na.add(r),Ug(n))}function Ug(n){for(;n.Na.size>0&&n.Ba.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new ye(ut.fromString(e)),r=n.Ka.next();n.La.set(r,new Db(t)),n.Ba=n.Ba.insert(t,r),bS(n.remoteStore,new Gi(Pr(Sg(t.path)),r,"TargetPurposeLimboResolution",Rd.oe))}}async function Vu(n,e,t){const r=Ce(n),s=[],a=[],u=[];r.xa.isEmpty()||(r.xa.forEach((d,f)=>{u.push(r.Ua(f,e,t).then(m=>{var v;if((m||t)&&r.isPrimaryClient){const E=m?!m.fromCache:(v=t==null?void 0:t.targetChanges.get(f.targetId))===null||v===void 0?void 0:v.current;r.sharedClientState.updateQueryState(f.targetId,E?"current":"not-current")}if(m){s.push(m);const E=xg.zi(f.targetId,m);a.push(E)}}))}),await Promise.all(u),r.Ma.R_(s),await async function(f,m){const v=Ce(f);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>K.forEach(m,T=>K.forEach(T.Wi,A=>v.persistence.referenceDelegate.addReference(E,T.targetId,A)).next(()=>K.forEach(T.Gi,A=>v.persistence.referenceDelegate.removeReference(E,T.targetId,A)))))}catch(E){if(!La(E))throw E;ae("LocalStore","Failed to update sequence numbers: "+E)}for(const E of m){const T=E.targetId;if(!E.fromCache){const A=v.us.get(T),k=A.snapshotVersion,M=A.withLastLimboFreeSnapshotVersion(k);v.us=v.us.insert(T,M)}}}(r.localStore,a))}async function Wb(n,e){const t=Ce(n);if(!t.currentUser.isEqual(e)){ae("SyncEngine","User change. New user:",e.toKey());const r=await xS(t.localStore,e);t.currentUser=e,function(a,u){a.Qa.forEach(d=>{d.forEach(f=>{f.reject(new me(J.CANCELLED,u))})}),a.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Vu(t,r.Ts)}}function Hb(n,e){const t=Ce(n),r=t.La.get(e);if(r&&r.Fa)return be().add(r.key);{let s=be();const a=t.Oa.get(e);if(!a)return s;for(const u of a){const d=t.xa.get(u);s=s.unionWith(d.view.fa)}return s}}function XS(n){const e=Ce(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=GS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Hb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Bb.bind(null,e),e.Ma.R_=Pb.bind(null,e.eventManager),e.Ma.Wa=kb.bind(null,e.eventManager),e}function qb(n){const e=Ce(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zb.bind(null,e),e}class id{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=bd(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return JL(this.persistence,new YL,e.initialUser,this.serializer)}ja(e){return new NS(Ng.ei,this.serializer)}za(e){return new sb}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}id.provider={build:()=>new id};class Gb extends id{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Ke(this.persistence.referenceDelegate instanceof nd);const r=this.persistence.referenceDelegate.garbageCollector;return new bL(r,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?_n.withCacheSize(this.cacheSizeBytes):_n.DEFAULT;return new NS(r=>nd.ei(r,t),this.serializer)}}class vm{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>iw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Wb.bind(null,this.syncEngine),await Cb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ab}()}createDatastore(e){const t=bd(e.databaseInfo.databaseId),r=function(a){return new ub(a)}(e.databaseInfo);return function(a,u,d,f){return new db(a,u,d,f)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,a,u,d){return new pb(r,s,a,u,d)}(this.localStore,this.datastore,e.asyncQueue,t=>iw(this.syncEngine,t,0),function(){return ZE.p()?new ZE:new ob}())}createSyncEngine(e,t){return function(s,a,u,d,f,m,v){const E=new Ob(s,a,u,d,f,m);return v&&(E.$a=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const a=Ce(s);ae("RemoteStore","RemoteStore shutting down."),a.k_.add(5),await Mu(a),a.Q_.shutdown(),a.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}vm.provider={build:()=>new vm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):ui("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,t,r,s,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Zt.UNAUTHENTICATED,this.clientId=XI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,async u=>{ae("FirestoreClient","Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(ae("FirestoreClient","Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Vg(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Vp(n,e){n.asyncQueue.verifyOperationInProgress(),ae("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await xS(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function ow(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Qb(n);ae("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>ew(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>ew(e.remoteStore,s)),n._onlineComponents=e}async function Qb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ae("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vp(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===J.FAILED_PRECONDITION||s.code===J.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;ma("Error using user provided cache. Falling back to memory cache: "+t),await Vp(n,new id)}}else ae("FirestoreClient","Using default OfflineComponentProvider"),await Vp(n,new Gb(void 0));return n._offlineComponents}async function ZS(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ae("FirestoreClient","Using user provided OnlineComponentProvider"),await ow(n,n._uninitializedComponentsProvider._online)):(ae("FirestoreClient","Using default OnlineComponentProvider"),await ow(n,new vm))),n._onlineComponents}function Yb(n){return ZS(n).then(e=>e.syncEngine)}async function Em(n){const e=await ZS(n),t=e.eventManager;return t.onListen=Lb.bind(null,e.syncEngine),t.onUnlisten=Vb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=bb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Fb.bind(null,e.syncEngine),t}function Xb(n,e,t={}){const r=new Zi;return n.asyncQueue.enqueueAndForget(async()=>function(a,u,d,f,m){const v=new JS({next:T=>{v.eu(),u.enqueueAndForget(()=>zS(a,E)),T.fromCache&&f.source==="server"?m.reject(new me(J.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(T)},error:T=>m.reject(T)}),E=new $S(d,v,{includeMetadataChanges:!0,ua:!0});return jS(a,E)}(await Em(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(n,e,t){if(!t)throw new me(J.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Jb(n,e,t,r){if(e===!0&&r===!0)throw new me(J.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function lw(n){if(!ye.isDocumentKey(n))throw new me(J.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function uw(n){if(ye.isDocumentKey(n))throw new me(J.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Bg(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Te()}function es(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new me(J.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Bg(n);throw new me(J.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new me(J.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new me(J.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Jb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=eC((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new me(J.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new me(J.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new me(J.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fd{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cw({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new me(J.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new me(J.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cw(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new cO;switch(r.type){case"firstParty":return new pO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new me(J.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=aw.get(t);r&&(ae("ComponentProvider","Removing Datastore"),aw.delete(t),r.terminate())}(this),Promise.resolve()}}function Zb(n,e,t,r={}){var s;const a=(n=es(n,Fd))._getSettings(),u=`${e}:${t}`;if(a.host!=="firestore.googleapis.com"&&a.host!==u&&ma("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},a),{host:u,ssl:!1})),r.mockUserToken){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=Zt.MOCK_USER;else{d=bw(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new me(J.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Zt(m)}n._authCredentials=new hO(new YI(d,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Fu(this.firestore,e,this._query)}}class Pn{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ts(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pn(this.firestore,e,this._key)}}class ts extends Fu{constructor(e,t,r){super(e,t,Sg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pn(this.firestore,null,new ye(e))}withConverter(e){return new ts(this.firestore,e,this._path)}}function nC(n,e,...t){if(n=Tt(n),tC("collection","path",e),n instanceof Fd){const r=ut.fromString(e,...t);return uw(r),new ts(n,null,r)}{if(!(n instanceof Pn||n instanceof ts))throw new me(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ut.fromString(e,...t));return uw(r),new ts(n.firestore,null,r)}}function e2(n,e,...t){if(n=Tt(n),arguments.length===1&&(e=XI.newId()),tC("doc","path",e),n instanceof Fd){const r=ut.fromString(e,...t);return lw(r),new Pn(n,null,new ye(r))}{if(!(n instanceof Pn||n instanceof ts))throw new me(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ut.fromString(e,...t));return lw(r),new Pn(n.firestore,n instanceof ts?n.converter:null,new ye(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new OS(this,"async_queue_retry"),this.fu=()=>{const r=Mp();r&&ae("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const t=Mp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const t=Mp();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const t=new Zi;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!La(e))throw e;ae("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(u){let d=u.message||"";return u.stack&&(d=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),d}(r);throw ui("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=t,t}enqueueAfterDelay(e,t,r){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const s=Mg.createAndSchedule(this,e,t,r,a=>this.Su(a));return this.Eu.push(s),s}pu(){this.Au&&Te()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Eu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}function dw(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const a of r)if(a in s&&typeof s[a]=="function")return!0;return!1}(n,["next","error","complete"])}class Eu extends Fd{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new hw,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new hw(e),this._firestoreClient=void 0,await e}}}function t2(n,e){const t=typeof n=="object"?n:Lm(),r=typeof n=="string"?n:"(default)",s=fd(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const a=Dw("firestore");a&&Zb(s,...a)}return s}function jg(n){if(n._terminated)throw new me(J.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||n2(n),n._firestoreClient}function n2(n){var e,t,r;const s=n._freezeSettings(),a=function(d,f,m,v){return new kO(d,f,m,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,eC(v.experimentalLongPollingOptions),v.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Kb(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&function(d){const f=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(f),_online:f}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wa(Gt.fromBase64String(e))}catch(t){throw new me(J.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new wa(Gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new me(J.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new me(J.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new me(J.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ve(this._lat,e._lat)||Ve(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==s[a])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r2=/^__.*__$/;class i2{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ro(e,this.data,this.fieldMask,t,this.fieldTransforms):new Lu(e,this.data,t,this.fieldTransforms)}}function iC(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te()}}class Hg{constructor(e,t,r,s,a,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,a===void 0&&this.Fu(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Hg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:r,Nu:!1});return s.Bu(e),s}Lu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return sd(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(iC(this.Mu)&&r2.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class s2{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||bd(e)}$u(e,t,r,s=!1){return new Hg({Mu:e,methodName:t,Ku:r,path:qt.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function o2(n){const e=n._freezeSettings(),t=bd(n._databaseId);return new s2(n._databaseId,!!e.ignoreUndefinedProperties,t)}function a2(n,e,t,r,s,a={}){const u=n.$u(a.merge||a.mergeFields?2:0,e,t,s);lC("Data must be an object, but it was:",u,r);const d=oC(r,u);let f,m;if(a.merge)f=new ir(u.fieldMask),m=u.fieldTransforms;else if(a.mergeFields){const v=[];for(const E of a.mergeFields){const T=l2(e,E,t);if(!u.contains(T))throw new me(J.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);c2(v,T)||v.push(T)}f=new ir(v),m=u.fieldTransforms.filter(E=>f.covers(E.field))}else f=null,m=u.fieldTransforms;return new i2(new Bn(d),f,m)}function sC(n,e){if(aC(n=Tt(n)))return lC("Unsupported field value:",e,n),oC(n,e);if(n instanceof rC)return function(r,s){if(!iC(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(s);a&&s.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const a=[];let u=0;for(const d of r){let f=sC(d,s.ku(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}}(n,e)}return function(r,s){if((r=Tt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return JO(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=xt.fromDate(r);return{timestampValue:td(s.serializer,a)}}if(r instanceof xt){const a=new xt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:td(s.serializer,a)}}if(r instanceof $g)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof wa)return{bytesValue:IS(s.serializer,r._byteString)};if(r instanceof Pn){const a=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw s.qu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Pg(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Wg)return function(u,d){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:u.toArray().map(f=>{if(typeof f!="number")throw d.qu("VectorValues must only contain numeric values.");return Cg(d.serializer,f)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${Bg(r)}`)}(n,e)}function oC(n,e){const t={};return JI(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):to(n,(r,s)=>{const a=sC(s,e.Ou(r));a!=null&&(t[r]=a)}),{mapValue:{fields:t}}}function aC(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof xt||n instanceof $g||n instanceof wa||n instanceof Pn||n instanceof rC||n instanceof Wg)}function lC(n,e,t){if(!aC(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Bg(t);throw r==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+r)}}function l2(n,e,t){if((e=Tt(e))instanceof zg)return e._internalPath;if(typeof e=="string")return uC(n,e);throw sd("Field path arguments must be of type string or ",n,!1,void 0,t)}const u2=new RegExp("[~\\*/\\[\\]]");function uC(n,e,t){if(e.search(u2)>=0)throw sd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new zg(...e.split("."))._internalPath}catch{throw sd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function sd(n,e,t,r,s){const a=r&&!r.isEmpty(),u=s!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${r}`),u&&(f+=` in document ${s}`),f+=")"),new me(J.INVALID_ARGUMENT,d+n+f)}function c2(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e,t,r,s,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Pn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new h2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(hC("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class h2 extends cC{data(){return super.data()}}function hC(n,e){return typeof e=="string"?uC(n,e):e instanceof zg?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new me(J.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class d2{convertValue(e,t="none"){switch(cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return yt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(us(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return to(e,(s,a)=>{r[s]=this.convertValue(a,t)}),r}convertVectorValue(e){var t,r,s;const a=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(u=>yt(u.doubleValue));return new Wg(a)}convertGeoPoint(e){return new $g(yt(e.latitude),yt(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Pd(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(mu(e));default:return null}}convertTimestamp(e){const t=ls(e);return new xt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ut.fromString(e);Ke(kS(r));const s=new gu(r.get(1),r.get(3)),a=new ye(r.popFirst(5));return s.isEqual(t)||ui(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f2(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fC extends cC{constructor(e,t,r,s,a,u){super(e,t,r,s,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ch(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(hC("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Ch extends fC{data(e={}){return super.data(e)}}class pC{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Hl(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ch(this._firestore,this._userDataWriter,r.key,r,new Hl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new me(J.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,a){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map(d=>{const f=new Ch(s._firestore,s._userDataWriter,d.doc.key,d.doc,new Hl(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);return d.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}})}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(d=>a||d.type!==3).map(d=>{const f=new Ch(s._firestore,s._userDataWriter,d.doc.key,d.doc,new Hl(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);let m=-1,v=-1;return d.type!==0&&(m=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),v=u.indexOf(d.doc.key)),{type:p2(d.type),doc:f,oldIndex:m,newIndex:v}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function p2(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te()}}class qg extends d2{constructor(e){super(),this.firestore=e}convertBytes(e){return new wa(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Pn(this.firestore,null,t)}}function m2(n){n=es(n,Fu);const e=es(n.firestore,Eu),t=jg(e),r=new qg(e);return dC(n._query),Xb(t,n._query).then(s=>new pC(e,r,n,s))}function g2(n,e,t){n=es(n,Pn);const r=es(n.firestore,Eu),s=f2(n.converter,e);return y2(r,[a2(o2(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,si.none())])}function _2(n,...e){var t,r,s;n=Tt(n);let a={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||dw(e[u])||(a=e[u],u++);const d={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(dw(e[u])){const E=e[u];e[u]=(t=E.next)===null||t===void 0?void 0:t.bind(E),e[u+1]=(r=E.error)===null||r===void 0?void 0:r.bind(E),e[u+2]=(s=E.complete)===null||s===void 0?void 0:s.bind(E)}let f,m,v;if(n instanceof Pn)m=es(n.firestore,Eu),v=Sg(n._key.path),f={next:E=>{e[u]&&e[u](v2(m,n,E))},error:e[u+1],complete:e[u+2]};else{const E=es(n,Fu);m=es(E.firestore,Eu),v=E._query;const T=new qg(m);f={next:A=>{e[u]&&e[u](new pC(m,T,E,A))},error:e[u+1],complete:e[u+2]},dC(n._query)}return function(T,A,k,M){const L=new JS(M),H=new $S(A,L,k);return T.asyncQueue.enqueueAndForget(async()=>jS(await Em(T),H)),()=>{L.eu(),T.asyncQueue.enqueueAndForget(async()=>zS(await Em(T),H))}}(jg(m),v,d,f)}function y2(n,e){return function(r,s){const a=new Zi;return r.asyncQueue.enqueueAndForget(async()=>Ub(await Yb(r),s,a)),a.promise}(jg(n),e)}function v2(n,e,t){const r=t.docs.get(e._key),s=new qg(n);return new fC(n,s,e._key,r,new Hl(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Da=s})(Zs),qs(new rs("firestore",(r,{instanceIdentifier:s,options:a})=>{const u=r.getProvider("app").getImmediate(),d=new Eu(new dO(r.getProvider("auth-internal")),new gO(r.getProvider("app-check-internal")),function(m,v){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new me(J.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gu(m.options.projectId,v)}(u,s),u);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d},"PUBLIC").setMultipleInstances(!0)),Cr(PE,"4.7.6",e),Cr(PE,"4.7.6","esm2017")})();const E2={apiKey:"AIzaSyDyF-ScyV0oCxsUKEMkP1zz8Mvtahu2HRI",authDomain:"attendenceapp-90319.firebaseapp.com",databaseURL:"https://attendenceapp-90319-default-rtdb.asia-southeast1.firebasedatabase.app/",projectId:"attendenceapp-90319",storageBucket:"attendenceapp-90319.appspot.com",messagingSenderId:"248030669461",appId:"1:248030669461:web:585f77b9da5cb1fd05899c",measurementId:"G-9322E9XM2X"},Gg=Bw(E2),Ma=Z1(Gg),Kg=t2(Gg);vh(Gg);const mC=$.createContext();function Qg(){return $.useContext(mC)}const gC=$.createContext(),Yg=()=>$.useContext(gC),w2=({children:n})=>{const[e,t]=$.useState(""),r={organisationId:e,setOrganisationId:t};return Y.jsx(gC.Provider,{value:r,children:n})};function T2({children:n}){const[e,t]=$.useState(null),[r,s]=$.useState(!1),[a,u]=$.useState(!0),[d,f]=$.useState("");$.useEffect(()=>zk(Ma,m),[]);async function m(E){E?(t({...E}),s(!0),f(E.displayName||"Unknown User")):(t(null),s(!1),f("")),u(!1)}const v={currentUser:e,userLoggedIn:r,loading:a,userName:d,setUserName:f};return Y.jsx(mC.Provider,{value:v,children:Y.jsx(w2,{children:!a&&n})})}function I2(){const n=Ca(),{userLoggedIn:e}=Qg();if(e)return Y.jsx(ad,{to:"/home",replace:!0});const t=()=>{n("/login")},r=()=>{n("/register")};return Y.jsxs("div",{className:nh.buttons,children:[Y.jsx("img",{className:nh.logo,src:"tecXaroLogo.png",alt:"Logo"}),Y.jsx("h1",{children:"Gate Pass+"}),Y.jsx("div",{className:nh.login,children:Y.jsx("button",{onClick:t,children:"Login"})}),Y.jsx("div",{className:nh.register,children:Y.jsx("button",{onClick:r,children:"Register"})})]})}const S2="_main_12jpm_1",C2="_back_12jpm_25",R2="_hero_12jpm_37",A2="_welcome_12jpm_53",P2="_inputEmail_12jpm_73",k2="_inputPassword_12jpm_95",N2="_inputOrganisationId_12jpm_115",x2="_loginBtn_12jpm_137",D2="_forgetPassword_12jpm_165",O2="_line_12jpm_187",L2="_signUp_12jpm_245",Un={main:S2,back:C2,hero:R2,welcome:A2,continue:"_continue_12jpm_61",inputEmail:P2,inputPassword:k2,inputOrganisationId:N2,loginBtn:x2,forgetPassword:D2,line:O2,signUp:L2},b2=async(n,e)=>Fk(Ma,n,e),M2=(n,e)=>Uk(Ma,n,e),V2=async()=>{try{const n=await m1(Ma);if(n)return n.user}catch(n){console.error("Error handling redirect result:",n)}},F2=()=>Ma.signOut(),U2=n=>Vk(Ma,n);function B2(){const{setOrganisationId:n}=Yg(),e=Ca(),{userLoggedIn:t}=Qg(),[r,s]=$.useState(""),[a,u]=$.useState(""),[d,f]=$.useState(!1),[m,v]=$.useState("");$.useEffect(()=>{(async()=>{const M=await V2();M&&(console.log("User signed in via redirect:",M),e("/home"))})()},[e]);const E=async k=>{if(k.preventDefault(),!d){if(f(!0),!m.trim()){alert("Please enter a valid Organisation ID"),f(!1);return}try{const L=(await m2(nC(Kg,"UserData"))).docs.map(G=>({id:G.id,...G.data()}));if(console.log("Users from Firestore:",L),!L.find(G=>G.orgId===m)){alert("Invalid Organisation ID"),f(!1);return}n(m),await M2(r,a),e("/home",{state:{organisationId:m}})}catch(M){alert(M.message),console.log("Organisation ID after submission:",m),console.log(M),f(!1)}}},T=()=>{if(!r){alert("Please enter your email first!");return}U2(r).then(()=>alert("Password reset email sent! Check your inbox.")).catch(k=>alert("Error: "+k.message))},A=()=>{e("/start")};return Y.jsxs("div",{className:Un.main,children:[t&&Y.jsx(ad,{to:"/home",replace:!0}),Y.jsx("nav",{children:Y.jsx("button",{onClick:A,className:Un.back,children:Y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Y.jsx("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"})})})}),Y.jsxs("div",{className:Un.hero,children:[Y.jsx("h1",{className:Un.welcome,children:"Welcome!"}),Y.jsx("h2",{className:Un.continue,children:"Sign in to continue"}),Y.jsxs("form",{onSubmit:E,children:[Y.jsx("input",{className:Un.inputEmail,autoComplete:"email",required:!0,value:r,onChange:k=>s(k.target.value),type:"email",placeholder:"Enter your email"}),Y.jsx("input",{className:Un.inputPassword,autoComplete:"current-password",required:!0,value:a,onChange:k=>u(k.target.value),type:"password",placeholder:"Enter your Password"}),Y.jsx("input",{className:Un.inputOrganisationId,required:!0,value:m,onChange:k=>v(k.target.value),type:"text",placeholder:"Enter Organisation ID"}),Y.jsx("button",{className:Un.loginBtn,disabled:d,type:"submit",children:d?"Signing In...":"Sign In"})]}),Y.jsx("button",{onClick:T,className:Un.forgetPassword,children:"Forget password?"}),Y.jsx("div",{className:Un.line,children:Y.jsx("span",{children:"or"})}),Y.jsxs("h5",{className:Un.signUp,children:["Don't have an account? ",Y.jsx(km,{to:"/register",children:Y.jsx("button",{children:"Sign up"})})]})]})]})}const j2="_main_1t5r9_1",z2="_back_1t5r9_25",$2="_hero_1t5r9_37",W2="_welcome_1t5r9_53",H2="_inputUsername_1t5r9_73",q2="_inputEmail_1t5r9_93",G2="_inputPassword_1t5r9_115",K2="_inputOrganisationId_1t5r9_135",Q2="_inputOrganisationPassword_1t5r9_155",Y2="_loginBtn_1t5r9_177",X2="_forgetPassword_1t5r9_205",J2="_signUp_1t5r9_227",Er={main:j2,back:z2,hero:$2,welcome:W2,continue:"_continue_1t5r9_61",inputUsername:H2,inputEmail:q2,inputPassword:G2,inputOrganisationId:K2,inputOrganisationPassword:Q2,loginBtn:Y2,forgetPassword:X2,signUp:J2};function Z2(){const{userLoggedIn:n,setUserName:e}=Qg(),{setOrganisationId:t}=Yg(),[r,s]=$.useState(""),[a,u]=$.useState(""),[d,f]=$.useState(""),[m,v]=$.useState(!1),[E,T]=$.useState(""),A=Ca(),k=()=>{A("/start")},M=async L=>{if(L.preventDefault(),!m){v(!0);try{const H=await b2(a,d),{user:G}=H;t(E);const ie=e2(Kg,"UserData",G.uid);await g2(ie,{name:r,email:a,orgId:E,createdAt:new Date}),e(r),A("/home")}catch(H){console.error("Error during registration:",H.message),alert("Registration failed: "+H.message)}finally{v(!1)}}};return Y.jsxs("div",{className:Er.main,children:[n&&Y.jsx(ad,{to:"/home",replace:!0}),Y.jsx("nav",{children:Y.jsx("button",{onClick:k,className:Er.back,children:Y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Y.jsx("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"})})})}),Y.jsxs("div",{className:Er.hero,children:[Y.jsx("h1",{className:Er.welcome,children:"Hi!"}),Y.jsx("h2",{className:Er.continue,children:"Create a new account"}),Y.jsxs("form",{onSubmit:M,children:[Y.jsx("input",{className:Er.inputUsername,required:!0,value:r,onChange:L=>{s(L.target.value),e(L.target.value)},type:"text",placeholder:"Enter your username"}),Y.jsx("input",{className:Er.inputEmail,autoComplete:"email",required:!0,value:a,onChange:L=>u(L.target.value),type:"email",placeholder:"Enter your email"}),Y.jsx("input",{className:Er.inputPassword,disabled:m,autoComplete:"new-password",required:!0,value:d,onChange:L=>f(L.target.value),type:"password",placeholder:"Enter your Password"}),Y.jsx("input",{className:Er.inputOrganisationId,disabled:m,autoComplete:"organization",required:!0,value:E,onChange:L=>T(L.target.value),type:"text",placeholder:"Enter Organisation Id"}),Y.jsx("button",{className:Er.loginBtn,disabled:m,type:"submit",children:m?"Signing Up...":"Sign Up"})]})]})]})}const eM="_main_13cf0_1",tM="_nav_13cf0_11",nM="_logo_13cf0_31",rM="_account_13cf0_37",iM="_footer_13cf0_43",sM="_addStudent_13cf0_67",oM="_StudentEntrySection_13cf0_93",aM="_inputEnrollment_13cf0_121",lM="_cross_13cf0_153",uM="_submitBtn_13cf0_167",cM="_outsideStudentsList_13cf0_197",hM="_studentItem_13cf0_229",dM="_title_13cf0_255",fM="_aboveDets_13cf0_261",pM="_belowDets_13cf0_271",mM="_studentEnteredBtn_13cf0_283",gM="_profile_13cf0_303",_M="_profilePic_13cf0_329",yM="_logoutBtn_13cf0_363",vM="_profileBack_13cf0_391",EM="_searchBtn_13cf0_401",wM="_highText_13cf0_413",TM="_paymentPage_13cf0_419",IM="_registerBtn_13cf0_439",Ge={main:eM,nav:tM,logo:nM,account:rM,footer:iM,addStudent:sM,StudentEntrySection:oM,inputEnrollment:aM,cross:lM,submitBtn:uM,outsideStudentsList:cM,studentItem:hM,title:dM,aboveDets:fM,belowDets:pM,studentEnteredBtn:mM,profile:gM,profilePic:_M,logoutBtn:yM,profileBack:vM,searchBtn:EM,highText:wM,paymentPage:TM,registerBtn:IM};function SM(){const n=Ca(),[e,t]=$.useState(""),[r,s]=$.useState(""),[a,u]=$.useState(""),[d,f]=$.useState(!1),[m,v]=$.useState([]),[E,T]=$.useState(!1),[A,k]=$.useState(!1),{organisationId:M}=Yg(),[L,H]=$.useState(localStorage.getItem("organisationId")||"");$.useEffect(()=>{!M&&!L?(console.error("Organisation ID is missing. Redirecting to login..."),n("/login")):(M?(H(M),localStorage.setItem("organisationId",M)):localStorage.setItem("organisationId",L),G())},[M]);const G=()=>{const R=vh(),We=M||L;if(!We)return;const Ye=Op(R,We);eO(Ye).then(Xe=>{if(Xe.exists()){const xe=Xe.val(),re=Object.keys(xe).map(pe=>({name:xe[pe].Name,phoneNo:xe[pe].PhoneNumber,exitTime:xe[pe].ExitTime}));v(re)}else console.log("No data available")}).catch(Xe=>{console.error("Error fetching data:",Xe)})},ie=R=>{const We=vh(),Ye=M||L;if(!Ye)return;const Xe=Op(We,`${Ye}/${R}`);ZD(Xe).then(()=>{console.log(`Student ${R} data has been deleted.`),G()}).catch(xe=>{console.error("Error deleting data:",xe)})},de=async R=>{R.preventDefault();const We=M||L;if(!We)return;let Ye=new Date().getHours(),Xe=new Date().getMinutes(),xe=Ye>=12?"PM":"AM";Ye>12&&(Ye-=12),Ye===0&&(Ye=12),Xe<10&&(Xe=`0${Xe}`);const re=`${Ye}:${Xe} ${xe}`,pe=nC(Kg,"studentDataSet");_2(pe,se=>{const q=se.docs.map(ce=>({...ce.data(),key:ce.id})).find(ce=>ce.enrollment===a);if(q){t(q.studentName),s(q.phoneNo);const ce=vh(),Ae=Op(ce,`${We}/${q.studentName}`);$I(Ae,{Name:q.studentName,PhoneNumber:q.phoneNo,EnrollmentNumber:a,ExitTime:re}).then(()=>{console.log("Student data saved successfully!"),G(),Re(),f(!1)}).catch(Pe=>{console.error("Error saving data:",Pe),alert("Failed to save student data.")})}else alert("Student not found!")})},Re=()=>{u(""),f(!1)},Ie=R=>ie(R),D=()=>f(!0),S=()=>f(!1),P=R=>u(R.target.value),x=()=>T(!0),b=()=>T(!1),F=()=>{F2().then(()=>{localStorage.removeItem("organisationId"),n("/login")})};return Y.jsxs("div",{className:Ge.main,children:[Y.jsxs("div",{className:Ge.nav,children:[Y.jsx("img",{className:Ge.logo,src:"x.png",alt:"logo"}),Y.jsx("svg",{onClick:x,className:Ge.account,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Y.jsx("path",{d:"M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"})})]}),!A&&Y.jsxs("div",{className:Ge.hero,children:[Y.jsx("h2",{className:Ge.title,children:"Students Entries:"}),Y.jsx("div",{className:Ge.outsideStudentsList,children:Y.jsx("ol",{children:m.map((R,We)=>Y.jsxs("li",{className:Ge.studentItem,children:[Y.jsxs("div",{className:Ge.aboveDets,children:[Y.jsx("h2",{children:R.name}),Y.jsx("h3",{children:R.exitTime})]}),Y.jsxs("div",{className:Ge.belowDets,children:[Y.jsxs("h4",{children:[Y.jsx("strong",{children:"Phone No.: "}),R.phoneNo]}),Y.jsx("button",{onClick:()=>{Ie(R.name)},className:Ge.studentEnteredBtn,children:"Student Entered"})]})]},We))})})]}),!A&&Y.jsx("div",{className:Ge.footer,children:Y.jsx("div",{className:Ge.addStudent,onClick:D,children:"Student Entry"})}),A&&Y.jsxs("div",{className:Ge.paymentPage,children:[Y.jsxs("p",{className:Ge.textInfo,children:["The ",Y.jsx("span",{className:Ge.highText,children:"GatePass+"})," addresses a significant issue in hostel management, where students manually record their entries and exits in physical registers. This traditional system is highly prone to errors, as ",Y.jsx("span",{className:Ge.highText,children:"students often fill in incorrect details,"})," manipulate their entry times, or even evade proper logging. Additionally, managing and retrieving past records becomes cumbersome, leading to inefficiencies in tracking student movements. To solve this, the app provides a",Y.jsx("span",{className:Ge.highText,children:"digital solution"})," where hostel security can seamlessly enter a students enrollment number and this app will fetch rest important information from database, ensuring accurate and tamper-proof logging of",Y.jsx("span",{className:Ge.highText,children:"  entries and exits."})," The system also enables ",Y.jsx("span",{className:Ge.highText,children:" real-time tracking "}),"of students currently outside the campus and maintains a structured history of all movements significantly improving ,",Y.jsx("span",{className:Ge.highText,children:"security, accountability, and administrative efficiency."})]}),Y.jsx("button",{className:Ge.registerBtn,children:"Register Now!"})]}),d&&Y.jsxs("div",{className:Ge.StudentEntrySection,children:[Y.jsxs("form",{onSubmit:de,children:[Y.jsx("input",{type:"number",required:!0,onChange:R=>{P(R)},className:Ge.inputEnrollment,placeholder:"Enter Enrollment number"}),Y.jsx("button",{type:"submit",className:Ge.submitBtn,children:"Submit"})]}),Y.jsx("div",{className:Ge.cross,onClick:S,children:Y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Y.jsx("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"})})})]}),E&&Y.jsxs("div",{className:Ge.profile,children:[Y.jsx("svg",{onClick:b,className:Ge.profileBack,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Y.jsx("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"})}),Y.jsx("div",{className:Ge.profilePic,children:Y.jsx("img",{src:"profilePic.avif",alt:""})}),Y.jsx("button",{onClick:F,className:Ge.logoutBtn,children:"Log out"})]})]})}function CM(){return Y.jsxs(d0,{children:[Y.jsx(Jo,{path:"/",element:Y.jsx(ad,{to:"/start",replace:!0})}),Y.jsx(Jo,{path:"/start",element:Y.jsx(I2,{})}),Y.jsx(Jo,{path:"/login",element:Y.jsx(B2,{})}),Y.jsx(Jo,{path:"/register",element:Y.jsx(Z2,{})}),Y.jsx(Jo,{path:"/home",element:Y.jsx(SM,{})})]})}J0.createRoot(document.getElementById("root")).render(Y.jsx(TR.StrictMode,{children:Y.jsx(M0,{children:Y.jsxs(T2,{children:[" ",Y.jsx(CM,{})]})})}));
