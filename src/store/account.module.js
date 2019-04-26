import { userService } from 'service'

const user = JSON.parse(localStorage.getItem('user'));
const state = user
    ? { status: { isLoggedIn: true }, user }
    : { status: {}, user: {} };

const actions = {
  signIn ({ commit }, {email, password}) {
    return new Promise((resolve, reject) => {
      userService.signIn(email, password).then(user => {
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.token = user.token
        commit('set_user', user)
        resolve(user)
      }).catch(err => {
        localStorage.removeItem('user')
        delete localStorage.token
        reject(err)
      })
    })
  },

  signOut ({ commit }) {
    return new Promise(resolve => {
      commit('sign_out')
      localStorage.removeItem('user')
      delete localStorage.token
      resolve()
    })
  },

  forgotPassword () {
  }

};

const mutations = {
  set_user (state, user) {
    state.user = user
    state.status = { isLoggedIn: true }
  },
  sign_out (state) {
    state.user = {}
    state.status = {}
  }
};

export const account = {
  namespaced: true,
  state,
  actions,
  mutations,
};