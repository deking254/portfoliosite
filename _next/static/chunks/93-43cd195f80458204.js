(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[93],{8792:function(e,n,t){"use strict";t.d(n,{default:function(){return o.a}});var r=t(5250),o=t.n(r)},7907:function(e,n,t){"use strict";var r=t(5313);t.o(r,"redirect")&&t.d(n,{redirect:function(){return r.redirect}}),t.o(r,"usePathname")&&t.d(n,{usePathname:function(){return r.usePathname}}),t.o(r,"useSelectedLayoutSegment")&&t.d(n,{useSelectedLayoutSegment:function(){return r.useSelectedLayoutSegment}})},4518:function(e){e.exports={style:{fontFamily:"'__Roboto_0c766f', '__Roboto_Fallback_0c766f'",fontWeight:400,fontStyle:"normal"},className:"__className_0c766f"}},9746:function(e){e.exports={style:{fontFamily:"'__Norican_6bc6fb', '__Norican_Fallback_6bc6fb'",fontWeight:400,fontStyle:"normal"},className:"__className_6bc6fb"}},3876:function(e,n,t){"use strict";t.d(n,{gm:function(){return a}});var r=t(4090);let o=(0,r.createContext)(void 0);function a(e){let n=(0,r.useContext)(o);return e||n||"ltr"}},1100:function(e,n,t){"use strict";t.d(n,{oC:function(){return eQ},VY:function(){return eH},ZA:function(){return ej},ck:function(){return eJ},wU:function(){return e1},__:function(){return eq},Uv:function(){return eY},Ee:function(){return e$},Rk:function(){return e0},fC:function(){return ez},Z0:function(){return e6},Tr:function(){return e7},tu:function(){return e2},fF:function(){return e3},xz:function(){return eX}});var r=t(2110),o=t(4090),a=t(4991),u=t(1266),c=t(4104),l=t(9310),i=t(9586),d=t(7533),s=t(3876),f=t(1260),p=t(6007),m=t(8082),v=t(8687),g=t(4255),w=t(7881),h=t(2642),_=t(3715),E=t(9143),M=t(9830),b=t(6674),C=t(7225);let y=["Enter"," "],R=["ArrowUp","PageDown","End"],D=["ArrowDown","PageUp","Home",...R],k={ltr:[...y,"ArrowRight"],rtl:[...y,"ArrowLeft"]},P={ltr:["ArrowLeft"],rtl:["ArrowRight"]},x="Menu",[I,F,T]=(0,d.B)(x),[O,Z]=(0,c.b)(x,[T,g.D7,_.Pc]),S=(0,g.D7)(),A=(0,_.Pc)(),[L,K]=O(x),[V,G]=O(x),W=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,...a}=e,u=S(t);return(0,o.createElement)(g.ee,(0,r.Z)({},u,a,{ref:n}))}),U="MenuPortal",[B,N]=O(U,{forceMount:void 0}),z="MenuContent",[X,Y]=O(z),H=(0,o.forwardRef)((e,n)=>{let t=N(z,e.__scopeMenu),{forceMount:a=t.forceMount,...u}=e,c=K(z,e.__scopeMenu),l=G(z,e.__scopeMenu);return(0,o.createElement)(I.Provider,{scope:e.__scopeMenu},(0,o.createElement)(h.z,{present:a||c.open},(0,o.createElement)(I.Slot,{scope:e.__scopeMenu},l.modal?(0,o.createElement)(j,(0,r.Z)({},u,{ref:n})):(0,o.createElement)(q,(0,r.Z)({},u,{ref:n})))))}),j=(0,o.forwardRef)((e,n)=>{let t=K(z,e.__scopeMenu),c=(0,o.useRef)(null),l=(0,u.e)(n,c);return(0,o.useEffect)(()=>{let e=c.current;if(e)return(0,b.Ry)(e)},[]),(0,o.createElement)(J,(0,r.Z)({},e,{ref:l,trapFocus:t.open,disableOutsidePointerEvents:t.open,disableOutsideScroll:!0,onFocusOutside:(0,a.M)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>t.onOpenChange(!1)}))}),q=(0,o.forwardRef)((e,n)=>{let t=K(z,e.__scopeMenu);return(0,o.createElement)(J,(0,r.Z)({},e,{ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>t.onOpenChange(!1)}))}),J=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,loop:c=!1,trapFocus:l,onOpenAutoFocus:i,onCloseAutoFocus:d,disableOutsidePointerEvents:s,onEntryFocus:v,onEscapeKeyDown:w,onPointerDownOutside:h,onFocusOutside:M,onInteractOutside:b,onDismiss:y,disableOutsideScroll:k,...P}=e,x=K(z,t),I=G(z,t),T=S(t),O=A(t),Z=F(t),[L,V]=(0,o.useState)(null),W=(0,o.useRef)(null),U=(0,u.e)(n,W,x.onContentChange),B=(0,o.useRef)(0),N=(0,o.useRef)(""),Y=(0,o.useRef)(0),H=(0,o.useRef)(null),j=(0,o.useRef)("right"),q=(0,o.useRef)(0),J=k?C.Z:o.Fragment,Q=k?{as:E.g7,allowPinchZoom:!0}:void 0,$=e=>{var n,t;let r=N.current+e,o=Z().filter(e=>!e.disabled),a=document.activeElement,u=null===(n=o.find(e=>e.ref.current===a))||void 0===n?void 0:n.textValue,c=function(e,n,t){var r;let o=n.length>1&&Array.from(n).every(e=>e===n[0])?n[0]:n,a=(r=Math.max(t?e.indexOf(t):-1,0),e.map((n,t)=>e[(r+t)%e.length]));1===o.length&&(a=a.filter(e=>e!==t));let u=a.find(e=>e.toLowerCase().startsWith(o.toLowerCase()));return u!==t?u:void 0}(o.map(e=>e.textValue),r,u),l=null===(t=o.find(e=>e.textValue===c))||void 0===t?void 0:t.ref.current;!function e(n){N.current=n,window.clearTimeout(B.current),""!==n&&(B.current=window.setTimeout(()=>e(""),1e3))}(r),l&&setTimeout(()=>l.focus())};(0,o.useEffect)(()=>()=>window.clearTimeout(B.current),[]),(0,p.EW)();let ee=(0,o.useCallback)(e=>{var n,t,r;return j.current===(null===(n=H.current)||void 0===n?void 0:n.side)&&!!(r=null===(t=H.current)||void 0===t?void 0:t.area)&&function(e,n){let{x:t,y:r}=e,o=!1;for(let e=0,a=n.length-1;e<n.length;a=e++){let u=n[e].x,c=n[e].y,l=n[a].x,i=n[a].y;c>r!=i>r&&t<(l-u)*(r-c)/(i-c)+u&&(o=!o)}return o}({x:e.clientX,y:e.clientY},r)},[]);return(0,o.createElement)(X,{scope:t,searchRef:N,onItemEnter:(0,o.useCallback)(e=>{ee(e)&&e.preventDefault()},[ee]),onItemLeave:(0,o.useCallback)(e=>{var n;ee(e)||(null===(n=W.current)||void 0===n||n.focus(),V(null))},[ee]),onTriggerLeave:(0,o.useCallback)(e=>{ee(e)&&e.preventDefault()},[ee]),pointerGraceTimerRef:Y,onPointerGraceIntentChange:(0,o.useCallback)(e=>{H.current=e},[])},(0,o.createElement)(J,Q,(0,o.createElement)(m.M,{asChild:!0,trapped:l,onMountAutoFocus:(0,a.M)(i,e=>{var n;e.preventDefault(),null===(n=W.current)||void 0===n||n.focus()}),onUnmountAutoFocus:d},(0,o.createElement)(f.XB,{asChild:!0,disableOutsidePointerEvents:s,onEscapeKeyDown:w,onPointerDownOutside:h,onFocusOutside:M,onInteractOutside:b,onDismiss:y},(0,o.createElement)(_.fC,(0,r.Z)({asChild:!0},O,{dir:I.dir,orientation:"vertical",loop:c,currentTabStopId:L,onCurrentTabStopIdChange:V,onEntryFocus:(0,a.M)(v,e=>{I.isUsingKeyboardRef.current||e.preventDefault()})}),(0,o.createElement)(g.VY,(0,r.Z)({role:"menu","aria-orientation":"vertical","data-state":eE(x.open),"data-radix-menu-content":"",dir:I.dir},T,P,{ref:U,style:{outline:"none",...P.style},onKeyDown:(0,a.M)(P.onKeyDown,e=>{let n=e.target.closest("[data-radix-menu-content]")===e.currentTarget,t=e.ctrlKey||e.altKey||e.metaKey,r=1===e.key.length;n&&("Tab"===e.key&&e.preventDefault(),!t&&r&&$(e.key));let o=W.current;if(e.target!==o||!D.includes(e.key))return;e.preventDefault();let a=Z().filter(e=>!e.disabled).map(e=>e.ref.current);R.includes(e.key)&&a.reverse(),function(e){let n=document.activeElement;for(let t of e)if(t===n||(t.focus(),document.activeElement!==n))return}(a)}),onBlur:(0,a.M)(e.onBlur,e=>{e.currentTarget.contains(e.target)||(window.clearTimeout(B.current),N.current="")}),onPointerMove:(0,a.M)(e.onPointerMove,eC(e=>{let n=e.target,t=q.current!==e.clientX;if(e.currentTarget.contains(n)&&t){let n=e.clientX>q.current?"right":"left";j.current=n,q.current=e.clientX}}))})))))))}),Q=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,...a}=e;return(0,o.createElement)(i.WV.div,(0,r.Z)({role:"group"},a,{ref:n}))}),$=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,...a}=e;return(0,o.createElement)(i.WV.div,(0,r.Z)({},a,{ref:n}))}),ee="MenuItem",en="menu.itemSelect",et=(0,o.forwardRef)((e,n)=>{let{disabled:t=!1,onSelect:c,...l}=e,d=(0,o.useRef)(null),s=G(ee,e.__scopeMenu),f=Y(ee,e.__scopeMenu),p=(0,u.e)(n,d),m=(0,o.useRef)(!1);return(0,o.createElement)(er,(0,r.Z)({},l,{ref:p,disabled:t,onClick:(0,a.M)(e.onClick,()=>{let e=d.current;if(!t&&e){let n=new CustomEvent(en,{bubbles:!0,cancelable:!0});e.addEventListener(en,e=>null==c?void 0:c(e),{once:!0}),(0,i.jH)(e,n),n.defaultPrevented?m.current=!1:s.onClose()}}),onPointerDown:n=>{var t;null===(t=e.onPointerDown)||void 0===t||t.call(e,n),m.current=!0},onPointerUp:(0,a.M)(e.onPointerUp,e=>{var n;m.current||null===(n=e.currentTarget)||void 0===n||n.click()}),onKeyDown:(0,a.M)(e.onKeyDown,e=>{let n=""!==f.searchRef.current;!t&&(!n||" "!==e.key)&&y.includes(e.key)&&(e.currentTarget.click(),e.preventDefault())})}))}),er=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,disabled:c=!1,textValue:l,...d}=e,s=Y(ee,t),f=A(t),p=(0,o.useRef)(null),m=(0,u.e)(n,p),[v,g]=(0,o.useState)(!1),[w,h]=(0,o.useState)("");return(0,o.useEffect)(()=>{let e=p.current;if(e){var n;h((null!==(n=e.textContent)&&void 0!==n?n:"").trim())}},[d.children]),(0,o.createElement)(I.ItemSlot,{scope:t,disabled:c,textValue:null!=l?l:w},(0,o.createElement)(_.ck,(0,r.Z)({asChild:!0},f,{focusable:!c}),(0,o.createElement)(i.WV.div,(0,r.Z)({role:"menuitem","data-highlighted":v?"":void 0,"aria-disabled":c||void 0,"data-disabled":c?"":void 0},d,{ref:m,onPointerMove:(0,a.M)(e.onPointerMove,eC(e=>{c?s.onItemLeave(e):(s.onItemEnter(e),e.defaultPrevented||e.currentTarget.focus())})),onPointerLeave:(0,a.M)(e.onPointerLeave,eC(e=>s.onItemLeave(e))),onFocus:(0,a.M)(e.onFocus,()=>g(!0)),onBlur:(0,a.M)(e.onBlur,()=>g(!1))}))))}),eo=(0,o.forwardRef)((e,n)=>{let{checked:t=!1,onCheckedChange:u,...c}=e;return(0,o.createElement)(ed,{scope:e.__scopeMenu,checked:t},(0,o.createElement)(et,(0,r.Z)({role:"menuitemcheckbox","aria-checked":eM(t)?"mixed":t},c,{ref:n,"data-state":eb(t),onSelect:(0,a.M)(c.onSelect,()=>null==u?void 0:u(!!eM(t)||!t),{checkForDefaultPrevented:!1})})))}),[ea,eu]=O("MenuRadioGroup",{value:void 0,onValueChange:()=>{}}),ec=(0,o.forwardRef)((e,n)=>{let{value:t,onValueChange:a,...u}=e,c=(0,M.W)(a);return(0,o.createElement)(ea,{scope:e.__scopeMenu,value:t,onValueChange:c},(0,o.createElement)(Q,(0,r.Z)({},u,{ref:n})))}),el=(0,o.forwardRef)((e,n)=>{let{value:t,...u}=e,c=eu("MenuRadioItem",e.__scopeMenu),l=t===c.value;return(0,o.createElement)(ed,{scope:e.__scopeMenu,checked:l},(0,o.createElement)(et,(0,r.Z)({role:"menuitemradio","aria-checked":l},u,{ref:n,"data-state":eb(l),onSelect:(0,a.M)(u.onSelect,()=>{var e;return null===(e=c.onValueChange)||void 0===e?void 0:e.call(c,t)},{checkForDefaultPrevented:!1})})))}),ei="MenuItemIndicator",[ed,es]=O(ei,{checked:!1}),ef=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,forceMount:a,...u}=e,c=es(ei,t);return(0,o.createElement)(h.z,{present:a||eM(c.checked)||!0===c.checked},(0,o.createElement)(i.WV.span,(0,r.Z)({},u,{ref:n,"data-state":eb(c.checked)})))}),ep=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,...a}=e;return(0,o.createElement)(i.WV.div,(0,r.Z)({role:"separator","aria-orientation":"horizontal"},a,{ref:n}))}),em=((e,n)=>{let{__scopeMenu:t,...a}=e,u=S(t);return(0,o.createElement)(g.Eh,(0,r.Z)({},u,a,{ref:n}))},"MenuSub"),[ev,eg]=O(em),ew="MenuSubTrigger",eh=(0,o.forwardRef)((e,n)=>{let t=K(ew,e.__scopeMenu),c=G(ew,e.__scopeMenu),l=eg(ew,e.__scopeMenu),i=Y(ew,e.__scopeMenu),d=(0,o.useRef)(null),{pointerGraceTimerRef:s,onPointerGraceIntentChange:f}=i,p={__scopeMenu:e.__scopeMenu},m=(0,o.useCallback)(()=>{d.current&&window.clearTimeout(d.current),d.current=null},[]);return(0,o.useEffect)(()=>m,[m]),(0,o.useEffect)(()=>{let e=s.current;return()=>{window.clearTimeout(e),f(null)}},[s,f]),(0,o.createElement)(W,(0,r.Z)({asChild:!0},p),(0,o.createElement)(er,(0,r.Z)({id:l.triggerId,"aria-haspopup":"menu","aria-expanded":t.open,"aria-controls":l.contentId,"data-state":eE(t.open)},e,{ref:(0,u.F)(n,l.onTriggerChange),onClick:n=>{var r;null===(r=e.onClick)||void 0===r||r.call(e,n),e.disabled||n.defaultPrevented||(n.currentTarget.focus(),t.open||t.onOpenChange(!0))},onPointerMove:(0,a.M)(e.onPointerMove,eC(n=>{i.onItemEnter(n),n.defaultPrevented||e.disabled||t.open||d.current||(i.onPointerGraceIntentChange(null),d.current=window.setTimeout(()=>{t.onOpenChange(!0),m()},100))})),onPointerLeave:(0,a.M)(e.onPointerLeave,eC(e=>{var n,r;m();let o=null===(n=t.content)||void 0===n?void 0:n.getBoundingClientRect();if(o){let n=null===(r=t.content)||void 0===r?void 0:r.dataset.side,a="right"===n,u=o[a?"left":"right"],c=o[a?"right":"left"];i.onPointerGraceIntentChange({area:[{x:e.clientX+(a?-5:5),y:e.clientY},{x:u,y:o.top},{x:c,y:o.top},{x:c,y:o.bottom},{x:u,y:o.bottom}],side:n}),window.clearTimeout(s.current),s.current=window.setTimeout(()=>i.onPointerGraceIntentChange(null),300)}else{if(i.onTriggerLeave(e),e.defaultPrevented)return;i.onPointerGraceIntentChange(null)}})),onKeyDown:(0,a.M)(e.onKeyDown,n=>{let r=""!==i.searchRef.current;if(!e.disabled&&(!r||" "!==n.key)&&k[c.dir].includes(n.key)){var o;t.onOpenChange(!0),null===(o=t.content)||void 0===o||o.focus(),n.preventDefault()}})})))}),e_=(0,o.forwardRef)((e,n)=>{let t=N(z,e.__scopeMenu),{forceMount:c=t.forceMount,...l}=e,i=K(z,e.__scopeMenu),d=G(z,e.__scopeMenu),s=eg("MenuSubContent",e.__scopeMenu),f=(0,o.useRef)(null),p=(0,u.e)(n,f);return(0,o.createElement)(I.Provider,{scope:e.__scopeMenu},(0,o.createElement)(h.z,{present:c||i.open},(0,o.createElement)(I.Slot,{scope:e.__scopeMenu},(0,o.createElement)(J,(0,r.Z)({id:s.contentId,"aria-labelledby":s.triggerId},l,{ref:p,align:"start",side:"rtl"===d.dir?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:e=>{var n;d.isUsingKeyboardRef.current&&(null===(n=f.current)||void 0===n||n.focus()),e.preventDefault()},onCloseAutoFocus:e=>e.preventDefault(),onFocusOutside:(0,a.M)(e.onFocusOutside,e=>{e.target!==s.trigger&&i.onOpenChange(!1)}),onEscapeKeyDown:(0,a.M)(e.onEscapeKeyDown,e=>{d.onClose(),e.preventDefault()}),onKeyDown:(0,a.M)(e.onKeyDown,e=>{let n=e.currentTarget.contains(e.target),t=P[d.dir].includes(e.key);if(n&&t){var r;i.onOpenChange(!1),null===(r=s.trigger)||void 0===r||r.focus(),e.preventDefault()}})})))))});function eE(e){return e?"open":"closed"}function eM(e){return"indeterminate"===e}function eb(e){return eM(e)?"indeterminate":e?"checked":"unchecked"}function eC(e){return n=>"mouse"===n.pointerType?e(n):void 0}let ey=e=>{let{__scopeMenu:n,open:t=!1,children:r,dir:a,onOpenChange:u,modal:c=!0}=e,l=S(n),[i,d]=(0,o.useState)(null),f=(0,o.useRef)(!1),p=(0,M.W)(u),m=(0,s.gm)(a);return(0,o.useEffect)(()=>{let e=()=>{f.current=!0,document.addEventListener("pointerdown",n,{capture:!0,once:!0}),document.addEventListener("pointermove",n,{capture:!0,once:!0})},n=()=>f.current=!1;return document.addEventListener("keydown",e,{capture:!0}),()=>{document.removeEventListener("keydown",e,{capture:!0}),document.removeEventListener("pointerdown",n,{capture:!0}),document.removeEventListener("pointermove",n,{capture:!0})}},[]),(0,o.createElement)(g.fC,l,(0,o.createElement)(L,{scope:n,open:t,onOpenChange:p,content:i,onContentChange:d},(0,o.createElement)(V,{scope:n,onClose:(0,o.useCallback)(()=>p(!1),[p]),isUsingKeyboardRef:f,dir:m,modal:c},r)))},eR=e=>{let{__scopeMenu:n,forceMount:t,children:r,container:a}=e,u=K(U,n);return(0,o.createElement)(B,{scope:n,forceMount:t},(0,o.createElement)(h.z,{present:t||u.open},(0,o.createElement)(w.h,{asChild:!0,container:a},r)))},eD=e=>{let{__scopeMenu:n,children:t,open:r=!1,onOpenChange:a}=e,u=K(em,n),c=S(n),[l,i]=(0,o.useState)(null),[d,s]=(0,o.useState)(null),f=(0,M.W)(a);return(0,o.useEffect)(()=>(!1===u.open&&f(!1),()=>f(!1)),[u.open,f]),(0,o.createElement)(g.fC,c,(0,o.createElement)(L,{scope:n,open:r,onOpenChange:f,content:d,onContentChange:s},(0,o.createElement)(ev,{scope:n,contentId:(0,v.M)(),triggerId:(0,v.M)(),trigger:l,onTriggerChange:i},t)))},ek="DropdownMenu",[eP,ex]=(0,c.b)(ek,[Z]),eI=Z(),[eF,eT]=eP(ek),eO=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,disabled:c=!1,...l}=e,d=eT("DropdownMenuTrigger",t),s=eI(t);return(0,o.createElement)(W,(0,r.Z)({asChild:!0},s),(0,o.createElement)(i.WV.button,(0,r.Z)({type:"button",id:d.triggerId,"aria-haspopup":"menu","aria-expanded":d.open,"aria-controls":d.open?d.contentId:void 0,"data-state":d.open?"open":"closed","data-disabled":c?"":void 0,disabled:c},l,{ref:(0,u.F)(n,d.triggerRef),onPointerDown:(0,a.M)(e.onPointerDown,e=>{c||0!==e.button||!1!==e.ctrlKey||(d.onOpenToggle(),d.open||e.preventDefault())}),onKeyDown:(0,a.M)(e.onKeyDown,e=>{!c&&(["Enter"," "].includes(e.key)&&d.onOpenToggle(),"ArrowDown"===e.key&&d.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(e.key)&&e.preventDefault())})})))}),eZ=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...u}=e,c=eT("DropdownMenuContent",t),l=eI(t),i=(0,o.useRef)(!1);return(0,o.createElement)(H,(0,r.Z)({id:c.contentId,"aria-labelledby":c.triggerId},l,u,{ref:n,onCloseAutoFocus:(0,a.M)(e.onCloseAutoFocus,e=>{var n;i.current||null===(n=c.triggerRef.current)||void 0===n||n.focus(),i.current=!1,e.preventDefault()}),onInteractOutside:(0,a.M)(e.onInteractOutside,e=>{let n=e.detail.originalEvent,t=0===n.button&&!0===n.ctrlKey,r=2===n.button||t;(!c.modal||r)&&(i.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),eS=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...a}=e,u=eI(t);return(0,o.createElement)(Q,(0,r.Z)({},u,a,{ref:n}))}),eA=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...a}=e,u=eI(t);return(0,o.createElement)($,(0,r.Z)({},u,a,{ref:n}))}),eL=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...a}=e,u=eI(t);return(0,o.createElement)(et,(0,r.Z)({},u,a,{ref:n}))}),eK=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...a}=e,u=eI(t);return(0,o.createElement)(eo,(0,r.Z)({},u,a,{ref:n}))}),eV=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...a}=e,u=eI(t);return(0,o.createElement)(ec,(0,r.Z)({},u,a,{ref:n}))}),eG=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...a}=e,u=eI(t);return(0,o.createElement)(el,(0,r.Z)({},u,a,{ref:n}))}),eW=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...a}=e,u=eI(t);return(0,o.createElement)(ef,(0,r.Z)({},u,a,{ref:n}))}),eU=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...a}=e,u=eI(t);return(0,o.createElement)(ep,(0,r.Z)({},u,a,{ref:n}))}),eB=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...a}=e,u=eI(t);return(0,o.createElement)(eh,(0,r.Z)({},u,a,{ref:n}))}),eN=(0,o.forwardRef)((e,n)=>{let{__scopeDropdownMenu:t,...a}=e,u=eI(t);return(0,o.createElement)(e_,(0,r.Z)({},u,a,{ref:n,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),ez=e=>{let{__scopeDropdownMenu:n,children:t,dir:a,open:u,defaultOpen:c,onOpenChange:i,modal:d=!0}=e,s=eI(n),f=(0,o.useRef)(null),[p=!1,m]=(0,l.T)({prop:u,defaultProp:c,onChange:i});return(0,o.createElement)(eF,{scope:n,triggerId:(0,v.M)(),triggerRef:f,contentId:(0,v.M)(),open:p,onOpenChange:m,onOpenToggle:(0,o.useCallback)(()=>m(e=>!e),[m]),modal:d},(0,o.createElement)(ey,(0,r.Z)({},s,{open:p,onOpenChange:m,dir:a,modal:d}),t))},eX=eO,eY=e=>{let{__scopeDropdownMenu:n,...t}=e,a=eI(n);return(0,o.createElement)(eR,(0,r.Z)({},a,t))},eH=eZ,ej=eS,eq=eA,eJ=eL,eQ=eK,e$=eV,e0=eG,e1=eW,e6=eU,e7=e=>{let{__scopeDropdownMenu:n,children:t,open:a,onOpenChange:u,defaultOpen:c}=e,i=eI(n),[d=!1,s]=(0,l.T)({prop:a,defaultProp:c,onChange:u});return(0,o.createElement)(eD,(0,r.Z)({},i,{open:d,onOpenChange:s}),t)},e3=eB,e2=eN},3715:function(e,n,t){"use strict";t.d(n,{Pc:function(){return M},ck:function(){return I},fC:function(){return x}});var r=t(2110),o=t(4090),a=t(4991),u=t(7533),c=t(1266),l=t(4104),i=t(8687),d=t(9586),s=t(9830),f=t(9310),p=t(3876);let m="rovingFocusGroup.onEntryFocus",v={bubbles:!1,cancelable:!0},g="RovingFocusGroup",[w,h,_]=(0,u.B)(g),[E,M]=(0,l.b)(g,[_]),[b,C]=E(g),y=(0,o.forwardRef)((e,n)=>(0,o.createElement)(w.Provider,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(w.Slot,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(R,(0,r.Z)({},e,{ref:n}))))),R=(0,o.forwardRef)((e,n)=>{let{__scopeRovingFocusGroup:t,orientation:u,loop:l=!1,dir:i,currentTabStopId:g,defaultCurrentTabStopId:w,onCurrentTabStopIdChange:_,onEntryFocus:E,...M}=e,C=(0,o.useRef)(null),y=(0,c.e)(n,C),R=(0,p.gm)(i),[D=null,k]=(0,f.T)({prop:g,defaultProp:w,onChange:_}),[x,I]=(0,o.useState)(!1),F=(0,s.W)(E),T=h(t),O=(0,o.useRef)(!1),[Z,S]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=C.current;if(e)return e.addEventListener(m,F),()=>e.removeEventListener(m,F)},[F]),(0,o.createElement)(b,{scope:t,orientation:u,dir:R,loop:l,currentTabStopId:D,onItemFocus:(0,o.useCallback)(e=>k(e),[k]),onItemShiftTab:(0,o.useCallback)(()=>I(!0),[]),onFocusableItemAdd:(0,o.useCallback)(()=>S(e=>e+1),[]),onFocusableItemRemove:(0,o.useCallback)(()=>S(e=>e-1),[])},(0,o.createElement)(d.WV.div,(0,r.Z)({tabIndex:x||0===Z?-1:0,"data-orientation":u},M,{ref:y,style:{outline:"none",...e.style},onMouseDown:(0,a.M)(e.onMouseDown,()=>{O.current=!0}),onFocus:(0,a.M)(e.onFocus,e=>{let n=!O.current;if(e.target===e.currentTarget&&n&&!x){let n=new CustomEvent(m,v);if(e.currentTarget.dispatchEvent(n),!n.defaultPrevented){let e=T().filter(e=>e.focusable);P([e.find(e=>e.active),e.find(e=>e.id===D),...e].filter(Boolean).map(e=>e.ref.current))}}O.current=!1}),onBlur:(0,a.M)(e.onBlur,()=>I(!1))})))}),D=(0,o.forwardRef)((e,n)=>{let{__scopeRovingFocusGroup:t,focusable:u=!0,active:c=!1,tabStopId:l,...s}=e,f=(0,i.M)(),p=l||f,m=C("RovingFocusGroupItem",t),v=m.currentTabStopId===p,g=h(t),{onFocusableItemAdd:_,onFocusableItemRemove:E}=m;return(0,o.useEffect)(()=>{if(u)return _(),()=>E()},[u,_,E]),(0,o.createElement)(w.ItemSlot,{scope:t,id:p,focusable:u,active:c},(0,o.createElement)(d.WV.span,(0,r.Z)({tabIndex:v?0:-1,"data-orientation":m.orientation},s,{ref:n,onMouseDown:(0,a.M)(e.onMouseDown,e=>{u?m.onItemFocus(p):e.preventDefault()}),onFocus:(0,a.M)(e.onFocus,()=>m.onItemFocus(p)),onKeyDown:(0,a.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){m.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let n=function(e,n,t){var r;let o=(r=e.key,"rtl"!==t?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===n&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===n&&["ArrowUp","ArrowDown"].includes(o)))return k[o]}(e,m.orientation,m.dir);if(void 0!==n){e.preventDefault();let o=g().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===n)o.reverse();else if("prev"===n||"next"===n){var t,r;"prev"===n&&o.reverse();let a=o.indexOf(e.currentTarget);o=m.loop?(t=o,r=a+1,t.map((e,n)=>t[(r+n)%t.length])):o.slice(a+1)}setTimeout(()=>P(o))}})})))}),k={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function P(e){let n=document.activeElement;for(let t of e)if(t===n||(t.focus(),document.activeElement!==n))return}let x=y,I=D},7182:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});let r=(0,t(20).Z)("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]])}}]);