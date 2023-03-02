<template>
  <div class="multi-cell-item" @click="$msg.text('暂未开放')">
    <van-grid-item>
      <img :src="image">
      <span>{{ text }}</span>
    </van-grid-item>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    text: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    }
  }
};
</script>