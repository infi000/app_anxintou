const state = {
    reqno:''
}
const mutations = {
    setReqno(state,payload){
        state.reqno=payload;
    }
}
const store = {
  state,
  mutations,
  namespaced:true
};
export default store;