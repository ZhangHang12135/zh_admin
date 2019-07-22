// 路由
export const routerMap = [
  {
    path: '/',
    name: 'layout',
    meta: {
      title: '首页',
      icon: 'A'
    },
    component: () => import('@/views/layout.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          title: '首页',
          icon: 'A'
        },
        component: () => import('@/views/home.vue')
      }
    ]
  }
]
// 通用路由
// 不加name
export const routes = [
  {
    path: '/login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/login.vue')
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401.vue')
  },
  {
    path: '/500',
    component: () => import('@/views/error-page/500.vue')
  },
  {
    path: '*',
    component: () => import('@/views/error-page/404.vue')
  }
]
