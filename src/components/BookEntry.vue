<template>
  <div class="book-entry-container">
    <div class="book-entry-top">
      <img :src="config.imagePath" alt="" class="book-entry-cover">
      <div class="book-entry-meta">
        <div class="book-entry-title">
          {{ config.title }}
        </div>
        <div class="book-entry-author book-entry-info">
          {{ config.author }}
        </div>
        <div class="book-entry-isbn book-entry-info">
          ISBN: {{ config.isbn }}
        </div>
        <div class="book-entry-description book-entry-info">
          内容简介：{{ config.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookEntry",
  props: ['config']
}
</script>

<style lang="scss" scoped>
$entry-width: 600px;
$entry-title-size: 30px;

.book-entry-container {
  max-width: $entry-width;
  display: flex;
  flex-direction: column;
  padding: 10px 0 10px 0;
  margin: 10px 0 10px 0;
  border-bottom: #bebebe solid 1px;
}

.book-entry-top {
  display: flex;
  flex-direction: row;
}

.book-entry-cover {
  margin-right: 10px;
  width: 100px;
  height: 150px;
}

.book-entry-title {
  font-size: $entry-title-size;
  font-weight: bold;
}

.book-entry-info {
  font-size: 15px;
  color: #8f8f8f;
}

.book-entry-description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>