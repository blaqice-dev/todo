(this.webpackJsonpToDo=this.webpackJsonpToDo||[]).push([[0],{10:function(e,t,n){e.exports=n(16)},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),l=(n(15),n(9)),i=n(8),s=n(2),u=n(4),m=n(3),d=n(1),p=n(5);function b(e){return o.a.createElement("h4",{className:"bg-dark text-light text-center p-2"},e.props.name,"'s To Do List",o.a.createElement("br",null),o.a.createElement("small",null,"(",e.props.tasks.filter((function(e){return!e.done})).length," items to do)"))}var h=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).render=function(){return b(Object(d.a)(n))},n}return Object(p.a)(t,e),t}(a.Component);var f=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).updateNewTextValue=function(e){n.setState({new_item_text:e.target.value})},n.createNewTodo=function(){n.state.new_item_text&&(n.props.callback(n.state.new_item_text),n.setState({new_item_text:""}))},n.render=function(){return function(e){return o.a.createElement("div",{className:"my-1"},o.a.createElement("input",{className:"form-control",value:e.state.new_item_text,onChange:e.updateNewTextValue}),o.a.createElement("button",{className:"btn btn-dark text-light mt-1",onClick:e.createNewTodo},"ADD"))}(Object(d.a)(n))},n.state={new_item_text:""},n}return Object(p.a)(t,e),t}(a.Component),E={style:{border:"none","border-radius":"0px"}};function w(e){return o.a.createElement("div",{className:"form-control bg-secondary text-white",style:E.style},o.a.createElement("input",{className:"form-check-input",type:"checkbox",checked:e.props.isChecked,onChange:function(t){return e.props.callback(t.target.checked)}}),o.a.createElement("label",{className:"form-check-label"},"Show ",e.props.description))}var v=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).render=function(){return w(Object(d.a)(n))},n}return Object(p.a)(t,e),t}(a.Component),_={style:{background:"transparent"}};console.log(_.style);var j=function(e){return o.a.createElement("div",null,o.a.createElement(h,{name:e.state.user_name,tasks:e.state.todo_items}),o.a.createElement("div",{className:"container-fluid"},o.a.createElement(f,{callback:e.createNewTodo})),o.a.createElement("div",{className:"container-fluid mt-3"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm"},o.a.createElement("table",{className:"table table-striped table-bordered"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Description"),o.a.createElement("th",null,"Done"))),o.a.createElement("tbody",null,e.todoTableRows(!1)))),o.a.createElement("div",{className:"text-center col-sm",style:_.style},o.a.createElement(v,{description:"Completed Tasks",isChecked:e.state.show_completed,callback:function(t){return e.setState({show_completed:t})}}),e.state.show_completed&&o.a.createElement("table",{className:"table table-striped table-bordered"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Description"),o.a.createElement("th",null,"Done"))),o.a.createElement("tbody",null,e.todoTableRows(!0)))))))};function k(e){return o.a.createElement("tr",null,o.a.createElement("td",null,e.props.item.action),o.a.createElement("td",null,o.a.createElement("input",{type:"checkbox",checked:e.props.item.done,onChange:function(){return e.props.callback(e.props.item)}})))}var O=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).render=function(){return k(Object(d.a)(n))},n}return Object(p.a)(t,e),t}(a.Component),g=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).updateNewTextValue=function(e){n.setState({new_item_text:e.target.value})},n.createNewTodo=function(e){n.state.todo_items.find((function(t){return t.action===e}))||n.setState({todo_items:[].concat(Object(i.a)(n.state.todo_items),[{action:e,done:!1}])})},n.toggleTodo=function(e){return n.setState({todo_items:n.state.todo_items.map((function(t){return t.action===e.action?Object(l.a)({},t,{done:!t.done}):t}))})},n.todoTableRows=function(e){return n.state.todo_items.filter((function(t){return t.done===e})).map((function(e){return o.a.createElement(O,{key:e.action,item:e,callback:n.toggleTodo})}))},n.render=function(){return j(Object(d.a)(n))},n.state={user_name:"Joa",todo_items:[{action:"Learn HTML5",done:!1},{action:"Learn CSS3",done:!1},{action:"Learn JavaScript",done:!1},{action:"Learn Bootstrap",done:!1},{action:"Learn ReactJS",done:!1},{action:"Learn NodeJS",done:!1},{action:"Learn ExpressJS",done:!1},{action:"Learn MongoDB",done:!1},{action:"Learn Web Testing",done:!1},{action:"Learn Mocha",done:!1},{action:"Dive deeper in ES6",done:!1}],show_completed:!1},n}return Object(p.a)(t,e),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.50fa2d43.chunk.js.map