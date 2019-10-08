const axios = require('axios');
import router from '../../router';

export default {
  state: {
    user: {},
    tokens: {
      access_token: localStorage.getItem('access_token') || null,
      refresh_token: localStorage.getItem('refresh_token') || null
    }
  },
  getters: {
    loggedIn: state => !!state.tokens.access_token,
    getAccessToken: state => state.tokens.access_token
  },
  actions: {
    validateLogin({ commit }, login) {
      return new Promise((resolve, reject) => {
        axios.post('/user/validate-login', login)
          .then(res => resolve(res))
          .catch(e => e)
      })
    },
    apiRequest({ commit }, request ) {
      return new Promise((resolve, reject) => {
        axios.post(request.url, request.body)
          .then(res => resolve(res))
          .catch(e => router.push(e.response.status === 500 ? '/server-error' : '/auth'));
      })
    },
    signIn({ commit }, user) {
      return new Promise((resolve, reject) => {
        axios.post('/user/sign-in', user)
          .then(res => resolve(res))
          .catch(err => {
            err.response.status === 401 ? resolve({error: 'Invalid login or password!'}) : 
                                          router.push('/server-error');
          })
      })
    }
  }
}