(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),i=n.n(r),s=n(4),a=n.n(s),o=(n(12),n(3)),j=n.n(o),d=n(5),u=n(6),p=function(e){var t=e.err,n=e.city,r=e.temperature,i=e.description,s=e.country;return console.log(n),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{id:"location",children:[t&&Object(c.jsx)("p",{children:t}),n&&Object(c.jsx)("p",{children:n}),s&&Object(c.jsxs)("p",{children:[" ",s]})]}),Object(c.jsxs)("div",{id:"temp",children:[Object(c.jsx)("img",{id:"temp-icon",src:"./icons/sun.svg",alt:""}),Object(c.jsxs)("p",{children:[Object(c.jsxs)("span",{id:"temp-value",children:[" ",r&&Object(c.jsxs)("p",{children:[r,Object(c.jsx)("span",{id:"temp-unit",children:"\u2103"})]})]})," "]})]}),Object(c.jsxs)("div",{id:"climate",children:[Object(c.jsxs)("p",{children:[" ",i&&Object(c.jsx)("p",{children:i})," "]}),Object(c.jsx)("p",{})]})]})};function h(e){var t=e.getData;return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{id:"search-form",onSubmit:t,children:[Object(c.jsx)("input",{type:"search",placeholder:"city",id:"search-input",required:!0,autocomplete:"off",name:"city"}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{id:"search-button",children:"Search"})]})})}n(14);var l=function(){var e=Object(r.useState)({}),t=Object(u.a)(e,2),n=t[0],i=t[1];function s(){return(s=Object(d.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.elements.city.value,console.log(n),t.preventDefault(),e.next=5,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&units=metric&appid=3d2f4c3e045a04ae5225d66f3a134015")).then((function(e){return e.json()})).then((function(e){return e}));case 5:"city not found"!==(c=e.sent).message?i({data:c,city:c.name,country:c.sys.country,description:c.weather[0].description,temperature:c.main.temp,error:""}):i({data:"",city:"",country:"",description:"",temperature:"",error:"Please Type Correctly"});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"heading",children:Object(c.jsx)("h1",{children:"Weather"})}),Object(c.jsx)(h,{getData:function(e){return s.apply(this,arguments)}}),Object(c.jsx)("main",{id:"app-container",children:Object(c.jsx)(p,{err:n.error,city:n.city,temperature:n.temperature,description:n.description,country:n.country})})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(l,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.c9910a25.chunk.js.map