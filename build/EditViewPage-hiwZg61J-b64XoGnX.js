import{ap as V,aP as G,u as O,o as k,cF as Q,cI as U,cC as Y,r as C,j as e,P as c,bb as _,_ as q,eA as H,eB as J,eC as m,eD as b,S as l,eE as K,eF as W,d as X,bo as Z,v as $,cA as ee,F as P,B as se,eG as te,cz as ae}from"./strapi-B61x8no8.js";import{a as ie,f as ne,t as oe,g as I}from"./Field-BQQLwyUs-B-EHuCWE.js";import"./Relations-DGWa9W2j-Di8JkfHL.js";import"./useDragAndDrop-DdHgKsqq-j5zCJx9h.js";import"./relations-C8eyDiIO-fIcneq73.js";import"./getEmptyImage-CjqolaH3.js";import"./ComponentIcon-u4bIXTFY-Djnnj5zp.js";import"./objects-D6yBsdmx-C4s7dVQY.js";import"./useDebounce-DmuSJIF3-DeTi4T62.js";const re=a=>C.useEffect(a,de),de=[],S=({layout:a})=>e.jsx(P,{direction:"column",alignItems:"stretch",gap:6,children:a.map((i,r)=>{if(i.some(t=>t.some(s=>s.type==="dynamiczone"))){const[t]=i,[s]=t;return e.jsx(l.Root,{gap:4,children:e.jsx(l.Item,{col:12,s:12,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(I,{...s})})},s.name)}return e.jsx(se,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingLeft:6,paddingRight:6,paddingTop:6,paddingBottom:6,borderColor:"neutral150",children:e.jsx(P,{direction:"column",alignItems:"stretch",gap:6,children:i.map((t,s)=>e.jsx(l.Root,{gap:4,children:t.map(({size:o,...u})=>e.jsx(l.Item,{col:o,s:12,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(I,{...u})},u.name))},s))})},r)})}),ce=()=>{const a=V(),[{query:{status:i}},r]=G({status:"draft"}),{formatMessage:t}=O(),{toggleNotification:s}=k(),{document:o,meta:u,isLoading:R,schema:d,components:g,collectionType:T,id:v,model:D,hasError:A}=Q(),x=d?.options?.draftAndPublish??!1;re(()=>{a?.state&&"error"in a.state&&s({type:"danger",message:a.state.error,timeout:5e3})});const F=U("EditViewPage",n=>n.isLoading),p=T===te,h=!v&&!p,{isLoading:B,edit:{layout:L,settings:{mainField:j}}}=Y(D),{isLazyLoading:M}=ie([]),w=F||R||B||M,y=C.useMemo(()=>{if(!o&&!h&&!p||!d)return;const n=o?.id?o:ne(d,g);return oe(d,g)(n)},[o,h,p,d,g]);if(A)return e.jsx(c.Error,{});if(w&&!o?.documentId)return e.jsx(c.Loading,{});if(!y)return e.jsx(c.Error,{});const N=n=>{(n==="published"||n==="draft")&&r({status:n},"push",!0)};let f="Untitled";return j!=="id"&&o?.[j]?f=o[j]:p&&d?.info.displayName&&(f=d.info.displayName),e.jsxs(_,{paddingLeft:10,paddingRight:10,children:[e.jsx(c.Title,{children:f}),e.jsx(q,{disabled:x&&i==="published",initialValues:y,method:h?"POST":"PUT",validate:(n,z)=>H(d?.attributes,g,{status:i,...z}).validate(n,{abortEarly:!1}),children:({resetForm:n})=>e.jsxs(e.Fragment,{children:[e.jsx(J,{isCreating:h,status:x?le(o,u):void 0,title:f}),e.jsxs(m.Root,{variant:"simple",value:i,onValueChange:N,children:[e.jsx(m.List,{"aria-label":t({id:b("containers.edit.tabs.label"),defaultMessage:"Document status"}),children:x?e.jsxs(e.Fragment,{children:[e.jsx(E,{value:"draft",children:t({id:b("containers.edit.tabs.draft"),defaultMessage:"draft"})}),e.jsx(E,{disabled:!u||u.availableStatus.length===0,value:"published",children:t({id:b("containers.edit.tabs.published"),defaultMessage:"published"})})]}):null}),e.jsxs(l.Root,{paddingTop:8,gap:4,children:[e.jsxs(l.Item,{col:9,s:12,direction:"column",alignItems:"stretch",children:[e.jsx(m.Content,{value:"draft",children:e.jsx(S,{layout:L})}),e.jsx(m.Content,{value:"published",children:e.jsx(S,{layout:L})})]}),e.jsx(l.Item,{col:3,s:12,direction:"column",alignItems:"stretch",children:e.jsx(K,{})})]})]}),e.jsx(W,{onProceed:n})]})})]})},E=X(m.Trigger)`
  text-transform: uppercase;
`,le=(a,i)=>{const r=a?.status,t=i?.availableStatus??[];return r?r==="draft"&&t.find(s=>s.publishedAt!==null)?"published":r:"draft"},ye=()=>{const{slug:a=""}=Z(),{permissions:i=[],isLoading:r,error:t}=$(ae.map(s=>({action:s,subject:a})));return r?e.jsx(c.Loading,{}):t||!a?e.jsx(c.Error,{}):e.jsx(c.Protect,{permissions:i,children:({permissions:s})=>e.jsx(ee,{permissions:s,children:e.jsx(ce,{})})})};export{ce as EditViewPage,ye as ProtectedEditViewPage,le as getDocumentStatus};