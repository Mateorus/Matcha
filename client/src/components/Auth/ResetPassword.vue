<template>
  <section class='container'>
    <app-form @submit="resetPassword()">
      <div class="form-title">password reset</div>
      <div class='input'>
        <input @focusout="validateEmail" v-model='email' placeholder="Email">
        <span class='input-error'>{{ error }}</span>
      </div>
      <app-button type=submit>send new password</app-button>
    </app-form>
  </section>  
</template>
<script>
import AppButton from '@/components/common/AppButton';
import AppForm from './AppForm';

export default {
  data: () => ({
    email: '',
    error: ''
  }),
  methods: {
      resetPassword() {
        if (this.validateEmail()) {
          console.log('reset');
        }
      },
      validateEmail() {
        if (/.+@.+\..+/i.test(this.email)) {
          this.error = '';
        } else {
          this.error = 'Invalid email format!';
        }
      }
  },
  components: { AppButton, AppForm }
}
</script>
<style lang="stylus">

</style>