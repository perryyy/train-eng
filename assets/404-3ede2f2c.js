import{d as _,r as p,o as d,C as f,v as T,b as C,e as V,f as o,w as a,m as g,F as h,q as v,i as n,j as b}from"./index-2ddc2c67.js";const k=v("span",null,"Redirect to the homepage later.",-1),B=_({__name:"404",setup(w){const t=p(!0),u=b(),l=()=>{t.value=!1,u.push("/train-Eng")};let e;return d(()=>{e=setTimeout(()=>{l()},f.JUMP_TO_HOME_SEC)}),T(()=>{e&&(clearTimeout(e),e=null)}),(x,s)=>{const r=n("el-button"),m=n("el-empty"),c=n("el-dialog");return C(),V(h,null,[o(m,null,{default:a(()=>[o(r,{type:"primary",onClick:l},{default:a(()=>[g("Back")]),_:1})]),_:1}),o(c,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=i=>t.value=i),title:"Tips",width:"fit-content","show-close":""},{default:a(()=>[k]),_:1},8,["modelValue"])],64)}}});export{B as default};
