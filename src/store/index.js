import Vuex from "vuex";
import Vue from "vue";
import loan from "./loan";
Vue.use(Vuex);
const state = {
  userInfo: { phone: "", uid: "" },
};
const mutations = {
  setUserInfo(state, payload) {
    state.userInfo = payload;
  },
  setStoreList(state, d) {
    //设置店铺列表
    state.storeList = d;
  }
};
// A156950277073802885
const getters = {};

const store = {
  state,
  mutations,
  getters,
  modules: {
    loan
  }
};

export default new Vuex.Store(store);
