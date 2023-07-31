import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: () => import('../views/Home/components/myHome.vue') },
  { path: '/video/:id', component: () => import('../views/Video/myVideo.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
