// 路由
import Main from '@/views/layout.vue'
export const routerMap = [
  {
    path: '/',
    name: 'layout',
    component: Main,
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
  },
  {
    path: '/components',
    name: 'components',
    meta: {
      title: '组件页',
      icon: 'meiguoduichang'
    },
    component: Main,
    children: [
      {
        path: 'edit_table',
        name: 'edit_table',
        meta: {
          title: '可编辑表格',
          icon: 'fuchouzhelianmeng-meiguoduichang1'
        },
        component: () => import('@/views/edit-table.vue')
      },
      {
        path: 'big_data_table',
        name: 'big_data_table',
        meta: {
          title: '大数据表格',
          icon: 'fuchouzhelianmeng-leishen'
        },
        component: () => import('@/views/bigData-table.vue')
      }
    ]
  },
  {
    path: '/',
    name: '_icon_page',
    component: Main,
    children: [
      {
        path: 'icon_page',
        name: 'icon_page',
        meta: {
          title: '图标',
          icon: 'meiguoduichang_zuoyetiaodu'
        },
        component: () => import('@/views/icon-page.vue')
      }
    ]
  },
  {
    path: '/blog',
    name: 'blog',
    meta: {
      title: '个人博客',
      icon: 'zhizhuxia'
    }
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
