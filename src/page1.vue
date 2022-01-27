<template>
  <el-container style="height: 100%; border: 1px solid #eee;background-color: rgb(238, 241, 246);">
    <el-aside style="width:200px !important;height:1300px;background-color:  rgb(40, 51, 62);">
      <el-row class="tac" style="position: fixed;">
        <el-col :span="24">
          <el-menu default-active="1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
            :unique-opened="true" background-color="rgb(40 51 62)" text-color="#fff">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>主页模板</span>
              </template>
              <el-menu-item-group>
                <router-link to="homepage">
                  <el-menu-item index="1-1">
                    <i class="el-icon-copy-document"></i>
                    前言
                  </el-menu-item>
                </router-link>
                <router-link to="homepage2">
                  <el-menu-item index="1-2">
                    <i class="el-icon-copy-document"></i>
                    用户列表
                  </el-menu-item>
                </router-link>
                <router-link to="homepage3">
                  <el-menu-item index="1-3">
                    <i class="el-icon-copy-document"></i>
                    时间日期
                  </el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
            <router-link to="menu">
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">
                  菜单管理
                </span>
              </el-menu-item>
            </router-link>
            <router-link to="system">
              <el-menu-item index="3">
                <i class="el-icon-setting"></i>
                <span slot="title">
                  系统设置
                </span>
              </el-menu-item>
            </router-link>
            <router-link to="tableeg">
              <el-menu-item index="4">
                <i class="el-icon-tickets"></i>
                <span slot="title">
                  表格示例
                </span>
              </el-menu-item>
            </router-link>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-set-up"></i>
                <span>表单示例</span>
              </template>
              <el-menu-item-group>
                <router-link to="ordinarytable">
                  <el-menu-item index="5-1">
                    <i class="el-icon-turn-off"></i>
                    普通表格
                  </el-menu-item>
                </router-link>
                <router-link to="distributionform">
                  <el-menu-item index="5-2">
                    <i class="el-icon-turn-off"></i>
                    分布表单
                  </el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-s-custom"></i>
                <span>登录模板</span>
              </template>
              <el-menu-item-group>
                <router-link to="login">
                  <el-menu-item index="6-1">
                    <i class="el-icon-s-custom"></i>
                    登录-1
                  </el-menu-item>
                </router-link>
                <router-link to="login2">
                  <el-menu-item index="6-2">
                    <i class="el-icon-s-custom"></i>
                    登录-2
                  </el-menu-item>
                </router-link>
                <router-link to="login3">
                  <el-menu-item index="6-3">
                    <i class="el-icon-s-custom"></i>
                    登录-3
                  </el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="7">
              <template slot="title">
                <i class="el-icon-warning"></i>
                <span>异常页面</span>
              </template>
              <el-menu-item-group>
                <router-link to="e404">
                  <el-menu-item index="7-1">
                    <i class="el-icon-warning-outline"></i>
                    404页面
                  </el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="8">
              <template slot="title">
                <i class="el-icon-link"></i>
                <span>其他页面</span>
              </template>
              <el-menu-item-group>
                <router-link to="buttoneg">
                  <el-menu-item index="6-1">
                    <i class="el-icon-link"></i>
                    按钮示例
                  </el-menu-item>
                </router-link>
                <router-link to="popup">
                  <el-menu-item index="6-2">
                    <i class="el-icon-link"></i>
                    弹出层
                  </el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>

    <el-container>
      <el-main id="view">
        <router-view></router-view>
      </el-main>
    </el-container>

  </el-container>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
.el-container {
  border: none !important;
  z-index: 0;
}
.el-menu {
  width: 200px !important;
}
.el-aside {
  color: #333;
  overflow-x: hidden;
}
#view {
  padding: 10px;
  background-color: #fff !important;
}
.el-main {
  padding: 0 !important;
}
</style>
