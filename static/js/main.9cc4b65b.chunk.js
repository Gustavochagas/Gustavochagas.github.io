(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/illustration.8bf2de47.svg"},function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(10),l=a.n(i),r=(a(17),a(2)),s=a(3),o=a(6),m=a(4),u=a(7),p=a(8),f=(a(18),a(5));a(19);var v=function(e){var t=e.name,a=e.icon,i=Object(n.useState)(!1),l=Object(f.a)(i,2),r=l[0],s=l[1];function o(e){s(e)}return c.a.createElement("li",{className:"tool-item",onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)}},c.a.createElement("button",null,a),r&&c.a.createElement("span",{className:"tooltip"},t))};a(20);var d=function(e){var t=e.icon,a=e.link;return c.a.createElement("li",{className:"social-item"},c.a.createElement("a",{href:a,rel:"noopener noreferrer",target:"_blank"},t))},E=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=[{icon:c.a.createElement(p.c,null),name:"Home"},{icon:c.a.createElement(p.b,null),name:"About"},{icon:c.a.createElement(p.d,null),name:"Skills"},{icon:c.a.createElement(p.a,null),name:"Contact"}],t=[{icon:c.a.createElement(u.b,null),link:"https://www.linkedin.com/in/gustavo-chagas-578706107/"},{icon:c.a.createElement(u.c,null),link:"mailto:gustavochagasb@gmail.com"},{icon:c.a.createElement(u.a,null),link:"https://www.facebook.com/gustavochagasss"}];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"logo"},c.a.createElement("p",null,"G")),c.a.createElement("ul",{className:"tools"},e.map((function(e,t){return c.a.createElement(v,{key:t,name:e.name,icon:e.icon})}))),c.a.createElement("div",{className:"socials"},t.map((function(e,t){return c.a.createElement(d,{key:t,icon:e.icon,link:e.link})})))))}}]),a}(n.Component),g=(a(21),a(11)),h=a.n(g);a(22);var y=function(e){var t=e.title,a=e.text,n=(e.action,e.actionTitle),i=e.direction;return c.a.createElement("div",{className:"block-text "+i},c.a.createElement("h1",{className:"title"},t),c.a.createElement("p",null,a),c.a.createElement("button",{className:"button"},n))};a(23);var b=function(e){var t=e.position,a=e.items,i=e.changePosition,l=Object(n.useState)(!1),r=Object(f.a)(l,2),s=r[0],o=r[1];return c.a.createElement("div",{className:"settings "+t,onClick:function(){return o(!s)}},c.a.createElement(u.d,{title:"Set image position"}),s&&c.a.createElement("div",{className:"settings-content",onMouseLeave:function(){return o(!1)}},a.map((function(e,t){return c.a.createElement("div",{key:t,className:"setting-item "+(e.active?"active":""),onClick:function(){return t=e.key,void i(t);var t}},e.title)}))))};var k=function(){var e=[{type:"left",class:""},{type:"right",class:"right"},{type:"no-image",class:"no-image"}],t=Object(n.useState)(e[0].class),a=Object(f.a)(t,2),i=a[0],l=a[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"home "+i},c.a.createElement(b,{key:"home",position:"right",items:[{key:"left",title:"Left"},{key:"right",title:"Right"},{key:"no-image",title:"No image"}],changePosition:function(t){var a=e.find((function(e){return e.type===t}));a&&l(a.class)}}),c.a.createElement("div",{className:"home-image"},c.a.createElement("img",{src:h.a,title:"Ilustration",alt:"Illustration"})),c.a.createElement(y,{title:"Frontend Developer",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",actionTitle:"Contact",direction:"right"})))};a(24),a(25);var N=function(e){var t=e.name,a=e.status;return c.a.createElement("div",{className:"progress"},c.a.createElement("div",{className:"label"},t),c.a.createElement("div",{className:"status"},a," %"),c.a.createElement("div",{className:"progress-bar"},c.a.createElement("div",{className:"stats",style:{width:a+"%"}})))},j=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"about"},c.a.createElement(y,{title:"Gustavo Chagas",text:"Hi, i'm front-end developer with +4y agile development experience.",actionTitle:"Contact",direction:"left"}),c.a.createElement("div",{className:"about-progress"},[{name:"HTML",status:95},{name:"CSS/SASS",status:85},{name:"Javascript",status:80},{name:"MarkoJS",status:80},{name:"ReactJS",status:80}].map((function(e,t){return c.a.createElement(N,{key:t,name:e.name,status:e.status})})))))}}]),a}(n.Component),O=[{key:"left",class:""},{key:"right",class:"header-right"},{key:"top",class:"header-top"},{key:"bottom",class:"header-bottom"}],S=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"all "+O[0].class},c.a.createElement(E,null),c.a.createElement("div",{className:"all-content"},c.a.createElement(k,null),c.a.createElement(j,null)))}}]),a}(n.Component);l.a.render(c.a.createElement(S,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.9cc4b65b.chunk.js.map