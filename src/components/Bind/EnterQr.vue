<template>
  <div>
    <mt-field
      label="手机号"
      placeholder="请输入手机号"
      type="tel"
      v-model="form.phone"
    ></mt-field>

    <div class="wrap-button">
      <mt-button type="primary" class="mt-button" @click="handleQr(form)" plain
        >提交</mt-button
      >
      <mt-button type="default" class="mt-button" @click="handleCancel" plain
        >取消</mt-button
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    handleQr: Function,
    handleCancel: Function
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
