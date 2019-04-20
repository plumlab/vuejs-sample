import Vue from 'vue'
import Vuex from 'vuex'
import client from 'api-client'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    signIn ({ commit }) {
      return client.signIn().then(user => commit('setUser', user))
    }
  }
})
