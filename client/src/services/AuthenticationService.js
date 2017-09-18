import Api from '@/services/Api'

export default {
  register (credentials) {
    // Post of axios module
    return Api().post('register', credentials)
  },
  login (credentials) {
    return Api().post('login', credentials)
  }
}

// Sample register call
// AuthenticationService.register({
//   email: 'testing@gmail.com',
//   password: '123456'
// })
