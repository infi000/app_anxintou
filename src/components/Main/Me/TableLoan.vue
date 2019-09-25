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
     <div class="weui-flex weui-cell text-center cell-data" v-for="item in data" :key="item.id" @click="handlePageTo">
      <div class="weui-flex__item">
        <div class="placeholder">{{item.date}}</div>
      </div>
      <div class="weui-flex__item">
        <div class="placeholder">{{item.money}}</div>
      </div>
      <div class="weui-flex__item">
        <div class="placeholder">{{item.limit}}</div>
      </div>
      <div class="weui-flex__item">
        <div class="placeholder">{{item.state}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    data:Array
  },
  methods:{
    handlePageTo(){
      this.$router.push({path:"interest"})
    }
  }
};
</script>

<style>

</style>