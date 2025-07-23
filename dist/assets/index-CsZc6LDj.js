(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function yy(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Uh={exports:{}},_a={},jh={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm;function HE(){if(xm)return Re;xm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),A=Symbol.iterator;function C(V){return V===null||typeof V!="object"?null:(V=A&&V[A]||V["@@iterator"],typeof V=="function"?V:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,Q={};function B(V,$,ce){this.props=V,this.context=$,this.refs=Q,this.updater=ce||j}B.prototype.isReactComponent={},B.prototype.setState=function(V,$){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,$,"setState")},B.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function ye(){}ye.prototype=B.prototype;function J(V,$,ce){this.props=V,this.context=$,this.refs=Q,this.updater=ce||j}var re=J.prototype=new ye;re.constructor=J,W(re,B.prototype),re.isPureReactComponent=!0;var ue=Array.isArray,Ce=Object.prototype.hasOwnProperty,Ee={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function I(V,$,ce){var Ie,Ae={},De=null,Me=null;if($!=null)for(Ie in $.ref!==void 0&&(Me=$.ref),$.key!==void 0&&(De=""+$.key),$)Ce.call($,Ie)&&!P.hasOwnProperty(Ie)&&(Ae[Ie]=$[Ie]);var be=arguments.length-2;if(be===1)Ae.children=ce;else if(1<be){for(var Be=Array(be),mt=0;mt<be;mt++)Be[mt]=arguments[mt+2];Ae.children=Be}if(V&&V.defaultProps)for(Ie in be=V.defaultProps,be)Ae[Ie]===void 0&&(Ae[Ie]=be[Ie]);return{$$typeof:i,type:V,key:De,ref:Me,props:Ae,_owner:Ee.current}}function R(V,$){return{$$typeof:i,type:V.type,key:$,ref:V.ref,props:V.props,_owner:V._owner}}function N(V){return typeof V=="object"&&V!==null&&V.$$typeof===i}function x(V){var $={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(ce){return $[ce]})}var O=/\/+/g;function S(V,$){return typeof V=="object"&&V!==null&&V.key!=null?x(""+V.key):$.toString(36)}function et(V,$,ce,Ie,Ae){var De=typeof V;(De==="undefined"||De==="boolean")&&(V=null);var Me=!1;if(V===null)Me=!0;else switch(De){case"string":case"number":Me=!0;break;case"object":switch(V.$$typeof){case i:case e:Me=!0}}if(Me)return Me=V,Ae=Ae(Me),V=Ie===""?"."+S(Me,0):Ie,ue(Ae)?(ce="",V!=null&&(ce=V.replace(O,"$&/")+"/"),et(Ae,$,ce,"",function(mt){return mt})):Ae!=null&&(N(Ae)&&(Ae=R(Ae,ce+(!Ae.key||Me&&Me.key===Ae.key?"":(""+Ae.key).replace(O,"$&/")+"/")+V)),$.push(Ae)),1;if(Me=0,Ie=Ie===""?".":Ie+":",ue(V))for(var be=0;be<V.length;be++){De=V[be];var Be=Ie+S(De,be);Me+=et(De,$,ce,Be,Ae)}else if(Be=C(V),typeof Be=="function")for(V=Be.call(V),be=0;!(De=V.next()).done;)De=De.value,Be=Ie+S(De,be++),Me+=et(De,$,ce,Be,Ae);else if(De==="object")throw $=String(V),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return Me}function Pt(V,$,ce){if(V==null)return V;var Ie=[],Ae=0;return et(V,Ie,"","",function(De){return $.call(ce,De,Ae++)}),Ie}function Nt(V){if(V._status===-1){var $=V._result;$=$(),$.then(function(ce){(V._status===0||V._status===-1)&&(V._status=1,V._result=ce)},function(ce){(V._status===0||V._status===-1)&&(V._status=2,V._result=ce)}),V._status===-1&&(V._status=0,V._result=$)}if(V._status===1)return V._result.default;throw V._result}var je={current:null},Z={transition:null},de={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:Z,ReactCurrentOwner:Ee};function te(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:Pt,forEach:function(V,$,ce){Pt(V,function(){$.apply(this,arguments)},ce)},count:function(V){var $=0;return Pt(V,function(){$++}),$},toArray:function(V){return Pt(V,function($){return $})||[]},only:function(V){if(!N(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Re.Component=B,Re.Fragment=t,Re.Profiler=o,Re.PureComponent=J,Re.StrictMode=s,Re.Suspense=y,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,Re.act=te,Re.cloneElement=function(V,$,ce){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Ie=W({},V.props),Ae=V.key,De=V.ref,Me=V._owner;if($!=null){if($.ref!==void 0&&(De=$.ref,Me=Ee.current),$.key!==void 0&&(Ae=""+$.key),V.type&&V.type.defaultProps)var be=V.type.defaultProps;for(Be in $)Ce.call($,Be)&&!P.hasOwnProperty(Be)&&(Ie[Be]=$[Be]===void 0&&be!==void 0?be[Be]:$[Be])}var Be=arguments.length-2;if(Be===1)Ie.children=ce;else if(1<Be){be=Array(Be);for(var mt=0;mt<Be;mt++)be[mt]=arguments[mt+2];Ie.children=be}return{$$typeof:i,type:V.type,key:Ae,ref:De,props:Ie,_owner:Me}},Re.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:u,_context:V},V.Consumer=V},Re.createElement=I,Re.createFactory=function(V){var $=I.bind(null,V);return $.type=V,$},Re.createRef=function(){return{current:null}},Re.forwardRef=function(V){return{$$typeof:m,render:V}},Re.isValidElement=N,Re.lazy=function(V){return{$$typeof:w,_payload:{_status:-1,_result:V},_init:Nt}},Re.memo=function(V,$){return{$$typeof:v,type:V,compare:$===void 0?null:$}},Re.startTransition=function(V){var $=Z.transition;Z.transition={};try{V()}finally{Z.transition=$}},Re.unstable_act=te,Re.useCallback=function(V,$){return je.current.useCallback(V,$)},Re.useContext=function(V){return je.current.useContext(V)},Re.useDebugValue=function(){},Re.useDeferredValue=function(V){return je.current.useDeferredValue(V)},Re.useEffect=function(V,$){return je.current.useEffect(V,$)},Re.useId=function(){return je.current.useId()},Re.useImperativeHandle=function(V,$,ce){return je.current.useImperativeHandle(V,$,ce)},Re.useInsertionEffect=function(V,$){return je.current.useInsertionEffect(V,$)},Re.useLayoutEffect=function(V,$){return je.current.useLayoutEffect(V,$)},Re.useMemo=function(V,$){return je.current.useMemo(V,$)},Re.useReducer=function(V,$,ce){return je.current.useReducer(V,$,ce)},Re.useRef=function(V){return je.current.useRef(V)},Re.useState=function(V){return je.current.useState(V)},Re.useSyncExternalStore=function(V,$,ce){return je.current.useSyncExternalStore(V,$,ce)},Re.useTransition=function(){return je.current.useTransition()},Re.version="18.3.1",Re}var Vm;function Dd(){return Vm||(Vm=1,jh.exports=HE()),jh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function qE(){if(Om)return _a;Om=1;var i=Dd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,v){var w,A={},C=null,j=null;v!==void 0&&(C=""+v),y.key!==void 0&&(C=""+y.key),y.ref!==void 0&&(j=y.ref);for(w in y)s.call(y,w)&&!u.hasOwnProperty(w)&&(A[w]=y[w]);if(m&&m.defaultProps)for(w in y=m.defaultProps,y)A[w]===void 0&&(A[w]=y[w]);return{$$typeof:e,type:m,key:C,ref:j,props:A,_owner:o.current}}return _a.Fragment=t,_a.jsx=h,_a.jsxs=h,_a}var Lm;function WE(){return Lm||(Lm=1,Uh.exports=qE()),Uh.exports}var me=WE(),En=Dd();const KE=yy(En);var uu={},zh={exports:{}},Yt={},Bh={exports:{}},$h={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm;function GE(){return Mm||(Mm=1,function(i){function e(Z,de){var te=Z.length;Z.push(de);e:for(;0<te;){var V=te-1>>>1,$=Z[V];if(0<o($,de))Z[V]=de,Z[te]=$,te=V;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var de=Z[0],te=Z.pop();if(te!==de){Z[0]=te;e:for(var V=0,$=Z.length,ce=$>>>1;V<ce;){var Ie=2*(V+1)-1,Ae=Z[Ie],De=Ie+1,Me=Z[De];if(0>o(Ae,te))De<$&&0>o(Me,Ae)?(Z[V]=Me,Z[De]=te,V=De):(Z[V]=Ae,Z[Ie]=te,V=Ie);else if(De<$&&0>o(Me,te))Z[V]=Me,Z[De]=te,V=De;else break e}}return de}function o(Z,de){var te=Z.sortIndex-de.sortIndex;return te!==0?te:Z.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],v=[],w=1,A=null,C=3,j=!1,W=!1,Q=!1,B=typeof setTimeout=="function"?setTimeout:null,ye=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function re(Z){for(var de=t(v);de!==null;){if(de.callback===null)s(v);else if(de.startTime<=Z)s(v),de.sortIndex=de.expirationTime,e(y,de);else break;de=t(v)}}function ue(Z){if(Q=!1,re(Z),!W)if(t(y)!==null)W=!0,Nt(Ce);else{var de=t(v);de!==null&&je(ue,de.startTime-Z)}}function Ce(Z,de){W=!1,Q&&(Q=!1,ye(I),I=-1),j=!0;var te=C;try{for(re(de),A=t(y);A!==null&&(!(A.expirationTime>de)||Z&&!x());){var V=A.callback;if(typeof V=="function"){A.callback=null,C=A.priorityLevel;var $=V(A.expirationTime<=de);de=i.unstable_now(),typeof $=="function"?A.callback=$:A===t(y)&&s(y),re(de)}else s(y);A=t(y)}if(A!==null)var ce=!0;else{var Ie=t(v);Ie!==null&&je(ue,Ie.startTime-de),ce=!1}return ce}finally{A=null,C=te,j=!1}}var Ee=!1,P=null,I=-1,R=5,N=-1;function x(){return!(i.unstable_now()-N<R)}function O(){if(P!==null){var Z=i.unstable_now();N=Z;var de=!0;try{de=P(!0,Z)}finally{de?S():(Ee=!1,P=null)}}else Ee=!1}var S;if(typeof J=="function")S=function(){J(O)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,Pt=et.port2;et.port1.onmessage=O,S=function(){Pt.postMessage(null)}}else S=function(){B(O,0)};function Nt(Z){P=Z,Ee||(Ee=!0,S())}function je(Z,de){I=B(function(){Z(i.unstable_now())},de)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Z){Z.callback=null},i.unstable_continueExecution=function(){W||j||(W=!0,Nt(Ce))},i.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<Z?Math.floor(1e3/Z):5},i.unstable_getCurrentPriorityLevel=function(){return C},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(Z){switch(C){case 1:case 2:case 3:var de=3;break;default:de=C}var te=C;C=de;try{return Z()}finally{C=te}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(Z,de){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var te=C;C=Z;try{return de()}finally{C=te}},i.unstable_scheduleCallback=function(Z,de,te){var V=i.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?V+te:V):te=V,Z){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=te+$,Z={id:w++,callback:de,priorityLevel:Z,startTime:te,expirationTime:$,sortIndex:-1},te>V?(Z.sortIndex=te,e(v,Z),t(y)===null&&Z===t(v)&&(Q?(ye(I),I=-1):Q=!0,je(ue,te-V))):(Z.sortIndex=$,e(y,Z),W||j||(W=!0,Nt(Ce))),Z},i.unstable_shouldYield=x,i.unstable_wrapCallback=function(Z){var de=C;return function(){var te=C;C=de;try{return Z.apply(this,arguments)}finally{C=te}}}}($h)),$h}var bm;function QE(){return bm||(bm=1,Bh.exports=GE()),Bh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm;function YE(){if(Fm)return Yt;Fm=1;var i=Dd(),e=QE();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},A={};function C(n){return y.call(A,n)?!0:y.call(w,n)?!1:v.test(n)?A[n]=!0:(w[n]=!0,!1)}function j(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function W(n,r,a,c){if(r===null||typeof r>"u"||j(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Q(n,r,a,c,d,p,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=_}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){B[n]=new Q(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];B[r]=new Q(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){B[n]=new Q(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){B[n]=new Q(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){B[n]=new Q(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){B[n]=new Q(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){B[n]=new Q(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){B[n]=new Q(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){B[n]=new Q(n,5,!1,n.toLowerCase(),null,!1,!1)});var ye=/[\-:]([a-z])/g;function J(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(ye,J);B[r]=new Q(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(ye,J);B[r]=new Q(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(ye,J);B[r]=new Q(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){B[n]=new Q(n,1,!1,n.toLowerCase(),null,!1,!1)}),B.xlinkHref=new Q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){B[n]=new Q(n,1,!1,n.toLowerCase(),null,!0,!0)});function re(n,r,a,c){var d=B.hasOwnProperty(r)?B[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(W(r,a,d,c)&&(a=null),c||d===null?C(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var ue=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ce=Symbol.for("react.element"),Ee=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),x=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),Pt=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),Z=Symbol.iterator;function de(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,V;function $(n){if(V===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);V=r&&r[1]||""}return`
`+V+n}var ce=!1;function Ie(n,r){if(!n||ce)return"";ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var c=F}Reflect.construct(n,[],r)}else{try{r.call()}catch(F){c=F}n.call(r.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),p=c.stack.split(`
`),_=d.length-1,T=p.length-1;1<=_&&0<=T&&d[_]!==p[T];)T--;for(;1<=_&&0<=T;_--,T--)if(d[_]!==p[T]){if(_!==1||T!==1)do if(_--,T--,0>T||d[_]!==p[T]){var k=`
`+d[_].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=_&&0<=T);break}}}finally{ce=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?$(n):""}function Ae(n){switch(n.tag){case 5:return $(n.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return n=Ie(n.type,!1),n;case 11:return n=Ie(n.type.render,!1),n;case 1:return n=Ie(n.type,!0),n;default:return""}}function De(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case P:return"Fragment";case Ee:return"Portal";case R:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case et:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case x:return(n.displayName||"Context")+".Consumer";case N:return(n._context.displayName||"Context")+".Provider";case O:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Pt:return r=n.displayName||null,r!==null?r:De(n.type)||"Memo";case Nt:r=n._payload,n=n._init;try{return De(n(r))}catch{}}return null}function Me(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function be(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function mt(n){var r=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,p.call(this,_)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function nr(n){n._valueTracker||(n._valueTracker=mt(n))}function ss(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function kr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ei(n,r){var a=r.checked;return te({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function os(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=be(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function So(n,r){r=r.checked,r!=null&&re(n,"checked",r,!1)}function Ao(n,r){So(n,r);var a=be(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?as(n,r.type,a):r.hasOwnProperty("defaultValue")&&as(n,r.type,be(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ga(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function as(n,r,a){(r!=="number"||kr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var rr=Array.isArray;function ir(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+be(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function Ro(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ls(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(rr(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:be(a)}}function us(n,r){var a=be(r.value),c=be(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Co(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function lt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ut(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?lt(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var sr,ko=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(sr=sr||document.createElement("div"),sr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=sr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Pr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var wi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ti=["Webkit","ms","Moz","O"];Object.keys(wi).forEach(function(n){Ti.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),wi[r]=wi[n]})});function Po(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||wi.hasOwnProperty(n)&&wi[n]?(""+r).trim():r+"px"}function No(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Po(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Do=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xo(n,r){if(r){if(Do[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Vo(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ii=null;function cs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var hs=null,cn=null,Un=null;function ds(n){if(n=ra(n)){if(typeof hs!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Sl(r),hs(n.stateNode,n.type,r))}}function jn(n){cn?Un?Un.push(n):Un=[n]:cn=n}function Oo(){if(cn){var n=cn,r=Un;if(Un=cn=null,ds(n),r)for(n=0;n<r.length;n++)ds(r[n])}}function Si(n,r){return n(r)}function Lo(){}var or=!1;function Mo(n,r,a){if(or)return n(r,a);or=!0;try{return Si(n,r,a)}finally{or=!1,(cn!==null||Un!==null)&&(Lo(),Oo())}}function tt(n,r){var a=n.stateNode;if(a===null)return null;var c=Sl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var fs=!1;if(m)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){fs=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{fs=!1}function Ai(n,r,a,c,d,p,_,T,k){var F=Array.prototype.slice.call(arguments,3);try{r.apply(a,F)}catch(K){this.onError(K)}}var Ri=!1,ps=null,Tn=!1,bo=null,fc={onError:function(n){Ri=!0,ps=n}};function ms(n,r,a,c,d,p,_,T,k){Ri=!1,ps=null,Ai.apply(fc,arguments)}function Qa(n,r,a,c,d,p,_,T,k){if(ms.apply(this,arguments),Ri){if(Ri){var F=ps;Ri=!1,ps=null}else throw Error(t(198));Tn||(Tn=!0,bo=F)}}function In(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Ci(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Sn(n){if(In(n)!==n)throw Error(t(188))}function Ya(n){var r=n.alternate;if(!r){if(r=In(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Sn(d),n;if(p===c)return Sn(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var _=!1,T=d.child;T;){if(T===a){_=!0,a=d,c=p;break}if(T===c){_=!0,c=d,a=p;break}T=T.sibling}if(!_){for(T=p.child;T;){if(T===a){_=!0,a=p,c=d;break}if(T===c){_=!0,c=p,a=d;break}T=T.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function Fo(n){return n=Ya(n),n!==null?gs(n):null}function gs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=gs(n);if(r!==null)return r;n=n.sibling}return null}var ys=e.unstable_scheduleCallback,Uo=e.unstable_cancelCallback,Xa=e.unstable_shouldYield,pc=e.unstable_requestPaint,$e=e.unstable_now,Ja=e.unstable_getCurrentPriorityLevel,ki=e.unstable_ImmediatePriority,Nr=e.unstable_UserBlockingPriority,hn=e.unstable_NormalPriority,jo=e.unstable_LowPriority,Za=e.unstable_IdlePriority,Pi=null,Zt=null;function el(n){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Pi,n,void 0,(n.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:nl,zo=Math.log,tl=Math.LN2;function nl(n){return n>>>=0,n===0?32:31-(zo(n)/tl|0)|0}var _s=64,vs=4194304;function Dr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ni(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,_=a&268435455;if(_!==0){var T=_&~d;T!==0?c=Dr(T):(p&=_,p!==0&&(c=Dr(p)))}else _=a&~d,_!==0?c=Dr(_):p!==0&&(c=Dr(p));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-Ut(r),d=1<<a,c|=n[a],r&=~d;return c}function mc(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ar(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var _=31-Ut(p),T=1<<_,k=d[_];k===-1?((T&a)===0||(T&c)!==0)&&(d[_]=mc(T,r)):k<=r&&(n.expiredLanes|=T),p&=~T}}function en(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Di(){var n=_s;return _s<<=1,(_s&4194240)===0&&(_s=64),n}function xr(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Vr(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Ut(r),n[r]=a}function ze(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ut(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function Or(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-Ut(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var Ne=0;function Lr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var rl,Es,il,sl,ol,Bo=!1,zn=[],Tt=null,An=null,Rn=null,Mr=new Map,dn=new Map,Bn=[],gc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function al(n,r){switch(n){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":Mr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":dn.delete(r.pointerId)}}function $t(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=ra(r),r!==null&&Es(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function yc(n,r,a,c,d){switch(r){case"focusin":return Tt=$t(Tt,n,r,a,c,d),!0;case"dragenter":return An=$t(An,n,r,a,c,d),!0;case"mouseover":return Rn=$t(Rn,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return Mr.set(p,$t(Mr.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,dn.set(p,$t(dn.get(p)||null,n,r,a,c,d)),!0}return!1}function ll(n){var r=Mi(n.target);if(r!==null){var a=In(r);if(a!==null){if(r=a.tag,r===13){if(r=Ci(a),r!==null){n.blockedOn=r,ol(n.priority,function(){il(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function lr(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=ws(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ii=c,a.target.dispatchEvent(c),Ii=null}else return r=ra(a),r!==null&&Es(r),n.blockedOn=a,!1;r.shift()}return!0}function xi(n,r,a){lr(n)&&a.delete(r)}function ul(){Bo=!1,Tt!==null&&lr(Tt)&&(Tt=null),An!==null&&lr(An)&&(An=null),Rn!==null&&lr(Rn)&&(Rn=null),Mr.forEach(xi),dn.forEach(xi)}function Cn(n,r){n.blockedOn===r&&(n.blockedOn=null,Bo||(Bo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ul)))}function kn(n){function r(d){return Cn(d,n)}if(0<zn.length){Cn(zn[0],n);for(var a=1;a<zn.length;a++){var c=zn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Tt!==null&&Cn(Tt,n),An!==null&&Cn(An,n),Rn!==null&&Cn(Rn,n),Mr.forEach(r),dn.forEach(r),a=0;a<Bn.length;a++)c=Bn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Bn.length&&(a=Bn[0],a.blockedOn===null);)ll(a),a.blockedOn===null&&Bn.shift()}var ur=ue.ReactCurrentBatchConfig,br=!0;function Ge(n,r,a,c){var d=Ne,p=ur.transition;ur.transition=null;try{Ne=1,$o(n,r,a,c)}finally{Ne=d,ur.transition=p}}function _c(n,r,a,c){var d=Ne,p=ur.transition;ur.transition=null;try{Ne=4,$o(n,r,a,c)}finally{Ne=d,ur.transition=p}}function $o(n,r,a,c){if(br){var d=ws(n,r,a,c);if(d===null)Pc(n,r,c,Vi,a),al(n,c);else if(yc(d,n,r,a,c))c.stopPropagation();else if(al(n,c),r&4&&-1<gc.indexOf(n)){for(;d!==null;){var p=ra(d);if(p!==null&&rl(p),p=ws(n,r,a,c),p===null&&Pc(n,r,c,Vi,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else Pc(n,r,c,null,a)}}var Vi=null;function ws(n,r,a,c){if(Vi=null,n=cs(c),n=Mi(n),n!==null)if(r=In(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Ci(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Vi=n,null}function Ho(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ja()){case ki:return 1;case Nr:return 4;case hn:case jo:return 16;case Za:return 536870912;default:return 16}default:return 16}}var tn=null,Ts=null,Ht=null;function qo(){if(Ht)return Ht;var n,r=Ts,a=r.length,c,d="value"in tn?tn.value:tn.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&r[a-c]===d[p-c];c++);return Ht=d.slice(n,1<c?1-c:void 0)}function Is(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function $n(){return!0}function Wo(){return!1}function It(n){function r(a,c,d,p,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?$n:Wo,this.isPropagationStopped=Wo,this}return te(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$n)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$n)},persist:function(){},isPersistent:$n}),r}var Pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ss=It(Pn),Hn=te({},Pn,{view:0,detail:0}),vc=It(Hn),As,cr,Fr,Oi=te({},Hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Fr&&(Fr&&n.type==="mousemove"?(As=n.screenX-Fr.screenX,cr=n.screenY-Fr.screenY):cr=As=0,Fr=n),As)},movementY:function(n){return"movementY"in n?n.movementY:cr}}),Rs=It(Oi),Ko=te({},Oi,{dataTransfer:0}),cl=It(Ko),Cs=te({},Hn,{relatedTarget:0}),ks=It(Cs),hl=te({},Pn,{animationName:0,elapsedTime:0,pseudoElement:0}),hr=It(hl),dl=te({},Pn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),fl=It(dl),pl=te({},Pn,{data:0}),Go=It(pl),Ps={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ml={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=ml[n])?!!r[n]:!1}function qn(){return gl}var l=te({},Hn,{key:function(n){if(n.key){var r=Ps[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Is(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?jt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(n){return n.type==="keypress"?Is(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Is(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=It(l),g=te({},Oi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=It(g),L=te({},Hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn}),U=It(L),X=te({},Pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ue=It(X),ct=te({},Oi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),xe=It(ct),gt=[9,13,27,32],it=m&&"CompositionEvent"in window,fn=null;m&&"documentMode"in document&&(fn=document.documentMode);var nn=m&&"TextEvent"in window&&!fn,Li=m&&(!it||fn&&8<fn&&11>=fn),Ns=" ",Rf=!1;function Cf(n,r){switch(n){case"keyup":return gt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ds=!1;function zv(n,r){switch(n){case"compositionend":return kf(r);case"keypress":return r.which!==32?null:(Rf=!0,Ns);case"textInput":return n=r.data,n===Ns&&Rf?null:n;default:return null}}function Bv(n,r){if(Ds)return n==="compositionend"||!it&&Cf(n,r)?(n=qo(),Ht=Ts=tn=null,Ds=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Li&&r.locale!=="ko"?null:r.data;default:return null}}var $v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!$v[n.type]:r==="textarea"}function Nf(n,r,a,c){jn(c),r=wl(r,"onChange"),0<r.length&&(a=new Ss("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var Qo=null,Yo=null;function Hv(n){Gf(n,0)}function yl(n){var r=Ms(n);if(ss(r))return n}function qv(n,r){if(n==="change")return r}var Df=!1;if(m){var Ec;if(m){var wc="oninput"in document;if(!wc){var xf=document.createElement("div");xf.setAttribute("oninput","return;"),wc=typeof xf.oninput=="function"}Ec=wc}else Ec=!1;Df=Ec&&(!document.documentMode||9<document.documentMode)}function Vf(){Qo&&(Qo.detachEvent("onpropertychange",Of),Yo=Qo=null)}function Of(n){if(n.propertyName==="value"&&yl(Yo)){var r=[];Nf(r,Yo,n,cs(n)),Mo(Hv,r)}}function Wv(n,r,a){n==="focusin"?(Vf(),Qo=r,Yo=a,Qo.attachEvent("onpropertychange",Of)):n==="focusout"&&Vf()}function Kv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return yl(Yo)}function Gv(n,r){if(n==="click")return yl(r)}function Qv(n,r){if(n==="input"||n==="change")return yl(r)}function Yv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Nn=typeof Object.is=="function"?Object.is:Yv;function Xo(n,r){if(Nn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!y.call(r,d)||!Nn(n[d],r[d]))return!1}return!0}function Lf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Mf(n,r){var a=Lf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Lf(a)}}function bf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?bf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Ff(){for(var n=window,r=kr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=kr(n.document)}return r}function Tc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Xv(n){var r=Ff(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&bf(a.ownerDocument.documentElement,a)){if(c!==null&&Tc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=Mf(a,p);var _=Mf(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Jv=m&&"documentMode"in document&&11>=document.documentMode,xs=null,Ic=null,Jo=null,Sc=!1;function Uf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Sc||xs==null||xs!==kr(c)||(c=xs,"selectionStart"in c&&Tc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Jo&&Xo(Jo,c)||(Jo=c,c=wl(Ic,"onSelect"),0<c.length&&(r=new Ss("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=xs)))}function _l(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Vs={animationend:_l("Animation","AnimationEnd"),animationiteration:_l("Animation","AnimationIteration"),animationstart:_l("Animation","AnimationStart"),transitionend:_l("Transition","TransitionEnd")},Ac={},jf={};m&&(jf=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function vl(n){if(Ac[n])return Ac[n];if(!Vs[n])return n;var r=Vs[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in jf)return Ac[n]=r[a];return n}var zf=vl("animationend"),Bf=vl("animationiteration"),$f=vl("animationstart"),Hf=vl("transitionend"),qf=new Map,Wf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(n,r){qf.set(n,r),u(r,[n])}for(var Rc=0;Rc<Wf.length;Rc++){var Cc=Wf[Rc],Zv=Cc.toLowerCase(),eE=Cc[0].toUpperCase()+Cc.slice(1);Ur(Zv,"on"+eE)}Ur(zf,"onAnimationEnd"),Ur(Bf,"onAnimationIteration"),Ur($f,"onAnimationStart"),Ur("dblclick","onDoubleClick"),Ur("focusin","onFocus"),Ur("focusout","onBlur"),Ur(Hf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zo));function Kf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,Qa(c,r,void 0,n),n.currentTarget=null}function Gf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var _=c.length-1;0<=_;_--){var T=c[_],k=T.instance,F=T.currentTarget;if(T=T.listener,k!==p&&d.isPropagationStopped())break e;Kf(d,T,F),p=k}else for(_=0;_<c.length;_++){if(T=c[_],k=T.instance,F=T.currentTarget,T=T.listener,k!==p&&d.isPropagationStopped())break e;Kf(d,T,F),p=k}}}if(Tn)throw n=bo,Tn=!1,bo=null,n}function qe(n,r){var a=r[Lc];a===void 0&&(a=r[Lc]=new Set);var c=n+"__bubble";a.has(c)||(Qf(r,n,2,!1),a.add(c))}function kc(n,r,a){var c=0;r&&(c|=4),Qf(a,n,c,r)}var El="_reactListening"+Math.random().toString(36).slice(2);function ea(n){if(!n[El]){n[El]=!0,s.forEach(function(a){a!=="selectionchange"&&(tE.has(a)||kc(a,!1,n),kc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[El]||(r[El]=!0,kc("selectionchange",!1,r))}}function Qf(n,r,a,c){switch(Ho(r)){case 1:var d=Ge;break;case 4:d=_c;break;default:d=$o}a=d.bind(null,r,a,n),d=void 0,!fs||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function Pc(n,r,a,c,d){var p=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var k=_.tag;if((k===3||k===4)&&(k=_.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;_=_.return}for(;T!==null;){if(_=Mi(T),_===null)return;if(k=_.tag,k===5||k===6){c=p=_;continue e}T=T.parentNode}}c=c.return}Mo(function(){var F=p,K=cs(a),G=[];e:{var q=qf.get(n);if(q!==void 0){var ee=Ss,oe=n;switch(n){case"keypress":if(Is(a)===0)break e;case"keydown":case"keyup":ee=f;break;case"focusin":oe="focus",ee=ks;break;case"focusout":oe="blur",ee=ks;break;case"beforeblur":case"afterblur":ee=ks;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=Rs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=cl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=U;break;case zf:case Bf:case $f:ee=hr;break;case Hf:ee=Ue;break;case"scroll":ee=vc;break;case"wheel":ee=xe;break;case"copy":case"cut":case"paste":ee=fl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=E}var ae=(r&4)!==0,nt=!ae&&n==="scroll",M=ae?q!==null?q+"Capture":null:q;ae=[];for(var D=F,b;D!==null;){b=D;var Y=b.stateNode;if(b.tag===5&&Y!==null&&(b=Y,M!==null&&(Y=tt(D,M),Y!=null&&ae.push(ta(D,Y,b)))),nt)break;D=D.return}0<ae.length&&(q=new ee(q,oe,null,a,K),G.push({event:q,listeners:ae}))}}if((r&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",ee=n==="mouseout"||n==="pointerout",q&&a!==Ii&&(oe=a.relatedTarget||a.fromElement)&&(Mi(oe)||oe[dr]))break e;if((ee||q)&&(q=K.window===K?K:(q=K.ownerDocument)?q.defaultView||q.parentWindow:window,ee?(oe=a.relatedTarget||a.toElement,ee=F,oe=oe?Mi(oe):null,oe!==null&&(nt=In(oe),oe!==nt||oe.tag!==5&&oe.tag!==6)&&(oe=null)):(ee=null,oe=F),ee!==oe)){if(ae=Rs,Y="onMouseLeave",M="onMouseEnter",D="mouse",(n==="pointerout"||n==="pointerover")&&(ae=E,Y="onPointerLeave",M="onPointerEnter",D="pointer"),nt=ee==null?q:Ms(ee),b=oe==null?q:Ms(oe),q=new ae(Y,D+"leave",ee,a,K),q.target=nt,q.relatedTarget=b,Y=null,Mi(K)===F&&(ae=new ae(M,D+"enter",oe,a,K),ae.target=b,ae.relatedTarget=nt,Y=ae),nt=Y,ee&&oe)t:{for(ae=ee,M=oe,D=0,b=ae;b;b=Os(b))D++;for(b=0,Y=M;Y;Y=Os(Y))b++;for(;0<D-b;)ae=Os(ae),D--;for(;0<b-D;)M=Os(M),b--;for(;D--;){if(ae===M||M!==null&&ae===M.alternate)break t;ae=Os(ae),M=Os(M)}ae=null}else ae=null;ee!==null&&Yf(G,q,ee,ae,!1),oe!==null&&nt!==null&&Yf(G,nt,oe,ae,!0)}}e:{if(q=F?Ms(F):window,ee=q.nodeName&&q.nodeName.toLowerCase(),ee==="select"||ee==="input"&&q.type==="file")var le=qv;else if(Pf(q))if(Df)le=Qv;else{le=Kv;var fe=Wv}else(ee=q.nodeName)&&ee.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(le=Gv);if(le&&(le=le(n,F))){Nf(G,le,a,K);break e}fe&&fe(n,q,F),n==="focusout"&&(fe=q._wrapperState)&&fe.controlled&&q.type==="number"&&as(q,"number",q.value)}switch(fe=F?Ms(F):window,n){case"focusin":(Pf(fe)||fe.contentEditable==="true")&&(xs=fe,Ic=F,Jo=null);break;case"focusout":Jo=Ic=xs=null;break;case"mousedown":Sc=!0;break;case"contextmenu":case"mouseup":case"dragend":Sc=!1,Uf(G,a,K);break;case"selectionchange":if(Jv)break;case"keydown":case"keyup":Uf(G,a,K)}var pe;if(it)e:{switch(n){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else Ds?Cf(n,a)&&(_e="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(Li&&a.locale!=="ko"&&(Ds||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Ds&&(pe=qo()):(tn=K,Ts="value"in tn?tn.value:tn.textContent,Ds=!0)),fe=wl(F,_e),0<fe.length&&(_e=new Go(_e,n,null,a,K),G.push({event:_e,listeners:fe}),pe?_e.data=pe:(pe=kf(a),pe!==null&&(_e.data=pe)))),(pe=nn?zv(n,a):Bv(n,a))&&(F=wl(F,"onBeforeInput"),0<F.length&&(K=new Go("onBeforeInput","beforeinput",null,a,K),G.push({event:K,listeners:F}),K.data=pe))}Gf(G,r)})}function ta(n,r,a){return{instance:n,listener:r,currentTarget:a}}function wl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=tt(n,a),p!=null&&c.unshift(ta(n,p,d)),p=tt(n,r),p!=null&&c.push(ta(n,p,d))),n=n.return}return c}function Os(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Yf(n,r,a,c,d){for(var p=r._reactName,_=[];a!==null&&a!==c;){var T=a,k=T.alternate,F=T.stateNode;if(k!==null&&k===c)break;T.tag===5&&F!==null&&(T=F,d?(k=tt(a,p),k!=null&&_.unshift(ta(a,k,T))):d||(k=tt(a,p),k!=null&&_.push(ta(a,k,T)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var nE=/\r\n?/g,rE=/\u0000|\uFFFD/g;function Xf(n){return(typeof n=="string"?n:""+n).replace(nE,`
`).replace(rE,"")}function Tl(n,r,a){if(r=Xf(r),Xf(n)!==r&&a)throw Error(t(425))}function Il(){}var Nc=null,Dc=null;function xc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Vc=typeof setTimeout=="function"?setTimeout:void 0,iE=typeof clearTimeout=="function"?clearTimeout:void 0,Jf=typeof Promise=="function"?Promise:void 0,sE=typeof queueMicrotask=="function"?queueMicrotask:typeof Jf<"u"?function(n){return Jf.resolve(null).then(n).catch(oE)}:Vc;function oE(n){setTimeout(function(){throw n})}function Oc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),kn(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);kn(r)}function jr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Zf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),Wn="__reactFiber$"+Ls,na="__reactProps$"+Ls,dr="__reactContainer$"+Ls,Lc="__reactEvents$"+Ls,aE="__reactListeners$"+Ls,lE="__reactHandles$"+Ls;function Mi(n){var r=n[Wn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[dr]||a[Wn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=Zf(n);n!==null;){if(a=n[Wn])return a;n=Zf(n)}return r}n=a,a=n.parentNode}return null}function ra(n){return n=n[Wn]||n[dr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ms(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Sl(n){return n[na]||null}var Mc=[],bs=-1;function zr(n){return{current:n}}function We(n){0>bs||(n.current=Mc[bs],Mc[bs]=null,bs--)}function He(n,r){bs++,Mc[bs]=n.current,n.current=r}var Br={},Dt=zr(Br),qt=zr(!1),bi=Br;function Fs(n,r){var a=n.type.contextTypes;if(!a)return Br;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Wt(n){return n=n.childContextTypes,n!=null}function Al(){We(qt),We(Dt)}function ep(n,r,a){if(Dt.current!==Br)throw Error(t(168));He(Dt,r),He(qt,a)}function tp(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Me(n)||"Unknown",d));return te({},a,c)}function Rl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Br,bi=Dt.current,He(Dt,n),He(qt,qt.current),!0}function np(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=tp(n,r,bi),c.__reactInternalMemoizedMergedChildContext=n,We(qt),We(Dt),He(Dt,n)):We(qt),He(qt,a)}var fr=null,Cl=!1,bc=!1;function rp(n){fr===null?fr=[n]:fr.push(n)}function uE(n){Cl=!0,rp(n)}function $r(){if(!bc&&fr!==null){bc=!0;var n=0,r=Ne;try{var a=fr;for(Ne=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}fr=null,Cl=!1}catch(d){throw fr!==null&&(fr=fr.slice(n+1)),ys(ki,$r),d}finally{Ne=r,bc=!1}}return null}var Us=[],js=0,kl=null,Pl=0,pn=[],mn=0,Fi=null,pr=1,mr="";function Ui(n,r){Us[js++]=Pl,Us[js++]=kl,kl=n,Pl=r}function ip(n,r,a){pn[mn++]=pr,pn[mn++]=mr,pn[mn++]=Fi,Fi=n;var c=pr;n=mr;var d=32-Ut(c)-1;c&=~(1<<d),a+=1;var p=32-Ut(r)+d;if(30<p){var _=d-d%5;p=(c&(1<<_)-1).toString(32),c>>=_,d-=_,pr=1<<32-Ut(r)+d|a<<d|c,mr=p+n}else pr=1<<p|a<<d|c,mr=n}function Fc(n){n.return!==null&&(Ui(n,1),ip(n,1,0))}function Uc(n){for(;n===kl;)kl=Us[--js],Us[js]=null,Pl=Us[--js],Us[js]=null;for(;n===Fi;)Fi=pn[--mn],pn[mn]=null,mr=pn[--mn],pn[mn]=null,pr=pn[--mn],pn[mn]=null}var rn=null,sn=null,Qe=!1,Dn=null;function sp(n,r){var a=vn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function op(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,rn=n,sn=jr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,rn=n,sn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Fi!==null?{id:pr,overflow:mr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=vn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,rn=n,sn=null,!0):!1;default:return!1}}function jc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function zc(n){if(Qe){var r=sn;if(r){var a=r;if(!op(n,r)){if(jc(n))throw Error(t(418));r=jr(a.nextSibling);var c=rn;r&&op(n,r)?sp(c,a):(n.flags=n.flags&-4097|2,Qe=!1,rn=n)}}else{if(jc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Qe=!1,rn=n}}}function ap(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;rn=n}function Nl(n){if(n!==rn)return!1;if(!Qe)return ap(n),Qe=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!xc(n.type,n.memoizedProps)),r&&(r=sn)){if(jc(n))throw lp(),Error(t(418));for(;r;)sp(n,r),r=jr(r.nextSibling)}if(ap(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){sn=jr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}sn=null}}else sn=rn?jr(n.stateNode.nextSibling):null;return!0}function lp(){for(var n=sn;n;)n=jr(n.nextSibling)}function zs(){sn=rn=null,Qe=!1}function Bc(n){Dn===null?Dn=[n]:Dn.push(n)}var cE=ue.ReactCurrentBatchConfig;function ia(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(_){var T=d.refs;_===null?delete T[p]:T[p]=_},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Dl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function up(n){var r=n._init;return r(n._payload)}function cp(n){function r(M,D){if(n){var b=M.deletions;b===null?(M.deletions=[D],M.flags|=16):b.push(D)}}function a(M,D){if(!n)return null;for(;D!==null;)r(M,D),D=D.sibling;return null}function c(M,D){for(M=new Map;D!==null;)D.key!==null?M.set(D.key,D):M.set(D.index,D),D=D.sibling;return M}function d(M,D){return M=Xr(M,D),M.index=0,M.sibling=null,M}function p(M,D,b){return M.index=b,n?(b=M.alternate,b!==null?(b=b.index,b<D?(M.flags|=2,D):b):(M.flags|=2,D)):(M.flags|=1048576,D)}function _(M){return n&&M.alternate===null&&(M.flags|=2),M}function T(M,D,b,Y){return D===null||D.tag!==6?(D=Vh(b,M.mode,Y),D.return=M,D):(D=d(D,b),D.return=M,D)}function k(M,D,b,Y){var le=b.type;return le===P?K(M,D,b.props.children,Y,b.key):D!==null&&(D.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Nt&&up(le)===D.type)?(Y=d(D,b.props),Y.ref=ia(M,D,b),Y.return=M,Y):(Y=tu(b.type,b.key,b.props,null,M.mode,Y),Y.ref=ia(M,D,b),Y.return=M,Y)}function F(M,D,b,Y){return D===null||D.tag!==4||D.stateNode.containerInfo!==b.containerInfo||D.stateNode.implementation!==b.implementation?(D=Oh(b,M.mode,Y),D.return=M,D):(D=d(D,b.children||[]),D.return=M,D)}function K(M,D,b,Y,le){return D===null||D.tag!==7?(D=Ki(b,M.mode,Y,le),D.return=M,D):(D=d(D,b),D.return=M,D)}function G(M,D,b){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Vh(""+D,M.mode,b),D.return=M,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ce:return b=tu(D.type,D.key,D.props,null,M.mode,b),b.ref=ia(M,null,D),b.return=M,b;case Ee:return D=Oh(D,M.mode,b),D.return=M,D;case Nt:var Y=D._init;return G(M,Y(D._payload),b)}if(rr(D)||de(D))return D=Ki(D,M.mode,b,null),D.return=M,D;Dl(M,D)}return null}function q(M,D,b,Y){var le=D!==null?D.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return le!==null?null:T(M,D,""+b,Y);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ce:return b.key===le?k(M,D,b,Y):null;case Ee:return b.key===le?F(M,D,b,Y):null;case Nt:return le=b._init,q(M,D,le(b._payload),Y)}if(rr(b)||de(b))return le!==null?null:K(M,D,b,Y,null);Dl(M,b)}return null}function ee(M,D,b,Y,le){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return M=M.get(b)||null,T(D,M,""+Y,le);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case Ce:return M=M.get(Y.key===null?b:Y.key)||null,k(D,M,Y,le);case Ee:return M=M.get(Y.key===null?b:Y.key)||null,F(D,M,Y,le);case Nt:var fe=Y._init;return ee(M,D,b,fe(Y._payload),le)}if(rr(Y)||de(Y))return M=M.get(b)||null,K(D,M,Y,le,null);Dl(D,Y)}return null}function oe(M,D,b,Y){for(var le=null,fe=null,pe=D,_e=D=0,vt=null;pe!==null&&_e<b.length;_e++){pe.index>_e?(vt=pe,pe=null):vt=pe.sibling;var Le=q(M,pe,b[_e],Y);if(Le===null){pe===null&&(pe=vt);break}n&&pe&&Le.alternate===null&&r(M,pe),D=p(Le,D,_e),fe===null?le=Le:fe.sibling=Le,fe=Le,pe=vt}if(_e===b.length)return a(M,pe),Qe&&Ui(M,_e),le;if(pe===null){for(;_e<b.length;_e++)pe=G(M,b[_e],Y),pe!==null&&(D=p(pe,D,_e),fe===null?le=pe:fe.sibling=pe,fe=pe);return Qe&&Ui(M,_e),le}for(pe=c(M,pe);_e<b.length;_e++)vt=ee(pe,M,_e,b[_e],Y),vt!==null&&(n&&vt.alternate!==null&&pe.delete(vt.key===null?_e:vt.key),D=p(vt,D,_e),fe===null?le=vt:fe.sibling=vt,fe=vt);return n&&pe.forEach(function(Jr){return r(M,Jr)}),Qe&&Ui(M,_e),le}function ae(M,D,b,Y){var le=de(b);if(typeof le!="function")throw Error(t(150));if(b=le.call(b),b==null)throw Error(t(151));for(var fe=le=null,pe=D,_e=D=0,vt=null,Le=b.next();pe!==null&&!Le.done;_e++,Le=b.next()){pe.index>_e?(vt=pe,pe=null):vt=pe.sibling;var Jr=q(M,pe,Le.value,Y);if(Jr===null){pe===null&&(pe=vt);break}n&&pe&&Jr.alternate===null&&r(M,pe),D=p(Jr,D,_e),fe===null?le=Jr:fe.sibling=Jr,fe=Jr,pe=vt}if(Le.done)return a(M,pe),Qe&&Ui(M,_e),le;if(pe===null){for(;!Le.done;_e++,Le=b.next())Le=G(M,Le.value,Y),Le!==null&&(D=p(Le,D,_e),fe===null?le=Le:fe.sibling=Le,fe=Le);return Qe&&Ui(M,_e),le}for(pe=c(M,pe);!Le.done;_e++,Le=b.next())Le=ee(pe,M,_e,Le.value,Y),Le!==null&&(n&&Le.alternate!==null&&pe.delete(Le.key===null?_e:Le.key),D=p(Le,D,_e),fe===null?le=Le:fe.sibling=Le,fe=Le);return n&&pe.forEach(function($E){return r(M,$E)}),Qe&&Ui(M,_e),le}function nt(M,D,b,Y){if(typeof b=="object"&&b!==null&&b.type===P&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Ce:e:{for(var le=b.key,fe=D;fe!==null;){if(fe.key===le){if(le=b.type,le===P){if(fe.tag===7){a(M,fe.sibling),D=d(fe,b.props.children),D.return=M,M=D;break e}}else if(fe.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Nt&&up(le)===fe.type){a(M,fe.sibling),D=d(fe,b.props),D.ref=ia(M,fe,b),D.return=M,M=D;break e}a(M,fe);break}else r(M,fe);fe=fe.sibling}b.type===P?(D=Ki(b.props.children,M.mode,Y,b.key),D.return=M,M=D):(Y=tu(b.type,b.key,b.props,null,M.mode,Y),Y.ref=ia(M,D,b),Y.return=M,M=Y)}return _(M);case Ee:e:{for(fe=b.key;D!==null;){if(D.key===fe)if(D.tag===4&&D.stateNode.containerInfo===b.containerInfo&&D.stateNode.implementation===b.implementation){a(M,D.sibling),D=d(D,b.children||[]),D.return=M,M=D;break e}else{a(M,D);break}else r(M,D);D=D.sibling}D=Oh(b,M.mode,Y),D.return=M,M=D}return _(M);case Nt:return fe=b._init,nt(M,D,fe(b._payload),Y)}if(rr(b))return oe(M,D,b,Y);if(de(b))return ae(M,D,b,Y);Dl(M,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,D!==null&&D.tag===6?(a(M,D.sibling),D=d(D,b),D.return=M,M=D):(a(M,D),D=Vh(b,M.mode,Y),D.return=M,M=D),_(M)):a(M,D)}return nt}var Bs=cp(!0),hp=cp(!1),xl=zr(null),Vl=null,$s=null,$c=null;function Hc(){$c=$s=Vl=null}function qc(n){var r=xl.current;We(xl),n._currentValue=r}function Wc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Hs(n,r){Vl=n,$c=$s=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Kt=!0),n.firstContext=null)}function gn(n){var r=n._currentValue;if($c!==n)if(n={context:n,memoizedValue:r,next:null},$s===null){if(Vl===null)throw Error(t(308));$s=n,Vl.dependencies={lanes:0,firstContext:n}}else $s=$s.next=n;return r}var ji=null;function Kc(n){ji===null?ji=[n]:ji.push(n)}function dp(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,Kc(r)):(a.next=d.next,d.next=a),r.interleaved=a,gr(n,c)}function gr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Hr=!1;function Gc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function yr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function qr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Oe&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,gr(n,a)}return d=c.interleaved,d===null?(r.next=r,Kc(c)):(r.next=d.next,d.next=r),c.interleaved=r,gr(n,a)}function Ol(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Or(n,a)}}function pp(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=_:p=p.next=_,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Ll(n,r,a,c){var d=n.updateQueue;Hr=!1;var p=d.firstBaseUpdate,_=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var k=T,F=k.next;k.next=null,_===null?p=F:_.next=F,_=k;var K=n.alternate;K!==null&&(K=K.updateQueue,T=K.lastBaseUpdate,T!==_&&(T===null?K.firstBaseUpdate=F:T.next=F,K.lastBaseUpdate=k))}if(p!==null){var G=d.baseState;_=0,K=F=k=null,T=p;do{var q=T.lane,ee=T.eventTime;if((c&q)===q){K!==null&&(K=K.next={eventTime:ee,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var oe=n,ae=T;switch(q=r,ee=a,ae.tag){case 1:if(oe=ae.payload,typeof oe=="function"){G=oe.call(ee,G,q);break e}G=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ae.payload,q=typeof oe=="function"?oe.call(ee,G,q):oe,q==null)break e;G=te({},G,q);break e;case 2:Hr=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,q=d.effects,q===null?d.effects=[T]:q.push(T))}else ee={eventTime:ee,lane:q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},K===null?(F=K=ee,k=G):K=K.next=ee,_|=q;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;q=T,T=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);if(K===null&&(k=G),d.baseState=k,d.firstBaseUpdate=F,d.lastBaseUpdate=K,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);$i|=_,n.lanes=_,n.memoizedState=G}}function mp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var sa={},Kn=zr(sa),oa=zr(sa),aa=zr(sa);function zi(n){if(n===sa)throw Error(t(174));return n}function Qc(n,r){switch(He(aa,r),He(oa,n),He(Kn,sa),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ut(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ut(r,n)}We(Kn),He(Kn,r)}function qs(){We(Kn),We(oa),We(aa)}function gp(n){zi(aa.current);var r=zi(Kn.current),a=ut(r,n.type);r!==a&&(He(oa,n),He(Kn,a))}function Yc(n){oa.current===n&&(We(Kn),We(oa))}var Ye=zr(0);function Ml(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Xc=[];function Jc(){for(var n=0;n<Xc.length;n++)Xc[n]._workInProgressVersionPrimary=null;Xc.length=0}var bl=ue.ReactCurrentDispatcher,Zc=ue.ReactCurrentBatchConfig,Bi=0,Xe=null,ht=null,yt=null,Fl=!1,la=!1,ua=0,hE=0;function xt(){throw Error(t(321))}function eh(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Nn(n[a],r[a]))return!1;return!0}function th(n,r,a,c,d,p){if(Bi=p,Xe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,bl.current=n===null||n.memoizedState===null?mE:gE,n=a(c,d),la){p=0;do{if(la=!1,ua=0,25<=p)throw Error(t(301));p+=1,yt=ht=null,r.updateQueue=null,bl.current=yE,n=a(c,d)}while(la)}if(bl.current=zl,r=ht!==null&&ht.next!==null,Bi=0,yt=ht=Xe=null,Fl=!1,r)throw Error(t(300));return n}function nh(){var n=ua!==0;return ua=0,n}function Gn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?Xe.memoizedState=yt=n:yt=yt.next=n,yt}function yn(){if(ht===null){var n=Xe.alternate;n=n!==null?n.memoizedState:null}else n=ht.next;var r=yt===null?Xe.memoizedState:yt.next;if(r!==null)yt=r,ht=n;else{if(n===null)throw Error(t(310));ht=n,n={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},yt===null?Xe.memoizedState=yt=n:yt=yt.next=n}return yt}function ca(n,r){return typeof r=="function"?r(n):r}function rh(n){var r=yn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ht,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var _=d.next;d.next=p.next,p.next=_}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var T=_=null,k=null,F=p;do{var K=F.lane;if((Bi&K)===K)k!==null&&(k=k.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var G={lane:K,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};k===null?(T=k=G,_=c):k=k.next=G,Xe.lanes|=K,$i|=K}F=F.next}while(F!==null&&F!==p);k===null?_=c:k.next=T,Nn(c,r.memoizedState)||(Kt=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=k,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,Xe.lanes|=p,$i|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function ih(n){var r=yn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do p=n(p,_.action),_=_.next;while(_!==d);Nn(p,r.memoizedState)||(Kt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function yp(){}function _p(n,r){var a=Xe,c=yn(),d=r(),p=!Nn(c.memoizedState,d);if(p&&(c.memoizedState=d,Kt=!0),c=c.queue,sh(wp.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||yt!==null&&yt.memoizedState.tag&1){if(a.flags|=2048,ha(9,Ep.bind(null,a,c,d,r),void 0,null),_t===null)throw Error(t(349));(Bi&30)!==0||vp(a,r,d)}return d}function vp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Ep(n,r,a,c){r.value=a,r.getSnapshot=c,Tp(r)&&Ip(n)}function wp(n,r,a){return a(function(){Tp(r)&&Ip(n)})}function Tp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Nn(n,a)}catch{return!0}}function Ip(n){var r=gr(n,1);r!==null&&Ln(r,n,1,-1)}function Sp(n){var r=Gn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:n},r.queue=n,n=n.dispatch=pE.bind(null,Xe,n),[r.memoizedState,n]}function ha(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function Ap(){return yn().memoizedState}function Ul(n,r,a,c){var d=Gn();Xe.flags|=n,d.memoizedState=ha(1|r,a,void 0,c===void 0?null:c)}function jl(n,r,a,c){var d=yn();c=c===void 0?null:c;var p=void 0;if(ht!==null){var _=ht.memoizedState;if(p=_.destroy,c!==null&&eh(c,_.deps)){d.memoizedState=ha(r,a,p,c);return}}Xe.flags|=n,d.memoizedState=ha(1|r,a,p,c)}function Rp(n,r){return Ul(8390656,8,n,r)}function sh(n,r){return jl(2048,8,n,r)}function Cp(n,r){return jl(4,2,n,r)}function kp(n,r){return jl(4,4,n,r)}function Pp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Np(n,r,a){return a=a!=null?a.concat([n]):null,jl(4,4,Pp.bind(null,r,n),a)}function oh(){}function Dp(n,r){var a=yn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&eh(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function xp(n,r){var a=yn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&eh(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Vp(n,r,a){return(Bi&21)===0?(n.baseState&&(n.baseState=!1,Kt=!0),n.memoizedState=a):(Nn(a,r)||(a=Di(),Xe.lanes|=a,$i|=a,n.baseState=!0),r)}function dE(n,r){var a=Ne;Ne=a!==0&&4>a?a:4,n(!0);var c=Zc.transition;Zc.transition={};try{n(!1),r()}finally{Ne=a,Zc.transition=c}}function Op(){return yn().memoizedState}function fE(n,r,a){var c=Qr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Lp(n))Mp(r,a);else if(a=dp(n,r,a,c),a!==null){var d=Bt();Ln(a,n,c,d),bp(a,r,c)}}function pE(n,r,a){var c=Qr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Lp(n))Mp(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var _=r.lastRenderedState,T=p(_,a);if(d.hasEagerState=!0,d.eagerState=T,Nn(T,_)){var k=r.interleaved;k===null?(d.next=d,Kc(r)):(d.next=k.next,k.next=d),r.interleaved=d;return}}catch{}finally{}a=dp(n,r,d,c),a!==null&&(d=Bt(),Ln(a,n,c,d),bp(a,r,c))}}function Lp(n){var r=n.alternate;return n===Xe||r!==null&&r===Xe}function Mp(n,r){la=Fl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function bp(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Or(n,a)}}var zl={readContext:gn,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},mE={readContext:gn,useCallback:function(n,r){return Gn().memoizedState=[n,r===void 0?null:r],n},useContext:gn,useEffect:Rp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Ul(4194308,4,Pp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Ul(4194308,4,n,r)},useInsertionEffect:function(n,r){return Ul(4,2,n,r)},useMemo:function(n,r){var a=Gn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Gn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=fE.bind(null,Xe,n),[c.memoizedState,n]},useRef:function(n){var r=Gn();return n={current:n},r.memoizedState=n},useState:Sp,useDebugValue:oh,useDeferredValue:function(n){return Gn().memoizedState=n},useTransition:function(){var n=Sp(!1),r=n[0];return n=dE.bind(null,n[1]),Gn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Xe,d=Gn();if(Qe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),_t===null)throw Error(t(349));(Bi&30)!==0||vp(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,Rp(wp.bind(null,c,p,n),[n]),c.flags|=2048,ha(9,Ep.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=Gn(),r=_t.identifierPrefix;if(Qe){var a=mr,c=pr;a=(c&~(1<<32-Ut(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=ua++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=hE++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},gE={readContext:gn,useCallback:Dp,useContext:gn,useEffect:sh,useImperativeHandle:Np,useInsertionEffect:Cp,useLayoutEffect:kp,useMemo:xp,useReducer:rh,useRef:Ap,useState:function(){return rh(ca)},useDebugValue:oh,useDeferredValue:function(n){var r=yn();return Vp(r,ht.memoizedState,n)},useTransition:function(){var n=rh(ca)[0],r=yn().memoizedState;return[n,r]},useMutableSource:yp,useSyncExternalStore:_p,useId:Op,unstable_isNewReconciler:!1},yE={readContext:gn,useCallback:Dp,useContext:gn,useEffect:sh,useImperativeHandle:Np,useInsertionEffect:Cp,useLayoutEffect:kp,useMemo:xp,useReducer:ih,useRef:Ap,useState:function(){return ih(ca)},useDebugValue:oh,useDeferredValue:function(n){var r=yn();return ht===null?r.memoizedState=n:Vp(r,ht.memoizedState,n)},useTransition:function(){var n=ih(ca)[0],r=yn().memoizedState;return[n,r]},useMutableSource:yp,useSyncExternalStore:_p,useId:Op,unstable_isNewReconciler:!1};function xn(n,r){if(n&&n.defaultProps){r=te({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function ah(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:te({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Bl={isMounted:function(n){return(n=n._reactInternals)?In(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Bt(),d=Qr(n),p=yr(c,d);p.payload=r,a!=null&&(p.callback=a),r=qr(n,p,d),r!==null&&(Ln(r,n,d,c),Ol(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Bt(),d=Qr(n),p=yr(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=qr(n,p,d),r!==null&&(Ln(r,n,d,c),Ol(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Bt(),c=Qr(n),d=yr(a,c);d.tag=2,r!=null&&(d.callback=r),r=qr(n,d,c),r!==null&&(Ln(r,n,c,a),Ol(r,n,c))}};function Fp(n,r,a,c,d,p,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,_):r.prototype&&r.prototype.isPureReactComponent?!Xo(a,c)||!Xo(d,p):!0}function Up(n,r,a){var c=!1,d=Br,p=r.contextType;return typeof p=="object"&&p!==null?p=gn(p):(d=Wt(r)?bi:Dt.current,c=r.contextTypes,p=(c=c!=null)?Fs(n,d):Br),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Bl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function jp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Bl.enqueueReplaceState(r,r.state,null)}function lh(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Gc(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=gn(p):(p=Wt(r)?bi:Dt.current,d.context=Fs(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(ah(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Bl.enqueueReplaceState(d,d.state,null),Ll(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ws(n,r){try{var a="",c=r;do a+=Ae(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function uh(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function ch(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var _E=typeof WeakMap=="function"?WeakMap:Map;function zp(n,r,a){a=yr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){Ql||(Ql=!0,Ah=c),ch(n,r)},a}function Bp(n,r,a){a=yr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){ch(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){ch(n,r),typeof c!="function"&&(Kr===null?Kr=new Set([this]):Kr.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),a}function $p(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new _E;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=xE.bind(null,n,r,a),r.then(n,n))}function Hp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function qp(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=yr(-1,1),r.tag=2,qr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var vE=ue.ReactCurrentOwner,Kt=!1;function zt(n,r,a,c){r.child=n===null?hp(r,null,a,c):Bs(r,n.child,a,c)}function Wp(n,r,a,c,d){a=a.render;var p=r.ref;return Hs(r,d),c=th(n,r,a,c,p,d),a=nh(),n!==null&&!Kt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,_r(n,r,d)):(Qe&&a&&Fc(r),r.flags|=1,zt(n,r,c,d),r.child)}function Kp(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!xh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,Gp(n,r,p,c,d)):(n=tu(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,(n.lanes&d)===0){var _=p.memoizedProps;if(a=a.compare,a=a!==null?a:Xo,a(_,c)&&n.ref===r.ref)return _r(n,r,d)}return r.flags|=1,n=Xr(p,c),n.ref=r.ref,n.return=r,r.child=n}function Gp(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if(Xo(p,c)&&n.ref===r.ref)if(Kt=!1,r.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Kt=!0);else return r.lanes=n.lanes,_r(n,r,d)}return hh(n,r,a,c,d)}function Qp(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(Gs,on),on|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,He(Gs,on),on|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,He(Gs,on),on|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,He(Gs,on),on|=c;return zt(n,r,d,a),r.child}function Yp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function hh(n,r,a,c,d){var p=Wt(a)?bi:Dt.current;return p=Fs(r,p),Hs(r,d),a=th(n,r,a,c,p,d),c=nh(),n!==null&&!Kt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,_r(n,r,d)):(Qe&&c&&Fc(r),r.flags|=1,zt(n,r,a,d),r.child)}function Xp(n,r,a,c,d){if(Wt(a)){var p=!0;Rl(r)}else p=!1;if(Hs(r,d),r.stateNode===null)Hl(n,r),Up(r,a,c),lh(r,a,c,d),c=!0;else if(n===null){var _=r.stateNode,T=r.memoizedProps;_.props=T;var k=_.context,F=a.contextType;typeof F=="object"&&F!==null?F=gn(F):(F=Wt(a)?bi:Dt.current,F=Fs(r,F));var K=a.getDerivedStateFromProps,G=typeof K=="function"||typeof _.getSnapshotBeforeUpdate=="function";G||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==c||k!==F)&&jp(r,_,c,F),Hr=!1;var q=r.memoizedState;_.state=q,Ll(r,c,_,d),k=r.memoizedState,T!==c||q!==k||qt.current||Hr?(typeof K=="function"&&(ah(r,a,K,c),k=r.memoizedState),(T=Hr||Fp(r,a,T,c,q,k,F))?(G||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=k),_.props=c,_.state=k,_.context=F,c=T):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,fp(n,r),T=r.memoizedProps,F=r.type===r.elementType?T:xn(r.type,T),_.props=F,G=r.pendingProps,q=_.context,k=a.contextType,typeof k=="object"&&k!==null?k=gn(k):(k=Wt(a)?bi:Dt.current,k=Fs(r,k));var ee=a.getDerivedStateFromProps;(K=typeof ee=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==G||q!==k)&&jp(r,_,c,k),Hr=!1,q=r.memoizedState,_.state=q,Ll(r,c,_,d);var oe=r.memoizedState;T!==G||q!==oe||qt.current||Hr?(typeof ee=="function"&&(ah(r,a,ee,c),oe=r.memoizedState),(F=Hr||Fp(r,a,F,c,q,oe,k)||!1)?(K||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,oe,k),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,oe,k)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=oe),_.props=c,_.state=oe,_.context=k,c=F):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),c=!1)}return dh(n,r,a,c,p,d)}function dh(n,r,a,c,d,p){Yp(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return d&&np(r,a,!1),_r(n,r,p);c=r.stateNode,vE.current=r;var T=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=Bs(r,n.child,null,p),r.child=Bs(r,null,T,p)):zt(n,r,T,p),r.memoizedState=c.state,d&&np(r,a,!0),r.child}function Jp(n){var r=n.stateNode;r.pendingContext?ep(n,r.pendingContext,r.pendingContext!==r.context):r.context&&ep(n,r.context,!1),Qc(n,r.containerInfo)}function Zp(n,r,a,c,d){return zs(),Bc(d),r.flags|=256,zt(n,r,a,c),r.child}var fh={dehydrated:null,treeContext:null,retryLane:0};function ph(n){return{baseLanes:n,cachePool:null,transitions:null}}function em(n,r,a){var c=r.pendingProps,d=Ye.current,p=!1,_=(r.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),He(Ye,d&1),n===null)return zc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(_=c.children,n=c.fallback,p?(c=r.mode,p=r.child,_={mode:"hidden",children:_},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=_):p=nu(_,c,0,null),n=Ki(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=ph(a),r.memoizedState=fh,n):mh(r,_));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return EE(n,r,_,c,T,d,a);if(p){p=c.fallback,_=r.mode,d=n.child,T=d.sibling;var k={mode:"hidden",children:c.children};return(_&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=k,r.deletions=null):(c=Xr(d,k),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?p=Xr(T,p):(p=Ki(p,_,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,_=n.child.memoizedState,_=_===null?ph(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},p.memoizedState=_,p.childLanes=n.childLanes&~a,r.memoizedState=fh,c}return p=n.child,n=p.sibling,c=Xr(p,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function mh(n,r){return r=nu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function $l(n,r,a,c){return c!==null&&Bc(c),Bs(r,n.child,null,a),n=mh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function EE(n,r,a,c,d,p,_){if(a)return r.flags&256?(r.flags&=-257,c=uh(Error(t(422))),$l(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=nu({mode:"visible",children:c.children},d,0,null),p=Ki(p,d,_,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,(r.mode&1)!==0&&Bs(r,n.child,null,_),r.child.memoizedState=ph(_),r.memoizedState=fh,p);if((r.mode&1)===0)return $l(n,r,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,p=Error(t(419)),c=uh(p,c,void 0),$l(n,r,_,c)}if(T=(_&n.childLanes)!==0,Kt||T){if(c=_t,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,gr(n,d),Ln(c,n,d,-1))}return Dh(),c=uh(Error(t(421))),$l(n,r,_,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=VE.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,sn=jr(d.nextSibling),rn=r,Qe=!0,Dn=null,n!==null&&(pn[mn++]=pr,pn[mn++]=mr,pn[mn++]=Fi,pr=n.id,mr=n.overflow,Fi=r),r=mh(r,c.children),r.flags|=4096,r)}function tm(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Wc(n.return,r,a)}function gh(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function nm(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(zt(n,r,c.children,a),c=Ye.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&tm(n,a,r);else if(n.tag===19)tm(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(He(Ye,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Ml(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),gh(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Ml(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}gh(r,!0,a,null,p);break;case"together":gh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Hl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function _r(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),$i|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=Xr(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Xr(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function wE(n,r,a){switch(r.tag){case 3:Jp(r),zs();break;case 5:gp(r);break;case 1:Wt(r.type)&&Rl(r);break;case 4:Qc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;He(xl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(He(Ye,Ye.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?em(n,r,a):(He(Ye,Ye.current&1),n=_r(n,r,a),n!==null?n.sibling:null);He(Ye,Ye.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return nm(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),He(Ye,Ye.current),c)break;return null;case 22:case 23:return r.lanes=0,Qp(n,r,a)}return _r(n,r,a)}var rm,yh,im,sm;rm=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},yh=function(){},im=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,zi(Kn.current);var p=null;switch(a){case"input":d=Ei(n,d),c=Ei(n,c),p=[];break;case"select":d=te({},d,{value:void 0}),c=te({},c,{value:void 0}),p=[];break;case"textarea":d=Ro(n,d),c=Ro(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Il)}xo(a,c);var _;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var T=d[F];for(_ in T)T.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?p||(p=[]):(p=p||[]).push(F,null));for(F in c){var k=c[F];if(T=d?.[F],c.hasOwnProperty(F)&&k!==T&&(k!=null||T!=null))if(F==="style")if(T){for(_ in T)!T.hasOwnProperty(_)||k&&k.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in k)k.hasOwnProperty(_)&&T[_]!==k[_]&&(a||(a={}),a[_]=k[_])}else a||(p||(p=[]),p.push(F,a)),a=k;else F==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,T=T?T.__html:void 0,k!=null&&T!==k&&(p=p||[]).push(F,k)):F==="children"?typeof k!="string"&&typeof k!="number"||(p=p||[]).push(F,""+k):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(k!=null&&F==="onScroll"&&qe("scroll",n),p||T===k||(p=[])):(p=p||[]).push(F,k))}a&&(p=p||[]).push("style",a);var F=p;(r.updateQueue=F)&&(r.flags|=4)}},sm=function(n,r,a,c){a!==c&&(r.flags|=4)};function da(n,r){if(!Qe)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Vt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function TE(n,r,a){var c=r.pendingProps;switch(Uc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(r),null;case 1:return Wt(r.type)&&Al(),Vt(r),null;case 3:return c=r.stateNode,qs(),We(qt),We(Dt),Jc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Nl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Dn!==null&&(kh(Dn),Dn=null))),yh(n,r),Vt(r),null;case 5:Yc(r);var d=zi(aa.current);if(a=r.type,n!==null&&r.stateNode!=null)im(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Vt(r),null}if(n=zi(Kn.current),Nl(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[Wn]=r,c[na]=p,n=(r.mode&1)!==0,a){case"dialog":qe("cancel",c),qe("close",c);break;case"iframe":case"object":case"embed":qe("load",c);break;case"video":case"audio":for(d=0;d<Zo.length;d++)qe(Zo[d],c);break;case"source":qe("error",c);break;case"img":case"image":case"link":qe("error",c),qe("load",c);break;case"details":qe("toggle",c);break;case"input":os(c,p),qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},qe("invalid",c);break;case"textarea":ls(c,p),qe("invalid",c)}xo(a,p),d=null;for(var _ in p)if(p.hasOwnProperty(_)){var T=p[_];_==="children"?typeof T=="string"?c.textContent!==T&&(p.suppressHydrationWarning!==!0&&Tl(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(p.suppressHydrationWarning!==!0&&Tl(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(_)&&T!=null&&_==="onScroll"&&qe("scroll",c)}switch(a){case"input":nr(c),Ga(c,p,!0);break;case"textarea":nr(c),Co(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Il)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=lt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[Wn]=r,n[na]=c,rm(n,r,!1,!1),r.stateNode=n;e:{switch(_=Vo(a,c),a){case"dialog":qe("cancel",n),qe("close",n),d=c;break;case"iframe":case"object":case"embed":qe("load",n),d=c;break;case"video":case"audio":for(d=0;d<Zo.length;d++)qe(Zo[d],n);d=c;break;case"source":qe("error",n),d=c;break;case"img":case"image":case"link":qe("error",n),qe("load",n),d=c;break;case"details":qe("toggle",n),d=c;break;case"input":os(n,c),d=Ei(n,c),qe("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=te({},c,{value:void 0}),qe("invalid",n);break;case"textarea":ls(n,c),d=Ro(n,c),qe("invalid",n);break;default:d=c}xo(a,d),T=d;for(p in T)if(T.hasOwnProperty(p)){var k=T[p];p==="style"?No(n,k):p==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&ko(n,k)):p==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&Pr(n,k):typeof k=="number"&&Pr(n,""+k):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?k!=null&&p==="onScroll"&&qe("scroll",n):k!=null&&re(n,p,k,_))}switch(a){case"input":nr(n),Ga(n,c,!1);break;case"textarea":nr(n),Co(n);break;case"option":c.value!=null&&n.setAttribute("value",""+be(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?ir(n,!!c.multiple,p,!1):c.defaultValue!=null&&ir(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Il)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Vt(r),null;case 6:if(n&&r.stateNode!=null)sm(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=zi(aa.current),zi(Kn.current),Nl(r)){if(c=r.stateNode,a=r.memoizedProps,c[Wn]=r,(p=c.nodeValue!==a)&&(n=rn,n!==null))switch(n.tag){case 3:Tl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Tl(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Wn]=r,r.stateNode=c}return Vt(r),null;case 13:if(We(Ye),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Qe&&sn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)lp(),zs(),r.flags|=98560,p=!1;else if(p=Nl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Wn]=r}else zs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Vt(r),p=!1}else Dn!==null&&(kh(Dn),Dn=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Ye.current&1)!==0?dt===0&&(dt=3):Dh())),r.updateQueue!==null&&(r.flags|=4),Vt(r),null);case 4:return qs(),yh(n,r),n===null&&ea(r.stateNode.containerInfo),Vt(r),null;case 10:return qc(r.type._context),Vt(r),null;case 17:return Wt(r.type)&&Al(),Vt(r),null;case 19:if(We(Ye),p=r.memoizedState,p===null)return Vt(r),null;if(c=(r.flags&128)!==0,_=p.rendering,_===null)if(c)da(p,!1);else{if(dt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(_=Ml(n),_!==null){for(r.flags|=128,da(p,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,_=p.alternate,_===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=_.childLanes,p.lanes=_.lanes,p.child=_.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=_.memoizedProps,p.memoizedState=_.memoizedState,p.updateQueue=_.updateQueue,p.type=_.type,n=_.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return He(Ye,Ye.current&1|2),r.child}n=n.sibling}p.tail!==null&&$e()>Qs&&(r.flags|=128,c=!0,da(p,!1),r.lanes=4194304)}else{if(!c)if(n=Ml(_),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),da(p,!0),p.tail===null&&p.tailMode==="hidden"&&!_.alternate&&!Qe)return Vt(r),null}else 2*$e()-p.renderingStartTime>Qs&&a!==1073741824&&(r.flags|=128,c=!0,da(p,!1),r.lanes=4194304);p.isBackwards?(_.sibling=r.child,r.child=_):(a=p.last,a!==null?a.sibling=_:r.child=_,p.last=_)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=$e(),r.sibling=null,a=Ye.current,He(Ye,c?a&1|2:a&1),r):(Vt(r),null);case 22:case 23:return Nh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(on&1073741824)!==0&&(Vt(r),r.subtreeFlags&6&&(r.flags|=8192)):Vt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function IE(n,r){switch(Uc(r),r.tag){case 1:return Wt(r.type)&&Al(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return qs(),We(qt),We(Dt),Jc(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Yc(r),null;case 13:if(We(Ye),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));zs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return We(Ye),null;case 4:return qs(),null;case 10:return qc(r.type._context),null;case 22:case 23:return Nh(),null;case 24:return null;default:return null}}var ql=!1,Ot=!1,SE=typeof WeakSet=="function"?WeakSet:Set,ie=null;function Ks(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Ze(n,r,c)}else a.current=null}function _h(n,r,a){try{a()}catch(c){Ze(n,r,c)}}var om=!1;function AE(n,r){if(Nc=br,n=Ff(),Tc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var _=0,T=-1,k=-1,F=0,K=0,G=n,q=null;t:for(;;){for(var ee;G!==a||d!==0&&G.nodeType!==3||(T=_+d),G!==p||c!==0&&G.nodeType!==3||(k=_+c),G.nodeType===3&&(_+=G.nodeValue.length),(ee=G.firstChild)!==null;)q=G,G=ee;for(;;){if(G===n)break t;if(q===a&&++F===d&&(T=_),q===p&&++K===c&&(k=_),(ee=G.nextSibling)!==null)break;G=q,q=G.parentNode}G=ee}a=T===-1||k===-1?null:{start:T,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Dc={focusedElem:n,selectionRange:a},br=!1,ie=r;ie!==null;)if(r=ie,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ie=n;else for(;ie!==null;){r=ie;try{var oe=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(oe!==null){var ae=oe.memoizedProps,nt=oe.memoizedState,M=r.stateNode,D=M.getSnapshotBeforeUpdate(r.elementType===r.type?ae:xn(r.type,ae),nt);M.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var b=r.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){Ze(r,r.return,Y)}if(n=r.sibling,n!==null){n.return=r.return,ie=n;break}ie=r.return}return oe=om,om=!1,oe}function fa(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&_h(r,a,p)}d=d.next}while(d!==c)}}function Wl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function vh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function am(n){var r=n.alternate;r!==null&&(n.alternate=null,am(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Wn],delete r[na],delete r[Lc],delete r[aE],delete r[lE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function lm(n){return n.tag===5||n.tag===3||n.tag===4}function um(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||lm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Eh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Il));else if(c!==4&&(n=n.child,n!==null))for(Eh(n,r,a),n=n.sibling;n!==null;)Eh(n,r,a),n=n.sibling}function wh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(wh(n,r,a),n=n.sibling;n!==null;)wh(n,r,a),n=n.sibling}var St=null,Vn=!1;function Wr(n,r,a){for(a=a.child;a!==null;)cm(n,r,a),a=a.sibling}function cm(n,r,a){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Pi,a)}catch{}switch(a.tag){case 5:Ot||Ks(a,r);case 6:var c=St,d=Vn;St=null,Wr(n,r,a),St=c,Vn=d,St!==null&&(Vn?(n=St,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):St.removeChild(a.stateNode));break;case 18:St!==null&&(Vn?(n=St,a=a.stateNode,n.nodeType===8?Oc(n.parentNode,a):n.nodeType===1&&Oc(n,a),kn(n)):Oc(St,a.stateNode));break;case 4:c=St,d=Vn,St=a.stateNode.containerInfo,Vn=!0,Wr(n,r,a),St=c,Vn=d;break;case 0:case 11:case 14:case 15:if(!Ot&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,_=p.destroy;p=p.tag,_!==void 0&&((p&2)!==0||(p&4)!==0)&&_h(a,r,_),d=d.next}while(d!==c)}Wr(n,r,a);break;case 1:if(!Ot&&(Ks(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){Ze(a,r,T)}Wr(n,r,a);break;case 21:Wr(n,r,a);break;case 22:a.mode&1?(Ot=(c=Ot)||a.memoizedState!==null,Wr(n,r,a),Ot=c):Wr(n,r,a);break;default:Wr(n,r,a)}}function hm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new SE),r.forEach(function(c){var d=OE.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function On(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,_=r,T=_;e:for(;T!==null;){switch(T.tag){case 5:St=T.stateNode,Vn=!1;break e;case 3:St=T.stateNode.containerInfo,Vn=!0;break e;case 4:St=T.stateNode.containerInfo,Vn=!0;break e}T=T.return}if(St===null)throw Error(t(160));cm(p,_,d),St=null,Vn=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(F){Ze(d,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)dm(r,n),r=r.sibling}function dm(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(On(r,n),Qn(n),c&4){try{fa(3,n,n.return),Wl(3,n)}catch(ae){Ze(n,n.return,ae)}try{fa(5,n,n.return)}catch(ae){Ze(n,n.return,ae)}}break;case 1:On(r,n),Qn(n),c&512&&a!==null&&Ks(a,a.return);break;case 5:if(On(r,n),Qn(n),c&512&&a!==null&&Ks(a,a.return),n.flags&32){var d=n.stateNode;try{Pr(d,"")}catch(ae){Ze(n,n.return,ae)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,_=a!==null?a.memoizedProps:p,T=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{T==="input"&&p.type==="radio"&&p.name!=null&&So(d,p),Vo(T,_);var F=Vo(T,p);for(_=0;_<k.length;_+=2){var K=k[_],G=k[_+1];K==="style"?No(d,G):K==="dangerouslySetInnerHTML"?ko(d,G):K==="children"?Pr(d,G):re(d,K,G,F)}switch(T){case"input":Ao(d,p);break;case"textarea":us(d,p);break;case"select":var q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var ee=p.value;ee!=null?ir(d,!!p.multiple,ee,!1):q!==!!p.multiple&&(p.defaultValue!=null?ir(d,!!p.multiple,p.defaultValue,!0):ir(d,!!p.multiple,p.multiple?[]:"",!1))}d[na]=p}catch(ae){Ze(n,n.return,ae)}}break;case 6:if(On(r,n),Qn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(ae){Ze(n,n.return,ae)}}break;case 3:if(On(r,n),Qn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{kn(r.containerInfo)}catch(ae){Ze(n,n.return,ae)}break;case 4:On(r,n),Qn(n);break;case 13:On(r,n),Qn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Sh=$e())),c&4&&hm(n);break;case 22:if(K=a!==null&&a.memoizedState!==null,n.mode&1?(Ot=(F=Ot)||K,On(r,n),Ot=F):On(r,n),Qn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!K&&(n.mode&1)!==0)for(ie=n,K=n.child;K!==null;){for(G=ie=K;ie!==null;){switch(q=ie,ee=q.child,q.tag){case 0:case 11:case 14:case 15:fa(4,q,q.return);break;case 1:Ks(q,q.return);var oe=q.stateNode;if(typeof oe.componentWillUnmount=="function"){c=q,a=q.return;try{r=c,oe.props=r.memoizedProps,oe.state=r.memoizedState,oe.componentWillUnmount()}catch(ae){Ze(c,a,ae)}}break;case 5:Ks(q,q.return);break;case 22:if(q.memoizedState!==null){mm(G);continue}}ee!==null?(ee.return=q,ie=ee):mm(G)}K=K.sibling}e:for(K=null,G=n;;){if(G.tag===5){if(K===null){K=G;try{d=G.stateNode,F?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(T=G.stateNode,k=G.memoizedProps.style,_=k!=null&&k.hasOwnProperty("display")?k.display:null,T.style.display=Po("display",_))}catch(ae){Ze(n,n.return,ae)}}}else if(G.tag===6){if(K===null)try{G.stateNode.nodeValue=F?"":G.memoizedProps}catch(ae){Ze(n,n.return,ae)}}else if((G.tag!==22&&G.tag!==23||G.memoizedState===null||G===n)&&G.child!==null){G.child.return=G,G=G.child;continue}if(G===n)break e;for(;G.sibling===null;){if(G.return===null||G.return===n)break e;K===G&&(K=null),G=G.return}K===G&&(K=null),G.sibling.return=G.return,G=G.sibling}}break;case 19:On(r,n),Qn(n),c&4&&hm(n);break;case 21:break;default:On(r,n),Qn(n)}}function Qn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(lm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Pr(d,""),c.flags&=-33);var p=um(n);wh(n,p,d);break;case 3:case 4:var _=c.stateNode.containerInfo,T=um(n);Eh(n,T,_);break;default:throw Error(t(161))}}catch(k){Ze(n,n.return,k)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function RE(n,r,a){ie=n,fm(n)}function fm(n,r,a){for(var c=(n.mode&1)!==0;ie!==null;){var d=ie,p=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||ql;if(!_){var T=d.alternate,k=T!==null&&T.memoizedState!==null||Ot;T=ql;var F=Ot;if(ql=_,(Ot=k)&&!F)for(ie=d;ie!==null;)_=ie,k=_.child,_.tag===22&&_.memoizedState!==null?gm(d):k!==null?(k.return=_,ie=k):gm(d);for(;p!==null;)ie=p,fm(p),p=p.sibling;ie=d,ql=T,Ot=F}pm(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,ie=p):pm(n)}}function pm(n){for(;ie!==null;){var r=ie;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Ot||Wl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Ot)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:xn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&mp(r,p,c);break;case 3:var _=r.updateQueue;if(_!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}mp(r,_,a)}break;case 5:var T=r.stateNode;if(a===null&&r.flags&4){a=T;var k=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var K=F.memoizedState;if(K!==null){var G=K.dehydrated;G!==null&&kn(G)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ot||r.flags&512&&vh(r)}catch(q){Ze(r,r.return,q)}}if(r===n){ie=null;break}if(a=r.sibling,a!==null){a.return=r.return,ie=a;break}ie=r.return}}function mm(n){for(;ie!==null;){var r=ie;if(r===n){ie=null;break}var a=r.sibling;if(a!==null){a.return=r.return,ie=a;break}ie=r.return}}function gm(n){for(;ie!==null;){var r=ie;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Wl(4,r)}catch(k){Ze(r,a,k)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(k){Ze(r,d,k)}}var p=r.return;try{vh(r)}catch(k){Ze(r,p,k)}break;case 5:var _=r.return;try{vh(r)}catch(k){Ze(r,_,k)}}}catch(k){Ze(r,r.return,k)}if(r===n){ie=null;break}var T=r.sibling;if(T!==null){T.return=r.return,ie=T;break}ie=r.return}}var CE=Math.ceil,Kl=ue.ReactCurrentDispatcher,Th=ue.ReactCurrentOwner,_n=ue.ReactCurrentBatchConfig,Oe=0,_t=null,st=null,At=0,on=0,Gs=zr(0),dt=0,pa=null,$i=0,Gl=0,Ih=0,ma=null,Gt=null,Sh=0,Qs=1/0,vr=null,Ql=!1,Ah=null,Kr=null,Yl=!1,Gr=null,Xl=0,ga=0,Rh=null,Jl=-1,Zl=0;function Bt(){return(Oe&6)!==0?$e():Jl!==-1?Jl:Jl=$e()}function Qr(n){return(n.mode&1)===0?1:(Oe&2)!==0&&At!==0?At&-At:cE.transition!==null?(Zl===0&&(Zl=Di()),Zl):(n=Ne,n!==0||(n=window.event,n=n===void 0?16:Ho(n.type)),n)}function Ln(n,r,a,c){if(50<ga)throw ga=0,Rh=null,Error(t(185));Vr(n,a,c),((Oe&2)===0||n!==_t)&&(n===_t&&((Oe&2)===0&&(Gl|=a),dt===4&&Yr(n,At)),Qt(n,c),a===1&&Oe===0&&(r.mode&1)===0&&(Qs=$e()+500,Cl&&$r()))}function Qt(n,r){var a=n.callbackNode;ar(n,r);var c=Ni(n,n===_t?At:0);if(c===0)a!==null&&Uo(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Uo(a),r===1)n.tag===0?uE(_m.bind(null,n)):rp(_m.bind(null,n)),sE(function(){(Oe&6)===0&&$r()}),a=null;else{switch(Lr(c)){case 1:a=ki;break;case 4:a=Nr;break;case 16:a=hn;break;case 536870912:a=Za;break;default:a=hn}a=Rm(a,ym.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function ym(n,r){if(Jl=-1,Zl=0,(Oe&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ys()&&n.callbackNode!==a)return null;var c=Ni(n,n===_t?At:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=eu(n,c);else{r=c;var d=Oe;Oe|=2;var p=Em();(_t!==n||At!==r)&&(vr=null,Qs=$e()+500,qi(n,r));do try{NE();break}catch(T){vm(n,T)}while(!0);Hc(),Kl.current=p,Oe=d,st!==null?r=0:(_t=null,At=0,r=dt)}if(r!==0){if(r===2&&(d=en(n),d!==0&&(c=d,r=Ch(n,d))),r===1)throw a=pa,qi(n,0),Yr(n,c),Qt(n,$e()),a;if(r===6)Yr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!kE(d)&&(r=eu(n,c),r===2&&(p=en(n),p!==0&&(c=p,r=Ch(n,p))),r===1))throw a=pa,qi(n,0),Yr(n,c),Qt(n,$e()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Wi(n,Gt,vr);break;case 3:if(Yr(n,c),(c&130023424)===c&&(r=Sh+500-$e(),10<r)){if(Ni(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Bt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Vc(Wi.bind(null,n,Gt,vr),r);break}Wi(n,Gt,vr);break;case 4:if(Yr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var _=31-Ut(c);p=1<<_,_=r[_],_>d&&(d=_),c&=~p}if(c=d,c=$e()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*CE(c/1960))-c,10<c){n.timeoutHandle=Vc(Wi.bind(null,n,Gt,vr),c);break}Wi(n,Gt,vr);break;case 5:Wi(n,Gt,vr);break;default:throw Error(t(329))}}}return Qt(n,$e()),n.callbackNode===a?ym.bind(null,n):null}function Ch(n,r){var a=ma;return n.current.memoizedState.isDehydrated&&(qi(n,r).flags|=256),n=eu(n,r),n!==2&&(r=Gt,Gt=a,r!==null&&kh(r)),n}function kh(n){Gt===null?Gt=n:Gt.push.apply(Gt,n)}function kE(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Nn(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Yr(n,r){for(r&=~Ih,r&=~Gl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Ut(r),c=1<<a;n[a]=-1,r&=~c}}function _m(n){if((Oe&6)!==0)throw Error(t(327));Ys();var r=Ni(n,0);if((r&1)===0)return Qt(n,$e()),null;var a=eu(n,r);if(n.tag!==0&&a===2){var c=en(n);c!==0&&(r=c,a=Ch(n,c))}if(a===1)throw a=pa,qi(n,0),Yr(n,r),Qt(n,$e()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Wi(n,Gt,vr),Qt(n,$e()),null}function Ph(n,r){var a=Oe;Oe|=1;try{return n(r)}finally{Oe=a,Oe===0&&(Qs=$e()+500,Cl&&$r())}}function Hi(n){Gr!==null&&Gr.tag===0&&(Oe&6)===0&&Ys();var r=Oe;Oe|=1;var a=_n.transition,c=Ne;try{if(_n.transition=null,Ne=1,n)return n()}finally{Ne=c,_n.transition=a,Oe=r,(Oe&6)===0&&$r()}}function Nh(){on=Gs.current,We(Gs)}function qi(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,iE(a)),st!==null)for(a=st.return;a!==null;){var c=a;switch(Uc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Al();break;case 3:qs(),We(qt),We(Dt),Jc();break;case 5:Yc(c);break;case 4:qs();break;case 13:We(Ye);break;case 19:We(Ye);break;case 10:qc(c.type._context);break;case 22:case 23:Nh()}a=a.return}if(_t=n,st=n=Xr(n.current,null),At=on=r,dt=0,pa=null,Ih=Gl=$i=0,Gt=ma=null,ji!==null){for(r=0;r<ji.length;r++)if(a=ji[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var _=p.next;p.next=d,c.next=_}a.pending=c}ji=null}return n}function vm(n,r){do{var a=st;try{if(Hc(),bl.current=zl,Fl){for(var c=Xe.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Fl=!1}if(Bi=0,yt=ht=Xe=null,la=!1,ua=0,Th.current=null,a===null||a.return===null){dt=1,pa=r,st=null;break}e:{var p=n,_=a.return,T=a,k=r;if(r=At,T.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var F=k,K=T,G=K.tag;if((K.mode&1)===0&&(G===0||G===11||G===15)){var q=K.alternate;q?(K.updateQueue=q.updateQueue,K.memoizedState=q.memoizedState,K.lanes=q.lanes):(K.updateQueue=null,K.memoizedState=null)}var ee=Hp(_);if(ee!==null){ee.flags&=-257,qp(ee,_,T,p,r),ee.mode&1&&$p(p,F,r),r=ee,k=F;var oe=r.updateQueue;if(oe===null){var ae=new Set;ae.add(k),r.updateQueue=ae}else oe.add(k);break e}else{if((r&1)===0){$p(p,F,r),Dh();break e}k=Error(t(426))}}else if(Qe&&T.mode&1){var nt=Hp(_);if(nt!==null){(nt.flags&65536)===0&&(nt.flags|=256),qp(nt,_,T,p,r),Bc(Ws(k,T));break e}}p=k=Ws(k,T),dt!==4&&(dt=2),ma===null?ma=[p]:ma.push(p),p=_;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var M=zp(p,k,r);pp(p,M);break e;case 1:T=k;var D=p.type,b=p.stateNode;if((p.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Kr===null||!Kr.has(b)))){p.flags|=65536,r&=-r,p.lanes|=r;var Y=Bp(p,T,r);pp(p,Y);break e}}p=p.return}while(p!==null)}Tm(a)}catch(le){r=le,st===a&&a!==null&&(st=a=a.return);continue}break}while(!0)}function Em(){var n=Kl.current;return Kl.current=zl,n===null?zl:n}function Dh(){(dt===0||dt===3||dt===2)&&(dt=4),_t===null||($i&268435455)===0&&(Gl&268435455)===0||Yr(_t,At)}function eu(n,r){var a=Oe;Oe|=2;var c=Em();(_t!==n||At!==r)&&(vr=null,qi(n,r));do try{PE();break}catch(d){vm(n,d)}while(!0);if(Hc(),Oe=a,Kl.current=c,st!==null)throw Error(t(261));return _t=null,At=0,dt}function PE(){for(;st!==null;)wm(st)}function NE(){for(;st!==null&&!Xa();)wm(st)}function wm(n){var r=Am(n.alternate,n,on);n.memoizedProps=n.pendingProps,r===null?Tm(n):st=r,Th.current=null}function Tm(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=TE(a,r,on),a!==null){st=a;return}}else{if(a=IE(a,r),a!==null){a.flags&=32767,st=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dt=6,st=null;return}}if(r=r.sibling,r!==null){st=r;return}st=r=n}while(r!==null);dt===0&&(dt=5)}function Wi(n,r,a){var c=Ne,d=_n.transition;try{_n.transition=null,Ne=1,DE(n,r,a,c)}finally{_n.transition=d,Ne=c}return null}function DE(n,r,a,c){do Ys();while(Gr!==null);if((Oe&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(ze(n,p),n===_t&&(st=_t=null,At=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Yl||(Yl=!0,Rm(hn,function(){return Ys(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=_n.transition,_n.transition=null;var _=Ne;Ne=1;var T=Oe;Oe|=4,Th.current=null,AE(n,a),dm(a,n),Xv(Dc),br=!!Nc,Dc=Nc=null,n.current=a,RE(a),pc(),Oe=T,Ne=_,_n.transition=p}else n.current=a;if(Yl&&(Yl=!1,Gr=n,Xl=d),p=n.pendingLanes,p===0&&(Kr=null),el(a.stateNode),Qt(n,$e()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Ql)throw Ql=!1,n=Ah,Ah=null,n;return(Xl&1)!==0&&n.tag!==0&&Ys(),p=n.pendingLanes,(p&1)!==0?n===Rh?ga++:(ga=0,Rh=n):ga=0,$r(),null}function Ys(){if(Gr!==null){var n=Lr(Xl),r=_n.transition,a=Ne;try{if(_n.transition=null,Ne=16>n?16:n,Gr===null)var c=!1;else{if(n=Gr,Gr=null,Xl=0,(Oe&6)!==0)throw Error(t(331));var d=Oe;for(Oe|=4,ie=n.current;ie!==null;){var p=ie,_=p.child;if((ie.flags&16)!==0){var T=p.deletions;if(T!==null){for(var k=0;k<T.length;k++){var F=T[k];for(ie=F;ie!==null;){var K=ie;switch(K.tag){case 0:case 11:case 15:fa(8,K,p)}var G=K.child;if(G!==null)G.return=K,ie=G;else for(;ie!==null;){K=ie;var q=K.sibling,ee=K.return;if(am(K),K===F){ie=null;break}if(q!==null){q.return=ee,ie=q;break}ie=ee}}}var oe=p.alternate;if(oe!==null){var ae=oe.child;if(ae!==null){oe.child=null;do{var nt=ae.sibling;ae.sibling=null,ae=nt}while(ae!==null)}}ie=p}}if((p.subtreeFlags&2064)!==0&&_!==null)_.return=p,ie=_;else e:for(;ie!==null;){if(p=ie,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:fa(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,ie=M;break e}ie=p.return}}var D=n.current;for(ie=D;ie!==null;){_=ie;var b=_.child;if((_.subtreeFlags&2064)!==0&&b!==null)b.return=_,ie=b;else e:for(_=D;ie!==null;){if(T=ie,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:Wl(9,T)}}catch(le){Ze(T,T.return,le)}if(T===_){ie=null;break e}var Y=T.sibling;if(Y!==null){Y.return=T.return,ie=Y;break e}ie=T.return}}if(Oe=d,$r(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Pi,n)}catch{}c=!0}return c}finally{Ne=a,_n.transition=r}}return!1}function Im(n,r,a){r=Ws(a,r),r=zp(n,r,1),n=qr(n,r,1),r=Bt(),n!==null&&(Vr(n,1,r),Qt(n,r))}function Ze(n,r,a){if(n.tag===3)Im(n,n,a);else for(;r!==null;){if(r.tag===3){Im(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Kr===null||!Kr.has(c))){n=Ws(a,n),n=Bp(r,n,1),r=qr(r,n,1),n=Bt(),r!==null&&(Vr(r,1,n),Qt(r,n));break}}r=r.return}}function xE(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Bt(),n.pingedLanes|=n.suspendedLanes&a,_t===n&&(At&a)===a&&(dt===4||dt===3&&(At&130023424)===At&&500>$e()-Sh?qi(n,0):Ih|=a),Qt(n,r)}function Sm(n,r){r===0&&((n.mode&1)===0?r=1:(r=vs,vs<<=1,(vs&130023424)===0&&(vs=4194304)));var a=Bt();n=gr(n,r),n!==null&&(Vr(n,r,a),Qt(n,a))}function VE(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Sm(n,a)}function OE(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Sm(n,a)}var Am;Am=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||qt.current)Kt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Kt=!1,wE(n,r,a);Kt=(n.flags&131072)!==0}else Kt=!1,Qe&&(r.flags&1048576)!==0&&ip(r,Pl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Hl(n,r),n=r.pendingProps;var d=Fs(r,Dt.current);Hs(r,a),d=th(null,r,c,n,d,a);var p=nh();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Wt(c)?(p=!0,Rl(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Gc(r),d.updater=Bl,r.stateNode=d,d._reactInternals=r,lh(r,c,n,a),r=dh(null,r,c,!0,p,a)):(r.tag=0,Qe&&p&&Fc(r),zt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Hl(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=ME(c),n=xn(c,n),d){case 0:r=hh(null,r,c,n,a);break e;case 1:r=Xp(null,r,c,n,a);break e;case 11:r=Wp(null,r,c,n,a);break e;case 14:r=Kp(null,r,c,xn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:xn(c,d),hh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:xn(c,d),Xp(n,r,c,d,a);case 3:e:{if(Jp(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,fp(n,r),Ll(r,c,null,a);var _=r.memoizedState;if(c=_.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=Ws(Error(t(423)),r),r=Zp(n,r,c,a,d);break e}else if(c!==d){d=Ws(Error(t(424)),r),r=Zp(n,r,c,a,d);break e}else for(sn=jr(r.stateNode.containerInfo.firstChild),rn=r,Qe=!0,Dn=null,a=hp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(zs(),c===d){r=_r(n,r,a);break e}zt(n,r,c,a)}r=r.child}return r;case 5:return gp(r),n===null&&zc(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,_=d.children,xc(c,d)?_=null:p!==null&&xc(c,p)&&(r.flags|=32),Yp(n,r),zt(n,r,_,a),r.child;case 6:return n===null&&zc(r),null;case 13:return em(n,r,a);case 4:return Qc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Bs(r,null,c,a):zt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:xn(c,d),Wp(n,r,c,d,a);case 7:return zt(n,r,r.pendingProps,a),r.child;case 8:return zt(n,r,r.pendingProps.children,a),r.child;case 12:return zt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,_=d.value,He(xl,c._currentValue),c._currentValue=_,p!==null)if(Nn(p.value,_)){if(p.children===d.children&&!qt.current){r=_r(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var T=p.dependencies;if(T!==null){_=p.child;for(var k=T.firstContext;k!==null;){if(k.context===c){if(p.tag===1){k=yr(-1,a&-a),k.tag=2;var F=p.updateQueue;if(F!==null){F=F.shared;var K=F.pending;K===null?k.next=k:(k.next=K.next,K.next=k),F.pending=k}}p.lanes|=a,k=p.alternate,k!==null&&(k.lanes|=a),Wc(p.return,a,r),T.lanes|=a;break}k=k.next}}else if(p.tag===10)_=p.type===r.type?null:p.child;else if(p.tag===18){if(_=p.return,_===null)throw Error(t(341));_.lanes|=a,T=_.alternate,T!==null&&(T.lanes|=a),Wc(_,a,r),_=p.sibling}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===r){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}zt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Hs(r,a),d=gn(d),c=c(d),r.flags|=1,zt(n,r,c,a),r.child;case 14:return c=r.type,d=xn(c,r.pendingProps),d=xn(c.type,d),Kp(n,r,c,d,a);case 15:return Gp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:xn(c,d),Hl(n,r),r.tag=1,Wt(c)?(n=!0,Rl(r)):n=!1,Hs(r,a),Up(r,c,d),lh(r,c,d,a),dh(null,r,c,!0,n,a);case 19:return nm(n,r,a);case 22:return Qp(n,r,a)}throw Error(t(156,r.tag))};function Rm(n,r){return ys(n,r)}function LE(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(n,r,a,c){return new LE(n,r,a,c)}function xh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ME(n){if(typeof n=="function")return xh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===Pt)return 14}return 2}function Xr(n,r){var a=n.alternate;return a===null?(a=vn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function tu(n,r,a,c,d,p){var _=2;if(c=n,typeof n=="function")xh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case P:return Ki(a.children,d,p,r);case I:_=8,d|=8;break;case R:return n=vn(12,a,r,d|2),n.elementType=R,n.lanes=p,n;case S:return n=vn(13,a,r,d),n.elementType=S,n.lanes=p,n;case et:return n=vn(19,a,r,d),n.elementType=et,n.lanes=p,n;case je:return nu(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case N:_=10;break e;case x:_=9;break e;case O:_=11;break e;case Pt:_=14;break e;case Nt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=vn(_,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function Ki(n,r,a,c){return n=vn(7,n,c,r),n.lanes=a,n}function nu(n,r,a,c){return n=vn(22,n,c,r),n.elementType=je,n.lanes=a,n.stateNode={isHidden:!1},n}function Vh(n,r,a){return n=vn(6,n,null,r),n.lanes=a,n}function Oh(n,r,a){return r=vn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function bE(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xr(0),this.expirationTimes=xr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Lh(n,r,a,c,d,p,_,T,k){return n=new bE(n,r,a,T,k),r===1?(r=1,p===!0&&(r|=8)):r=0,p=vn(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gc(p),n}function FE(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ee,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function Cm(n){if(!n)return Br;n=n._reactInternals;e:{if(In(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Wt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Wt(a))return tp(n,a,r)}return r}function km(n,r,a,c,d,p,_,T,k){return n=Lh(a,c,!0,n,d,p,_,T,k),n.context=Cm(null),a=n.current,c=Bt(),d=Qr(a),p=yr(c,d),p.callback=r??null,qr(a,p,d),n.current.lanes=d,Vr(n,d,c),Qt(n,c),n}function ru(n,r,a,c){var d=r.current,p=Bt(),_=Qr(d);return a=Cm(a),r.context===null?r.context=a:r.pendingContext=a,r=yr(p,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=qr(d,r,_),n!==null&&(Ln(n,d,_,p),Ol(n,d,_)),_}function iu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Pm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Mh(n,r){Pm(n,r),(n=n.alternate)&&Pm(n,r)}function UE(){return null}var Nm=typeof reportError=="function"?reportError:function(n){console.error(n)};function bh(n){this._internalRoot=n}su.prototype.render=bh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));ru(n,r,null,null)},su.prototype.unmount=bh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Hi(function(){ru(null,n,null,null)}),r[dr]=null}};function su(n){this._internalRoot=n}su.prototype.unstable_scheduleHydration=function(n){if(n){var r=sl();n={blockedOn:null,target:n,priority:r};for(var a=0;a<Bn.length&&r!==0&&r<Bn[a].priority;a++);Bn.splice(a,0,n),a===0&&ll(n)}};function Fh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ou(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Dm(){}function jE(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var F=iu(_);p.call(F)}}var _=km(r,c,n,0,null,!1,!1,"",Dm);return n._reactRootContainer=_,n[dr]=_.current,ea(n.nodeType===8?n.parentNode:n),Hi(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var F=iu(k);T.call(F)}}var k=Lh(n,0,!1,null,null,!1,!1,"",Dm);return n._reactRootContainer=k,n[dr]=k.current,ea(n.nodeType===8?n.parentNode:n),Hi(function(){ru(r,k,a,c)}),k}function au(n,r,a,c,d){var p=a._reactRootContainer;if(p){var _=p;if(typeof d=="function"){var T=d;d=function(){var k=iu(_);T.call(k)}}ru(r,_,n,d)}else _=jE(a,r,n,d,c);return iu(_)}rl=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Dr(r.pendingLanes);a!==0&&(Or(r,a|1),Qt(r,$e()),(Oe&6)===0&&(Qs=$e()+500,$r()))}break;case 13:Hi(function(){var c=gr(n,1);if(c!==null){var d=Bt();Ln(c,n,1,d)}}),Mh(n,1)}},Es=function(n){if(n.tag===13){var r=gr(n,134217728);if(r!==null){var a=Bt();Ln(r,n,134217728,a)}Mh(n,134217728)}},il=function(n){if(n.tag===13){var r=Qr(n),a=gr(n,r);if(a!==null){var c=Bt();Ln(a,n,r,c)}Mh(n,r)}},sl=function(){return Ne},ol=function(n,r){var a=Ne;try{return Ne=n,r()}finally{Ne=a}},hs=function(n,r,a){switch(r){case"input":if(Ao(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=Sl(c);if(!d)throw Error(t(90));ss(c),Ao(c,d)}}}break;case"textarea":us(n,a);break;case"select":r=a.value,r!=null&&ir(n,!!a.multiple,r,!1)}},Si=Ph,Lo=Hi;var zE={usingClientEntryPoint:!1,Events:[ra,Ms,Sl,jn,Oo,Ph]},ya={findFiberByHostInstance:Mi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},BE={bundleType:ya.bundleType,version:ya.version,rendererPackageName:ya.rendererPackageName,rendererConfig:ya.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ue.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Fo(n),n===null?null:n.stateNode},findFiberByHostInstance:ya.findFiberByHostInstance||UE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lu.isDisabled&&lu.supportsFiber)try{Pi=lu.inject(BE),Zt=lu}catch{}}return Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zE,Yt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fh(r))throw Error(t(200));return FE(n,r,null,a)},Yt.createRoot=function(n,r){if(!Fh(n))throw Error(t(299));var a=!1,c="",d=Nm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Lh(n,1,!1,null,null,a,!1,c,d),n[dr]=r.current,ea(n.nodeType===8?n.parentNode:n),new bh(r)},Yt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Fo(r),n=n===null?null:n.stateNode,n},Yt.flushSync=function(n){return Hi(n)},Yt.hydrate=function(n,r,a){if(!ou(r))throw Error(t(200));return au(null,n,r,!0,a)},Yt.hydrateRoot=function(n,r,a){if(!Fh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",_=Nm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),r=km(r,null,n,1,a??null,d,!1,p,_),n[dr]=r.current,ea(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new su(r)},Yt.render=function(n,r,a){if(!ou(r))throw Error(t(200));return au(null,n,r,!1,a)},Yt.unmountComponentAtNode=function(n){if(!ou(n))throw Error(t(40));return n._reactRootContainer?(Hi(function(){au(null,null,n,!1,function(){n._reactRootContainer=null,n[dr]=null})}),!0):!1},Yt.unstable_batchedUpdates=Ph,Yt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!ou(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return au(n,r,a,!1,c)},Yt.version="18.3.1-next-f1338f8080-20240426",Yt}var Um;function XE(){if(Um)return zh.exports;Um=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),zh.exports=YE(),zh.exports}var jm;function JE(){if(jm)return uu;jm=1;var i=XE();return uu.createRoot=i.createRoot,uu.hydrateRoot=i.hydrateRoot,uu}var ZE=JE();const ew=yy(ZE),tw=()=>{};var zm={};/**
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
 */const _y=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},nw=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],y=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},vy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,y=o+2<i.length,v=y?i[o+2]:0,w=u>>2,A=(u&3)<<4|m>>4;let C=(m&15)<<2|v>>6,j=v&63;y||(j=64,h||(C=64)),s.push(t[w],t[A],t[C],t[j])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(_y(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):nw(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const v=o<i.length?t[i.charAt(o)]:64;++o;const A=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||v==null||A==null)throw new rw;const C=u<<2|m>>4;if(s.push(C),v!==64){const j=m<<4&240|v>>2;if(s.push(j),A!==64){const W=v<<6&192|A;s.push(W)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class rw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iw=function(i){const e=_y(i);return vy.encodeByteArray(e,!0)},Ru=function(i){return iw(i).replace(/\./g,"")},Ey=function(i){try{return vy.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function sw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ow=()=>sw().__FIREBASE_DEFAULTS__,aw=()=>{if(typeof process>"u"||typeof zm>"u")return;const i=zm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},lw=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Ey(i[1]);return e&&JSON.parse(e)},Wu=()=>{try{return tw()||ow()||aw()||lw()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},wy=i=>{var e,t;return(t=(e=Wu())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},uw=i=>{const e=wy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ty=()=>{var i;return(i=Wu())===null||i===void 0?void 0:i.config},Iy=i=>{var e;return(e=Wu())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class cw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function go(i){return i.endsWith(".cloudworkstations.dev")}async function Sy(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function hw(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Ru(JSON.stringify(t)),Ru(JSON.stringify(h)),""].join(".")}const Ia={};function dw(){const i={prod:[],emulator:[]};for(const e of Object.keys(Ia))Ia[e]?i.emulator.push(e):i.prod.push(e);return i}function fw(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let Bm=!1;function Ay(i,e){if(typeof window>"u"||typeof document>"u"||!go(window.location.host)||Ia[i]===e||Ia[i]||Bm)return;Ia[i]=e;function t(C){return`__firebase__banner__${C}`}const s="__firebase__banner",u=dw().prod.length>0;function h(){const C=document.getElementById(s);C&&C.remove()}function m(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function y(C,j){C.setAttribute("width","24"),C.setAttribute("id",j),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function v(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{Bm=!0,h()},C}function w(C,j){C.setAttribute("id",j),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function A(){const C=fw(s),j=t("text"),W=document.getElementById(j)||document.createElement("span"),Q=t("learnmore"),B=document.getElementById(Q)||document.createElement("a"),ye=t("preprendIcon"),J=document.getElementById(ye)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const re=C.element;m(re),w(B,Q);const ue=v();y(J,ye),re.append(J,W,B,ue),document.body.appendChild(re)}u?(W.innerText="Preview backend disconnected.",J.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(J.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,W.innerText="Preview backend running in this workspace."),W.setAttribute("id",j)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
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
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function mw(){var i;const e=(i=Wu())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function yw(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function _w(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vw(){const i=Ft();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Ew(){return!mw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ww(){try{return typeof indexedDB=="object"}catch{return!1}}function Tw(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const Iw="FirebaseError";class Cr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Iw,Object.setPrototypeOf(this,Cr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ba.prototype.create)}}class ba{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?Sw(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Cr(o,m,s)}}function Sw(i,e){return i.replace(Aw,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const Aw=/\{\$([^}]+)}/g;function Rw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Ji(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if($m(u)&&$m(h)){if(!Ji(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function $m(i){return i!==null&&typeof i=="object"}/**
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
 */function Fa(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Cw(i,e){const t=new kw(i,e);return t.subscribe.bind(t)}class kw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Pw(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Hh),o.error===void 0&&(o.error=Hh),o.complete===void 0&&(o.complete=Hh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pw(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Hh(){}/**
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
 */function wt(i){return i&&i._delegate?i._delegate:i}class Zi{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Gi="[DEFAULT]";/**
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
 */class Nw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new cw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e?.identifier),o=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xw(e))try{this.getOrInitializeService({instanceIdentifier:Gi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Gi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gi){return this.instances.has(e)}getOptions(e=Gi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Dw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Gi){return this.component?this.component.multipleInstances?e:Gi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dw(i){return i===Gi?void 0:i}function xw(i){return i.instantiationMode==="EAGER"}/**
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
 */class Vw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Nw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ke;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ke||(ke={}));const Ow={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},Lw=ke.INFO,Mw={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},bw=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=Mw[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xd{constructor(e){this.name=e,this._logLevel=Lw,this._logHandler=bw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ow[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const Fw=(i,e)=>e.some(t=>i instanceof t);let Hm,qm;function Uw(){return Hm||(Hm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jw(){return qm||(qm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ry=new WeakMap,id=new WeakMap,Cy=new WeakMap,qh=new WeakMap,Vd=new WeakMap;function zw(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(si(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Ry.set(t,i)}).catch(()=>{}),Vd.set(e,i),e}function Bw(i){if(id.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});id.set(i,e)}let sd={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return id.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Cy.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return si(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function $w(i){sd=i(sd)}function Hw(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Wh(this),e,...t);return Cy.set(s,e.sort?e.sort():[e]),si(s)}:jw().includes(i)?function(...e){return i.apply(Wh(this),e),si(Ry.get(this))}:function(...e){return si(i.apply(Wh(this),e))}}function qw(i){return typeof i=="function"?Hw(i):(i instanceof IDBTransaction&&Bw(i),Fw(i,Uw())?new Proxy(i,sd):i)}function si(i){if(i instanceof IDBRequest)return zw(i);if(qh.has(i))return qh.get(i);const e=qw(i);return e!==i&&(qh.set(i,e),Vd.set(e,i)),e}const Wh=i=>Vd.get(i);function Ww(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=si(h);return s&&h.addEventListener("upgradeneeded",y=>{s(si(h.result),y.oldVersion,y.newVersion,si(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const Kw=["get","getKey","getAll","getAllKeys","count"],Gw=["put","add","delete","clear"],Kh=new Map;function Wm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Kh.get(e))return Kh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=Gw.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||Kw.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,o?"readwrite":"readonly");let v=y.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),o&&y.done]))[0]};return Kh.set(e,u),u}$w(i=>({...i,get:(e,t,s)=>Wm(e,t)||i.get(e,t,s),has:(e,t)=>!!Wm(e,t)||i.has(e,t)}));/**
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
 */class Qw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Yw(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Yw(i){const e=i.getComponent();return e?.type==="VERSION"}const od="@firebase/app",Km="0.13.1";/**
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
 */const Tr=new xd("@firebase/app"),Xw="@firebase/app-compat",Jw="@firebase/analytics-compat",Zw="@firebase/analytics",e0="@firebase/app-check-compat",t0="@firebase/app-check",n0="@firebase/auth",r0="@firebase/auth-compat",i0="@firebase/database",s0="@firebase/data-connect",o0="@firebase/database-compat",a0="@firebase/functions",l0="@firebase/functions-compat",u0="@firebase/installations",c0="@firebase/installations-compat",h0="@firebase/messaging",d0="@firebase/messaging-compat",f0="@firebase/performance",p0="@firebase/performance-compat",m0="@firebase/remote-config",g0="@firebase/remote-config-compat",y0="@firebase/storage",_0="@firebase/storage-compat",v0="@firebase/firestore",E0="@firebase/ai",w0="@firebase/firestore-compat",T0="firebase",I0="11.9.0";/**
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
 */const ad="[DEFAULT]",S0={[od]:"fire-core",[Xw]:"fire-core-compat",[Zw]:"fire-analytics",[Jw]:"fire-analytics-compat",[t0]:"fire-app-check",[e0]:"fire-app-check-compat",[n0]:"fire-auth",[r0]:"fire-auth-compat",[i0]:"fire-rtdb",[s0]:"fire-data-connect",[o0]:"fire-rtdb-compat",[a0]:"fire-fn",[l0]:"fire-fn-compat",[u0]:"fire-iid",[c0]:"fire-iid-compat",[h0]:"fire-fcm",[d0]:"fire-fcm-compat",[f0]:"fire-perf",[p0]:"fire-perf-compat",[m0]:"fire-rc",[g0]:"fire-rc-compat",[y0]:"fire-gcs",[_0]:"fire-gcs-compat",[v0]:"fire-fst",[w0]:"fire-fst-compat",[E0]:"fire-vertex","fire-js":"fire-js",[T0]:"fire-js-all"};/**
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
 */const Cu=new Map,A0=new Map,ld=new Map;function Gm(i,e){try{i.container.addComponent(e)}catch(t){Tr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function oo(i){const e=i.name;if(ld.has(e))return Tr.debug(`There were multiple attempts to register component ${e}.`),!1;ld.set(e,i);for(const t of Cu.values())Gm(t,i);for(const t of A0.values())Gm(t,i);return!0}function Od(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Mn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const R0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},oi=new ba("app","Firebase",R0);/**
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
 */class C0{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Zi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw oi.create("app-deleted",{appName:this._name})}}/**
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
 */const yo=I0;function ky(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ad,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw oi.create("bad-app-name",{appName:String(o)});if(t||(t=Ty()),!t)throw oi.create("no-options");const u=Cu.get(o);if(u){if(Ji(t,u.options)&&Ji(s,u.config))return u;throw oi.create("duplicate-app",{appName:o})}const h=new Vw(o);for(const y of ld.values())h.addComponent(y);const m=new C0(t,s,h);return Cu.set(o,m),m}function Py(i=ad){const e=Cu.get(i);if(!e&&i===ad&&Ty())return ky();if(!e)throw oi.create("no-app",{appName:i});return e}function ai(i,e,t){var s;let o=(s=S0[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tr.warn(m.join(" "));return}oo(new Zi(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const k0="firebase-heartbeat-database",P0=1,Pa="firebase-heartbeat-store";let Gh=null;function Ny(){return Gh||(Gh=Ww(k0,P0,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Pa)}catch(t){console.warn(t)}}}}).catch(i=>{throw oi.create("idb-open",{originalErrorMessage:i.message})})),Gh}async function N0(i){try{const t=(await Ny()).transaction(Pa),s=await t.objectStore(Pa).get(Dy(i));return await t.done,s}catch(e){if(e instanceof Cr)Tr.warn(e.message);else{const t=oi.create("idb-get",{originalErrorMessage:e?.message});Tr.warn(t.message)}}}async function Qm(i,e){try{const s=(await Ny()).transaction(Pa,"readwrite");await s.objectStore(Pa).put(e,Dy(i)),await s.done}catch(t){if(t instanceof Cr)Tr.warn(t.message);else{const s=oi.create("idb-set",{originalErrorMessage:t?.message});Tr.warn(s.message)}}}function Dy(i){return`${i.name}!${i.options.appId}`}/**
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
 */const D0=1024,x0=30;class V0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new L0(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Ym();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>x0){const h=M0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Tr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ym(),{heartbeatsToSend:s,unsentEntries:o}=O0(this._heartbeatsCache.heartbeats),u=Ru(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Tr.warn(t),""}}}function Ym(){return new Date().toISOString().substring(0,10)}function O0(i,e=D0){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Xm(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Xm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class L0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ww()?Tw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await N0(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Qm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Qm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Xm(i){return Ru(JSON.stringify({version:2,heartbeats:i})).length}function M0(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function b0(i){oo(new Zi("platform-logger",e=>new Qw(e),"PRIVATE")),oo(new Zi("heartbeat",e=>new V0(e),"PRIVATE")),ai(od,Km,i),ai(od,Km,"esm2017"),ai("fire-js","")}b0("");var F0="firebase",U0="11.9.1";/**
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
 */ai(F0,U0,"app");function Ld(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function xy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const j0=xy,Vy=new ba("auth","Firebase",xy());/**
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
 */const ku=new xd("@firebase/auth");function z0(i,...e){ku.logLevel<=ke.WARN&&ku.warn(`Auth (${yo}): ${i}`,...e)}function gu(i,...e){ku.logLevel<=ke.ERROR&&ku.error(`Auth (${yo}): ${i}`,...e)}/**
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
 */function Ir(i,...e){throw Md(i,...e)}function Xn(i,...e){return Md(i,...e)}function Oy(i,e,t){const s=Object.assign(Object.assign({},j0()),{[e]:t});return new ba("auth","Firebase",s).create(e,{appName:i.name})}function li(i){return Oy(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Md(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return Vy.create(i,...e)}function ve(i,e,...t){if(!i)throw Md(e,...t)}function Er(i){const e="INTERNAL ASSERTION FAILED: "+i;throw gu(e),new Error(e)}function Sr(i,e){i||Er(e)}/**
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
 */function ud(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function B0(){return Jm()==="http:"||Jm()==="https:"}function Jm(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function $0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(B0()||yw()||"connection"in navigator)?navigator.onLine:!0}function H0(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Ua{constructor(e,t){this.shortDelay=e,this.longDelay=t,Sr(t>e,"Short delay should be less than long delay!"),this.isMobile=pw()||_w()}get(){return $0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bd(i,e){Sr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ly{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const q0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const W0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],K0=new Ua(3e4,6e4);function Ku(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function _o(i,e,t,s,o={}){return My(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Fa(Object.assign({key:i.config.apiKey},h)).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const v=Object.assign({method:e,headers:y},u);return gw()||(v.referrerPolicy="no-referrer"),i.emulatorConfig&&go(i.emulatorConfig.host)&&(v.credentials="include"),Ly.fetch()(await Fy(i,i.config.apiHost,t,m),v)})}async function My(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},q0),e);try{const o=new G0(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw cu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,v]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw cu(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw cu(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw cu(i,"user-disabled",h);const w=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw Oy(i,w,v);Ir(i,w)}}catch(o){if(o instanceof Cr)throw o;Ir(i,"network-request-failed",{message:String(o)})}}async function by(i,e,t,s,o={}){const u=await _o(i,e,t,s,o);return"mfaPendingCredential"in u&&Ir(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function Fy(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?bd(i.config,o):`${i.config.apiScheme}://${o}`;return W0.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}class G0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Xn(this.auth,"network-request-failed")),K0.get())})}}function cu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Xn(i,e,s);return o.customData._tokenResponse=t,o}/**
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
 */async function Q0(i,e){return _o(i,"POST","/v1/accounts:delete",e)}async function Pu(i,e){return _o(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Sa(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Y0(i,e=!1){const t=wt(i),s=await t.getIdToken(e),o=Fd(s);ve(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u?.sign_in_provider;return{claims:o,token:s,authTime:Sa(Qh(o.auth_time)),issuedAtTime:Sa(Qh(o.iat)),expirationTime:Sa(Qh(o.exp)),signInProvider:h||null,signInSecondFactor:u?.sign_in_second_factor||null}}function Qh(i){return Number(i)*1e3}function Fd(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return gu("JWT malformed, contained fewer than 3 sections"),null;try{const o=Ey(t);return o?JSON.parse(o):(gu("Failed to decode base64 JWT payload"),null)}catch(o){return gu("Caught error parsing JWT payload as JSON",o?.toString()),null}}function Zm(i){const e=Fd(i);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Na(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Cr&&X0(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function X0({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class J0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class cd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Sa(this.lastLoginAt),this.creationTime=Sa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Nu(i){var e;const t=i.auth,s=await i.getIdToken(),o=await Na(i,Pu(t,{idToken:s}));ve(o?.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Uy(u.providerUserInfo):[],m=eT(i.providerData,h),y=i.isAnonymous,v=!(i.email&&u.passwordHash)&&!m?.length,w=y?v:!1,A={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new cd(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(i,A)}async function Z0(i){const e=wt(i);await Nu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eT(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Uy(i){return i.map(e=>{var{providerId:t}=e,s=Ld(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function tT(i,e){const t=await My(i,{},async()=>{const s=Fa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await Fy(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return i.emulatorConfig&&go(i.emulatorConfig.host)&&(y.credentials="include"),Ly.fetch()(h,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function nT(i,e){return _o(i,"POST","/v2/accounts:revokeToken",Ku(i,e))}/**
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
 */class no{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const t=Zm(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await tT(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new no;return s&&(ve(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ve(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(ve(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new no,this.toJSON())}_performRefresh(){return Er("not implemented")}}/**
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
 */function Zr(i,e){ve(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class bn{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=Ld(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new cd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Na(this,this.stsTokenManager.getToken(this.auth,e));return ve(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Y0(this,e)}reload(){return Z0(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Nu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mn(this.auth.app))return Promise.reject(li(this.auth));const e=await this.getIdToken();return await Na(this,Q0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,y,v,w;const A=(s=t.displayName)!==null&&s!==void 0?s:void 0,C=(o=t.email)!==null&&o!==void 0?o:void 0,j=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,W=(h=t.photoURL)!==null&&h!==void 0?h:void 0,Q=(m=t.tenantId)!==null&&m!==void 0?m:void 0,B=(y=t._redirectEventId)!==null&&y!==void 0?y:void 0,ye=(v=t.createdAt)!==null&&v!==void 0?v:void 0,J=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:re,emailVerified:ue,isAnonymous:Ce,providerData:Ee,stsTokenManager:P}=t;ve(re&&P,e,"internal-error");const I=no.fromJSON(this.name,P);ve(typeof re=="string",e,"internal-error"),Zr(A,e.name),Zr(C,e.name),ve(typeof ue=="boolean",e,"internal-error"),ve(typeof Ce=="boolean",e,"internal-error"),Zr(j,e.name),Zr(W,e.name),Zr(Q,e.name),Zr(B,e.name),Zr(ye,e.name),Zr(J,e.name);const R=new bn({uid:re,auth:e,email:C,emailVerified:ue,displayName:A,isAnonymous:Ce,photoURL:W,phoneNumber:j,tenantId:Q,stsTokenManager:I,createdAt:ye,lastLoginAt:J});return Ee&&Array.isArray(Ee)&&(R.providerData=Ee.map(N=>Object.assign({},N))),B&&(R._redirectEventId=B),R}static async _fromIdTokenResponse(e,t,s=!1){const o=new no;o.updateFromServerResponse(t);const u=new bn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Nu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ve(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Uy(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!u?.length,m=new no;m.updateFromIdToken(s);const y=new bn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new cd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(y,v),y}}/**
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
 */const eg=new Map;function wr(i){Sr(i instanceof Function,"Expected a class definition");let e=eg.get(i);return e?(Sr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,eg.set(i,e),e)}/**
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
 */class jy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}jy.type="NONE";const tg=jy;/**
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
 */function yu(i,e,t){return`firebase:${i}:${e}:${t}`}class ro{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=yu(this.userKey,o.apiKey,u),this.fullPersistenceKey=yu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Pu(this.auth,{idToken:e}).catch(()=>{});return t?bn._fromGetAccountInfoResponse(this.auth,t,e):null}return bn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new ro(wr(tg),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||wr(tg);const h=yu(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const w=await v._get(h);if(w){let A;if(typeof w=="string"){const C=await Pu(e,{idToken:w}).catch(()=>{});if(!C)break;A=await bn._fromGetAccountInfoResponse(e,C,w)}else A=bn._fromJSON(e,w);v!==u&&(m=A),u=v;break}}catch{}const y=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new ro(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new ro(u,e,s))}}/**
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
 */function ng(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wy(e))return"Blackberry";if(Ky(e))return"Webos";if(By(e))return"Safari";if((e.includes("chrome/")||$y(e))&&!e.includes("edge/"))return"Chrome";if(qy(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if(s?.length===2)return s[1]}return"Other"}function zy(i=Ft()){return/firefox\//i.test(i)}function By(i=Ft()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $y(i=Ft()){return/crios\//i.test(i)}function Hy(i=Ft()){return/iemobile/i.test(i)}function qy(i=Ft()){return/android/i.test(i)}function Wy(i=Ft()){return/blackberry/i.test(i)}function Ky(i=Ft()){return/webos/i.test(i)}function Ud(i=Ft()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function rT(i=Ft()){var e;return Ud(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function iT(){return vw()&&document.documentMode===10}function Gy(i=Ft()){return Ud(i)||qy(i)||Ky(i)||Wy(i)||/windows phone/i.test(i)||Hy(i)}/**
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
 */function Qy(i,e=[]){let t;switch(i){case"Browser":t=ng(Ft());break;case"Worker":t=`${ng(Ft())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${yo}/${s}`}/**
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
 */class sT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const y=e(u);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function oT(i,e={}){return _o(i,"GET","/v2/passwordPolicy",Ku(i,e))}/**
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
 */const aT=6;class lT{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:aT,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const y={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,y),this.validatePasswordCharacterOptions(e,y),y.isValid&&(y.isValid=(t=y.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),y.isValid&&(y.isValid=(s=y.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),y.isValid&&(y.isValid=(o=y.containsLowercaseLetter)!==null&&o!==void 0?o:!0),y.isValid&&(y.isValid=(u=y.containsUppercaseLetter)!==null&&u!==void 0?u:!0),y.isValid&&(y.isValid=(h=y.containsNumericCharacter)!==null&&h!==void 0?h:!0),y.isValid&&(y.isValid=(m=y.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),y}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class uT{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rg(this),this.idTokenSubscription=new rg(this),this.beforeStateQueue=new sT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=wr(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await ro.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Pu(this,{idToken:e}),s=await bn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Mn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o?._redirectEventId,y=await this.tryRedirectSignIn(e);(!h||h===m)&&y?.user&&(o=y.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Nu(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=H0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Mn(this.app))return Promise.reject(li(this));const t=e?wt(e):null;return t&&ve(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Mn(this.app)?Promise.reject(li(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Mn(this.app)?Promise.reject(li(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await oT(this),t=new lT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ba("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await nT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&wr(e)||this._popupRedirectResolver;ve(t,this,"argument-error"),this.redirectPersistenceManager=await ro.create(this,[wr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(Mn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&z0(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Gu(i){return wt(i)}class rg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Cw(t=>this.observer=t)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let jd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cT(i){jd=i}function hT(i){return jd.loadJS(i)}function dT(){return jd.gapiScript}function fT(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */function pT(i,e){const t=Od(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(Ji(u,e??{}))return o;Ir(o,"already-initialized")}return t.initialize({options:e})}function mT(i,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(wr);e?.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e?.popupRedirectResolver)}function gT(i,e,t){const s=Gu(i);ve(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=Yy(e),{host:h,port:m}=yT(e),y=m===null?"":`:${m}`,v={url:`${u}//${h}${y}/`},w=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ve(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ve(Ji(v,s.config.emulator)&&Ji(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=v,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,go(h)?(Sy(`${u}//${h}${y}`),Ay("Auth",!0)):_T()}function Yy(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function yT(i){const e=Yy(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:ig(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:ig(h)}}}function ig(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function _T(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class Xy{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Er("not implemented")}_getIdTokenResponse(e){return Er("not implemented")}_linkToIdToken(e,t){return Er("not implemented")}_getReauthenticationResolver(e){return Er("not implemented")}}/**
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
 */async function io(i,e){return by(i,"POST","/v1/accounts:signInWithIdp",Ku(i,e))}/**
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
 */const vT="http://localhost";class es extends Xy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ir("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=Ld(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new es(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return io(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,io(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,io(e,t)}buildRequest(){const e={requestUri:vT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Fa(t)}return e}}/**
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
 */class Jy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ja extends Jy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ei extends ja{constructor(){super("facebook.com")}static credential(e){return es._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ei.credential(e.oauthAccessToken)}catch{return null}}}ei.FACEBOOK_SIGN_IN_METHOD="facebook.com";ei.PROVIDER_ID="facebook.com";/**
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
 */class ti extends ja{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return es._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ti.credential(t,s)}catch{return null}}}ti.GOOGLE_SIGN_IN_METHOD="google.com";ti.PROVIDER_ID="google.com";/**
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
 */class ni extends ja{constructor(){super("github.com")}static credential(e){return es._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ni.credential(e.oauthAccessToken)}catch{return null}}}ni.GITHUB_SIGN_IN_METHOD="github.com";ni.PROVIDER_ID="github.com";/**
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
 */class ri extends ja{constructor(){super("twitter.com")}static credential(e,t){return es._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ri.credential(t,s)}catch{return null}}}ri.TWITTER_SIGN_IN_METHOD="twitter.com";ri.PROVIDER_ID="twitter.com";/**
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
 */async function ET(i,e){return by(i,"POST","/v1/accounts:signUp",Ku(i,e))}/**
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
 */class hi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await bn._fromIdTokenResponse(e,s,o),h=sg(s);return new hi({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=sg(s);return new hi({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function sg(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */async function wT(i){var e;if(Mn(i.app))return Promise.reject(li(i));const t=Gu(i);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new hi({user:t.currentUser,providerId:null,operationType:"signIn"});const s=await ET(t,{returnSecureToken:!0}),o=await hi._fromIdTokenResponse(t,"signIn",s,!0);return await t._updateCurrentUser(o.user),o}/**
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
 */class Du extends Cr{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Du.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Du(e,t,s,o)}}function Zy(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Du._fromErrorAndOperation(i,u,e,s):u})}async function TT(i,e,t=!1){const s=await Na(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return hi._forOperation(i,"link",s)}/**
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
 */async function IT(i,e,t=!1){const{auth:s}=i;if(Mn(s.app))return Promise.reject(li(s));const o="reauthenticate";try{const u=await Na(i,Zy(s,o,e,i),t);ve(u.idToken,s,"internal-error");const h=Fd(u.idToken);ve(h,s,"internal-error");const{sub:m}=h;return ve(i.uid===m,s,"user-mismatch"),hi._forOperation(i,o,u)}catch(u){throw u?.code==="auth/user-not-found"&&Ir(s,"user-mismatch"),u}}/**
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
 */async function ST(i,e,t=!1){if(Mn(i.app))return Promise.reject(li(i));const s="signIn",o=await Zy(i,s,e),u=await hi._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}function AT(i,e,t,s){return wt(i).onIdTokenChanged(e,t,s)}function RT(i,e,t){return wt(i).beforeAuthStateChanged(e,t)}function CT(i,e,t,s){return wt(i).onAuthStateChanged(e,t,s)}const xu="__sak";/**
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
 */class e_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(xu,"1"),this.storage.removeItem(xu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const kT=1e3,PT=10;class t_ extends e_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Gy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);iT()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,PT):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},kT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}t_.type="LOCAL";const NT=t_;/**
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
 */class n_ extends e_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}n_.type="SESSION";const r_=n_;/**
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
 */function DT(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Qu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Qu(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async v=>v(t.origin,u)),y=await DT(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qu.receivers=[];/**
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
 */function zd(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class xT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const v=zd("",20);o.port1.start();const w=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(A){const C=A;if(C.data.eventId===v)switch(C.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(C.data.response);break;default:clearTimeout(w),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function Jn(){return window}function VT(i){Jn().location.href=i}/**
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
 */function i_(){return typeof Jn().WorkerGlobalScope<"u"&&typeof Jn().importScripts=="function"}async function OT(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LT(){var i;return((i=navigator?.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function MT(){return i_()?self:null}/**
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
 */const s_="firebaseLocalStorageDb",bT=1,Vu="firebaseLocalStorage",o_="fbase_key";class za{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Yu(i,e){return i.transaction([Vu],e?"readwrite":"readonly").objectStore(Vu)}function FT(){const i=indexedDB.deleteDatabase(s_);return new za(i).toPromise()}function hd(){const i=indexedDB.open(s_,bT);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Vu,{keyPath:o_})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Vu)?e(s):(s.close(),await FT(),e(await hd()))})})}async function og(i,e,t){const s=Yu(i,!0).put({[o_]:e,value:t});return new za(s).toPromise()}async function UT(i,e){const t=Yu(i,!1).get(e),s=await new za(t).toPromise();return s===void 0?null:s.value}function ag(i,e){const t=Yu(i,!0).delete(e);return new za(t).toPromise()}const jT=800,zT=3;class a_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>zT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return i_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qu._getInstance(MT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await OT(),!this.activeServiceWorker)return;this.sender=new xT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||LT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hd();return await og(e,xu,"1"),await ag(e,xu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>og(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>UT(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ag(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Yu(o,!1).getAll();return new za(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}a_.type="LOCAL";const BT=a_;new Ua(3e4,6e4);/**
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
 */function $T(i,e){return e?wr(e):(ve(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Bd extends Xy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return io(e,this._buildIdpRequest())}_linkToIdToken(e,t){return io(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return io(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function HT(i){return ST(i.auth,new Bd(i),i.bypassAuthState)}function qT(i){const{auth:e,user:t}=i;return ve(t,e,"internal-error"),IT(t,new Bd(i),i.bypassAuthState)}async function WT(i){const{auth:e,user:t}=i;return ve(t,e,"internal-error"),TT(t,new Bd(i),i.bypassAuthState)}/**
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
 */class l_{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return HT;case"linkViaPopup":case"linkViaRedirect":return WT;case"reauthViaPopup":case"reauthViaRedirect":return qT;default:Ir(this.auth,"internal-error")}}resolve(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const KT=new Ua(2e3,1e4);class to extends l_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,to.currentPopupAction&&to.currentPopupAction.cancel(),to.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){Sr(this.filter.length===1,"Popup operations only handle one event");const e=zd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,to.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,KT.get())};e()}}to.currentPopupAction=null;/**
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
 */const GT="pendingRedirect",_u=new Map;class QT extends l_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=_u.get(this.auth._key());if(!e){try{const s=await YT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}_u.set(this.auth._key(),e)}return this.bypassAuthState||_u.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YT(i,e){const t=ZT(e),s=JT(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function XT(i,e){_u.set(i._key(),e)}function JT(i){return wr(i._redirectPersistence)}function ZT(i){return yu(GT,i.config.apiKey,i.name)}async function eI(i,e,t=!1){if(Mn(i.app))return Promise.reject(li(i));const s=Gu(i),o=$T(s,e),h=await new QT(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const tI=600*1e3;class nI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!u_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Xn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tI&&this.cachedEventUids.clear(),this.cachedEventUids.has(lg(e))}saveEventToCache(e){this.cachedEventUids.add(lg(e)),this.lastProcessedEventTime=Date.now()}}function lg(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function u_({type:i,error:e}){return i==="unknown"&&e?.code==="auth/no-auth-event"}function rI(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return u_(i);default:return!1}}/**
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
 */async function iI(i,e={}){return _o(i,"GET","/v1/projects",e)}/**
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
 */const sI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oI=/^https?/;async function aI(i){if(i.config.emulator)return;const{authorizedDomains:e}=await iI(i);for(const t of e)try{if(lI(t))return}catch{}Ir(i,"unauthorized-domain")}function lI(i){const e=ud(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!oI.test(t))return!1;if(sI.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const uI=new Ua(3e4,6e4);function ug(){const i=Jn().___jsl;if(i?.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function cI(i){return new Promise((e,t)=>{var s,o,u;function h(){ug(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ug(),t(Xn(i,"network-request-failed"))},timeout:uI.get()})}if(!((o=(s=Jn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Jn().gapi)===null||u===void 0)&&u.load)h();else{const m=fT("iframefcb");return Jn()[m]=()=>{gapi.load?h():t(Xn(i,"network-request-failed"))},hT(`${dT()}?onload=${m}`).catch(y=>t(y))}}).catch(e=>{throw vu=null,e})}let vu=null;function hI(i){return vu=vu||cI(i),vu}/**
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
 */const dI=new Ua(5e3,15e3),fI="__/auth/iframe",pI="emulator/auth/iframe",mI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yI(i){const e=i.config;ve(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?bd(e,pI):`https://${i.config.authDomain}/${fI}`,s={apiKey:e.apiKey,appName:i.name,v:yo},o=gI.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Fa(s).slice(1)}`}async function _I(i){const e=await hI(i),t=Jn().gapi;return ve(t,i,"internal-error"),e.open({where:document.body,url:yI(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mI,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Xn(i,"network-request-failed"),m=Jn().setTimeout(()=>{u(h)},dI.get());function y(){Jn().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
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
 */const vI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},EI=500,wI=600,TI="_blank",II="http://localhost";class cg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function SI(i,e,t,s=EI,o=wI){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y=Object.assign(Object.assign({},vI),{width:s.toString(),height:o.toString(),top:u,left:h}),v=Ft().toLowerCase();t&&(m=$y(v)?TI:t),zy(v)&&(e=e||II,y.scrollbars="yes");const w=Object.entries(y).reduce((C,[j,W])=>`${C}${j}=${W},`,"");if(rT(v)&&m!=="_self")return AI(e||"",m),new cg(null);const A=window.open(e||"",m,w);ve(A,i,"popup-blocked");try{A.focus()}catch{}return new cg(A)}function AI(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const RI="__/auth/handler",CI="emulator/auth/handler",kI=encodeURIComponent("fac");async function hg(i,e,t,s,o,u){ve(i.config.authDomain,i,"auth-domain-config-required"),ve(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:yo,eventId:o};if(e instanceof Jy){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",Rw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,A]of Object.entries({}))h[w]=A}if(e instanceof ja){const w=e.getScopes().filter(A=>A!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const y=await i._getAppCheckToken(),v=y?`#${kI}=${encodeURIComponent(y)}`:"";return`${PI(i)}?${Fa(m).slice(1)}${v}`}function PI({config:i}){return i.emulator?bd(i,CI):`https://${i.authDomain}/${RI}`}/**
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
 */const Yh="webStorageSupport";class NI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=r_,this._completeRedirectFn=eI,this._overrideRedirectResult=XT}async _openPopup(e,t,s,o){var u;Sr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await hg(e,t,s,ud(),o);return SI(e,h,zd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await hg(e,t,s,ud(),o);return VT(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Sr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await _I(e),s=new nI(e);return t.register("authEvent",o=>(ve(o?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Yh,{type:Yh},o=>{var u;const h=(u=o?.[0])===null||u===void 0?void 0:u[Yh];h!==void 0&&t(!!h),Ir(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=aI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Gy()||By()||Ud()}}const DI=NI;var dg="@firebase/auth",fg="1.10.7";/**
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
 */class xI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function VI(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function OI(i){oo(new Zi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;ve(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qy(i)},v=new uT(s,o,u,y);return mT(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),oo(new Zi("auth-internal",e=>{const t=Gu(e.getProvider("auth").getImmediate());return(s=>new xI(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ai(dg,fg,VI(i)),ai(dg,fg,"esm2017")}/**
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
 */const LI=300,MI=Iy("authIdTokenMaxAge")||LI;let pg=null;const bI=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>MI)return;const o=t?.token;pg!==o&&(pg=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function FI(i=Py()){const e=Od(i,"auth");if(e.isInitialized())return e.getImmediate();const t=pT(i,{popupRedirectResolver:DI,persistence:[BT,NT,r_]}),s=Iy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=bI(u.toString());RT(t,h,()=>h(t.currentUser)),AT(t,m=>h(m))}}const o=wy("auth");return o&&gT(t,`http://${o}`),t}function UI(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}cT({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Xn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",UI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});OI("Browser");var mg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ui,c_;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,I){function R(){}R.prototype=I.prototype,P.D=I.prototype,P.prototype=new R,P.prototype.constructor=P,P.C=function(N,x,O){for(var S=Array(arguments.length-2),et=2;et<arguments.length;et++)S[et-2]=arguments[et];return I.prototype[x].apply(N,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(P,I,R){R||(R=0);var N=Array(16);if(typeof I=="string")for(var x=0;16>x;++x)N[x]=I.charCodeAt(R++)|I.charCodeAt(R++)<<8|I.charCodeAt(R++)<<16|I.charCodeAt(R++)<<24;else for(x=0;16>x;++x)N[x]=I[R++]|I[R++]<<8|I[R++]<<16|I[R++]<<24;I=P.g[0],R=P.g[1],x=P.g[2];var O=P.g[3],S=I+(O^R&(x^O))+N[0]+3614090360&4294967295;I=R+(S<<7&4294967295|S>>>25),S=O+(x^I&(R^x))+N[1]+3905402710&4294967295,O=I+(S<<12&4294967295|S>>>20),S=x+(R^O&(I^R))+N[2]+606105819&4294967295,x=O+(S<<17&4294967295|S>>>15),S=R+(I^x&(O^I))+N[3]+3250441966&4294967295,R=x+(S<<22&4294967295|S>>>10),S=I+(O^R&(x^O))+N[4]+4118548399&4294967295,I=R+(S<<7&4294967295|S>>>25),S=O+(x^I&(R^x))+N[5]+1200080426&4294967295,O=I+(S<<12&4294967295|S>>>20),S=x+(R^O&(I^R))+N[6]+2821735955&4294967295,x=O+(S<<17&4294967295|S>>>15),S=R+(I^x&(O^I))+N[7]+4249261313&4294967295,R=x+(S<<22&4294967295|S>>>10),S=I+(O^R&(x^O))+N[8]+1770035416&4294967295,I=R+(S<<7&4294967295|S>>>25),S=O+(x^I&(R^x))+N[9]+2336552879&4294967295,O=I+(S<<12&4294967295|S>>>20),S=x+(R^O&(I^R))+N[10]+4294925233&4294967295,x=O+(S<<17&4294967295|S>>>15),S=R+(I^x&(O^I))+N[11]+2304563134&4294967295,R=x+(S<<22&4294967295|S>>>10),S=I+(O^R&(x^O))+N[12]+1804603682&4294967295,I=R+(S<<7&4294967295|S>>>25),S=O+(x^I&(R^x))+N[13]+4254626195&4294967295,O=I+(S<<12&4294967295|S>>>20),S=x+(R^O&(I^R))+N[14]+2792965006&4294967295,x=O+(S<<17&4294967295|S>>>15),S=R+(I^x&(O^I))+N[15]+1236535329&4294967295,R=x+(S<<22&4294967295|S>>>10),S=I+(x^O&(R^x))+N[1]+4129170786&4294967295,I=R+(S<<5&4294967295|S>>>27),S=O+(R^x&(I^R))+N[6]+3225465664&4294967295,O=I+(S<<9&4294967295|S>>>23),S=x+(I^R&(O^I))+N[11]+643717713&4294967295,x=O+(S<<14&4294967295|S>>>18),S=R+(O^I&(x^O))+N[0]+3921069994&4294967295,R=x+(S<<20&4294967295|S>>>12),S=I+(x^O&(R^x))+N[5]+3593408605&4294967295,I=R+(S<<5&4294967295|S>>>27),S=O+(R^x&(I^R))+N[10]+38016083&4294967295,O=I+(S<<9&4294967295|S>>>23),S=x+(I^R&(O^I))+N[15]+3634488961&4294967295,x=O+(S<<14&4294967295|S>>>18),S=R+(O^I&(x^O))+N[4]+3889429448&4294967295,R=x+(S<<20&4294967295|S>>>12),S=I+(x^O&(R^x))+N[9]+568446438&4294967295,I=R+(S<<5&4294967295|S>>>27),S=O+(R^x&(I^R))+N[14]+3275163606&4294967295,O=I+(S<<9&4294967295|S>>>23),S=x+(I^R&(O^I))+N[3]+4107603335&4294967295,x=O+(S<<14&4294967295|S>>>18),S=R+(O^I&(x^O))+N[8]+1163531501&4294967295,R=x+(S<<20&4294967295|S>>>12),S=I+(x^O&(R^x))+N[13]+2850285829&4294967295,I=R+(S<<5&4294967295|S>>>27),S=O+(R^x&(I^R))+N[2]+4243563512&4294967295,O=I+(S<<9&4294967295|S>>>23),S=x+(I^R&(O^I))+N[7]+1735328473&4294967295,x=O+(S<<14&4294967295|S>>>18),S=R+(O^I&(x^O))+N[12]+2368359562&4294967295,R=x+(S<<20&4294967295|S>>>12),S=I+(R^x^O)+N[5]+4294588738&4294967295,I=R+(S<<4&4294967295|S>>>28),S=O+(I^R^x)+N[8]+2272392833&4294967295,O=I+(S<<11&4294967295|S>>>21),S=x+(O^I^R)+N[11]+1839030562&4294967295,x=O+(S<<16&4294967295|S>>>16),S=R+(x^O^I)+N[14]+4259657740&4294967295,R=x+(S<<23&4294967295|S>>>9),S=I+(R^x^O)+N[1]+2763975236&4294967295,I=R+(S<<4&4294967295|S>>>28),S=O+(I^R^x)+N[4]+1272893353&4294967295,O=I+(S<<11&4294967295|S>>>21),S=x+(O^I^R)+N[7]+4139469664&4294967295,x=O+(S<<16&4294967295|S>>>16),S=R+(x^O^I)+N[10]+3200236656&4294967295,R=x+(S<<23&4294967295|S>>>9),S=I+(R^x^O)+N[13]+681279174&4294967295,I=R+(S<<4&4294967295|S>>>28),S=O+(I^R^x)+N[0]+3936430074&4294967295,O=I+(S<<11&4294967295|S>>>21),S=x+(O^I^R)+N[3]+3572445317&4294967295,x=O+(S<<16&4294967295|S>>>16),S=R+(x^O^I)+N[6]+76029189&4294967295,R=x+(S<<23&4294967295|S>>>9),S=I+(R^x^O)+N[9]+3654602809&4294967295,I=R+(S<<4&4294967295|S>>>28),S=O+(I^R^x)+N[12]+3873151461&4294967295,O=I+(S<<11&4294967295|S>>>21),S=x+(O^I^R)+N[15]+530742520&4294967295,x=O+(S<<16&4294967295|S>>>16),S=R+(x^O^I)+N[2]+3299628645&4294967295,R=x+(S<<23&4294967295|S>>>9),S=I+(x^(R|~O))+N[0]+4096336452&4294967295,I=R+(S<<6&4294967295|S>>>26),S=O+(R^(I|~x))+N[7]+1126891415&4294967295,O=I+(S<<10&4294967295|S>>>22),S=x+(I^(O|~R))+N[14]+2878612391&4294967295,x=O+(S<<15&4294967295|S>>>17),S=R+(O^(x|~I))+N[5]+4237533241&4294967295,R=x+(S<<21&4294967295|S>>>11),S=I+(x^(R|~O))+N[12]+1700485571&4294967295,I=R+(S<<6&4294967295|S>>>26),S=O+(R^(I|~x))+N[3]+2399980690&4294967295,O=I+(S<<10&4294967295|S>>>22),S=x+(I^(O|~R))+N[10]+4293915773&4294967295,x=O+(S<<15&4294967295|S>>>17),S=R+(O^(x|~I))+N[1]+2240044497&4294967295,R=x+(S<<21&4294967295|S>>>11),S=I+(x^(R|~O))+N[8]+1873313359&4294967295,I=R+(S<<6&4294967295|S>>>26),S=O+(R^(I|~x))+N[15]+4264355552&4294967295,O=I+(S<<10&4294967295|S>>>22),S=x+(I^(O|~R))+N[6]+2734768916&4294967295,x=O+(S<<15&4294967295|S>>>17),S=R+(O^(x|~I))+N[13]+1309151649&4294967295,R=x+(S<<21&4294967295|S>>>11),S=I+(x^(R|~O))+N[4]+4149444226&4294967295,I=R+(S<<6&4294967295|S>>>26),S=O+(R^(I|~x))+N[11]+3174756917&4294967295,O=I+(S<<10&4294967295|S>>>22),S=x+(I^(O|~R))+N[2]+718787259&4294967295,x=O+(S<<15&4294967295|S>>>17),S=R+(O^(x|~I))+N[9]+3951481745&4294967295,P.g[0]=P.g[0]+I&4294967295,P.g[1]=P.g[1]+(x+(S<<21&4294967295|S>>>11))&4294967295,P.g[2]=P.g[2]+x&4294967295,P.g[3]=P.g[3]+O&4294967295}s.prototype.u=function(P,I){I===void 0&&(I=P.length);for(var R=I-this.blockSize,N=this.B,x=this.h,O=0;O<I;){if(x==0)for(;O<=R;)o(this,P,O),O+=this.blockSize;if(typeof P=="string"){for(;O<I;)if(N[x++]=P.charCodeAt(O++),x==this.blockSize){o(this,N),x=0;break}}else for(;O<I;)if(N[x++]=P[O++],x==this.blockSize){o(this,N),x=0;break}}this.h=x,this.o+=I},s.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var I=1;I<P.length-8;++I)P[I]=0;var R=8*this.o;for(I=P.length-8;I<P.length;++I)P[I]=R&255,R/=256;for(this.u(P),P=Array(16),I=R=0;4>I;++I)for(var N=0;32>N;N+=8)P[R++]=this.g[I]>>>N&255;return P};function u(P,I){var R=m;return Object.prototype.hasOwnProperty.call(R,P)?R[P]:R[P]=I(P)}function h(P,I){this.h=I;for(var R=[],N=!0,x=P.length-1;0<=x;x--){var O=P[x]|0;N&&O==I||(R[x]=O,N=!1)}this.g=R}var m={};function y(P){return-128<=P&&128>P?u(P,function(I){return new h([I|0],0>I?-1:0)}):new h([P|0],0>P?-1:0)}function v(P){if(isNaN(P)||!isFinite(P))return A;if(0>P)return B(v(-P));for(var I=[],R=1,N=0;P>=R;N++)I[N]=P/R|0,R*=4294967296;return new h(I,0)}function w(P,I){if(P.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(P.charAt(0)=="-")return B(w(P.substring(1),I));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=v(Math.pow(I,8)),N=A,x=0;x<P.length;x+=8){var O=Math.min(8,P.length-x),S=parseInt(P.substring(x,x+O),I);8>O?(O=v(Math.pow(I,O)),N=N.j(O).add(v(S))):(N=N.j(R),N=N.add(v(S)))}return N}var A=y(0),C=y(1),j=y(16777216);i=h.prototype,i.m=function(){if(Q(this))return-B(this).m();for(var P=0,I=1,R=0;R<this.g.length;R++){var N=this.i(R);P+=(0<=N?N:4294967296+N)*I,I*=4294967296}return P},i.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(W(this))return"0";if(Q(this))return"-"+B(this).toString(P);for(var I=v(Math.pow(P,6)),R=this,N="";;){var x=ue(R,I).g;R=ye(R,x.j(I));var O=((0<R.g.length?R.g[0]:R.h)>>>0).toString(P);if(R=x,W(R))return O+N;for(;6>O.length;)O="0"+O;N=O+N}},i.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function W(P){if(P.h!=0)return!1;for(var I=0;I<P.g.length;I++)if(P.g[I]!=0)return!1;return!0}function Q(P){return P.h==-1}i.l=function(P){return P=ye(this,P),Q(P)?-1:W(P)?0:1};function B(P){for(var I=P.g.length,R=[],N=0;N<I;N++)R[N]=~P.g[N];return new h(R,~P.h).add(C)}i.abs=function(){return Q(this)?B(this):this},i.add=function(P){for(var I=Math.max(this.g.length,P.g.length),R=[],N=0,x=0;x<=I;x++){var O=N+(this.i(x)&65535)+(P.i(x)&65535),S=(O>>>16)+(this.i(x)>>>16)+(P.i(x)>>>16);N=S>>>16,O&=65535,S&=65535,R[x]=S<<16|O}return new h(R,R[R.length-1]&-2147483648?-1:0)};function ye(P,I){return P.add(B(I))}i.j=function(P){if(W(this)||W(P))return A;if(Q(this))return Q(P)?B(this).j(B(P)):B(B(this).j(P));if(Q(P))return B(this.j(B(P)));if(0>this.l(j)&&0>P.l(j))return v(this.m()*P.m());for(var I=this.g.length+P.g.length,R=[],N=0;N<2*I;N++)R[N]=0;for(N=0;N<this.g.length;N++)for(var x=0;x<P.g.length;x++){var O=this.i(N)>>>16,S=this.i(N)&65535,et=P.i(x)>>>16,Pt=P.i(x)&65535;R[2*N+2*x]+=S*Pt,J(R,2*N+2*x),R[2*N+2*x+1]+=O*Pt,J(R,2*N+2*x+1),R[2*N+2*x+1]+=S*et,J(R,2*N+2*x+1),R[2*N+2*x+2]+=O*et,J(R,2*N+2*x+2)}for(N=0;N<I;N++)R[N]=R[2*N+1]<<16|R[2*N];for(N=I;N<2*I;N++)R[N]=0;return new h(R,0)};function J(P,I){for(;(P[I]&65535)!=P[I];)P[I+1]+=P[I]>>>16,P[I]&=65535,I++}function re(P,I){this.g=P,this.h=I}function ue(P,I){if(W(I))throw Error("division by zero");if(W(P))return new re(A,A);if(Q(P))return I=ue(B(P),I),new re(B(I.g),B(I.h));if(Q(I))return I=ue(P,B(I)),new re(B(I.g),I.h);if(30<P.g.length){if(Q(P)||Q(I))throw Error("slowDivide_ only works with positive integers.");for(var R=C,N=I;0>=N.l(P);)R=Ce(R),N=Ce(N);var x=Ee(R,1),O=Ee(N,1);for(N=Ee(N,2),R=Ee(R,2);!W(N);){var S=O.add(N);0>=S.l(P)&&(x=x.add(R),O=S),N=Ee(N,1),R=Ee(R,1)}return I=ye(P,x.j(I)),new re(x,I)}for(x=A;0<=P.l(I);){for(R=Math.max(1,Math.floor(P.m()/I.m())),N=Math.ceil(Math.log(R)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),O=v(R),S=O.j(I);Q(S)||0<S.l(P);)R-=N,O=v(R),S=O.j(I);W(O)&&(O=C),x=x.add(O),P=ye(P,S)}return new re(x,P)}i.A=function(P){return ue(this,P).h},i.and=function(P){for(var I=Math.max(this.g.length,P.g.length),R=[],N=0;N<I;N++)R[N]=this.i(N)&P.i(N);return new h(R,this.h&P.h)},i.or=function(P){for(var I=Math.max(this.g.length,P.g.length),R=[],N=0;N<I;N++)R[N]=this.i(N)|P.i(N);return new h(R,this.h|P.h)},i.xor=function(P){for(var I=Math.max(this.g.length,P.g.length),R=[],N=0;N<I;N++)R[N]=this.i(N)^P.i(N);return new h(R,this.h^P.h)};function Ce(P){for(var I=P.g.length+1,R=[],N=0;N<I;N++)R[N]=P.i(N)<<1|P.i(N-1)>>>31;return new h(R,P.h)}function Ee(P,I){var R=I>>5;I%=32;for(var N=P.g.length-R,x=[],O=0;O<N;O++)x[O]=0<I?P.i(O+R)>>>I|P.i(O+R+1)<<32-I:P.i(O+R);return new h(x,P.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,c_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=w,ui=h}).apply(typeof mg<"u"?mg:typeof self<"u"?self:typeof window<"u"?window:{});var hu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var h_,va,d_,Eu,dd,f_,p_,m_;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,g){return l==Array.prototype||l==Object.prototype||(l[f]=g.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof hu=="object"&&hu];for(var f=0;f<l.length;++f){var g=l[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var g=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var L=l[E];if(!(L in g))break e;g=g[L]}l=l[l.length-1],E=g[l],f=f(E),f!=E&&f!=null&&e(g,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var g=0,E=!1,L={next:function(){if(!E&&g<l.length){var U=g++;return{value:f(U,l[U]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function y(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function v(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function w(l,f,g){return l.call.apply(l.bind,arguments)}function A(l,f,g){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),l.apply(f,L)}}return function(){return l.apply(f,arguments)}}function C(l,f,g){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:A,C.apply(null,arguments)}function j(l,f){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function W(l,f){function g(){}g.prototype=f.prototype,l.aa=f.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(E,L,U){for(var X=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)X[Ue-2]=arguments[Ue];return f.prototype[L].apply(E,X)}}function Q(l){const f=l.length;if(0<f){const g=Array(f);for(let E=0;E<f;E++)g[E]=l[E];return g}return[]}function B(l,f){for(let g=1;g<arguments.length;g++){const E=arguments[g];if(y(E)){const L=l.length||0,U=E.length||0;l.length=L+U;for(let X=0;X<U;X++)l[L+X]=E[X]}else l.push(E)}}class ye{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function J(l){return/^[\s\xa0]*$/.test(l)}function re(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function ue(l){return ue[" "](l),l}ue[" "]=function(){};var Ce=re().indexOf("Gecko")!=-1&&!(re().toLowerCase().indexOf("webkit")!=-1&&re().indexOf("Edge")==-1)&&!(re().indexOf("Trident")!=-1||re().indexOf("MSIE")!=-1)&&re().indexOf("Edge")==-1;function Ee(l,f,g){for(const E in l)f.call(g,l[E],E,l)}function P(l,f){for(const g in l)f.call(void 0,l[g],g,l)}function I(l){const f={};for(const g in l)f[g]=l[g];return f}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(l,f){let g,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(g in E)l[g]=E[g];for(let U=0;U<R.length;U++)g=R[U],Object.prototype.hasOwnProperty.call(E,g)&&(l[g]=E[g])}}function x(l){var f=1;l=l.split(":");const g=[];for(;0<f&&l.length;)g.push(l.shift()),f--;return l.length&&g.push(l.join(":")),g}function O(l){m.setTimeout(()=>{throw l},0)}function S(){var l=de;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class et{constructor(){this.h=this.g=null}add(f,g){const E=Pt.get();E.set(f,g),this.h?this.h.next=E:this.g=E,this.h=E}}var Pt=new ye(()=>new Nt,l=>l.reset());class Nt{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let je,Z=!1,de=new et,te=()=>{const l=m.Promise.resolve(void 0);je=()=>{l.then(V)}};var V=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(g){O(g)}var f=Pt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}Z=!1};function $(){this.s=this.s,this.C=this.C}$.prototype.s=!1,$.prototype.ma=function(){this.s||(this.s=!0,this.N())},$.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ce(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}ce.prototype.h=function(){this.defaultPrevented=!0};var Ie=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};m.addEventListener("test",g,f),m.removeEventListener("test",g,f)}catch{}return l}();function Ae(l,f){if(ce.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(Ce){e:{try{ue(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else g=="mouseover"?f=l.fromElement:g=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:De[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ae.aa.h.call(this)}}W(Ae,ce);var De={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),be=0;function Be(l,f,g,E,L){this.listener=l,this.proxy=null,this.src=f,this.type=g,this.capture=!!E,this.ha=L,this.key=++be,this.da=this.fa=!1}function mt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function nr(l){this.src=l,this.g={},this.h=0}nr.prototype.add=function(l,f,g,E,L){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var X=kr(l,f,E,L);return-1<X?(f=l[X],g||(f.fa=!1)):(f=new Be(f,this.src,U,!!E,L),f.fa=g,l.push(f)),f};function ss(l,f){var g=f.type;if(g in l.g){var E=l.g[g],L=Array.prototype.indexOf.call(E,f,void 0),U;(U=0<=L)&&Array.prototype.splice.call(E,L,1),U&&(mt(f),l.g[g].length==0&&(delete l.g[g],l.h--))}}function kr(l,f,g,E){for(var L=0;L<l.length;++L){var U=l[L];if(!U.da&&U.listener==f&&U.capture==!!g&&U.ha==E)return L}return-1}var Ei="closure_lm_"+(1e6*Math.random()|0),os={};function So(l,f,g,E,L){if(Array.isArray(f)){for(var U=0;U<f.length;U++)So(l,f[U],g,E,L);return null}return g=Co(g),l&&l[Me]?l.K(f,g,v(E)?!!E.capture:!1,L):Ao(l,f,g,!1,E,L)}function Ao(l,f,g,E,L,U){if(!f)throw Error("Invalid event type");var X=v(L)?!!L.capture:!!L,Ue=ls(l);if(Ue||(l[Ei]=Ue=new nr(l)),g=Ue.add(f,g,E,X,U),g.proxy)return g;if(E=Ga(),g.proxy=E,E.src=l,E.listener=g,l.addEventListener)Ie||(L=X),L===void 0&&(L=!1),l.addEventListener(f.toString(),E,L);else if(l.attachEvent)l.attachEvent(ir(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Ga(){function l(g){return f.call(l.src,l.listener,g)}const f=Ro;return l}function as(l,f,g,E,L){if(Array.isArray(f))for(var U=0;U<f.length;U++)as(l,f[U],g,E,L);else E=v(E)?!!E.capture:!!E,g=Co(g),l&&l[Me]?(l=l.i,f=String(f).toString(),f in l.g&&(U=l.g[f],g=kr(U,g,E,L),-1<g&&(mt(U[g]),Array.prototype.splice.call(U,g,1),U.length==0&&(delete l.g[f],l.h--)))):l&&(l=ls(l))&&(f=l.g[f.toString()],l=-1,f&&(l=kr(f,g,E,L)),(g=-1<l?f[l]:null)&&rr(g))}function rr(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Me])ss(f.i,l);else{var g=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(g,E,l.capture):f.detachEvent?f.detachEvent(ir(g),E):f.addListener&&f.removeListener&&f.removeListener(E),(g=ls(f))?(ss(g,l),g.h==0&&(g.src=null,f[Ei]=null)):mt(l)}}}function ir(l){return l in os?os[l]:os[l]="on"+l}function Ro(l,f){if(l.da)l=!0;else{f=new Ae(f,this);var g=l.listener,E=l.ha||l.src;l.fa&&rr(l),l=g.call(E,f)}return l}function ls(l){return l=l[Ei],l instanceof nr?l:null}var us="__closure_events_fn_"+(1e9*Math.random()>>>0);function Co(l){return typeof l=="function"?l:(l[us]||(l[us]=function(f){return l.handleEvent(f)}),l[us])}function lt(){$.call(this),this.i=new nr(this),this.M=this,this.F=null}W(lt,$),lt.prototype[Me]=!0,lt.prototype.removeEventListener=function(l,f,g,E){as(this,l,f,g,E)};function ut(l,f){var g,E=l.F;if(E)for(g=[];E;E=E.F)g.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new ce(f,l);else if(f instanceof ce)f.target=f.target||l;else{var L=f;f=new ce(E,l),N(f,L)}if(L=!0,g)for(var U=g.length-1;0<=U;U--){var X=f.g=g[U];L=sr(X,E,!0,f)&&L}if(X=f.g=l,L=sr(X,E,!0,f)&&L,L=sr(X,E,!1,f)&&L,g)for(U=0;U<g.length;U++)X=f.g=g[U],L=sr(X,E,!1,f)&&L}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var g=l.g[f],E=0;E<g.length;E++)mt(g[E]);delete l.g[f],l.h--}}this.F=null},lt.prototype.K=function(l,f,g,E){return this.i.add(String(l),f,!1,g,E)},lt.prototype.L=function(l,f,g,E){return this.i.add(String(l),f,!0,g,E)};function sr(l,f,g,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,U=0;U<f.length;++U){var X=f[U];if(X&&!X.da&&X.capture==g){var Ue=X.listener,ct=X.ha||X.src;X.fa&&ss(l.i,X),L=Ue.call(ct,E)!==!1&&L}}return L&&!E.defaultPrevented}function ko(l,f,g){if(typeof l=="function")g&&(l=C(l,g));else if(l&&typeof l.handleEvent=="function")l=C(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function Pr(l){l.g=ko(()=>{l.g=null,l.i&&(l.i=!1,Pr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class wi extends ${constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Pr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ti(l){$.call(this),this.h=l,this.g={}}W(Ti,$);var Po=[];function No(l){Ee(l.g,function(f,g){this.g.hasOwnProperty(g)&&rr(f)},l),l.g={}}Ti.prototype.N=function(){Ti.aa.N.call(this),No(this)},Ti.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Do=m.JSON.stringify,xo=m.JSON.parse,Vo=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function Ii(){}Ii.prototype.h=null;function cs(l){return l.h||(l.h=l.i())}function hs(){}var cn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Un(){ce.call(this,"d")}W(Un,ce);function ds(){ce.call(this,"c")}W(ds,ce);var jn={},Oo=null;function Si(){return Oo=Oo||new lt}jn.La="serverreachability";function Lo(l){ce.call(this,jn.La,l)}W(Lo,ce);function or(l){const f=Si();ut(f,new Lo(f))}jn.STAT_EVENT="statevent";function Mo(l,f){ce.call(this,jn.STAT_EVENT,l),this.stat=f}W(Mo,ce);function tt(l){const f=Si();ut(f,new Mo(f,l))}jn.Ma="timingevent";function fs(l,f){ce.call(this,jn.Ma,l),this.size=f}W(fs,ce);function wn(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function Ai(){this.g=!0}Ai.prototype.xa=function(){this.g=!1};function Ri(l,f,g,E,L,U){l.info(function(){if(l.g)if(U)for(var X="",Ue=U.split("&"),ct=0;ct<Ue.length;ct++){var xe=Ue[ct].split("=");if(1<xe.length){var gt=xe[0];xe=xe[1];var it=gt.split("_");X=2<=it.length&&it[1]=="type"?X+(gt+"="+xe+"&"):X+(gt+"=redacted&")}}else X=null;else X=U;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+f+`
`+g+`
`+X})}function ps(l,f,g,E,L,U,X){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+f+`
`+g+`
`+U+" "+X})}function Tn(l,f,g,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+fc(l,g)+(E?" "+E:"")})}function bo(l,f){l.info(function(){return"TIMEOUT: "+f})}Ai.prototype.info=function(){};function fc(l,f){if(!l.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var E=g[l];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var U=L[0];if(U!="noop"&&U!="stop"&&U!="close")for(var X=1;X<L.length;X++)L[X]=""}}}}return Do(g)}catch{return f}}var ms={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Qa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},In;function Ci(){}W(Ci,Ii),Ci.prototype.g=function(){return new XMLHttpRequest},Ci.prototype.i=function(){return{}},In=new Ci;function Sn(l,f,g,E){this.j=l,this.i=f,this.l=g,this.R=E||1,this.U=new Ti(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ya}function Ya(){this.i=null,this.g="",this.h=!1}var Fo={},gs={};function ys(l,f,g){l.L=1,l.v=Or(en(f)),l.m=g,l.P=!0,Uo(l,null)}function Uo(l,f){l.F=Date.now(),$e(l),l.A=en(l.v);var g=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),Mr(g.i,"t",E),l.C=0,g=l.j.J,l.h=new Ya,l.g=pl(l.j,g?f:null,!l.m),0<l.O&&(l.M=new wi(C(l.Y,l,l.g),l.O)),f=l.U,g=l.g,E=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(Po[0]=L.toString()),L=Po);for(var U=0;U<L.length;U++){var X=So(g,L[U],E||f.handleEvent,!1,f.h||f);if(!X)break;f.g[X.key]=X}f=l.H?I(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),or(),Ri(l.i,l.u,l.A,l.l,l.R,l.m)}Sn.prototype.ca=function(l){l=l.target;const f=this.M;f&&Ht(l)==3?f.j():this.Y(l)},Sn.prototype.Y=function(l){try{if(l==this.g)e:{const it=Ht(this.g);var f=this.g.Ba();const fn=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||qo(this.g)))){this.J||it!=4||f==7||(f==8||0>=fn?or(3):or(2)),ki(this);var g=this.g.Z();this.X=g;t:if(Xa(this)){var E=qo(this.g);l="";var L=E.length,U=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hn(this),Nr(this);var X="";break t}this.h.i=new m.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(U&&f==L-1)});E.length=0,this.h.g+=l,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=g==200,ps(this.i,this.u,this.A,this.l,this.R,it,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,ct=this.g;if((Ue=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!J(Ue)){var xe=Ue;break t}}xe=null}if(g=xe)Tn(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,jo(this,g);else{this.o=!1,this.s=3,tt(12),hn(this),Nr(this);break e}}if(this.P){g=!0;let nn;for(;!this.J&&this.C<X.length;)if(nn=pc(this,X),nn==gs){it==4&&(this.s=4,tt(14),g=!1),Tn(this.i,this.l,null,"[Incomplete Response]");break}else if(nn==Fo){this.s=4,tt(15),Tn(this.i,this.l,X,"[Invalid Chunk]"),g=!1;break}else Tn(this.i,this.l,nn,null),jo(this,nn);if(Xa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||X.length!=0||this.h.h||(this.s=1,tt(16),g=!1),this.o=this.o&&g,!g)Tn(this.i,this.l,X,"[Invalid Chunked Response]"),hn(this),Nr(this);else if(0<X.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),Ko(gt),gt.M=!0,tt(11))}}else Tn(this.i,this.l,X,null),jo(this,X);it==4&&hn(this),this.o&&!this.J&&(it==4?ks(this.j,this):(this.o=!1,$e(this)))}else Is(this.g),g==400&&0<X.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),hn(this),Nr(this)}}}catch{}finally{}};function Xa(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function pc(l,f){var g=l.C,E=f.indexOf(`
`,g);return E==-1?gs:(g=Number(f.substring(g,E)),isNaN(g)?Fo:(E+=1,E+g>f.length?gs:(f=f.slice(E,E+g),l.C=E+g,f)))}Sn.prototype.cancel=function(){this.J=!0,hn(this)};function $e(l){l.S=Date.now()+l.I,Ja(l,l.I)}function Ja(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=wn(C(l.ba,l),f)}function ki(l){l.B&&(m.clearTimeout(l.B),l.B=null)}Sn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(bo(this.i,this.A),this.L!=2&&(or(),tt(17)),hn(this),this.s=2,Nr(this)):Ja(this,this.S-l)};function Nr(l){l.j.G==0||l.J||ks(l.j,l)}function hn(l){ki(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,No(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function jo(l,f){try{var g=l.j;if(g.G!=0&&(g.g==l||Ut(g.h,l))){if(!l.K&&Ut(g.h,l)&&g.G==3){try{var E=g.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)Cs(g),Pn(g);else break e;Rs(g),tt(18)}}else g.za=L[1],0<g.za-g.T&&37500>L[2]&&g.F&&g.v==0&&!g.C&&(g.C=wn(C(g.Za,g),6e3));if(1>=el(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else hr(g,11)}else if((l.K||g.g==l)&&Cs(g),!J(f))for(L=g.Da.g.parse(f),f=0;f<L.length;f++){let xe=L[f];if(g.T=xe[0],xe=xe[1],g.G==2)if(xe[0]=="c"){g.K=xe[1],g.ia=xe[2];const gt=xe[3];gt!=null&&(g.la=gt,g.j.info("VER="+g.la));const it=xe[4];it!=null&&(g.Aa=it,g.j.info("SVER="+g.Aa));const fn=xe[5];fn!=null&&typeof fn=="number"&&0<fn&&(E=1.5*fn,g.L=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const nn=l.g;if(nn){const Li=nn.g?nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Li){var U=E.h;U.g||Li.indexOf("spdy")==-1&&Li.indexOf("quic")==-1&&Li.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(zo(U,U.h),U.h=null))}if(E.D){const Ns=nn.g?nn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ns&&(E.ya=Ns,ze(E.I,E.D,Ns))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),E=g;var X=l;if(E.qa=fl(E,E.J?E.ia:null,E.W),X.K){tl(E.h,X);var Ue=X,ct=E.L;ct&&(Ue.I=ct),Ue.B&&(ki(Ue),$e(Ue)),E.g=X}else Oi(E);0<g.i.length&&Hn(g)}else xe[0]!="stop"&&xe[0]!="close"||hr(g,7);else g.G==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?hr(g,7):It(g):xe[0]!="noop"&&g.l&&g.l.ta(xe),g.v=0)}}or(4)}catch{}}var Za=class{constructor(l,f){this.g=l,this.map=f}};function Pi(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zt(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function el(l){return l.h?1:l.g?l.g.size:0}function Ut(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function zo(l,f){l.g?l.g.add(f):l.h=f}function tl(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Pi.prototype.cancel=function(){if(this.i=nl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function nl(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const g of l.g.values())f=f.concat(g.D);return f}return Q(l.i)}function _s(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(y(l)){for(var f=[],g=l.length,E=0;E<g;E++)f.push(l[E]);return f}f=[],g=0;for(E in l)f[g++]=l[E];return f}function vs(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(y(l)||typeof l=="string"){var f=[];l=l.length;for(var g=0;g<l;g++)f.push(g);return f}f=[],g=0;for(const E in l)f[g++]=E;return f}}}function Dr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(y(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var g=vs(l),E=_s(l),L=E.length,U=0;U<L;U++)f.call(void 0,E[U],g&&g[U],l)}var Ni=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mc(l,f){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var E=l[g].indexOf("="),L=null;if(0<=E){var U=l[g].substring(0,E);L=l[g].substring(E+1)}else U=l[g];f(U,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function ar(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ar){this.h=l.h,Di(this,l.j),this.o=l.o,this.g=l.g,xr(this,l.s),this.l=l.l;var f=l.i,g=new zn;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),Vr(this,g),this.m=l.m}else l&&(f=String(l).match(Ni))?(this.h=!1,Di(this,f[1]||"",!0),this.o=Ne(f[2]||""),this.g=Ne(f[3]||"",!0),xr(this,f[4]),this.l=Ne(f[5]||"",!0),Vr(this,f[6]||"",!0),this.m=Ne(f[7]||"")):(this.h=!1,this.i=new zn(null,this.h))}ar.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Lr(f,Es,!0),":");var g=this.g;return(g||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Lr(f,Es,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Lr(g,g.charAt(0)=="/"?sl:il,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Lr(g,Bo)),l.join("")};function en(l){return new ar(l)}function Di(l,f,g){l.j=g?Ne(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function xr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Vr(l,f,g){f instanceof zn?(l.i=f,Bn(l.i,l.h)):(g||(f=Lr(f,ol)),l.i=new zn(f,l.h))}function ze(l,f,g){l.i.set(f,g)}function Or(l){return ze(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Ne(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Lr(l,f,g){return typeof l=="string"?(l=encodeURI(l).replace(f,rl),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function rl(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Es=/[#\/\?@]/g,il=/[#\?:]/g,sl=/[#\?]/g,ol=/[#\?@]/g,Bo=/#/g;function zn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Tt(l){l.g||(l.g=new Map,l.h=0,l.i&&mc(l.i,function(f,g){l.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}i=zn.prototype,i.add=function(l,f){Tt(this),this.i=null,l=dn(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(f),this.h+=1,this};function An(l,f){Tt(l),f=dn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Rn(l,f){return Tt(l),f=dn(l,f),l.g.has(f)}i.forEach=function(l,f){Tt(this),this.g.forEach(function(g,E){g.forEach(function(L){l.call(f,L,E,this)},this)},this)},i.na=function(){Tt(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let E=0;E<f.length;E++){const L=l[E];for(let U=0;U<L.length;U++)g.push(f[E])}return g},i.V=function(l){Tt(this);let f=[];if(typeof l=="string")Rn(this,l)&&(f=f.concat(this.g.get(dn(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)f=f.concat(l[g])}return f},i.set=function(l,f){return Tt(this),this.i=null,l=dn(this,l),Rn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Mr(l,f,g){An(l,f),0<g.length&&(l.i=null,l.g.set(dn(l,f),Q(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var E=f[g];const U=encodeURIComponent(String(E)),X=this.V(E);for(E=0;E<X.length;E++){var L=U;X[E]!==""&&(L+="="+encodeURIComponent(String(X[E]))),l.push(L)}}return this.i=l.join("&")};function dn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function Bn(l,f){f&&!l.j&&(Tt(l),l.i=null,l.g.forEach(function(g,E){var L=E.toLowerCase();E!=L&&(An(this,E),Mr(this,L,g))},l)),l.j=f}function gc(l,f){const g=new Ai;if(m.Image){const E=new Image;E.onload=j($t,g,"TestLoadImage: loaded",!0,f,E),E.onerror=j($t,g,"TestLoadImage: error",!1,f,E),E.onabort=j($t,g,"TestLoadImage: abort",!1,f,E),E.ontimeout=j($t,g,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function al(l,f){const g=new Ai,E=new AbortController,L=setTimeout(()=>{E.abort(),$t(g,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(U=>{clearTimeout(L),U.ok?$t(g,"TestPingServer: ok",!0,f):$t(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),$t(g,"TestPingServer: error",!1,f)})}function $t(l,f,g,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(g)}catch{}}function yc(){this.g=new Vo}function ll(l,f,g){const E=g||"";try{Dr(l,function(L,U){let X=L;v(L)&&(X=Do(L)),f.push(E+U+"="+encodeURIComponent(X))})}catch(L){throw f.push(E+"type="+encodeURIComponent("_badmap")),L}}function lr(l){this.l=l.Ub||null,this.j=l.eb||!1}W(lr,Ii),lr.prototype.g=function(){return new xi(this.l,this.j)},lr.prototype.i=function(l){return function(){return l}}({});function xi(l,f){lt.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}W(xi,lt),i=xi.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,kn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,kn(this)),this.g&&(this.readyState=3,kn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ul(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function ul(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Cn(this):kn(this),this.readyState==3&&ul(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,Cn(this))},i.Qa=function(l){this.g&&(this.response=l,Cn(this))},i.ga=function(){this.g&&Cn(this)};function Cn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,kn(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=f.next();return l.join(`\r
`)};function kn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(xi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function ur(l){let f="";return Ee(l,function(g,E){f+=E,f+=":",f+=g,f+=`\r
`}),f}function br(l,f,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=ur(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):ze(l,f,g))}function Ge(l){lt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}W(Ge,lt);var _c=/^https?$/i,$o=["POST","PUT"];i=Ge.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():In.g(),this.v=this.o?cs(this.o):cs(In),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(U){Vi(this,U);return}if(l=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)g.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())g.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(U=>U.toLowerCase()=="content-type"),L=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call($o,f,void 0))||E||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,X]of g)this.g.setRequestHeader(U,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ts(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){Vi(this,U)}};function Vi(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,ws(l),tn(l)}function ws(l){l.A||(l.A=!0,ut(l,"complete"),ut(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ut(this,"complete"),ut(this,"abort"),tn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tn(this,!0)),Ge.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Ho(this):this.bb())},i.bb=function(){Ho(this)};function Ho(l){if(l.h&&typeof h<"u"&&(!l.v[1]||Ht(l)!=4||l.Z()!=2)){if(l.u&&Ht(l)==4)ko(l.Ea,0,l);else if(ut(l,"readystatechange"),Ht(l)==4){l.h=!1;try{const X=l.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var E;if(E=X===0){var L=String(l.D).match(Ni)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),E=!_c.test(L?L.toLowerCase():"")}g=E}if(g)ut(l,"complete"),ut(l,"success");else{l.m=6;try{var U=2<Ht(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",ws(l)}}finally{tn(l)}}}}function tn(l,f){if(l.g){Ts(l);const g=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||ut(l,"ready");try{g.onreadystatechange=E}catch{}}}function Ts(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function Ht(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),xo(f)}};function qo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Is(l){const f={};l=(l.g&&2<=Ht(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(J(l[E]))continue;var g=x(l[E]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const U=f[L]||[];f[L]=U,U.push(g)}P(f,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function $n(l,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||f}function Wo(l){this.Aa=0,this.i=[],this.j=new Ai,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$n("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$n("baseRetryDelayMs",5e3,l),this.cb=$n("retryDelaySeedMs",1e4,l),this.Wa=$n("forwardChannelMaxRetries",2,l),this.wa=$n("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Pi(l&&l.concurrentRequestLimit),this.Da=new yc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Wo.prototype,i.la=8,i.G=1,i.connect=function(l,f,g,E){tt(0),this.W=l,this.H=f||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.I=fl(this,null,this.W),Hn(this)};function It(l){if(Ss(l),l.G==3){var f=l.U++,g=en(l.I);if(ze(g,"SID",l.K),ze(g,"RID",f),ze(g,"TYPE","terminate"),cr(l,g),f=new Sn(l,l.j,f),f.L=2,f.v=Or(en(g)),g=!1,m.navigator&&m.navigator.sendBeacon)try{g=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&m.Image&&(new Image().src=f.v,g=!0),g||(f.g=pl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),$e(f)}dl(l)}function Pn(l){l.g&&(Ko(l),l.g.cancel(),l.g=null)}function Ss(l){Pn(l),l.u&&(m.clearTimeout(l.u),l.u=null),Cs(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function Hn(l){if(!Zt(l.h)&&!l.s){l.s=!0;var f=l.Ga;je||te(),Z||(je(),Z=!0),de.add(f,l),l.B=0}}function vc(l,f){return el(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=wn(C(l.Ga,l,f),hl(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new Sn(this,this.j,l);let U=this.o;if(this.S&&(U?(U=I(U),N(U,this.S)):U=this.S),this.m!==null||this.O||(L.H=U,U=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=Fr(this,L,f),g=en(this.I),ze(g,"RID",l),ze(g,"CVER",22),this.D&&ze(g,"X-HTTP-Session-Id",this.D),cr(this,g),U&&(this.O?f="headers="+encodeURIComponent(String(ur(U)))+"&"+f:this.m&&br(g,this.m,U)),zo(this.h,L),this.Ua&&ze(g,"TYPE","init"),this.P?(ze(g,"$req",f),ze(g,"SID","null"),L.T=!0,ys(L,g,null)):ys(L,g,f),this.G=2}}else this.G==3&&(l?As(this,l):this.i.length==0||Zt(this.h)||As(this))};function As(l,f){var g;f?g=f.l:g=l.U++;const E=en(l.I);ze(E,"SID",l.K),ze(E,"RID",g),ze(E,"AID",l.T),cr(l,E),l.m&&l.o&&br(E,l.m,l.o),g=new Sn(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Fr(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),zo(l.h,g),ys(g,E,f)}function cr(l,f){l.H&&Ee(l.H,function(g,E){ze(f,E,g)}),l.l&&Dr({},function(g,E){ze(f,E,g)})}function Fr(l,f,g){g=Math.min(l.i.length,g);var E=l.l?C(l.l.Na,l.l,l):null;e:{var L=l.i;let U=-1;for(;;){const X=["count="+g];U==-1?0<g?(U=L[0].g,X.push("ofs="+U)):U=0:X.push("ofs="+U);let Ue=!0;for(let ct=0;ct<g;ct++){let xe=L[ct].g;const gt=L[ct].map;if(xe-=U,0>xe)U=Math.max(0,L[ct].g-100),Ue=!1;else try{ll(gt,X,"req"+xe+"_")}catch{E&&E(gt)}}if(Ue){E=X.join("&");break e}}}return l=l.i.splice(0,g),f.D=l,E}function Oi(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;je||te(),Z||(je(),Z=!0),de.add(f,l),l.v=0}}function Rs(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=wn(C(l.Fa,l),hl(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,cl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=wn(C(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),Pn(this),cl(this))};function Ko(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function cl(l){l.g=new Sn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=en(l.qa);ze(f,"RID","rpc"),ze(f,"SID",l.K),ze(f,"AID",l.T),ze(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&ze(f,"TO",l.ja),ze(f,"TYPE","xmlhttp"),cr(l,f),l.m&&l.o&&br(f,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=Or(en(f)),g.m=null,g.P=!0,Uo(g,l)}i.Za=function(){this.C!=null&&(this.C=null,Pn(this),Rs(this),tt(19))};function Cs(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function ks(l,f){var g=null;if(l.g==f){Cs(l),Ko(l),l.g=null;var E=2}else if(Ut(l.h,f))g=f.D,tl(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var L=l.B;E=Si(),ut(E,new fs(E,g)),Hn(l)}else Oi(l);else if(L=f.s,L==3||L==0&&0<f.X||!(E==1&&vc(l,f)||E==2&&Rs(l)))switch(g&&0<g.length&&(f=l.h,f.i=f.i.concat(g)),L){case 1:hr(l,5);break;case 4:hr(l,10);break;case 3:hr(l,6);break;default:hr(l,2)}}}function hl(l,f){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*f}function hr(l,f){if(l.j.info("Error code "+f),f==2){var g=C(l.fb,l),E=l.Xa;const L=!E;E=new ar(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Di(E,"https"),Or(E),L?gc(E.toString(),g):al(E.toString(),g)}else tt(2);l.G=0,l.l&&l.l.sa(f),dl(l),Ss(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function dl(l){if(l.G=0,l.ka=[],l.l){const f=nl(l.h);(f.length!=0||l.i.length!=0)&&(B(l.ka,f),B(l.ka,l.i),l.h.i.length=0,Q(l.i),l.i.length=0),l.l.ra()}}function fl(l,f,g){var E=g instanceof ar?en(g):new ar(g);if(E.g!="")f&&(E.g=f+"."+E.g),xr(E,E.s);else{var L=m.location;E=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var U=new ar(null);E&&Di(U,E),f&&(U.g=f),L&&xr(U,L),g&&(U.l=g),E=U}return g=l.D,f=l.ya,g&&f&&ze(E,g,f),ze(E,"VER",l.la),cr(l,E),E}function pl(l,f,g){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Ge(new lr({eb:g})):new Ge(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Go(){}i=Go.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Ps(){}Ps.prototype.g=function(l,f){return new jt(l,f)};function jt(l,f){lt.call(this),this.g=new Wo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!J(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!J(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new qn(this)}W(jt,lt),jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){It(this.g)},jt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=Do(l),l=g);f.i.push(new Za(f.Ya++,l)),f.G==3&&Hn(f)},jt.prototype.N=function(){this.g.l=null,delete this.j,It(this.g),delete this.g,jt.aa.N.call(this)};function ml(l){Un.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const g in f){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}W(ml,Un);function gl(){ds.call(this),this.status=1}W(gl,ds);function qn(l){this.g=l}W(qn,Go),qn.prototype.ua=function(){ut(this.g,"a")},qn.prototype.ta=function(l){ut(this.g,new ml(l))},qn.prototype.sa=function(l){ut(this.g,new gl)},qn.prototype.ra=function(){ut(this.g,"b")},Ps.prototype.createWebChannel=Ps.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,m_=function(){return new Ps},p_=function(){return Si()},f_=jn,dd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ms.NO_ERROR=0,ms.TIMEOUT=8,ms.HTTP_ERROR=6,Eu=ms,Qa.COMPLETE="complete",d_=Qa,hs.EventType=cn,cn.OPEN="a",cn.CLOSE="b",cn.ERROR="c",cn.MESSAGE="d",lt.prototype.listen=lt.prototype.K,va=hs,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,h_=Ge}).apply(typeof hu<"u"?hu:typeof self<"u"?self:typeof window<"u"?window:{});const gg="@firebase/firestore",yg="4.7.17";/**
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
 */class Mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Mt.UNAUTHENTICATED=new Mt(null),Mt.GOOGLE_CREDENTIALS=new Mt("google-credentials-uid"),Mt.FIRST_PARTY=new Mt("first-party-uid"),Mt.MOCK_USER=new Mt("mock-user");/**
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
 */let vo="11.9.0";/**
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
 */const ts=new xd("@firebase/firestore");function Xs(){return ts.logLevel}function ne(i,...e){if(ts.logLevel<=ke.DEBUG){const t=e.map($d);ts.debug(`Firestore (${vo}): ${i}`,...t)}}function Ar(i,...e){if(ts.logLevel<=ke.ERROR){const t=e.map($d);ts.error(`Firestore (${vo}): ${i}`,...t)}}function ao(i,...e){if(ts.logLevel<=ke.WARN){const t=e.map($d);ts.warn(`Firestore (${vo}): ${i}`,...t)}}function $d(i){if(typeof i=="string")return i;try{/**
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
 */function ge(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,g_(i,s,t)}function g_(i,e,t){let s=`FIRESTORE (${vo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Ar(s),new Error(s)}function Fe(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||g_(e,o,s)}function Te(i,e){return i}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends Cr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Yi{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class y_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Mt.UNAUTHENTICATED))}shutdown(){}}class zI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class BI{constructor(e){this.t=e,this.currentUser=Mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new Yi;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Yi,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const y=u;e.enqueueRetryable(async()=>{await y.promise,await o(this.currentUser)})},m=y=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(y=>m(y)),setTimeout(()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Yi)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Fe(typeof s.accessToken=="string",31837,{l:s}),new y_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new Mt(e)}}class $I{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Mt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class HI{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new $I(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _g{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qI{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Mn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Fe(this.o===void 0,3512);const s=u=>{u.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,ne("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new _g(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Fe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new _g(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function WI(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function __(){return new TextEncoder}/**
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
 */class v_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=WI(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Se(i,e){return i<e?-1:i>e?1:0}function fd(i,e){let t=0;for(;t<i.length&&t<e.length;){const s=i.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Se(s,o);{const u=__(),h=KI(u.encode(vg(i,t)),u.encode(vg(e,t)));return h!==0?h:Se(s,o)}}t+=s>65535?2:1}return Se(i.length,e.length)}function vg(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function KI(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return Se(i[t],e[t]);return Se(i.length,e.length)}function lo(i,e,t){return i.length===e.length&&i.every((s,o)=>t(s,e[o]))}/**
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
 */const Eg=-62135596800,wg=1e6;class ft{static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*wg);return new ft(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new se(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new se(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Eg)throw new se(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/wg}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Eg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new ft(0,0))}static max(){return new we(new ft(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Tg="__name__";class Yn{constructor(e,t,s){t===void 0?t=0:t>e.length&&ge(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ge(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Yn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Yn?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Yn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Se(e.length,t.length)}static compareSegments(e,t){const s=Yn.isNumericId(e),o=Yn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Yn.extractNumericId(e).compare(Yn.extractNumericId(t)):fd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ui.fromString(e.substring(4,e.length-2))}}class Ke extends Yn{construct(e,t,s){return new Ke(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new se(H.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new Ke(t)}static emptyPath(){return new Ke([])}}const GI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ct extends Yn{construct(e,t,s){return new Ct(e,t,s)}static isValidIdentifier(e){return GI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Tg}static keyField(){return new Ct([Tg])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new se(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new se(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new se(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new se(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ct(t)}static emptyPath(){return new Ct([])}}/**
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
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(Ke.fromString(e))}static fromName(e){return new he(Ke.fromString(e).popFirst(5))}static empty(){return new he(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ke.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new Ke(e.slice()))}}/**
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
 */const Da=-1;function QI(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=we.fromTimestamp(s===1e9?new ft(t+1,0):new ft(t,s));return new di(o,he.empty(),e)}function YI(i){return new di(i.readTime,i.key,Da)}class di{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new di(we.min(),he.empty(),Da)}static max(){return new di(we.max(),he.empty(),Da)}}function XI(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=he.comparator(i.documentKey,e.documentKey),t!==0?t:Se(i.largestBatchId,e.largestBatchId))}/**
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
 */const JI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ZI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Eo(i){if(i.code!==H.FAILED_PRECONDITION||i.message!==JI)throw i;ne("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ge(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new z((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof z?t:z.resolve(t)}catch(t){return z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):z.reject(t)}static resolve(e){return new z((t,s)=>{t(e)})}static reject(e){return new z((t,s)=>{s(e)})}static waitFor(e){return new z((t,s)=>{let o=0,u=0,h=!1;e.forEach(m=>{++o,m.next(()=>{++u,h&&u===o&&t()},y=>s(y))}),h=!0,u===o&&t()})}static or(e){let t=z.resolve(!1);for(const s of e)t=t.next(o=>o?z.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new z((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const v=y;t(e[v]).next(w=>{h[v]=w,++m,m===u&&s(h)},w=>o(w))}})}static doWhile(e,t){return new z((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function e1(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function wo(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class Xu{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ue(s),this.ce=s=>t.writeSequenceNumber(s))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Xu.le=-1;/**
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
 */const Hd=-1;function Ju(i){return i==null}function Ou(i){return i===0&&1/i==-1/0}function t1(i){return typeof i=="number"&&Number.isInteger(i)&&!Ou(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const E_="";function n1(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=Ig(e)),e=r1(i.get(t),e);return Ig(e)}function r1(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case E_:t+="";break;default:t+=u}}return t}function Ig(i){return i+E_+""}/**
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
 */function Sg(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function _i(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function w_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class Je{constructor(e,t){this.comparator=e,this.root=t||Rt.EMPTY}insert(e,t){return new Je(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Rt.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Rt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new du(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new du(this.root,e,this.comparator,!1)}getReverseIterator(){return new du(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new du(this.root,e,this.comparator,!0)}}class du{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Rt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Rt.RED,this.left=o??Rt.EMPTY,this.right=u??Rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Rt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Rt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ge(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ge(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ge(27949);return e+(this.isRed()?0:1)}}Rt.EMPTY=null,Rt.RED=!0,Rt.BLACK=!1;Rt.EMPTY=new class{constructor(){this.size=0}get key(){throw ge(57766)}get value(){throw ge(16141)}get color(){throw ge(16727)}get left(){throw ge(29726)}get right(){throw ge(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Rt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class pt{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ag(this.data.getIterator())}getIteratorFrom(e){return new Ag(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof pt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new pt(this.comparator);return t.data=e,t}}class Ag{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class an{constructor(e){this.fields=e,e.sort(Ct.comparator)}static empty(){return new an([])}unionWith(e){let t=new pt(Ct.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new an(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return lo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class T_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new T_("Invalid base64 string: "+u):u}}(e);return new kt(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new kt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const i1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fi(i){if(Fe(!!i,39018),typeof i=="string"){let e=0;const t=i1.exec(i);if(Fe(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:rt(i.seconds),nanos:rt(i.nanos)}}function rt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function pi(i){return typeof i=="string"?kt.fromBase64String(i):kt.fromUint8Array(i)}/**
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
 */const I_="server_timestamp",S_="__type__",A_="__previous_value__",R_="__local_write_time__";function qd(i){var e,t;return((t=(((e=i?.mapValue)===null||e===void 0?void 0:e.fields)||{})[S_])===null||t===void 0?void 0:t.stringValue)===I_}function Zu(i){const e=i.mapValue.fields[A_];return qd(e)?Zu(e):e}function xa(i){const e=fi(i.mapValue.fields[R_].timestampValue);return new ft(e.seconds,e.nanos)}/**
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
 */class s1{constructor(e,t,s,o,u,h,m,y,v,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=v,this.isUsingEmulator=w}}const Lu="(default)";class Va{constructor(e,t){this.projectId=e,this.database=t||Lu}static empty(){return new Va("","")}get isDefaultDatabase(){return this.database===Lu}isEqual(e){return e instanceof Va&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const C_="__type__",o1="__max__",fu={mapValue:{}},k_="__vector__",Mu="value";function mi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?qd(i)?4:l1(i)?9007199254740991:a1(i)?10:11:ge(28295,{value:i})}function tr(i,e){if(i===e)return!0;const t=mi(i);if(t!==mi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return xa(i).isEqual(xa(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=fi(o.timestampValue),m=fi(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(o,u){return pi(o.bytesValue).isEqual(pi(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(o,u){return rt(o.geoPointValue.latitude)===rt(u.geoPointValue.latitude)&&rt(o.geoPointValue.longitude)===rt(u.geoPointValue.longitude)}(i,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return rt(o.integerValue)===rt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=rt(o.doubleValue),m=rt(u.doubleValue);return h===m?Ou(h)===Ou(m):isNaN(h)&&isNaN(m)}return!1}(i,e);case 9:return lo(i.arrayValue.values||[],e.arrayValue.values||[],tr);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Sg(h)!==Sg(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!tr(h[y],m[y])))return!1;return!0}(i,e);default:return ge(52216,{left:i})}}function Oa(i,e){return(i.values||[]).find(t=>tr(t,e))!==void 0}function uo(i,e){if(i===e)return 0;const t=mi(i),s=mi(e);if(t!==s)return Se(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Se(i.booleanValue,e.booleanValue);case 2:return function(u,h){const m=rt(u.integerValue||u.doubleValue),y=rt(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1}(i,e);case 3:return Rg(i.timestampValue,e.timestampValue);case 4:return Rg(xa(i),xa(e));case 5:return fd(i.stringValue,e.stringValue);case 6:return function(u,h){const m=pi(u),y=pi(h);return m.compareTo(y)}(i.bytesValue,e.bytesValue);case 7:return function(u,h){const m=u.split("/"),y=h.split("/");for(let v=0;v<m.length&&v<y.length;v++){const w=Se(m[v],y[v]);if(w!==0)return w}return Se(m.length,y.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,h){const m=Se(rt(u.latitude),rt(h.latitude));return m!==0?m:Se(rt(u.longitude),rt(h.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return Cg(i.arrayValue,e.arrayValue);case 10:return function(u,h){var m,y,v,w;const A=u.fields||{},C=h.fields||{},j=(m=A[Mu])===null||m===void 0?void 0:m.arrayValue,W=(y=C[Mu])===null||y===void 0?void 0:y.arrayValue,Q=Se(((v=j?.values)===null||v===void 0?void 0:v.length)||0,((w=W?.values)===null||w===void 0?void 0:w.length)||0);return Q!==0?Q:Cg(j,W)}(i.mapValue,e.mapValue);case 11:return function(u,h){if(u===fu.mapValue&&h===fu.mapValue)return 0;if(u===fu.mapValue)return 1;if(h===fu.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),v=h.fields||{},w=Object.keys(v);y.sort(),w.sort();for(let A=0;A<y.length&&A<w.length;++A){const C=fd(y[A],w[A]);if(C!==0)return C;const j=uo(m[y[A]],v[w[A]]);if(j!==0)return j}return Se(y.length,w.length)}(i.mapValue,e.mapValue);default:throw ge(23264,{Pe:t})}}function Rg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Se(i,e);const t=fi(i),s=fi(e),o=Se(t.seconds,s.seconds);return o!==0?o:Se(t.nanos,s.nanos)}function Cg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=uo(t[o],s[o]);if(u)return u}return Se(t.length,s.length)}function co(i){return pd(i)}function pd(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=fi(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return pi(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return he.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=pd(u);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${pd(t.fields[h])}`;return o+"}"}(i.mapValue):ge(61005,{value:i})}function wu(i){switch(mi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Zu(i);return e?16+wu(e):16;case 5:return 2*i.stringValue.length;case 6:return pi(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+wu(u),0)}(i.arrayValue);case 10:case 11:return function(s){let o=0;return _i(s.fields,(u,h)=>{o+=u.length+wu(h)}),o}(i.mapValue);default:throw ge(13486,{value:i})}}function kg(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function md(i){return!!i&&"integerValue"in i}function Wd(i){return!!i&&"arrayValue"in i}function Pg(i){return!!i&&"nullValue"in i}function Ng(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Tu(i){return!!i&&"mapValue"in i}function a1(i){var e,t;return((t=(((e=i?.mapValue)===null||e===void 0?void 0:e.fields)||{})[C_])===null||t===void 0?void 0:t.stringValue)===k_}function Aa(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return _i(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Aa(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Aa(i.arrayValue.values[t]);return e}return Object.assign({},i)}function l1(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===o1}/**
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
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Tu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Aa(t)}setAll(e){let t=Ct.emptyPath(),s={},o=[];e.forEach((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Aa(h):o.push(m.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Tu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return tr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Tu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){_i(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new Jt(Aa(this.value))}}function P_(i){const e=[];return _i(i.fields,(t,s)=>{const o=new Ct([t]);if(Tu(s)){const u=P_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new an(e)}/**
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
 */class bt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new bt(e,0,we.min(),we.min(),we.min(),Jt.empty(),0)}static newFoundDocument(e,t,s,o){return new bt(e,1,t,we.min(),s,o,0)}static newNoDocument(e,t){return new bt(e,2,t,we.min(),we.min(),Jt.empty(),0)}static newUnknownDocument(e,t){return new bt(e,3,t,we.min(),we.min(),Jt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bu{constructor(e,t){this.position=e,this.inclusive=t}}function Dg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=he.comparator(he.fromName(h.referenceValue),t.key):s=uo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function xg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!tr(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Fu{constructor(e,t="asc"){this.field=e,this.dir=t}}function u1(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class N_{}class at extends N_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new h1(e,t,s):t==="array-contains"?new p1(e,s):t==="in"?new m1(e,s):t==="not-in"?new g1(e,s):t==="array-contains-any"?new y1(e,s):new at(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new d1(e,s):new f1(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(uo(t,this.value)):t!==null&&mi(this.value)===mi(t)&&this.matchesComparison(uo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fn extends N_{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Fn(e,t)}matches(e){return D_(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function D_(i){return i.op==="and"}function x_(i){return c1(i)&&D_(i)}function c1(i){for(const e of i.filters)if(e instanceof Fn)return!1;return!0}function gd(i){if(i instanceof at)return i.field.canonicalString()+i.op.toString()+co(i.value);if(x_(i))return i.filters.map(e=>gd(e)).join(",");{const e=i.filters.map(t=>gd(t)).join(",");return`${i.op}(${e})`}}function V_(i,e){return i instanceof at?function(s,o){return o instanceof at&&s.op===o.op&&s.field.isEqual(o.field)&&tr(s.value,o.value)}(i,e):i instanceof Fn?function(s,o){return o instanceof Fn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,m)=>u&&V_(h,o.filters[m]),!0):!1}(i,e):void ge(19439)}function O_(i){return i instanceof at?function(t){return`${t.field.canonicalString()} ${t.op} ${co(t.value)}`}(i):i instanceof Fn?function(t){return t.op.toString()+" {"+t.getFilters().map(O_).join(" ,")+"}"}(i):"Filter"}class h1 extends at{constructor(e,t,s){super(e,t,s),this.key=he.fromName(s.referenceValue)}matches(e){const t=he.comparator(e.key,this.key);return this.matchesComparison(t)}}class d1 extends at{constructor(e,t){super(e,"in",t),this.keys=L_("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class f1 extends at{constructor(e,t){super(e,"not-in",t),this.keys=L_("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function L_(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>he.fromName(s.referenceValue))}class p1 extends at{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Wd(t)&&Oa(t.arrayValue,this.value)}}class m1 extends at{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Oa(this.value.arrayValue,t)}}class g1 extends at{constructor(e,t){super(e,"not-in",t)}matches(e){if(Oa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Oa(this.value.arrayValue,t)}}class y1 extends at{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Wd(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Oa(this.value.arrayValue,s))}}/**
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
 */class _1{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Ie=null}}function Vg(i,e=null,t=[],s=[],o=null,u=null,h=null){return new _1(i,e,t,s,o,u,h)}function Kd(i){const e=Te(i);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>gd(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Ju(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>co(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>co(s)).join(",")),e.Ie=t}return e.Ie}function Gd(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!u1(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!V_(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!xg(i.startAt,e.startAt)&&xg(i.endAt,e.endAt)}function yd(i){return he.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class Ba{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function v1(i,e,t,s,o,u,h,m){return new Ba(i,e,t,s,o,u,h,m)}function Qd(i){return new Ba(i)}function Og(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function M_(i){return i.collectionGroup!==null}function Ra(i){const e=Te(i);if(e.Ee===null){e.Ee=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ee.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new pt(Ct.comparator);return h.filters.forEach(y=>{y.getFlattenedFilters().forEach(v=>{v.isInequality()&&(m=m.add(v.field))})}),m})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ee.push(new Fu(u,s))}),t.has(Ct.keyField().canonicalString())||e.Ee.push(new Fu(Ct.keyField(),s))}return e.Ee}function Zn(i){const e=Te(i);return e.de||(e.de=E1(e,Ra(i))),e.de}function E1(i,e){if(i.limitType==="F")return Vg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Fu(o.field,u)});const t=i.endAt?new bu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new bu(i.startAt.position,i.startAt.inclusive):null;return Vg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function _d(i,e){const t=i.filters.concat([e]);return new Ba(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function vd(i,e,t){return new Ba(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function ec(i,e){return Gd(Zn(i),Zn(e))&&i.limitType===e.limitType}function b_(i){return`${Kd(Zn(i))}|lt:${i.limitType}`}function Js(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>O_(o)).join(", ")}]`),Ju(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>co(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>co(o)).join(",")),`Target(${s})`}(Zn(i))}; limitType=${i.limitType})`}function tc(i,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):he.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(i,e)&&function(s,o){for(const u of Ra(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(i,e)&&function(s,o){return!(s.startAt&&!function(h,m,y){const v=Dg(h,m,y);return h.inclusive?v<=0:v<0}(s.startAt,Ra(s),o)||s.endAt&&!function(h,m,y){const v=Dg(h,m,y);return h.inclusive?v>=0:v>0}(s.endAt,Ra(s),o))}(i,e)}function w1(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function F_(i){return(e,t)=>{let s=!1;for(const o of Ra(i)){const u=T1(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function T1(i,e,t){const s=i.field.isKeyField()?he.comparator(e.key,t.key):function(u,h,m){const y=h.data.field(u),v=m.data.field(u);return y!==null&&v!==null?uo(y,v):ge(42886)}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return ge(19790,{direction:i.dir})}}/**
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
 */class rs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){_i(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return w_(this.inner)}size(){return this.innerSize}}/**
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
 */const I1=new Je(he.comparator);function Rr(){return I1}const U_=new Je(he.comparator);function Ea(...i){let e=U_;for(const t of i)e=e.insert(t.key,t);return e}function j_(i){let e=U_;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Qi(){return Ca()}function z_(){return Ca()}function Ca(){return new rs(i=>i.toString(),(i,e)=>i.isEqual(e))}const S1=new Je(he.comparator),A1=new pt(he.comparator);function Pe(...i){let e=A1;for(const t of i)e=e.add(t);return e}const R1=new pt(Se);function C1(){return R1}/**
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
 */function Yd(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ou(e)?"-0":e}}function B_(i){return{integerValue:""+i}}function k1(i,e){return t1(e)?B_(e):Yd(i,e)}/**
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
 */class nc{constructor(){this._=void 0}}function P1(i,e,t){return i instanceof Uu?function(o,u){const h={fields:{[S_]:{stringValue:I_},[R_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&qd(u)&&(u=Zu(u)),u&&(h.fields[A_]=u),{mapValue:h}}(t,e):i instanceof La?H_(i,e):i instanceof Ma?q_(i,e):function(o,u){const h=$_(o,u),m=Lg(h)+Lg(o.Re);return md(h)&&md(o.Re)?B_(m):Yd(o.serializer,m)}(i,e)}function N1(i,e,t){return i instanceof La?H_(i,e):i instanceof Ma?q_(i,e):t}function $_(i,e){return i instanceof ju?function(s){return md(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Uu extends nc{}class La extends nc{constructor(e){super(),this.elements=e}}function H_(i,e){const t=W_(e);for(const s of i.elements)t.some(o=>tr(o,s))||t.push(s);return{arrayValue:{values:t}}}class Ma extends nc{constructor(e){super(),this.elements=e}}function q_(i,e){let t=W_(e);for(const s of i.elements)t=t.filter(o=>!tr(o,s));return{arrayValue:{values:t}}}class ju extends nc{constructor(e,t){super(),this.serializer=e,this.Re=t}}function Lg(i){return rt(i.integerValue||i.doubleValue)}function W_(i){return Wd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function D1(i,e){return i.field.isEqual(e.field)&&function(s,o){return s instanceof La&&o instanceof La||s instanceof Ma&&o instanceof Ma?lo(s.elements,o.elements,tr):s instanceof ju&&o instanceof ju?tr(s.Re,o.Re):s instanceof Uu&&o instanceof Uu}(i.transform,e.transform)}class x1{constructor(e,t){this.version=e,this.transformResults=t}}class ln{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ln}static exists(e){return new ln(void 0,e)}static updateTime(e){return new ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Iu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class rc{}function K_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new ic(i.key,ln.none()):new $a(i.key,i.data,ln.none());{const t=i.data,s=Jt.empty();let o=new pt(Ct.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new vi(i.key,s,new an(o.toArray()),ln.none())}}function V1(i,e,t){i instanceof $a?function(o,u,h){const m=o.value.clone(),y=bg(o.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(i,e,t):i instanceof vi?function(o,u,h){if(!Iu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=bg(o.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(G_(o)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()}(i,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function ka(i,e,t,s){return i instanceof $a?function(u,h,m,y){if(!Iu(u.precondition,h))return m;const v=u.value.clone(),w=Fg(u.fieldTransforms,y,h);return v.setAll(w),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null}(i,e,t,s):i instanceof vi?function(u,h,m,y){if(!Iu(u.precondition,h))return m;const v=Fg(u.fieldTransforms,y,h),w=h.data;return w.setAll(G_(u)),w.setAll(v),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(A=>A.field))}(i,e,t,s):function(u,h,m){return Iu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(i,e,t)}function O1(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=$_(s.transform,o||null);u!=null&&(t===null&&(t=Jt.empty()),t.set(s.field,u))}return t||null}function Mg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&lo(s,o,(u,h)=>D1(u,h))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class $a extends rc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class vi extends rc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function G_(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function bg(i,e,t){const s=new Map;Fe(i.length===t.length,32656,{Ve:t.length,me:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,N1(h,m,t[o]))}return s}function Fg(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,P1(u,h,e))}return s}class ic extends rc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class L1 extends rc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class M1{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&V1(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ka(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ka(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=z_();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const y=K_(h,m);y!==null&&s.set(o.key,y),h.isValidDocument()||h.convertToNoDocument(we.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Pe())}isEqual(e){return this.batchId===e.batchId&&lo(this.mutations,e.mutations,(t,s)=>Mg(t,s))&&lo(this.baseMutations,e.baseMutations,(t,s)=>Mg(t,s))}}class Xd{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Fe(e.mutations.length===s.length,58842,{fe:e.mutations.length,ge:s.length});let o=function(){return S1}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Xd(e,t,s,o)}}/**
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
 */class b1{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class F1{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ot,Ve;function U1(i){switch(i){case H.OK:return ge(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return ge(15467,{code:i})}}function Q_(i){if(i===void 0)return Ar("GRPC error has no .code"),H.UNKNOWN;switch(i){case ot.OK:return H.OK;case ot.CANCELLED:return H.CANCELLED;case ot.UNKNOWN:return H.UNKNOWN;case ot.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case ot.INTERNAL:return H.INTERNAL;case ot.UNAVAILABLE:return H.UNAVAILABLE;case ot.UNAUTHENTICATED:return H.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case ot.NOT_FOUND:return H.NOT_FOUND;case ot.ALREADY_EXISTS:return H.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return H.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case ot.ABORTED:return H.ABORTED;case ot.OUT_OF_RANGE:return H.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return H.UNIMPLEMENTED;case ot.DATA_LOSS:return H.DATA_LOSS;default:return ge(39323,{code:i})}}(Ve=ot||(ot={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const j1=new ui([4294967295,4294967295],0);function Ug(i){const e=__().encode(i),t=new c_;return t.update(e),new Uint8Array(t.digest())}function jg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new ui([t,s],0),new ui([o,u],0)]}class Jd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new wa(`Invalid padding: ${t}`);if(s<0)throw new wa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new wa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new wa(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=ui.fromNumber(this.pe)}we(e,t,s){let o=e.add(t.multiply(ui.fromNumber(s)));return o.compare(j1)===1&&(o=new ui([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=Ug(e),[s,o]=jg(t);for(let u=0;u<this.hashCount;u++){const h=this.we(s,o,u);if(!this.be(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Jd(u,o,t);return s.forEach(m=>h.insert(m)),h}insert(e){if(this.pe===0)return;const t=Ug(e),[s,o]=jg(t);for(let u=0;u<this.hashCount;u++){const h=this.we(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class wa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class sc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Ha.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new sc(we.min(),o,new Je(Se),Rr(),Pe())}}class Ha{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ha(s,t,Pe(),Pe(),Pe())}}/**
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
 */class Su{constructor(e,t,s,o){this.De=e,this.removedTargetIds=t,this.key=s,this.ve=o}}class Y_{constructor(e,t){this.targetId=e,this.Ce=t}}class X_{constructor(e,t,s=kt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class zg{constructor(){this.Fe=0,this.Me=Bg(),this.xe=kt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Pe(),t=Pe(),s=Pe();return this.Me.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:ge(38017,{changeType:u})}}),new Ha(this.xe,this.Oe,e,t,s)}Qe(){this.Ne=!1,this.Me=Bg()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Fe(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class z1{constructor(e){this.ze=e,this.je=new Map,this.He=Rr(),this.Je=pu(),this.Ye=pu(),this.Ze=new Je(Se)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const s=this.rt(t);switch(e.state){case 0:this.it(t)&&s.ke(e.resumeToken);break;case 1:s.We(),s.Be||s.Qe(),s.ke(e.resumeToken);break;case 2:s.We(),s.Be||this.removeTarget(t);break;case 3:this.it(t)&&(s.Ge(),s.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),s.ke(e.resumeToken));break;default:ge(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((s,o)=>{this.it(o)&&t(o)})}ot(e){const t=e.targetId,s=e.Ce.count,o=this._t(t);if(o){const u=o.target;if(yd(u))if(s===0){const h=new he(u.path);this.tt(t,h,bt.newNoDocument(h,we.min()))}else Fe(s===1,20013,{expectedCount:s});else{const h=this.ut(t);if(h!==s){const m=this.ct(e),y=m?this.lt(m,e,h):1;if(y!==0){this.st(t);const v=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,v)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=pi(s).toUint8Array()}catch(y){if(y instanceof T_)return ao("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new Jd(h,o,u)}catch(y){return ao(y instanceof wa?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.pe===0?null:m}lt(e,t,s){return t.Ce.count===s-this.Tt(e,t.targetId)?0:2}Tt(e,t){const s=this.ze.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.ze.Pt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.tt(t,u,null),o++)}),o}It(e){const t=new Map;this.je.forEach((u,h)=>{const m=this._t(h);if(m){if(u.current&&yd(m.target)){const y=new he(m.target.path);this.Et(y).has(h)||this.dt(h,y)||this.tt(h,y,bt.newNoDocument(y,e))}u.Le&&(t.set(h,u.qe()),u.Qe())}});let s=Pe();this.Ye.forEach((u,h)=>{let m=!0;h.forEachWhile(y=>{const v=this._t(y);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.He.forEach((u,h)=>h.setReadTime(e));const o=new sc(e,t,this.Ze,this.He,s);return this.He=Rr(),this.Je=pu(),this.Ye=pu(),this.Ze=new Je(Se),o}et(e,t){if(!this.it(e))return;const s=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,s),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,s){if(!this.it(e))return;const o=this.rt(e);this.dt(e,t)?o.$e(t,1):o.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),s&&(this.He=this.He.insert(t,s))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new zg,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new pt(Se),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new pt(Se),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new zg),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function pu(){return new Je(he.comparator)}function Bg(){return new Je(he.comparator)}const B1={asc:"ASCENDING",desc:"DESCENDING"},$1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},H1={and:"AND",or:"OR"};class q1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ed(i,e){return i.useProto3Json||Ju(e)?e:{value:e}}function zu(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function J_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function W1(i,e){return zu(i,e.toTimestamp())}function er(i){return Fe(!!i,49232),we.fromTimestamp(function(t){const s=fi(t);return new ft(s.seconds,s.nanos)}(i))}function Zd(i,e){return wd(i,e).canonicalString()}function wd(i,e){const t=function(o){return new Ke(["projects",o.projectId,"databases",o.database])}(i).child("documents");return e===void 0?t:t.child(e)}function Z_(i){const e=Ke.fromString(i);return Fe(iv(e),10190,{key:e.toString()}),e}function Td(i,e){return Zd(i.databaseId,e.path)}function Xh(i,e){const t=Z_(e);if(t.get(1)!==i.databaseId.projectId)throw new se(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new se(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new he(tv(t))}function ev(i,e){return Zd(i.databaseId,e)}function K1(i){const e=Z_(i);return e.length===4?Ke.emptyPath():tv(e)}function Id(i){return new Ke(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function tv(i){return Fe(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function $g(i,e,t){return{name:Td(i,e),fields:t.value.mapValue.fields}}function G1(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:ge(39313,{state:v})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(v,w){return v.useProto3Json?(Fe(w===void 0||typeof w=="string",58123),kt.fromBase64String(w||"")):(Fe(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),kt.fromUint8Array(w||new Uint8Array))}(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&function(v){const w=v.code===void 0?H.UNKNOWN:Q_(v.code);return new se(w,v.message||"")}(h);t=new X_(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Xh(i,s.document.name),u=er(s.document.updateTime),h=s.document.createTime?er(s.document.createTime):we.min(),m=new Jt({mapValue:{fields:s.document.fields}}),y=bt.newFoundDocument(o,u,h,m),v=s.targetIds||[],w=s.removedTargetIds||[];t=new Su(v,w,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Xh(i,s.document),u=s.readTime?er(s.readTime):we.min(),h=bt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Su([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Xh(i,s.document),u=s.removedTargetIds||[];t=new Su([],u,o,null)}else{if(!("filter"in e))return ge(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new F1(o,u),m=s.targetId;t=new Y_(m,h)}}return t}function Q1(i,e){let t;if(e instanceof $a)t={update:$g(i,e.key,e.value)};else if(e instanceof ic)t={delete:Td(i,e.key)};else if(e instanceof vi)t={update:$g(i,e.key,e.data),updateMask:iS(e.fieldMask)};else{if(!(e instanceof L1))return ge(16599,{ft:e.type});t={verify:Td(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const m=h.transform;if(m instanceof Uu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof La)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Ma)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof ju)return{fieldPath:h.field.canonicalString(),increment:m.Re};throw ge(20930,{transform:h.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:W1(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:ge(27497)}(i,e.precondition)),t}function Y1(i,e){return i&&i.length>0?(Fe(e!==void 0,14353),i.map(t=>function(o,u){let h=o.updateTime?er(o.updateTime):er(u);return h.isEqual(we.min())&&(h=er(u)),new x1(h,o.transformResults||[])}(t,e))):[]}function X1(i,e){return{documents:[ev(i,e.path)]}}function J1(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=ev(i,o);const u=function(v){if(v.length!==0)return rv(Fn.create(v,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(v){if(v.length!==0)return v.map(w=>function(C){return{field:Zs(C.field),direction:tS(C.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Ed(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(v){return{before:v.inclusive,values:v.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(v){return{before:!v.inclusive,values:v.position}}(e.endAt)),{gt:t,parent:o}}function Z1(i){let e=K1(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Fe(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=function(A){const C=nv(A);return C instanceof Fn&&x_(C)?C.getFilters():[C]}(t.where));let h=[];t.orderBy&&(h=function(A){return A.map(C=>function(W){return new Fu(eo(W.field),function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(W.direction))}(C))}(t.orderBy));let m=null;t.limit&&(m=function(A){let C;return C=typeof A=="object"?A.value:A,Ju(C)?null:C}(t.limit));let y=null;t.startAt&&(y=function(A){const C=!!A.before,j=A.values||[];return new bu(j,C)}(t.startAt));let v=null;return t.endAt&&(v=function(A){const C=!A.before,j=A.values||[];return new bu(j,C)}(t.endAt)),v1(e,o,h,u,m,"F",y,v)}function eS(i,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge(28987,{purpose:o})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function nv(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=eo(t.unaryFilter.field);return at.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=eo(t.unaryFilter.field);return at.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=eo(t.unaryFilter.field);return at.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=eo(t.unaryFilter.field);return at.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ge(61313);default:return ge(60726)}}(i):i.fieldFilter!==void 0?function(t){return at.create(eo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ge(58110);default:return ge(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return Fn.create(t.compositeFilter.filters.map(s=>nv(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ge(1026)}}(t.compositeFilter.op))}(i):ge(30097,{filter:i})}function tS(i){return B1[i]}function nS(i){return $1[i]}function rS(i){return H1[i]}function Zs(i){return{fieldPath:i.canonicalString()}}function eo(i){return Ct.fromServerFormat(i.fieldPath)}function rv(i){return i instanceof at?function(t){if(t.op==="=="){if(Ng(t.value))return{unaryFilter:{field:Zs(t.field),op:"IS_NAN"}};if(Pg(t.value))return{unaryFilter:{field:Zs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ng(t.value))return{unaryFilter:{field:Zs(t.field),op:"IS_NOT_NAN"}};if(Pg(t.value))return{unaryFilter:{field:Zs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zs(t.field),op:nS(t.op),value:t.value}}}(i):i instanceof Fn?function(t){const s=t.getFilters().map(o=>rv(o));return s.length===1?s[0]:{compositeFilter:{op:rS(t.op),filters:s}}}(i):ge(54877,{filter:i})}function iS(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function iv(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class ii{constructor(e,t,s,o,u=we.min(),h=we.min(),m=kt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new ii(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ii(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class sS{constructor(e){this.wt=e}}function oS(i){const e=Z1({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?vd(e,e.limit,"L"):e}/**
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
 */class aS{constructor(){this.Cn=new lS}addToCollectionParentIndex(e,t){return this.Cn.add(t),z.resolve()}getCollectionParents(e,t){return z.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return z.resolve()}deleteFieldIndex(e,t){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,t){return z.resolve()}getDocumentsMatchingTarget(e,t){return z.resolve(null)}getIndexType(e,t){return z.resolve(0)}getFieldIndexes(e,t){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,t){return z.resolve(di.min())}getMinOffsetFromCollectionGroup(e,t){return z.resolve(di.min())}updateCollectionGroup(e,t,s){return z.resolve()}updateIndexEntries(e,t){return z.resolve()}}class lS{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new pt(Ke.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new pt(Ke.comparator)).toArray()}}/**
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
 */const Hg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},sv=41943040;class Xt{static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(sv,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);/**
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
 */class ho{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new ho(0)}static lr(){return new ho(-1)}}/**
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
 */const qg="LruGarbageCollector",uS=1048576;function Wg([i,e],[t,s]){const o=Se(i,t);return o===0?Se(e,s):o}class cS{constructor(e){this.Er=e,this.buffer=new pt(Wg),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Wg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class hS{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){ne(qg,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){wo(t)?ne(qg,"Ignoring IndexedDB error during garbage collection: ",t):await Eo(t)}await this.mr(3e5)})}}class dS{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return z.resolve(Xu.le);const s=new cS(t);return this.gr.forEachTarget(e,o=>s.Rr(o.sequenceNumber)).next(()=>this.gr.yr(e,o=>s.Rr(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.gr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve(Hg)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Hg):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let s,o,u,h,m,y,v;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(A=>(A>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),o=this.params.maximumSequenceNumbersToCollect):o=A,h=Date.now(),this.nthSequenceNumber(e,o))).next(A=>(s=A,m=Date.now(),this.removeTargets(e,s,t))).next(A=>(u=A,y=Date.now(),this.removeOrphanedDocuments(e,s))).next(A=>(v=Date.now(),Xs()<=ke.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${A} documents in `+(v-y)+`ms
Total Duration: ${v-w}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:A})))}}function fS(i,e){return new dS(i,e)}/**
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
 */class pS{constructor(){this.changes=new rs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?z.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class mS{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class gS{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&ka(s.mutation,o,an.empty(),ft.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Pe()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Pe()){const o=Qi();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=Ea();return u.forEach((m,y)=>{h=h.insert(m,y.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=Qi();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Pe()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,m)=>{t.set(h,m)})})}computeViews(e,t,s,o){let u=Rr();const h=Ca(),m=function(){return Ca()}();return t.forEach((y,v)=>{const w=s.get(v.key);o.has(v.key)&&(w===void 0||w.mutation instanceof vi)?u=u.insert(v.key,v):w!==void 0?(h.set(v.key,w.mutation.getFieldMask()),ka(w.mutation,v,w.mutation.getFieldMask(),ft.now())):h.set(v.key,an.empty())}),this.recalculateAndSaveOverlays(e,u).next(y=>(y.forEach((v,w)=>h.set(v,w)),t.forEach((v,w)=>{var A;return m.set(v,new mS(w,(A=h.get(v))!==null&&A!==void 0?A:null))}),m))}recalculateAndSaveOverlays(e,t){const s=Ca();let o=new Je((h,m)=>h-m),u=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const m of h)m.keys().forEach(y=>{const v=t.get(y);if(v===null)return;let w=s.get(y)||an.empty();w=m.applyToLocalView(v,w),s.set(y,w);const A=(o.get(m.batchId)||Pe()).add(y);o=o.insert(m.batchId,A)})}).next(()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),v=y.key,w=y.value,A=z_();w.forEach(C=>{if(!u.has(C)){const j=K_(t.get(C),s.get(C));j!==null&&A.set(C,j),u=u.add(C)}}),h.push(this.documentOverlayCache.saveOverlays(e,v,A))}return z.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return he.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):M_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):z.resolve(Qi());let m=Da,y=u;return h.next(v=>z.forEach(v,(w,A)=>(m<A.largestBatchId&&(m=A.largestBatchId),u.get(w)?z.resolve():this.remoteDocumentCache.getEntry(e,w).next(C=>{y=y.insert(w,C)}))).next(()=>this.populateOverlays(e,v,u)).next(()=>this.computeViews(e,y,v,Pe())).next(w=>({batchId:m,changes:j_(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new he(t)).next(s=>{let o=Ea();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Ea();return this.indexManager.getCollectionParents(e,u).next(m=>z.forEach(m,y=>{const v=function(A,C){return new Ba(C,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next(w=>{w.forEach((A,C)=>{h=h.insert(A,C)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((y,v)=>{const w=v.getKey();h.get(w)===null&&(h=h.insert(w,bt.newInvalidDocument(w)))});let m=Ea();return h.forEach((y,v)=>{const w=u.get(y);w!==void 0&&ka(w.mutation,v,an.empty(),ft.now()),tc(t,v)&&(m=m.insert(y,v))}),m})}}/**
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
 */class yS{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return z.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:er(o.createTime)}}(t)),z.resolve()}getNamedQuery(e,t){return z.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(o){return{name:o.name,query:oS(o.bundledQuery),readTime:er(o.readTime)}}(t)),z.resolve()}}/**
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
 */class _S{constructor(){this.overlays=new Je(he.comparator),this.Qr=new Map}getOverlay(e,t){return z.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Qi();return z.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.St(e,t,u)}),z.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Qr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Qr.delete(s)),z.resolve()}getOverlaysForCollection(e,t,s){const o=Qi(),u=t.length+1,h=new he(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,v=y.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return z.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new Je((v,w)=>v-w);const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let w=u.get(v.largestBatchId);w===null&&(w=Qi(),u=u.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const m=Qi(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach((v,w)=>m.set(v,w)),!(m.size()>=o)););return z.resolve(m)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Qr.get(o.largestBatchId).delete(s.key);this.Qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new b1(t,s));let u=this.Qr.get(t);u===void 0&&(u=Pe(),this.Qr.set(t,u)),this.Qr.set(t,u.add(s.key))}}/**
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
 */class vS{constructor(){this.sessionToken=kt.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,z.resolve()}}/**
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
 */class ef{constructor(){this.$r=new pt(Et.Ur),this.Kr=new pt(Et.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const s=new Et(e,t);this.$r=this.$r.add(s),this.Kr=this.Kr.add(s)}Gr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.zr(new Et(e,t))}jr(e,t){e.forEach(s=>this.removeReference(s,t))}Hr(e){const t=new he(new Ke([])),s=new Et(t,e),o=new Et(t,e+1),u=[];return this.Kr.forEachInRange([s,o],h=>{this.zr(h),u.push(h.key)}),u}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new he(new Ke([])),s=new Et(t,e),o=new Et(t,e+1);let u=Pe();return this.Kr.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new Et(e,0),s=this.$r.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Et{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return he.comparator(e.key,t.key)||Se(e.Zr,t.Zr)}static Wr(e,t){return Se(e.Zr,t.Zr)||he.comparator(e.key,t.key)}}/**
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
 */class ES{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new pt(Et.Ur)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new M1(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Xr=this.Xr.add(new Et(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return z.resolve(h)}lookupMutationBatch(e,t){return z.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ti(s),u=o<0?0:o;return z.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?Hd:this.nr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Et(t,0),o=new Et(t,Number.POSITIVE_INFINITY),u=[];return this.Xr.forEachInRange([s,o],h=>{const m=this.ei(h.Zr);u.push(m)}),z.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new pt(Se);return t.forEach(o=>{const u=new Et(o,0),h=new Et(o,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([u,h],m=>{s=s.add(m.Zr)})}),z.resolve(this.ni(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;he.isDocumentKey(u)||(u=u.child(""));const h=new Et(new he(u),0);let m=new pt(Se);return this.Xr.forEachWhile(y=>{const v=y.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(m=m.add(y.Zr)),!0)},h),z.resolve(this.ni(m))}ni(e){const t=[];return e.forEach(s=>{const o=this.ei(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Fe(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Xr;return z.forEach(t.mutations,o=>{const u=new Et(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Xr=s})}sr(e){}containsKey(e,t){const s=new Et(t,0),o=this.Xr.firstAfterOrEqual(s);return z.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class wS{constructor(e){this.ii=e,this.docs=function(){return new Je(he.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ii(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return z.resolve(s?s.document.mutableCopy():bt.newInvalidDocument(t))}getEntries(e,t){let s=Rr();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():bt.newInvalidDocument(o))}),z.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Rr();const h=t.path,m=new he(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:v,value:{document:w}}=y.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||XI(YI(w),s)<=0||(o.has(w.key)||tc(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return z.resolve(u)}getAllFromCollectionGroup(e,t,s,o){ge(9500)}si(e,t){return z.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new TS(this)}getSize(e){return z.resolve(this.size)}}class TS extends pS{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Br.addEntry(e,o)):this.Br.removeEntry(s)}),z.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
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
 */class IS{constructor(e){this.persistence=e,this.oi=new rs(t=>Kd(t),Gd),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this._i=0,this.ai=new ef,this.targetCount=0,this.ui=ho.cr()}forEachTarget(e,t){return this.oi.forEach((s,o)=>t(o)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this._i&&(this._i=t),z.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new ho(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,z.resolve()}updateTargetData(e,t){return this.Tr(t),z.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.oi.forEach((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.oi.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),z.waitFor(u).next(()=>o)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,t){const s=this.oi.get(t)||null;return z.resolve(s)}addMatchingKeys(e,t,s){return this.ai.Gr(t,s),z.resolve()}removeMatchingKeys(e,t,s){this.ai.jr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),z.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),z.resolve()}getMatchingKeysForTargetId(e,t){const s=this.ai.Yr(t);return z.resolve(s)}containsKey(e,t){return z.resolve(this.ai.containsKey(t))}}/**
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
 */class ov{constructor(e,t){this.ci={},this.overlays={},this.li=new Xu(0),this.hi=!1,this.hi=!0,this.Pi=new vS,this.referenceDelegate=e(this),this.Ti=new IS(this),this.indexManager=new aS,this.remoteDocumentCache=function(o){return new wS(o)}(s=>this.referenceDelegate.Ii(s)),this.serializer=new sS(t),this.Ei=new yS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new _S,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ci[e.toKey()];return s||(s=new ES(t,this.referenceDelegate),this.ci[e.toKey()]=s),s}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,s){ne("MemoryPersistence","Starting transaction:",e);const o=new SS(this.li.next());return this.referenceDelegate.di(),s(o).next(u=>this.referenceDelegate.Ai(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ri(e,t){return z.or(Object.values(this.ci).map(s=>()=>s.containsKey(e,t)))}}class SS extends ZI{constructor(e){super(),this.currentSequenceNumber=e}}class tf{constructor(e){this.persistence=e,this.Vi=new ef,this.mi=null}static fi(e){return new tf(e)}get gi(){if(this.mi)return this.mi;throw ge(60996)}addReference(e,t,s){return this.Vi.addReference(s,t),this.gi.delete(s.toString()),z.resolve()}removeReference(e,t,s){return this.Vi.removeReference(s,t),this.gi.add(s.toString()),z.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),z.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(o=>this.gi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.gi.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.gi,s=>{const o=he.fromPath(s);return this.pi(e,o).next(u=>{u||t.removeEntry(o,we.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(s=>{s?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return z.or([()=>z.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class Bu{constructor(e,t){this.persistence=e,this.yi=new rs(s=>n1(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=fS(this,t)}static fi(e,t){return new Bu(e,t)}di(){}Ai(e){return z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}br(e){let t=0;return this.yr(e,s=>{t++}).next(()=>t)}yr(e,t){return z.forEach(this.yi,(s,o)=>this.Dr(e,s,o).next(u=>u?z.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.si(e,h=>this.Dr(e,h,t).next(m=>{m||(s++,u.removeEntry(h,we.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),z.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),z.resolve()}removeReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),z.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),z.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=wu(e.data.value)),t}Dr(e,t,s){return z.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.yi.get(t);return z.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class nf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.ds=s,this.As=o}static Rs(e,t){let s=Pe(),o=Pe();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new nf(e,t.fromCache,s,o)}}/**
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
 */class AS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class RS{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return Ew()?8:e1(Ft())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ws(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.bs(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new AS;return this.Ss(e,t,h).next(m=>{if(u.result=m,this.fs)return this.Ds(e,t,h,m.size)})}).next(()=>u.result)}Ds(e,t,s,o){return s.documentReadCount<this.gs?(Xs()<=ke.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",Js(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),z.resolve()):(Xs()<=ke.DEBUG&&ne("QueryEngine","Query:",Js(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ps*o?(Xs()<=ke.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",Js(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zn(t))):z.resolve())}ws(e,t){if(Og(t))return z.resolve(null);let s=Zn(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=vd(t,null,"F"),s=Zn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Pe(...u);return this.ys.getDocuments(e,h).next(m=>this.indexManager.getMinOffset(e,s).next(y=>{const v=this.vs(t,m);return this.Cs(t,v,h,y.readTime)?this.ws(e,vd(t,null,"F")):this.Fs(e,v,t,y)}))})))}bs(e,t,s,o){return Og(t)||o.isEqual(we.min())?z.resolve(null):this.ys.getDocuments(e,s).next(u=>{const h=this.vs(t,u);return this.Cs(t,h,s,o)?z.resolve(null):(Xs()<=ke.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Js(t)),this.Fs(e,h,t,QI(o,Da)).next(m=>m))})}vs(e,t){let s=new pt(F_(e));return t.forEach((o,u)=>{tc(e,u)&&(s=s.add(u))}),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,s){return Xs()<=ke.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",Js(t)),this.ys.getDocumentsMatchingQuery(e,t,di.min(),s)}Fs(e,t,s,o){return this.ys.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
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
 */const rf="LocalStore",CS=3e8;class kS{constructor(e,t,s,o){this.persistence=e,this.Ms=t,this.serializer=o,this.xs=new Je(Se),this.Os=new rs(u=>Kd(u),Gd),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(s)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gS(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function PS(i,e,t,s){return new kS(i,e,t,s)}async function av(i,e){const t=Te(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Ls(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],m=[];let y=Pe();for(const v of o){h.push(v.batchId);for(const w of v.mutations)y=y.add(w.key)}for(const v of u){m.push(v.batchId);for(const w of v.mutations)y=y.add(w.key)}return t.localDocuments.getDocuments(s,y).next(v=>({ks:v,removedBatchIds:h,addedBatchIds:m}))})})}function NS(i,e){const t=Te(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.Bs.newChangeBuffer({trackRemovals:!0});return function(m,y,v,w){const A=v.batch,C=A.keys();let j=z.resolve();return C.forEach(W=>{j=j.next(()=>w.getEntry(y,W)).next(Q=>{const B=v.docVersions.get(W);Fe(B!==null,48541),Q.version.compareTo(B)<0&&(A.applyToRemoteDocument(Q,v),Q.isValidDocument()&&(Q.setReadTime(v.commitVersion),w.addEntry(Q)))})}),j.next(()=>m.mutationQueue.removeMutationBatch(y,A))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let y=Pe();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(y=y.add(m.batch.mutations[v].key));return y}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function lv(i){const e=Te(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function DS(i,e){const t=Te(i),s=e.snapshotVersion;let o=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.Bs.newChangeBuffer({trackRemovals:!0});o=t.xs;const m=[];e.targetChanges.forEach((w,A)=>{const C=o.get(A);if(!C)return;m.push(t.Ti.removeMatchingKeys(u,w.removedDocuments,A).next(()=>t.Ti.addMatchingKeys(u,w.addedDocuments,A)));let j=C.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(A)!==null?j=j.withResumeToken(kt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):w.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(w.resumeToken,s)),o=o.insert(A,j),function(Q,B,ye){return Q.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-Q.snapshotVersion.toMicroseconds()>=CS?!0:ye.addedDocuments.size+ye.modifiedDocuments.size+ye.removedDocuments.size>0}(C,j,w)&&m.push(t.Ti.updateTargetData(u,j))});let y=Rr(),v=Pe();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))}),m.push(xS(u,h,e.documentUpdates).next(w=>{y=w.qs,v=w.Qs})),!s.isEqual(we.min())){const w=t.Ti.getLastRemoteSnapshotVersion(u).next(A=>t.Ti.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(w)}return z.waitFor(m).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,y,v)).next(()=>y)}).then(u=>(t.xs=o,u))}function xS(i,e,t){let s=Pe(),o=Pe();return t.forEach(u=>s=s.add(u)),e.getEntries(i,s).next(u=>{let h=Rr();return t.forEach((m,y)=>{const v=u.get(m);y.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(we.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!v.isValidDocument()||y.version.compareTo(v.version)>0||y.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):ne(rf,"Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",y.version)}),{qs:h,Qs:o}})}function VS(i,e){const t=Te(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Hd),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function OS(i,e){const t=Te(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Ti.getTargetData(s,e).next(u=>u?(o=u,z.resolve(o)):t.Ti.allocateTargetId(s).next(h=>(o=new ii(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Ti.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.xs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.xs=t.xs.insert(s.targetId,s),t.Os.set(e,s.targetId)),s})}async function Sd(i,e,t){const s=Te(i),o=s.xs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!wo(h))throw h;ne(rf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.xs=s.xs.remove(e),s.Os.delete(o.target)}function Kg(i,e,t){const s=Te(i);let o=we.min(),u=Pe();return s.persistence.runTransaction("Execute query","readwrite",h=>function(y,v,w){const A=Te(y),C=A.Os.get(w);return C!==void 0?z.resolve(A.xs.get(C)):A.Ti.getTargetData(v,w)}(s,h,Zn(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Ti.getMatchingKeysForTargetId(h,m.targetId).next(y=>{u=y})}).next(()=>s.Ms.getDocumentsMatchingQuery(h,e,t?o:we.min(),t?u:Pe())).next(m=>(LS(s,w1(e),m),{documents:m,$s:u})))}function LS(i,e,t){let s=i.Ns.get(e)||we.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),i.Ns.set(e,s)}class Gg{constructor(){this.activeTargetIds=C1()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class MS{constructor(){this.xo=new Gg,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,s){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new Gg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class bS{No(e){}shutdown(){}}/**
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
 */const Qg="ConnectivityMonitor";class Yg{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){ne(Qg,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){ne(Qg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let mu=null;function Ad(){return mu===null?mu=function(){return 268435456+Math.round(2147483648*Math.random())}():mu++,"0x"+mu.toString(16)}/**
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
 */const Jh="RestConnection",FS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class US{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${s}/databases/${o}`,this.Go=this.databaseId.database===Lu?`project_id=${s}`:`project_id=${s}&database_id=${o}`}zo(e,t,s,o,u){const h=Ad(),m=this.jo(e,t.toUriEncodedString());ne(Jh,`Sending RPC '${e}' ${h}:`,m,s);const y={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(y,o,u);const{host:v}=new URL(m),w=go(v);return this.Jo(e,m,y,s,w).then(A=>(ne(Jh,`Received RPC '${e}' ${h}: `,A),A),A=>{throw ao(Jh,`RPC '${e}' ${h} failed with error: `,A,"url: ",m,"request:",s),A})}Yo(e,t,s,o,u,h){return this.zo(e,t,s,o,u)}Ho(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+vo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}jo(e,t){const s=FS[e];return`${this.Ko}/v1/${t}:${s}`}terminate(){}}/**
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
 */class jS{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const Lt="WebChannelConnection";class zS extends US{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,u){const h=Ad();return new Promise((m,y)=>{const v=new h_;v.setWithCredentials(!0),v.listenOnce(d_.COMPLETE,()=>{try{switch(v.getLastErrorCode()){case Eu.NO_ERROR:const A=v.getResponseJson();ne(Lt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(A)),m(A);break;case Eu.TIMEOUT:ne(Lt,`RPC '${e}' ${h} timed out`),y(new se(H.DEADLINE_EXCEEDED,"Request time out"));break;case Eu.HTTP_ERROR:const C=v.getStatus();if(ne(Lt,`RPC '${e}' ${h} failed with status:`,C,"response text:",v.getResponseText()),C>0){let j=v.getResponseJson();Array.isArray(j)&&(j=j[0]);const W=j?.error;if(W&&W.status&&W.message){const Q=function(ye){const J=ye.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(J)>=0?J:H.UNKNOWN}(W.status);y(new se(Q,W.message))}else y(new se(H.UNKNOWN,"Server responded with status "+v.getStatus()))}else y(new se(H.UNAVAILABLE,"Connection failed."));break;default:ge(9055,{h_:e,streamId:h,P_:v.getLastErrorCode(),T_:v.getLastError()})}}finally{ne(Lt,`RPC '${e}' ${h} completed.`)}});const w=JSON.stringify(o);ne(Lt,`RPC '${e}' ${h} sending request:`,o),v.send(t,"POST",w,s,15)})}I_(e,t,s){const o=Ad(),u=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=m_(),m=p_(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(y.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(y.useFetchStreams=!0),this.Ho(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const w=u.join("");ne(Lt,`Creating RPC '${e}' stream ${o}: ${w}`,y);const A=h.createWebChannel(w,y);this.E_(A);let C=!1,j=!1;const W=new jS({Zo:B=>{j?ne(Lt,`Not sending because RPC '${e}' stream ${o} is closed:`,B):(C||(ne(Lt,`Opening RPC '${e}' stream ${o} transport.`),A.open(),C=!0),ne(Lt,`RPC '${e}' stream ${o} sending:`,B),A.send(B))},Xo:()=>A.close()}),Q=(B,ye,J)=>{B.listen(ye,re=>{try{J(re)}catch(ue){setTimeout(()=>{throw ue},0)}})};return Q(A,va.EventType.OPEN,()=>{j||(ne(Lt,`RPC '${e}' stream ${o} transport opened.`),W.__())}),Q(A,va.EventType.CLOSE,()=>{j||(j=!0,ne(Lt,`RPC '${e}' stream ${o} transport closed`),W.u_(),this.d_(A))}),Q(A,va.EventType.ERROR,B=>{j||(j=!0,ao(Lt,`RPC '${e}' stream ${o} transport errored. Name:`,B.name,"Message:",B.message),W.u_(new se(H.UNAVAILABLE,"The operation could not be completed")))}),Q(A,va.EventType.MESSAGE,B=>{var ye;if(!j){const J=B.data[0];Fe(!!J,16349);const re=J,ue=re?.error||((ye=re[0])===null||ye===void 0?void 0:ye.error);if(ue){ne(Lt,`RPC '${e}' stream ${o} received error:`,ue);const Ce=ue.status;let Ee=function(R){const N=ot[R];if(N!==void 0)return Q_(N)}(Ce),P=ue.message;Ee===void 0&&(Ee=H.INTERNAL,P="Unknown error status: "+Ce+" with message "+ue.message),j=!0,W.u_(new se(Ee,P)),A.close()}else ne(Lt,`RPC '${e}' stream ${o} received:`,J),W.c_(J)}}),Q(m,f_.STAT_EVENT,B=>{B.stat===dd.PROXY?ne(Lt,`RPC '${e}' stream ${o} detected buffering proxy`):B.stat===dd.NOPROXY&&ne(Lt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{W.a_()},0),W}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(t=>t===e)}}function Zh(){return typeof document<"u"?document:null}/**
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
 */function oc(i){return new q1(i,!0)}/**
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
 */class uv{constructor(e,t,s=1e3,o=1.5,u=6e4){this.xi=e,this.timerId=t,this.A_=s,this.R_=o,this.V_=u,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const t=Math.floor(this.m_+this.w_()),s=Math.max(0,Date.now()-this.g_),o=Math.max(0,t-s);o>0&&ne("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.m_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,o,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */const Xg="PersistentStream";class cv{constructor(e,t,s,o,u,h,m,y){this.xi=e,this.S_=s,this.D_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new uv(e,t)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,t){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(Ar(t.toString()),Ar("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),t=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.v_===t&&this.z_(s,o)},s=>{e(()=>{const o=new se(H.UNKNOWN,"Fetching auth token failed: "+s.message);return this.j_(o)})})}z_(e,t){const s=this.G_(this.v_);this.stream=this.H_(e,t),this.stream.e_(()=>{s(()=>this.listener.e_())}),this.stream.n_(()=>{s(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(o=>{s(()=>this.j_(o))}),this.stream.onMessage(o=>{s(()=>++this.M_==1?this.J_(o):this.onNext(o))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return ne(Xg,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return t=>{this.xi.enqueueAndForget(()=>this.v_===e?t():(ne(Xg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class BS extends cv{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}H_(e,t){return this.connection.I_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const t=G1(this.serializer,e),s=function(u){if(!("targetChange"in u))return we.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?we.min():h.readTime?er(h.readTime):we.min()}(e);return this.listener.Y_(t,s)}Z_(e){const t={};t.database=Id(this.serializer),t.addTarget=function(u,h){let m;const y=h.target;if(m=yd(y)?{documents:X1(u,y)}:{query:J1(u,y).gt},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=J_(u,h.resumeToken);const v=Ed(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(we.min())>0){m.readTime=zu(u,h.snapshotVersion.toTimestamp());const v=Ed(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m}(this.serializer,e);const s=eS(this.serializer,e);s&&(t.labels=s),this.Q_(t)}X_(e){const t={};t.database=Id(this.serializer),t.removeTarget=e,this.Q_(t)}}class $S extends cv{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,t){return this.connection.I_("Write",e,t)}J_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const t=Y1(e.writeResults,e.commitTime),s=er(e.commitTime);return this.listener.ra(s,t)}ia(){const e={};e.database=Id(this.serializer),this.Q_(e)}ta(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>Q1(this.serializer,s))};this.Q_(t)}}/**
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
 */class HS{}class qS extends HS{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.sa=!1}oa(){if(this.sa)throw new se(H.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,s,o){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.zo(e,wd(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new se(H.UNKNOWN,u.toString())})}Yo(e,t,s,o,u){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.Yo(e,wd(t,s),o,h,m,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new se(H.UNKNOWN,h.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class WS{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(Ar(t),this.ua=!1):ne("OnlineStateTracker",t)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
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
 */const ns="RemoteStore";class KS{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=u,this.Ra.No(h=>{s.enqueueAndForget(async()=>{is(this)&&(ne(ns,"Restarting streams for network reachability change."),await async function(y){const v=Te(y);v.da.add(4),await qa(v),v.Va.set("Unknown"),v.da.delete(4),await ac(v)}(this))})}),this.Va=new WS(s,o)}}async function ac(i){if(is(i))for(const e of i.Aa)await e(!0)}async function qa(i){for(const e of i.Aa)await e(!1)}function hv(i,e){const t=Te(i);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),lf(t)?af(t):To(t).N_()&&of(t,e))}function sf(i,e){const t=Te(i),s=To(t);t.Ea.delete(e),s.N_()&&dv(t,e),t.Ea.size===0&&(s.N_()?s.k_():is(t)&&t.Va.set("Unknown"))}function of(i,e){if(i.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}To(i).Z_(e)}function dv(i,e){i.ma.Ke(e),To(i).X_(e)}function af(i){i.ma=new z1({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>i.Ea.get(e)||null,Pt:()=>i.datastore.serializer.databaseId}),To(i).start(),i.Va.ca()}function lf(i){return is(i)&&!To(i).O_()&&i.Ea.size>0}function is(i){return Te(i).da.size===0}function fv(i){i.ma=void 0}async function GS(i){i.Va.set("Online")}async function QS(i){i.Ea.forEach((e,t)=>{of(i,e)})}async function YS(i,e){fv(i),lf(i)?(i.Va.Pa(e),af(i)):i.Va.set("Unknown")}async function XS(i,e,t){if(i.Va.set("Online"),e instanceof X_&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ea.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ea.delete(m),o.ma.removeTarget(m))}(i,e)}catch(s){ne(ns,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await $u(i,s)}else if(e instanceof Su?i.ma.Xe(e):e instanceof Y_?i.ma.ot(e):i.ma.nt(e),!t.isEqual(we.min()))try{const s=await lv(i.localStore);t.compareTo(s)>=0&&await function(u,h){const m=u.ma.It(h);return m.targetChanges.forEach((y,v)=>{if(y.resumeToken.approximateByteSize()>0){const w=u.Ea.get(v);w&&u.Ea.set(v,w.withResumeToken(y.resumeToken,h))}}),m.targetMismatches.forEach((y,v)=>{const w=u.Ea.get(y);if(!w)return;u.Ea.set(y,w.withResumeToken(kt.EMPTY_BYTE_STRING,w.snapshotVersion)),dv(u,y);const A=new ii(w.target,y,v,w.sequenceNumber);of(u,A)}),u.remoteSyncer.applyRemoteEvent(m)}(i,t)}catch(s){ne(ns,"Failed to raise snapshot:",s),await $u(i,s)}}async function $u(i,e,t){if(!wo(e))throw e;i.da.add(1),await qa(i),i.Va.set("Offline"),t||(t=()=>lv(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{ne(ns,"Retrying IndexedDB access"),await t(),i.da.delete(1),await ac(i)})}function pv(i,e){return e().catch(t=>$u(i,t,e))}async function lc(i){const e=Te(i),t=gi(e);let s=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:Hd;for(;JS(e);)try{const o=await VS(e.localStore,s);if(o===null){e.Ia.length===0&&t.k_();break}s=o.batchId,ZS(e,o)}catch(o){await $u(e,o)}mv(e)&&gv(e)}function JS(i){return is(i)&&i.Ia.length<10}function ZS(i,e){i.Ia.push(e);const t=gi(i);t.N_()&&t.ea&&t.ta(e.mutations)}function mv(i){return is(i)&&!gi(i).O_()&&i.Ia.length>0}function gv(i){gi(i).start()}async function eA(i){gi(i).ia()}async function tA(i){const e=gi(i);for(const t of i.Ia)e.ta(t.mutations)}async function nA(i,e,t){const s=i.Ia.shift(),o=Xd.from(s,e,t);await pv(i,()=>i.remoteSyncer.applySuccessfulWrite(o)),await lc(i)}async function rA(i,e){e&&gi(i).ea&&await async function(s,o){if(function(h){return U1(h)&&h!==H.ABORTED}(o.code)){const u=s.Ia.shift();gi(s).L_(),await pv(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await lc(s)}}(i,e),mv(i)&&gv(i)}async function Jg(i,e){const t=Te(i);t.asyncQueue.verifyOperationInProgress(),ne(ns,"RemoteStore received new credentials");const s=is(t);t.da.add(3),await qa(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await ac(t)}async function iA(i,e){const t=Te(i);e?(t.da.delete(2),await ac(t)):e||(t.da.add(2),await qa(t),t.Va.set("Unknown"))}function To(i){return i.fa||(i.fa=function(t,s,o){const u=Te(t);return u.oa(),new BS(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{e_:GS.bind(null,i),n_:QS.bind(null,i),i_:YS.bind(null,i),Y_:XS.bind(null,i)}),i.Aa.push(async e=>{e?(i.fa.L_(),lf(i)?af(i):i.Va.set("Unknown")):(await i.fa.stop(),fv(i))})),i.fa}function gi(i){return i.ga||(i.ga=function(t,s,o){const u=Te(t);return u.oa(),new $S(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{e_:()=>Promise.resolve(),n_:eA.bind(null,i),i_:rA.bind(null,i),na:tA.bind(null,i),ra:nA.bind(null,i)}),i.Aa.push(async e=>{e?(i.ga.L_(),await lc(i)):(await i.ga.stop(),i.Ia.length>0&&(ne(ns,`Stopping write stream with ${i.Ia.length} pending writes`),i.Ia=[]))})),i.ga}/**
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
 */class uf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Yi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new uf(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cf(i,e){if(Ar("AsyncQueue",`${e}: ${i}`),wo(i))return new se(H.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class so{static emptySet(e){return new so(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||he.comparator(t.key,s.key):(t,s)=>he.comparator(t.key,s.key),this.keyedMap=Ea(),this.sortedSet=new Je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof so)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new so;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class Zg{constructor(){this.pa=new Je(he.comparator)}track(e){const t=e.doc.key,s=this.pa.get(t);s?e.type!==0&&s.type===3?this.pa=this.pa.insert(t,e):e.type===3&&s.type!==1?this.pa=this.pa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.pa=this.pa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.pa=this.pa.remove(t):e.type===1&&s.type===2?this.pa=this.pa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):ge(63341,{Vt:e,ya:s}):this.pa=this.pa.insert(t,e)}wa(){const e=[];return this.pa.inorderTraversal((t,s)=>{e.push(s)}),e}}class fo{constructor(e,t,s,o,u,h,m,y,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(m=>{h.push({type:0,doc:m})}),new fo(e,t,so.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ec(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class sA{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class oA{constructor(){this.queries=ey(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=Te(t),u=o.queries;o.queries=ey(),u.forEach((h,m)=>{for(const y of m.Sa)y.onError(s)})})(this,new se(H.ABORTED,"Firestore shutting down"))}}function ey(){return new rs(i=>b_(i),ec)}async function aA(i,e){const t=Te(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Da()&&e.va()&&(s=2):(u=new sA,s=e.va()?0:1);try{switch(s){case 0:u.ba=await t.onListen(o,!0);break;case 1:u.ba=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=cf(h,`Initialization of query '${Js(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.Sa.push(e),e.Fa(t.onlineState),u.ba&&e.Ma(u.ba)&&hf(t)}async function lA(i,e){const t=Te(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.va()?0:1:!u.Da()&&e.va()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function uA(i,e){const t=Te(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.Sa)m.Ma(o)&&(s=!0);h.ba=o}}s&&hf(t)}function cA(i,e,t){const s=Te(i),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function hf(i){i.Ca.forEach(e=>{e.next()})}var Rd,ty;(ty=Rd||(Rd={})).xa="default",ty.Cache="cache";class hA{constructor(e,t,s){this.query=e,this.Oa=t,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=s||{}}Ma(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new fo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Na?this.La(e)&&(this.Oa.next(e),t=!0):this.ka(e,this.onlineState)&&(this.qa(e),t=!0),this.Ba=e,t}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let t=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),t=!0),t}ka(e,t){if(!e.fromCache||!this.va())return!0;const s=t!=="Offline";return(!this.options.Qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}La(e){if(e.docChanges.length>0)return!0;const t=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}qa(e){e=fo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==Rd.Cache}}/**
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
 */class yv{constructor(e){this.key=e}}class _v{constructor(e){this.key=e}}class dA{constructor(e,t){this.query=e,this.Ha=t,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Pe(),this.mutatedKeys=Pe(),this.Za=F_(e),this.Xa=new so(this.Za)}get eu(){return this.Ha}tu(e,t){const s=t?t.nu:new Zg,o=t?t.Xa:this.Xa;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,A)=>{const C=o.get(w),j=tc(this.query,A)?A:null,W=!!C&&this.mutatedKeys.has(C.key),Q=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let B=!1;C&&j?C.data.isEqual(j.data)?W!==Q&&(s.track({type:3,doc:j}),B=!0):this.ru(C,j)||(s.track({type:2,doc:j}),B=!0,(y&&this.Za(j,y)>0||v&&this.Za(j,v)<0)&&(m=!0)):!C&&j?(s.track({type:0,doc:j}),B=!0):C&&!j&&(s.track({type:1,doc:C}),B=!0,(y||v)&&(m=!0)),B&&(j?(h=h.add(j),u=Q?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{Xa:h,nu:s,Cs:m,mutatedKeys:u}}ru(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const h=e.nu.wa();h.sort((w,A)=>function(j,W){const Q=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge(20277,{Vt:B})}};return Q(j)-Q(W)}(w.type,A.type)||this.Za(w.doc,A.doc)),this.iu(s),o=o!=null&&o;const m=t&&!o?this.su():[],y=this.Ya.size===0&&this.current&&!o?1:0,v=y!==this.Ja;return this.Ja=y,h.length!==0||v?{snapshot:new fo(this.query,e.Xa,u,h,e.mutatedKeys,y===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),ou:m}:{ou:m}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new Zg,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=Pe(),this.Xa.forEach(s=>{this._u(s.key)&&(this.Ya=this.Ya.add(s.key))});const t=[];return e.forEach(s=>{this.Ya.has(s)||t.push(new _v(s))}),this.Ya.forEach(s=>{e.has(s)||t.push(new yv(s))}),t}au(e){this.Ha=e.$s,this.Ya=Pe();const t=this.tu(e.documents);return this.applyChanges(t,!0)}uu(){return fo.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const df="SyncEngine";class fA{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class pA{constructor(e){this.key=e,this.cu=!1}}class mA{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.lu={},this.hu=new rs(m=>b_(m),ec),this.Pu=new Map,this.Tu=new Set,this.Iu=new Je(he.comparator),this.Eu=new Map,this.du=new ef,this.Au={},this.Ru=new Map,this.Vu=ho.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function gA(i,e,t=!0){const s=Sv(i);let o;const u=s.hu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.uu()):o=await vv(s,e,t,!0),o}async function yA(i,e){const t=Sv(i);await vv(t,e,!0,!1)}async function vv(i,e,t,s){const o=await OS(i.localStore,Zn(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await _A(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&hv(i.remoteStore,o),m}async function _A(i,e,t,s,o){i.fu=(A,C,j)=>async function(Q,B,ye,J){let re=B.view.tu(ye);re.Cs&&(re=await Kg(Q.localStore,B.query,!1).then(({documents:P})=>B.view.tu(P,re)));const ue=J&&J.targetChanges.get(B.targetId),Ce=J&&J.targetMismatches.get(B.targetId)!=null,Ee=B.view.applyChanges(re,Q.isPrimaryClient,ue,Ce);return ry(Q,B.targetId,Ee.ou),Ee.snapshot}(i,A,C,j);const u=await Kg(i.localStore,e,!0),h=new dA(e,u.$s),m=h.tu(u.documents),y=Ha.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),v=h.applyChanges(m,i.isPrimaryClient,y);ry(i,t,v.ou);const w=new fA(e,t,h);return i.hu.set(e,w),i.Pu.has(t)?i.Pu.get(t).push(e):i.Pu.set(t,[e]),v.snapshot}async function vA(i,e,t){const s=Te(i),o=s.hu.get(e),u=s.Pu.get(o.targetId);if(u.length>1)return s.Pu.set(o.targetId,u.filter(h=>!ec(h,e))),void s.hu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Sd(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&sf(s.remoteStore,o.targetId),Cd(s,o.targetId)}).catch(Eo)):(Cd(s,o.targetId),await Sd(s.localStore,o.targetId,!0))}async function EA(i,e){const t=Te(i),s=t.hu.get(e),o=t.Pu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),sf(t.remoteStore,s.targetId))}async function wA(i,e,t){const s=kA(i);try{const o=await function(h,m){const y=Te(h),v=ft.now(),w=m.reduce((j,W)=>j.add(W.key),Pe());let A,C;return y.persistence.runTransaction("Locally write mutations","readwrite",j=>{let W=Rr(),Q=Pe();return y.Bs.getEntries(j,w).next(B=>{W=B,W.forEach((ye,J)=>{J.isValidDocument()||(Q=Q.add(ye))})}).next(()=>y.localDocuments.getOverlayedDocuments(j,W)).next(B=>{A=B;const ye=[];for(const J of m){const re=O1(J,A.get(J.key).overlayedDocument);re!=null&&ye.push(new vi(J.key,re,P_(re.value.mapValue),ln.exists(!0)))}return y.mutationQueue.addMutationBatch(j,v,ye,m)}).next(B=>{C=B;const ye=B.applyToLocalDocumentSet(A,Q);return y.documentOverlayCache.saveOverlays(j,B.batchId,ye)})}).then(()=>({batchId:C.batchId,changes:j_(A)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,m,y){let v=h.Au[h.currentUser.toKey()];v||(v=new Je(Se)),v=v.insert(m,y),h.Au[h.currentUser.toKey()]=v}(s,o.batchId,t),await Wa(s,o.changes),await lc(s.remoteStore)}catch(o){const u=cf(o,"Failed to persist write");t.reject(u)}}async function Ev(i,e){const t=Te(i);try{const s=await DS(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Eu.get(u);h&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.cu=!0:o.modifiedDocuments.size>0?Fe(h.cu,14607):o.removedDocuments.size>0&&(Fe(h.cu,42227),h.cu=!1))}),await Wa(t,s,e)}catch(s){await Eo(s)}}function ny(i,e,t){const s=Te(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.hu.forEach((u,h)=>{const m=h.view.Fa(e);m.snapshot&&o.push(m.snapshot)}),function(h,m){const y=Te(h);y.onlineState=m;let v=!1;y.queries.forEach((w,A)=>{for(const C of A.Sa)C.Fa(m)&&(v=!0)}),v&&hf(y)}(s.eventManager,e),o.length&&s.lu.Y_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function TA(i,e,t){const s=Te(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),u=o&&o.key;if(u){let h=new Je(he.comparator);h=h.insert(u,bt.newNoDocument(u,we.min()));const m=Pe().add(u),y=new sc(we.min(),new Map,new Je(Se),h,m);await Ev(s,y),s.Iu=s.Iu.remove(u),s.Eu.delete(e),ff(s)}else await Sd(s.localStore,e,!1).then(()=>Cd(s,e,t)).catch(Eo)}async function IA(i,e){const t=Te(i),s=e.batch.batchId;try{const o=await NS(t.localStore,e);Tv(t,s,null),wv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Wa(t,o)}catch(o){await Eo(o)}}async function SA(i,e,t){const s=Te(i);try{const o=await function(h,m){const y=Te(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",v=>{let w;return y.mutationQueue.lookupMutationBatch(v,m).next(A=>(Fe(A!==null,37113),w=A.keys(),y.mutationQueue.removeMutationBatch(v,A))).next(()=>y.mutationQueue.performConsistencyCheck(v)).next(()=>y.documentOverlayCache.removeOverlaysForBatchId(v,w,m)).next(()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w)).next(()=>y.localDocuments.getDocuments(v,w))})}(s.localStore,e);Tv(s,e,t),wv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Wa(s,o)}catch(o){await Eo(o)}}function wv(i,e){(i.Ru.get(e)||[]).forEach(t=>{t.resolve()}),i.Ru.delete(e)}function Tv(i,e,t){const s=Te(i);let o=s.Au[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Au[s.currentUser.toKey()]=o}}function Cd(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Pu.get(e))i.hu.delete(s),t&&i.lu.gu(s,t);i.Pu.delete(e),i.isPrimaryClient&&i.du.Hr(e).forEach(s=>{i.du.containsKey(s)||Iv(i,s)})}function Iv(i,e){i.Tu.delete(e.path.canonicalString());const t=i.Iu.get(e);t!==null&&(sf(i.remoteStore,t),i.Iu=i.Iu.remove(e),i.Eu.delete(t),ff(i))}function ry(i,e,t){for(const s of t)s instanceof yv?(i.du.addReference(s.key,e),AA(i,s)):s instanceof _v?(ne(df,"Document no longer in limbo: "+s.key),i.du.removeReference(s.key,e),i.du.containsKey(s.key)||Iv(i,s.key)):ge(19791,{pu:s})}function AA(i,e){const t=e.key,s=t.path.canonicalString();i.Iu.get(t)||i.Tu.has(s)||(ne(df,"New document in limbo: "+t),i.Tu.add(s),ff(i))}function ff(i){for(;i.Tu.size>0&&i.Iu.size<i.maxConcurrentLimboResolutions;){const e=i.Tu.values().next().value;i.Tu.delete(e);const t=new he(Ke.fromString(e)),s=i.Vu.next();i.Eu.set(s,new pA(t)),i.Iu=i.Iu.insert(t,s),hv(i.remoteStore,new ii(Zn(Qd(t.path)),s,"TargetPurposeLimboResolution",Xu.le))}}async function Wa(i,e,t){const s=Te(i),o=[],u=[],h=[];s.hu.isEmpty()||(s.hu.forEach((m,y)=>{h.push(s.fu(y,e,t).then(v=>{var w;if((v||t)&&s.isPrimaryClient){const A=v?!v.fromCache:(w=t?.targetChanges.get(y.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(y.targetId,A?"current":"not-current")}if(v){o.push(v);const A=nf.Rs(y.targetId,v);u.push(A)}}))}),await Promise.all(h),s.lu.Y_(o),await async function(y,v){const w=Te(y);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>z.forEach(v,C=>z.forEach(C.ds,j=>w.persistence.referenceDelegate.addReference(A,C.targetId,j)).next(()=>z.forEach(C.As,j=>w.persistence.referenceDelegate.removeReference(A,C.targetId,j)))))}catch(A){if(!wo(A))throw A;ne(rf,"Failed to update sequence numbers: "+A)}for(const A of v){const C=A.targetId;if(!A.fromCache){const j=w.xs.get(C),W=j.snapshotVersion,Q=j.withLastLimboFreeSnapshotVersion(W);w.xs=w.xs.insert(C,Q)}}}(s.localStore,u))}async function RA(i,e){const t=Te(i);if(!t.currentUser.isEqual(e)){ne(df,"User change. New user:",e.toKey());const s=await av(t.localStore,e);t.currentUser=e,function(u,h){u.Ru.forEach(m=>{m.forEach(y=>{y.reject(new se(H.CANCELLED,h))})}),u.Ru.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Wa(t,s.ks)}}function CA(i,e){const t=Te(i),s=t.Eu.get(e);if(s&&s.cu)return Pe().add(s.key);{let o=Pe();const u=t.Pu.get(e);if(!u)return o;for(const h of u){const m=t.hu.get(h);o=o.unionWith(m.view.eu)}return o}}function Sv(i){const e=Te(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ev.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=CA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=TA.bind(null,e),e.lu.Y_=uA.bind(null,e.eventManager),e.lu.gu=cA.bind(null,e.eventManager),e}function kA(i){const e=Te(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=IA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=SA.bind(null,e),e}class Hu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=oc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,t){return null}Cu(e,t){return null}Du(e){return PS(this.persistence,new RS,e.initialUser,this.serializer)}Su(e){return new ov(tf.fi,this.serializer)}bu(e){return new MS}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hu.provider={build:()=>new Hu};class PA extends Hu{constructor(e){super(),this.cacheSizeBytes=e}vu(e,t){Fe(this.persistence.referenceDelegate instanceof Bu,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new hS(s,e.asyncQueue,t)}Su(e){const t=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new ov(s=>Bu.fi(s,t),this.serializer)}}class kd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ny(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=RA.bind(null,this.syncEngine),await iA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new oA}()}createDatastore(e){const t=oc(e.databaseInfo.databaseId),s=function(u){return new zS(u)}(e.databaseInfo);return function(u,h,m,y){return new qS(u,h,m,y)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,m){return new KS(s,o,u,h,m)}(this.localStore,this.datastore,e.asyncQueue,t=>ny(this.syncEngine,t,0),function(){return Yg.C()?new Yg:new bS}())}createSyncEngine(e,t){return function(o,u,h,m,y,v,w){const A=new mA(o,u,h,m,y,v);return w&&(A.mu=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=Te(o);ne(ns,"RemoteStore shutting down."),u.da.add(5),await qa(u),u.Ra.shutdown(),u.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}kd.provider={build:()=>new kd};/**
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
 */class NA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):Ar("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const yi="FirestoreClient";class DA{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Mt.UNAUTHENTICATED,this.clientId=v_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{ne(yi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(ne(yi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=cf(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ed(i,e){i.asyncQueue.verifyOperationInProgress(),ne(yi,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async o=>{s.isEqual(o)||(await av(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function iy(i,e){i.asyncQueue.verifyOperationInProgress();const t=await xA(i);ne(yi,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>Jg(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,o)=>Jg(e.remoteStore,o)),i._onlineComponents=e}async function xA(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ne(yi,"Using user provided OfflineComponentProvider");try{await ed(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===H.FAILED_PRECONDITION||o.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;ao("Error using user provided cache. Falling back to memory cache: "+t),await ed(i,new Hu)}}else ne(yi,"Using default OfflineComponentProvider"),await ed(i,new PA(void 0));return i._offlineComponents}async function Av(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ne(yi,"Using user provided OnlineComponentProvider"),await iy(i,i._uninitializedComponentsProvider._online)):(ne(yi,"Using default OnlineComponentProvider"),await iy(i,new kd))),i._onlineComponents}function VA(i){return Av(i).then(e=>e.syncEngine)}async function sy(i){const e=await Av(i),t=e.eventManager;return t.onListen=gA.bind(null,e.syncEngine),t.onUnlisten=vA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=yA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=EA.bind(null,e.syncEngine),t}/**
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
 */function Rv(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const oy=new Map;/**
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
 */function Cv(i,e,t){if(!t)throw new se(H.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function OA(i,e,t,s){if(e===!0&&s===!0)throw new se(H.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function ay(i){if(!he.isDocumentKey(i))throw new se(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function ly(i){if(he.isDocumentKey(i))throw new se(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function uc(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":ge(12329,{type:typeof i})}function Xi(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new se(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=uc(i);throw new se(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */const kv="firestore.googleapis.com",uy=!0;class cy{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new se(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=kv,this.ssl=uy}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:uy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=sv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<uS)throw new se(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}OA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Rv((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new se(H.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new se(H.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new se(H.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new jI;switch(s.type){case"firstParty":return new HI(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new se(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=oy.get(t);s&&(ne("ComponentProvider","Removing Datastore"),oy.delete(t),s.terminate())}(this),Promise.resolve()}}function LA(i,e,t,s={}){var o;i=Xi(i,cc);const u=go(e),h=i._getSettings(),m=Object.assign(Object.assign({},h),{emulatorOptions:i._getEmulatorOptions()}),y=`${e}:${t}`;u&&(Sy(`https://${y}`),Ay("Firestore",!0)),h.host!==kv&&h.host!==y&&ao("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const v=Object.assign(Object.assign({},h),{host:y,ssl:u,emulatorOptions:s});if(!Ji(v,m)&&(i._setSettings(v),s.mockUserToken)){let w,A;if(typeof s.mockUserToken=="string")w=s.mockUserToken,A=Mt.MOCK_USER;else{w=hw(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const C=s.mockUserToken.sub||s.mockUserToken.user_id;if(!C)throw new se(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new Mt(C)}i._authCredentials=new zI(new y_(w,A))}}/**
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
 */class Io{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Io(this.firestore,e,this._query)}}class un{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ci(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new un(this.firestore,e,this._key)}}class ci extends Io{constructor(e,t,s){super(e,t,Qd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new un(this.firestore,null,new he(e))}withConverter(e){return new ci(this.firestore,e,this._path)}}function td(i,e,...t){if(i=wt(i),Cv("collection","path",e),i instanceof cc){const s=Ke.fromString(e,...t);return ly(s),new ci(i,null,s)}{if(!(i instanceof un||i instanceof ci))throw new se(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ke.fromString(e,...t));return ly(s),new ci(i.firestore,null,s)}}function Pd(i,e,...t){if(i=wt(i),arguments.length===1&&(e=v_.newId()),Cv("doc","path",e),i instanceof cc){const s=Ke.fromString(e,...t);return ay(s),new un(i,null,new he(s))}{if(!(i instanceof un||i instanceof ci))throw new se(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ke.fromString(e,...t));return ay(s),new un(i.firestore,i instanceof ci?i.converter:null,new he(s))}}/**
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
 */const hy="AsyncQueue";class dy{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new uv(this,"async_queue_retry"),this.rc=()=>{const s=Zh();s&&ne(hy,"Visibility state changed to "+s.visibilityState),this.x_.b_()},this.sc=e;const t=Zh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const t=Zh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const t=new Yi;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!wo(e))throw e;ne(hy,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const t=this.sc.then(()=>(this.ec=!0,e().catch(s=>{throw this.Xu=s,this.ec=!1,Ar("INTERNAL UNHANDLED ERROR: ",fy(s)),s}).then(s=>(this.ec=!1,s))));return this.sc=t,t}enqueueAfterDelay(e,t,s){this.oc(),this.nc.indexOf(e)>-1&&(t=0);const o=uf.createAndSchedule(this,e,t,s,u=>this.uc(u));return this.Zu.push(o),o}oc(){this.Xu&&ge(47125,{cc:fy(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const t of this.Zu)if(t.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Zu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const t=this.Zu.indexOf(e);this.Zu.splice(t,1)}}function fy(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
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
 */function py(i){return function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1}(i,["next","error","complete"])}class po extends cc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new dy,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new dy(e),this._firestoreClient=void 0,await e}}}function MA(i,e){const t=typeof i=="object"?i:Py(),s=typeof i=="string"?i:Lu,o=Od(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=uw("firestore");u&&LA(o,...u)}return o}function pf(i){if(i._terminated)throw new se(H.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||bA(i),i._firestoreClient}function bA(i){var e,t,s;const o=i._freezeSettings(),u=function(m,y,v,w){return new s1(m,y,v,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,Rv(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new DA(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&function(m){const y=m?._online.build();return{_offline:m?._offline.build(y),_online:y}}(i._componentsProvider))}/**
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
 */class mo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mo(kt.fromBase64String(e))}catch(t){throw new se(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new mo(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class hc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new se(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class mf{constructor(e){this._methodName=e}}/**
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
 */class gf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new se(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new se(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}}/**
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
 */class yf{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
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
 */const FA=/^__.*__$/;class UA{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new vi(e,this.data,this.fieldMask,t,this.fieldTransforms):new $a(e,this.data,t,this.fieldTransforms)}}class Pv{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new vi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Nv(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge(40011,{Ic:i})}}class _f{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ec(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new _f(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.dc({path:s,Rc:!1});return o.Vc(e),o}mc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.dc({path:s,Rc:!1});return o.Ec(),o}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return qu(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(Nv(this.Ic)&&FA.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class jA{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||oc(e)}bc(e,t,s,o=!1){return new _f({Ic:e,methodName:t,wc:s,path:Ct.emptyPath(),Rc:!1,yc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vf(i){const e=i._freezeSettings(),t=oc(i._databaseId);return new jA(i._databaseId,!!e.ignoreUndefinedProperties,t)}function Dv(i,e,t,s,o,u={}){const h=i.bc(u.merge||u.mergeFields?2:0,e,t,o);Ef("Data must be an object, but it was:",h,s);const m=xv(s,h);let y,v;if(u.merge)y=new an(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const A of u.mergeFields){const C=Nd(e,A,t);if(!h.contains(C))throw new se(H.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);Ov(w,C)||w.push(C)}y=new an(w),v=h.fieldTransforms.filter(A=>y.covers(A.field))}else y=null,v=h.fieldTransforms;return new UA(new Jt(m),y,v)}class dc extends mf{_toFieldTransform(e){if(e.Ic!==2)throw e.Ic===1?e.gc(`${this._methodName}() can only appear at the top level of your update data`):e.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof dc}}function zA(i,e,t,s){const o=i.bc(1,e,t);Ef("Data must be an object, but it was:",o,s);const u=[],h=Jt.empty();_i(s,(y,v)=>{const w=wf(e,y,t);v=wt(v);const A=o.mc(w);if(v instanceof dc)u.push(w);else{const C=Ka(v,A);C!=null&&(u.push(w),h.set(w,C))}});const m=new an(u);return new Pv(h,m,o.fieldTransforms)}function BA(i,e,t,s,o,u){const h=i.bc(1,e,t),m=[Nd(e,s,t)],y=[o];if(u.length%2!=0)throw new se(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let C=0;C<u.length;C+=2)m.push(Nd(e,u[C])),y.push(u[C+1]);const v=[],w=Jt.empty();for(let C=m.length-1;C>=0;--C)if(!Ov(v,m[C])){const j=m[C];let W=y[C];W=wt(W);const Q=h.mc(j);if(W instanceof dc)v.push(j);else{const B=Ka(W,Q);B!=null&&(v.push(j),w.set(j,B))}}const A=new an(v);return new Pv(w,A,h.fieldTransforms)}function $A(i,e,t,s=!1){return Ka(t,i.bc(s?4:3,e))}function Ka(i,e){if(Vv(i=wt(i)))return Ef("Unsupported field value:",e,i),xv(i,e);if(i instanceof mf)return function(s,o){if(!Nv(o.Ic))throw o.gc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.gc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const m of s){let y=Ka(m,o.fc(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}}(i,e)}return function(s,o){if((s=wt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return k1(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=ft.fromDate(s);return{timestampValue:zu(o.serializer,u)}}if(s instanceof ft){const u=new ft(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:zu(o.serializer,u)}}if(s instanceof gf)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof mo)return{bytesValue:J_(o.serializer,s._byteString)};if(s instanceof un){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.gc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Zd(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof yf)return function(h,m){return{mapValue:{fields:{[C_]:{stringValue:k_},[Mu]:{arrayValue:{values:h.toArray().map(v=>{if(typeof v!="number")throw m.gc("VectorValues must only contain numeric values.");return Yd(m.serializer,v)})}}}}}}(s,o);throw o.gc(`Unsupported field value: ${uc(s)}`)}(i,e)}function xv(i,e){const t={};return w_(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_i(i,(s,o)=>{const u=Ka(o,e.Ac(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function Vv(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof ft||i instanceof gf||i instanceof mo||i instanceof un||i instanceof mf||i instanceof yf)}function Ef(i,e,t){if(!Vv(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=uc(t);throw s==="an object"?e.gc(i+" a custom object"):e.gc(i+" "+s)}}function Nd(i,e,t){if((e=wt(e))instanceof hc)return e._internalPath;if(typeof e=="string")return wf(i,e);throw qu("Field path arguments must be of type string or ",i,!1,void 0,t)}const HA=new RegExp("[~\\*/\\[\\]]");function wf(i,e,t){if(e.search(HA)>=0)throw qu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new hc(...e.split("."))._internalPath}catch{throw qu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function qu(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${o}`),y+=")"),new se(H.INVALID_ARGUMENT,m+i+y)}function Ov(i,e){return i.some(t=>t.isEqual(e))}/**
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
 */class Lv{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new un(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Mv("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class qA extends Lv{data(){return super.data()}}function Mv(i,e){return typeof e=="string"?wf(i,e):e instanceof hc?e._internalPath:e._delegate._internalPath}/**
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
 */function WA(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new se(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Tf{}class KA extends Tf{}function GA(i,e,...t){let s=[];e instanceof Tf&&s.push(e),s=s.concat(t),function(u){const h=u.filter(y=>y instanceof Sf).length,m=u.filter(y=>y instanceof If).length;if(h>1||h>0&&m>0)throw new se(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)i=o._apply(i);return i}class If extends KA{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new If(e,t,s)}_apply(e){const t=this._parse(e);return bv(e._query,t),new Io(e.firestore,e.converter,_d(e._query,t))}_parse(e){const t=vf(e.firestore);return function(u,h,m,y,v,w,A){let C;if(v.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new se(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){gy(A,w);const W=[];for(const Q of A)W.push(my(y,u,Q));C={arrayValue:{values:W}}}else C=my(y,u,A)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||gy(A,w),C=$A(m,h,A,w==="in"||w==="not-in");return at.create(v,w,C)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Sf extends Tf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Sf(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:Fn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,u){let h=o;const m=u.getFlattenedFilters();for(const y of m)bv(h,y),h=_d(h,y)}(e._query,t),new Io(e.firestore,e.converter,_d(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function my(i,e,t){if(typeof(t=wt(t))=="string"){if(t==="")throw new se(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!M_(e)&&t.indexOf("/")!==-1)throw new se(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Ke.fromString(t));if(!he.isDocumentKey(s))throw new se(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return kg(i,new he(s))}if(t instanceof un)return kg(i,t._key);throw new se(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${uc(t)}.`)}function gy(i,e){if(!Array.isArray(i)||i.length===0)throw new se(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function bv(i,e){const t=function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null}(i.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new se(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new se(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class QA{convertValue(e,t="none"){switch(mi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(pi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ge(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return _i(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[Mu].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>rt(h.doubleValue));return new yf(u)}convertGeoPoint(e){return new gf(rt(e.latitude),rt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Zu(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(xa(e));default:return null}}convertTimestamp(e){const t=fi(e);return new ft(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ke.fromString(e);Fe(iv(s),9688,{name:e});const o=new Va(s.get(1),s.get(3)),u=new he(s.popFirst(5));return o.isEqual(t)||Ar(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function Fv(i,e,t){let s;return s=i?t&&(t.merge||t.mergeFields)?i.toFirestore(e,t):i.toFirestore(e):e,s}/**
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
 */class Ta{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Uv extends Lv{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Au(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Mv("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Au extends Uv{data(e={}){return super.data(e)}}class YA{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ta(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Au(this._firestore,this._userDataWriter,s.key,s,new Ta(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new se(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(m=>{const y=new Au(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ta(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const y=new Au(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ta(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,w=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:XA(m.type),doc:y,oldIndex:v,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function XA(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge(61501,{type:i})}}class jv extends QA{constructor(e){super(),this.firestore=e}convertBytes(e){return new mo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new un(this.firestore,null,t)}}function JA(i){return Af(Xi(i.firestore,po),[new ic(i._key,ln.none())])}function ZA(i,e){const t=Xi(i.firestore,po),s=Pd(i),o=Fv(i.converter,e);return Af(t,[Dv(vf(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,ln.exists(!1))]).then(()=>s)}function eR(i,...e){var t,s,o;i=wt(i);let u={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||py(e[h])||(u=e[h],h++);const m={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if(py(e[h])){const A=e[h];e[h]=(t=A.next)===null||t===void 0?void 0:t.bind(A),e[h+1]=(s=A.error)===null||s===void 0?void 0:s.bind(A),e[h+2]=(o=A.complete)===null||o===void 0?void 0:o.bind(A)}let y,v,w;if(i instanceof un)v=Xi(i.firestore,po),w=Qd(i._key.path),y={next:A=>{e[h]&&e[h](tR(v,i,A))},error:e[h+1],complete:e[h+2]};else{const A=Xi(i,Io);v=Xi(A.firestore,po),w=A._query;const C=new jv(v);y={next:j=>{e[h]&&e[h](new YA(v,C,A,j))},error:e[h+1],complete:e[h+2]},WA(i._query)}return function(C,j,W,Q){const B=new NA(Q),ye=new hA(j,B,W);return C.asyncQueue.enqueueAndForget(async()=>aA(await sy(C),ye)),()=>{B.xu(),C.asyncQueue.enqueueAndForget(async()=>lA(await sy(C),ye))}}(pf(v),w,m,y)}function Af(i,e){return function(s,o){const u=new Yi;return s.asyncQueue.enqueueAndForget(async()=>wA(await VA(s),o,u)),u.promise}(pf(i),e)}function tR(i,e,t){const s=t.docs.get(e._key),o=new jv(i);return new Uv(i,o,e._key,s,new Ta(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class nR{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=vf(e)}set(e,t,s){this._verifyNotCommitted();const o=nd(e,this._firestore),u=Fv(o.converter,t,s),h=Dv(this._dataReader,"WriteBatch.set",o._key,u,o.converter!==null,s);return this._mutations.push(h.toMutation(o._key,ln.none())),this}update(e,t,s,...o){this._verifyNotCommitted();const u=nd(e,this._firestore);let h;return h=typeof(t=wt(t))=="string"||t instanceof hc?BA(this._dataReader,"WriteBatch.update",u._key,t,s,o):zA(this._dataReader,"WriteBatch.update",u._key,t),this._mutations.push(h.toMutation(u._key,ln.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=nd(e,this._firestore);return this._mutations=this._mutations.concat(new ic(t._key,ln.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new se(H.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function nd(i,e){if((i=wt(i)).firestore!==e)throw new se(H.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return i}/**
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
 */function rR(i){return pf(i=Xi(i,po)),new nR(i,e=>Af(i,e))}(function(e,t=!0){(function(o){vo=o})(yo),oo(new Zi("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new po(new BI(s.getProvider("auth-internal")),new qI(h,s.getProvider("app-check-internal")),function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new se(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Va(v.options.projectId,w)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),ai(gg,yg,e),ai(gg,yg,"esm2017")})();const iR={apiKey:"AIzaSyBRQWdE55HMYzJ0RDsA-jl7nbesYPdhAL8",authDomain:"quality-floor-checklist.firebaseapp.com",projectId:"quality-floor-checklist",storageBucket:"quality-floor-checklist.appspot.com",messagingSenderId:"1027144107541",appId:"1:1027144107541:web:7498803d7861c3b783701c",measurementId:"G-C5ECWEVGW1"},rd="quality-floor-checklist";function sR(){const[i,e]=En.useState([]),[t,s]=En.useState(""),[o,u]=En.useState(null),[h,m]=En.useState(null),[y,v]=En.useState(!0),[w,A]=En.useState(!1);En.useEffect(()=>{try{const J=ky(iR),re=FI(J);m(MA(J));const ue=CT(re,async Ce=>{if(Ce)u(Ce.uid),A(!0);else try{await wT(re)}catch(Ee){console.error("Error signing in anonymously:",Ee)}});return()=>ue()}catch(J){console.error("Firebase initialization error:",J)}},[]);const C=En.useCallback(async(J,re)=>{const ue=["Code is reviewed by at least one other team member.","All new features have corresponding unit tests.","Accessibility (WCAG 2.1 AA) standards are met.","Performance metrics (e.g., LCP) are within budget."],Ce=rR(J),Ee=td(J,re);ue.forEach(P=>{const I=Pd(Ee);Ce.set(I,{text:P,createdAt:new Date,creatorId:"system"})});try{await Ce.commit()}catch(P){console.error("Error adding starter items: ",P)}},[]);En.useEffect(()=>{if(!w||!h)return;const J=`artifacts/${rd}/public/data/todos`,re=td(h,J),ue=GA(re);let Ce=!1;const Ee=eR(ue,P=>{if(P.empty&&!Ce){Ce=!0,C(h,J);return}const I=P.docs.map(R=>({id:R.id,...R.data()}));e(I)},P=>{console.error("Error listening to Firestore: ",P)});return()=>Ee()},[w,h,C]);const j=En.useCallback(async()=>{if(t.trim()===""||!o||!h)return;const J=`artifacts/${rd}/public/data/todos`;try{await ZA(td(h,J),{text:t.trim(),createdAt:new Date,creatorId:o}),s("")}catch(re){console.error("Error adding document: ",re)}},[t,o,h]),W=En.useCallback(async J=>{if(!h)return;const re=`artifacts/${rd}/public/data/todos/${J}`;try{await JA(Pd(h,re))}catch(ue){console.error("Error removing document: ",ue)}},[h]),Q=()=>{if(!window.jspdf){console.error("jsPDF library not found.");return}const{jsPDF:J}=window.jspdf,re=new J;re.setFontSize(18),re.text("Quality Floor Checklist",14,22),re.setFontSize(11),i.forEach((ue,Ce)=>{re.text(`- ${ue.text}`,14,30+Ce*10)}),re.save("quality-checklist.pdf")},B=()=>{let J=`data:text/csv;charset=utf-8,Quality Standard\r
`;i.forEach(Ce=>{const Ee=`"${Ce.text.replace(/"/g,'""')}"`;J+=Ee+`\r
`});const re=encodeURI(J),ue=document.createElement("a");ue.setAttribute("href",re),ue.setAttribute("download","quality-checklist.csv"),document.body.appendChild(ue),ue.click(),document.body.removeChild(ue)},ye=()=>{window.open("https://drive.google.com/file/d/1Ptui3LF_KZ7NzV5Knem9o_vkZYXphZ8o/view?usp=drive_link","_blank","noopener,noreferrer")};return y?me.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50",children:me.jsxs("div",{className:"bg-white p-8 rounded-lg max-w-md w-[90%] text-left",children:[me.jsx("h2",{className:"text-2xl font-bold mb-4 text-primary-dark",children:"Terms of Use & Disclaimer"}),me.jsxs("div",{className:"space-y-3 text-sm text-gray-700 mb-6",children:[me.jsx("p",{children:"Welcome to the Quality Floor Checklist Builder. Before you begin, please read the following terms carefully:"}),me.jsxs("ol",{className:"list-decimal list-inside space-y-2",children:[me.jsxs("li",{children:[me.jsx("strong",{children:"Public and Collaborative:"})," All content, including any checklist items you add or delete, is public and will be visible to anyone who visits this page. Do not enter any private, sensitive, or confidential information."]}),me.jsxs("li",{children:[me.jsx("strong",{children:"No Guarantee of Privacy:"})," There is no expectation of privacy for any data entered into this application. All data is stored in a shared database."]}),me.jsxs("li",{children:[me.jsx("strong",{children:'"As-Is" Service:'}),' This tool is provided "as-is" without any warranties. We are not responsible for the availability of the service or the loss of any data you enter.']}),me.jsxs("li",{children:[me.jsx("strong",{children:"User Responsibility:"})," You are solely responsible for the content you contribute. Do not post anything that is unlawful, harmful, or infringes on the rights of others."]})]}),me.jsx("p",{className:"font-semibold text-gray-800",children:'By clicking "Acknowledge & Continue," you confirm that you have read, understood, and agree to be bound by these terms.'})]}),me.jsx("button",{onClick:()=>v(!1),className:"w-full bg-primary-dark text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-main transition",children:"Acknowledge & Continue"})]})}):me.jsxs("div",{className:"max-w-4xl mx-auto p-4 sm:p-6 lg:p-8",children:[me.jsxs("header",{className:"text-center mb-8",children:[me.jsx("h1",{className:"text-4xl sm:text-5xl font-bold text-primary-dark",children:"Quality Floor Checklist"}),me.jsx("p",{className:"text-lg text-gray-600 mt-2",children:"A collaborative list of non-negotiable minimums for our projects."})]}),me.jsx("div",{className:"bg-white rounded-lg shadow-lg p-6 mb-6",children:me.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[me.jsx("input",{type:"text",value:t,onChange:J=>s(J.target.value),onKeyPress:J=>J.key==="Enter"&&j(),className:"flex-grow p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-main focus:border-transparent",placeholder:"Add a new quality standard..."}),me.jsx("button",{onClick:j,className:"btn bg-primary-dark text-white font-bold py-3 px-6 rounded-lg",children:"Add Item"})]})}),me.jsxs("div",{className:"flex flex-wrap justify-center gap-4 mb-6",children:[me.jsx("button",{onClick:Q,className:"btn bg-white text-primary-dark font-semibold py-2 px-4 border border-primary-dark rounded-lg shadow",children:"Export to PDF"}),me.jsx("button",{onClick:B,className:"btn bg-white text-primary-dark font-semibold py-2 px-4 border border-primary-dark rounded-lg shadow",children:"Export to CSV"}),me.jsx("button",{onClick:ye,className:"btn bg-primary-dark text-white font-semibold py-2 px-4 border border-primary-dark rounded-lg shadow",children:"App Deploy file as ZIP"})]}),me.jsxs("div",{className:"bg-white/70 border-2 border-dashed border-primary-main rounded-lg p-4 mb-6",children:[me.jsx("h3",{className:"font-bold text-lg text-primary-dark mb-3",children:"How to Use This Checklist"}),me.jsxs("div",{className:"space-y-4",children:[me.jsxs("div",{children:[me.jsx("h4",{className:"font-semibold text-gray-800",children:"Option 1: Collaborate on This Live Version"}),me.jsx("p",{className:"text-gray-700 text-sm mt-1",children:"Feel free to use this live, shared version. Simply copy the public URL of this page and send it to your teammates. Everyone with the link can edit this list in real-time."})]}),me.jsxs("div",{children:[me.jsx("h4",{className:"font-semibold text-gray-800",children:"Option 2: Deploy Your Own Private Version"}),me.jsx("p",{className:"text-gray-700 text-sm mt-1",children:"For a completely private checklist for your team, you can deploy your own copy of this application. This requires some technical setup (creating a free database project like D1 or Firebase project and deploying the code to a service like Cloudflare Workers)."})]})]})]}),o&&me.jsx("div",{className:"text-center my-4 p-2 bg-white/50 rounded-lg",children:me.jsxs("p",{className:"text-sm text-gray-700",children:["Your User ID (for reference): ",me.jsx("strong",{className:"text-primary-dark font-mono",children:o})]})}),me.jsx("div",{className:"space-y-4",children:i.length>0?i.map(J=>me.jsxs("div",{className:"flex items-center justify-between bg-white p-4 rounded-lg shadow transition-transform transform hover:scale-105",children:[me.jsx("span",{className:"flex-grow mr-4",children:J.text}),me.jsx("button",{onClick:()=>W(J.id),className:"ml-4 flex-shrink-0",children:me.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-400 hover:text-red-500 transition-colors",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:me.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]},J.id)):me.jsx("p",{className:"text-center text-gray-500",children:w?"No quality standards added yet. Be the first!":"Loading checklist..."})})]})}const oR=ew.createRoot(document.getElementById("root"));oR.render(me.jsx(KE.StrictMode,{children:me.jsx(sR,{})}));
