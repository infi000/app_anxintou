<template>
  <div class="wrap-login">
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="form.phone"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="form.pass"></mt-field>
    <div class="wrap-button">
      <mt-button type="primary" class="mt-button" @click="handleLogin">登陆</mt-button>
    </div>
    <div class="wrap-button">
      <mt-button type="primary" class="mt-button"  @click="handleToRegister" plain>注册</mt-button>
    </div>
  </div>
</template>

<script>
import {login} from "@/api"
export default {
  data() {
    return {
      form: {}
    };
  },
  methods:{
    handleToRegister(){
      this.$router.push({path:"/register"})
    },
    handleLogin(){
      const params=this.form;
      login({params});
      // this.$router.push({path:"/main"})
    }
  }
};
</script>

<style scoped>
.wrap-login {
  padding-top: 30%;
}

</style>