<template>
  <div class="register">
    <Nav></Nav>
    <main>
      <div class="register-panel container">
        <h1>注册新用户</h1>
        <Input
            :config="{placeholder: '用户名', errorMsg: '请输入有效的用户名'}"
            v-model="value.username"
            :valid="valid.usernameValid"
            @check="checkUsername"
        />
        <Input
            :config="{password: true, placeholder: '密码', errorMsg: '请输入正确的密码'}"
            v-model="value.password"
            :valid="valid.passwordValid"
            @check="checkPassword"
        />
        <Input
            :config="{password: true, placeholder: '重复密码', errorMsg: '密码输入不一致'}"
            v-model="repeatPassword"
            :valid="valid.repeatValid"
            @check="checkRepeat"
        />
        <Input
            :config="{placeholder: '邮箱', errorMsg: '请输入有效的邮箱'}"
            v-model="value.email"
            :valid="valid.emailValid"
            @check="checkEmail"
        />
        <button class="register-submit" @click="submit">
          提交
        </button>
      </div>
    </main>
    <Foot></Foot>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Foot from "@/components/Foot";
import Input from "@/components/Input";
import router from "@/router";

export default {
  name: "Register",
  components: {Input, Foot, Nav},
  data: function () {
    return {
      value: {
        username: '',
        password: '',
        email: ''
      },
      repeatPassword: '',
      valid: {
        usernameValid: true,
        passwordValid: true,
        repeatValid: true,
        emailValid: true
      }
    }
  },
  methods: {
    checkUsername: function () {
      // TODO: implement this function
    },
    checkPassword: function () {
      // TODO: implement this function
    },
    checkRepeat: function () {
      // TODO: implement this function
    },
    checkEmail: function () {
      // TODO: implement this function
    },
    checkBeforeUpload: function () {
      // TODO: implement this function, notice that empty string is not allowed
    },
    submit: function () {
      // TODO: check
      const userInfo = this.value;
      fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify(userInfo),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
      .then(res => {
        if (res.ok) {
          router.push('/login')
        } else {
          alert('填入的信息有问题，请检查后提交')
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.register-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 380px;
  padding: 20px 0 20px 0;
}

.register-submit {
  color: white;
  background-color: rgb(44, 114, 219);
  font-size: 15px;
  border: none;

  padding: 5px 15px;
  margin-top: 20px;
  border-radius: 7px;

  cursor: pointer;

  &:hover {
    background-color: rgb(54, 124, 222);
  }
}
</style>