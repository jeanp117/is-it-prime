(this.webpackJsonpis_it_a_prime=this.webpackJsonpis_it_a_prime||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('{"a":["2 is odd, the rest of the prime numbers prove it!","New prime numbers every day","I know the last prime number but I am not going to tell you, but I can tell you the first one if you want"]}')},,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(5),o=c.n(r),a=(c(10),c(2)),i=(c(11),function(e){var t=new Audio(e);t.volume=0,t.play().catch(console.error)}),l=function(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20,n=Math.floor(Math.random()*t)+e,s=Math.floor(100*Math.random())<=c;return 2===n||0===n||n%2||s?n:n+1},j=c(4),u=c(0),h=function(e){var t=e.record,c=e.onGameOver,s=Object(n.useState)(2),r=Object(a.a)(s,2),o=r[0],j=r[1],h=Object(n.useState)(0),d=Object(a.a)(h,2),b=d[0],m=d[1],f=Object(n.useState)(10),x=Object(a.a)(f,2),p=x[0],w=x[1],v=Object(n.useState)(1),N=Object(a.a)(v,2),y=N[0],g=N[1],C=Object(n.useState)(3),S=Object(a.a)(C,2),F=S[0],I=S[1];Object(n.useEffect)((function(){var e=setInterval((function(){w((function(e){return e-1}))}),1e3);return function(){return clearInterval(e)}}),[]),Object(n.useEffect)((function(){0===F&&c(b)}),[F,b,c]),Object(n.useEffect)((function(){p<=5&&i("./audio/time.mp3"),p<=0&&c(b)}),[p,b,c]);var k=function(e){(function(e){for(var t=2;t<e;t++)if(e%t===0)return!1;return e>1})(o)===e?(m((function(e){return e+1})),(b+1)%(10+y)===0&&g((function(e){return e+1})),j(l(25*(y-1),25*y,33-1.25*y)),w((function(e){return e+2}))):(i("./audio/time.mp3"),I((function(e){return e-1})))};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:"".concat(p<=5?"pulse ":"")+"countdown shadow",children:p}),Object(u.jsxs)("h1",{className:"score shadow",children:["Lvl. ",y]}),Object(u.jsxs)("h1",{className:"score shadow",children:[b," points"]}),F&&Object(u.jsx)("h1",{className:"score shadow ".concat(1===F?"pulse":""," "),style:{color:"red"},children:new Array(F).fill("\u2665 ")}),Object(u.jsx)("h1",{className:"score shadow pulse record",style:{visibility:b>0&&b>t?"visible":"hidden"},children:"New Record!"}),Object(u.jsx)("h1",{className:"number shadow",children:o}),Object(u.jsx)("h2",{className:"subtitle shadow",children:"Is it prime?"}),Object(u.jsxs)("div",{className:"buttonContainer",children:[Object(u.jsx)(O,{color:"#EB5757",onClick:function(){return k(!1)},children:"X"}),Object(u.jsx)(O,{color:"#6FCF97",onClick:function(){return k(!0)},children:"\u2713"})]})]})},d=function(e){var t=e.score,c=e.record,n=e.onPlay;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:"title shadow",children:"Game over"}),t===c?Object(u.jsxs)("h3",{className:"shadow score max",children:["New record: ",c," points"]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h3",{className:"shadow score max",children:[t," points"]}),Object(u.jsxs)("h3",{className:"shadow score max",children:["Record: ",c," points"]})]}),Object(u.jsx)(m,{}),Object(u.jsx)("div",{className:"buttonContainer",children:Object(u.jsx)(O,{color:"#6FCF97",onClick:n,children:"\u25b6"})})]})},b=function(e){var t=e.score,c=e.onPlay;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:"title shadow",children:"Is it prime?"}),Object(u.jsx)(m,{}),t>0&&Object(u.jsxs)("h3",{className:"shadow score max",children:["record: ",t," "]}),Object(u.jsx)("div",{className:"buttonContainer",id:"play",children:Object(u.jsx)(O,{color:"#6FCF97",onClick:c,children:"\u25b6\ufe0e"})}),Object(u.jsxs)("div",{className:"buttonContainer",children:[Object(u.jsx)("a",{href:"https://github.com/jeanp117/Is-it-prime",className:"shadow",style:{color:"white"},children:"GitHub"}),Object(u.jsx)("a",{href:"https://www.buymeacoffee.com/jeanpr117",className:"shadow",style:{color:"white"},children:"Buy me a coffee"})]})]})};var m=function(){return Object(u.jsxs)(u.Fragment,{children:[" ",Object(u.jsxs)("p",{className:"subtitle shadow",style:{maxWidth:"100vh"},children:[" ",j.a[l(0,j.a.length)]]}),Object(u.jsx)("a",{href:"https://github.com/jeanp117/Is-it-prime",className:"shadow",style:{color:"white"},children:"commit your math joke"})]})},O=function(e){var t=e.onClick,c=e.color,n=e.children;return Object(u.jsx)("button",{className:"squareButton",onClick:t,style:{background:c},children:n})},f=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(!1),o=Object(a.a)(r,2),l=o[0],j=o[1],m=Object(n.useState)(0),O=Object(a.a)(m,2),f=O[0],x=O[1],p=Object(n.useState)(parseInt(JSON.parse(localStorage.getItem("record")+""))||0),w=Object(a.a)(p,2),v=w[0],N=w[1],y=function(){s(!0)};return Object(u.jsx)("div",{className:" gameContainer",style:{textAlign:"center"},children:c?Object(u.jsx)(h,{record:v,onGameOver:function(e){j(!0),s(!1),x(e),e>v?(!function(e){N(e),localStorage.setItem("record",JSON.stringify(e))}(e),i("./audio/max score.mp3")):i("./audio/game over.mp3")}}):l?Object(u.jsx)(d,{score:f,record:v,onPlay:y}):Object(u.jsx)(b,{score:f,onPlay:y})})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;c(e),n(e),s(e),r(e),o(e)}))};o.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),x()}],[[13,1,2]]]);
//# sourceMappingURL=main.8f29a0a3.chunk.js.map