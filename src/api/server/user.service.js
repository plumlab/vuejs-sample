import api from './api'

export const userService = {
  signIn (email, password) {
    return api.post('/signin', {"email": email, "password": password})
  }
}
