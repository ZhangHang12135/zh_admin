import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './router'
import { setTitle, getToken } from '@/lib/util'
import store from '@/store'
Vue.use(Router)

const router = new Router({
  routes
})

// 全局守卫
router.beforeEach((to, from, next) => {
  // 路由实例存在路由元，就改变title
  to.meta && setTitle(to.meta.title)
  // 权限验证
  const token = getToken()
  if (token) {
    // 判断是否登录，即是否获取当前用户路由权限列表
    if (!store.state.router.hasGetRules) {
      store.dispatch('authorization').then(rules => {
        console.log('rules----', rules)
        store.dispatch('concatRoutes', rules).then(routers => {
          router.addRoutes(routers)
          next({ ...to, replace: true })
        }).catch(() => {
          next({ name: 'login' })
        })
      })
    } else {
      // 这里权限不够要跳到401页面
      // 先这样写着
      // 已登录无法回到登录页面
      if (to.name === 'login') next({ name: 'layout' })
      else next()
    }
  } else {
    if (to.name === 'login') next()
    else next({ name: 'login' })
  }
})

export default router
