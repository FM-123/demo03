<template>
  <div>
    <el-form ref="form" :rules="rules" :model="form" class="login">
      <h3 class="title">欢迎登录</h3>
      <el-form-item label="账号" prop="name">
        <el-input v-model="form.name" placeholder="请输入用户名" type="text"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="passwowrd">
        <el-input v-model="form.passwowrd" placeholder="请输入密码" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: '請輸入用戶名', trigger: 'blur' }
        ],
        passwowrd: [
          { required: true, message: '請輸入密碼', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push('/main')
        } else {
          this.$message({
            message: '用户名或密码错误',
            type: 'warning'
          })
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.login {
  width: 350px;
  margin: 120px auto;
  padding: 20px;
  border: 1px solid #dcdfe6;
  border-radius: 5px;
  box-shadow: 0 0 30px #dcdfe6;
}
.title {
  text-align: center;
}
</style>
