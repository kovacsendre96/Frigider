(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{60:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n(0),r=n.n(i),s=n(20),c=n.n(s),o=n(8),d=n(46),l=n(66),u=n(15),j=n(16);function h(){var t=Object(u.a)(["\nwidth:25%;\nheight:500px;\nbackground:#F3F4E5;\nbox-shadow: 8px 8px 5px 0px rgba(0,0,0,0.75);\n\n\n\n\nform{\n    height:70%;\n    width:100%;\n    display:flex;\n    flex-direction:column;\n    justify-content:space-around;\n    align-items:center;\n   \n   \n\n}\n\n.top{\n    width:100%;\n    height:15%;\n    background:#40877C;\n    border-radius:15px 15px 0 0;\n    \n}\n\n\n.bottom{\n    width:100%;\n    height:15%;\n    background:#DCDDCF;\n    border-radius:0 0 15px 15px ;\n}\n\n.input-wrapper{\n    width:80%;\n    border-bottom:2px solid #C8C9BC;\n    justify-content:flex-start;\n    display:flex;\n    \n}\n.button-wrapper{\n    border-bottom:2px solid #C8C9BC;\n    text-align:center;\n    width:80%;\n    \n}\n\n"]);return h=function(){return t},t}var b=j.a.div(h()),p=function(t){var e=t.productName,n=t.setProductName,i=t.input,r=t.setInput,s=t.anotherInput,c=t.setAnotherInput,o=t.list,u=t.setList,j=t.setResult,h=t.result,p=t.quantity,O=t.setQuantity,x=t.unit,g=t.setUnit,f=(t.put,t.setPut),m=new Date,v=String(m.getDate()).padStart(2,"0"),y=String(m.getMonth()+1).padStart(2,"0"),w=m.getFullYear();m="".concat(w,"-").concat(y,"-").concat(v);var k=new Date(i),S=new Date(s),C=new Date(m),I=864e5;j((S.getTime()-C.getTime())/I);var D=(C.getTime()-k.getTime())/I;return Object(a.jsxs)(b,{children:[Object(a.jsx)("div",{className:"top"}),Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),u([].concat(Object(d.a)(o),[{product:e,resultNumber:h,id:Object(l.a)(),date:i,endDate:s,since:D,unit:x,quantity:p}])),n(""),f(!0),t.target.reset(),setTimeout((function(){f(!1)}),300)},id:"datas",children:[Object(a.jsxs)("div",{className:"input-wrapper",children:["Megnevez\xe9s",Object(a.jsx)("input",{value:e,onChange:function(t){n(t.target.value)}})]}),Object(a.jsxs)("div",{className:"input-wrapper",children:[Object(a.jsx)("label",{placeholder:"Mennyis\xe9g",for:"quantity",children:"Mennyis\xe9g"}),Object(a.jsx)("input",{id:"quantity",onChange:function(t){O(t.target.value)},type:"number"}),Object(a.jsxs)("select",{onChange:function(t){g(t.target.value)},name:"quantity",id:"quantity",form:"datas",children:[Object(a.jsx)("option",{hidden:!0,selected:!0,children:"V\xe1laszt"}),Object(a.jsx)("option",{value:"kg",children:"kg"}),Object(a.jsx)("option",{value:"dkg",children:"dkg"}),Object(a.jsx)("option",{value:"l",children:"l"}),Object(a.jsx)("option",{value:"dl",children:"dl"})]})]}),Object(a.jsxs)("div",{className:"input-wrapper",children:["Berak\xe1si d\xe1tum",Object(a.jsx)("input",{onChange:function(t){r(t.target.value)},type:"date"})]}),Object(a.jsxs)("div",{className:"input-wrapper",children:["Szavatoss\xe1gi id\u0151",Object(a.jsx)("input",{onChange:function(t){c(t.target.value)},type:"date"})]}),Object(a.jsx)("div",{className:"button-wrapper",children:Object(a.jsx)("button",{children:"OK"})})]}),Object(a.jsx)("div",{className:"bottom"})]})},O=n(11);function x(){var t=Object(u.a)(["\n width:60px;\n height:40px;\n margin:15px;\n border:1px solid black;\n cursor: pointer;\n"]);return x=function(){return t},t}function g(){var t=Object(u.a)(["\nwidth:100%;\nheight:100vh;\ndisplay:flex;\njustify-content:center;\nalign-items:center;\n\n\n.inside{\n\n\n    width:30%;\n    height:700px;\n    border:3px solid black;\n    display:flex;\n    flex-direction:column;\n\n\n    .fresh-food{\n        height:50%;\n            overflow-y:scroll;\n       \n    \n        h2{\n            text-align:center;\n            border-bottom:1px solid blue;\n        }\n        \n        .fresh-food-items{\n         \n      display:flex;\n      flex-wrap:wrap;\n        \n        }\n        \n    }\n\n    .middle-fresh-food{\n        height:30%;\n        overflow-y:scroll;\n    }\n\n\n    .expired-food{\n        height:20%;\n        overflow-y:scroll;\n        flex-wrap:wrap;\n\n        h2{\n            text-align:center;\n            color:red;\n            border-bottom:1px solid red;\n        }\n    }\n   \n\n}\n\n\n\n\n\n"]);return g=function(){return t},t}var f=j.a.div(g()),m=j.a.div(x()),v=n(64),y=n(63),w=(n(37),function(t){var e=t.listItem,n=t.list,r=t.setFilteredItem,s=t.show,c=t.show2,d=t.setShow,l=t.setShow2,u=(t.filterItem,t.setList),j=t.filteredItem,h=t.quantityChange,b=t.setQuantityChange,p=Object(i.useState)(),O=Object(o.a)(p,2),x=O[0],g=O[1],f=function(){return d(!1)},w=function(){return l(!0)},k=function(){return l(!1)},S=function(){return b(!0)},C=function(){return b(!1)},I=function(t){g(t.target.value)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(m,{variant:"primary",onClick:function(){r(n.filter((function(t){return t.id===e.id}))),d(!0)},children:Object(a.jsx)("p",{children:e.product})}),j.map((function(t){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(v.a,{show:s,onHide:f,children:[Object(a.jsx)(v.a.Header,{closeButton:!0,children:Object(a.jsxs)(v.a.Title,{children:[" ",Object(a.jsx)("h3",{children:t.product})]})}),Object(a.jsxs)(v.a.Body,{children:[Object(a.jsxs)("p",{style:{color:"gray"},children:[" m\xe9g ",t.resultNumber," napig tarthat\xf3 a fagyaszt\xf3ban"]}),Object(a.jsxs)("p",{children:["Berak\xe1si d\xe1tum:",t.date," ( ",0===t.since?"ma":t.since+" napja"," )"]}),Object(a.jsxs)("p",{style:{color:"red"},children:["Szavatoss\xe1gi id\u0151: ",t.endDate]}),Object(a.jsxs)("p",{children:["Mennyis\xe9g:",t.quantity," ",t.unit]})]}),Object(a.jsxs)(v.a.Footer,{children:[Object(a.jsx)(y.a,{variant:"secondary",onClick:f,children:"Vissza"}),Object(a.jsx)(y.a,{variant:"primary",onClick:S,children:"Mennyis\xe9g m\xf3dos\xedt\xe1sa"}),Object(a.jsx)(y.a,{variant:"danger",onClick:w,children:"T\xf6r\xf6l"})]})]}),Object(a.jsxs)(v.a,{show:c,onHide:k,backdrop:"static",keyboard:!1,children:[Object(a.jsx)(v.a.Header,{closeButton:!0,children:Object(a.jsx)(v.a.Title,{children:"T\xf6rl\xe9s"})}),Object(a.jsx)(v.a.Body,{children:"Biztosan ki akarod t\xf6r\xf6lni ezt a term\xe9ket?"}),Object(a.jsxs)(v.a.Footer,{children:[Object(a.jsx)(y.a,{variant:"secondary",onClick:k,children:"Vissza"}),Object(a.jsx)(y.a,{onClick:function(){u(n.filter((function(e){return e.id!==t.id}))),l(!1),d(!1)},variant:"primary",children:"Igen"})]})]}),Object(a.jsxs)(v.a,{show:h,onHide:C,backdrop:"static",keyboard:!1,children:[Object(a.jsx)(v.a.Header,{closeButton:!0,children:Object(a.jsx)(v.a.Title,{children:"Mennyis\xe9g m\xf3dos\xedt\xe1sa"})}),Object(a.jsxs)(v.a.Body,{children:["\xcdrja be a m\xf3dos\xedtani k\xedv\xe1nt mennyis\xe9get !",Object(a.jsx)("input",{onChange:I,type:"number"})]}),Object(a.jsxs)(v.a.Footer,{children:[Object(a.jsx)(y.a,{variant:"secondary",onClick:C,children:"Vissza"}),Object(a.jsx)(y.a,{onClick:function(){t.quantity=parseInt(t.quantity)+parseInt(x),b(!1)},variant:"success",children:"Hozz\xe1ad"}),Object(a.jsx)(y.a,{onClick:function(){t.quantity=parseInt(t.quantity)-parseInt(x),0===t.quantity&&w(),b(!1)},variant:"warning",children:"Kivon"})]})]})]})}))]})}),k=n(65),S=function(t){var e=t.list,n=t.setList,i=t.result,r=t.input,s=t.anotherInput,c=t.filteredItem,o=t.setFilteredItem,d=t.filterItem,l=t.setShow,u=t.show,j=t.show2,h=t.setShow2,b=t.quantityChange,p=t.setQuantityChange,x=new Date,g=String(x.getDate()).padStart(2,"0"),m=String(x.getMonth()+1).padStart(2,"0"),v=x.getFullYear();x="".concat(v,"-").concat(m,"-").concat(g);var y=864e5;return Object(a.jsx)(f,{children:Object(a.jsxs)("div",{className:"inside",children:[Object(a.jsxs)("div",{className:"fresh-food",children:[Object(a.jsx)(k.a,{variant:"success",children:"Friss \xe9telek"}),Object(a.jsx)("div",{className:"fresh-food-items",children:e.map((function(t){var g;return(new Date(t.endDate).getTime()-new Date(x).getTime())/y>3?Object(a.jsx)(w,(g={list:e,listItem:t,result:i,setList:n,input:r,anotherInput:s,filteredItem:c,setFilteredItem:o,setShow:l,filterItem:d,show:u,show2:j},Object(O.a)(g,"setShow",l),Object(O.a)(g,"setShow2",h),Object(O.a)(g,"quantityChange",b),Object(O.a)(g,"setQuantityChange",p),g),t.id):""}))})]}),Object(a.jsxs)("div",{className:"middle-fresh-food",children:[Object(a.jsx)(k.a,{variant:"warning",children:"3 napon bel\xfcl lej\xe1r\xf3 \xe9telek"}),Object(a.jsx)("div",{className:"fresh-food-items",children:e.map((function(t){var g;return(new Date(t.endDate).getTime()-new Date(x).getTime())/y<3&&(new Date(t.endDate).getTime()-new Date(x).getTime())/y>0?Object(a.jsx)(w,(g={list:e,listItem:t,result:i,setList:n,input:r,anotherInput:s,filteredItem:c,setFilteredItem:o,setShow:l,filterItem:d,show:u,show2:j},Object(O.a)(g,"setShow",l),Object(O.a)(g,"setShow2",h),Object(O.a)(g,"quantityChange",b),Object(O.a)(g,"setQuantityChange",p),g),t.id):""}))})]}),Object(a.jsxs)("div",{className:"expired-food",children:[Object(a.jsx)(k.a,{variant:"danger",children:"Lej\xe1rt szavatoss\xe1g\xfa \xe9telek"}),e.map((function(t){var g;return t.endDate<=x?Object(a.jsx)("div",{children:Object(a.jsx)(w,(g={list:e,listItem:t,result:i,setList:n,input:r,anotherInput:s,filteredItem:c,setFilteredItem:o,setShow:l,filterItem:d,show:u,show2:j},Object(O.a)(g,"setShow",l),Object(O.a)(g,"setShow2",h),Object(O.a)(g,"quantityChange",b),Object(O.a)(g,"setQuantityChange",p),g),t.id)}):""}))]})]})})};function C(){var t=Object(u.a)(["\ndisplay:flex;\njustify-content:space-around;\nalign-items:center;\nheight:100vh;\n"]);return C=function(){return t},t}var I=j.a.div(C()),D=n.p+"static/media/frigider2.5bd7319b.jpg",F=n.p+"static/media/frigider-open.2c47a8bb.jpg";function q(){var t=Object(u.a)(["\nwidth:40%;\nheight:600px;\n/* border:1px solid black; */\ndisplay:flex;\n\n\n.frigider{\n    width:100%;\nheight:600px;\n    background:url(",");\nbackground-size:contain;\nbackground-repeat:no-repeat;\ncursor:pointer;\ntransition: 0.6s;\n\n\n&:hover{\n    background:url(",");\nbackground-size:contain;\nbackground-repeat:no-repeat;\n}\n\n\n}\n\n\n\n.frigide-rotate{\n    animation:call 0.3s linear  ;\n         \n         @keyframes call {\n             0%{transform:rotate(0deg);}\n             50%{transform:rotate(4deg);}\n             100%{transform:rotate(0deg);}\n         }\n}\n"]);return q=function(){return t},t}var N=j.a.div(q(),D,F),T=n(24),z=function(t){var e=t.put;return Object(a.jsx)(N,{children:Object(a.jsx)(T.b,{to:"/list",className:"frigider".concat(e?" frigide-rotate":"")})})},B=n(5);var L=function(){var t=Object(i.useState)(),e=Object(o.a)(t,2),n=e[0],r=e[1],s=Object(i.useState)(""),c=Object(o.a)(s,2),d=c[0],l=c[1],u=Object(i.useState)([]),j=Object(o.a)(u,2),h=j[0],b=j[1],O=Object(i.useState)(),x=Object(o.a)(O,2),g=x[0],f=x[1],m=Object(i.useState)(),v=Object(o.a)(m,2),y=v[0],w=v[1],k=Object(i.useState)(),C=Object(o.a)(k,2),D=C[0],F=C[1],q=Object(i.useState)(),N=Object(o.a)(q,2),T=N[0],L=N[1],M=Object(i.useState)(!1),Q=Object(o.a)(M,2),H=Q[0],P=Q[1],V=Object(i.useState)([]),U=Object(o.a)(V,2),A=U[0],E=U[1],J=Object(i.useState)(!1),K=Object(o.a)(J,2),R=K[0],Y=K[1],G=Object(i.useState)(!1),W=Object(o.a)(G,2),X=W[0],Z=W[1],$=Object(i.useState)(!1),_=Object(o.a)($,2),tt=_[0],et=_[1];return Object(a.jsx)(I,{children:Object(a.jsxs)(B.c,{children:[Object(a.jsxs)(B.a,{path:"/Frigider",exact:!0,children:[Object(a.jsx)(p,{productName:d,setProductName:l,input:g,setInput:f,anotherInput:y,setAnotherInput:w,list:h,setList:b,setResult:r,result:n,quantity:D,setQuantity:F,unit:T,setUnit:L,put:H,setPut:P}),Object(a.jsx)(z,{put:H})]}),Object(a.jsx)(B.a,{path:"/list",exact:!0,children:Object(a.jsx)(S,{list:h,setList:b,result:n,input:g,anotherInput:y,quantity:D,setQuantity:F,unit:T,setUnit:L,put:H,setPut:P,filteredItem:A,setFilteredItem:E,show:R,show2:X,setShow:Y,setShow2:Z,quantityChange:tt,setQuantityChange:et})})]})})},M=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),i(t),r(t),s(t)}))};c.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(T.a,{children:Object(a.jsx)(L,{})})}),document.getElementById("root")),M()}},[[60,1,2]]]);
//# sourceMappingURL=main.8b66e2a6.chunk.js.map