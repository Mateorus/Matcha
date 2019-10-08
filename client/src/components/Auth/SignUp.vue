<template>
  <form @submit.prevent="signUp" class='container' @blur='signUp'>
    <div class="form-title">create an account!</div>
    <div class="input-field">
      <input 
      type="text"
      autocomplete="off"
      spellcheck="false"
      v-model.trim.lazy="$v.user.login.$model"
     
      >
      <label
        :class='{ labelUpper: $v.user.login.$model.length}'
      >login</label>
      <small class="form-error"
        v-if='$v.user.login.$dirty && !$v.user.login.required'
      >This field is required!</small>
      <small class="form-error"
        v-else-if='$v.user.login.$dirty && !$v.user.login.allowedCharacters'
      >Only latin characters and digits are allowed!</small>
      <small class="form-error"
        v-else-if='$v.user.login.$dirty && !$v.user.login.allowedLength'
      >Login must be from 3 to 20 characters!</small>
    </div>
    <div class="input-field">
      <input 
        type="text"
        autocomplete="off"
        spellcheck="false"
        v-model.trim.lazy="$v.user.name.$model"
      
      >
      <label
        :class='{ labelUpper: $v.user.name.$model.length}'
      >name</label>
      <small class="form-error"
        v-if='$v.user.name.$dirty && !$v.user.name.required'
      >This field is required!</small>
      <small class="form-error"
        v-else-if='$v.user.name.$dirty && !$v.user.name.allowedCharacters'
      >Only latin characters and digits are allowed!</small>
      <small class="form-error"
        v-else-if='$v.user.name.$dirty && !$v.user.name.allowedLength'
      >Name must be from 2 to 20 characters!</small>
    </div>
    <div class="input-field">
      <input 
        type="text"
        autocomplete="off"
        spellcheck="false"
        v-model.trim.lazy="$v.user.lastName.$model"
      
      >
      <label
        :class='{ labelUpper: $v.user.lastName.$model.length}'
      >last name</label>
      <small class="form-error"
        v-if='$v.user.lastName.$dirty && !$v.user.lastName.required'
      >This field is required!</small>
      <small class="form-error"
        v-else-if='$v.user.lastName.$dirty && !$v.user.lastName.allowedCharacters'
      >Only latin characters and digits are allowed!</small>
      <small class="form-error"
        v-else-if='$v.user.lastName.$dirty && !$v.user.lastName.allowedLength'
      >Last name must be from 2 to 20 characters!</small>
    </div>
    <div class="input-field">
      <input 
        type="text"
        autocomplete="off"
        spellcheck="false"
        v-model.trim.lazy="$v.user.email.$model"
        @focus="focusOn"
        @blur='focusOut'
      >
      <label
        :class='{ labelUpper: $v.user.email.$model.length}'
      >email</label>
      <small class="form-error"
        v-if='$v.user.email.$dirty && !$v.user.email.required'
      >This field is required!</small>
      <small class="form-error"
        v-else-if='$v.user.email.$dirty && !$v.user.email.email'
      >Invalid email format!</small>
    </div>
    <div class="input-field">
      <input
        type="password"
        autocomplete="off"
        spellcheck="false"
        v-model.trim.lazy="$v.user.password.$model"
      
      >
      <label
        :class='{ labelUpper: $v.user.password.$model.length}'
      >password</label>
      <small class="form-error"
        v-if='$v.user.password.$dirty && !$v.user.password.required'
      >This field is required!</small>
      <small class="form-error"
        v-else-if='$v.user.password.$dirty && !$v.user.password.containLetters'
      >Password should contain at least one letter!</small>
      <small class="form-error"
        v-else-if='$v.user.password.$dirty && !$v.user.password.containDigits'
      >Password should contain at least one digit!</small>
    </div>
    <div class="input-field">
      <input 
        type="password"
        autocomplete="off"
        spellcheck="false"
        v-model.trim.lazy="$v.user.confirmPassword.$model"
        @focus="focusOn"
        @blur='focusOut'
      >
      <label
        :class='{ labelUpper: $v.user.confirmPassword.$model.length}'
      >confirm password</label>
      <small class="form-error"
        v-if='$v.user.confirmPassword.$dirty && !$v.user.confirmPassword.required'
      >This field is required!</small>
      <small class="form-error"
        v-else-if='$v.user.confirmPassword.$dirty && !$v.user.confirmPassword.sameAsPassword'
      >Your passwords do not match!</small>
    </div>
    <div class="form-footer">
      Already have an
      <router-link to="/auth/signin">account?</router-link>
    </div>
    <app-button type='submit'>sign up</app-button>
  </form>
</template>
<script>

import AppButton from '@/components/common/AppButton';
import { required, email, sameAs } from 'vuelidate/lib/validators';

export default {
  data: () => ({
    user: {
     login: '',
     name: '',
     lastName: '',
     email: '',
     password: '',
     confirmPassword: ''
    }
  }),
  validations: {
    user: {
      login: { 
        required,
        allowedCharacters: login => /^[0-9a-z]*$/i.test(login),
        allowedLength: login => login.length > 2 && login.length < 20
      },
        name: { 
          required,
          allowedCharacters: name => /^[0-9a-z]*$/i.test(name),
          allowedLength: name => name.length > 1 && name.length < 20
        },
        lastName: { 
          required,
          allowedCharacters: lastName => /^[0-9a-z]*$/i.test(lastName),
          allowedLength: lastName => lastName.length > 1 && lastName.length < 20
        },
        email: { required, email },
        password: { 
          required,
          containLetters: password => /(?=.*[a-z])/i.test(password),
          containDigits: password => /(?=.*[0-9])/.test(password),
        },
        confirmPassword: { 
          required,
          sameAsPassword: sameAs('password')
        }
    }  
  },
  methods: {
    focusOn(e) {
      if (window.innerWidth <= 768) {
          scrollTo({
            top: e.target.getBoundingClientRect().y - 40,
            behavior: 'smooth'
        });
      }
    },
    focusOut(){
      if (window.innerWidth <= 768) {
         scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
    },
    signUp() {

      if (this.$v.user.$invalid)
       return this.$v.user.$touch();

      console.log('signUp');
    }
    // async submitForm() {      
    //   for (let elem in this.user)
    //     if (!this.user[elem].validated && !await this.validate(elem)) 
    //       return;
  
    //   let request = {url: '/user/signup', body: {
    //       login: this.user.login.value,
    //       name: this.user.name.value,
    //       lastName: this.user.lastName.value,
    //       email: this.user.email.value,
    //       password: this.user.password.value }};

    //   this.$store.dispatch('apiRequest', request)
    //     .then(res => this.$router.push({ name: 'auth-success', params: {email: res.data.email} }))
    // },
    // validateProp(prop, regexp, error) {
    //     if (!prop.value.length) {
    //       prop.error = 'This field is required!'
    //       return (prop.validated = false);
    //     } else if (!regexp.test(prop.value)) {
    //       prop.error = error;
    //       return (prop.validated = false);
    //     }
    //     prop.error = '';
    //     return (prop.validated = true);
    // },
    // async validate(prop) {
    //   if (prop === 'login') {
    //     if (!this.validateProp(this.user.login, /^[a-zA-Z0-9]{3,20}$/i, 'Invalid login. Required from 3 to 20 charachters!'))
    //       return false;

    //     let res = await this.$store.dispatch('apiRequest', {url: '/user/validate-login', body: {login: this.user.login.value}});
    //     console.log(res);
    //     this.user.login.error = res.data.msg;
    //     return res.data.success;
    //   }
    //   else if (prop === 'name')
    //     return this.validateProp(this.user.name, /^[a-zA-Z]{2,20}$/i, 'Invalid name. Required from 2 to 20 characters!');
    //   else if (prop === 'lastName')
    //     return this.validateProp(this.user.lastName, /^[a-zA-Z]{2,20}$/i, 'Invalid name. Required from 2 to 20 characters!');
    //   else if (prop === 'email') {
    //     if (!this.validateProp(this.user.email, /.+@.+\..+/i, 'Invalid email format!'))
    //       return false;
        
    //     let res = await this.$store.dispatch('apiRequest',{url: '/user/validate-email', body: {email: this.user.email.value}});
    //     this.user.email.error = res.data.msg;
    //     return res.data.success;
    //   }
    //   else if (prop === 'password')
    //     return this.validateProp(this.user.password, /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))/, 'Your passsword is too weak!');
    //   else if (prop === 'passwordConfirm') {
    //     if (!this.user.passwordConfirm.value.length) {
    //       this.user.passwordConfirm.error = 'This field is required!';
    //       return (this.user.passwordConfirm.validated = false);
    //     }
    //     else if (this.user.password.value !== this.user.passwordConfirm.value) {
    //       this.user.passwordConfirm.error = 'Your passwords do not match';
    //       return (this.user.passwordConfirm.validated = false);          
    //     } else {
    //       this.user.passwordConfirm.error = '';
    //       return (this.user.passwordConfirm.validated = true);
    //     }
    //   }
    // }
  },
  components: { AppButton }
}
</script>
<style lang="stylus" scoped>
  @import '../../styles/form';
</style>