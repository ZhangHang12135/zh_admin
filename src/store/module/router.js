import { routes, routerMap } from '@/router/router'

/**
 * @description 筛选出可访问页面
 * @param {Object} routes 路由实例列表
 * @param {Object} rules 可访问路由列表
 */
const getAccesRouterList = (routes, rules) => {
  return routes.filter(item => {
    // 这里过滤掉没有name字段的，就把*路由过滤掉了,
    // 这样在路由渲染之前，没有404页面的，就不会先跳到404页面
    // mmp,搞了两天
    if (rules[item.name]) {
      if (item.children) item.children = getAccesRouterList(item.children, rules)
      return true
    } else return false
  })
}
export default {
  state: {
    routers: routes,
    hasGetRules: false
  },
  mutations: {
    CONCAT_ROUTES (state, routerList) {
      state.routers = []
      state.routers = routerList.concat(routes)
      state.hasGetRules = true
    }
  },
  actions: {
    /**
     * @param { rules } (规则，可访问页面列表)路由权限列表
     */
    concatRoutes ({ state, commit }, rules) {
      return new Promise((resolve, reject) => {
        try {
          let routerList = []
          if (Object.entries(rules).every(item => item[1])) {
            // 所有路由都可用
            routerList = routerMap
          } else {
            routerList = getAccesRouterList(routerMap, rules)
          }
          commit('CONCAT_ROUTES', routerList)
          resolve(state.routers)
        } catch (err) {
          reject(err)
        }
      })
    }
  }
}
