<template>
  <div class="wrap">
    <h1>main</h1>
    <router-view></router-view>
    <mt-tabbar v-model="selected" class="tabbar" fixed>
      <mt-tab-item id="借款">借款</mt-tab-item>
      <mt-tab-item id="我的">我的</mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "借款"
    };
  }
};
</script>

<style>
.tabbar .mint-tab-item{
    padding: 16px 0;
  
}
.tabbar .mint-tab-item-label{
   font-size: 14px;
  
}
</style>