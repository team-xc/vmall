import Vue from "vue";
import App from "./App.vue";

import router from "libs/router";
import store from "libs/store";
import msg from "libs/msg";
import tools from "libs/tools";

// 全局样式
import "assets/style/mobile.less";

// vant
import Vant from "vant";
import { ImagePreview } from "vant";
import "vant/lib/index.css";

Vue.use(ImagePreview);
Vue.use(Vant);

// 自定义组件
import "libs/v-components";

// 模拟数据
const modulesFiles = require.context("libs/mock", true, /\.js$/);
modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

Vue.config.productionTip = false;

Vue.prototype.$msg = msg;
Vue.prototype.$tools = tools;
Vue.prototype.$bus = new Vue();

router.beforeEach((to, from, next) => {
  // 设置title
  document.title = to.meta.title ? `华为商城 - ${to.meta.title}` : "华为商城";
  if (to.meta.requireAuth) {
    if (store.state.username !== "") {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});


new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
