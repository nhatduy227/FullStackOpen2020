(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{20:function(e,n,t){},38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var o=t(0),c=t(1),a=t(14),i=t.n(a),r=(t(20),t(3)),s=t(4),u=t.n(s),l="api/persons",d=function(){return u.a.get(l)},f=function(e){return u.a.post(l,e)},b=function(e){return u.a.delete("".concat(l,"/").concat(e))},j=function(e,n){return u.a.put("".concat(l,"/").concat(e),n)},m=function(e){var n=e.person,t=e.handleDelete;return Object(o.jsxs)("div",{className:"person",children:[Object(o.jsx)("span",{className:"person--name",children:n.name}),Object(o.jsx)("span",{className:"person--number",children:n.number}),Object(o.jsx)("button",{className:"button",onClick:function(){return t(n.id)},children:"Delete"})]})},h=function(e){var n=e.filter,t=e.persons,c=e.filteredPersons,a=e.handleDelete;return Object(o.jsx)("div",{className:"persons",children:""===n?null===t||void 0===t?void 0:t.map((function(e){return Object(o.jsx)(m,{person:e,handleDelete:a},e.name)})):null===c||void 0===c?void 0:c.map((function(e){return Object(o.jsx)(m,{person:e,handleDelete:a},e.name)}))})},v=function(e){var n=e.message,t=e.className;return null==n?null:Object(o.jsx)("div",{className:t,children:n})},p=(t(38),function(){var e=Object(c.useState)([]),n=Object(r.a)(e,2),t=n[0],a=n[1],i=Object(c.useState)(""),s=Object(r.a)(i,2),u=s[0],l=s[1],m=Object(c.useState)(""),p=Object(r.a)(m,2),O=p[0],x=p[1],g=Object(c.useState)(""),N=Object(r.a)(g,2),w=N[0],k=N[1],C=Object(c.useState)(t),D=Object(r.a)(C,2),y=D[0],S=D[1],T=Object(c.useState)(null),P=Object(r.a)(T,2),A=P[0],E=P[1];Object(c.useEffect)((function(){d().then((function(e){a(e.data)})),console.log("numbers updated")}),[]);return Object(o.jsxs)("main",{className:"container",children:[Object(o.jsx)("h2",{children:"Phonebook"}),Object(o.jsx)(v,{message:(null===A||void 0===A?void 0:A.notification)||(null===A||void 0===A?void 0:A.error),className:(null===A||void 0===A?void 0:A.notification)?"notification":"error"}),Object(o.jsxs)("div",{children:["Filter shown with"," ",Object(o.jsx)("input",{value:w,className:"input",onChange:function(e){k(e.target.value);var n=t.filter((function(n){return n.name.toLowerCase().includes(e.target.value.toLowerCase())}));S(n)}})]}),Object(o.jsx)("h3",{children:"Add a new"}),Object(o.jsxs)("form",{children:[Object(o.jsxs)("div",{children:["Name:"," ",Object(o.jsx)("input",{className:"input",value:u,onChange:function(e){l(e.target.value)}})]}),Object(o.jsxs)("div",{children:["Number:"," ",Object(o.jsx)("input",{value:O,className:"input",onChange:function(e){x(e.target.value)}})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:"button submit",onClick:function(e){e.preventDefault();var n={name:u,number:O};if(""!==u){if(O.length<8)return E({error:"".concat(O," is too short, please provide a number with at least 8 digits")}),void setTimeout((function(){E(null)}),5e3);if(u.length<3)return E({error:"".concat(u," is too short, please provide a name with at least 3 digits")}),void setTimeout((function(){E(null)}),5e3);for(var o=t.map((function(e){return e.name})),c=t.map((function(e){return e.number})),i=t.map((function(e){return e.id})),r=function(e){return o[e]===u&&c[e]===O?(alert("".concat(u," is already added to phonebook")),{v:void 0}):o[e]===u&&c[e]!==O?window.confirm("".concat(u," is already added to phonebook, replace the old number with a new one ?"))?(j(i[e],n).then((function(n){a(t.map((function(t){return t.id!==i[e]?t:n.data}))),E({notification:"Updated number for ".concat(u)}),setTimeout((function(){E(null)}),5e3),l(""),x("")})).catch((function(n){E({error:"Information for ".concat(u," has already been removed from server")}),a(t.filter((function(n){return n.id!==i[e]}))),setTimeout((function(){E(null)}),5e3)})),{v:void 0}):(console.log("Cancel clicked"),{v:void 0}):void 0},s=0;s<o.length;s++){var d=r(s);if("object"===typeof d)return d.v}f(n).then((function(e){a(t.concat(e.data)),l(""),x("")})),E({notification:"".concat(u," added to database")}),setTimeout((function(){E(null)}),5e3)}},type:"submit",children:"Add"})})]}),Object(o.jsx)("h2",{children:"Numbers"}),Object(o.jsx)(h,{filter:w,persons:t,filteredPersons:y,handleDelete:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&b(e).then((function(){var n=t.filter((function(n){return n.id!==e}));a(n),k("")}))}})]})});i.a.render(Object(o.jsx)(p,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.1903885b.chunk.js.map