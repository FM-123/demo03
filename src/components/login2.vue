<template>
  <div class="login_container">
    <div class="login_box">
      <!--头像区域-->
      <div class="avatar_box">
        <img src="../assets/hat.png" alt="" class="img">
      </div>
      <!--表单区域-->
      <el-form ref="loginFormRef" label-width="0px" class="login_form">
        <!--username-->
        <el-form-item prop="username">
          <el-input prefix-icon="iconfont icon-RectangleCopy1"></el-input>
        </el-form-item>
        <!--password-->
        <el-form-item prop="password">
          <el-input type="password" prefix-icon="iconfont icon-RectangleCopy3"></el-input>
        </el-form-item>
        <!--button-->
        <el-form-item class="btns">
          <el-button type="primary">登录</el-button>
          <el-button type="info">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
</script>

<style>
.login_container {
  background-color: #2b4b6b;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login_box {
  top: -150px;
  position: relative;
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
}
.avatar_box {
  width: 130px;
  height: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  position: relative;
  left: 50%;
  margin-left: -65px;
  box-shadow: 0 0 10px #ddd;
  top: -50px;
  background-color: #fff;
}
.img {
  margin-top: 0;
  widows: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #eee;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
