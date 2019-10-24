<template>
  <div class="wrap wrap-me">
    <mt-navbar v-model="selected">
      <mt-tab-item id="申请">申请</mt-tab-item>
      <mt-tab-item id="还款">还款</mt-tab-item>
      <mt-tab-item id="完成">完成</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="申请">
        <TableLoan :data="data1" @confirmDone="getLoanList('申请')"></TableLoan>
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
// import { data1, data2, data3 } from "./data";
import TableLoan from "./TableLoan";
import { getLoanList } from "@/api";
export default {
  data() {
    return {
      selected: "申请",
      data1:[],
      data2:[],
      data3:[]
    };
  },
  components: {
    TableLoan
  },
  methods: {
    getLoanList(str) {
      const that = this;
      const strObj = {
        "申请":{params:{type:1},sucf(d){that.data1=d.list}},
        "还款":{params:{type:2},sucf(d){that.data2=d.list}},
        "完成":{params:{type:3},sucf(d){that.data3=d.list}},
      }
      const params = strObj[str].params;
      const sucf = strObj[str].sucf;
      getLoanList({ params, sucf });
    },
  },
  watch: {
    selected(str) {
      this.getLoanList(str);
    }
  },
  created() {
    const str = this.selected;
    this.getLoanList(str);
  }
};
</script>

<style scoped>
.wrap-me {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
</style>