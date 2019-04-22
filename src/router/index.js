import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: () => import(/* webpackChunkName: "signin" */ '@/views/SignIn.vue')
    },
    {
      path: '/sign-up',
      name: "SignUp",
      component: () => import(/* webpackChunkName: "signup" */ '@/views/Register.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (this.$store.getters.isLoggedIn) {
      next()
      return
    }
    next('/sign-in')
  } else {
    next()
  }
})

export default router
