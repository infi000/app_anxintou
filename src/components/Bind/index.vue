<template>
  <div class="wrap-bind">
    <div class="wrap-form">
      <EnterPhone
        :handlePhone="handlePhone"
        :handleCancel="handleCancel"
        v-if="step == 1"
      />
      <EnterQr
        :handleQr="handleQr"
        :handleCancel="handleCancel"
        v-if="step == 2"
      />
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import EnterPhone from "./EnterPhone";
import EnterQr from "./EnterQr";
export default {
  data() {
    return {
      step: 1
    };
  },
  methods: {
    handlePhone() {
      this.step = 2;
      Toast({
        message: "验证码已发送至手机",
        iconClass: "icon icon-success",
        duration: 1000
      });
    },
    handleQr() {
      Toast({
        message: "绑定成功",
        iconClass: "icon icon-success",
        duration: 1000
      });
      this.$router.push({ path: "/main" });
    },
    handleCancel() {
      Toast({
        message: "已取消",
        iconClass: "icon icon-success",
        duration: 1000
      });
      this.$router.push({ path: "/main" });
    }
  },
  components: {
    EnterPhone,
    EnterQr
  }
};
</script>

<style scoped>
.wrap-bind {
  position: relative;
  height: 100%;
}
.wrap-form {
  position: absolute;
  top: 30%;
  left: 50%;
  width: 90%;
  -webkit-transform: translate(-50%, -30%);
  transform: translate(-50%, -30%);
  text-align: center;
  box-shadow: 1px 1px 1px 1px #ccc;
  background-color: #fff;
}
</style>
