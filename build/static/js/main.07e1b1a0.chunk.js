(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports={window:"SignIn_window__1mWsT",form:"SignIn_form__1fwUn"}},13:function(e,t,a){e.exports={navigationBar:"Navigation_navigationBar__3rVW2",container:"Navigation_container__1kFuN",siteNavigation:"Navigation_siteNavigation__rNz3w",userNavigation:"Navigation_userNavigation__35tlI"}},31:function(e,t,a){e.exports={window:"Landing_window__3O97O"}},32:function(e,t,a){e.exports={window:"Home_window__35dtl"}},33:function(e,t,a){e.exports=a(62)},38:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),i=a.n(o),l=(a(38),a(65)),s=a(64),u=a(63),c=r.a.createContext(null),m=function(e){return function(t){return r.a.createElement(c.Consumer,null,function(a){return r.a.createElement(e,Object.assign({},t,{firebase:a}))})}},p=c,h=a(4),d=a(23),f=a.n(d),g=(a(45),a(47),{apiKey:"AIzaSyAfX2DUD-F-aduyKLoWg6qPA8Tv2qCaF-4",authDomain:"auth-b3296.firebaseapp.com",databaseURL:"https://auth-b3296.firebaseio.com",projectId:"auth-b3296",storageBucket:"auth-b3296.appspot.com",messagingSenderId:"371152742967"}),E=function e(){var t=this;Object(h.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.doSignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.doSignOut=function(){return t.auth.signOut()},this.user=function(e){return t.db.ref("user/".concat(e))},this.users=function(){return t.db.ref("user")},f.a.initializeApp(g),this.auth=f.a.auth(),this.db=f.a.database()},b=m(function(e){var t=e.firebase;return r.a.createElement("button",{type:"button",onClick:t.doSignOut},"Sign Out")}),v="/home",w=r.a.createContext(null),O=a(6),j=a(8),y=a(7),C=a(9),S=function(e){var t=function(t){function a(){var e,t;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(j.a)(this,(e=Object(y.a)(a)).call.apply(e,[this].concat(r)))).state={authUser:null},t}return Object(C.a)(a,t),Object(O.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.auth.onAuthStateChanged(function(t){t?e.setState({authUser:t}):e.setState({authUser:null})})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(w.Provider,{value:this.state.authUser},r.a.createElement(e,this.props))}}]),a}(r.a.Component);return m(t)},N=a(10),_=a(66),U=a(16),A=function(e){return function(t){var a=function(a){function n(){return Object(h.a)(this,n),Object(j.a)(this,Object(y.a)(n).apply(this,arguments))}return Object(C.a)(n,a),Object(O.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.auth.onAuthStateChanged(function(a){e(a)||t.props.history.push("/signin")})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var a=this;return r.a.createElement(w.Consumer,null,function(n){var o=Object(N.a)({},a.props,{authUser:n});return e(n)?r.a.createElement(t,o):null})}}]),n}(r.a.Component);return Object(U.a)(_.a,m)(a)}},k=a(13),I=a.n(k),W=function(){return r.a.createElement("div",{className:I.a.container},r.a.createElement("ul",{className:I.a.siteNavigation},r.a.createElement("li",null,r.a.createElement(u.a,{to:"/"},"Start page")),r.a.createElement("li",null,r.a.createElement(u.a,{to:v},"Home"))),r.a.createElement("ul",{className:I.a.userNavigation},r.a.createElement("li",null,r.a.createElement(b,null))))},x=function(){return r.a.createElement("div",{className:I.a.container},r.a.createElement("ul",{className:I.a.siteNavigation},r.a.createElement("li",null,r.a.createElement(u.a,{to:"/"},"Start page")),r.a.createElement("li",null,r.a.createElement(u.a,{to:"/signin"},"Sign In")),r.a.createElement("li",null,r.a.createElement(u.a,{to:"/signup"},"Sign Up"))))},P=function(){return r.a.createElement("div",{className:I.a.navigationBar},r.a.createElement(w.Consumer,null,function(e){return e?r.a.createElement(W,null):r.a.createElement(x,null)}))},D=a(31),T=a.n(D),B=function(){return r.a.createElement("div",{className:T.a.window},r.a.createElement("h2",null,"Start page"),r.a.createElement("h3",null,"This test site allows you to register with Firebase, log into the database, and see all registered users."))},F=a(15),L=a(12),z=a.n(L),H={username:"",email:"",passwordOne:"",passwordTwo:"",error:null},M=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(j.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state=Object(N.a)({},H),a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.email,o=t.passwordOne;a.props.firebase.doCreateUserWithEmailAndPassword(r,o).then(function(e){return a.props.firebase.user(e.user.uid).set({username:n,email:r})}).then(function(e){a.setState(Object(N.a)({},H)),a.props.history.push(v)}).catch(function(e){a.setState({error:e})})},a.onChange=function(e){a.setState(Object(F.a)({},e.target.name,e.target.value))},a}return Object(C.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.passwordOne,o=e.passwordTwo,i=e.error,l=n!==o||""===n||""===a||""===t;return r.a.createElement("form",{className:z.a.form,onSubmit:this.onSubmit},r.a.createElement("input",{name:"username",value:t,onChange:this.onChange,type:"text",placeholder:"Full Name",autoComplete:"on"}),r.a.createElement("input",{name:"email",value:a,onChange:this.onChange,type:"text",placeholder:"Email Address",autoComplete:"on"}),r.a.createElement("input",{name:"passwordOne",value:n,onChange:this.onChange,type:"password",placeholder:"Password",autoComplete:"on"}),r.a.createElement("input",{name:"passwordTwo",value:o,onChange:this.onChange,type:"password",placeholder:"Confirm Password",autoComplete:"on"}),r.a.createElement("button",{disabled:l,type:"submit"},"Sign Up"),i&&r.a.createElement("p",null,i.message))}}]),t}(n.Component),q=Object(U.a)(_.a,m)(M);m(M);var J=function(){return r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(u.a,{to:"/signup"},"Sign Up"))},K=function(){return r.a.createElement("div",{className:z.a.window},r.a.createElement("h2",{className:z.a.text},"Sign Up"),r.a.createElement(q,null))},R={email:"",password:"",error:null},V=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(j.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state=Object(N.a)({},R),a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.email,r=t.password;a.props.firebase.doSignInWithEmailAndPassword(n,r).then(function(){a.setState(Object(N.a)({},R)),a.props.history.push(v)}).catch(function(e){a.setState({error:e})})},a.onChange=function(e){a.setState(Object(F.a)({},e.target.name,e.target.value))},a}return Object(C.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.error,o=""===a||""===t;return r.a.createElement("form",{className:z.a.form,onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Email Address",autoComplete:"on"}),r.a.createElement("input",{name:"password",value:a,onChange:this.onChange,type:"password",placeholder:"Password",autoComplete:"on"}),r.a.createElement("button",{disabled:o,type:"submit"},"Sign In"),n&&r.a.createElement("p",null,n.message))}}]),t}(n.Component),X=Object(U.a)(_.a,m)(V),G=function(){return r.a.createElement("div",{className:z.a.window},r.a.createElement("h2",null,"Sign In"),r.a.createElement(X,null),r.a.createElement(J,null))},Q=a(32),Y=a.n(Q),Z=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(j.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1,users:[]},a}return Object(C.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.users().on("value",function(t){var a=t.val(),n=Object.keys(a).map(function(e){return Object(N.a)({},a[e],{uid:e})});console.log("userList",n),e.setState({users:n,loading:!1})}),console.log(this.props.authUser.email),console.log(this.props.authUser.uid)}},{key:"componentWillUnmount",value:function(){this.props.firebase.users().off()}},{key:"render",value:function(){return r.a.createElement("div",{className:Y.a.window},r.a.createElement("h2",null,"Welcome to Home page"),r.a.createElement("h2",null,"(for authorized users only)"),r.a.createElement("br",null),r.a.createElement("h3",null,"All people registered on this page:"),this.state.loading&&r.a.createElement("h2",null,"Loading..."),r.a.createElement($,{users:this.state.users}))}}]),t}(n.Component),$=function(e){var t=e.users;return r.a.createElement("ul",null,t.map(function(e){return r.a.createElement("li",{key:e.uid},r.a.createElement("span",null,r.a.createElement("strong",null,"Username:")," ",e.username))}))},ee=A(function(e){return!!e})(Z),te=S(function(){return r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement(P,null),r.a.createElement(s.a,{exact:!0,path:"/",component:B}),r.a.createElement(s.a,{path:"/signup",component:K}),r.a.createElement(s.a,{path:"/signin",component:G}),r.a.createElement(s.a,{path:v,component:ee})))});a(59).config(),i.a.render(r.a.createElement(p.Provider,{value:new E},r.a.createElement(te,null)),document.getElementById("root"))}},[[33,2,1]]]);
//# sourceMappingURL=main.07e1b1a0.chunk.js.map