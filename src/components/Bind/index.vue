<template>
  <div class="wrap-bind">
    <mt-header title="绑卡">
      <router-link to="/main" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <EnterCard :handleBindCard="handleBindCard" v-if="step == 1" />
    <EnterQr :handleQr="handleQr" :reqno="reqno" v-if="step == 2" />
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import EnterCard from "./EnterCard";
import EnterQr from "./EnterQr";
import { bindCard, bindCardQr } from "@/api";

export default {
  data() {
    return {
      step: 1,
      reqno: ""
    };
  },
  methods: {
    handleBindCard(params) {
      const sucf = d => {
        //对杨经纬接口
        const status = d.status;
        switch (status) {
          case 1:
            //已经绑定过卡了
            Toast({
              message: "您已经绑定过卡了",
              duration: 2000
            });
            break;
          case 3:
            //验证码发送到手机，进行下一步
            this.step = 2;
            this.reqno = d.reqno;
            Toast({
              message: "验证码已发送至手机",
              duration: 2000
            });
            break;
          default:
            //报错
            Toast({
              message: d.exmsg,
              duration: 2000
            });
            break;
        }
      };
      bindCard({ params, sucf });
    },
    handleQr(code) {
      const params = {
        reqno: this.reqno,
        code
      };
      const sucf = d => {
        const status = d.status;
        Toast({
          message: d.exmsg,
          duration: 2000
        });
        switch (status) {
          case 1:
            //已经绑定过卡了
            // Toast({
            //   message: "您已经绑定过卡了",
            //   duration: 2000
            // });
            this.$router.push({ path: "/main" });

            break;
          case 3:
            //待短验短信验证码错误
            // Toast({
            //   message: d.exmsg,
            //   duration: 2000
            // });
            break;
          default:
            //报错
            // Toast({
            //   message: d.exmsg,
            //   duration: 2000
            // });
            break;
        }
      };
      bindCardQr({ params, sucf });
    }
  },
  components: {
    EnterCard,
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
  /* position: absolute;
  top: 30%;
  left: 50%;
  width: 100%;
  -webkit-transform: translate(-50%, -30%);
  transform: translate(-50%, -30%);
  text-align: center; */
  /* box-shadow: 1px 1px 1px 1px #ccc; */
  /* border-bottom: 1px solid #cccccc;
  background-color: #fff; */
}
</style>
