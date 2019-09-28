<template>
  <div style="padding-top:40px">
    
    <mt-field label="短信验证码" placeholder="短信验证码" type="text" v-model="code"></mt-field>
    <div class="wrap-button">
      <mt-button type="primary" class="mt-button" @click="handleQr(code)" >提交</mt-button>
  
    </div>
  </div>
</template>

<script>
export default {
  props: {
    handleQr: Function,
  },
  data() {
    return {
      code:""
    };
  },
};
</script>

<style scoped></style>
