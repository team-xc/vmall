<template>
  <div class="multi-cell">
    <van-grid :column-num="column" :border="false">
      <v-multi-cell-item v-for="(item,key) in data" :text="item.text" :image="item.image" :key="key" />
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "Index",
  props: {
    column: {
      type: Number,
      default: 5
    },
    data: {
      type: Array,
      default: () => []
    }
  }
};
</script>