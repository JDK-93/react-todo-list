(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(1),c=n.n(o),a=n(8),l=n.n(a),s=(n(15),n(3)),d=function(e){var t=e.index,n=e.todo,o=e.handleEdit,c=e.handleDelete;return Object(r.jsxs)("div",{className:"flex flex-wrap flex-row content-center justify-between p-2  border rounded-xl shadow-md bg-white",children:[Object(r.jsxs)("li",{className:"flex cursor-pointer ",onClick:function(){return o(n.id)},children:[Object(r.jsx)("svg",{className:"h-6 w-6 text-green-200 ".concat(n.done?"":"hidden"),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(r.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),Object(r.jsx)("svg",{className:"h-6 w-6 text-gray-700 ".concat(n.done?"hidden ":""),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(r.jsx)("circle",{cx:"12",cy:"12",r:"9","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"})}),Object(r.jsxs)("p",{className:"text-base font-thin pl-2 ".concat(n.done?"text-gray-300":""),children:[t+1,". ",n.todo]})]},n.id),Object(r.jsx)("button",{onClick:function(){return c(n.id)},className:"w-6 h-6 di",disabled:n.done,children:Object(r.jsx)("svg",{className:"h-6 w-6 ".concat(n.done?"text-gray-100 cursor-default ":"text-gray-700 cursor-pointer hover:text-red-600"),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(r.jsx)("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"})})})]})},i=function(e){var t=e.todos,n=e.handleEdit,o=e.handleDelete;return Object(r.jsx)("div",{className:"p-4 overflow-auto h-5/6",children:Object(r.jsx)("ul",{className:"pt-4 pr-2  space-y-2 overflow-y-auto",children:t.map((function(e,t){return Object(r.jsx)(d,{index:t,todo:e,handleEdit:n,handleDelete:o})}))})})},u=n(2),j=n(9),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add":return[].concat(Object(j.a)(e),[t.payload]);case"delete":return e.filter((function(e){return e.id!==t.payload}));case"toggle":case"toggle-old":return e.map((function(e){return e.id===t.payload?Object(u.a)(Object(u.a)({},e),{},{done:!e.done}):e}));default:return e}},x=n(6),b=function(e){var t=e.handleAddTodo,n=Object(o.useRef)(null),c=Object(o.useState)(!1),a=Object(s.a)(c,2),l=a[0],d=a[1],i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(o.useState)(e),n=Object(s.a)(t,2),r=n[0],c=n[1];return[r,function(e){var t=e.target;c(Object(u.a)(Object(u.a)({},r),{},Object(x.a)({},t.name,t.value)))},function(){c(e)}]}({description:""}),j=Object(s.a)(i,3),h=j[0].description,b=j[1],f=j[2];Object(o.useEffect)((function(){n.current.focus()}),[l]);return Object(r.jsxs)("div",{className:"absolute inset-x-0 bottom-0 flex flex-col items-center justify-center pb-16",children:[Object(r.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!(h.trim().length<=1)){var n={id:(new Date).getTime(),todo:h,done:!1,date:(new Date).getDate()};t(n),d(!1),f()}},className:"rounded-xl p-2 mb-2 flex flex-row shadow-lg bg-white ".concat(l?"":"hidden"),children:[Object(r.jsx)("input",{ref:n,className:" text-base font-thin rounded-l-lg w-full p-2 bg-gray-50 ",type:"text",name:"description",placeholder:"",autoComplete:"off",required:"true",value:h,onChange:b}),Object(r.jsx)("button",{type:"submit",className:"text-gray-50 text-base font-semibold p-2 bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-r-lg",children:"Guardar"})]}),Object(r.jsx)("div",{className:"h-12 w-12 rounded-full bg-gray-700 cursor-pointer shadow-lg ".concat(l?"hidden":""),onClick:function(){d(!0)},children:Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24",stroke:"#fff",children:Object(r.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18"})})})]})},f=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sept","Oct","Nov","Dic"],g=function(e){var t=e.cant,n=new Date;return Object(r.jsxs)("div",{className:"h-1/6 w-screen flex flex-row justify-between items-center p-4",children:[Object(r.jsxs)("div",{className:"flex flex-row text-gray-700 items-center",children:[Object(r.jsx)("h1",{className:"text-6xl pr-2 font-normal ",children:n.getDate()}),Object(r.jsxs)("div",{className:"flex flex-col pb-0.5",children:[Object(r.jsx)("h1",{className:"text-xl font-normal",children:f[n.getMonth()]}),Object(r.jsx)("h1",{className:"text-xl font-normal  ",children:n.getFullYear()})]})]}),Object(r.jsx)("h1",{className:"w- full text-center text-3xl font-semibold text-gray-700",children:0===t?"No hay tareas":"".concat(t,1===t?" tarea":" tareas")})]})},m=function(){return JSON.parse(localStorage.getItem("todos"))||[]},p=function(){var e=Object(o.useReducer)(h,[],m),t=Object(s.a)(e,2),n=t[0],c=t[1];Object(o.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(g,{cant:n.length}),Object(r.jsx)(b,{handleAddTodo:function(e){c({type:"add",payload:e})}}),Object(r.jsx)(i,{todos:n,handleEdit:function(e){c({type:"toggle",payload:e})},handleDelete:function(e){c({type:"delete",payload:e})}})]})};var O=function(){return Object(r.jsx)("div",{className:"h-screen w-screen relative bg-gray-50",children:Object(r.jsx)(p,{})})};l.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5f4a7e4f.chunk.js.map