<template>
  <el-container style="height: 100%; border: 1px solid #eee;background-color: rgb(238, 241, 246);">
    <el-aside style="width:200px !important;height:1300px;background-color:  rgb(40, 51, 62);">
      <el-row class="tac" style="position: fixed;">
        <el-col :span="24">
          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
            :unique-opened="true" background-color="rgb(40 51 62)" text-color="#fff">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>主页模板</span>
              </template>
              <el-menu-item-group>
                <el-submenu index="1-1">
                  <template slot="title">
                    <i class="el-icon-document-copy"></i>按钮1
                  </template>
                  <el-submenu index="1-1-1">
                    <template slot="title">
                      <i class="el-icon-document-copy"></i>按钮2
                    </template>
                    <el-menu-item index="1-1-1-1">
                      <i class="el-icon-document-copy"></i>按钮3
                    </el-menu-item>
                  </el-submenu>
                </el-submenu>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-circle-check"></i>
              <span slot="title">失效菜单</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <el-container>
      <el-main style="padding: 0px;">
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
}
.el-menu {
  width: 200px !important;
}
.el-aside {
  color: #333;
  overflow-x: hidden;
}
.el-main {
  padding: 0 !important;
}
</style>
