<template>
  <div id="search-result">

    <header>
      <img class="back-icon" :src="require('images/back.png')" @click="$router.push({name:'search'})">
      <div class="search" @click="$router.push({name:'search'})">
        <v-icon class="search-icon" icon="search" />
        <span class="search-tip">{{ $route.params.keyword }}</span>
        <v-icon class="cross-icon" icon="cross" />
      </div>
      <v-icon class="apps-o-icon" icon="apps-o" />
    </header>

    <main>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value3" :options="option3" />
        <van-dropdown-item title="筛选">
          <van-cell center title="包邮">
            <template #right-icon>
              <van-switch v-model="switch1" />
            </template>
          </van-cell>
          <van-cell center title="团购">
            <template #right-icon>
              <van-switch v-model="switch2" />
            </template>
          </van-cell>
        </van-dropdown-item>
      </van-dropdown-menu>

      <v-product-list :data="search_list" :show_load_more="false" />
    </main>
  </div>
</template>

<script>
import { getProducts } from "api/product";

export default {
  name: "searchResult",
  data() {
    return {
      switch1: false,
      switch2: false,
      value1: 0,
      value2: 0,
      value3: 0,
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [
        { text: "默认排序", value: 0 },
        { text: "好评排序", value: 1 },
        { text: "销量排序", value: 2 }
      ],
      option3: [
        { text: "价格升序", value: 0 },
        { text: "价格降序", value: 1 }
      ],
      search_list: []
    };
  },
  mounted() {
    // 获取产品列表
    getProducts().then(data => {
      data.forEach(item => {
        if (item.title.match(this.$route.params.keyword) || item.long_title.match(this.$route.params.keyword)) {
          this.search_list.push(item);
        }
      });

      if (this.search_list.length === 0) {
        this.$msg.text("没有更多了");
      }
    });
  }
};
</script>