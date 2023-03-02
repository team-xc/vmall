<template>
  <div class="label-bar">
    <div class="label-bar-list">
      <v-label-bar-item v-for="(label,key) in labels" :text="label" :key="key" @labelClick="labelClick(label)" />
    </div>
    <div class="right-block"></div>
    <div class="right-block_transparent"></div>
    <div class="hide-scroll"></div>
  </div>
</template>

<script>
export default {
  name: "LabelBar",
  props: {
    labels: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    labelClick(label) {
      this.$emit("labelClick", label);
    }
  }
};
</script>