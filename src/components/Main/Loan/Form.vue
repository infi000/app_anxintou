<template>
  <div>
    <mt-field label="姓名" placeholder="请输入姓名" v-model="form.name"></mt-field>
    <mt-field label="身份证" placeholder="请输入身份证" v-model="form.idcard"></mt-field>
    <mt-field label="手机号" placeholder="请输入手机号" v-model="form.phone"></mt-field>
    <mt-field label="银行卡号" placeholder="请输入银行卡号" type="number" v-model="form.bcard"></mt-field>
    <mt-field label="借款金额" placeholder="请输入借款金额" type="number" v-model="form.money"></mt-field>
    <mt-field label="城市" placeholder="请输入城市" v-model="form.city"></mt-field>
    <mt-field label="借款期限" placeholder="1-12个月" type="numver" v-model="form.tlimit"></mt-field>
    <div class="select-wrap">
      <div class="weui-cell weui-cell_select weui-cell_select-after">
        <div class="weui-cell__hd">
          <label for class="weui-label">教育程度</label>
        </div>
        <div class="weui-cell__bd">
          <select class="weui-select" v-model="form.xueli">
            <option
              :value="item.title"
              v-for="item in topEducationArr"
              :key="item.title"
            >{{item.title}}</option>
          </select>
        </div>
      </div>
      <div class="weui-cell weui-cell_select weui-cell_select-after">
        <div class="weui-cell__hd">
          <label for class="weui-label">婚姻状况</label>
        </div>
        <div class="weui-cell__bd">
          <select class="weui-select" v-model="form.marri">
            <option
              :value="item.title"
              v-for="item in hasMarriedArr"
              :key="item.title"
            >{{item.title}}</option>
          </select>
        </div>
      </div>
      <div class="weui-cell weui-cell_select weui-cell_select-after">
        <div class="weui-cell__hd">
          <label for class="weui-label">月收入</label>
        </div>
        <div class="weui-cell__bd">
          <select class="weui-select" v-model="form.salary">
            <option
              :value="item.title"
              v-for="item in monthlyIncomeArr"
              :key="item.title"
            >{{item.title}}</option>
          </select>
        </div>
      </div>
    </div>
    <div class="wrap-button">
      <mt-button type="primary" class="mt-button" size="small" @click="handleSubmie">提交</mt-button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Toast } from "mint-ui";
import { addLoan } from "@/api";

export default {
  data() {
    return {
      form: {}
    };
  },
  computed: {
    ...mapState({
      topEducationArr: state => state.loan.topEducationArr,
      hasMarriedArr: state => state.loan.hasMarriedArr,
      monthlyIncomeArr: state => state.loan.monthlyIncomeArr
    })
  },
  methods: {
    handleSubmie() {
      const params = this.form;
      params.uid=this.$store.state.userinfo.uid;
      const sucf = () => {
        Toast({
          message: "操作成功",
          iconClass: "icon icon-success",
          duration: 1000
        });
      };
      addLoan({ params, sucf });
    }
  }
};
</script>

<style scoped>
.select-wrap {
  background: #fff;
  margin-top: 10px;
}
.weui-cell {
  padding-left: 10px;
}
</style>