<template>
  <div class="category-list">
    <van-tree-select :items="items" :main-active-index.sync="active">
      <template #content>
        <v-category-list-item v-for="(item,key) in data" :key="key" v-bind="item" v-if="active === key" />
      </template>
    </van-tree-select>

    <div class="hide-scroll"></div>
    <div class="hide-scroll_2"></div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      active: 0
    };
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    items() {
      const items = [];
      this.data.forEach(item => {
        items.push({ text: item.label });
      });
      return items;
    }
  }
};
</script>
