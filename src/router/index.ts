/*
 * @Author: rocco.liu 2863433495@qq.com
 * @Date: 2023-04-12 00:06:55
 * @LastEditors: rocco.liu 2863433495@qq.com
 * @LastEditTime: 2023-05-05 23:00:00
 * @FilePath: /ytjj-vite-vue3/src/router/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue';

import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: "/login",
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
