import Vue from 'vue'
import Vuex from 'vuex'

import demo from './modules/demo'

Vue.use(Vuex)

export const mutations = {
}

export const actions = {
}

export const getters = {
}

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    modules: {
      demo
    },
    state: {},
    actions,
    mutations,
    getters
  })
}
