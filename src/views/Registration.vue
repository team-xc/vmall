<template>
  <div id="registration">
    <header>
      <img :src="require('images/logo.png')">
    </header>

    <main>
      <div class="top">
        <span class="title">华为帐号</span>
        <span class="desc">注册华为帐号以使用云空间、华为应用及更多服务</span>
      </div>

      <van-form class="register-form" @submit="onSubmit">
        <van-field name="username" v-model="username" placeholder="设置帐号名" autocomplete="new-password" clearable />
        <van-field name="password" v-model="password" :type="is_show_password ? 'text' : 'password'" placeholder="设置密码"
                   :right-icon="is_show_password ? 'eye-o' : 'closed-eye'"
                   @click-right-icon="is_show_password = !is_show_password" autocomplete="new-password" />

        <div class="buttons">
          <div class="btn-wrap">
            <van-button :class="username !== '' && password !== '' ? '' : 'register-btn-dis'" round block type="info"
                        native-type="submit" :disabled="username === '' || password === ''">注册
            </van-button>
            <van-button class="login-btn" round block type="info" native-type="button"
                        @click="$router.push({name:'login'})">返回登录
            </van-button>
          </div>
        </div>
      </van-form>
    </main>
  </div>
</template>

<script>
export default {
  name: "Registration",
  data() {
    return {
      username: "",
      password: "",
      is_show_password: false
    };
  },
  methods: {
    onSubmit(values) {
      if (values.username.length < 6) {
        this.$msg.fail("帐号名不能少于6位");
        return;
      }

      if (values.password.length < 8) {
        this.$msg.fail("密码不能少于8位");
        return;
      }

      let users = this.$store.state.users;
      let flag = false;
      users.forEach(user => {
        if (user.username === values.username) {
          flag = true;
        }
      });

      if (flag) {
        this.$msg.fail("帐号名已存在");
        return;
      }

      users.push({
        username: values.username,
        password: values.password
      });
      this.$store.dispatch("saveUsers", users);
      this.$msg.success("注册成功");
      this.$router.push({ name: "login" });
    }
  }
};
</script>