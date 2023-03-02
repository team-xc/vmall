<template>
  <div class="search" @click="$router.push({name:'search'})">
    <v-icon class="search-icon" icon="search" />
    <span class="search-tip">畅享20e</span>
  </div>
</template>

<script>
export default {
  name: "Search"
};
</script>