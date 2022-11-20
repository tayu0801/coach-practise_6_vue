import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sum: 0,
    lastTeam: '',
  },
  mutations: {
    incrementMutation(state) {
      state.sum++;
    },
    teamSetMutation(state,payload) {
      state.lastTeam.push(payload);
    },
  },
});
