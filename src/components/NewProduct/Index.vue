<template>
  <div class="new-product">
    <div class="top">
      <img :src="require(`images/new_product/top.png`)">
    </div>

    <div class="middle">
      <div class="left">
        <v-swipe :images="data.banners" @click="$msg.text('暂未开放')"/>
      </div>
      <div class="right">
        <v-new-product-item :image="data.products[0]" />
        <v-new-product-item :image="data.products[1]" />
      </div>
    </div>

    <div class="bottom">
      <v-new-product-item v-for="(item,key) in data.products.slice(2,data.products.length)" :key="key" :image="item" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  props: {
    data: {
      type: Object,
      default: () => ({
        banners: [],
        products: []
      })
    }
  }
};
</script>