(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69dc7067"],{"4ad2":function(t,a,i){},a4dc:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"header"},[i("div",{staticClass:"header_top"},[i("van-icon",{attrs:{name:"arrow-left",color:"white",size:"20"},on:{click:t.goBack}}),i("div",{staticStyle:{"font-size":"0.45rem",color:"white"}},[t._v("讲师详情")]),i("div")],1),i("div",{staticClass:"header_bottom"},[i("div",{staticClass:"tx"},[i("img",{attrs:{src:t.iao.avatar,alt:""}})]),i("div",{staticClass:"name"},[i("p",[t._v(" "+t._s(t.iao.real_name)+" "),i("span",[t._v(t._s(t.iao.level_name))])]),i("p",[t._v(t._s(0==t.iao.sex?"男":"女")+" "+t._s(t.iao.teach_age)+"年教龄")])]),i("div",{staticClass:"gz"},[2==t.flag?i("button",{staticClass:"btn_gz",on:{click:function(a){return t.concern(t.iao.id)}}},[t._v("关注")]):i("p",{staticStyle:{"font-size":"0.4rem",color:"#b7b7b7"},on:{click:function(a){return t.concern(t.iao.id)}}},[t._v("已关注")])])])]),i("div",{staticClass:"main"},[i("van-tabs",{model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},[i("van-tab",{attrs:{title:"讲师介绍"}},[t._l(t.attr,(function(a,e){return i("div",{key:e,staticClass:"box1"},[i("p",[t._v(t._s(a.attr_name))]),i("p",[t._v(t._s(a.attr_value[0].attr_value_name))])])})),i("div",{staticClass:"box2"},[i("p",[t._v("老师简介")]),i("p",{staticStyle:{"line-height":"0.75rem"}},[t._v(t._s(t.intro))])])],2),i("van-tab",{attrs:{title:"主讲课程"}},[t._v("内容2")]),i("van-tab",{attrs:{title:"学员评价"}},[t._v("内容3")])],1)],1),i("van-button",{staticClass:"make",attrs:{type:"primary",block:"",color:"#EB6100"}},[t._v("立即预约")])],1)},n=[],s={data:function(){return{iao:"",attr:[],intro:"",active:0,flag:""}},mounted:function(){var t=this;this.$http.teacherdetail(this.$route.query.id).then((function(a){t.iao=a.data.data.teacher,t.flag=a.data.data.flag})),this.$http.teacherinfo(this.$route.query.id).then((function(a){t.attr=a.data.data.attr,t.intro=a.data.data.intro}))},methods:{goBack:function(){this.$router.go(-1)},concern:function(t){var a=this;this.$http.gz(t).then((function(t){a.flag=t.data.data.flag}))}}},c=s,o=(i("ff7b"),i("2877")),r=Object(o["a"])(c,e,n,!1,null,"3a7ff182",null);a["default"]=r.exports},ff7b:function(t,a,i){"use strict";i("4ad2")}}]);