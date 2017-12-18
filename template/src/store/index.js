import Vue from 'vue'
import Vuex from 'vuex'

import demo from './modules/demo'
import socketDemo from './modules/socket_io_demo'
Vue.use(Vuex)

export const mutations = {
  {{#vuesocket}}
  initSocket: (state, socket) => {
    state.socket = socket
  }
  {{/vuesocket}}
}

export const actions = {
}

export const getters = {
}

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    modules: {
      demo,
      socketDemo
    },
    {{#vuesocket}} 
    state: {socket: {}},
    {{else}}
    state: {},
    {{/vuesocket}}
    actions,
    mutations,
    getters
  })
}
