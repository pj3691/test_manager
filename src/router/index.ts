import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/LoginView.vue')
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: () => import('@/views/home/HomePage.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
