(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{47:function(t,e,n){"use strict";n.r(e);var i=n(1),r=n(0),a=n.n(r),c=n(15),s=n.n(c),o=n(10),d=n(33),u=n(51),l=n(13),j=n(14);function b(){var t=Object(l.a)(["\nwidth:25%;\nheight:500px;\nbackground:#F3F4E5;\nbox-shadow: 8px 8px 5px 0px rgba(0,0,0,0.75);\n\n\n\n\nform{\n    height:70%;\n    width:100%;\n    display:flex;\n    flex-direction:column;\n    justify-content:space-around;\n    align-items:center;\n   \n   \n\n}\n\n.top{\n    width:100%;\n    height:15%;\n    background:#40877C;\n    border-radius:15px 15px 0 0;\n    \n}\n\n\n.bottom{\n    width:100%;\n    height:15%;\n    background:#DCDDCF;\n    border-radius:0 0 15px 15px ;\n}\n\n.input-wrapper{\n    width:80%;\n    border-bottom:2px solid #C8C9BC;\n    justify-content:center;\n    display:flex;\n    \n}\nbutton{\n    \n}\n\n"]);return b=function(){return t},t}var p=j.a.div(b()),h=function(t){var e=t.productName,n=t.setProductName,r=t.input,a=t.setInput,c=t.anotherInput,s=t.setAnotherInput,o=t.list,l=t.setList,j=t.setResult,b=t.result,h=t.quantity,x=t.setQuantity,O=t.unit,g=t.setUnit,f=(t.put,t.setPut),m=new Date,v=String(m.getDate()).padStart(2,"0"),w=String(m.getMonth()+1).padStart(2,"0"),y=m.getFullYear();m="".concat(y,"-").concat(w,"-").concat(v);var k=new Date(r),S=new Date(c),I=new Date(m),C=864e5;j((S.getTime()-I.getTime())/C);var F=(I.getTime()-k.getTime())/C;return Object(i.jsxs)(p,{children:[Object(i.jsx)("div",{className:"top"}),Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault(),l([].concat(Object(d.a)(o),[{product:e,resultNumber:b,id:Object(u.a)(),date:r,endDate:c,since:F,unit:O,quantity:h}])),n(""),f(!0),t.target.reset(),setTimeout((function(){f(!1)}),300)},id:"datas",children:[Object(i.jsxs)("div",{className:"input-wrapper",children:["\xc9tel neve:",Object(i.jsx)("input",{value:e,onChange:function(t){n(t.target.value)}})]}),Object(i.jsxs)("div",{className:"input-wrapper",children:[Object(i.jsx)("label",{for:"quantity",children:"Mennyis\xe9g"}),Object(i.jsx)("input",{id:"quantity",onChange:function(t){x(t.target.value)},type:"number"}),Object(i.jsxs)("select",{onChange:function(t){g(t.target.value)},name:"quantity",id:"quantity",form:"datas",children:[Object(i.jsx)("option",{hidden:!0,selected:!0,children:"V\xe1laszt"}),Object(i.jsx)("option",{value:"kg",children:"kg"}),Object(i.jsx)("option",{value:"dkg",children:"dkg"}),Object(i.jsx)("option",{value:"l",children:"l"}),Object(i.jsx)("option",{value:"dl",children:"dl"})]})]}),Object(i.jsxs)("div",{className:"input-wrapper",children:["Mikor lett berakva az \xe9tel?",Object(i.jsx)("input",{onChange:function(t){a(t.target.value)},type:"date"})]}),Object(i.jsxs)("div",{className:"input-wrapper",children:["Mikor kell kivenni az \xe9telt?",Object(i.jsx)("input",{onChange:function(t){s(t.target.value)},type:"date"})]}),Object(i.jsx)("div",{className:"input-wrapper",children:Object(i.jsx)("button",{children:"Fagy\xf3ba rak"})})]}),Object(i.jsx)("div",{className:"bottom"})]})},x=n(25);function O(){var t=Object(l.a)(["\n width:60px;\n height:40px;\n margin:15px;\n border:1px solid black;\n cursor: pointer;\n"]);return O=function(){return t},t}function g(){var t=Object(l.a)(["\nwidth:100%;\ndisplay:flex;\njustify-content:space-around;\n\n\n.inside{\n\n\n    width:30%;\n    height:700px;\n    border:3px solid black;\n    overflow-y:scroll;\n    display:flex;\n    flex-wrap:wrap;\n    justify-content:space-around;\n    overflow-y:scroll;\n   \n\n}\n\n.datas{\n    width:25%;\n    height:600px;\n\n\n    .top{\n        width:100%;\n        height:15%;\n        background:#40877C;\n        border-radius:15px 15px 0 0;\n    }\n\n    .content{\n        height:70%;\n        width:100%;\n        display:flex;\n        flex-direction:column;\n        justify-content:space-around;\n        align-items:center;\n        background:#F3F4E5;\n        overflow-y:scroll;\n    }\n\n\n    \n    .bottom{\n        width:100%;\n        height:15%;\n        background:#DCDDCF;\n        border-radius:0 0 15px 15px ;\n    }\n    \n}\n\n\n\n"]);return g=function(){return t},t}var f=j.a.div(g()),m=j.a.div(O()),v=n(50),w=n(52),y=(n(24),function(t){var e=t.listItem,n=t.list,r=t.setFilteredItem,a=t.show,c=t.show2,s=t.setShow,o=t.setShow2,d=(t.filterItem,t.setList),u=t.filteredItem,l=function(){return s(!1)},j=function(){return o(!0)},b=function(){return o(!1)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(m,{variant:"primary",onClick:function(){r(n.filter((function(t){return t.id===e.id}))),s(!0)},children:Object(i.jsx)("p",{children:e.product})}),u.map((function(t){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(v.a,{show:a,onHide:l,children:[Object(i.jsx)(v.a.Header,{closeButton:!0,children:Object(i.jsxs)(v.a.Title,{children:[" ",Object(i.jsx)("h3",{children:t.product})]})}),Object(i.jsxs)(v.a.Body,{children:[Object(i.jsxs)("p",{style:{color:"gray"},children:[" m\xe9g ",t.resultNumber," napig tarthat\xf3 a fagyaszt\xf3ban"]}),Object(i.jsxs)("p",{children:["Berak\xe1si d\xe1tum:",t.date," ( ",0===t.since?"ma":t.since+" napja"," )"]}),Object(i.jsxs)("p",{style:{color:"red"},children:["Szavatoss\xe1gi id\u0151: ",t.endDate]}),Object(i.jsxs)("p",{children:["Mennyis\xe9g:",t.quantity," ",t.unit]})]}),Object(i.jsxs)(v.a.Footer,{children:[Object(i.jsx)(w.a,{variant:"secondary",onClick:l,children:"Vissza"}),Object(i.jsx)(w.a,{variant:"danger",onClick:j,children:"T\xf6r\xf6l"})]})]}),Object(i.jsxs)(v.a,{show:c,onHide:b,backdrop:"static",keyboard:!1,children:[Object(i.jsx)(v.a.Header,{closeButton:!0,children:Object(i.jsx)(v.a.Title,{children:"T\xf6rl\xe9s"})}),Object(i.jsx)(v.a.Body,{children:"Biztosan ki akarod t\xf6r\xf6lni ezt a term\xe9ket?"}),Object(i.jsxs)(v.a.Footer,{children:[Object(i.jsx)(w.a,{variant:"secondary",onClick:b,children:"Vissza"}),Object(i.jsx)(w.a,{onClick:function(){d(n.filter((function(e){return e.id!==t.id}))),o(!1),s(!1)},variant:"primary",children:"Igen"})]})]})]})}))]})}),k=function(t){var e=t.list,n=t.setList,r=t.result,a=t.input,c=t.anotherInput,s=t.filteredItem,o=t.setFilteredItem,d=t.filterItem,u=t.setShow,l=t.show,j=t.show2,b=t.setShow2;return Object(i.jsx)(f,{children:Object(i.jsx)("div",{className:"inside",children:e.map((function(t){var p;return Object(i.jsx)("div",{children:Object(i.jsx)(y,(p={list:e,listItem:t,result:r,setList:n,input:a,anotherInput:c,filteredItem:s,setFilteredItem:o,setShow:u,filterItem:d,show:l,show2:j},Object(x.a)(p,"setShow",u),Object(x.a)(p,"setShow2",b),p),t.id)})}))})})};function S(){var t=Object(l.a)(["\ndisplay:flex;\njustify-content:space-around;\n"]);return S=function(){return t},t}var I=j.a.div(S()),C=(n.p,n.p+"static/media/frigider2.5bd7319b.jpg"),F=n.p+"static/media/frigider-open.2c47a8bb.jpg";function D(){var t=Object(l.a)(["\nwidth:40%;\nheight:600px;\n/* border:1px solid black; */\ndisplay:flex;\n\n\n.frigider{\n    width:100%;\nheight:600px;\n    background:url(",");\nbackground-size:contain;\nbackground-repeat:no-repeat;\ncursor:pointer;\ntransition: 0.6s;\n\n\n&:hover{\n    background:url(",");\nbackground-size:contain;\nbackground-repeat:no-repeat;\n}\n\n\n}\n\n\n\n.frigide-rotate{\n    animation:call 0.3s linear  ;\n         \n         @keyframes call {\n             0%{transform:rotate(0deg);}\n             50%{transform:rotate(4deg);}\n             100%{transform:rotate(0deg);}\n         }\n}\n"]);return D=function(){return t},t}var N=j.a.div(D(),C,F),z=n(17),T=function(t){var e=t.put;return Object(i.jsx)(N,{children:Object(i.jsx)(z.b,{to:"/list",className:"frigider".concat(e?" frigide-rotate":"")})})},q=n(5);var B=function(){var t=Object(r.useState)(),e=Object(o.a)(t,2),n=e[0],a=e[1],c=Object(r.useState)(""),s=Object(o.a)(c,2),d=s[0],u=s[1],l=Object(r.useState)([]),j=Object(o.a)(l,2),b=j[0],p=j[1],x=Object(r.useState)(),O=Object(o.a)(x,2),g=O[0],f=O[1],m=Object(r.useState)(),v=Object(o.a)(m,2),w=v[0],y=v[1],S=Object(r.useState)(),C=Object(o.a)(S,2),F=C[0],D=C[1],N=Object(r.useState)(),z=Object(o.a)(N,2),B=z[0],L=z[1],P=Object(r.useState)(!1),M=Object(o.a)(P,2),H=M[0],E=M[1],Q=Object(r.useState)([]),U=Object(o.a)(Q,2),V=U[0],A=U[1],J=Object(r.useState)(!1),R=Object(o.a)(J,2),Y=R[0],G=R[1],K=Object(r.useState)(!1),W=Object(o.a)(K,2),X=W[0],Z=W[1];return Object(i.jsx)(I,{children:Object(i.jsxs)(q.c,{children:[Object(i.jsxs)(q.a,{path:"/",exact:!0,children:[Object(i.jsx)(h,{productName:d,setProductName:u,input:g,setInput:f,anotherInput:w,setAnotherInput:y,list:b,setList:p,setResult:a,result:n,quantity:F,setQuantity:D,unit:B,setUnit:L,put:H,setPut:E}),Object(i.jsx)(T,{put:H})]}),Object(i.jsx)(q.a,{path:"/list",exact:!0,children:Object(i.jsx)(k,{list:b,setList:p,result:n,input:g,anotherInput:w,quantity:F,setQuantity:D,unit:B,setUnit:L,put:H,setPut:E,filteredItem:V,setFilteredItem:A,show:Y,show2:X,setShow:G,setShow2:Z})})]})})},L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(e){var n=e.getCLS,i=e.getFID,r=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),i(t),r(t),a(t),c(t)}))};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(z.a,{children:Object(i.jsx)(B,{})})}),document.getElementById("root")),L()}},[[47,1,2]]]);
//# sourceMappingURL=main.9fabd646.chunk.js.map