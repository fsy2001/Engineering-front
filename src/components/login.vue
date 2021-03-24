<template>
  <div id="base_login">
  <form class="login_container"> `
    <h3 class="login_title">Login</h3>
    <div>
      <template v-if="loginType === 'username'">
        <input type="text" placeholder="Enter your username" key="un">
      </template>
      <template v-else>
        <input type="email" placeholder="Enter your email address" key="ea">
      </template>
    </div>
    <input type="password" placeholder="Enter your password">
    <div>
      <input type="checkbox">
      <label>remember it</label>
      <a href=" ">get back password</a>
    </div>
    <div style="width: 100%">
      <button style="width: 30%;background: #afb4db;border: none" @click="login">login</button>
      <button style="width: 30%;background: #afb4db;border: none" @click="changeLoginType">by email</button>
      <router-link to="register">
        <button style="width: 30%;background: #afb4db;border: none">register</button>
      </router-link>
    </div>
  </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  el: '#base_login',
  data () {
    return {
      loginType: 'username'
    }
  },
  methods: {
    changeLoginType: function () {
      return {
        loginType: this.loginType === 'username' ? 'email' : 'username'
      }
    },
    login: function () {
    }
  }
}
</script>

<style scoped>
.login_container{
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
</style>
