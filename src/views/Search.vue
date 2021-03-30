<template>
  <div class="search">
    <Nav></Nav>
    <main class="search-background">
      <div class="container search-panel">
        <div class="search-area">
          <div class="search-title">
            <h1>馆藏资源检索</h1>
          </div>
          <Input
              :config="{ placeholder: '输入图书标题',
                      errorMsg: '',
                      }"
              :valid="true"
              v-model="queryString">
          <span class="search-action"
                @click="searchBook">
            搜索
          </span>
          </Input>
          <div class="search-options">
            高级搜索
          </div>
        </div>
      </div>
    </main>
    <main>
      <div class="container search-result-panel">
        <div class="search-result-title">
          搜索结果
        </div>
        <div class="search-result-alert" v-if="searchResults.length === 0">
          没有匹配的图书。
        </div>
        <div v-else>
          <BookEntry
              v-for="(item, index) in searchResults"
              :key="index"
              :config="item">
          </BookEntry>
        </div>
      </div>
    </main>
    <Foot></Foot>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Foot from "@/components/Foot";
import Input from "@/components/Input";
import BookEntry from "@/components/BookEntry";

export default {
  name: "Search",
  components: {BookEntry, Input, Foot, Nav},
  data: function () {

    return {
      advanced: false,
      queryString: '',
      searchResults: []
    }
  },
  mounted() {
    fetch('/api/book/getAll')
    .then(res => {
      if (res.ok)
        return res
      alert('网络错误')
      throw new Error()
    })
    .then(res => res.json())
    .then(data => {
      this.searchResults = data
    })
  },
  methods: {
    searchBook: function () {
      if (this.queryString === '') {
        alert('请输入图书标题以查找')
        return
      }
      fetch('/api/book/search?' + new URLSearchParams({
        title: this.queryString
      }))
          .then(response => {
            if (response.ok)
              return response
            const error = new Error(response.statusText)
            error.response = response
            throw error
          })
          .then(res => res.json())
          .then(data => {
            this.searchResults = data
          })
    }
  }
}
</script>

<style scoped lang="scss">
.search-background {
  background: url("http://placekitten.com/400/500") no-repeat top center;
  background-origin: border-box;
  background-size: cover;
}

.search-panel {
  display: flex;
  justify-content: center;
  color: white;
}

.search-title {
  font-size: 20px;
  font-weight: bold;
}

.search-area {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.search-action {
  color: #0498d4;
  cursor: pointer;
}

.search-options {
  margin: 10px 0 30px 0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}

.search-result-panel {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  min-height: 500px;
  padding: 40px 0 40px 0;
}

.search-result-title {
  font-size: 45px;
  font-weight: bold;
}

.search-result-alert {
  font-size: 30px;
  color: #8f8f8f;
}
</style>