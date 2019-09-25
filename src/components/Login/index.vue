<template>
  <div class="wrap-login">
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="form.phone"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="form.password"></mt-field>
    <div class="wrap-button">
      <mt-button type="primary" class="mt-button" @click="handleLogin">登陆</mt-button>
    </div>
    <div class="wrap-button">
      <mt-button type="primary" class="mt-button"  @click="handleRegister" plain>注册</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {}
    };
  },
  methods:{
    handleRegister(){
      this.$router.push({path:"/register"})
    },
    handleLogin(){
      this.$router.push({path:"/main"})
    }
  }
};
</script>

<style scoped>
.wrap-login {
  padding-top: 30%;
}

</style>