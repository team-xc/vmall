(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f740bce"],{"0759":function(s,t,a){s.exports=a.p+"img/wap_qq.0d50bf5b.png"},"9d64":function(s,t,a){s.exports=a.p+"img/logo.7b5763a3.png"},a55b:function(s,t,a){"use strict";a.r(t);var e=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{attrs:{id:"login"}},[e("header",[e("img",{attrs:{src:a("9d64")}})]),e("main",[s._m(0),e("van-form",{staticClass:"login-form",on:{submit:s.onSubmit}},[e("van-field",{attrs:{name:"username",placeholder:"手机号/邮件地址/帐号名",autocomplete:"new-password",clearable:""},model:{value:s.username,callback:function(t){s.username=t},expression:"username"}}),e("van-field",{attrs:{name:"password",type:s.is_show_password?"text":"password",placeholder:"密码","right-icon":s.is_show_password?"eye-o":"closed-eye",autocomplete:"new-password"},on:{"click-right-icon":function(t){s.is_show_password=!s.is_show_password}},model:{value:s.password,callback:function(t){s.password=t},expression:"password"}}),e("div",{staticClass:"buttons"},[e("div",{staticClass:"often-options"},[e("span",[s._v("短信验证码登录")]),e("span",[s._v("忘记密码")])]),e("div",{staticClass:"btn-wrap"},[e("van-button",{class:""!==s.username&&""!==s.password?"":"login-btn-dis",attrs:{round:"",block:"",type:"info","native-type":"submit",disabled:""===s.username||""===s.password}},[s._v("登录 ")]),e("van-button",{staticClass:"reg-btn",attrs:{round:"",block:"",type:"info","native-type":"button"},on:{click:function(t){return s.$router.push({name:"registration"})}}},[s._v("注册帐号 ")])],1)])],1),e("div",{staticClass:"often-login"},[e("span",[s._v("其他方式登录")]),e("img",{attrs:{src:a("0759")}}),s._m(1)])],1)])},n=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"top"},[a("span",{staticClass:"title"},[s._v("华为帐号")]),a("span",{staticClass:"desc"},[s._v("登录华为帐号以使用云空间、华为应用及更多服务")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"often-link"},[a("span",[s._v("遇到问题")]),a("div",{staticClass:"line"}),a("span",[s._v("隐私声明")])])}],o=(a("d3b7"),a("159b"),{name:"Login",data:function(){return{username:"",password:"",is_show_password:!1}},methods:{onSubmit:function(s){var t=this.$store.state.users,a=!1;t.forEach((function(t){t.username===s.username&&t.password===s.password&&(a=!0)})),a?(this.$store.dispatch("saveUsername",s.username),this.$router.push({name:"home"})):this.$msg.fail("账号或密码错误")}}}),i=o,r=a("2877"),c=Object(r["a"])(i,e,n,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-0f740bce.0818868c.js.map