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
  let thisRules = {} // 当前用户权限
  if (token) {
    // 判断是否登录，即是否获取当前用户路由权限列表
    if (!store.state.router.hasGetRules) {
      store.dispatch('authorization').then(rules => {
        console.log('rules----', rules)
        thisRules = rules
        store.dispatch('concatRoutes', rules).then(routers => {
          // 路由挂载
          console.log(routers)
          router.addRoutes(routers)
          // 这样保证路由挂载之后跳转
          // console.log(router)
          next({ ...to, replace: true })
        }).catch(() => {
          next({ name: 'login' })
        })
      })
    } else {
      // 这里权限不够要跳到401页面

      // 已登录无法回到登录页面
      next()
      // if (to.name === 'login') next({ name: 'layout' })
      // else if (thisRules[to.name]) next()
      // else next({ name: 'error_401' })
    }
  } else {
    if (to.name === 'login') next()
    else next({ name: 'login' })
  }
})

export default router
