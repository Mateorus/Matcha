<template>
  <form @submit.prevent='signIn' class='container'>
    <div class="form-title">welcome back!</div>
    <div class="input-field">
      <input 
        type="text"
        autocomplete="off"
        spellcheck="false"
        v-model.trim.lazy="$v.user.login.$model"
      >
      <label
        :class='{labelUpper: $v.user.login.$model.length}'
      >login</label>
      <small class="form-error" 
        v-if="$v.user.login.$dirty && !$v.user.login.required"
        >This field is required!</small>
      </div>
    <div class="input-field">
      <input 
        type="password"
        v-model.trim.lazy="$v.user.password.$model"
      >
      <label
        :class='{labelUpper: $v.user.password.$model.length}'
      >password</label>
      <small class="form-error" 
        v-if="$v.user.password.$dirty && !$v.user.password.required"
        >This field is required!</small>
    </div>
    <div class="form-footer">
      Forgot your
      <router-link to='/auth/reset-password'> password?</router-link>
    </div>
    <app-button type='submit'>sign in</app-button>
  </form>
</template>
<script>

import { required } from 'vuelidate/lib/validators';
import AppButton from '@/components/common/AppButton';

export default {
  data: () => ({
    user: {
      login: '',
      password: ''
    },
  }),
  validations: {
    user: {
      login: { required },
      password: { required }
    }
  },
  methods: {
    signIn() {
      
      if (this.$v.user.$invalid)
       return this.$v.user.$touch();

      console.log('SignIn');

        // this.$store.dispatch('signIn', {login: this.user.login, password: this.user.password})
        //   .then(res => console.log(res));
        // this.$router.push('/')
        //   .catch(e => e);
        // if (!this.user.login.length)
        //   return this.user.loginError = 'This field is required!';

        // if (!this.user.password.length)
        //   return this.user.passwordError = 'This field is required!';

        // let request = {url: '/user/signin', body: {
        //   login: this.user.login,
        //   password: this.user.password
        // }};

        // this.$store.dispatch('apiRequest', request)
        //   .then(res => {
           
        //       this.$router.push('home');
            
          // })
      }
  },
  
  components: { AppButton }
}
</script>
<style lang="stylus">
  @import '../../styles/form';
</style>