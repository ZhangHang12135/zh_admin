<template>
  <div class="login">
    <div class="login-con">
      <Card icon="login-in" title="登录" :bordered="true">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <p class="login-tip">输入任意用户名和密码</p>
        </div>
      </Card>
    </div>
  </div>
</template>
<script>
import LoginForm from '_c/login-form'
export default {
  name: 'login_page',
  data() {
    return {
      userName: '',
      password: ''
    }
  },
  components: {
    LoginForm
  },
  methods: {
    handleSubmit () {
      console.log('want to login!')
    }
  }
}
</script>
<style lang="less">
.login{
  width: 100%;
  height: 100%;
  background-image: url('../assets/img/bg_fulian3.jpg');
  background-size: cover;
  position: relative;
  &-con{
    position: absolute;
    left: ~"calc(50% - 150px)";
    top: 50%;
    transform: translateY(-60%);
    width: 300px;
    &-header{
      font-size: 16px;
      font-weight: 300;
      text-align: center;
      padding: 30px 0;
    }
    .form-con{
      padding: 10px 0 0;
      background: transparent;
    }
    .login-tip{
      font-size: 10px;
      text-align: center;
      color: #c3c3c3;
    }
  }
}
.ivu-card{
  background: transparent;
}
</style>


