<template>
  <div class="login">
    <Nav></Nav>
    <main class="login-background">
      <div class="login-top">
        <div class="container login-top-area">
          <div class="login-top-title">
            登录
          </div>

          <div class="login-top-options">
            <router-link class="login-top-option" to="/register">
              注册新用户
            </router-link>
          </div>
        </div>
      </div>
      <div class="container login-panel">
        <h1>复旦大学图书馆</h1>
        <span>请登录以访问系统资源</span>
        <div class="login-input-panel">
          <div class="login-input-entry first">
            <input v-model="username" class="login-input" type="text">
          </div>
          <div class="login-input-entry">
            <input v-model="password" class="login-input" type="password">
            <span class="login-submit" @click="submit">
            确认
          </span>
          </div>
        </div>
        <span class="login-forget">
        忘记密码
      </span>
      </div>
    </main>

    <Foot></Foot>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Foot from "@/components/Foot";
import router from "@/router";

export default {
  name: "Login",
  components: {Foot, Nav},
  data: function () {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    submit: function () {
      if (this.username === '' || this.password === '') {
        alert('请填写完整的用户名和密码')
        return
      }
      fetch('/api/login?' + new URLSearchParams({
        username: this.username,
        password: this.password
      }), {
        method: 'POST'
      })
          .then(response => {
            if (response.ok)
              return response
            throw new Error('用户名或密码错误')
          })
          .then(res => res.json())
          .then(data => {
            const user = data.user
            localStorage.userLogin = true
            localStorage.userInfo = JSON.stringify(user)
            router.push('/')
          })
          .catch(error => {
            alert(error.message)
          })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/style/global";

.login-background {
  background: url("http://placekitten.com/400/500") no-repeat top center;
  background-origin: border-box;
  background-size: cover;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-top {
  background-color: rgba(256, 256, 256, 0.8);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  color: black;

  padding: 10px 0 10px 0;
}

.login-top-title {
  font-weight: bold;
  font-size: 30px;
}

.login-top-option {
  text-decoration: none;
  margin-left: 30px;
  color: black;
}

.login-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px 10px;

  h1 {
    font-size: 50px;
  }

  span {
    font-size: 20px;
  }
}

.login-input-panel {
  border-radius: $input-border-radius;
  border: $input-border;
  font-size: $input-font-size;
  background-color: white;

  margin: 15px 0 80px 0;
}

.login-input-entry {
  height: 45px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 10px;
}

.first {
  border-bottom: $input-border;
}

.login-input {
  outline: none;
  background: none;
  border: none;
  color: $input-text-color;
  font-size: $input-font-size;

  &::placeholder {
    color: $input-placeholder-color;
  }
}

.login-submit {
  color: #0498d4;
  cursor: pointer;
  font-size: $input-font-size;
}

.login-forget {
  font-size: 8px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}
</style>