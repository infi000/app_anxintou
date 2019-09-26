<template>
  <div class="wrap wrap-me">
    <mt-navbar v-model="selected">
      <mt-tab-item id="申请">申请</mt-tab-item>
      <mt-tab-item id="还款">还款</mt-tab-item>
      <mt-tab-item id="完成">完成</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="申请">
        <TableLoan :data="data1"></TableLoan>
      </mt-tab-container-item>
      <mt-tab-container-item id="还款">
        <TableLoan :data="data2"></TableLoan>
      </mt-tab-container-item>
      <mt-tab-container-item id="完成">
        <TableLoan :data="data3"></TableLoan>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import { data1, data2, data3 } from "./data";
import TableLoan from "./TableLoan";
import { getLoanList } from "@/api";
export default {
  data() {
    return {
      selected: "还款",
      data1,
      data2,
      data3
    };
  },
  components: {
    TableLoan
  },
  methods: {
    getLoanList() {
      const sucf = d => {
        this.data1=d.list
      };
      getLoanList({ sucf });
    }
  },
  watch: {
    selected(d) {
      switch (d) {
        case "申请":
          this.getLoanList();
          break;
        case "还款":
          console.log("还款");
          break;
        case "完成":
          console.log("完成");
          break;
      }
    }
  },
  created() {
    this.getLoanList();
  }
};
</script>

<style scoped>
.wrap-me {
overflow-y: auto;
-webkit-overflow-scrolling: touch;
}
</style>