(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[271],{3324:(e,r,t)=>{Promise.resolve().then(t.bind(t,3885))},3885:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>_});var s=t(5155),a=t(5565),n=t(2115),i=t(6046),o=t(5828);let l=(0,o.createServerReference)("60400c7a2bc6afa159c0e722f96bab521d7928d56f",o.callServer,void 0,o.findSourceMapURL,"signUp");var d=t(4085),c=t(2336),u=t(5785),m=t(814),p=t(9677),f=t(8173),g=t.n(f),h=t(3950),x=t(7401);let v=(0,x.A)("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),y=(0,x.A)("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);function b(){let e=(0,i.useRouter)(),[r,t]=(0,n.useState)(!1),[a,o]=(0,n.useState)(null),[f,x]=(0,n.useState)(null),b=()=>new Promise(e=>setTimeout(()=>e({name:"Sonner"}),2e3)),w=async r=>{r.preventDefault(),t(!0),o(null),x(null);let s=new FormData(r.currentTarget),a=s.get("email"),n=s.get("password");if(!a||!n){m.oR.error("Please fill in all fields"),t(!1);return}try{let r=await l(a,n);r.error?m.oR.error(r.error):(m.oR.success("Account created successfully."),setTimeout(()=>m.oR.promise(b,{loading:" Redirecting to login...",success:e=>"".concat(e.name," toast has been added"),error:"Error"}),1e3),setTimeout(()=>e.push("/login"),2e3))}catch(e){m.oR.error("An unexpected error occurred. Please try again.")}finally{t(!1)}};return(0,s.jsx)("div",{className:"mt-20",children:(0,s.jsxs)("div",{className:"mx-auto max-w-sm",children:[(0,s.jsxs)(p.Fc,{className:"mt-24",children:[(0,s.jsx)(h.A,{className:"h-4 w-4"}),(0,s.jsx)(p.XL,{children:"Heads up!"}),(0,s.jsx)(p.TN,{children:"Website is still under development. Apologize for any inconvenience."})]}),(0,s.jsxs)("div",{className:"text-center py-12",children:[(0,s.jsx)("h1",{className:"text-3xl font-bold",children:"Sign Up"}),(0,s.jsx)("p",{className:"text-balance text-muted-foreground",children:"Enter your information to create an account"})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("form",{onSubmit:w,className:"space-y-4",children:[(0,s.jsxs)("div",{className:"grid gap-2",children:[(0,s.jsx)(u.J,{htmlFor:"email",children:"Email"}),(0,s.jsx)(c.p,{id:"email",type:"email",name:"email",placeholder:"Enter your email",required:!0,className:"bg-white"})]}),(0,s.jsxs)("div",{className:"grid gap-2",children:[(0,s.jsx)(u.J,{htmlFor:"password",children:"Password"}),(0,s.jsx)(c.p,{id:"password",type:"password",name:"password",placeholder:"Create a password",required:!0,minLength:6,className:"bg-white"})]}),(0,s.jsx)(d.$,{type:"submit",disabled:r,className:"w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105",children:r?"Signing up...":"Sign Up"}),a&&(0,s.jsxs)("div",{className:"flex items-center space-x-2 text-red-600 bg-red-100 p-3 rounded-md",children:[(0,s.jsx)(v,{size:20}),(0,s.jsx)("span",{children:a})]}),f&&(0,s.jsxs)("div",{className:"flex items-center space-x-2 text-green-600 bg-green-100 p-3 rounded-md",children:[(0,s.jsx)(y,{size:20}),(0,s.jsx)("span",{children:f})]})]}),(0,s.jsxs)("div",{className:"mt-4 text-center text-sm",children:["Already have an account?"," ",(0,s.jsx)(g(),{href:"/login",className:"underline",children:"Log In"})]}),(0,s.jsx)("div",{className:"pt-10",children:(0,s.jsxs)("p",{className:"text-center text-[11px] text-muted-foreground",children:["* By signing up, you agree to our"," ",(0,s.jsxs)(g(),{href:"#",target:"_blank",className:"underline hover:text-green-500",children:[" ","Terms of Use"," "]})," ","and acknowledge you've read our"," ",(0,s.jsx)(g(),{href:"#",target:"_blank",className:"underline hover:text-green-500",children:"Privacy Policy"}),". ",(0,s.jsx)("br",{}),"Google's",(0,s.jsxs)(g(),{href:"https://policies.google.com/privacy",target:"_blank",className:"underline hover:text-green-500",children:[" ","Privacy Policy and Terms"," "]})," ","of Service apply."]})})]})]})})}var w=t(1624),j=t(9602),N="undefined"==typeof window,k=n.createContext(void 0),R={setTheme:e=>{},themes:[]},A=()=>{var e;return null!=(e=n.useContext(k))?e:R};let S=e=>{let{...r}=e,{theme:t="system"}=A();return(0,s.jsx)(m.l$,{theme:t,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...r})},_=()=>{let e=(0,i.useRouter)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(S,{richColors:!0,position:"top-center"}),(0,s.jsxs)("div",{className:"relative h-[40rem] flex items-center justify-center p-4",children:[(0,s.jsx)("div",{className:"absolute top-5 left-5",children:(0,s.jsx)(a.default,{src:"https://uploadthing.com/f/3avCIVBvIockvnJbGmwCYVxRvriBtUhFA7MK8OW0dylE3Qqg",alt:"Logo",width:200,height:200,className:"cursor-pointer",onClick:()=>e.push("/")})}),(0,s.jsx)("div",{className:"max-w-md w-full z-10",children:(0,s.jsx)(b,{})}),(0,s.jsx)(w.A,{squares:[[4,4],[5,1],[8,2],[5,3],[5,5],[10,10],[12,15],[17,10],[10,15],[12,11],[7,9],[18,13]],className:(0,j.cn)("[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]","inset-x-0 inset-y-[-20%] h-[60rem] skew-y-12")})]})]})}},9677:(e,r,t)=>{"use strict";t.d(r,{Fc:()=>l,TN:()=>c,XL:()=>d});var s=t(5155),a=t(2115),n=t(1027),i=t(9602);let o=(0,n.F)("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),l=a.forwardRef((e,r)=>{let{className:t,variant:a,...n}=e;return(0,s.jsx)("div",{ref:r,role:"alert",className:(0,i.cn)(o({variant:a}),t),...n})});l.displayName="Alert";let d=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("h5",{ref:r,className:(0,i.cn)("mb-1 font-medium leading-none tracking-tight",t),...a})});d.displayName="AlertTitle";let c=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:(0,i.cn)("text-sm [&_p]:leading-relaxed",t),...a})});c.displayName="AlertDescription"},4085:(e,r,t)=>{"use strict";t.d(r,{$:()=>d});var s=t(5155),a=t(2115),n=t(2317),i=t(1027),o=t(9602);let l=(0,i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef((e,r)=>{let{className:t,variant:a,size:i,asChild:d=!1,...c}=e,u=d?n.DX:"button";return(0,s.jsx)(u,{className:(0,o.cn)(l({variant:a,size:i,className:t})),ref:r,...c})});d.displayName="Button"},1624:(e,r,t)=>{"use strict";t.d(r,{A:()=>i});var s=t(5155),a=t(2115),n=t(9602);let i=function(e){let{width:r=40,height:t=40,x:i=-1,y:o=-1,strokeDasharray:l="0",squares:d,className:c,...u}=e,m=(0,a.useId)();return(0,s.jsxs)("svg",{"aria-hidden":"true",className:(0,n.cn)("pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",c),...u,children:[(0,s.jsx)("defs",{children:(0,s.jsx)("pattern",{id:m,width:r,height:t,patternUnits:"userSpaceOnUse",x:i,y:o,children:(0,s.jsx)("path",{d:"M.5 ".concat(t,"V.5H").concat(r),fill:"none",strokeDasharray:l})})}),(0,s.jsx)("rect",{width:"100%",height:"100%",strokeWidth:0,fill:"url(#".concat(m,")")}),d&&(0,s.jsx)("svg",{x:i,y:o,className:"overflow-visible",children:d.map(e=>{let[a,n]=e;return(0,s.jsx)("rect",{strokeWidth:"0",width:r-1,height:t-1,x:a*r+1,y:n*t+1},"".concat(a,"-").concat(n))})})]})}},2336:(e,r,t)=>{"use strict";t.d(r,{p:()=>i});var s=t(5155),a=t(2115),n=t(9602);let i=a.forwardRef((e,r)=>{let{className:t,type:a,...i}=e;return(0,s.jsx)("input",{type:a,className:(0,n.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:r,...i})});i.displayName="Input"},5785:(e,r,t)=>{"use strict";t.d(r,{J:()=>d});var s=t(5155),a=t(2115),n=t(6195),i=t(1027),o=t(9602);let l=(0,i.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)(n.b,{ref:r,className:(0,o.cn)(l(),t),...a})});d.displayName=n.b.displayName},9602:(e,r,t)=>{"use strict";t.d(r,{cn:()=>n});var s=t(3463),a=t(9795);function n(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,a.QP)((0,s.$)(r))}},7401:(e,r,t)=>{"use strict";t.d(r,{A:()=>l});var s=t(2115);let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),n=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let o=(0,s.forwardRef)((e,r)=>{let{color:t="currentColor",size:a=24,strokeWidth:o=2,absoluteStrokeWidth:l,className:d="",children:c,iconNode:u,...m}=e;return(0,s.createElement)("svg",{ref:r,...i,width:a,height:a,stroke:t,strokeWidth:l?24*Number(o)/Number(a):o,className:n("lucide",d),...m},[...u.map(e=>{let[r,t]=e;return(0,s.createElement)(r,t)}),...Array.isArray(c)?c:[c]])}),l=(e,r)=>{let t=(0,s.forwardRef)((t,i)=>{let{className:l,...d}=t;return(0,s.createElement)(o,{ref:i,iconNode:r,className:n("lucide-".concat(a(e)),l),...d})});return t.displayName="".concat(e),t}},3950:(e,r,t)=>{"use strict";t.d(r,{A:()=>s});let s=(0,t(7401).A)("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]])},5828:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),function(e,r){for(var t in r)Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}(r,{callServer:function(){return s.callServer},createServerReference:function(){return n},findSourceMapURL:function(){return a.findSourceMapURL}});let s=t(9603),a=t(3355),n=t(4979).createServerReference},6195:(e,r,t)=>{"use strict";t.d(r,{b:()=>o});var s=t(2115),a=t(3360),n=t(5155),i=s.forwardRef((e,r)=>(0,n.jsx)(a.sG.label,{...e,ref:r,onMouseDown:r=>{var t;r.target.closest("button, input, select, textarea")||(null===(t=e.onMouseDown)||void 0===t||t.call(e,r),!r.defaultPrevented&&r.detail>1&&r.preventDefault())}}));i.displayName="Label";var o=i},3360:(e,r,t)=>{"use strict";t.d(r,{hO:()=>l,sG:()=>o});var s=t(2115),a=t(7650),n=t(2317),i=t(5155),o=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=s.forwardRef((e,t)=>{let{asChild:s,...a}=e,o=s?n.DX:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(o,{...a,ref:t})});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{});function l(e,r){e&&a.flushSync(()=>e.dispatchEvent(r))}}},e=>{var r=r=>e(e.s=r);e.O(0,[97,173,891,441,517,358],()=>r(3324)),_N_E=e.O()}]);