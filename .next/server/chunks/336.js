"use strict";exports.id=336,exports.ids=[336],exports.modules={31412:(e,t,r)=>{r.d(t,{m:()=>n});function n(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e?.(n),!1===r||!n.defaultPrevented)return t?.(n)}}},39217:(e,t,r)=>{r.d(t,{N:()=>a});var n=r(58009),o=r(6004),u=r(29952),i=r(12705),l=r(45512);function a(e){let t=e+"CollectionProvider",[r,a]=(0,o.A)(t),[c,s]=r(t,{collectionRef:{current:null},itemMap:new Map}),f=e=>{let{scope:t,children:r}=e,o=n.useRef(null),u=n.useRef(new Map).current;return(0,l.jsx)(c,{scope:t,itemMap:u,collectionRef:o,children:r})};f.displayName=t;let d=e+"CollectionSlot",m=n.forwardRef((e,t)=>{let{scope:r,children:n}=e,o=s(d,r),a=(0,u.s)(t,o.collectionRef);return(0,l.jsx)(i.DX,{ref:a,children:n})});m.displayName=d;let p=e+"CollectionItemSlot",v="data-radix-collection-item",y=n.forwardRef((e,t)=>{let{scope:r,children:o,...a}=e,c=n.useRef(null),f=(0,u.s)(t,c),d=s(p,r);return n.useEffect(()=>(d.itemMap.set(c,{ref:c,...a}),()=>void d.itemMap.delete(c))),(0,l.jsx)(i.DX,{[v]:"",ref:f,children:o})});return y.displayName=p,[{Provider:f,Slot:m,ItemSlot:y},function(t){let r=s(e+"CollectionConsumer",t);return n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${v}]`));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},a]}},6004:(e,t,r)=>{r.d(t,{A:()=>i,q:()=>u});var n=r(58009),o=r(45512);function u(e,t){let r=n.createContext(t),u=e=>{let{children:t,...u}=e,i=n.useMemo(()=>u,Object.values(u));return(0,o.jsx)(r.Provider,{value:i,children:t})};return u.displayName=e+"Provider",[u,function(o){let u=n.useContext(r);if(u)return u;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function i(e,t=[]){let r=[],u=()=>{let t=r.map(e=>n.createContext(e));return function(r){let o=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:o}}),[r,o])}};return u.scopeName=e,[function(t,u){let i=n.createContext(u),l=r.length;r=[...r,u];let a=t=>{let{scope:r,children:u,...a}=t,c=r?.[e]?.[l]||i,s=n.useMemo(()=>a,Object.values(a));return(0,o.jsx)(c.Provider,{value:s,children:u})};return a.displayName=t+"Provider",[a,function(r,o){let a=o?.[e]?.[l]||i,c=n.useContext(a);if(c)return c;if(void 0!==u)return u;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e)[`__scope${n}`];return{...t,...o}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return r.scopeName=t.scopeName,r}(u,...t)]}},80707:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(58009),o=r(55740),u=r(30830),i=r(49397),l=r(45512),a=n.forwardRef((e,t)=>{let{container:r,...a}=e,[c,s]=n.useState(!1);(0,i.N)(()=>s(!0),[]);let f=r||c&&globalThis?.document?.body;return f?o.createPortal((0,l.jsx)(u.sG.div,{...a,ref:t}),f):null});a.displayName="Portal"},98060:(e,t,r)=>{r.d(t,{C:()=>i});var n=r(58009),o=r(29952),u=r(49397),i=e=>{let{present:t,children:r}=e,i=function(e){var t,r;let[o,i]=n.useState(),a=n.useRef({}),c=n.useRef(e),s=n.useRef("none"),[f,d]=(t=e?"mounted":"unmounted",r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},n.useReducer((e,t)=>r[e][t]??e,t));return n.useEffect(()=>{let e=l(a.current);s.current="mounted"===f?e:"none"},[f]),(0,u.N)(()=>{let t=a.current,r=c.current;if(r!==e){let n=s.current,o=l(t);e?d("MOUNT"):"none"===o||t?.display==="none"?d("UNMOUNT"):r&&n!==o?d("ANIMATION_OUT"):d("UNMOUNT"),c.current=e}},[e,d]),(0,u.N)(()=>{if(o){let e;let t=o.ownerDocument.defaultView??window,r=r=>{let n=l(a.current).includes(r.animationName);if(r.target===o&&n&&(d("ANIMATION_END"),!c.current)){let r=o.style.animationFillMode;o.style.animationFillMode="forwards",e=t.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=r)})}},n=e=>{e.target===o&&(s.current=l(a.current))};return o.addEventListener("animationstart",n),o.addEventListener("animationcancel",r),o.addEventListener("animationend",r),()=>{t.clearTimeout(e),o.removeEventListener("animationstart",n),o.removeEventListener("animationcancel",r),o.removeEventListener("animationend",r)}}d("ANIMATION_END")},[o,d]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:n.useCallback(e=>{e&&(a.current=getComputedStyle(e)),i(e)},[])}}(t),a="function"==typeof r?r({present:i.isPresent}):n.Children.only(r),c=(0,o.s)(i.ref,function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(a));return"function"==typeof r||i.isPresent?n.cloneElement(a,{ref:c}):null};function l(e){return e?.animationName||"none"}i.displayName="Presence"},30830:(e,t,r)=>{r.d(t,{hO:()=>a,sG:()=>l});var n=r(58009),o=r(55740),u=r(12705),i=r(45512),l=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=n.forwardRef((e,r)=>{let{asChild:n,...o}=e,l=n?u.DX:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(l,{...o,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function a(e,t){e&&o.flushSync(()=>e.dispatchEvent(t))}},92828:(e,t,r)=>{r.d(t,{c:()=>o});var n=r(58009);function o(e){let t=n.useRef(e);return n.useEffect(()=>{t.current=e}),n.useMemo(()=>(...e)=>t.current?.(...e),[])}},13024:(e,t,r)=>{r.d(t,{i:()=>u});var n=r(58009),o=r(92828);function u({prop:e,defaultProp:t,onChange:r=()=>{}}){let[u,i]=function({defaultProp:e,onChange:t}){let r=n.useState(e),[u]=r,i=n.useRef(u),l=(0,o.c)(t);return n.useEffect(()=>{i.current!==u&&(l(u),i.current=u)},[u,i,l]),r}({defaultProp:t,onChange:r}),l=void 0!==e,a=l?e:u,c=(0,o.c)(r);return[a,n.useCallback(t=>{if(l){let r="function"==typeof t?t(e):t;r!==e&&c(r)}else i(t)},[l,e,i,c])]}},99850:(e,t,r)=>{r.d(t,{U:()=>u});var n=r(58009),o=r(92828);function u(e,t=globalThis?.document){let r=(0,o.c)(e);n.useEffect(()=>{let e=e=>{"Escape"===e.key&&r(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[r,t])}},49397:(e,t,r)=>{r.d(t,{N:()=>o});var n=r(58009),o=globalThis?.document?n.useLayoutEffect:()=>{}},97412:(e,t,r)=>{r.d(t,{Cl:()=>n,Tt:()=>o,fX:()=>u});var n=function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r}function u(e,t,r){if(r||2==arguments.length)for(var n,o=0,u=t.length;o<u;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError}};