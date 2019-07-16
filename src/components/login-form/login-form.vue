<template>
  <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit" style="background: transparent;">
    <FormItem prop="userName">
      <i-input v-model="form.userName" placeholder="请输入用户名">
        <span slot="prepend">
          <Icon :size="16" type="ios-person"></Icon>
        </span>
      </i-input>
    </FormItem>
    <FormItem prop="password">
      <i-input type="password" v-model="form.password" placeholder="请输入密码">
        <span slot="prepend">
          <Icon :size="14" type="md-lock"></Icon>
        </span>
      </i-input>
    </FormItem>
    <FormItem>
      <Button @click="handleSubmit" type="error" long>登录</Button>
    </FormItem>
  </Form>
</template>
<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      form: {
        userName: 'admin',
        password: ''
      }
    }
  },
  props: {
    userNameRules: {
      type: Array,
      default: () => {
        return [
          {
            required: true, message: '账号不能为空', trigger: 'blur'
          }
        ]
      }
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [
          {
            required: true, message: '密码不能为空', trigger: 'blur'
          }
        ]
      }
    }
  },
  computed: {
    rules () {
      return {
        userName: this.userNameRules,
        password: this.passwordRules
      }
    }
  },
  methods: {
    handleSubmit () {
      // 这里的valid是个Boolean，满足规则就是true
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$emit('on-success-valid', {
            userName: this.form.userName,
            password: this.form.password
          })
        }
      })
    }
  }
}
</script>
<style lang="less">
</style>


