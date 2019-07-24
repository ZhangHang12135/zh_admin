import { routeHasExist, getRouteById, routeEqual, localSave, localRead } from '@/lib/util'

/**
 * @description 将本地存储tabList映射统一格式
 * @param {Array} tabList
 */
const getTabListToLocal = tabList => {
  return tabList.map(item => {
    return {
      name: item.name,
      path: item.path,
      meta: item.meta,
      params: item.params,
      query: item.query
    }
  })
}
export default {
  state: {
    tabList: JSON.parse(localRead('tabList')) || [
      {
        path: '/path',
        name: 'home',
        meta: {
          title: '首页',
          icon: 'A'
        },
        params: {},
        query: {}
      }
    ]
  },
  mutations: {
    UPDATE_ROUTER (state, route) {
      if (!routeHasExist(state.tabList, route)) state.tabList.push(route)
      localSave('tabList', JSON.stringify(getTabListToLocal(state.tabList)))
    },
    REMOVE_TAB (state, index) {
      state.tabList.splice(index, 1)
      localSave('tabList', JSON.stringify(getTabListToLocal(state.tabList)))
    }
  },
  actions: {
    handleRemove ({ commit, state }, { id, $route }) {
      return new Promise((resolve) => {
        let route = getRouteById(id)
        let index = state.tabList.findIndex(item => {
          return routeEqual(route, item)
        })
        let len = state.tabList.length
        // 删除之后打开哪个标签页
        let nextRoute = {}
        // 若删除的标签页为当前标签页
        if (routeEqual($route, state.tabList[index])) {
          if (index < len - 1) nextRoute = state.tabList[index + 1]
          else nextRoute = state.tabList[index - 1]
        }
        const { name, params, query } = nextRoute || { name: 'home' }
        commit('REMOVE_TAB', index)
        resolve({
          name, params, query
        })
      })
    }
  }
}
