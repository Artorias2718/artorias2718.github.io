import{o as Wa}from"./idb-BXWtuYvb.js";var ps={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=function(r){const t=[];let e=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Xa=function(r){const t=[];let e=0,n=0;for(;e<r.length;){const s=r[e++];if(s<128)t[n++]=String.fromCharCode(s);else if(s>191&&s<224){const o=r[e++];t[n++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=r[e++],u=r[e++],l=r[e++],d=((s&7)<<18|(o&63)<<12|(u&63)<<6|l&63)-65536;t[n++]=String.fromCharCode(55296+(d>>10)),t[n++]=String.fromCharCode(56320+(d&1023))}else{const o=r[e++],u=r[e++];t[n++]=String.fromCharCode((s&15)<<12|(o&63)<<6|u&63)}}return t.join("")},oo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const o=r[s],u=s+1<r.length,l=u?r[s+1]:0,d=s+2<r.length,f=d?r[s+2]:0,_=o>>2,w=(o&3)<<4|l>>4;let R=(l&15)<<2|f>>6,P=f&63;d||(P=64,u||(R=64)),n.push(e[_],e[w],e[R],e[P])}return n.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(so(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):Xa(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const o=e[r.charAt(s++)],l=s<r.length?e[r.charAt(s)]:0;++s;const f=s<r.length?e[r.charAt(s)]:64;++s;const w=s<r.length?e[r.charAt(s)]:64;if(++s,o==null||l==null||f==null||w==null)throw new Ya;const R=o<<2|l>>4;if(n.push(R),f!==64){const P=l<<4&240|f>>2;if(n.push(P),w!==64){const N=f<<6&192|w;n.push(N)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Ya extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ja=function(r){const t=so(r);return oo.encodeByteArray(t,!0)},Nn=function(r){return Ja(r).replace(/\./g,"")},Za=function(r){try{return oo.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function tu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const eu=()=>tu().__FIREBASE_DEFAULTS__,nu=()=>{if(typeof process>"u"||typeof ps>"u")return;const r=ps.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},ru=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&Za(r[1]);return t&&JSON.parse(t)},Kr=()=>{try{return eu()||nu()||ru()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},iu=r=>{var t,e;return(e=(t=Kr())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[r]},su=r=>{const t=iu(r);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},ao=()=>{var r;return(r=Kr())===null||r===void 0?void 0:r.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
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
 */function au(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",s=r.iat||0,o=r.sub||r.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Nn(JSON.stringify(e)),Nn(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hu(){var r;const t=(r=Kr())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lu(){return!hu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function cu(){try{return typeof indexedDB=="object"}catch{return!1}}function du(){return new Promise((r,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu="FirebaseError";class _e extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=fu,Object.setPrototypeOf(this,_e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,uo.prototype.create)}}class uo{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],u=o?pu(o,n):"Error",l=`${this.serviceName}: ${u} (${s}).`;return new _e(s,l,n)}}function pu(r,t){return r.replace(gu,(e,n)=>{const s=t[n];return s!=null?String(s):`<${n}?>`})}const gu=/\{\$([^}]+)}/g;function Cr(r,t){if(r===t)return!0;const e=Object.keys(r),n=Object.keys(t);for(const s of e){if(!n.includes(s))return!1;const o=r[s],u=t[s];if(gs(o)&&gs(u)){if(!Cr(o,u))return!1}else if(o!==u)return!1}for(const s of n)if(!e.includes(s))return!1;return!0}function gs(r){return r!==null&&typeof r=="object"}/**
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
 */function mu(r){return r&&r._delegate?r._delegate:r}class Qe{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Gt="[DEFAULT]";/**
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
 */class _u{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new ou;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Eu(t))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});n.resolve(o)}catch{}}}}clearInstance(t=Gt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Gt){return this.instances.has(t)}getOptions(t=Gt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[o,u]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);n===l&&u.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),o=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;o.add(t),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&t(u,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:yu(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=Gt){return this.component?this.component.multipleInstances?t:Gt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yu(r){return r===Gt?void 0:r}function Eu(r){return r.instantiationMode==="EAGER"}/**
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
 */class vu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new _u(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(B||(B={}));const Tu={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},Iu=B.INFO,Au={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},wu=(r,t,...e)=>{if(t<r.logLevel)return;const n=new Date().toISOString(),s=Au[t];if(s)console[s](`[${n}]  ${r.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ho{constructor(t){this.name=t,this._logLevel=Iu,this._logHandler=wu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in B))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Tu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...t),this._logHandler(this,B.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...t),this._logHandler(this,B.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,B.INFO,...t),this._logHandler(this,B.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,B.WARN,...t),this._logHandler(this,B.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...t),this._logHandler(this,B.ERROR,...t)}}/**
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
 */class Ru{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Cu(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function Cu(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Sr="@firebase/app",ms="0.10.10";/**
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
 */const bt=new ho("@firebase/app"),Su="@firebase/app-compat",Pu="@firebase/analytics-compat",Vu="@firebase/analytics",bu="@firebase/app-check-compat",Du="@firebase/app-check",Nu="@firebase/auth",ku="@firebase/auth-compat",Ou="@firebase/database",xu="@firebase/database-compat",Mu="@firebase/functions",Lu="@firebase/functions-compat",Fu="@firebase/installations",Uu="@firebase/installations-compat",Bu="@firebase/messaging",qu="@firebase/messaging-compat",ju="@firebase/performance",$u="@firebase/performance-compat",zu="@firebase/remote-config",Ku="@firebase/remote-config-compat",Gu="@firebase/storage",Hu="@firebase/storage-compat",Qu="@firebase/firestore",Wu="@firebase/vertexai-preview",Xu="@firebase/firestore-compat",Yu="firebase",Ju="10.13.1";/**
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
 */const Pr="[DEFAULT]",Zu={[Sr]:"fire-core",[Su]:"fire-core-compat",[Vu]:"fire-analytics",[Pu]:"fire-analytics-compat",[Du]:"fire-app-check",[bu]:"fire-app-check-compat",[Nu]:"fire-auth",[ku]:"fire-auth-compat",[Ou]:"fire-rtdb",[xu]:"fire-rtdb-compat",[Mu]:"fire-fn",[Lu]:"fire-fn-compat",[Fu]:"fire-iid",[Uu]:"fire-iid-compat",[Bu]:"fire-fcm",[qu]:"fire-fcm-compat",[ju]:"fire-perf",[$u]:"fire-perf-compat",[zu]:"fire-rc",[Ku]:"fire-rc-compat",[Gu]:"fire-gcs",[Hu]:"fire-gcs-compat",[Qu]:"fire-fst",[Xu]:"fire-fst-compat",[Wu]:"fire-vertex","fire-js":"fire-js",[Yu]:"fire-js-all"};/**
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
 */const kn=new Map,th=new Map,Vr=new Map;function _s(r,t){try{r.container.addComponent(t)}catch(e){bt.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,e)}}function On(r){const t=r.name;if(Vr.has(t))return bt.debug(`There were multiple attempts to register component ${t}.`),!1;Vr.set(t,r);for(const e of kn.values())_s(e,r);for(const e of th.values())_s(e,r);return!0}function eh(r,t){const e=r.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),r.container.getProvider(t)}/**
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
 */const nh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ft=new uo("app","Firebase",nh);/**
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
 */class rh{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Qe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
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
 */const ih=Ju;function sh(r,t={}){let e=r;typeof t!="object"&&(t={name:t});const n=Object.assign({name:Pr,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw Ft.create("bad-app-name",{appName:String(s)});if(e||(e=ao()),!e)throw Ft.create("no-options");const o=kn.get(s);if(o){if(Cr(e,o.options)&&Cr(n,o.config))return o;throw Ft.create("duplicate-app",{appName:s})}const u=new vu(s);for(const d of Vr.values())u.addComponent(d);const l=new rh(e,n,u);return kn.set(s,l),l}function oh(r=Pr){const t=kn.get(r);if(!t&&r===Pr&&ao())return sh();if(!t)throw Ft.create("no-app",{appName:r});return t}function ae(r,t,e){var n;let s=(n=Zu[r])!==null&&n!==void 0?n:r;e&&(s+=`-${e}`);const o=s.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const l=[`Unable to register library "${s}" with version "${t}":`];o&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&l.push("and"),u&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),bt.warn(l.join(" "));return}On(new Qe(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const ah="firebase-heartbeat-database",uh=1,We="firebase-heartbeat-store";let vr=null;function lo(){return vr||(vr=Wa(ah,uh,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(We)}catch(e){console.warn(e)}}}}).catch(r=>{throw Ft.create("idb-open",{originalErrorMessage:r.message})})),vr}async function hh(r){try{const e=(await lo()).transaction(We),n=await e.objectStore(We).get(co(r));return await e.done,n}catch(t){if(t instanceof _e)bt.warn(t.message);else{const e=Ft.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});bt.warn(e.message)}}}async function ys(r,t){try{const n=(await lo()).transaction(We,"readwrite");await n.objectStore(We).put(t,co(r)),await n.done}catch(e){if(e instanceof _e)bt.warn(e.message);else{const n=Ft.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});bt.warn(n.message)}}}function co(r){return`${r.name}!${r.options.appId}`}/**
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
 */const lh=1024,ch=30*24*60*60*1e3;class dh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ph(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Es();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const l=new Date(u.date).valueOf();return Date.now()-l<=ch}),this._storage.overwrite(this._heartbeatsCache))}catch(n){bt.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Es(),{heartbeatsToSend:n,unsentEntries:s}=fh(this._heartbeatsCache.heartbeats),o=Nn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return bt.warn(e),""}}}function Es(){return new Date().toISOString().substring(0,10)}function fh(r,t=lh){const e=[];let n=r.slice();for(const s of r){const o=e.find(u=>u.agent===s.agent);if(o){if(o.dates.push(s.date),vs(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),vs(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class ph{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cu()?du().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await hh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return ys(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return ys(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function vs(r){return Nn(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function gh(r){On(new Qe("platform-logger",t=>new Ru(t),"PRIVATE")),On(new Qe("heartbeat",t=>new dh(t),"PRIVATE")),ae(Sr,ms,r),ae(Sr,ms,"esm2017"),ae("fire-js","")}gh("");var Ts=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qt,fo;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function m(){}m.prototype=p.prototype,v.D=p.prototype,v.prototype=new m,v.prototype.constructor=v,v.C=function(y,E,I){for(var g=Array(arguments.length-2),St=2;St<arguments.length;St++)g[St-2]=arguments[St];return p.prototype[E].apply(y,g)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,p,m){m||(m=0);var y=Array(16);if(typeof p=="string")for(var E=0;16>E;++E)y[E]=p.charCodeAt(m++)|p.charCodeAt(m++)<<8|p.charCodeAt(m++)<<16|p.charCodeAt(m++)<<24;else for(E=0;16>E;++E)y[E]=p[m++]|p[m++]<<8|p[m++]<<16|p[m++]<<24;p=v.g[0],m=v.g[1],E=v.g[2];var I=v.g[3],g=p+(I^m&(E^I))+y[0]+3614090360&4294967295;p=m+(g<<7&4294967295|g>>>25),g=I+(E^p&(m^E))+y[1]+3905402710&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(m^I&(p^m))+y[2]+606105819&4294967295,E=I+(g<<17&4294967295|g>>>15),g=m+(p^E&(I^p))+y[3]+3250441966&4294967295,m=E+(g<<22&4294967295|g>>>10),g=p+(I^m&(E^I))+y[4]+4118548399&4294967295,p=m+(g<<7&4294967295|g>>>25),g=I+(E^p&(m^E))+y[5]+1200080426&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(m^I&(p^m))+y[6]+2821735955&4294967295,E=I+(g<<17&4294967295|g>>>15),g=m+(p^E&(I^p))+y[7]+4249261313&4294967295,m=E+(g<<22&4294967295|g>>>10),g=p+(I^m&(E^I))+y[8]+1770035416&4294967295,p=m+(g<<7&4294967295|g>>>25),g=I+(E^p&(m^E))+y[9]+2336552879&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(m^I&(p^m))+y[10]+4294925233&4294967295,E=I+(g<<17&4294967295|g>>>15),g=m+(p^E&(I^p))+y[11]+2304563134&4294967295,m=E+(g<<22&4294967295|g>>>10),g=p+(I^m&(E^I))+y[12]+1804603682&4294967295,p=m+(g<<7&4294967295|g>>>25),g=I+(E^p&(m^E))+y[13]+4254626195&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(m^I&(p^m))+y[14]+2792965006&4294967295,E=I+(g<<17&4294967295|g>>>15),g=m+(p^E&(I^p))+y[15]+1236535329&4294967295,m=E+(g<<22&4294967295|g>>>10),g=p+(E^I&(m^E))+y[1]+4129170786&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^E&(p^m))+y[6]+3225465664&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^m&(I^p))+y[11]+643717713&4294967295,E=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(E^I))+y[0]+3921069994&4294967295,m=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(m^E))+y[5]+3593408605&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^E&(p^m))+y[10]+38016083&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^m&(I^p))+y[15]+3634488961&4294967295,E=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(E^I))+y[4]+3889429448&4294967295,m=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(m^E))+y[9]+568446438&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^E&(p^m))+y[14]+3275163606&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^m&(I^p))+y[3]+4107603335&4294967295,E=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(E^I))+y[8]+1163531501&4294967295,m=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(m^E))+y[13]+2850285829&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^E&(p^m))+y[2]+4243563512&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^m&(I^p))+y[7]+1735328473&4294967295,E=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(E^I))+y[12]+2368359562&4294967295,m=E+(g<<20&4294967295|g>>>12),g=p+(m^E^I)+y[5]+4294588738&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^E)+y[8]+2272392833&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^m)+y[11]+1839030562&4294967295,E=I+(g<<16&4294967295|g>>>16),g=m+(E^I^p)+y[14]+4259657740&4294967295,m=E+(g<<23&4294967295|g>>>9),g=p+(m^E^I)+y[1]+2763975236&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^E)+y[4]+1272893353&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^m)+y[7]+4139469664&4294967295,E=I+(g<<16&4294967295|g>>>16),g=m+(E^I^p)+y[10]+3200236656&4294967295,m=E+(g<<23&4294967295|g>>>9),g=p+(m^E^I)+y[13]+681279174&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^E)+y[0]+3936430074&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^m)+y[3]+3572445317&4294967295,E=I+(g<<16&4294967295|g>>>16),g=m+(E^I^p)+y[6]+76029189&4294967295,m=E+(g<<23&4294967295|g>>>9),g=p+(m^E^I)+y[9]+3654602809&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^E)+y[12]+3873151461&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^m)+y[15]+530742520&4294967295,E=I+(g<<16&4294967295|g>>>16),g=m+(E^I^p)+y[2]+3299628645&4294967295,m=E+(g<<23&4294967295|g>>>9),g=p+(E^(m|~I))+y[0]+4096336452&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~E))+y[7]+1126891415&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~m))+y[14]+2878612391&4294967295,E=I+(g<<15&4294967295|g>>>17),g=m+(I^(E|~p))+y[5]+4237533241&4294967295,m=E+(g<<21&4294967295|g>>>11),g=p+(E^(m|~I))+y[12]+1700485571&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~E))+y[3]+2399980690&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~m))+y[10]+4293915773&4294967295,E=I+(g<<15&4294967295|g>>>17),g=m+(I^(E|~p))+y[1]+2240044497&4294967295,m=E+(g<<21&4294967295|g>>>11),g=p+(E^(m|~I))+y[8]+1873313359&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~E))+y[15]+4264355552&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~m))+y[6]+2734768916&4294967295,E=I+(g<<15&4294967295|g>>>17),g=m+(I^(E|~p))+y[13]+1309151649&4294967295,m=E+(g<<21&4294967295|g>>>11),g=p+(E^(m|~I))+y[4]+4149444226&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~E))+y[11]+3174756917&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~m))+y[2]+718787259&4294967295,E=I+(g<<15&4294967295|g>>>17),g=m+(I^(E|~p))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+I&4294967295}n.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var m=p-this.blockSize,y=this.B,E=this.h,I=0;I<p;){if(E==0)for(;I<=m;)s(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<p;)if(y[E++]=v.charCodeAt(I++),E==this.blockSize){s(this,y),E=0;break}}else for(;I<p;)if(y[E++]=v[I++],E==this.blockSize){s(this,y),E=0;break}}this.h=E,this.o+=p},n.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var m=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=m&255,m/=256;for(this.u(v),v=Array(16),p=m=0;4>p;++p)for(var y=0;32>y;y+=8)v[m++]=this.g[p]>>>y&255;return v};function o(v,p){var m=l;return Object.prototype.hasOwnProperty.call(m,v)?m[v]:m[v]=p(v)}function u(v,p){this.h=p;for(var m=[],y=!0,E=v.length-1;0<=E;E--){var I=v[E]|0;y&&I==p||(m[E]=I,y=!1)}this.g=m}var l={};function d(v){return-128<=v&&128>v?o(v,function(p){return new u([p|0],0>p?-1:0)}):new u([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return w;if(0>v)return D(f(-v));for(var p=[],m=1,y=0;v>=m;y++)p[y]=v/m|0,m*=4294967296;return new u(p,0)}function _(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return D(_(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=f(Math.pow(p,8)),y=w,E=0;E<v.length;E+=8){var I=Math.min(8,v.length-E),g=parseInt(v.substring(E,E+I),p);8>I?(I=f(Math.pow(p,I)),y=y.j(I).add(f(g))):(y=y.j(m),y=y.add(f(g)))}return y}var w=d(0),R=d(1),P=d(16777216);r=u.prototype,r.m=function(){if(M(this))return-D(this).m();for(var v=0,p=1,m=0;m<this.g.length;m++){var y=this.i(m);v+=(0<=y?y:4294967296+y)*p,p*=4294967296}return v},r.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(N(this))return"0";if(M(this))return"-"+D(this).toString(v);for(var p=f(Math.pow(v,6)),m=this,y="";;){var E=nt(m,p).g;m=X(m,E.j(p));var I=((0<m.g.length?m.g[0]:m.h)>>>0).toString(v);if(m=E,N(m))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},r.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function N(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function M(v){return v.h==-1}r.l=function(v){return v=X(this,v),M(v)?-1:N(v)?0:1};function D(v){for(var p=v.g.length,m=[],y=0;y<p;y++)m[y]=~v.g[y];return new u(m,~v.h).add(R)}r.abs=function(){return M(this)?D(this):this},r.add=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],y=0,E=0;E<=p;E++){var I=y+(this.i(E)&65535)+(v.i(E)&65535),g=(I>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);y=g>>>16,I&=65535,g&=65535,m[E]=g<<16|I}return new u(m,m[m.length-1]&-2147483648?-1:0)};function X(v,p){return v.add(D(p))}r.j=function(v){if(N(this)||N(v))return w;if(M(this))return M(v)?D(this).j(D(v)):D(D(this).j(v));if(M(v))return D(this.j(D(v)));if(0>this.l(P)&&0>v.l(P))return f(this.m()*v.m());for(var p=this.g.length+v.g.length,m=[],y=0;y<2*p;y++)m[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<v.g.length;E++){var I=this.i(y)>>>16,g=this.i(y)&65535,St=v.i(E)>>>16,Ie=v.i(E)&65535;m[2*y+2*E]+=g*Ie,G(m,2*y+2*E),m[2*y+2*E+1]+=I*Ie,G(m,2*y+2*E+1),m[2*y+2*E+1]+=g*St,G(m,2*y+2*E+1),m[2*y+2*E+2]+=I*St,G(m,2*y+2*E+2)}for(y=0;y<p;y++)m[y]=m[2*y+1]<<16|m[2*y];for(y=p;y<2*p;y++)m[y]=0;return new u(m,0)};function G(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function H(v,p){this.g=v,this.h=p}function nt(v,p){if(N(p))throw Error("division by zero");if(N(v))return new H(w,w);if(M(v))return p=nt(D(v),p),new H(D(p.g),D(p.h));if(M(p))return p=nt(v,D(p)),new H(D(p.g),p.h);if(30<v.g.length){if(M(v)||M(p))throw Error("slowDivide_ only works with positive integers.");for(var m=R,y=p;0>=y.l(v);)m=Ct(m),y=Ct(y);var E=it(m,1),I=it(y,1);for(y=it(y,2),m=it(m,2);!N(y);){var g=I.add(y);0>=g.l(v)&&(E=E.add(m),I=g),y=it(y,1),m=it(m,1)}return p=X(v,E.j(p)),new H(E,p)}for(E=w;0<=v.l(p);){for(m=Math.max(1,Math.floor(v.m()/p.m())),y=Math.ceil(Math.log(m)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(m),g=I.j(p);M(g)||0<g.l(v);)m-=y,I=f(m),g=I.j(p);N(I)&&(I=R),E=E.add(I),v=X(v,g)}return new H(E,v)}r.A=function(v){return nt(this,v).h},r.and=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],y=0;y<p;y++)m[y]=this.i(y)&v.i(y);return new u(m,this.h&v.h)},r.or=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],y=0;y<p;y++)m[y]=this.i(y)|v.i(y);return new u(m,this.h|v.h)},r.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],y=0;y<p;y++)m[y]=this.i(y)^v.i(y);return new u(m,this.h^v.h)};function Ct(v){for(var p=v.g.length+1,m=[],y=0;y<p;y++)m[y]=v.i(y)<<1|v.i(y-1)>>>31;return new u(m,v.h)}function it(v,p){var m=p>>5;p%=32;for(var y=v.g.length-m,E=[],I=0;I<y;I++)E[I]=0<p?v.i(I+m)>>>p|v.i(I+m+1)<<32-p:v.i(I+m);return new u(E,v.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,fo=n,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=_,Qt=u}).apply(typeof Ts<"u"?Ts:typeof self<"u"?self:typeof window<"u"?window:{});var An=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var po,go,qe,mo,Pn,br,_o,yo,Eo;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,a,h){return i==Array.prototype||i==Object.prototype||(i[a]=h.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof An=="object"&&An];for(var a=0;a<i.length;++a){var h=i[a];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=e(this);function s(i,a){if(a)t:{var h=n;i=i.split(".");for(var c=0;c<i.length-1;c++){var T=i[c];if(!(T in h))break t;h=h[T]}i=i[i.length-1],c=h[i],a=a(c),a!=c&&a!=null&&t(h,i,{configurable:!0,writable:!0,value:a})}}function o(i,a){i instanceof String&&(i+="");var h=0,c=!1,T={next:function(){if(!c&&h<i.length){var A=h++;return{value:a(A,i[A]),done:!1}}return c=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}s("Array.prototype.values",function(i){return i||function(){return o(this,function(a,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},l=this||self;function d(i){var a=typeof i;return a=a!="object"?a:i?Array.isArray(i)?"array":a:"null",a=="array"||a=="object"&&typeof i.length=="number"}function f(i){var a=typeof i;return a=="object"&&i!=null||a=="function"}function _(i,a,h){return i.call.apply(i.bind,arguments)}function w(i,a,h){if(!i)throw Error();if(2<arguments.length){var c=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,c),i.apply(a,T)}}return function(){return i.apply(a,arguments)}}function R(i,a,h){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:w,R.apply(null,arguments)}function P(i,a){var h=Array.prototype.slice.call(arguments,1);return function(){var c=h.slice();return c.push.apply(c,arguments),i.apply(this,c)}}function N(i,a){function h(){}h.prototype=a.prototype,i.aa=a.prototype,i.prototype=new h,i.prototype.constructor=i,i.Qb=function(c,T,A){for(var S=Array(arguments.length-2),z=2;z<arguments.length;z++)S[z-2]=arguments[z];return a.prototype[T].apply(c,S)}}function M(i){const a=i.length;if(0<a){const h=Array(a);for(let c=0;c<a;c++)h[c]=i[c];return h}return[]}function D(i,a){for(let h=1;h<arguments.length;h++){const c=arguments[h];if(d(c)){const T=i.length||0,A=c.length||0;i.length=T+A;for(let S=0;S<A;S++)i[T+S]=c[S]}else i.push(c)}}class X{constructor(a,h){this.i=a,this.j=h,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function G(i){return/^[\s\xa0]*$/.test(i)}function H(){var i=l.navigator;return i&&(i=i.userAgent)?i:""}function nt(i){return nt[" "](i),i}nt[" "]=function(){};var Ct=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function it(i,a,h){for(const c in i)a.call(h,i[c],c,i)}function v(i,a){for(const h in i)a.call(void 0,i[h],h,i)}function p(i){const a={};for(const h in i)a[h]=i[h];return a}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,a){let h,c;for(let T=1;T<arguments.length;T++){c=arguments[T];for(h in c)i[h]=c[h];for(let A=0;A<m.length;A++)h=m[A],Object.prototype.hasOwnProperty.call(c,h)&&(i[h]=c[h])}}function E(i){var a=1;i=i.split(":");const h=[];for(;0<a&&i.length;)h.push(i.shift()),a--;return i.length&&h.push(i.join(":")),h}function I(i){l.setTimeout(()=>{throw i},0)}function g(){var i=Xn;let a=null;return i.g&&(a=i.g,i.g=i.g.next,i.g||(i.h=null),a.next=null),a}class St{constructor(){this.h=this.g=null}add(a,h){const c=Ie.get();c.set(a,h),this.h?this.h.next=c:this.g=c,this.h=c}}var Ie=new X(()=>new pa,i=>i.reset());class pa{constructor(){this.next=this.g=this.h=null}set(a,h){this.h=a,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Ae,we=!1,Xn=new St,pi=()=>{const i=l.Promise.resolve(void 0);Ae=()=>{i.then(ga)}};var ga=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(h){I(h)}var a=Ie;a.j(i),100>a.h&&(a.h++,i.next=a.g,a.g=i)}we=!1};function Nt(){this.s=this.s,this.C=this.C}Nt.prototype.s=!1,Nt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Nt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(i,a){this.type=i,this.g=this.target=a,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var ma=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var i=!1,a=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const h=()=>{};l.addEventListener("test",h,a),l.removeEventListener("test",h,a)}catch{}return i}();function Re(i,a){if(ht.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var h=this.type=i.type,c=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=a,a=i.relatedTarget){if(Ct){t:{try{nt(a.nodeName);var T=!0;break t}catch{}T=!1}T||(a=null)}}else h=="mouseover"?a=i.fromElement:h=="mouseout"&&(a=i.toElement);this.relatedTarget=a,c?(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:_a[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Re.aa.h.call(this)}}N(Re,ht);var _a={2:"touch",3:"pen",4:"mouse"};Re.prototype.h=function(){Re.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var sn="closure_listenable_"+(1e6*Math.random()|0),ya=0;function Ea(i,a,h,c,T){this.listener=i,this.proxy=null,this.src=a,this.type=h,this.capture=!!c,this.ha=T,this.key=++ya,this.da=this.fa=!1}function on(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function an(i){this.src=i,this.g={},this.h=0}an.prototype.add=function(i,a,h,c,T){var A=i.toString();i=this.g[A],i||(i=this.g[A]=[],this.h++);var S=Jn(i,a,c,T);return-1<S?(a=i[S],h||(a.fa=!1)):(a=new Ea(a,this.src,A,!!c,T),a.fa=h,i.push(a)),a};function Yn(i,a){var h=a.type;if(h in i.g){var c=i.g[h],T=Array.prototype.indexOf.call(c,a,void 0),A;(A=0<=T)&&Array.prototype.splice.call(c,T,1),A&&(on(a),i.g[h].length==0&&(delete i.g[h],i.h--))}}function Jn(i,a,h,c){for(var T=0;T<i.length;++T){var A=i[T];if(!A.da&&A.listener==a&&A.capture==!!h&&A.ha==c)return T}return-1}var Zn="closure_lm_"+(1e6*Math.random()|0),tr={};function gi(i,a,h,c,T){if(Array.isArray(a)){for(var A=0;A<a.length;A++)gi(i,a[A],h,c,T);return null}return h=yi(h),i&&i[sn]?i.K(a,h,f(c)?!!c.capture:!!c,T):va(i,a,h,!1,c,T)}function va(i,a,h,c,T,A){if(!a)throw Error("Invalid event type");var S=f(T)?!!T.capture:!!T,z=nr(i);if(z||(i[Zn]=z=new an(i)),h=z.add(a,h,c,S,A),h.proxy)return h;if(c=Ta(),h.proxy=c,c.src=i,c.listener=h,i.addEventListener)ma||(T=S),T===void 0&&(T=!1),i.addEventListener(a.toString(),c,T);else if(i.attachEvent)i.attachEvent(_i(a.toString()),c);else if(i.addListener&&i.removeListener)i.addListener(c);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Ta(){function i(h){return a.call(i.src,i.listener,h)}const a=Ia;return i}function mi(i,a,h,c,T){if(Array.isArray(a))for(var A=0;A<a.length;A++)mi(i,a[A],h,c,T);else c=f(c)?!!c.capture:!!c,h=yi(h),i&&i[sn]?(i=i.i,a=String(a).toString(),a in i.g&&(A=i.g[a],h=Jn(A,h,c,T),-1<h&&(on(A[h]),Array.prototype.splice.call(A,h,1),A.length==0&&(delete i.g[a],i.h--)))):i&&(i=nr(i))&&(a=i.g[a.toString()],i=-1,a&&(i=Jn(a,h,c,T)),(h=-1<i?a[i]:null)&&er(h))}function er(i){if(typeof i!="number"&&i&&!i.da){var a=i.src;if(a&&a[sn])Yn(a.i,i);else{var h=i.type,c=i.proxy;a.removeEventListener?a.removeEventListener(h,c,i.capture):a.detachEvent?a.detachEvent(_i(h),c):a.addListener&&a.removeListener&&a.removeListener(c),(h=nr(a))?(Yn(h,i),h.h==0&&(h.src=null,a[Zn]=null)):on(i)}}}function _i(i){return i in tr?tr[i]:tr[i]="on"+i}function Ia(i,a){if(i.da)i=!0;else{a=new Re(a,this);var h=i.listener,c=i.ha||i.src;i.fa&&er(i),i=h.call(c,a)}return i}function nr(i){return i=i[Zn],i instanceof an?i:null}var rr="__closure_events_fn_"+(1e9*Math.random()>>>0);function yi(i){return typeof i=="function"?i:(i[rr]||(i[rr]=function(a){return i.handleEvent(a)}),i[rr])}function lt(){Nt.call(this),this.i=new an(this),this.M=this,this.F=null}N(lt,Nt),lt.prototype[sn]=!0,lt.prototype.removeEventListener=function(i,a,h,c){mi(this,i,a,h,c)};function mt(i,a){var h,c=i.F;if(c)for(h=[];c;c=c.F)h.push(c);if(i=i.M,c=a.type||a,typeof a=="string")a=new ht(a,i);else if(a instanceof ht)a.target=a.target||i;else{var T=a;a=new ht(c,i),y(a,T)}if(T=!0,h)for(var A=h.length-1;0<=A;A--){var S=a.g=h[A];T=un(S,c,!0,a)&&T}if(S=a.g=i,T=un(S,c,!0,a)&&T,T=un(S,c,!1,a)&&T,h)for(A=0;A<h.length;A++)S=a.g=h[A],T=un(S,c,!1,a)&&T}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var i=this.i,a;for(a in i.g){for(var h=i.g[a],c=0;c<h.length;c++)on(h[c]);delete i.g[a],i.h--}}this.F=null},lt.prototype.K=function(i,a,h,c){return this.i.add(String(i),a,!1,h,c)},lt.prototype.L=function(i,a,h,c){return this.i.add(String(i),a,!0,h,c)};function un(i,a,h,c){if(a=i.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,A=0;A<a.length;++A){var S=a[A];if(S&&!S.da&&S.capture==h){var z=S.listener,st=S.ha||S.src;S.fa&&Yn(i.i,S),T=z.call(st,c)!==!1&&T}}return T&&!c.defaultPrevented}function Ei(i,a,h){if(typeof i=="function")h&&(i=R(i,h));else if(i&&typeof i.handleEvent=="function")i=R(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:l.setTimeout(i,a||0)}function vi(i){i.g=Ei(()=>{i.g=null,i.i&&(i.i=!1,vi(i))},i.l);const a=i.h;i.h=null,i.m.apply(null,a)}class Aa extends Nt{constructor(a,h){super(),this.m=a,this.l=h,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:vi(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ce(i){Nt.call(this),this.h=i,this.g={}}N(Ce,Nt);var Ti=[];function Ii(i){it(i.g,function(a,h){this.g.hasOwnProperty(h)&&er(a)},i),i.g={}}Ce.prototype.N=function(){Ce.aa.N.call(this),Ii(this)},Ce.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ir=l.JSON.stringify,wa=l.JSON.parse,Ra=class{stringify(i){return l.JSON.stringify(i,void 0)}parse(i){return l.JSON.parse(i,void 0)}};function sr(){}sr.prototype.h=null;function Ai(i){return i.h||(i.h=i.i())}function wi(){}var Se={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function or(){ht.call(this,"d")}N(or,ht);function ar(){ht.call(this,"c")}N(ar,ht);var jt={},Ri=null;function hn(){return Ri=Ri||new lt}jt.La="serverreachability";function Ci(i){ht.call(this,jt.La,i)}N(Ci,ht);function Pe(i){const a=hn();mt(a,new Ci(a))}jt.STAT_EVENT="statevent";function Si(i,a){ht.call(this,jt.STAT_EVENT,i),this.stat=a}N(Si,ht);function _t(i){const a=hn();mt(a,new Si(a,i))}jt.Ma="timingevent";function Pi(i,a){ht.call(this,jt.Ma,i),this.size=a}N(Pi,ht);function Ve(i,a){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){i()},a)}function be(){this.g=!0}be.prototype.xa=function(){this.g=!1};function Ca(i,a,h,c,T,A){i.info(function(){if(i.g)if(A)for(var S="",z=A.split("&"),st=0;st<z.length;st++){var j=z[st].split("=");if(1<j.length){var ct=j[0];j=j[1];var dt=ct.split("_");S=2<=dt.length&&dt[1]=="type"?S+(ct+"="+j+"&"):S+(ct+"=redacted&")}}else S=null;else S=A;return"XMLHTTP REQ ("+c+") [attempt "+T+"]: "+a+`
`+h+`
`+S})}function Sa(i,a,h,c,T,A,S){i.info(function(){return"XMLHTTP RESP ("+c+") [ attempt "+T+"]: "+a+`
`+h+`
`+A+" "+S})}function te(i,a,h,c){i.info(function(){return"XMLHTTP TEXT ("+a+"): "+Va(i,h)+(c?" "+c:"")})}function Pa(i,a){i.info(function(){return"TIMEOUT: "+a})}be.prototype.info=function(){};function Va(i,a){if(!i.g)return a;if(!a)return null;try{var h=JSON.parse(a);if(h){for(i=0;i<h.length;i++)if(Array.isArray(h[i])){var c=h[i];if(!(2>c.length)){var T=c[1];if(Array.isArray(T)&&!(1>T.length)){var A=T[0];if(A!="noop"&&A!="stop"&&A!="close")for(var S=1;S<T.length;S++)T[S]=""}}}}return ir(h)}catch{return a}}var ln={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Vi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ur;function cn(){}N(cn,sr),cn.prototype.g=function(){return new XMLHttpRequest},cn.prototype.i=function(){return{}},ur=new cn;function kt(i,a,h,c){this.j=i,this.i=a,this.l=h,this.R=c||1,this.U=new Ce(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new bi}function bi(){this.i=null,this.g="",this.h=!1}var Di={},hr={};function lr(i,a,h){i.L=1,i.v=gn(Pt(a)),i.m=h,i.P=!0,Ni(i,null)}function Ni(i,a){i.F=Date.now(),dn(i),i.A=Pt(i.v);var h=i.A,c=i.R;Array.isArray(c)||(c=[String(c)]),Gi(h.i,"t",c),i.C=0,h=i.j.J,i.h=new bi,i.g=ls(i.j,h?a:null,!i.m),0<i.O&&(i.M=new Aa(R(i.Y,i,i.g),i.O)),a=i.U,h=i.g,c=i.ca;var T="readystatechange";Array.isArray(T)||(T&&(Ti[0]=T.toString()),T=Ti);for(var A=0;A<T.length;A++){var S=gi(h,T[A],c||a.handleEvent,!1,a.h||a);if(!S)break;a.g[S.key]=S}a=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,a)):(i.u="GET",i.g.ea(i.A,i.u,null,a)),Pe(),Ca(i.i,i.u,i.A,i.l,i.R,i.m)}kt.prototype.ca=function(i){i=i.target;const a=this.M;a&&Vt(i)==3?a.j():this.Y(i)},kt.prototype.Y=function(i){try{if(i==this.g)t:{const dt=Vt(this.g);var a=this.g.Ba();const re=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||Zi(this.g)))){this.J||dt!=4||a==7||(a==8||0>=re?Pe(3):Pe(2)),cr(this);var h=this.g.Z();this.X=h;e:if(ki(this)){var c=Zi(this.g);i="";var T=c.length,A=Vt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$t(this),De(this);var S="";break e}this.h.i=new l.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,i+=this.h.i.decode(c[a],{stream:!(A&&a==T-1)});c.length=0,this.h.g+=i,this.C=0,S=this.h.g}else S=this.g.oa();if(this.o=h==200,Sa(this.i,this.u,this.A,this.l,this.R,dt,h),this.o){if(this.T&&!this.K){e:{if(this.g){var z,st=this.g;if((z=st.g?st.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(z)){var j=z;break e}}j=null}if(h=j)te(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,dr(this,h);else{this.o=!1,this.s=3,_t(12),$t(this),De(this);break t}}if(this.P){h=!0;let Tt;for(;!this.J&&this.C<S.length;)if(Tt=ba(this,S),Tt==hr){dt==4&&(this.s=4,_t(14),h=!1),te(this.i,this.l,null,"[Incomplete Response]");break}else if(Tt==Di){this.s=4,_t(15),te(this.i,this.l,S,"[Invalid Chunk]"),h=!1;break}else te(this.i,this.l,Tt,null),dr(this,Tt);if(ki(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||S.length!=0||this.h.h||(this.s=1,_t(16),h=!1),this.o=this.o&&h,!h)te(this.i,this.l,S,"[Invalid Chunked Response]"),$t(this),De(this);else if(0<S.length&&!this.W){this.W=!0;var ct=this.j;ct.g==this&&ct.ba&&!ct.M&&(ct.j.info("Great, no buffering proxy detected. Bytes received: "+S.length),yr(ct),ct.M=!0,_t(11))}}else te(this.i,this.l,S,null),dr(this,S);dt==4&&$t(this),this.o&&!this.J&&(dt==4?os(this.j,this):(this.o=!1,dn(this)))}else Ha(this.g),h==400&&0<S.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),$t(this),De(this)}}}catch{}finally{}};function ki(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function ba(i,a){var h=i.C,c=a.indexOf(`
`,h);return c==-1?hr:(h=Number(a.substring(h,c)),isNaN(h)?Di:(c+=1,c+h>a.length?hr:(a=a.slice(c,c+h),i.C=c+h,a)))}kt.prototype.cancel=function(){this.J=!0,$t(this)};function dn(i){i.S=Date.now()+i.I,Oi(i,i.I)}function Oi(i,a){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Ve(R(i.ba,i),a)}function cr(i){i.B&&(l.clearTimeout(i.B),i.B=null)}kt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Pa(this.i,this.A),this.L!=2&&(Pe(),_t(17)),$t(this),this.s=2,De(this)):Oi(this,this.S-i)};function De(i){i.j.G==0||i.J||os(i.j,i)}function $t(i){cr(i);var a=i.M;a&&typeof a.ma=="function"&&a.ma(),i.M=null,Ii(i.U),i.g&&(a=i.g,i.g=null,a.abort(),a.ma())}function dr(i,a){try{var h=i.j;if(h.G!=0&&(h.g==i||fr(h.h,i))){if(!i.K&&fr(h.h,i)&&h.G==3){try{var c=h.Da.g.parse(a)}catch{c=null}if(Array.isArray(c)&&c.length==3){var T=c;if(T[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<i.F)vn(h),yn(h);else break t;_r(h),_t(18)}}else h.za=T[1],0<h.za-h.T&&37500>T[2]&&h.F&&h.v==0&&!h.C&&(h.C=Ve(R(h.Za,h),6e3));if(1>=Li(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Kt(h,11)}else if((i.K||h.g==i)&&vn(h),!G(a))for(T=h.Da.g.parse(a),a=0;a<T.length;a++){let j=T[a];if(h.T=j[0],j=j[1],h.G==2)if(j[0]=="c"){h.K=j[1],h.ia=j[2];const ct=j[3];ct!=null&&(h.la=ct,h.j.info("VER="+h.la));const dt=j[4];dt!=null&&(h.Aa=dt,h.j.info("SVER="+h.Aa));const re=j[5];re!=null&&typeof re=="number"&&0<re&&(c=1.5*re,h.L=c,h.j.info("backChannelRequestTimeoutMs_="+c)),c=h;const Tt=i.g;if(Tt){const In=Tt.g?Tt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(In){var A=c.h;A.g||In.indexOf("spdy")==-1&&In.indexOf("quic")==-1&&In.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(pr(A,A.h),A.h=null))}if(c.D){const Er=Tt.g?Tt.g.getResponseHeader("X-HTTP-Session-Id"):null;Er&&(c.ya=Er,K(c.I,c.D,Er))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-i.F,h.j.info("Handshake RTT: "+h.R+"ms")),c=h;var S=i;if(c.qa=hs(c,c.J?c.ia:null,c.W),S.K){Fi(c.h,S);var z=S,st=c.L;st&&(z.I=st),z.B&&(cr(z),dn(z)),c.g=S}else is(c);0<h.i.length&&En(h)}else j[0]!="stop"&&j[0]!="close"||Kt(h,7);else h.G==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?Kt(h,7):mr(h):j[0]!="noop"&&h.l&&h.l.ta(j),h.v=0)}}Pe(4)}catch{}}var Da=class{constructor(i,a){this.g=i,this.map=a}};function xi(i){this.l=i||10,l.PerformanceNavigationTiming?(i=l.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Mi(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Li(i){return i.h?1:i.g?i.g.size:0}function fr(i,a){return i.h?i.h==a:i.g?i.g.has(a):!1}function pr(i,a){i.g?i.g.add(a):i.h=a}function Fi(i,a){i.h&&i.h==a?i.h=null:i.g&&i.g.has(a)&&i.g.delete(a)}xi.prototype.cancel=function(){if(this.i=Ui(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Ui(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let a=i.i;for(const h of i.g.values())a=a.concat(h.D);return a}return M(i.i)}function Na(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(d(i)){for(var a=[],h=i.length,c=0;c<h;c++)a.push(i[c]);return a}a=[],h=0;for(c in i)a[h++]=i[c];return a}function ka(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(d(i)||typeof i=="string"){var a=[];i=i.length;for(var h=0;h<i;h++)a.push(h);return a}a=[],h=0;for(const c in i)a[h++]=c;return a}}}function Bi(i,a){if(i.forEach&&typeof i.forEach=="function")i.forEach(a,void 0);else if(d(i)||typeof i=="string")Array.prototype.forEach.call(i,a,void 0);else for(var h=ka(i),c=Na(i),T=c.length,A=0;A<T;A++)a.call(void 0,c[A],h&&h[A],i)}var qi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Oa(i,a){if(i){i=i.split("&");for(var h=0;h<i.length;h++){var c=i[h].indexOf("="),T=null;if(0<=c){var A=i[h].substring(0,c);T=i[h].substring(c+1)}else A=i[h];a(A,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function zt(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof zt){this.h=i.h,fn(this,i.j),this.o=i.o,this.g=i.g,pn(this,i.s),this.l=i.l;var a=i.i,h=new Oe;h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),ji(this,h),this.m=i.m}else i&&(a=String(i).match(qi))?(this.h=!1,fn(this,a[1]||"",!0),this.o=Ne(a[2]||""),this.g=Ne(a[3]||"",!0),pn(this,a[4]),this.l=Ne(a[5]||"",!0),ji(this,a[6]||"",!0),this.m=Ne(a[7]||"")):(this.h=!1,this.i=new Oe(null,this.h))}zt.prototype.toString=function(){var i=[],a=this.j;a&&i.push(ke(a,$i,!0),":");var h=this.g;return(h||a=="file")&&(i.push("//"),(a=this.o)&&i.push(ke(a,$i,!0),"@"),i.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&i.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&i.push("/"),i.push(ke(h,h.charAt(0)=="/"?La:Ma,!0))),(h=this.i.toString())&&i.push("?",h),(h=this.m)&&i.push("#",ke(h,Ua)),i.join("")};function Pt(i){return new zt(i)}function fn(i,a,h){i.j=h?Ne(a,!0):a,i.j&&(i.j=i.j.replace(/:$/,""))}function pn(i,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);i.s=a}else i.s=null}function ji(i,a,h){a instanceof Oe?(i.i=a,Ba(i.i,i.h)):(h||(a=ke(a,Fa)),i.i=new Oe(a,i.h))}function K(i,a,h){i.i.set(a,h)}function gn(i){return K(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Ne(i,a){return i?a?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function ke(i,a,h){return typeof i=="string"?(i=encodeURI(i).replace(a,xa),h&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function xa(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var $i=/[#\/\?@]/g,Ma=/[#\?:]/g,La=/[#\?]/g,Fa=/[#\?@]/g,Ua=/#/g;function Oe(i,a){this.h=this.g=null,this.i=i||null,this.j=!!a}function Ot(i){i.g||(i.g=new Map,i.h=0,i.i&&Oa(i.i,function(a,h){i.add(decodeURIComponent(a.replace(/\+/g," ")),h)}))}r=Oe.prototype,r.add=function(i,a){Ot(this),this.i=null,i=ee(this,i);var h=this.g.get(i);return h||this.g.set(i,h=[]),h.push(a),this.h+=1,this};function zi(i,a){Ot(i),a=ee(i,a),i.g.has(a)&&(i.i=null,i.h-=i.g.get(a).length,i.g.delete(a))}function Ki(i,a){return Ot(i),a=ee(i,a),i.g.has(a)}r.forEach=function(i,a){Ot(this),this.g.forEach(function(h,c){h.forEach(function(T){i.call(a,T,c,this)},this)},this)},r.na=function(){Ot(this);const i=Array.from(this.g.values()),a=Array.from(this.g.keys()),h=[];for(let c=0;c<a.length;c++){const T=i[c];for(let A=0;A<T.length;A++)h.push(a[c])}return h},r.V=function(i){Ot(this);let a=[];if(typeof i=="string")Ki(this,i)&&(a=a.concat(this.g.get(ee(this,i))));else{i=Array.from(this.g.values());for(let h=0;h<i.length;h++)a=a.concat(i[h])}return a},r.set=function(i,a){return Ot(this),this.i=null,i=ee(this,i),Ki(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[a]),this.h+=1,this},r.get=function(i,a){return i?(i=this.V(i),0<i.length?String(i[0]):a):a};function Gi(i,a,h){zi(i,a),0<h.length&&(i.i=null,i.g.set(ee(i,a),M(h)),i.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],a=Array.from(this.g.keys());for(var h=0;h<a.length;h++){var c=a[h];const A=encodeURIComponent(String(c)),S=this.V(c);for(c=0;c<S.length;c++){var T=A;S[c]!==""&&(T+="="+encodeURIComponent(String(S[c]))),i.push(T)}}return this.i=i.join("&")};function ee(i,a){return a=String(a),i.j&&(a=a.toLowerCase()),a}function Ba(i,a){a&&!i.j&&(Ot(i),i.i=null,i.g.forEach(function(h,c){var T=c.toLowerCase();c!=T&&(zi(this,c),Gi(this,T,h))},i)),i.j=a}function qa(i,a){const h=new be;if(l.Image){const c=new Image;c.onload=P(xt,h,"TestLoadImage: loaded",!0,a,c),c.onerror=P(xt,h,"TestLoadImage: error",!1,a,c),c.onabort=P(xt,h,"TestLoadImage: abort",!1,a,c),c.ontimeout=P(xt,h,"TestLoadImage: timeout",!1,a,c),l.setTimeout(function(){c.ontimeout&&c.ontimeout()},1e4),c.src=i}else a(!1)}function ja(i,a){const h=new be,c=new AbortController,T=setTimeout(()=>{c.abort(),xt(h,"TestPingServer: timeout",!1,a)},1e4);fetch(i,{signal:c.signal}).then(A=>{clearTimeout(T),A.ok?xt(h,"TestPingServer: ok",!0,a):xt(h,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),xt(h,"TestPingServer: error",!1,a)})}function xt(i,a,h,c,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),c(h)}catch{}}function $a(){this.g=new Ra}function za(i,a,h){const c=h||"";try{Bi(i,function(T,A){let S=T;f(T)&&(S=ir(T)),a.push(c+A+"="+encodeURIComponent(S))})}catch(T){throw a.push(c+"type="+encodeURIComponent("_badmap")),T}}function xe(i){this.l=i.Ub||null,this.j=i.eb||!1}N(xe,sr),xe.prototype.g=function(){return new mn(this.l,this.j)},xe.prototype.i=function(i){return function(){return i}}({});function mn(i,a){lt.call(this),this.D=i,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(mn,lt),r=mn.prototype,r.open=function(i,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=a,this.readyState=1,Le(this)},r.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(a.body=i),(this.D||l).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Me(this)),this.readyState=0},r.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Le(this)),this.g&&(this.readyState=3,Le(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Hi(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Hi(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}r.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var a=i.value?i.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!i.done}))&&(this.response=this.responseText+=a)}i.done?Me(this):Le(this),this.readyState==3&&Hi(this)}},r.Ra=function(i){this.g&&(this.response=this.responseText=i,Me(this))},r.Qa=function(i){this.g&&(this.response=i,Me(this))},r.ga=function(){this.g&&Me(this)};function Me(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Le(i)}r.setRequestHeader=function(i,a){this.u.append(i,a)},r.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],a=this.h.entries();for(var h=a.next();!h.done;)h=h.value,i.push(h[0]+": "+h[1]),h=a.next();return i.join(`\r
`)};function Le(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(mn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Qi(i){let a="";return it(i,function(h,c){a+=c,a+=":",a+=h,a+=`\r
`}),a}function gr(i,a,h){t:{for(c in h){var c=!1;break t}c=!0}c||(h=Qi(h),typeof i=="string"?h!=null&&encodeURIComponent(String(h)):K(i,a,h))}function Q(i){lt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Q,lt);var Ka=/^https?$/i,Ga=["POST","PUT"];r=Q.prototype,r.Ha=function(i){this.J=i},r.ea=function(i,a,h,c){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);a=a?a.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ur.g(),this.v=this.o?Ai(this.o):Ai(ur),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(i),!0),this.B=!1}catch(A){Wi(this,A);return}if(i=h||"",h=new Map(this.headers),c)if(Object.getPrototypeOf(c)===Object.prototype)for(var T in c)h.set(T,c[T]);else if(typeof c.keys=="function"&&typeof c.get=="function")for(const A of c.keys())h.set(A,c.get(A));else throw Error("Unknown input type for opt_headers: "+String(c));c=Array.from(h.keys()).find(A=>A.toLowerCase()=="content-type"),T=l.FormData&&i instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Ga,a,void 0))||c||T||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,S]of h)this.g.setRequestHeader(A,S);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ji(this),this.u=!0,this.g.send(i),this.u=!1}catch(A){Wi(this,A)}};function Wi(i,a){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=a,i.m=5,Xi(i),_n(i)}function Xi(i){i.A||(i.A=!0,mt(i,"complete"),mt(i,"error"))}r.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,mt(this,"complete"),mt(this,"abort"),_n(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_n(this,!0)),Q.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Yi(this):this.bb())},r.bb=function(){Yi(this)};function Yi(i){if(i.h&&typeof u<"u"&&(!i.v[1]||Vt(i)!=4||i.Z()!=2)){if(i.u&&Vt(i)==4)Ei(i.Ea,0,i);else if(mt(i,"readystatechange"),Vt(i)==4){i.h=!1;try{const S=i.Z();t:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var h;if(!(h=a)){var c;if(c=S===0){var T=String(i.D).match(qi)[1]||null;!T&&l.self&&l.self.location&&(T=l.self.location.protocol.slice(0,-1)),c=!Ka.test(T?T.toLowerCase():"")}h=c}if(h)mt(i,"complete"),mt(i,"success");else{i.m=6;try{var A=2<Vt(i)?i.g.statusText:""}catch{A=""}i.l=A+" ["+i.Z()+"]",Xi(i)}}finally{_n(i)}}}}function _n(i,a){if(i.g){Ji(i);const h=i.g,c=i.v[0]?()=>{}:null;i.g=null,i.v=null,a||mt(i,"ready");try{h.onreadystatechange=c}catch{}}}function Ji(i){i.I&&(l.clearTimeout(i.I),i.I=null)}r.isActive=function(){return!!this.g};function Vt(i){return i.g?i.g.readyState:0}r.Z=function(){try{return 2<Vt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(i){if(this.g){var a=this.g.responseText;return i&&a.indexOf(i)==0&&(a=a.substring(i.length)),wa(a)}};function Zi(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Ha(i){const a={};i=(i.g&&2<=Vt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let c=0;c<i.length;c++){if(G(i[c]))continue;var h=E(i[c]);const T=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const A=a[T]||[];a[T]=A,A.push(h)}v(a,function(c){return c.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fe(i,a,h){return h&&h.internalChannelParams&&h.internalChannelParams[i]||a}function ts(i){this.Aa=0,this.i=[],this.j=new be,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Fe("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Fe("baseRetryDelayMs",5e3,i),this.cb=Fe("retryDelaySeedMs",1e4,i),this.Wa=Fe("forwardChannelMaxRetries",2,i),this.wa=Fe("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new xi(i&&i.concurrentRequestLimit),this.Da=new $a,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ts.prototype,r.la=8,r.G=1,r.connect=function(i,a,h,c){_t(0),this.W=i,this.H=a||{},h&&c!==void 0&&(this.H.OSID=h,this.H.OAID=c),this.F=this.X,this.I=hs(this,null,this.W),En(this)};function mr(i){if(es(i),i.G==3){var a=i.U++,h=Pt(i.I);if(K(h,"SID",i.K),K(h,"RID",a),K(h,"TYPE","terminate"),Ue(i,h),a=new kt(i,i.j,a),a.L=2,a.v=gn(Pt(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(a.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=a.v,h=!0),h||(a.g=ls(a.j,null),a.g.ea(a.v)),a.F=Date.now(),dn(a)}us(i)}function yn(i){i.g&&(yr(i),i.g.cancel(),i.g=null)}function es(i){yn(i),i.u&&(l.clearTimeout(i.u),i.u=null),vn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&l.clearTimeout(i.s),i.s=null)}function En(i){if(!Mi(i.h)&&!i.s){i.s=!0;var a=i.Ga;Ae||pi(),we||(Ae(),we=!0),Xn.add(a,i),i.B=0}}function Qa(i,a){return Li(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=a.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Ve(R(i.Ga,i,a),as(i,i.B)),i.B++,!0)}r.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const T=new kt(this,this.j,i);let A=this.o;if(this.S&&(A?(A=p(A),y(A,this.S)):A=this.S),this.m!==null||this.O||(T.H=A,A=null),this.P)t:{for(var a=0,h=0;h<this.i.length;h++){e:{var c=this.i[h];if("__data__"in c.map&&(c=c.map.__data__,typeof c=="string")){c=c.length;break e}c=void 0}if(c===void 0)break;if(a+=c,4096<a){a=h;break t}if(a===4096||h===this.i.length-1){a=h+1;break t}}a=1e3}else a=1e3;a=rs(this,T,a),h=Pt(this.I),K(h,"RID",i),K(h,"CVER",22),this.D&&K(h,"X-HTTP-Session-Id",this.D),Ue(this,h),A&&(this.O?a="headers="+encodeURIComponent(String(Qi(A)))+"&"+a:this.m&&gr(h,this.m,A)),pr(this.h,T),this.Ua&&K(h,"TYPE","init"),this.P?(K(h,"$req",a),K(h,"SID","null"),T.T=!0,lr(T,h,null)):lr(T,h,a),this.G=2}}else this.G==3&&(i?ns(this,i):this.i.length==0||Mi(this.h)||ns(this))};function ns(i,a){var h;a?h=a.l:h=i.U++;const c=Pt(i.I);K(c,"SID",i.K),K(c,"RID",h),K(c,"AID",i.T),Ue(i,c),i.m&&i.o&&gr(c,i.m,i.o),h=new kt(i,i.j,h,i.B+1),i.m===null&&(h.H=i.o),a&&(i.i=a.D.concat(i.i)),a=rs(i,h,1e3),h.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),pr(i.h,h),lr(h,c,a)}function Ue(i,a){i.H&&it(i.H,function(h,c){K(a,c,h)}),i.l&&Bi({},function(h,c){K(a,c,h)})}function rs(i,a,h){h=Math.min(i.i.length,h);var c=i.l?R(i.l.Na,i.l,i):null;t:{var T=i.i;let A=-1;for(;;){const S=["count="+h];A==-1?0<h?(A=T[0].g,S.push("ofs="+A)):A=0:S.push("ofs="+A);let z=!0;for(let st=0;st<h;st++){let j=T[st].g;const ct=T[st].map;if(j-=A,0>j)A=Math.max(0,T[st].g-100),z=!1;else try{za(ct,S,"req"+j+"_")}catch{c&&c(ct)}}if(z){c=S.join("&");break t}}}return i=i.i.splice(0,h),a.D=i,c}function is(i){if(!i.g&&!i.u){i.Y=1;var a=i.Fa;Ae||pi(),we||(Ae(),we=!0),Xn.add(a,i),i.v=0}}function _r(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Ve(R(i.Fa,i),as(i,i.v)),i.v++,!0)}r.Fa=function(){if(this.u=null,ss(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Ve(R(this.ab,this),i)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),yn(this),ss(this))};function yr(i){i.A!=null&&(l.clearTimeout(i.A),i.A=null)}function ss(i){i.g=new kt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var a=Pt(i.qa);K(a,"RID","rpc"),K(a,"SID",i.K),K(a,"AID",i.T),K(a,"CI",i.F?"0":"1"),!i.F&&i.ja&&K(a,"TO",i.ja),K(a,"TYPE","xmlhttp"),Ue(i,a),i.m&&i.o&&gr(a,i.m,i.o),i.L&&(i.g.I=i.L);var h=i.g;i=i.ia,h.L=1,h.v=gn(Pt(a)),h.m=null,h.P=!0,Ni(h,i)}r.Za=function(){this.C!=null&&(this.C=null,yn(this),_r(this),_t(19))};function vn(i){i.C!=null&&(l.clearTimeout(i.C),i.C=null)}function os(i,a){var h=null;if(i.g==a){vn(i),yr(i),i.g=null;var c=2}else if(fr(i.h,a))h=a.D,Fi(i.h,a),c=1;else return;if(i.G!=0){if(a.o)if(c==1){h=a.m?a.m.length:0,a=Date.now()-a.F;var T=i.B;c=hn(),mt(c,new Pi(c,h)),En(i)}else is(i);else if(T=a.s,T==3||T==0&&0<a.X||!(c==1&&Qa(i,a)||c==2&&_r(i)))switch(h&&0<h.length&&(a=i.h,a.i=a.i.concat(h)),T){case 1:Kt(i,5);break;case 4:Kt(i,10);break;case 3:Kt(i,6);break;default:Kt(i,2)}}}function as(i,a){let h=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(h*=2),h*a}function Kt(i,a){if(i.j.info("Error code "+a),a==2){var h=R(i.fb,i),c=i.Xa;const T=!c;c=new zt(c||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||fn(c,"https"),gn(c),T?qa(c.toString(),h):ja(c.toString(),h)}else _t(2);i.G=0,i.l&&i.l.sa(a),us(i),es(i)}r.fb=function(i){i?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function us(i){if(i.G=0,i.ka=[],i.l){const a=Ui(i.h);(a.length!=0||i.i.length!=0)&&(D(i.ka,a),D(i.ka,i.i),i.h.i.length=0,M(i.i),i.i.length=0),i.l.ra()}}function hs(i,a,h){var c=h instanceof zt?Pt(h):new zt(h);if(c.g!="")a&&(c.g=a+"."+c.g),pn(c,c.s);else{var T=l.location;c=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var A=new zt(null);c&&fn(A,c),a&&(A.g=a),T&&pn(A,T),h&&(A.l=h),c=A}return h=i.D,a=i.ya,h&&a&&K(c,h,a),K(c,"VER",i.la),Ue(i,c),c}function ls(i,a,h){if(a&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=i.Ca&&!i.pa?new Q(new xe({eb:h})):new Q(i.pa),a.Ha(i.J),a}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function cs(){}r=cs.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Tn(){}Tn.prototype.g=function(i,a){return new vt(i,a)};function vt(i,a){lt.call(this),this.g=new ts(a),this.l=i,this.h=a&&a.messageUrlParams||null,i=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(i?i["X-WebChannel-Content-Type"]=a.messageContentType:i={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(i?i["X-WebChannel-Client-Profile"]=a.va:i={"X-WebChannel-Client-Profile":a.va}),this.g.S=i,(i=a&&a.Sb)&&!G(i)&&(this.g.m=i),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!G(a)&&(this.g.D=a,i=this.h,i!==null&&a in i&&(i=this.h,a in i&&delete i[a])),this.j=new ne(this)}N(vt,lt),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){mr(this.g)},vt.prototype.o=function(i){var a=this.g;if(typeof i=="string"){var h={};h.__data__=i,i=h}else this.u&&(h={},h.__data__=ir(i),i=h);a.i.push(new Da(a.Ya++,i)),a.G==3&&En(a)},vt.prototype.N=function(){this.g.l=null,delete this.j,mr(this.g),delete this.g,vt.aa.N.call(this)};function ds(i){or.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var a=i.__sm__;if(a){t:{for(const h in a){i=h;break t}i=void 0}(this.i=i)&&(i=this.i,a=a!==null&&i in a?a[i]:void 0),this.data=a}else this.data=i}N(ds,or);function fs(){ar.call(this),this.status=1}N(fs,ar);function ne(i){this.g=i}N(ne,cs),ne.prototype.ua=function(){mt(this.g,"a")},ne.prototype.ta=function(i){mt(this.g,new ds(i))},ne.prototype.sa=function(i){mt(this.g,new fs)},ne.prototype.ra=function(){mt(this.g,"b")},Tn.prototype.createWebChannel=Tn.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,Eo=function(){return new Tn},yo=function(){return hn()},_o=jt,br={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ln.NO_ERROR=0,ln.TIMEOUT=8,ln.HTTP_ERROR=6,Pn=ln,Vi.COMPLETE="complete",mo=Vi,wi.EventType=Se,Se.OPEN="a",Se.CLOSE="b",Se.ERROR="c",Se.MESSAGE="d",lt.prototype.listen=lt.prototype.K,qe=wi,go=xe,Q.prototype.listenOnce=Q.prototype.L,Q.prototype.getLastError=Q.prototype.Ka,Q.prototype.getLastErrorCode=Q.prototype.Ba,Q.prototype.getStatus=Q.prototype.Z,Q.prototype.getResponseJson=Q.prototype.Oa,Q.prototype.getResponseText=Q.prototype.oa,Q.prototype.send=Q.prototype.ea,Q.prototype.setWithCredentials=Q.prototype.Ha,po=Q}).apply(typeof An<"u"?An:typeof self<"u"?self:typeof window<"u"?window:{});const Is="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ye="10.13.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt=new ho("@firebase/firestore");function Be(){return Yt.logLevel}function b(r,...t){if(Yt.logLevel<=B.DEBUG){const e=t.map(Gr);Yt.debug(`Firestore (${ye}): ${r}`,...e)}}function Dt(r,...t){if(Yt.logLevel<=B.ERROR){const e=t.map(Gr);Yt.error(`Firestore (${ye}): ${r}`,...e)}}function ce(r,...t){if(Yt.logLevel<=B.WARN){const e=t.map(Gr);Yt.warn(`Firestore (${ye}): ${r}`,...e)}}function Gr(r){if(typeof r=="string")return r;try{/**
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
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(r="Unexpected state"){const t=`FIRESTORE (${ye}) INTERNAL ASSERTION FAILED: `+r;throw Dt(t),new Error(t)}function tt(r,t){r||L()}function U(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends _e{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class mh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(pt.UNAUTHENTICATED))}shutdown(){}}class _h{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class yh{constructor(t){this.t=t,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=d=>this.i!==n?(n=this.i,e(d)):Promise.resolve();let o=new Wt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Wt,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const d=o;t.enqueueRetryable(async()=>{await d.promise,await s(this.currentUser)})},l=d=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.auth.addAuthTokenListener(this.o),u()};this.t.onInit(d=>l(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?l(d):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Wt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(tt(typeof n.accessToken=="string"),new vo(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return tt(t===null||typeof t=="string"),new pt(t)}}class Eh{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class vh{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Eh(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Th{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ih{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=o=>{o.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,b("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const s=o=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(tt(typeof e.token=="string"),this.R=e.token,new Th(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Ah(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=Ah(40);for(let o=0;o<s.length;++o)n.length<20&&s[o]<e&&(n+=t.charAt(s[o]%t.length))}return n}}function $(r,t){return r<t?-1:r>t?1:0}function de(r,t,e){return r.length===t.length&&r.every((n,s)=>e(n,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new k(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Et.fromMillis(Date.now())}static fromDate(t){return Et.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Et(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?$(this.nanoseconds,t.nanoseconds):$(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t){this.timestamp=t}static fromTimestamp(t){return new x(t)}static min(){return new x(new Et(0,0))}static max(){return new x(new Et(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t,e,n){e===void 0?e=0:e>t.length&&L(),n===void 0?n=t.length-e:n>t.length-e&&L(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Xe.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Xe?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const o=t.get(s),u=e.get(s);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class W extends Xe{construct(t,e,n){return new W(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new k(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(s=>s.length>0))}return new W(e)}static emptyPath(){return new W([])}}const Rh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends Xe{construct(t,e,n){return new yt(t,e,n)}static isValidIdentifier(t){return Rh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const o=()=>{if(n.length===0)throw new k(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let u=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new k(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[s+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new k(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=d,s+=2}else l==="`"?(u=!u,s++):l!=="."||u?(n+=l,s++):(o(),s++)}if(o(),u)throw new k(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new yt(e)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(W.fromString(t))}static fromName(t){return new O(W.fromString(t).popFirst(5))}static empty(){return new O(W.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&W.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return W.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new W(t.slice()))}}function Ch(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=x.fromTimestamp(n===1e9?new Et(e+1,0):new Et(e,n));return new Ut(s,O.empty(),t)}function Sh(r){return new Ut(r.readTime,r.key,-1)}class Ut{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Ut(x.min(),O.empty(),-1)}static max(){return new Ut(x.max(),O.empty(),-1)}}function Ph(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(r.documentKey,t.documentKey),e!==0?e:$(r.largestBatchId,t.largestBatchId))}/**
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
 */const Vh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(r){if(r.code!==V.FAILED_PRECONDITION||r.message!==Vh)throw r;b("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((n,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,n)=>{e(t)})}static reject(t){return new C((e,n)=>{n(t)})}static waitFor(t){return new C((e,n)=>{let s=0,o=0,u=!1;t.forEach(l=>{++s,l.next(()=>{++o,u&&o===s&&e()},d=>n(d))}),u=!0,o===s&&e()})}static or(t){let e=C.resolve(!1);for(const n of t)e=e.next(s=>s?C.resolve(s):n());return e}static forEach(t,e){const n=[];return t.forEach((s,o)=>{n.push(e.call(this,s,o))}),this.waitFor(n)}static mapArray(t,e){return new C((n,s)=>{const o=t.length,u=new Array(o);let l=0;for(let d=0;d<o;d++){const f=d;e(t[f]).next(_=>{u[f]=_,++l,l===o&&n(u)},_=>s(_))}})}static doWhile(t,e){return new C((n,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):n()};o()})}}function Dh(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function tn(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Qr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Qr.oe=-1;function Bn(r){return r==null}function Dr(r){return r===0&&1/r==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function qn(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Nh(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,e){this.comparator=t,this.root=e||ot.EMPTY}insert(t,e){return new J(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(t){return new J(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ot.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new wn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new wn(this.root,t,this.comparator,!1)}getReverseIterator(){return new wn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new wn(this.root,t,this.comparator,!0)}}class wn{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ot{constructor(t,e,n,s,o){this.key=t,this.value=e,this.color=n??ot.RED,this.left=s??ot.EMPTY,this.right=o??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,o){return new ot(t??this.key,e??this.value,n??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const o=n(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,n),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ot.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const t=this.left.check();if(t!==this.right.check())throw L();return t+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(t,e,n,s,o){return this}insert(t,e,n){return new ot(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.comparator=t,this.data=new J(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ws(this.data.getIterator())}getIteratorFrom(t){return new ws(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof at)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=n.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new at(this.comparator);return e.data=t,e}}class ws{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Mt{constructor(t){this.fields=t,t.sort(yt.comparator)}static empty(){return new Mt([])}unionWith(t){let e=new at(yt.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Mt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return de(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
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
 */class To extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ut{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new To("Invalid base64 string: "+o):o}}(t);return new ut(e)}static fromUint8Array(t){const e=function(s){let o="";for(let u=0;u<s.length;++u)o+=String.fromCharCode(s[u]);return o}(t);return new ut(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return $(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const kh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bt(r){if(tt(!!r),typeof r=="string"){let t=0;const e=kh.exec(r);if(tt(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:Y(r.seconds),nanos:Y(r.nanos)}}function Y(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Jt(r){return typeof r=="string"?ut.fromBase64String(r):ut.fromUint8Array(r)}/**
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
 */function Wr(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Xr(r){const t=r.mapValue.fields.__previous_value__;return Wr(t)?Xr(t):t}function Ye(r){const t=Bt(r.mapValue.fields.__local_write_time__.timestampValue);return new Et(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(t,e,n,s,o,u,l,d,f){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=l,this.longPollingOptions=d,this.useFetchStreams=f}}class Je{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Je("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Je&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Rn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Zt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Wr(r)?4:Mh(r)?9007199254740991:xh(r)?10:11:L()}function wt(r,t){if(r===t)return!0;const e=Zt(r);if(e!==Zt(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Ye(r).isEqual(Ye(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const u=Bt(s.timestampValue),l=Bt(o.timestampValue);return u.seconds===l.seconds&&u.nanos===l.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,o){return Jt(s.bytesValue).isEqual(Jt(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,o){return Y(s.geoPointValue.latitude)===Y(o.geoPointValue.latitude)&&Y(s.geoPointValue.longitude)===Y(o.geoPointValue.longitude)}(r,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return Y(s.integerValue)===Y(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const u=Y(s.doubleValue),l=Y(o.doubleValue);return u===l?Dr(u)===Dr(l):isNaN(u)&&isNaN(l)}return!1}(r,t);case 9:return de(r.arrayValue.values||[],t.arrayValue.values||[],wt);case 10:case 11:return function(s,o){const u=s.mapValue.fields||{},l=o.mapValue.fields||{};if(As(u)!==As(l))return!1;for(const d in u)if(u.hasOwnProperty(d)&&(l[d]===void 0||!wt(u[d],l[d])))return!1;return!0}(r,t);default:return L()}}function Ze(r,t){return(r.values||[]).find(e=>wt(e,t))!==void 0}function fe(r,t){if(r===t)return 0;const e=Zt(r),n=Zt(t);if(e!==n)return $(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return $(r.booleanValue,t.booleanValue);case 2:return function(o,u){const l=Y(o.integerValue||o.doubleValue),d=Y(u.integerValue||u.doubleValue);return l<d?-1:l>d?1:l===d?0:isNaN(l)?isNaN(d)?0:-1:1}(r,t);case 3:return Rs(r.timestampValue,t.timestampValue);case 4:return Rs(Ye(r),Ye(t));case 5:return $(r.stringValue,t.stringValue);case 6:return function(o,u){const l=Jt(o),d=Jt(u);return l.compareTo(d)}(r.bytesValue,t.bytesValue);case 7:return function(o,u){const l=o.split("/"),d=u.split("/");for(let f=0;f<l.length&&f<d.length;f++){const _=$(l[f],d[f]);if(_!==0)return _}return $(l.length,d.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,u){const l=$(Y(o.latitude),Y(u.latitude));return l!==0?l:$(Y(o.longitude),Y(u.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Cs(r.arrayValue,t.arrayValue);case 10:return function(o,u){var l,d,f,_;const w=o.fields||{},R=u.fields||{},P=(l=w.value)===null||l===void 0?void 0:l.arrayValue,N=(d=R.value)===null||d===void 0?void 0:d.arrayValue,M=$(((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0,((_=N==null?void 0:N.values)===null||_===void 0?void 0:_.length)||0);return M!==0?M:Cs(P,N)}(r.mapValue,t.mapValue);case 11:return function(o,u){if(o===Rn.mapValue&&u===Rn.mapValue)return 0;if(o===Rn.mapValue)return 1;if(u===Rn.mapValue)return-1;const l=o.fields||{},d=Object.keys(l),f=u.fields||{},_=Object.keys(f);d.sort(),_.sort();for(let w=0;w<d.length&&w<_.length;++w){const R=$(d[w],_[w]);if(R!==0)return R;const P=fe(l[d[w]],f[_[w]]);if(P!==0)return P}return $(d.length,_.length)}(r.mapValue,t.mapValue);default:throw L()}}function Rs(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return $(r,t);const e=Bt(r),n=Bt(t),s=$(e.seconds,n.seconds);return s!==0?s:$(e.nanos,n.nanos)}function Cs(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const o=fe(e[s],n[s]);if(o)return o}return $(e.length,n.length)}function pe(r){return Nr(r)}function Nr(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=Bt(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return Jt(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return O.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",s=!0;for(const o of e.values||[])s?s=!1:n+=",",n+=Nr(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const u of n)o?o=!1:s+=",",s+=`${u}:${Nr(e.fields[u])}`;return s+"}"}(r.mapValue):L()}function kr(r){return!!r&&"integerValue"in r}function Yr(r){return!!r&&"arrayValue"in r}function Ss(r){return!!r&&"nullValue"in r}function Ps(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Tr(r){return!!r&&"mapValue"in r}function xh(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function ze(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return qn(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=ze(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=ze(r.arrayValue.values[e]);return t}return Object.assign({},r)}function Mh(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.value=t}static empty(){return new It({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Tr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ze(e)}setAll(t){let e=yt.emptyPath(),n={},s=[];t.forEach((u,l)=>{if(!e.isImmediateParentOf(l)){const d=this.getFieldsMap(e);this.applyChanges(d,n,s),n={},s=[],e=l.popLast()}u?n[l.lastSegment()]=ze(u):s.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,s)}delete(t){const e=this.field(t.popLast());Tr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return wt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Tr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){qn(e,(s,o)=>t[s]=o);for(const s of n)delete t[s]}clone(){return new It(ze(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t,e,n,s,o,u,l){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=o,this.data=u,this.documentState=l}static newInvalidDocument(t){return new gt(t,0,x.min(),x.min(),x.min(),It.empty(),0)}static newFoundDocument(t,e,n,s){return new gt(t,1,e,x.min(),n,s,0)}static newNoDocument(t,e){return new gt(t,2,e,x.min(),x.min(),It.empty(),0)}static newUnknownDocument(t,e){return new gt(t,3,e,x.min(),x.min(),It.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(x.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=x.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof gt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class xn{constructor(t,e){this.position=t,this.inclusive=e}}function Vs(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const o=t[s],u=r.position[s];if(o.field.isKeyField()?n=O.comparator(O.fromName(u.referenceValue),e.key):n=fe(u,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function bs(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!wt(r.position[e],t.position[e]))return!1;return!0}/**
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
 */class Mn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Lh(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class Io{}class et extends Io{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Uh(t,e,n):e==="array-contains"?new jh(t,n):e==="in"?new $h(t,n):e==="not-in"?new zh(t,n):e==="array-contains-any"?new Kh(t,n):new et(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Bh(t,n):new qh(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(fe(e,this.value)):e!==null&&Zt(this.value)===Zt(e)&&this.matchesComparison(fe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Rt extends Io{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Rt(t,e)}matches(t){return Ao(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ao(r){return r.op==="and"}function wo(r){return Fh(r)&&Ao(r)}function Fh(r){for(const t of r.filters)if(t instanceof Rt)return!1;return!0}function Or(r){if(r instanceof et)return r.field.canonicalString()+r.op.toString()+pe(r.value);if(wo(r))return r.filters.map(t=>Or(t)).join(",");{const t=r.filters.map(e=>Or(e)).join(",");return`${r.op}(${t})`}}function Ro(r,t){return r instanceof et?function(n,s){return s instanceof et&&n.op===s.op&&n.field.isEqual(s.field)&&wt(n.value,s.value)}(r,t):r instanceof Rt?function(n,s){return s instanceof Rt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((o,u,l)=>o&&Ro(u,s.filters[l]),!0):!1}(r,t):void L()}function Co(r){return r instanceof et?function(e){return`${e.field.canonicalString()} ${e.op} ${pe(e.value)}`}(r):r instanceof Rt?function(e){return e.op.toString()+" {"+e.getFilters().map(Co).join(" ,")+"}"}(r):"Filter"}class Uh extends et{constructor(t,e,n){super(t,e,n),this.key=O.fromName(n.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Bh extends et{constructor(t,e){super(t,"in",e),this.keys=So("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class qh extends et{constructor(t,e){super(t,"not-in",e),this.keys=So("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function So(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>O.fromName(n.referenceValue))}class jh extends et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Yr(e)&&Ze(e.arrayValue,this.value)}}class $h extends et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Ze(this.value.arrayValue,e)}}class zh extends et{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ze(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Ze(this.value.arrayValue,e)}}class Kh extends et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Yr(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>Ze(this.value.arrayValue,n))}}/**
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
 */class Gh{constructor(t,e=null,n=[],s=[],o=null,u=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=o,this.startAt=u,this.endAt=l,this.ue=null}}function Ds(r,t=null,e=[],n=[],s=null,o=null,u=null){return new Gh(r,t,e,n,s,o,u)}function Jr(r){const t=U(r);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>Or(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),Bn(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>pe(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>pe(n)).join(",")),t.ue=e}return t.ue}function Zr(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Lh(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Ro(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!bs(r.startAt,t.startAt)&&bs(r.endAt,t.endAt)}function xr(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t,e=null,n=[],s=[],o=null,u="F",l=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=o,this.limitType=u,this.startAt=l,this.endAt=d,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Hh(r,t,e,n,s,o,u,l){return new jn(r,t,e,n,s,o,u,l)}function Po(r){return new jn(r)}function Ns(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Qh(r){return r.collectionGroup!==null}function Ke(r){const t=U(r);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let l=new at(yt.comparator);return u.filters.forEach(d=>{d.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Mn(o,n))}),e.has(yt.keyField().canonicalString())||t.ce.push(new Mn(yt.keyField(),n))}return t.ce}function At(r){const t=U(r);return t.le||(t.le=Wh(t,Ke(r))),t.le}function Wh(r,t){if(r.limitType==="F")return Ds(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Mn(s.field,o)});const e=r.endAt?new xn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new xn(r.startAt.position,r.startAt.inclusive):null;return Ds(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Mr(r,t,e){return new jn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function $n(r,t){return Zr(At(r),At(t))&&r.limitType===t.limitType}function Vo(r){return`${Jr(At(r))}|lt:${r.limitType}`}function ie(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Co(s)).join(", ")}]`),Bn(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>pe(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>pe(s)).join(",")),`Target(${n})`}(At(r))}; limitType=${r.limitType})`}function zn(r,t){return t.isFoundDocument()&&function(n,s){const o=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):O.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,s){for(const o of Ke(n))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,s){for(const o of n.filters)if(!o.matches(s))return!1;return!0}(r,t)&&function(n,s){return!(n.startAt&&!function(u,l,d){const f=Vs(u,l,d);return u.inclusive?f<=0:f<0}(n.startAt,Ke(n),s)||n.endAt&&!function(u,l,d){const f=Vs(u,l,d);return u.inclusive?f>=0:f>0}(n.endAt,Ke(n),s))}(r,t)}function Xh(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function bo(r){return(t,e)=>{let n=!1;for(const s of Ke(r)){const o=Yh(s,t,e);if(o!==0)return o;n=n||s.field.isKeyField()}return 0}}function Yh(r,t,e){const n=r.field.isKeyField()?O.comparator(t.key,e.key):function(o,u,l){const d=u.data.field(o),f=l.data.field(o);return d!==null&&f!==null?fe(d,f):L()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return L()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,o]of n)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){qn(this.inner,(e,n)=>{for(const[s,o]of n)t(s,o)})}isEmpty(){return Nh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=new J(O.comparator);function qt(){return Jh}const Do=new J(O.comparator);function je(...r){let t=Do;for(const e of r)t=t.insert(e.key,e);return t}function Zh(r){let t=Do;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Ht(){return Ge()}function No(){return Ge()}function Ge(){return new Ee(r=>r.toString(),(r,t)=>r.isEqual(t))}const tl=new at(O.comparator);function q(...r){let t=tl;for(const e of r)t=t.add(e);return t}const el=new at($);function nl(){return el}/**
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
 */function rl(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dr(t)?"-0":t}}function il(r){return{integerValue:""+r}}/**
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
 */class Kn{constructor(){this._=void 0}}function sl(r,t,e){return r instanceof Lr?function(s,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Wr(o)&&(o=Xr(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(e,t):r instanceof Ln?ko(r,t):r instanceof Fn?Oo(r,t):function(s,o){const u=al(s,o),l=ks(u)+ks(s.Pe);return kr(u)&&kr(s.Pe)?il(l):rl(s.serializer,l)}(r,t)}function ol(r,t,e){return r instanceof Ln?ko(r,t):r instanceof Fn?Oo(r,t):e}function al(r,t){return r instanceof Fr?function(n){return kr(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class Lr extends Kn{}class Ln extends Kn{constructor(t){super(),this.elements=t}}function ko(r,t){const e=xo(t);for(const n of r.elements)e.some(s=>wt(s,n))||e.push(n);return{arrayValue:{values:e}}}class Fn extends Kn{constructor(t){super(),this.elements=t}}function Oo(r,t){let e=xo(t);for(const n of r.elements)e=e.filter(s=>!wt(s,n));return{arrayValue:{values:e}}}class Fr extends Kn{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function ks(r){return Y(r.integerValue||r.doubleValue)}function xo(r){return Yr(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function ul(r,t){return r.field.isEqual(t.field)&&function(n,s){return n instanceof Ln&&s instanceof Ln||n instanceof Fn&&s instanceof Fn?de(n.elements,s.elements,wt):n instanceof Fr&&s instanceof Fr?wt(n.Pe,s.Pe):n instanceof Lr&&s instanceof Lr}(r.transform,t.transform)}class Xt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Xt}static exists(t){return new Xt(void 0,t)}static updateTime(t){return new Xt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Vn(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class ti{}function Mo(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new ll(r.key,Xt.none()):new ei(r.key,r.data,Xt.none());{const e=r.data,n=It.empty();let s=new at(yt.comparator);for(let o of t.fields)if(!s.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?n.delete(o):n.set(o,u),s=s.add(o)}return new Gn(r.key,n,new Mt(s.toArray()),Xt.none())}}function hl(r,t,e){r instanceof ei?function(s,o,u){const l=s.value.clone(),d=xs(s.fieldTransforms,o,u.transformResults);l.setAll(d),o.convertToFoundDocument(u.version,l).setHasCommittedMutations()}(r,t,e):r instanceof Gn?function(s,o,u){if(!Vn(s.precondition,o))return void o.convertToUnknownDocument(u.version);const l=xs(s.fieldTransforms,o,u.transformResults),d=o.data;d.setAll(Lo(s)),d.setAll(l),o.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(r,t,e):function(s,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function He(r,t,e,n){return r instanceof ei?function(o,u,l,d){if(!Vn(o.precondition,u))return l;const f=o.value.clone(),_=Ms(o.fieldTransforms,d,u);return f.setAll(_),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null}(r,t,e,n):r instanceof Gn?function(o,u,l,d){if(!Vn(o.precondition,u))return l;const f=Ms(o.fieldTransforms,d,u),_=u.data;return _.setAll(Lo(o)),_.setAll(f),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(r,t,e,n):function(o,u,l){return Vn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):l}(r,t,e)}function Os(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&de(n,s,(o,u)=>ul(o,u))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class ei extends ti{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Gn extends ti{constructor(t,e,n,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Lo(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function xs(r,t,e){const n=new Map;tt(r.length===e.length);for(let s=0;s<e.length;s++){const o=r[s],u=o.transform,l=t.data.field(o.field);n.set(o.field,ol(u,l,e[s]))}return n}function Ms(r,t,e){const n=new Map;for(const s of r){const o=s.transform,u=e.data.field(s.field);n.set(s.field,sl(o,u,t))}return n}class ll extends ti{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&hl(o,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=He(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=He(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=No();return this.mutations.forEach(s=>{const o=t.get(s.key),u=o.overlayedDocument;let l=this.applyToLocalView(u,o.mutatedFields);l=e.has(s.key)?null:l;const d=Mo(u,l);d!==null&&n.set(s.key,d),u.isValidDocument()||u.convertToNoDocument(x.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),q())}isEqual(t){return this.batchId===t.batchId&&de(this.mutations,t.mutations,(e,n)=>Os(e,n))&&de(this.baseMutations,t.baseMutations,(e,n)=>Os(e,n))}}/**
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
 */class dl{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class fl{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z,F;function Fo(r){if(r===void 0)return Dt("GRPC error has no .code"),V.UNKNOWN;switch(r){case Z.OK:return V.OK;case Z.CANCELLED:return V.CANCELLED;case Z.UNKNOWN:return V.UNKNOWN;case Z.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Z.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Z.INTERNAL:return V.INTERNAL;case Z.UNAVAILABLE:return V.UNAVAILABLE;case Z.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Z.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Z.NOT_FOUND:return V.NOT_FOUND;case Z.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Z.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Z.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Z.ABORTED:return V.ABORTED;case Z.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Z.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Z.DATA_LOSS:return V.DATA_LOSS;default:return L()}}(F=Z||(Z={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function pl(){return new TextEncoder}/**
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
 */const gl=new Qt([4294967295,4294967295],0);function Ls(r){const t=pl().encode(r),e=new fo;return e.update(t),new Uint8Array(e.digest())}function Fs(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Qt([e,n],0),new Qt([s,o],0)]}class ni{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new $e(`Invalid padding: ${e}`);if(n<0)throw new $e(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new $e(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new $e(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Qt.fromNumber(this.Ie)}Ee(t,e,n){let s=t.add(e.multiply(Qt.fromNumber(n)));return s.compare(gl)===1&&(s=new Qt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Ls(t),[n,s]=Fs(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(n,s,o);if(!this.de(u))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new ni(o,s,e);return n.forEach(l=>u.insert(l)),u}insert(t){if(this.Ie===0)return;const e=Ls(t),[n,s]=Fs(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(n,s,o);this.Ae(u)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class $e extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t,e,n,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,en.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Hn(x.min(),s,new J($),qt(),q())}}class en{constructor(t,e,n,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new en(n,e,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t,e,n,s){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=s}}class Uo{constructor(t,e){this.targetId=t,this.me=e}}class Bo{constructor(t,e,n=ut.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Us{constructor(){this.fe=0,this.ge=qs(),this.pe=ut.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=q(),e=q(),n=q();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:L()}}),new en(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=qs()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,tt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ml{constructor(t){this.Le=t,this.Be=new Map,this.ke=qt(),this.qe=Bs(),this.Qe=new J($)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:L()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((n,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,n=t.me.count,s=this.Je(e);if(s){const o=s.target;if(xr(o))if(n===0){const u=new O(o.path);this.Ue(e,u,gt.newNoDocument(u,x.min()))}else tt(n===1);else{const u=this.Ye(e);if(u!==n){const l=this.Ze(t),d=l?this.Xe(l,t,u):1;if(d!==0){this.je(e);const f=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:o=0}=e;let u,l;try{u=Jt(n).toUint8Array()}catch(d){if(d instanceof To)return ce("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{l=new ni(u,s,o)}catch(d){return ce(d instanceof $e?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return l.Ie===0?null:l}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let s=0;return n.forEach(o=>{const u=this.Le.tt(),l=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,u)=>{const l=this.Je(u);if(l){if(o.current&&xr(l.target)){const d=new O(l.target.path);this.ke.get(d)!==null||this.it(u,d)||this.Ue(u,d,gt.newNoDocument(d,t))}o.be&&(e.set(u,o.ve()),o.Ce())}});let n=q();this.qe.forEach((o,u)=>{let l=!0;u.forEachWhile(d=>{const f=this.Je(d);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(o))}),this.ke.forEach((o,u)=>u.setReadTime(t));const s=new Hn(t,e,this.Qe,this.ke,n);return this.ke=qt(),this.qe=Bs(),this.Qe=new J($),s}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Us,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new at($),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||b("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Us),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Bs(){return new J(O.comparator)}function qs(){return new J(O.comparator)}const _l={asc:"ASCENDING",desc:"DESCENDING"},yl={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},El={and:"AND",or:"OR"};class vl{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ur(r,t){return r.useProto3Json||Bn(t)?t:{value:t}}function Tl(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Il(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function ue(r){return tt(!!r),x.fromTimestamp(function(e){const n=Bt(e);return new Et(n.seconds,n.nanos)}(r))}function Al(r,t){return Br(r,t).canonicalString()}function Br(r,t){const e=function(s){return new W(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function qo(r){const t=W.fromString(r);return tt(Go(t)),t}function Ir(r,t){const e=qo(t);if(e.get(1)!==r.databaseId.projectId)throw new k(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new k(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new O($o(e))}function jo(r,t){return Al(r.databaseId,t)}function wl(r){const t=qo(r);return t.length===4?W.emptyPath():$o(t)}function js(r){return new W(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function $o(r){return tt(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Rl(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:L()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,_){return f.useProto3Json?(tt(_===void 0||typeof _=="string"),ut.fromBase64String(_||"")):(tt(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),ut.fromUint8Array(_||new Uint8Array))}(r,t.targetChange.resumeToken),u=t.targetChange.cause,l=u&&function(f){const _=f.code===void 0?V.UNKNOWN:Fo(f.code);return new k(_,f.message||"")}(u);e=new Bo(n,s,o,l||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=Ir(r,n.document.name),o=ue(n.document.updateTime),u=n.document.createTime?ue(n.document.createTime):x.min(),l=new It({mapValue:{fields:n.document.fields}}),d=gt.newFoundDocument(s,o,u,l),f=n.targetIds||[],_=n.removedTargetIds||[];e=new bn(f,_,d.key,d)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=Ir(r,n.document),o=n.readTime?ue(n.readTime):x.min(),u=gt.newNoDocument(s,o),l=n.removedTargetIds||[];e=new bn([],l,u.key,u)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=Ir(r,n.document),o=n.removedTargetIds||[];e=new bn([],o,s,null)}else{if(!("filter"in t))return L();{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:o}=n,u=new fl(s,o),l=n.targetId;e=new Uo(l,u)}}return e}function Cl(r,t){return{documents:[jo(r,t.path)]}}function Sl(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=jo(r,s);const o=function(f){if(f.length!==0)return Ko(Rt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(f){if(f.length!==0)return f.map(_=>function(R){return{field:se(R.field),direction:bl(R.dir)}}(_))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const l=Ur(r,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:s}}function Pl(r){let t=wl(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){tt(n===1);const _=e.from[0];_.allDescendants?s=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=function(w){const R=zo(w);return R instanceof Rt&&wo(R)?R.getFilters():[R]}(e.where));let u=[];e.orderBy&&(u=function(w){return w.map(R=>function(N){return new Mn(oe(N.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(R))}(e.orderBy));let l=null;e.limit&&(l=function(w){let R;return R=typeof w=="object"?w.value:w,Bn(R)?null:R}(e.limit));let d=null;e.startAt&&(d=function(w){const R=!!w.before,P=w.values||[];return new xn(P,R)}(e.startAt));let f=null;return e.endAt&&(f=function(w){const R=!w.before,P=w.values||[];return new xn(P,R)}(e.endAt)),Hh(t,s,u,o,l,"F",d,f)}function Vl(r,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function zo(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=oe(e.unaryFilter.field);return et.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=oe(e.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=oe(e.unaryFilter.field);return et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=oe(e.unaryFilter.field);return et.create(u,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(r):r.fieldFilter!==void 0?function(e){return et.create(oe(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Rt.create(e.compositeFilter.filters.map(n=>zo(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return L()}}(e.compositeFilter.op))}(r):L()}function bl(r){return _l[r]}function Dl(r){return yl[r]}function Nl(r){return El[r]}function se(r){return{fieldPath:r.canonicalString()}}function oe(r){return yt.fromServerFormat(r.fieldPath)}function Ko(r){return r instanceof et?function(e){if(e.op==="=="){if(Ps(e.value))return{unaryFilter:{field:se(e.field),op:"IS_NAN"}};if(Ss(e.value))return{unaryFilter:{field:se(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ps(e.value))return{unaryFilter:{field:se(e.field),op:"IS_NOT_NAN"}};if(Ss(e.value))return{unaryFilter:{field:se(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:se(e.field),op:Dl(e.op),value:e.value}}}(r):r instanceof Rt?function(e){const n=e.getFilters().map(s=>Ko(s));return n.length===1?n[0]:{compositeFilter:{op:Nl(e.op),filters:n}}}(r):L()}function Go(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t,e,n,s,o=x.min(),u=x.min(),l=ut.EMPTY_BYTE_STRING,d=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=l,this.expectedCount=d}withSequenceNumber(t){return new Lt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(t){this.ct=t}}function Ol(r){const t=Pl({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Mr(t,t.limit,"L"):t}/**
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
 */class xl{constructor(){this.un=new Ml}addToCollectionParentIndex(t,e){return this.un.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(Ut.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(Ut.min())}updateCollectionGroup(t,e,n){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class Ml{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new at(W.comparator),o=!s.has(n);return this.index[e]=s.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new at(W.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new ge(0)}static kn(){return new ge(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(){this.changes=new Ee(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,gt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?C.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Fl{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(n!==null&&He(n.mutation,s,Mt.empty(),Et.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,q()).next(()=>n))}getLocalViewOfDocuments(t,e,n=q()){const s=Ht();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(o=>{let u=je();return o.forEach((l,d)=>{u=u.insert(l,d.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const n=Ht();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,q()))}populateOverlays(t,e,n){const s=[];return n.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((u,l)=>{e.set(u,l)})})}computeViews(t,e,n,s){let o=qt();const u=Ge(),l=function(){return Ge()}();return e.forEach((d,f)=>{const _=n.get(f.key);s.has(f.key)&&(_===void 0||_.mutation instanceof Gn)?o=o.insert(f.key,f):_!==void 0?(u.set(f.key,_.mutation.getFieldMask()),He(_.mutation,f,_.mutation.getFieldMask(),Et.now())):u.set(f.key,Mt.empty())}),this.recalculateAndSaveOverlays(t,o).next(d=>(d.forEach((f,_)=>u.set(f,_)),e.forEach((f,_)=>{var w;return l.set(f,new Fl(_,(w=u.get(f))!==null&&w!==void 0?w:null))}),l))}recalculateAndSaveOverlays(t,e){const n=Ge();let s=new J((u,l)=>u-l),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const l of u)l.keys().forEach(d=>{const f=e.get(d);if(f===null)return;let _=n.get(d)||Mt.empty();_=l.applyToLocalView(f,_),n.set(d,_);const w=(s.get(l.batchId)||q()).add(d);s=s.insert(l.batchId,w)})}).next(()=>{const u=[],l=s.getReverseIterator();for(;l.hasNext();){const d=l.getNext(),f=d.key,_=d.value,w=No();_.forEach(R=>{if(!o.has(R)){const P=Mo(e.get(R),n.get(R));P!==null&&w.set(R,P),o=o.add(R)}}),u.push(this.documentOverlayCache.saveOverlays(t,f,w))}return C.waitFor(u)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,s){return function(u){return O.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Qh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(o=>{const u=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-o.size):C.resolve(Ht());let l=-1,d=o;return u.next(f=>C.forEach(f,(_,w)=>(l<w.largestBatchId&&(l=w.largestBatchId),o.get(_)?C.resolve():this.remoteDocumentCache.getEntry(t,_).next(R=>{d=d.insert(_,R)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,d,f,q())).next(_=>({batchId:l,changes:Zh(_)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(n=>{let s=je();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const o=e.collectionGroup;let u=je();return this.indexManager.getCollectionParents(t,o).next(l=>C.forEach(l,d=>{const f=function(w,R){return new jn(R,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,n,s).next(_=>{_.forEach((w,R)=>{u=u.insert(w,R)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,n,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,s))).next(u=>{o.forEach((d,f)=>{const _=f.getKey();u.get(_)===null&&(u=u.insert(_,gt.newInvalidDocument(_)))});let l=je();return u.forEach((d,f)=>{const _=o.get(d);_!==void 0&&He(_.mutation,f,Mt.empty(),Et.now()),zn(e,f)&&(l=l.insert(d,f))}),l})}}/**
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
 */class Bl{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return C.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:ue(s.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:Ol(s.bundledQuery),readTime:ue(s.readTime)}}(e)),C.resolve()}}/**
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
 */class ql{constructor(){this.overlays=new J(O.comparator),this.Ir=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Ht();return C.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&n.set(s,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((s,o)=>{this.ht(t,e,o)}),C.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Ir.get(n);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(n)),C.resolve()}getOverlaysForCollection(t,e,n){const s=Ht(),o=e.length+1,u=new O(e.child("")),l=this.overlays.getIteratorFrom(u);for(;l.hasNext();){const d=l.getNext().value,f=d.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&d.largestBatchId>n&&s.set(d.getKey(),d)}return C.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let o=new J((f,_)=>f-_);const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>n){let _=o.get(f.largestBatchId);_===null&&(_=Ht(),o=o.insert(f.largestBatchId,_)),_.set(f.getKey(),f)}}const l=Ht(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((f,_)=>l.set(f,_)),!(l.size()>=s)););return C.resolve(l)}ht(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const u=this.Ir.get(s.largestBatchId).delete(n.key);this.Ir.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(n.key,new dl(e,n));let o=this.Ir.get(e);o===void 0&&(o=q(),this.Ir.set(e,o)),this.Ir.set(e,o.add(n.key))}}/**
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
 */class jl{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.Tr=new at(rt.Er),this.dr=new at(rt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const n=new rt(t,e);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Vr(new rt(t,e))}mr(t,e){t.forEach(n=>this.removeReference(n,e))}gr(t){const e=new O(new W([])),n=new rt(e,t),s=new rt(e,t+1),o=[];return this.dr.forEachInRange([n,s],u=>{this.Vr(u),o.push(u.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new O(new W([])),n=new rt(e,t),s=new rt(e,t+1);let o=q();return this.dr.forEachInRange([n,s],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new rt(t,0),n=this.Tr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class rt{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return O.comparator(t.key,e.key)||$(t.wr,e.wr)}static Ar(t,e){return $(t.wr,e.wr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new at(rt.Er)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new cl(o,e,n,s);this.mutationQueue.push(u);for(const l of s)this.br=this.br.add(new rt(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return C.resolve(u)}lookupMutationBatch(t,e){return C.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.vr(n),o=s<0?0:s;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new rt(e,0),s=new rt(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([n,s],u=>{const l=this.Dr(u.wr);o.push(l)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new at($);return e.forEach(s=>{const o=new rt(s,0),u=new rt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,u],l=>{n=n.add(l.wr)})}),C.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let o=n;O.isDocumentKey(o)||(o=o.child(""));const u=new rt(new O(o),0);let l=new at($);return this.br.forEachWhile(d=>{const f=d.key.path;return!!n.isPrefixOf(f)&&(f.length===s&&(l=l.add(d.wr)),!0)},u),C.resolve(this.Cr(l))}Cr(t){const e=[];return t.forEach(n=>{const s=this.Dr(n);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){tt(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return C.forEach(e.mutations,s=>{const o=new rt(s.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=n})}On(t){}containsKey(t,e){const n=new rt(e,0),s=this.br.firstAfterOrEqual(n);return C.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(t){this.Mr=t,this.docs=function(){return new J(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),o=s?s.size:0,u=this.Mr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return C.resolve(n?n.document.mutableCopy():gt.newInvalidDocument(e))}getEntries(t,e){let n=qt();return e.forEach(s=>{const o=this.docs.get(s);n=n.insert(s,o?o.document.mutableCopy():gt.newInvalidDocument(s))}),C.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let o=qt();const u=e.path,l=new O(u.child("")),d=this.docs.getIteratorFrom(l);for(;d.hasNext();){const{key:f,value:{document:_}}=d.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||Ph(Sh(_),n)<=0||(s.has(_.key)||zn(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,n,s){L()}Or(t,e){return C.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new Kl(this)}getSize(t){return C.resolve(this.size)}}class Kl extends Ll{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(n)}),C.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(t){this.persistence=t,this.Nr=new Ee(e=>Jr(e),Zr),this.lastRemoteSnapshotVersion=x.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ri,this.targetCount=0,this.kr=ge.Bn()}forEachTarget(t,e){return this.Nr.forEach((n,s)=>e(s)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Lr&&(this.Lr=e),C.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new ge(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.Kn(e),C.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,n){let s=0;const o=[];return this.Nr.forEach((u,l)=>{l.sequenceNumber<=e&&n.get(l.targetId)===null&&(this.Nr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),C.waitFor(o).next(()=>s)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const n=this.Nr.get(e)||null;return C.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Rr(e,n),C.resolve()}removeMatchingKeys(t,e,n){this.Br.mr(e,n);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(u=>{o.push(s.markPotentiallyOrphaned(t,u))}),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.yr(e);return C.resolve(n)}containsKey(t,e){return C.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Qr(0),this.Kr=!1,this.Kr=!0,this.$r=new jl,this.referenceDelegate=t(this),this.Ur=new Gl(this),this.indexManager=new xl,this.remoteDocumentCache=function(s){return new zl(s)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new kl(e),this.Gr=new Bl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ql,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.qr[t.toKey()];return n||(n=new $l(e,this.referenceDelegate),this.qr[t.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,n){b("MemoryPersistence","Starting transaction:",t);const s=new Ql(this.Qr.next());return this.referenceDelegate.zr(),n(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return C.or(Object.values(this.qr).map(n=>()=>n.containsKey(t,e)))}}class Ql extends bh{constructor(t){super(),this.currentSequenceNumber=t}}class ii{constructor(t){this.persistence=t,this.Jr=new ri,this.Yr=null}static Zr(t){return new ii(t)}get Xr(){if(this.Yr)return this.Yr;throw L()}addReference(t,e,n){return this.Jr.addReference(n,e),this.Xr.delete(n.toString()),C.resolve()}removeReference(t,e,n){return this.Jr.removeReference(n,e),this.Xr.add(n.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),C.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Xr,n=>{const s=O.fromPath(n);return this.ei(t,s).next(o=>{o||e.removeEntry(s,x.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(n=>{n?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return C.or([()=>C.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.$i=n,this.Ui=s}static Wi(t,e){let n=q(),s=q();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new si(t,e.fromCache,n,s)}}/**
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
 */class Wl{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Xl{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return lu()?8:Dh(uu())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,n,s){const o={result:null};return this.Yi(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.Zi(t,e,s,n).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new Wl;return this.Xi(t,e,u).next(l=>{if(o.result=l,this.zi)return this.es(t,e,u,l.size)})}).next(()=>o.result)}es(t,e,n,s){return n.documentReadCount<this.ji?(Be()<=B.DEBUG&&b("QueryEngine","SDK will not create cache indexes for query:",ie(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),C.resolve()):(Be()<=B.DEBUG&&b("QueryEngine","Query:",ie(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Hi*s?(Be()<=B.DEBUG&&b("QueryEngine","The SDK decides to create cache indexes for query:",ie(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,At(e))):C.resolve())}Yi(t,e){if(Ns(e))return C.resolve(null);let n=At(e);return this.indexManager.getIndexType(t,n).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Mr(e,null,"F"),n=At(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const u=q(...o);return this.Ji.getDocuments(t,u).next(l=>this.indexManager.getMinOffset(t,n).next(d=>{const f=this.ts(e,l);return this.ns(e,f,u,d.readTime)?this.Yi(t,Mr(e,null,"F")):this.rs(t,f,e,d)}))})))}Zi(t,e,n,s){return Ns(e)||s.isEqual(x.min())?C.resolve(null):this.Ji.getDocuments(t,n).next(o=>{const u=this.ts(e,o);return this.ns(e,u,n,s)?C.resolve(null):(Be()<=B.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ie(e)),this.rs(t,u,e,Ch(s,-1)).next(l=>l))})}ts(t,e){let n=new at(bo(t));return e.forEach((s,o)=>{zn(t,o)&&(n=n.add(o))}),n}ns(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,n){return Be()<=B.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",ie(e)),this.Ji.getDocumentsMatchingQuery(t,e,Ut.min(),n)}rs(t,e,n,s){return this.Ji.getDocumentsMatchingQuery(t,n,s).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
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
 */class Yl{constructor(t,e,n,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new J($),this._s=new Ee(o=>Jr(o),Zr),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(n)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ul(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function Jl(r,t,e,n){return new Yl(r,t,e,n)}async function Ho(r,t){const e=U(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const u=[],l=[];let d=q();for(const f of s){u.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}for(const f of o){l.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}return e.localDocuments.getDocuments(n,d).next(f=>({hs:f,removedBatchIds:u,addedBatchIds:l}))})})}function Qo(r){const t=U(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Zl(r,t){const e=U(r),n=t.snapshotVersion;let s=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.cs.newChangeBuffer({trackRemovals:!0});s=e.os;const l=[];t.targetChanges.forEach((_,w)=>{const R=s.get(w);if(!R)return;l.push(e.Ur.removeMatchingKeys(o,_.removedDocuments,w).next(()=>e.Ur.addMatchingKeys(o,_.addedDocuments,w)));let P=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(w)!==null?P=P.withResumeToken(ut.EMPTY_BYTE_STRING,x.min()).withLastLimboFreeSnapshotVersion(x.min()):_.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(_.resumeToken,n)),s=s.insert(w,P),function(M,D,X){return M.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=3e8?!0:X.addedDocuments.size+X.modifiedDocuments.size+X.removedDocuments.size>0}(R,P,_)&&l.push(e.Ur.updateTargetData(o,P))});let d=qt(),f=q();if(t.documentUpdates.forEach(_=>{t.resolvedLimboDocuments.has(_)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))}),l.push(tc(o,u,t.documentUpdates).next(_=>{d=_.Ps,f=_.Is})),!n.isEqual(x.min())){const _=e.Ur.getLastRemoteSnapshotVersion(o).next(w=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,n));l.push(_)}return C.waitFor(l).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,d,f)).next(()=>d)}).then(o=>(e.os=s,o))}function tc(r,t,e){let n=q(),s=q();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let u=qt();return e.forEach((l,d)=>{const f=o.get(l);d.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),d.isNoDocument()&&d.version.isEqual(x.min())?(t.removeEntry(l,d.readTime),u=u.insert(l,d)):!f.isValidDocument()||d.version.compareTo(f.version)>0||d.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(d),u=u.insert(l,d)):b("LocalStore","Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",d.version)}),{Ps:u,Is:s}})}function ec(r,t){const e=U(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return e.Ur.getTargetData(n,t).next(o=>o?(s=o,C.resolve(s)):e.Ur.allocateTargetId(n).next(u=>(s=new Lt(t,u,"TargetPurposeListen",n.currentSequenceNumber),e.Ur.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=e.os.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.os=e.os.insert(n.targetId,n),e._s.set(t,n.targetId)),n})}async function qr(r,t,e){const n=U(r),s=n.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,u=>n.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!tn(u))throw u;b("LocalStore",`Failed to update sequence numbers for target ${t}: ${u}`)}n.os=n.os.remove(t),n._s.delete(s.target)}function $s(r,t,e){const n=U(r);let s=x.min(),o=q();return n.persistence.runTransaction("Execute query","readwrite",u=>function(d,f,_){const w=U(d),R=w._s.get(_);return R!==void 0?C.resolve(w.os.get(R)):w.Ur.getTargetData(f,_)}(n,u,At(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(u,l.targetId).next(d=>{o=d})}).next(()=>n.ss.getDocumentsMatchingQuery(u,t,e?s:x.min(),e?o:q())).next(l=>(nc(n,Xh(t),l),{documents:l,Ts:o})))}function nc(r,t,e){let n=r.us.get(t)||x.min();e.forEach((s,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.us.set(t,n)}class zs{constructor(){this.activeTargetIds=nl()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class rc{constructor(){this.so=new zs,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,n){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new zs,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class ic{_o(t){}shutdown(){}}/**
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
 */class Ks{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Cn=null;function Ar(){return Cn===null?Cn=function(){return 268435456+Math.round(2147483648*Math.random())}():Cn++,"0x"+Cn.toString(16)}/**
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
 */const sc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="WebChannelConnection";class ac extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,n,s,o,u){const l=Ar(),d=this.xo(e,n.toUriEncodedString());b("RestConnection",`Sending RPC '${e}' ${l}:`,d,s);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,o,u),this.No(e,d,f,s).then(_=>(b("RestConnection",`Received RPC '${e}' ${l}: `,_),_),_=>{throw ce("RestConnection",`RPC '${e}' ${l} failed with error: `,_,"url: ",d,"request:",s),_})}Lo(e,n,s,o,u,l){return this.Mo(e,n,s,o,u)}Oo(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ye}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}xo(e,n){const s=sc[e];return`${this.Do}/v1/${n}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,n,s){const o=Ar();return new Promise((u,l)=>{const d=new po;d.setWithCredentials(!0),d.listenOnce(mo.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Pn.NO_ERROR:const _=d.getResponseJson();b(ft,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(_)),u(_);break;case Pn.TIMEOUT:b(ft,`RPC '${t}' ${o} timed out`),l(new k(V.DEADLINE_EXCEEDED,"Request time out"));break;case Pn.HTTP_ERROR:const w=d.getStatus();if(b(ft,`RPC '${t}' ${o} failed with status:`,w,"response text:",d.getResponseText()),w>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const P=R==null?void 0:R.error;if(P&&P.status&&P.message){const N=function(D){const X=D.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(X)>=0?X:V.UNKNOWN}(P.status);l(new k(N,P.message))}else l(new k(V.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new k(V.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{b(ft,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);b(ft,`RPC '${t}' ${o} sending request:`,s),d.send(e,"POST",f,n,15)})}Bo(t,e,n){const s=Ar(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=Eo(),l=yo(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(d.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(d.xmlHttpFactory=new go({})),this.Oo(d.initMessageHeaders,e,n),d.encodeInitMessageHeaders=!0;const _=o.join("");b(ft,`Creating RPC '${t}' stream ${s}: ${_}`,d);const w=u.createWebChannel(_,d);let R=!1,P=!1;const N=new oc({Io:D=>{P?b(ft,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(R||(b(ft,`Opening RPC '${t}' stream ${s} transport.`),w.open(),R=!0),b(ft,`RPC '${t}' stream ${s} sending:`,D),w.send(D))},To:()=>w.close()}),M=(D,X,G)=>{D.listen(X,H=>{try{G(H)}catch(nt){setTimeout(()=>{throw nt},0)}})};return M(w,qe.EventType.OPEN,()=>{P||(b(ft,`RPC '${t}' stream ${s} transport opened.`),N.yo())}),M(w,qe.EventType.CLOSE,()=>{P||(P=!0,b(ft,`RPC '${t}' stream ${s} transport closed`),N.So())}),M(w,qe.EventType.ERROR,D=>{P||(P=!0,ce(ft,`RPC '${t}' stream ${s} transport errored:`,D),N.So(new k(V.UNAVAILABLE,"The operation could not be completed")))}),M(w,qe.EventType.MESSAGE,D=>{var X;if(!P){const G=D.data[0];tt(!!G);const H=G,nt=H.error||((X=H[0])===null||X===void 0?void 0:X.error);if(nt){b(ft,`RPC '${t}' stream ${s} received error:`,nt);const Ct=nt.status;let it=function(m){const y=Z[m];if(y!==void 0)return Fo(y)}(Ct),v=nt.message;it===void 0&&(it=V.INTERNAL,v="Unknown error status: "+Ct+" with message "+nt.message),P=!0,N.So(new k(it,v)),w.close()}else b(ft,`RPC '${t}' stream ${s} received:`,G),N.bo(G)}}),M(l,_o.STAT_EVENT,D=>{D.stat===br.PROXY?b(ft,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===br.NOPROXY&&b(ft,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{N.wo()},0),N}}function wr(){return typeof document<"u"?document:null}/**
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
 */function Wo(r){return new vl(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(t,e,n=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=n,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-n);s>0&&b("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(t,e,n,s,o,u,l,d){this.ui=t,this.Ho=n,this.Jo=s,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=l,this.listener=d,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Xo(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(Dt(e.toString()),Dt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.Yo===e&&this.P_(n,s)},n=>{t(()=>{const s=new k(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(s)})})}P_(t,e){const n=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{n(()=>this.I_(s))}),this.stream.onMessage(s=>{n(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return b("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hc extends uc{constructor(t,e,n,s,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,u),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Rl(this.serializer,t),n=function(o){if(!("targetChange"in o))return x.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?x.min():u.readTime?ue(u.readTime):x.min()}(t);return this.listener.d_(e,n)}A_(t){const e={};e.database=js(this.serializer),e.addTarget=function(o,u){let l;const d=u.target;if(l=xr(d)?{documents:Cl(o,d)}:{query:Sl(o,d)._t},l.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){l.resumeToken=Il(o,u.resumeToken);const f=Ur(o,u.expectedCount);f!==null&&(l.expectedCount=f)}else if(u.snapshotVersion.compareTo(x.min())>0){l.readTime=Tl(o,u.snapshotVersion.toTimestamp());const f=Ur(o,u.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,t);const n=Vl(this.serializer,t);n&&(e.labels=n),this.a_(e)}R_(t){const e={};e.database=js(this.serializer),e.removeTarget=t,this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new k(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,n,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Mo(t,Br(e,n),s,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(V.UNKNOWN,o.toString())})}Lo(t,e,n,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,l])=>this.connection.Lo(t,Br(e,n),s,u,l,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new k(V.UNKNOWN,u.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class cc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Dt(e),this.D_=!1):b("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(t,e,n,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(u=>{n.enqueueAndForget(async()=>{rn(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(d){const f=U(d);f.L_.add(4),await nn(f),f.q_.set("Unknown"),f.L_.delete(4),await Qn(f)}(this))})}),this.q_=new cc(n,s)}}async function Qn(r){if(rn(r))for(const t of r.B_)await t(!0)}async function nn(r){for(const t of r.B_)await t(!1)}function Yo(r,t){const e=U(r);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),hi(e)?ui(e):ve(e).r_()&&ai(e,t))}function oi(r,t){const e=U(r),n=ve(e);e.N_.delete(t),n.r_()&&Jo(e,t),e.N_.size===0&&(n.r_()?n.o_():rn(e)&&e.q_.set("Unknown"))}function ai(r,t){if(r.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(x.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ve(r).A_(t)}function Jo(r,t){r.Q_.xe(t),ve(r).R_(t)}function ui(r){r.Q_=new ml({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>r.N_.get(t)||null,tt:()=>r.datastore.serializer.databaseId}),ve(r).start(),r.q_.v_()}function hi(r){return rn(r)&&!ve(r).n_()&&r.N_.size>0}function rn(r){return U(r).L_.size===0}function Zo(r){r.Q_=void 0}async function fc(r){r.q_.set("Online")}async function pc(r){r.N_.forEach((t,e)=>{ai(r,t)})}async function gc(r,t){Zo(r),hi(r)?(r.q_.M_(t),ui(r)):r.q_.set("Unknown")}async function mc(r,t,e){if(r.q_.set("Online"),t instanceof Bo&&t.state===2&&t.cause)try{await async function(s,o){const u=o.cause;for(const l of o.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,u),s.N_.delete(l),s.Q_.removeTarget(l))}(r,t)}catch(n){b("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Gs(r,n)}else if(t instanceof bn?r.Q_.Ke(t):t instanceof Uo?r.Q_.He(t):r.Q_.We(t),!e.isEqual(x.min()))try{const n=await Qo(r.localStore);e.compareTo(n)>=0&&await function(o,u){const l=o.Q_.rt(u);return l.targetChanges.forEach((d,f)=>{if(d.resumeToken.approximateByteSize()>0){const _=o.N_.get(f);_&&o.N_.set(f,_.withResumeToken(d.resumeToken,u))}}),l.targetMismatches.forEach((d,f)=>{const _=o.N_.get(d);if(!_)return;o.N_.set(d,_.withResumeToken(ut.EMPTY_BYTE_STRING,_.snapshotVersion)),Jo(o,d);const w=new Lt(_.target,d,f,_.sequenceNumber);ai(o,w)}),o.remoteSyncer.applyRemoteEvent(l)}(r,e)}catch(n){b("RemoteStore","Failed to raise snapshot:",n),await Gs(r,n)}}async function Gs(r,t,e){if(!tn(t))throw t;r.L_.add(1),await nn(r),r.q_.set("Offline"),e||(e=()=>Qo(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await e(),r.L_.delete(1),await Qn(r)})}async function Hs(r,t){const e=U(r);e.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const n=rn(e);e.L_.add(3),await nn(e),n&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Qn(e)}async function _c(r,t){const e=U(r);t?(e.L_.delete(2),await Qn(e)):t||(e.L_.add(2),await nn(e),e.q_.set("Unknown"))}function ve(r){return r.K_||(r.K_=function(e,n,s){const o=U(e);return o.w_(),new hc(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(r.datastore,r.asyncQueue,{Eo:fc.bind(null,r),Ro:pc.bind(null,r),mo:gc.bind(null,r),d_:mc.bind(null,r)}),r.B_.push(async t=>{t?(r.K_.s_(),hi(r)?ui(r):r.q_.set("Unknown")):(await r.K_.stop(),Zo(r))})),r.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(t,e,n,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=o,this.deferred=new Wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,o){const u=Date.now()+n,l=new li(t,e,u,s,o);return l.start(n),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ta(r,t){if(Dt("AsyncQueue",`${t}: ${r}`),tn(r))return new k(V.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t){this.comparator=t?(e,n)=>t(e,n)||O.comparator(e.key,n.key):(e,n)=>O.comparator(e.key,n.key),this.keyedMap=je(),this.sortedSet=new J(this.comparator)}static emptySet(t){return new he(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof he)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=n.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new he;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(){this.W_=new J(O.comparator)}track(t){const e=t.doc.key,n=this.W_.get(e);n?t.type!==0&&n.type===3?this.W_=this.W_.insert(e,t):t.type===3&&n.type!==1?this.W_=this.W_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.W_=this.W_.remove(e):t.type===1&&n.type===2?this.W_=this.W_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):L():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,n)=>{t.push(n)}),t}}class me{constructor(t,e,n,s,o,u,l,d,f){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=l,this.excludesMetadataChanges=d,this.hasCachedResults=f}static fromInitialDocuments(t,e,n,s,o){const u=[];return e.forEach(l=>{u.push({type:0,doc:l})}),new me(t,e,he.emptySet(e),u,n,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&$n(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class Ec{constructor(){this.queries=Ws(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,n){const s=U(e),o=s.queries;s.queries=Ws(),o.forEach((u,l)=>{for(const d of l.j_)d.onError(n)})})(this,new k(V.ABORTED,"Firestore shutting down"))}}function Ws(){return new Ee(r=>Vo(r),$n)}async function vc(r,t){const e=U(r);let n=3;const s=t.query;let o=e.queries.get(s);o?!o.H_()&&t.J_()&&(n=2):(o=new yc,n=t.J_()?0:1);try{switch(n){case 0:o.z_=await e.onListen(s,!0);break;case 1:o.z_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(u){const l=ta(u,`Initialization of query '${ie(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&ci(e)}async function Tc(r,t){const e=U(r),n=t.query;let s=3;const o=e.queries.get(n);if(o){const u=o.j_.indexOf(t);u>=0&&(o.j_.splice(u,1),o.j_.length===0?s=t.J_()?0:1:!o.H_()&&t.J_()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Ic(r,t){const e=U(r);let n=!1;for(const s of t){const o=s.query,u=e.queries.get(o);if(u){for(const l of u.j_)l.X_(s)&&(n=!0);u.z_=s}}n&&ci(e)}function Ac(r,t,e){const n=U(r),s=n.queries.get(t);if(s)for(const o of s.j_)o.onError(e);n.queries.delete(t)}function ci(r){r.Y_.forEach(t=>{t.next()})}var jr,Xs;(Xs=jr||(jr={})).ea="default",Xs.Cache="cache";class wc{constructor(t,e,n){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new me(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const n=e!=="Offline";return(!this.options._a||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=me.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==jr.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(t){this.key=t}}class na{constructor(t){this.key=t}}class Rc{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=q(),this.mutatedKeys=q(),this.Aa=bo(t),this.Ra=new he(this.Aa)}get Va(){return this.Ta}ma(t,e){const n=e?e.fa:new Qs,s=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,u=s,l=!1;const d=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((_,w)=>{const R=s.get(_),P=zn(this.query,w)?w:null,N=!!R&&this.mutatedKeys.has(R.key),M=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let D=!1;R&&P?R.data.isEqual(P.data)?N!==M&&(n.track({type:3,doc:P}),D=!0):this.ga(R,P)||(n.track({type:2,doc:P}),D=!0,(d&&this.Aa(P,d)>0||f&&this.Aa(P,f)<0)&&(l=!0)):!R&&P?(n.track({type:0,doc:P}),D=!0):R&&!P&&(n.track({type:1,doc:R}),D=!0,(d||f)&&(l=!0)),D&&(P?(u=u.add(P),o=M?o.add(_):o.delete(_)):(u=u.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),o=o.delete(_.key),n.track({type:1,doc:_})}return{Ra:u,fa:n,ns:l,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const u=t.fa.G_();u.sort((_,w)=>function(P,N){const M=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return M(P)-M(N)}(_.type,w.type)||this.Aa(_.doc,w.doc)),this.pa(n),s=s!=null&&s;const l=e&&!s?this.ya():[],d=this.da.size===0&&this.current&&!s?1:0,f=d!==this.Ea;return this.Ea=d,u.length!==0||f?{snapshot:new me(this.query,t.Ra,o,u,t.mutatedKeys,d===0,f,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Qs,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=q(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const e=[];return t.forEach(n=>{this.da.has(n)||e.push(new na(n))}),this.da.forEach(n=>{t.has(n)||e.push(new ea(n))}),e}ba(t){this.Ta=t.Ts,this.da=q();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return me.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Cc{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Sc{constructor(t){this.key=t,this.va=!1}}class Pc{constructor(t,e,n,s,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Ca={},this.Fa=new Ee(l=>Vo(l),$n),this.Ma=new Map,this.xa=new Set,this.Oa=new J(O.comparator),this.Na=new Map,this.La=new ri,this.Ba={},this.ka=new Map,this.qa=ge.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Vc(r,t,e=!0){const n=aa(r);let s;const o=n.Fa.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Da()):s=await ra(n,t,e,!0),s}async function bc(r,t){const e=aa(r);await ra(e,t,!0,!1)}async function ra(r,t,e,n){const s=await ec(r.localStore,At(t)),o=s.targetId,u=e?r.sharedClientState.addLocalQueryTarget(o):"not-current";let l;return n&&(l=await Dc(r,t,o,u==="current",s.resumeToken)),r.isPrimaryClient&&e&&Yo(r.remoteStore,s),l}async function Dc(r,t,e,n,s){r.Ka=(w,R,P)=>async function(M,D,X,G){let H=D.view.ma(X);H.ns&&(H=await $s(M.localStore,D.query,!1).then(({documents:v})=>D.view.ma(v,H)));const nt=G&&G.targetChanges.get(D.targetId),Ct=G&&G.targetMismatches.get(D.targetId)!=null,it=D.view.applyChanges(H,M.isPrimaryClient,nt,Ct);return Js(M,D.targetId,it.wa),it.snapshot}(r,w,R,P);const o=await $s(r.localStore,t,!0),u=new Rc(t,o.Ts),l=u.ma(o.documents),d=en.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),f=u.applyChanges(l,r.isPrimaryClient,d);Js(r,e,f.wa);const _=new Cc(t,e,u);return r.Fa.set(t,_),r.Ma.has(e)?r.Ma.get(e).push(t):r.Ma.set(e,[t]),f.snapshot}async function Nc(r,t,e){const n=U(r),s=n.Fa.get(t),o=n.Ma.get(s.targetId);if(o.length>1)return n.Ma.set(s.targetId,o.filter(u=>!$n(u,t))),void n.Fa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await qr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),e&&oi(n.remoteStore,s.targetId),$r(n,s.targetId)}).catch(Hr)):($r(n,s.targetId),await qr(n.localStore,s.targetId,!0))}async function kc(r,t){const e=U(r),n=e.Fa.get(t),s=e.Ma.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),oi(e.remoteStore,n.targetId))}async function ia(r,t){const e=U(r);try{const n=await Zl(e.localStore,t);t.targetChanges.forEach((s,o)=>{const u=e.Na.get(o);u&&(tt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?u.va=!0:s.modifiedDocuments.size>0?tt(u.va):s.removedDocuments.size>0&&(tt(u.va),u.va=!1))}),await oa(e,n,t)}catch(n){await Hr(n)}}function Ys(r,t,e){const n=U(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.Fa.forEach((o,u)=>{const l=u.view.Z_(t);l.snapshot&&s.push(l.snapshot)}),function(u,l){const d=U(u);d.onlineState=l;let f=!1;d.queries.forEach((_,w)=>{for(const R of w.j_)R.Z_(l)&&(f=!0)}),f&&ci(d)}(n.eventManager,t),s.length&&n.Ca.d_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function Oc(r,t,e){const n=U(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Na.get(t),o=s&&s.key;if(o){let u=new J(O.comparator);u=u.insert(o,gt.newNoDocument(o,x.min()));const l=q().add(o),d=new Hn(x.min(),new Map,new J($),u,l);await ia(n,d),n.Oa=n.Oa.remove(o),n.Na.delete(t),di(n)}else await qr(n.localStore,t,!1).then(()=>$r(n,t,e)).catch(Hr)}function $r(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Ma.get(t))r.Fa.delete(n),e&&r.Ca.$a(n,e);r.Ma.delete(t),r.isPrimaryClient&&r.La.gr(t).forEach(n=>{r.La.containsKey(n)||sa(r,n)})}function sa(r,t){r.xa.delete(t.path.canonicalString());const e=r.Oa.get(t);e!==null&&(oi(r.remoteStore,e),r.Oa=r.Oa.remove(t),r.Na.delete(e),di(r))}function Js(r,t,e){for(const n of e)n instanceof ea?(r.La.addReference(n.key,t),xc(r,n)):n instanceof na?(b("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,t),r.La.containsKey(n.key)||sa(r,n.key)):L()}function xc(r,t){const e=t.key,n=e.path.canonicalString();r.Oa.get(e)||r.xa.has(n)||(b("SyncEngine","New document in limbo: "+e),r.xa.add(n),di(r))}function di(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const t=r.xa.values().next().value;r.xa.delete(t);const e=new O(W.fromString(t)),n=r.qa.next();r.Na.set(n,new Sc(e)),r.Oa=r.Oa.insert(e,n),Yo(r.remoteStore,new Lt(At(Po(e.path)),n,"TargetPurposeLimboResolution",Qr.oe))}}async function oa(r,t,e){const n=U(r),s=[],o=[],u=[];n.Fa.isEmpty()||(n.Fa.forEach((l,d)=>{u.push(n.Ka(d,t,e).then(f=>{var _;if((f||e)&&n.isPrimaryClient){const w=f?!f.fromCache:(_=e==null?void 0:e.targetChanges.get(d.targetId))===null||_===void 0?void 0:_.current;n.sharedClientState.updateQueryState(d.targetId,w?"current":"not-current")}if(f){s.push(f);const w=si.Wi(d.targetId,f);o.push(w)}}))}),await Promise.all(u),n.Ca.d_(s),await async function(d,f){const _=U(d);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>C.forEach(f,R=>C.forEach(R.$i,P=>_.persistence.referenceDelegate.addReference(w,R.targetId,P)).next(()=>C.forEach(R.Ui,P=>_.persistence.referenceDelegate.removeReference(w,R.targetId,P)))))}catch(w){if(!tn(w))throw w;b("LocalStore","Failed to update sequence numbers: "+w)}for(const w of f){const R=w.targetId;if(!w.fromCache){const P=_.os.get(R),N=P.snapshotVersion,M=P.withLastLimboFreeSnapshotVersion(N);_.os=_.os.insert(R,M)}}}(n.localStore,o))}async function Mc(r,t){const e=U(r);if(!e.currentUser.isEqual(t)){b("SyncEngine","User change. New user:",t.toKey());const n=await Ho(e.localStore,t);e.currentUser=t,function(o,u){o.ka.forEach(l=>{l.forEach(d=>{d.reject(new k(V.CANCELLED,u))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await oa(e,n.hs)}}function Lc(r,t){const e=U(r),n=e.Na.get(t);if(n&&n.va)return q().add(n.key);{let s=q();const o=e.Ma.get(t);if(!o)return s;for(const u of o){const l=e.Fa.get(u);s=s.unionWith(l.view.Va)}return s}}function aa(r){const t=U(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=ia.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Lc.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Oc.bind(null,t),t.Ca.d_=Ic.bind(null,t.eventManager),t.Ca.$a=Ac.bind(null,t.eventManager),t}class Zs{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Wo(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Jl(this.persistence,new Xl,t.initialUser,this.serializer)}createPersistence(t){return new Hl(ii.Zr,this.serializer)}createSharedClientState(t){return new rc}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Fc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Ys(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Mc.bind(null,this.syncEngine),await _c(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Ec}()}createDatastore(t){const e=Wo(t.databaseInfo.databaseId),n=function(o){return new ac(o)}(t.databaseInfo);return function(o,u,l,d){return new lc(o,u,l,d)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,s,o,u,l){return new dc(n,s,o,u,l)}(this.localStore,this.datastore,t.asyncQueue,e=>Ys(this.syncEngine,e,0),function(){return Ks.D()?new Ks:new ic}())}createSyncEngine(t,e){return function(s,o,u,l,d,f,_){const w=new Pc(s,o,u,l,d,f);return _&&(w.Qa=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=U(s);b("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await nn(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}/**
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
 */class Uc{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ga(this.observer.next,t)}error(t){this.observer.error?this.Ga(this.observer.error,t):Dt("Uncaught Error in snapshot listener:",t.toString())}za(){this.muted=!0}Ga(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=pt.UNAUTHENTICATED,this.clientId=wh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async o=>{b("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(b("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new k(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=ta(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Rr(r,t){r.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Ho(t.localStore,s),n=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function to(r,t){r.asyncQueue.verifyOperationInProgress();const e=await jc(r);b("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>Hs(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>Hs(t.remoteStore,s)),r._onlineComponents=t}function qc(r){return r.name==="FirebaseError"?r.code===V.FAILED_PRECONDITION||r.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}async function jc(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){b("FirestoreClient","Using user provided OfflineComponentProvider");try{await Rr(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!qc(e))throw e;ce("Error using user provided cache. Falling back to memory cache: "+e),await Rr(r,new Zs)}}else b("FirestoreClient","Using default OfflineComponentProvider"),await Rr(r,new Zs);return r._offlineComponents}async function $c(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(b("FirestoreClient","Using user provided OnlineComponentProvider"),await to(r,r._uninitializedComponentsProvider._online)):(b("FirestoreClient","Using default OnlineComponentProvider"),await to(r,new Fc))),r._onlineComponents}async function zc(r){const t=await $c(r),e=t.eventManager;return e.onListen=Vc.bind(null,t.syncEngine),e.onUnlisten=Nc.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=bc.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=kc.bind(null,t.syncEngine),e}function Kc(r,t,e={}){const n=new Wt;return r.asyncQueue.enqueueAndForget(async()=>function(o,u,l,d,f){const _=new Uc({next:R=>{u.enqueueAndForget(()=>Tc(o,w)),R.fromCache&&d.source==="server"?f.reject(new k(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(R)},error:R=>f.reject(R)}),w=new wc(l,_,{includeMetadataChanges:!0,_a:!0});return vc(o,w)}(await zc(r),r.asyncQueue,t,e,n)),n.promise}/**
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
 */function ua(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const eo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(r,t,e){if(!e)throw new k(V.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Hc(r,t,e,n){if(t===!0&&n===!0)throw new k(V.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function no(r){if(O.isDocumentKey(r))throw new k(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Qc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":L()}function zr(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new k(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Qc(r);throw new k(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
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
 */class ro{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new k(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new k(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Hc("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ua((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new k(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new k(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new k(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class fi{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ro({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new k(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new k(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ro(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new mh;switch(n.type){case"firstParty":return new vh(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new k(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=eo.get(e);n&&(b("ComponentProvider","Removing Datastore"),eo.delete(e),n.terminate())}(this),Promise.resolve()}}function Wc(r,t,e,n={}){var s;const o=(r=zr(r,fi))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&ce("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),n.mockUserToken){let l,d;if(typeof n.mockUserToken=="string")l=n.mockUserToken,d=pt.MOCK_USER;else{l=au(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const f=n.mockUserToken.sub||n.mockUserToken.user_id;if(!f)throw new k(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new pt(f)}r._authCredentials=new _h(new vo(l,d))}}/**
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
 */class Wn{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Wn(this.firestore,t,this._query)}}class Te{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new le(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Te(this.firestore,t,this._key)}}class le extends Wn{constructor(t,e,n){super(t,e,Po(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Te(this.firestore,null,new O(t))}withConverter(t){return new le(this.firestore,t,this._path)}}function gd(r,t,...e){if(r=mu(r),Gc("collection","path",t),r instanceof fi){const n=W.fromString(t,...e);return no(n),new le(r,null,n)}{if(!(r instanceof Te||r instanceof le))throw new k(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(W.fromString(t,...e));return no(n),new le(r.firestore,null,n)}}/**
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
 */class Xc{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new Xo(this,"async_queue_retry"),this.Eu=()=>{const e=wr();e&&b("AsyncQueue","Visibility state changed to "+e.visibilityState),this.t_.jo()};const t=wr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.du(),this.Au(t)}enterRestrictedMode(t){if(!this.cu){this.cu=!0,this.Iu=t||!1;const e=wr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Eu)}}enqueue(t){if(this.du(),this.cu)return new Promise(()=>{});const e=new Wt;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.uu.push(t),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(t){if(!tn(t))throw t;b("AsyncQueue","Operation failed with retryable error: "+t)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(t){const e=this.au.then(()=>(this.Pu=!0,t().catch(n=>{this.hu=n,this.Pu=!1;const s=function(u){let l=u.message||"";return u.stack&&(l=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),l}(n);throw Dt("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.Pu=!1,n))));return this.au=e,e}enqueueAfterDelay(t,e,n){this.du(),this.Tu.indexOf(t)>-1&&(e=0);const s=li.createAndSchedule(this,t,e,n,o=>this.Vu(o));return this.lu.push(s),s}du(){this.hu&&L()}verifyOperationInProgress(){}async mu(){let t;do t=this.au,await t;while(t!==this.au)}fu(t){for(const e of this.lu)if(e.timerId===t)return!0;return!1}gu(t){return this.mu().then(()=>{this.lu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.lu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.mu()})}pu(t){this.Tu.push(t)}Vu(t){const e=this.lu.indexOf(t);this.lu.splice(e,1)}}class ha extends fi{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=function(){return new Xc}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||la(this),this._firestoreClient.terminate()}}function md(r,t){const e=typeof r=="object"?r:oh(),n=typeof r=="string"?r:"(default)",s=eh(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const o=su("firestore");o&&Wc(s,...o)}return s}function Yc(r){return r._firestoreClient||la(r),r._firestoreClient.verifyNotTerminated(),r._firestoreClient}function la(r){var t,e,n;const s=r._freezeSettings(),o=function(l,d,f,_){return new Oh(l,d,f,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,ua(_.experimentalLongPollingOptions),_.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,s);r._firestoreClient=new Bc(r._authCredentials,r._appCheckCredentials,r._queue,o),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Un{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Un(ut.fromBase64String(t))}catch(e){throw new k(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Un(ut.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class ca{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return $(this._lat,t._lat)||$(this._long,t._long)}}/**
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
 */class Zc{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,s){if(n.length!==s.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==s[o])return!1;return!0}(this._values,t._values)}}const td=new RegExp("[~\\*/\\[\\]]");function ed(r,t,e){if(t.search(td)>=0)throw io(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r);try{return new ca(...t.split("."))._internalPath}catch{throw io(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r)}}function io(r,t,e,n,s){let o=`Function ${t}() called with invalid data`;o+=". ";let u="";return new k(V.INVALID_ARGUMENT,o+r+u)}/**
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
 */class da{constructor(t,e,n,s,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Te(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new nd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(fa("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class nd extends da{data(){return super.data()}}function fa(r,t){return typeof t=="string"?ed(r,t):t instanceof ca?t._internalPath:t._delegate._internalPath}/**
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
 */function rd(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new k(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class id{convertValue(t,e="none"){switch(Zt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Y(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Jt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw L()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return qn(t,(s,o)=>{n[s]=this.convertValue(o,e)}),n}convertVectorValue(t){var e,n,s;const o=(s=(n=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(u=>Y(u.doubleValue));return new Zc(o)}convertGeoPoint(t){return new Jc(Y(t.latitude),Y(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Xr(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Ye(t));default:return null}}convertTimestamp(t){const e=Bt(t);return new Et(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=W.fromString(t);tt(Go(n));const s=new Je(n.get(1),n.get(3)),o=new O(n.popFirst(5));return s.isEqual(e)||Dt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */class Sn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class sd extends da{constructor(t,e,n,s,o,u){super(t,e,n,s,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Dn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(fa("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Dn extends sd{data(t={}){return super.data(t)}}class od{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Sn(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Dn(this._firestore,this._userDataWriter,n.key,n,new Sn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new k(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map(l=>{const d=new Dn(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Sn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:d,oldIndex:-1,newIndex:u++}})}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const d=new Dn(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Sn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,_=-1;return l.type!==0&&(f=u.indexOf(l.doc.key),u=u.delete(l.doc.key)),l.type!==1&&(u=u.add(l.doc),_=u.indexOf(l.doc.key)),{type:ad(l.type),doc:d,oldIndex:f,newIndex:_}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function ad(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}class ud extends id{constructor(t){super(),this.firestore=t}convertBytes(t){return new Un(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Te(this.firestore,null,e)}}function _d(r){r=zr(r,Wn);const t=zr(r.firestore,ha),e=Yc(t),n=new ud(t);return rd(r._query),Kc(e,r._query).then(s=>new od(t,n,r,s))}(function(t,e=!0){(function(s){ye=s})(ih),On(new Qe("firestore",(n,{instanceIdentifier:s,options:o})=>{const u=n.getProvider("app").getImmediate(),l=new ha(new yh(n.getProvider("auth-internal")),new Ih(n.getProvider("app-check-internal")),function(f,_){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new k(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Je(f.options.projectId,_)}(u,s),u);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),ae(Is,"4.7.1",t),ae(Is,"4.7.1","esm2017")})();var hd="firebase",ld="10.13.1";/**
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
 */ae(hd,ld,"app");export{_d as a,gd as c,md as g,sh as i};
