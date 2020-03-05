(this["webpackJsonptodo-redux"]=this["webpackJsonptodo-redux"]||[]).push([[0],{30:function(t,e,n){},43:function(t,e,n){t.exports=n(81)},52:function(t,e,n){},54:function(t,e,n){},55:function(t,e,n){},56:function(t,e,n){},57:function(t,e,n){},58:function(t,e,n){},59:function(t,e,n){},60:function(t,e,n){},61:function(t,e,n){},81:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(22),c=n.n(o),i=n(3),l=n(16),u=n(6),s=n(10),m=n(12),d=n(11),f=n(13),p=n(19),E=(n(52),n(4)),h=a.a.createContext(),b=h.Provider,v=h.Consumer,g=function(){return function(t){return function(e){return a.a.createElement(v,null,(function(n){return a.a.createElement(t,Object.assign({},e,{todoService:n}))}))}}},y=function(t){return function(){return function(e){e({type:"FETCH_LIST_REQUEST"}),t.getTodoList().then((function(t){return e({type:"FETCH_LIST_SUCCESS",payload:t.data})})).then((function(){return e(O())})).catch((function(t){return e(function(t){return{type:"FETCH_LIST_FAILURE",payload:t}}(t))}))}}},O=function(){return{type:"UPDATE_DONE_COUNT"}},_=function(t){return function(){return function(e){t.userLogout().then((function(t){return e(function(t){return{type:"SEND_USER_LOGOUT_SUCCESS",payload:t}}(t))})).catch((function(t){return console.log(t)}))}}},S=(n(30),function(t){function e(){var t,n;Object(u.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).state={emailVal:"",password:"",classEmail:"form-control",classPassword:"form-control"},n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this,e=this.props,n=e.sendLoginForm,r=e.homeRedirect,o=e.errorLogin,c=this.state,i=c.emailVal,u=c.password,s=c.classEmail,m=c.classPassword,d=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return r?a.a.createElement(p.a,{to:"/"}):a.a.createElement("div",{className:"todo-app text-center"},a.a.createElement("nav",{className:"nav nav-pills nav-fill"},a.a.createElement(l.b,{to:"/login",className:"nav-item nav-link active"},"Login"),a.a.createElement(l.b,{to:"/register",className:"nav-item nav-link"},"Registration")),a.a.createElement("form",{id:"loginForm",noValidate:!0},a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"loginEmail"},"Email address"),a.a.createElement("input",{type:"email",className:s,id:"loginEmail","aria-describedby":"emailHelp",onChange:function(e){t.setState({emailVal:e.target.value})}})),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"loginPassword"},"Password"),a.a.createElement("input",{type:"password",className:m,id:"loginPassword",onChange:function(e){t.setState({password:e.target.value})}})),a.a.createElement("p",null,o),a.a.createElement("button",{type:"submit",className:"btn btn-secondary float-right",onClick:function(e){e.preventDefault(),d.test(i)&&u.length>=4?(n({email:i,password:u}),t.setState({classEmail:"form-control",classPassword:"form-control"})):(d.test(i)?t.setState({classEmail:"form-control"}):t.setState({classEmail:"form-control error-validate"}),u.length<4?t.setState({classPassword:"form-control error-validate"}):t.setState({classPassword:"form-control"}))}},"Submit")))}}]),e}(a.a.Component)),I=g()(Object(i.b)((function(t){return{homeRedirect:t.homeRedirect,errorLogin:t.errorLogin}}),(function(t,e){var n=e.todoService;return Object(E.b)({sendLoginForm:function(e){return t(function(t,e){return function(){return function(n){t.sendLoginForm(e).then((function(t){return n(function(t){return{type:"SEND_LOGIN_FORM_SUCCESS",payload:t}}(t))})).catch((function(t){return n(function(t){return{type:"SEND_LOGIN_FORM_FAILURE",payload:t}}(t))}))}}}(n,e))}},t)}))(S)),L=function(t){function e(){var t,n;Object(u.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).state={emailVal:"",password1:"",password2:"",classEmail:"form-control",classPassword:"form-control"},n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this,e=this.props,n=e.sendRegisterForm,r=e.homeRedirect,o=e.errorRegister,c=this.state,i=c.emailVal,u=c.password1,s=c.password2,m=c.classEmail,d=c.classPassword,f=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return r?a.a.createElement(p.a,{to:"/"}):a.a.createElement("div",{className:"todo-app text-center"},a.a.createElement("nav",{className:"nav nav-pills nav-fill"},a.a.createElement(l.b,{to:"/login",className:"nav-item nav-link"},"Login"),a.a.createElement(l.b,{to:"/register",className:"nav-item nav-link  active"},"Registration")),a.a.createElement("form",{id:"registerForm"},a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"registerEmail"},"Email address"),a.a.createElement("input",{type:"email",className:m,id:"registerEmail","aria-describedby":"emailHelp",value:i,onChange:function(e){t.setState({emailVal:e.target.value})}}),a.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"registerPassword1"},"Password"),a.a.createElement("input",{type:"password",className:d,id:"registerPassword1",value:u,onChange:function(e){t.setState({password1:e.target.value})}})),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"registerPassword2"},"Password"),a.a.createElement("input",{type:"password",className:d,id:"registerPassword2",value:s,onChange:function(e){t.setState({password2:e.target.value})}})),a.a.createElement("p",null,o),a.a.createElement("button",{type:"submit",className:"btn btn-secondary float-right",onClick:function(e){e.preventDefault(),f.test(i)&&u.length>=4&&u===s?(n({email:i,password:u}),t.setState({classEmail:"form-control",classPassword:"form-control"})):(f.test(i)?t.setState({classEmail:"form-control"}):t.setState({classEmail:"form-control error-validate"}),u.length<4||u!==s?t.setState({classPassword:"form-control error-validate"}):t.setState({classPassword:"form-control"}))}},"Submit")))}}]),e}(a.a.Component),R=g()(Object(i.b)((function(t){return{homeRedirect:t.homeRedirect,errorRegister:t.errorRegister}}),(function(t,e){var n=e.todoService;return Object(E.b)({sendRegisterForm:function(e){return t(function(t,e){return function(){return function(n){t.sendRegisterForm(e).then((function(t){return n(function(t){return{type:"SEND_REGISTER_FORM_SUCCESS",payload:t}}(t.data))})).catch((function(t){return n(function(t){return{type:"SEND_REGISTER_FORM_FAILURE",payload:t}}(t))}))}}}(n,e))}},t)}))(L)),N=g()(Object(i.b)(null,(function(t,e){var n=e.todoService;return Object(E.b)({userLogout:_(n)},t)}))((function(t){var e=t.userLogout;return a.a.createElement("div",{className:"app-logout d-flex"},a.a.createElement("button",{className:"btn btn-outline-warning",onClick:e},"Logout"))}))),T=(n(54),Object(i.b)((function(t){return{todo:t.active,done:t.doneCount}}))((function(t){var e=t.todo,n=t.done;return a.a.createElement("div",{className:"app-header d-flex"},a.a.createElement("h1",null,"Todo List"),a.a.createElement("h2",null,e," more to do, ",n," done"))}))),C=(n(55),n(56),function(t){var e=t.label,n=t.id,r=t.done,o=t.important,c=t.onDoneItem,i=t.onImportantItem,l=t.onRemoveFromList,u="list-group-item todo-list-item d-flex";return r&&(u="list-group-item todo-list-item d-flex done"),o&&(u="list-group-item todo-list-item d-flex important"),r&&o&&(u="list-group-item todo-list-item done d-flex important"),a.a.createElement("li",{className:u,id:n},a.a.createElement("span",{className:"todo-list-item-label",onClick:c},e),a.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm ",onClick:i},a.a.createElement("i",{className:"fa fa-exclamation"})),a.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm ",onClick:l},a.a.createElement("i",{className:"fa fa-trash-o"})))}),j=(n(57),function(){return a.a.createElement("h2",null,"Error")}),w=(n(58),function(){return a.a.createElement("h2",null,"Loading...")}),F=function(t){function e(){var t,n;Object(u.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).state={hasError:!1},n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement(j,null):this.props.children}}]),e}(r.Component),A=function(t){function e(){return Object(u.a)(this,e),Object(m.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.props.fetchList()}},{key:"render",value:function(){var t=this.props,e=t.loading,n=t.list,r=t.error,o=t.isAuth,c=t.onDoneItem,i=t.onImportantItem,l=t.onRemoveFromList;return e?a.a.createElement(w,null):r?a.a.createElement(j,null):o?a.a.createElement(F,null,a.a.createElement("ul",{className:"list-group todo-list"},n.map((function(t){return a.a.createElement(C,{label:t.label,key:t.id,done:t.done,important:t.important,onDoneItem:function(){return c(t.id)},onImportantItem:function(){return i(t.id)},onRemoveFromList:function(){return l({id:t.id})}})})))):a.a.createElement(p.a,{to:"/login"})}}]),e}(a.a.Component),D=g()(Object(i.b)((function(t){return{loading:t.loading,list:t.list,error:t.error,isAuth:t.isAuth}}),(function(t,e){var n=e.todoService;return Object(E.b)({fetchList:y(n),onImportantItem:function(e){return t(function(t,e){return function(){return function(n){t.updateItem({id:e,important:!0}).then((function(t){return n(function(t){return{type:"UPDATE_IMPORTANT_ITEM",payload:t}}(t.data.id))})).catch((function(t){return n(function(t){return{type:" IMPORTANT_FAILURE",payload:t}}(t))}))}}}(n,e))},onDoneItem:function(e){return t(function(t,e){return function(){return function(n){t.updateItem({id:e,done:!0}).then((function(t){return n(function(t){return{type:"UPDATE_DONE_ITEM",payload:t}}(t.data.id))})).then((function(){return n(O())})).catch((function(t){return n(function(t){return{type:" DONE_FAILURE",payload:t}}(t))}))}}}(n,e))},onRemoveFromList:function(e){return t(function(t,e){return function(){return function(n){t.deleteItem(e).then((function(t){return n(function(t){return{type:"ITEM_REMUVE_FROM_LIST",payload:t}}(t.data.id))})).catch((function(t){return console.log(t),n(function(t){return{type:"DELETE_FAILURE",payload:t}}(t))}))}}}(n,e))}},t)}))(A)),U=(n(59),{onSearch:function(t){return{type:"SEARCH_ITEM_IN_LIST",payload:t}}}),x=Object(i.b)((function(){return{}}),U)((function(t){var e=t.onSearch;return a.a.createElement("input",{type:"text",className:"form-control search-input",placeholder:"type to search",onChange:function(t){return e(t.target.value)}})})),P=(n(60),{onFilterAll:function(){return{type:"FILTER_LIST_UPDATE"}},onFilterActive:function(){return{type:"FILTER_LIST_ACTIVE"}},onFilterDone:function(){return{type:"FILTER_LIST_DONE"}}}),M=Object(i.b)((function(){return{}}),P)((function(t){var e=t.onFilterActive,n=t.onFilterAll,r=t.onFilterDone;return a.a.createElement("div",{className:"btn-group"},a.a.createElement("button",{onClick:n,className:"btn btn-info"},"All"),a.a.createElement("button",{onClick:e,className:"btn btn-outline-secondary"},"Active"),a.a.createElement("button",{onClick:r,className:"btn btn-outline-secondary"},"Done"))})),k=(n(61),function(t){function e(){var t,n;Object(u.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).state={str:""},n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this,e=this.props.onItemAddToList;return a.a.createElement("form",{className:"item-add-form d-flex"},a.a.createElement("input",{className:"form-control",type:"text",placeholder:"What next?",value:this.state.str,onChange:function(e){t.setState({str:e.target.value})}}),a.a.createElement("button",{type:"submit",className:"btn btn-outline-secondary",onClick:function(n){n.preventDefault(),t.state.str&&(e({str:t.state.str}),t.setState({str:""}))}},"Add"))}}]),e}(a.a.Component)),H=g()(Object(i.b)((function(){return{}}),(function(t,e){var n=e.todoService;return Object(E.b)({onItemAddToList:function(e){return t(function(t,e){return function(){return function(n){t.addItem(e).then((function(t){return n(function(t){return{type:"ITEM_ADD_SUCCESS",payload:t}}(t.data.todo))})).then((function(){return n(O())})).catch((function(t){return n(function(t){return{type:"ITEM_ADD_FAILURE",payload:t}}(t))}))}}}(n,e))}},t)}))(k)),V=function(t){function e(){return Object(u.a)(this,e),Object(m.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return a.a.createElement(p.d,null,a.a.createElement(p.b,{path:"/",render:function(){return a.a.createElement("div",{className:"todo-app"},a.a.createElement(N,null),a.a.createElement(T,null),a.a.createElement("div",{className:"top-panel d-flex"},a.a.createElement(x,null),a.a.createElement(M,null)),a.a.createElement(D,null),a.a.createElement(H,null))},exact:!0}),a.a.createElement(p.b,{path:"/login",component:I,exact:!0}),a.a.createElement(p.b,{path:"/register",component:R,exact:!0}))}}]),e}(r.Component),G=n(5),B=n.n(G),z=n(20),Z=n.n(z),J=n(41),Q=n(42),W=n(2),$=function(t,e){var n=0,r=1;return e.list.filter((function(e){return e.id===t}))[0].done&&(n=1,r=0),Object(W.a)({},e,{list:e.list.filter((function(e){return e.id!==t})),active:e.list.length-e.doneCount-r,doneCount:e.list.filter((function(t){return t.done})).length-n,generalList:e.list.filter((function(e){return e.id!==t}))})},q=function(t,e){var n=[].concat(Object(Q.a)(e.list),[Object(W.a)({},t,{id:t._id})]);return Object(W.a)({},e,{list:n,active:e.list.length,generalList:n})},K=function(t,e){return Object(W.a)({},e,{list:e.list.map((function(e){return e.id===t?Object(W.a)({},e,{important:!e.important}):e}))})},X=function(t,e){var n=1;e.list.filter((function(e){return e.id===t}))[0].done&&(n=-1);var r=e.list.map((function(e){return e.id===t?Object(W.a)({},e,{done:!e.done}):e}));return Object(W.a)({},e,{list:r,generalList:r,active:e.list.length-e.doneCount-n,doneCount:e.list.filter((function(t){return t.done})).length+n})},Y=function(t){return Object(W.a)({},t,{doneCount:t.list.filter((function(t){return t.done})).length,active:t.list.length-t.list.filter((function(t){return t.done})).length})},tt=function(t,e){return e.list=e.generalList,Object(W.a)({},e,{list:e.list.filter((function(e){return e.label.toLowerCase().includes(t.toLowerCase())}))})},et=function(t){return t.list=t.generalList,Object(W.a)({},t,{list:t.list.filter((function(t){return t.done}))})},nt=function(t){return Object(W.a)({},t,{list:t.generalList})},rt=function(t){return t.list=t.generalList,Object(W.a)({},t,{list:t.list.filter((function(t){return!t.done}))})},at=function(t,e){return Object(W.a)({},e,{homeRedirect:t.data.homeRedirect||!1,isAuth:t.data.isAuth||!1,errorLogin:t.data.message||null})},ot={list:[],doneCount:0,loading:!0,error:null,active:0,generalList:[],homeRedirect:!1,isAuth:!0,errorLogin:null,errorRegister:null},ct=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,e=arguments.length>1?arguments[1]:void 0;switch(console.log(e.type),e.type){case"FETCH_LIST_REQUEST":return Object(W.a)({},t,{list:[],loading:!0,error:null,generalList:[],isAuth:!0});case"FETCH_LIST_SUCCESS":return Object(W.a)({},t,{list:e.payload.todos||[],loading:!1,error:null,generalList:e.payload.todos,isAuth:e.payload.isAuth,homeRedirect:!1});case"FETCH_LIST_FAILURE":return Object(W.a)({},t,{list:[],loading:!1,error:e.payload});case"ITEM_ADD_SUCCESS":return q(e.payload,t);case"ITEM_REMUVE_FROM_LIST":return $(e.payload,t);case"UPDATE_IMPORTANT_ITEM":return K(e.payload,t);case"UPDATE_DONE_ITEM":return X(e.payload,t);case"UPDATE_DONE_COUNT":return Y(t);case"SEARCH_ITEM_IN_LIST":return tt(e.payload,t);case"FILTER_LIST_UPDATE":return nt(t);case"FILTER_LIST_ACTIVE":return rt(t);case"FILTER_LIST_DONE":return et(t);case"SEND_LOGIN_FORM_SUCCESS":return at(e.payload,t);case"SEND_LOGIN_FORM_FAILURE":return Object(W.a)({},t,{errorLogin:"ERR_INTERNET_DISCONNECTED"});case"SEND_REGISTER_FORM_SUCCESS":return Object(W.a)({},t,{homeRedirect:e.payload.homeRedirect,errorRegister:e.payload.message});case"SEND_REGISTER_FORM_FAILURE":return Object(W.a)({},t,{errorRegister:"ERR_INTERNET_DISCONNECTED"});case"SEND_USER_LOGOUT_SUCCESS":return Object(W.a)({},t,{isAuth:e.payload.isAuth,errorLogin:null,errorRegister:null});default:return t}},it=Object(E.c)(ct,Object(E.a)(J.a)),lt=new function t(){var e=this;Object(u.a)(this,t),this._apiBase="http://localhost:8888/",this.getTodoList=function(){return B.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,B.a.awrap(Z.a.patch(e._apiBase));case 3:return t.abrupt("return",t.sent);case 6:return t.prev=6,t.t0=t.catch(0),t.abrupt("return",t.t0);case 9:case"end":return t.stop()}}),null,null,[[0,6]])},this.sendLoginForm=function(t){return B.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,B.a.awrap(Z.a.post("".concat(e._apiBase,"login"),t));case 3:return n.abrupt("return",n.sent);case 6:return n.prev=6,n.t0=n.catch(0),console.log(n.t0),n.abrupt("return",n.t0);case 10:case"end":return n.stop()}}),null,null,[[0,6]])},this.sendRegisterForm=function(t){return B.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,B.a.awrap(Z.a.post("".concat(e._apiBase,"register"),t));case 3:return n.abrupt("return",n.sent);case 6:return n.prev=6,n.t0=n.catch(0),n.abrupt("return",n.t0);case 9:case"end":return n.stop()}}),null,null,[[0,6]])},this.updateItem=function(t){return B.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,B.a.awrap(Z.a.put("".concat(e._apiBase),t));case 3:return n.abrupt("return",n.sent);case 6:return n.prev=6,n.t0=n.catch(0),n.abrupt("return",n.t0);case 9:case"end":return n.stop()}}),null,null,[[0,6]])},this.deleteItem=function(t){return B.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,B.a.awrap(Z.a.delete("".concat(e._apiBase),{params:t}));case 3:return n.abrupt("return",n.sent);case 6:return n.prev=6,n.t0=n.catch(0),n.abrupt("return",n.t0);case 9:case"end":return n.stop()}}),null,null,[[0,6]])},this.addItem=function(t){return B.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,B.a.awrap(Z.a.post("".concat(e._apiBase),t));case 3:return n.abrupt("return",n.sent);case 6:return n.prev=6,n.t0=n.catch(0),n.abrupt("return",n.t0);case 9:case"end":return n.stop()}}),null,null,[[0,6]])},this.userLogout=function(){return B.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,B.a.awrap(Z.a.patch("".concat(e._apiBase,"logout")));case 3:return t.abrupt("return",t.sent);case 6:return t.prev=6,t.t0=t.catch(0),t.abrupt("return",t.t0);case 9:case"end":return t.stop()}}),null,null,[[0,6]])}};c.a.render(a.a.createElement(i.a,{store:it},a.a.createElement(F,null,a.a.createElement(b,{value:lt},a.a.createElement(l.a,null,a.a.createElement(V,null))))),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.614dad92.chunk.js.map