<template>
  <div id="product">

    <main>
      <div class="pro-gallery">
        <div class="top">
          <img :src="require('images/back_icon.png')" @click.stop="$router.go(-1)">
          <van-popover
            v-model="showPopover"
            trigger="click"
            :actions="actions"
            @select="onSelect"
            placement="bottom-end"
          >
            <template #reference>
              <img :src="require('images/menu_icon.png')">
            </template>
          </van-popover>
        </div>
        <v-swipe :images="banners" @change="onChange" @click="swipeClick" />
        <div class="indicator">{{ `${current + 1}/${banners.length}` }}</div>
      </div>

      <van-tabs class="tabs" v-model="active" scrollspy sticky>
        <van-tab title="商品">
          <div>
            <div class="card-wrap pro-meta-area">
              <span class="price">¥{{ price }}</span>
              <span class="title">{{ long_title }}</span>
              <van-cell value="银联、花呗、掌上生活、工行分期支付可享免息" is-link>
                <template #title>
                  <span class="custom-title">优惠</span>
                  <van-tag plain type="danger">分期免息</van-tag>
                </template>
              </van-cell>
              <van-cell value="购买即赠商城积分，积分可抵现" is-link>
                <template #title>
                  <span class="no-title">优惠</span>
                  <van-tag plain type="danger">赠送积分</van-tag>
                </template>
              </van-cell>
              <van-cell class="no-tag" value="花呗/掌上生活分期直购，最高享3期免息" is-link>
                <template #title>
                  <span class="custom-title">免息</span>
                </template>
              </van-cell>
            </div>

            <div class="card-wrap no-padding-tb">
              <van-cell class="no-tag" value="预计2022-01-25前发货" is-link>
                <template #title>
                  <span class="custom-title">发货</span>
                </template>
              </van-cell>
              <van-cell value="已满48元包邮" is-link>
                <template #title>
                  <span class="custom-title">服务</span>
                  <van-tag plain type="danger">包邮</van-tag>
                </template>
              </van-cell>
              <van-cell value="由华为终端提供商品、发货开票及售后服务" is-link>
                <template #title>
                  <span class="no-title">优惠</span>
                  <van-tag plain type="danger">售后</van-tag>
                </template>
              </van-cell>
            </div>
          </div>
        </van-tab>
        <van-tab title="评价">
          <div>
            <div class="card-wrap no-padding-tb">
              <van-cell class="red-value" title="用户评价(2625)" value="99%好评" />
            </div>
          </div>
        </van-tab>
        <van-tab title="参数">
          <div>
            <div class="card-wrap">
              <span class="title">规格参数</span>
              <van-cell title="品牌" value="华为 HUAWEI" />
              <van-cell title="传播名" value="HUAWEI WATCH D" />
              <van-cell title="类别" value="健康手表" />
              <van-cell title="型号" value="MLY-B10" />
              <van-button class="all_parameter" type="primary" round>查看全部参数</van-button>
            </div>
          </div>
        </van-tab>
        <van-tab title="详情">
          <div>
            <div class="card-wrap">
              <van-divider class="product_details_text">图文详情</van-divider>
              <img class="product_details_img" :src="info">
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </main>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" dot @click="$msg.text('暂未开放')" />
      <van-goods-action-icon icon="cart-o" text="购物车" :badge="cart_num" @click="$router.push({name:'cart'})" />
      <van-goods-action-icon icon="shop-o" text="店铺" badge="12" @click="$msg.text('暂未开放')" />
      <van-goods-action-button type="warning" text="加入购物车" @click="add_to_cart" />
      <van-goods-action-button type="danger" text="立即购买" @click="buy" />
    </van-goods-action>

    <van-image-preview v-model="show_preview" :images="banners" :start-position="preview_index" />
  </div>
</template>

<script>
import { getProducts } from "api/product";

export default {
  name: "Product",
  data() {
    return {
      banners: [],
      current: 0,
      preview_index: 0,
      show_preview: false,
      showPopover: false,
      actions: [
        { text: "首页", icon: "shop-o" },
        { text: "搜索", icon: "search" },
        { text: "购物车", icon: "cart-o" },
        { text: "分类", icon: "diamond-o" },
        { text: "我的", icon: "manager-o" }
      ],
      active: 0,
      price: 0,
      long_title: "",
      info: ""
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    swipeClick(index) {
      this.preview_index = index;
      this.show_preview = true;
    },
    onSelect(action) {
      switch (action.text) {
        case "首页":
          this.$router.push({ name: "home" });
          break;
        case "搜索":
          this.$router.push({ name: "search" });
          break;
        case "购物车":
          this.$router.push({ name: "cart" });
          break;
        case "分类":
          this.$router.push({ name: "category" });
          break;
        case "我的":
          this.$router.push({ name: "personal" });
          break;
      }
    },
    add_to_cart() {
      let carts = this.$store.state.carts;
      let flag = false;
      let index = -1;
      let curt_index = -1;

      carts.forEach(item => {
        index++;
        if (item.id === Number(this.$route.params.pid)) {
          flag = true;
          curt_index = index;
        }
      });

      if (flag) {
        carts[curt_index].num++;
      } else {
        carts.push({
          id: Number(this.$route.params.pid),
          num: 1,
          checked: false
        });
      }

      this.$store.dispatch("saveCarts", carts);
      this.$msg.text("已加入购物车");
    },
    buy() {
      let orders = this.$store.state.orders;
      orders.push({
        id: Number(this.$route.params.pid),
        num: 1
      });
      this.$store.dispatch("saveOrders", orders);
      this.$msg.success("购买成功");
    }
  },
  computed: {
    cart_num() {
      let num = 0;
      this.$store.state.carts.forEach(item => {
        num += item.num;
      });
      return num;
    }
  },
  mounted() {
    document.getElementsByTagName("body")[0].style.overflowX = "unset";

    // 获取产品信息
    getProducts().then(data => {
      data.forEach(item => {
        if (item.id === Number(this.$route.params.pid)) {
          this.banners = item.banners;
          this.price = item.price;
          this.long_title = item.long_title;
          this.info = item.info;
        }
      });

      if (this.banners.length === 0) {
        this.$msg.text("没有更多了");
      }
    });
  },
  beforeDestroy() {
    document.getElementsByTagName("body")[0].style.overflowX = "hidden";
  }
};
</script>