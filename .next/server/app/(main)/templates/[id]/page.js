(()=>{var e={};e.id=423,e.ids=[423],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},550:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,pages:()=>p,routeModule:()=>c,tree:()=>d});var s=r(260),a=r(8203),n=r(5155),i=r.n(n),o=r(7292),l={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=["",{children:["(main)",{children:["templates",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,649)),"/Users/sanjula/Documents/NETWITX-Main-repo/app/(main)/templates/[id]/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,9996)),"/Users/sanjula/Documents/NETWITX-Main-repo/app/(main)/templates/layout.tsx"]}]},{forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,9611)),"/Users/sanjula/Documents/NETWITX-Main-repo/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,1129)),"/Users/sanjula/Documents/NETWITX-Main-repo/app/not-found.tsx"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["/Users/sanjula/Documents/NETWITX-Main-repo/app/(main)/templates/[id]/page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},c=new s.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/(main)/templates/[id]/page",pathname:"/templates/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9224:(e,t,r)=>{Promise.resolve().then(r.bind(r,649))},6072:(e,t,r)=>{Promise.resolve().then(r.bind(r,2623))},2623:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var s=r(5512),a=r(8009),n=r(9334),i=r(7021),o=r(1680);let l=(0,o.A)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),d=(0,o.A)("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]),p=(0,o.A)("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);function u({title:e,onViewChange:t,currentView:r,onBack:a}){return(0,s.jsxs)("header",{className:"flex items-center justify-between p-4 border-b bg-white",children:[(0,s.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,s.jsx)(i.$,{variant:"ghost",size:"icon",onClick:a,children:(0,s.jsx)(l,{className:"h-6 w-6"})}),(0,s.jsx)("h1",{className:"text-xl font-semibold",children:e})]}),(0,s.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,s.jsxs)("div",{className:"flex border rounded-md shadow-sm",children:[(0,s.jsxs)(i.$,{variant:"desktop"===r?"secondary":"ghost",size:"sm",onClick:()=>t("desktop"),className:"rounded-r-none",children:[(0,s.jsx)(d,{className:"h-4 w-4 mr-2"}),"Desktop"]}),(0,s.jsxs)(i.$,{variant:"mobile"===r?"secondary":"ghost",size:"sm",onClick:()=>t("mobile"),className:"rounded-l-none",children:[(0,s.jsx)(p,{className:"h-4 w-4 mr-2"}),"Mobile"]})]}),(0,s.jsx)(i.$,{children:"Make it yours"})]})]})}var c=r(3564);function m({params:e}){let t=(0,n.useRouter)(),r=(0,n.useSearchParams)(),[i,o]=(0,a.useState)("desktop"),[l,d]=(0,a.useState)(null),{id:p}=(0,a.use)(e),m=c.U.find(e=>e.id===parseInt(p)),h=parseInt(r.get("page")||"1",10);return m?(0,s.jsxs)("div",{className:"flex flex-col h-screen",children:[(0,s.jsx)(u,{title:m.title,onBack:()=>t.push(`/templates?page=${h}`),onViewChange:o,currentView:i,currentPage:h}),(0,s.jsx)("div",{className:"flex-grow overflow-hidden p-4 bg-gray-100",children:l?(0,s.jsx)("div",{className:"text-red-500",children:l}):(0,s.jsx)("div",{className:`w-full h-full ${"mobile"===i?"max-w-sm mx-auto":""}`,children:(0,s.jsx)("iframe",{src:m.link,className:"w-full h-full border-2 border-gray-300 rounded-lg bg-white",onError:()=>{d("Failed to load the template preview. Please try again later.")}})})})]}):(0,s.jsx)("div",{className:"p-4",children:"Template not found"})}},649:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/sanjula/Documents/NETWITX-Main-repo/app/(main)/templates/[id]/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/sanjula/Documents/NETWITX-Main-repo/app/(main)/templates/[id]/page.tsx","default")}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,697,267,321,778,459],()=>r(550));module.exports=s})();