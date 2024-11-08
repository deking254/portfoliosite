(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[686],{6798:function(e,r,t){Promise.resolve().then(t.bind(t,4020))},4020:function(e,r,t){"use strict";t.r(r),t.d(r,{ContactForm:function(){return R}});var n=t(3827),i=t(248),s=t(1270),o=t(2670),a=t(5754),l=t(4090),c=t(9143),d=t(1657),u=t(4602);let m=(0,t(9769).j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),f=l.forwardRef((e,r)=>{let{className:t,...i}=e;return(0,n.jsx)(u.f,{ref:r,className:(0,d.cn)(m(),t),...i})});f.displayName=u.f.displayName;let p=o.RV,g=l.createContext({}),x=e=>{let{...r}=e;return(0,n.jsx)(g.Provider,{value:{name:r.name},children:(0,n.jsx)(o.Qr,{...r})})},h=()=>{let e=l.useContext(g),r=l.useContext(b),{getFieldState:t,formState:n}=(0,o.Gc)(),i=t(e.name,n);if(!e)throw Error("useFormField should be used within <FormField>");let{id:s}=r;return{id:s,name:e.name,formItemId:"".concat(s,"-form-item"),formDescriptionId:"".concat(s,"-form-item-description"),formMessageId:"".concat(s,"-form-item-message"),...i}},b=l.createContext({}),v=l.forwardRef((e,r)=>{let{className:t,...i}=e,s=l.useId();return(0,n.jsx)(b.Provider,{value:{id:s},children:(0,n.jsx)("div",{ref:r,className:(0,d.cn)("space-y-2",t),...i})})});v.displayName="FormItem";let j=l.forwardRef((e,r)=>{let{className:t,...i}=e,{error:s,formItemId:o}=h();return(0,n.jsx)(f,{ref:r,className:(0,d.cn)(s&&"text-destructive",t),htmlFor:o,...i})});j.displayName="FormLabel";let y=l.forwardRef((e,r)=>{let{...t}=e,{error:i,formItemId:s,formDescriptionId:o,formMessageId:a}=h();return(0,n.jsx)(c.g7,{ref:r,id:s,"aria-describedby":i?"".concat(o," ").concat(a):"".concat(o),"aria-invalid":!!i,...t})});y.displayName="FormControl",l.forwardRef((e,r)=>{let{className:t,...i}=e,{formDescriptionId:s}=h();return(0,n.jsx)("p",{ref:r,id:s,className:(0,d.cn)("text-sm text-muted-foreground",t),...i})}).displayName="FormDescription";let w=l.forwardRef((e,r)=>{let{className:t,children:i,...s}=e,{error:o,formMessageId:a}=h(),l=o?String(null==o?void 0:o.message):i;return l?(0,n.jsx)("p",{ref:r,id:a,className:(0,d.cn)("text-sm font-medium text-destructive",t),...s,children:l}):null});w.displayName="FormMessage";let Z=l.forwardRef((e,r)=>{let{className:t,type:i,...s}=e;return(0,n.jsx)("input",{type:i,className:(0,d.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...s})});Z.displayName="Input";let k=l.forwardRef((e,r)=>{let{className:t,...i}=e;return(0,n.jsx)("textarea",{className:(0,d.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...i})});k.displayName="Textarea";var N=t(2788),z=t(9672);let F=i.Ry({name:i.Z_().min(3,{message:"Name must contain at least 3 characters."}),email:i.Z_().email("Please enter a valid email."),message:i.Z_().min(10,{message:"Please write something more descriptive."}),social:i.Z_().url().optional().or(i.i0(""))});function R(){let e=(0,N.a)(),r=(0,o.cI)({resolver:(0,s.F)(F),defaultValues:{name:"",email:"",message:"",social:""}});async function t(t){try{let n=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});r.reset(),200===n.status&&e.onOpen({title:"Thankyou!",description:"Your message has been received! I appreciate your contact and will get back to you shortly.",icon:z.P.successAnimated})}catch(e){console.log("Err!",e)}}return(0,n.jsx)(p,{...r,children:(0,n.jsxs)("form",{onSubmit:r.handleSubmit(t),className:"space-y-8 min-w-full",children:[(0,n.jsx)(x,{control:r.control,name:"name",render:e=>{let{field:r}=e;return(0,n.jsxs)(v,{children:[(0,n.jsx)(j,{children:"Name"}),(0,n.jsx)(y,{children:(0,n.jsx)(Z,{placeholder:"Enter your name",...r})}),(0,n.jsx)(w,{})]})}}),(0,n.jsx)(x,{control:r.control,name:"email",render:e=>{let{field:r}=e;return(0,n.jsxs)(v,{children:[(0,n.jsx)(j,{children:"Email"}),(0,n.jsx)(y,{children:(0,n.jsx)(Z,{placeholder:"Enter your email",...r})}),(0,n.jsx)(w,{})]})}}),(0,n.jsx)(x,{control:r.control,name:"message",render:e=>{let{field:r}=e;return(0,n.jsxs)(v,{children:[(0,n.jsx)(j,{children:"Message"}),(0,n.jsx)(y,{children:(0,n.jsx)(k,{placeholder:"Enter your message",...r})}),(0,n.jsx)(w,{})]})}}),(0,n.jsx)(x,{control:r.control,name:"social",render:e=>{let{field:r}=e;return(0,n.jsxs)(v,{children:[(0,n.jsx)(j,{children:"Social (optional)"}),(0,n.jsx)(y,{children:(0,n.jsx)(Z,{placeholder:"Link for social account",...r})}),(0,n.jsx)(w,{})]})}}),(0,n.jsx)(a.z,{type:"submit",children:"Submit"})]})})}},9672:function(e,r,t){"use strict";t.d(r,{P:function(){return S}});var n=t(3827),i=t(798),s=t(8873),o=t(976),a=t(3253),l=t(8602),c=t(272),d=t(9522),u=t(4184),m=t(4802),f=t(9795),p=t(6218),g=t(588),x=t(4116),h=t(2915),b=t(5073),v=t(6185),j=t(3647),y=t(1303),w=t(2677),Z=t(7376),k=t(3688),N=t(1829),z=t(4302),F=t(5536),R=t(819),C=t(5462),E=t(6773),_=t(6291),I=t(8904),M=t(6977),O=t(2816),P=t(6344);let S={contact:l.Z,gitRepoIcon:c.Z,gitOrgBuilding:d.Z,gitBranch:P.lS4,close:u.Z,spinner:m.Z,chevronLeft:f.Z,chevronRight:p.Z,trash:g.Z,post:x.Z,page:h.Z,media:b.Z,settings:v.Z,billing:j.Z,ellipsis:y.Z,add:w.Z,warning:Z.Z,user:k.Z,arrowRight:N.Z,help:z.Z,pizza:F.Z,sun:R.Z,moon:C.Z,laptop:E.Z,menu:_.Z,chevronDown:I.Z,laughEmoji:i.z_D,check:M.Z,infoMark:s.Hfo,questionMark:s.kjE,link:a.iDf,externalLink:a.Hi9,star:o.pHD,amazonaws:O.Kt8,angular:O.eAz,bootstrap:O.BpA,css3:O.H5g,express:O.AmJ,graphql:O.dMV,html5:O.PSn,javascript:O.vl3,mongodb:O.t$b,mui:O.zDz,mysql:O.uJt,nestjs:O.EYG,netlify:O.Bg,nextjs:O.Xou,nodejs:O.uds,react:O.pNp,redux:O.PoL,socketio:O.Ya_,tailwindcss:O.YnA,typescript:O.WZi,gmail:O.IeF,twitter:O.mWf,linkedin:O.n7M,userFill:i.qyE,work:a.Vj9,gitHub:e=>{let{...r}=e;return(0,n.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",...r,children:(0,n.jsx)("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})})},successAnimated:e=>{let{...r}=e;return(0,n.jsx)("div",{className:"svg-container",children:(0,n.jsxs)("svg",{className:"ft-green-tick",xmlns:"http://www.w3.org/2000/svg",height:"5rem",width:"5rem",viewBox:"0 0 48 48","aria-hidden":"true",...r,children:[(0,n.jsx)("circle",{className:"circle",fill:"#5bb543",cx:"24",cy:"24",r:"22"}),(0,n.jsx)("path",{className:"tick",fill:"none",stroke:"#FFF","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:"M14 27l5.917 4.917L34 17"})]})})}}},5754:function(e,r,t){"use strict";t.d(r,{z:function(){return c}});var n=t(3827),i=t(4090),s=t(9143),o=t(9769),a=t(1657);let l=(0,o.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=i.forwardRef((e,r)=>{let{className:t,variant:i,size:o,asChild:c=!1,...d}=e,u=c?s.g7:"button";return(0,n.jsx)(u,{className:(0,a.cn)(l({variant:i,size:o,className:t})),ref:r,...d})});c.displayName="Button"},2788:function(e,r,t){"use strict";t.d(r,{a:function(){return n}});let n=(0,t(2020).Ue)(e=>({isOpen:!1,title:"",description:"",icon:null,onOpen:r=>e({isOpen:!0,title:r.title,description:r.description,icon:r.icon}),onClose:()=>e({isOpen:!1})}))},1657:function(e,r,t){"use strict";t.d(r,{cn:function(){return s}});var n=t(3167),i=t(4210);function s(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,i.m)((0,n.W)(r))}}},function(e){e.O(0,[281,447,115,712,400,982,871,835,2,971,69,744],function(){return e(e.s=6798)}),_N_E=e.O()}]);