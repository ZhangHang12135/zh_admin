import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './router'
import { setTitle } from '@/lib/util'
Vue.use(Router)

const router = new Router({
  routes
})

// 全局守卫
router.beforeEach((to, from, next) => {
  // 路由实例存在路由元，就改变title
  to.meta && setTitle(to.meta.title)
  next()
})

export default router
