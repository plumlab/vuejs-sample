import client from 'api-client'

export default {
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
}
