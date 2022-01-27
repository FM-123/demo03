<template>
  <el-container style="height: 100%; border: 1px solid #eee;background-color: rgb(238, 241, 246);">
    <el-aside style="width:200px !important;height:1300px;background-color:  rgb(40, 51, 62);">
      <el-row class="tac" style="position: fixed;">
        <el-col :span="24">
          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
            :unique-opened="true" background-color="rgb(40 51 62)" text-color="#fff">
            <el-menu-item index="1">
              <i class="el-icon-s-tools"></i>
              <span slot="title">图标列表</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-circle-check"></i>
              <span slot="title">图标选择</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-thumb"></i>
              <span slot="title">颜色选择</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-arrow-down"></i>
              <span slot="title">下拉选择</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-files"></i>
              <span slot="title">文件上传</span>
            </el-menu-item>
            <el-menu-item index="6">
              <i class="el-icon-notebook-1"></i>
              <span slot="title">富文本编辑器</span>
            </el-menu-item>
            <el-menu-item index="7">
              <i class="el-icon-circle-check"></i>
              <span slot="title">省市县区选择器</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>

    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>

  </el-container>
</template>

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
