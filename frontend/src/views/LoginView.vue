<script>
export default {
  name: "LoginView",
  data() {
    return {
      captchaKey: '',
      captchaUrl: '',
      loginForm: {
        account: '',
        password: '',
        captchaCode: '',
      },
    }
  },
  mounted() {
    this.captchaKey = Date.now();
    this.captchaUrl = 'http://localhost:9090/captcha?key=' + this.captchaKey;
  },
  methods: {
    handleLogin() {
    },
    handleRegisterLink() {
      this.$router.push('/register')
    },
  }
}
</script>

<template>
  <div class="login-container">
    <div class="login-area">
      <div class="img-area">
        <img src="@/assets/img/logo.png" style="width: 98%;" alt="">
      </div>
      <div class="info-area">
        <div class="info-title">中国皮划艇协会竞赛管理系统</div>
        <el-form :model="loginForm">
          <el-form-item prop="account">
            <el-input v-model="loginForm.account" placeholder="请输入手机号" prefix-icon="el-icon-user"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" placeholder="请输入密码" prefix-icon="el-icon-lock"
                      show-password></el-input>
          </el-form-item>
          <el-form-item prop="captcha">
            <div class="info-captcha">
              <el-input class="info-captcha-item" v-model="loginForm.captchaCode" prefix-icon="el-icon-circle-check" placeholder="请输入验证码"></el-input>
              <div class="info-captcha-img">
                <img :src="captchaUrl" style="width: 100%; height: 100%" alt="">
              </div>
            </div>
          </el-form-item>
          <div style="display: flex; margin-bottom: 10px">
            <div style="flex: 1; text-align: left; font-weight: bold;">
              <span>首次登录，请</span>
              <span class="info-link" @click="handleRegisterLink">注册</span>
            </div>
          </div>
          <el-form-item>
            <el-button type="primary" style="width: 100%" @click.native="handleLogin">登 录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.login-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #CE111A;
}

.login-area {
  display: flex;
  background-color: white;
  width: 50%;
  height: 60vh;
  border-radius: 10px;
  box-shadow: 2px 0 6px rgba(0, 21, 41, .35);
  overflow: hidden;
}

.img-area {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .el-form {
    width: 82%;
  }
}

.info-title {
  font-size: 18px;
  font-weight: bolder;
  text-align: center;
  margin-bottom: 20px;
}

.info-captcha {
  height: 32px;
  display: flex;
}

.info-captcha-item {
  flex: 3;
}

.info-captcha-img {
  flex: 2;
  align-items: center;
  padding-left: 6px;
}

.info-link {
  color: #CE111A;
  cursor: pointer;
}
</style>