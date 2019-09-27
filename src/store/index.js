import Vuex from "vuex";
import Vue from "vue";
import loan from "./loan";
import interest from "./interest";
Vue.use(Vuex);
const state = {
  userInfo: { phone: "", uid: "" },
};
const mutations = {
  updateUserInfo(state, payload) {
    state.userInfo = payload;
  },
};
// A156950277073802885
const getters = {};

const store = {
  state,
  mutations,
  getters,
  modules: {
    loan,
    interest
  }
};

export default new Vuex.Store(store);
