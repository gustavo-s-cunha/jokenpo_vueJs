// import Vue from 'vue';
// import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';

// import modules from './modules';
// import persistenceConfig from './persistence.config';

// Vue.use(Vuex);

// export default new Vuex.Store({
// 	modules,
// 	plugins: [
// 		createPersistedState(persistenceConfig),
// 	],
// });

import { defineStore } from 'pinia';

export const useScoreStore = defineStore('Score', {
  state: () => ({
    score: 0,
  }),
  actions: {
    updateScore(newScore) {
      this.score = this.score + newScore;
    },
    setScore(newScore) {
      this.score = newScore;
    },
    resetScore() {
      this.score = 0;
    },
  },
});
