<template>
  <div id="order">
    <header>
      <div class="left">
        <img class="back-icon" :src="require('images/back.png')" @click="$router.go(-1)">
        <h1>订单中心</h1>
      </div>
      <div class="right" @click="$router.push({name:'cart'})">
        <v-icon class="cart-icon" icon="cart-o" />
      </div>
    </header>

    <van-tabs class="tabs" v-model="active" :duration="0.75" animated>
      <van-tab title="全部">

        <div class="no_orderlist" v-if="orders_list.length === 0">
          <van-empty description="您没有商品订单" :image="require('images/orderlist_empty.png')" />
        </div>

        <div class="orders_list" v-else>
          <div class="orders_item" v-for="(item,key) in orders_list" :key="key">

            <div class="top">
              <div class="shop-name">
                <img :src="require('images/supplier_hw.png')">
                <span>华为终端</span>
              </div>
              <span>交易完成</span>
            </div>

            <div class="middle" @click="$router.push({name:'product',params:{pid:item.id}})">
              <img :src="item.image">
              <div class="title">
                <span>{{ item.long_title }}</span>
                <span>{{ item.title }}</span>
              </div>
              <div>
                <span>¥{{ item.price }}</span>
                <span>x{{ item.num }}</span>
              </div>
            </div>

            <div class="bottom">
              <span class="order-number">订单编号：<span>11631677598</span></span>
              <span class="order-pay-info">共{{ item.num }}件商品，实付：<span>¥{{ item.num * item.price }}</span></span>
              <van-button type="primary">已完成</van-button>
            </div>
          </div>
        </div>

        <div class="guess_like">
          <span class="title">猜你喜欢</span>
          <v-product-list :data="product_list" />
        </div>

      </van-tab>
      <van-tab title="待付款">

        <div class="no_orderlist">
          <van-empty description="您没有待付款订单" :image="require('images/orderlist_empty.png')" />
        </div>

        <div class="guess_like">
          <span class="title">猜你喜欢</span>
          <v-product-list :data="product_list" />
        </div>

      </van-tab>
      <van-tab title="待收货">

        <div class="no_orderlist">
          <van-empty description="您没有待收货订单" :image="require('images/orderlist_empty.png')" />
        </div>

        <div class="guess_like">
          <span class="title">猜你喜欢</span>
          <v-product-list :data="product_list" />
        </div>

      </van-tab>
      <van-tab title="已完成">

        <div class="no_orderlist" v-if="orders_list.length === 0">
          <van-empty description="您没有已完成订单" :image="require('images/orderlist_empty.png')" />
        </div>

        <div class="orders_list" v-else>
          <div class="orders_item" v-for="(item,key) in orders_list" :key="key">

            <div class="top">
              <div class="shop-name">
                <img :src="require('images/supplier_hw.png')">
                <span>华为终端</span>
              </div>
              <span>交易完成</span>
            </div>

            <div class="middle" @click="$router.push({name:'product',params:{pid:item.id}})">
              <img :src="item.image">
              <div class="title">
                <span>{{ item.long_title }}</span>
                <span>{{ item.title }}</span>
              </div>
              <div>
                <span>¥{{ item.price }}</span>
                <span>x{{ item.num }}</span>
              </div>
            </div>

            <div class="bottom">
              <span class="order-number">订单编号：<span>11631677598</span></span>
              <span class="order-pay-info">共{{ item.num }}件商品，实付：<span>¥{{ item.num * item.price }}</span></span>
              <van-button type="primary">已完成</van-button>
            </div>
          </div>
        </div>

        <div class="guess_like">
          <span class="title">猜你喜欢</span>
          <v-product-list :data="product_list" />
        </div>

      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getProducts } from "api/product";

export default {
  name: "Order",
  data() {
    return {
      active: 0,
      product_list: [],
      orders_list: []
    };
  },
  mounted() {
    document.getElementById("app").style.overflowY = "hidden";

    // 获取产品列表
    getProducts().then(data => {
      this.product_list = data;
    });

    let orders_list = [];
    getProducts().then(data => {
      data.forEach(product => {
        this.$store.state.orders.forEach(item => {
          if (item.id === product.id) {
            orders_list.push({
              id: product.id,
              image: product.image,
              title: product.title,
              long_title: product.long_title,
              price: product.price,
              num: item.num
            });
          }
        });
      });
      this.orders_list = orders_list;
    });
  },
  beforeDestroy() {
    document.getElementById("app").style.overflowY = "unset";
  }
};
</script>