<template>
  <div id="cart">
    <header>
      <h1 class="title">购物车</h1>
    </header>

    <main :class="cart_num !== 0 ? 'have_data' : ''">

      <div class="no_products" v-if="cart_num === 0">
        <van-empty description="您的购物车没有商品" :image="require('images/cart_empty.svg')">
          <van-button round type="danger" class="bottom-button" @click="$router.push({name:'home'})">去购物</van-button>
        </van-empty>
      </div>

      <div class="cart_list" v-else>

        <van-swipe-cell v-for="(item,key) in cart_list" :key="key" @open="menuOpen(item.id)"
                        @close="menuClose(item.id)">
          <div class="cart_item"
               :class="menu_list[item.id] === undefined ? 'no-radius' : !menu_list[item.id] ? 'no-radius' : ''">
            <div class="left">
              <van-checkbox v-model="item.checked" shape="square" @click="checked(item.id)" />
            </div>
            <div class="right">
              <div class="top">
                <div class="left" @click="$router.push({name:'product',params:{pid:item.id}})">
                  <img :src="item.image">
                </div>
                <div class="right">
                  <div class="top" @click="$router.push({name:'product',params:{pid:item.id}})">
                    <span>{{ item.long_title }}</span>
                  </div>
                  <div class="bottom">
                  <span @click="$router.push({name:'product',params:{pid:item.id}})">¥<span>{{ item.price
                    }}</span></span>
                    <div class="num_wrap">
                      <van-stepper button-size="20" v-model="item.num" @change="changeNum(item.id,item.num)" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="bottom">
                <div>
                  <span>【服务】</span>
                  <van-tag color="#ffe1e1" text-color="#ad0000">无忧服务</van-tag>
                  <van-tag color="#ffe1e1" text-color="#ad0000">碎屏宝</van-tag>
                  <van-tag color="#ffe1e1" text-color="#ad0000">延长宝</van-tag>
                </div>
                <v-icon class="ellipsis-icon" icon="ellipsis" />
              </div>
            </div>
          </div>
          <template #right>
            <van-button square text="删除" type="danger" class="delete-button" @click="deleteProducts(item.id)" />
          </template>
        </van-swipe-cell>

      </div>

      <div class="guess_like">
        <span class="title">猜你喜欢</span>
        <v-product-list :data="product_list" />
      </div>

      <van-submit-bar :price="price" button-text="提交订单" @submit="onSubmit" v-if="cart_num !== 0">
        <van-checkbox v-model="all_checked" @click="allChecked">全选</van-checkbox>
      </van-submit-bar>

    </main>
  </div>
</template>

<script>
import { getProducts } from "api/product";

export default {
  name: "Cart",
  data() {
    return {
      product_list: [],
      p_list: [],
      all_checked: false,
      menu_list: {}
    };
  },
  computed: {
    cart_num() {
      let num = 0;
      this.$store.state.carts.forEach(item => {
        num += item.num;
      });
      return num;
    },
    cart_list() {
      let checked_num = 0;
      let list = [];

      getProducts().then(data => {
        this.p_list = data;
      });

      this.$store.state.carts.forEach(item => {
        this.p_list.forEach(product => {
          if (item.id === product.id) {
            product["num"] = item.num;
            product["checked"] = item.checked;
            list.push(product);

            if (item.checked) {
              checked_num++;
            }
          }
        });
      });

      this.all_checked = list.length === checked_num;

      return list;
    },
    price() {
      let price = 0;

      this.$store.state.carts.forEach(item => {
        this.p_list.forEach(product => {
          if (item.id === product.id) {
            if (item.checked) {
              price += (item.num * product.price);
            }
          }
        });
      });

      return price * 100;
    }
  },
  methods: {
    onSubmit() {
      let orders = this.$store.state.orders;
      let ids = [];
      this.$store.state.carts.forEach(item => {
        if (item.checked) {
          orders.push({
            id: item.id,
            num: item.num
          });
          ids.push(item.id);
        }
      });
      this.$store.dispatch("saveOrders", orders);

      for (let id of ids) {
        this.deleteProducts(Number(id));
      }

      this.$msg.success("购买成功");
    },
    deleteProducts(id) {
      let carts = this.$store.state.carts;
      let index = -1;
      let new_carts = [];
      carts.forEach(() => {
        index++;
        if (carts[index].id !== id) {
          new_carts.push(carts[index]);
        }
      });
      this.$store.dispatch("saveCarts", new_carts);
    },
    menuClose(id) {
      this.menu_list[id] = false;
    },
    menuOpen(id) {
      this.menu_list[id] = true;
    },
    checked(id) {
      let carts = this.$store.state.carts;
      let index = -1;
      carts.forEach(item => {
        index++;
        if (item.id === id) {
          carts[index].checked = !carts[index].checked;
        }
      });

      this.$store.dispatch("saveCarts", carts);
    },
    allChecked() {
      const checked = this.all_checked;
      let carts = this.$store.state.carts;
      let index = -1;
      carts.forEach(() => {
        index++;
        carts[index].checked = checked;
      });
      this.$store.dispatch("saveCarts", carts);
    },
    changeNum(id, detail) {
      let carts = this.$store.state.carts;
      let index = -1;
      carts.forEach(item => {
        index++;
        if (item.id === id) {
          carts[index].num = detail;
        }
      });

      this.$store.dispatch("saveCarts", carts);
    }
  },
  mounted() {
    // 获取产品列表
    getProducts().then(data => {
      this.product_list = data;
    });
  }
};
</script>