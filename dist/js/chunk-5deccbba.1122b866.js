(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5deccbba"],{"2d3b":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{attrs:{id:"search"}},[s("header",[s("img",{staticClass:"back-icon",attrs:{src:t("ae5c")},on:{click:function(a){return e.$router.push({name:"home"})}}}),s("div",{staticClass:"search"},[s("v-icon",{staticClass:"search-icon",attrs:{icon:"search"}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],staticClass:"search-tip",attrs:{type:"text",placeholder:"畅享20e"},domProps:{value:e.keyword},on:{keydown:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.goSearch(e.keyword)},input:function(a){a.target.composing||(e.keyword=a.target.value)}}}),""!==e.keyword?s("v-icon",{staticClass:"cross-icon",attrs:{icon:"cross"},on:{click:function(a){e.keyword=""}}}):e._e()],1),s("span",{staticClass:"search-btn",on:{click:function(a){return e.goSearch(e.keyword)}}},[e._v("搜索")])]),s("main",[s("span",{staticClass:"label-title"},[e._v("最近搜索")]),s("v-label-bar",{attrs:{labels:e.recent_search_labels},on:{labelClick:e.goSearch}}),s("span",{staticClass:"label-title search-find"},[e._v("搜索发现")]),s("v-label-bar",{attrs:{labels:e.search_find_labels},on:{labelClick:e.goSearch}})],1)])},c=[],r={name:"Search",data:function(){return{keyword:"",recent_search_labels:["HUAWEI WATCH D","HUAWEI"],search_find_labels:["P50","手机","打印机","剃须刀","扫地机器人","MateBook 14","P40"]}},methods:{goSearch:function(e){this.$router.push({name:"searchResult",params:{keyword:e||"畅享20e"}})}}},n=r,o=t("2877"),i=Object(o["a"])(n,s,c,!1,null,null,null);a["default"]=i.exports},ae5c:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAfNJREFUaEPt2D1LglEUB/D/g+ImmSCWfgYbbChysMUgarP3l7UyGwotiKKy1iiiRikiKJqrPT9ESZJLOScZig1SXAeH8uV6vY/3CD6LIPee+/89B+Rctc+v7A9a+NHaAMXda3dAcQPQ7kC5DmSzWTzc36HTaoXPN6Rrk6R3IJPJILS2imTytRj88OgYbnevbgipgL/hWeqT0zO4XD30AeXCj09MIrAc1C08KyylA6rCSwGoDN8wQHX4hgAUwgsDqIQXAlAKXzeAWvi6ABTDcwOohucCUA5fE0A9fFVAK4SvCGiV8BUBkd0dxGKPpSmy2+GA3z8GTdN0nSx5itvtXejr74fBYCgu/zeNfufzGB0ZRqFQ4KmnZM3U9AwWFpfKA9i3K8EAnp+elITjOZRdUze3tisDUqkUbm+u8ZFO89Rr6hqbzYbZuXmwz5o/o01NJnhY1RvZ+/sbcrlcqbTZbIbD4RQ8Sp9tVQHx+DM2wiGwv0nYYzQasRc5wIDHo08agao178TUETUB7KVQRnABKCO4AVQRdQEoIuoGUEMIASghhAFUEA0BKCAaBqhGSAGoREgDVEJcXF7B6dRvAJQKKIfYjezD6x0UGNP4tkgHsGMTiRecR6PosFgQCq/DZDLxpRFYpQtAIIfwljZA+NVJ2tjyHfgFVbb2wMUwLPEAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=chunk-5deccbba.1122b866.js.map