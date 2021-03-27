<template>
  <footer>
    <div class="container foot-content">
      <div class="foot-description foot-section">
      <span class="foot-contacts">
        联系我们：致电 4008-123-123。地址：上海市杨浦区邯郸路。
      </span>
      </div>

      <div class="foot-other">
      <span class="foor-copyright foot-section">
        版权所有 © 2021 复旦大学 保留所有权利。
      </span>
      </div>
    </div>
  </footer>
</template>


<style scoped lang="scss">
@import "src/style/global";

$footer-font-size: 12px;

footer {
  background-color: $footer-background;
  padding: 10px 0 20px 0;
}

.foot-content {
  font-size: $footer-font-size;
  color: $footer-text;
  flex-direction: column;
  align-items: flex-start;
}

.foot-section {
  padding: 3px 0;
}
</style>