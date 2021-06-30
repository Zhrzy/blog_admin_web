import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 定义路由
export const routes=[
    {
        path: '/',
        component: () => import('@/view/login/index'),
        hidden: true
    },
    {
        path: '*',
        component: () => import('@/view/404'),
        hidden: true
    },
    {
        path:'/dashboard',
        component: () => import('@/view/dashboard'),

    }
]

const createRouter = () => new Router({
    routes: routes
  })

const router = createRouter()
export default router