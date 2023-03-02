<template>
  <div class="label-bar-item" @click="labelClick(text)">
    <span class="label-bar-text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "LabelBarItem",
  props: {
    text: {
      type: String,
      default: ""
    }
  },
  methods: {
    labelClick(label) {
      this.$emit("labelClick", label);
    }
  }
};
</script>