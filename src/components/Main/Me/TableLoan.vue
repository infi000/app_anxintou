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
    </div>
    <div
      class="weui-flex weui-cell text-center cell-data"
      v-for="item in data"
      :key="item.bid"
      @click="handlePageTo(item.bid)"
    >
      <div class="weui-flex__item">
        <div class="placeholder">{{item.date}}</div>
      </div>
      <div class="weui-flex__item">
        <div class="placeholder">{{item.money}}</div>
      </div>
      <div class="weui-flex__item">
        <div class="placeholder">{{item.tlimit}}</div>
      </div>
      <div class="weui-flex__item">
        <template>
          <div class="placeholder" v-if="item.ustatus==0&&item.bstatus==5">
          <!-- <div class="placeholder" > -->
            <mt-button
              type="danger"
              class="mini-button"
              size="small"
              @click.self.stop="handleConfirm(item.money,item.bid,item.mqyhe)"
            >待确认</mt-button>
          </div>
          <div class="placeholder" v-else>{{item.status}}</div>
        </template>

        <!-- <div class="placeholder">{{item.status}}</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
import { confirmLoan } from "@/api";
export default {
  props: {
    data: Array
  },
  methods: {
    handlePageTo(bid) {
      this.$store.commit("interest/updateBid", bid);
      this.$router.push({ path: "interest" });
    },
    handleConfirm(money,bid,mqyhe) {
      // MessageBox.confirm(`终审通过金额为${money}元`).then(action => {});
      MessageBox({
        title: "提示",
        message: `终审通过金额为${money}元<br>月还金额为${mqyhe}`,
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: "确认",
        cancelButtonText: "拒绝"
      }).then(action => {
        console.log(action);

    
        const type = action == "confirm" ? 1 : 2;


        this.confirmLoan({bid,type})
      });
    },
    confirmLoan(params = { bid: "", type: "" }) {
      const sucf = () => {
        this.$emit("confirmDone");
      };


//       console.log(params);
// this.$emit("confirmDone");
//       return 
      confirmLoan({ params, sucf });
    }
  }
};
</script>

<style scoped>
</style>