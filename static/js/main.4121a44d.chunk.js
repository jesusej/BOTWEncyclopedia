(this.webpackJsonpbotwencyclopedia=this.webpackJsonpbotwencyclopedia||[]).push([[0],{40:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),a=n(15),r=n.n(a),i=n(5),o=n(16),j=n.n(o),d=n(0);var l=function(e){var t=e.name,n=e.image,c=e.description;return Object(d.jsxs)("article",{className:"monster",children:[Object(d.jsxs)("h2",{children:[t.charAt(0).toUpperCase()+t.slice(1)," "]}),Object(d.jsx)("img",{src:n,alt:t}),Object(d.jsxs)("p",{children:[c," "]})]})};var u=function(){var e=Object(c.useState)(!0),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)([]),r=Object(i.a)(a,2),o=r[0],u=r[1],b=Object(c.useState)(""),h=Object(i.a)(b,2),p=h[0],O=h[1];Object(c.useEffect)((function(){m()}),[]);var m=function(){j.a.get("https://botw-compendium.herokuapp.com/api/v2/category/monsters").then((function(e){u(e.data.data),s(!1)}))},x=o.filter((function(e){return e.name.includes(p.toLowerCase())}));return n?Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{children:[Object(d.jsx)("h1",{children:"Hyrule's Monsters"}),Object(d.jsx)("h3",{children:"Now loading..."})]})}):Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("header",{children:[Object(d.jsx)("h1",{children:"Hyrule's Monsters"}),Object(d.jsx)("input",{type:"text",placeholder:"Type a monster",onChange:function(e){O(e.target.value)}})]}),Object(d.jsx)("section",{children:x.map((function(e){return Object(d.jsx)(l,{name:e.name,image:e.image,description:e.description},e.id)}))})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root")),b()}},[[40,1,2]]]);
//# sourceMappingURL=main.4121a44d.chunk.js.map