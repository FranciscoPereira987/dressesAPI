function N(){}const nt=t=>t;function q(t,e){for(const n in e)t[n]=e[n];return t}function T(t){return t()}function rt(){return Object.create(null)}function B(t){t.forEach(T)}function L(t){return typeof t=="function"}function it(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let m;function ct(t,e){return t===e?!0:(m||(m=document.createElement("a")),m.href=e,t===m.href)}function lt(t){return Object.keys(t).length===0}function M(t,...e){if(t==null){for(const r of e)r(void 0);return N}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function st(t,e,n){t.$$.on_destroy.push(M(e,n))}function ot(t,e,n,r){if(t){const i=j(t,e,n,r);return t[0](i)}}function j(t,e,n,r){return t[1]&&r?q(n.ctx.slice(),t[1](r(e))):n.ctx}function ut(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const o=[],c=Math.max(e.dirty.length,i.length);for(let s=0;s<c;s+=1)o[s]=e.dirty[s]|i[s];return o}return e.dirty|i}return e.dirty}function at(t,e,n,r,i,o){if(i){const c=j(e,n,r,o);t.p(c,i)}}function ft(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function _t(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function dt(t,e){const n={};e=new Set(e);for(const r in t)!e.has(r)&&r[0]!=="$"&&(n[r]=t[r]);return n}function ht(t){const e={};for(const n in t)e[n]=!0;return e}function mt(t){return t&&L(t.destroy)?t.destroy:N}let y=!1;function pt(){y=!0}function yt(){y=!1}function I(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&l.push(a)}e=l}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,a=(i>0&&e[n[i]].claim_order<=u?i+1:I(1,i,P=>e[n[P]].claim_order,u))-1;r[l]=n[a]+1;const v=a+1;n[v]=l,i=Math.max(v,i)}const o=[],c=[];let s=e.length-1;for(let l=n[i]+1;l!=0;l=r[l-1]){for(o.push(e[l-1]);s>=l;s--)c.push(e[s]);s--}for(;s>=0;s--)c.push(e[s]);o.reverse(),c.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<c.length;l++){for(;u<o.length&&c[l].claim_order>=o[u].claim_order;)u++;const a=u<o.length?o[u]:null;t.insertBefore(c[l],a)}}function z(t,e){t.appendChild(e)}function F(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function bt(t){const e=A("style");return e.textContent="/* empty */",H(F(t),e),e.sheet}function H(t,e){return z(t.head||t,e),e.sheet}function U(t,e){if(y){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function gt(t,e,n){y&&!n?U(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function xt(t){t.parentNode&&t.parentNode.removeChild(t)}function wt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function A(t){return document.createElement(t)}function W(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function k(t){return document.createTextNode(t)}function kt(){return k(" ")}function vt(){return k("")}function Et(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function C(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const G=["width","height"];function J(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)e[r]==null?t.removeAttribute(r):r==="style"?t.style.cssText=e[r]:r==="__value"?t.value=t[r]=e[r]:n[r]&&n[r].set&&G.indexOf(r)===-1?t[r]=e[r]:C(t,r,e[r])}function K(t,e){Object.keys(e).forEach(n=>{Q(t,n,e[n])})}function Q(t,e,n){const r=e.toLowerCase();r in t?t[r]=typeof t[r]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:C(t,e,n)}function Nt(t){return/-/.test(t)?K:J}function jt(t){return Array.from(t.childNodes)}function V(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,e,n,r,i=!1){V(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,i||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,i?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function S(t,e,n,r){return O(t,i=>i.nodeName===e,i=>{const o=[];for(let c=0;c<i.attributes.length;c++){const s=i.attributes[c];n[s.name]||o.push(s.name)}o.forEach(c=>i.removeAttribute(c))},()=>r(e))}function At(t,e,n){return S(t,e,n,A)}function Ct(t,e,n){return S(t,e,n,W)}function X(t,e){return O(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>k(e),!0)}function Ot(t){return X(t," ")}function St(t,e){e=""+e,t.data!==e&&(t.data=e)}function Dt(t,e){t.value=e??""}function Pt(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Y(t,e,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:r})}function qt(t,e){return new t(e)}let p;function b(t){p=t}function h(){if(!p)throw new Error("Function called outside component initialization");return p}function Tt(t){h().$$.on_mount.push(t)}function Bt(t){h().$$.after_update.push(t)}function Lt(){const t=h();return(e,n,{cancelable:r=!1}={})=>{const i=t.$$.callbacks[e];if(i){const o=Y(e,n,{cancelable:r});return i.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}function Mt(t,e){return h().$$.context.set(t,e),e}function It(t){return h().$$.context.get(t)}function Rt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const d=[],E=[];let _=[];const x=[],D=Promise.resolve();let w=!1;function Z(){w||(w=!0,D.then(tt))}function zt(){return Z(),D}function $(t){_.push(t)}function Ft(t){x.push(t)}const g=new Set;let f=0;function tt(){if(f!==0)return;const t=p;do{try{for(;f<d.length;){const e=d[f];f++,b(e),et(e.$$)}}catch(e){throw d.length=0,f=0,e}for(b(null),d.length=0,f=0;E.length;)E.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];g.has(n)||(g.add(n),n())}_.length=0}while(d.length);for(;x.length;)x.pop()();w=!1,g.clear(),b(t)}function et(t){if(t.fragment!==null){t.update(),B(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach($)}}function Ht(t){const e=[],n=[];_.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),_=e}export{lt as $,dt as A,Mt as B,q as C,_t as D,Nt as E,mt as F,Et as G,L as H,$ as I,B as J,Rt as K,It as L,J as M,ht as N,Dt as O,Ft as P,W as Q,Ct as R,Lt as S,wt as T,ct as U,F as V,bt as W,Y as X,nt as Y,rt as Z,tt as _,kt as a,Ht as a0,p as a1,b as a2,T as a3,d as a4,Z as a5,pt as a6,yt as a7,Bt as b,Ot as c,xt as d,vt as e,A as f,At as g,jt as h,gt as i,C as j,Pt as k,k as l,X as m,St as n,Tt as o,E as p,qt as q,ot as r,it as s,zt as t,at as u,ft as v,ut as w,U as x,N as y,st as z};
