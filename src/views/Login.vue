<template>
  <div id="login">
    <header>
      <img :src="require('images/logo.png')">
    </header>

    <main>
      <div class="top">
        <span class="title">华为帐号</span>
        <span class="desc">登录华为帐号以使用云空间、华为应用及更多服务</span>
      </div>

      <van-form class="login-form" @submit="onSubmit">
        <van-field name="username" v-model="username" placeholder="手机号/邮件地址/帐号名" autocomplete="new-password"
                   clearable />
        <van-field name="password" v-model="password" :type="is_show_password ? 'text' : 'password'" placeholder="密码"
                   :right-icon="is_show_password ? 'eye-o' : 'closed-eye'"
                   @click-right-icon="is_show_password = !is_show_password" autocomplete="new-password" />

        <div class="buttons">
          <div class="often-options">
            <span>短信验证码登录</span>
            <span>忘记密码</span>
          </div>
          <div class="btn-wrap">
            <van-button :class="username !== '' && password !== '' ? '' : 'login-btn-dis'" round block type="info"
                        native-type="submit" :disabled="username === '' || password === ''">登录
            </van-button>
            <van-button class="reg-btn" round block type="info" @click="$router.push({name:'registration'})"
                        native-type="button">注册帐号
            </van-button>
          </div>
        </div>
      </van-form>

      <div class="often-login">
        <span>其他方式登录</span>
        <img :src="require('images/wap_qq.png')">
        <div class="often-link">
          <span>遇到问题</span>
          <div class="line"></div>
          <span>隐私声明</span>
        </div>
      </div>

    </main>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      is_show_password: false
    };
  },
  methods: {
    onSubmit(values) {
      let users = this.$store.state.users;
      let flag = false;
      users.forEach(user => {
        if (user.username === values.username && user.password === values.password) {
          flag = true;
        }
      });

      if (flag) {
        this.$store.dispatch("saveUsername", values.username);
        this.$router.push({ name: "home" });
      } else {
        this.$msg.fail("账号或密码错误");
      }
    }
  }
};
</script>