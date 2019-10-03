import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'home',
      component: Home,
      meta : { requiresAuth: true }
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('./views/Auth')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth )) {
    store.getters.loggedIn ? next() : next('/auth');
  } else {
    next();
  }
});

export default router;
