(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{26:function(n,e,t){"use strict";t.r(e);var i=t(1),r=t(2),o=t(13),c=t.n(o),a=t(3),s=t(4);function d(){var n=Object(a.a)(["\n  html {\n    scroll-behavior: smooth;\n  }\n  \n  body {\n    font-family: 'Fira Sans Condensed', sans-serif;    \n    color: #333333;\n    background-color: #fff;\n    padding: 0;\n    margin: 0;\n  }\n  \n  body * {\n    box-sizing: border-box;\n    &::selection {\n      background-color: rgba(79,192,141,0.5);\n    }\n  }\n  \n  ul, ol, li {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n  }\n  \n  dl, dt, dd {\n    margin: 0;\n    padding: 0;\n  }\n  \n  a {\n    text-decoration: none;\n    color: #333;\n  }\n  \n  button {\n    border: none;\n    cursor: pointer;\n    outline: none;\n  }\n"]);return d=function(){return n},n}var u=Object(s.a)(d()),l=t(5),m=t(10),j=t(6),b=t(18);function h(){var n=Object(a.a)(["\n  &:hover {\n    ",";\n  }\n"]);return h=function(){return n},n}function f(){var n=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  &:first-child::after {\n    content: '/';\n    margin: 0 0.3em;\n  }\n"]);return f=function(){return n},n}function p(){var n=Object(a.a)(["\n      animation-name: appear;\n      animation-duration: 1s;\n      animation-timing-function: ease-in;\n      animation-fill-mode: forwards;\n    "]);return p=function(){return n},n}function g(){var n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  padding-left: 1.5625rem;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  ","\n  @keyframes appear {\n    0% {\n      opacity: 0;\n    }\n    5% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n"]);return g=function(){return n},n}function O(){var n=Object(a.a)(["\n      width: 280px;\n      @media screen and (min-width: 768px) {\n        width: 310px;\n      }\n    "]);return O=function(){return n},n}function x(){var n=Object(a.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 35px;\n  height: 35px;\n  ","\n  border-radius: 30px;\n  font-size: 0.875rem;\n  font-weight: 400;\n  color: #333333;\n  background-color: #fff;\n  transition: width 250ms ease-in-out;\n  @media screen and (min-width: 768px) {\n    width: 50px;\n    height: 50px;\n    font-size: 0.9375rem;\n  }\n  ","\n"]);return x=function(){return n},n}function v(){var n=Object(a.a)(["\n    border: 1px solid ",";\n  "]);return v=function(){return n},n}function w(){var n=Object(a.a)(["\n  ","\n"]);return w=function(){return n},n}function C(){var n=Object(a.a)(["\n    color: ",";\n  "]);return C=function(){return n},n}function y(){var n=Object(a.a)(["\n  ","\n"]);return y=function(){return n},n}var k=Object(s.b)(y(),(function(n){var e=n.mainColor;return Object(s.b)(C(),e)})),S=Object(s.b)(w(),(function(n){var e=n.mainColor;return Object(s.b)(v(),e)})),N=s.c.div(x(),S,(function(n){return n.open&&Object(s.b)(O())})),z=s.c.dl(g(),(function(n){return n.open&&Object(s.b)(p())})),L=s.c.li(f()),A=s.c.a(h(),k);var R=function(n){var e=n.open,t=n.mainColor;return console.log(t),Object(i.jsx)(N,{open:e,mainColor:t,children:Object(i.jsxs)(z,{open:e,children:[Object(i.jsx)(L,{children:Object(i.jsx)(A,{href:"https://www.linkedin.com/in/seanyang87",target:"_blank",title:"Move to Sean's linkedin profile",mainColor:t,children:"Linkedin"})}),Object(i.jsx)(L,{children:Object(i.jsx)(A,{href:"mailto:hewas6@gmail.com",title:"Send email to this address",mainColor:t,children:"hewas6@gmail.com"})})]})})};function E(){var n=Object(a.a)(["\n      color: ",";\n      background-color: #fff;\n      border: 1px solid ",";\n    "]);return E=function(){return n},n}function T(){var n=Object(a.a)(["\n        transform: rotate(45deg);\n      "]);return T=function(){return n},n}function P(){var n=Object(a.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  width: 35px;\n  height: 35px;\n  padding: 0;\n  font-size: 1.25rem;\n  color: #fff;\n  background-color: #333;\n  transition: all 250ms ease-in-out;\n  &:hover {\n    transform: scale(1.05);\n  }\n  & .plus-icon {\n    transition: all 150ms ease-in-out;\n    ","\n  }\n  @media screen and (min-width: 768px) {\n    width: 50px;\n    height: 50px;\n    font-size: 1.5rem;\n  }\n  ","\n"]);return P=function(){return n},n}var I=s.c.button(P(),(function(n){return n.open&&Object(s.b)(T())}),(function(n){return!n.popup&&Object(s.b)(E(),n.mainColor,n.mainColor)}));function D(n){var e=n.children,t=n.popup,o=n.mainColor,c=Object(b.a)(n,["children","popup","mainColor"]),a=Object(r.useState)(!1),s=Object(j.a)(a,2),d=s[0],u=s[1];return Object(i.jsxs)(i.Fragment,{children:[t&&Object(i.jsx)(R,{open:d,mainColor:o}),Object(i.jsx)(I,Object(l.a)(Object(l.a)({},c),{},{onClick:function(){return t&&u(!d)},open:d,popup:t,mainColor:o,children:e}))]})}D.defaultProps={color:"white",backgroundColor:"black",border:!1,popup:!1};var J=D;function G(n,e,t,i){void 0===n&&(n="up"),void 0===i&&(i="1"),void 0===t&&(t="0"),void 0===e&&(e=40);var o=Object(r.useRef)(),c=Object(r.useCallback)((function(n){var e=Object(j.a)(n,1)[0],r=o.current;e.isIntersecting&&(r.style.transitionProperty="opacity transform",r.style.transitionDuration="".concat(i,"s"),r.style.transitionTimingFunction="cubic-bezier(0, 0, 0.2, 1)",r.style.transitionDelay="".concat(t,"s"),r.style.opacity=1,r.style.transform="translate3d(0, 0, 0)")}),[t,i]);return Object(r.useEffect)((function(){var n,e=o.current;return e&&(n=new IntersectionObserver(c,{threshold:.7})).observe(e),function(){return n&&n.disconnect()}}),[c]),{ref:o,style:{opacity:0,transform:function(n,e){switch(n){case"up":return"translate3d(0, ".concat(e,"%, 0)");case"down":return"translate3d(0, -".concat(e,"%, 0)");case"left":return"translate3d(".concat(e,"%, 0, 0)");case"right":return"translate3d(-".concat(e,"%, 0, 0)");default:return"translate3d(0, 0, 0)"}}(n,e)}}}function F(n){void 0===n&&(n="home");var e=Object(r.useRef)(),t=Object(r.useCallback)((function(e){Object(j.a)(e,1)[0].isIntersecting&&document.querySelectorAll(".nav-item").forEach((function(e){e.classList.contains("scrolling")||(e.classList.remove("active"),e.classList.contains(n)&&e.classList.add("active"))}))}),[n]);return Object(r.useEffect)((function(){var n,i=e.current;return i&&(n=new IntersectionObserver(t,{threshold:.7})).observe(i),function(){return n&&n.disconnect()}}),[t]),{ref:e}}function M(){var n=Object(a.a)(["\n  width: 100%;\n  height: 100%;\n"]);return M=function(){return n},n}function _(){var n=Object(a.a)(["\n  font-size: 1.8rem;\n  font-weight: 400;\n  margin-right: 1em;\n"]);return _=function(){return n},n}function B(){var n=Object(a.a)(["\n  position: absolute;\n  bottom: 1.25em;\n  right: 1.25em;\n  display: flex;\n  align-items: center;\n  @media screen and (min-width: 768px) {\n    bottom: 3.125em;\n    right: 3.125em;\n  }\n"]);return B=function(){return n},n}function W(){var n=Object(a.a)(["\n  position: absolute;\n  top: 1.25em;\n  right: 1.25em;\n  display: flex;\n  align-items: center;\n  @media screen and (min-width: 768px) {\n    top: 3.125em;\n    right: 3.125em;\n  }\n"]);return W=function(){return n},n}function U(){var n=Object(a.a)(["\n  margin: 0;\n  font-size: 1.8rem;\n  font-weight: 300;\n  line-height: 1.4em;\n  & + & {\n    margin-top: 0.6em;\n  }\n  @media screen and (min-width: 480px) {\n    font-size: 1.375rem;\n  }\n  @media screen and (min-width: 768px) {\n    font-size: 1.5rem;\n  }\n"]);return U=function(){return n},n}function K(){var n=Object(a.a)(["\n  margin-bottom: 1em;\n  font-size: 2rem;\n  font-weight: 400;\n  @media screen and (min-width: 480px) {\n    font-size: 1.75rem;\n  }\n  @media screen and (min-width: 768px) {\n    font-size: 1.875rem;\n  }\n  ","\n"]);return K=function(){return n},n}function X(){var n=Object(a.a)(["\n  font-size: 2.8rem;\n  font-weight: 900;\n  @media screen and (min-width: 480px) {\n    font-size: 2.625rem;\n  }\n  @media screen and (min-width: 768px) {\n    font-size: 3.25rem;\n  }\n"]);return X=function(){return n},n}function q(){var n=Object(a.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 80%;\n  margin: 6.25rem 0;\n  @media screen and (min-width: 768px) {\n    width: 70%;\n    padding-left: 7em;\n    margin: 0;\n  }\n  @media screen and (min-width: 1024px) {\n    width: 50%;\n    margin: 0;\n  }\n"]);return q=function(){return n},n}function Q(){var n=Object(a.a)(["\n  position: relative;\n  padding: 1.25em;\n  width: 100vw;\n  min-height: 100vh;\n  @media screen and (min-width: 768px) {\n    padding: 3.125em;\n  }\n"]);return Q=function(){return n},n}function Y(){var n=Object(a.a)(["\n    color: ",";\n  "]);return Y=function(){return n},n}function H(){var n=Object(a.a)(["\n  ","\n"]);return H=function(){return n},n}var V=Object(s.b)(H(),(function(n){var e=n.mainColor;return Object(s.b)(Y(),e)})),Z=s.c.div(Q()),$=s.c.div(q()),nn=s.c.div(X()),en=s.c.div(K(),V),tn=s.c.p(U()),rn=s.c.div(W()),on=s.c.div(B()),cn=s.c.span(_()),an=s.c.a(M());var sn=function(n){var e=n.mainColor,t="Sean Yang",r="developer",o=["Hello, I am a developer based in Kitchener-Waterloo, ON Canada.","I have an endless, insatiable curiosity for new technologies and tools to improve life."];return Object(i.jsxs)(Z,{id:"home",children:[Object(i.jsxs)($,Object(l.a)(Object(l.a)({},F("home")),{},{children:[Object(i.jsx)(nn,Object(l.a)(Object(l.a)({},G("right",35)),{},{children:t})),Object(i.jsx)(en,Object(l.a)(Object(l.a)({},G("right",35,"0.4")),{},{mainColor:e,children:r})),Object(i.jsx)(tn,Object(l.a)(Object(l.a)({},G("right",35,"0.8")),{},{children:o[0]})),Object(i.jsx)(tn,Object(l.a)(Object(l.a)({},G("right",35,"1.2")),{},{children:o[1]}))]})),Object(i.jsxs)(rn,Object(l.a)(Object(l.a)({},G("left",40,"1.6")),{},{children:[Object(i.jsx)(cn,{children:"Contact"}),Object(i.jsx)(J,{popup:!0,mainColor:e,children:Object(i.jsx)(m.a,{className:"plus-icon"})})]})),Object(i.jsxs)(on,Object(l.a)(Object(l.a)({},G("left",40,"1.6")),{},{children:[Object(i.jsx)(cn,{children:"Github"}),Object(i.jsx)(an,{href:"https://github.com/indiu6",target:"_blank",children:Object(i.jsx)(J,{color:"green",backgroundColor:"white",border:!0,mainColor:e,children:Object(i.jsx)(m.b,{})})})]}))]})};function dn(){var n=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 50px 40px;\n  margin-bottom: 30px;\n  font-size: 1.625rem;\n  font-weight: 500;\n  color: #333;\n  @media screen and (min-width: 768px) {\n    justify-content: flex-start;\n    opacity: 0;\n  }\n"]);return dn=function(){return n},n}var un=s.c.div(dn());var ln=function(n){var e=n.name;return Object(i.jsx)(un,{children:e})};function mn(){var n=Object(a.a)(["\n  margin: 0.625rem 0 1.25rem;\n  font-size: 1.25rem;\n  font-weight: 300;\n  line-height: 1.15em;\n  color: #333;\n  @media screen and (min-width: 768px) {\n    margin: 1.125rem 0;\n  }\n"]);return mn=function(){return n},n}function jn(){var n=Object(a.a)(["\n  font-size: 1.6rem;\n  font-weight: 400;\n  color: #cacaca;\n  @media screen and (min-width: 768px) {\n    font-size: 1.375rem;\n  }\n"]);return jn=function(){return n},n}function bn(){var n=Object(a.a)(["\n  display: block;\n  margin-bottom: 1.25rem;\n  font-size: 1.8rem;\n  font-weight: 400;\n  ","\n  @media screen and (min-width: 768px) {\n    font-size: 1.625rem;\n  }\n"]);return bn=function(){return n},n}function hn(){var n=Object(a.a)(["\n  border-radius: 6px;\n  width: 100%;\n  padding: 1rem 0 1.25rem 3.125rem;\n  color: #333;\n  & + & {\n    margin-top: 1.875rem;\n    margin-left: 0;\n  }\n  @media screen and (min-width: 768px) {\n    min-width: 300px;\n    width: 30%;\n    & + & {\n      margin-top: 0;\n      margin-left: 6.25rem;\n    }\n  }\n"]);return hn=function(){return n},n}function fn(){var n=Object(a.a)(["\n    color: ",";\n  "]);return fn=function(){return n},n}function pn(){var n=Object(a.a)(["\n  ","\n"]);return pn=function(){return n},n}var gn=Object(s.b)(pn(),(function(n){var e=n.mainColor;return Object(s.b)(fn(),e)})),On=s.c.div(hn()),xn=s.c.strong(bn(),gn),vn=s.c.div(jn()),wn=s.c.p(mn());var Cn=function(n){var e=n.data,t=n.animationDirection,r=n.mainColor,o=e.subject,c=e.first,a=e.second;return Object(i.jsxs)(On,Object(l.a)(Object(l.a)({},G(t,40)),{},{children:[Object(i.jsx)(xn,{mainColor:r,children:o}),Object(i.jsx)(vn,{children:c.title}),Object(i.jsx)(wn,{children:c.description1}),Object(i.jsx)(wn,{children:c.description2}),Object(i.jsx)(wn,{children:c.description3}),Object(i.jsx)(vn,{children:a.title}),Object(i.jsx)(wn,{children:a.description1}),Object(i.jsx)(wn,{children:a.description2}),Object(i.jsx)(wn,{children:a.description3})]}))};function yn(){var n=Object(r.useState)(!1),e=Object(j.a)(n,2),t=e[0],i=e[1],o=Object(r.useCallback)((function(n){i(n<768)}),[]);return Object(r.useEffect)((function(){window.addEventListener("load",(function(n){o(n.currentTarget.innerWidth)})),window.addEventListener("resize",(function(n){o(n.target.innerWidth)}))}),[o]),t}function kn(){var n=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  padding: 0 10% 100px;\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    width: 100%;\n    padding: 100px 0 80px;\n    margin-bottom: 120px;\n  }\n"]);return kn=function(){return n},n}function Sn(){var n=Object(a.a)(["\n  width: 100vw;\n  background-color: #fafafa;\n"]);return Sn=function(){return n},n}var Nn=s.c.div(Sn()),zn=s.c.div(kn());var Ln=function(n){var e=n.mainColor,t=yn(),r={0:{subject:"SKILLSET",first:{title:"SKILLS",description1:"JavaScript/ES6+, Node.js, React, Redux",description2:"C#, ASP.NET Core, Java, Android | MySQL, MongoDB ",description3:"JIRA, Trello, Github, Gitlab"},second:{title:"LEARNING SKILLS",description1:"React Native, TypeScript, Next.js",description2:"GraphQL, Firebase, Figma",description3:"Docker, Ubuntu, AWS(EC2, Amplify, R53)"}},1:{subject:"EDUCATION",first:{title:"2019 - 2021",description1:"Diploma in Computer Programming",description2:"Conestoga College | Waterloo, ON"},second:{title:"2007 - 2014",description1:"Bachelor of Arts in Economics",description2:"Chonbuk National University | Jeonju, S.Korea"}}};return Object(i.jsxs)(Nn,Object(l.a)(Object(l.a)({id:"about"},F("home")),{},{children:[t&&Object(i.jsx)(ln,{name:"About"}),Object(i.jsxs)(zn,{children:[Object(i.jsx)(Cn,{data:r[0],animationDirection:"right",mainColor:e}),Object(i.jsx)(Cn,{data:r[1],animationDirection:"left",mainColor:e})]})]}))},An=t(11);function Rn(){var n=Object(a.a)(["\n  position: absolute;\n  top: 25%;\n  right: 0;\n  width: 1.875rem;\n  height: 1.875rem;\n  border-radius: 50%;\n  transform: translateX(-50%);\n  background-color: #fff;\n  transition: transform 250ms ease-in-out;\n  & .github-icon {\n    width: 120%;\n    height: 120%;\n  }\n  &:hover {\n    transform: translateX(-50%) scale(1.06);\n  }\n  @media screen and (min-width: 768px) {\n    top: 60%;\n    left: 50%;\n  }\n"]);return Rn=function(){return n},n}function En(){var n=Object(a.a)(["\n  margin-left: 0;\n  font-size: 1.2rem;\n  font-weight: 400;\n  color: #333;\n"]);return En=function(){return n},n}function Tn(){var n=Object(a.a)(["\n      color: ",";\n    "]);return Tn=function(){return n},n}function Pn(){var n=Object(a.a)(["\n  margin-bottom: 1.6rem;\n  font-size: 1.3rem;\n  font-weight: 400;\n  ","\n  @media screen and (min-width: 768px) {\n    margin-bottom: 1.25rem;\n  }\n"]);return Pn=function(){return n},n}function In(){var n=Object(a.a)(["\n  &.github-group {\n    position: relative;\n  }\n  & + & {\n    margin-left: 2.5rem;\n  }\n"]);return In=function(){return n},n}function Dn(){var n=Object(a.a)(["\n  position: absolute;\n  top: 1.25rem;\n  left: 0;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin: 0;\n  @media screen and (min-width: 768px) {\n    top: 1.875rem;\n  }\n  @media screen and (min-width: 1024px) {\n    top: 2.5rem;\n  }\n"]);return Dn=function(){return n},n}function Jn(){var n=Object(a.a)(["\n  width: 90%;\n  min-height: 10%;\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  transform: translateX(-50%);\n  @media screen and (min-width: 768px) {\n    width: 80%;\n    height: 20%;\n  }\n  @media screen and (min-width: 1024px) {\n    width: 60%;\n    height: 40%;\n  }\n"]);return Jn=function(){return n},n}function Gn(){var n=Object(a.a)(["\n  width: 95%;\n  height: 95%;\n  transition: transform 250ms ease-in-out;\n  &:hover {\n    transform: scale(1.05);\n  }\n"]);return Gn=function(){return n},n}function Fn(){var n=Object(a.a)(["\n  position: absolute;\n  top: 0;\n  left: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 90%;\n  height: 90%;\n  border: 1px solid #e9e9e9;\n  border-top: none;\n  background-color: #ffffff;\n  transform: translateX(-50%);\n  overflow: hidden;\n  @media screen and (min-width: 768px) {\n    width: 80%;\n    height: 80%;\n  }\n  @media screen and (min-width: 1024px) {\n    width: 60%;\n    height: 60%;\n  }\n"]);return Fn=function(){return n},n}function Mn(){var n=Object(a.a)(["\n  width: 11px;\n  height: 11px;\n  border-radius: 50%;\n  background-color: #e9e9e9;\n  & + & {\n    margin-left: 7px;\n  }\n"]);return Mn=function(){return n},n}function _n(){var n=Object(a.a)(["\n  position: absolute;\n  top: -25px;\n  left: 50%;\n  display: flex;\n  align-items: center;\n  padding: 0 1.6rem;\n  width: 90%;\n  height: 25px;\n  border: 1px solid #e9e9e9;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  transform: translateX(-50%);\n  @media screen and (min-width: 768px) {\n    width: 80%;\n  }\n  @media screen and (min-width: 1024px) {\n    width: 60%;\n  }\n"]);return _n=function(){return n},n}function Bn(){var n=Object(a.a)(["\n  position: absolute;\n  top: -6.25rem;\n  left: 0;\n  width: 100%;\n  height: 7.5rem;\n  @media screen and (min-width: 1024px) {\n    top: -7.5rem;\n  }\n"]);return Bn=function(){return n},n}function Wn(){var n=Object(a.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding-top: 55.4%; /* 8:5 Aspect Ratio => 62.5% */\n  margin-bottom: 9.375rem; // \ud504\ub85c\uc81d\ud2b8 \uac04 \uc138\ub85c \uac04\uaca9\n  @media screen and (min-width: 768px) {\n    margin-bottom: 7.5rem;\n  }\n  @media screen and (min-width: 1024px) {\n    margin-bottom: 0;\n  }\n"]);return Wn=function(){return n},n}var Un=s.c.div(Wn()),Kn=s.c.div(Bn()),Xn=s.c.div(_n()),qn=s.c.div(Mn()),Qn=s.c.div(Fn()),Yn=s.c.img(Gn()),Hn=s.c.div(Jn()),Vn=s.c.dl(Dn()),Zn=s.c.div(In()),$n=s.c.dt(Pn(),(function(n){return n.mainColor&&Object(s.b)(Tn(),n.mainColor)})),ne=s.c.dd(En()),ee=s.c.a(Rn());var te=function(n){var e=n.project,t=n.type,r=n.languages,o=n.github,c=n.image,a=n.id,s=n.mainColor,d=n.demo,u=yn();return Object(i.jsxs)(Un,{children:[Object(i.jsx)(Kn,{id:a}),Object(i.jsxs)(Xn,{children:[Object(i.jsx)(qn,{}),Object(i.jsx)(qn,{}),Object(i.jsx)(qn,{})]}),Object(i.jsx)(Qn,Object(l.a)(Object(l.a)({},F(a)),{},{children:Object(i.jsx)(Yn,{src:c,alt:e})})),Object(i.jsx)(Hn,{children:Object(i.jsxs)(Vn,Object(l.a)(Object(l.a)({},G("up",100)),{},{children:[Object(i.jsxs)(Zn,{children:[Object(i.jsx)($n,{mainColor:s,children:"Project"}),Object(i.jsx)(ne,{children:e})]}),!u&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(Zn,{children:[Object(i.jsx)($n,{mainColor:s,children:"Type"}),Object(i.jsx)(ne,{children:t})]}),Object(i.jsxs)(Zn,{children:[Object(i.jsx)($n,{mainColor:s,children:"Languages"}),Object(i.jsx)(ne,{children:r})]})]}),d&&Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(Zn,{className:"github-group",children:[!u&&Object(i.jsx)($n,{mainColor:s,children:"Demo"}),Object(i.jsx)(ne,{children:Object(i.jsx)(ee,{href:d,target:"_blank",children:Object(i.jsx)(An.b,{className:"github-icon"})})})]})}),Object(i.jsxs)(Zn,{className:"github-group",children:[!u&&Object(i.jsx)($n,{mainColor:s,children:"Github"}),Object(i.jsx)(ne,{children:Object(i.jsx)(ee,{href:o,target:"_blank",children:Object(i.jsx)(An.a,{className:"github-icon"})})})]})]}))})]})};function ie(){var n=Object(a.a)(["\n  width: 100%;\n  color: #333;\n  background-color: #fff;\n  @media screen and (min-width: 768px) {\n    min-height: 100vh;\n  }\n"]);return ie=function(){return n},n}var re=s.c.div(ie());var oe=function(n){var e=n.mainColor,t=yn();return Object(i.jsxs)(re,{children:[t&&Object(i.jsx)(ln,{name:"portfolio"}),Object(i.jsx)("ul",{children:[{id:"first",project:"Awesome Movies",type:"Toy Project",language:"JavaScript, React, GraphQL, Apollo",github:"https://github.com/indiu6/graphql-apollo-react-movie",image:"/portfolio/graphqlmovie.png"},{id:"second",project:"Pokemon Index",type:"Toy Project",language:"Docker, AWS EC2, Nginx, React, Material-UI",demo:"http://3.16.83.208/",github:"https://github.com/indiu6/react-material-ui-pokemon",image:"/portfolio/pokemon.png"},{id:"third",project:"Basic Twitter",type:"Toy Project, Tweet CRUD",language:"JavaScript, React, Firebase",demo:"https://indiu6.github.io/react-firebase-twitter",github:"https://github.com/indiu6/react-firebase-twitter/",image:"/portfolio/twitter.png"},{id:"fourth",project:"Multi-User Messenger",type:"Toy Project, Real-time Chat",language:"JavaScript, AWS Amplify, R53, React, Firebase",demo:"https://www.seanyang.ca",github:"https://github.com/indiu6/react-facebook-messenger",image:"/portfolio/fbmessenger.png"},{id:"fifth",project:"JSONify - JSON Editor",type:"Toy Project",language:"JavaScript, React, Firebase",demo:"https://indiu6.github.io/json-editor-react/#/",github:"https://github.com/indiu6/json-editor-react",image:"/portfolio/jsonify.png"},{id:"sixth",project:"React Native Weather App",type:"Toy Project",language:"JavaScript, React Native, Expo",demo:"https://expo.io/@indiu6/projects/weather-app-by-react-native",github:"https://github.com/indiu6/react-native-weather",image:"/portfolio/rn-weather.png"},{id:"seventh",project:"Login & Register Account",type:"Group(2) Project",language:"JavaScript, Node.js, Express.js, MongoDB, OAuth2, Bootstrap",github:"https://github.com/indiu6/Login-Register-w-Bootstrap",image:"/portfolio/loginBoot.png"},{id:"eighth",project:"Simple Todo",type:"Toy Project",language:"JavaScript, React, styled-components, Context API",demo:"https://indiu6.github.io/react-simple-todo",github:"https://github.com/indiu6/react-simple-todo",image:"/portfolio/todolist.png"},{id:"ninth",project:"My Farm Shop",type:"Group(4) Project",language:"Java, SQLite, Android Studio, Google Maps API",github:"https://github.com/indiu6/Android_FarmShop_App",image:"/portfolio/mfs.png"},{id:"tenth",project:"Classic Digger Game Clone",type:"College Group(2) Project",language:"C#, Visual Studio, MonoGame",demo:"https://github.com/indiu6/Classic_Digger_Game",github:"https://github.com/indiu6/Classic_Digger_Game",image:"/portfolio/digger.png"}].map((function(n){return Object(i.jsx)("li",{children:Object(i.jsx)(te,{id:n.id,project:n.project,type:n.type,languages:n.language,demo:n.demo,github:n.github,image:n.image,mainColor:e})},n.id)}))})]})},ce=t(17);function ae(){var n=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.45rem;\n  font-weight: 400;\n  transition: color 150ms ease-in-out;\n  &.active,\n  &:hover {\n    ","\n  }\n  & .menu-icon {\n    font-size: 1.6rem;\n  }\n"]);return ae=function(){return n},n}function se(){var n=Object(a.a)(["\n  & + & {\n    margin-top: 1.875em;\n  }\n"]);return se=function(){return n},n}function de(){var n=Object(a.a)(["\n  position: fixed;\n  top: 50%;\n  left: 1.25em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transform: translateY(-50%);\n  border-radius: 6px;\n  background: none;\n  z-index: 1000;\n"]);return de=function(){return n},n}function ue(){var n=Object(a.a)(["\n    color: ",";\n  "]);return ue=function(){return n},n}function le(){var n=Object(a.a)(["\n  ","\n"]);return le=function(){return n},n}var me=Object(s.b)(le(),(function(n){var e=n.mainColor;return Object(s.b)(ue(),e)})),je=s.c.div(de()),be=s.c.li(se()),he=s.c.a(ae(),me);var fe=function(n){var e=n.mainColor,t=function(n){!function(n){if(n&&"function"===typeof n){var e;window.addEventListener("scroll",(function(t){window.clearTimeout(e),e=setTimeout((function(){n()}),66)}),!1)}}((function(){n.forEach((function(n){return n.classList.remove("scrolling")}))}))},r=function(n,e){var i=document.querySelectorAll(".nav-item");i.forEach((function(n){n.classList.add("scrolling"),n.classList.remove("active")})),n.currentTarget.classList.add("active"),t(i)},o="up",c=300;return Object(i.jsx)(je,{children:Object(i.jsxs)("ul",{children:[Object(i.jsx)(be,Object(l.a)(Object(l.a)({},G(o,c,"2")),{},{children:Object(i.jsx)(he,{href:"#home",className:"nav-item home active",onClick:r,mainColor:e,children:Object(i.jsx)(ce.a,{className:"menu-icon"})})})),Object(i.jsx)(be,Object(l.a)(Object(l.a)({},G(o,c,"2.2")),{},{children:Object(i.jsx)(he,{href:"#first",className:"nav-item first",onClick:r,mainColor:e,children:"01"})})),Object(i.jsx)(be,Object(l.a)(Object(l.a)({},G(o,c,"2.4")),{},{children:Object(i.jsx)(he,{href:"#second",className:"nav-item second",onClick:r,mainColor:e,children:"02"})})),Object(i.jsx)(be,Object(l.a)(Object(l.a)({},G(o,c,"2.6")),{},{children:Object(i.jsx)(he,{href:"#third",className:"nav-item third",onClick:r,mainColor:e,children:"03"})})),Object(i.jsx)(be,Object(l.a)(Object(l.a)({},G(o,c,"2.8")),{},{children:Object(i.jsx)(he,{href:"#fourth",className:"nav-item fourth",onClick:r,mainColor:e,children:"04"})})),Object(i.jsx)(be,Object(l.a)(Object(l.a)({},G(o,c,"3.0")),{},{children:Object(i.jsx)(he,{href:"#fifth",className:"nav-item fifth",onClick:r,mainColor:e,children:"05"})})),Object(i.jsx)(be,Object(l.a)(Object(l.a)({},G(o,c,"3.2")),{},{children:Object(i.jsx)(he,{href:"#sixth",className:"nav-item sixth",onClick:r,mainColor:e,children:"06"})})),Object(i.jsx)(be,Object(l.a)(Object(l.a)({},G(o,c,"3.4")),{},{children:Object(i.jsx)(he,{href:"#seventh",className:"nav-item seventh",onClick:r,mainColor:e,children:"07"})})),Object(i.jsx)(be,Object(l.a)(Object(l.a)({},G(o,c,"3.6")),{},{children:Object(i.jsx)(he,{href:"#eighth",className:"nav-item eighth",onClick:r,mainColor:e,children:"08"})})),Object(i.jsx)(be,Object(l.a)(Object(l.a)({},G(o,c,"3.8")),{},{children:Object(i.jsx)(he,{href:"#ninth",className:"nav-item ninth",onClick:r,mainColor:e,children:"09"})})),Object(i.jsx)(be,Object(l.a)(Object(l.a)({},G(o,c,"4.0")),{},{children:Object(i.jsx)(he,{href:"#tenth",className:"nav-item tenth",onClick:r,mainColor:e,children:"10"})}))]})})};var pe=function(){var n=yn(),e="#4fc08d";return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(u,{}),!n&&Object(i.jsx)(fe,{mainColor:e}),Object(i.jsxs)("div",{style:{overflow:"hidden"},children:[Object(i.jsx)(sn,{mainColor:e}),Object(i.jsx)(Ln,{mainColor:e}),Object(i.jsx)(oe,{mainColor:e})]})]})};c.a.render(Object(i.jsx)(pe,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.91414691.chunk.js.map