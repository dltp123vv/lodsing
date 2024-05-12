import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({
  history : createWebHashHistory(),
  routes : [
    {
      path: '/',
      name: 'main',
      component: () => import('@/components/Main.vue')
    },
    {
      path: '/region',
      name: 'region',
      component: () => import('@/components/Region.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
  

}) 


export default router
