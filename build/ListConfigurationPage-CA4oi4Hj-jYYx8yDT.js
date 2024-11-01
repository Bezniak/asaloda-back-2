import{h as Y,l as G,i as Q,d as T,u as I,bp as X,o as H,s as q,cF as k,cJ as J,eX as Z,r as f,eG as K,j as e,b9 as ee,P as L,b as A,bb as te,_ as N,F as S,b4 as se,bT as x,bu as ae,U as P,eD as u,eY as z,t as ne,T as B,S as w,$ as _,cD as oe,eQ as ie,B as U,eU as D,V as re,bf as le,a9 as de,eZ as ce,M as C,H as ue,bW as pe,aW as me}from"./strapi-B61x8no8.js";import{u as ge}from"./hooks-E5u1mcgM-b2VBeRk2.js";import{s as fe}from"./objects-D6yBsdmx-C4s7dVQY.js";import{C as O}from"./CardDragPreview-DOxamsuj-BFdLnnvG.js";import{u as he,I as be}from"./useDragAndDrop-DdHgKsqq-j5zCJx9h.js";import{F as ye}from"./FieldTypeIcon-CMlNO8PE-DLkhixpL.js";import{g as je}from"./getEmptyImage-CjqolaH3.js";const xe=({name:t})=>{const{formatMessage:c}=I(),l=x("Header",m=>m.modified),n=x("Header",m=>m.isSubmitting);return e.jsx(A.Header,{navigationAction:e.jsx(ae,{}),primaryAction:e.jsx(P,{size:"S",disabled:!l,type:"submit",loading:n,children:c({id:"global.save",defaultMessage:"Save"})}),subtitle:c({id:u("components.SettingsViewWrapper.pluginHeader.description.list-settings"),defaultMessage:"Define the settings of the list view."}),title:c({id:u("components.SettingsViewWrapper.pluginHeader.title"),defaultMessage:"Configure the view - {name}"},{name:z(t)})})},Se=["media","richtext","dynamiczone","relation","component","json","blocks"],Me=()=>{const{formatMessage:t,locale:c}=I(),l=ne(c,{sensitivity:"base"}),{schema:n}=k(),m=x("Settings",o=>o.values.layout??[]),g=x("Settings",o=>o.values.settings.defaultSortBy),b=x("Settings",o=>o.onChange),i=f.useMemo(()=>Object.values(m).reduce((o,a)=>(n&&!Se.includes(n.attributes[a.name].type)&&o.push({value:a.name,label:typeof a.label!="string"?t(a.label):a.label}),o),[]),[t,m,n]).sort((o,a)=>l.compare(o.label,a.label));f.useEffect(()=>{i.findIndex(o=>o.value===g)===-1&&b("settings.defaultSortBy",i[0]?.value)},[g,b,i]);const h=f.useMemo(()=>ve.map(o=>o.map(a=>a.type==="enumeration"?{...a,hint:a.hint?t(a.hint):void 0,label:t(a.label),options:a.name==="settings.defaultSortBy"?i:a.options}:{...a,hint:a.hint?t(a.hint):void 0,label:t(a.label)})),[t,i]);return e.jsxs(S,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsx(B,{variant:"delta",tag:"h2",children:t({id:u("containers.SettingPage.settings"),defaultMessage:"Settings"})}),e.jsx(w.Root,{gap:4,children:h.map(o=>o.map(({size:a,...p})=>e.jsx(w.Item,{s:12,col:a,direction:"column",alignItems:"stretch",children:e.jsx(_,{...p})},p.name)))},"bottom")]})},ve=[[{label:{id:u("form.Input.search"),defaultMessage:"Enable search"},name:"settings.searchable",size:4,type:"boolean"},{label:{id:u("form.Input.filters"),defaultMessage:"Enable filters"},name:"settings.filterable",size:4,type:"boolean"},{label:{id:u("form.Input.bulkActions"),defaultMessage:"Enable bulk actions"},name:"settings.bulkable",size:4,type:"boolean"}],[{hint:{id:u("form.Input.pageEntries.inputDescription"),defaultMessage:"Note: You can override this value in the Collection Type settings page."},label:{id:u("form.Input.pageEntries"),defaultMessage:"Entries per page"},name:"settings.pageSize",options:["10","20","50","100"].map(t=>({value:t,label:t})),size:6,type:"enumeration"},{label:{id:u("form.Input.defaultSort"),defaultMessage:"Default sort attribute"},name:"settings.defaultSortBy",options:[],size:3,type:"enumeration"},{label:{id:u("form.Input.sort.order"),defaultMessage:"Default sort order"},name:"settings.defaultSortOrder",options:["ASC","DESC"].map(t=>({value:t,label:t})),size:3,type:"enumeration"}]],Ce=Y().shape({label:G().required(),sortable:Q()}),Fe=({attribute:t,name:c,onClose:l})=>{const{formatMessage:n}=I(),{toggleNotification:m}=H(),{value:g,onChange:b}=me(c);if(!g)return console.error("You've opened a field to edit without it being part of the form, this is likely a bug with Strapi. Please open an issue."),m({message:n({id:"content-manager.containers.list-settings.modal-form.error",defaultMessage:"An error occurred while trying to open the form."}),type:"danger"}),null;let d=!["media","relation"].includes(t.type);return"relation"in t&&["oneWay","oneToOne","manyToOne"].includes(t.relation)&&(d=!0),e.jsx(C.Content,{children:e.jsxs(N,{method:"PUT",initialValues:g,validationSchema:Ce,onSubmit:i=>{b(c,i),l()},children:[e.jsx(C.Header,{children:e.jsxs(Ie,{children:[e.jsx(ye,{type:t.type}),e.jsx(C.Title,{children:n({id:u("containers.list-settings.modal-form.label"),defaultMessage:"Edit {fieldName}"},{fieldName:z(g.label)})})]})}),e.jsx(C.Body,{children:e.jsx(w.Root,{gap:4,children:[{name:"label",label:n({id:u("form.Input.label"),defaultMessage:"Label"}),hint:n({id:u("form.Input.label.inputDescription"),defaultMessage:"This value overrides the label displayed in the table's head"}),size:6,type:"string"},{label:n({id:u("form.Input.sort.field"),defaultMessage:"Enable sort on this field"}),name:"sortable",size:6,type:"boolean"}].filter(i=>i.name!=="sortable"||i.name==="sortable"&&d).map(({size:i,...h})=>e.jsx(w.Item,{s:12,col:i,direction:"column",alignItems:"stretch",children:e.jsx(_,{...h})},h.name))})}),e.jsxs(C.Footer,{children:[e.jsx(P,{onClick:l,variant:"tertiary",children:n({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),e.jsx(P,{type:"submit",children:n({id:"global.finish",defaultMessage:"Finish"})})]})]})})},Ie=T(S)`
  svg {
    width: 3.2rem;
    margin-right: ${({theme:t})=>t.spaces[3]};
  }
`,Re=({attribute:t,index:c,isDraggingSibling:l,label:n,name:m,onMoveField:g,onRemoveField:b,setIsDraggingSibling:d})=>{const[i,h]=f.useState(!1),{formatMessage:o}=I(),[,a]=f.useState(!1),[{isDragging:p},y,M,F,j]=he(!0,{type:be.FIELD,item:{index:c,label:n,name:m},index:c,onMoveItem:g,onEnd:()=>d(!1)});f.useEffect(()=>{j(je(),{captureDraggingState:!1})},[j]),f.useEffect(()=>{p&&d(!0)},[p,d]),f.useEffect(()=>{l||a(r=>!r)},[l]);const s=de(M,y);return e.jsxs(De,{ref:s,children:[p&&e.jsx(O,{label:n}),!p&&l&&e.jsx(O,{isSibling:!0,label:n}),!p&&!l&&e.jsxs(Ee,{borderColor:"neutral150",background:"neutral100",hasRadius:!0,justifyContent:"space-between",onClick:()=>h(!0),children:[e.jsxs(S,{gap:3,children:[e.jsx(Te,{ref:F,"aria-label":o({id:u("components.DraggableCard.move.field"),defaultMessage:"Move {item}"},{item:n}),onClick:r=>r.stopPropagation(),children:e.jsx(ce,{})}),e.jsx(B,{fontWeight:"bold",children:n})]}),e.jsxs(S,{paddingLeft:3,onClick:r=>r.stopPropagation(),children:[e.jsxs(C.Root,{open:i,onOpenChange:h,children:[e.jsx(C.Trigger,{children:e.jsx($,{onClick:r=>{r.stopPropagation()},"aria-label":o({id:u("components.DraggableCard.edit.field"),defaultMessage:"Edit {item}"},{item:n}),type:"button",children:e.jsx(ue,{width:"1.2rem",height:"1.2rem"})})}),e.jsx(Fe,{attribute:t,name:`layout.${c}`,onClose:()=>{h(!1)}})]}),e.jsx($,{onClick:b,"data-testid":`delete-${m}`,"aria-label":o({id:u("components.DraggableCard.delete.field"),defaultMessage:"Delete {item}"},{item:n}),type:"button",children:e.jsx(pe,{width:"1.2rem",height:"1.2rem"})})]})]})]})},$=T.button`
  display: flex;
  align-items: center;
  height: ${({theme:t})=>t.spaces[7]};
  color: ${({theme:t})=>t.colors.neutral600};

  &:hover {
    color: ${({theme:t})=>t.colors.neutral700};
  }

  &:last-child {
    padding: 0 ${({theme:t})=>t.spaces[3]};
  }
`,Te=T($)`
  padding: 0 ${({theme:t})=>t.spaces[3]};
  border-right: 1px solid ${({theme:t})=>t.colors.neutral150};
  cursor: all-scroll;
`,Ee=T(S)`
  max-height: 3.2rem;
  cursor: pointer;
`,De=T(U)`
  &:last-child {
    padding-right: ${({theme:t})=>t.spaces[3]};
  }
`,we=()=>{const{formatMessage:t}=I(),{model:c,schema:l}=k(),[n,m]=f.useState(!1),[g,b]=f.useState(null),d=f.useRef(null),i=x("SortDisplayedFields",s=>s.values.layout??[]),h=x("SortDisplayedFields",s=>s.addFieldRow),o=x("SortDisplayedFields",s=>s.removeFieldRow),a=x("SortDisplayedFields",s=>s.moveFieldRow),{metadata:p}=oe(c,{selectFromResult:({data:s})=>({metadata:s?.contentType.metadatas??{}})}),y=f.useMemo(()=>{if(!l)return[];const s=i.map(r=>r.name);return Object.entries(l.attributes).reduce((r,[v,R])=>{if(!s.includes(v)&&ie(R)){const{list:E}=p[v];r.push({name:v,label:E.label||v,sortable:E.sortable})}return r},[])},[p,i,l]),M=s=>{b("add"),h("layout",s)},F=s=>{b("remove"),o("layout",s)},j=(s,r)=>{a("layout",s,r)};return f.useEffect(()=>{g==="add"&&d?.current&&(d.current.scrollLeft=d.current.scrollWidth)},[g]),e.jsxs(S,{alignItems:"stretch",direction:"column",gap:4,children:[e.jsx(B,{variant:"delta",tag:"h2",children:t({id:u("containers.SettingPage.view"),defaultMessage:"View"})}),e.jsxs(S,{padding:4,borderColor:"neutral300",borderStyle:"dashed",borderWidth:"1px",hasRadius:!0,children:[e.jsx(U,{flex:"1",overflow:"auto hidden",ref:d,children:e.jsx(S,{gap:3,children:i.map((s,r)=>e.jsx(Re,{index:r,isDraggingSibling:n,onMoveField:j,onRemoveField:()=>F(r),setIsDraggingSibling:m,...s,attribute:l.attributes[s.name],label:typeof s.label=="object"?t(s.label):s.label},s.name))})}),e.jsxs(D.Root,{children:[e.jsxs(D.Trigger,{paddingLeft:2,paddingRight:2,justifyContent:"center",endIcon:null,disabled:y.length===0,variant:"tertiary",children:[e.jsx(re,{tag:"span",children:t({id:u("components.FieldSelect.label"),defaultMessage:"Add a field"})}),e.jsx(le,{"aria-hidden":!0,focusable:!1,style:{position:"relative",top:2}})]}),e.jsx(D.Content,{children:y.map(s=>e.jsx(D.Item,{onSelect:()=>M(s),children:typeof s.label=="object"?t(s.label):s.label},s.name))})]})]})]})},Le=()=>{const{formatMessage:t}=I(),{trackUsage:c}=X(),{toggleNotification:l}=H(),{_unstableFormatAPIError:n}=q(),{model:m,collectionType:g}=k(),{isLoading:b,list:d,edit:i}=J(),[h]=Z(),o=async p=>{try{c("willSaveContentTypeLayout");const y=p.layout??[],M=Object.entries(i.metadatas).reduce((j,[s,r])=>{const{mainField:v,...R}=d.metadatas[s],{label:E,sortable:V}=y.find(W=>W.name===s)??{};return j[s]={edit:r,list:{...R,label:E||R.label,sortable:V||R.sortable}},j},{}),F=await h({layouts:{edit:i.layout.flatMap(j=>j.map(s=>s.map(({name:r,size:v})=>({name:r,size:v})))),list:y.map(j=>j.name)},settings:fe(p.settings,"displayName",void 0),metadatas:M,uid:m});"data"in F?(c("didEditListSettings"),l({type:"success",message:t({id:"notification.success.saved",defaultMessage:"Saved"})})):l({type:"danger",message:n(F.error)})}catch(y){console.error(y),l({type:"danger",message:t({id:"notification.error",defaultMessage:"An error occurred"})})}},a=f.useMemo(()=>({layout:d.layout.map(({label:p,sortable:y,name:M})=>({label:typeof p=="string"?p:t(p),sortable:y,name:M})),settings:d.settings}),[t,d.layout,d.settings]);return g===K?e.jsx(ee,{to:`/single-types/${m}`}):b?e.jsx(L.Loading,{}):e.jsxs(A.Root,{children:[e.jsx(L.Title,{children:`Configure ${d.settings.displayName} List View`}),e.jsx(te,{children:e.jsxs(N,{initialValues:a,onSubmit:o,method:"PUT",children:[e.jsx(xe,{collectionType:g,model:m,name:d.settings.displayName??""}),e.jsx(A.Content,{children:e.jsxs(S,{alignItems:"stretch",background:"neutral0",direction:"column",gap:6,hasRadius:!0,shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:[e.jsx(Me,{}),e.jsx(se,{}),e.jsx(we,{})]})})]})})]})},Ne=()=>{const t=ge(c=>c.admin_app.permissions.contentManager?.collectionTypesConfigurations);return e.jsx(L.Protect,{permissions:t,children:e.jsx(Le,{})})};export{Le as ListConfiguration,Ne as ProtectedListConfiguration};
