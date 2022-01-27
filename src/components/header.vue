<template>
  <div class="header">
    <div class="logo">
      <img src="../assets/logo.png" width="50px" class="img" />
      <p>LAYUI MINI</p>
    </div>
    <div style="float:left;">
      <router-link to="page1" class="navlist">常规管理</router-link>
      <router-link to="page2" class="navlist">组件管理</router-link>
      <router-link to="page3" class="navlist">其他管理</router-link>
    </div>
    <!-- <div style="float:right;">
      <div class="nav" style="float:right;">
        <span class="icon"><a href="#"><i class="el-icon-refresh"></i></a></span>
        <span class="icon"><a href="#"><i class="el-icon-delete"></i></a></span>
        <span class="icon"><a href="#"><i class="el-icon-rank"></i></a></span>
        <el-dropdown>
          <span class="el-dropdown-link">
            admin<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">

            <el-dropdown-item>
              <el-button type="text" @click="open">基本资料</el-button>
            </el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <router-link to="/login">
              <el-dropdown-item divided>退出登录</el-dropdown-item>
            </router-link>
          </el-dropdown-menu>
        </el-dropdown>
        <span><a href="#"><i class="el-icon-more"></i></a></span>
      </div>
    </div>-->
    <el-dropdown @command="handleCommand">
      <!--  绑定指令,在methods里定义-->
      <span class="el-dropdown-link" style="color:#fff">
        您好
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <!-- icon是修改图标 ，command是点击后传给方法的值-->
        <el-dropdown-item icon="el-icon-edit" command="edit">修改密码</el-dropdown-item>

        <el-dropdown-item icon="el-icon-s-operation" command="quit">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <!--  下拉菜单结束-->
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  components: {},
  methods: {
    handleCommand (command) {
      this.$message(`点击了${command}`)
    }
  }
}
</script>
<style>
.header {
  position: fixed;
  background-color: #192027;
  width: 100%;
  height: 60px;
  z-index: 1;
}
.navlist {
  color: #fff;
}
.logo {
  float: left;
  width: 200px;
  height: 60px;
  background-color: rgb(25 32 39) !important;
  margin-right: 10px;
}
.logo p {
  color: rgb(191, 187, 187);
  font-size: 25px;
}
.img {
  float: left;
  margin-top: 5px;
}
.nav {
  margin-right: 200px;
}
.nav .icon {
  margin-right: 15px;
}

.company {
  position: absolute;
  color: white;
}
.el-dropdown {
  float: right; /* 浮动在右边 */
  margin-right: 40px; /* 靠右40px */
}
.el-dropdown-link {
  color: white;
  cursor: pointer; /* 鼠标放上去是手的形状 */
}
</style>
