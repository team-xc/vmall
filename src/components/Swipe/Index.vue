<template>
  <van-swipe class="swipe" :autoplay="3000" indicator-color="white" @change="onChange">
    <v-swipe-item v-for="(image,key) in images" :key="key" :image="image" @click="$emit('click',key)" />
  </van-swipe>
</template>

<script>
export default {
  name: "Index",
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    onChange(index) {
      this.$emit("change", index);
    }
  }
};
</script>