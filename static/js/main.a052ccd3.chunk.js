(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{26:function(n,e,t){"use strict";t.r(e);var i=t(1),r=t(2),o=t(13),c=t.n(o),a=t(3),s=t(4);function d(){var n=Object(a.a)(["\n  html {\n    scroll-behavior: smooth;\n  }\n  \n  body {\n    font-family: 'Fira Sans Condensed', sans-serif;    \n    color: #333333;\n    background-color: #fff;\n    padding: 0;\n    margin: 0;\n  }\n  \n  body * {\n    box-sizing: border-box;\n    &::selection {\n      background-color: rgba(79,192,141,0.5);\n    }\n  }\n  \n  ul, ol, li {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n  }\n  \n  dl, dt, dd {\n    margin: 0;\n    padding: 0;\n  }\n  \n  a {\n    text-decoration: none;\n    color: #333;\n  }\n  \n  button {\n    border: none;\n    cursor: pointer;\n    outline: none;\n  }\n"]);return d=function(){return n},n}var l=Object(s.a)(d()),u=t(5),m=t(10),b=t(6),j=t(18);function f(){var n=Object(a.a)(["\n  &:hover {\n    ",";\n  }\n"]);return f=function(){return n},n}function h(){var n=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  &:first-child::after {\n    content: '/';\n    margin: 0 0.3em;\n  }\n"]);return h=function(){return n},n}function p(){var n=Object(a.a)(["\n      animation-name: appear;\n      animation-duration: 1s;\n      animation-timing-function: ease-in;\n      animation-fill-mode: forwards;\n    "]);return p=function(){return n},n}function g(){var n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  padding-left: 1.5625rem;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  ","\n  @keyframes appear {\n    0% {\n      opacity: 0;\n    }\n    5% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n"]);return g=function(){return n},n}function O(){var n=Object(a.a)(["\n      width: 280px;\n      @media screen and (min-width: 768px) {\n        width: 310px;\n      }\n    "]);return O=function(){return n},n}function x(){var n=Object(a.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 35px;\n  height: 35px;\n  ","\n  border-radius: 30px;\n  font-size: 1rem;\n  font-weight: 400;\n  color: #333333;\n  background-color: #fff;\n  transition: width 250ms ease-in-out;\n  @media screen and (min-width: 768px) {\n    width: 50px;\n    height: 50px;\n    font-size: 0.9375rem;\n  }\n  ","\n"]);return x=function(){return n},n}function v(){var n=Object(a.a)(["\n    border: 1px solid ",";\n  "]);return v=function(){return n},n}function w(){var n=Object(a.a)(["\n  ","\n"]);return w=function(){return n},n}function y(){var n=Object(a.a)(["\n    color: ",";\n  "]);return y=function(){return n},n}function C(){var n=Object(a.a)(["\n  ","\n"]);return C=function(){return n},n}var k=Object(s.b)(C(),(function(n){var e=n.mainColor;return Object(s.b)(y(),e)})),z=Object(s.b)(w(),(function(n){var e=n.mainColor;return Object(s.b)(v(),e)})),S=s.c.div(x(),z,(function(n){return n.open&&Object(s.b)(O())})),L=s.c.dl(g(),(function(n){return n.open&&Object(s.b)(p())})),N=s.c.li(h()),T=s.c.a(f(),k);var A=function(n){var e=n.open,t=n.mainColor;return console.log(t),Object(i.jsx)(S,{open:e,mainColor:t,children:Object(i.jsxs)(L,{open:e,children:[Object(i.jsx)(N,{children:Object(i.jsx)(T,{href:"https://www.linkedin.com/in/seanyang87",target:"_blank",title:"Move to Sean's linkedin profile",mainColor:t,children:"Linkedin"})}),Object(i.jsx)(N,{children:Object(i.jsx)(T,{href:"mailto:hewas6@gmail.com",title:"Send email to this address",mainColor:t,children:"hewas6@gmail.com"})})]})})};function E(){var n=Object(a.a)(["\n      color: ",";\n      background-color: #fff;\n      border: 1px solid ",";\n    "]);return E=function(){return n},n}function R(){var n=Object(a.a)(["\n        transform: rotate(45deg);\n      "]);return R=function(){return n},n}function P(){var n=Object(a.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  width: 35px;\n  height: 35px;\n  padding: 0;\n  font-size: 1.25rem;\n  color: #fff;\n  background-color: #333;\n  transition: all 250ms ease-in-out;\n  &:hover {\n    transform: scale(1.05);\n  }\n  & .plus-icon {\n    transition: all 150ms ease-in-out;\n    ","\n  }\n  @media screen and (min-width: 768px) {\n    width: 50px;\n    height: 50px;\n    font-size: 1.5rem;\n  }\n  ","\n"]);return P=function(){return n},n}var G=s.c.button(P(),(function(n){return n.open&&Object(s.b)(R())}),(function(n){return!n.popup&&Object(s.b)(E(),n.mainColor,n.mainColor)}));function J(n){var e=n.children,t=n.popup,o=n.mainColor,c=Object(j.a)(n,["children","popup","mainColor"]),a=Object(r.useState)(!1),s=Object(b.a)(a,2),d=s[0],l=s[1];return Object(i.jsxs)(i.Fragment,{children:[t&&Object(i.jsx)(A,{open:d,mainColor:o}),Object(i.jsx)(G,Object(u.a)(Object(u.a)({},c),{},{onClick:function(){return t&&l(!d)},open:d,popup:t,mainColor:o,children:e}))]})}J.defaultProps={color:"white",backgroundColor:"black",border:!1,popup:!1};var D=J;function F(n,e,t,i){void 0===n&&(n="up"),void 0===i&&(i="1"),void 0===t&&(t="0"),void 0===e&&(e=40);var o=Object(r.useRef)(),c=Object(r.useCallback)((function(n){var e=Object(b.a)(n,1)[0],r=o.current;e.isIntersecting&&(r.style.transitionProperty="opacity transform",r.style.transitionDuration="".concat(i,"s"),r.style.transitionTimingFunction="cubic-bezier(0, 0, 0.2, 1)",r.style.transitionDelay="".concat(t,"s"),r.style.opacity=1,r.style.transform="translate3d(0, 0, 0)")}),[t,i]);return Object(r.useEffect)((function(){var n,e=o.current;return e&&(n=new IntersectionObserver(c,{threshold:.7})).observe(e),function(){return n&&n.disconnect()}}),[c]),{ref:o,style:{opacity:0,transform:function(n,e){switch(n){case"up":return"translate3d(0, ".concat(e,"%, 0)");case"down":return"translate3d(0, -".concat(e,"%, 0)");case"left":return"translate3d(".concat(e,"%, 0, 0)");case"right":return"translate3d(-".concat(e,"%, 0, 0)");default:return"translate3d(0, 0, 0)"}}(n,e)}}}function I(n){void 0===n&&(n="home");var e=Object(r.useRef)(),t=Object(r.useCallback)((function(e){Object(b.a)(e,1)[0].isIntersecting&&document.querySelectorAll(".nav-item").forEach((function(e){e.classList.contains("scrolling")||(e.classList.remove("active"),e.classList.contains(n)&&e.classList.add("active"))}))}),[n]);return Object(r.useEffect)((function(){var n,i=e.current;return i&&(n=new IntersectionObserver(t,{threshold:.7})).observe(i),function(){return n&&n.disconnect()}}),[t]),{ref:e}}function M(){var n=Object(a.a)(["\n  width: 100%;\n  height: 100%;\n"]);return M=function(){return n},n}function _(){var n=Object(a.a)(["\n  font-size: 1.6rem;\n  font-weight: 400;\n  margin-right: 1em;\n"]);return _=function(){return n},n}function B(){var n=Object(a.a)(["\n  position: absolute;\n  bottom: 1.25em;\n  right: 1.25em;\n  display: flex;\n  align-items: center;\n  @media screen and (min-width: 768px) {\n    bottom: 3.125em;\n    right: 3.125em;\n  }\n"]);return B=function(){return n},n}function U(){var n=Object(a.a)(["\n  position: absolute;\n  top: 1.25em;\n  right: 1.25em;\n  display: flex;\n  align-items: center;\n  @media screen and (min-width: 768px) {\n    top: 3.125em;\n    right: 3.125em;\n  }\n"]);return U=function(){return n},n}function W(){var n=Object(a.a)(["\n  margin: 0;\n  font-size: 1.8rem;\n  font-weight: 300;\n  line-height: 1.6em;\n  margin-left: 4rem;\n  & + & {\n    margin-top: 0.6em;\n  }\n  @media screen and (min-width: 480px) {\n    font-size: 1.375rem;\n  }\n  @media screen and (min-width: 768px) {\n    font-size: 1.5rem;\n  }\n"]);return W=function(){return n},n}function X(){var n=Object(a.a)(["\n  margin-bottom: 1em;\n  font-size: 2.3rem;\n  font-weight: 400;\n  margin-left: 4rem;\n  @media screen and (min-width: 480px) {\n    font-size: 1.75rem;\n  }\n  @media screen and (min-width: 768px) {\n    font-size: 1.875rem;\n  }\n  ","\n"]);return X=function(){return n},n}function q(){var n=Object(a.a)(["\n  font-size: 3.5rem;\n  font-weight: 900;\n  margin-left: 4rem;\n  @media screen and (min-width: 480px) {\n    font-size: 2.625rem;\n  }\n  @media screen and (min-width: 768px) {\n    font-size: 3.25rem;\n  }\n"]);return q=function(){return n},n}function Q(){var n=Object(a.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 80%;\n  margin: 6.25rem 0;\n  @media screen and (min-width: 768px) {\n    width: 70%;\n    padding-left: 1em;\n    margin: 0;\n  }\n  @media screen and (min-width: 1024px) {\n    width: 50%;\n    margin: 0;\n  }\n"]);return Q=function(){return n},n}function H(){var n=Object(a.a)(["\n  position: relative;\n  padding: 1.25em;\n  width: 100vw;\n  min-height: 100vh;\n  @media screen and (min-width: 768px) {\n    padding: 3.125em;\n  }\n"]);return H=function(){return n},n}function K(){var n=Object(a.a)(["\n    color: ",";\n  "]);return K=function(){return n},n}function Y(){var n=Object(a.a)(["\n  ","\n"]);return Y=function(){return n},n}var V=Object(s.b)(Y(),(function(n){var e=n.mainColor;return Object(s.b)(K(),e)})),Z=s.c.div(H()),$=s.c.div(Q()),nn=s.c.div(q()),en=s.c.div(X(),V),tn=s.c.p(W()),rn=s.c.div(U()),on=s.c.div(B()),cn=s.c.span(_()),an=s.c.a(M());var sn=function(n){var e=n.mainColor,t="Sean Yang",r="front-end web developer",o=["Hello, I am a front-end web developer based in Kitchener-Waterloo, ON Canada. ","I have endless, insatiable curiosity for new technologies and tools to improve life. "];return Object(i.jsxs)(Z,{id:"home",children:[Object(i.jsxs)($,Object(u.a)(Object(u.a)({},I("home")),{},{children:[Object(i.jsx)(nn,Object(u.a)(Object(u.a)({},F("right",35)),{},{children:t})),Object(i.jsx)(en,Object(u.a)(Object(u.a)({},F("right",35,"0.4")),{},{mainColor:e,children:r})),Object(i.jsx)(tn,Object(u.a)(Object(u.a)({},F("right",35,"0.8")),{},{children:o[0]})),Object(i.jsx)(tn,Object(u.a)(Object(u.a)({},F("right",35,"1.2")),{},{children:o[1]}))]})),Object(i.jsxs)(rn,Object(u.a)(Object(u.a)({},F("left",40,"1.6")),{},{children:[Object(i.jsx)(cn,{children:"Contact"}),Object(i.jsx)(D,{popup:!0,mainColor:e,children:Object(i.jsx)(m.a,{className:"plus-icon"})})]})),Object(i.jsxs)(on,Object(u.a)(Object(u.a)({},F("left",40,"1.6")),{},{children:[Object(i.jsx)(cn,{children:"Github"}),Object(i.jsx)(an,{href:"https://github.com/indiu6",target:"_blank",children:Object(i.jsx)(D,{color:"green",backgroundColor:"white",border:!0,mainColor:e,children:Object(i.jsx)(m.b,{})})})]}))]})};function dn(){var n=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 50px 40px;\n  margin-bottom: 30px;\n  font-size: 1.625rem;\n  font-weight: 500;\n  color: #333;\n  @media screen and (min-width: 768px) {\n    justify-content: flex-start;\n    opacity: 0;\n  }\n"]);return dn=function(){return n},n}var ln=s.c.div(dn());var un=function(n){var e=n.name;return Object(i.jsx)(ln,{children:e})};function mn(){var n=Object(a.a)(["\n  margin: 0.625rem 0 1.25rem;\n  font-size: 1.3rem;\n  font-weight: 300;\n  line-height: 1.4em;\n  color: #333;\n  @media screen and (min-width: 768px) {\n    margin: 1.125rem 0;\n  }\n"]);return mn=function(){return n},n}function bn(){var n=Object(a.a)(["\n  font-size: 1.6rem;\n  font-weight: 400;\n  color: #cacaca;\n  @media screen and (min-width: 768px) {\n    font-size: 1.375rem;\n  }\n"]);return bn=function(){return n},n}function jn(){var n=Object(a.a)(["\n  display: block;\n  margin-bottom: 1.4rem;\n  font-size: 1.8rem;\n  font-weight: 400;\n  ","\n  @media screen and (min-width: 768px) {\n    font-size: 1.625rem;\n  }\n"]);return jn=function(){return n},n}function fn(){var n=Object(a.a)(["\n  border-radius: 6px;\n  width: 100%;\n  padding: 1rem 0 1.25rem 3.125rem;\n  color: #333;\n  & + & {\n    margin-top: 1.875rem;\n    margin-left: 0;\n  }\n  @media screen and (min-width: 768px) {\n    min-width: 300px;\n    width: 30%;\n    & + & {\n      margin-top: 0;\n      margin-left: 6.25rem;\n    }\n  }\n"]);return fn=function(){return n},n}function hn(){var n=Object(a.a)(["\n    color: ",";\n  "]);return hn=function(){return n},n}function pn(){var n=Object(a.a)(["\n  ","\n"]);return pn=function(){return n},n}var gn=Object(s.b)(pn(),(function(n){var e=n.mainColor;return Object(s.b)(hn(),e)})),On=s.c.div(fn()),xn=s.c.strong(jn(),gn),vn=s.c.div(bn()),wn=s.c.p(mn());var yn=function(n){var e=n.data,t=n.animationDirection,r=n.mainColor,o=e.subject,c=e.first,a=e.second;return Object(i.jsxs)(On,Object(u.a)(Object(u.a)({},F(t,40)),{},{children:[Object(i.jsx)(xn,{mainColor:r,children:o}),Object(i.jsx)(vn,{children:c.title}),Object(i.jsx)(wn,{children:c.description}),Object(i.jsx)(vn,{children:a.title}),Object(i.jsx)(wn,{children:a.description})]}))};function Cn(){var n=Object(r.useState)(!1),e=Object(b.a)(n,2),t=e[0],i=e[1],o=Object(r.useCallback)((function(n){i(n<768)}),[]);return Object(r.useEffect)((function(){window.addEventListener("load",(function(n){o(n.currentTarget.innerWidth)})),window.addEventListener("resize",(function(n){o(n.target.innerWidth)}))}),[o]),t}function kn(){var n=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  padding: 0 10% 100px;\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    width: 100%;\n    padding: 100px 0 80px;\n    margin-bottom: 120px;\n  }\n"]);return kn=function(){return n},n}function zn(){var n=Object(a.a)(["\n  width: 100vw;\n  background-color: #fafafa;\n"]);return zn=function(){return n},n}var Sn=s.c.div(zn()),Ln=s.c.div(kn());var Nn=function(n){var e=n.mainColor,t=Cn(),r={0:{subject:"SKILLSET",first:{title:"Languages, Skills",description:"JavaScript/ES6+, React, Redux Toolkit | Java, C#, Node.js, GraphQL, Apollo, ASP.NET Core, Firebase | MySQL, MongoDB"},second:{title:"Experiences, Tools",description:"Figma, Material-UI, JIRA, Trello, Github, Gitlab, Jest"}},1:{subject:"EDUCATION",first:{title:"2019 - 2021",description:"Diploma in Computer Programming at Conestoga College, Waterloo"},second:{title:"2007 - 2014",description:"Bachelor of Arts in Economics at Chonbuk National University"}}};return Object(i.jsxs)(Sn,Object(u.a)(Object(u.a)({id:"about"},I("home")),{},{children:[t&&Object(i.jsx)(un,{name:"About"}),Object(i.jsxs)(Ln,{children:[Object(i.jsx)(yn,{data:r[0],animationDirection:"right",mainColor:e}),Object(i.jsx)(yn,{data:r[1],animationDirection:"left",mainColor:e})]})]}))},Tn=t(11);function An(){var n=Object(a.a)(["\n  position: absolute;\n  top: 25%;\n  right: 0;\n  width: 1.875rem;\n  height: 1.875rem;\n  border-radius: 50%;\n  transform: translateX(-50%);\n  background-color: #fff;\n  transition: transform 250ms ease-in-out;\n  & .github-icon {\n    width: 120%;\n    height: 120%;\n  }\n  & .demo-icon {\n    width: 120%;\n    height: 120%;\n  }\n  &:hover {\n    transform: translateX(-50%) scale(1.06);\n  }\n  @media screen and (min-width: 768px) {\n    top: 60%;\n    left: 50%;\n  }\n"]);return An=function(){return n},n}function En(){var n=Object(a.a)(["\n  margin-left: 0;\n  font-size: 1.3rem;\n  font-weight: 400;\n  color: #333;\n"]);return En=function(){return n},n}function Rn(){var n=Object(a.a)(["\n      color: ",";\n    "]);return Rn=function(){return n},n}function Pn(){var n=Object(a.a)(["\n  margin-bottom: 1.6rem;\n  font-size: 1.4rem;\n  font-weight: 400;\n  ","\n  @media screen and (min-width: 768px) {\n    margin-bottom: 1.25rem;\n  }\n"]);return Pn=function(){return n},n}function Gn(){var n=Object(a.a)(["\n  &.icon-group {\n    position: relative;\n  }\n  & + & {\n    margin-left: 2.5rem;\n  }\n"]);return Gn=function(){return n},n}function Jn(){var n=Object(a.a)(["\n  position: absolute;\n  top: 1.25rem;\n  left: 0;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin: 0;\n  @media screen and (min-width: 768px) {\n    top: 1.875rem;\n  }\n  @media screen and (min-width: 1024px) {\n    top: 2.5rem;\n  }\n"]);return Jn=function(){return n},n}function Dn(){var n=Object(a.a)(["\n  width: 90%;\n  min-height: 10%;\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  transform: translateX(-50%);\n  @media screen and (min-width: 768px) {\n    width: 80%;\n    height: 20%;\n  }\n  @media screen and (min-width: 1024px) {\n    width: 60%;\n    height: 40%;\n  }\n"]);return Dn=function(){return n},n}function Fn(){var n=Object(a.a)(["\n  width: 95%;\n  height: 95%;\n  transition: transform 250ms ease-in-out;\n  &:hover {\n    transform: scale(1.05);\n  }\n"]);return Fn=function(){return n},n}function In(){var n=Object(a.a)(["\n  position: absolute;\n  top: 0;\n  left: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 90%;\n  height: 90%;\n  border: 1px solid #e9e9e9;\n  border-top: none;\n  background-color: #ffffff;\n  transform: translateX(-50%);\n  overflow: hidden;\n  @media screen and (min-width: 768px) {\n    width: 80%;\n    height: 80%;\n  }\n  @media screen and (min-width: 1024px) {\n    width: 60%;\n    height: 60%;\n  }\n"]);return In=function(){return n},n}function Mn(){var n=Object(a.a)(["\n  width: 11px;\n  height: 11px;\n  border-radius: 50%;\n  background-color: #e9e9e9;\n  & + & {\n    margin-left: 7px;\n  }\n"]);return Mn=function(){return n},n}function _n(){var n=Object(a.a)(["\n  position: absolute;\n  top: -25px;\n  left: 50%;\n  display: flex;\n  align-items: center;\n  padding: 0 1.6rem;\n  width: 90%;\n  height: 25px;\n  border: 1px solid #e9e9e9;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  transform: translateX(-50%);\n  @media screen and (min-width: 768px) {\n    width: 80%;\n  }\n  @media screen and (min-width: 1024px) {\n    width: 60%;\n  }\n"]);return _n=function(){return n},n}function Bn(){var n=Object(a.a)(["\n  position: absolute;\n  top: -6.25rem;\n  left: 0;\n  width: 100%;\n  height: 7.5rem;\n  @media screen and (min-width: 1024px) {\n    top: -7.5rem;\n  }\n"]);return Bn=function(){return n},n}function Un(){var n=Object(a.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding-top: 55.4%; /* 8:5 Aspect Ratio => 62.5% */\n  margin-bottom: 9.3rem; // \ud504\ub85c\uc81d\ud2b8 \uac04 \uc138\ub85c \uac04\uaca9\n  @media screen and (min-width: 768px) {\n    margin-bottom: 7.5rem;\n  }\n  @media screen and (min-width: 1024px) {\n    margin-bottom: 0;\n  }\n"]);return Un=function(){return n},n}var Wn=s.c.div(Un()),Xn=s.c.div(Bn()),qn=s.c.div(_n()),Qn=s.c.div(Mn()),Hn=s.c.div(In()),Kn=s.c.img(Fn()),Yn=s.c.div(Dn()),Vn=s.c.dl(Jn()),Zn=s.c.div(Gn()),$n=s.c.dt(Pn(),(function(n){return n.mainColor&&Object(s.b)(Rn(),n.mainColor)})),ne=s.c.dd(En()),ee=s.c.a(An());var te=function(n){var e=n.project,t=n.type,r=n.languages,o=n.demo,c=n.github,a=n.image,s=n.id,d=n.mainColor,l=Cn();return Object(i.jsxs)(Wn,{children:[Object(i.jsx)(Xn,{id:s}),Object(i.jsxs)(qn,{children:[Object(i.jsx)(Qn,{}),Object(i.jsx)(Qn,{}),Object(i.jsx)(Qn,{})]}),Object(i.jsx)(Hn,Object(u.a)(Object(u.a)({},I(s)),{},{children:Object(i.jsx)(Kn,{src:a,alt:e})})),Object(i.jsx)(Yn,{children:Object(i.jsxs)(Vn,Object(u.a)(Object(u.a)({},F("up",100)),{},{children:[Object(i.jsxs)(Zn,{children:[Object(i.jsx)($n,{mainColor:d,children:"Project"}),Object(i.jsx)(ne,{children:e})]}),!l&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(Zn,{children:[Object(i.jsx)($n,{mainColor:d,children:"Type"}),Object(i.jsx)(ne,{children:t})]}),Object(i.jsxs)(Zn,{children:[Object(i.jsx)($n,{mainColor:d,children:"Languages and Tools"}),Object(i.jsx)(ne,{children:r})]})]}),o&&Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(Zn,{className:"icon-group",children:[!l&&Object(i.jsx)($n,{mainColor:d,children:"Demo"}),Object(i.jsx)(ne,{children:Object(i.jsx)(ee,{href:o,target:"_blank",children:Object(i.jsx)(Tn.b,{className:"demo-icon"})})})]})}),Object(i.jsxs)(Zn,{className:"icon-group",children:[!l&&Object(i.jsx)($n,{mainColor:d,children:"Github"}),Object(i.jsx)(ne,{children:Object(i.jsx)(ee,{href:c,target:"_blank",children:Object(i.jsx)(Tn.a,{className:"github-icon"})})})]})]}))})]})};function ie(){var n=Object(a.a)(["\n  width: 100%;\n  color: #333;\n  background-color: #fff;\n  @media screen and (min-width: 768px) {\n    min-height: 100vh;\n  }\n"]);return ie=function(){return n},n}var re=s.c.div(ie());var oe=function(n){var e=n.mainColor,t=Cn();return Object(i.jsxs)(re,{children:[t&&Object(i.jsx)(un,{name:"Portfolio"}),Object(i.jsx)("ul",{children:[{id:"1",project:"Awesome Movies",type:"Toy Project",language:"JavaScript, React, GraphQL, Apollo",github:"https://github.com/indiu6/graphql-apollo-react-movie",image:"/portfolio/graphqlmovie.png"},{id:"2",project:"Basic Twitter",type:"Toy Project, Tweet CRUD",language:"JavaScript, React, Firebase",demo:"https://indiu6.github.io/react-firebase-twitter",github:"https://github.com/indiu6/react-firebase-twitter",image:"/portfolio/twitter.png"},{id:"3",project:"Multi-User Messenger",type:"Toy Project, Real-time Chat",language:"JavaScript, React, Firebase",demo:"https://clone-fcd1f.web.app/",github:"https://github.com/indiu6/react-facebook-messenger",image:"/portfolio/fbmessenger.png"},{id:"4",project:"React Native Weather App",type:"Toy Project",language:"JavaScript, React Native, Expo",demo:"https://expo.io/@indiu6/projects/weather-app-by-react-native",github:"https://github.com/indiu6/react-native-weather",image:"/portfolio/rn-weather.png"},{id:"5",project:"Login & Register Account",type:"Group(2) Project",language:"JavaScript, Express, MongoDB, Google OAuth2, Bootstrap, Email-verification",github:"https://github.com/indiu6/Login-Register-w-Bootstrap",image:"/portfolio/JSLoginRegisterOAuth.png"},{id:"6",project:"Simple To-do",type:"Toy Project",language:"JavaScript, React, styled-components, Context API, Hooks",demo:"https://indiu6.github.io/react-simple-todo/",github:"https://github.com/indiu6/react-simple-todo",image:"/portfolio/todolist.png"},{id:"7",project:"Classic Game Digger",type:"Group(2) Project from College",language:"C#, MonoGame, Visual Studio",github:"https://github.com/indiu6/Classic_Digger_Game",image:"/portfolio/digger.png"},{id:"8",project:"My Farm Shop",type:"Local Farm Service, Group(4) Project from College",language:"Java, Google Maps API, Android Studio",github:"https://github.com/indiu6/Android_FarmShop_App",image:"/portfolio/mfs.png"}].map((function(n){return Object(i.jsx)("li",{children:Object(i.jsx)(te,{id:n.id,project:n.project,type:n.type,languages:n.language,demo:n.demo,github:n.github,image:n.image,mainColor:e})},n.id)}))})]})},ce=t(17),ae="up",se=300,de=[{direction:ae,distance:se,delay:"2",href:"home",active:!0,scrolling:!1,text:"home"},{direction:ae,distance:se,delay:"2.2",href:"1",active:!1,scrolling:!1,text:"01"},{direction:ae,distance:se,delay:"2.4",href:"2",active:!1,scrolling:!1,text:"02"},{direction:ae,distance:se,delay:"2.6",href:"3",active:!1,scrolling:!1,text:"03"},{direction:ae,distance:se,delay:"2.8",href:"4",active:!1,scrolling:!1,text:"04"},{direction:ae,distance:se,delay:"3.0",href:"5",active:!1,scrolling:!1,text:"05"}],le=Object(r.createContext)(de);function ue(){var n=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.3rem;\n  font-weight: 400;\n  transition: color 150ms ease-in-out;\n  &.active,\n  &:hover {\n    ","\n  }\n  & .menu-icon {\n    font-size: 1.5rem;\n  }\n"]);return ue=function(){return n},n}function me(){var n=Object(a.a)(["\n  & + & {\n    margin-top: 1.875em;\n  }\n"]);return me=function(){return n},n}function be(){var n=Object(a.a)(["\n  position: fixed;\n  top: 50%;\n  left: 1.25em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transform: translateY(-50%);\n  border-radius: 6px;\n  background: none;\n  z-index: 1000;\n"]);return be=function(){return n},n}function je(){var n=Object(a.a)(["\n    color: ",";\n  "]);return je=function(){return n},n}function fe(){var n=Object(a.a)(["\n  ","\n"]);return fe=function(){return n},n}var he=Object(s.b)(fe(),(function(n){var e=n.mainColor;return Object(s.b)(je(),e)})),pe=s.c.div(be()),ge=s.c.li(me()),Oe=s.c.a(ue(),he);var xe=function(n){var e=n.mainColor,t=Object(r.useContext)(le),o=Object(b.a)(t,2),c=o[0],a=o[1];console.log(c,a);var s=function(n){!function(n){if(n&&"function"===typeof n){var e;window.addEventListener("scroll",(function(t){window.clearTimeout(e),e=setTimeout((function(){n()}),66)}),!1)}}((function(){n.forEach((function(n){return n.classList.remove("scrolling")}))}))},d=function(n,e){var t=document.querySelectorAll(".nav-item");t.forEach((function(n){n.classList.add("scrolling"),n.classList.remove("active")})),n.currentTarget.classList.add("active"),s(t)},l="up",m=300;return Object(i.jsx)(pe,{children:Object(i.jsxs)("ul",{children:[Object(i.jsx)(ge,Object(u.a)(Object(u.a)({},F(l,m,"2")),{},{children:Object(i.jsx)(Oe,{href:"#home",className:"nav-item home active",onClick:d,mainColor:e,children:Object(i.jsx)(ce.a,{className:"menu-icon"})})})),Object(i.jsx)(ge,Object(u.a)(Object(u.a)({},F(l,m,"2.2")),{},{children:Object(i.jsx)(Oe,{href:"#1",className:"nav-item 1",onClick:d,mainColor:e,children:"01"})})),Object(i.jsx)(ge,Object(u.a)(Object(u.a)({},F(l,m,"2.4")),{},{children:Object(i.jsx)(Oe,{href:"#2",className:"nav-item 2",onClick:d,mainColor:e,children:"02"})})),Object(i.jsx)(ge,Object(u.a)(Object(u.a)({},F(l,m,"2.6")),{},{children:Object(i.jsx)(Oe,{href:"#3",className:"nav-item 3",onClick:d,mainColor:e,children:"03"})})),Object(i.jsx)(ge,Object(u.a)(Object(u.a)({},F(l,m,"2.8")),{},{children:Object(i.jsx)(Oe,{href:"#4",className:"nav-item 4",onClick:d,mainColor:e,children:"04"})})),Object(i.jsx)(ge,Object(u.a)(Object(u.a)({},F(l,m,"3.0")),{},{children:Object(i.jsx)(Oe,{href:"#5",className:"nav-item 5",onClick:d,mainColor:e,children:"05"})})),Object(i.jsx)(ge,Object(u.a)(Object(u.a)({},F(l,m,"3.2")),{},{children:Object(i.jsx)(Oe,{href:"#6",className:"nav-item 6",onClick:d,mainColor:e,children:"06"})})),Object(i.jsx)(ge,Object(u.a)(Object(u.a)({},F(l,m,"3.4")),{},{children:Object(i.jsx)(Oe,{href:"#7",className:"nav-item 7",onClick:d,mainColor:e,children:"07"})})),Object(i.jsx)(ge,Object(u.a)(Object(u.a)({},F(l,m,"3.6")),{},{children:Object(i.jsx)(Oe,{href:"#8",className:"nav-item 8",onClick:d,mainColor:e,children:"08"})}))]})})};var ve=function(){var n=Cn(),e="#4fc08d";return Object(i.jsxs)(r.Fragment,{children:[Object(i.jsx)(l,{}),!n&&Object(i.jsx)(xe,{mainColor:e}),Object(i.jsxs)("div",{style:{overflow:"hidden"},children:[Object(i.jsx)(sn,{mainColor:e}),Object(i.jsx)(Nn,{mainColor:e}),Object(i.jsx)(oe,{mainColor:e})]})]})};c.a.render(Object(i.jsx)(ve,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.a052ccd3.chunk.js.map