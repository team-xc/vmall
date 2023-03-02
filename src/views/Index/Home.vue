<template>
  <div id="home">
    <header>
      <v-logo />
      <v-search />
      <v-icon class="msg-icon" icon="chat-o" />
    </header>

    <main>
      <v-label-bar :labels="labels" @labelClick="$msg.text('暂未开放')" />
      <v-swipe :images="banners" @click="$msg.text('暂未开放')" />
      <v-multi-cell :data="classified_list" />
      <v-time-to-buy :data="time_to_buy_list" ref="time_to_buy" />
      <v-banner :image="require('images/banners/1.gif')" />
      <v-new-product :data="new_product_list" />
      <v-banner :image="require('images/banners/2.gif')" />
      <v-product-list :data="product_list" />
    </main>

  </div>
</template>

<script>
import { getLabels, getBanners, getClassifiedList, getTimeToBuyList, getHoursLater, getNewProductList } from "api/home";
import { getProducts } from "api/product";

export default {
  name: "Home",
  data() {
    return {
      labels: [],
      banners: [],
      classified_list: [],
      time_to_buy_list: [],
      new_product_list: {
        banners: [],
        products: []
      },
      product_list: []
    };
  },
  mounted() {
    // 获取标签
    getLabels().then(data => {
      this.labels = data;
    });

    // 获取抡博图
    getBanners().then(data => {
      this.banners = data;
    });

    // 获取分类列表
    getClassifiedList().then(data => {
      this.classified_list = data;
    });

    // 获取限时购商品列表
    getTimeToBuyList().then(data => {
      this.time_to_buy_list = data;
    });

    // 获取限时购倒计时
    getHoursLater().then(data => {
      this.$refs.time_to_buy.startCountdown(data);
    });

    // 获取新品列表
    getNewProductList().then(data => {
      this.new_product_list = data;
    });

    // 获取产品列表
    getProducts().then(data => {
      this.product_list = data;
    });
  }
};
</script>