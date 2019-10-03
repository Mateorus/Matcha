const axios = require('axios');

export default {
  state: {
    user: {},
    jwt: localStorage.getItem('jwt') || '',
  },
  getters: {
    isLogged: state => !!state.jwt,
  }
}