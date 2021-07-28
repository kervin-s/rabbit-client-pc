import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Layout from '../views/Layout/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: () =>
          import(/* webpackChunkName: "home" */ '@/views/Home/index.vue'),
        meta: {
          title: 'Home',
          keepAlive: false
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/Login/index.vue'),
    meta: {
      title: 'Login',
      keepAlive: false
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
