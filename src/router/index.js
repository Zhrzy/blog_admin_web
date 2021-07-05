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
            meta: { title: '首页', icon: 'dashboard' }
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
      path: '/tpage',
      component: Layout,
      name:'页面',
      redirect:'/tpage/tpage1',
      meta: { title: '页面', icon: 'form' },
      children: [
        {
          path: 'tpage1',
          name: 'Tpage',
          component: () => import('@/view/tpage/tpage1'),
          meta: { title: '页面1', icon: 'form' }
        },
        {
          path: 'tpage2',
          name: 'Tpage',
          component: () => import('@/view/tpage/tpage2'),
          meta: { title: '页面2', icon: 'form' }
        }
      ]
    }
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