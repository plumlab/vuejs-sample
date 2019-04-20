import api from './api'

export default {
  signIn (users) {
    return api().post('/signin', users)
  }
}
