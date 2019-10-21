<template>
  <div class="table-wrap">
    <div class="weui-cell cell-title">
      <div class="weui-cell__bd">
        <p>{{ title }}</p>
      </div>
    </div>
    <div class="weui-flex weui-cell text-center cell-title">
      <div
        :class="index == 0 ? 'item-small' : 'weui-flex__item'"
        v-for="(item, index) in dataTemplate"
        :key="item"
      >
        <div class="placeholder">{{ item }}</div>
      </div>
    </div>
    <div
      class="weui-flex weui-cell text-center cell-data"
      v-for="item in data"
      :key="item.id"
    >
      <div class="item-small">
        <div class="placeholder">{{ item.qs }}</div>
      </div>
      <div class="weui-flex__item">
        <div class="placeholder">{{ item.bjjlx }}</div>
      </div>
      <div class="weui-flex__item">
        <div class="placeholder">{{ item.date }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
    dataTemplate: Array,
    title: String
  },
  methods: {}
};
</script>

<style></style>
