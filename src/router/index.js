import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

// 定义路由
export const constantRoutes=[
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
            meta: { title: '首页', icon: 'dashboardmain' }
          }]    
    },
    {
        path: '*',
        component: () => import('@/view/404'),
        hidden: true
    }
]

export const asyncRoutes = [   
    {
      path: '/system',
      component: Layout,
      name:'系统设置',
      redirect:'/system/systemConfig',
      meta: { title: '系统管理', icon: 'email' },
      children: [
        {
          path: 'systemConfig',
          name: 'systemConfig',
          component: () => import('@/view/system/systemConfig'),
          meta: { title: '系统管理', icon: 'email' }
        },
        {
          path: 'netConfig',
          name: 'netConfig',
          component: () => import('@/view/system/netConfig'),
          meta: { title: '网站管理', icon: 'form' }
        }
      ]
    },
    


  ]

const createRouter = () => new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
  }
export default router