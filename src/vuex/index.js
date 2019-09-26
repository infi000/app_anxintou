import Vuex from 'vuex';
import Vue from 'vue';
import loan from './loan';
Vue.use(Vuex);
const state = {
  userInfo: { phone: 'infi000', uid: '10000' },
};
// A156950277073802885

const store = {
  modules: {
    loan,
  },
  state,
};

export default new Vuex.Store(store);
