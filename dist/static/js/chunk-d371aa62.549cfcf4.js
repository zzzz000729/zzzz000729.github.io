(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d371aa62"],{7431:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"layout-content"},[t.$route.meta.keepAlive?a("keep-alive",[a("router-view")],1):a("router-view")],1),a("div",{staticClass:"layout-footer"},[a("TabBar",{attrs:{data:t.tabbars},on:{change:t.handleChange}})],1)])},o=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-tabbar",{attrs:{fixed:"",route:"","active-color":"#EB6100"},on:{change:t.handleChange},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.data,(function(e,n){return a("van-tabbar-item",{key:n,attrs:{to:e.to,icon:e.icon}},[t._v(" "+t._s(e.title)+" ")])})),1)],1)},i=[],r=(a("a9e3"),{name:"TabBar",props:{defaultActive:{type:Number,default:0},data:{type:Array,default:function(){return[]}}},data:function(){return{active:this.defaultActive}},methods:{handleChange:function(t){this.$emit("change",t)}}}),l=r,u=(a("9712"),a("2877")),s=Object(u["a"])(l,c,i,!1,null,"3acc74ea",null),d=s.exports,f={name:"AppLayout",components:{TabBar:d},data:function(){return{tabbars:[{title:"首页",to:{name:"Home"},icon:"home-o"},{title:"课程",to:{name:"Course"},icon:"description"},{title:"约课记录",to:{name:"Record"},icon:"newspaper-o"},{title:"图书",to:{name:"Exercise"},icon:"records"},{title:"我的",to:{name:"My"},icon:"contact"}]}},methods:{handleChange:function(t){}}},p=f,v=Object(u["a"])(p,n,o,!1,null,null,null);e["default"]=v.exports},9712:function(t,e,a){"use strict";a("c9f0")},c9f0:function(t,e,a){}}]);