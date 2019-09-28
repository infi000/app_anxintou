<template>
  <div style="padding-top:40px">
    <div>
      <mt-field label="身份证" placeholder="请输入身份证" type="text" v-model="form.ucard"></mt-field>
      <mt-field label="真实姓名" placeholder="请输入真实姓名" type="text" v-model="form.uname"></mt-field>
      <mt-field label="银行卡号" placeholder="请输入银行卡号" type="number" v-model="form.bankcard"></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号" type="number" v-model="form.phone"></mt-field>
    </div>

    <div class="wrap-button">
      <mt-button type="primary" class="mt-button" @click="handleBindCard(form)" >提交</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    handleBindCard: Function,
  },
  data() {
    return {
      form: {}
    };
  },
  methods: {}
};
</script>

<style scoped></style>
