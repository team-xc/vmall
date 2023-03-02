<template>
  <div id="search">

    <header>
      <img class="back-icon" :src="require('images/back.png')" @click="$router.push({name:'home'})">
      <div class="search">
        <v-icon class="search-icon" icon="search" />
        <input type="text" class="search-tip" placeholder="畅享20e" v-model="keyword" @keydown.enter="goSearch(keyword)">
        <v-icon class="cross-icon" icon="cross" @click="keyword = ''" v-if="keyword !== ''" />
      </div>
      <span class="search-btn" @click="goSearch(keyword)">搜索</span>
    </header>

    <main>
      <span class="label-title">最近搜索</span>
      <v-label-bar :labels="recent_search_labels" @labelClick="goSearch" />

      <span class="label-title search-find">搜索发现</span>
      <v-label-bar :labels="search_find_labels" @labelClick="goSearch" />
    </main>

  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      keyword: "",
      recent_search_labels: ["HUAWEI WATCH D", "HUAWEI"],
      search_find_labels: ["P50", "手机", "打印机", "剃须刀", "扫地机器人", "MateBook 14", "P40"]
    };
  },
  methods: {
    goSearch(keyword) {
      this.$router.push({
        name: "searchResult",
        params: { keyword: keyword || "畅享20e" }
      });
    }
  }
};
</script>