<template>
  <div class="wrap">
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="借款">
       <Loan></Loan>
      </mt-tab-container-item>
      <mt-tab-container-item id="我的">
       <Me></Me>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="selected" class="tabbar" fixed>
      <mt-tab-item id="借款" class="mid">借款</mt-tab-item>
      <mt-tab-item id="我的">我的</mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Loan from "./Loan";
import Me from "./Me";
export default {
  data() {
    return {
      selected: "借款"
    };
  },
  methods: {
   
  },
  components:{
    Loan,Me
  }
};
</script>

<style scoped>
.wrap{
  padding-bottom: 40px
}
.tabbar .mint-tab-item {
  padding: 16px 0;
}
.tabbar .mint-tab-item-label {
  font-size: 14px;
}


</style>