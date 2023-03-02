import Vue from "vue";
import VueRouter from "vue-router";

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject){
    return originalPush.call(this, location, onResolve, onReject)
  }
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: {
      name: "index"
    }
  },
  {
    path: "/index",
    name: "index",
    component: () => import("views/Index/Index"),
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("views/Index/Home"),
        meta: {
          title: "华为手机、笔记本、平板、穿戴、官网正品保障"
        }
      },
      {
        path: "category",
        name: "category",
        component: () => import("views/Index/Category"),
        meta: {
          title: "分类"
        }
      },
      {
        path: "cart",
        name: "cart",
        component: () => import("views/Index/Cart"),
        meta: {
          title: "购物车",
          requireAuth: true
        }
      },
      {
        path: "personal",
        name: "personal",
        component: () => import("views/Index/Personal"),
        meta: {
          title: "个人中心"
        }
      }
    ],
    redirect: {
      name: "home"
    }
  },
  {
    path: "/order",
    name: "order",
    component: () => import("views/Order"),
    meta: {
      title: "订单中心",
      requireAuth: true
    }
  },
  {
    path: "/search",
    name: "search",
    component: () => import("views/Search"),
    meta: {
      title: "搜索页"
    }
  },
  {
    path: "/searchResult/:keyword",
    name: "searchResult",
    component: () => import("views/SearchResult"),
    meta: {
      title: "搜索结果页"
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("views/Login"),
    meta: {
      title: "登录"
    }
  },
  {
    path: "/registration",
    name: "registration",
    component: () => import("views/Registration"),
    meta: {
      title: "注册"
    }
  },
  {
    path: "/product/:pid",
    name: "product",
    component: () => import("views/Product"),
    meta: {
      title: "详情页",
      requireAuth: true
    }
  },
  {
    path: "/404",
    name: "404",
    component: () => import("views/Common/404"),
    meta: {
      title: "页面不存在"
    }
  },
  {
    path: "*",
    redirect: {
      name: "404"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject);
  }
  return originalPush.call(this, location).catch((err) => {
    let reg = new RegExp("^Redirected when going from \"[a-z_.\\/]+\" to \"[a-z_.\\/]+\" via a navigation guard.$");
    if (reg.test(err.message)) {
      return Promise.resolve(false);
    }
    return Promise.reject(err);
  });
};

export default router;