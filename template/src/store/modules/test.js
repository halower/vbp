import * as types from '@/store/mutation-types'

const state = {
  name: 'vuex 测试用例'
}
const getters = {
  greet: state => 'hello,' + state.name
}

const mutations = {
  [types.CHANGE_NAME] (state, newName) {
    state.name = newName + Math.ceil(Math.random() * 100000)
  }
}
const actions = {
  changeName ({commit}, newName) {
    commit(types.CHANGE_NAME, newName)
  }
}
export default{
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
