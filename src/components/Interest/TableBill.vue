<template>
  <div class="table-wrap">
    <div class="weui-cell cell-title">
      <div class="weui-cell__bd">
        <p>{{title}}</p>
      </div>
    </div>
    <div class="weui-flex weui-cell text-center cell-title">
      <!-- <div class="item-small">
        <div class="placeholder">期数</div>
      </div> -->
      <div :class="index==0?'item-small':'weui-flex__item'" v-for="(item,index) in dataTemplate" :key="item">
        <div class="placeholder">{{item}}</div>
      </div>
      <!-- <div class="weui-flex__item">
        <div class="placeholder">待还利息(元)</div>
      </div>
      <div class="weui-flex__item">
        <div class="placeholder">还款日期</div>
      </div> -->
    </div>
    <div
      class="weui-flex weui-cell text-center cell-data"
      v-for="item in data"
      :key="item.id"
    >
      <div class="item-small">
        <div class="placeholder">{{item.qs}}</div>
      </div>
      <div class="weui-flex__item">
        <div class="placeholder">{{item.bj}}</div>
      </div>
      <div class="weui-flex__item">
        <div class="placeholder">{{item.lx}}</div>
      </div>
      <div class="weui-flex__item">
        <div class="placeholder">{{item.date}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
    dataTemplate:Array,
    title:String,
  },
  methods: {
    handlePageTo() {
      this.$router.push({ path: "interest" });
    }
  }
};
</script>

<style>
</style>