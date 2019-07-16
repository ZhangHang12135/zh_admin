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
    path: '/401',
    name: 'error_401',
    component: () => import('@/views/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    component: () => import('@/views/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    component: () => import('@/views/error-page/404.vue')
  }
]
