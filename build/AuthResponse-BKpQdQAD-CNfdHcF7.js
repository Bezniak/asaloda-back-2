import{aK as i,u,aq as p,aL as h,r,j as l,P as m,aM as d}from"./strapi-B61x8no8.js";const f=e=>{let o=null;return document.cookie.split(";").forEach(a=>{const[s,n]=a.split("=").map(c=>c.trim());s.trim()===e&&(o=decodeURIComponent(n))}),o},g=e=>{document.cookie=e+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"},R=()=>{const e=i("/auth/login/:authResponse"),{formatMessage:o}=u(),t=p(),a=h(),s=r.useCallback(()=>{t({pathname:"/auth/oops",search:`?info=${encodeURIComponent(o({id:"Auth.form.button.login.providers.error",defaultMessage:"We cannot connect you through the selected provider."}))}`})},[t,o]);return r.useEffect(()=>{if(e?.params.authResponse==="error"&&s(),e?.params.authResponse==="success"){const n=f("jwtToken");n?(a(d({token:n})),g("jwtToken"),t("/auth/login")):s()}},[a,e,s,t]),l.jsx(m.Loading,{})};export{R as AuthResponse};
