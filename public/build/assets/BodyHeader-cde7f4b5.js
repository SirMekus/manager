import{_ as r,o as c,c as d,b as o,i,t as l,F as _,j as f}from"./app-c1148ba7.js";const p={props:["heading"],setup(a){const e=f(),t=a.heading??"i-runs";function s(){e.back()}return{goBack:s,header:t}}},h={class:"navbar-collapse"},u=o("i",{class:"fas fa-arrow-left fa-lg"},null,-1),g=[u],k={class:"ms-2 fs-5 fw-bold"},B=o("hr",{class:"dropdown-divider"},null,-1);function m(a,e,t,s,x,b){return c(),d(_,null,[o("div",h,[o("a",{onClick:e[0]||(e[0]=i((...n)=>s.goBack&&s.goBack(...n),["prevent"])),href:"#",class:"text-decoration-none text-dark"},g),o("span",k,l(s.header),1)]),B],64)}const w=r(p,[["render",m]]);export{w as default};