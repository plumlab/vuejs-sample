import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || {},
  },
  mutations: {
    set_user (state, user) {
      state.user = user
    },
    sign_out (state) {
      state.user = {}
    }
  },
  actions,
  getters: {
    isLoggedIn: state => !!state.user.token,
  }
})
