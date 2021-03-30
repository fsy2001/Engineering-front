<template>
<div class="add-book">
  <Nav></Nav>
  <main>
    <div class="container add-book-panel">
      <div class="add-book-title">
        <h1>添加图书</h1>
      </div>
      <div class="add-book-content">
        <Input
            :config="{placeholder: '标题'}"
            v-model="book.title"
            :valid="true"
        />
        <Input
          :config="{placeholder: '作者'}"
          v-model="book.author"
          :valid="true"
        />
        <Input
            :config="{placeholder: '出版社'}"
            v-model="book.press"
            :valid="true"
        />
        <Input
          :config="{placeholder: 'ISBN'}"
          v-model="book.isbn"
          :valid="true"
        />
        <Input
          :config="{placeholder: '描述'}"
          v-model="book.description"
          :valid="true"
        />
        <button class="add-book-submit" @click="submit">提交</button>
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
import Input from "@/components/Input";
export default {
name: "AddBook",
  components: {Input, Foot, Nav},
  data: function () {
    return {
      book: {
        title: "",
        author: "",
        isbn: "",
        description: "",
        press: "",
      }
    }
  },
  methods: {
    submit: function () {
      // TODO: check valid
      fetch('/api/book', {
        method: 'POST',
        body: JSON.stringify(this.book),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
      .then(res => {
        if (res.ok) {
          alert('成功发布新图书')
        } else {
          alert('填入的信息有误')
        }
      })
    }
  },
  mounted() { // check if logged in & have enough permission
    if (!localStorage.getItem('userInfo')) {
      router.push('login')
      return
    }
    const user = JSON.parse(localStorage.userInfo)
    if (user.role !== 'LIBRARIAN') {
      alert('没有权限进行此操作')
      router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">

.add-book-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
}

.add-book-submit {
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