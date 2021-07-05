import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

// 定义路由
export const routes=[
    {
        path: '/login',
        component: () => import('@/view/login/index'),
        hidden: true
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [{
            path: 'dashboard',
            name: 'Dashboard',
            component: () => import('@/view/dashboard/index'),
            meta: { title: '首页', icon: 'dashboard' }
          }]    
    },
    {
        path: '*',
        component: () => import('@/view/404'),
        hidden: true
    }
]

const createRouter = () => new Router({
    routes: routes
  })

const router = createRouter()
export default router