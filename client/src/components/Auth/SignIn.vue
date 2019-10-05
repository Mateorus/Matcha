<template>
  <section class='container'>
    <app-form @submit="signIn()">
      <div class="form-title">welcome back!</div>
      <div class='input'>
        <input v-model='user.login' spellcheck="false" autocomplete="off" placeholder="Login">
      </div>
      <div class='input'>
        <input v-model='user.password'  placeholder="Password">
      </div>
      <app-button type=submit>sign in</app-button>
      <div class="form-footer">
        Forgot your
        <router-link to="/auth/reset-password">password?</router-link>
      </div>
    </app-form>
  </section>  
</template>
<script>
import AppButton from '@/components/common/AppButton';
import AppForm from './AppForm';

export default {
  data: () => ({
    user: {
      login: '',
      password: ''
    },
  }),
  methods: {
      signIn() {
        console.log('SignIn');
      }
  },
  components: { AppButton, AppForm }
}
</script>
<style lang="stylus">

</style>