import{_ as r,a as y}from"./@babel-CoH1aX8U.js";import{r as w,j as R}from"./react-BgJWeQTy.js";import{c as _}from"./clsx-B-dksMZM.js";import{s as U,f as $,t as M}from"./mui-styles-DbLOnfEf.js";import{a as S,g as j,M as A,c as X}from"./@mui-UoK_28Vw.js";import{k as b,a as u}from"./@emotion-BQUKa24e.js";import{u as N}from"./mui-DefaultPropsProvider-DnUfkTsg.js";function B(a){return S("MuiSkeleton",a)}j("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const E=["animation","className","component","height","style","variant","width"];let n=a=>a,p,m,f,g;const K=a=>{const{classes:t,variant:e,animation:i,hasChildren:o,width:l,height:s}=a;return X({root:["root",e,i,o&&"withChildren",o&&!l&&"fitContent",o&&!s&&"heightAuto"]},B,t)},P=b(p||(p=n`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),W=b(m||(m=n`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),D=U("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:e}=a;return[t.root,t[e.variant],e.animation!==!1&&t[e.animation],e.hasChildren&&t.withChildren,e.hasChildren&&!e.width&&t.fitContent,e.hasChildren&&!e.height&&t.heightAuto]}})(({theme:a,ownerState:t})=>{const e=$(a.shape.borderRadius)||"px",i=M(a.shape.borderRadius);return r({display:"block",backgroundColor:a.vars?a.vars.palette.Skeleton.bg:A(a.palette.text.primary,a.palette.mode==="light"?.11:.13),height:"1.2em"},t.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${e}/${Math.round(i/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}},t.variant==="circular"&&{borderRadius:"50%"},t.variant==="rounded"&&{borderRadius:(a.vars||a).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:a})=>a.animation==="pulse"&&u(f||(f=n`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),P),({ownerState:a,theme:t})=>a.animation==="wave"&&u(g||(g=n`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),W,(t.vars||t).palette.action.hover)),G=w.forwardRef(function(t,e){const i=N({props:t,name:"MuiSkeleton"}),{animation:o="pulse",className:l,component:s="span",height:d,style:v,variant:C="text",width:k}=i,h=y(i,E),c=r({},i,{animation:o,component:s,variant:C,hasChildren:!!h.children}),x=K(c);return R.jsx(D,r({as:s,ref:e,className:_(x.root,l),ownerState:c},h,{style:r({width:k,height:d},v)}))});export{G as S};
