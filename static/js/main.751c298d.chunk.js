(this["webpackJsonpeve-vu"]=this["webpackJsonpeve-vu"]||[]).push([[0],{12:function(e,t,n){e.exports=n.p+"static/media/trench.e8c27594.jpeg"},13:function(e,t,n){e.exports=n.p+"static/media/woman-bouquet.0b119992.jpeg"},21:function(e,t,n){e.exports=n(37)},26:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),l=n(18),r=n.n(l),i=n(4),o=n(5),u=n(6),s=n(3),h=n(7),m=n(12),d=n.n(m),E=n(13),f=n.n(E),v=[{id:0,imgSrc:d.a},{id:1,imgSrc:f.a}],p=n(40),b=(n(26),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={menuActive:!1,hide:!1,count:0},n.handleClick=function(){n.setState((function(e){return e.menuActive=!e.menuActive}))},n.handleScroll=function(){n.setState((function(e){return window.scrollY>10?e.hide=!0:e.hide=!1,e.hide}))},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this;return c.a.createElement("header",{className:"header",id:"header"},c.a.createElement("h1",{className:"headerTitle"},"e",c.a.createElement("span",{onScroll:this.handleScroll,className:this.state.hide?"hide":null},"ve\xa0"),"V",c.a.createElement("span",{onScroll:this.handleScroll,className:this.state.hide?"hide":null},"u")),c.a.createElement("button",{className:"menuIcon",onClick:this.handleClick},c.a.createElement("span",null),c.a.createElement("span",null)),c.a.createElement("nav",{className:this.state.menuActive?"show":"hide",onClick:this.handleClick},c.a.createElement("svg",{height:"32",width:"32"}),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"/"},"home")),c.a.createElement("li",null,c.a.createElement("a",{href:"/"},"portfolio")),c.a.createElement("li",null,c.a.createElement("a",{href:"/"},"about")),c.a.createElement("li",null,c.a.createElement("a",{href:"/"},"contact")))),c.a.createElement("div",{className:"hero"},c.a.createElement(p.a,{index:this.state.count,onRequestChange:function(t){e.setState({count:t})}},v.map((function(e){return c.a.createElement(p.b,{key:e.id,src:e.imgSrc})})))))}}]),t}(a.Component)),w=(n(35),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"about",id:"about"},c.a.createElement("h2",null,"Eve Vu"))}}]),t}(a.Component));n(36);var g=function(){return c.a.createElement("main",null,c.a.createElement(b,null),c.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.751c298d.chunk.js.map