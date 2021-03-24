import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login'
import register from '../components/register'
import home from '../components/home'
import show from '../components/show'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/show',
      name: 'show',
      component: show
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
