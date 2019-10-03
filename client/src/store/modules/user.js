import axios from 'axios';

const url = 'api/user';

export default {
  state: {
    jwt: localStorage.getItem('jwt') || '',
    user: {}
  },
  getters: {
    loggedIn: state => !!state.jwt
  }
}