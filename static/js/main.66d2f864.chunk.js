(this["webpackJsonpppl-finder"]=this["webpackJsonpppl-finder"]||[]).push([[0],{141:function(e,n,t){"use strict";t.r(n);var i,a,c,r,s,o,l,d,u,j,b,O=t(0),f=t.n(O),x=t(9),h=t.n(x),v=t(46),p=t(14),m=t(143),g=t(11),y=t(12),C=y.a.div(i||(i=Object(g.a)(["\n  font-size: ",";\n  font-weight: ",";\n"])),(function(e){return e.size}),(function(e){return e.bold?"700":"400"})),k=t(4),w=function(e){var n=e.size,t=void 0===n?"14px":n,i=e.children,a=e.bold;return Object(k.jsx)(m.a,{component:"span",children:Object(k.jsx)(C,{size:t,bold:a,children:i})})},z=t(29),F=t(15),S=t(186),U=function(e){var n=e.size,t=e.color,i=e.thickness,a=e.variant;return Object(k.jsx)(S.a,{size:n,color:t,thickness:i,variant:a})},A=t(196),E=t(187),L=y.a.div(a||(a=Object(g.a)([""]))),R=function(e){var n=e.isChecked,t=e.onChange,i=e.label,a=e.value;return Object(k.jsx)(L,{children:Object(k.jsx)(E.a,{control:Object(k.jsx)(A.a,{checked:n,onChange:function(){t&&t(a)},color:"primary"}),label:i})})},M=y.a.div(c||(c=Object(g.a)([""]))),V=t(195),D=function(e){var n=e.isChecked,t=e.onChange,i=e.label,a=e.value,c=e.disable;return Object(k.jsx)(M,{children:Object(k.jsx)(E.a,{control:Object(k.jsx)(V.a,{checked:n,onChange:function(){t&&t(a)},color:"primary"}),label:i,disabled:c})})},I=t(144),T=t(88),B=t.n(T),N=y.a.div(r||(r=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),J=y.a.div(s||(s=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  width: 500px;\n  height: calc(100vh - 270px);\n  margin-block-start: 30px;\n  overflow-y: auto;\n"]))),P=y.a.div(o||(o=Object(g.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n"]))),W=y.a.div(l||(l=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  max-height: 128px;\n  gap: 2px;\n  overflow: hidden;\n"]))),_=y.a.img(d||(d=Object(g.a)(["\n  border-radius: 45%;\n"]))),q=y.a.div(u||(u=Object(g.a)(["\n  display: flex;\n  justify-content: center;\n"]))),G=y.a.div(j||(j=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  opacity: ",";\n  transition: opacity 0.2s ease-in-out;\n"])),(function(e){return e.isVisible?1:0})),H=y.a.div(b||(b=Object(g.a)(["\n  display: flex;\n  justify-content: center;\n  & > * {\n    margin-inline-end: 8px;\n  }\n"]))),K="ADD_FAVORITE",Q="REMOVE_FAVORITE";var X,Y,Z,$,ee,ne,te,ie,ae=t(39),ce=t(193),re=t(188),se=function(e){var n=e.users,t=e.loading,i=e.fetchUsers,a=Object(O.useState)(),c=Object(F.a)(a,2),r=c[0],s=c[1],o=Object(O.useState)([]),l=Object(F.a)(o,2),d=l[0],u=l[1],j=Object(O.useState)(""),b=Object(F.a)(j,2),f=b[0],x=b[1],h=Object(O.useState)(""),v=Object(F.a)(h,2),p=v[0],m=v[1],g=Object(ae.c)((function(e){return e.reduser.favorites})),y=Object(ae.b)(),C=Object(O.useRef)(),S=Object(O.useCallback)((function(e){t||(C.current&&C.current.disconnect(),C.current=new IntersectionObserver((function(e){e[0].isIntersecting&&i()})),e&&C.current.observe(e))}),[t]),A=function(e){return d.includes(e)},E=function(e){return f==e},L=function(){s()},M=function(e){g.includes(e)?y(function(e){return{type:Q,payload:{user:e}}}(e)):y(function(e){return{type:K,payload:{user:e}}}(e))},V=function(e,n){return!!g.includes(e)||n===r},T=function(e){var n=d.slice();if(n.includes(e)){var t=n.indexOf(e);n.splice(t,1)}else n.splice(0,0,e);u(n)},X=function(e){x(e)};return""!=f&&n.sort((function(e,n){return"First"==f?e.name.first.localeCompare(n.name.first):e.name.last.localeCompare(n.name.last)})),Object(k.jsxs)(N,{children:[Object(k.jsxs)(H,{children:[Object(k.jsx)(R,{value:"BR",label:"Brazil",onChange:T,isChecked:A("BR")}),Object(k.jsx)(R,{value:"AU",label:"Australia",onChange:T,isChecked:A("AU")}),Object(k.jsx)(R,{value:"CA",label:"Canada",onChange:T,isChecked:A("CA")}),Object(k.jsx)(R,{value:"DE",label:"Germany",onChange:T,isChecked:A("DE")}),Object(k.jsx)(R,{value:"FR",label:"France",onChange:T,isChecked:A("FR")})]}),Object(k.jsxs)(H,{children:[Object(k.jsx)(D,{value:"First",label:"First Name",onChange:X,isChecked:E("First"),disable:!1}),Object(k.jsx)(D,{value:"Last",label:"Last Name",onChange:X,isChecked:E("Last"),disable:!1}),Object(k.jsx)(D,{value:"",label:"Without Sorting",onChange:X,isChecked:E(""),disable:!E("")})]}),Object(k.jsxs)(H,{children:[Object(k.jsx)(ce.a,{id:"outlined-basic",label:"Search",variant:"outlined",onChange:function(e){return m(e.target.value)},value:p}),Object(k.jsx)(re.a,{variant:"contained",color:"primary",onClick:function(){m("")},children:"Clear"})]}),Object(k.jsxs)(J,{children:[n.filter((function(e){var n=e.nat;return 0==d.length||!!d.includes(n)})).filter((function(e){if("undifended"!=e){if(""==p)return!0;var n=e.name.first;n=n.toUpperCase();var t=p.toUpperCase();if(n.startsWith(t))return!0}return!1})).map((function(e,t){return Object(k.jsxs)(P,Object(z.a)(Object(z.a)({onMouseEnter:function(){return function(e){s(e)}(t)},onMouseLeave:L},t+1==n.length?{ref:S}:{}),{},{children:[Object(k.jsx)(_,{src:null===e||void 0===e?void 0:e.picture.large,alt:""}),Object(k.jsxs)(W,{children:[Object(k.jsxs)(w,{size:"22px",bold:!0,children:[null===e||void 0===e?void 0:e.name.title," ",null===e||void 0===e?void 0:e.name.first," ",null===e||void 0===e?void 0:e.name.last]}),Object(k.jsx)(w,{size:"14px",children:null===e||void 0===e?void 0:e.email}),Object(k.jsxs)(w,{size:"14px",children:[null===e||void 0===e?void 0:e.location.street.number," ",null===e||void 0===e?void 0:e.location.street.name]}),Object(k.jsxs)(w,{size:"14px",children:[null===e||void 0===e?void 0:e.location.city," ",null===e||void 0===e?void 0:e.location.country]})]}),Object(k.jsx)(G,{isVisible:V(e,t),children:Object(k.jsx)(I.a,{onClick:function(){return M(e)},children:Object(k.jsx)(B.a,{color:"error"})})})]}),t)})),t&&Object(k.jsx)(q,{children:Object(k.jsx)(U,{color:"primary",size:"45px",thickness:6,variant:"indeterminate"})})]})]})},oe=t(62),le=t(22),de=t(89),ue=t(90),je=t.n(ue),be=y.a.div(X||(X=Object(g.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),Oe=y.a.div(Y||(Y=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n"]))),fe=y.a.div(Z||(Z=Object(g.a)(["\n  display: flex;\n"]))),xe=(y.a.div($||($=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  max-width: 400px;\n  width: 100%;\n"]))),function(){var e=function(){var e=Object(O.useState)([]),n=Object(F.a)(e,2),t=n[0],i=n[1],a=Object(O.useState)(!1),c=Object(F.a)(a,2),r=c[0],s=c[1];function o(){return l.apply(this,arguments)}function l(){return(l=Object(de.a)(Object(oe.a)().mark((function e(){var n;return Object(oe.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,je.a.get("https://randomuser.me/api/?results=25&page=1");case 3:n=e.sent,s(!1),i((function(e){return Object(le.a)(new Set([].concat(Object(le.a)(e),Object(le.a)(n.data.results))))}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(O.useEffect)((function(){o()}),[]),{users:t,isLoading:r,fetchUsers:o}}(),n=e.users,t=e.isLoading,i=e.fetchUsers;return Object(k.jsx)(be,{children:Object(k.jsxs)(Oe,{children:[Object(k.jsx)(fe,{children:Object(k.jsx)(w,{size:"64px",bold:!0,children:"PplFinder"})}),Object(k.jsx)(se,{users:n,isLoading:t,fetchUsers:i})]})})}),he=y.a.div(ee||(ee=Object(g.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),ve=y.a.div(ne||(ne=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n"]))),pe=y.a.div(te||(te=Object(g.a)(["\n  display: flex;\n"]))),me=(y.a.div(ie||(ie=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  max-width: 400px;\n  width: 100%;\n"]))),function(){var e=Object(ae.c)((function(e){return e.reduser.favorites}));return Object(k.jsx)(he,{children:Object(k.jsxs)(ve,{children:[Object(k.jsx)(pe,{children:Object(k.jsx)(w,{size:"64px",bold:!0,children:"Favorites"})}),Object(k.jsx)(se,{users:e,isLoading:!1,fetchUsers:function(){return e}})]})})}),ge=t(93),ye=t(189),Ce=t(190),ke=function(e){var n=e.children,t={MuiTab:{root:{backgroundColor:"#303030"}}},i=f.a.useMemo((function(){return Object(ge.a)({overrides:t,palette:{type:"dark",primary:{main:"#84ffff"},error:{main:"#f06292"}}})}),[]);return Object(k.jsxs)(ye.a,{theme:i,children:[Object(k.jsx)(Ce.a,{}),n]})},we=t(191),ze=t(194),Fe=t(192),Se=function(){var e=Object(O.useState)((function(){var e=location.pathname;return"/"===e?0:"/Favorites"===e?1:void 0})),n=Object(F.a)(e,2),t=n[0],i=n[1];return Object(k.jsx)(we.a,{position:"static",color:"transparent",style:{position:"relative",top:0},children:Object(k.jsxs)(ze.a,{value:t,onChange:function(e,n){i(n)},"aria-label":"Navigation",indicatorColor:"primary",textColor:"primary",children:[Object(k.jsx)(Fe.a,{label:"Home",index:0,component:v.b,to:"/"}),Object(k.jsx)(Fe.a,{label:"Favorites",index:1,component:v.b,to:"/Favorites"})]})})},Ue=t(91),Ae=t(94),Ee=t(92),Le=t.n(Ee),Re=t(21),Me=t(55),Ve=t(47),De={favorites:[]},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case K:var t,i=null===(t=n.payload)||void 0===t?void 0:t.user;return Object(z.a)(Object(z.a)({},e),{},{favorites:[].concat(Object(le.a)(e.favorites),[i])});case Q:var a,c=null===(a=n.payload)||void 0===a?void 0:a.user,r=e.favorites,s=r.filter((function(e){return e!==c}));return Object(z.a)(Object(z.a)({},e),{},{favorites:s});default:return e}},Te=Object(Re.b)({reduser:Ie}),Be={key:"root",storage:Le.a},Ne=Object(Me.a)(Be,Te),Je=Object(Ae.a)({reducer:Ne,devTools:!1,middleware:[Ve.a]}),Pe=Object(Me.b)(Je),We=function(){return Object(k.jsx)(ke,{children:Object(k.jsx)(ae.a,{store:Je,children:Object(k.jsx)(Ue.a,{loading:null,persistor:Pe,children:Object(k.jsxs)(v.a,{basename:"/PplFinder",children:[Object(k.jsx)(Se,{}),Object(k.jsxs)(p.c,{children:[Object(k.jsx)(p.a,{exact:!0,path:"/",component:xe}),Object(k.jsx)(p.a,{exact:!0,path:"/Favorites",component:me})]})]})})})})};h.a.render(Object(k.jsx)(We,{}),document.querySelector("#root"))}},[[141,1,2]]]);
//# sourceMappingURL=main.66d2f864.chunk.js.map