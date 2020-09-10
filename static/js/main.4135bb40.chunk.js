(this["webpackJsonpnaukri-dummy"]=this["webpackJsonpnaukri-dummy"]||[]).push([[0],{125:function(e,a,t){e.exports=t(304)},130:function(e,a,t){},131:function(e,a,t){},136:function(e,a,t){},155:function(e,a,t){},300:function(e,a,t){},301:function(e,a,t){},302:function(e,a,t){},303:function(e,a,t){},304:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(28),o=t.n(r),i=(t(130),t(131),t(13)),l=t(4),s=t(14),d=t(1),u=t(3),m=t(6),p="rightArrow",E="add",b="delete",f="job";var g=function(e){var a=e.type;return function(){switch(a){case p:return c.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-arrow-right",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{fillRule:"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"}));case E:return c.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-plus",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{fillRule:"evenodd",d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"}));case b:return c.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-archive-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{fillRule:"evenodd",d:"M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"}));case f:return c.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-briefcase-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{fillRule:"evenodd",d:"M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"}),c.a.createElement("path",{fillRule:"evenodd",d:"M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v1.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 5.884V4.5zm5-2A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z"}))}}()},O="/register",v="/login",h="/reset-password",A="/recruiter-dashboard",j="/candidate-dashboard",_={register:"auth/register",login:"auth/login",createJob:"".concat("jobs","/"),getPostedJobs:"".concat("recruiters","/").concat("jobs"),deletePostedJob:"".concat("jobs","?"),fetchAllAvalaibleJobs:"".concat("candidates","/").concat("jobs","?")},R=(t(136),{name:"",email:"",password:"",confirmPassword:"",userRole:0,skills:""}),w="https://jobs-api.squareboat.info/api/v1/",D={email:"",password:""},y={title:"",description:"",location:""},S={password:"",confirmPassword:""},L=[{id:"ur2",value:"Recruiter"},{id:"ur1",value:"Candidate"}],C="Password and Confirm password are not equal",I="Please enter a valid email",P="Password should be minimum of 6 digit",J=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,N="get",T="post",B="delete";function k(e){localStorage.setItem("token",e)}function F(){return localStorage.getItem("token")}function x(e){localStorage.setItem("userId",e)}function U(e){localStorage.setItem("userRole",e)}function V(){return localStorage.getItem("userRole")}function G(){localStorage.clear()}var M="passwordAndConfirmPssword",H="emailNotvalid",z="passwordLengthShouldBeMinimumOf6Digit";var q=function(e){var a=e.type;return c.a.createElement("div",{className:"error"},function(){switch(a){case M:return C;case H:return I;case z:return P}}())},W="IS_LOADING",X="SET_DATA",$="SET_ERROR",K="CLEAR_DATA",Q="DELETE_POSTED_JOB",Y="JOB_APPLIED",Z="LOGOUT",ee=function(e,a){return{type:e,payload:a}},ae=t(121),te=t.n(ae),ne=function(e,a,t,n){var c,r={method:a,url:w+e};return null!==t&&(r.data=t),void 0!==n&&(r.params=n),F()&&(r.headers={Authorization:"".concat(F()),withCredentials:!0}),c=r,te()(c).then(ce)};function ce(e){var a,t;return"application/json"===e.headers["content-type"]&&(t=e),null!==(a=t)&&void 0!==a?a:e}var re=function(e){return function(a){var t;a(ee("".concat("LOGIN","_").concat(W),!0)),(t=e,ne("".concat(_.login),T,t)).then((function(e){a(ee("".concat("LOGIN","_").concat(W),!1)),a(ee("".concat("LOGIN","_").concat(X),e.data))})).catch((function(e){return a(ee("".concat("LOGIN","_").concat($),e.response.data))}))}};var oe=Object(m.b)((function(e){return{apiData:e.login.apiData,apiError:e.login.apiError,isApiLoading:e.login.isApiLoading,isLoggedIn:e.login.isLoggedIn}}),(function(e){return{loginUser:function(a){return e(re(a))}}}))((function(e){var a=e.loginUser,t=e.apiData,r=e.apiError,o=e.isApiLoading,i=e.isLoggedIn,m=Object(l.f)(),E=Object(n.useState)(!0),b=Object(u.a)(E,2),f=b[0],v=b[1],_=Object(n.useState)(D),R=Object(u.a)(_,2),w=R[0],y=R[1],S=Object(n.useState)(!1),L=Object(u.a)(S,2),C=L[0],I=L[1],P=Object(n.useState)(!1),N=Object(u.a)(P,2),T=N[0],B=N[1];Object(n.useEffect)((function(){w.password.length>=6&&0!==w.email.length?v(!1):v(!0)}),[w]),Object(n.useEffect)((function(){C&&T&&a(w)}),[C,T]),Object(n.useEffect)((function(){var e,a,n,c,r;t&&(k(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.token),x(null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.id),U(null===t||void 0===t||null===(n=t.data)||void 0===n?void 0:n.userRole),200===(null===t||void 0===t?void 0:t.code)&&0===(null===t||void 0===t||null===(c=t.data)||void 0===c?void 0:c.userRole)&&i&&m.replace(A),200===(null===t||void 0===t?void 0:t.code)&&1===(null===t||void 0===t||null===(r=t.data)||void 0===r?void 0:r.userRole)&&i&&m.replace(j))}),[t,i]);var F=function(e){y(Object(d.a)(Object(d.a)({},w),{},Object(s.a)({},e.target.id,e.target.value)))};return c.a.createElement("div",{className:"entry-form"},c.a.createElement("h1",{className:"display-4 text-left login-form-title"},"Login"),r&&c.a.createElement("div",{className:"error"},c.a.createElement("p",null,null===r||void 0===r?void 0:r.message)),c.a.createElement("form",null,c.a.createElement("div",{className:"form-group text-left"},c.a.createElement("label",{htmlFor:"user-email-login"},"Email address"),c.a.createElement("input",{type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email",value:w.email,onChange:F}),!C&&T&&c.a.createElement(q,{type:H})),c.a.createElement("div",{className:"form-group text-left"},c.a.createElement("label",{htmlFor:"user-pswd-login"},"Password"),c.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Password",value:w.password,onChange:F}),w.password.length<6&&T&&c.a.createElement(q,{type:z})),c.a.createElement("button",{type:"submit",onClick:function(){return m.push(h)},className:"right-side w-100 btn btn-link d-none"},"Forgot Password?"),c.a.createElement("div",{className:"login-btn mt-4"},c.a.createElement("button",{type:"submit",disabled:f||o,className:"btn btn-primary",onClick:function(e){e.preventDefault(),I(J.test(w.email.toLowerCase())),B(!0),C&&T&&a(w)}},"Login",c.a.createElement("span",{className:"pl-2"},o?c.a.createElement("span",{className:"spinner-border"}):c.a.createElement(g,{type:p}))))),c.a.createElement("button",{type:"button",className:"text-center login-here pt-4 w-100 btn btn-link",onClick:function(){return m.push(O)}},"Not a memeber? Register here"))}));var ie=function(e){var a=e.password,t=e.confirmPassword,n=e.onChangeHandler,r=e.isPasswordAndConfirmPasswordEqual,o=e.isBtnClicked;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"form-group text-left"},c.a.createElement("label",{htmlFor:"pswd"},"Password"),c.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Password",value:a,onChange:n}),c.a.createElement("small",{className:"smart-desc pt-1"},"Minimum length of 6 digits"),a.length<6&&o&&c.a.createElement(q,{type:z})),c.a.createElement("div",{className:"form-group text-left"},c.a.createElement("label",{htmlFor:"confirmpswd"},"Confirm Password"),c.a.createElement("input",{type:"password",className:"form-control",id:"confirmPassword",placeholder:"Confirm Password",value:t,onChange:n}),t.length<6&&o&&c.a.createElement(q,{type:z})),!r&&o&&c.a.createElement(q,{type:M}))},le=t(74),se=t(47),de=t(48),ue=t(20),me=t(50),pe=t(49),Ee=t(122),be=(t(155),["React","Angular","Vue","Nodejs","Javascript","MongoDB"].map((function(e){return{id:e,text:e}}))),fe=[188,13],ge=function(e){Object(me.a)(t,e);var a=Object(pe.a)(t);function t(e){var n;return Object(se.a)(this,t),(n=a.call(this,e)).state={tags:[],suggestions:be},n.handleDelete=n.handleDelete.bind(Object(ue.a)(n)),n.handleAddition=n.handleAddition.bind(Object(ue.a)(n)),n.handleDrag=n.handleDrag.bind(Object(ue.a)(n)),n.handleTagClick=n.handleTagClick.bind(Object(ue.a)(n)),n}return Object(de.a)(t,[{key:"handleDelete",value:function(e){var a=this,t=this.state.tags;this.setState({tags:t.filter((function(a,t){return t!==e}))},(function(){return a.props.addSkills(a.state.tags)}))}},{key:"handleAddition",value:function(e){var a=this;this.setState((function(a){return{tags:[].concat(Object(le.a)(a.tags),[e])}}),(function(){return a.props.addSkills(a.state.tags)}))}},{key:"handleDrag",value:function(e,a,t){var n=this,c=Object(le.a)(this.state.tags).slice();c.splice(a,1),c.splice(t,0,e),this.setState({tags:c},(function(){return n.props.addSkills(n.state.tags)}))}},{key:"handleTagClick",value:function(e){console.log("The tag at index "+e+" was clicked")}},{key:"render",value:function(){var e=this.state,a=e.tags,t=e.suggestions;return c.a.createElement("div",null,c.a.createElement(Ee.WithContext,{id:"skills",tags:a,suggestions:t,delimiters:fe,handleDelete:this.handleDelete,handleAddition:this.handleAddition,handleDrag:this.handleDrag,handleTagClick:this.handleTagClick}))}}]),t}(c.a.Component),Oe=(t(300),function(e){return function(a){var t;a(ee("".concat("REGISTER","_").concat(W),!0)),(t=e,ne("".concat(_.register),T,t)).then((function(e){a(ee("".concat("REGISTER","_").concat(W),!1)),a(ee("".concat("REGISTER","_").concat(X),e.data))})).catch((function(e){return a(ee("".concat("REGISTER","_").concat($),e.response.data))}))}});var ve=Object(m.b)((function(e){return{apiData:e.register.apiData,apiError:e.register.apiError,isApiLoading:e.register.isApiLoading}}),(function(e){return{registerUser:function(a){return e(Oe(a))}}}))((function(e){var a=e.registerUser,t=e.apiData,r=e.apiError,o=e.isApiLoading,i=Object(l.f)(),m=Object(n.useState)(R),E=Object(u.a)(m,2),b=E[0],f=E[1],O=Object(n.useState)(!0),h=Object(u.a)(O,2),j=h[0],_=h[1],w=Object(n.useState)(!1),D=Object(u.a)(w,2),y=D[0],S=D[1],C=Object(n.useState)(!1),I=Object(u.a)(C,2),P=I[0],N=I[1],T=Object(n.useState)(!1),B=Object(u.a)(T,2),F=B[0],V=B[1];Object(n.useEffect)((function(){b.confirmPassword.length>=6&&b.password.length>=6&&0!==b.name.length&&0!==b.email.length&&0!==b.skills.length?_(!1):_(!0)}),[b]),Object(n.useEffect)((function(){var e,a,n;t&&(k(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.token),x(null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.id),U(null===t||void 0===t||null===(n=t.data)||void 0===n?void 0:n.userRole),201===t.code&&i.replace(A))}),[t]),Object(n.useEffect)((function(){P&&y&&F&&a(b)}),[P,y,F]);var G=function(e){var a;f(Object(d.a)(Object(d.a)({},b),{},Object(s.a)({},e.target.id,null!==(a=e.target.selectedIndex)&&void 0!==a?a:e.target.value)))};return c.a.createElement("div",{className:"entry-form"},c.a.createElement("h1",{className:"display-4 text-left register-form-title"},"Register"),r&&c.a.createElement("div",{className:"error"},(null===r||void 0===r?void 0:r.errors)?null===r||void 0===r?void 0:r.errors.map((function(e){return c.a.createElement("p",null,e.name)})):c.a.createElement("p",null,r.message)),c.a.createElement("form",null,c.a.createElement("div",{className:"form-group text-left"},c.a.createElement("label",{htmlFor:"formname"},"Name"),c.a.createElement("input",{type:"text",className:"form-control",id:"name","aria-describedby":"form-name",placeholder:"Enter name",value:b.name,onChange:G})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"userrole"},"Role"),c.a.createElement("select",{className:"form-control",id:"userRole",onChange:G},L.map((function(e){return c.a.createElement("option",{key:e.id,value:L[b.userRole]},e.value)})))),c.a.createElement("div",{className:"form-group text-left"},c.a.createElement("label",{htmlFor:"useremail"},"Email address"),c.a.createElement("input",{type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email",value:b.email,onChange:G}),!P&&F&&c.a.createElement(q,{type:H})),c.a.createElement(ie,{password:b.password,confirmPassword:b.confirmPassword,onChangeHandler:G,isPasswordAndConfirmPasswordEqual:y,isBtnClicked:F}),c.a.createElement("label",{htmlFor:"skills"},"Skills"),c.a.createElement(ge,{addSkills:function(e){var a=[];e.map((function(e){return a.push(e.text)})),f(Object(d.a)(Object(d.a)({},b),{},{skills:a.join(",")}))}}),c.a.createElement("div",{className:"login-btn mt-4"},c.a.createElement("button",{disabled:j||o,type:"submit",className:"btn btn-primary",onClick:function(e){e.preventDefault(),b.password!==b.confirmPassword?S(!1):S(!0),N(J.test(b.email.toLowerCase())),V(!0),P&&y&&F&&a(b)}},o?"Authenticating":"Register",c.a.createElement("span",{className:"pl-2"},o?c.a.createElement("span",{className:"spinner-border"}):c.a.createElement(g,{type:p}))))),c.a.createElement("button",{type:"button",className:"text-center login-here pt-4 w-100 btn btn-link",onClick:function(){return i.push(v)}},"Already a memeber? login here"))}));var he=function(){var e=Object(l.f)(),a=Object(n.useState)(S),t=Object(u.a)(a,2),r=t[0],o=t[1],i=Object(n.useState)(!1),m=Object(u.a)(i,2),E=m[0],b=m[1],f=Object(n.useState)(!0),O=Object(u.a)(f,2),v=O[0],h=O[1];return Object(n.useEffect)((function(){0!==r.confirmPassword.length&&0!==r.password.length?h(!1):h(!0)}),[r]),c.a.createElement("div",{className:"entry-form"},c.a.createElement("h1",{className:"display-4 text-left login-form-title"},"Reset Password"),c.a.createElement(ie,{password:r.password,confirmPassword:r.confirmPassword,onChangeHandler:function(e){o(Object(d.a)(Object(d.a)({},r),{},Object(s.a)({},e.target.id,e.target.value)))},isPasswordAndConfirmPasswordEqual:E}),c.a.createElement("div",{className:"login-btn mt-4"},c.a.createElement("button",{disabled:v,type:"submit",className:"btn btn-primary",onClick:function(e){e.preventDefault(),r.password===r.confirmPassword?b(!1):b(!0)}},"Reset password",c.a.createElement("span",{className:"pl-2"},c.a.createElement(g,{type:p})))),c.a.createElement("button",{type:"button",className:"text-center login-here pt-4 w-100 btn btn-link",onClick:function(){return e.goBack()}},"Go Back"))};var Ae=function(){return c.a.createElement("small",null,"Minimum Length of 3 digits")};var je=function(e){var a=e.onChangeHandler,t=e.createJobForm;return c.a.createElement("form",null,c.a.createElement("div",{className:"form-group text-left"},c.a.createElement("input",{type:"title",className:"form-control",id:"title","aria-describedby":"titleHelp",placeholder:"Enter title",value:t.title,onChange:a}),c.a.createElement(Ae,null)),c.a.createElement("div",{className:"form-group text-left"},c.a.createElement("input",{type:"description",className:"form-control",id:"description",placeholder:"Password",value:t.description,onChange:a}),c.a.createElement(Ae,null)),c.a.createElement("div",{className:"form-group text-left"},c.a.createElement("input",{type:"location",className:"form-control",id:"location",placeholder:"Location",value:t.location,onChange:a}),c.a.createElement(Ae,null)))},_e=function(e){return function(a){var t;a(ee("".concat("RECRUITER_CREATE_JOB","_").concat(W),!0)),(t=e,ne("".concat(_.createJob),T,t)).then((function(e){a(ee("".concat("RECRUITER_CREATE_JOB","_").concat(W),!1)),a(ee("".concat("RECRUITER_CREATE_JOB","_").concat(X),e.data))})).catch((function(e){return a(ee("".concat("RECRUITER_CREATE_JOB","_").concat($),e.response.data))}))}};var Re=Object(m.b)((function(e){return{apiData:e.createJob.apiData,apiError:e.createJob.apiError,isApiLoading:e.createJob.isApiLoading}}),(function(e){return{createJob:function(a){return e(_e(a))}}}))((function(e){var a=Object(l.f)(),t=e.show,r=e.onHide,o=e.createJob,i=e.isApiLoading,m=e.apiData,p=e.apiError,E=Object(n.useState)(y),b=Object(u.a)(E,2),f=b[0],g=b[1],O=Object(n.useState)(!0),v=Object(u.a)(O,2),h=v[0],A=v[1];return Object(n.useEffect)((function(){f.description.length>=3&&f.title.length>=3&&f.location.length>=3?A(!1):A(!0)}),[f]),Object(n.useEffect)((function(){201===(null===m||void 0===m?void 0:m.code)&&r()}),[m]),Object(n.useEffect)((function(){401===(null===p||void 0===p?void 0:p.code)&&(G(),a.replace("/"))}),[p]),c.a.createElement("div",{className:"modal ".concat(t?"show":""),style:{display:"".concat(t?"block":"none")},id:"exampleModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",backdrop:"true"},c.a.createElement("div",{class:"modal-dialog",role:"document"},c.a.createElement("div",{class:"modal-content"},c.a.createElement("div",{class:"modal-header"},c.a.createElement("h5",{class:"modal-title",id:"exampleModalLabel"},"Add Job")),c.a.createElement("div",{class:"modal-body"},c.a.createElement(je,{createJobForm:f,onChangeHandler:function(e){g(Object(d.a)(Object(d.a)({},f),{},Object(s.a)({},e.target.id,e.target.value)))}})),c.a.createElement("div",{class:"modal-footer"},c.a.createElement("button",{type:"button",onClick:r,class:"btn btn-secondary"},"cancel"),c.a.createElement("button",{onClick:function(){o(f)},type:"button",disabled:h||i,class:"btn btn-primary"},i?c.a.createElement(c.a.Fragment,null,"Loading ",c.a.createElement("div",{class:"spinner-border"})):"Create")))))})),we=function(){return function(e){e(ee("".concat("RECRUITER_POSTED_JOBS","_").concat(W),!0)),ne("".concat(_.getPostedJobs),N).then((function(a){e(ee("".concat("RECRUITER_POSTED_JOBS","_").concat(W),!1)),e(ee("".concat("RECRUITER_POSTED_JOBS","_").concat(X),a.data))})).catch((function(a){return e(ee("".concat("RECRUITER_POSTED_JOBS","_").concat($),a.response.data))}))}},De=function(e){return function(a){a(ee("".concat("RECRUITER_POSTED_JOBS","_").concat(W),!0)),function(e){return ne("".concat(_.deletePostedJob),B,e)}(e).then((function(t){a(ee("".concat("RECRUITER_POSTED_JOBS","_").concat(W),!1)),a(ee("".concat("RECRUITER_POSTED_JOBS","_").concat(Q),e))})).catch((function(e){return a(ee("".concat("RECRUITER_POSTED_JOBS","_").concat($),e.response.data))}))}};var ye=function(e){var a,t,n=e.apiData,r=e.btnHandler,o=e.screen;return c.a.createElement("ul",{className:"list-group"},n&&0===(null===n||void 0===n||null===(a=n.data)||void 0===a?void 0:a.length)?c.a.createElement("div",{className:""},"No posted jobs found"):n&&(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.map((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{key:e.id,className:"list-group-item m-3 border"},c.a.createElement("div",null,c.a.createElement("h3",null,"Title:"),e.title),c.a.createElement("div",null,c.a.createElement("h3",null,"Description:"),e.description),c.a.createElement("div",null,c.a.createElement("h3",null,"Location:"),e.location.toLowerCase()),c.a.createElement("div",{className:"d-flex flex-row-reverse"},"previousAppliedJobs"!==o&&c.a.createElement("button",{disabled:null===e||void 0===e?void 0:e.isApplied,className:"btn btn-".concat("candidateScreen"===o?"success":"danger"),onClick:function(){return r(e.id)}},c.a.createElement("span",{className:"pr-2"},"candidateScreen"===o?(null===e||void 0===e?void 0:e.isApplied)?"Applied":"Apply":"Delete Job"),"candidateScreen"===o?c.a.createElement(g,{type:f}):c.a.createElement(g,{type:b})))))}))))};t(301),t(302);var Se=Object(m.b)(null,(function(e){return{logoutUser:function(){return e((function(e){e(ee("".concat("LOGIN","_").concat(Z)))}))}}}))((function(e){var a=e.history,t=e.logoutUser;return c.a.createElement("div",{className:"topbar-container d-flex justify-content-between"},c.a.createElement("h2",null,"Vivek Rajoriya"),c.a.createElement("button",{type:"submit",className:"btn btn-dark",onClick:function(){G(),t(),a.replace(v)}},"Logout"))}));var Le=Object(m.b)((function(e){return{apiData:e.recruiterPostedJobs.apiData,apiError:e.recruiterPostedJobs.apiError,isApiLoading:e.recruiterPostedJobs.isApiLoading,createJobApiData:e.createJob.apiData}}),(function(e){return{getPostedJobs:function(){return e(we())},deleteJob:function(a){return e(De({jobId:a}))},clearDataCreateJobData:function(){return e(ee("".concat("RECRUITER_CREATE_JOB","_").concat(K),!1))}}}))((function(e){var a=e.getPostedJobs,t=e.isApiLoading,r=e.apiData,o=(e.apiError,e.deleteJob),i=e.createJobApiData,s=e.clearDataCreateJobData,d=Object(n.useState)(!1),m=Object(u.a)(d,2),p=m[0],b=m[1],f=Object(l.f)();return Object(n.useEffect)((function(){a()}),[]),c.a.createElement("div",{className:"recruiter-container"},c.a.createElement(Se,{history:f}),c.a.createElement("div",{className:"create-job-section"},c.a.createElement("button",{"data-toggle":"modal","data-target":"#exampleModal",className:"btn btn-success",onClick:function(){return b(!0)}},c.a.createElement(g,{type:E})," Create a job")),p&&c.a.createElement(Re,{onHide:function(){b(!1),(null===i||void 0===i?void 0:i.data)&&(s(),a())},show:p}),c.a.createElement("h1",{className:"m-3"},"My posted jobs"),t?c.a.createElement("div",{className:"spinner-border"}):r&&c.a.createElement(ye,{apiData:null===r||void 0===r?void 0:r.data,btnHandler:function(e){o(e)},screen:"recruiterScreen"}))})),Ce=function(){return function(e){e(ee("".concat("AVAILAIBLE_JOBS_FOR_CANDIDATE","_").concat(W),!0)),ne("".concat(_.fetchAllAvalaibleJobs),N).then((function(a){e(ee("".concat("AVAILAIBLE_JOBS_FOR_CANDIDATE","_").concat(W),!1)),e(ee("".concat("AVAILAIBLE_JOBS_FOR_CANDIDATE","_").concat(X),a.data))})).catch((function(a){return e(ee("".concat("AVAILAIBLE_JOBS_FOR_CANDIDATE","_").concat($),a.response.data))}))}},Ie=function(e){return function(a){a(ee("".concat("APPLIED_JOBS","_").concat(W),!0)),function(e){return ne("".concat("candidates","/").concat("jobs"),T,e)}(e).then((function(t){a(ee("".concat("APPLIED_JOBS","_").concat(W),!1)),a(ee("".concat("APPLIED_JOBS","_").concat(Y),e))})).catch((function(e){return a(ee("".concat("APPLIED_JOBS","_").concat($),e.response.data))}))}},Pe=function(){return function(e){e(ee("".concat("PREVIOUS_APPLIED_JOBS","_").concat(W),!0)),ne("".concat("candidates","/").concat("jobs","/applied"),N).then((function(a){e(ee("".concat("PREVIOUS_APPLIED_JOBS","_").concat(W),!1)),e(ee("".concat("PREVIOUS_APPLIED_JOBS","_").concat(X),a.data))})).catch((function(a){return e(ee("".concat("PREVIOUS_APPLIED_JOBS","_").concat($),a.response.data))}))}};t(303);var Je=Object(l.g)(Object(m.b)((function(e){return{apiData:e.jobsForCandidates.apiData,apiError:e.jobsForCandidates.apiError,isApiLoading:e.jobsForCandidates.isApiLoading,apiDataOfPreviousJobs:e.previousAppliedJobs.apiData}}),(function(e){return{getAvailableJobs:function(){return e(Ce())},applyForJob:function(a){return e(Ie({jobId:a}))},getPreviouslyAppliedJobs:function(){return e(Pe())}}}))((function(e){var a=e.getAvailableJobs,t=e.isApiLoading,r=e.history,o=e.apiData,i=e.applyForJob,l=e.getPreviouslyAppliedJobs,s=e.apiDataOfPreviousJobs,d=Object(n.useState)(0),m=Object(u.a)(d,2),p=m[0],E=m[1];return Object(n.useEffect)((function(){a()}),[]),Object(n.useEffect)((function(){1!==p||s||l()}),[p]),c.a.createElement(c.a.Fragment,null,c.a.createElement(Se,{history:r}),c.a.createElement("div",{class:"container"},c.a.createElement("div",{class:"row"},c.a.createElement("div",{className:"col-sm border-bottom border-right text-center ".concat(0===p&&"active"),onClick:function(){return E(0)}},c.a.createElement("h3",{className:"m-3"},"Jobs")),c.a.createElement("div",{className:"col-sm border-bottom text-center ".concat(1===p&&"active"),onClick:function(){return E(1)}},c.a.createElement("h3",{className:"m-3"},"Applied Jobs")))),t?c.a.createElement("div",{className:"spinner-border"}):o&&c.a.createElement(ye,{screen:0===p?"candidateScreen":"previousAppliedJobs",apiData:0===p?o:s,btnHandler:function(e){i(e)}}))})));function Ne(){return c.a.createElement(i.a,null,c.a.createElement(l.c,null,c.a.createElement(l.a,{exact:!0,path:"/"},c.a.createElement(ve,null)),c.a.createElement(l.a,{exact:!0,strict:!0,path:v},c.a.createElement(oe,null)),c.a.createElement(l.a,{exact:!0,path:O},c.a.createElement(ve,null)),c.a.createElement(l.a,{exact:!0,path:h},c.a.createElement(he,null)),c.a.createElement(l.a,{exact:!0,path:A},c.a.createElement(Le,null)),c.a.createElement(l.a,{exact:!0,path:j},c.a.createElement(Je,null))))}var Te=function(e){Object(me.a)(t,e);var a=Object(pe.a)(t);function t(e){var n;return Object(se.a)(this,t),(n=a.call(this,e)).state={hasError:!1},n}return Object(de.a)(t,[{key:"componentDidCatch",value:function(e,a){console.log(e,a)}},{key:"render",value:function(){return this.state.hasError?c.a.createElement("h1",null,"Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(c.a.Component);var Be=function(){return c.a.createElement(i.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(Te,null,0===JSON.parse(V())&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Le,null)),1===JSON.parse(V())&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Je,null)),!F()&&c.a.createElement(Ne,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ke=t(17),Fe=t(123),xe=t(124),Ue={isApiLoading:!1,apiData:null,isApiFailed:!1,apiError:null},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"".concat("REGISTER","_").concat(W):return Object(d.a)(Object(d.a)({},e),{},{isApiLoading:a.payload});case"".concat("REGISTER","_").concat(X):return Object(d.a)(Object(d.a)({},e),{},{isApiLoading:!1,apiData:a.payload,isApiFailed:!1,apiError:null});case"".concat("REGISTER","_").concat($):return Object(d.a)(Object(d.a)({},e),{},{isApiFailed:!0,isApiLoading:!1,apiError:a.payload});default:return Object(d.a)({},e)}},Ge={isApiLoading:!1,apiData:null,isApiFailed:!1,apiError:null},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"".concat("LOGIN","_").concat(W):return Object(d.a)(Object(d.a)({},e),{},{isApiLoading:a.payload});case"".concat("LOGIN","_").concat(X):return Object(d.a)(Object(d.a)({},e),{},{isApiLoading:!1,apiData:a.payload,isApiFailed:!1,apiError:null,isLoggedIn:!0});case"".concat("LOGIN","_").concat($):return Object(d.a)(Object(d.a)({},e),{},{isApiFailed:!0,isApiLoading:!1,apiError:a.payload});case"".concat("LOGIN","_").concat(Z):return Object(d.a)(Object(d.a)({},e),{},{isLoggedIn:!1});default:return Object(d.a)({},e)}},He={isApiLoading:!1,apiData:null,isApiFailed:!1,apiError:null},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"".concat("RECRUITER_CREATE_JOB","_").concat(W):return Object(d.a)(Object(d.a)({},e),{},{isApiLoading:a.payload});case"".concat("RECRUITER_CREATE_JOB","_").concat(X):return Object(d.a)(Object(d.a)({},e),{},{isApiLoading:!1,apiData:a.payload,isApiFailed:!1,apiError:null});case"".concat("RECRUITER_CREATE_JOB","_").concat($):return Object(d.a)(Object(d.a)({},e),{},{isApiFailed:!0,isApiLoading:!1,apiError:a.payload});case"".concat("RECRUITER_CREATE_JOB","_").concat(K):return Object(d.a)(Object(d.a)({},e),{},{isApiFailed:!1,isApiLoading:!1,apiError:null,apiData:null});default:return Object(d.a)({},e)}},qe={isApiLoading:!1,apiData:null,isApiFailed:!1,apiError:null},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"".concat("RECRUITER_POSTED_JOBS","_").concat(W):return Object(d.a)(Object(d.a)({},e),{},{isApiLoading:a.payload});case"".concat("RECRUITER_POSTED_JOBS","_").concat(X):return Object(d.a)(Object(d.a)({},e),{},{isApiLoading:!1,apiData:a.payload,isApiFailed:!1,apiError:null});case"".concat("RECRUITER_POSTED_JOBS","_").concat($):return Object(d.a)(Object(d.a)({},e),{},{isApiFailed:!0,isApiLoading:!1,apiError:a.payload});case"".concat("RECRUITER_POSTED_JOBS","_").concat(Q):return Object(d.a)(Object(d.a)({},e),{},{apiData:Object(d.a)(Object(d.a)({},e.apiData),{},{data:Object(d.a)(Object(d.a)({},e.apiData.data),{},{data:e.apiData.data.data.filter((function(e){return e.id!==a.payload.jobId}))})})});default:return Object(d.a)({},e)}},Xe={isApiLoading:!1,apiData:null,isApiFailed:!1,apiError:null},$e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"".concat("AVAILAIBLE_JOBS_FOR_CANDIDATE","_").concat(W):return Object(d.a)(Object(d.a)({},e),{},{isApiLoading:a.payload});case"".concat("AVAILAIBLE_JOBS_FOR_CANDIDATE","_").concat(X):return Object(d.a)(Object(d.a)({},e),{},{isApiLoading:!1,apiData:a.payload,isApiFailed:!1,apiError:null});case"".concat("AVAILAIBLE_JOBS_FOR_CANDIDATE","_").concat($):return Object(d.a)(Object(d.a)({},e),{},{isApiFailed:!0,isApiLoading:!1,apiError:a.payload});case"".concat("AVAILAIBLE_JOBS_FOR_CANDIDATE","_").concat(K):return Object(d.a)(Object(d.a)({},e),{},{isApiFailed:!1,isApiLoading:!1,apiError:null,apiData:null});case"".concat("APPLIED_JOBS","_").concat(Y):return Object(d.a)(Object(d.a)({},e),{},{apiData:Object(d.a)(Object(d.a)({},e.apiData),{},{data:e.apiData.data.map((function(e){return e.id===a.payload.jobId?Object(d.a)(Object(d.a)({},e),{},{isApplied:!0}):e}))})});default:return Object(d.a)({},e)}},Ke={isApiLoading:!1,apiData:null,isApiFailed:!1,apiError:null},Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"".concat("PREVIOUS_APPLIED_JOBS","_").concat(W):return Object(d.a)(Object(d.a)({},e),{},{isApiLoading:a.payload});case"".concat("PREVIOUS_APPLIED_JOBS","_").concat(X):return Object(d.a)(Object(d.a)({},e),{},{isApiLoading:!1,apiData:a.payload,isApiFailed:!1,apiError:null});case"".concat("PREVIOUS_APPLIED_JOBS","_").concat($):return Object(d.a)(Object(d.a)({},e),{},{isApiFailed:!0,isApiLoading:!1,apiError:a.payload});case"".concat("PREVIOUS_APPLIED_JOBS","_").concat(K):return Object(d.a)(Object(d.a)({},e),{},{isApiFailed:!1,isApiLoading:!1,apiError:null,apiData:null});default:return Object(d.a)({},e)}},Ye=Object(ke.combineReducers)({register:Ve,login:Me,createJob:ze,recruiterPostedJobs:We,jobsForCandidates:$e,previousAppliedJobs:Qe}),Ze=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ke.compose,ea=Object(ke.createStore)(Ye,Ze(Object(ke.applyMiddleware)(xe.a,Fe.logger)));o.a.render(c.a.createElement(m.a,{store:ea},c.a.createElement(c.a.StrictMode,null,c.a.createElement(Be,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[125,1,2]]]);
//# sourceMappingURL=main.4135bb40.chunk.js.map