(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/illustration.8bf2de47.svg"},25:function(e,t,a){e.exports=a(45)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),i=a(19),c=a.n(i),r=(a(30),a(3)),o=a(23),s=a(47),m=a(4),u=a(10);a(31),a(32);var d=function(e){var t=e.name,a=e.icon,i=e.id,c=Object(n.useState)(!1),o=Object(r.a)(c,2),s=o[0],m=o[1];function u(e){m(e)}return l.a.createElement("li",{className:"tool-item",onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return u(!1)},onClick:function(){return e=i,void document.getElementById(e).scrollIntoView({behavior:"smooth"});var e}},l.a.createElement("button",null,a),s&&l.a.createElement("span",{className:"tooltip"},t))};a(33);var g=function(e){var t=e.icon,a=e.link;return l.a.createElement("li",{className:"social-item"},l.a.createElement("a",{href:a,rel:"noopener noreferrer",target:"_blank"},t))};var E=function(){var e=[{icon:l.a.createElement(u.c,null),name:"Home",key:"home"},{icon:l.a.createElement(u.b,null),name:"About",key:"about"},{icon:l.a.createElement(u.d,null),name:"Skills",key:"skills"},{icon:l.a.createElement(u.a,null),name:"Contact",key:"contact"}],t=[{icon:l.a.createElement(m.b,null),link:"https://www.linkedin.com/in/gustavo-chagas-578706107/"},{icon:l.a.createElement(m.c,null),link:"mailto:gustavochagasb@gmail.com"},{icon:l.a.createElement(m.a,null),link:"https://www.facebook.com/gustavochagasss"}];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"logo"},l.a.createElement("p",null,"G")),l.a.createElement("ul",{className:"tools"},e.map((function(e,t){return l.a.createElement(d,{key:t,name:e.name,icon:e.icon,id:e.key})}))),l.a.createElement("div",{className:"socials"},t.map((function(e,t){return l.a.createElement(g,{key:t,icon:e.icon,link:e.link})})))))},f=(a(34),a(20)),v=a.n(f);a(35);var p=function(e){var t=e.title,a=e.text,n=e.openModal,i=e.actionTitle,c=e.direction;return l.a.createElement("div",{className:"block-text "+c},l.a.createElement("h1",{className:"title"},t),l.a.createElement("p",null,a),l.a.createElement("button",{className:"button",onClick:function(){return n()}},i))};a(36);var k=function(e){var t=e.position,a=e.items,i=e.changePosition,c=Object(n.useState)(!1),o=Object(r.a)(c,2),s=o[0],u=o[1];return l.a.createElement("div",{className:"settings "+t,onClick:function(){return u(!s)}},l.a.createElement(m.e,{title:"Set image position"}),s&&l.a.createElement("div",{className:"settings-content",onMouseLeave:function(){return u(!1)}},a.map((function(e,t){return l.a.createElement("div",{key:t,className:"setting-item "+(e.active?"active":""),onClick:function(){return t=e.key,void i(t);var t}},e.title)}))))};var h=function(e){var t=e.openModal,a=[{type:"left",class:""},{type:"right",class:"right"},{type:"no-image",class:"no-image"}],i=Object(n.useState)(a[0].class),c=Object(r.a)(i,2),o=c[0],s=c[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"home "+o,id:"home"},l.a.createElement(k,{key:"home",position:"right",items:[{key:"left",title:"Left"},{key:"right",title:"Right"},{key:"no-image",title:"No image"}],changePosition:function(e){var t=a.find((function(t){return t.type===e}));t&&s(t.class)}}),l.a.createElement("div",{className:"home-image"},l.a.createElement("img",{src:v.a,title:"Ilustration",alt:"Illustration"})),l.a.createElement(p,{title:"Frontend Developer",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",actionTitle:"Contact",direction:"right",openModal:t})))};a(37),a(38);var y=function(e){var t=e.name,a=e.status;return l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"label"},t),l.a.createElement("div",{className:"status"},a," %"),l.a.createElement("div",{className:"progress-bar"},l.a.createElement("div",{className:"stats",style:{width:a+"%"}})))};var b=function(e){var t=e.openModal;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"about",id:"about"},l.a.createElement(p,{title:"Gustavo Chagas",text:"Hi, i'm front-end developer with +4y agile development experience.",actionTitle:"Contact",direction:"left",openModal:t}),l.a.createElement("div",{className:"about-progress"},[{name:"HTML",status:95},{name:"CSS/SASS",status:85},{name:"Javascript",status:80},{name:"MarkoJS",status:80},{name:"ReactJS",status:80}].map((function(e,t){return l.a.createElement(y,{key:t,name:e.name,status:e.status})})))))},N=a(49),x=a(21),C=a.n(x),O=a(48),S=(a(40),function(e){var t=e.id,a=e.text,n=e.title,i=e.icon,c=e.canChange,o=e.moveCard,s=e.findCard,m=s(t).index,u=Object(O.a)({item:{type:"skill",id:t,originalIndex:m},collect:function(e){return{isDragging:e.isDragging()}},end:function(e,t){var a=t.getItem(),n=a.id,l=a.originalIndex;t.didDrop()||o(n,l)},canDrag:c}),d=Object(r.a)(u,2),g=d[0].isDragging,E=d[1],f=Object(N.a)({accept:"skill",canDrop:function(){return!1},hover(e){var a=e.id;if(a!==t){var n=s(t).index;o(a,n)}}}),v=Object(r.a)(f,2)[1];return l.a.createElement("div",{className:"skill "+(g?"is-dragging":""),ref:function(e){return E(v(e))}},l.a.createElement("div",{className:"skill-image"},i),l.a.createElement("div",{className:"skill-content"},l.a.createElement("h5",{className:"skill-title"},n),l.a.createElement("p",{className:"skill-description"},a)))}),j=(a(42),[{id:1,title:"My skill",text:"Write a cool JS library",icon:l.a.createElement(m.f,null)},{id:2,title:"My other skill",text:"Make it generic enough",icon:l.a.createElement(m.d,null)},{id:3,title:"Hello world",text:"Write README",icon:l.a.createElement(m.h,null)},{id:4,title:"Other example",text:"Create some examples",icon:l.a.createElement(m.g,null)}]),w=function(){var e=Object(n.useState)(j),t=Object(r.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(!1),o=Object(r.a)(c,2),s=o[0],m=o[1],u=function(e,t){var n=d(e),l=n.skill,c=n.index;i(C()(a,{$splice:[[c,1],[t,0,l]]}))},d=function(e){var t=a.filter((function(t){return"".concat(t.id)===e}))[0];return{skill:t,index:a.indexOf(t)}},g=Object(N.a)({accept:"skill"}),E=Object(r.a)(g,2)[1],f=[{key:"can-change",title:s?"Save Positions":"Change Position"}];return l.a.createElement("div",{className:"skills",id:"skills"},l.a.createElement(k,{key:"home",position:"right",items:f,changePosition:function(){m(!s)}}),l.a.createElement("h1",{className:"title text-center"},"Skills"),l.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry."),l.a.createElement("div",{className:"all-skills "+(s?"can-change":""),ref:E},a.map((function(e){return l.a.createElement(S,{key:e.id,id:"".concat(e.id),icon:e.icon,title:e.title,text:e.text,canChange:s,moveCard:u,findCard:d})}))))};a(43);var M=function(){var e=[{icon:l.a.createElement(m.b,null),link:"https://www.linkedin.com/in/gustavo-chagas-578706107/"},{icon:l.a.createElement(m.c,null),link:"mailto:gustavochagasb@gmail.com"},{icon:l.a.createElement(m.a,null),link:"https://www.facebook.com/gustavochagasss"}];return l.a.createElement("div",{className:"footer",id:"contact"},l.a.createElement("h1",{className:"title text-center"},"Contact"),l.a.createElement("div",{className:"socials"},e.map((function(e,t){return l.a.createElement("a",{key:t,href:e.link,target:"_blank",rel:"noopener noreferrer",className:"social-item"},e.icon)}))))};a(44);var I=function(e){var t=e.closeModal;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"modal-bg"},l.a.createElement("div",{className:"close-modal",onClick:function(){return t()}}),l.a.createElement("div",{className:"modal"},l.a.createElement("h4",null,"Contact"),l.a.createElement("p",null,"Send an e-mail to gustavochagasb@gmail.com."))))},D=[{key:"left",class:""},{key:"right",class:"header-right"},{key:"top",class:"header-top"},{key:"bottom",class:"header-bottom"}];var L=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],i=t[1];function c(){i(!0)}return l.a.createElement("div",{className:"all "+D[0].class},a&&l.a.createElement(I,{closeModal:function(){i(!1)}}),l.a.createElement(E,null),l.a.createElement("div",{className:"all-content"},l.a.createElement(s.a,{backend:o.a},l.a.createElement(h,{openModal:c}),l.a.createElement(b,{openModal:c}),l.a.createElement(w,null),l.a.createElement(M,null))))};c.a.render(l.a.createElement(L,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.1bd61110.chunk.js.map