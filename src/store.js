import Vue from 'vue'
import Vuex from 'vuex'
import client from 'api-client'

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
  actions: {
    signIn ({ commit }) {
      return new Promise((resolve, reject) => {
        client.signIn().then(user => {
          localStorage.setItem('user', JSON.stringify(user))
          commit('set_user', user)
          resolve(user)
        }).catch(err => {
          localStorage.removeItem('user')
          reject(err)
        })
      })
    },
    signOut ({ commit }) {
      return new Promise(resolve => {
        commit('sign_out')
        localStorage.removeItem('user')
        resolve()
      })
    },
  },
  getters: {
    isLoggedIn: state => !!state.user.token,
  }
})
