<template>
  <section class='container'>
    <app-form @submit="submitForm">
      <div class="form-title">create an account!</div>
      <div class='input'>
        <input v-model='user.login.value' @focusout="validateLogin" spellcheck="false" autocomplete="off" placeholder="Login">
        <span class='input-error'>{{ user.login.error }}</span>
      </div>
      <div class='input'>
      <input v-model='user.name.value' @focusout="validateName" spellcheck="false" autocomplete="off" placeholder="Name">
      <span class='input-error'>{{ user.name.error }}</span>
      </div>
      <div class='input'>

      <input v-model='user.lastName.value' @focusout="validateLastName" spellcheck="false" autocomplete="off" placeholder="Last Name">
      <span class='input-error'>{{ user.lastName.error }}</span>
      </div>
      <div class='input'>

      <input v-model='user.email.value' @focusout="validateEmail" spellcheck="false" autocomplete="off" placeholder="Email">
      <span class='input-error'>{{ user.email.error }}</span>
      </div>
      <div class='input'>

      <input type='password' v-model='user.password.value' @focusout="validatePassword" spellcheck="false" autocomplete="off" placeholder="Password">
      <span class='input-error'>{{ user.password.error }}</span>
      </div>
      <div class='input'>

      <input type='password' v-model='user.passwordConfirm.value' @focusout="confirmPassword" spellcheck="false" autocomplete="off" placeholder="Confirm Password">
      <span class='input-error'>{{ user.passwordConfirm.error }}</span>
      </div>
      <app-button type='submit'>sign up</app-button>
      <div class="form-footer">
        Already have an
        <router-link to="/auth/signin">account?</router-link>
      </div>
    </app-form>
  </section>
</template>
<script>
import AppForm from './AppForm';
import AppButton from '@/components/common/AppButton';

export default {
  data: () => ({
    user: {
      login: {value: '', error: ''},
      name: {value: '', error: ''},
      lastName: {value: '', error: ''},
      email: {value: '', error: ''},
      password: {value: '', error: ''},
      passwordConfirm: {value: '', error: ''},
    }
  }),
  methods: {
    submitForm() {
      if (!this.validateLogin() ||
          !this.validateName() ||
          !this.validateLastName() ||
          !this.validateEmail() ||
          !this.validatePassword() ||
          !this.confirmPassword()) {
            return;
          }

        console.log('Ok');
    },
    validateProp(prop, regexp, error) {
      if (!regexp.test(prop.value)) {
        prop.error = error;
        return false
      } else {
        prop.error = '';
        return true;
      }
    },
    validateLogin() {
      return this.validateProp(this.user.login, /^[a-zA-Z0-9]{3,20}$/i, 'Invalid login. Required from 3 to 20 charachters!');
    },
    validateName() {
      return this.validateProp(this.user.name, /^[a-zA-Z]{2,20}$/i, 'Invalid name. Required from 2 to 20 characters!');
    },
    validateLastName() {
      return this.validateProp(this.user.lastName, /^[a-zA-Z]{2,20}$/i, 'Invalid name. Required from 2 to 20 characters!');
    },
     validateEmail() {
      return this.validateProp(this.user.email, /.+@.+\..+/i, 'Invalid email format!');
    },
     validatePassword() {
      return this.validateProp(this.user.password, /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))/, 'Your passsword is too weak!');
    },
    confirmPassword() {
      if (this.user.password.value !== this.user.passwordConfirm.value) {
        this.user.passwordConfirm.error = 'Your passwords do not match';
        return false;
      } else {
        this.user.passwordConfirm.error = '';
        return true;
      }
    }
  },
  components: { AppForm, AppButton }
}
</script>
