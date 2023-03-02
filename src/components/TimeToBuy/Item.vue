<template>
  <div class="time-to-buy-item" @click="$msg.text('暂未开放')">
    <img :src="image">
    <span>¥{{ price }}</span>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    price: {
      type: Number,
      default: ""
    },
    image: {
      type: String,
      default: ""
    }
  }
};
</script>