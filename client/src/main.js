import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import VuePageTransition from 'vue-page-transition';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VuePageTransition);
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
