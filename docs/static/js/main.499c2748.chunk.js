(this.webpackJsonpgiftexpert=this.webpackJsonpgiftexpert||[]).push([[0],{29:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(1),c=n(8),i=n.n(c),s=n(2),o=n(12),u=function(t){var e=t.setCategorias,n=Object(r.useState)(""),c=Object(s.a)(n,2),i=c[0],u=c[1];return Object(a.jsx)("form",{onSubmit:function(t){if(t.preventDefault(),""===i.trim())return alert("Ingrese una categoria por favor");e((function(t){return[i].concat(Object(o.a)(t))})),u("")},children:Object(a.jsx)("input",{type:"text",value:i,onChange:function(t){u(t.target.value)}})})},j=function(t){var e=t.imagen,n=e.url,r=e.title;return Object(a.jsx)("div",{className:"animate__animated animate__rotateIn animate__slower animate__infinite",children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("img",{src:n,alt:r}),Object(a.jsx)("p",{children:r})]})})},d=n(9),b=n.n(d),f=n(7),l=n.n(f),p=n(10),m=function(){var t=Object(p.a)(l.a.mark((function t(e){var n,a,r,c,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"xa6KmdtA90b1jaNKgId4pydhow3ahjTo",n="http://api.giphy.com/v1/gifs/search?q=".concat(e,"&limit=20&api_key=").concat("xa6KmdtA90b1jaNKgId4pydhow3ahjTo"),t.next=4,fetch(n);case 4:if(!(a=t.sent).ok){t.next=12;break}return t.next=8,a.json();case 8:return r=t.sent,c=r.data,i=c.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(t){var e=t.categoria,n=function(t){var e=Object(r.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){m(t).then((function(t){c({data:t,loading:!1})}))}),[t]),a}(e),c=n.data,i=n.loading;return Object(a.jsxs)(a.Fragment,{children:[i&&Object(a.jsx)("p",{children:"cargando..."}),Object(a.jsx)("h3",{children:e}),Object(a.jsx)("div",{className:"contenedor-imagen",children:c.map((function(t){return Object(a.jsx)(j,{imagen:t},t.id)}))})]})};g.prototype={categoria:b.a.string.isRequired};var h=g,x=n(11),O=n.n(x),v=function(){var t=Object(r.useState)([]),e=Object(s.a)(t,2),n=e[0],c=e[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"GiftExpertApp"}),Object(a.jsx)(u,{setCategorias:c}),Object(a.jsx)("hr",{}),n.map((function(t){return Object(a.jsx)(h,{categoria:t},O.a.generate())}))]})};n(29),n(30);i.a.render(Object(a.jsx)(v,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.499c2748.chunk.js.map