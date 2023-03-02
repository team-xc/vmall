<template>
  <div id="index">
    <keep-alive>
      <router-view />
    </keep-alive>

    <van-tabbar class="bottom-nav" v-model="curtPage" @change="onChangePage">
      <van-tabbar-item v-for="(item,key) in navs" :key="key" :name="item.name"
                       :icon=" curtPage === item.name ? item.activeIcon : item.icon">
        {{ item.label }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      curtPage: this.$route.name,
      navs: [
        {
          name: "home",
          icon: "shop-o",
          activeIcon: "shop",
          label: "首页"
        },
        {
          name: "category",
          icon: "diamond-o",
          activeIcon: "diamond",
          label: "分类"
        },
        {
          name: "cart",
          icon: "cart-o",
          activeIcon: "cart",
          label: "购物车"
        },
        {
          name: "personal",
          icon: "manager-o",
          activeIcon: "manager",
          label: "我的"
        }
      ]
    };
  },
  methods: {
    onChangePage(name) {
      this.$router.push({ name });
    }
  },
  watch: {
    $route(to) {
      this.curtPage = to.name;
    }
  }
};
</script>