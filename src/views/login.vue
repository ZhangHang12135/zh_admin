<template>
  <div>
    <login-form></login-form>
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
</style>


