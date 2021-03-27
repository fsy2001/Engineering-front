<template>
  <div class="home">
    <Nav></Nav>
    <main class="out">
      <div class="container">
      </div>
    </main>
    <Foot></Foot>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Foot from "@/components/Foot";

export default {
  name: 'Home',
  components: {Foot, Nav},

}
</script>

<style scoped lang="scss">
@import "src/style/global";

</style>
