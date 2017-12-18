import * as types from '@/store/mutation-types'

export default{
  namespaced: true,
  state: {
    code: '000000',
    oldcode: ''
  },
  getters: {
    precode: state => state.oldcode ? state.oldcode : '--------'
  },
  mutations: {
    [types.CHANGE_CODE] (state) {
      state.oldcode = state.code
      state.code = Math.ceil(Math.random() * 100000)
    }
  },
  actions: {
    changeCode ({commit}) {
      commit(types.CHANGE_CODE)
    }
  }
}
