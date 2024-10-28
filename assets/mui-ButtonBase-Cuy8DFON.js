import{a as ue,_ as O}from"./@babel-CoH1aX8U.js";import{r as o,j as $}from"./react-BgJWeQTy.js";import{c as M}from"./clsx-B-dksMZM.js";import{s as Z}from"./mui-styles-DbLOnfEf.js";import{g as ce,j as Ne,a as $e,e as ne,k as Ie,l as H,c as je}from"./@mui-UoK_28Vw.js";import{k as v}from"./@emotion-BQUKa24e.js";import{u as pe}from"./mui-DefaultPropsProvider-DnUfkTsg.js";import{T as Ue}from"./react-transition-group-ClIpIS6O.js";function Fe(s){const{className:T,classes:a,pulsate:l=!1,rippleX:P,rippleY:n,rippleSize:c,in:L,onExited:p,timeout:i}=s,[d,h]=o.useState(!1),f=M(T,a.ripple,a.rippleVisible,l&&a.ripplePulsate),x={width:c,height:c,top:-(c/2)+n,left:-(c/2)+P},r=M(a.child,d&&a.childLeaving,l&&a.childPulsate);return!L&&!d&&h(!0),o.useEffect(()=>{if(!L&&p!=null){const m=setTimeout(p,i);return()=>{clearTimeout(m)}}},[p,L,i]),$.jsx("span",{className:f,style:x,children:$.jsx("span",{className:r})})}const u=ce("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Ke=["center","classes","className"];let W=s=>s,ie,re,ae,le;const Q=550,_e=80,ze=v(ie||(ie=W`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Ae=v(re||(re=W`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),Xe=v(ae||(ae=W`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),Ye=Z("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),He=Z(Fe,{name:"MuiTouchRipple",slot:"Ripple"})(le||(le=W`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),u.rippleVisible,ze,Q,({theme:s})=>s.transitions.easing.easeInOut,u.ripplePulsate,({theme:s})=>s.transitions.duration.shorter,u.child,u.childLeaving,Ae,Q,({theme:s})=>s.transitions.easing.easeInOut,u.childPulsate,Xe,({theme:s})=>s.transitions.easing.easeInOut),Oe=o.forwardRef(function(T,a){const l=pe({props:T,name:"MuiTouchRipple"}),{center:P=!1,classes:n={},className:c}=l,L=ue(l,Ke),[p,i]=o.useState([]),d=o.useRef(0),h=o.useRef(null);o.useEffect(()=>{h.current&&(h.current(),h.current=null)},[p]);const f=o.useRef(!1),x=Ne(),r=o.useRef(null),m=o.useRef(null),F=o.useCallback(t=>{const{pulsate:b,rippleX:R,rippleY:E,rippleSize:U,cb:_}=t;i(g=>[...g,$.jsx(He,{classes:{ripple:M(n.ripple,u.ripple),rippleVisible:M(n.rippleVisible,u.rippleVisible),ripplePulsate:M(n.ripplePulsate,u.ripplePulsate),child:M(n.child,u.child),childLeaving:M(n.childLeaving,u.childLeaving),childPulsate:M(n.childPulsate,u.childPulsate)},timeout:Q,pulsate:b,rippleX:R,rippleY:E,rippleSize:U},d.current)]),d.current+=1,h.current=_},[n]),I=o.useCallback((t={},b={},R=()=>{})=>{const{pulsate:E=!1,center:U=P||b.pulsate,fakeElement:_=!1}=b;if((t==null?void 0:t.type)==="mousedown"&&f.current){f.current=!1;return}(t==null?void 0:t.type)==="touchstart"&&(f.current=!0);const g=_?null:m.current,V=g?g.getBoundingClientRect():{width:0,height:0,left:0,top:0};let C,w,D;if(U||t===void 0||t.clientX===0&&t.clientY===0||!t.clientX&&!t.touches)C=Math.round(V.width/2),w=Math.round(V.height/2);else{const{clientX:S,clientY:B}=t.touches&&t.touches.length>0?t.touches[0]:t;C=Math.round(S-V.left),w=Math.round(B-V.top)}if(U)D=Math.sqrt((2*V.width**2+V.height**2)/3),D%2===0&&(D+=1);else{const S=Math.max(Math.abs((g?g.clientWidth:0)-C),C)*2+2,B=Math.max(Math.abs((g?g.clientHeight:0)-w),w)*2+2;D=Math.sqrt(S**2+B**2)}t!=null&&t.touches?r.current===null&&(r.current=()=>{F({pulsate:E,rippleX:C,rippleY:w,rippleSize:D,cb:R})},x.start(_e,()=>{r.current&&(r.current(),r.current=null)})):F({pulsate:E,rippleX:C,rippleY:w,rippleSize:D,cb:R})},[P,F,x]),K=o.useCallback(()=>{I({},{pulsate:!0})},[I]),j=o.useCallback((t,b)=>{if(x.clear(),(t==null?void 0:t.type)==="touchend"&&r.current){r.current(),r.current=null,x.start(0,()=>{j(t,b)});return}r.current=null,i(R=>R.length>0?R.slice(1):R),h.current=b},[x]);return o.useImperativeHandle(a,()=>({pulsate:K,start:I,stop:j}),[K,I,j]),$.jsx(Ye,O({className:M(u.root,n.root,c),ref:m},L,{children:$.jsx(Ue,{component:null,exit:!0,children:p})}))});function We(s){return $e("MuiButtonBase",s)}const qe=ce("MuiButtonBase",["root","disabled","focusVisible"]),Ge=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Je=s=>{const{disabled:T,focusVisible:a,focusVisibleClassName:l,classes:P}=s,c=je({root:["root",T&&"disabled",a&&"focusVisible"]},We,P);return a&&l&&(c.root+=` ${l}`),c},Qe=Z("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(s,T)=>T.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${qe.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),at=o.forwardRef(function(T,a){const l=pe({props:T,name:"MuiButtonBase"}),{action:P,centerRipple:n=!1,children:c,className:L,component:p="button",disabled:i=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:f=!1,LinkComponent:x="a",onBlur:r,onClick:m,onContextMenu:F,onDragLeave:I,onFocus:K,onFocusVisible:j,onKeyDown:t,onKeyUp:b,onMouseDown:R,onMouseLeave:E,onMouseUp:U,onTouchEnd:_,onTouchMove:g,onTouchStart:V,tabIndex:C=0,TouchRippleProps:w,touchRippleRef:D,type:S}=l,B=ue(l,Ge),z=o.useRef(null),y=o.useRef(null),fe=ne(y,D),{isFocusVisibleRef:ee,onFocus:de,onBlur:he,ref:me}=Ie(),[N,X]=o.useState(!1);i&&N&&X(!1),o.useImperativeHandle(P,()=>({focusVisible:()=>{X(!0),z.current.focus()}}),[]);const[q,be]=o.useState(!1);o.useEffect(()=>{be(!0)},[]);const Re=q&&!d&&!i;o.useEffect(()=>{N&&f&&!d&&q&&y.current.pulsate()},[d,f,N,q]);function k(e,oe,Se=h){return H(se=>(oe&&oe(se),!Se&&y.current&&y.current[e](se),!0))}const ge=k("start",R),ye=k("stop",F),Me=k("stop",I),Te=k("stop",U),xe=k("stop",e=>{N&&e.preventDefault(),E&&E(e)}),Ce=k("start",V),Be=k("stop",_),ke=k("stop",g),Pe=k("stop",e=>{he(e),ee.current===!1&&X(!1),r&&r(e)},!1),Ve=H(e=>{z.current||(z.current=e.currentTarget),de(e),ee.current===!0&&(X(!0),j&&j(e)),K&&K(e)}),G=()=>{const e=z.current;return p&&p!=="button"&&!(e.tagName==="A"&&e.href)},J=o.useRef(!1),we=H(e=>{f&&!J.current&&N&&y.current&&e.key===" "&&(J.current=!0,y.current.stop(e,()=>{y.current.start(e)})),e.target===e.currentTarget&&G()&&e.key===" "&&e.preventDefault(),t&&t(e),e.target===e.currentTarget&&G()&&e.key==="Enter"&&!i&&(e.preventDefault(),m&&m(e))}),De=H(e=>{f&&e.key===" "&&y.current&&N&&!e.defaultPrevented&&(J.current=!1,y.current.stop(e,()=>{y.current.pulsate(e)})),b&&b(e),m&&e.target===e.currentTarget&&G()&&e.key===" "&&!e.defaultPrevented&&m(e)});let Y=p;Y==="button"&&(B.href||B.to)&&(Y=x);const A={};Y==="button"?(A.type=S===void 0?"button":S,A.disabled=i):(!B.href&&!B.to&&(A.role="button"),i&&(A["aria-disabled"]=i));const Le=ne(a,me,z),te=O({},l,{centerRipple:n,component:p,disabled:i,disableRipple:d,disableTouchRipple:h,focusRipple:f,tabIndex:C,focusVisible:N}),Ee=Je(te);return $.jsxs(Qe,O({as:Y,className:M(Ee.root,L),ownerState:te,onBlur:Pe,onClick:m,onContextMenu:ye,onFocus:Ve,onKeyDown:we,onKeyUp:De,onMouseDown:ge,onMouseLeave:xe,onMouseUp:Te,onDragLeave:Me,onTouchEnd:Be,onTouchMove:ke,onTouchStart:Ce,ref:Le,tabIndex:i?-1:C,type:S},A,B,{children:[c,Re?$.jsx(Oe,O({ref:fe,center:n},w)):null]}))});export{at as B};
