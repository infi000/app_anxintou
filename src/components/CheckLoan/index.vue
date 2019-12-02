<template>
  <div class="page">
    <pdf
      v-for="i in numPages"
      :key="i"
      :src="loadingTask"
      :page="i"
      style=" width: 100%;display:block"
    ></pdf>
    <div style="padding: 20px 0 40px;text-align: center;">
      <mt-button
        type="default"
        class="mini-button"
        size="small"
        @click.self.stop="$router.go(-1)"
        >返回</mt-button
      >
      <mt-button
        type="default"
        class="mini-button"
        size="small"
        @click.self.stop="handleClickSubmit"
        >同意</mt-button
      >
    </div>
  </div>
</template>

<script>
import pdf from "vue-pdf";
import { loanSignature } from "@/api";
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      currentPage: 0,
      pageCount: 0,
      loadingTask: "",
      numPages: undefined
    };
  },
  methods: {
    handleClickSubmit() {
      const bid = this.bid;
      this.loanSignature({ bid });
    },
    loanSignature(params = { bid: "" }) {
      const sucf = d => {
        this.$router.go(-1);
        Toast({
          message: "操作成功",
          duration: 2000
        });
        this.$store.commit("loan/updateloanPdfSource", { src: "", bid: "" });
      };
      loanSignature({ params, sucf });
    }
  },
  computed: {
    bid() {
      return this.$store.state.loan.loanPdfSource.bid || "";
    }
  },
  components: { pdf },
  mounted() {},
  created() {
    const { src } = this.$store.state.loan.loanPdfSource || {};
    if (src) {
      this.loadingTask = pdf.createLoadingTask(src);
      this.loadingTask.then(pdf => {
        this.numPages = pdf.numPages;
      });
    }
  }
};
</script>

<style></style>
