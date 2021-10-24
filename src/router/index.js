/*
 * @Description:router
 * @Author: kervin
 * @Date: 2021-10-24 16:29:48
 * @FilePath: \rabbit-client-pc\src\router\index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'
const Layout = () => import('@/views/Layout/index.vue')
const Home = () => import('@/views/home/index.vue')

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      /* 主页 */
      {
        path: '/',
        name: 'Home',
        component: Home
      }]
  },
  { path: '/login', component: () => import('@/views/login/index.vue') },
  { path: '/login/callback', component: () => import('@/views/login/callback.vue') }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
