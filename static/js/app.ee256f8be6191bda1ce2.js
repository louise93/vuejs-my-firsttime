webpackJsonp([0],{"1sSh":function(t,e){},"7zck":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n=s("3EgV"),i=s.n(n);s("7zck");a.default.use(i.a,{theme:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}});var o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("img",{attrs:{src:"http://simpleicon.com/wp-content/uploads/user1.png",width:"150"}}),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var r=s("VU/8")({name:"App"},o,!1,function(t){s("jqg/")},null,null).exports,c=s("/ocq"),l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))]),this._v(" "),e("h2",[this._v("Essential Links")]),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://localhost:8080/#/about"}},[this._v("\n        About Me\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://localhost:8080/#/codecamp"}},[this._v("\n        TO DO APP\n      ")])])])}]};var u=s("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},l,!1,function(t){s("1sSh")},"data-v-687aad45",null).exports,h={name:"HelloLouise",data:function(){return{msg:" TO DO LIST",message:"",error:"",success:"",items:[]}},filters:{capitalize:function(t){return t?(t=t.toString()).charAt(0).toUpperCase()+t.slice(1):""}},methods:{doThis:function(){0!==this.message.length?(this.items.push({text:this.message,edit:!1}),this.error="",this.success="New task has been added !",this.message=""):(this.error="Input is required",this.success="")},addItem:function(){0!==this.message.length?(this.items.push({text:this.message,edit:!1}),this.error="",this.success="New task has been added !",this.message=""):(this.error="Input is required !",this.success="")},deleteTodo:function(t){1==confirm("Are you sure you want to delete this task ?")?(this.items.splice(t,1),this.success="Task has been deleted !",this.error=""):(this.success="",this.error="")},editTodo:function(t){t.edit=!t.edit,t.edit?(this.success="",this.error=""):(this.success="Task has been updated !",this.error="")}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("link",{attrs:{rel:"stylesheet",type:"text/css",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css"}}),t._v(" "),s("link",{attrs:{rel:"stylesheet",type:"text/css",href:"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"}}),t._v(" "),s("link",{attrs:{rel:"stylesheet",type:"text/css",href:"https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css"}}),t._v(" "),s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-3"}),t._v(" "),s("div",{staticClass:"col-md-6"},[t._m(0),t._v(" "),s("label",{staticStyle:{color:"red"}},[t._v(t._s(t.error))]),t._v(" "),s("label",{staticClass:"text-success"},[t._v(t._s(t.success))]),t._v(" "),s("table",{staticClass:"table table-bordered ",staticStyle:{"font-size":"16px"},attrs:{id:"todo"}},[t._m(1),t._v(" "),s("tbody",t._l(t.items,function(e,a){return s("tr",[s("td",{attrs:{colspan:"2"}},[e.edit?s("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"item.text"}],staticClass:"form-control",domProps:{value:e.text},on:{keydown:function(s){if(!("button"in s)&&t._k(s.keyCode,"enter",13,s.key,"Enter"))return null;t.editTodo(e)},input:function(s){s.target.composing||t.$set(e,"text",s.target.value)}}}):s("span",[t._v(" "+t._s(e.text))])]),t._v(" "),s("td",{attrs:{colspan:"2"}},[s("button",{staticClass:"btn btn-xs btn-danger btn-circle",on:{click:function(e){t.deleteTodo(a)}}},[s("i",{staticClass:"fa fa-trash"}),t._v(" remove")]),t._v("\n                       \n                      "),s("button",{staticClass:"btn btn-xs btn-info btn-circle",on:{click:function(s){t.editTodo(e)}}},[e.edit?s("span",[s("i",{staticClass:"fa fa-save"}),t._v(" save")]):s("span",[s("i",{staticClass:"fa fa-edit"}),t._v(" edit")])])])])}))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-control",domProps:{value:t.message},on:{keydown:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.doThis(e):null},input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._v(" "),s("br"),t._v(" "),s("button",{staticClass:"btn btn-info pull-right",on:{click:t.addItem}},[s("i",{staticClass:"fa fa-plus"}),t._v("Add")])]),t._v(" "),s("div",{staticClass:"col-md-3"})])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{staticClass:"btn btn-warning text-info",attrs:{href:"http://localhost:8080/#/"}},[e("i",{staticClass:"fa fa-reply"}),this._v(" Go back to Home\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{attrs:{colspan:"3"}},[this._v("TASKS")]),this._v(" "),e("th")])])}]};var m=s("VU/8")(h,d,!1,function(t){s("UG+h")},"data-v-9d7038d6",null).exports,p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]};s("VU/8")({name:"CodeCamp",data:function(){return{msg:"Welcome to  CodeCamp route"}}},p,!1,function(t){s("cPCj")},"data-v-0cfc3df6",null).exports;var v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))]),this._v(" "),e("a",{attrs:{href:"http://localhost:8080/#/"}},[this._v("\n        Go back to Home\n      ")])])},staticRenderFns:[]};var f=s("VU/8")({name:"AboutMe",data:function(){return{msg:"Im Louise Salas. Nice to meet you :)"}}},v,!1,function(t){s("S34E")},"data-v-756234c9",null).exports;a.default.use(c.a);var _=new c.a({routes:[{path:"/",name:"HelloWorld",component:u},{path:"/sample",name:"HelloLouise",component:m},{path:"/codecamp",name:"CodeCamp",component:m},{path:"/about",name:"AboutMe",component:f}]});a.default.config.productionTip=!1,new a.default({el:"#app",router:_,components:{App:r},template:"<App/>"})},S34E:function(t,e){},"UG+h":function(t,e){},cPCj:function(t,e){},"jqg/":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ee256f8be6191bda1ce2.js.map