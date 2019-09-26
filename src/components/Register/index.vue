<template>
  <div class="wrap-register">
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="form.phone"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="form.pass"></mt-field>
    <div class="wrap-button">
      <mt-button type="primary" class="mt-button" @click="handleRegister">注册</mt-button>
    </div>
    <div class="wrap-button text-right">
      <mt-button type="default"  size="small" plain @click="handleToLogin">返回登陆</mt-button>
    </div>
  </div>
</template>

<script>
import {register} from "@/api"
export default {
  data() {
    return {
      form: {}
    };
  },
  methods:{
      handleRegister(){
      const params=this.form;
      register({params});
    },
    handleToLogin(){
      this.$router.push({path:"/login"})
    }
  }
};
</script>

<style scoped>
.wrap-register {
  padding-top: 30%;
}
.wrap-button {
  width: 80%;
  margin: 50px auto;
}
.mt-button {
  width: 100%;
}
</style>