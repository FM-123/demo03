<template>
  <div>
    <div id="e2"></div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="mbx">
      <el-breadcrumb-item :to="{ path: '/homepage' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>主页模板</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card>
      <!--搜索与添加-->
      <el-row :gutter="20" style="height:80px !important;">
        <el-col :span="8" style="height:80px !important;">
          <el-input placeholder="请输入内容" class="input">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4" style="height:80px !important;">
          <el-button type="primary" class="button">添加用户</el-button>
        </el-col>
      </el-row>
      <el-table :data="tableData" style="width:100%">
        <el-table-column prop="date" label="日期" width="180" style="height:100% !important;">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180" style="height:100% !important;">
        </el-table-column>
        <el-table-column prop="address" label="地址" style="height:100% !important;">
        </el-table-column>
      </el-table>

    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  height: auto;
}
.mbx {
  margin-top: 10px;
  margin-left: 15px;
  margin-bottom: 15px;
  font-size: 12px;
}
.el-card {
  height: auto;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15) !important;
}
.input {
  top: -60px;
  margin: 0 auto;
}
.el-button {
  position: relative;
  top: -60px;
}
.el-table {
  position: relative;
  top: -30px;
  padding: 0 !important;
}
</style>
