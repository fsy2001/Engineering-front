<template>
  <nav>
    <div class="container nav-list">
      <div class="nav-item">
        <router-link to="/" class="nav-link">首页</router-link>
      </div>

      <div class="nav-item">
        <a>我的图书</a>
      </div>

      <div class="nav-item">
        <router-link to="/search"  class="nav-link">搜索</router-link>
      </div>

      <div class="nav-item">
        <a>帮助</a>
      </div>

      <div class="nav-item">
        <router-link to="/user" class="nav-link">个人中心</router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import 'src/style/global';

$nav-height: 44px;
$nav-font-size: 14px;

nav {
  background-color: $nav-background;
  height: $nav-height;
}

.nav-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}

.nav-item {
  color: $nav-text;
  font-size: $nav-font-size;

  &:hover {
    color: $nav-text-hover;
  }
}

.nav-item-disable {
  color: $nav-text-disable;
}

.nav-link {
  color: $nav-text;
  font-size: $nav-font-size;
  text-decoration: none;

  &:hover {
    color: $nav-text-hover;
  }
}
</style>