(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var o=n(3),c=n.n(o),a=n(11),r=n.n(a),s=(n(16),n(4)),i=(n(17),n(1));var u=n(25);var l=function(){var e=Object(o.useState)([]),t=Object(s.a)(e,2),n=t[0],c=(t[1],Object(o.useState)(!0)),a=Object(s.a)(c,2),r=a[0],l=a[1];return Object(o.useEffect)((function(){u.a.get('https://ybdemo-sandeshpawaskar42.cec.ocp.oraclecloud.com/content/published/api/v1.1/items?q=(type eq "card-structure")',{headers:{Authorization:"session",channelToken:"0a64a66aa81740368ac48630bed9bfd5",Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Headers":"Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token","Access-Control-Allow-Methods":"OPTIONS,POST","Access-Control-Allow-Credentials":!0,"Access-Control-Allow-Origin":"*","X-Requested-With":"*"}}).then((function(e){console.log(e)})).catch((function(e){console.error("Error fetching data:",e),l(!1)}))}),[]),Object(i.jsx)("div",{children:r?Object(i.jsx)("p",{children:"Loading..."}):Object(i.jsx)("ul",{children:n.map((function(e){return Object(i.jsx)("li",{children:e.population},e.population)}))})})};var d=function(){var e=Object(o.useState)([{id:1,name:"Wake Up",desc:"Wake up early morning for workout"},{id:2,name:"Bath",desc:"Go to bathroom and take a shower to clean yourself"},{id:3,name:"Have Breakfast",desc:"Then have a breakfast so you can start your work"}]),t=Object(s.a)(e,2);return t[0],t[1],Object(i.jsx)("div",{children:Object(i.jsx)(l,{})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),o(e),c(e),a(e),r(e)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(d,{})}),document.getElementById("root")),p()}},[[23,1,2]]]);
//# sourceMappingURL=main.2539f38c.chunk.js.map