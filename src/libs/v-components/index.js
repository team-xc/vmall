import Vue from "vue";

const vComponents = [
  {
    name: "v-logo",
    component: () => import ("components/Logo")
  },
  {
    name: "v-search",
    component: () => import ("components/Search")
  },
  {
    name: "v-label-bar",
    component: () => import ("components/LabelBar/Index")
  },
  {
    name: "v-label-bar-item",
    component: () => import ("components/LabelBar/Item")
  },
  {
    name: "v-swipe",
    component: () => import ("components/Swipe/Index")
  },
  {
    name: "v-swipe-item",
    component: () => import ("components/Swipe/Item")
  },
  {
    name: "v-icon",
    component: () => import ("components/Icon")
  },
  {
    name: "v-multi-cell",
    component: () => import ("components/MultiCell/Index")
  },
  {
    name: "v-multi-cell-item",
    component: () => import ("components/MultiCell/Item")
  },
  {
    name: "v-time-to-buy",
    component: () => import ("components/TimeToBuy/Index")
  },
  {
    name: "v-time-to-buy-item",
    component: () => import ("components/TimeToBuy/Item")
  },
  {
    name: "v-new-product",
    component: () => import ("components/NewProduct/Index")
  },
  {
    name: "v-new-product-item",
    component: () => import ("components/NewProduct/Item")
  },
  {
    name: "v-banner",
    component: () => import ("components/Banner")
  },
  {
    name: "v-product-list",
    component: () => import ("components/ProductList/Index")
  },
  {
    name: "v-product-list-item",
    component: () => import ("components/ProductList/Item")
  },
  {
    name: "v-category-list",
    component: () => import ("components/CategoryList/Index")
  },
  {
    name: "v-category-list-item",
    component: () => import ("components/CategoryList/Item")
  }
];

vComponents.forEach(item => {
  return Vue.component(item.name, item.component);
});