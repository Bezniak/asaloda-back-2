import{g as d,bp as A,u as S,o as $,fr as O,r as x,j as e,b as c,P as z,c as q,a4 as B,a5 as H,fX as f,fs as o,U as W,a1 as F,a7 as _,bk as G,bl as P,B as U,S as u,W as r,ae as j,gg as V,af as y,gh as X,aa as Y,gd as Z,f$ as J}from"./strapi-B61x8no8.js";const D=({sort:t="",pageSize:n=10,onChange:s})=>{const{formatMessage:i}=S();return e.jsx(U,{background:"neutral0",hasRadius:!0,shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:e.jsxs(u.Root,{gap:4,children:[e.jsx(u.Item,{s:12,col:6,direction:"column",alignItems:"stretch",children:e.jsxs(r.Root,{hint:i({id:o("config.entries.note"),defaultMessage:"Number of assets displayed by default in the Media Library"}),name:"pageSize",children:[e.jsx(r.Label,{children:i({id:o("config.entries.title"),defaultMessage:"Entries per page"})}),e.jsx(j,{onChange:a=>s({target:{name:"pageSize",value:a}}),value:n,children:V.map(a=>e.jsx(y,{value:a,children:a},a))}),e.jsx(r.Hint,{})]})}),e.jsx(u.Item,{s:12,col:6,direction:"column",alignItems:"stretch",children:e.jsxs(r.Root,{hint:i({id:o("config.note"),defaultMessage:"Note: You can override this value in the media library."}),name:"sort",children:[e.jsx(r.Label,{children:i({id:o("config.sort.title"),defaultMessage:"Default sort order"})}),e.jsx(j,{onChange:a=>s({target:{name:"sort",value:a}}),value:t,"test-sort":t,"data-testid":"sort-select",children:X.map(a=>e.jsx(y,{"data-testid":`sort-option-${a.value}`,value:a.value,children:i({id:o(a.key),defaultMessage:`${a.value}`})},a.key))}),e.jsx(r.Hint,{})]})})]})})};D.propTypes={sort:d.string.isRequired,pageSize:d.number.isRequired,onChange:d.func.isRequired};const v=`${f}/ON_CHANGE`,C=`${f}/SET_LOADED`,K=({name:t,value:n})=>({type:v,keys:t,value:n}),Q=()=>({type:C}),h={initialData:{},modifiedData:{}},M=t=>({...h,initialData:t,modifiedData:t}),ee=(t=h,n={type:""})=>Y(t,s=>{switch(n.type){case v:{J(s,["modifiedData",...n.keys.split(".")],n.value);break}case C:{const i=M(Z(s,["modifiedData"],{}));s.initialData=i.initialData,s.modifiedData=i.modifiedData;break}default:return s}}),ae=({config:t})=>{const{trackUsage:n}=A(),{formatMessage:s}=S(),{toggleNotification:i}=$(),{mutateConfig:a}=O(),{isLoading:k}=a,[R,p]=x.useState(!1),m=()=>p(l=>!l),[w,b]=x.useReducer(ee,h,()=>M(t)),{initialData:L,modifiedData:g}=w,E=l=>{l.preventDefault(),m()},T=async()=>{n("willEditMediaLibraryConfig"),await a.mutateAsync(g),p(!1),b(Q()),i({type:"success",message:s({id:"notification.form.success.fields",defaultMessage:"Changes saved"})})},I=({target:{name:l,value:N}})=>{b(K({name:l,value:N}))};return e.jsx(c.Root,{children:e.jsx(z.Main,{"aria-busy":k,children:e.jsxs("form",{onSubmit:E,children:[e.jsx(c.Header,{navigationAction:e.jsx(q,{tag:B,startIcon:e.jsx(H,{}),to:`/plugins/${f}`,id:"go-back",children:s({id:o("config.back"),defaultMessage:"Back"})}),primaryAction:e.jsx(W,{size:"S",startIcon:e.jsx(F,{}),disabled:_(g,L),type:"submit",children:s({id:"global.save",defaultMessage:"Save"})}),subtitle:s({id:o("config.subtitle"),defaultMessage:"Define the view settings of the media library."}),title:s({id:o("config.title"),defaultMessage:"Configure the view - Media Library"})}),e.jsx(c.Content,{children:e.jsx(D,{"data-testid":"settings",pageSize:g.pageSize||"",sort:g.sort||"",onChange:I})}),e.jsx(G.Root,{open:R,onOpenChange:m,children:e.jsx(P,{onConfirm:T,variant:"default",children:s({id:o("config.popUpWarning.warning.updateAllSettings"),defaultMessage:"This will modify all your settings"})})})]})})})};ae.propTypes={config:d.shape({pageSize:d.number,sort:d.string}).isRequired};export{ae as default};
