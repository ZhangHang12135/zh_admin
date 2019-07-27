import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './router'
import { setTitle, getToken, getUser } from '@/lib/util'
import store from '@/store'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes
})

// 全局守卫
router.beforeEach((to, from, next) => {
  // 路由实例存在路由元，就改变title
  to.meta && setTitle(to.meta.title)
  // 权限验证
  const token = getToken()
  const user = getUser()
  // let thisRules = {} // 当前用户权限
  if (token && user) {
    // 判断是否登录，即是否获取当前用户路由权限列表
    if (!store.state.router.hasGetRules) {
      store.dispatch('authorization', user.userName).then(rules => {
        store.dispatch('concatRoutes', rules).then(routers => {
          // 路由挂载
          router.addRoutes(routers)
          // 这样保证路由挂载之后跳转
          next({ ...to, replace: true })
        }).catch(() => {
          next({ path: '/login' })
        })
      })
    } else {
      if (to.path === '/login') {
        next({ name: 'home' })
      }
      if (to.name === 'layout') next({ name: 'home' })
      next()
    }
  } else {
    if (to.path === '/login') next()
    else next({ path: '/login' })
  }
})

export default router
