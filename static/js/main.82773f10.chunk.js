(this.webpackJsonpcv_project=this.webpackJsonpcv_project||[]).push([[0],[,,,,,,,,,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),i=a(1),c=a.n(i),d=a(3),s=a.n(d),o=(a(13),a(4)),r=a(5),l=a(7),u=a(6),j=(a(14),a(15),function(t){return Object(n.jsx)("button",{className:"editButton",onClick:t.editAll,children:t.editing?"Save":"Edit"})}),h=(a(16),function(t){var e;return e=t.editing?[Object(n.jsx)("input",{type:"text","data-id":"firstName",value:t.firstName,onChange:t.editName},"firstName"),Object(n.jsx)("input",{type:"text","data-id":"lastName",value:t.lastName,onChange:t.editName},"lastName")]:Object(n.jsxs)("h1",{children:[t.firstName," ",t.lastName]}),Object(n.jsx)("div",{className:"name",children:e})}),x=(a(17),function(t){var e;return e=t.editing?[Object(n.jsx)("input",{type:"text","data-id":"email",value:t.contact.email,onChange:t.editContact},"email"),Object(n.jsx)("input",{type:"text","data-id":"phone",value:t.contact.phone,onChange:t.editContact},"phone"),Object(n.jsx)("input",{type:"text","data-id":"city",value:t.contact.city,onChange:t.editContact},"city"),Object(n.jsx)("input",{type:"text","data-id":"country",value:t.contact.country,onChange:t.editContact},"country")]:[Object(n.jsx)("p",{children:t.contact.email},"email"),Object(n.jsx)("p",{children:t.contact.phone},"phone"),Object(n.jsx)("p",{children:t.contact.city},"city"),Object(n.jsx)("p",{children:t.contact.country},"country")],Object(n.jsx)("div",{className:"contact",children:e})}),b=(a(18),function(t){for(var e=[],a=[],i=0;i<t.education.length;i++)e.push(Object(n.jsxs)("form",{className:"educationForm",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"Course Name"}),Object(n.jsx)("input",{type:"text","data-id":"course","data-index":i,value:t.education[i].course,onChange:t.editEducation},"course")]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"Institution Name"}),Object(n.jsx)("input",{type:"text","data-id":"name","data-index":i,value:t.education[i].name,onChange:t.editEducation},"name")]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"Start Year"}),Object(n.jsx)("input",{type:"text","data-id":"start","data-index":i,value:t.education[i].start,onChange:t.editEducation},"start")]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"Finish Year"}),Object(n.jsx)("input",{type:"text","data-id":"end","data-index":i,value:t.education[i].end,onChange:t.editEducation},"end")]}),Object(n.jsxs)("div",{className:"details",children:[Object(n.jsx)("label",{children:"Details"}),Object(n.jsx)("textarea",{type:"text","data-id":"details","data-index":i,value:t.education[i].details,onChange:t.editEducation},"details")]}),Object(n.jsx)("button",{className:"deleteButton",type:"button","data-index":i,onClick:t.deleteEducationForm,children:"Delete"})]},i)),a.push(Object(n.jsxs)("div",{className:"displayDiv",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:t.education[i].course}),Object(n.jsxs)("span",{children:[t.education[i].start," ",""!==t.education[i].start?"-":""," ",t.education[i].end]})]}),Object(n.jsx)("h4",{children:t.education[i].name}),Object(n.jsx)("p",{children:t.education[i].details})]},i));return Object(n.jsxs)("section",{className:"education",children:[Object(n.jsx)("h2",{className:"section-title",children:"Education"}),t.editing?e:a,t.editing?Object(n.jsx)("button",{className:"addButton",onClick:t.addEducationForm,type:"button",children:"Add"}):null]})}),m=(a(19),function(t){for(var e=[],a=[],i=0;i<t.work.length;i++)e.push(Object(n.jsxs)("form",{className:"workForm",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"Role"}),Object(n.jsx)("input",{type:"text","data-id":"role","data-index":i,value:t.work[i].role,onChange:t.editWork},"role")]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"Company"}),Object(n.jsx)("input",{type:"text","data-id":"company","data-index":i,value:t.work[i].company,onChange:t.editWork},"company")]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"Start Year"}),Object(n.jsx)("input",{type:"text","data-id":"start","data-index":i,value:t.work[i].start,onChange:t.editWork},"start")]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"Finish Year"}),Object(n.jsx)("input",{type:"text","data-id":"end","data-index":i,value:t.work[i].end,onChange:t.editWork},"end")]}),Object(n.jsxs)("div",{className:"details",children:[Object(n.jsx)("label",{children:"Details"}),Object(n.jsx)("textarea",{type:"text","data-id":"details","data-index":i,value:t.work[i].details,onChange:t.editWork},"details")]}),Object(n.jsx)("button",{className:"deleteButton",type:"button","data-index":i,onClick:t.deleteWorkForm,children:"Delete"})]},i)),a.push(Object(n.jsxs)("div",{className:"displayDiv",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:t.work[i].role}),Object(n.jsxs)("span",{children:[t.work[i].start," ",""!==t.work[i].start?"-":""," ",t.work[i].end]})]}),Object(n.jsx)("h4",{children:t.work[i].company}),Object(n.jsx)("p",{children:t.work[i].details})]},i));return Object(n.jsxs)("section",{className:"work",children:[Object(n.jsx)("h2",{className:"section-title",children:"Work Experience"}),t.editing?e:a,t.editing?Object(n.jsx)("button",{className:"addButton",onClick:t.addWorkForm,type:"button",children:"Add"}):null]})}),O=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={editing:!1,firstName:"First Name",lastName:"Last Name",contact:{email:"Email",phone:"Phone",city:"City",country:"Country"},education:[],work:[]},t.editAll=function(){t.setState({editing:!t.state.editing})},t.editContact=function(e){var a=e.target.getAttribute("data-id"),n=t.state.contact;n[a]=e.target.value,t.setState({contact:n})},t.editName=function(e){var a=e.target.getAttribute("data-id"),n=t.state;n[a]=e.target.value,t.setState(n)},t.addEducationForm=function(){var e=t.state.education;e.push({name:"",course:"",start:"",end:"",details:""}),t.setState({education:e})},t.editEducation=function(e){var a=t.state.education,n=e.target.getAttribute("data-id");a[e.target.getAttribute("data-index")][n]=e.target.value,t.setState({education:a})},t.deleteEducationForm=function(e){var a=t.state.education,n=e.target.getAttribute("data-index");a.splice(n,1),t.setState({education:a})},t.addWorkForm=function(){var e=t.state.work;e.push({company:"",role:"",start:"",end:"",details:""}),t.setState({work:e})},t.editWork=function(e){var a=t.state.work,n=e.target.getAttribute("data-id");a[e.target.getAttribute("data-index")][n]=e.target.value,t.setState({work:a})},t.deleteWorkForm=function(e){var a=t.state.work,n=e.target.getAttribute("data-index");a.splice(n,1),t.setState({work:a})},t}return Object(r.a)(a,[{key:"render",value:function(){var t=this;return Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsxs)("main",{className:"main",children:[Object(n.jsxs)("section",{className:"top-row",children:[Object(n.jsx)(h,{firstName:this.state.firstName,lastName:this.state.lastName,editing:this.state.editing,editName:function(e){return t.editName(e)}}),Object(n.jsx)(x,{editing:this.state.editing,contact:this.state.contact,editContact:function(e){return t.editContact(e)}})]}),Object(n.jsx)(b,{addEducationForm:this.addEducationForm,editing:this.state.editing,education:this.state.education,editEducation:function(e){return t.editEducation(e)},deleteEducationForm:function(e){return t.deleteEducationForm(e)}}),Object(n.jsx)(m,{editing:this.state.editing,work:this.state.work,addWorkForm:this.addWorkForm,editWork:function(e){return t.editWork(e)},deleteWorkForm:function(e){return t.deleteWorkForm(e)}})]}),Object(n.jsx)(j,{editAll:this.editAll,editing:this.state.editing})]})}}]),a}(i.Component),p=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,21)).then((function(e){var a=e.getCLS,n=e.getFID,i=e.getFCP,c=e.getLCP,d=e.getTTFB;a(t),n(t),i(t),c(t),d(t)}))};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root")),p()}],[[20,1,2]]]);
//# sourceMappingURL=main.82773f10.chunk.js.map