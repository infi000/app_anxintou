import Vuex from 'vuex';
import Vue from 'vue';
import loan from "./loan";
Vue.use(Vuex);


const store = {
 modules:{
     loan
 } 
};

export default new Vuex.Store(store);