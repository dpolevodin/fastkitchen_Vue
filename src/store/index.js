import Vue from 'vue'
import Vuex from 'vuex'
import order from './modules/order'
import delivery from './modules/delivery'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    order,
    delivery
  },
});