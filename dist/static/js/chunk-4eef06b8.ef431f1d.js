(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4eef06b8"],{5400:function(t,e,s){"use strict";s("f22f")},dc3f:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[t._m(0),s("div",{staticClass:"from"},[s("van-form",[s("van-field",{attrs:{name:"用户名",placeholder:"请输入手机号",rules:[{required:!0,message:"请填写手机号"}]},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}}),s("van-field",{attrs:{type:"password",name:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),s("div",{staticClass:"others"},[s("p",[t._v("找回密码")]),s("p",{on:{click:t.toRegister}},[t._v("注册/验证码登录")])]),s("div",{staticStyle:{margin:"16px"}},[s("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit",color:"linear-gradient(to right, #FF944B, #FC5500)"},on:{click:t.login}},[t._v("登录")])],1)],1)],1)])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"logo"},[s("img",{attrs:{src:"/logo.png",alt:""}})])}],i=(s("e7e5"),s("d399")),n={data:function(){return{mobile:13777777777,password:6666666666}},mounted:function(){},methods:{login:function(){var t=this;this.$http.login({mobile:this.mobile,password:this.password,type:1}).then((function(e){Object(i["a"])(e.data.msg),200===e.data.code?(t.$store.commit("login",{token:e.data.data.remember_token}),t.$router.push("/home")):i["a"].fail(e.data.msg)}))},toRegister:function(){this.$router.push("/register")}}},r=n,l=(s("5400"),s("2877")),c=Object(l["a"])(r,o,a,!1,null,"20615330",null);e["default"]=c.exports},f22f:function(t,e,s){}}]);