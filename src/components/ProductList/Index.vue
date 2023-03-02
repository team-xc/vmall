<template>
  <div class="product-list-wrap">
    <van-list v-model="loading" @load="loadMore" class="product-list" :immediate-check="false">
      <v-product-list-item v-for="(item,key) in data" :key="key" v-bind="item" />
    </van-list>
  </div>
</template>

<script>
export default {
  name: "Index",
  props: {
    data: {
      type: Array,
      default: () => []
    },
    show_load_more: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    loadMore() {
      if (this.show_load_more) {
        setTimeout(() => {
          let temp = [];
          this.data.forEach(item => {
            temp.push(item);
          });
          this.data.push(...temp);
          this.loading = false;
        }, 800);
      } else {
        this.loading = false;
      }
    }
  }
};
</script>