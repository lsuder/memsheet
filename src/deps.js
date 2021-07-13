/*! For license information please see deps.js.LICENSE.txt */
(()=>{"use strict";const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol();class s{constructor(t,s){if(s!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return t&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const i=new Map,n=t=>{let n=i.get(t);return void 0===n&&i.set(t,n=new s(t,e)),n},o=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(t instanceof s)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return n(i)},r=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>n("string"==typeof t?t:t+""))(e)})(t):t;var l,h,a,d;const c={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},u=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:u};class v extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this.Πp(s,e);void 0!==i&&(this.Πm.set(i,s),t.push(i))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static Πp(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}Π_(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const s=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{t?e.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const s=document.createElement("style");s.textContent=t.cssText,e.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,e,s){this.K(t,s)}Πj(t,e,s=p){var i,n;const o=this.constructor.Πp(t,s);if(void 0!==o&&!0===s.reflect){const r=(null!==(n=null===(i=s.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==n?n:c.toAttribute)(e,s.type);this.Πh=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this.Πh=null}}K(t,e){var s,i,n;const o=this.constructor,r=o.Πm.get(t);if(void 0!==r&&this.Πh!==r){const t=o.getPropertyOptions(r),l=t.converter,h=null!==(n=null!==(i=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==i?i:"function"==typeof l?l:null)&&void 0!==n?n:c.fromAttribute;this.Πh=r,this[r]=h(e,t.type),this.Πh=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===s.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this.Πg=this.Πq())}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,e)=>this[e]=t)),this.Πi=void 0);let e=!1;const s=this.L;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(s)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}Π$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,e)=>this.Πj(e,this[e],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}var f,m,g,y;v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null===(h=(l=globalThis).reactiveElementPlatformSupport)||void 0===h||h.call(l,{ReactiveElement:v}),(null!==(a=(d=globalThis).reactiveElementVersions)&&void 0!==a?a:d.reactiveElementVersions=[]).push("1.0.0-rc.2");const b=globalThis.trustedTypes,S=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,x="?"+w,C=`<${x}>`,P=document,U=(t="")=>P.createComment(t),$=t=>null===t||"object"!=typeof t&&"function"!=typeof t,E=Array.isArray,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,A=/-->/g,T=/>/g,N=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,O=/'/g,R=/"/g,k=/^(?:script|style|textarea)$/i,M=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),B=M(1),L=(M(2),Symbol.for("lit-noChange")),_=Symbol.for("lit-nothing"),z=new WeakMap,I=P.createTreeWalker(P,129,null,!1);class j{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const r=t.length-1,l=this.parts,[h,a]=((t,e)=>{const s=t.length-1,i=[];let n,o=2===e?"<svg>":"",r=H;for(let e=0;e<s;e++){const s=t[e];let l,h,a=-1,d=0;for(;d<s.length&&(r.lastIndex=d,h=r.exec(s),null!==h);)d=r.lastIndex,r===H?"!--"===h[1]?r=A:void 0!==h[1]?r=T:void 0!==h[2]?(k.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=N):void 0!==h[3]&&(r=N):r===N?">"===h[0]?(r=null!=n?n:H,a=-1):void 0===h[1]?a=-2:(a=r.lastIndex-h[2].length,l=h[1],r=void 0===h[3]?N:'"'===h[3]?R:O):r===R||r===O?r=N:r===A||r===T?r=H:(r=N,n=void 0);const c=r===N&&t[e+1].startsWith("/>")?" ":"";o+=r===H?s+C:a>=0?(i.push(l),s.slice(0,a)+"$lit$"+s.slice(a)+w+c):s+w+(-2===a?(i.push(void 0),e):c)}const l=o+(t[s]||"<?>")+(2===e?"</svg>":"");return[void 0!==S?S.createHTML(l):l,i]})(t,e);if(this.el=j.createElement(h,s),I.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=I.nextNode())&&l.length<r;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(w)){const s=a[o++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+"$lit$").split(w),e=/([.?@])?(.*)/.exec(s);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?J:"?"===e[1]?K:"@"===e[1]?Z:q})}else l.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(k.test(i.tagName)){const t=i.textContent.split(w),e=t.length-1;if(e>0){i.textContent=b?b.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],U()),I.nextNode(),l.push({type:2,index:++n});i.append(t[e],U())}}}else if(8===i.nodeType)if(i.data===x)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(w,t+1));)l.push({type:7,index:n}),t+=w.length-1}n++}}static createElement(t,e){const s=P.createElement("template");return s.innerHTML=t,s}}function V(t,e,s=t,i){var n,o,r,l;if(e===L)return e;let h=void 0!==i?null===(n=s.Σi)||void 0===n?void 0:n[i]:s.Σo;const a=$(e)?void 0:e._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(o=null==h?void 0:h.O)||void 0===o||o.call(h,!1),void 0===a?h=void 0:(h=new a(t),h.T(t,s,i)),void 0!==i?(null!==(r=(l=s).Σi)&&void 0!==r?r:l.Σi=[])[i]=h:s.Σo=h),void 0!==h&&(e=V(t,h.S(t,e.values),h,i)),e}class W{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:s},parts:i}=this.D,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:P).importNode(s,!0);I.currentNode=n;let o=I.nextNode(),r=0,l=0,h=i[0];for(;void 0!==h;){if(r===h.index){let e;2===h.type?e=new D(o,o.nextSibling,this,t):1===h.type?e=new h.ctor(o,h.name,h.strings,this,t):6===h.type&&(e=new F(o,this,t)),this.l.push(e),h=i[++l]}r!==(null==h?void 0:h.index)&&(o=I.nextNode(),r++)}return n}v(t){let e=0;for(const s of this.l)void 0!==s&&(void 0!==s.strings?(s.I(t,s,e),e+=s.strings.length-2):s.I(t[e])),e++}}class D{constructor(t,e,s,i){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=s,this.options=i}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=V(this,t,e),$(t)?t===_||null==t||""===t?(this.H!==_&&this.R(),this.H=_):t!==this.H&&t!==L&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var e;return E(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(P.createTextNode(t)),this.H=t}_(t){var e;const{values:s,_$litType$:i}=t,n="number"==typeof i?this.C(t):(void 0===i.el&&(i.el=j.createElement(i.h,this.options)),i);if((null===(e=this.H)||void 0===e?void 0:e.D)===n)this.H.v(s);else{const t=new W(n,this),e=t.u(this.options);t.v(s),this.$(e),this.H=t}}C(t){let e=z.get(t.strings);return void 0===e&&z.set(t.strings,e=new j(t)),e}g(t){E(this.H)||(this.H=[],this.R());const e=this.H;let s,i=0;for(const n of t)i===e.length?e.push(s=new D(this.k(U()),this.k(U()),this,this.options)):s=e[i],s.I(n),i++;i<e.length&&(this.R(s&&s.B.nextSibling,i),e.length=i)}R(t=this.A.nextSibling,e){var s;for(null===(s=this.P)||void 0===s||s.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class q{constructor(t,e,s,i,n){this.type=1,this.H=_,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this.H=Array(s.length-1).fill(_),this.strings=s):this.H=_}get tagName(){return this.element.tagName}I(t,e=this,s,i){const n=this.strings;let o=!1;if(void 0===n)t=V(this,t,e,0),o=!$(t)||t!==this.H&&t!==L,o&&(this.H=t);else{const i=t;let r,l;for(t=n[0],r=0;r<n.length-1;r++)l=V(this,i[s+r],e,r),l===L&&(l=this.H[r]),o||(o=!$(l)||l!==this.H[r]),l===_?t=_:t!==_&&(t+=(null!=l?l:"")+n[r+1]),this.H[r]=l}o&&!i&&this.W(t)}W(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends q{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===_?void 0:t}}class K extends q{constructor(){super(...arguments),this.type=4}W(t){t&&t!==_?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class Z extends q{constructor(){super(...arguments),this.type=5}I(t,e=this){var s;if((t=null!==(s=V(this,t,e,0))&&void 0!==s?s:_)===L)return;const i=this.H,n=t===_&&i!==_||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==_&&(i===_||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,s;"function"==typeof this.H?this.H.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this.H.handleEvent(t)}}class F{constructor(t,e,s){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=s}I(t){V(this,t)}}var G,Q,X,Y,tt,et;null===(m=(f=globalThis).litHtmlPlatformSupport)||void 0===m||m.call(f,j,D),(null!==(g=(y=globalThis).litHtmlVersions)&&void 0!==g?g:y.litHtmlVersions=[]).push("2.0.0-rc.3"),(null!==(G=(et=globalThis).litElementVersions)&&void 0!==G?G:et.litElementVersions=[]).push("3.0.0-rc.2");class st extends v{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();super.update(t),this.Φt=((t,e,s)=>{var i,n;const o=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new D(e.insertBefore(U(),t),t,void 0,s)}return r.I(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return L}}st.finalized=!0,st._$litElement$=!0,null===(X=(Q=globalThis).litElementHydrateSupport)||void 0===X||X.call(Q,{LitElement:st}),null===(tt=(Y=globalThis).litElementPlatformSupport)||void 0===tt||tt.call(Y,{LitElement:st}),customElements.define("simple-greeting",class extends st{static get styles(){return o`p { color: blue }`}static get properties(){return{name:{type:String}}}constructor(){super(),console.log("lit!!"),this.name="Somebody"}render(){return B`<p>Hello, ${this.name}!</p>`}})})();