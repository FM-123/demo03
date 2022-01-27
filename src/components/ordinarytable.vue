<template>
  <div>
    <el-progress type="circle" :percentage="0"></el-progress>
    <el-progress type="circle" :percentage="25"></el-progress>
    <el-progress type="circle" :percentage="100" status="success"></el-progress>
    <el-progress type="circle" :percentage="70" status="warning"></el-progress>
    <el-progress type="circle" :percentage="50" status="exception"></el-progress>
    <div>
      <el-row>
        <el-col :span="10">
          <el-progress :percentage="50"></el-progress>
          <el-progress :percentage="100" :format="format"></el-progress>
          <el-progress :percentage="100" status="success"></el-progress>
          <el-progress :percentage="100" status="warning"></el-progress>
          <el-progress :percentage="50" status="exception"></el-progress>
        </el-col>
      </el-row>
    </div>
    <div class="t2">
      <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
      <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
      <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
      <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    format (percentage) {
      return percentage === 100 ? '满' : `${percentage}%`
    }
  }
}
</script>

<style>
.t2 {
  width: 80%;
}
.el-progress {
  margin: 20px 0;
}
</style>
