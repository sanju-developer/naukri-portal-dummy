(this["webpackJsonpnaukri-dummy"]=this["webpackJsonpnaukri-dummy"]||[]).push([[0],{125:function(e,a,t){e.exports=t(304)},130:function(e,a,t){},131:function(e,a,t){},136:function(e,a,t){},155:function(e,a,t){},300:function(e,a,t){},301:function(e,a,t){},302:function(e,a,t){},303:function(e,a,t){},304:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(28),o=t.n(c),i=(t(130),t(131),t(13)),l=t(4),s=t(14),d=t(1),u=t(3),m=t(6),p="rightArrow",E="add",b="delete",f="job";var g=function(e){var a=e.type;return function(){switch(a){case p:return r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-arrow-right",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"}));case E:return r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-plus",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"}));case b:return r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-archive-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"}));case f:return r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-briefcase-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"}),r.a.createElement("path",{fillRule:"evenodd",d:"M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v1.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 5.884V4.5zm5-2A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z"}))}}()},v="/register",O="/login",h="/reset-password",A="/recruiter-dashboard",j="/candidate-dashboard",_={register:"auth/register",login:"auth/login",createJob:"".concat("jobs","/"),getPostedJobs:"".concat("recruiters","/").concat("jobs"),deletePostedJob:"".concat("jobs","?"),fetchAllAvalaibleJobs:"".concat("candidates","/").concat("jobs","?")},D=(t(136),{name:"",email:"",password:"",confirmPassword:"",userRole:0,skills:""}),w="https://jobs-api.squareboat.info/api/v1/",R={email:"",password:""},C={title:"",description:"",location:""},y={password:"",confirmPassword:""},L=[{id:"ur2",value:"Recruiter"},{id:"ur1",value:"Candidate"}],S="Password and Confirm password are not equal",I="Please enter a valid email",P="Password should be minimum of 6 digit",J=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,N="get",T="post",B="delete";function k(e){localStorage.setItem("token",e)}function F(){return localStorage.getItem("token")}function x(e){localStorage.setItem("userId",e)}function U(e){localStorage.setItem("userRole",e)}function V(){return localStorage.getItem("userRole")}function M(){localStorage.clear()}var H="passwordAndConfirmPssword",G="emailNotvalid",z="passwordLengthShouldBeMinimumOf6Digit";var q=function(e){var a=e.type;return r.a.createElement("div",{className:"error"},function(){switch(a){case H:return S;case G:return I;case z:return P}}())},W="IS_LOADING",X="SET_DATA",$="SET_ERROR",K="CLEAR_DATA",Q="DELETE_POSTED_JOB",Y="JOB_APPLIED",Z="LOGOUT",ee=function(e,a){return{type:e,payload:a}},ae=t(121),te=t.n(ae),ne=function(e,a,t,n){var r,c={method:a,url:w+e};return null!==t&&(c.data=t),void 0!==n&&(c.params=n),F()&&(c.headers={Authorization:"".concat(F()),withCredentials:!0}),r=c,te()(r).then(re)};function re(e){var a,t;return"application/json"===e.headers["content-type"]&&(t=e),null!==(a=t)&&void 0!==a?a:e}var ce=function(e,a){return function(t){t(ee("".concat("LOGIN","_").concat(W),!0)),function(e,a){return"register"===a?(t=e,ne("".concat(_.register),T,t)):function(e){return ne("".concat(_.login),T,e)}(e);var t}(e,a).then((function(e){t(ee("".concat("LOGIN","_").concat(W),!1)),t(ee("".concat("LOGIN","_").concat(X),e.data))})).catch((function(e){return t(ee("".concat("LOGIN","_").concat($),e.response.data))}))}};var oe=Object(m.b)((function(e){return{apiData:e.userData.apiData,apiError:e.userData.apiError,isApiLoading:e.userData.isApiLoading,isLoggedIn:e.userData.isLoggedIn}}),(function(e){return{loginUser:function(a){return e(ce(a,"login"))}}}))((function(e){var a=e.loginUser,t=e.apiData,c=e.apiError,o=e.isApiLoading,i=e.isLoggedIn,m=Object(l.f)(),E=Object(n.useState)(!0),b=Object(u.a)(E,2),f=b[0],O=b[1],_=Object(n.useState)(R),D=Object(u.a)(_,2),w=D[0],C=D[1],y=Object(n.useState)(!1),L=Object(u.a)(y,2),S=L[0],I=L[1],P=Object(n.useState)(!1),N=Object(u.a)(P,2),T=N[0],B=N[1];Object(n.useEffect)((function(){w.password.length>=6&&0!==w.email.length?O(!1):O(!0)}),[w]),Object(n.useEffect)((function(){S&&T&&a(w)}),[S,T]),Object(n.useEffect)((function(){var e,a,n,r,c;t&&(k(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.token),x(null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.id),U(null===t||void 0===t||null===(n=t.data)||void 0===n?void 0:n.userRole),200===(null===t||void 0===t?void 0:t.code)&&0===(null===t||void 0===t||null===(r=t.data)||void 0===r?void 0:r.userRole)&&i&&m.replace(A),200===(null===t||void 0===t?void 0:t.code)&&1===(null===t||void 0===t||null===(c=t.data)||void 0===c?void 0:c.userRole)&&i&&m.replace(j))}),[t,i]);var F=function(e){C(Object(d.a)(Object(d.a)({},w),{},Object(s.a)({},e.target.id,e.target.value)))};return r.a.createElement("div",{className:"entry-form"},r.a.createElement("h1",{className:"display-4 text-left login-form-title"},"Login"),c&&r.a.createElement("div",{className:"error"},r.a.createElement("p",null,null===c||void 0===c?void 0:c.message)),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group text-left"},r.a.createElement("label",{htmlFor:"user-email-login"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email",value:w.email,onChange:F}),!S&&T&&r.a.createElement(q,{type:G})),r.a.createElement("div",{className:"form-group text-left"},r.a.createElement("label",{htmlFor:"user-pswd-login"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Password",value:w.password,onChange:F}),w.password.length<6&&T&&r.a.createElement(q,{type:z})),r.a.createElement("button",{type:"submit",onClick:function(){return m.push(h)},className:"right-side w-100 btn btn-link d-none"},"Forgot Password?"),r.a.createElement("div",{className:"login-btn mt-4"},r.a.createElement("button",{type:"submit",disabled:f||o,className:"btn btn-primary",onClick:function(e){e.preventDefault(),I(J.test(w.email.toLowerCase())),B(!0),S&&T&&a(w)}},"Login",r.a.createElement("span",{className:"pl-2"},o?r.a.createElement("span",{className:"spinner-border"}):r.a.createElement(g,{type:p}))))),r.a.createElement("button",{type:"button",className:"text-center login-here pt-4 w-100 btn btn-link",onClick:function(){return m.push(v)}},"Not a memeber? Register here"))}));var ie=function(e){var a=e.password,t=e.confirmPassword,n=e.onChangeHandler,c=e.isPasswordAndConfirmPasswordEqual,o=e.isBtnClicked;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form-group text-left"},r.a.createElement("label",{htmlFor:"pswd"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Password",value:a,onChange:n}),r.a.createElement("small",{className:"smart-desc pt-1"},"Minimum length of 6 digits"),a.length<6&&o&&r.a.createElement(q,{type:z})),r.a.createElement("div",{className:"form-group text-left"},r.a.createElement("label",{htmlFor:"confirmpswd"},"Confirm Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"confirmPassword",placeholder:"Confirm Password",value:t,onChange:n}),t.length<6&&o&&r.a.createElement(q,{type:z})),!c&&o&&r.a.createElement(q,{type:H}))},le=t(74),se=t(47),de=t(48),ue=t(20),me=t(50),pe=t(49),Ee=t(122),be=(t(155),["React","Angular","Vue","Nodejs","Javascript","MongoDB"].map((function(e){return{id:e,text:e}}))),fe=[188,13],ge=function(e){Object(me.a)(t,e);var a=Object(pe.a)(t);function t(e){var n;return Object(se.a)(this,t),(n=a.call(this,e)).state={tags:[],suggestions:be},n.handleDelete=n.handleDelete.bind(Object(ue.a)(n)),n.handleAddition=n.handleAddition.bind(Object(ue.a)(n)),n.handleDrag=n.handleDrag.bind(Object(ue.a)(n)),n.handleTagClick=n.handleTagClick.bind(Object(ue.a)(n)),n}return Object(de.a)(t,[{key:"handleDelete",value:function(e){var a=this,t=this.state.tags;this.setState({tags:t.filter((function(a,t){return t!==e}))},(function(){return a.props.addSkills(a.state.tags)}))}},{key:"handleAddition",value:function(e){var a=this;this.setState((function(a){return{tags:[].concat(Object(le.a)(a.tags),[e])}}),(function(){return a.props.addSkills(a.state.tags)}))}},{key:"handleDrag",value:function(e,a,t){var n=this,r=Object(le.a)(this.state.tags).slice();r.splice(a,1),r.splice(t,0,e),this.setState({tags:r},(function(){return n.props.addSkills(n.state.tags)}))}},{key:"handleTagClick",value:function(e){console.log("The tag at index "+e+" was clicked")}},{key:"render",value:function(){var e=this.state,a=e.tags,t=e.suggestions;return r.a.createElement("div",null,r.a.createElement(Ee.WithContext,{id:"skills",tags:a,suggestions:t,delimiters:fe,handleDelete:this.handleDelete,handleAddition:this.handleAddition,handleDrag:this.handleDrag,handleTagClick:this.handleTagClick}))}}]),t}(r.a.Component);t(300);var ve=Object(m.b)((function(e){return{apiData:e.userData.apiData,apiError:e.userData.apiError,isApiLoading:e.userData.isApiLoading}}),(function(e){return{registerUser:function(a){return e(ce(a,"register"))}}}))((function(e){var a=e.registerUser,t=e.apiData,c=e.apiError,o=e.isApiLoading,i=Object(l.f)(),m=Object(n.useState)(D),E=Object(u.a)(m,2),b=E[0],f=E[1],v=Object(n.useState)(!0),h=Object(u.a)(v,2),j=h[0],_=h[1],w=Object(n.useState)(!1),R=Object(u.a)(w,2),C=R[0],y=R[1],S=Object(n.useState)(!1),I=Object(u.a)(S,2),P=I[0],N=I[1],T=Object(n.useState)(!1),B=Object(u.a)(T,2),F=B[0],V=B[1];Object(n.useEffect)((function(){b.confirmPassword.length>=6&&b.password.length>=6&&0!==b.name.length&&0!==b.email.length&&0!==b.skills.length?_(!1):_(!0)}),[b]),Object(n.useEffect)((function(){var e,a,n;t&&(k(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.token),x(null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.id),U(null===t||void 0===t||null===(n=t.data)||void 0===n?void 0:n.userRole),201===t.code&&i.replace(A))}),[t]),Object(n.useEffect)((function(){P&&C&&F&&a(b)}),[P,C,F]);var M=function(e){var a;f(Object(d.a)(Object(d.a)({},b),{},Object(s.a)({},e.target.id,null!==(a=e.target.selectedIndex)&&void 0!==a?a:e.target.value)))};return r.a.createElement("div",{className:"entry-form"},r.a.createElement("h1",{className:"display-4 text-left register-form-title"},"Register"),c&&r.a.createElement("div",{className:"error"},(null===c||void 0===c?void 0:c.errors)?null===c||void 0===c?void 0:c.errors.map((function(e){return r.a.createElement("p",null,e.name)})):r.a.createElement("p",null,c.message)),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group text-left"},r.a.createElement("label",{htmlFor:"formname"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",id:"name","aria-describedby":"form-name",placeholder:"Enter name",value:b.name,onChange:M})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"userrole"},"Role"),r.a.createElement("select",{className:"form-control",id:"userRole",onChange:M},L.map((function(e){return r.a.createElement("option",{key:e.id,value:L[b.userRole]},e.value)})))),r.a.createElement("div",{className:"form-group text-left"},r.a.createElement("label",{htmlFor:"useremail"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email",value:b.email,onChange:M}),!P&&F&&r.a.createElement(q,{type:G})),r.a.createElement(ie,{password:b.password,confirmPassword:b.confirmPassword,onChangeHandler:M,isPasswordAndConfirmPasswordEqual:C,isBtnClicked:F}),r.a.createElement("label",{htmlFor:"skills"},"Skills"),r.a.createElement(ge,{addSkills:function(e){var a=[];e.map((function(e){return a.push(e.text)})),f(Object(d.a)(Object(d.a)({},b),{},{skills:a.join(",")}))}}),r.a.createElement("div",{className:"login-btn mt-4"},r.a.createElement("button",{disabled:j||o,type:"submit",className:"btn btn-primary",onClick:function(e){e.preventDefault(),b.password!==b.confirmPassword?y(!1):y(!0),N(J.test(b.email.toLowerCase())),V(!0),P&&C&&F&&a(b)}},o?"Authenticating":"Register",r.a.createElement("span",{className:"pl-2"},o?r.a.createElement("span",{className:"spinner-border"}):r.a.createElement(g,{type:p}))))),r.a.createElement("button",{type:"button",className:"text-center login-here pt-4 w-100 btn btn-link",onClick:function(){return i.push(O)}},"Already a memeber? login here"))}));var Oe=function(){var e=Object(l.f)(),a=Object(n.useState)(y),t=Object(u.a)(a,2),c=t[0],o=t[1],i=Object(n.useState)(!1),m=Object(u.a)(i,2),E=m[0],b=m[1],f=Object(n.useState)(!0),v=Object(u.a)(f,2),O=v[0],h=v[1];return Object(n.useEffect)((function(){0!==c.confirmPassword.length&&0!==c.password.length?h(!1):h(!0)}),[c]),r.a.createElement("div",{className:"entry-form"},r.a.createElement("h1",{className:"display-4 text-left login-form-title"},"Reset Password"),r.a.createElement(ie,{password:c.password,confirmPassword:c.confirmPassword,onChangeHandler:function(e){o(Object(d.a)(Object(d.a)({},c),{},Object(s.a)({},e.target.id,e.target.value)))},isPasswordAndConfirmPasswordEqual:E}),r.a.createElement("div",{className:"login-btn mt-4"},r.a.createElement("button",{disabled:O,type:"submit",className:"btn btn-primary",onClick:function(e){e.preventDefault(),c.password===c.confirmPassword?b(!1):b(!0)}},"Reset password",r.a.createElement("span",{className:"pl-2"},r.a.createElement(g,{type:p})))),r.a.createElement("button",{type:"button",className:"text-center login-here pt-4 w-100 btn btn-link",onClick:function(){return e.goBack()}},"Go Back"))};var he=function(){return r.a.createElement("small",null,"Minimum Length of 3 digits")};var Ae=function(e){var a=e.onChangeHandler,t=e.createJobForm;return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group text-left"},r.a.createElement("input",{type:"title",className:"form-control",id:"title","aria-describedby":"titleHelp",placeholder:"Enter title",value:t.title,onChange:a}),r.a.createElement(he,null)),r.a.createElement("div",{className:"form-group text-left"},r.a.createElement("input",{type:"description",className:"form-control",id:"description",placeholder:"Password",value:t.description,onChange:a}),r.a.createElement(he,null)),r.a.createElement("div",{className:"form-group text-left"},r.a.createElement("input",{type:"location",className:"form-control",id:"location",placeholder:"Location",value:t.location,onChange:a}),r.a.createElement(he,null)))},je=function(e){return function(a){var t;a(ee("".concat("RECRUITER_CREATE_JOB","_").concat(W),!0)),(t=e,ne("".concat(_.createJob),T,t)).then((function(e){a(ee("".concat("RECRUITER_CREATE_JOB","_").concat(W),!1)),a(ee("".concat("RECRUITER_CREATE_JOB","_").concat(X),e.data))})).catch((function(e){return a(ee("".concat("RECRUITER_CREATE_JOB","_").concat($),e.response.data))}))}};var _e=Object(m.b)((function(e){return{apiData:e.createJob.apiData,apiError:e.createJob.apiError,isApiLoading:e.createJob.isApiLoading}}),(function(e){return{createJob:function(a){return e(je(a))}}}))((function(e){var a=Object(l.f)(),t=e.show,c=e.onHide,o=e.createJob,i=e.isApiLoading,m=e.apiData,p=e.apiError,E=Object(n.useState)(C),b=Object(u.a)(E,2),f=b[0],g=b[1],v=Object(n.useState)(!0),O=Object(u.a)(v,2),h=O[0],A=O[1];return Object(n.useEffect)((function(){f.description.length>=3&&f.title.length>=3&&f.location.length>=3?A(!1):A(!0)}),[f]),Object(n.useEffect)((function(){201===(null===m||void 0===m?void 0:m.code)&&c()}),[m]),Object(n.useEffect)((function(){401===(null===p||void 0===p?void 0:p.code)&&(M(),a.replace("/"))}),[p]),r.a.createElement("div",{className:"modal ".concat(t?"show":""),style:{display:"".concat(t?"block":"none")},id:"exampleModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",backdrop:"true"},r.a.createElement("div",{class:"modal-dialog",role:"document"},r.a.createElement("div",{class:"modal-content"},r.a.createElement("div",{class:"modal-header"},r.a.createElement("h5",{class:"modal-title",id:"exampleModalLabel"},"Add Job")),r.a.createElement("div",{class:"modal-body"},r.a.createElement(Ae,{createJobForm:f,onChangeHandler:function(e){g(Object(d.a)(Object(d.a)({},f),{},Object(s.a)({},e.target.id,e.target.value)))}})),r.a.createElement("div",{class:"modal-footer"},r.a.createElement("button",{type:"button",onClick:c,class:"btn btn-secondary"},"cancel"),r.a.createElement("button",{onClick:function(){o(f)},type:"button",disabled:h||i,class:"btn btn-primary"},i?r.a.createElement(r.a.Fragment,null,"Loading ",r.a.createElement("div",{class:"spinner-border"})):"Create")))))})),De=function(){return function(e){e(ee("".concat("RECRUITER_POSTED_JOBS","_").concat(W),!0)),ne("".concat(_.getPostedJobs),N).then((function(a){e(ee("".concat("RECRUITER_POSTED_JOBS","_").concat(W),!1)),e(ee("".concat("RECRUITER_POSTED_JOBS","_").concat(X),a.data))})).catch((function(a){return e(ee("".concat("RECRUITER_POSTED_JOBS","_").concat($),a.response.data))}))}},we=function(e){return function(a){a(ee("".concat("RECRUITER_POSTED_JOBS","_").concat(W),!0)),function(e){return ne("".concat(_.deletePostedJob),B,e)}(e).then((function(t){a(ee("".concat("RECRUITER_POSTED_JOBS","_").concat(W),!1)),a(ee("".concat("RECRUITER_POSTED_JOBS","_").concat(Q),e))})).catch((function(e){return a(ee("".concat("RECRUITER_POSTED_JOBS","_").concat($),e.response.data))}))}};var Re=function(e){var a,t,n=e.apiData,c=e.btnHandler,o=e.screen;return r.a.createElement("ul",{className:"list-group"},n&&0===(null===n||void 0===n||null===(a=n.data)||void 0===a?void 0:a.length)?r.a.createElement("div",{className:""},"No posted jobs found"):n&&(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{key:e.id,className:"list-group-item m-3 border"},r.a.createElement("div",null,r.a.createElement("h3",null,"Title:"),e.title),r.a.createElement("div",null,r.a.createElement("h3",null,"Description:"),e.description),r.a.createElement("div",null,r.a.createElement("h3",null,"Location:"),e.location.toLowerCase()),r.a.createElement("div",{className:"d-flex flex-row-reverse"},"previousAppliedJobs"!==o&&r.a.createElement("button",{disabled:null===e||void 0===e?void 0:e.isApplied,className:"btn btn-".concat("candidateScreen"===o?"success":"danger"),onClick:function(){return c(e.id)}},r.a.createElement("span",{className:"pr-2"},"candidateScreen"===o?(null===e||void 0===e?void 0:e.isApplied)?"Applied":"Apply":"Delete Job"),"candidateScreen"===o?r.a.createElement(g,{type:f}):r.a.createElement(g,{type:b})))))}))))};t(301),t(302);var Ce=Object(m.b)(null,(function(e){return{logoutUser:function(){return e((function(e){e(ee("".concat("LOGIN","_").concat(Z)))}))}}}))((function(e){var a=e.history,t=e.logoutUser;return r.a.createElement("div",{className:"topbar-container d-flex justify-content-between"},r.a.createElement("h2",null,"Vivek Rajoriya"),r.a.createElement("button",{type:"submit",className:"btn btn-dark",onClick:function(){M(),t(),a.replace(O)}},"Logout"))}));var ye=Object(m.b)((function(e){return{apiData:e.recruiterPostedJobs.apiData,apiError:e.recruiterPostedJobs.apiError,isApiLoading:e.recruiterPostedJobs.isApiLoading,createJobApiData:e.createJob.apiData}}),(function(e){return{getPostedJobs:function(){return e(De())},deleteJob:function(a){return e(we({jobId:a}))},clearDataCreateJobData:function(){return e(ee("".concat("RECRUITER_CREATE_JOB","_").concat(K),!1))}}}))((function(e){var a=e.getPostedJobs,t=e.isApiLoading,c=e.apiData,o=(e.apiError,e.deleteJob),i=e.createJobApiData,s=e.clearDataCreateJobData,d=Object(n.useState)(!1),m=Object(u.a)(d,2),p=m[0],b=m[1],f=Object(l.f)();return Object(n.useEffect)((function(){a()}),[]),r.a.createElement("div",{className:"recruiter-container"},r.a.createElement(Ce,{history:f}),r.a.createElement("div",{className:"create-job-section"},r.a.createElement("button",{"data-toggle":"modal","data-target":"#exampleModal",className:"btn btn-success",onClick:function(){return b(!0)}},r.a.createElement(g,{type:E})," Create a job")),p&&r.a.createElement(_e,{onHide:function(){b(!1),(null===i||void 0===i?void 0:i.data)&&(s(),a())},show:p}),r.a.createElement("h1",{className:"m-3"},"My posted jobs"),t?r.a.createElement("div",{className:"spinner-border"}):c&&r.a.createElement(Re,{apiData:null===c||void 0===c?void 0:c.data,btnHandler:function(e){o(e)},screen:"recruiterScreen"}))})),Le=function(){return function(e){e(ee("".concat("AVAILAIBLE_JOBS_FOR_CANDIDATE","_").concat(W),!0)),ne("".concat(_.fetchAllAvalaibleJobs),N).then((function(a){e(ee("".concat("AVAILAIBLE_JOBS_FOR_CANDIDATE","_").concat(W),!1)),e(ee("".concat("AVAILAIBLE_JOBS_FOR_CANDIDATE","_").concat(X),a.data))})).catch((function(a){return e(ee("".concat("AVAILAIBLE_JOBS_FOR_CANDIDATE","_").concat($),a.response.data))}))}},Se=function(e){return function(a){a(ee("".concat("APPLIED_JOBS","_").concat(W),!0)),function(e){return ne("".concat("candidates","/").concat("jobs"),T,e)}(e).then((function(t){a(ee("".concat("APPLIED_JOBS","_").concat(W),!1)),a(ee("".concat("APPLIED_JOBS","_").concat(Y),e))})).catch((function(e){return a(ee("".concat("APPLIED_JOBS","_").concat($),e.response.data))}))}},Ie=function(){return function(e){e(ee("".concat("PREVIOUS_APPLIED_JOBS","_").concat(W),!0)),ne("".concat("candidates","/").concat("jobs","/applied"),N).then((function(a){e(ee("".concat("PREVIOUS_APPLIED_JOBS","_").concat(W),!1)),e(ee("".concat("PREVIOUS_APPLIED_JOBS","_").concat(X),a.data))})).catch((function(a){return e(ee("".concat("PREVIOUS_APPLIED_JOBS","_").concat($),a.response.data))}))}};t(303);var Pe=Object(l.g)(Object(m.b)((function(e){return{apiData:e.jobsForCandidates.apiData,apiError:e.jobsForCandidates.apiError,isApiLoading:e.jobsForCandidates.isApiLoading,apiDataOfPreviousJobs:e.previousAppliedJobs.apiData}}),(function(e){return{getAvailableJobs:function(){return e(Le())},applyForJob:function(a){return e(Se({jobId:a}))},getPreviouslyAppliedJobs:function(){return e(Ie())}}}))((function(e){var a=e.getAvailableJobs,t=e.isApiLoading,c=e.history,o=e.apiData,i=e.applyForJob,l=e.getPreviouslyAppliedJobs,s=e.apiDataOfPreviousJobs,d=Object(n.useState)(0),m=Object(u.a)(d,2),p=m[0],E=m[1];return Object(n.useEffect)((function(){a()}),[]),Object(n.useEffect)((function(){1!==p||s||l()}),[p]),r.a.createElement(r.a.Fragment,null,r.a.createElement(Ce,{history:c}),r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{className:"col-sm border-bottom border-right text-center ".concat(0===p&&"active"),onClick:function(){return E(0)}},r.a.createElement("h3",{className:"m-3"},"Jobs")),r.a.createElement("div",{className:"col-sm border-bottom text-center ".concat(1===p&&"active"),onClick:function(){return E(1)}},r.a.createElement("h3",{className:"m-3"},"Applied Jobs")))),t?r.a.createElement("div",{className:"spinner-border"}):o&&r.a.createElement(Re,{screen:0===p?"candidateScreen":"previousAppliedJobs",apiData:0===p?o:s,btnHandler:function(e){i(e)}}))})));function Je(){return r.a.createElement(i.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/"},r.a.createElement(ve,null)),r.a.createElement(l.a,{exact:!0,path:O},r.a.createElement(oe,null)),r.a.createElement(l.a,{exact:!0,path:v},r.a.createElement(ve,null)),r.a.createElement(l.a,{exact:!0,path:h},r.a.createElement(Oe,null)),r.a.createElement(l.a,{exact:!0,path:A},r.a.createElement(ye,null)),r.a.createElement(l.a,{exact:!0,path:j},r.a.createElement(Pe,null))))}var Ne=function(e){Object(me.a)(t,e);var a=Object(pe.a)(t);function t(e){var n;return Object(se.a)(this,t),(n=a.call(this,e)).state={hasError:!1},n}return Object(de.a)(t,[{key:"componentDidCatch",value:function(e,a){console.log(e,a)}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(r.a.Component);var Te=function(){return r.a.createElement(i.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(Ne,null,0===JSON.parse(V())&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ye,null)),1===JSON.parse(V())&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Pe,null)),!F()&&r.a.createElement(Je,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Be=t(17),ke=t(123),Fe=t(124),xe={isApiLoading:!1,apiData:null,isApiFailed:!1,apiError:null},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"".concat("LOGIN","_").concat(W):return Object(d.a)(Object(d.a)({},e),{},{isApiLoading:a.payload});case"".concat("LOGIN","_").concat(X):return Object(d.a)(Object(d.a)({},e),{},{isApiLoading:!1,apiData:a.payload,isApiFailed:!1,apiError:null,isLoggedIn:!0});case"".concat("LOGIN","_").concat($):return Object(d.a)(Object(d.a)({},e),{},{isApiFailed:!0,isApiLoading:!1,apiError:a.payload});case"".concat("LOGIN","_").concat(Z):return Object(d.a)(Object(d.a)({},e),{},{isLoggedIn:!1,apiData:null});default:return Object(d.a)({},e)}},Ve={isApiLoading:!1,apiData:null,isApiFailed:!1,apiError:null},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"".concat("RECRUITER_CREATE_JOB","_").concat(W):return Object(d.a)(Object(d.a)({},e),{},{isApiLoading:a.payload});case"".concat("RECRUITER_CREATE_JOB","_").concat(X):return Object(d.a)(Object(d.a)({},e),{},{isApiLoading:!1,apiData:a.payload,isApiFailed:!1,apiError:null});case"".concat("RECRUITER_CREATE_JOB","_").concat($):return Object(d.a)(Object(d.a)({},e),{},{isApiFailed:!0,isApiLoading:!1,apiError:a.payload});case"".concat("RECRUITER_CREATE_JOB","_").concat(K):return Object(d.a)(Object(d.a)({},e),{},{isApiFailed:!1,isApiLoading:!1,apiError:null,apiData:null});default:return Object(d.a)({},e)}},He={isApiLoading:!1,apiData:null,isApiFailed:!1,apiError:null},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"".concat("RECRUITER_POSTED_JOBS","_").concat(W):return Object(d.a)(Object(d.a)({},e),{},{isApiLoading:a.payload});case"".concat("RECRUITER_POSTED_JOBS","_").concat(X):return Object(d.a)(Object(d.a)({},e),{},{isApiLoading:!1,apiData:a.payload,isApiFailed:!1,apiError:null});case"".concat("RECRUITER_POSTED_JOBS","_").concat($):return Object(d.a)(Object(d.a)({},e),{},{isApiFailed:!0,isApiLoading:!1,apiError:a.payload});case"".concat("RECRUITER_POSTED_JOBS","_").concat(Q):return Object(d.a)(Object(d.a)({},e),{},{apiData:Object(d.a)(Object(d.a)({},e.apiData),{},{data:Object(d.a)(Object(d.a)({},e.apiData.data),{},{data:e.apiData.data.data.filter((function(e){return e.id!==a.payload.jobId}))})})});default:return Object(d.a)({},e)}},ze={isApiLoading:!1,apiData:null,isApiFailed:!1,apiError:null},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"".concat("AVAILAIBLE_JOBS_FOR_CANDIDATE","_").concat(W):return Object(d.a)(Object(d.a)({},e),{},{isApiLoading:a.payload});case"".concat("AVAILAIBLE_JOBS_FOR_CANDIDATE","_").concat(X):return Object(d.a)(Object(d.a)({},e),{},{isApiLoading:!1,apiData:a.payload,isApiFailed:!1,apiError:null});case"".concat("AVAILAIBLE_JOBS_FOR_CANDIDATE","_").concat($):return Object(d.a)(Object(d.a)({},e),{},{isApiFailed:!0,isApiLoading:!1,apiError:a.payload});case"".concat("AVAILAIBLE_JOBS_FOR_CANDIDATE","_").concat(K):return Object(d.a)(Object(d.a)({},e),{},{isApiFailed:!1,isApiLoading:!1,apiError:null,apiData:null});case"".concat("APPLIED_JOBS","_").concat(Y):return Object(d.a)(Object(d.a)({},e),{},{apiData:Object(d.a)(Object(d.a)({},e.apiData),{},{data:e.apiData.data.map((function(e){return e.id===a.payload.jobId?Object(d.a)(Object(d.a)({},e),{},{isApplied:!0}):e}))})});default:return Object(d.a)({},e)}},We={isApiLoading:!1,apiData:null,isApiFailed:!1,apiError:null},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"".concat("PREVIOUS_APPLIED_JOBS","_").concat(W):return Object(d.a)(Object(d.a)({},e),{},{isApiLoading:a.payload});case"".concat("PREVIOUS_APPLIED_JOBS","_").concat(X):return Object(d.a)(Object(d.a)({},e),{},{isApiLoading:!1,apiData:a.payload,isApiFailed:!1,apiError:null});case"".concat("PREVIOUS_APPLIED_JOBS","_").concat($):return Object(d.a)(Object(d.a)({},e),{},{isApiFailed:!0,isApiLoading:!1,apiError:a.payload});case"".concat("PREVIOUS_APPLIED_JOBS","_").concat(K):return Object(d.a)(Object(d.a)({},e),{},{isApiFailed:!1,isApiLoading:!1,apiError:null,apiData:null});default:return Object(d.a)({},e)}},$e=Object(Be.combineReducers)({userData:Ue,createJob:Me,recruiterPostedJobs:Ge,jobsForCandidates:qe,previousAppliedJobs:Xe}),Ke=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Be.compose,Qe=Object(Be.createStore)($e,Ke(Object(Be.applyMiddleware)(Fe.a,ke.logger)));o.a.render(r.a.createElement(m.a,{store:Qe},r.a.createElement(r.a.StrictMode,null,r.a.createElement(Te,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[125,1,2]]]);
//# sourceMappingURL=main.19ecfb87.chunk.js.map