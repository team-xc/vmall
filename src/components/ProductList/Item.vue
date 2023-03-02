<template>
  <div class="product-list-item" @click="$router.push({name:'product',params:{pid:id.toString()}})">
    <img class="image" :src="image">
    <div class="content-wrap">
        <span class="title">
          <div class="labels" v-if="labels.length !== 0">
            <div class="label-wrap" v-for="(label,key) in labels" :key="key">
              <span class="label">{{ label }}</span>
            </div>
        </div>{{ title }}</span>
      <span class="remarks">{{ remarks }}</span>
      <span class="price"><span>￥</span>{{ price }}</span>
      <div class="tags" v-if="tags.length !== 0">
        <div class="tag-wrap" v-for="(tag,key) in tags" :key="key">
          <span class="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Item",
  props: {
    id: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ""
    },
    price: {
      type: Number,
      default: 0
    },
    remarks: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    },
    labels: {
      type: Array,
      default: () => []
    },
    tags: {
      type: Array,
      default: () => []
    }
  }
};
</script>