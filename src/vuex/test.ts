import { type Module } from 'vuex';

type TestState = {
  data: null | any[];
};

export type TestGetters = {
  data: null | any[];
};

type GettersDef = {
  [K in keyof TestGetters]: (
    state: TestState,
    getters: TestGetters,
    rootState: Record<string, any>,
    rootGetters: Record<string, any>,
  ) => TestGetters[K];
};

const getters: GettersDef = {
  data(state) {
    return state.data;
  },
};

/** Vuex Module for the whole toucan instance */
const TestModule: Module<TestState, {}> = {
  state: {
    data: null,
  },
  getters,
  mutations: {
    SET_DATA(state, data: any[]) {
      state.data = data;
    },
  },

  actions: {
    setData({ commit }, data): void {
      commit('SET_DATA', data);
    },
  },
};

export default TestModule;
