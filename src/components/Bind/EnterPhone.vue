<template>
  <div>
    <mt-field
      label="验证码"
      placeholder="请输入验证码"
      type="number"
      v-model="form.qr"
    ></mt-field>
    <div class="wrap-button">
      <mt-button
        type="primary"
        class="mt-button"
        @click="handlePhone(form)"
        plain
        >提交</mt-button
      >
      <mt-button
        type="default"
        class="mt-button"
        @click="handleCancel"
        plain
        >取消</mt-button
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    handlePhone: Function,
    handleCancel: Function,
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
