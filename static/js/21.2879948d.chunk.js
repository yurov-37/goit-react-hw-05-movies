"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[21],{21:function(n,e,t){t.r(e),t.d(e,{default:function(){return J}});var r,i,o,a,s,c,d,l,p,x,u,h,f=t(5861),g=t(885),v=t(4687),m=t.n(v),b=t(2791),Z=t(7689),j=t(2388),w=function(){var n=(0,f.Z)(m().mark((function n(e){var t;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j.Z.get("".concat("https://api.themoviedb.org/3/","movie/").concat(e,"?api_key=").concat("cd5b2d3acc514f77d882945a59cba433"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),k=t(8861),y=t(6677),_=t(168),B=t(1684),I=t(6731),O=(0,B.Z)(I.rU)(r||(r=(0,_.Z)(["\n  color: inherit;\n  margin-top: 10px;\n  border: 1px solid black;\n  background-color: #d5d9d9;\n  border-radius: 8px;\n  box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 20px;\n  padding: 4px 10px;\n  text-align: center;\n  text-decoration: none;\n  width: 100px;\n  transition: all 0.3s ease-in;\n\n  &:hover {\n    background-color: #f7fafa;\n  }\n\n  &:focus {\n    border-color: #008296;\n    box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;\n    outline: 0;\n  }\n"]))),z=t(184);function C(n){var e=n.linkBack;return(0,z.jsx)(O,{to:e,children:" \u25c4 Back "})}var S=B.Z.div(i||(i=(0,_.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 20px 0;\n"]))),R=B.Z.img(o||(o=(0,_.Z)(["\n  border-radius: 10px;\n  margin-right: 60px;\n"]))),T=B.Z.div(a||(a=(0,_.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n"]))),U=B.Z.h3(s||(s=(0,_.Z)(["\n  font-size: 24px;\n  margin-bottom: 10px;\n"]))),W=B.Z.p(c||(c=(0,_.Z)(["\n  margin-bottom: 10px;\n"]))),A=B.Z.div(d||(d=(0,_.Z)(["\n  display: flex;\n  margin-bottom: 10px;\n  & p {\n    margin-right: 8px;\n  }\n"]))),D=B.Z.p(l||(l=(0,_.Z)(["\n  margin-bottom: 10px;\n"]))),E=B.Z.ul(p||(p=(0,_.Z)(["\n  display: flex;\n  margin-bottom: 10px;\n\n  & li:not(:last-child) {\n    margin-right: 5px;\n  }\n\n  & p {\n    margin-right: 8px;\n  }\n"]))),F=B.Z.div(x||(x=(0,_.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),G=B.Z.p(u||(u=(0,_.Z)(["\n  font-size: 20px;\n  text-decoration: underline;\n  margin-bottom: 8px;\n"]))),H=(0,B.Z)(I.OL)(h||(h=(0,_.Z)(["\n  font-weight: 500;\n  width: 100px;\n  padding: 5px;\n  display: flex;\n  border-radius: 4px;\n  text-decoration: none;\n  color: inherit;\n\n  &.active {\n    background-color: #929eaa96;\n  }\n\n  :hover:not(.active),\n  :focus-visible:not(.active) {\n    color: #41259e;\n  }\n\n  &:not(:last-child) {\n    margin-bottom: 5px;\n  }\n"])));function L(n){var e,t,r=n.movieInfo,i=(0,Z.TH)(),o=r.title,a=r.genres,s=r.budget,c=r.homepage,d=r.poster,l=r.description,p=r.rating,x=null!==(e=null===(t=i.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,z.jsxs)(k.W,{children:[(0,z.jsx)(C,{linkBack:x}),(0,z.jsxs)(S,{children:[(0,z.jsx)(R,{src:d?"https://image.tmdb.org/t/p/w500/".concat(d):y,alt:o,width:"360"}),(0,z.jsxs)(T,{children:[(0,z.jsx)(U,{children:o}),(0,z.jsxs)(W,{children:["Rating: ",p.toFixed(1)]}),(0,z.jsxs)(A,{children:[(0,z.jsx)("p",{children:"Official website:"}),(0,z.jsx)("a",{href:c,children:c})]}),(0,z.jsxs)(D,{children:["Budget: ",s]}),(0,z.jsxs)(E,{children:[(0,z.jsx)("p",{children:"Genres:"}),a.map((function(n){return(0,z.jsx)("li",{children:n.name},n.id)}))]}),(0,z.jsx)("b",{children:"Overview"}),(0,z.jsx)("p",{children:l}),(0,z.jsxs)(F,{children:[(0,z.jsx)(G,{children:"Additional Information"}),(0,z.jsx)(H,{to:"cast",state:{from:x},children:"Cast"}),(0,z.jsx)(H,{to:"reviews",state:{from:x},children:"Reviews"})]})]})]})]})}var q=t(8966);function J(){var n=(0,Z.UO)().movieId,e=(0,b.useState)(null),t=(0,g.Z)(e,2),r=t[0],i=t[1],o=(0,b.useState)(null),a=(0,g.Z)(o,2),s=a[0],c=a[1],d=(0,b.useState)(!1),l=(0,g.Z)(d,2),p=l[0],x=l[1];return(0,b.useEffect)((function(){function e(){return(e=(0,f.Z)(m().mark((function e(){var t,r,o,a,s,d,l,p,u;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w(n);case 3:t=e.sent,r=t.data,o=r.budget,a=r.genres,s=r.homepage,d=r.original_title,l=r.overview,p=r.poster_path,u=r.vote_average,i({title:d,genres:a,budget:o,homepage:s,poster:p,description:l,rating:u}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),c(e.t0);case 12:return e.prev=12,x(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))).apply(this,arguments)}x(!0),function(){e.apply(this,arguments)}()}),[n]),(0,z.jsxs)(k.W,{children:[p&&(0,z.jsx)(q.g4,{color:"#3f51b5"}),s&&(0,z.jsx)("h2",{children:"Data processing error. Try reloading the page."}),r&&(0,z.jsx)(L,{movieInfo:r}),(0,z.jsx)(Z.j3,{})]})}}}]);
//# sourceMappingURL=21.2879948d.chunk.js.map