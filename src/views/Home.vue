<template>
  <div class="home">
    <Nav></Nav>
    <main class="home-background">
      <div class="home-top">
        <div class="container home-top-area">
          <div class="home-top-title">
            复旦大学图书馆
          </div>
          <div class="home-top-options">
            <router-link class="home-top-option" to="/login">登录</router-link>
            <router-link class="home-top-option" to="/register">注册新用户</router-link>
          </div>
        </div>
      </div>
      <div class="container home-banner">
        <div class="home-title">
          <h1>欢迎访问复旦大学图书馆</h1>
        </div>
      </div>
    </main>
    <main>
      <div class="container">
        <div class="home-introduction">
          <h1>本馆概况</h1>
          <p>
            1918年，学生集资购书成立戊午阅书社，复旦大学图书馆初创。现由文科馆、理科馆、医科馆、张江馆、江湾馆（李兆基图书馆）、古籍部（国家古籍重点保护单位）组成。馆舍总面积62,137平方米，阅览座位总数4,293个，周开馆时间105小时，日均接待读者7,000多人次。
          </p>
          <p>
            截至2020年底，馆藏纸本文献资源约575.5万册（含纸本图书和期刊合订本），其中中文452.7万册（含线装古籍约37万册，包括善本6万册，民国时期图书10万册），外文122.8万册，订购中外文数据库621个，自建数据库12个。当年购置纸质中文图书85212册，外文图书8689册，中文报刊1379种，外文报刊596种，新增数据库20个。特色馆藏包括古籍、民国时期文献、外文图书、复旦人著作以及各类专题赠书。
          </p>
          <p>
            复旦大学图书馆是国家古籍重点保护单位，中国高校人文社会科学文献中心的两个全国中心馆之一。设有教育部面向全国和华东地区的外国教材中心教育部文科外文图书引进中心书库、欧盟图书专架、教育部科技查新工作站（综合类）、上海市科委科技查新站（计算机与生物）、图书馆学硕士培养点、中国索引学会秘书处，承担《中国索引》杂志的编辑出版工作。
          </p>
          <p>
            图书馆除提供常规的书刊借阅服务外，还提供各类电子资源检索、通借通还、馆际互借、文献传递、咨询解答、科技查新、 查收查引、读者培训、自助复印、扫描等服务，并为各类读者开设文献信息检索课程，培养图书馆学硕士生。
          </p>
          <p>
            近年来，图书馆本着服务第一，读者至上的理念，继续加强馆藏建设，扩展和深化服务，深入院系开展学科服务。引进新技术，更新服务方式，提升服务理念，发挥图书馆文献资源保障和创新服务的功能作用。
          </p>
        </div>
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

.home-background {
  background: url("http://placekitten.com/400/500") no-repeat top center;
  background-origin: border-box;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.home-top {
  background-color: rgba(256, 256, 256, 0.8);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px 0 10px 0;
}

.home-top-title {
  font-weight: bold;
  font-size: 30px;
}

.home-top-option {
  color: black;
  text-decoration: none;
  margin-left: 30px;
}

.home-banner {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 30px 0 30px 0;
}

.home-title h1 {
  color: white;
  font-size: 40px;
  font-weight: bolder;
}

.home-introduction {
  p {
    text-indent: 2em;
  }
}

</style>
