<template>
  <div class="new-product-item">
    <img :src="image" @click="$msg.text('暂未开放')">
  </div>
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