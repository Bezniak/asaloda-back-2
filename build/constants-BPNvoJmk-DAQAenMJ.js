import{d as c,b4 as h,aq as u,u as x,b5 as g,j as s,b9 as j,ba as p,bb as f,bc as v,bd as m,be as b,B as t,T as a,F as e,aT as w,U as L,c as C,a4 as S}from"./strapi-B61x8no8.js";import{S as y}from"./SSOProviders-BD7LHrkI-B1D2qQQs.js";const k=()=>{const d=u(),{formatMessage:i}=x(),{isLoading:n,data:r=[]}=g(void 0,{skip:!window.strapi.features.isEnabled(window.strapi.features.SSO)}),l=()=>{d("/auth/login")};return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!n&&r.length===0?s.jsx(j,{to:"/auth/login"}):s.jsx(p,{children:s.jsxs(f,{children:[s.jsxs(v,{children:[s.jsxs(m,{children:[s.jsx(b,{}),s.jsx(t,{paddingTop:6,paddingBottom:1,children:s.jsx(a,{tag:"h1",variant:"alpha",children:i({id:"Auth.form.welcome.title"})})}),s.jsx(t,{paddingBottom:7,children:s.jsx(a,{variant:"epsilon",textColor:"neutral600",children:i({id:"Auth.login.sso.subtitle"})})})]}),s.jsxs(e,{direction:"column",alignItems:"stretch",gap:7,children:[n?s.jsx(e,{justifyContent:"center",children:s.jsx(w,{children:i({id:"Auth.login.sso.loading"})})}):s.jsx(y,{providers:r}),s.jsxs(e,{children:[s.jsx(o,{}),s.jsx(t,{paddingLeft:3,paddingRight:3,children:s.jsx(a,{variant:"sigma",textColor:"neutral600",children:i({id:"or"})})}),s.jsx(o,{})]}),s.jsx(L,{fullWidth:!0,size:"L",onClick:l,children:i({id:"Auth.form.button.login.strapi"})})]})]}),s.jsx(e,{justifyContent:"center",children:s.jsx(t,{paddingTop:4,children:s.jsx(C,{tag:S,to:"/auth/forgot-password",children:s.jsx(a,{variant:"pi",children:i({id:"Auth.link.forgot-password"})})})})})]})})},o=c(h)`
  flex: 1;
`,T={providers:k};export{T as FORMS};