<template>
  <div id="app">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
export default {
  components: { Header },
  component: {
    Header
  },
  data () {
    return {
    }
  }
}
</script>

<style>
* {
  text-decoration: none;
  font-size: 18px;
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-header {
  background-color: rgb(233 238 243);
  color: #333;
  text-align: left;
  line-height: 60px;
  padding: 0 !important;
  width: 100%;
}
.el-header .navlist {
  padding-right: 15px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
  width: 100% !important;
  padding: 0 !important;
}
</style>
