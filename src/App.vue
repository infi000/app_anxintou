<template>
  <div id="app" class="wrap">
    <router-view/>
    <router-view name="checkLoan"/>
    <!-- <router-view name="interest"/> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app{
  font-size: 14px; 
}
</style>
