(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{26:function(e,t,n){e.exports=n(56)},31:function(e,t,n){},50:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(24),c=n.n(r),o=n(8),u=n(1),i=n(16),m=n(10);n(31);var s=function(e){return l.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};var E=function(e){var t=e.children;return l.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)},f=n(11),d=n.n(f),h=function(){return d.a.get("/api/books")},b=function(e){return d.a.get("/api/books/"+e)},p=function(e){return d.a.delete("/api/books/"+e)},v=function(e){return d.a.post("/api/books",e)};function g(e){var t=e.fluid,n=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)}function j(e){var t=e.fluid,n=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},n)}function k(e){var t=e.size,n=e.children;return l.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")},n)}n(50);function N(e){var t=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},t))}function O(e){var t=e.children;return l.a.createElement("li",{className:"list-group-item"},t)}function y(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))}function x(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",Object.assign({className:"form-control",rows:"20"},e)))}function z(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var S=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({}),u=Object(m.a)(c,2),f=u[0],d=u[1];function b(){h().then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}function S(e){var t=e.target,n=t.name,a=t.value;d(Object(i.a)(Object(i.a)({},f),{},{[n]:a}))}return Object(a.useEffect)((function(){b()}),[]),l.a.createElement(g,{fluid:!0},l.a.createElement(j,null,l.a.createElement(k,{size:"md-6"},l.a.createElement(E,null,l.a.createElement("h1",null,"What Books Should I Read?")),l.a.createElement("form",null,l.a.createElement(y,{onChange:S,name:"title",placeholder:"Title (required)"}),l.a.createElement(y,{onChange:S,name:"author",placeholder:"Author (required)"}),l.a.createElement(x,{onChange:S,name:"synopsis",placeholder:"Synopsis (Optional)"}),l.a.createElement(z,{disabled:!(f.author&&f.title),onClick:function(e){e.preventDefault(),f.title&&f.author&&v({title:f.title,author:f.author,synopsis:f.synopsis}).then((function(e){return b()})).catch((function(e){return console.log(e)}))}},"Submit Book"))),l.a.createElement(k,{size:"md-6 sm-12"},l.a.createElement(E,null,l.a.createElement("h1",null,"Books On My List")),n.length?l.a.createElement(N,null,n.map((function(e){return l.a.createElement(O,{key:e._id},l.a.createElement(o.b,{to:"/books/"+e._id},l.a.createElement("strong",null,e.title," by ",e.author)),l.a.createElement(s,{onClick:function(){return t=e._id,void p(t).then((function(e){return b()})).catch((function(e){return console.log(e)}));var t}}))}))):l.a.createElement("h3",null,"No Results to Display"))))};var B=function(e){var t=Object(a.useState)({}),n=Object(m.a)(t,2),r=n[0],c=n[1],i=Object(u.f)().id;return Object(a.useEffect)((function(){b(i).then((function(e){return c(e.data)})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement(g,{fluid:!0},l.a.createElement(j,null,l.a.createElement(k,{size:"md-12"},l.a.createElement(E,null,l.a.createElement("h1",null,r.title," by ",r.author)))),l.a.createElement(j,null,l.a.createElement(k,{size:"md-10 md-offset-1"},l.a.createElement("article",null,l.a.createElement("h1",null,"Synopsis"),l.a.createElement("p",null,r.synopsis)))),l.a.createElement(j,null,l.a.createElement(k,{size:"md-2"},l.a.createElement(o.b,{to:"/"},"\u2190 Back to Authors"))))};var w=function(){return l.a.createElement(g,{fluid:!0},l.a.createElement(j,null,l.a.createElement(k,{size:"md-12"},l.a.createElement(E,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};var C=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"React Reading List"))};var R=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(C,null),l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:["/","/books"]},l.a.createElement(S,null)),l.a.createElement(u.a,{exact:!0,path:"/books/:id"},l.a.createElement(B,null)),l.a.createElement(u.a,null,l.a.createElement(w,null)))))};c.a.render(l.a.createElement(R,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.ac7a2c82.chunk.js.map