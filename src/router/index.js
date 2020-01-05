import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Home',
    meta: {
      title: '首页'
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ 'views/About.vue'),
    meta: {
      title: '关于'
    }
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta: {
      title: '子页面'
    },
  },
  {
    path: '/User/:userId',
    name: 'User',
    component: () => import('views/User.vue'),
    meta: {
      title: '用户'
    },
  },
  {
    path: '/Mine',
    name: 'Mine',
    component: () => import('views/Mine.vue'),
    meta: {
      title: '我的'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
