<template>
  <Form ref="loginForm" :model="form" :rules="rules">
    <FormItem prop="userName">
      <i-input type="text" v-model="form.userName" placeholder="请输入用户名">

        <span slot="prepend">
          <icon-svg icon="nanhaizi" :size="14"></icon-svg>
        </span>
      </i-input>
    </FormItem>
    <FormItem prop="password">
      <i-input type="password" v-model="form.password" placeholder="请输入密码">
          <Icon :size="14" type="md-lock" slot="prepend"></Icon>
      </i-input>
    </FormItem>
    <FormItem>

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
  computed: {
    rules () {
      return {

      }
    }
  }
}
</script>
<style lang="less">

</style>


