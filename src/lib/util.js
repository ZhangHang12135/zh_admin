import Cookies from 'js-cookie'
import { cookieExpires } from '@/config'
import { doCustomTimes, objEqual } from './tools'

const TOKEN_KEY = 'token'

export const setToken = (token) => {
  Cookies.set(TOKEN_KEY, token, { expires: cookieExpires || 1 })
}
export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY)
  if (token) return token
  else return false
}

export const setTitle = (title = 'admin') => {
  window.document.title = title
}

export const setUser = ({ userName, avatarImgPath }) => {
  Cookies.set('user', JSON.stringify({ userName, avatarImgPath }), { expires: cookieExpires || 1 })
}
export const getUser = () => {
  const user = Cookies.get('user')
  if (user) return JSON.parse(user)
  else return false
}

/**
 * @description 判断routeItem 能否添加到tabList中
 * @param {Array} tabList
 * @param {route} routeItem
 */
export const routeHasExist = (tabList, routeItem) => {
  let len = tabList.length
  let res = false
  doCustomTimes(len, (index) => {
    if (routeEqual(tabList[index], routeItem)) res = true
  })
  return res
}
/**
 * @description 比较两个路由对象是否相同，实际是为了比较参数路由
 * @param {route} route1
 * @param {route} route2
 */
export const routeEqual = (route1, route2) => {
  const params1 = route1.params || {}
  const params2 = route2.params || {}
  const query1 = route1.query || {}
  const query2 = route2.query || {}
  return route1.name === route2.name && objEqual(params1, params2) && objEqual(query1, query2)
}
/**
 * @description 将路由对象route变成一个独立标识,ex: home:huisha_1&id_1
 * @param {route} route
 */
export const getTabNameByRoute = route => {
  const { name, params, query } = route
  let res = name
  if (params && Object.keys(params).length) res += ':' + getKeyValueArr(params).join('_')
  if (query && Object.keys(query).length) res += '&' + getKeyValueArr(query).join('_')
  return res
}
/**
 * @description 将对象按序排列成一个二维数组
 * @param {Object} obj
 */
const getKeyValueArr = obj => {
  let arr = []
  Object.entries(obj).sort((a, b) => {
    return a[0] - b[0]
  }).forEach(([_key, _val]) => {
    arr.push(_key, _val)
  })
  return arr
}
/**
 * @description 将独立标识百年城路由对象，和getTabNameByRoute相反
 * @param {String} id
 */
export const getRouteById = id => {
  let res = {}
  if (id.includes('&')) {
    res.query = getObjBySolitStr(id, '&')
    id = id.split('&')[0]
  }
  if (id.includes(':')) {
    res.params = getObjBySolitStr(id, ':')
    id = id.split(':')[0]
  }
  res.name = id
  return res
}
/**
 * @description 将独立标识的参数部分变成对象，ex: huisha_1 => {huisha: 1}
 * @param {String} id
 * @param {String} splitStr
 */
const getObjBySolitStr = (id, splitStr) => {
  let splitArr = id.split(splitStr)
  let str = splitArr[splitArr.length - 1]
  let keyValArr = str.split('_')
  let res = {}
  let i = 0
  let len = keyValArr.length
  while (i < len) {
    res[keyValArr[i]] = keyValArr[i + 1]
    i += 2
  }
  return res
}

export const localSave = (name, value) => {
  localStorage.setItem(name, value)
}
export const localRead = name => localStorage.getItem(name)
/**
 * @description 根据name值获得展开菜单数组
 * @param {String} name
 * @param {Route Array} routerList
 */
export const getOpenArrByName = (name, routerList) => {
  let arr = []
  routerList.some(item => {
    if (item.name === name) {
      arr.push(item.name)
      return true
    }
    if (item.children && item.children.length) {
      let childArr = getOpenArrByName(name, item.children)
      // 若存在，父级也得展开
      if (childArr.length) {
        arr = arr.concat(item.name, childArr)
        return true
      }
    }
  })
  return arr
}
