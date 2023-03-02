<template>
  <van-icon class="icon" :name="icon" :badge="badge" @click="$emit('click')" />
</template>

<script>
export default {
  name: "Icon",
  props: {
    icon: {
      type: String,
      default: ""
    },
    badge: {
      type: String,
      default: ""
    }
  }
};
</script>