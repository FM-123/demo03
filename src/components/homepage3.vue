<template>
  <div>
    <el-card>
      <el-calendar v-model="value">
      </el-calendar>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: new Date()
    }
  },
  methods: {
    change () {
      this.$store.commit('changeNum', 30)
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
