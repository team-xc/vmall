<template>
  <div id="category">
    <header>
      <v-search />
      <v-icon class="msg-icon" icon="chat-o" />
    </header>

    <v-category-list :data="category_list" />
  </div>
</template>

<script>
import { getCategory } from "api/category";

export default {
  name: "Category",
  data() {
    return {
      category_list: []
    };
  },
  mounted() {
    // 获取分类列表
    getCategory().then(data => {
      this.category_list = data;
    });
  }
};
</script>