(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function _y(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var $h={exports:{}},wa={},Hh={exports:{}},xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm;function K0(){if(Vm)return xe;Vm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),A=Symbol.iterator;function R(O){return O===null||typeof O!="object"?null:(O=A&&O[A]||O["@@iterator"],typeof O=="function"?O:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,X={};function z(O,H,ce){this.props=O,this.context=H,this.refs=X,this.updater=ce||j}z.prototype.isReactComponent={},z.prototype.setState=function(O,H){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,H,"setState")},z.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function ge(){}ge.prototype=z.prototype;function ue(O,H,ce){this.props=O,this.context=H,this.refs=X,this.updater=ce||j}var ye=ue.prototype=new ge;ye.constructor=ue,K(ye,z.prototype),ye.isPureReactComponent=!0;var Ie=Array.isArray,$e=Object.prototype.hasOwnProperty,Ce={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function S(O,H,ce){var Re,Pe={},Oe=null,Ue=null;if(H!=null)for(Re in H.ref!==void 0&&(Ue=H.ref),H.key!==void 0&&(Oe=""+H.key),H)$e.call(H,Re)&&!D.hasOwnProperty(Re)&&(Pe[Re]=H[Re]);var je=arguments.length-2;if(je===1)Pe.children=ce;else if(1<je){for(var qe=Array(je),vt=0;vt<je;vt++)qe[vt]=arguments[vt+2];Pe.children=qe}if(O&&O.defaultProps)for(Re in je=O.defaultProps,je)Pe[Re]===void 0&&(Pe[Re]=je[Re]);return{$$typeof:i,type:O,key:Oe,ref:Ue,props:Pe,_owner:Ce.current}}function C(O,H){return{$$typeof:i,type:O.type,key:H,ref:O.ref,props:O.props,_owner:O._owner}}function x(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function V(O){var H={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ce){return H[ce]})}var P=/\/+/g;function T(O,H){return typeof O=="object"&&O!==null&&O.key!=null?V(""+O.key):H.toString(36)}function he(O,H,ce,Re,Pe){var Oe=typeof O;(Oe==="undefined"||Oe==="boolean")&&(O=null);var Ue=!1;if(O===null)Ue=!0;else switch(Oe){case"string":case"number":Ue=!0;break;case"object":switch(O.$$typeof){case i:case e:Ue=!0}}if(Ue)return Ue=O,Pe=Pe(Ue),O=Re===""?"."+T(Ue,0):Re,Ie(Pe)?(ce="",O!=null&&(ce=O.replace(P,"$&/")+"/"),he(Pe,H,ce,"",function(vt){return vt})):Pe!=null&&(x(Pe)&&(Pe=C(Pe,ce+(!Pe.key||Ue&&Ue.key===Pe.key?"":(""+Pe.key).replace(P,"$&/")+"/")+O)),H.push(Pe)),1;if(Ue=0,Re=Re===""?".":Re+":",Ie(O))for(var je=0;je<O.length;je++){Oe=O[je];var qe=Re+T(Oe,je);Ue+=he(Oe,H,ce,qe,Pe)}else if(qe=R(O),typeof qe=="function")for(O=qe.call(O),je=0;!(Oe=O.next()).done;)Oe=Oe.value,qe=Re+T(Oe,je++),Ue+=he(Oe,H,ce,qe,Pe);else if(Oe==="object")throw H=String(O),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return Ue}function Se(O,H,ce){if(O==null)return O;var Re=[],Pe=0;return he(O,Re,"","",function(Oe){return H.call(ce,Oe,Pe++)}),Re}function Ae(O){if(O._status===-1){var H=O._result;H=H(),H.then(function(ce){(O._status===0||O._status===-1)&&(O._status=1,O._result=ce)},function(ce){(O._status===0||O._status===-1)&&(O._status=2,O._result=ce)}),O._status===-1&&(O._status=0,O._result=H)}if(O._status===1)return O._result.default;throw O._result}var fe={current:null},W={transition:null},re={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:W,ReactCurrentOwner:Ce};function ee(){throw Error("act(...) is not supported in production builds of React.")}return xe.Children={map:Se,forEach:function(O,H,ce){Se(O,function(){H.apply(this,arguments)},ce)},count:function(O){var H=0;return Se(O,function(){H++}),H},toArray:function(O){return Se(O,function(H){return H})||[]},only:function(O){if(!x(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},xe.Component=z,xe.Fragment=t,xe.Profiler=o,xe.PureComponent=ue,xe.StrictMode=s,xe.Suspense=g,xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,xe.act=ee,xe.cloneElement=function(O,H,ce){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Re=K({},O.props),Pe=O.key,Oe=O.ref,Ue=O._owner;if(H!=null){if(H.ref!==void 0&&(Oe=H.ref,Ue=Ce.current),H.key!==void 0&&(Pe=""+H.key),O.type&&O.type.defaultProps)var je=O.type.defaultProps;for(qe in H)$e.call(H,qe)&&!D.hasOwnProperty(qe)&&(Re[qe]=H[qe]===void 0&&je!==void 0?je[qe]:H[qe])}var qe=arguments.length-2;if(qe===1)Re.children=ce;else if(1<qe){je=Array(qe);for(var vt=0;vt<qe;vt++)je[vt]=arguments[vt+2];Re.children=je}return{$$typeof:i,type:O.type,key:Pe,ref:Oe,props:Re,_owner:Ue}},xe.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:u,_context:O},O.Consumer=O},xe.createElement=S,xe.createFactory=function(O){var H=S.bind(null,O);return H.type=O,H},xe.createRef=function(){return{current:null}},xe.forwardRef=function(O){return{$$typeof:m,render:O}},xe.isValidElement=x,xe.lazy=function(O){return{$$typeof:E,_payload:{_status:-1,_result:O},_init:Ae}},xe.memo=function(O,H){return{$$typeof:v,type:O,compare:H===void 0?null:H}},xe.startTransition=function(O){var H=W.transition;W.transition={};try{O()}finally{W.transition=H}},xe.unstable_act=ee,xe.useCallback=function(O,H){return fe.current.useCallback(O,H)},xe.useContext=function(O){return fe.current.useContext(O)},xe.useDebugValue=function(){},xe.useDeferredValue=function(O){return fe.current.useDeferredValue(O)},xe.useEffect=function(O,H){return fe.current.useEffect(O,H)},xe.useId=function(){return fe.current.useId()},xe.useImperativeHandle=function(O,H,ce){return fe.current.useImperativeHandle(O,H,ce)},xe.useInsertionEffect=function(O,H){return fe.current.useInsertionEffect(O,H)},xe.useLayoutEffect=function(O,H){return fe.current.useLayoutEffect(O,H)},xe.useMemo=function(O,H){return fe.current.useMemo(O,H)},xe.useReducer=function(O,H,ce){return fe.current.useReducer(O,H,ce)},xe.useRef=function(O){return fe.current.useRef(O)},xe.useState=function(O){return fe.current.useState(O)},xe.useSyncExternalStore=function(O,H,ce){return fe.current.useSyncExternalStore(O,H,ce)},xe.useTransition=function(){return fe.current.useTransition()},xe.version="18.3.1",xe}var Om;function Od(){return Om||(Om=1,Hh.exports=K0()),Hh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function Q0(){if(Lm)return wa;Lm=1;var i=Od(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,v){var E,A={},R=null,j=null;v!==void 0&&(R=""+v),g.key!==void 0&&(R=""+g.key),g.ref!==void 0&&(j=g.ref);for(E in g)s.call(g,E)&&!u.hasOwnProperty(E)&&(A[E]=g[E]);if(m&&m.defaultProps)for(E in g=m.defaultProps,g)A[E]===void 0&&(A[E]=g[E]);return{$$typeof:e,type:m,key:R,ref:j,props:A,_owner:o.current}}return wa.Fragment=t,wa.jsx=h,wa.jsxs=h,wa}var Mm;function Y0(){return Mm||(Mm=1,$h.exports=Q0()),$h.exports}var B=Y0(),tt=Od();const X0=_y(tt);var du={},qh={exports:{}},Xt={},Wh={exports:{}},Gh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function J0(){return bm||(bm=1,function(i){function e(W,re){var ee=W.length;W.push(re);e:for(;0<ee;){var O=ee-1>>>1,H=W[O];if(0<o(H,re))W[O]=re,W[ee]=H,ee=O;else break e}}function t(W){return W.length===0?null:W[0]}function s(W){if(W.length===0)return null;var re=W[0],ee=W.pop();if(ee!==re){W[0]=ee;e:for(var O=0,H=W.length,ce=H>>>1;O<ce;){var Re=2*(O+1)-1,Pe=W[Re],Oe=Re+1,Ue=W[Oe];if(0>o(Pe,ee))Oe<H&&0>o(Ue,Pe)?(W[O]=Ue,W[Oe]=ee,O=Oe):(W[O]=Pe,W[Re]=ee,O=Re);else if(Oe<H&&0>o(Ue,ee))W[O]=Ue,W[Oe]=ee,O=Oe;else break e}}return re}function o(W,re){var ee=W.sortIndex-re.sortIndex;return ee!==0?ee:W.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var g=[],v=[],E=1,A=null,R=3,j=!1,K=!1,X=!1,z=typeof setTimeout=="function"?setTimeout:null,ge=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ye(W){for(var re=t(v);re!==null;){if(re.callback===null)s(v);else if(re.startTime<=W)s(v),re.sortIndex=re.expirationTime,e(g,re);else break;re=t(v)}}function Ie(W){if(X=!1,ye(W),!K)if(t(g)!==null)K=!0,Ae($e);else{var re=t(v);re!==null&&fe(Ie,re.startTime-W)}}function $e(W,re){K=!1,X&&(X=!1,ge(S),S=-1),j=!0;var ee=R;try{for(ye(re),A=t(g);A!==null&&(!(A.expirationTime>re)||W&&!V());){var O=A.callback;if(typeof O=="function"){A.callback=null,R=A.priorityLevel;var H=O(A.expirationTime<=re);re=i.unstable_now(),typeof H=="function"?A.callback=H:A===t(g)&&s(g),ye(re)}else s(g);A=t(g)}if(A!==null)var ce=!0;else{var Re=t(v);Re!==null&&fe(Ie,Re.startTime-re),ce=!1}return ce}finally{A=null,R=ee,j=!1}}var Ce=!1,D=null,S=-1,C=5,x=-1;function V(){return!(i.unstable_now()-x<C)}function P(){if(D!==null){var W=i.unstable_now();x=W;var re=!0;try{re=D(!0,W)}finally{re?T():(Ce=!1,D=null)}}else Ce=!1}var T;if(typeof ue=="function")T=function(){ue(P)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,Se=he.port2;he.port1.onmessage=P,T=function(){Se.postMessage(null)}}else T=function(){z(P,0)};function Ae(W){D=W,Ce||(Ce=!0,T())}function fe(W,re){S=z(function(){W(i.unstable_now())},re)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(W){W.callback=null},i.unstable_continueExecution=function(){K||j||(K=!0,Ae($e))},i.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<W?Math.floor(1e3/W):5},i.unstable_getCurrentPriorityLevel=function(){return R},i.unstable_getFirstCallbackNode=function(){return t(g)},i.unstable_next=function(W){switch(R){case 1:case 2:case 3:var re=3;break;default:re=R}var ee=R;R=re;try{return W()}finally{R=ee}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(W,re){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ee=R;R=W;try{return re()}finally{R=ee}},i.unstable_scheduleCallback=function(W,re,ee){var O=i.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?O+ee:O):ee=O,W){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=ee+H,W={id:E++,callback:re,priorityLevel:W,startTime:ee,expirationTime:H,sortIndex:-1},ee>O?(W.sortIndex=ee,e(v,W),t(g)===null&&W===t(v)&&(X?(ge(S),S=-1):X=!0,fe(Ie,ee-O))):(W.sortIndex=H,e(g,W),K||j||(K=!0,Ae($e))),W},i.unstable_shouldYield=V,i.unstable_wrapCallback=function(W){var re=R;return function(){var ee=R;R=re;try{return W.apply(this,arguments)}finally{R=ee}}}}(Gh)),Gh}var Fm;function Z0(){return Fm||(Fm=1,Wh.exports=J0()),Wh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function ew(){if(Um)return Xt;Um=1;var i=Od(),e=Z0();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},A={};function R(n){return g.call(A,n)?!0:g.call(E,n)?!1:v.test(n)?A[n]=!0:(E[n]=!0,!1)}function j(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function K(n,r,a,c){if(r===null||typeof r>"u"||j(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function X(n,r,a,c,d,p,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=_}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){z[n]=new X(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];z[r]=new X(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){z[n]=new X(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){z[n]=new X(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){z[n]=new X(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){z[n]=new X(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){z[n]=new X(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){z[n]=new X(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){z[n]=new X(n,5,!1,n.toLowerCase(),null,!1,!1)});var ge=/[\-:]([a-z])/g;function ue(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(ge,ue);z[r]=new X(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(ge,ue);z[r]=new X(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(ge,ue);z[r]=new X(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){z[n]=new X(n,1,!1,n.toLowerCase(),null,!1,!1)}),z.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){z[n]=new X(n,1,!1,n.toLowerCase(),null,!0,!0)});function ye(n,r,a,c){var d=z.hasOwnProperty(r)?z[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(K(r,a,d,c)&&(a=null),c||d===null?R(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var Ie=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$e=Symbol.for("react.element"),Ce=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),V=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),Se=Symbol.for("react.memo"),Ae=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),W=Symbol.iterator;function re(n){return n===null||typeof n!="object"?null:(n=W&&n[W]||n["@@iterator"],typeof n=="function"?n:null)}var ee=Object.assign,O;function H(n){if(O===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var ce=!1;function Re(n,r){if(!n||ce)return"";ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var c=F}Reflect.construct(n,[],r)}else{try{r.call()}catch(F){c=F}n.call(r.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),p=c.stack.split(`
`),_=d.length-1,I=p.length-1;1<=_&&0<=I&&d[_]!==p[I];)I--;for(;1<=_&&0<=I;_--,I--)if(d[_]!==p[I]){if(_!==1||I!==1)do if(_--,I--,0>I||d[_]!==p[I]){var k=`
`+d[_].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=_&&0<=I);break}}}finally{ce=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?H(n):""}function Pe(n){switch(n.tag){case 5:return H(n.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return n=Re(n.type,!1),n;case 11:return n=Re(n.type.render,!1),n;case 1:return n=Re(n.type,!0),n;default:return""}}function Oe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case Ce:return"Portal";case C:return"Profiler";case S:return"StrictMode";case T:return"Suspense";case he:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case x:return(n._context.displayName||"Context")+".Provider";case P:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Se:return r=n.displayName||null,r!==null?r:Oe(n.type)||"Memo";case Ae:r=n._payload,n=n._init;try{return Oe(n(r))}catch{}}return null}function Ue(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oe(r);case 8:return r===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function je(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function qe(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function vt(n){var r=qe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,p.call(this,_)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function nr(n){n._valueTracker||(n._valueTracker=vt(n))}function os(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=qe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Pr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ei(n,r){var a=r.checked;return ee({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function as(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=je(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Co(n,r){r=r.checked,r!=null&&ye(n,"checked",r,!1)}function Ro(n,r){Co(n,r);var a=je(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?ls(n,r.type,a):r.hasOwnProperty("defaultValue")&&ls(n,r.type,je(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Xa(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ls(n,r,a){(r!=="number"||Pr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var rr=Array.isArray;function ir(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+je(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function ko(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function us(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(rr(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:je(a)}}function cs(n,r){var a=je(r.value),c=je(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Po(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function ht(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dt(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?ht(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var sr,xo=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(sr=sr||document.createElement("div"),sr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=sr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function xr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ii=["Webkit","ms","Moz","O"];Object.keys(Ti).forEach(function(n){Ii.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ti[r]=Ti[n]})});function No(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Ti.hasOwnProperty(n)&&Ti[n]?(""+r).trim():r+"px"}function Do(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=No(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Vo=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oo(n,r){if(r){if(Vo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Lo(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Si=null;function hs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ds=null,hn=null,Un=null;function fs(n){if(n=sa(n)){if(typeof ds!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Rl(r),ds(n.stateNode,n.type,r))}}function jn(n){hn?Un?Un.push(n):Un=[n]:hn=n}function Mo(){if(hn){var n=hn,r=Un;if(Un=hn=null,fs(n),r)for(n=0;n<r.length;n++)fs(r[n])}}function Ai(n,r){return n(r)}function bo(){}var or=!1;function Fo(n,r,a){if(or)return n(r,a);or=!0;try{return Ai(n,r,a)}finally{or=!1,(hn!==null||Un!==null)&&(bo(),Mo())}}function it(n,r){var a=n.stateNode;if(a===null)return null;var c=Rl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var ps=!1;if(m)try{var En={};Object.defineProperty(En,"passive",{get:function(){ps=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{ps=!1}function Ci(n,r,a,c,d,p,_,I,k){var F=Array.prototype.slice.call(arguments,3);try{r.apply(a,F)}catch(Q){this.onError(Q)}}var Ri=!1,ms=null,Tn=!1,Uo=null,yc={onError:function(n){Ri=!0,ms=n}};function gs(n,r,a,c,d,p,_,I,k){Ri=!1,ms=null,Ci.apply(yc,arguments)}function Ja(n,r,a,c,d,p,_,I,k){if(gs.apply(this,arguments),Ri){if(Ri){var F=ms;Ri=!1,ms=null}else throw Error(t(198));Tn||(Tn=!0,Uo=F)}}function In(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function ki(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Sn(n){if(In(n)!==n)throw Error(t(188))}function Za(n){var r=n.alternate;if(!r){if(r=In(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Sn(d),n;if(p===c)return Sn(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var _=!1,I=d.child;I;){if(I===a){_=!0,a=d,c=p;break}if(I===c){_=!0,c=d,a=p;break}I=I.sibling}if(!_){for(I=p.child;I;){if(I===a){_=!0,a=p,c=d;break}if(I===c){_=!0,c=p,a=d;break}I=I.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function jo(n){return n=Za(n),n!==null?ys(n):null}function ys(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=ys(n);if(r!==null)return r;n=n.sibling}return null}var _s=e.unstable_scheduleCallback,zo=e.unstable_cancelCallback,el=e.unstable_shouldYield,_c=e.unstable_requestPaint,We=e.unstable_now,tl=e.unstable_getCurrentPriorityLevel,Pi=e.unstable_ImmediatePriority,Nr=e.unstable_UserBlockingPriority,dn=e.unstable_NormalPriority,Bo=e.unstable_LowPriority,nl=e.unstable_IdlePriority,xi=null,nn=null;function rl(n){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(xi,n,void 0,(n.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:sl,$o=Math.log,il=Math.LN2;function sl(n){return n>>>=0,n===0?32:31-($o(n)/il|0)|0}var vs=64,ws=4194304;function Dr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ni(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,_=a&268435455;if(_!==0){var I=_&~d;I!==0?c=Dr(I):(p&=_,p!==0&&(c=Dr(p)))}else _=a&~d,_!==0?c=Dr(_):p!==0&&(c=Dr(p));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-jt(r),d=1<<a,c|=n[a],r&=~d;return c}function vc(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ar(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var _=31-jt(p),I=1<<_,k=d[_];k===-1?((I&a)===0||(I&c)!==0)&&(d[_]=vc(I,r)):k<=r&&(n.expiredLanes|=I),p&=~I}}function rn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Di(){var n=vs;return vs<<=1,(vs&4194240)===0&&(vs=64),n}function Vr(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Or(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-jt(r),n[r]=a}function He(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-jt(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function Lr(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-jt(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var Ve=0;function Mr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ol,Es,al,ll,ul,Ho=!1,zn=[],At=null,An=null,Cn=null,br=new Map,fn=new Map,Bn=[],wc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cl(n,r){switch(n){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":br.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":fn.delete(r.pointerId)}}function Ht(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=sa(r),r!==null&&Es(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function Ec(n,r,a,c,d){switch(r){case"focusin":return At=Ht(At,n,r,a,c,d),!0;case"dragenter":return An=Ht(An,n,r,a,c,d),!0;case"mouseover":return Cn=Ht(Cn,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return br.set(p,Ht(br.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,fn.set(p,Ht(fn.get(p)||null,n,r,a,c,d)),!0}return!1}function hl(n){var r=bi(n.target);if(r!==null){var a=In(r);if(a!==null){if(r=a.tag,r===13){if(r=ki(a),r!==null){n.blockedOn=r,ul(n.priority,function(){al(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function lr(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Ts(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Si=c,a.target.dispatchEvent(c),Si=null}else return r=sa(a),r!==null&&Es(r),n.blockedOn=a,!1;r.shift()}return!0}function Vi(n,r,a){lr(n)&&a.delete(r)}function dl(){Ho=!1,At!==null&&lr(At)&&(At=null),An!==null&&lr(An)&&(An=null),Cn!==null&&lr(Cn)&&(Cn=null),br.forEach(Vi),fn.forEach(Vi)}function Rn(n,r){n.blockedOn===r&&(n.blockedOn=null,Ho||(Ho=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,dl)))}function kn(n){function r(d){return Rn(d,n)}if(0<zn.length){Rn(zn[0],n);for(var a=1;a<zn.length;a++){var c=zn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(At!==null&&Rn(At,n),An!==null&&Rn(An,n),Cn!==null&&Rn(Cn,n),br.forEach(r),fn.forEach(r),a=0;a<Bn.length;a++)c=Bn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Bn.length&&(a=Bn[0],a.blockedOn===null);)hl(a),a.blockedOn===null&&Bn.shift()}var ur=Ie.ReactCurrentBatchConfig,Fr=!0;function Xe(n,r,a,c){var d=Ve,p=ur.transition;ur.transition=null;try{Ve=1,qo(n,r,a,c)}finally{Ve=d,ur.transition=p}}function Tc(n,r,a,c){var d=Ve,p=ur.transition;ur.transition=null;try{Ve=4,qo(n,r,a,c)}finally{Ve=d,ur.transition=p}}function qo(n,r,a,c){if(Fr){var d=Ts(n,r,a,c);if(d===null)Vc(n,r,c,Oi,a),cl(n,c);else if(Ec(d,n,r,a,c))c.stopPropagation();else if(cl(n,c),r&4&&-1<wc.indexOf(n)){for(;d!==null;){var p=sa(d);if(p!==null&&ol(p),p=Ts(n,r,a,c),p===null&&Vc(n,r,c,Oi,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else Vc(n,r,c,null,a)}}var Oi=null;function Ts(n,r,a,c){if(Oi=null,n=hs(c),n=bi(n),n!==null)if(r=In(n),r===null)n=null;else if(a=r.tag,a===13){if(n=ki(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Oi=n,null}function Wo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tl()){case Pi:return 1;case Nr:return 4;case dn:case Bo:return 16;case nl:return 536870912;default:return 16}default:return 16}}var sn=null,Is=null,qt=null;function Go(){if(qt)return qt;var n,r=Is,a=r.length,c,d="value"in sn?sn.value:sn.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&r[a-c]===d[p-c];c++);return qt=d.slice(n,1<c?1-c:void 0)}function Ss(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function $n(){return!0}function Ko(){return!1}function Ct(n){function r(a,c,d,p,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?$n:Ko,this.isPropagationStopped=Ko,this}return ee(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$n)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$n)},persist:function(){},isPersistent:$n}),r}var Pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},As=Ct(Pn),Hn=ee({},Pn,{view:0,detail:0}),Ic=Ct(Hn),Cs,cr,Ur,Li=ee({},Hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ur&&(Ur&&n.type==="mousemove"?(Cs=n.screenX-Ur.screenX,cr=n.screenY-Ur.screenY):cr=Cs=0,Ur=n),Cs)},movementY:function(n){return"movementY"in n?n.movementY:cr}}),Rs=Ct(Li),Qo=ee({},Li,{dataTransfer:0}),fl=Ct(Qo),ks=ee({},Hn,{relatedTarget:0}),Ps=Ct(ks),pl=ee({},Pn,{animationName:0,elapsedTime:0,pseudoElement:0}),hr=Ct(pl),ml=ee({},Pn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),gl=Ct(ml),yl=ee({},Pn,{data:0}),Yo=Ct(yl),xs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_l={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=_l[n])?!!r[n]:!1}function qn(){return vl}var l=ee({},Hn,{key:function(n){if(n.key){var r=xs[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ss(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?zt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(n){return n.type==="keypress"?Ss(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ss(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=Ct(l),y=ee({},Li,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=Ct(y),L=ee({},Hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn}),U=Ct(L),Z=ee({},Pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Be=Ct(Z),ft=ee({},Li,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Le=Ct(ft),wt=[9,13,27,32],at=m&&"CompositionEvent"in window,pn=null;m&&"documentMode"in document&&(pn=document.documentMode);var on=m&&"TextEvent"in window&&!pn,Mi=m&&(!at||pn&&8<pn&&11>=pn),Ns=" ",Rf=!1;function kf(n,r){switch(n){case"keyup":return wt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ds=!1;function qv(n,r){switch(n){case"compositionend":return Pf(r);case"keypress":return r.which!==32?null:(Rf=!0,Ns);case"textInput":return n=r.data,n===Ns&&Rf?null:n;default:return null}}function Wv(n,r){if(Ds)return n==="compositionend"||!at&&kf(n,r)?(n=Go(),qt=Is=sn=null,Ds=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Mi&&r.locale!=="ko"?null:r.data;default:return null}}var Gv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Gv[n.type]:r==="textarea"}function Nf(n,r,a,c){jn(c),r=Sl(r,"onChange"),0<r.length&&(a=new As("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var Xo=null,Jo=null;function Kv(n){Qf(n,0)}function wl(n){var r=bs(n);if(os(r))return n}function Qv(n,r){if(n==="change")return r}var Df=!1;if(m){var Sc;if(m){var Ac="oninput"in document;if(!Ac){var Vf=document.createElement("div");Vf.setAttribute("oninput","return;"),Ac=typeof Vf.oninput=="function"}Sc=Ac}else Sc=!1;Df=Sc&&(!document.documentMode||9<document.documentMode)}function Of(){Xo&&(Xo.detachEvent("onpropertychange",Lf),Jo=Xo=null)}function Lf(n){if(n.propertyName==="value"&&wl(Jo)){var r=[];Nf(r,Jo,n,hs(n)),Fo(Kv,r)}}function Yv(n,r,a){n==="focusin"?(Of(),Xo=r,Jo=a,Xo.attachEvent("onpropertychange",Lf)):n==="focusout"&&Of()}function Xv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return wl(Jo)}function Jv(n,r){if(n==="click")return wl(r)}function Zv(n,r){if(n==="input"||n==="change")return wl(r)}function e0(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var xn=typeof Object.is=="function"?Object.is:e0;function Zo(n,r){if(xn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(r,d)||!xn(n[d],r[d]))return!1}return!0}function Mf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function bf(n,r){var a=Mf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Mf(a)}}function Ff(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Ff(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Uf(){for(var n=window,r=Pr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Pr(n.document)}return r}function Cc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function t0(n){var r=Uf(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Ff(a.ownerDocument.documentElement,a)){if(c!==null&&Cc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=bf(a,p);var _=bf(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var n0=m&&"documentMode"in document&&11>=document.documentMode,Vs=null,Rc=null,ea=null,kc=!1;function jf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;kc||Vs==null||Vs!==Pr(c)||(c=Vs,"selectionStart"in c&&Cc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ea&&Zo(ea,c)||(ea=c,c=Sl(Rc,"onSelect"),0<c.length&&(r=new As("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Vs)))}function El(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Os={animationend:El("Animation","AnimationEnd"),animationiteration:El("Animation","AnimationIteration"),animationstart:El("Animation","AnimationStart"),transitionend:El("Transition","TransitionEnd")},Pc={},zf={};m&&(zf=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function Tl(n){if(Pc[n])return Pc[n];if(!Os[n])return n;var r=Os[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in zf)return Pc[n]=r[a];return n}var Bf=Tl("animationend"),$f=Tl("animationiteration"),Hf=Tl("animationstart"),qf=Tl("transitionend"),Wf=new Map,Gf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(n,r){Wf.set(n,r),u(r,[n])}for(var xc=0;xc<Gf.length;xc++){var Nc=Gf[xc],r0=Nc.toLowerCase(),i0=Nc[0].toUpperCase()+Nc.slice(1);jr(r0,"on"+i0)}jr(Bf,"onAnimationEnd"),jr($f,"onAnimationIteration"),jr(Hf,"onAnimationStart"),jr("dblclick","onDoubleClick"),jr("focusin","onFocus"),jr("focusout","onBlur"),jr(qf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),s0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ta));function Kf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,Ja(c,r,void 0,n),n.currentTarget=null}function Qf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var _=c.length-1;0<=_;_--){var I=c[_],k=I.instance,F=I.currentTarget;if(I=I.listener,k!==p&&d.isPropagationStopped())break e;Kf(d,I,F),p=k}else for(_=0;_<c.length;_++){if(I=c[_],k=I.instance,F=I.currentTarget,I=I.listener,k!==p&&d.isPropagationStopped())break e;Kf(d,I,F),p=k}}}if(Tn)throw n=Uo,Tn=!1,Uo=null,n}function Ke(n,r){var a=r[Uc];a===void 0&&(a=r[Uc]=new Set);var c=n+"__bubble";a.has(c)||(Yf(r,n,2,!1),a.add(c))}function Dc(n,r,a){var c=0;r&&(c|=4),Yf(a,n,c,r)}var Il="_reactListening"+Math.random().toString(36).slice(2);function na(n){if(!n[Il]){n[Il]=!0,s.forEach(function(a){a!=="selectionchange"&&(s0.has(a)||Dc(a,!1,n),Dc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Il]||(r[Il]=!0,Dc("selectionchange",!1,r))}}function Yf(n,r,a,c){switch(Wo(r)){case 1:var d=Xe;break;case 4:d=Tc;break;default:d=qo}a=d.bind(null,r,a,n),d=void 0,!ps||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function Vc(n,r,a,c,d){var p=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var k=_.tag;if((k===3||k===4)&&(k=_.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;_=_.return}for(;I!==null;){if(_=bi(I),_===null)return;if(k=_.tag,k===5||k===6){c=p=_;continue e}I=I.parentNode}}c=c.return}Fo(function(){var F=p,Q=hs(a),Y=[];e:{var G=Wf.get(n);if(G!==void 0){var te=As,oe=n;switch(n){case"keypress":if(Ss(a)===0)break e;case"keydown":case"keyup":te=f;break;case"focusin":oe="focus",te=Ps;break;case"focusout":oe="blur",te=Ps;break;case"beforeblur":case"afterblur":te=Ps;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=Rs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=fl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=U;break;case Bf:case $f:case Hf:te=hr;break;case qf:te=Be;break;case"scroll":te=Ic;break;case"wheel":te=Le;break;case"copy":case"cut":case"paste":te=gl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=w}var ae=(r&4)!==0,st=!ae&&n==="scroll",M=ae?G!==null?G+"Capture":null:G;ae=[];for(var N=F,b;N!==null;){b=N;var J=b.stateNode;if(b.tag===5&&J!==null&&(b=J,M!==null&&(J=it(N,M),J!=null&&ae.push(ra(N,J,b)))),st)break;N=N.return}0<ae.length&&(G=new te(G,oe,null,a,Q),Y.push({event:G,listeners:ae}))}}if((r&7)===0){e:{if(G=n==="mouseover"||n==="pointerover",te=n==="mouseout"||n==="pointerout",G&&a!==Si&&(oe=a.relatedTarget||a.fromElement)&&(bi(oe)||oe[dr]))break e;if((te||G)&&(G=Q.window===Q?Q:(G=Q.ownerDocument)?G.defaultView||G.parentWindow:window,te?(oe=a.relatedTarget||a.toElement,te=F,oe=oe?bi(oe):null,oe!==null&&(st=In(oe),oe!==st||oe.tag!==5&&oe.tag!==6)&&(oe=null)):(te=null,oe=F),te!==oe)){if(ae=Rs,J="onMouseLeave",M="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(ae=w,J="onPointerLeave",M="onPointerEnter",N="pointer"),st=te==null?G:bs(te),b=oe==null?G:bs(oe),G=new ae(J,N+"leave",te,a,Q),G.target=st,G.relatedTarget=b,J=null,bi(Q)===F&&(ae=new ae(M,N+"enter",oe,a,Q),ae.target=b,ae.relatedTarget=st,J=ae),st=J,te&&oe)t:{for(ae=te,M=oe,N=0,b=ae;b;b=Ls(b))N++;for(b=0,J=M;J;J=Ls(J))b++;for(;0<N-b;)ae=Ls(ae),N--;for(;0<b-N;)M=Ls(M),b--;for(;N--;){if(ae===M||M!==null&&ae===M.alternate)break t;ae=Ls(ae),M=Ls(M)}ae=null}else ae=null;te!==null&&Xf(Y,G,te,ae,!1),oe!==null&&st!==null&&Xf(Y,st,oe,ae,!0)}}e:{if(G=F?bs(F):window,te=G.nodeName&&G.nodeName.toLowerCase(),te==="select"||te==="input"&&G.type==="file")var le=Qv;else if(xf(G))if(Df)le=Zv;else{le=Xv;var pe=Yv}else(te=G.nodeName)&&te.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(le=Jv);if(le&&(le=le(n,F))){Nf(Y,le,a,Q);break e}pe&&pe(n,G,F),n==="focusout"&&(pe=G._wrapperState)&&pe.controlled&&G.type==="number"&&ls(G,"number",G.value)}switch(pe=F?bs(F):window,n){case"focusin":(xf(pe)||pe.contentEditable==="true")&&(Vs=pe,Rc=F,ea=null);break;case"focusout":ea=Rc=Vs=null;break;case"mousedown":kc=!0;break;case"contextmenu":case"mouseup":case"dragend":kc=!1,jf(Y,a,Q);break;case"selectionchange":if(n0)break;case"keydown":case"keyup":jf(Y,a,Q)}var me;if(at)e:{switch(n){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Ds?kf(n,a)&&(ve="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Mi&&a.locale!=="ko"&&(Ds||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Ds&&(me=Go()):(sn=Q,Is="value"in sn?sn.value:sn.textContent,Ds=!0)),pe=Sl(F,ve),0<pe.length&&(ve=new Yo(ve,n,null,a,Q),Y.push({event:ve,listeners:pe}),me?ve.data=me:(me=Pf(a),me!==null&&(ve.data=me)))),(me=on?qv(n,a):Wv(n,a))&&(F=Sl(F,"onBeforeInput"),0<F.length&&(Q=new Yo("onBeforeInput","beforeinput",null,a,Q),Y.push({event:Q,listeners:F}),Q.data=me))}Qf(Y,r)})}function ra(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Sl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=it(n,a),p!=null&&c.unshift(ra(n,p,d)),p=it(n,r),p!=null&&c.push(ra(n,p,d))),n=n.return}return c}function Ls(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Xf(n,r,a,c,d){for(var p=r._reactName,_=[];a!==null&&a!==c;){var I=a,k=I.alternate,F=I.stateNode;if(k!==null&&k===c)break;I.tag===5&&F!==null&&(I=F,d?(k=it(a,p),k!=null&&_.unshift(ra(a,k,I))):d||(k=it(a,p),k!=null&&_.push(ra(a,k,I)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var o0=/\r\n?/g,a0=/\u0000|\uFFFD/g;function Jf(n){return(typeof n=="string"?n:""+n).replace(o0,`
`).replace(a0,"")}function Al(n,r,a){if(r=Jf(r),Jf(n)!==r&&a)throw Error(t(425))}function Cl(){}var Oc=null,Lc=null;function Mc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var bc=typeof setTimeout=="function"?setTimeout:void 0,l0=typeof clearTimeout=="function"?clearTimeout:void 0,Zf=typeof Promise=="function"?Promise:void 0,u0=typeof queueMicrotask=="function"?queueMicrotask:typeof Zf<"u"?function(n){return Zf.resolve(null).then(n).catch(c0)}:bc;function c0(n){setTimeout(function(){throw n})}function Fc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),kn(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);kn(r)}function zr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function ep(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Ms=Math.random().toString(36).slice(2),Wn="__reactFiber$"+Ms,ia="__reactProps$"+Ms,dr="__reactContainer$"+Ms,Uc="__reactEvents$"+Ms,h0="__reactListeners$"+Ms,d0="__reactHandles$"+Ms;function bi(n){var r=n[Wn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[dr]||a[Wn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=ep(n);n!==null;){if(a=n[Wn])return a;n=ep(n)}return r}n=a,a=n.parentNode}return null}function sa(n){return n=n[Wn]||n[dr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function bs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Rl(n){return n[ia]||null}var jc=[],Fs=-1;function Br(n){return{current:n}}function Qe(n){0>Fs||(n.current=jc[Fs],jc[Fs]=null,Fs--)}function Ge(n,r){Fs++,jc[Fs]=n.current,n.current=r}var $r={},Dt=Br($r),Wt=Br(!1),Fi=$r;function Us(n,r){var a=n.type.contextTypes;if(!a)return $r;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Gt(n){return n=n.childContextTypes,n!=null}function kl(){Qe(Wt),Qe(Dt)}function tp(n,r,a){if(Dt.current!==$r)throw Error(t(168));Ge(Dt,r),Ge(Wt,a)}function np(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Ue(n)||"Unknown",d));return ee({},a,c)}function Pl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||$r,Fi=Dt.current,Ge(Dt,n),Ge(Wt,Wt.current),!0}function rp(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=np(n,r,Fi),c.__reactInternalMemoizedMergedChildContext=n,Qe(Wt),Qe(Dt),Ge(Dt,n)):Qe(Wt),Ge(Wt,a)}var fr=null,xl=!1,zc=!1;function ip(n){fr===null?fr=[n]:fr.push(n)}function f0(n){xl=!0,ip(n)}function Hr(){if(!zc&&fr!==null){zc=!0;var n=0,r=Ve;try{var a=fr;for(Ve=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}fr=null,xl=!1}catch(d){throw fr!==null&&(fr=fr.slice(n+1)),_s(Pi,Hr),d}finally{Ve=r,zc=!1}}return null}var js=[],zs=0,Nl=null,Dl=0,mn=[],gn=0,Ui=null,pr=1,mr="";function ji(n,r){js[zs++]=Dl,js[zs++]=Nl,Nl=n,Dl=r}function sp(n,r,a){mn[gn++]=pr,mn[gn++]=mr,mn[gn++]=Ui,Ui=n;var c=pr;n=mr;var d=32-jt(c)-1;c&=~(1<<d),a+=1;var p=32-jt(r)+d;if(30<p){var _=d-d%5;p=(c&(1<<_)-1).toString(32),c>>=_,d-=_,pr=1<<32-jt(r)+d|a<<d|c,mr=p+n}else pr=1<<p|a<<d|c,mr=n}function Bc(n){n.return!==null&&(ji(n,1),sp(n,1,0))}function $c(n){for(;n===Nl;)Nl=js[--zs],js[zs]=null,Dl=js[--zs],js[zs]=null;for(;n===Ui;)Ui=mn[--gn],mn[gn]=null,mr=mn[--gn],mn[gn]=null,pr=mn[--gn],mn[gn]=null}var an=null,ln=null,Je=!1,Nn=null;function op(n,r){var a=wn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function ap(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,an=n,ln=zr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,an=n,ln=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Ui!==null?{id:pr,overflow:mr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=wn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,an=n,ln=null,!0):!1;default:return!1}}function Hc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function qc(n){if(Je){var r=ln;if(r){var a=r;if(!ap(n,r)){if(Hc(n))throw Error(t(418));r=zr(a.nextSibling);var c=an;r&&ap(n,r)?op(c,a):(n.flags=n.flags&-4097|2,Je=!1,an=n)}}else{if(Hc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Je=!1,an=n}}}function lp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;an=n}function Vl(n){if(n!==an)return!1;if(!Je)return lp(n),Je=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Mc(n.type,n.memoizedProps)),r&&(r=ln)){if(Hc(n))throw up(),Error(t(418));for(;r;)op(n,r),r=zr(r.nextSibling)}if(lp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){ln=zr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}ln=null}}else ln=an?zr(n.stateNode.nextSibling):null;return!0}function up(){for(var n=ln;n;)n=zr(n.nextSibling)}function Bs(){ln=an=null,Je=!1}function Wc(n){Nn===null?Nn=[n]:Nn.push(n)}var p0=Ie.ReactCurrentBatchConfig;function oa(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(_){var I=d.refs;_===null?delete I[p]:I[p]=_},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ol(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function cp(n){var r=n._init;return r(n._payload)}function hp(n){function r(M,N){if(n){var b=M.deletions;b===null?(M.deletions=[N],M.flags|=16):b.push(N)}}function a(M,N){if(!n)return null;for(;N!==null;)r(M,N),N=N.sibling;return null}function c(M,N){for(M=new Map;N!==null;)N.key!==null?M.set(N.key,N):M.set(N.index,N),N=N.sibling;return M}function d(M,N){return M=Jr(M,N),M.index=0,M.sibling=null,M}function p(M,N,b){return M.index=b,n?(b=M.alternate,b!==null?(b=b.index,b<N?(M.flags|=2,N):b):(M.flags|=2,N)):(M.flags|=1048576,N)}function _(M){return n&&M.alternate===null&&(M.flags|=2),M}function I(M,N,b,J){return N===null||N.tag!==6?(N=bh(b,M.mode,J),N.return=M,N):(N=d(N,b),N.return=M,N)}function k(M,N,b,J){var le=b.type;return le===D?Q(M,N,b.props.children,J,b.key):N!==null&&(N.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Ae&&cp(le)===N.type)?(J=d(N,b.props),J.ref=oa(M,N,b),J.return=M,J):(J=iu(b.type,b.key,b.props,null,M.mode,J),J.ref=oa(M,N,b),J.return=M,J)}function F(M,N,b,J){return N===null||N.tag!==4||N.stateNode.containerInfo!==b.containerInfo||N.stateNode.implementation!==b.implementation?(N=Fh(b,M.mode,J),N.return=M,N):(N=d(N,b.children||[]),N.return=M,N)}function Q(M,N,b,J,le){return N===null||N.tag!==7?(N=Ki(b,M.mode,J,le),N.return=M,N):(N=d(N,b),N.return=M,N)}function Y(M,N,b){if(typeof N=="string"&&N!==""||typeof N=="number")return N=bh(""+N,M.mode,b),N.return=M,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case $e:return b=iu(N.type,N.key,N.props,null,M.mode,b),b.ref=oa(M,null,N),b.return=M,b;case Ce:return N=Fh(N,M.mode,b),N.return=M,N;case Ae:var J=N._init;return Y(M,J(N._payload),b)}if(rr(N)||re(N))return N=Ki(N,M.mode,b,null),N.return=M,N;Ol(M,N)}return null}function G(M,N,b,J){var le=N!==null?N.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return le!==null?null:I(M,N,""+b,J);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case $e:return b.key===le?k(M,N,b,J):null;case Ce:return b.key===le?F(M,N,b,J):null;case Ae:return le=b._init,G(M,N,le(b._payload),J)}if(rr(b)||re(b))return le!==null?null:Q(M,N,b,J,null);Ol(M,b)}return null}function te(M,N,b,J,le){if(typeof J=="string"&&J!==""||typeof J=="number")return M=M.get(b)||null,I(N,M,""+J,le);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case $e:return M=M.get(J.key===null?b:J.key)||null,k(N,M,J,le);case Ce:return M=M.get(J.key===null?b:J.key)||null,F(N,M,J,le);case Ae:var pe=J._init;return te(M,N,b,pe(J._payload),le)}if(rr(J)||re(J))return M=M.get(b)||null,Q(N,M,J,le,null);Ol(N,J)}return null}function oe(M,N,b,J){for(var le=null,pe=null,me=N,ve=N=0,It=null;me!==null&&ve<b.length;ve++){me.index>ve?(It=me,me=null):It=me.sibling;var Fe=G(M,me,b[ve],J);if(Fe===null){me===null&&(me=It);break}n&&me&&Fe.alternate===null&&r(M,me),N=p(Fe,N,ve),pe===null?le=Fe:pe.sibling=Fe,pe=Fe,me=It}if(ve===b.length)return a(M,me),Je&&ji(M,ve),le;if(me===null){for(;ve<b.length;ve++)me=Y(M,b[ve],J),me!==null&&(N=p(me,N,ve),pe===null?le=me:pe.sibling=me,pe=me);return Je&&ji(M,ve),le}for(me=c(M,me);ve<b.length;ve++)It=te(me,M,ve,b[ve],J),It!==null&&(n&&It.alternate!==null&&me.delete(It.key===null?ve:It.key),N=p(It,N,ve),pe===null?le=It:pe.sibling=It,pe=It);return n&&me.forEach(function(Zr){return r(M,Zr)}),Je&&ji(M,ve),le}function ae(M,N,b,J){var le=re(b);if(typeof le!="function")throw Error(t(150));if(b=le.call(b),b==null)throw Error(t(151));for(var pe=le=null,me=N,ve=N=0,It=null,Fe=b.next();me!==null&&!Fe.done;ve++,Fe=b.next()){me.index>ve?(It=me,me=null):It=me.sibling;var Zr=G(M,me,Fe.value,J);if(Zr===null){me===null&&(me=It);break}n&&me&&Zr.alternate===null&&r(M,me),N=p(Zr,N,ve),pe===null?le=Zr:pe.sibling=Zr,pe=Zr,me=It}if(Fe.done)return a(M,me),Je&&ji(M,ve),le;if(me===null){for(;!Fe.done;ve++,Fe=b.next())Fe=Y(M,Fe.value,J),Fe!==null&&(N=p(Fe,N,ve),pe===null?le=Fe:pe.sibling=Fe,pe=Fe);return Je&&ji(M,ve),le}for(me=c(M,me);!Fe.done;ve++,Fe=b.next())Fe=te(me,M,ve,Fe.value,J),Fe!==null&&(n&&Fe.alternate!==null&&me.delete(Fe.key===null?ve:Fe.key),N=p(Fe,N,ve),pe===null?le=Fe:pe.sibling=Fe,pe=Fe);return n&&me.forEach(function(G0){return r(M,G0)}),Je&&ji(M,ve),le}function st(M,N,b,J){if(typeof b=="object"&&b!==null&&b.type===D&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case $e:e:{for(var le=b.key,pe=N;pe!==null;){if(pe.key===le){if(le=b.type,le===D){if(pe.tag===7){a(M,pe.sibling),N=d(pe,b.props.children),N.return=M,M=N;break e}}else if(pe.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Ae&&cp(le)===pe.type){a(M,pe.sibling),N=d(pe,b.props),N.ref=oa(M,pe,b),N.return=M,M=N;break e}a(M,pe);break}else r(M,pe);pe=pe.sibling}b.type===D?(N=Ki(b.props.children,M.mode,J,b.key),N.return=M,M=N):(J=iu(b.type,b.key,b.props,null,M.mode,J),J.ref=oa(M,N,b),J.return=M,M=J)}return _(M);case Ce:e:{for(pe=b.key;N!==null;){if(N.key===pe)if(N.tag===4&&N.stateNode.containerInfo===b.containerInfo&&N.stateNode.implementation===b.implementation){a(M,N.sibling),N=d(N,b.children||[]),N.return=M,M=N;break e}else{a(M,N);break}else r(M,N);N=N.sibling}N=Fh(b,M.mode,J),N.return=M,M=N}return _(M);case Ae:return pe=b._init,st(M,N,pe(b._payload),J)}if(rr(b))return oe(M,N,b,J);if(re(b))return ae(M,N,b,J);Ol(M,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,N!==null&&N.tag===6?(a(M,N.sibling),N=d(N,b),N.return=M,M=N):(a(M,N),N=bh(b,M.mode,J),N.return=M,M=N),_(M)):a(M,N)}return st}var $s=hp(!0),dp=hp(!1),Ll=Br(null),Ml=null,Hs=null,Gc=null;function Kc(){Gc=Hs=Ml=null}function Qc(n){var r=Ll.current;Qe(Ll),n._currentValue=r}function Yc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function qs(n,r){Ml=n,Gc=Hs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Kt=!0),n.firstContext=null)}function yn(n){var r=n._currentValue;if(Gc!==n)if(n={context:n,memoizedValue:r,next:null},Hs===null){if(Ml===null)throw Error(t(308));Hs=n,Ml.dependencies={lanes:0,firstContext:n}}else Hs=Hs.next=n;return r}var zi=null;function Xc(n){zi===null?zi=[n]:zi.push(n)}function fp(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,Xc(r)):(a.next=d.next,d.next=a),r.interleaved=a,gr(n,c)}function gr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var qr=!1;function Jc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function yr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Wr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(be&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,gr(n,a)}return d=c.interleaved,d===null?(r.next=r,Xc(c)):(r.next=d.next,d.next=r),c.interleaved=r,gr(n,a)}function bl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Lr(n,a)}}function mp(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=_:p=p.next=_,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Fl(n,r,a,c){var d=n.updateQueue;qr=!1;var p=d.firstBaseUpdate,_=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var k=I,F=k.next;k.next=null,_===null?p=F:_.next=F,_=k;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,I=Q.lastBaseUpdate,I!==_&&(I===null?Q.firstBaseUpdate=F:I.next=F,Q.lastBaseUpdate=k))}if(p!==null){var Y=d.baseState;_=0,Q=F=k=null,I=p;do{var G=I.lane,te=I.eventTime;if((c&G)===G){Q!==null&&(Q=Q.next={eventTime:te,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var oe=n,ae=I;switch(G=r,te=a,ae.tag){case 1:if(oe=ae.payload,typeof oe=="function"){Y=oe.call(te,Y,G);break e}Y=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ae.payload,G=typeof oe=="function"?oe.call(te,Y,G):oe,G==null)break e;Y=ee({},Y,G);break e;case 2:qr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,G=d.effects,G===null?d.effects=[I]:G.push(I))}else te={eventTime:te,lane:G,tag:I.tag,payload:I.payload,callback:I.callback,next:null},Q===null?(F=Q=te,k=Y):Q=Q.next=te,_|=G;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;G=I,I=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);if(Q===null&&(k=Y),d.baseState=k,d.firstBaseUpdate=F,d.lastBaseUpdate=Q,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);Hi|=_,n.lanes=_,n.memoizedState=Y}}function gp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var aa={},Gn=Br(aa),la=Br(aa),ua=Br(aa);function Bi(n){if(n===aa)throw Error(t(174));return n}function Zc(n,r){switch(Ge(ua,r),Ge(la,n),Ge(Gn,aa),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:dt(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=dt(r,n)}Qe(Gn),Ge(Gn,r)}function Ws(){Qe(Gn),Qe(la),Qe(ua)}function yp(n){Bi(ua.current);var r=Bi(Gn.current),a=dt(r,n.type);r!==a&&(Ge(la,n),Ge(Gn,a))}function eh(n){la.current===n&&(Qe(Gn),Qe(la))}var Ze=Br(0);function Ul(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var th=[];function nh(){for(var n=0;n<th.length;n++)th[n]._workInProgressVersionPrimary=null;th.length=0}var jl=Ie.ReactCurrentDispatcher,rh=Ie.ReactCurrentBatchConfig,$i=0,et=null,pt=null,Et=null,zl=!1,ca=!1,ha=0,m0=0;function Vt(){throw Error(t(321))}function ih(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!xn(n[a],r[a]))return!1;return!0}function sh(n,r,a,c,d,p){if($i=p,et=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,jl.current=n===null||n.memoizedState===null?v0:w0,n=a(c,d),ca){p=0;do{if(ca=!1,ha=0,25<=p)throw Error(t(301));p+=1,Et=pt=null,r.updateQueue=null,jl.current=E0,n=a(c,d)}while(ca)}if(jl.current=Hl,r=pt!==null&&pt.next!==null,$i=0,Et=pt=et=null,zl=!1,r)throw Error(t(300));return n}function oh(){var n=ha!==0;return ha=0,n}function Kn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?et.memoizedState=Et=n:Et=Et.next=n,Et}function _n(){if(pt===null){var n=et.alternate;n=n!==null?n.memoizedState:null}else n=pt.next;var r=Et===null?et.memoizedState:Et.next;if(r!==null)Et=r,pt=n;else{if(n===null)throw Error(t(310));pt=n,n={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},Et===null?et.memoizedState=Et=n:Et=Et.next=n}return Et}function da(n,r){return typeof r=="function"?r(n):r}function ah(n){var r=_n(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=pt,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var _=d.next;d.next=p.next,p.next=_}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var I=_=null,k=null,F=p;do{var Q=F.lane;if(($i&Q)===Q)k!==null&&(k=k.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var Y={lane:Q,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};k===null?(I=k=Y,_=c):k=k.next=Y,et.lanes|=Q,Hi|=Q}F=F.next}while(F!==null&&F!==p);k===null?_=c:k.next=I,xn(c,r.memoizedState)||(Kt=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=k,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,et.lanes|=p,Hi|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function lh(n){var r=_n(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do p=n(p,_.action),_=_.next;while(_!==d);xn(p,r.memoizedState)||(Kt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function _p(){}function vp(n,r){var a=et,c=_n(),d=r(),p=!xn(c.memoizedState,d);if(p&&(c.memoizedState=d,Kt=!0),c=c.queue,uh(Tp.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,fa(9,Ep.bind(null,a,c,d,r),void 0,null),Tt===null)throw Error(t(349));($i&30)!==0||wp(a,r,d)}return d}function wp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=et.updateQueue,r===null?(r={lastEffect:null,stores:null},et.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Ep(n,r,a,c){r.value=a,r.getSnapshot=c,Ip(r)&&Sp(n)}function Tp(n,r,a){return a(function(){Ip(r)&&Sp(n)})}function Ip(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!xn(n,a)}catch{return!0}}function Sp(n){var r=gr(n,1);r!==null&&Ln(r,n,1,-1)}function Ap(n){var r=Kn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:n},r.queue=n,n=n.dispatch=_0.bind(null,et,n),[r.memoizedState,n]}function fa(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=et.updateQueue,r===null?(r={lastEffect:null,stores:null},et.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function Cp(){return _n().memoizedState}function Bl(n,r,a,c){var d=Kn();et.flags|=n,d.memoizedState=fa(1|r,a,void 0,c===void 0?null:c)}function $l(n,r,a,c){var d=_n();c=c===void 0?null:c;var p=void 0;if(pt!==null){var _=pt.memoizedState;if(p=_.destroy,c!==null&&ih(c,_.deps)){d.memoizedState=fa(r,a,p,c);return}}et.flags|=n,d.memoizedState=fa(1|r,a,p,c)}function Rp(n,r){return Bl(8390656,8,n,r)}function uh(n,r){return $l(2048,8,n,r)}function kp(n,r){return $l(4,2,n,r)}function Pp(n,r){return $l(4,4,n,r)}function xp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Np(n,r,a){return a=a!=null?a.concat([n]):null,$l(4,4,xp.bind(null,r,n),a)}function ch(){}function Dp(n,r){var a=_n();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&ih(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function Vp(n,r){var a=_n();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&ih(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Op(n,r,a){return($i&21)===0?(n.baseState&&(n.baseState=!1,Kt=!0),n.memoizedState=a):(xn(a,r)||(a=Di(),et.lanes|=a,Hi|=a,n.baseState=!0),r)}function g0(n,r){var a=Ve;Ve=a!==0&&4>a?a:4,n(!0);var c=rh.transition;rh.transition={};try{n(!1),r()}finally{Ve=a,rh.transition=c}}function Lp(){return _n().memoizedState}function y0(n,r,a){var c=Yr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Mp(n))bp(r,a);else if(a=fp(n,r,a,c),a!==null){var d=$t();Ln(a,n,c,d),Fp(a,r,c)}}function _0(n,r,a){var c=Yr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Mp(n))bp(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var _=r.lastRenderedState,I=p(_,a);if(d.hasEagerState=!0,d.eagerState=I,xn(I,_)){var k=r.interleaved;k===null?(d.next=d,Xc(r)):(d.next=k.next,k.next=d),r.interleaved=d;return}}catch{}finally{}a=fp(n,r,d,c),a!==null&&(d=$t(),Ln(a,n,c,d),Fp(a,r,c))}}function Mp(n){var r=n.alternate;return n===et||r!==null&&r===et}function bp(n,r){ca=zl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Fp(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Lr(n,a)}}var Hl={readContext:yn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},v0={readContext:yn,useCallback:function(n,r){return Kn().memoizedState=[n,r===void 0?null:r],n},useContext:yn,useEffect:Rp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Bl(4194308,4,xp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Bl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Bl(4,2,n,r)},useMemo:function(n,r){var a=Kn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Kn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=y0.bind(null,et,n),[c.memoizedState,n]},useRef:function(n){var r=Kn();return n={current:n},r.memoizedState=n},useState:Ap,useDebugValue:ch,useDeferredValue:function(n){return Kn().memoizedState=n},useTransition:function(){var n=Ap(!1),r=n[0];return n=g0.bind(null,n[1]),Kn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=et,d=Kn();if(Je){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),Tt===null)throw Error(t(349));($i&30)!==0||wp(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,Rp(Tp.bind(null,c,p,n),[n]),c.flags|=2048,fa(9,Ep.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=Kn(),r=Tt.identifierPrefix;if(Je){var a=mr,c=pr;a=(c&~(1<<32-jt(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=ha++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=m0++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},w0={readContext:yn,useCallback:Dp,useContext:yn,useEffect:uh,useImperativeHandle:Np,useInsertionEffect:kp,useLayoutEffect:Pp,useMemo:Vp,useReducer:ah,useRef:Cp,useState:function(){return ah(da)},useDebugValue:ch,useDeferredValue:function(n){var r=_n();return Op(r,pt.memoizedState,n)},useTransition:function(){var n=ah(da)[0],r=_n().memoizedState;return[n,r]},useMutableSource:_p,useSyncExternalStore:vp,useId:Lp,unstable_isNewReconciler:!1},E0={readContext:yn,useCallback:Dp,useContext:yn,useEffect:uh,useImperativeHandle:Np,useInsertionEffect:kp,useLayoutEffect:Pp,useMemo:Vp,useReducer:lh,useRef:Cp,useState:function(){return lh(da)},useDebugValue:ch,useDeferredValue:function(n){var r=_n();return pt===null?r.memoizedState=n:Op(r,pt.memoizedState,n)},useTransition:function(){var n=lh(da)[0],r=_n().memoizedState;return[n,r]},useMutableSource:_p,useSyncExternalStore:vp,useId:Lp,unstable_isNewReconciler:!1};function Dn(n,r){if(n&&n.defaultProps){r=ee({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function hh(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:ee({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var ql={isMounted:function(n){return(n=n._reactInternals)?In(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=$t(),d=Yr(n),p=yr(c,d);p.payload=r,a!=null&&(p.callback=a),r=Wr(n,p,d),r!==null&&(Ln(r,n,d,c),bl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=$t(),d=Yr(n),p=yr(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=Wr(n,p,d),r!==null&&(Ln(r,n,d,c),bl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=$t(),c=Yr(n),d=yr(a,c);d.tag=2,r!=null&&(d.callback=r),r=Wr(n,d,c),r!==null&&(Ln(r,n,c,a),bl(r,n,c))}};function Up(n,r,a,c,d,p,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,_):r.prototype&&r.prototype.isPureReactComponent?!Zo(a,c)||!Zo(d,p):!0}function jp(n,r,a){var c=!1,d=$r,p=r.contextType;return typeof p=="object"&&p!==null?p=yn(p):(d=Gt(r)?Fi:Dt.current,c=r.contextTypes,p=(c=c!=null)?Us(n,d):$r),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ql,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function zp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&ql.enqueueReplaceState(r,r.state,null)}function dh(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Jc(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=yn(p):(p=Gt(r)?Fi:Dt.current,d.context=Us(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(hh(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&ql.enqueueReplaceState(d,d.state,null),Fl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Gs(n,r){try{var a="",c=r;do a+=Pe(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function fh(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function ph(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var T0=typeof WeakMap=="function"?WeakMap:Map;function Bp(n,r,a){a=yr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){Jl||(Jl=!0,Ph=c),ph(n,r)},a}function $p(n,r,a){a=yr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){ph(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){ph(n,r),typeof c!="function"&&(Kr===null?Kr=new Set([this]):Kr.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),a}function Hp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new T0;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=M0.bind(null,n,r,a),r.then(n,n))}function qp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Wp(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=yr(-1,1),r.tag=2,Wr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var I0=Ie.ReactCurrentOwner,Kt=!1;function Bt(n,r,a,c){r.child=n===null?dp(r,null,a,c):$s(r,n.child,a,c)}function Gp(n,r,a,c,d){a=a.render;var p=r.ref;return qs(r,d),c=sh(n,r,a,c,p,d),a=oh(),n!==null&&!Kt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,_r(n,r,d)):(Je&&a&&Bc(r),r.flags|=1,Bt(n,r,c,d),r.child)}function Kp(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!Mh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,Qp(n,r,p,c,d)):(n=iu(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,(n.lanes&d)===0){var _=p.memoizedProps;if(a=a.compare,a=a!==null?a:Zo,a(_,c)&&n.ref===r.ref)return _r(n,r,d)}return r.flags|=1,n=Jr(p,c),n.ref=r.ref,n.return=r,r.child=n}function Qp(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if(Zo(p,c)&&n.ref===r.ref)if(Kt=!1,r.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Kt=!0);else return r.lanes=n.lanes,_r(n,r,d)}return mh(n,r,a,c,d)}function Yp(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(Qs,un),un|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Ge(Qs,un),un|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,Ge(Qs,un),un|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,Ge(Qs,un),un|=c;return Bt(n,r,d,a),r.child}function Xp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function mh(n,r,a,c,d){var p=Gt(a)?Fi:Dt.current;return p=Us(r,p),qs(r,d),a=sh(n,r,a,c,p,d),c=oh(),n!==null&&!Kt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,_r(n,r,d)):(Je&&c&&Bc(r),r.flags|=1,Bt(n,r,a,d),r.child)}function Jp(n,r,a,c,d){if(Gt(a)){var p=!0;Pl(r)}else p=!1;if(qs(r,d),r.stateNode===null)Gl(n,r),jp(r,a,c),dh(r,a,c,d),c=!0;else if(n===null){var _=r.stateNode,I=r.memoizedProps;_.props=I;var k=_.context,F=a.contextType;typeof F=="object"&&F!==null?F=yn(F):(F=Gt(a)?Fi:Dt.current,F=Us(r,F));var Q=a.getDerivedStateFromProps,Y=typeof Q=="function"||typeof _.getSnapshotBeforeUpdate=="function";Y||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(I!==c||k!==F)&&zp(r,_,c,F),qr=!1;var G=r.memoizedState;_.state=G,Fl(r,c,_,d),k=r.memoizedState,I!==c||G!==k||Wt.current||qr?(typeof Q=="function"&&(hh(r,a,Q,c),k=r.memoizedState),(I=qr||Up(r,a,I,c,G,k,F))?(Y||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=k),_.props=c,_.state=k,_.context=F,c=I):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,pp(n,r),I=r.memoizedProps,F=r.type===r.elementType?I:Dn(r.type,I),_.props=F,Y=r.pendingProps,G=_.context,k=a.contextType,typeof k=="object"&&k!==null?k=yn(k):(k=Gt(a)?Fi:Dt.current,k=Us(r,k));var te=a.getDerivedStateFromProps;(Q=typeof te=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(I!==Y||G!==k)&&zp(r,_,c,k),qr=!1,G=r.memoizedState,_.state=G,Fl(r,c,_,d);var oe=r.memoizedState;I!==Y||G!==oe||Wt.current||qr?(typeof te=="function"&&(hh(r,a,te,c),oe=r.memoizedState),(F=qr||Up(r,a,F,c,G,oe,k)||!1)?(Q||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,oe,k),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,oe,k)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=oe),_.props=c,_.state=oe,_.context=k,c=F):(typeof _.componentDidUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(r.flags|=1024),c=!1)}return gh(n,r,a,c,p,d)}function gh(n,r,a,c,d,p){Xp(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return d&&rp(r,a,!1),_r(n,r,p);c=r.stateNode,I0.current=r;var I=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=$s(r,n.child,null,p),r.child=$s(r,null,I,p)):Bt(n,r,I,p),r.memoizedState=c.state,d&&rp(r,a,!0),r.child}function Zp(n){var r=n.stateNode;r.pendingContext?tp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&tp(n,r.context,!1),Zc(n,r.containerInfo)}function em(n,r,a,c,d){return Bs(),Wc(d),r.flags|=256,Bt(n,r,a,c),r.child}var yh={dehydrated:null,treeContext:null,retryLane:0};function _h(n){return{baseLanes:n,cachePool:null,transitions:null}}function tm(n,r,a){var c=r.pendingProps,d=Ze.current,p=!1,_=(r.flags&128)!==0,I;if((I=_)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ge(Ze,d&1),n===null)return qc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(_=c.children,n=c.fallback,p?(c=r.mode,p=r.child,_={mode:"hidden",children:_},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=_):p=su(_,c,0,null),n=Ki(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=_h(a),r.memoizedState=yh,n):vh(r,_));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return S0(n,r,_,c,I,d,a);if(p){p=c.fallback,_=r.mode,d=n.child,I=d.sibling;var k={mode:"hidden",children:c.children};return(_&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=k,r.deletions=null):(c=Jr(d,k),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?p=Jr(I,p):(p=Ki(p,_,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,_=n.child.memoizedState,_=_===null?_h(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},p.memoizedState=_,p.childLanes=n.childLanes&~a,r.memoizedState=yh,c}return p=n.child,n=p.sibling,c=Jr(p,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function vh(n,r){return r=su({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Wl(n,r,a,c){return c!==null&&Wc(c),$s(r,n.child,null,a),n=vh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function S0(n,r,a,c,d,p,_){if(a)return r.flags&256?(r.flags&=-257,c=fh(Error(t(422))),Wl(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=su({mode:"visible",children:c.children},d,0,null),p=Ki(p,d,_,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,(r.mode&1)!==0&&$s(r,n.child,null,_),r.child.memoizedState=_h(_),r.memoizedState=yh,p);if((r.mode&1)===0)return Wl(n,r,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,p=Error(t(419)),c=fh(p,c,void 0),Wl(n,r,_,c)}if(I=(_&n.childLanes)!==0,Kt||I){if(c=Tt,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,gr(n,d),Ln(c,n,d,-1))}return Lh(),c=fh(Error(t(421))),Wl(n,r,_,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=b0.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,ln=zr(d.nextSibling),an=r,Je=!0,Nn=null,n!==null&&(mn[gn++]=pr,mn[gn++]=mr,mn[gn++]=Ui,pr=n.id,mr=n.overflow,Ui=r),r=vh(r,c.children),r.flags|=4096,r)}function nm(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Yc(n.return,r,a)}function wh(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function rm(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(Bt(n,r,c.children,a),c=Ze.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&nm(n,a,r);else if(n.tag===19)nm(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ge(Ze,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Ul(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),wh(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Ul(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}wh(r,!0,a,null,p);break;case"together":wh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Gl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function _r(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Hi|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=Jr(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Jr(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function A0(n,r,a){switch(r.tag){case 3:Zp(r),Bs();break;case 5:yp(r);break;case 1:Gt(r.type)&&Pl(r);break;case 4:Zc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;Ge(Ll,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(Ge(Ze,Ze.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?tm(n,r,a):(Ge(Ze,Ze.current&1),n=_r(n,r,a),n!==null?n.sibling:null);Ge(Ze,Ze.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return rm(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ge(Ze,Ze.current),c)break;return null;case 22:case 23:return r.lanes=0,Yp(n,r,a)}return _r(n,r,a)}var im,Eh,sm,om;im=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Eh=function(){},sm=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Bi(Gn.current);var p=null;switch(a){case"input":d=Ei(n,d),c=Ei(n,c),p=[];break;case"select":d=ee({},d,{value:void 0}),c=ee({},c,{value:void 0}),p=[];break;case"textarea":d=ko(n,d),c=ko(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Cl)}Oo(a,c);var _;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var I=d[F];for(_ in I)I.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?p||(p=[]):(p=p||[]).push(F,null));for(F in c){var k=c[F];if(I=d?.[F],c.hasOwnProperty(F)&&k!==I&&(k!=null||I!=null))if(F==="style")if(I){for(_ in I)!I.hasOwnProperty(_)||k&&k.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in k)k.hasOwnProperty(_)&&I[_]!==k[_]&&(a||(a={}),a[_]=k[_])}else a||(p||(p=[]),p.push(F,a)),a=k;else F==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,I=I?I.__html:void 0,k!=null&&I!==k&&(p=p||[]).push(F,k)):F==="children"?typeof k!="string"&&typeof k!="number"||(p=p||[]).push(F,""+k):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(k!=null&&F==="onScroll"&&Ke("scroll",n),p||I===k||(p=[])):(p=p||[]).push(F,k))}a&&(p=p||[]).push("style",a);var F=p;(r.updateQueue=F)&&(r.flags|=4)}},om=function(n,r,a,c){a!==c&&(r.flags|=4)};function pa(n,r){if(!Je)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ot(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function C0(n,r,a){var c=r.pendingProps;switch($c(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(r),null;case 1:return Gt(r.type)&&kl(),Ot(r),null;case 3:return c=r.stateNode,Ws(),Qe(Wt),Qe(Dt),nh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Vl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Nn!==null&&(Dh(Nn),Nn=null))),Eh(n,r),Ot(r),null;case 5:eh(r);var d=Bi(ua.current);if(a=r.type,n!==null&&r.stateNode!=null)sm(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Ot(r),null}if(n=Bi(Gn.current),Vl(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[Wn]=r,c[ia]=p,n=(r.mode&1)!==0,a){case"dialog":Ke("cancel",c),Ke("close",c);break;case"iframe":case"object":case"embed":Ke("load",c);break;case"video":case"audio":for(d=0;d<ta.length;d++)Ke(ta[d],c);break;case"source":Ke("error",c);break;case"img":case"image":case"link":Ke("error",c),Ke("load",c);break;case"details":Ke("toggle",c);break;case"input":as(c,p),Ke("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Ke("invalid",c);break;case"textarea":us(c,p),Ke("invalid",c)}Oo(a,p),d=null;for(var _ in p)if(p.hasOwnProperty(_)){var I=p[_];_==="children"?typeof I=="string"?c.textContent!==I&&(p.suppressHydrationWarning!==!0&&Al(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&Al(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(_)&&I!=null&&_==="onScroll"&&Ke("scroll",c)}switch(a){case"input":nr(c),Xa(c,p,!0);break;case"textarea":nr(c),Po(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Cl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ht(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[Wn]=r,n[ia]=c,im(n,r,!1,!1),r.stateNode=n;e:{switch(_=Lo(a,c),a){case"dialog":Ke("cancel",n),Ke("close",n),d=c;break;case"iframe":case"object":case"embed":Ke("load",n),d=c;break;case"video":case"audio":for(d=0;d<ta.length;d++)Ke(ta[d],n);d=c;break;case"source":Ke("error",n),d=c;break;case"img":case"image":case"link":Ke("error",n),Ke("load",n),d=c;break;case"details":Ke("toggle",n),d=c;break;case"input":as(n,c),d=Ei(n,c),Ke("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ee({},c,{value:void 0}),Ke("invalid",n);break;case"textarea":us(n,c),d=ko(n,c),Ke("invalid",n);break;default:d=c}Oo(a,d),I=d;for(p in I)if(I.hasOwnProperty(p)){var k=I[p];p==="style"?Do(n,k):p==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&xo(n,k)):p==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&xr(n,k):typeof k=="number"&&xr(n,""+k):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?k!=null&&p==="onScroll"&&Ke("scroll",n):k!=null&&ye(n,p,k,_))}switch(a){case"input":nr(n),Xa(n,c,!1);break;case"textarea":nr(n),Po(n);break;case"option":c.value!=null&&n.setAttribute("value",""+je(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?ir(n,!!c.multiple,p,!1):c.defaultValue!=null&&ir(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Cl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ot(r),null;case 6:if(n&&r.stateNode!=null)om(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Bi(ua.current),Bi(Gn.current),Vl(r)){if(c=r.stateNode,a=r.memoizedProps,c[Wn]=r,(p=c.nodeValue!==a)&&(n=an,n!==null))switch(n.tag){case 3:Al(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Al(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Wn]=r,r.stateNode=c}return Ot(r),null;case 13:if(Qe(Ze),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Je&&ln!==null&&(r.mode&1)!==0&&(r.flags&128)===0)up(),Bs(),r.flags|=98560,p=!1;else if(p=Vl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Wn]=r}else Bs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ot(r),p=!1}else Nn!==null&&(Dh(Nn),Nn=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Ze.current&1)!==0?mt===0&&(mt=3):Lh())),r.updateQueue!==null&&(r.flags|=4),Ot(r),null);case 4:return Ws(),Eh(n,r),n===null&&na(r.stateNode.containerInfo),Ot(r),null;case 10:return Qc(r.type._context),Ot(r),null;case 17:return Gt(r.type)&&kl(),Ot(r),null;case 19:if(Qe(Ze),p=r.memoizedState,p===null)return Ot(r),null;if(c=(r.flags&128)!==0,_=p.rendering,_===null)if(c)pa(p,!1);else{if(mt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(_=Ul(n),_!==null){for(r.flags|=128,pa(p,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,_=p.alternate,_===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=_.childLanes,p.lanes=_.lanes,p.child=_.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=_.memoizedProps,p.memoizedState=_.memoizedState,p.updateQueue=_.updateQueue,p.type=_.type,n=_.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ge(Ze,Ze.current&1|2),r.child}n=n.sibling}p.tail!==null&&We()>Ys&&(r.flags|=128,c=!0,pa(p,!1),r.lanes=4194304)}else{if(!c)if(n=Ul(_),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),pa(p,!0),p.tail===null&&p.tailMode==="hidden"&&!_.alternate&&!Je)return Ot(r),null}else 2*We()-p.renderingStartTime>Ys&&a!==1073741824&&(r.flags|=128,c=!0,pa(p,!1),r.lanes=4194304);p.isBackwards?(_.sibling=r.child,r.child=_):(a=p.last,a!==null?a.sibling=_:r.child=_,p.last=_)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=We(),r.sibling=null,a=Ze.current,Ge(Ze,c?a&1|2:a&1),r):(Ot(r),null);case 22:case 23:return Oh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(un&1073741824)!==0&&(Ot(r),r.subtreeFlags&6&&(r.flags|=8192)):Ot(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function R0(n,r){switch($c(r),r.tag){case 1:return Gt(r.type)&&kl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ws(),Qe(Wt),Qe(Dt),nh(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return eh(r),null;case 13:if(Qe(Ze),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Bs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Qe(Ze),null;case 4:return Ws(),null;case 10:return Qc(r.type._context),null;case 22:case 23:return Oh(),null;case 24:return null;default:return null}}var Kl=!1,Lt=!1,k0=typeof WeakSet=="function"?WeakSet:Set,ie=null;function Ks(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){rt(n,r,c)}else a.current=null}function Th(n,r,a){try{a()}catch(c){rt(n,r,c)}}var am=!1;function P0(n,r){if(Oc=Fr,n=Uf(),Cc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var _=0,I=-1,k=-1,F=0,Q=0,Y=n,G=null;t:for(;;){for(var te;Y!==a||d!==0&&Y.nodeType!==3||(I=_+d),Y!==p||c!==0&&Y.nodeType!==3||(k=_+c),Y.nodeType===3&&(_+=Y.nodeValue.length),(te=Y.firstChild)!==null;)G=Y,Y=te;for(;;){if(Y===n)break t;if(G===a&&++F===d&&(I=_),G===p&&++Q===c&&(k=_),(te=Y.nextSibling)!==null)break;Y=G,G=Y.parentNode}Y=te}a=I===-1||k===-1?null:{start:I,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Lc={focusedElem:n,selectionRange:a},Fr=!1,ie=r;ie!==null;)if(r=ie,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ie=n;else for(;ie!==null;){r=ie;try{var oe=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(oe!==null){var ae=oe.memoizedProps,st=oe.memoizedState,M=r.stateNode,N=M.getSnapshotBeforeUpdate(r.elementType===r.type?ae:Dn(r.type,ae),st);M.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var b=r.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(J){rt(r,r.return,J)}if(n=r.sibling,n!==null){n.return=r.return,ie=n;break}ie=r.return}return oe=am,am=!1,oe}function ma(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Th(r,a,p)}d=d.next}while(d!==c)}}function Ql(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function Ih(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function lm(n){var r=n.alternate;r!==null&&(n.alternate=null,lm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Wn],delete r[ia],delete r[Uc],delete r[h0],delete r[d0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function um(n){return n.tag===5||n.tag===3||n.tag===4}function cm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||um(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Sh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Cl));else if(c!==4&&(n=n.child,n!==null))for(Sh(n,r,a),n=n.sibling;n!==null;)Sh(n,r,a),n=n.sibling}function Ah(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Ah(n,r,a),n=n.sibling;n!==null;)Ah(n,r,a),n=n.sibling}var Rt=null,Vn=!1;function Gr(n,r,a){for(a=a.child;a!==null;)hm(n,r,a),a=a.sibling}function hm(n,r,a){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(xi,a)}catch{}switch(a.tag){case 5:Lt||Ks(a,r);case 6:var c=Rt,d=Vn;Rt=null,Gr(n,r,a),Rt=c,Vn=d,Rt!==null&&(Vn?(n=Rt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Rt.removeChild(a.stateNode));break;case 18:Rt!==null&&(Vn?(n=Rt,a=a.stateNode,n.nodeType===8?Fc(n.parentNode,a):n.nodeType===1&&Fc(n,a),kn(n)):Fc(Rt,a.stateNode));break;case 4:c=Rt,d=Vn,Rt=a.stateNode.containerInfo,Vn=!0,Gr(n,r,a),Rt=c,Vn=d;break;case 0:case 11:case 14:case 15:if(!Lt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,_=p.destroy;p=p.tag,_!==void 0&&((p&2)!==0||(p&4)!==0)&&Th(a,r,_),d=d.next}while(d!==c)}Gr(n,r,a);break;case 1:if(!Lt&&(Ks(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){rt(a,r,I)}Gr(n,r,a);break;case 21:Gr(n,r,a);break;case 22:a.mode&1?(Lt=(c=Lt)||a.memoizedState!==null,Gr(n,r,a),Lt=c):Gr(n,r,a);break;default:Gr(n,r,a)}}function dm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new k0),r.forEach(function(c){var d=F0.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function On(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,_=r,I=_;e:for(;I!==null;){switch(I.tag){case 5:Rt=I.stateNode,Vn=!1;break e;case 3:Rt=I.stateNode.containerInfo,Vn=!0;break e;case 4:Rt=I.stateNode.containerInfo,Vn=!0;break e}I=I.return}if(Rt===null)throw Error(t(160));hm(p,_,d),Rt=null,Vn=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(F){rt(d,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)fm(r,n),r=r.sibling}function fm(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(On(r,n),Qn(n),c&4){try{ma(3,n,n.return),Ql(3,n)}catch(ae){rt(n,n.return,ae)}try{ma(5,n,n.return)}catch(ae){rt(n,n.return,ae)}}break;case 1:On(r,n),Qn(n),c&512&&a!==null&&Ks(a,a.return);break;case 5:if(On(r,n),Qn(n),c&512&&a!==null&&Ks(a,a.return),n.flags&32){var d=n.stateNode;try{xr(d,"")}catch(ae){rt(n,n.return,ae)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,_=a!==null?a.memoizedProps:p,I=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&Co(d,p),Lo(I,_);var F=Lo(I,p);for(_=0;_<k.length;_+=2){var Q=k[_],Y=k[_+1];Q==="style"?Do(d,Y):Q==="dangerouslySetInnerHTML"?xo(d,Y):Q==="children"?xr(d,Y):ye(d,Q,Y,F)}switch(I){case"input":Ro(d,p);break;case"textarea":cs(d,p);break;case"select":var G=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var te=p.value;te!=null?ir(d,!!p.multiple,te,!1):G!==!!p.multiple&&(p.defaultValue!=null?ir(d,!!p.multiple,p.defaultValue,!0):ir(d,!!p.multiple,p.multiple?[]:"",!1))}d[ia]=p}catch(ae){rt(n,n.return,ae)}}break;case 6:if(On(r,n),Qn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(ae){rt(n,n.return,ae)}}break;case 3:if(On(r,n),Qn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{kn(r.containerInfo)}catch(ae){rt(n,n.return,ae)}break;case 4:On(r,n),Qn(n);break;case 13:On(r,n),Qn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(kh=We())),c&4&&dm(n);break;case 22:if(Q=a!==null&&a.memoizedState!==null,n.mode&1?(Lt=(F=Lt)||Q,On(r,n),Lt=F):On(r,n),Qn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!Q&&(n.mode&1)!==0)for(ie=n,Q=n.child;Q!==null;){for(Y=ie=Q;ie!==null;){switch(G=ie,te=G.child,G.tag){case 0:case 11:case 14:case 15:ma(4,G,G.return);break;case 1:Ks(G,G.return);var oe=G.stateNode;if(typeof oe.componentWillUnmount=="function"){c=G,a=G.return;try{r=c,oe.props=r.memoizedProps,oe.state=r.memoizedState,oe.componentWillUnmount()}catch(ae){rt(c,a,ae)}}break;case 5:Ks(G,G.return);break;case 22:if(G.memoizedState!==null){gm(Y);continue}}te!==null?(te.return=G,ie=te):gm(Y)}Q=Q.sibling}e:for(Q=null,Y=n;;){if(Y.tag===5){if(Q===null){Q=Y;try{d=Y.stateNode,F?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=Y.stateNode,k=Y.memoizedProps.style,_=k!=null&&k.hasOwnProperty("display")?k.display:null,I.style.display=No("display",_))}catch(ae){rt(n,n.return,ae)}}}else if(Y.tag===6){if(Q===null)try{Y.stateNode.nodeValue=F?"":Y.memoizedProps}catch(ae){rt(n,n.return,ae)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===n)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===n)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===n)break e;Q===Y&&(Q=null),Y=Y.return}Q===Y&&(Q=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:On(r,n),Qn(n),c&4&&dm(n);break;case 21:break;default:On(r,n),Qn(n)}}function Qn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(um(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(xr(d,""),c.flags&=-33);var p=cm(n);Ah(n,p,d);break;case 3:case 4:var _=c.stateNode.containerInfo,I=cm(n);Sh(n,I,_);break;default:throw Error(t(161))}}catch(k){rt(n,n.return,k)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function x0(n,r,a){ie=n,pm(n)}function pm(n,r,a){for(var c=(n.mode&1)!==0;ie!==null;){var d=ie,p=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||Kl;if(!_){var I=d.alternate,k=I!==null&&I.memoizedState!==null||Lt;I=Kl;var F=Lt;if(Kl=_,(Lt=k)&&!F)for(ie=d;ie!==null;)_=ie,k=_.child,_.tag===22&&_.memoizedState!==null?ym(d):k!==null?(k.return=_,ie=k):ym(d);for(;p!==null;)ie=p,pm(p),p=p.sibling;ie=d,Kl=I,Lt=F}mm(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,ie=p):mm(n)}}function mm(n){for(;ie!==null;){var r=ie;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Lt||Ql(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Lt)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:Dn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&gp(r,p,c);break;case 3:var _=r.updateQueue;if(_!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}gp(r,_,a)}break;case 5:var I=r.stateNode;if(a===null&&r.flags&4){a=I;var k=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var Q=F.memoizedState;if(Q!==null){var Y=Q.dehydrated;Y!==null&&kn(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Lt||r.flags&512&&Ih(r)}catch(G){rt(r,r.return,G)}}if(r===n){ie=null;break}if(a=r.sibling,a!==null){a.return=r.return,ie=a;break}ie=r.return}}function gm(n){for(;ie!==null;){var r=ie;if(r===n){ie=null;break}var a=r.sibling;if(a!==null){a.return=r.return,ie=a;break}ie=r.return}}function ym(n){for(;ie!==null;){var r=ie;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Ql(4,r)}catch(k){rt(r,a,k)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(k){rt(r,d,k)}}var p=r.return;try{Ih(r)}catch(k){rt(r,p,k)}break;case 5:var _=r.return;try{Ih(r)}catch(k){rt(r,_,k)}}}catch(k){rt(r,r.return,k)}if(r===n){ie=null;break}var I=r.sibling;if(I!==null){I.return=r.return,ie=I;break}ie=r.return}}var N0=Math.ceil,Yl=Ie.ReactCurrentDispatcher,Ch=Ie.ReactCurrentOwner,vn=Ie.ReactCurrentBatchConfig,be=0,Tt=null,lt=null,kt=0,un=0,Qs=Br(0),mt=0,ga=null,Hi=0,Xl=0,Rh=0,ya=null,Qt=null,kh=0,Ys=1/0,vr=null,Jl=!1,Ph=null,Kr=null,Zl=!1,Qr=null,eu=0,_a=0,xh=null,tu=-1,nu=0;function $t(){return(be&6)!==0?We():tu!==-1?tu:tu=We()}function Yr(n){return(n.mode&1)===0?1:(be&2)!==0&&kt!==0?kt&-kt:p0.transition!==null?(nu===0&&(nu=Di()),nu):(n=Ve,n!==0||(n=window.event,n=n===void 0?16:Wo(n.type)),n)}function Ln(n,r,a,c){if(50<_a)throw _a=0,xh=null,Error(t(185));Or(n,a,c),((be&2)===0||n!==Tt)&&(n===Tt&&((be&2)===0&&(Xl|=a),mt===4&&Xr(n,kt)),Yt(n,c),a===1&&be===0&&(r.mode&1)===0&&(Ys=We()+500,xl&&Hr()))}function Yt(n,r){var a=n.callbackNode;ar(n,r);var c=Ni(n,n===Tt?kt:0);if(c===0)a!==null&&zo(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&zo(a),r===1)n.tag===0?f0(vm.bind(null,n)):ip(vm.bind(null,n)),u0(function(){(be&6)===0&&Hr()}),a=null;else{switch(Mr(c)){case 1:a=Pi;break;case 4:a=Nr;break;case 16:a=dn;break;case 536870912:a=nl;break;default:a=dn}a=Rm(a,_m.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function _m(n,r){if(tu=-1,nu=0,(be&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Xs()&&n.callbackNode!==a)return null;var c=Ni(n,n===Tt?kt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=ru(n,c);else{r=c;var d=be;be|=2;var p=Em();(Tt!==n||kt!==r)&&(vr=null,Ys=We()+500,Wi(n,r));do try{O0();break}catch(I){wm(n,I)}while(!0);Kc(),Yl.current=p,be=d,lt!==null?r=0:(Tt=null,kt=0,r=mt)}if(r!==0){if(r===2&&(d=rn(n),d!==0&&(c=d,r=Nh(n,d))),r===1)throw a=ga,Wi(n,0),Xr(n,c),Yt(n,We()),a;if(r===6)Xr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!D0(d)&&(r=ru(n,c),r===2&&(p=rn(n),p!==0&&(c=p,r=Nh(n,p))),r===1))throw a=ga,Wi(n,0),Xr(n,c),Yt(n,We()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Gi(n,Qt,vr);break;case 3:if(Xr(n,c),(c&130023424)===c&&(r=kh+500-We(),10<r)){if(Ni(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){$t(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=bc(Gi.bind(null,n,Qt,vr),r);break}Gi(n,Qt,vr);break;case 4:if(Xr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var _=31-jt(c);p=1<<_,_=r[_],_>d&&(d=_),c&=~p}if(c=d,c=We()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*N0(c/1960))-c,10<c){n.timeoutHandle=bc(Gi.bind(null,n,Qt,vr),c);break}Gi(n,Qt,vr);break;case 5:Gi(n,Qt,vr);break;default:throw Error(t(329))}}}return Yt(n,We()),n.callbackNode===a?_m.bind(null,n):null}function Nh(n,r){var a=ya;return n.current.memoizedState.isDehydrated&&(Wi(n,r).flags|=256),n=ru(n,r),n!==2&&(r=Qt,Qt=a,r!==null&&Dh(r)),n}function Dh(n){Qt===null?Qt=n:Qt.push.apply(Qt,n)}function D0(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!xn(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Xr(n,r){for(r&=~Rh,r&=~Xl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-jt(r),c=1<<a;n[a]=-1,r&=~c}}function vm(n){if((be&6)!==0)throw Error(t(327));Xs();var r=Ni(n,0);if((r&1)===0)return Yt(n,We()),null;var a=ru(n,r);if(n.tag!==0&&a===2){var c=rn(n);c!==0&&(r=c,a=Nh(n,c))}if(a===1)throw a=ga,Wi(n,0),Xr(n,r),Yt(n,We()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Gi(n,Qt,vr),Yt(n,We()),null}function Vh(n,r){var a=be;be|=1;try{return n(r)}finally{be=a,be===0&&(Ys=We()+500,xl&&Hr())}}function qi(n){Qr!==null&&Qr.tag===0&&(be&6)===0&&Xs();var r=be;be|=1;var a=vn.transition,c=Ve;try{if(vn.transition=null,Ve=1,n)return n()}finally{Ve=c,vn.transition=a,be=r,(be&6)===0&&Hr()}}function Oh(){un=Qs.current,Qe(Qs)}function Wi(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,l0(a)),lt!==null)for(a=lt.return;a!==null;){var c=a;switch($c(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&kl();break;case 3:Ws(),Qe(Wt),Qe(Dt),nh();break;case 5:eh(c);break;case 4:Ws();break;case 13:Qe(Ze);break;case 19:Qe(Ze);break;case 10:Qc(c.type._context);break;case 22:case 23:Oh()}a=a.return}if(Tt=n,lt=n=Jr(n.current,null),kt=un=r,mt=0,ga=null,Rh=Xl=Hi=0,Qt=ya=null,zi!==null){for(r=0;r<zi.length;r++)if(a=zi[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var _=p.next;p.next=d,c.next=_}a.pending=c}zi=null}return n}function wm(n,r){do{var a=lt;try{if(Kc(),jl.current=Hl,zl){for(var c=et.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}zl=!1}if($i=0,Et=pt=et=null,ca=!1,ha=0,Ch.current=null,a===null||a.return===null){mt=1,ga=r,lt=null;break}e:{var p=n,_=a.return,I=a,k=r;if(r=kt,I.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var F=k,Q=I,Y=Q.tag;if((Q.mode&1)===0&&(Y===0||Y===11||Y===15)){var G=Q.alternate;G?(Q.updateQueue=G.updateQueue,Q.memoizedState=G.memoizedState,Q.lanes=G.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var te=qp(_);if(te!==null){te.flags&=-257,Wp(te,_,I,p,r),te.mode&1&&Hp(p,F,r),r=te,k=F;var oe=r.updateQueue;if(oe===null){var ae=new Set;ae.add(k),r.updateQueue=ae}else oe.add(k);break e}else{if((r&1)===0){Hp(p,F,r),Lh();break e}k=Error(t(426))}}else if(Je&&I.mode&1){var st=qp(_);if(st!==null){(st.flags&65536)===0&&(st.flags|=256),Wp(st,_,I,p,r),Wc(Gs(k,I));break e}}p=k=Gs(k,I),mt!==4&&(mt=2),ya===null?ya=[p]:ya.push(p),p=_;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var M=Bp(p,k,r);mp(p,M);break e;case 1:I=k;var N=p.type,b=p.stateNode;if((p.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Kr===null||!Kr.has(b)))){p.flags|=65536,r&=-r,p.lanes|=r;var J=$p(p,I,r);mp(p,J);break e}}p=p.return}while(p!==null)}Im(a)}catch(le){r=le,lt===a&&a!==null&&(lt=a=a.return);continue}break}while(!0)}function Em(){var n=Yl.current;return Yl.current=Hl,n===null?Hl:n}function Lh(){(mt===0||mt===3||mt===2)&&(mt=4),Tt===null||(Hi&268435455)===0&&(Xl&268435455)===0||Xr(Tt,kt)}function ru(n,r){var a=be;be|=2;var c=Em();(Tt!==n||kt!==r)&&(vr=null,Wi(n,r));do try{V0();break}catch(d){wm(n,d)}while(!0);if(Kc(),be=a,Yl.current=c,lt!==null)throw Error(t(261));return Tt=null,kt=0,mt}function V0(){for(;lt!==null;)Tm(lt)}function O0(){for(;lt!==null&&!el();)Tm(lt)}function Tm(n){var r=Cm(n.alternate,n,un);n.memoizedProps=n.pendingProps,r===null?Im(n):lt=r,Ch.current=null}function Im(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=C0(a,r,un),a!==null){lt=a;return}}else{if(a=R0(a,r),a!==null){a.flags&=32767,lt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{mt=6,lt=null;return}}if(r=r.sibling,r!==null){lt=r;return}lt=r=n}while(r!==null);mt===0&&(mt=5)}function Gi(n,r,a){var c=Ve,d=vn.transition;try{vn.transition=null,Ve=1,L0(n,r,a,c)}finally{vn.transition=d,Ve=c}return null}function L0(n,r,a,c){do Xs();while(Qr!==null);if((be&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(He(n,p),n===Tt&&(lt=Tt=null,kt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Zl||(Zl=!0,Rm(dn,function(){return Xs(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=vn.transition,vn.transition=null;var _=Ve;Ve=1;var I=be;be|=4,Ch.current=null,P0(n,a),fm(a,n),t0(Lc),Fr=!!Oc,Lc=Oc=null,n.current=a,x0(a),_c(),be=I,Ve=_,vn.transition=p}else n.current=a;if(Zl&&(Zl=!1,Qr=n,eu=d),p=n.pendingLanes,p===0&&(Kr=null),rl(a.stateNode),Yt(n,We()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Jl)throw Jl=!1,n=Ph,Ph=null,n;return(eu&1)!==0&&n.tag!==0&&Xs(),p=n.pendingLanes,(p&1)!==0?n===xh?_a++:(_a=0,xh=n):_a=0,Hr(),null}function Xs(){if(Qr!==null){var n=Mr(eu),r=vn.transition,a=Ve;try{if(vn.transition=null,Ve=16>n?16:n,Qr===null)var c=!1;else{if(n=Qr,Qr=null,eu=0,(be&6)!==0)throw Error(t(331));var d=be;for(be|=4,ie=n.current;ie!==null;){var p=ie,_=p.child;if((ie.flags&16)!==0){var I=p.deletions;if(I!==null){for(var k=0;k<I.length;k++){var F=I[k];for(ie=F;ie!==null;){var Q=ie;switch(Q.tag){case 0:case 11:case 15:ma(8,Q,p)}var Y=Q.child;if(Y!==null)Y.return=Q,ie=Y;else for(;ie!==null;){Q=ie;var G=Q.sibling,te=Q.return;if(lm(Q),Q===F){ie=null;break}if(G!==null){G.return=te,ie=G;break}ie=te}}}var oe=p.alternate;if(oe!==null){var ae=oe.child;if(ae!==null){oe.child=null;do{var st=ae.sibling;ae.sibling=null,ae=st}while(ae!==null)}}ie=p}}if((p.subtreeFlags&2064)!==0&&_!==null)_.return=p,ie=_;else e:for(;ie!==null;){if(p=ie,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:ma(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,ie=M;break e}ie=p.return}}var N=n.current;for(ie=N;ie!==null;){_=ie;var b=_.child;if((_.subtreeFlags&2064)!==0&&b!==null)b.return=_,ie=b;else e:for(_=N;ie!==null;){if(I=ie,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Ql(9,I)}}catch(le){rt(I,I.return,le)}if(I===_){ie=null;break e}var J=I.sibling;if(J!==null){J.return=I.return,ie=J;break e}ie=I.return}}if(be=d,Hr(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(xi,n)}catch{}c=!0}return c}finally{Ve=a,vn.transition=r}}return!1}function Sm(n,r,a){r=Gs(a,r),r=Bp(n,r,1),n=Wr(n,r,1),r=$t(),n!==null&&(Or(n,1,r),Yt(n,r))}function rt(n,r,a){if(n.tag===3)Sm(n,n,a);else for(;r!==null;){if(r.tag===3){Sm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Kr===null||!Kr.has(c))){n=Gs(a,n),n=$p(r,n,1),r=Wr(r,n,1),n=$t(),r!==null&&(Or(r,1,n),Yt(r,n));break}}r=r.return}}function M0(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=$t(),n.pingedLanes|=n.suspendedLanes&a,Tt===n&&(kt&a)===a&&(mt===4||mt===3&&(kt&130023424)===kt&&500>We()-kh?Wi(n,0):Rh|=a),Yt(n,r)}function Am(n,r){r===0&&((n.mode&1)===0?r=1:(r=ws,ws<<=1,(ws&130023424)===0&&(ws=4194304)));var a=$t();n=gr(n,r),n!==null&&(Or(n,r,a),Yt(n,a))}function b0(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Am(n,a)}function F0(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Am(n,a)}var Cm;Cm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Wt.current)Kt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Kt=!1,A0(n,r,a);Kt=(n.flags&131072)!==0}else Kt=!1,Je&&(r.flags&1048576)!==0&&sp(r,Dl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Gl(n,r),n=r.pendingProps;var d=Us(r,Dt.current);qs(r,a),d=sh(null,r,c,n,d,a);var p=oh();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Gt(c)?(p=!0,Pl(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Jc(r),d.updater=ql,r.stateNode=d,d._reactInternals=r,dh(r,c,n,a),r=gh(null,r,c,!0,p,a)):(r.tag=0,Je&&p&&Bc(r),Bt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Gl(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=j0(c),n=Dn(c,n),d){case 0:r=mh(null,r,c,n,a);break e;case 1:r=Jp(null,r,c,n,a);break e;case 11:r=Gp(null,r,c,n,a);break e;case 14:r=Kp(null,r,c,Dn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Dn(c,d),mh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Dn(c,d),Jp(n,r,c,d,a);case 3:e:{if(Zp(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,pp(n,r),Fl(r,c,null,a);var _=r.memoizedState;if(c=_.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=Gs(Error(t(423)),r),r=em(n,r,c,a,d);break e}else if(c!==d){d=Gs(Error(t(424)),r),r=em(n,r,c,a,d);break e}else for(ln=zr(r.stateNode.containerInfo.firstChild),an=r,Je=!0,Nn=null,a=dp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Bs(),c===d){r=_r(n,r,a);break e}Bt(n,r,c,a)}r=r.child}return r;case 5:return yp(r),n===null&&qc(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,_=d.children,Mc(c,d)?_=null:p!==null&&Mc(c,p)&&(r.flags|=32),Xp(n,r),Bt(n,r,_,a),r.child;case 6:return n===null&&qc(r),null;case 13:return tm(n,r,a);case 4:return Zc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=$s(r,null,c,a):Bt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Dn(c,d),Gp(n,r,c,d,a);case 7:return Bt(n,r,r.pendingProps,a),r.child;case 8:return Bt(n,r,r.pendingProps.children,a),r.child;case 12:return Bt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,_=d.value,Ge(Ll,c._currentValue),c._currentValue=_,p!==null)if(xn(p.value,_)){if(p.children===d.children&&!Wt.current){r=_r(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var I=p.dependencies;if(I!==null){_=p.child;for(var k=I.firstContext;k!==null;){if(k.context===c){if(p.tag===1){k=yr(-1,a&-a),k.tag=2;var F=p.updateQueue;if(F!==null){F=F.shared;var Q=F.pending;Q===null?k.next=k:(k.next=Q.next,Q.next=k),F.pending=k}}p.lanes|=a,k=p.alternate,k!==null&&(k.lanes|=a),Yc(p.return,a,r),I.lanes|=a;break}k=k.next}}else if(p.tag===10)_=p.type===r.type?null:p.child;else if(p.tag===18){if(_=p.return,_===null)throw Error(t(341));_.lanes|=a,I=_.alternate,I!==null&&(I.lanes|=a),Yc(_,a,r),_=p.sibling}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===r){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}Bt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,qs(r,a),d=yn(d),c=c(d),r.flags|=1,Bt(n,r,c,a),r.child;case 14:return c=r.type,d=Dn(c,r.pendingProps),d=Dn(c.type,d),Kp(n,r,c,d,a);case 15:return Qp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Dn(c,d),Gl(n,r),r.tag=1,Gt(c)?(n=!0,Pl(r)):n=!1,qs(r,a),jp(r,c,d),dh(r,c,d,a),gh(null,r,c,!0,n,a);case 19:return rm(n,r,a);case 22:return Yp(n,r,a)}throw Error(t(156,r.tag))};function Rm(n,r){return _s(n,r)}function U0(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(n,r,a,c){return new U0(n,r,a,c)}function Mh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function j0(n){if(typeof n=="function")return Mh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===P)return 11;if(n===Se)return 14}return 2}function Jr(n,r){var a=n.alternate;return a===null?(a=wn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function iu(n,r,a,c,d,p){var _=2;if(c=n,typeof n=="function")Mh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case D:return Ki(a.children,d,p,r);case S:_=8,d|=8;break;case C:return n=wn(12,a,r,d|2),n.elementType=C,n.lanes=p,n;case T:return n=wn(13,a,r,d),n.elementType=T,n.lanes=p,n;case he:return n=wn(19,a,r,d),n.elementType=he,n.lanes=p,n;case fe:return su(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case x:_=10;break e;case V:_=9;break e;case P:_=11;break e;case Se:_=14;break e;case Ae:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=wn(_,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function Ki(n,r,a,c){return n=wn(7,n,c,r),n.lanes=a,n}function su(n,r,a,c){return n=wn(22,n,c,r),n.elementType=fe,n.lanes=a,n.stateNode={isHidden:!1},n}function bh(n,r,a){return n=wn(6,n,null,r),n.lanes=a,n}function Fh(n,r,a){return r=wn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function z0(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vr(0),this.expirationTimes=Vr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Uh(n,r,a,c,d,p,_,I,k){return n=new z0(n,r,a,I,k),r===1?(r=1,p===!0&&(r|=8)):r=0,p=wn(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jc(p),n}function B0(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ce,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function km(n){if(!n)return $r;n=n._reactInternals;e:{if(In(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Gt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Gt(a))return np(n,a,r)}return r}function Pm(n,r,a,c,d,p,_,I,k){return n=Uh(a,c,!0,n,d,p,_,I,k),n.context=km(null),a=n.current,c=$t(),d=Yr(a),p=yr(c,d),p.callback=r??null,Wr(a,p,d),n.current.lanes=d,Or(n,d,c),Yt(n,c),n}function ou(n,r,a,c){var d=r.current,p=$t(),_=Yr(d);return a=km(a),r.context===null?r.context=a:r.pendingContext=a,r=yr(p,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Wr(d,r,_),n!==null&&(Ln(n,d,_,p),bl(n,d,_)),_}function au(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function xm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function jh(n,r){xm(n,r),(n=n.alternate)&&xm(n,r)}function $0(){return null}var Nm=typeof reportError=="function"?reportError:function(n){console.error(n)};function zh(n){this._internalRoot=n}lu.prototype.render=zh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));ou(n,r,null,null)},lu.prototype.unmount=zh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;qi(function(){ou(null,n,null,null)}),r[dr]=null}};function lu(n){this._internalRoot=n}lu.prototype.unstable_scheduleHydration=function(n){if(n){var r=ll();n={blockedOn:null,target:n,priority:r};for(var a=0;a<Bn.length&&r!==0&&r<Bn[a].priority;a++);Bn.splice(a,0,n),a===0&&hl(n)}};function Bh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function uu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Dm(){}function H0(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var F=au(_);p.call(F)}}var _=Pm(r,c,n,0,null,!1,!1,"",Dm);return n._reactRootContainer=_,n[dr]=_.current,na(n.nodeType===8?n.parentNode:n),qi(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var F=au(k);I.call(F)}}var k=Uh(n,0,!1,null,null,!1,!1,"",Dm);return n._reactRootContainer=k,n[dr]=k.current,na(n.nodeType===8?n.parentNode:n),qi(function(){ou(r,k,a,c)}),k}function cu(n,r,a,c,d){var p=a._reactRootContainer;if(p){var _=p;if(typeof d=="function"){var I=d;d=function(){var k=au(_);I.call(k)}}ou(r,_,n,d)}else _=H0(a,r,n,d,c);return au(_)}ol=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Dr(r.pendingLanes);a!==0&&(Lr(r,a|1),Yt(r,We()),(be&6)===0&&(Ys=We()+500,Hr()))}break;case 13:qi(function(){var c=gr(n,1);if(c!==null){var d=$t();Ln(c,n,1,d)}}),jh(n,1)}},Es=function(n){if(n.tag===13){var r=gr(n,134217728);if(r!==null){var a=$t();Ln(r,n,134217728,a)}jh(n,134217728)}},al=function(n){if(n.tag===13){var r=Yr(n),a=gr(n,r);if(a!==null){var c=$t();Ln(a,n,r,c)}jh(n,r)}},ll=function(){return Ve},ul=function(n,r){var a=Ve;try{return Ve=n,r()}finally{Ve=a}},ds=function(n,r,a){switch(r){case"input":if(Ro(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=Rl(c);if(!d)throw Error(t(90));os(c),Ro(c,d)}}}break;case"textarea":cs(n,a);break;case"select":r=a.value,r!=null&&ir(n,!!a.multiple,r,!1)}},Ai=Vh,bo=qi;var q0={usingClientEntryPoint:!1,Events:[sa,bs,Rl,jn,Mo,Vh]},va={findFiberByHostInstance:bi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},W0={bundleType:va.bundleType,version:va.version,rendererPackageName:va.rendererPackageName,rendererConfig:va.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ie.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=jo(n),n===null?null:n.stateNode},findFiberByHostInstance:va.findFiberByHostInstance||$0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hu.isDisabled&&hu.supportsFiber)try{xi=hu.inject(W0),nn=hu}catch{}}return Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q0,Xt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bh(r))throw Error(t(200));return B0(n,r,null,a)},Xt.createRoot=function(n,r){if(!Bh(n))throw Error(t(299));var a=!1,c="",d=Nm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Uh(n,1,!1,null,null,a,!1,c,d),n[dr]=r.current,na(n.nodeType===8?n.parentNode:n),new zh(r)},Xt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=jo(r),n=n===null?null:n.stateNode,n},Xt.flushSync=function(n){return qi(n)},Xt.hydrate=function(n,r,a){if(!uu(r))throw Error(t(200));return cu(null,n,r,!0,a)},Xt.hydrateRoot=function(n,r,a){if(!Bh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",_=Nm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),r=Pm(r,null,n,1,a??null,d,!1,p,_),n[dr]=r.current,na(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new lu(r)},Xt.render=function(n,r,a){if(!uu(r))throw Error(t(200));return cu(null,n,r,!1,a)},Xt.unmountComponentAtNode=function(n){if(!uu(n))throw Error(t(40));return n._reactRootContainer?(qi(function(){cu(null,null,n,!1,function(){n._reactRootContainer=null,n[dr]=null})}),!0):!1},Xt.unstable_batchedUpdates=Vh,Xt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!uu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return cu(n,r,a,!1,c)},Xt.version="18.3.1-next-f1338f8080-20240426",Xt}var jm;function tw(){if(jm)return qh.exports;jm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),qh.exports=ew(),qh.exports}var zm;function nw(){if(zm)return du;zm=1;var i=tw();return du.createRoot=i.createRoot,du.hydrateRoot=i.hydrateRoot,du}var rw=nw();const iw=_y(rw),vy=tt.createContext(),sw=()=>{const i=tt.useContext(vy);if(!i)throw new Error("useTheme must be used within ThemeProvider");return i},ow=({children:i})=>{const[e,t]=tt.useState(()=>{const o=localStorage.getItem("darkMode");return o?JSON.parse(o):!1});tt.useEffect(()=>{localStorage.setItem("darkMode",JSON.stringify(e)),e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[e]);const s=()=>t(o=>!o);return B.jsx(vy.Provider,{value:{isDarkMode:e,toggleDarkMode:s},children:i})},aw=()=>{};var Bm={};/**
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
 */const wy=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},lw=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Ey={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,g=o+2<i.length,v=g?i[o+2]:0,E=u>>2,A=(u&3)<<4|m>>4;let R=(m&15)<<2|v>>6,j=v&63;g||(j=64,h||(R=64)),s.push(t[E],t[A],t[R],t[j])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(wy(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):lw(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const v=o<i.length?t[i.charAt(o)]:64;++o;const A=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||v==null||A==null)throw new uw;const R=u<<2|m>>4;if(s.push(R),v!==64){const j=m<<4&240|v>>2;if(s.push(j),A!==64){const K=v<<6&192|A;s.push(K)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class uw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cw=function(i){const e=wy(i);return Ey.encodeByteArray(e,!0)},Pu=function(i){return cw(i).replace(/\./g,"")},Ty=function(i){try{return Ey.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function hw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const dw=()=>hw().__FIREBASE_DEFAULTS__,fw=()=>{if(typeof process>"u"||typeof Bm>"u")return;const i=Bm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},pw=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Ty(i[1]);return e&&JSON.parse(e)},Qu=()=>{try{return aw()||dw()||fw()||pw()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Iy=i=>{var e,t;return(t=(e=Qu())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},mw=i=>{const e=Iy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Sy=()=>{var i;return(i=Qu())===null||i===void 0?void 0:i.config},Ay=i=>{var e;return(e=Qu())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class gw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(i){return i.endsWith(".cloudworkstations.dev")}async function Cy(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function yw(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Pu(JSON.stringify(t)),Pu(JSON.stringify(h)),""].join(".")}const Aa={};function _w(){const i={prod:[],emulator:[]};for(const e of Object.keys(Aa))Aa[e]?i.emulator.push(e):i.prod.push(e);return i}function vw(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let $m=!1;function Ry(i,e){if(typeof window>"u"||typeof document>"u"||!_o(window.location.host)||Aa[i]===e||Aa[i]||$m)return;Aa[i]=e;function t(R){return`__firebase__banner__${R}`}const s="__firebase__banner",u=_w().prod.length>0;function h(){const R=document.getElementById(s);R&&R.remove()}function m(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function g(R,j){R.setAttribute("width","24"),R.setAttribute("id",j),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function v(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{$m=!0,h()},R}function E(R,j){R.setAttribute("id",j),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function A(){const R=vw(s),j=t("text"),K=document.getElementById(j)||document.createElement("span"),X=t("learnmore"),z=document.getElementById(X)||document.createElement("a"),ge=t("preprendIcon"),ue=document.getElementById(ge)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const ye=R.element;m(ye),E(z,X);const Ie=v();g(ue,ge),ye.append(ue,K,z,Ie),document.body.appendChild(ye)}u?(K.innerText="Preview backend disconnected.",ue.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ue.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,K.innerText="Preview backend running in this workspace."),K.setAttribute("id",j)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
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
 */function Ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ww(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function Ew(){var i;const e=(i=Qu())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Tw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Iw(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Sw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Aw(){const i=Ut();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Cw(){return!Ew()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Rw(){try{return typeof indexedDB=="object"}catch{return!1}}function kw(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const Pw="FirebaseError";class kr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Pw,Object.setPrototypeOf(this,kr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ua.prototype.create)}}class Ua{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?xw(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new kr(o,m,s)}}function xw(i,e){return i.replace(Nw,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const Nw=/\{\$([^}]+)}/g;function Dw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Ji(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(Hm(u)&&Hm(h)){if(!Ji(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Hm(i){return i!==null&&typeof i=="object"}/**
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
 */function ja(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Vw(i,e){const t=new Ow(i,e);return t.subscribe.bind(t)}class Ow{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Lw(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Kh),o.error===void 0&&(o.error=Kh),o.complete===void 0&&(o.complete=Kh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Lw(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Kh(){}/**
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
 */function _t(i){return i&&i._delegate?i._delegate:i}class Zi{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Qi="[DEFAULT]";/**
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
 */class Mw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new gw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e?.identifier),o=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Fw(e))try{this.getOrInitializeService({instanceIdentifier:Qi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Qi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qi){return this.instances.has(e)}getOptions(e=Qi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:bw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Qi){return this.component?this.component.multipleInstances?e:Qi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bw(i){return i===Qi?void 0:i}function Fw(i){return i.instantiationMode==="EAGER"}/**
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
 */class Uw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Mw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ne;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ne||(Ne={}));const jw={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},zw=Ne.INFO,Bw={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},$w=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=Bw[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ld{constructor(e){this.name=e,this._logLevel=zw,this._logHandler=$w,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const Hw=(i,e)=>e.some(t=>i instanceof t);let qm,Wm;function qw(){return qm||(qm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ww(){return Wm||(Wm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ky=new WeakMap,ld=new WeakMap,Py=new WeakMap,Qh=new WeakMap,Md=new WeakMap;function Gw(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(oi(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&ky.set(t,i)}).catch(()=>{}),Md.set(e,i),e}function Kw(i){if(ld.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});ld.set(i,e)}let ud={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return ld.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Py.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return oi(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Qw(i){ud=i(ud)}function Yw(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Yh(this),e,...t);return Py.set(s,e.sort?e.sort():[e]),oi(s)}:Ww().includes(i)?function(...e){return i.apply(Yh(this),e),oi(ky.get(this))}:function(...e){return oi(i.apply(Yh(this),e))}}function Xw(i){return typeof i=="function"?Yw(i):(i instanceof IDBTransaction&&Kw(i),Hw(i,qw())?new Proxy(i,ud):i)}function oi(i){if(i instanceof IDBRequest)return Gw(i);if(Qh.has(i))return Qh.get(i);const e=Xw(i);return e!==i&&(Qh.set(i,e),Md.set(e,i)),e}const Yh=i=>Md.get(i);function Jw(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=oi(h);return s&&h.addEventListener("upgradeneeded",g=>{s(oi(h.result),g.oldVersion,g.newVersion,oi(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const Zw=["get","getKey","getAll","getAllKeys","count"],eE=["put","add","delete","clear"],Xh=new Map;function Gm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Xh.get(e))return Xh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=eE.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||Zw.includes(t)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let v=g.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),o&&g.done]))[0]};return Xh.set(e,u),u}Qw(i=>({...i,get:(e,t,s)=>Gm(e,t)||i.get(e,t,s),has:(e,t)=>!!Gm(e,t)||i.has(e,t)}));/**
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
 */class tE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(nE(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function nE(i){const e=i.getComponent();return e?.type==="VERSION"}const cd="@firebase/app",Km="0.13.1";/**
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
 */const Ir=new Ld("@firebase/app"),rE="@firebase/app-compat",iE="@firebase/analytics-compat",sE="@firebase/analytics",oE="@firebase/app-check-compat",aE="@firebase/app-check",lE="@firebase/auth",uE="@firebase/auth-compat",cE="@firebase/database",hE="@firebase/data-connect",dE="@firebase/database-compat",fE="@firebase/functions",pE="@firebase/functions-compat",mE="@firebase/installations",gE="@firebase/installations-compat",yE="@firebase/messaging",_E="@firebase/messaging-compat",vE="@firebase/performance",wE="@firebase/performance-compat",EE="@firebase/remote-config",TE="@firebase/remote-config-compat",IE="@firebase/storage",SE="@firebase/storage-compat",AE="@firebase/firestore",CE="@firebase/ai",RE="@firebase/firestore-compat",kE="firebase",PE="11.9.0";/**
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
 */const hd="[DEFAULT]",xE={[cd]:"fire-core",[rE]:"fire-core-compat",[sE]:"fire-analytics",[iE]:"fire-analytics-compat",[aE]:"fire-app-check",[oE]:"fire-app-check-compat",[lE]:"fire-auth",[uE]:"fire-auth-compat",[cE]:"fire-rtdb",[hE]:"fire-data-connect",[dE]:"fire-rtdb-compat",[fE]:"fire-fn",[pE]:"fire-fn-compat",[mE]:"fire-iid",[gE]:"fire-iid-compat",[yE]:"fire-fcm",[_E]:"fire-fcm-compat",[vE]:"fire-perf",[wE]:"fire-perf-compat",[EE]:"fire-rc",[TE]:"fire-rc-compat",[IE]:"fire-gcs",[SE]:"fire-gcs-compat",[AE]:"fire-fst",[RE]:"fire-fst-compat",[CE]:"fire-vertex","fire-js":"fire-js",[kE]:"fire-js-all"};/**
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
 */const xu=new Map,NE=new Map,dd=new Map;function Qm(i,e){try{i.container.addComponent(e)}catch(t){Ir.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function uo(i){const e=i.name;if(dd.has(e))return Ir.debug(`There were multiple attempts to register component ${e}.`),!1;dd.set(e,i);for(const t of xu.values())Qm(t,i);for(const t of NE.values())Qm(t,i);return!0}function bd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Mn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const DE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ai=new Ua("app","Firebase",DE);/**
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
 */class VE{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Zi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ai.create("app-deleted",{appName:this._name})}}/**
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
 */const vo=PE;function xy(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:hd,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw ai.create("bad-app-name",{appName:String(o)});if(t||(t=Sy()),!t)throw ai.create("no-options");const u=xu.get(o);if(u){if(Ji(t,u.options)&&Ji(s,u.config))return u;throw ai.create("duplicate-app",{appName:o})}const h=new Uw(o);for(const g of dd.values())h.addComponent(g);const m=new VE(t,s,h);return xu.set(o,m),m}function Ny(i=hd){const e=xu.get(i);if(!e&&i===hd&&Sy())return xy();if(!e)throw ai.create("no-app",{appName:i});return e}function li(i,e,t){var s;let o=(s=xE[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ir.warn(m.join(" "));return}uo(new Zi(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const OE="firebase-heartbeat-database",LE=1,Na="firebase-heartbeat-store";let Jh=null;function Dy(){return Jh||(Jh=Jw(OE,LE,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Na)}catch(t){console.warn(t)}}}}).catch(i=>{throw ai.create("idb-open",{originalErrorMessage:i.message})})),Jh}async function ME(i){try{const t=(await Dy()).transaction(Na),s=await t.objectStore(Na).get(Vy(i));return await t.done,s}catch(e){if(e instanceof kr)Ir.warn(e.message);else{const t=ai.create("idb-get",{originalErrorMessage:e?.message});Ir.warn(t.message)}}}async function Ym(i,e){try{const s=(await Dy()).transaction(Na,"readwrite");await s.objectStore(Na).put(e,Vy(i)),await s.done}catch(t){if(t instanceof kr)Ir.warn(t.message);else{const s=ai.create("idb-set",{originalErrorMessage:t?.message});Ir.warn(s.message)}}}function Vy(i){return`${i.name}!${i.options.appId}`}/**
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
 */const bE=1024,FE=30;class UE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new zE(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Xm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>FE){const h=BE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ir.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Xm(),{heartbeatsToSend:s,unsentEntries:o}=jE(this._heartbeatsCache.heartbeats),u=Pu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Ir.warn(t),""}}}function Xm(){return new Date().toISOString().substring(0,10)}function jE(i,e=bE){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Jm(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Jm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class zE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rw()?kw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ME(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ym(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ym(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Jm(i){return Pu(JSON.stringify({version:2,heartbeats:i})).length}function BE(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function $E(i){uo(new Zi("platform-logger",e=>new tE(e),"PRIVATE")),uo(new Zi("heartbeat",e=>new UE(e),"PRIVATE")),li(cd,Km,i),li(cd,Km,"esm2017"),li("fire-js","")}$E("");var HE="firebase",qE="11.9.1";/**
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
 */li(HE,qE,"app");function Fd(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function Oy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WE=Oy,Ly=new Ua("auth","Firebase",Oy());/**
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
 */const Nu=new Ld("@firebase/auth");function GE(i,...e){Nu.logLevel<=Ne.WARN&&Nu.warn(`Auth (${vo}): ${i}`,...e)}function vu(i,...e){Nu.logLevel<=Ne.ERROR&&Nu.error(`Auth (${vo}): ${i}`,...e)}/**
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
 */function Sr(i,...e){throw Ud(i,...e)}function Xn(i,...e){return Ud(i,...e)}function My(i,e,t){const s=Object.assign(Object.assign({},WE()),{[e]:t});return new Ua("auth","Firebase",s).create(e,{appName:i.name})}function ui(i){return My(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ud(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return Ly.create(i,...e)}function we(i,e,...t){if(!i)throw Ud(e,...t)}function wr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw vu(e),new Error(e)}function Ar(i,e){i||wr(e)}/**
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
 */function fd(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function KE(){return Zm()==="http:"||Zm()==="https:"}function Zm(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function QE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(KE()||Iw()||"connection"in navigator)?navigator.onLine:!0}function YE(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class za{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ar(t>e,"Short delay should be less than long delay!"),this.isMobile=ww()||Sw()}get(){return QE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function jd(i,e){Ar(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class by{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const XE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const JE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ZE=new za(3e4,6e4);function Yu(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function wo(i,e,t,s,o={}){return Fy(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=ja(Object.assign({key:i.config.apiKey},h)).slice(1),g=await i._getAdditionalHeaders();g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode);const v=Object.assign({method:e,headers:g},u);return Tw()||(v.referrerPolicy="no-referrer"),i.emulatorConfig&&_o(i.emulatorConfig.host)&&(v.credentials="include"),by.fetch()(await jy(i,i.config.apiHost,t,m),v)})}async function Fy(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},XE),e);try{const o=new eT(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw fu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,v]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw fu(i,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw fu(i,"email-already-in-use",h);if(g==="USER_DISABLED")throw fu(i,"user-disabled",h);const E=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw My(i,E,v);Sr(i,E)}}catch(o){if(o instanceof kr)throw o;Sr(i,"network-request-failed",{message:String(o)})}}async function Uy(i,e,t,s,o={}){const u=await wo(i,e,t,s,o);return"mfaPendingCredential"in u&&Sr(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function jy(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?jd(i.config,o):`${i.config.apiScheme}://${o}`;return JE.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}class eT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Xn(this.auth,"network-request-failed")),ZE.get())})}}function fu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Xn(i,e,s);return o.customData._tokenResponse=t,o}/**
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
 */async function tT(i,e){return wo(i,"POST","/v1/accounts:delete",e)}async function Du(i,e){return wo(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ca(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nT(i,e=!1){const t=_t(i),s=await t.getIdToken(e),o=zd(s);we(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u?.sign_in_provider;return{claims:o,token:s,authTime:Ca(Zh(o.auth_time)),issuedAtTime:Ca(Zh(o.iat)),expirationTime:Ca(Zh(o.exp)),signInProvider:h||null,signInSecondFactor:u?.sign_in_second_factor||null}}function Zh(i){return Number(i)*1e3}function zd(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return vu("JWT malformed, contained fewer than 3 sections"),null;try{const o=Ty(t);return o?JSON.parse(o):(vu("Failed to decode base64 JWT payload"),null)}catch(o){return vu("Caught error parsing JWT payload as JSON",o?.toString()),null}}function eg(i){const e=zd(i);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Da(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof kr&&rT(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function rT({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class iT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class pd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ca(this.lastLoginAt),this.creationTime=Ca(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Vu(i){var e;const t=i.auth,s=await i.getIdToken(),o=await Da(i,Du(t,{idToken:s}));we(o?.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?zy(u.providerUserInfo):[],m=oT(i.providerData,h),g=i.isAnonymous,v=!(i.email&&u.passwordHash)&&!m?.length,E=g?v:!1,A={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new pd(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(i,A)}async function sT(i){const e=_t(i);await Vu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oT(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function zy(i){return i.map(e=>{var{providerId:t}=e,s=Fd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function aT(i,e){const t=await Fy(i,{},async()=>{const s=ja({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await jy(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return i.emulatorConfig&&_o(i.emulatorConfig.host)&&(g.credentials="include"),by.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function lT(i,e){return wo(i,"POST","/v2/accounts:revokeToken",Yu(i,e))}/**
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
 */class so{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):eg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){we(e.length!==0,"internal-error");const t=eg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(we(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await aT(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new so;return s&&(we(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(we(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(we(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new so,this.toJSON())}_performRefresh(){return wr("not implemented")}}/**
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
 */function ei(i,e){we(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class bn{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=Fd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new iT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new pd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Da(this,this.stsTokenManager.getToken(this.auth,e));return we(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return nT(this,e)}reload(){return sT(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Vu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mn(this.auth.app))return Promise.reject(ui(this.auth));const e=await this.getIdToken();return await Da(this,tT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,g,v,E;const A=(s=t.displayName)!==null&&s!==void 0?s:void 0,R=(o=t.email)!==null&&o!==void 0?o:void 0,j=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,K=(h=t.photoURL)!==null&&h!==void 0?h:void 0,X=(m=t.tenantId)!==null&&m!==void 0?m:void 0,z=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,ge=(v=t.createdAt)!==null&&v!==void 0?v:void 0,ue=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:ye,emailVerified:Ie,isAnonymous:$e,providerData:Ce,stsTokenManager:D}=t;we(ye&&D,e,"internal-error");const S=so.fromJSON(this.name,D);we(typeof ye=="string",e,"internal-error"),ei(A,e.name),ei(R,e.name),we(typeof Ie=="boolean",e,"internal-error"),we(typeof $e=="boolean",e,"internal-error"),ei(j,e.name),ei(K,e.name),ei(X,e.name),ei(z,e.name),ei(ge,e.name),ei(ue,e.name);const C=new bn({uid:ye,auth:e,email:R,emailVerified:Ie,displayName:A,isAnonymous:$e,photoURL:K,phoneNumber:j,tenantId:X,stsTokenManager:S,createdAt:ge,lastLoginAt:ue});return Ce&&Array.isArray(Ce)&&(C.providerData=Ce.map(x=>Object.assign({},x))),z&&(C._redirectEventId=z),C}static async _fromIdTokenResponse(e,t,s=!1){const o=new so;o.updateFromServerResponse(t);const u=new bn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Vu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];we(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?zy(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!u?.length,m=new so;m.updateFromIdToken(s);const g=new bn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new pd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(g,v),g}}/**
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
 */const tg=new Map;function Er(i){Ar(i instanceof Function,"Expected a class definition");let e=tg.get(i);return e?(Ar(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,tg.set(i,e),e)}/**
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
 */class By{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}By.type="NONE";const ng=By;/**
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
 */function wu(i,e,t){return`firebase:${i}:${e}:${t}`}class oo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=wu(this.userKey,o.apiKey,u),this.fullPersistenceKey=wu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Du(this.auth,{idToken:e}).catch(()=>{});return t?bn._fromGetAccountInfoResponse(this.auth,t,e):null}return bn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new oo(Er(ng),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||Er(ng);const h=wu(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const E=await v._get(h);if(E){let A;if(typeof E=="string"){const R=await Du(e,{idToken:E}).catch(()=>{});if(!R)break;A=await bn._fromGetAccountInfoResponse(e,R,E)}else A=bn._fromJSON(e,E);v!==u&&(m=A),u=v;break}}catch{}const g=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new oo(u,e,s):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new oo(u,e,s))}}/**
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
 */function rg(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($y(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ky(e))return"Blackberry";if(Qy(e))return"Webos";if(Hy(e))return"Safari";if((e.includes("chrome/")||qy(e))&&!e.includes("edge/"))return"Chrome";if(Gy(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if(s?.length===2)return s[1]}return"Other"}function $y(i=Ut()){return/firefox\//i.test(i)}function Hy(i=Ut()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qy(i=Ut()){return/crios\//i.test(i)}function Wy(i=Ut()){return/iemobile/i.test(i)}function Gy(i=Ut()){return/android/i.test(i)}function Ky(i=Ut()){return/blackberry/i.test(i)}function Qy(i=Ut()){return/webos/i.test(i)}function Bd(i=Ut()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function uT(i=Ut()){var e;return Bd(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cT(){return Aw()&&document.documentMode===10}function Yy(i=Ut()){return Bd(i)||Gy(i)||Qy(i)||Ky(i)||/windows phone/i.test(i)||Wy(i)}/**
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
 */function Xy(i,e=[]){let t;switch(i){case"Browser":t=rg(Ut());break;case"Worker":t=`${rg(Ut())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${vo}/${s}`}/**
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
 */class hT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const g=e(u);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function dT(i,e={}){return wo(i,"GET","/v2/passwordPolicy",Yu(i,e))}/**
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
 */const fT=6;class pT{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:fT,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class mT{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ig(this),this.idTokenSubscription=new ig(this),this.beforeStateQueue=new hT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ly,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Er(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await oo.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Du(this,{idToken:e}),s=await bn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Mn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o?._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&g?.user&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Vu(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Mn(this.app))return Promise.reject(ui(this));const t=e?_t(e):null;return t&&we(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Mn(this.app)?Promise.reject(ui(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Mn(this.app)?Promise.reject(ui(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dT(this),t=new pT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ua("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await lT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Er(e)||this._popupRedirectResolver;we(t,this,"argument-error"),this.redirectPersistenceManager=await oo.create(this,[Er(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(Mn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&GE(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Xu(i){return _t(i)}class ig{constructor(e){this.auth=e,this.observer=null,this.addObserver=Vw(t=>this.observer=t)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let $d={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gT(i){$d=i}function yT(i){return $d.loadJS(i)}function _T(){return $d.gapiScript}function vT(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */function wT(i,e){const t=bd(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(Ji(u,e??{}))return o;Sr(o,"already-initialized")}return t.initialize({options:e})}function ET(i,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Er);e?.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e?.popupRedirectResolver)}function TT(i,e,t){const s=Xu(i);we(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=Jy(e),{host:h,port:m}=IT(e),g=m===null?"":`:${m}`,v={url:`${u}//${h}${g}/`},E=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){we(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),we(Ji(v,s.config.emulator)&&Ji(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=v,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,_o(h)?(Cy(`${u}//${h}${g}`),Ry("Auth",!0)):ST()}function Jy(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function IT(i){const e=Jy(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:sg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:sg(h)}}}function sg(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function ST(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class Zy{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return wr("not implemented")}_getIdTokenResponse(e){return wr("not implemented")}_linkToIdToken(e,t){return wr("not implemented")}_getReauthenticationResolver(e){return wr("not implemented")}}/**
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
 */async function ao(i,e){return Uy(i,"POST","/v1/accounts:signInWithIdp",Yu(i,e))}/**
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
 */const AT="http://localhost";class es extends Zy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Sr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=Fd(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new es(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return ao(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ao(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ao(e,t)}buildRequest(){const e={requestUri:AT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ja(t)}return e}}/**
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
 */class e_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ba extends e_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ti extends Ba{constructor(){super("facebook.com")}static credential(e){return es._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ti.credential(e.oauthAccessToken)}catch{return null}}}ti.FACEBOOK_SIGN_IN_METHOD="facebook.com";ti.PROVIDER_ID="facebook.com";/**
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
 */class ni extends Ba{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return es._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ni.credential(t,s)}catch{return null}}}ni.GOOGLE_SIGN_IN_METHOD="google.com";ni.PROVIDER_ID="google.com";/**
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
 */class ri extends Ba{constructor(){super("github.com")}static credential(e){return es._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ri.credential(e.oauthAccessToken)}catch{return null}}}ri.GITHUB_SIGN_IN_METHOD="github.com";ri.PROVIDER_ID="github.com";/**
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
 */class ii extends Ba{constructor(){super("twitter.com")}static credential(e,t){return es._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ii.credential(t,s)}catch{return null}}}ii.TWITTER_SIGN_IN_METHOD="twitter.com";ii.PROVIDER_ID="twitter.com";/**
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
 */async function CT(i,e){return Uy(i,"POST","/v1/accounts:signUp",Yu(i,e))}/**
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
 */class di{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await bn._fromIdTokenResponse(e,s,o),h=og(s);return new di({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=og(s);return new di({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function og(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */async function RT(i){var e;if(Mn(i.app))return Promise.reject(ui(i));const t=Xu(i);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new di({user:t.currentUser,providerId:null,operationType:"signIn"});const s=await CT(t,{returnSecureToken:!0}),o=await di._fromIdTokenResponse(t,"signIn",s,!0);return await t._updateCurrentUser(o.user),o}/**
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
 */class Ou extends kr{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Ou.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Ou(e,t,s,o)}}function t_(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Ou._fromErrorAndOperation(i,u,e,s):u})}async function kT(i,e,t=!1){const s=await Da(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return di._forOperation(i,"link",s)}/**
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
 */async function PT(i,e,t=!1){const{auth:s}=i;if(Mn(s.app))return Promise.reject(ui(s));const o="reauthenticate";try{const u=await Da(i,t_(s,o,e,i),t);we(u.idToken,s,"internal-error");const h=zd(u.idToken);we(h,s,"internal-error");const{sub:m}=h;return we(i.uid===m,s,"user-mismatch"),di._forOperation(i,o,u)}catch(u){throw u?.code==="auth/user-not-found"&&Sr(s,"user-mismatch"),u}}/**
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
 */async function xT(i,e,t=!1){if(Mn(i.app))return Promise.reject(ui(i));const s="signIn",o=await t_(i,s,e),u=await di._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}function NT(i,e,t,s){return _t(i).onIdTokenChanged(e,t,s)}function DT(i,e,t){return _t(i).beforeAuthStateChanged(e,t)}function VT(i,e,t,s){return _t(i).onAuthStateChanged(e,t,s)}const Lu="__sak";/**
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
 */class n_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Lu,"1"),this.storage.removeItem(Lu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const OT=1e3,LT=10;class r_ extends n_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);cT()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,LT):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},OT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}r_.type="LOCAL";const MT=r_;/**
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
 */class i_ extends n_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}i_.type="SESSION";const s_=i_;/**
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
 */function bT(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ju{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Ju(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async v=>v(t.origin,u)),g=await bT(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ju.receivers=[];/**
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
 */function Hd(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class FT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const v=Hd("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(A){const R=A;if(R.data.eventId===v)switch(R.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(R.data.response);break;default:clearTimeout(E),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function Jn(){return window}function UT(i){Jn().location.href=i}/**
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
 */function o_(){return typeof Jn().WorkerGlobalScope<"u"&&typeof Jn().importScripts=="function"}async function jT(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zT(){var i;return((i=navigator?.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function BT(){return o_()?self:null}/**
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
 */const a_="firebaseLocalStorageDb",$T=1,Mu="firebaseLocalStorage",l_="fbase_key";class $a{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Zu(i,e){return i.transaction([Mu],e?"readwrite":"readonly").objectStore(Mu)}function HT(){const i=indexedDB.deleteDatabase(a_);return new $a(i).toPromise()}function md(){const i=indexedDB.open(a_,$T);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Mu,{keyPath:l_})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Mu)?e(s):(s.close(),await HT(),e(await md()))})})}async function ag(i,e,t){const s=Zu(i,!0).put({[l_]:e,value:t});return new $a(s).toPromise()}async function qT(i,e){const t=Zu(i,!1).get(e),s=await new $a(t).toPromise();return s===void 0?null:s.value}function lg(i,e){const t=Zu(i,!0).delete(e);return new $a(t).toPromise()}const WT=800,GT=3;class u_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await md(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>GT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return o_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ju._getInstance(BT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await jT(),!this.activeServiceWorker)return;this.sender=new FT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await md();return await ag(e,Lu,"1"),await lg(e,Lu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>ag(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>qT(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>lg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Zu(o,!1).getAll();return new $a(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}u_.type="LOCAL";const KT=u_;new za(3e4,6e4);/**
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
 */function QT(i,e){return e?Er(e):(we(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class qd extends Zy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ao(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ao(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ao(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function YT(i){return xT(i.auth,new qd(i),i.bypassAuthState)}function XT(i){const{auth:e,user:t}=i;return we(t,e,"internal-error"),PT(t,new qd(i),i.bypassAuthState)}async function JT(i){const{auth:e,user:t}=i;return we(t,e,"internal-error"),kT(t,new qd(i),i.bypassAuthState)}/**
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
 */class c_{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return YT;case"linkViaPopup":case"linkViaRedirect":return JT;case"reauthViaPopup":case"reauthViaRedirect":return XT;default:Sr(this.auth,"internal-error")}}resolve(e){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ZT=new za(2e3,1e4);class io extends c_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,io.currentPopupAction&&io.currentPopupAction.cancel(),io.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){Ar(this.filter.length===1,"Popup operations only handle one event");const e=Hd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,io.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ZT.get())};e()}}io.currentPopupAction=null;/**
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
 */const eI="pendingRedirect",Eu=new Map;class tI extends c_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Eu.get(this.auth._key());if(!e){try{const s=await nI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Eu.set(this.auth._key(),e)}return this.bypassAuthState||Eu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nI(i,e){const t=sI(e),s=iI(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function rI(i,e){Eu.set(i._key(),e)}function iI(i){return Er(i._redirectPersistence)}function sI(i){return wu(eI,i.config.apiKey,i.name)}async function oI(i,e,t=!1){if(Mn(i.app))return Promise.reject(ui(i));const s=Xu(i),o=QT(s,e),h=await new tI(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const aI=600*1e3;class lI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!h_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Xn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aI&&this.cachedEventUids.clear(),this.cachedEventUids.has(ug(e))}saveEventToCache(e){this.cachedEventUids.add(ug(e)),this.lastProcessedEventTime=Date.now()}}function ug(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function h_({type:i,error:e}){return i==="unknown"&&e?.code==="auth/no-auth-event"}function uI(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return h_(i);default:return!1}}/**
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
 */async function cI(i,e={}){return wo(i,"GET","/v1/projects",e)}/**
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
 */const hI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dI=/^https?/;async function fI(i){if(i.config.emulator)return;const{authorizedDomains:e}=await cI(i);for(const t of e)try{if(pI(t))return}catch{}Sr(i,"unauthorized-domain")}function pI(i){const e=fd(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!dI.test(t))return!1;if(hI.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const mI=new za(3e4,6e4);function cg(){const i=Jn().___jsl;if(i?.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function gI(i){return new Promise((e,t)=>{var s,o,u;function h(){cg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cg(),t(Xn(i,"network-request-failed"))},timeout:mI.get()})}if(!((o=(s=Jn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Jn().gapi)===null||u===void 0)&&u.load)h();else{const m=vT("iframefcb");return Jn()[m]=()=>{gapi.load?h():t(Xn(i,"network-request-failed"))},yT(`${_T()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw Tu=null,e})}let Tu=null;function yI(i){return Tu=Tu||gI(i),Tu}/**
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
 */const _I=new za(5e3,15e3),vI="__/auth/iframe",wI="emulator/auth/iframe",EI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function II(i){const e=i.config;we(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?jd(e,wI):`https://${i.config.authDomain}/${vI}`,s={apiKey:e.apiKey,appName:i.name,v:vo},o=TI.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${ja(s).slice(1)}`}async function SI(i){const e=await yI(i),t=Jn().gapi;return we(t,i,"internal-error"),e.open({where:document.body,url:II(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:EI,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Xn(i,"network-request-failed"),m=Jn().setTimeout(()=>{u(h)},_I.get());function g(){Jn().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
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
 */const AI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},CI=500,RI=600,kI="_blank",PI="http://localhost";class hg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xI(i,e,t,s=CI,o=RI){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g=Object.assign(Object.assign({},AI),{width:s.toString(),height:o.toString(),top:u,left:h}),v=Ut().toLowerCase();t&&(m=qy(v)?kI:t),$y(v)&&(e=e||PI,g.scrollbars="yes");const E=Object.entries(g).reduce((R,[j,K])=>`${R}${j}=${K},`,"");if(uT(v)&&m!=="_self")return NI(e||"",m),new hg(null);const A=window.open(e||"",m,E);we(A,i,"popup-blocked");try{A.focus()}catch{}return new hg(A)}function NI(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const DI="__/auth/handler",VI="emulator/auth/handler",OI=encodeURIComponent("fac");async function dg(i,e,t,s,o,u){we(i.config.authDomain,i,"auth-domain-config-required"),we(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:vo,eventId:o};if(e instanceof e_){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",Dw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,A]of Object.entries({}))h[E]=A}if(e instanceof Ba){const E=e.getScopes().filter(A=>A!=="");E.length>0&&(h.scopes=E.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const g=await i._getAppCheckToken(),v=g?`#${OI}=${encodeURIComponent(g)}`:"";return`${LI(i)}?${ja(m).slice(1)}${v}`}function LI({config:i}){return i.emulator?jd(i,VI):`https://${i.authDomain}/${DI}`}/**
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
 */const ed="webStorageSupport";class MI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=s_,this._completeRedirectFn=oI,this._overrideRedirectResult=rI}async _openPopup(e,t,s,o){var u;Ar((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await dg(e,t,s,fd(),o);return xI(e,h,Hd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await dg(e,t,s,fd(),o);return UT(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Ar(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await SI(e),s=new lI(e);return t.register("authEvent",o=>(we(o?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ed,{type:ed},o=>{var u;const h=(u=o?.[0])===null||u===void 0?void 0:u[ed];h!==void 0&&t(!!h),Sr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=fI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Yy()||Hy()||Bd()}}const bI=MI;var fg="@firebase/auth",pg="1.10.7";/**
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
 */class FI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function UI(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jI(i){uo(new Zi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;we(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xy(i)},v=new mT(s,o,u,g);return ET(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),uo(new Zi("auth-internal",e=>{const t=Xu(e.getProvider("auth").getImmediate());return(s=>new FI(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),li(fg,pg,UI(i)),li(fg,pg,"esm2017")}/**
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
 */const zI=300,BI=Ay("authIdTokenMaxAge")||zI;let mg=null;const $I=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>BI)return;const o=t?.token;mg!==o&&(mg=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function HI(i=Ny()){const e=bd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=wT(i,{popupRedirectResolver:bI,persistence:[KT,MT,s_]}),s=Ay("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=$I(u.toString());DT(t,h,()=>h(t.currentUser)),NT(t,m=>h(m))}}const o=Iy("auth");return o&&TT(t,`http://${o}`),t}function qI(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}gT({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Xn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",qI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jI("Browser");var gg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ci,d_;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,S){function C(){}C.prototype=S.prototype,D.D=S.prototype,D.prototype=new C,D.prototype.constructor=D,D.C=function(x,V,P){for(var T=Array(arguments.length-2),he=2;he<arguments.length;he++)T[he-2]=arguments[he];return S.prototype[V].apply(x,T)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,S,C){C||(C=0);var x=Array(16);if(typeof S=="string")for(var V=0;16>V;++V)x[V]=S.charCodeAt(C++)|S.charCodeAt(C++)<<8|S.charCodeAt(C++)<<16|S.charCodeAt(C++)<<24;else for(V=0;16>V;++V)x[V]=S[C++]|S[C++]<<8|S[C++]<<16|S[C++]<<24;S=D.g[0],C=D.g[1],V=D.g[2];var P=D.g[3],T=S+(P^C&(V^P))+x[0]+3614090360&4294967295;S=C+(T<<7&4294967295|T>>>25),T=P+(V^S&(C^V))+x[1]+3905402710&4294967295,P=S+(T<<12&4294967295|T>>>20),T=V+(C^P&(S^C))+x[2]+606105819&4294967295,V=P+(T<<17&4294967295|T>>>15),T=C+(S^V&(P^S))+x[3]+3250441966&4294967295,C=V+(T<<22&4294967295|T>>>10),T=S+(P^C&(V^P))+x[4]+4118548399&4294967295,S=C+(T<<7&4294967295|T>>>25),T=P+(V^S&(C^V))+x[5]+1200080426&4294967295,P=S+(T<<12&4294967295|T>>>20),T=V+(C^P&(S^C))+x[6]+2821735955&4294967295,V=P+(T<<17&4294967295|T>>>15),T=C+(S^V&(P^S))+x[7]+4249261313&4294967295,C=V+(T<<22&4294967295|T>>>10),T=S+(P^C&(V^P))+x[8]+1770035416&4294967295,S=C+(T<<7&4294967295|T>>>25),T=P+(V^S&(C^V))+x[9]+2336552879&4294967295,P=S+(T<<12&4294967295|T>>>20),T=V+(C^P&(S^C))+x[10]+4294925233&4294967295,V=P+(T<<17&4294967295|T>>>15),T=C+(S^V&(P^S))+x[11]+2304563134&4294967295,C=V+(T<<22&4294967295|T>>>10),T=S+(P^C&(V^P))+x[12]+1804603682&4294967295,S=C+(T<<7&4294967295|T>>>25),T=P+(V^S&(C^V))+x[13]+4254626195&4294967295,P=S+(T<<12&4294967295|T>>>20),T=V+(C^P&(S^C))+x[14]+2792965006&4294967295,V=P+(T<<17&4294967295|T>>>15),T=C+(S^V&(P^S))+x[15]+1236535329&4294967295,C=V+(T<<22&4294967295|T>>>10),T=S+(V^P&(C^V))+x[1]+4129170786&4294967295,S=C+(T<<5&4294967295|T>>>27),T=P+(C^V&(S^C))+x[6]+3225465664&4294967295,P=S+(T<<9&4294967295|T>>>23),T=V+(S^C&(P^S))+x[11]+643717713&4294967295,V=P+(T<<14&4294967295|T>>>18),T=C+(P^S&(V^P))+x[0]+3921069994&4294967295,C=V+(T<<20&4294967295|T>>>12),T=S+(V^P&(C^V))+x[5]+3593408605&4294967295,S=C+(T<<5&4294967295|T>>>27),T=P+(C^V&(S^C))+x[10]+38016083&4294967295,P=S+(T<<9&4294967295|T>>>23),T=V+(S^C&(P^S))+x[15]+3634488961&4294967295,V=P+(T<<14&4294967295|T>>>18),T=C+(P^S&(V^P))+x[4]+3889429448&4294967295,C=V+(T<<20&4294967295|T>>>12),T=S+(V^P&(C^V))+x[9]+568446438&4294967295,S=C+(T<<5&4294967295|T>>>27),T=P+(C^V&(S^C))+x[14]+3275163606&4294967295,P=S+(T<<9&4294967295|T>>>23),T=V+(S^C&(P^S))+x[3]+4107603335&4294967295,V=P+(T<<14&4294967295|T>>>18),T=C+(P^S&(V^P))+x[8]+1163531501&4294967295,C=V+(T<<20&4294967295|T>>>12),T=S+(V^P&(C^V))+x[13]+2850285829&4294967295,S=C+(T<<5&4294967295|T>>>27),T=P+(C^V&(S^C))+x[2]+4243563512&4294967295,P=S+(T<<9&4294967295|T>>>23),T=V+(S^C&(P^S))+x[7]+1735328473&4294967295,V=P+(T<<14&4294967295|T>>>18),T=C+(P^S&(V^P))+x[12]+2368359562&4294967295,C=V+(T<<20&4294967295|T>>>12),T=S+(C^V^P)+x[5]+4294588738&4294967295,S=C+(T<<4&4294967295|T>>>28),T=P+(S^C^V)+x[8]+2272392833&4294967295,P=S+(T<<11&4294967295|T>>>21),T=V+(P^S^C)+x[11]+1839030562&4294967295,V=P+(T<<16&4294967295|T>>>16),T=C+(V^P^S)+x[14]+4259657740&4294967295,C=V+(T<<23&4294967295|T>>>9),T=S+(C^V^P)+x[1]+2763975236&4294967295,S=C+(T<<4&4294967295|T>>>28),T=P+(S^C^V)+x[4]+1272893353&4294967295,P=S+(T<<11&4294967295|T>>>21),T=V+(P^S^C)+x[7]+4139469664&4294967295,V=P+(T<<16&4294967295|T>>>16),T=C+(V^P^S)+x[10]+3200236656&4294967295,C=V+(T<<23&4294967295|T>>>9),T=S+(C^V^P)+x[13]+681279174&4294967295,S=C+(T<<4&4294967295|T>>>28),T=P+(S^C^V)+x[0]+3936430074&4294967295,P=S+(T<<11&4294967295|T>>>21),T=V+(P^S^C)+x[3]+3572445317&4294967295,V=P+(T<<16&4294967295|T>>>16),T=C+(V^P^S)+x[6]+76029189&4294967295,C=V+(T<<23&4294967295|T>>>9),T=S+(C^V^P)+x[9]+3654602809&4294967295,S=C+(T<<4&4294967295|T>>>28),T=P+(S^C^V)+x[12]+3873151461&4294967295,P=S+(T<<11&4294967295|T>>>21),T=V+(P^S^C)+x[15]+530742520&4294967295,V=P+(T<<16&4294967295|T>>>16),T=C+(V^P^S)+x[2]+3299628645&4294967295,C=V+(T<<23&4294967295|T>>>9),T=S+(V^(C|~P))+x[0]+4096336452&4294967295,S=C+(T<<6&4294967295|T>>>26),T=P+(C^(S|~V))+x[7]+1126891415&4294967295,P=S+(T<<10&4294967295|T>>>22),T=V+(S^(P|~C))+x[14]+2878612391&4294967295,V=P+(T<<15&4294967295|T>>>17),T=C+(P^(V|~S))+x[5]+4237533241&4294967295,C=V+(T<<21&4294967295|T>>>11),T=S+(V^(C|~P))+x[12]+1700485571&4294967295,S=C+(T<<6&4294967295|T>>>26),T=P+(C^(S|~V))+x[3]+2399980690&4294967295,P=S+(T<<10&4294967295|T>>>22),T=V+(S^(P|~C))+x[10]+4293915773&4294967295,V=P+(T<<15&4294967295|T>>>17),T=C+(P^(V|~S))+x[1]+2240044497&4294967295,C=V+(T<<21&4294967295|T>>>11),T=S+(V^(C|~P))+x[8]+1873313359&4294967295,S=C+(T<<6&4294967295|T>>>26),T=P+(C^(S|~V))+x[15]+4264355552&4294967295,P=S+(T<<10&4294967295|T>>>22),T=V+(S^(P|~C))+x[6]+2734768916&4294967295,V=P+(T<<15&4294967295|T>>>17),T=C+(P^(V|~S))+x[13]+1309151649&4294967295,C=V+(T<<21&4294967295|T>>>11),T=S+(V^(C|~P))+x[4]+4149444226&4294967295,S=C+(T<<6&4294967295|T>>>26),T=P+(C^(S|~V))+x[11]+3174756917&4294967295,P=S+(T<<10&4294967295|T>>>22),T=V+(S^(P|~C))+x[2]+718787259&4294967295,V=P+(T<<15&4294967295|T>>>17),T=C+(P^(V|~S))+x[9]+3951481745&4294967295,D.g[0]=D.g[0]+S&4294967295,D.g[1]=D.g[1]+(V+(T<<21&4294967295|T>>>11))&4294967295,D.g[2]=D.g[2]+V&4294967295,D.g[3]=D.g[3]+P&4294967295}s.prototype.u=function(D,S){S===void 0&&(S=D.length);for(var C=S-this.blockSize,x=this.B,V=this.h,P=0;P<S;){if(V==0)for(;P<=C;)o(this,D,P),P+=this.blockSize;if(typeof D=="string"){for(;P<S;)if(x[V++]=D.charCodeAt(P++),V==this.blockSize){o(this,x),V=0;break}}else for(;P<S;)if(x[V++]=D[P++],V==this.blockSize){o(this,x),V=0;break}}this.h=V,this.o+=S},s.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var S=1;S<D.length-8;++S)D[S]=0;var C=8*this.o;for(S=D.length-8;S<D.length;++S)D[S]=C&255,C/=256;for(this.u(D),D=Array(16),S=C=0;4>S;++S)for(var x=0;32>x;x+=8)D[C++]=this.g[S]>>>x&255;return D};function u(D,S){var C=m;return Object.prototype.hasOwnProperty.call(C,D)?C[D]:C[D]=S(D)}function h(D,S){this.h=S;for(var C=[],x=!0,V=D.length-1;0<=V;V--){var P=D[V]|0;x&&P==S||(C[V]=P,x=!1)}this.g=C}var m={};function g(D){return-128<=D&&128>D?u(D,function(S){return new h([S|0],0>S?-1:0)}):new h([D|0],0>D?-1:0)}function v(D){if(isNaN(D)||!isFinite(D))return A;if(0>D)return z(v(-D));for(var S=[],C=1,x=0;D>=C;x++)S[x]=D/C|0,C*=4294967296;return new h(S,0)}function E(D,S){if(D.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(D.charAt(0)=="-")return z(E(D.substring(1),S));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=v(Math.pow(S,8)),x=A,V=0;V<D.length;V+=8){var P=Math.min(8,D.length-V),T=parseInt(D.substring(V,V+P),S);8>P?(P=v(Math.pow(S,P)),x=x.j(P).add(v(T))):(x=x.j(C),x=x.add(v(T)))}return x}var A=g(0),R=g(1),j=g(16777216);i=h.prototype,i.m=function(){if(X(this))return-z(this).m();for(var D=0,S=1,C=0;C<this.g.length;C++){var x=this.i(C);D+=(0<=x?x:4294967296+x)*S,S*=4294967296}return D},i.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(K(this))return"0";if(X(this))return"-"+z(this).toString(D);for(var S=v(Math.pow(D,6)),C=this,x="";;){var V=Ie(C,S).g;C=ge(C,V.j(S));var P=((0<C.g.length?C.g[0]:C.h)>>>0).toString(D);if(C=V,K(C))return P+x;for(;6>P.length;)P="0"+P;x=P+x}},i.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function K(D){if(D.h!=0)return!1;for(var S=0;S<D.g.length;S++)if(D.g[S]!=0)return!1;return!0}function X(D){return D.h==-1}i.l=function(D){return D=ge(this,D),X(D)?-1:K(D)?0:1};function z(D){for(var S=D.g.length,C=[],x=0;x<S;x++)C[x]=~D.g[x];return new h(C,~D.h).add(R)}i.abs=function(){return X(this)?z(this):this},i.add=function(D){for(var S=Math.max(this.g.length,D.g.length),C=[],x=0,V=0;V<=S;V++){var P=x+(this.i(V)&65535)+(D.i(V)&65535),T=(P>>>16)+(this.i(V)>>>16)+(D.i(V)>>>16);x=T>>>16,P&=65535,T&=65535,C[V]=T<<16|P}return new h(C,C[C.length-1]&-2147483648?-1:0)};function ge(D,S){return D.add(z(S))}i.j=function(D){if(K(this)||K(D))return A;if(X(this))return X(D)?z(this).j(z(D)):z(z(this).j(D));if(X(D))return z(this.j(z(D)));if(0>this.l(j)&&0>D.l(j))return v(this.m()*D.m());for(var S=this.g.length+D.g.length,C=[],x=0;x<2*S;x++)C[x]=0;for(x=0;x<this.g.length;x++)for(var V=0;V<D.g.length;V++){var P=this.i(x)>>>16,T=this.i(x)&65535,he=D.i(V)>>>16,Se=D.i(V)&65535;C[2*x+2*V]+=T*Se,ue(C,2*x+2*V),C[2*x+2*V+1]+=P*Se,ue(C,2*x+2*V+1),C[2*x+2*V+1]+=T*he,ue(C,2*x+2*V+1),C[2*x+2*V+2]+=P*he,ue(C,2*x+2*V+2)}for(x=0;x<S;x++)C[x]=C[2*x+1]<<16|C[2*x];for(x=S;x<2*S;x++)C[x]=0;return new h(C,0)};function ue(D,S){for(;(D[S]&65535)!=D[S];)D[S+1]+=D[S]>>>16,D[S]&=65535,S++}function ye(D,S){this.g=D,this.h=S}function Ie(D,S){if(K(S))throw Error("division by zero");if(K(D))return new ye(A,A);if(X(D))return S=Ie(z(D),S),new ye(z(S.g),z(S.h));if(X(S))return S=Ie(D,z(S)),new ye(z(S.g),S.h);if(30<D.g.length){if(X(D)||X(S))throw Error("slowDivide_ only works with positive integers.");for(var C=R,x=S;0>=x.l(D);)C=$e(C),x=$e(x);var V=Ce(C,1),P=Ce(x,1);for(x=Ce(x,2),C=Ce(C,2);!K(x);){var T=P.add(x);0>=T.l(D)&&(V=V.add(C),P=T),x=Ce(x,1),C=Ce(C,1)}return S=ge(D,V.j(S)),new ye(V,S)}for(V=A;0<=D.l(S);){for(C=Math.max(1,Math.floor(D.m()/S.m())),x=Math.ceil(Math.log(C)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),P=v(C),T=P.j(S);X(T)||0<T.l(D);)C-=x,P=v(C),T=P.j(S);K(P)&&(P=R),V=V.add(P),D=ge(D,T)}return new ye(V,D)}i.A=function(D){return Ie(this,D).h},i.and=function(D){for(var S=Math.max(this.g.length,D.g.length),C=[],x=0;x<S;x++)C[x]=this.i(x)&D.i(x);return new h(C,this.h&D.h)},i.or=function(D){for(var S=Math.max(this.g.length,D.g.length),C=[],x=0;x<S;x++)C[x]=this.i(x)|D.i(x);return new h(C,this.h|D.h)},i.xor=function(D){for(var S=Math.max(this.g.length,D.g.length),C=[],x=0;x<S;x++)C[x]=this.i(x)^D.i(x);return new h(C,this.h^D.h)};function $e(D){for(var S=D.g.length+1,C=[],x=0;x<S;x++)C[x]=D.i(x)<<1|D.i(x-1)>>>31;return new h(C,D.h)}function Ce(D,S){var C=S>>5;S%=32;for(var x=D.g.length-C,V=[],P=0;P<x;P++)V[P]=0<S?D.i(P+C)>>>S|D.i(P+C+1)<<32-S:D.i(P+C);return new h(V,D.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,d_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=E,ci=h}).apply(typeof gg<"u"?gg:typeof self<"u"?self:typeof window<"u"?window:{});var pu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var f_,Ea,p_,Iu,gd,m_,g_,y_;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,y){return l==Array.prototype||l==Object.prototype||(l[f]=y.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof pu=="object"&&pu];for(var f=0;f<l.length;++f){var y=l[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var y=s;l=l.split(".");for(var w=0;w<l.length-1;w++){var L=l[w];if(!(L in y))break e;y=y[L]}l=l[l.length-1],w=y[l],f=f(w),f!=w&&f!=null&&e(y,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var y=0,w=!1,L={next:function(){if(!w&&y<l.length){var U=y++;return{value:f(U,l[U]),done:!1}}return w=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function g(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function v(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function E(l,f,y){return l.call.apply(l.bind,arguments)}function A(l,f,y){if(!l)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,w),l.apply(f,L)}}return function(){return l.apply(f,arguments)}}function R(l,f,y){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:A,R.apply(null,arguments)}function j(l,f){var y=Array.prototype.slice.call(arguments,1);return function(){var w=y.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function K(l,f){function y(){}y.prototype=f.prototype,l.aa=f.prototype,l.prototype=new y,l.prototype.constructor=l,l.Qb=function(w,L,U){for(var Z=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)Z[Be-2]=arguments[Be];return f.prototype[L].apply(w,Z)}}function X(l){const f=l.length;if(0<f){const y=Array(f);for(let w=0;w<f;w++)y[w]=l[w];return y}return[]}function z(l,f){for(let y=1;y<arguments.length;y++){const w=arguments[y];if(g(w)){const L=l.length||0,U=w.length||0;l.length=L+U;for(let Z=0;Z<U;Z++)l[L+Z]=w[Z]}else l.push(w)}}class ge{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function ue(l){return/^[\s\xa0]*$/.test(l)}function ye(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function Ie(l){return Ie[" "](l),l}Ie[" "]=function(){};var $e=ye().indexOf("Gecko")!=-1&&!(ye().toLowerCase().indexOf("webkit")!=-1&&ye().indexOf("Edge")==-1)&&!(ye().indexOf("Trident")!=-1||ye().indexOf("MSIE")!=-1)&&ye().indexOf("Edge")==-1;function Ce(l,f,y){for(const w in l)f.call(y,l[w],w,l)}function D(l,f){for(const y in l)f.call(void 0,l[y],y,l)}function S(l){const f={};for(const y in l)f[y]=l[y];return f}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(l,f){let y,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(y in w)l[y]=w[y];for(let U=0;U<C.length;U++)y=C[U],Object.prototype.hasOwnProperty.call(w,y)&&(l[y]=w[y])}}function V(l){var f=1;l=l.split(":");const y=[];for(;0<f&&l.length;)y.push(l.shift()),f--;return l.length&&y.push(l.join(":")),y}function P(l){m.setTimeout(()=>{throw l},0)}function T(){var l=re;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class he{constructor(){this.h=this.g=null}add(f,y){const w=Se.get();w.set(f,y),this.h?this.h.next=w:this.g=w,this.h=w}}var Se=new ge(()=>new Ae,l=>l.reset());class Ae{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let fe,W=!1,re=new he,ee=()=>{const l=m.Promise.resolve(void 0);fe=()=>{l.then(O)}};var O=()=>{for(var l;l=T();){try{l.h.call(l.g)}catch(y){P(y)}var f=Se;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}W=!1};function H(){this.s=this.s,this.C=this.C}H.prototype.s=!1,H.prototype.ma=function(){this.s||(this.s=!0,this.N())},H.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ce(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}ce.prototype.h=function(){this.defaultPrevented=!0};var Re=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};m.addEventListener("test",y,f),m.removeEventListener("test",y,f)}catch{}return l}();function Pe(l,f){if(ce.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var y=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if($e){e:{try{Ie(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else y=="mouseover"?f=l.fromElement:y=="mouseout"&&(f=l.toElement);this.relatedTarget=f,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Oe[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Pe.aa.h.call(this)}}K(Pe,ce);var Oe={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Ue="closure_listenable_"+(1e6*Math.random()|0),je=0;function qe(l,f,y,w,L){this.listener=l,this.proxy=null,this.src=f,this.type=y,this.capture=!!w,this.ha=L,this.key=++je,this.da=this.fa=!1}function vt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function nr(l){this.src=l,this.g={},this.h=0}nr.prototype.add=function(l,f,y,w,L){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var Z=Pr(l,f,w,L);return-1<Z?(f=l[Z],y||(f.fa=!1)):(f=new qe(f,this.src,U,!!w,L),f.fa=y,l.push(f)),f};function os(l,f){var y=f.type;if(y in l.g){var w=l.g[y],L=Array.prototype.indexOf.call(w,f,void 0),U;(U=0<=L)&&Array.prototype.splice.call(w,L,1),U&&(vt(f),l.g[y].length==0&&(delete l.g[y],l.h--))}}function Pr(l,f,y,w){for(var L=0;L<l.length;++L){var U=l[L];if(!U.da&&U.listener==f&&U.capture==!!y&&U.ha==w)return L}return-1}var Ei="closure_lm_"+(1e6*Math.random()|0),as={};function Co(l,f,y,w,L){if(Array.isArray(f)){for(var U=0;U<f.length;U++)Co(l,f[U],y,w,L);return null}return y=Po(y),l&&l[Ue]?l.K(f,y,v(w)?!!w.capture:!1,L):Ro(l,f,y,!1,w,L)}function Ro(l,f,y,w,L,U){if(!f)throw Error("Invalid event type");var Z=v(L)?!!L.capture:!!L,Be=us(l);if(Be||(l[Ei]=Be=new nr(l)),y=Be.add(f,y,w,Z,U),y.proxy)return y;if(w=Xa(),y.proxy=w,w.src=l,w.listener=y,l.addEventListener)Re||(L=Z),L===void 0&&(L=!1),l.addEventListener(f.toString(),w,L);else if(l.attachEvent)l.attachEvent(ir(f.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Xa(){function l(y){return f.call(l.src,l.listener,y)}const f=ko;return l}function ls(l,f,y,w,L){if(Array.isArray(f))for(var U=0;U<f.length;U++)ls(l,f[U],y,w,L);else w=v(w)?!!w.capture:!!w,y=Po(y),l&&l[Ue]?(l=l.i,f=String(f).toString(),f in l.g&&(U=l.g[f],y=Pr(U,y,w,L),-1<y&&(vt(U[y]),Array.prototype.splice.call(U,y,1),U.length==0&&(delete l.g[f],l.h--)))):l&&(l=us(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Pr(f,y,w,L)),(y=-1<l?f[l]:null)&&rr(y))}function rr(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Ue])os(f.i,l);else{var y=l.type,w=l.proxy;f.removeEventListener?f.removeEventListener(y,w,l.capture):f.detachEvent?f.detachEvent(ir(y),w):f.addListener&&f.removeListener&&f.removeListener(w),(y=us(f))?(os(y,l),y.h==0&&(y.src=null,f[Ei]=null)):vt(l)}}}function ir(l){return l in as?as[l]:as[l]="on"+l}function ko(l,f){if(l.da)l=!0;else{f=new Pe(f,this);var y=l.listener,w=l.ha||l.src;l.fa&&rr(l),l=y.call(w,f)}return l}function us(l){return l=l[Ei],l instanceof nr?l:null}var cs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Po(l){return typeof l=="function"?l:(l[cs]||(l[cs]=function(f){return l.handleEvent(f)}),l[cs])}function ht(){H.call(this),this.i=new nr(this),this.M=this,this.F=null}K(ht,H),ht.prototype[Ue]=!0,ht.prototype.removeEventListener=function(l,f,y,w){ls(this,l,f,y,w)};function dt(l,f){var y,w=l.F;if(w)for(y=[];w;w=w.F)y.push(w);if(l=l.M,w=f.type||f,typeof f=="string")f=new ce(f,l);else if(f instanceof ce)f.target=f.target||l;else{var L=f;f=new ce(w,l),x(f,L)}if(L=!0,y)for(var U=y.length-1;0<=U;U--){var Z=f.g=y[U];L=sr(Z,w,!0,f)&&L}if(Z=f.g=l,L=sr(Z,w,!0,f)&&L,L=sr(Z,w,!1,f)&&L,y)for(U=0;U<y.length;U++)Z=f.g=y[U],L=sr(Z,w,!1,f)&&L}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var y=l.g[f],w=0;w<y.length;w++)vt(y[w]);delete l.g[f],l.h--}}this.F=null},ht.prototype.K=function(l,f,y,w){return this.i.add(String(l),f,!1,y,w)},ht.prototype.L=function(l,f,y,w){return this.i.add(String(l),f,!0,y,w)};function sr(l,f,y,w){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,U=0;U<f.length;++U){var Z=f[U];if(Z&&!Z.da&&Z.capture==y){var Be=Z.listener,ft=Z.ha||Z.src;Z.fa&&os(l.i,Z),L=Be.call(ft,w)!==!1&&L}}return L&&!w.defaultPrevented}function xo(l,f,y){if(typeof l=="function")y&&(l=R(l,y));else if(l&&typeof l.handleEvent=="function")l=R(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function xr(l){l.g=xo(()=>{l.g=null,l.i&&(l.i=!1,xr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class Ti extends H{constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:xr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ii(l){H.call(this),this.h=l,this.g={}}K(Ii,H);var No=[];function Do(l){Ce(l.g,function(f,y){this.g.hasOwnProperty(y)&&rr(f)},l),l.g={}}Ii.prototype.N=function(){Ii.aa.N.call(this),Do(this)},Ii.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vo=m.JSON.stringify,Oo=m.JSON.parse,Lo=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function Si(){}Si.prototype.h=null;function hs(l){return l.h||(l.h=l.i())}function ds(){}var hn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Un(){ce.call(this,"d")}K(Un,ce);function fs(){ce.call(this,"c")}K(fs,ce);var jn={},Mo=null;function Ai(){return Mo=Mo||new ht}jn.La="serverreachability";function bo(l){ce.call(this,jn.La,l)}K(bo,ce);function or(l){const f=Ai();dt(f,new bo(f))}jn.STAT_EVENT="statevent";function Fo(l,f){ce.call(this,jn.STAT_EVENT,l),this.stat=f}K(Fo,ce);function it(l){const f=Ai();dt(f,new Fo(f,l))}jn.Ma="timingevent";function ps(l,f){ce.call(this,jn.Ma,l),this.size=f}K(ps,ce);function En(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function Ci(){this.g=!0}Ci.prototype.xa=function(){this.g=!1};function Ri(l,f,y,w,L,U){l.info(function(){if(l.g)if(U)for(var Z="",Be=U.split("&"),ft=0;ft<Be.length;ft++){var Le=Be[ft].split("=");if(1<Le.length){var wt=Le[0];Le=Le[1];var at=wt.split("_");Z=2<=at.length&&at[1]=="type"?Z+(wt+"="+Le+"&"):Z+(wt+"=redacted&")}}else Z=null;else Z=U;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+f+`
`+y+`
`+Z})}function ms(l,f,y,w,L,U,Z){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+f+`
`+y+`
`+U+" "+Z})}function Tn(l,f,y,w){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+yc(l,y)+(w?" "+w:"")})}function Uo(l,f){l.info(function(){return"TIMEOUT: "+f})}Ci.prototype.info=function(){};function yc(l,f){if(!l.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(l=0;l<y.length;l++)if(Array.isArray(y[l])){var w=y[l];if(!(2>w.length)){var L=w[1];if(Array.isArray(L)&&!(1>L.length)){var U=L[0];if(U!="noop"&&U!="stop"&&U!="close")for(var Z=1;Z<L.length;Z++)L[Z]=""}}}}return Vo(y)}catch{return f}}var gs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ja={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},In;function ki(){}K(ki,Si),ki.prototype.g=function(){return new XMLHttpRequest},ki.prototype.i=function(){return{}},In=new ki;function Sn(l,f,y,w){this.j=l,this.i=f,this.l=y,this.R=w||1,this.U=new Ii(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Za}function Za(){this.i=null,this.g="",this.h=!1}var jo={},ys={};function _s(l,f,y){l.L=1,l.v=Lr(rn(f)),l.m=y,l.P=!0,zo(l,null)}function zo(l,f){l.F=Date.now(),We(l),l.A=rn(l.v);var y=l.A,w=l.R;Array.isArray(w)||(w=[String(w)]),br(y.i,"t",w),l.C=0,y=l.j.J,l.h=new Za,l.g=yl(l.j,y?f:null,!l.m),0<l.O&&(l.M=new Ti(R(l.Y,l,l.g),l.O)),f=l.U,y=l.g,w=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(No[0]=L.toString()),L=No);for(var U=0;U<L.length;U++){var Z=Co(y,L[U],w||f.handleEvent,!1,f.h||f);if(!Z)break;f.g[Z.key]=Z}f=l.H?S(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),or(),Ri(l.i,l.u,l.A,l.l,l.R,l.m)}Sn.prototype.ca=function(l){l=l.target;const f=this.M;f&&qt(l)==3?f.j():this.Y(l)},Sn.prototype.Y=function(l){try{if(l==this.g)e:{const at=qt(this.g);var f=this.g.Ba();const pn=this.g.Z();if(!(3>at)&&(at!=3||this.g&&(this.h.h||this.g.oa()||Go(this.g)))){this.J||at!=4||f==7||(f==8||0>=pn?or(3):or(2)),Pi(this);var y=this.g.Z();this.X=y;t:if(el(this)){var w=Go(this.g);l="";var L=w.length,U=qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){dn(this),Nr(this);var Z="";break t}this.h.i=new m.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,l+=this.h.i.decode(w[f],{stream:!(U&&f==L-1)});w.length=0,this.h.g+=l,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=y==200,ms(this.i,this.u,this.A,this.l,this.R,at,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,ft=this.g;if((Be=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ue(Be)){var Le=Be;break t}}Le=null}if(y=Le)Tn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Bo(this,y);else{this.o=!1,this.s=3,it(12),dn(this),Nr(this);break e}}if(this.P){y=!0;let on;for(;!this.J&&this.C<Z.length;)if(on=_c(this,Z),on==ys){at==4&&(this.s=4,it(14),y=!1),Tn(this.i,this.l,null,"[Incomplete Response]");break}else if(on==jo){this.s=4,it(15),Tn(this.i,this.l,Z,"[Invalid Chunk]"),y=!1;break}else Tn(this.i,this.l,on,null),Bo(this,on);if(el(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||Z.length!=0||this.h.h||(this.s=1,it(16),y=!1),this.o=this.o&&y,!y)Tn(this.i,this.l,Z,"[Invalid Chunked Response]"),dn(this),Nr(this);else if(0<Z.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),Qo(wt),wt.M=!0,it(11))}}else Tn(this.i,this.l,Z,null),Bo(this,Z);at==4&&dn(this),this.o&&!this.J&&(at==4?Ps(this.j,this):(this.o=!1,We(this)))}else Ss(this.g),y==400&&0<Z.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),dn(this),Nr(this)}}}catch{}finally{}};function el(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function _c(l,f){var y=l.C,w=f.indexOf(`
`,y);return w==-1?ys:(y=Number(f.substring(y,w)),isNaN(y)?jo:(w+=1,w+y>f.length?ys:(f=f.slice(w,w+y),l.C=w+y,f)))}Sn.prototype.cancel=function(){this.J=!0,dn(this)};function We(l){l.S=Date.now()+l.I,tl(l,l.I)}function tl(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=En(R(l.ba,l),f)}function Pi(l){l.B&&(m.clearTimeout(l.B),l.B=null)}Sn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Uo(this.i,this.A),this.L!=2&&(or(),it(17)),dn(this),this.s=2,Nr(this)):tl(this,this.S-l)};function Nr(l){l.j.G==0||l.J||Ps(l.j,l)}function dn(l){Pi(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Do(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Bo(l,f){try{var y=l.j;if(y.G!=0&&(y.g==l||jt(y.h,l))){if(!l.K&&jt(y.h,l)&&y.G==3){try{var w=y.Da.g.parse(f)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<l.F)ks(y),Pn(y);else break e;Rs(y),it(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=En(R(y.Za,y),6e3));if(1>=rl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else hr(y,11)}else if((l.K||y.g==l)&&ks(y),!ue(f))for(L=y.Da.g.parse(f),f=0;f<L.length;f++){let Le=L[f];if(y.T=Le[0],Le=Le[1],y.G==2)if(Le[0]=="c"){y.K=Le[1],y.ia=Le[2];const wt=Le[3];wt!=null&&(y.la=wt,y.j.info("VER="+y.la));const at=Le[4];at!=null&&(y.Aa=at,y.j.info("SVER="+y.Aa));const pn=Le[5];pn!=null&&typeof pn=="number"&&0<pn&&(w=1.5*pn,y.L=w,y.j.info("backChannelRequestTimeoutMs_="+w)),w=y;const on=l.g;if(on){const Mi=on.g?on.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Mi){var U=w.h;U.g||Mi.indexOf("spdy")==-1&&Mi.indexOf("quic")==-1&&Mi.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&($o(U,U.h),U.h=null))}if(w.D){const Ns=on.g?on.g.getResponseHeader("X-HTTP-Session-Id"):null;Ns&&(w.ya=Ns,He(w.I,w.D,Ns))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-l.F,y.j.info("Handshake RTT: "+y.R+"ms")),w=y;var Z=l;if(w.qa=gl(w,w.J?w.ia:null,w.W),Z.K){il(w.h,Z);var Be=Z,ft=w.L;ft&&(Be.I=ft),Be.B&&(Pi(Be),We(Be)),w.g=Z}else Li(w);0<y.i.length&&Hn(y)}else Le[0]!="stop"&&Le[0]!="close"||hr(y,7);else y.G==3&&(Le[0]=="stop"||Le[0]=="close"?Le[0]=="stop"?hr(y,7):Ct(y):Le[0]!="noop"&&y.l&&y.l.ta(Le),y.v=0)}}or(4)}catch{}}var nl=class{constructor(l,f){this.g=l,this.map=f}};function xi(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function nn(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function rl(l){return l.h?1:l.g?l.g.size:0}function jt(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function $o(l,f){l.g?l.g.add(f):l.h=f}function il(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}xi.prototype.cancel=function(){if(this.i=sl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function sl(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const y of l.g.values())f=f.concat(y.D);return f}return X(l.i)}function vs(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(g(l)){for(var f=[],y=l.length,w=0;w<y;w++)f.push(l[w]);return f}f=[],y=0;for(w in l)f[y++]=l[w];return f}function ws(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(g(l)||typeof l=="string"){var f=[];l=l.length;for(var y=0;y<l;y++)f.push(y);return f}f=[],y=0;for(const w in l)f[y++]=w;return f}}}function Dr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(g(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var y=ws(l),w=vs(l),L=w.length,U=0;U<L;U++)f.call(void 0,w[U],y&&y[U],l)}var Ni=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vc(l,f){if(l){l=l.split("&");for(var y=0;y<l.length;y++){var w=l[y].indexOf("="),L=null;if(0<=w){var U=l[y].substring(0,w);L=l[y].substring(w+1)}else U=l[y];f(U,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function ar(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ar){this.h=l.h,Di(this,l.j),this.o=l.o,this.g=l.g,Vr(this,l.s),this.l=l.l;var f=l.i,y=new zn;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),Or(this,y),this.m=l.m}else l&&(f=String(l).match(Ni))?(this.h=!1,Di(this,f[1]||"",!0),this.o=Ve(f[2]||""),this.g=Ve(f[3]||"",!0),Vr(this,f[4]),this.l=Ve(f[5]||"",!0),Or(this,f[6]||"",!0),this.m=Ve(f[7]||"")):(this.h=!1,this.i=new zn(null,this.h))}ar.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Mr(f,Es,!0),":");var y=this.g;return(y||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Mr(f,Es,!0),"@"),l.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&l.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(Mr(y,y.charAt(0)=="/"?ll:al,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",Mr(y,Ho)),l.join("")};function rn(l){return new ar(l)}function Di(l,f,y){l.j=y?Ve(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Vr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Or(l,f,y){f instanceof zn?(l.i=f,Bn(l.i,l.h)):(y||(f=Mr(f,ul)),l.i=new zn(f,l.h))}function He(l,f,y){l.i.set(f,y)}function Lr(l){return He(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Ve(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Mr(l,f,y){return typeof l=="string"?(l=encodeURI(l).replace(f,ol),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function ol(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Es=/[#\/\?@]/g,al=/[#\?:]/g,ll=/[#\?]/g,ul=/[#\?@]/g,Ho=/#/g;function zn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function At(l){l.g||(l.g=new Map,l.h=0,l.i&&vc(l.i,function(f,y){l.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}i=zn.prototype,i.add=function(l,f){At(this),this.i=null,l=fn(this,l);var y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(f),this.h+=1,this};function An(l,f){At(l),f=fn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Cn(l,f){return At(l),f=fn(l,f),l.g.has(f)}i.forEach=function(l,f){At(this),this.g.forEach(function(y,w){y.forEach(function(L){l.call(f,L,w,this)},this)},this)},i.na=function(){At(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let w=0;w<f.length;w++){const L=l[w];for(let U=0;U<L.length;U++)y.push(f[w])}return y},i.V=function(l){At(this);let f=[];if(typeof l=="string")Cn(this,l)&&(f=f.concat(this.g.get(fn(this,l))));else{l=Array.from(this.g.values());for(let y=0;y<l.length;y++)f=f.concat(l[y])}return f},i.set=function(l,f){return At(this),this.i=null,l=fn(this,l),Cn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function br(l,f,y){An(l,f),0<y.length&&(l.i=null,l.g.set(fn(l,f),X(y)),l.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var w=f[y];const U=encodeURIComponent(String(w)),Z=this.V(w);for(w=0;w<Z.length;w++){var L=U;Z[w]!==""&&(L+="="+encodeURIComponent(String(Z[w]))),l.push(L)}}return this.i=l.join("&")};function fn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function Bn(l,f){f&&!l.j&&(At(l),l.i=null,l.g.forEach(function(y,w){var L=w.toLowerCase();w!=L&&(An(this,w),br(this,L,y))},l)),l.j=f}function wc(l,f){const y=new Ci;if(m.Image){const w=new Image;w.onload=j(Ht,y,"TestLoadImage: loaded",!0,f,w),w.onerror=j(Ht,y,"TestLoadImage: error",!1,f,w),w.onabort=j(Ht,y,"TestLoadImage: abort",!1,f,w),w.ontimeout=j(Ht,y,"TestLoadImage: timeout",!1,f,w),m.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else f(!1)}function cl(l,f){const y=new Ci,w=new AbortController,L=setTimeout(()=>{w.abort(),Ht(y,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:w.signal}).then(U=>{clearTimeout(L),U.ok?Ht(y,"TestPingServer: ok",!0,f):Ht(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),Ht(y,"TestPingServer: error",!1,f)})}function Ht(l,f,y,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(y)}catch{}}function Ec(){this.g=new Lo}function hl(l,f,y){const w=y||"";try{Dr(l,function(L,U){let Z=L;v(L)&&(Z=Vo(L)),f.push(w+U+"="+encodeURIComponent(Z))})}catch(L){throw f.push(w+"type="+encodeURIComponent("_badmap")),L}}function lr(l){this.l=l.Ub||null,this.j=l.eb||!1}K(lr,Si),lr.prototype.g=function(){return new Vi(this.l,this.j)},lr.prototype.i=function(l){return function(){return l}}({});function Vi(l,f){ht.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}K(Vi,ht),i=Vi.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,kn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,kn(this)),this.g&&(this.readyState=3,kn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;dl(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function dl(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Rn(this):kn(this),this.readyState==3&&dl(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,Rn(this))},i.Qa=function(l){this.g&&(this.response=l,Rn(this))},i.ga=function(){this.g&&Rn(this)};function Rn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,kn(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=f.next();return l.join(`\r
`)};function kn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Vi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function ur(l){let f="";return Ce(l,function(y,w){f+=w,f+=":",f+=y,f+=`\r
`}),f}function Fr(l,f,y){e:{for(w in y){var w=!1;break e}w=!0}w||(y=ur(y),typeof l=="string"?y!=null&&encodeURIComponent(String(y)):He(l,f,y))}function Xe(l){ht.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}K(Xe,ht);var Tc=/^https?$/i,qo=["POST","PUT"];i=Xe.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,y,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():In.g(),this.v=this.o?hs(this.o):hs(In),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(U){Oi(this,U);return}if(l=y||"",y=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)y.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const U of w.keys())y.set(U,w.get(U));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(y.keys()).find(U=>U.toLowerCase()=="content-type"),L=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(qo,f,void 0))||w||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,Z]of y)this.g.setRequestHeader(U,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Is(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){Oi(this,U)}};function Oi(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,Ts(l),sn(l)}function Ts(l){l.A||(l.A=!0,dt(l,"complete"),dt(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,dt(this,"complete"),dt(this,"abort"),sn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),sn(this,!0)),Xe.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Wo(this):this.bb())},i.bb=function(){Wo(this)};function Wo(l){if(l.h&&typeof h<"u"&&(!l.v[1]||qt(l)!=4||l.Z()!=2)){if(l.u&&qt(l)==4)xo(l.Ea,0,l);else if(dt(l,"readystatechange"),qt(l)==4){l.h=!1;try{const Z=l.Z();e:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var w;if(w=Z===0){var L=String(l.D).match(Ni)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),w=!Tc.test(L?L.toLowerCase():"")}y=w}if(y)dt(l,"complete"),dt(l,"success");else{l.m=6;try{var U=2<qt(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",Ts(l)}}finally{sn(l)}}}}function sn(l,f){if(l.g){Is(l);const y=l.g,w=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||dt(l,"ready");try{y.onreadystatechange=w}catch{}}}function Is(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function qt(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<qt(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Oo(f)}};function Go(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Ss(l){const f={};l=(l.g&&2<=qt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(ue(l[w]))continue;var y=V(l[w]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const U=f[L]||[];f[L]=U,U.push(y)}D(f,function(w){return w.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function $n(l,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||f}function Ko(l){this.Aa=0,this.i=[],this.j=new Ci,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$n("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$n("baseRetryDelayMs",5e3,l),this.cb=$n("retryDelaySeedMs",1e4,l),this.Wa=$n("forwardChannelMaxRetries",2,l),this.wa=$n("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new xi(l&&l.concurrentRequestLimit),this.Da=new Ec,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Ko.prototype,i.la=8,i.G=1,i.connect=function(l,f,y,w){it(0),this.W=l,this.H=f||{},y&&w!==void 0&&(this.H.OSID=y,this.H.OAID=w),this.F=this.X,this.I=gl(this,null,this.W),Hn(this)};function Ct(l){if(As(l),l.G==3){var f=l.U++,y=rn(l.I);if(He(y,"SID",l.K),He(y,"RID",f),He(y,"TYPE","terminate"),cr(l,y),f=new Sn(l,l.j,f),f.L=2,f.v=Lr(rn(y)),y=!1,m.navigator&&m.navigator.sendBeacon)try{y=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&m.Image&&(new Image().src=f.v,y=!0),y||(f.g=yl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),We(f)}ml(l)}function Pn(l){l.g&&(Qo(l),l.g.cancel(),l.g=null)}function As(l){Pn(l),l.u&&(m.clearTimeout(l.u),l.u=null),ks(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function Hn(l){if(!nn(l.h)&&!l.s){l.s=!0;var f=l.Ga;fe||ee(),W||(fe(),W=!0),re.add(f,l),l.B=0}}function Ic(l,f){return rl(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=En(R(l.Ga,l,f),pl(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new Sn(this,this.j,l);let U=this.o;if(this.S&&(U?(U=S(U),x(U,this.S)):U=this.S),this.m!==null||this.O||(L.H=U,U=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var w=this.i[y];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(f+=w,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=Ur(this,L,f),y=rn(this.I),He(y,"RID",l),He(y,"CVER",22),this.D&&He(y,"X-HTTP-Session-Id",this.D),cr(this,y),U&&(this.O?f="headers="+encodeURIComponent(String(ur(U)))+"&"+f:this.m&&Fr(y,this.m,U)),$o(this.h,L),this.Ua&&He(y,"TYPE","init"),this.P?(He(y,"$req",f),He(y,"SID","null"),L.T=!0,_s(L,y,null)):_s(L,y,f),this.G=2}}else this.G==3&&(l?Cs(this,l):this.i.length==0||nn(this.h)||Cs(this))};function Cs(l,f){var y;f?y=f.l:y=l.U++;const w=rn(l.I);He(w,"SID",l.K),He(w,"RID",y),He(w,"AID",l.T),cr(l,w),l.m&&l.o&&Fr(w,l.m,l.o),y=new Sn(l,l.j,y,l.B+1),l.m===null&&(y.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Ur(l,y,1e3),y.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),$o(l.h,y),_s(y,w,f)}function cr(l,f){l.H&&Ce(l.H,function(y,w){He(f,w,y)}),l.l&&Dr({},function(y,w){He(f,w,y)})}function Ur(l,f,y){y=Math.min(l.i.length,y);var w=l.l?R(l.l.Na,l.l,l):null;e:{var L=l.i;let U=-1;for(;;){const Z=["count="+y];U==-1?0<y?(U=L[0].g,Z.push("ofs="+U)):U=0:Z.push("ofs="+U);let Be=!0;for(let ft=0;ft<y;ft++){let Le=L[ft].g;const wt=L[ft].map;if(Le-=U,0>Le)U=Math.max(0,L[ft].g-100),Be=!1;else try{hl(wt,Z,"req"+Le+"_")}catch{w&&w(wt)}}if(Be){w=Z.join("&");break e}}}return l=l.i.splice(0,y),f.D=l,w}function Li(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;fe||ee(),W||(fe(),W=!0),re.add(f,l),l.v=0}}function Rs(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=En(R(l.Fa,l),pl(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,fl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=En(R(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,it(10),Pn(this),fl(this))};function Qo(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function fl(l){l.g=new Sn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=rn(l.qa);He(f,"RID","rpc"),He(f,"SID",l.K),He(f,"AID",l.T),He(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&He(f,"TO",l.ja),He(f,"TYPE","xmlhttp"),cr(l,f),l.m&&l.o&&Fr(f,l.m,l.o),l.L&&(l.g.I=l.L);var y=l.g;l=l.ia,y.L=1,y.v=Lr(rn(f)),y.m=null,y.P=!0,zo(y,l)}i.Za=function(){this.C!=null&&(this.C=null,Pn(this),Rs(this),it(19))};function ks(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function Ps(l,f){var y=null;if(l.g==f){ks(l),Qo(l),l.g=null;var w=2}else if(jt(l.h,f))y=f.D,il(l.h,f),w=1;else return;if(l.G!=0){if(f.o)if(w==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var L=l.B;w=Ai(),dt(w,new ps(w,y)),Hn(l)}else Li(l);else if(L=f.s,L==3||L==0&&0<f.X||!(w==1&&Ic(l,f)||w==2&&Rs(l)))switch(y&&0<y.length&&(f=l.h,f.i=f.i.concat(y)),L){case 1:hr(l,5);break;case 4:hr(l,10);break;case 3:hr(l,6);break;default:hr(l,2)}}}function pl(l,f){let y=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(y*=2),y*f}function hr(l,f){if(l.j.info("Error code "+f),f==2){var y=R(l.fb,l),w=l.Xa;const L=!w;w=new ar(w||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Di(w,"https"),Lr(w),L?wc(w.toString(),y):cl(w.toString(),y)}else it(2);l.G=0,l.l&&l.l.sa(f),ml(l),As(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function ml(l){if(l.G=0,l.ka=[],l.l){const f=sl(l.h);(f.length!=0||l.i.length!=0)&&(z(l.ka,f),z(l.ka,l.i),l.h.i.length=0,X(l.i),l.i.length=0),l.l.ra()}}function gl(l,f,y){var w=y instanceof ar?rn(y):new ar(y);if(w.g!="")f&&(w.g=f+"."+w.g),Vr(w,w.s);else{var L=m.location;w=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var U=new ar(null);w&&Di(U,w),f&&(U.g=f),L&&Vr(U,L),y&&(U.l=y),w=U}return y=l.D,f=l.ya,y&&f&&He(w,y,f),He(w,"VER",l.la),cr(l,w),w}function yl(l,f,y){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Xe(new lr({eb:y})):new Xe(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Yo(){}i=Yo.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function xs(){}xs.prototype.g=function(l,f){return new zt(l,f)};function zt(l,f){ht.call(this),this.g=new Ko(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!ue(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!ue(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new qn(this)}K(zt,ht),zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},zt.prototype.close=function(){Ct(this.g)},zt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.u&&(y={},y.__data__=Vo(l),l=y);f.i.push(new nl(f.Ya++,l)),f.G==3&&Hn(f)},zt.prototype.N=function(){this.g.l=null,delete this.j,Ct(this.g),delete this.g,zt.aa.N.call(this)};function _l(l){Un.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const y in f){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}K(_l,Un);function vl(){fs.call(this),this.status=1}K(vl,fs);function qn(l){this.g=l}K(qn,Yo),qn.prototype.ua=function(){dt(this.g,"a")},qn.prototype.ta=function(l){dt(this.g,new _l(l))},qn.prototype.sa=function(l){dt(this.g,new vl)},qn.prototype.ra=function(){dt(this.g,"b")},xs.prototype.createWebChannel=xs.prototype.g,zt.prototype.send=zt.prototype.o,zt.prototype.open=zt.prototype.m,zt.prototype.close=zt.prototype.close,y_=function(){return new xs},g_=function(){return Ai()},m_=jn,gd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},gs.NO_ERROR=0,gs.TIMEOUT=8,gs.HTTP_ERROR=6,Iu=gs,Ja.COMPLETE="complete",p_=Ja,ds.EventType=hn,hn.OPEN="a",hn.CLOSE="b",hn.ERROR="c",hn.MESSAGE="d",ht.prototype.listen=ht.prototype.K,Ea=ds,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,f_=Xe}).apply(typeof pu<"u"?pu:typeof self<"u"?self:typeof window<"u"?window:{});const yg="@firebase/firestore",_g="4.7.17";/**
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
 */class bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}bt.UNAUTHENTICATED=new bt(null),bt.GOOGLE_CREDENTIALS=new bt("google-credentials-uid"),bt.FIRST_PARTY=new bt("first-party-uid"),bt.MOCK_USER=new bt("mock-user");/**
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
 */let Eo="11.9.0";/**
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
 */const ts=new Ld("@firebase/firestore");function Zs(){return ts.logLevel}function ne(i,...e){if(ts.logLevel<=Ne.DEBUG){const t=e.map(Wd);ts.debug(`Firestore (${Eo}): ${i}`,...t)}}function Cr(i,...e){if(ts.logLevel<=Ne.ERROR){const t=e.map(Wd);ts.error(`Firestore (${Eo}): ${i}`,...t)}}function co(i,...e){if(ts.logLevel<=Ne.WARN){const t=e.map(Wd);ts.warn(`Firestore (${Eo}): ${i}`,...t)}}function Wd(i){if(typeof i=="string")return i;try{/**
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
*/return function(t){return JSON.stringify(t)}(i)}catch{return i}}/**
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
 */function _e(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,__(i,s,t)}function __(i,e,t){let s=`FIRESTORE (${Eo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Cr(s),new Error(s)}function ze(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||__(e,o,s)}function Te(i,e){return i}/**
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
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends kr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Xi{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class v_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class WI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(bt.UNAUTHENTICATED))}shutdown(){}}class GI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class KI{constructor(e){this.t=e,this.currentUser=bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ze(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new Xi;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Xi,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const g=u;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},m=g=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>m(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Xi)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ze(typeof s.accessToken=="string",31837,{l:s}),new v_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string",2055,{h:e}),new bt(e)}}class QI{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class YI{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new QI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XI{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Mn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ze(this.o===void 0,3512);const s=u=>{u.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,ne("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new vg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ze(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new vg(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function JI(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function w_(){return new TextEncoder}/**
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
 */class E_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=JI(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function ke(i,e){return i<e?-1:i>e?1:0}function yd(i,e){let t=0;for(;t<i.length&&t<e.length;){const s=i.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return ke(s,o);{const u=w_(),h=ZI(u.encode(wg(i,t)),u.encode(wg(e,t)));return h!==0?h:ke(s,o)}}t+=s>65535?2:1}return ke(i.length,e.length)}function wg(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function ZI(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return ke(i[t],e[t]);return ke(i.length,e.length)}function ho(i,e,t){return i.length===e.length&&i.every((s,o)=>t(s,e[o]))}/**
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
 */const Eg=-62135596800,Tg=1e6;class gt{static now(){return gt.fromMillis(Date.now())}static fromDate(e){return gt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Tg);return new gt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new se(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new se(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Eg)throw new se(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Tg}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Eg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new gt(0,0))}static max(){return new Ee(new gt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ig="__name__";class Yn{constructor(e,t,s){t===void 0?t=0:t>e.length&&_e(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&_e(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Yn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Yn?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Yn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return ke(e.length,t.length)}static compareSegments(e,t){const s=Yn.isNumericId(e),o=Yn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Yn.extractNumericId(e).compare(Yn.extractNumericId(t)):yd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ci.fromString(e.substring(4,e.length-2))}}class Ye extends Yn{construct(e,t,s){return new Ye(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new se(q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new Ye(t)}static emptyPath(){return new Ye([])}}const e1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xt extends Yn{construct(e,t,s){return new xt(e,t,s)}static isValidIdentifier(e){return e1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ig}static keyField(){return new xt([Ig])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new se(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new se(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new se(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new se(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xt(t)}static emptyPath(){return new xt([])}}/**
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
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(Ye.fromString(e))}static fromName(e){return new de(Ye.fromString(e).popFirst(5))}static empty(){return new de(Ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ye.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new Ye(e.slice()))}}/**
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
 */const Va=-1;function t1(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=Ee.fromTimestamp(s===1e9?new gt(t+1,0):new gt(t,s));return new fi(o,de.empty(),e)}function n1(i){return new fi(i.readTime,i.key,Va)}class fi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new fi(Ee.min(),de.empty(),Va)}static max(){return new fi(Ee.max(),de.empty(),Va)}}function r1(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=de.comparator(i.documentKey,e.documentKey),t!==0?t:ke(i.largestBatchId,e.largestBatchId))}/**
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
 */const i1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class s1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function To(i){if(i.code!==q.FAILED_PRECONDITION||i.message!==i1)throw i;ne("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):$.reject(t)}static resolve(e){return new $((t,s)=>{t(e)})}static reject(e){return new $((t,s)=>{s(e)})}static waitFor(e){return new $((t,s)=>{let o=0,u=0,h=!1;e.forEach(m=>{++o,m.next(()=>{++u,h&&u===o&&t()},g=>s(g))}),h=!0,u===o&&t()})}static or(e){let t=$.resolve(!1);for(const s of e)t=t.next(o=>o?$.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new $((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const v=g;t(e[v]).next(E=>{h[v]=E,++m,m===u&&s(h)},E=>o(E))}})}static doWhile(e,t){return new $((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function o1(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Io(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class ec{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ue(s),this.ce=s=>t.writeSequenceNumber(s))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}ec.le=-1;/**
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
 */const Gd=-1;function tc(i){return i==null}function bu(i){return i===0&&1/i==-1/0}function a1(i){return typeof i=="number"&&Number.isInteger(i)&&!bu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const T_="";function l1(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=Sg(e)),e=u1(i.get(t),e);return Sg(e)}function u1(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case T_:t+="";break;default:t+=u}}return t}function Sg(i){return i+T_+""}/**
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
 */function Ag(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function vi(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function I_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class nt{constructor(e,t){this.comparator=e,this.root=t||Pt.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mu(this.root,e,this.comparator,!1)}getReverseIterator(){return new mu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mu(this.root,e,this.comparator,!0)}}class mu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Pt.RED,this.left=o??Pt.EMPTY,this.right=u??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Pt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Pt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Pt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class yt{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Cg(this.data.getIterator())}getIteratorFrom(e){return new Cg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new yt(this.comparator);return t.data=e,t}}class Cg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class cn{constructor(e){this.fields=e,e.sort(xt.comparator)}static empty(){return new cn([])}unionWith(e){let t=new yt(xt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new cn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ho(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class S_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new S_("Invalid base64 string: "+u):u}}(e);return new Nt(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new Nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const c1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pi(i){if(ze(!!i,39018),typeof i=="string"){let e=0;const t=c1.exec(i);if(ze(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ot(i.seconds),nanos:ot(i.nanos)}}function ot(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function mi(i){return typeof i=="string"?Nt.fromBase64String(i):Nt.fromUint8Array(i)}/**
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
 */const A_="server_timestamp",C_="__type__",R_="__previous_value__",k_="__local_write_time__";function Kd(i){var e,t;return((t=(((e=i?.mapValue)===null||e===void 0?void 0:e.fields)||{})[C_])===null||t===void 0?void 0:t.stringValue)===A_}function nc(i){const e=i.mapValue.fields[R_];return Kd(e)?nc(e):e}function Oa(i){const e=pi(i.mapValue.fields[k_].timestampValue);return new gt(e.seconds,e.nanos)}/**
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
 */class h1{constructor(e,t,s,o,u,h,m,g,v,E){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=v,this.isUsingEmulator=E}}const Fu="(default)";class La{constructor(e,t){this.projectId=e,this.database=t||Fu}static empty(){return new La("","")}get isDefaultDatabase(){return this.database===Fu}isEqual(e){return e instanceof La&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const P_="__type__",d1="__max__",gu={mapValue:{}},x_="__vector__",Uu="value";function gi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Kd(i)?4:p1(i)?9007199254740991:f1(i)?10:11:_e(28295,{value:i})}function tr(i,e){if(i===e)return!0;const t=gi(i);if(t!==gi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Oa(i).isEqual(Oa(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=pi(o.timestampValue),m=pi(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(o,u){return mi(o.bytesValue).isEqual(mi(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(o,u){return ot(o.geoPointValue.latitude)===ot(u.geoPointValue.latitude)&&ot(o.geoPointValue.longitude)===ot(u.geoPointValue.longitude)}(i,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return ot(o.integerValue)===ot(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=ot(o.doubleValue),m=ot(u.doubleValue);return h===m?bu(h)===bu(m):isNaN(h)&&isNaN(m)}return!1}(i,e);case 9:return ho(i.arrayValue.values||[],e.arrayValue.values||[],tr);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Ag(h)!==Ag(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!tr(h[g],m[g])))return!1;return!0}(i,e);default:return _e(52216,{left:i})}}function Ma(i,e){return(i.values||[]).find(t=>tr(t,e))!==void 0}function fo(i,e){if(i===e)return 0;const t=gi(i),s=gi(e);if(t!==s)return ke(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ke(i.booleanValue,e.booleanValue);case 2:return function(u,h){const m=ot(u.integerValue||u.doubleValue),g=ot(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1}(i,e);case 3:return Rg(i.timestampValue,e.timestampValue);case 4:return Rg(Oa(i),Oa(e));case 5:return yd(i.stringValue,e.stringValue);case 6:return function(u,h){const m=mi(u),g=mi(h);return m.compareTo(g)}(i.bytesValue,e.bytesValue);case 7:return function(u,h){const m=u.split("/"),g=h.split("/");for(let v=0;v<m.length&&v<g.length;v++){const E=ke(m[v],g[v]);if(E!==0)return E}return ke(m.length,g.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,h){const m=ke(ot(u.latitude),ot(h.latitude));return m!==0?m:ke(ot(u.longitude),ot(h.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return kg(i.arrayValue,e.arrayValue);case 10:return function(u,h){var m,g,v,E;const A=u.fields||{},R=h.fields||{},j=(m=A[Uu])===null||m===void 0?void 0:m.arrayValue,K=(g=R[Uu])===null||g===void 0?void 0:g.arrayValue,X=ke(((v=j?.values)===null||v===void 0?void 0:v.length)||0,((E=K?.values)===null||E===void 0?void 0:E.length)||0);return X!==0?X:kg(j,K)}(i.mapValue,e.mapValue);case 11:return function(u,h){if(u===gu.mapValue&&h===gu.mapValue)return 0;if(u===gu.mapValue)return 1;if(h===gu.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),v=h.fields||{},E=Object.keys(v);g.sort(),E.sort();for(let A=0;A<g.length&&A<E.length;++A){const R=yd(g[A],E[A]);if(R!==0)return R;const j=fo(m[g[A]],v[E[A]]);if(j!==0)return j}return ke(g.length,E.length)}(i.mapValue,e.mapValue);default:throw _e(23264,{Pe:t})}}function Rg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return ke(i,e);const t=pi(i),s=pi(e),o=ke(t.seconds,s.seconds);return o!==0?o:ke(t.nanos,s.nanos)}function kg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=fo(t[o],s[o]);if(u)return u}return ke(t.length,s.length)}function po(i){return _d(i)}function _d(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=pi(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return mi(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return de.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=_d(u);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${_d(t.fields[h])}`;return o+"}"}(i.mapValue):_e(61005,{value:i})}function Su(i){switch(gi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=nc(i);return e?16+Su(e):16;case 5:return 2*i.stringValue.length;case 6:return mi(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Su(u),0)}(i.arrayValue);case 10:case 11:return function(s){let o=0;return vi(s.fields,(u,h)=>{o+=u.length+Su(h)}),o}(i.mapValue);default:throw _e(13486,{value:i})}}function Pg(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function vd(i){return!!i&&"integerValue"in i}function Qd(i){return!!i&&"arrayValue"in i}function xg(i){return!!i&&"nullValue"in i}function Ng(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Au(i){return!!i&&"mapValue"in i}function f1(i){var e,t;return((t=(((e=i?.mapValue)===null||e===void 0?void 0:e.fields)||{})[P_])===null||t===void 0?void 0:t.stringValue)===x_}function Ra(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return vi(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Ra(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ra(i.arrayValue.values[t]);return e}return Object.assign({},i)}function p1(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===d1}/**
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
 */class Zt{constructor(e){this.value=e}static empty(){return new Zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Au(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ra(t)}setAll(e){let t=xt.emptyPath(),s={},o=[];e.forEach((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Ra(h):o.push(m.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Au(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return tr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Au(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){vi(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new Zt(Ra(this.value))}}function N_(i){const e=[];return vi(i.fields,(t,s)=>{const o=new xt([t]);if(Au(s)){const u=N_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new cn(e)}/**
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
 */class Ft{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Ft(e,0,Ee.min(),Ee.min(),Ee.min(),Zt.empty(),0)}static newFoundDocument(e,t,s,o){return new Ft(e,1,t,Ee.min(),s,o,0)}static newNoDocument(e,t){return new Ft(e,2,t,Ee.min(),Ee.min(),Zt.empty(),0)}static newUnknownDocument(e,t){return new Ft(e,3,t,Ee.min(),Ee.min(),Zt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ju{constructor(e,t){this.position=e,this.inclusive=t}}function Dg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=de.comparator(de.fromName(h.referenceValue),t.key):s=fo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Vg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!tr(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class zu{constructor(e,t="asc"){this.field=e,this.dir=t}}function m1(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class D_{}class ct extends D_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new y1(e,t,s):t==="array-contains"?new w1(e,s):t==="in"?new E1(e,s):t==="not-in"?new T1(e,s):t==="array-contains-any"?new I1(e,s):new ct(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new _1(e,s):new v1(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(fo(t,this.value)):t!==null&&gi(this.value)===gi(t)&&this.matchesComparison(fo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fn extends D_{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Fn(e,t)}matches(e){return V_(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function V_(i){return i.op==="and"}function O_(i){return g1(i)&&V_(i)}function g1(i){for(const e of i.filters)if(e instanceof Fn)return!1;return!0}function wd(i){if(i instanceof ct)return i.field.canonicalString()+i.op.toString()+po(i.value);if(O_(i))return i.filters.map(e=>wd(e)).join(",");{const e=i.filters.map(t=>wd(t)).join(",");return`${i.op}(${e})`}}function L_(i,e){return i instanceof ct?function(s,o){return o instanceof ct&&s.op===o.op&&s.field.isEqual(o.field)&&tr(s.value,o.value)}(i,e):i instanceof Fn?function(s,o){return o instanceof Fn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,m)=>u&&L_(h,o.filters[m]),!0):!1}(i,e):void _e(19439)}function M_(i){return i instanceof ct?function(t){return`${t.field.canonicalString()} ${t.op} ${po(t.value)}`}(i):i instanceof Fn?function(t){return t.op.toString()+" {"+t.getFilters().map(M_).join(" ,")+"}"}(i):"Filter"}class y1 extends ct{constructor(e,t,s){super(e,t,s),this.key=de.fromName(s.referenceValue)}matches(e){const t=de.comparator(e.key,this.key);return this.matchesComparison(t)}}class _1 extends ct{constructor(e,t){super(e,"in",t),this.keys=b_("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class v1 extends ct{constructor(e,t){super(e,"not-in",t),this.keys=b_("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function b_(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>de.fromName(s.referenceValue))}class w1 extends ct{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Qd(t)&&Ma(t.arrayValue,this.value)}}class E1 extends ct{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ma(this.value.arrayValue,t)}}class T1 extends ct{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ma(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ma(this.value.arrayValue,t)}}class I1 extends ct{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Qd(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Ma(this.value.arrayValue,s))}}/**
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
 */class S1{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Ie=null}}function Og(i,e=null,t=[],s=[],o=null,u=null,h=null){return new S1(i,e,t,s,o,u,h)}function Yd(i){const e=Te(i);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>wd(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),tc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>po(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>po(s)).join(",")),e.Ie=t}return e.Ie}function Xd(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!m1(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!L_(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Vg(i.startAt,e.startAt)&&Vg(i.endAt,e.endAt)}function Ed(i){return de.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class Ha{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function A1(i,e,t,s,o,u,h,m){return new Ha(i,e,t,s,o,u,h,m)}function Jd(i){return new Ha(i)}function Lg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function F_(i){return i.collectionGroup!==null}function ka(i){const e=Te(i);if(e.Ee===null){e.Ee=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ee.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new yt(xt.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(v=>{v.isInequality()&&(m=m.add(v.field))})}),m})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ee.push(new zu(u,s))}),t.has(xt.keyField().canonicalString())||e.Ee.push(new zu(xt.keyField(),s))}return e.Ee}function Zn(i){const e=Te(i);return e.de||(e.de=C1(e,ka(i))),e.de}function C1(i,e){if(i.limitType==="F")return Og(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new zu(o.field,u)});const t=i.endAt?new ju(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new ju(i.startAt.position,i.startAt.inclusive):null;return Og(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function Td(i,e){const t=i.filters.concat([e]);return new Ha(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function Id(i,e,t){return new Ha(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function rc(i,e){return Xd(Zn(i),Zn(e))&&i.limitType===e.limitType}function U_(i){return`${Yd(Zn(i))}|lt:${i.limitType}`}function eo(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>M_(o)).join(", ")}]`),tc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>po(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>po(o)).join(",")),`Target(${s})`}(Zn(i))}; limitType=${i.limitType})`}function ic(i,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):de.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(i,e)&&function(s,o){for(const u of ka(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(i,e)&&function(s,o){return!(s.startAt&&!function(h,m,g){const v=Dg(h,m,g);return h.inclusive?v<=0:v<0}(s.startAt,ka(s),o)||s.endAt&&!function(h,m,g){const v=Dg(h,m,g);return h.inclusive?v>=0:v>0}(s.endAt,ka(s),o))}(i,e)}function R1(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function j_(i){return(e,t)=>{let s=!1;for(const o of ka(i)){const u=k1(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function k1(i,e,t){const s=i.field.isKeyField()?de.comparator(e.key,t.key):function(u,h,m){const g=h.data.field(u),v=m.data.field(u);return g!==null&&v!==null?fo(g,v):_e(42886)}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return _e(19790,{direction:i.dir})}}/**
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
 */class is{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){vi(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return I_(this.inner)}size(){return this.innerSize}}/**
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
 */const P1=new nt(de.comparator);function Rr(){return P1}const z_=new nt(de.comparator);function Ta(...i){let e=z_;for(const t of i)e=e.insert(t.key,t);return e}function B_(i){let e=z_;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Yi(){return Pa()}function $_(){return Pa()}function Pa(){return new is(i=>i.toString(),(i,e)=>i.isEqual(e))}const x1=new nt(de.comparator),N1=new yt(de.comparator);function De(...i){let e=N1;for(const t of i)e=e.add(t);return e}const D1=new yt(ke);function V1(){return D1}/**
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
 */function Zd(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bu(e)?"-0":e}}function H_(i){return{integerValue:""+i}}function O1(i,e){return a1(e)?H_(e):Zd(i,e)}/**
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
 */class sc{constructor(){this._=void 0}}function L1(i,e,t){return i instanceof Bu?function(o,u){const h={fields:{[C_]:{stringValue:A_},[k_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Kd(u)&&(u=nc(u)),u&&(h.fields[R_]=u),{mapValue:h}}(t,e):i instanceof ba?W_(i,e):i instanceof Fa?G_(i,e):function(o,u){const h=q_(o,u),m=Mg(h)+Mg(o.Re);return vd(h)&&vd(o.Re)?H_(m):Zd(o.serializer,m)}(i,e)}function M1(i,e,t){return i instanceof ba?W_(i,e):i instanceof Fa?G_(i,e):t}function q_(i,e){return i instanceof $u?function(s){return vd(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Bu extends sc{}class ba extends sc{constructor(e){super(),this.elements=e}}function W_(i,e){const t=K_(e);for(const s of i.elements)t.some(o=>tr(o,s))||t.push(s);return{arrayValue:{values:t}}}class Fa extends sc{constructor(e){super(),this.elements=e}}function G_(i,e){let t=K_(e);for(const s of i.elements)t=t.filter(o=>!tr(o,s));return{arrayValue:{values:t}}}class $u extends sc{constructor(e,t){super(),this.serializer=e,this.Re=t}}function Mg(i){return ot(i.integerValue||i.doubleValue)}function K_(i){return Qd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function b1(i,e){return i.field.isEqual(e.field)&&function(s,o){return s instanceof ba&&o instanceof ba||s instanceof Fa&&o instanceof Fa?ho(s.elements,o.elements,tr):s instanceof $u&&o instanceof $u?tr(s.Re,o.Re):s instanceof Bu&&o instanceof Bu}(i.transform,e.transform)}class F1{constructor(e,t){this.version=e,this.transformResults=t}}class en{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new en}static exists(e){return new en(void 0,e)}static updateTime(e){return new en(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Cu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class oc{}function Q_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new ac(i.key,en.none()):new qa(i.key,i.data,en.none());{const t=i.data,s=Zt.empty();let o=new yt(xt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new wi(i.key,s,new cn(o.toArray()),en.none())}}function U1(i,e,t){i instanceof qa?function(o,u,h){const m=o.value.clone(),g=Fg(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(i,e,t):i instanceof wi?function(o,u,h){if(!Cu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=Fg(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(Y_(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(i,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function xa(i,e,t,s){return i instanceof qa?function(u,h,m,g){if(!Cu(u.precondition,h))return m;const v=u.value.clone(),E=Ug(u.fieldTransforms,g,h);return v.setAll(E),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null}(i,e,t,s):i instanceof wi?function(u,h,m,g){if(!Cu(u.precondition,h))return m;const v=Ug(u.fieldTransforms,g,h),E=h.data;return E.setAll(Y_(u)),E.setAll(v),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(A=>A.field))}(i,e,t,s):function(u,h,m){return Cu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(i,e,t)}function j1(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=q_(s.transform,o||null);u!=null&&(t===null&&(t=Zt.empty()),t.set(s.field,u))}return t||null}function bg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&ho(s,o,(u,h)=>b1(u,h))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class qa extends oc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class wi extends oc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Y_(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function Fg(i,e,t){const s=new Map;ze(i.length===t.length,32656,{Ve:t.length,me:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,M1(h,m,t[o]))}return s}function Ug(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,L1(u,h,e))}return s}class ac extends oc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class z1 extends oc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class B1{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&U1(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=xa(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=xa(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=$_();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const g=Q_(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Ee.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),De())}isEqual(e){return this.batchId===e.batchId&&ho(this.mutations,e.mutations,(t,s)=>bg(t,s))&&ho(this.baseMutations,e.baseMutations,(t,s)=>bg(t,s))}}class ef{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){ze(e.mutations.length===s.length,58842,{fe:e.mutations.length,ge:s.length});let o=function(){return x1}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new ef(e,t,s,o)}}/**
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
 */class $1{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class H1{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ut,Me;function q1(i){switch(i){case q.OK:return _e(64938);case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0;default:return _e(15467,{code:i})}}function X_(i){if(i===void 0)return Cr("GRPC error has no .code"),q.UNKNOWN;switch(i){case ut.OK:return q.OK;case ut.CANCELLED:return q.CANCELLED;case ut.UNKNOWN:return q.UNKNOWN;case ut.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case ut.INTERNAL:return q.INTERNAL;case ut.UNAVAILABLE:return q.UNAVAILABLE;case ut.UNAUTHENTICATED:return q.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case ut.NOT_FOUND:return q.NOT_FOUND;case ut.ALREADY_EXISTS:return q.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return q.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case ut.ABORTED:return q.ABORTED;case ut.OUT_OF_RANGE:return q.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return q.UNIMPLEMENTED;case ut.DATA_LOSS:return q.DATA_LOSS;default:return _e(39323,{code:i})}}(Me=ut||(ut={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const W1=new ci([4294967295,4294967295],0);function jg(i){const e=w_().encode(i),t=new d_;return t.update(e),new Uint8Array(t.digest())}function zg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new ci([t,s],0),new ci([o,u],0)]}class tf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ia(`Invalid padding: ${t}`);if(s<0)throw new Ia(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ia(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ia(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=ci.fromNumber(this.pe)}we(e,t,s){let o=e.add(t.multiply(ci.fromNumber(s)));return o.compare(W1)===1&&(o=new ci([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=jg(e),[s,o]=zg(t);for(let u=0;u<this.hashCount;u++){const h=this.we(s,o,u);if(!this.be(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new tf(u,o,t);return s.forEach(m=>h.insert(m)),h}insert(e){if(this.pe===0)return;const t=jg(e),[s,o]=zg(t);for(let u=0;u<this.hashCount;u++){const h=this.we(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ia extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class lc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Wa.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new lc(Ee.min(),o,new nt(ke),Rr(),De())}}class Wa{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Wa(s,t,De(),De(),De())}}/**
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
 */class Ru{constructor(e,t,s,o){this.De=e,this.removedTargetIds=t,this.key=s,this.ve=o}}class J_{constructor(e,t){this.targetId=e,this.Ce=t}}class Z_{constructor(e,t,s=Nt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Bg{constructor(){this.Fe=0,this.Me=$g(),this.xe=Nt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=De(),t=De(),s=De();return this.Me.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:_e(38017,{changeType:u})}}),new Wa(this.xe,this.Oe,e,t,s)}Qe(){this.Ne=!1,this.Me=$g()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,ze(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class G1{constructor(e){this.ze=e,this.je=new Map,this.He=Rr(),this.Je=yu(),this.Ye=yu(),this.Ze=new nt(ke)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const s=this.rt(t);switch(e.state){case 0:this.it(t)&&s.ke(e.resumeToken);break;case 1:s.We(),s.Be||s.Qe(),s.ke(e.resumeToken);break;case 2:s.We(),s.Be||this.removeTarget(t);break;case 3:this.it(t)&&(s.Ge(),s.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),s.ke(e.resumeToken));break;default:_e(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((s,o)=>{this.it(o)&&t(o)})}ot(e){const t=e.targetId,s=e.Ce.count,o=this._t(t);if(o){const u=o.target;if(Ed(u))if(s===0){const h=new de(u.path);this.tt(t,h,Ft.newNoDocument(h,Ee.min()))}else ze(s===1,20013,{expectedCount:s});else{const h=this.ut(t);if(h!==s){const m=this.ct(e),g=m?this.lt(m,e,h):1;if(g!==0){this.st(t);const v=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,v)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=mi(s).toUint8Array()}catch(g){if(g instanceof S_)return co("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new tf(h,o,u)}catch(g){return co(g instanceof Ia?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.pe===0?null:m}lt(e,t,s){return t.Ce.count===s-this.Tt(e,t.targetId)?0:2}Tt(e,t){const s=this.ze.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.ze.Pt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.tt(t,u,null),o++)}),o}It(e){const t=new Map;this.je.forEach((u,h)=>{const m=this._t(h);if(m){if(u.current&&Ed(m.target)){const g=new de(m.target.path);this.Et(g).has(h)||this.dt(h,g)||this.tt(h,g,Ft.newNoDocument(g,e))}u.Le&&(t.set(h,u.qe()),u.Qe())}});let s=De();this.Ye.forEach((u,h)=>{let m=!0;h.forEachWhile(g=>{const v=this._t(g);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.He.forEach((u,h)=>h.setReadTime(e));const o=new lc(e,t,this.Ze,this.He,s);return this.He=Rr(),this.Je=yu(),this.Ye=yu(),this.Ze=new nt(ke),o}et(e,t){if(!this.it(e))return;const s=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,s),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,s){if(!this.it(e))return;const o=this.rt(e);this.dt(e,t)?o.$e(t,1):o.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),s&&(this.He=this.He.insert(t,s))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new Bg,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new yt(ke),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new yt(ke),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Bg),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function yu(){return new nt(de.comparator)}function $g(){return new nt(de.comparator)}const K1={asc:"ASCENDING",desc:"DESCENDING"},Q1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Y1={and:"AND",or:"OR"};class X1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Sd(i,e){return i.useProto3Json||tc(e)?e:{value:e}}function Hu(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ev(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function J1(i,e){return Hu(i,e.toTimestamp())}function er(i){return ze(!!i,49232),Ee.fromTimestamp(function(t){const s=pi(t);return new gt(s.seconds,s.nanos)}(i))}function nf(i,e){return Ad(i,e).canonicalString()}function Ad(i,e){const t=function(o){return new Ye(["projects",o.projectId,"databases",o.database])}(i).child("documents");return e===void 0?t:t.child(e)}function tv(i){const e=Ye.fromString(i);return ze(ov(e),10190,{key:e.toString()}),e}function Cd(i,e){return nf(i.databaseId,e.path)}function td(i,e){const t=tv(e);if(t.get(1)!==i.databaseId.projectId)throw new se(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new se(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new de(rv(t))}function nv(i,e){return nf(i.databaseId,e)}function Z1(i){const e=tv(i);return e.length===4?Ye.emptyPath():rv(e)}function Rd(i){return new Ye(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function rv(i){return ze(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function Hg(i,e,t){return{name:Cd(i,e),fields:t.value.mapValue.fields}}function eS(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:_e(39313,{state:v})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(v,E){return v.useProto3Json?(ze(E===void 0||typeof E=="string",58123),Nt.fromBase64String(E||"")):(ze(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Nt.fromUint8Array(E||new Uint8Array))}(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&function(v){const E=v.code===void 0?q.UNKNOWN:X_(v.code);return new se(E,v.message||"")}(h);t=new Z_(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=td(i,s.document.name),u=er(s.document.updateTime),h=s.document.createTime?er(s.document.createTime):Ee.min(),m=new Zt({mapValue:{fields:s.document.fields}}),g=Ft.newFoundDocument(o,u,h,m),v=s.targetIds||[],E=s.removedTargetIds||[];t=new Ru(v,E,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=td(i,s.document),u=s.readTime?er(s.readTime):Ee.min(),h=Ft.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Ru([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=td(i,s.document),u=s.removedTargetIds||[];t=new Ru([],u,o,null)}else{if(!("filter"in e))return _e(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new H1(o,u),m=s.targetId;t=new J_(m,h)}}return t}function tS(i,e){let t;if(e instanceof qa)t={update:Hg(i,e.key,e.value)};else if(e instanceof ac)t={delete:Cd(i,e.key)};else if(e instanceof wi)t={update:Hg(i,e.key,e.data),updateMask:cS(e.fieldMask)};else{if(!(e instanceof z1))return _e(16599,{ft:e.type});t={verify:Cd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const m=h.transform;if(m instanceof Bu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof ba)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Fa)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof $u)return{fieldPath:h.field.canonicalString(),increment:m.Re};throw _e(20930,{transform:h.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:J1(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:_e(27497)}(i,e.precondition)),t}function nS(i,e){return i&&i.length>0?(ze(e!==void 0,14353),i.map(t=>function(o,u){let h=o.updateTime?er(o.updateTime):er(u);return h.isEqual(Ee.min())&&(h=er(u)),new F1(h,o.transformResults||[])}(t,e))):[]}function rS(i,e){return{documents:[nv(i,e.path)]}}function iS(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=nv(i,o);const u=function(v){if(v.length!==0)return sv(Fn.create(v,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(v){if(v.length!==0)return v.map(E=>function(R){return{field:to(R.field),direction:aS(R.dir)}}(E))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Sd(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(v){return{before:v.inclusive,values:v.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(v){return{before:!v.inclusive,values:v.position}}(e.endAt)),{gt:t,parent:o}}function sS(i){let e=Z1(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){ze(s===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];t.where&&(u=function(A){const R=iv(A);return R instanceof Fn&&O_(R)?R.getFilters():[R]}(t.where));let h=[];t.orderBy&&(h=function(A){return A.map(R=>function(K){return new zu(no(K.field),function(z){switch(z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(K.direction))}(R))}(t.orderBy));let m=null;t.limit&&(m=function(A){let R;return R=typeof A=="object"?A.value:A,tc(R)?null:R}(t.limit));let g=null;t.startAt&&(g=function(A){const R=!!A.before,j=A.values||[];return new ju(j,R)}(t.startAt));let v=null;return t.endAt&&(v=function(A){const R=!A.before,j=A.values||[];return new ju(j,R)}(t.endAt)),A1(e,o,h,u,m,"F",g,v)}function oS(i,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:o})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function iv(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=no(t.unaryFilter.field);return ct.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=no(t.unaryFilter.field);return ct.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=no(t.unaryFilter.field);return ct.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=no(t.unaryFilter.field);return ct.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}}(i):i.fieldFilter!==void 0?function(t){return ct.create(no(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return Fn.create(t.compositeFilter.filters.map(s=>iv(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e(1026)}}(t.compositeFilter.op))}(i):_e(30097,{filter:i})}function aS(i){return K1[i]}function lS(i){return Q1[i]}function uS(i){return Y1[i]}function to(i){return{fieldPath:i.canonicalString()}}function no(i){return xt.fromServerFormat(i.fieldPath)}function sv(i){return i instanceof ct?function(t){if(t.op==="=="){if(Ng(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NAN"}};if(xg(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ng(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NOT_NAN"}};if(xg(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:to(t.field),op:lS(t.op),value:t.value}}}(i):i instanceof Fn?function(t){const s=t.getFilters().map(o=>sv(o));return s.length===1?s[0]:{compositeFilter:{op:uS(t.op),filters:s}}}(i):_e(54877,{filter:i})}function cS(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ov(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class si{constructor(e,t,s,o,u=Ee.min(),h=Ee.min(),m=Nt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new si(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class hS{constructor(e){this.wt=e}}function dS(i){const e=sS({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Id(e,e.limit,"L"):e}/**
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
 */class fS{constructor(){this.Cn=new pS}addToCollectionParentIndex(e,t){return this.Cn.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(fi.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(fi.min())}updateCollectionGroup(e,t,s){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class pS{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new yt(Ye.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new yt(Ye.comparator)).toArray()}}/**
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
 */const qg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},av=41943040;class Jt{static withCacheSize(e){return new Jt(e,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Jt.DEFAULT_COLLECTION_PERCENTILE=10,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Jt.DEFAULT=new Jt(av,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Jt.DISABLED=new Jt(-1,0,0);/**
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
 */class mo{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new mo(0)}static lr(){return new mo(-1)}}/**
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
 */const Wg="LruGarbageCollector",mS=1048576;function Gg([i,e],[t,s]){const o=ke(i,t);return o===0?ke(e,s):o}class gS{constructor(e){this.Er=e,this.buffer=new yt(Gg),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Gg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class yS{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){ne(Wg,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Io(t)?ne(Wg,"Ignoring IndexedDB error during garbage collection: ",t):await To(t)}await this.mr(3e5)})}}class _S{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return $.resolve(ec.le);const s=new gS(t);return this.gr.forEachTarget(e,o=>s.Rr(o.sequenceNumber)).next(()=>this.gr.yr(e,o=>s.Rr(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.gr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(qg)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qg):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let s,o,u,h,m,g,v;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(A=>(A>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),o=this.params.maximumSequenceNumbersToCollect):o=A,h=Date.now(),this.nthSequenceNumber(e,o))).next(A=>(s=A,m=Date.now(),this.removeTargets(e,s,t))).next(A=>(u=A,g=Date.now(),this.removeOrphanedDocuments(e,s))).next(A=>(v=Date.now(),Zs()<=Ne.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${A} documents in `+(v-g)+`ms
Total Duration: ${v-E}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:A})))}}function vS(i,e){return new _S(i,e)}/**
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
 */class wS{constructor(){this.changes=new is(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ft.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?$.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ES{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class TS{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&xa(s.mutation,o,cn.empty(),gt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,De()).next(()=>s))}getLocalViewOfDocuments(e,t,s=De()){const o=Yi();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=Ta();return u.forEach((m,g)=>{h=h.insert(m,g.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=Yi();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,De()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,m)=>{t.set(h,m)})})}computeViews(e,t,s,o){let u=Rr();const h=Pa(),m=function(){return Pa()}();return t.forEach((g,v)=>{const E=s.get(v.key);o.has(v.key)&&(E===void 0||E.mutation instanceof wi)?u=u.insert(v.key,v):E!==void 0?(h.set(v.key,E.mutation.getFieldMask()),xa(E.mutation,v,E.mutation.getFieldMask(),gt.now())):h.set(v.key,cn.empty())}),this.recalculateAndSaveOverlays(e,u).next(g=>(g.forEach((v,E)=>h.set(v,E)),t.forEach((v,E)=>{var A;return m.set(v,new ES(E,(A=h.get(v))!==null&&A!==void 0?A:null))}),m))}recalculateAndSaveOverlays(e,t){const s=Pa();let o=new nt((h,m)=>h-m),u=De();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const m of h)m.keys().forEach(g=>{const v=t.get(g);if(v===null)return;let E=s.get(g)||cn.empty();E=m.applyToLocalView(v,E),s.set(g,E);const A=(o.get(m.batchId)||De()).add(g);o=o.insert(m.batchId,A)})}).next(()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),v=g.key,E=g.value,A=$_();E.forEach(R=>{if(!u.has(R)){const j=Q_(t.get(R),s.get(R));j!==null&&A.set(R,j),u=u.add(R)}}),h.push(this.documentOverlayCache.saveOverlays(e,v,A))}return $.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return de.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):F_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):$.resolve(Yi());let m=Va,g=u;return h.next(v=>$.forEach(v,(E,A)=>(m<A.largestBatchId&&(m=A.largestBatchId),u.get(E)?$.resolve():this.remoteDocumentCache.getEntry(e,E).next(R=>{g=g.insert(E,R)}))).next(()=>this.populateOverlays(e,v,u)).next(()=>this.computeViews(e,g,v,De())).next(E=>({batchId:m,changes:B_(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new de(t)).next(s=>{let o=Ta();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Ta();return this.indexManager.getCollectionParents(e,u).next(m=>$.forEach(m,g=>{const v=function(A,R){return new Ha(R,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next(E=>{E.forEach((A,R)=>{h=h.insert(A,R)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((g,v)=>{const E=v.getKey();h.get(E)===null&&(h=h.insert(E,Ft.newInvalidDocument(E)))});let m=Ta();return h.forEach((g,v)=>{const E=u.get(g);E!==void 0&&xa(E.mutation,v,cn.empty(),gt.now()),ic(t,v)&&(m=m.insert(g,v))}),m})}}/**
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
 */class IS{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return $.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:er(o.createTime)}}(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(o){return{name:o.name,query:dS(o.bundledQuery),readTime:er(o.readTime)}}(t)),$.resolve()}}/**
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
 */class SS{constructor(){this.overlays=new nt(de.comparator),this.Qr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Yi();return $.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.St(e,t,u)}),$.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Qr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Qr.delete(s)),$.resolve()}getOverlaysForCollection(e,t,s){const o=Yi(),u=t.length+1,h=new de(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,v=g.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return $.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new nt((v,E)=>v-E);const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let E=u.get(v.largestBatchId);E===null&&(E=Yi(),u=u.insert(v.largestBatchId,E)),E.set(v.getKey(),v)}}const m=Yi(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((v,E)=>m.set(v,E)),!(m.size()>=o)););return $.resolve(m)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Qr.get(o.largestBatchId).delete(s.key);this.Qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new $1(t,s));let u=this.Qr.get(t);u===void 0&&(u=De(),this.Qr.set(t,u)),this.Qr.set(t,u.add(s.key))}}/**
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
 */class AS{constructor(){this.sessionToken=Nt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
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
 */class rf{constructor(){this.$r=new yt(St.Ur),this.Kr=new yt(St.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const s=new St(e,t);this.$r=this.$r.add(s),this.Kr=this.Kr.add(s)}Gr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.zr(new St(e,t))}jr(e,t){e.forEach(s=>this.removeReference(s,t))}Hr(e){const t=new de(new Ye([])),s=new St(t,e),o=new St(t,e+1),u=[];return this.Kr.forEachInRange([s,o],h=>{this.zr(h),u.push(h.key)}),u}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new de(new Ye([])),s=new St(t,e),o=new St(t,e+1);let u=De();return this.Kr.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new St(e,0),s=this.$r.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class St{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return de.comparator(e.key,t.key)||ke(e.Zr,t.Zr)}static Wr(e,t){return ke(e.Zr,t.Zr)||de.comparator(e.key,t.key)}}/**
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
 */class CS{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new yt(St.Ur)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new B1(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Xr=this.Xr.add(new St(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return $.resolve(h)}lookupMutationBatch(e,t){return $.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ti(s),u=o<0?0:o;return $.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?Gd:this.nr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new St(t,0),o=new St(t,Number.POSITIVE_INFINITY),u=[];return this.Xr.forEachInRange([s,o],h=>{const m=this.ei(h.Zr);u.push(m)}),$.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new yt(ke);return t.forEach(o=>{const u=new St(o,0),h=new St(o,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([u,h],m=>{s=s.add(m.Zr)})}),$.resolve(this.ni(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;de.isDocumentKey(u)||(u=u.child(""));const h=new St(new de(u),0);let m=new yt(ke);return this.Xr.forEachWhile(g=>{const v=g.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(m=m.add(g.Zr)),!0)},h),$.resolve(this.ni(m))}ni(e){const t=[];return e.forEach(s=>{const o=this.ei(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){ze(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Xr;return $.forEach(t.mutations,o=>{const u=new St(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Xr=s})}sr(e){}containsKey(e,t){const s=new St(t,0),o=this.Xr.firstAfterOrEqual(s);return $.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class RS{constructor(e){this.ii=e,this.docs=function(){return new nt(de.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ii(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return $.resolve(s?s.document.mutableCopy():Ft.newInvalidDocument(t))}getEntries(e,t){let s=Rr();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Ft.newInvalidDocument(o))}),$.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Rr();const h=t.path,m=new de(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:v,value:{document:E}}=g.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||r1(n1(E),s)<=0||(o.has(E.key)||ic(t,E))&&(u=u.insert(E.key,E.mutableCopy()))}return $.resolve(u)}getAllFromCollectionGroup(e,t,s,o){_e(9500)}si(e,t){return $.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new kS(this)}getSize(e){return $.resolve(this.size)}}class kS extends wS{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Br.addEntry(e,o)):this.Br.removeEntry(s)}),$.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
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
 */class PS{constructor(e){this.persistence=e,this.oi=new is(t=>Yd(t),Xd),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this._i=0,this.ai=new rf,this.targetCount=0,this.ui=mo.cr()}forEachTarget(e,t){return this.oi.forEach((s,o)=>t(o)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this._i&&(this._i=t),$.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new mo(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.Tr(t),$.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.oi.forEach((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.oi.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),$.waitFor(u).next(()=>o)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const s=this.oi.get(t)||null;return $.resolve(s)}addMatchingKeys(e,t,s){return this.ai.Gr(t,s),$.resolve()}removeMatchingKeys(e,t,s){this.ai.jr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),$.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const s=this.ai.Yr(t);return $.resolve(s)}containsKey(e,t){return $.resolve(this.ai.containsKey(t))}}/**
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
 */class lv{constructor(e,t){this.ci={},this.overlays={},this.li=new ec(0),this.hi=!1,this.hi=!0,this.Pi=new AS,this.referenceDelegate=e(this),this.Ti=new PS(this),this.indexManager=new fS,this.remoteDocumentCache=function(o){return new RS(o)}(s=>this.referenceDelegate.Ii(s)),this.serializer=new hS(t),this.Ei=new IS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new SS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ci[e.toKey()];return s||(s=new CS(t,this.referenceDelegate),this.ci[e.toKey()]=s),s}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,s){ne("MemoryPersistence","Starting transaction:",e);const o=new xS(this.li.next());return this.referenceDelegate.di(),s(o).next(u=>this.referenceDelegate.Ai(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ri(e,t){return $.or(Object.values(this.ci).map(s=>()=>s.containsKey(e,t)))}}class xS extends s1{constructor(e){super(),this.currentSequenceNumber=e}}class sf{constructor(e){this.persistence=e,this.Vi=new rf,this.mi=null}static fi(e){return new sf(e)}get gi(){if(this.mi)return this.mi;throw _e(60996)}addReference(e,t,s){return this.Vi.addReference(s,t),this.gi.delete(s.toString()),$.resolve()}removeReference(e,t,s){return this.Vi.removeReference(s,t),this.gi.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),$.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(o=>this.gi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.gi.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.gi,s=>{const o=de.fromPath(s);return this.pi(e,o).next(u=>{u||t.removeEntry(o,Ee.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(s=>{s?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return $.or([()=>$.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class qu{constructor(e,t){this.persistence=e,this.yi=new is(s=>l1(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=vS(this,t)}static fi(e,t){return new qu(e,t)}di(){}Ai(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}br(e){let t=0;return this.yr(e,s=>{t++}).next(()=>t)}yr(e,t){return $.forEach(this.yi,(s,o)=>this.Dr(e,s,o).next(u=>u?$.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.si(e,h=>this.Dr(e,h,t).next(m=>{m||(s++,u.removeEntry(h,Ee.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),$.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Su(e.data.value)),t}Dr(e,t,s){return $.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.yi.get(t);return $.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class of{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.ds=s,this.As=o}static Rs(e,t){let s=De(),o=De();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new of(e,t.fromCache,s,o)}}/**
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
 */class NS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class DS{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return Cw()?8:o1(Ut())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ws(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.bs(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new NS;return this.Ss(e,t,h).next(m=>{if(u.result=m,this.fs)return this.Ds(e,t,h,m.size)})}).next(()=>u.result)}Ds(e,t,s,o){return s.documentReadCount<this.gs?(Zs()<=Ne.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",eo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),$.resolve()):(Zs()<=Ne.DEBUG&&ne("QueryEngine","Query:",eo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ps*o?(Zs()<=Ne.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",eo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zn(t))):$.resolve())}ws(e,t){if(Lg(t))return $.resolve(null);let s=Zn(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Id(t,null,"F"),s=Zn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=De(...u);return this.ys.getDocuments(e,h).next(m=>this.indexManager.getMinOffset(e,s).next(g=>{const v=this.vs(t,m);return this.Cs(t,v,h,g.readTime)?this.ws(e,Id(t,null,"F")):this.Fs(e,v,t,g)}))})))}bs(e,t,s,o){return Lg(t)||o.isEqual(Ee.min())?$.resolve(null):this.ys.getDocuments(e,s).next(u=>{const h=this.vs(t,u);return this.Cs(t,h,s,o)?$.resolve(null):(Zs()<=Ne.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),eo(t)),this.Fs(e,h,t,t1(o,Va)).next(m=>m))})}vs(e,t){let s=new yt(j_(e));return t.forEach((o,u)=>{ic(e,u)&&(s=s.add(u))}),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,s){return Zs()<=Ne.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",eo(t)),this.ys.getDocumentsMatchingQuery(e,t,fi.min(),s)}Fs(e,t,s,o){return this.ys.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
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
 */const af="LocalStore",VS=3e8;class OS{constructor(e,t,s,o){this.persistence=e,this.Ms=t,this.serializer=o,this.xs=new nt(ke),this.Os=new is(u=>Yd(u),Xd),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(s)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new TS(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function LS(i,e,t,s){return new OS(i,e,t,s)}async function uv(i,e){const t=Te(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Ls(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],m=[];let g=De();for(const v of o){h.push(v.batchId);for(const E of v.mutations)g=g.add(E.key)}for(const v of u){m.push(v.batchId);for(const E of v.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(s,g).next(v=>({ks:v,removedBatchIds:h,addedBatchIds:m}))})})}function MS(i,e){const t=Te(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.Bs.newChangeBuffer({trackRemovals:!0});return function(m,g,v,E){const A=v.batch,R=A.keys();let j=$.resolve();return R.forEach(K=>{j=j.next(()=>E.getEntry(g,K)).next(X=>{const z=v.docVersions.get(K);ze(z!==null,48541),X.version.compareTo(z)<0&&(A.applyToRemoteDocument(X,v),X.isValidDocument()&&(X.setReadTime(v.commitVersion),E.addEntry(X)))})}),j.next(()=>m.mutationQueue.removeMutationBatch(g,A))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let g=De();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(g=g.add(m.batch.mutations[v].key));return g}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function cv(i){const e=Te(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function bS(i,e){const t=Te(i),s=e.snapshotVersion;let o=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.Bs.newChangeBuffer({trackRemovals:!0});o=t.xs;const m=[];e.targetChanges.forEach((E,A)=>{const R=o.get(A);if(!R)return;m.push(t.Ti.removeMatchingKeys(u,E.removedDocuments,A).next(()=>t.Ti.addMatchingKeys(u,E.addedDocuments,A)));let j=R.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(A)!==null?j=j.withResumeToken(Nt.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):E.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(E.resumeToken,s)),o=o.insert(A,j),function(X,z,ge){return X.resumeToken.approximateByteSize()===0||z.snapshotVersion.toMicroseconds()-X.snapshotVersion.toMicroseconds()>=VS?!0:ge.addedDocuments.size+ge.modifiedDocuments.size+ge.removedDocuments.size>0}(R,j,E)&&m.push(t.Ti.updateTargetData(u,j))});let g=Rr(),v=De();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,E))}),m.push(FS(u,h,e.documentUpdates).next(E=>{g=E.qs,v=E.Qs})),!s.isEqual(Ee.min())){const E=t.Ti.getLastRemoteSnapshotVersion(u).next(A=>t.Ti.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(E)}return $.waitFor(m).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,g,v)).next(()=>g)}).then(u=>(t.xs=o,u))}function FS(i,e,t){let s=De(),o=De();return t.forEach(u=>s=s.add(u)),e.getEntries(i,s).next(u=>{let h=Rr();return t.forEach((m,g)=>{const v=u.get(m);g.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(Ee.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!v.isValidDocument()||g.version.compareTo(v.version)>0||g.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):ne(af,"Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",g.version)}),{qs:h,Qs:o}})}function US(i,e){const t=Te(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Gd),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function jS(i,e){const t=Te(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Ti.getTargetData(s,e).next(u=>u?(o=u,$.resolve(o)):t.Ti.allocateTargetId(s).next(h=>(o=new si(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Ti.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.xs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.xs=t.xs.insert(s.targetId,s),t.Os.set(e,s.targetId)),s})}async function kd(i,e,t){const s=Te(i),o=s.xs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!Io(h))throw h;ne(af,`Failed to update sequence numbers for target ${e}: ${h}`)}s.xs=s.xs.remove(e),s.Os.delete(o.target)}function Kg(i,e,t){const s=Te(i);let o=Ee.min(),u=De();return s.persistence.runTransaction("Execute query","readwrite",h=>function(g,v,E){const A=Te(g),R=A.Os.get(E);return R!==void 0?$.resolve(A.xs.get(R)):A.Ti.getTargetData(v,E)}(s,h,Zn(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Ti.getMatchingKeysForTargetId(h,m.targetId).next(g=>{u=g})}).next(()=>s.Ms.getDocumentsMatchingQuery(h,e,t?o:Ee.min(),t?u:De())).next(m=>(zS(s,R1(e),m),{documents:m,$s:u})))}function zS(i,e,t){let s=i.Ns.get(e)||Ee.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),i.Ns.set(e,s)}class Qg{constructor(){this.activeTargetIds=V1()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class BS{constructor(){this.xo=new Qg,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,s){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new Qg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class $S{No(e){}shutdown(){}}/**
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
 */const Yg="ConnectivityMonitor";class Xg{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){ne(Yg,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){ne(Yg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let _u=null;function Pd(){return _u===null?_u=function(){return 268435456+Math.round(2147483648*Math.random())}():_u++,"0x"+_u.toString(16)}/**
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
 */const nd="RestConnection",HS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class qS{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${s}/databases/${o}`,this.Go=this.databaseId.database===Fu?`project_id=${s}`:`project_id=${s}&database_id=${o}`}zo(e,t,s,o,u){const h=Pd(),m=this.jo(e,t.toUriEncodedString());ne(nd,`Sending RPC '${e}' ${h}:`,m,s);const g={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(g,o,u);const{host:v}=new URL(m),E=_o(v);return this.Jo(e,m,g,s,E).then(A=>(ne(nd,`Received RPC '${e}' ${h}: `,A),A),A=>{throw co(nd,`RPC '${e}' ${h} failed with error: `,A,"url: ",m,"request:",s),A})}Yo(e,t,s,o,u,h){return this.zo(e,t,s,o,u)}Ho(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Eo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}jo(e,t){const s=HS[e];return`${this.Ko}/v1/${t}:${s}`}terminate(){}}/**
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
 */class WS{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const Mt="WebChannelConnection";class GS extends qS{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,u){const h=Pd();return new Promise((m,g)=>{const v=new f_;v.setWithCredentials(!0),v.listenOnce(p_.COMPLETE,()=>{try{switch(v.getLastErrorCode()){case Iu.NO_ERROR:const A=v.getResponseJson();ne(Mt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(A)),m(A);break;case Iu.TIMEOUT:ne(Mt,`RPC '${e}' ${h} timed out`),g(new se(q.DEADLINE_EXCEEDED,"Request time out"));break;case Iu.HTTP_ERROR:const R=v.getStatus();if(ne(Mt,`RPC '${e}' ${h} failed with status:`,R,"response text:",v.getResponseText()),R>0){let j=v.getResponseJson();Array.isArray(j)&&(j=j[0]);const K=j?.error;if(K&&K.status&&K.message){const X=function(ge){const ue=ge.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(ue)>=0?ue:q.UNKNOWN}(K.status);g(new se(X,K.message))}else g(new se(q.UNKNOWN,"Server responded with status "+v.getStatus()))}else g(new se(q.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{h_:e,streamId:h,P_:v.getLastErrorCode(),T_:v.getLastError()})}}finally{ne(Mt,`RPC '${e}' ${h} completed.`)}});const E=JSON.stringify(o);ne(Mt,`RPC '${e}' ${h} sending request:`,o),v.send(t,"POST",E,s,15)})}I_(e,t,s){const o=Pd(),u=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=y_(),m=g_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(g.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Ho(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const E=u.join("");ne(Mt,`Creating RPC '${e}' stream ${o}: ${E}`,g);const A=h.createWebChannel(E,g);this.E_(A);let R=!1,j=!1;const K=new WS({Zo:z=>{j?ne(Mt,`Not sending because RPC '${e}' stream ${o} is closed:`,z):(R||(ne(Mt,`Opening RPC '${e}' stream ${o} transport.`),A.open(),R=!0),ne(Mt,`RPC '${e}' stream ${o} sending:`,z),A.send(z))},Xo:()=>A.close()}),X=(z,ge,ue)=>{z.listen(ge,ye=>{try{ue(ye)}catch(Ie){setTimeout(()=>{throw Ie},0)}})};return X(A,Ea.EventType.OPEN,()=>{j||(ne(Mt,`RPC '${e}' stream ${o} transport opened.`),K.__())}),X(A,Ea.EventType.CLOSE,()=>{j||(j=!0,ne(Mt,`RPC '${e}' stream ${o} transport closed`),K.u_(),this.d_(A))}),X(A,Ea.EventType.ERROR,z=>{j||(j=!0,co(Mt,`RPC '${e}' stream ${o} transport errored. Name:`,z.name,"Message:",z.message),K.u_(new se(q.UNAVAILABLE,"The operation could not be completed")))}),X(A,Ea.EventType.MESSAGE,z=>{var ge;if(!j){const ue=z.data[0];ze(!!ue,16349);const ye=ue,Ie=ye?.error||((ge=ye[0])===null||ge===void 0?void 0:ge.error);if(Ie){ne(Mt,`RPC '${e}' stream ${o} received error:`,Ie);const $e=Ie.status;let Ce=function(C){const x=ut[C];if(x!==void 0)return X_(x)}($e),D=Ie.message;Ce===void 0&&(Ce=q.INTERNAL,D="Unknown error status: "+$e+" with message "+Ie.message),j=!0,K.u_(new se(Ce,D)),A.close()}else ne(Mt,`RPC '${e}' stream ${o} received:`,ue),K.c_(ue)}}),X(m,m_.STAT_EVENT,z=>{z.stat===gd.PROXY?ne(Mt,`RPC '${e}' stream ${o} detected buffering proxy`):z.stat===gd.NOPROXY&&ne(Mt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{K.a_()},0),K}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(t=>t===e)}}function rd(){return typeof document<"u"?document:null}/**
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
 */function uc(i){return new X1(i,!0)}/**
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
 */class hv{constructor(e,t,s=1e3,o=1.5,u=6e4){this.xi=e,this.timerId=t,this.A_=s,this.R_=o,this.V_=u,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const t=Math.floor(this.m_+this.w_()),s=Math.max(0,Date.now()-this.g_),o=Math.max(0,t-s);o>0&&ne("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.m_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,o,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */const Jg="PersistentStream";class dv{constructor(e,t,s,o,u,h,m,g){this.xi=e,this.S_=s,this.D_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new hv(e,t)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,t){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():t&&t.code===q.RESOURCE_EXHAUSTED?(Cr(t.toString()),Cr("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):t&&t.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),t=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.v_===t&&this.z_(s,o)},s=>{e(()=>{const o=new se(q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.j_(o)})})}z_(e,t){const s=this.G_(this.v_);this.stream=this.H_(e,t),this.stream.e_(()=>{s(()=>this.listener.e_())}),this.stream.n_(()=>{s(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(o=>{s(()=>this.j_(o))}),this.stream.onMessage(o=>{s(()=>++this.M_==1?this.J_(o):this.onNext(o))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return ne(Jg,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return t=>{this.xi.enqueueAndForget(()=>this.v_===e?t():(ne(Jg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class KS extends dv{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}H_(e,t){return this.connection.I_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const t=eS(this.serializer,e),s=function(u){if(!("targetChange"in u))return Ee.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Ee.min():h.readTime?er(h.readTime):Ee.min()}(e);return this.listener.Y_(t,s)}Z_(e){const t={};t.database=Rd(this.serializer),t.addTarget=function(u,h){let m;const g=h.target;if(m=Ed(g)?{documents:rS(u,g)}:{query:iS(u,g).gt},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=ev(u,h.resumeToken);const v=Sd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(Ee.min())>0){m.readTime=Hu(u,h.snapshotVersion.toTimestamp());const v=Sd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m}(this.serializer,e);const s=oS(this.serializer,e);s&&(t.labels=s),this.Q_(t)}X_(e){const t={};t.database=Rd(this.serializer),t.removeTarget=e,this.Q_(t)}}class QS extends dv{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,t){return this.connection.I_("Write",e,t)}J_(e){return ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const t=nS(e.writeResults,e.commitTime),s=er(e.commitTime);return this.listener.ra(s,t)}ia(){const e={};e.database=Rd(this.serializer),this.Q_(e)}ta(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>tS(this.serializer,s))};this.Q_(t)}}/**
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
 */class YS{}class XS extends YS{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.sa=!1}oa(){if(this.sa)throw new se(q.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,s,o){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.zo(e,Ad(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new se(q.UNKNOWN,u.toString())})}Yo(e,t,s,o,u){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.Yo(e,Ad(t,s),o,h,m,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new se(q.UNKNOWN,h.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class JS{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(Cr(t),this.ua=!1):ne("OnlineStateTracker",t)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
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
 */const ns="RemoteStore";class ZS{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=u,this.Ra.No(h=>{s.enqueueAndForget(async()=>{ss(this)&&(ne(ns,"Restarting streams for network reachability change."),await async function(g){const v=Te(g);v.da.add(4),await Ga(v),v.Va.set("Unknown"),v.da.delete(4),await cc(v)}(this))})}),this.Va=new JS(s,o)}}async function cc(i){if(ss(i))for(const e of i.Aa)await e(!0)}async function Ga(i){for(const e of i.Aa)await e(!1)}function fv(i,e){const t=Te(i);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),hf(t)?cf(t):So(t).N_()&&uf(t,e))}function lf(i,e){const t=Te(i),s=So(t);t.Ea.delete(e),s.N_()&&pv(t,e),t.Ea.size===0&&(s.N_()?s.k_():ss(t)&&t.Va.set("Unknown"))}function uf(i,e){if(i.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}So(i).Z_(e)}function pv(i,e){i.ma.Ke(e),So(i).X_(e)}function cf(i){i.ma=new G1({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>i.Ea.get(e)||null,Pt:()=>i.datastore.serializer.databaseId}),So(i).start(),i.Va.ca()}function hf(i){return ss(i)&&!So(i).O_()&&i.Ea.size>0}function ss(i){return Te(i).da.size===0}function mv(i){i.ma=void 0}async function eA(i){i.Va.set("Online")}async function tA(i){i.Ea.forEach((e,t)=>{uf(i,e)})}async function nA(i,e){mv(i),hf(i)?(i.Va.Pa(e),cf(i)):i.Va.set("Unknown")}async function rA(i,e,t){if(i.Va.set("Online"),e instanceof Z_&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ea.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ea.delete(m),o.ma.removeTarget(m))}(i,e)}catch(s){ne(ns,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Wu(i,s)}else if(e instanceof Ru?i.ma.Xe(e):e instanceof J_?i.ma.ot(e):i.ma.nt(e),!t.isEqual(Ee.min()))try{const s=await cv(i.localStore);t.compareTo(s)>=0&&await function(u,h){const m=u.ma.It(h);return m.targetChanges.forEach((g,v)=>{if(g.resumeToken.approximateByteSize()>0){const E=u.Ea.get(v);E&&u.Ea.set(v,E.withResumeToken(g.resumeToken,h))}}),m.targetMismatches.forEach((g,v)=>{const E=u.Ea.get(g);if(!E)return;u.Ea.set(g,E.withResumeToken(Nt.EMPTY_BYTE_STRING,E.snapshotVersion)),pv(u,g);const A=new si(E.target,g,v,E.sequenceNumber);uf(u,A)}),u.remoteSyncer.applyRemoteEvent(m)}(i,t)}catch(s){ne(ns,"Failed to raise snapshot:",s),await Wu(i,s)}}async function Wu(i,e,t){if(!Io(e))throw e;i.da.add(1),await Ga(i),i.Va.set("Offline"),t||(t=()=>cv(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{ne(ns,"Retrying IndexedDB access"),await t(),i.da.delete(1),await cc(i)})}function gv(i,e){return e().catch(t=>Wu(i,t,e))}async function hc(i){const e=Te(i),t=yi(e);let s=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:Gd;for(;iA(e);)try{const o=await US(e.localStore,s);if(o===null){e.Ia.length===0&&t.k_();break}s=o.batchId,sA(e,o)}catch(o){await Wu(e,o)}yv(e)&&_v(e)}function iA(i){return ss(i)&&i.Ia.length<10}function sA(i,e){i.Ia.push(e);const t=yi(i);t.N_()&&t.ea&&t.ta(e.mutations)}function yv(i){return ss(i)&&!yi(i).O_()&&i.Ia.length>0}function _v(i){yi(i).start()}async function oA(i){yi(i).ia()}async function aA(i){const e=yi(i);for(const t of i.Ia)e.ta(t.mutations)}async function lA(i,e,t){const s=i.Ia.shift(),o=ef.from(s,e,t);await gv(i,()=>i.remoteSyncer.applySuccessfulWrite(o)),await hc(i)}async function uA(i,e){e&&yi(i).ea&&await async function(s,o){if(function(h){return q1(h)&&h!==q.ABORTED}(o.code)){const u=s.Ia.shift();yi(s).L_(),await gv(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await hc(s)}}(i,e),yv(i)&&_v(i)}async function Zg(i,e){const t=Te(i);t.asyncQueue.verifyOperationInProgress(),ne(ns,"RemoteStore received new credentials");const s=ss(t);t.da.add(3),await Ga(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await cc(t)}async function cA(i,e){const t=Te(i);e?(t.da.delete(2),await cc(t)):e||(t.da.add(2),await Ga(t),t.Va.set("Unknown"))}function So(i){return i.fa||(i.fa=function(t,s,o){const u=Te(t);return u.oa(),new KS(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{e_:eA.bind(null,i),n_:tA.bind(null,i),i_:nA.bind(null,i),Y_:rA.bind(null,i)}),i.Aa.push(async e=>{e?(i.fa.L_(),hf(i)?cf(i):i.Va.set("Unknown")):(await i.fa.stop(),mv(i))})),i.fa}function yi(i){return i.ga||(i.ga=function(t,s,o){const u=Te(t);return u.oa(),new QS(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{e_:()=>Promise.resolve(),n_:oA.bind(null,i),i_:uA.bind(null,i),na:aA.bind(null,i),ra:lA.bind(null,i)}),i.Aa.push(async e=>{e?(i.ga.L_(),await hc(i)):(await i.ga.stop(),i.Ia.length>0&&(ne(ns,`Stopping write stream with ${i.Ia.length} pending writes`),i.Ia=[]))})),i.ga}/**
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
 */class df{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Xi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new df(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ff(i,e){if(Cr("AsyncQueue",`${e}: ${i}`),Io(i))return new se(q.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class lo{static emptySet(e){return new lo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||de.comparator(t.key,s.key):(t,s)=>de.comparator(t.key,s.key),this.keyedMap=Ta(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof lo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new lo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class ey{constructor(){this.pa=new nt(de.comparator)}track(e){const t=e.doc.key,s=this.pa.get(t);s?e.type!==0&&s.type===3?this.pa=this.pa.insert(t,e):e.type===3&&s.type!==1?this.pa=this.pa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.pa=this.pa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.pa=this.pa.remove(t):e.type===1&&s.type===2?this.pa=this.pa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):_e(63341,{Vt:e,ya:s}):this.pa=this.pa.insert(t,e)}wa(){const e=[];return this.pa.inorderTraversal((t,s)=>{e.push(s)}),e}}class go{constructor(e,t,s,o,u,h,m,g,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(m=>{h.push({type:0,doc:m})}),new go(e,t,lo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class hA{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class dA{constructor(){this.queries=ty(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=Te(t),u=o.queries;o.queries=ty(),u.forEach((h,m)=>{for(const g of m.Sa)g.onError(s)})})(this,new se(q.ABORTED,"Firestore shutting down"))}}function ty(){return new is(i=>U_(i),rc)}async function fA(i,e){const t=Te(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Da()&&e.va()&&(s=2):(u=new hA,s=e.va()?0:1);try{switch(s){case 0:u.ba=await t.onListen(o,!0);break;case 1:u.ba=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=ff(h,`Initialization of query '${eo(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.Sa.push(e),e.Fa(t.onlineState),u.ba&&e.Ma(u.ba)&&pf(t)}async function pA(i,e){const t=Te(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.va()?0:1:!u.Da()&&e.va()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function mA(i,e){const t=Te(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.Sa)m.Ma(o)&&(s=!0);h.ba=o}}s&&pf(t)}function gA(i,e,t){const s=Te(i),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function pf(i){i.Ca.forEach(e=>{e.next()})}var xd,ny;(ny=xd||(xd={})).xa="default",ny.Cache="cache";class yA{constructor(e,t,s){this.query=e,this.Oa=t,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=s||{}}Ma(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new go(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Na?this.La(e)&&(this.Oa.next(e),t=!0):this.ka(e,this.onlineState)&&(this.qa(e),t=!0),this.Ba=e,t}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let t=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),t=!0),t}ka(e,t){if(!e.fromCache||!this.va())return!0;const s=t!=="Offline";return(!this.options.Qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}La(e){if(e.docChanges.length>0)return!0;const t=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}qa(e){e=go.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==xd.Cache}}/**
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
 */class vv{constructor(e){this.key=e}}class wv{constructor(e){this.key=e}}class _A{constructor(e,t){this.query=e,this.Ha=t,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=De(),this.mutatedKeys=De(),this.Za=j_(e),this.Xa=new lo(this.Za)}get eu(){return this.Ha}tu(e,t){const s=t?t.nu:new ey,o=t?t.Xa:this.Xa;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,A)=>{const R=o.get(E),j=ic(this.query,A)?A:null,K=!!R&&this.mutatedKeys.has(R.key),X=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let z=!1;R&&j?R.data.isEqual(j.data)?K!==X&&(s.track({type:3,doc:j}),z=!0):this.ru(R,j)||(s.track({type:2,doc:j}),z=!0,(g&&this.Za(j,g)>0||v&&this.Za(j,v)<0)&&(m=!0)):!R&&j?(s.track({type:0,doc:j}),z=!0):R&&!j&&(s.track({type:1,doc:R}),z=!0,(g||v)&&(m=!0)),z&&(j?(h=h.add(j),u=X?u.add(E):u.delete(E)):(h=h.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{Xa:h,nu:s,Cs:m,mutatedKeys:u}}ru(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const h=e.nu.wa();h.sort((E,A)=>function(j,K){const X=z=>{switch(z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{Vt:z})}};return X(j)-X(K)}(E.type,A.type)||this.Za(E.doc,A.doc)),this.iu(s),o=o!=null&&o;const m=t&&!o?this.su():[],g=this.Ya.size===0&&this.current&&!o?1:0,v=g!==this.Ja;return this.Ja=g,h.length!==0||v?{snapshot:new go(this.query,e.Xa,u,h,e.mutatedKeys,g===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),ou:m}:{ou:m}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new ey,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=De(),this.Xa.forEach(s=>{this._u(s.key)&&(this.Ya=this.Ya.add(s.key))});const t=[];return e.forEach(s=>{this.Ya.has(s)||t.push(new wv(s))}),this.Ya.forEach(s=>{e.has(s)||t.push(new vv(s))}),t}au(e){this.Ha=e.$s,this.Ya=De();const t=this.tu(e.documents);return this.applyChanges(t,!0)}uu(){return go.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const mf="SyncEngine";class vA{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class wA{constructor(e){this.key=e,this.cu=!1}}class EA{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.lu={},this.hu=new is(m=>U_(m),rc),this.Pu=new Map,this.Tu=new Set,this.Iu=new nt(de.comparator),this.Eu=new Map,this.du=new rf,this.Au={},this.Ru=new Map,this.Vu=mo.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function TA(i,e,t=!0){const s=Cv(i);let o;const u=s.hu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.uu()):o=await Ev(s,e,t,!0),o}async function IA(i,e){const t=Cv(i);await Ev(t,e,!0,!1)}async function Ev(i,e,t,s){const o=await jS(i.localStore,Zn(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await SA(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&fv(i.remoteStore,o),m}async function SA(i,e,t,s,o){i.fu=(A,R,j)=>async function(X,z,ge,ue){let ye=z.view.tu(ge);ye.Cs&&(ye=await Kg(X.localStore,z.query,!1).then(({documents:D})=>z.view.tu(D,ye)));const Ie=ue&&ue.targetChanges.get(z.targetId),$e=ue&&ue.targetMismatches.get(z.targetId)!=null,Ce=z.view.applyChanges(ye,X.isPrimaryClient,Ie,$e);return iy(X,z.targetId,Ce.ou),Ce.snapshot}(i,A,R,j);const u=await Kg(i.localStore,e,!0),h=new _A(e,u.$s),m=h.tu(u.documents),g=Wa.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),v=h.applyChanges(m,i.isPrimaryClient,g);iy(i,t,v.ou);const E=new vA(e,t,h);return i.hu.set(e,E),i.Pu.has(t)?i.Pu.get(t).push(e):i.Pu.set(t,[e]),v.snapshot}async function AA(i,e,t){const s=Te(i),o=s.hu.get(e),u=s.Pu.get(o.targetId);if(u.length>1)return s.Pu.set(o.targetId,u.filter(h=>!rc(h,e))),void s.hu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await kd(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&lf(s.remoteStore,o.targetId),Nd(s,o.targetId)}).catch(To)):(Nd(s,o.targetId),await kd(s.localStore,o.targetId,!0))}async function CA(i,e){const t=Te(i),s=t.hu.get(e),o=t.Pu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),lf(t.remoteStore,s.targetId))}async function RA(i,e,t){const s=OA(i);try{const o=await function(h,m){const g=Te(h),v=gt.now(),E=m.reduce((j,K)=>j.add(K.key),De());let A,R;return g.persistence.runTransaction("Locally write mutations","readwrite",j=>{let K=Rr(),X=De();return g.Bs.getEntries(j,E).next(z=>{K=z,K.forEach((ge,ue)=>{ue.isValidDocument()||(X=X.add(ge))})}).next(()=>g.localDocuments.getOverlayedDocuments(j,K)).next(z=>{A=z;const ge=[];for(const ue of m){const ye=j1(ue,A.get(ue.key).overlayedDocument);ye!=null&&ge.push(new wi(ue.key,ye,N_(ye.value.mapValue),en.exists(!0)))}return g.mutationQueue.addMutationBatch(j,v,ge,m)}).next(z=>{R=z;const ge=z.applyToLocalDocumentSet(A,X);return g.documentOverlayCache.saveOverlays(j,z.batchId,ge)})}).then(()=>({batchId:R.batchId,changes:B_(A)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,m,g){let v=h.Au[h.currentUser.toKey()];v||(v=new nt(ke)),v=v.insert(m,g),h.Au[h.currentUser.toKey()]=v}(s,o.batchId,t),await Ka(s,o.changes),await hc(s.remoteStore)}catch(o){const u=ff(o,"Failed to persist write");t.reject(u)}}async function Tv(i,e){const t=Te(i);try{const s=await bS(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Eu.get(u);h&&(ze(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.cu=!0:o.modifiedDocuments.size>0?ze(h.cu,14607):o.removedDocuments.size>0&&(ze(h.cu,42227),h.cu=!1))}),await Ka(t,s,e)}catch(s){await To(s)}}function ry(i,e,t){const s=Te(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.hu.forEach((u,h)=>{const m=h.view.Fa(e);m.snapshot&&o.push(m.snapshot)}),function(h,m){const g=Te(h);g.onlineState=m;let v=!1;g.queries.forEach((E,A)=>{for(const R of A.Sa)R.Fa(m)&&(v=!0)}),v&&pf(g)}(s.eventManager,e),o.length&&s.lu.Y_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function kA(i,e,t){const s=Te(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),u=o&&o.key;if(u){let h=new nt(de.comparator);h=h.insert(u,Ft.newNoDocument(u,Ee.min()));const m=De().add(u),g=new lc(Ee.min(),new Map,new nt(ke),h,m);await Tv(s,g),s.Iu=s.Iu.remove(u),s.Eu.delete(e),gf(s)}else await kd(s.localStore,e,!1).then(()=>Nd(s,e,t)).catch(To)}async function PA(i,e){const t=Te(i),s=e.batch.batchId;try{const o=await MS(t.localStore,e);Sv(t,s,null),Iv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Ka(t,o)}catch(o){await To(o)}}async function xA(i,e,t){const s=Te(i);try{const o=await function(h,m){const g=Te(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",v=>{let E;return g.mutationQueue.lookupMutationBatch(v,m).next(A=>(ze(A!==null,37113),E=A.keys(),g.mutationQueue.removeMutationBatch(v,A))).next(()=>g.mutationQueue.performConsistencyCheck(v)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(v,E,m)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,E)).next(()=>g.localDocuments.getDocuments(v,E))})}(s.localStore,e);Sv(s,e,t),Iv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Ka(s,o)}catch(o){await To(o)}}function Iv(i,e){(i.Ru.get(e)||[]).forEach(t=>{t.resolve()}),i.Ru.delete(e)}function Sv(i,e,t){const s=Te(i);let o=s.Au[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Au[s.currentUser.toKey()]=o}}function Nd(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Pu.get(e))i.hu.delete(s),t&&i.lu.gu(s,t);i.Pu.delete(e),i.isPrimaryClient&&i.du.Hr(e).forEach(s=>{i.du.containsKey(s)||Av(i,s)})}function Av(i,e){i.Tu.delete(e.path.canonicalString());const t=i.Iu.get(e);t!==null&&(lf(i.remoteStore,t),i.Iu=i.Iu.remove(e),i.Eu.delete(t),gf(i))}function iy(i,e,t){for(const s of t)s instanceof vv?(i.du.addReference(s.key,e),NA(i,s)):s instanceof wv?(ne(mf,"Document no longer in limbo: "+s.key),i.du.removeReference(s.key,e),i.du.containsKey(s.key)||Av(i,s.key)):_e(19791,{pu:s})}function NA(i,e){const t=e.key,s=t.path.canonicalString();i.Iu.get(t)||i.Tu.has(s)||(ne(mf,"New document in limbo: "+t),i.Tu.add(s),gf(i))}function gf(i){for(;i.Tu.size>0&&i.Iu.size<i.maxConcurrentLimboResolutions;){const e=i.Tu.values().next().value;i.Tu.delete(e);const t=new de(Ye.fromString(e)),s=i.Vu.next();i.Eu.set(s,new wA(t)),i.Iu=i.Iu.insert(t,s),fv(i.remoteStore,new si(Zn(Jd(t.path)),s,"TargetPurposeLimboResolution",ec.le))}}async function Ka(i,e,t){const s=Te(i),o=[],u=[],h=[];s.hu.isEmpty()||(s.hu.forEach((m,g)=>{h.push(s.fu(g,e,t).then(v=>{var E;if((v||t)&&s.isPrimaryClient){const A=v?!v.fromCache:(E=t?.targetChanges.get(g.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(g.targetId,A?"current":"not-current")}if(v){o.push(v);const A=of.Rs(g.targetId,v);u.push(A)}}))}),await Promise.all(h),s.lu.Y_(o),await async function(g,v){const E=Te(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>$.forEach(v,R=>$.forEach(R.ds,j=>E.persistence.referenceDelegate.addReference(A,R.targetId,j)).next(()=>$.forEach(R.As,j=>E.persistence.referenceDelegate.removeReference(A,R.targetId,j)))))}catch(A){if(!Io(A))throw A;ne(af,"Failed to update sequence numbers: "+A)}for(const A of v){const R=A.targetId;if(!A.fromCache){const j=E.xs.get(R),K=j.snapshotVersion,X=j.withLastLimboFreeSnapshotVersion(K);E.xs=E.xs.insert(R,X)}}}(s.localStore,u))}async function DA(i,e){const t=Te(i);if(!t.currentUser.isEqual(e)){ne(mf,"User change. New user:",e.toKey());const s=await uv(t.localStore,e);t.currentUser=e,function(u,h){u.Ru.forEach(m=>{m.forEach(g=>{g.reject(new se(q.CANCELLED,h))})}),u.Ru.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ka(t,s.ks)}}function VA(i,e){const t=Te(i),s=t.Eu.get(e);if(s&&s.cu)return De().add(s.key);{let o=De();const u=t.Pu.get(e);if(!u)return o;for(const h of u){const m=t.hu.get(h);o=o.unionWith(m.view.eu)}return o}}function Cv(i){const e=Te(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=Tv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=VA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kA.bind(null,e),e.lu.Y_=mA.bind(null,e.eventManager),e.lu.gu=gA.bind(null,e.eventManager),e}function OA(i){const e=Te(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=PA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xA.bind(null,e),e}class Gu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=uc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,t){return null}Cu(e,t){return null}Du(e){return LS(this.persistence,new DS,e.initialUser,this.serializer)}Su(e){return new lv(sf.fi,this.serializer)}bu(e){return new BS}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Gu.provider={build:()=>new Gu};class LA extends Gu{constructor(e){super(),this.cacheSizeBytes=e}vu(e,t){ze(this.persistence.referenceDelegate instanceof qu,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new yS(s,e.asyncQueue,t)}Su(e){const t=this.cacheSizeBytes!==void 0?Jt.withCacheSize(this.cacheSizeBytes):Jt.DEFAULT;return new lv(s=>qu.fi(s,t),this.serializer)}}class Dd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ry(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=DA.bind(null,this.syncEngine),await cA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new dA}()}createDatastore(e){const t=uc(e.databaseInfo.databaseId),s=function(u){return new GS(u)}(e.databaseInfo);return function(u,h,m,g){return new XS(u,h,m,g)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,m){return new ZS(s,o,u,h,m)}(this.localStore,this.datastore,e.asyncQueue,t=>ry(this.syncEngine,t,0),function(){return Xg.C()?new Xg:new $S}())}createSyncEngine(e,t){return function(o,u,h,m,g,v,E){const A=new EA(o,u,h,m,g,v);return E&&(A.mu=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=Te(o);ne(ns,"RemoteStore shutting down."),u.da.add(5),await Ga(u),u.Ra.shutdown(),u.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Dd.provider={build:()=>new Dd};/**
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
 */class MA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):Cr("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const _i="FirestoreClient";class bA{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=bt.UNAUTHENTICATED,this.clientId=E_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{ne(_i,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(ne(_i,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=ff(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function id(i,e){i.asyncQueue.verifyOperationInProgress(),ne(_i,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async o=>{s.isEqual(o)||(await uv(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function sy(i,e){i.asyncQueue.verifyOperationInProgress();const t=await FA(i);ne(_i,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>Zg(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,o)=>Zg(e.remoteStore,o)),i._onlineComponents=e}async function FA(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ne(_i,"Using user provided OfflineComponentProvider");try{await id(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===q.FAILED_PRECONDITION||o.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;co("Error using user provided cache. Falling back to memory cache: "+t),await id(i,new Gu)}}else ne(_i,"Using default OfflineComponentProvider"),await id(i,new LA(void 0));return i._offlineComponents}async function Rv(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ne(_i,"Using user provided OnlineComponentProvider"),await sy(i,i._uninitializedComponentsProvider._online)):(ne(_i,"Using default OnlineComponentProvider"),await sy(i,new Dd))),i._onlineComponents}function UA(i){return Rv(i).then(e=>e.syncEngine)}async function oy(i){const e=await Rv(i),t=e.eventManager;return t.onListen=TA.bind(null,e.syncEngine),t.onUnlisten=AA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=IA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=CA.bind(null,e.syncEngine),t}/**
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
 */function kv(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const ay=new Map;/**
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
 */function Pv(i,e,t){if(!t)throw new se(q.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function jA(i,e,t,s){if(e===!0&&s===!0)throw new se(q.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function ly(i){if(!de.isDocumentKey(i))throw new se(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function uy(i){if(de.isDocumentKey(i))throw new se(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function dc(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":_e(12329,{type:typeof i})}function Tr(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new se(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=dc(i);throw new se(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */const xv="firestore.googleapis.com",cy=!0;class hy{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new se(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=xv,this.ssl=cy}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:cy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=av;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<mS)throw new se(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}jA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kv((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new se(q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new se(q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new se(q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new WI;switch(s.type){case"firstParty":return new YI(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new se(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=ay.get(t);s&&(ne("ComponentProvider","Removing Datastore"),ay.delete(t),s.terminate())}(this),Promise.resolve()}}function zA(i,e,t,s={}){var o;i=Tr(i,fc);const u=_o(e),h=i._getSettings(),m=Object.assign(Object.assign({},h),{emulatorOptions:i._getEmulatorOptions()}),g=`${e}:${t}`;u&&(Cy(`https://${g}`),Ry("Firestore",!0)),h.host!==xv&&h.host!==g&&co("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const v=Object.assign(Object.assign({},h),{host:g,ssl:u,emulatorOptions:s});if(!Ji(v,m)&&(i._setSettings(v),s.mockUserToken)){let E,A;if(typeof s.mockUserToken=="string")E=s.mockUserToken,A=bt.MOCK_USER;else{E=yw(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const R=s.mockUserToken.sub||s.mockUserToken.user_id;if(!R)throw new se(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new bt(R)}i._authCredentials=new GI(new v_(E,A))}}/**
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
 */class Ao{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ao(this.firestore,e,this._query)}}class tn{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tn(this.firestore,e,this._key)}}class hi extends Ao{constructor(e,t,s){super(e,t,Jd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new tn(this.firestore,null,new de(e))}withConverter(e){return new hi(this.firestore,e,this._path)}}function sd(i,e,...t){if(i=_t(i),Pv("collection","path",e),i instanceof fc){const s=Ye.fromString(e,...t);return uy(s),new hi(i,null,s)}{if(!(i instanceof tn||i instanceof hi))throw new se(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ye.fromString(e,...t));return uy(s),new hi(i.firestore,null,s)}}function ro(i,e,...t){if(i=_t(i),arguments.length===1&&(e=E_.newId()),Pv("doc","path",e),i instanceof fc){const s=Ye.fromString(e,...t);return ly(s),new tn(i,null,new de(s))}{if(!(i instanceof tn||i instanceof hi))throw new se(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ye.fromString(e,...t));return ly(s),new tn(i.firestore,i instanceof hi?i.converter:null,new de(s))}}/**
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
 */const dy="AsyncQueue";class fy{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new hv(this,"async_queue_retry"),this.rc=()=>{const s=rd();s&&ne(dy,"Visibility state changed to "+s.visibilityState),this.x_.b_()},this.sc=e;const t=rd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const t=rd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const t=new Xi;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!Io(e))throw e;ne(dy,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const t=this.sc.then(()=>(this.ec=!0,e().catch(s=>{throw this.Xu=s,this.ec=!1,Cr("INTERNAL UNHANDLED ERROR: ",py(s)),s}).then(s=>(this.ec=!1,s))));return this.sc=t,t}enqueueAfterDelay(e,t,s){this.oc(),this.nc.indexOf(e)>-1&&(t=0);const o=df.createAndSchedule(this,e,t,s,u=>this.uc(u));return this.Zu.push(o),o}oc(){this.Xu&&_e(47125,{cc:py(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const t of this.Zu)if(t.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Zu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const t=this.Zu.indexOf(e);this.Zu.splice(t,1)}}function py(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}/**
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
 */function my(i){return function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1}(i,["next","error","complete"])}class rs extends fc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new fy,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new fy(e),this._firestoreClient=void 0,await e}}}function BA(i,e){const t=typeof i=="object"?i:Ny(),s=typeof i=="string"?i:Fu,o=bd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=mw("firestore");u&&zA(o,...u)}return o}function yf(i){if(i._terminated)throw new se(q.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||$A(i),i._firestoreClient}function $A(i){var e,t,s;const o=i._freezeSettings(),u=function(m,g,v,E){return new h1(m,g,v,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,kv(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new bA(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&function(m){const g=m?._online.build();return{_offline:m?._offline.build(g),_online:g}}(i._componentsProvider))}/**
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
 */class yo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yo(Nt.fromBase64String(e))}catch(t){throw new se(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new yo(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Qa{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new se(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class _f{constructor(e){this._methodName=e}}/**
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
 */class vf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new se(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new se(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}}/**
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
 */class wf{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
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
 */const HA=/^__.*__$/;class qA{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new wi(e,this.data,this.fieldMask,t,this.fieldTransforms):new qa(e,this.data,t,this.fieldTransforms)}}class Nv{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new wi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Dv(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{Ic:i})}}class Ef{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ec(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new Ef(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.dc({path:s,Rc:!1});return o.Vc(e),o}mc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.dc({path:s,Rc:!1});return o.Ec(),o}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return Ku(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(Dv(this.Ic)&&HA.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class WA{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||uc(e)}bc(e,t,s,o=!1){return new Ef({Ic:e,methodName:t,wc:s,path:xt.emptyPath(),Rc:!1,yc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function pc(i){const e=i._freezeSettings(),t=uc(i._databaseId);return new WA(i._databaseId,!!e.ignoreUndefinedProperties,t)}function Vv(i,e,t,s,o,u={}){const h=i.bc(u.merge||u.mergeFields?2:0,e,t,o);Tf("Data must be an object, but it was:",h,s);const m=Mv(s,h);let g,v;if(u.merge)g=new cn(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const E=[];for(const A of u.mergeFields){const R=Vd(e,A,t);if(!h.contains(R))throw new se(q.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);Fv(E,R)||E.push(R)}g=new cn(E),v=h.fieldTransforms.filter(A=>g.covers(A.field))}else g=null,v=h.fieldTransforms;return new qA(new Zt(m),g,v)}class mc extends _f{_toFieldTransform(e){if(e.Ic!==2)throw e.Ic===1?e.gc(`${this._methodName}() can only appear at the top level of your update data`):e.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof mc}}function Ov(i,e,t,s){const o=i.bc(1,e,t);Tf("Data must be an object, but it was:",o,s);const u=[],h=Zt.empty();vi(s,(g,v)=>{const E=If(e,g,t);v=_t(v);const A=o.mc(E);if(v instanceof mc)u.push(E);else{const R=Ya(v,A);R!=null&&(u.push(E),h.set(E,R))}});const m=new cn(u);return new Nv(h,m,o.fieldTransforms)}function Lv(i,e,t,s,o,u){const h=i.bc(1,e,t),m=[Vd(e,s,t)],g=[o];if(u.length%2!=0)throw new se(q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<u.length;R+=2)m.push(Vd(e,u[R])),g.push(u[R+1]);const v=[],E=Zt.empty();for(let R=m.length-1;R>=0;--R)if(!Fv(v,m[R])){const j=m[R];let K=g[R];K=_t(K);const X=h.mc(j);if(K instanceof mc)v.push(j);else{const z=Ya(K,X);z!=null&&(v.push(j),E.set(j,z))}}const A=new cn(v);return new Nv(E,A,h.fieldTransforms)}function GA(i,e,t,s=!1){return Ya(t,i.bc(s?4:3,e))}function Ya(i,e){if(bv(i=_t(i)))return Tf("Unsupported field value:",e,i),Mv(i,e);if(i instanceof _f)return function(s,o){if(!Dv(o.Ic))throw o.gc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.gc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const m of s){let g=Ya(m,o.fc(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}}(i,e)}return function(s,o){if((s=_t(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return O1(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=gt.fromDate(s);return{timestampValue:Hu(o.serializer,u)}}if(s instanceof gt){const u=new gt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Hu(o.serializer,u)}}if(s instanceof vf)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof yo)return{bytesValue:ev(o.serializer,s._byteString)};if(s instanceof tn){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.gc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:nf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof wf)return function(h,m){return{mapValue:{fields:{[P_]:{stringValue:x_},[Uu]:{arrayValue:{values:h.toArray().map(v=>{if(typeof v!="number")throw m.gc("VectorValues must only contain numeric values.");return Zd(m.serializer,v)})}}}}}}(s,o);throw o.gc(`Unsupported field value: ${dc(s)}`)}(i,e)}function Mv(i,e){const t={};return I_(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vi(i,(s,o)=>{const u=Ya(o,e.Ac(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function bv(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof gt||i instanceof vf||i instanceof yo||i instanceof tn||i instanceof _f||i instanceof wf)}function Tf(i,e,t){if(!bv(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=dc(t);throw s==="an object"?e.gc(i+" a custom object"):e.gc(i+" "+s)}}function Vd(i,e,t){if((e=_t(e))instanceof Qa)return e._internalPath;if(typeof e=="string")return If(i,e);throw Ku("Field path arguments must be of type string or ",i,!1,void 0,t)}const KA=new RegExp("[~\\*/\\[\\]]");function If(i,e,t){if(e.search(KA)>=0)throw Ku(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Qa(...e.split("."))._internalPath}catch{throw Ku(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Ku(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new se(q.INVALID_ARGUMENT,m+i+g)}function Fv(i,e){return i.some(t=>t.isEqual(e))}/**
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
 */class Uv{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new tn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new QA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(jv("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class QA extends Uv{data(){return super.data()}}function jv(i,e){return typeof e=="string"?If(i,e):e instanceof Qa?e._internalPath:e._delegate._internalPath}/**
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
 */function YA(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new se(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Sf{}class XA extends Sf{}function JA(i,e,...t){let s=[];e instanceof Sf&&s.push(e),s=s.concat(t),function(u){const h=u.filter(g=>g instanceof Cf).length,m=u.filter(g=>g instanceof Af).length;if(h>1||h>0&&m>0)throw new se(q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)i=o._apply(i);return i}class Af extends XA{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Af(e,t,s)}_apply(e){const t=this._parse(e);return zv(e._query,t),new Ao(e.firestore,e.converter,Td(e._query,t))}_parse(e){const t=pc(e.firestore);return function(u,h,m,g,v,E,A){let R;if(v.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new se(q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){yy(A,E);const K=[];for(const X of A)K.push(gy(g,u,X));R={arrayValue:{values:K}}}else R=gy(g,u,A)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||yy(A,E),R=GA(m,h,A,E==="in"||E==="not-in");return ct.create(v,E,R)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Cf extends Sf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Cf(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:Fn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,u){let h=o;const m=u.getFlattenedFilters();for(const g of m)zv(h,g),h=Td(h,g)}(e._query,t),new Ao(e.firestore,e.converter,Td(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function gy(i,e,t){if(typeof(t=_t(t))=="string"){if(t==="")throw new se(q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!F_(e)&&t.indexOf("/")!==-1)throw new se(q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Ye.fromString(t));if(!de.isDocumentKey(s))throw new se(q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Pg(i,new de(s))}if(t instanceof tn)return Pg(i,t._key);throw new se(q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${dc(t)}.`)}function yy(i,e){if(!Array.isArray(i)||i.length===0)throw new se(q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function zv(i,e){const t=function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null}(i.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new se(q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new se(q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class ZA{convertValue(e,t="none"){switch(gi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(mi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return vi(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[Uu].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>ot(h.doubleValue));return new wf(u)}convertGeoPoint(e){return new vf(ot(e.latitude),ot(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=nc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Oa(e));default:return null}}convertTimestamp(e){const t=pi(e);return new gt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ye.fromString(e);ze(ov(s),9688,{name:e});const o=new La(s.get(1),s.get(3)),u=new de(s.popFirst(5));return o.isEqual(t)||Cr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function Bv(i,e,t){let s;return s=i?t&&(t.merge||t.mergeFields)?i.toFirestore(e,t):i.toFirestore(e):e,s}/**
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
 */class Sa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $v extends Uv{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ku(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(jv("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class ku extends $v{data(e={}){return super.data(e)}}class eC{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Sa(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new ku(this._firestore,this._userDataWriter,s.key,s,new Sa(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new se(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(m=>{const g=new ku(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Sa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const g=new ku(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Sa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,E=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),E=h.indexOf(m.doc.key)),{type:tC(m.type),doc:g,oldIndex:v,newIndex:E}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function tC(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:i})}}class Hv extends ZA{constructor(e){super(),this.firestore=e}convertBytes(e){return new yo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new tn(this.firestore,null,t)}}function nC(i,e,t,...s){i=Tr(i,tn);const o=Tr(i.firestore,rs),u=pc(o);let h;return h=typeof(e=_t(e))=="string"||e instanceof Qa?Lv(u,"updateDoc",i._key,e,t,s):Ov(u,"updateDoc",i._key,e),gc(o,[h.toMutation(i._key,en.exists(!0))])}function rC(i){return gc(Tr(i.firestore,rs),[new ac(i._key,en.none())])}function iC(i,e){const t=Tr(i.firestore,rs),s=ro(i),o=Bv(i.converter,e);return gc(t,[Vv(pc(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,en.exists(!1))]).then(()=>s)}function sC(i,...e){var t,s,o;i=_t(i);let u={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||my(e[h])||(u=e[h],h++);const m={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if(my(e[h])){const A=e[h];e[h]=(t=A.next)===null||t===void 0?void 0:t.bind(A),e[h+1]=(s=A.error)===null||s===void 0?void 0:s.bind(A),e[h+2]=(o=A.complete)===null||o===void 0?void 0:o.bind(A)}let g,v,E;if(i instanceof tn)v=Tr(i.firestore,rs),E=Jd(i._key.path),g={next:A=>{e[h]&&e[h](oC(v,i,A))},error:e[h+1],complete:e[h+2]};else{const A=Tr(i,Ao);v=Tr(A.firestore,rs),E=A._query;const R=new Hv(v);g={next:j=>{e[h]&&e[h](new eC(v,R,A,j))},error:e[h+1],complete:e[h+2]},YA(i._query)}return function(R,j,K,X){const z=new MA(X),ge=new yA(j,z,K);return R.asyncQueue.enqueueAndForget(async()=>fA(await oy(R),ge)),()=>{z.xu(),R.asyncQueue.enqueueAndForget(async()=>pA(await oy(R),ge))}}(yf(v),E,m,g)}function gc(i,e){return function(s,o){const u=new Xi;return s.asyncQueue.enqueueAndForget(async()=>RA(await UA(s),o,u)),u.promise}(yf(i),e)}function oC(i,e,t){const s=t.docs.get(e._key),o=new Hv(i);return new $v(i,o,e._key,s,new Sa(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class aC{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=pc(e)}set(e,t,s){this._verifyNotCommitted();const o=od(e,this._firestore),u=Bv(o.converter,t,s),h=Vv(this._dataReader,"WriteBatch.set",o._key,u,o.converter!==null,s);return this._mutations.push(h.toMutation(o._key,en.none())),this}update(e,t,s,...o){this._verifyNotCommitted();const u=od(e,this._firestore);let h;return h=typeof(t=_t(t))=="string"||t instanceof Qa?Lv(this._dataReader,"WriteBatch.update",u._key,t,s,o):Ov(this._dataReader,"WriteBatch.update",u._key,t),this._mutations.push(h.toMutation(u._key,en.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=od(e,this._firestore);return this._mutations=this._mutations.concat(new ac(t._key,en.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new se(q.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function od(i,e){if((i=_t(i)).firestore!==e)throw new se(q.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return i}/**
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
 */function ad(i){return yf(i=Tr(i,rs)),new aC(i,e=>gc(i,e))}(function(e,t=!0){(function(o){Eo=o})(vo),uo(new Zi("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new rs(new KI(s.getProvider("auth-internal")),new XI(h,s.getProvider("app-check-internal")),function(v,E){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new se(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new La(v.options.projectId,E)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),li(yg,_g,e),li(yg,_g,"esm2017")})();const lC={apiKey:"AIzaSyBRQWdE55HMYzJ0RDsA-jl7nbesYPdhAL8",authDomain:"quality-floor-checklist.firebaseapp.com",projectId:"quality-floor-checklist",storageBucket:"quality-floor-checklist.appspot.com",messagingSenderId:"1027144107541",appId:"1:1027144107541:web:7498803d7861c3b783701c",measurementId:"G-C5ECWEVGW1"},Js="quality-floor-checklist";function uC(){const{isDarkMode:i,toggleDarkMode:e}=sw(),[t,s]=tt.useState([]),[o,u]=tt.useState(""),[h,m]=tt.useState(null),[g,v]=tt.useState(null),[E,A]=tt.useState(!0),[R,j]=tt.useState(!1),[K,X]=tt.useState(null),[z,ge]=tt.useState("");tt.useEffect(()=>{try{const P=xy(lC),T=HI(P);v(BA(P));const he=VT(T,async Se=>{if(Se)m(Se.uid),j(!0);else try{await RT(T)}catch(Ae){console.error("Error signing in anonymously:",Ae)}});return()=>he()}catch(P){console.error("Firebase initialization error:",P)}},[]);const ue=tt.useCallback(async(P,T)=>{const he=[{category:"Code Review Standards",text:"Code is reviewed by at least one other team member before merging"},{category:"Code Review Standards",text:"Pull requests include clear descriptions of changes and reasoning"},{category:"Code Review Standards",text:"Code follows established style guides and linting rules"},{category:"Code Review Standards",text:"No commented-out code or debug statements in production"},{category:"Testing Standards",text:"All new features have corresponding unit tests with >80% coverage"},{category:"Testing Standards",text:"Critical user paths have end-to-end tests"},{category:"Testing Standards",text:"Tests are run and passing before deployment"},{category:"Testing Standards",text:"Edge cases and error scenarios are tested"},{category:"Accessibility Standards",text:"Accessibility (WCAG 2.1 AA) standards are met"},{category:"Accessibility Standards",text:"All interactive elements are keyboard navigable"},{category:"Accessibility Standards",text:"Images have descriptive alt text"},{category:"Accessibility Standards",text:"Color contrast ratios meet minimum requirements (4.5:1)"},{category:"Accessibility Standards",text:"Screen reader testing completed for key features"},{category:"Performance Standards",text:"Performance metrics (LCP, FID, CLS) are within budget"},{category:"Performance Standards",text:"Page load time is under 3 seconds on 3G"},{category:"Performance Standards",text:"Images are optimized and properly sized"},{category:"Performance Standards",text:"Unnecessary dependencies are removed"},{category:"Performance Standards",text:"Bundle size is monitored and kept minimal"},{category:"Security Standards",text:"Security vulnerabilities are scanned and addressed"},{category:"Security Standards",text:"User input is validated and sanitized"},{category:"Security Standards",text:"Authentication and authorization are properly implemented"},{category:"Security Standards",text:"Sensitive data is encrypted in transit and at rest"},{category:"Design Standards",text:"Design system components are used consistently"},{category:"Design Standards",text:"UI matches approved design specifications and mockups"},{category:"Design Standards",text:"Responsive design works across mobile, tablet, and desktop"},{category:"Design Standards",text:"Visual hierarchy and spacing follow design guidelines"},{category:"Design Standards",text:"Brand colors, typography, and assets are used correctly"},{category:"Documentation Standards",text:"README is updated with setup and deployment instructions"},{category:"Documentation Standards",text:"API endpoints are documented"},{category:"Documentation Standards",text:"Complex logic includes inline comments"},{category:"Documentation Standards",text:"Breaking changes are clearly communicated to the team"}],Se=ad(P),Ae=sd(P,T);he.forEach(fe=>{const W=ro(Ae);Se.set(W,{text:fe.text,category:fe.category,createdAt:new Date,creatorId:"system"})});try{await Se.commit()}catch(fe){console.error("Error adding starter items: ",fe)}},[]);tt.useEffect(()=>{if(!R||!g)return;const P=`artifacts/${Js}/public/data/todos`,T=sd(g,P),he=JA(T);let Se=!1;const Ae=sC(he,fe=>{if(fe.empty&&!Se){Se=!0,ue(g,P);return}const W=fe.docs.map(re=>({id:re.id,...re.data()}));s(W)},fe=>{console.error("Error listening to Firestore: ",fe)});return()=>Ae()},[R,g,ue]);const ye=tt.useCallback(async()=>{if(o.trim()===""||!h||!g)return;const P=`artifacts/${Js}/public/data/todos`;try{await iC(sd(g,P),{text:o.trim(),createdAt:new Date,creatorId:h}),u("")}catch(T){console.error("Error adding document: ",T)}},[o,h,g]),Ie=tt.useCallback(async P=>{if(!g)return;const T=`artifacts/${Js}/public/data/todos/${P}`;try{await rC(ro(g,T))}catch(he){console.error("Error removing document: ",he)}},[g]),$e=tt.useCallback(async(P,T)=>{if(!g||!T.trim())return;const he=`artifacts/${Js}/public/data/todos/${P}`;try{const Se=ro(g,he);await nC(Se,{text:T.trim(),updatedAt:new Date}),X(null),ge("")}catch(Se){console.error("Error updating document: ",Se)}},[g]),Ce=tt.useCallback((P,T)=>{X(P),ge(T)},[]),D=tt.useCallback(()=>{X(null),ge("")},[]),S=()=>{if(!window.jspdf){console.error("jsPDF library not found.");return}const{jsPDF:P}=window.jspdf,T=new P;T.setFontSize(18),T.text("Quality Floor Checklist",14,22),T.setFontSize(11),t.forEach((he,Se)=>{T.text(`- ${he.text}`,14,30+Se*10)}),T.save("quality-checklist.pdf")},C=()=>{let P=`data:text/csv;charset=utf-8,Quality Standard\r
`;t.forEach(Se=>{const Ae=`"${Se.text.replace(/"/g,'""')}"`;P+=Ae+`\r
`});const T=encodeURI(P),he=document.createElement("a");he.setAttribute("href",T),he.setAttribute("download","quality-checklist.csv"),document.body.appendChild(he),he.click(),document.body.removeChild(he)},x=tt.useCallback(async()=>{if(!g||!window.confirm("This will permanently delete ALL items from the database. This action cannot be undone. Are you sure?"))return;const P=`artifacts/${Js}/public/data/todos`;try{if(t.length>0){const T=[];for(let he=0;he<t.length;he+=500){const Se=ad(g);t.slice(he,he+500).forEach(fe=>{const W=ro(g,`${P}/${fe.id}`);Se.delete(W)}),T.push(Se.commit())}await Promise.all(T)}}catch(T){console.error("Error clearing all items: ",T),alert("Failed to clear items. Please try again.")}},[g,t]),V=tt.useCallback(async()=>{if(!g||!window.confirm("This will delete all current items and load the comprehensive default checklist. Are you sure?"))return;const P=`artifacts/${Js}/public/data/todos`;try{if(t.length>0){const T=[];for(let he=0;he<t.length;he+=500){const Se=ad(g);t.slice(he,he+500).forEach(fe=>{const W=ro(g,`${P}/${fe.id}`);Se.delete(W)}),T.push(Se.commit())}await Promise.all(T)}await new Promise(T=>setTimeout(T,500)),await ue(g,P)}catch(T){console.error("Error clearing and resetting: ",T),alert("Failed to reset checklist. Please try again.")}},[g,t,ue]);return E?B.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50",children:B.jsxs("div",{className:`${i?"bg-gray-800":"bg-white"} p-8 rounded-lg max-w-md w-[90%] text-left`,children:[B.jsx("h2",{className:`text-2xl font-bold mb-4 ${i?"text-white":"text-gray-900"}`,children:"Terms of Use & Disclaimer"}),B.jsxs("div",{className:`space-y-3 text-sm ${i?"text-gray-300":"text-gray-700"} mb-6`,children:[B.jsx("p",{children:"Welcome to the Quality Floor Checklist Builder. Before you begin, please read the following terms carefully:"}),B.jsxs("ol",{className:"list-decimal list-inside space-y-2",children:[B.jsxs("li",{children:[B.jsx("strong",{children:"Public and Collaborative:"})," All content, including any checklist items you add or delete, is public and will be visible to anyone who visits this page. Do not enter any private, sensitive, or confidential information."]}),B.jsxs("li",{children:[B.jsx("strong",{children:"No Guarantee of Privacy:"})," There is no expectation of privacy for any data entered into this application. All data is stored in a shared database."]}),B.jsxs("li",{children:[B.jsx("strong",{children:'"As-Is" Service:'}),' This tool is provided "as-is" without any warranties. We are not responsible for the availability of the service or the loss of any data you enter.']}),B.jsxs("li",{children:[B.jsx("strong",{children:"User Responsibility:"})," You are solely responsible for the content you contribute. Do not post anything that is unlawful, harmful, or infringes on the rights of others."]})]}),B.jsx("p",{className:`font-semibold ${i?"text-gray-200":"text-gray-800"}`,children:'By clicking "Acknowledge & Continue," you confirm that you have read, understood, and agree to be bound by these terms.'})]}),B.jsx("button",{onClick:()=>A(!1),className:"w-full bg-primary hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-lg transition",children:"Acknowledge & Continue"})]})}):B.jsxs("div",{className:`min-h-screen ${i?"dark bg-dark-bg":"bg-gray-50"}`,children:[B.jsx("header",{className:`${i?"bg-gray-800 border-gray-700":"bg-white border-gray-200"} border-b`,children:B.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:B.jsxs("div",{className:"flex items-center justify-between",children:[B.jsxs("div",{children:[B.jsx("h1",{className:`text-2xl font-bold ${i?"text-white":"text-gray-900"}`,children:"Quality Floor Checklist"}),B.jsx("p",{className:`text-sm ${i?"text-gray-400":"text-gray-600"}`,children:"A collaborative list of non-negotiable minimums for our projects"})]}),B.jsx("button",{onClick:e,className:`p-2 rounded-lg ${i?"bg-gray-700 text-gray-300 hover:bg-gray-600":"bg-gray-100 text-gray-700 hover:bg-gray-200"} transition-colors`,"aria-label":"Toggle dark mode",children:i?B.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:B.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):B.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:B.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})]})})}),B.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[t.length===0&&R&&B.jsxs("div",{className:"text-center py-16 mb-8",children:[B.jsx("div",{className:`inline-flex items-center justify-center w-16 h-16 rounded-full ${i?"bg-gray-800":"bg-gray-100"} mb-4`,children:B.jsx("svg",{className:`w-8 h-8 ${i?"text-secondary":"text-primary"}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:B.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),B.jsx("h2",{className:`text-3xl font-bold mb-2 ${i?"text-white":"text-gray-900"}`,children:"Welcome to Quality Floor Checklist"}),B.jsx("p",{className:`text-lg mb-8 ${i?"text-gray-400":"text-gray-600"}`,children:"Define and maintain your team's quality standards"}),B.jsxs("div",{className:"mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left",children:[B.jsxs("div",{className:`p-6 rounded-lg ${i?"bg-gray-800":"bg-white"} shadow-md`,children:[B.jsx("div",{className:`w-10 h-10 rounded-lg ${i?"bg-gray-700":"bg-primary bg-opacity-10"} flex items-center justify-center mb-3`,children:B.jsx("svg",{className:`w-6 h-6 ${i?"text-secondary":"text-primary"}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:B.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"})})}),B.jsx("h3",{className:`font-semibold mb-2 ${i?"text-white":"text-gray-900"}`,children:"Collaborative"}),B.jsx("p",{className:`text-sm ${i?"text-gray-400":"text-gray-600"}`,children:"Share with your team and build standards together in real-time"})]}),B.jsxs("div",{className:`p-6 rounded-lg ${i?"bg-gray-800":"bg-white"} shadow-md`,children:[B.jsx("div",{className:`w-10 h-10 rounded-lg ${i?"bg-gray-700":"bg-primary bg-opacity-10"} flex items-center justify-center mb-3`,children:B.jsx("svg",{className:`w-6 h-6 ${i?"text-secondary":"text-primary"}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:B.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),B.jsx("h3",{className:`font-semibold mb-2 ${i?"text-white":"text-gray-900"}`,children:"Quality Standards"}),B.jsx("p",{className:`text-sm ${i?"text-gray-400":"text-gray-600"}`,children:"Define clear, non-negotiable minimums for your projects"})]}),B.jsxs("div",{className:`p-6 rounded-lg ${i?"bg-gray-800":"bg-white"} shadow-md`,children:[B.jsx("div",{className:`w-10 h-10 rounded-lg ${i?"bg-gray-700":"bg-primary bg-opacity-10"} flex items-center justify-center mb-3`,children:B.jsx("svg",{className:`w-6 h-6 ${i?"text-secondary":"text-primary"}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:B.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})})}),B.jsx("h3",{className:`font-semibold mb-2 ${i?"text-white":"text-gray-900"}`,children:"Export Options"}),B.jsx("p",{className:`text-sm ${i?"text-gray-400":"text-gray-600"}`,children:"Export to PDF or CSV for easy sharing and documentation"})]})]})]}),B.jsx("div",{className:`${i?"bg-gray-800":"bg-white"} rounded-lg shadow-lg p-6 mb-6`,children:B.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[B.jsx("input",{type:"text",value:o,onChange:P=>u(P.target.value),onKeyPress:P=>P.key==="Enter"&&ye(),className:`flex-grow p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${i?"bg-gray-700 border-gray-600 text-white placeholder-gray-400":"bg-white border-gray-300 text-gray-900"}`,placeholder:"Add a new quality standard..."}),B.jsx("button",{onClick:ye,className:"bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl",children:"Add Item"})]})}),B.jsxs("div",{className:"flex flex-wrap justify-center gap-4 mb-6",children:[B.jsx("button",{onClick:S,className:`font-semibold py-2 px-4 border rounded-lg shadow transition-colors ${i?"bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600":"bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"}`,children:"Export to PDF"}),B.jsx("button",{onClick:C,className:`font-semibold py-2 px-4 border rounded-lg shadow transition-colors ${i?"bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600":"bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"}`,children:"Export to CSV"}),B.jsxs("button",{onClick:V,className:`font-semibold py-2 px-4 border rounded-lg shadow transition-colors flex items-center gap-2 ${i?"bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600":"bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"}`,children:[B.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:B.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})}),"Load Comprehensive Defaults"]}),B.jsxs("button",{onClick:x,className:`font-semibold py-2 px-4 border rounded-lg shadow transition-colors flex items-center gap-2 ${i?"bg-red-900 text-red-200 border-red-700 hover:bg-red-800":"bg-red-50 text-red-700 border-red-300 hover:bg-red-100"}`,children:[B.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:B.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})}),"Clear All Items"]})]}),B.jsxs("div",{className:`${i?"bg-gray-800/70 border-gray-700":"bg-white/70 border-primary-main"} border-2 border-dashed rounded-lg p-4 mb-6`,children:[B.jsx("h3",{className:`font-bold text-lg mb-3 ${i?"text-white":"text-primary-dark"}`,children:"How to Use This Checklist"}),B.jsxs("div",{className:"space-y-4",children:[B.jsxs("div",{children:[B.jsx("h4",{className:`font-semibold ${i?"text-gray-200":"text-gray-800"}`,children:"Option 1: Collaborate on This Live Version"}),B.jsx("p",{className:`text-sm mt-1 ${i?"text-gray-400":"text-gray-700"}`,children:"Feel free to use this live, shared version. Simply copy the public URL of this page and send it to your teammates. Everyone with the link can edit this list in real-time."})]}),B.jsxs("div",{children:[B.jsx("h4",{className:`font-semibold ${i?"text-gray-200":"text-gray-800"}`,children:"Option 2: Deploy Your Own Private Version"}),B.jsx("p",{className:`text-sm mt-1 ${i?"text-gray-400":"text-gray-700"}`,children:"For a completely private checklist for your team, you can deploy your own copy of this application. This requires some technical setup (creating a free Firebase project and deploying the code to a service like Cloudflare Pages or Netlify)."})]})]})]}),h&&B.jsx("div",{className:`text-center my-4 p-2 rounded-lg ${i?"bg-gray-800/50":"bg-white/50"}`,children:B.jsxs("p",{className:`text-sm ${i?"text-gray-400":"text-gray-700"}`,children:["Your User ID (for reference): ",B.jsx("strong",{className:`font-mono ${i?"text-secondary":"text-primary-dark"}`,children:h})]})}),B.jsx("div",{className:"space-y-6",children:t.length>0?(()=>{const T=[...t].sort((Ae,fe)=>{const W=Ae.createdAt?.toMillis?Ae.createdAt.toMillis():new Date(Ae.createdAt).getTime(),re=fe.createdAt?.toMillis?fe.createdAt.toMillis():new Date(fe.createdAt).getTime();return W-re}).reduce((Ae,fe)=>{const W=fe.category||"Uncategorized";return Ae[W]||(Ae[W]=[]),Ae[W].push(fe),Ae},{}),he=["Code Review Standards","Testing Standards","Accessibility Standards","Performance Standards","Security Standards","Design Standards","Documentation Standards","Uncategorized"];return Object.entries(T).sort(([Ae],[fe])=>{const W=he.indexOf(Ae),re=he.indexOf(fe),ee=W===-1?he.length:W,O=re===-1?he.length:re;return ee-O}).map(([Ae,fe])=>B.jsxs("div",{className:"space-y-3",children:[B.jsxs("h3",{className:`text-lg font-bold flex items-center gap-2 ${i?"text-gray-300":"text-gray-700"}`,children:[B.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:B.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})}),Ae]}),B.jsx("div",{className:"space-y-2 ml-7",children:fe.map(W=>B.jsxs("div",{className:`flex items-center gap-3 p-3 rounded-lg shadow-sm transition-all ${i?"bg-gray-800 hover:bg-gray-750":"bg-white hover:bg-gray-50"}`,children:[B.jsx("div",{className:`w-2 h-2 rounded-full flex-shrink-0 ${i?"bg-secondary":"bg-primary"}`}),K===W.id?B.jsxs("div",{className:"flex-grow flex items-center gap-2",children:[B.jsx("input",{type:"text",value:z,onChange:re=>ge(re.target.value),onKeyPress:re=>{re.key==="Enter"&&$e(W.id,z),re.key==="Escape"&&D()},className:`flex-grow p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary ${i?"bg-gray-700 border-gray-600 text-white":"bg-white border-gray-300 text-gray-900"}`,autoFocus:!0}),B.jsx("button",{onClick:()=>$e(W.id,z),className:`p-2 rounded transition-colors ${i?"bg-green-900 text-green-200 hover:bg-green-800":"bg-green-100 text-green-700 hover:bg-green-200"}`,title:"Save",children:B.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:B.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),B.jsx("button",{onClick:D,className:`p-2 rounded transition-colors ${i?"bg-gray-700 text-gray-300 hover:bg-gray-600":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,title:"Cancel",children:B.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:B.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}):B.jsxs(B.Fragment,{children:[B.jsx("span",{className:`flex-grow ${i?"text-gray-200":"text-gray-900"}`,children:W.text}),B.jsxs("div",{className:"flex items-center gap-1 flex-shrink-0",children:[B.jsx("button",{onClick:()=>Ce(W.id,W.text),className:"p-1.5 rounded transition-colors",title:"Edit",children:B.jsx("svg",{className:`w-4 h-4 transition-colors ${i?"text-gray-500 hover:text-blue-400":"text-gray-400 hover:text-blue-600"}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:B.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})})}),B.jsx("button",{onClick:()=>Ie(W.id),className:"p-1.5 rounded transition-colors",title:"Delete",children:B.jsx("svg",{className:`w-4 h-4 transition-colors ${i?"text-gray-500 hover:text-red-400":"text-gray-400 hover:text-red-500"}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:B.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]})]})]},W.id))})]},Ae))})():B.jsx("p",{className:"text-center text-gray-500",children:R?"No quality standards added yet. Be the first!":"Loading checklist..."})})]})]})}function cC(){return B.jsx(ow,{children:B.jsx(uC,{})})}const hC=iw.createRoot(document.getElementById("root"));hC.render(B.jsx(X0.StrictMode,{children:B.jsx(cC,{})}));
