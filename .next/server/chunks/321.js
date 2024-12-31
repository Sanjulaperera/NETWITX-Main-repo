"use strict";exports.id=321,exports.ids=[321],exports.modules={1680:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(8009);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),u=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim();var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=(0,n.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:l="",children:a,iconNode:s,...c},d)=>(0,n.createElement)("svg",{ref:d,...i,width:t,height:t,stroke:e,strokeWidth:o?24*Number(r)/Number(t):r,className:u("lucide",l),...c},[...s.map(([e,t])=>(0,n.createElement)(e,t)),...Array.isArray(a)?a:[a]])),a=(e,t)=>{let r=(0,n.forwardRef)(({className:r,...i},a)=>(0,n.createElement)(l,{ref:a,iconNode:t,className:u(`lucide-${o(e)}`,r),...i}));return r.displayName=`${e}`,r}},4269:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(1680).A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},1412:(e,t,r)=>{r.d(t,{m:()=>n});function n(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e?.(n),!1===r||!n.defaultPrevented)return t?.(n)}}},9217:(e,t,r)=>{r.d(t,{N:()=>a});var n=r(8009),o=r(6004),u=r(9952),i=r(2705),l=r(5512);function a(e){let t=e+"CollectionProvider",[r,a]=(0,o.A)(t),[s,c]=r(t,{collectionRef:{current:null},itemMap:new Map}),d=e=>{let{scope:t,children:r}=e,o=n.useRef(null),u=n.useRef(new Map).current;return(0,l.jsx)(s,{scope:t,itemMap:u,collectionRef:o,children:r})};d.displayName=t;let f=e+"CollectionSlot",m=n.forwardRef((e,t)=>{let{scope:r,children:n}=e,o=c(f,r),a=(0,u.s)(t,o.collectionRef);return(0,l.jsx)(i.DX,{ref:a,children:n})});m.displayName=f;let p=e+"CollectionItemSlot",v="data-radix-collection-item",N=n.forwardRef((e,t)=>{let{scope:r,children:o,...a}=e,s=n.useRef(null),d=(0,u.s)(t,s),f=c(p,r);return n.useEffect(()=>(f.itemMap.set(s,{ref:s,...a}),()=>void f.itemMap.delete(s))),(0,l.jsx)(i.DX,{[v]:"",ref:d,children:o})});return N.displayName=p,[{Provider:d,Slot:m,ItemSlot:N},function(t){let r=c(e+"CollectionConsumer",t);return n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${v}]`));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},a]}},6004:(e,t,r)=>{r.d(t,{A:()=>i,q:()=>u});var n=r(8009),o=r(5512);function u(e,t){let r=n.createContext(t),u=e=>{let{children:t,...u}=e,i=n.useMemo(()=>u,Object.values(u));return(0,o.jsx)(r.Provider,{value:i,children:t})};return u.displayName=e+"Provider",[u,function(o){let u=n.useContext(r);if(u)return u;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function i(e,t=[]){let r=[],u=()=>{let t=r.map(e=>n.createContext(e));return function(r){let o=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:o}}),[r,o])}};return u.scopeName=e,[function(t,u){let i=n.createContext(u),l=r.length;r=[...r,u];let a=t=>{let{scope:r,children:u,...a}=t,s=r?.[e]?.[l]||i,c=n.useMemo(()=>a,Object.values(a));return(0,o.jsx)(s.Provider,{value:c,children:u})};return a.displayName=t+"Provider",[a,function(r,o){let a=o?.[e]?.[l]||i,s=n.useContext(a);if(s)return s;if(void 0!==u)return u;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e)[`__scope${n}`];return{...t,...o}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return r.scopeName=t.scopeName,r}(u,...t)]}},707:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(8009),o=r(5740),u=r(830),i=r(9397),l=r(5512),a=n.forwardRef((e,t)=>{let{container:r,...a}=e,[s,c]=n.useState(!1);(0,i.N)(()=>c(!0),[]);let d=r||s&&globalThis?.document?.body;return d?o.createPortal((0,l.jsx)(u.sG.div,{...a,ref:t}),d):null});a.displayName="Portal"},8060:(e,t,r)=>{r.d(t,{C:()=>i});var n=r(8009),o=r(9952),u=r(9397),i=e=>{let{present:t,children:r}=e,i=function(e){var t,r;let[o,i]=n.useState(),a=n.useRef({}),s=n.useRef(e),c=n.useRef("none"),[d,f]=(t=e?"mounted":"unmounted",r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},n.useReducer((e,t)=>r[e][t]??e,t));return n.useEffect(()=>{let e=l(a.current);c.current="mounted"===d?e:"none"},[d]),(0,u.N)(()=>{let t=a.current,r=s.current;if(r!==e){let n=c.current,o=l(t);e?f("MOUNT"):"none"===o||t?.display==="none"?f("UNMOUNT"):r&&n!==o?f("ANIMATION_OUT"):f("UNMOUNT"),s.current=e}},[e,f]),(0,u.N)(()=>{if(o){let e;let t=o.ownerDocument.defaultView??window,r=r=>{let n=l(a.current).includes(r.animationName);if(r.target===o&&n&&(f("ANIMATION_END"),!s.current)){let r=o.style.animationFillMode;o.style.animationFillMode="forwards",e=t.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=r)})}},n=e=>{e.target===o&&(c.current=l(a.current))};return o.addEventListener("animationstart",n),o.addEventListener("animationcancel",r),o.addEventListener("animationend",r),()=>{t.clearTimeout(e),o.removeEventListener("animationstart",n),o.removeEventListener("animationcancel",r),o.removeEventListener("animationend",r)}}f("ANIMATION_END")},[o,f]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:n.useCallback(e=>{e&&(a.current=getComputedStyle(e)),i(e)},[])}}(t),a="function"==typeof r?r({present:i.isPresent}):n.Children.only(r),s=(0,o.s)(i.ref,function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(a));return"function"==typeof r||i.isPresent?n.cloneElement(a,{ref:s}):null};function l(e){return e?.animationName||"none"}i.displayName="Presence"},830:(e,t,r)=>{r.d(t,{hO:()=>a,sG:()=>l});var n=r(8009),o=r(5740),u=r(2705),i=r(5512),l=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=n.forwardRef((e,r)=>{let{asChild:n,...o}=e,l=n?u.DX:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(l,{...o,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function a(e,t){e&&o.flushSync(()=>e.dispatchEvent(t))}},447:(e,t,r)=>{r.d(t,{c:()=>o});var n=r(8009);function o(e){let t=n.useRef(e);return n.useEffect(()=>{t.current=e}),n.useMemo(()=>(...e)=>t.current?.(...e),[])}},3024:(e,t,r)=>{r.d(t,{i:()=>u});var n=r(8009),o=r(447);function u({prop:e,defaultProp:t,onChange:r=()=>{}}){let[u,i]=function({defaultProp:e,onChange:t}){let r=n.useState(e),[u]=r,i=n.useRef(u),l=(0,o.c)(t);return n.useEffect(()=>{i.current!==u&&(l(u),i.current=u)},[u,i,l]),r}({defaultProp:t,onChange:r}),l=void 0!==e,a=l?e:u,s=(0,o.c)(r);return[a,n.useCallback(t=>{if(l){let r="function"==typeof t?t(e):t;r!==e&&s(r)}else i(t)},[l,e,i,s])]}},9850:(e,t,r)=>{r.d(t,{U:()=>u});var n=r(8009),o=r(447);function u(e,t=globalThis?.document){let r=(0,o.c)(e);n.useEffect(()=>{let e=e=>{"Escape"===e.key&&r(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[r,t])}},9397:(e,t,r)=>{r.d(t,{N:()=>o});var n=r(8009),o=globalThis?.document?n.useLayoutEffect:()=>{}}};