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
              v-model="book.title"
              :config="{placeholder: '标题'}"
              :valid="true"
          />
          <Input
              v-model="book.author"
              :config="{placeholder: '作者'}"
              :valid="true"
          />
          <Input
              v-model="book.isbn"
              :config="{placeholder: 'ISBN'}"
              :valid="true"
          />
          <Input
              v-model="book.date"
              :config="{placeholder: '日期'}"
              :valid="true"
          />
          <Input
              v-model="book.press"
              :config="{placeholder: '出版社'}"
              :valid="true"
          />
          <Input
              v-model="book.description"
              :config="{placeholder: '描述'}"
              :valid="true"
          />
          <input type="file" @change="setImage"/>
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
        date: ""
      },
      file: null
    }
  },
  methods: {
    setImage(event) {
      event.preventDefault()
      console.log(this.file)
      this.file = event.target.files[0]
    },
    submit: function () {
      // TODO: check valid
      const form = new FormData()
      form.append('file', this.file)
      form.append('book',
          new Blob([JSON.stringify(this.book)], {type: 'application/json'}))

      fetch('/api/book', {
        method: 'POST',
        body: form,
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

<style lang="scss" scoped>

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