(window["webpackJsonpgraphql-typescript-react"]=window["webpackJsonpgraphql-typescript-react"]||[]).push([[0],{51:function(e,n,t){e.exports=t(67)},56:function(e,n,t){},62:function(e,n,t){},67:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),u=t(39),i=t.n(u),o=t(48),l=t(5),c=t(71),d=(t(56),t(6)),m=t(15),s=t(21),f=t(24),p=t(7);t(62);function v(){var e=Object(d.a)(["\n  padding: 1rem 3rem;\n  font-weight: 500;\n  font-size: 1.25rem;\n  text-decoration: none;\n  color: black;\n"]);return v=function(){return e},e}function g(){var e=Object(d.a)(["\n  display: flex;\n  flex: 1;\n  border: 2px solid black;\n  float: right;\n  justify-content: flex-end;\n"]);return g=function(){return e},e}function b(){var e=Object(d.a)(["\n  padding: 1rem 3rem 1rem 0;\n  font-size: 1.5rem;\n  font-weight: 500;\n  flex: 1;\n"]);return b=function(){return e},e}function E(){var e=Object(d.a)(["\n  display: flex;\n  padding-top: 2rem;\n"]);return E=function(){return e},e}var h=p.default.div(E()),O=p.default.div(b()),j=p.default.div(g()),y=Object(p.default)(m.b)(v()),x=function(){return r.createElement(h,null,r.createElement(O,null,"Blogify"),r.createElement(j,null,r.createElement(y,{to:"/users"},"Users"),r.createElement(y,{to:"/posts"},"Posts"),r.createElement(y,{to:"/users"},"Users")))},k=(t(43),t(20)),w=t.n(k),R=t(19),U=(t(25),t(13));function L(){var e=Object(d.a)(["\n    query UserList {\n  allUsers {\n    edges {\n      node {\n        username\n        uuid\n        posts {\n          edges {\n            node {\n              uuid\n              body\n              title\n              author {\n                uuid\n                username\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n    "]);return L=function(){return e},e}function P(){var e=Object(d.a)(["\n    query UserProfile($uuid: String!) {\n  user(uuid: $uuid) {\n    username\n    uuid\n    posts {\n      edges {\n        node {\n          uuid\n          body\n          title\n          author {\n            id\n            username\n          }\n        }\n      }\n    }\n  }\n}\n    "]);return P=function(){return e},e}function q(){var e=Object(d.a)(["\n    mutation createUser($username: String!) {\n  createUser(username: $username) {\n    user {\n      id\n      username\n      posts {\n        edges {\n          node {\n            id\n            author {\n              username\n              uuid\n            }\n            authorId\n            body\n            title\n          }\n        }\n      }\n    }\n  }\n}\n    "]);return q=function(){return e},e}function S(){var e=Object(d.a)(["\n    query PostList {\n  allPosts {\n    edges {\n      node {\n        body\n        uuid\n        title\n        author {\n          id\n          username\n        }\n      }\n    }\n  }\n}\n    "]);return S=function(){return e},e}function $(){var e=Object(d.a)(["\n    query Post($uuid: String!) {\n  post(uuid: $uuid) {\n    body\n    id\n    title\n    author {\n      username\n      id\n    }\n  }\n}\n    "]);return $=function(){return e},e}var Q=w()($());var z=w()(S());var F=w()(q()),B=function(e){return r.createElement(R.a,Object.assign({mutation:F},e))};var C=w()(P());var I=w()(L());var J=t(28),N=t.n(J);function M(){var e=Object(d.a)(["\n  padding: 2rem 5rem 2rem 0rem;\n  border-bottom: 2px solid lightgray;\n  cursor: pointer;\n  display: block;\n  color: black;\n  text-decoration: none;\n  font-size: 1.5rem;\n  font-weight: 700;\n"]);return M=function(){return e},e}function A(){var e=Object(d.a)([""]);return A=function(){return e},e}var D=p.default.div(A()),G=Object(p.default)(m.b)(M()),H=function(e){var n=e.data;return r.createElement(D,null,!!N.a.get(n,"allUsers.edges",!1)&&N.a.get(n,"allUsers.edges",[]).map((function(e){return r.createElement(G,{to:"/users/".concat(e.node.uuid),key:e.node.uuid},e.node.username)})))},K=function(){var e,n=U.c(I,e),t=n.data,a=n.error;return n.loading?r.createElement("div",null,"Loading..."):a||!t?r.createElement("div",null,"ERROR"):r.createElement(r.Fragment,null,r.createElement(H,{data:t}))};function T(){var e=Object(d.a)(["\n  padding-top: 1rem;\n  cursor: pointer;\n"]);return T=function(){return e},e}function V(){var e=Object(d.a)(["\n  font-weight: 600;\n  color: gray;\n"]);return V=function(){return e},e}function W(){var e=Object(d.a)(["\n  padding-top: 2rem;\n  border: 1px solid lightgray;\n"]);return W=function(){return e},e}function X(){var e=Object(d.a)(["\n  padding: 2rem;\n"]);return X=function(){return e},e}function Y(){var e=Object(d.a)(["\n  padding: 1rem 0 0 0;\n  border-radius: 5px;\n  font-weight: 700;\n"]);return Y=function(){return e},e}var Z=p.default.div(Y()),_=p.default.div(X()),ee=p.default.div(W()),ne=p.default.div(V()),te=Object(p.default)(m.b)(T()),re=function(e){var n=e.data.user;return n?a.a.createElement(_,null,a.a.createElement(Z,null,n.username),a.a.createElement(ee,null,a.a.createElement(ne,null,"Posts"),n.posts.edges.map((function(e){return a.a.createElement(te,{to:"/posts/".concat(e.node.uuid)},e.node.title)})))):a.a.createElement("div",null,"No User is available")},ae=function(e){var n,t=e.match.params.id,a=(n={variables:{uuid:String(t)}},U.c(C,n)),u=a.data,i=a.error,o=a.loading,l=a.refetch;return r.useEffect((function(){l()}),[t]),o?r.createElement("div",null,"Loading..."):i?r.createElement("div",null,"ERROR"):u?r.createElement(re,{data:u}):r.createElement("div",null,"Select a flight from the panel")},ue=function(){return r.createElement(B,null,(function(e,n){n.client;return r.createElement("div",{onClick:function(){e({variables:{username:"nickenauber"}})}},"Create User")}))},ie=function(){return r.createElement(r.Fragment,null,r.createElement(s.a,{exact:!0,path:"/users",component:K}),r.createElement(s.a,{exact:!0,path:"/users/:id",component:ae}),r.createElement(s.a,{exact:!0,path:"/users/create",component:ue}))};function oe(){var e=Object(d.a)(["\n  border: 1px solid  #37C870 ;\n"]);return oe=function(){return e},e}var le=p.default.div(oe()),ce=function(e){var n=e.data;return r.createElement(le,null,n.allPosts&&n.allPosts.edges.map((function(e,n){return r.createElement(m.b,{key:n,to:"/posts/".concat(e.node.uuid)},N.a.get(e,"node.title",""))})))},de=function(){var e,n=U.c(z,e),t=n.data,a=n.error;return n.loading?r.createElement("div",null,"Loading..."):a||!t?r.createElement("div",null,"ERROR"):r.createElement(ce,{data:t})};function me(){var e=Object(d.a)(["\n  padding: 2rem;\n  border: 2px solid dark #37C870 ;\n"]);return me=function(){return e},e}function se(){var e=Object(d.a)(["\n  padding-top: 2rem;\n  border: 1px solid lightgray;\n"]);return se=function(){return e},e}function fe(){var e=Object(d.a)(["\n  padding: 1rem 0 0 0;\n  border-radius: 5px;\n  font-weight: 700;\n"]);return fe=function(){return e},e}function pe(){var e=Object(d.a)(["\n  padding: 2rem;\n"]);return pe=function(){return e},e}var ve=p.default.div(pe()),ge=p.default.div(fe()),be=p.default.div(se()),Ee=p.default.div(me()),he=function(e){var n=e.data,t=n.post;return console.log(n),t?a.a.createElement(ve,null,a.a.createElement(ge,null,t.title),a.a.createElement(be,null),a.a.createElement(Ee,null,t.body)):a.a.createElement("div",null,"No post is available")},Oe=function(e){var n,t=e.match.params.id,a=(n={variables:{uuid:String(t)}},U.c(Q,n)),u=a.data,i=a.error,o=a.loading,l=a.refetch;return r.useEffect((function(){l()}),[t]),o?r.createElement("div",null,"Loading..."):i?r.createElement("div",null,"ERROR"):u?r.createElement(he,{data:u}):r.createElement("div",null,"Select a flight from the panel")},je=function(){return r.createElement(r.Fragment,null,r.createElement(s.a,{exact:!0,path:"/posts",component:de}),r.createElement(s.a,{exact:!0,path:"/posts/:id",component:Oe}))};function ye(){var e=Object(d.a)(["\n  padding-top: 2rem;\n  border: 3px solid blue;\n  height: auto;\n  background: ",";\n"]);return ye=function(){return e},e}function xe(){var e=Object(d.a)(["\n  @media "," {\n    padding: 0rem 0rem;\n  }\n  @media "," {\n    padding: 1rem 10rem;\n  }\n  @media "," {\n    padding: 1rem 20rem;\n  }\n  @media "," {\n    padding: 1rem 30rem;\n  }\n  @media "," {\n    padding: 2rem 45rem;\n  }\n  border: 2px solid  #37C870 ;\n  height: 100vh;\n"]);return xe=function(){return e},e}var ke=p.default.div(xe(),f.theme.mediaQueries.mobileM("min"),f.theme.mediaQueries.tablet("min"),f.theme.mediaQueries.laptop("min"),f.theme.mediaQueries.laptopL("min"),f.theme.mediaQueries.desktopL("min")),we=p.default.div(ye(),"lightgray"),Re=function(){return a.a.createElement(ke,null,a.a.createElement(m.a,null,a.a.createElement(x,null),a.a.createElement(we,null,a.a.createElement(s.a,{path:"/users",component:ie}),a.a.createElement(s.a,{path:"/posts",component:je}))))},Ue=new o.a({uri:"http://127.0.0.1:5000/graphql"});i.a.render(a.a.createElement(l.b,{client:Ue},a.a.createElement(c.a,{client:Ue},a.a.createElement(Re,null))),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.3beb80dd.chunk.js.map