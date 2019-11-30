<template>
  <div class="table-wrap">
    <div class="weui-flex weui-cell text-center cell-title">
      <div class="weui-flex__item">
        <div class="placeholder">日期</div>
      </div>
      <div class="weui-flex__item">
        <div class="placeholder">金额</div>
      </div>
      <div class="weui-flex__item">
        <div class="placeholder">期数</div>
      </div>
      <div class="weui-flex__item">
        <div class="placeholder">状态</div>
      </div>
      <div class="weui-flex__item">
        <div class="placeholder">合同</div>
      </div>
    </div>
    <div
      class="weui-flex weui-cell text-center cell-data"
      v-for="item in data"
      :key="item.bid"
      @click="handlePageTo(item.bid)"
    >
      <div class="weui-flex__item">
        <div class="placeholder">{{ item.date }}</div>
      </div>
      <div class="weui-flex__item">
        <div class="placeholder">{{ item.money }}</div>
      </div>
      <div class="weui-flex__item">
        <div class="placeholder">{{ item.tlimit }}</div>
      </div>
      <div class="weui-flex__item">
        <template>
          <div
            class="placeholder"
            v-if="item.ustatus == 0 && item.bstatus == 5"
          >
            <!-- <div class="placeholder" > -->
            <mt-button
              type="danger"
              class="mini-button"
              size="small"
              @click.self.stop="handleConfirm(item.money, item.bid, item.mqyhe)"
              >待确认</mt-button
            >
          </div>
          <div class="placeholder" v-else>{{ item.status }}</div>
        </template>

        <!-- <div class="placeholder">{{item.status}}</div> -->
      </div>
      <div class="weui-flex__item">
        <div class="placeholder">
          <mt-button
            type="default"
            class="mini-button"
            size="small"
            @click.self.stop="handleCheckLoan(item.bid)"
            >查看</mt-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
import { confirmLoan, getLoan } from "@/api";
export default {
  props: {
    data: Array
  },
  methods: {
    handlePageTo(bid) {
      this.$store.commit("interest/updateBid", bid);
      this.$router.push({ path: "interest" });
    },
    handleConfirm(money, bid, mqyhe) {
      MessageBox({
        title: "提示",
        message: `终审通过金额为${money}元<br>月还金额为${mqyhe}`,
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: "确认",
        cancelButtonText: "拒绝"
      }).then(action => {
        const type = action == "confirm" ? 1 : 2;
        this.confirmLoan({ bid, type });
      });
    },
    handleCheckLoan(bid) {
      this.$store.commit("loan/updateloanPdfSource", {src:"./static/test.pdf",bid:""});
      this.$router.push({ path: "/CheckLoan" });
      this.getLoan({ bid });
    },
    confirmLoan(params = { bid: "", type: "" }) {
      const sucf = () => {
        this.$emit("confirmDone");
      };
      confirmLoan({ params, sucf });
    },
    getLoan(params = { bid: "" }) {
      const sucf = data => {
        //跳转
        this.$store.commit("loan/updateloanPdfSource", {
          src: data,
          bid: params.bid
        });
        this.$router.push({ path: "/CheckLoan" });
      };
      getLoan({ params, sucf });
    }
  },
  components: {}
};
</script>

<style scoped></style>
