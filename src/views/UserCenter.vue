<template>
<div class="user">
  <Nav></Nav>
  <main>
    <div class="container user-main">
      <div class="user-title">
        <h1>个人中心</h1>
      </div>
      <div class="user-subtitle">
        <h2>基本信息</h2>
      </div>
      <div class="user-content">
        <p class="user-content-entry">
          <span class="user-content-name">
            用户名：
          </span>
          <span class="user-content-val">
            {{ user.username }}
          </span>
        </p>
        <p class="user-content-entry">
          <span class="user-content-name">
            邮箱：
          </span>
          <span class="user-content-val">
            {{ user.email }}
          </span>
        </p>
        <p class="user-content-entry">
          <span class="user-content-name">
            权限：
          </span>
          <span class="user-content-val">
            {{ getRoleText() }}
          </span>
        </p>
      </div>

      <button @click="logout"}>登出</button>

      <div class="user-subtitle" v-if="user.role === 'LIBRARIAN'">
        <h2>管理功能</h2>
      </div>
      <div class="user-content" v-if="user.role === 'LIBRARIAN'">
        <router-link
            to="/manage/add"
            class="user-content-entry user-content-link">
          添加图书
        </router-link>
      </div>


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
name: "UserCenter",
  components: {Foot, Nav},
  data: function () {
    return {
      user: null
    }
  },
  methods: {
    getRoleText: function () { // convert role code to chinese
      if (this.user.role === 'STUDENT')
        return '学生'
      else if (this.user.role === 'TEACHER')
        return '教师'
      else if (this.user.role === 'LIBRARIAN')
        return '管理员'
      else return '不确定'
    },
    logout: function () {
      fetch('/logout', {
        method: 'POST'
      })
      localStorage.removeItem('userLogin')
      localStorage.removeItem('userInfo')
      router.push('/home')
    }
  },
  mounted() { // load user info at the beginning
    if (!localStorage.getItem('userInfo')) {
      router.push('login')
      return
    }
    this.user = JSON.parse(localStorage.userInfo)
  },
}
</script>

<style scoped lang="scss">
@import "src/style/global";

main {
  padding-bottom: 20px;
}

.user-main {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.user-title {
  font-size: 20px;
}

.user-subtitle {
  font-size: 15px;
  width: 60%;
  padding-bottom: 4px;
  border-bottom: $input-border;

  h2 {
    margin: 0;
  }
}

.user-subtitle {
  margin-bottom: 5px;
}

.user-content-entry {
  margin: 5px 0;
}

.user-content-link {
  color: #0498d4;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

</style>