(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-86625264"],{"0c8f":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("van-nav-bar",{attrs:{title:"修改个人信息","right-text":"保存","left-arrow":""},on:{"click-left":t.toBack,"click-right":t.save}}),n("div",{staticClass:"main"},[n("van-radio-group",{model:{value:t.sex,callback:function(e){t.sex=e},expression:"sex"}},[n("van-cell-group",[n("van-cell",{attrs:{title:"男",clickable:""},scopedSlots:t._u([{key:"right-icon",fn:function(){return[n("van-radio",{attrs:{name:1}})]},proxy:!0}])}),n("van-cell",{attrs:{title:"女",clickable:""},scopedSlots:t._u([{key:"right-icon",fn:function(){return[n("van-radio",{attrs:{name:0}})]},proxy:!0}])})],1)],1)],1)],1)},i=[],r=(n("b0c0"),{data:function(){return{sex:""}},mounted:function(){this.name=this.$route.query.name},methods:{toBack:function(){this.$router.go(-1)},save:function(){var t=this;this.$http.updateuser({sex:this.sex}).then((function(e){t.$router.push("/pim")}))}}}),c=r,s=(n("195f"),n("2877")),o=Object(s["a"])(c,a,i,!1,null,"2b411c9f",null);e["default"]=o.exports},"195f":function(t,e,n){"use strict";n("d67d")},d67d:function(t,e,n){}}]);