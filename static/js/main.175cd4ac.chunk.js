(this["webpackJsonpenergy-app"]=this["webpackJsonpenergy-app"]||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(1),n=a(6),r=a.n(n),i=a(2),l=a(3),d=a(7),o={location:"Overview",isDark:!0,name:"Guest",usageData:[],dailyBudget:{elec:1,gas:1}},j={setLocation:"setLocation",setIsDark:"setIsDark",setName:"setName",setUsageData:"setUsageData",setDailyBudget:"setDailyBudget"},b=function(e){return e.location},u=function(e){return e.isDark},h=function(e){return e.name},x=function(e){return e.usageData},O=function(e){return e.dailyBudget};var m=Object(d.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0,a=t.type,s=t.payload;switch(a){case j.setLocation:return Object(l.a)(Object(l.a)({},e),{},{location:s});case j.setIsDark:return Object(l.a)(Object(l.a)({},e),{},{isDark:s});case j.setName:return Object(l.a)(Object(l.a)({},e),{},{name:s});case j.setUsageData:return Object(l.a)(Object(l.a)({},e),{},{usageData:s});case j.setDailyBudget:return Object(l.a)(Object(l.a)({},e),{},{dailyBudget:s});default:return e}})),p=a(4),f=a.n(p),v=a(8),g=a(5);function y(e){return Math.round(100*(e+Number.EPSILON))/100}function N(e,t,a){return y(e/(t*a)*100)}function k(e){return y(e/125*100)}var D=Object(i.b)((function(e){return{usageData:x(e),isDark:u(e),dailyBudget:O(e)}}),null)((function(e){var t,a=e.openInput,c=e.usageData,n=e.isDark,r=e.dailyBudget,i=y(null===c||void 0===c?void 0:c.map((function(e){var t,a;return null===(t=e.usage)||void 0===t||null===(a=t.electricity)||void 0===a?void 0:a.cost})).reduce((function(e,t){return e+t}),0)),l=y(null===c||void 0===c?void 0:c.map((function(e){var t,a,s;return null!==(t=null===(a=e.usage)||void 0===a||null===(s=a.gas)||void 0===s?void 0:s.cost)&&void 0!==t?t:0})).reduce((function(e,t){return e+t}),0)),d=null!==(t=c.length)&&void 0!==t?t:1,o=N(i,d,r.elec),j=N(l,d,r.gas),b=N(l+i,d,r.elec+r.gas);return Object(s.jsxs)("div",{className:"main",style:{marginLeft:"300px",marginTop:"43px"},children:[Object(s.jsx)("header",{className:"container",style:{paddingTop:"22px"},children:Object(s.jsx)("h5",{children:Object(s.jsxs)("b",{children:[Object(s.jsx)("i",{className:"fa fa-dashboard"}),Object(s.jsxs)("button",{id:"updateBtn",className:"".concat(n?"dark-button":""),onClick:a,children:[" ","Update Dashboard"]})]})})}),Object(s.jsxs)("div",{className:"row-padding margin-bottom",children:[Object(s.jsx)("div",{className:"quarter",children:Object(s.jsxs)("div",{className:"container red padding-16",children:[Object(s.jsx)("div",{className:"left",children:Object(s.jsx)("i",{className:"fas fa-bolt xxxlarge"})}),Object(s.jsx)("div",{className:"right",children:Object(s.jsx)("h3",{id:"electricity-consumption",children:null!==i&&void 0!==i?i:"~"})}),Object(s.jsx)("div",{className:"clear"}),Object(s.jsx)("h4",{children:"Electricity"})]})}),Object(s.jsx)("div",{className:"quarter",children:Object(s.jsxs)("div",{className:"container blue padding-16",children:[Object(s.jsx)("div",{className:"left",children:Object(s.jsx)("i",{className:"fas fa-fire xxxlarge"})}),Object(s.jsx)("div",{className:"right",children:Object(s.jsx)("h3",{id:"gas-consumption",children:null!==l&&void 0!==l?l:"~"})}),Object(s.jsx)("div",{className:"clear"}),Object(s.jsx)("h4",{children:"Gas"})]})})]}),Object(s.jsx)("div",{className:"panel",children:Object(s.jsxs)("div",{className:"row-padding",style:{margin:"0-16px"},children:[Object(s.jsxs)("div",{className:"third",children:[Object(s.jsx)("h5",{children:"Graph"}),Object(s.jsx)("img",{style:{width:"100%"},alt:"Placeholder"})]}),Object(s.jsxs)("div",{className:"twothird",children:[Object(s.jsx)("h5",{children:"Consumption"}),Object(s.jsx)("table",{className:"table ".concat(n?"dark-striped dark-table":"striped white"),children:Object(s.jsxs)("tbody",{children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("i",{className:"fa fa-bolt text-blue large"})}),Object(s.jsx)("td",{children:"Electricity"}),Object(s.jsxs)("td",{children:[Object(s.jsx)("i",{className:"fa fa-pound-sign"})," ",i]})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("i",{className:"fa fa-fire text-red large"})}),Object(s.jsx)("td",{children:"Gas"}),Object(s.jsxs)("td",{children:[Object(s.jsx)("i",{className:"fa fa-pound-sign"})," ",l]})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("i",{className:"fa fa-lightbulb text-yellow large"})}),Object(s.jsx)("td",{children:"Combined"}),Object(s.jsxs)("td",{children:[Object(s.jsx)("i",{className:"fa fa-pound-sign"})," ",y(l+i)]})]})]})})]})]})}),Object(s.jsx)("hr",{}),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("h5",{children:["Budget for Period: ",d," Days"]}),Object(s.jsx)("p",{children:"Electricity Cost"}),Object(s.jsx)("div",{className:"".concat(n?"dark-bar":"grey"),children:Object(s.jsxs)("div",{className:"container center padding ".concat(o>100?"over-budget":"red"),style:{width:"".concat(k(o),"%")},children:[o,"%"]})}),Object(s.jsx)("p",{children:"Gas Cost"}),Object(s.jsx)("div",{className:"".concat(n?"dark-bar":"grey"),children:Object(s.jsxs)("div",{className:"container center padding ".concat(j>100?"over-budget":"blue"),style:{width:"".concat(k(j),"%")},children:[j,"%"]})}),Object(s.jsx)("p",{children:"Combined Cost"}),Object(s.jsx)("div",{className:"".concat(n?"dark-bar":"grey"),children:Object(s.jsxs)("div",{className:"container center padding ".concat(b>100?"over-budget":"green"),style:{width:"".concat(k(b),"%")},children:[b,"%"]})})]}),Object(s.jsx)("hr",{}),Object(s.jsx)("div",{className:"container"}),Object(s.jsx)("div",{className:"container dark-grey padding-16"})]})})),w={setLocation:function(e){return{type:j.setLocation,payload:e}}},I=Object(i.b)((function(e){return{location:b(e),name:h(e),isDark:u(e)}}),w)((function(e){var t=e.navitems,a=e.close,c=e.name,n=e.setLocation,r=e.location,i=e.isDark;return Object(s.jsxs)("nav",{className:"sidebar collapse animate-left ".concat(i?"dark-nav":"white"),style:{zIndex:"3",width:"300px"},id:"mySidebar",children:[Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"container row",children:[Object(s.jsx)("div",{className:"col s1",children:Object(s.jsx)("span",{className:"circle margin-right",children:Object(s.jsx)("i",{className:"fas fa-user"})})}),Object(s.jsxs)("div",{className:"col s10 bar",children:[Object(s.jsxs)("span",{children:["Welcome, ",Object(s.jsx)("strong",{children:c})]}),Object(s.jsx)("br",{})]})]}),Object(s.jsx)("hr",{}),Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("h5",{children:"Dashboard"})}),Object(s.jsxs)("div",{className:"bar-block",children:[Object(s.jsxs)("button",{href:"#",className:"bar-item button padding-16 hide-large dark-grey hover-black",onClick:function(){return a()},title:"close menu",children:[Object(s.jsx)("i",{className:"fas fa-remove"}),"\xa0 Close Menu"]}),t.map((function(e,t){var c=e.name,i=e.classes;return Object(s.jsxs)("button",{onClick:function(){n(c),a()},className:"bar-item button ".concat(r===c?"highlight":""),children:[Object(s.jsx)("i",{className:i+"fa-fw padding-right"}),c]},t)}))]})]})})),C={setName:function(e){return{type:j.setName,payload:e}},setAllData:function(e){return{type:j.setAllData,payload:e}}},B=function(e){var t=e.error,a=Object(c.useState)(!1),n=Object(g.a)(a,2),r=n[0],i=n[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginTop:"1em",height:"30px"},children:[Object(s.jsx)("button",{onClick:function(){return i(!r)},style:{marginLeft:"0px",marginRight:"5px"},children:r?"-":"+"}),Object(s.jsx)("p",{style:{height:"30px",margin:"0px"},children:"Full error..."})]}),r&&Object(s.jsx)("p",{children:"".concat(t)})]})},S=Object(i.b)(null,C)((function(e){e.closeInput;var t=e.setName,a=e.setAllData,n=e.setIsOpenInput,r=Object(c.useState)(""),i=Object(g.a)(r,2),l=i[0],d=i[1],o=Object(c.useState)({text:"",error:""}),j=Object(g.a)(o,2),b=j[0],u=j[1];return Object(s.jsxs)("form",{id:"input",onSubmit:function(e){return e.preventDefault()},children:[Object(s.jsx)("button",{onClick:function(){return n(!1)},children:"X"}),Object(s.jsx)("h3",{children:b.text}),Object(s.jsx)("label",{htmlFor:"pass",children:"Password"}),Object(s.jsx)("input",{autoComplete:"off",id:"pass",type:"password",onChange:function(e){var t;e.preventDefault(),d(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)},value:l,placeholder:"Enter Password..."}),Object(s.jsx)("button",{id:"submitBtn",onClick:function(){return e=l,u({text:"Attempting to verify...",error:""}),void Object(v.a)(f.a.mark((function s(){var c;return f.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,fetch("https://energy-app-api.herokuapp.com/",{method:"POST",mode:"cors",body:JSON.stringify({input:e}),headers:{"Content-Type":"application/json"}});case 3:return s.next=5,s.sent.json();case 5:(c=s.sent).verified?(n(!1),t(c.name),a(c.data)):u({text:c.error,error:""}),s.next=13;break;case 9:s.prev=9,s.t0=s.catch(0),console.error(s.t0),u({text:"Failed to verify password...",error:s.t0});case 13:case"end":return s.stop()}}),s,null,[[0,9]])})))();var e},children:"Submit"}),b.error&&Object(s.jsx)(B,{error:b.error})]})})),E={setIsDark:function(e){return{type:j.setIsDark,payload:e}}},T=Object(i.b)((function(e){return{isDark:u(e)}}),E)((function(e){var t=e.isDark,a=e.setIsDark,c=e.open;return Object(s.jsxs)("div",{className:"bar top black large",style:{zIndex:"4"},children:[Object(s.jsx)("button",{className:"bar-item button hide-large hover-none hover-text-white",onClick:function(){return c()},children:Object(s.jsx)("i",{className:"fas fa-bars"})}),Object(s.jsx)("button",{onClick:function(){return a(!t)},className:"right button bar-item ".concat(t?"":"lightbulb"),children:Object(s.jsx)("span",{children:Object(s.jsx)("i",{className:"fa fa-lightbulb ".concat(t?"light-off":"light-on")})})})]})})),L=[{classes:"fa fa-history ",name:"Overview"},{classes:"fas fa-calendar-day ",name:"Today"},{classes:"fas fa-calendar-week ",name:"This Week"},{classes:"fas fa-calendar-alt ",name:"This Month"},{classes:"far fa-calendar-alt ",name:"This Year"},{classes:"fa fa-pound-sign ",name:"Tarrifs"},{classes:"fa fa-history ",name:"Usage"}],U={setUsageData:function(e){return{type:j.setUsageData,payload:e}}},P=Object(i.b)((function(e){return{isDark:u(e)}}),U)((function(e){var t=e.setUsageData,a=e.isDark,n=Object(c.useState)(!1),r=Object(g.a)(n,2),i=r[0],l=r[1];function d(){var e=document.getElementById("mySidebar"),t=document.getElementById("myOverlay");e.style.display="none",t.style.display="none"}Object(c.useEffect)(Object(v.a)(f.a.mark((function e(){var a,s,c,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://energy-app-api.herokuapp.com/getData");case 3:return s=e.sent,e.next=6,s.json();case 6:c=e.sent,n=c.find((function(e){var t;return null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.usageData})),console.log(n),t(null===n||void 0===n||null===(a=n.data)||void 0===a?void 0:a.usageData),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])}))),[]);return Object(s.jsxs)("div",{className:"light-grey ".concat(a?"dark-app":""),children:[Object(s.jsx)(T,{open:function(){var e=document.getElementById("mySidebar"),t=document.getElementById("myOverlay");"block"===e.style.display?(e.style.display="none",t.style.display="none"):(e.style.display="block",t.style.display="block")}}),Object(s.jsx)(I,{close:d,navitems:L}),Object(s.jsx)(D,{openInput:function(){l(!i)}}),i&&Object(s.jsx)(S,{setIsOpenInput:l}),Object(s.jsx)("div",{className:"overlay hide-large animate-opacity",onClick:function(){return d()},style:{cursor:"pointer"},title:"close side menu",id:"myOverlay"})]})}));a(26);r.a.render(Object(s.jsx)(i.a,{store:m,children:Object(s.jsx)(P,{})}),document.getElementById("main"))}},[[27,1,2]]]);
//# sourceMappingURL=main.175cd4ac.chunk.js.map