// 路由
export const routerMap = [
  {
    path: '/',
    name: 'layout',
    meta: {
      title: '首页'
    },
    component: () => import('@/views/layout.vue')
  }
]
// 通用路由
export const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/login.vue')
  },
  {
    path: '*',
    component: () => import('@/views/error-page/error_404.vue')
  }
]
