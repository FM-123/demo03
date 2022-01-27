<template>
  <div>
    <el-card>
      <el-row>
        <el-col :span="8">
          <el-input placeholder="请输入搜索内容" class="input">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4" style="height:80px !important;">
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </el-col>
      </el-row>
      <i class="el-icon-edit"></i>
      <i class="el-icon-share"></i>
      <i class="el-icon-delete"></i>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style>
</style>
