import Vue from 'vue';
import Vuex from 'vuex';

import TestModule from './test';

Vue.use(Vuex);

export default new Vuex.Store<any>({
  strict: true,
  modules: {
    test: TestModule,
  },
});
