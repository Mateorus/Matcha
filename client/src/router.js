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
      component: () => import('./views/Auth'),
      children: [
        {
          path: '',
          component: () => import('./components/Auth/Welcome')
        },
        {
          path: 'signup',
          component: () => import('./components/Auth/SignUp')
        },
        {
          path: 'signin',
          component: () => import('./components/Auth/SignIn')
        },
        {
          path: 'reset-password',
          component: () => import('./components/Auth/ResetPassword')
        },
        {
          path: 'success',
          name: 'auth-success',
          component: () => import('./components/Auth/AuthSuccess'),
          props: true
        }

      ]
    },
    {
      path: '/server-error',
      component: () => import('./components/common/ServerError')
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

async function authorizeToken(next) {
  next();
}

export default router;
