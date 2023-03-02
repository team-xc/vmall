<template>
  <div class="banner">
    <img :src="image" @click="$msg.text('暂未开放')">
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    image: {
      type: String,
      default: ""
    }
  }
};
</script>