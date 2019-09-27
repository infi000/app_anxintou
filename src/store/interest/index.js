const state = {
	bid: ""
};
const mutations = {
	updateBid(state, payload) {
		state.bid = payload;
	}
};

const store = {
	state,
	mutations,
	namespaced: true
};
export default store;
