import Vue from 'vue'
import Vuex from 'vuex'

import test from './modules/test'

Vue.use(Vuex)

export const state = {
}

export const mutations = {
}

export const actions = {
}

export const getters = {
}

export default new Vuex.Store({
  modules: {
    test
  },
  strict: process.env.NODE_ENV !== 'production',
  state,
  getters,
  actions,
  mutations
})

