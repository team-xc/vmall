<template>
  <van-swipe-item class="swipe-item" @click="$emit('click')">
    <img :src="image">
  </van-swipe-item>
</template>

<script>
export default {
  name: "Item",
  props: {
    image: {
      type: String,
      default: ""
    }
  }
};
</script>