import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue';

import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: 'home',
        component: () => import('@/views/home/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')

  }
]


console.log(import.meta.env.BASE_URL);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),////
  routes
})

export default router
