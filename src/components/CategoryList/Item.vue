<template>
  <div class="category-list-item">
    <v-swipe :images="banners" @click="$msg.text('暂未开放')" />

    <div class="list-wrap" v-for="(lists,key) in list" :key="key">
      <span class="list-title">{{ lists.name }}</span>
      <div class="lists">
        <div class="item" v-for="(item,key) in lists.items" :key="key" @click="$msg.text('暂未开放')">
          <img :src="item.image">
          <span>{{ item.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    label: {
      type: String,
      default: ""
    },
    banners: {
      type: Array,
      default: () => []
    },
    list: {
      type: Array,
      default: () => []
    }
  }
};
</script>
