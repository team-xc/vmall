<template>
  <div id="personal">

    <div class="header" :style="{ opacity: header_opacity }">
      <div class="left">
        <van-image class="avatar" round :src="require('images/avatar.png')" />
        <span @click="goLogin">{{ $store.state.username !== "" ? $store.state.username : "登录/注册" }}</span>
        <img :src="require('images/medal_gold.png')">
      </div>
      <div class="right">
        <v-icon class="setting-icon" icon="setting-o" @click="$msg.text('暂未开放')" />
        <v-icon class="msg-icon" icon="chat-o" badge="8" @click="$msg.text('暂未开放')" />
      </div>
    </div>

    <header>
      <div class="top">
        <div class="left">

        </div>
        <div class="right">
          <v-icon class="setting-icon" icon="setting-o" @click="$msg.text('暂未开放')" />
          <v-icon class="msg-icon" icon="chat-o" badge="8" @click="$msg.text('暂未开放')" />
        </div>
      </div>

      <div class="middle">
        <div class="left">
          <van-image round :src="require('images/avatar.png')" />
        </div>
        <div class="middle">
          <div class="top">
            <span @click="goLogin">{{ $store.state.username !== "" ? $store.state.username : "登录/注册" }}</span>
            <img :src="require('images/medal_gold.png')">
          </div>
          <div class="footer" v-if="$store.state.username !== ''">
            <div class="label" @click="$msg.text('暂未开放')">
              <div>V0会员</div>
            </div>
            <div class="label" @click="$msg.text('暂未开放')">
              <div>我的权益</div>
              <v-icon class="arrow-icon" icon="arrow" />
            </div>
            <div class="label" @click="$msg.text('暂未开放')">
              <div>收货地址</div>
              <v-icon class="arrow-icon" icon="arrow" />
            </div>
          </div>
        </div>
        <div class="right">
          <img :src="require('images/sign_no.png')" @click="$msg.text('暂未开放')">
        </div>
      </div>

      <div class="footer">
        <div class="my_assets" @click="$msg.text('暂未开放')">
          <div class="item">
            <div class="left">
              <span>积分</span>
              <span>0</span>
            </div>
            <div class="right">
              <img :src="require('images/integral.png')">
            </div>
          </div>

          <div class="line"></div>

          <div class="item">
            <div class="left">
              <span>优惠券</span>
              <span>0</span>
            </div>
            <div class="right">
              <img :src="require('images/coupon.png')">
            </div>
          </div>

          <div class="line"></div>

          <div class="item">
            <div class="left">
              <span>代金券</span>
              <span>0.00</span>
            </div>
            <div class="right">
              <img :src="require('images/voucher.png')">
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <div class="my_order">
        <div class="header">
          <span>我的订单<span>({{ orders_num }})</span></span>
          <div class="right" @click="$router.push({name:'order'})">
            <span>全部订单</span>
            <v-icon class="arrow-icon" icon="arrow" />
          </div>
        </div>
        <div class="list">
          <div class="item" @click="$router.push({name:'order'})">
            <v-icon class="item-icon" icon="pending-payment" />
            <span>待付款</span>
          </div>
          <div class="item" @click="$router.push({name:'order'})">
            <v-icon class="item-icon" icon="send-gift-o" />
            <span>待收货</span>
          </div>
          <div class="item" @click="$router.push({name:'order'})">
            <v-icon class="item-icon" icon="chat-o" />
            <span>待评价</span>
          </div>
          <div class="item" @click="$msg.text('暂未开放')">
            <v-icon class="item-icon" icon="after-sale" />
            <span>退换退款</span>
          </div>
          <div class="item" @click="$msg.text('暂未开放')">
            <v-icon class="item-icon" icon="replay" />
            <span>回收单</span>
          </div>
        </div>
      </div>

      <v-multi-cell class="other_feature" :data="other_feature_list" :column="4" />

      <div class="ad">
        <img :src="require('images/ad/1.png')" @click="$msg.text('暂未开放')">
        <img :src="require('images/ad/2.png')" @click="$msg.text('暂未开放')">
      </div>

      <v-product-list :data="product_list" />
    </main>

  </div>
</template>

<script>
import { getProducts } from "api/product";
import { Dialog } from "vant";

export default {
  name: "Personal",
  data() {
    return {
      other_feature_list: [
        {
          text: "会员频道",
          image: require("images/other_feature/1.png")
        },
        {
          text: "积分商城",
          image: require("images/other_feature/2.png")
        },
        {
          text: "福利中心",
          image: require("images/other_feature/3.png")
        },
        {
          text: "拼团低价",
          image: require("images/other_feature/4.png")
        },
        {
          text: "众测",
          image: require("images/other_feature/5.png")
        },
        {
          text: "教育商店",
          image: require("images/other_feature/6.png")
        },
        {
          text: "企业购",
          image: require("images/other_feature/7.png")
        },
        {
          text: "邀请有礼",
          image: require("images/other_feature/8.png")
        }
      ],
      product_list: [],
      header_opacity: 0
    };
  },
  methods: {
    handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop) {
        this.header_opacity = scrollTop / 60;
      } else if (scrollTop === 0) {
        this.header_opacity = 0;
      }
    },
    goLogin() {
      if (this.$store.state.username === "") {
        this.$router.push({ name: "login" });
      } else {
        Dialog.confirm({
          title: "退出登录",
          message: "是否退出当前账号：" + this.$store.state.username
        })
          .then(() => {
            this.$store.dispatch("saveUsername", "");
            this.$store.dispatch("saveCarts", []);
            this.$store.dispatch("saveOrders", []);
          }).catch(() => {
        });
      }
    }
  },
  computed: {
    orders_num() {
      return this.$store.state.orders.length;
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll, true);
  },
  mounted() {
    // 监听页面滚动
    window.addEventListener("scroll", this.handleScroll, true);

    // 获取产品列表
    getProducts().then(data => {
      this.product_list = data;
    });
  }
};
</script>