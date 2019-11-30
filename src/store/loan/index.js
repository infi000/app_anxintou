const topEducationArr = [
  {
    title: "小学",
    value: "10"
  },
  {
    title: "初中",
    value: "20"
  },
  {
    title: "中专",
    value: "30"
  },
  {
    title: "高中",
    value: "40"
  },
  {
    title: "大专",
    value: "50"
  },
  {
    title: "本科",
    value: "60"
  },
  {
    title: "硕士",
    value: "70"
  },
  {
    title: "博士",
    value: "80"
  },
  {
    title: "其他",
    value: "90"
  }
];
const monthlyIncomeArr = [
  {
    title: "5000元以下",
    value: "1"
  },
  {
    title: "5000-10000元",
    value: "2"
  },
  {
    title: "10000-20000元",
    value: "3"
  },
  {
    title: "20000-30000元",
    value: "4"
  },
  {
    title: "30000元以上",
    value: "5"
  }
];
const hasMarriedArr = [
  {
    title: "已婚",
    value: 1
  },
  {
    title: "未婚",
    value: 0
  }
];

const state = {
  topEducationArr,
  monthlyIncomeArr,
  hasMarriedArr,
  loanPdfSource: {src:"",bid:""}
};
const mutations = {
  updateloanPdfSource(state, payload) {
    state.loanPdfSource = payload;
  }
};

const store = {
  state,
  mutations,
  namespaced: true
};
export default store;
