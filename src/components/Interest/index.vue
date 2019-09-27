<template>
  <div class="wrap wrap-interest">
    <mt-header title="生息表" fixed>
      <router-link to="/main" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="container-interest">
      <TableBill
        :data="billData"
        :title="'待还账单'"
        :dataTemplate="billTemplate"
      />
      <TableBill
        :data="billedData"
        :title="'已还账单'"
        :dataTemplate="billedTemplate"
      />
    </div>
  </div>
</template>

<script>
import { billedData } from "./data";
import TableBill from "./TableBill";
import { mapState } from "vuex";
import { getSXList } from "@/api";
const billTemplate = ["期数", "应还本金(元)", "应还利息(元)", "还款日期"];
const billedTemplate = ["期数", "已还本金(元)", "已还利息(元)", "还款日期"];
export default {
  data() {
    return {
      billData:[],
      billedData,
      billTemplate,
      billedTemplate
    };
  },
  computed: {
    ...mapState({
      bid: state => state.interest.bid
    })
  },
  methods: {
    getSXList(bid) {
      const params = { bid };
      const sucf = d => {
        this.billData = d.list;
      };
      getSXList({ params, sucf });
    }
  },
  components: {
    TableBill
  },
  created() {
    const bid = this.bid;
    this.getSXList(bid);
  }
};
</script>

<style scoped>
.container-interest {
  padding-top: 60px;
}
</style>
