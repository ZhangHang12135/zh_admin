import { login, authorization, getUserInfo } from '@/api/user'
import { setToken, getToken } from '@/lib/util'

export default {
  state: {
    userName: '',
    avatarImgPath: '',
    rules: {},
    token: getToken()
  },
  mutations: {
    SET_USER_NAME (state, name) {
      state.userName = name
    },
    SET_IMG (state, img) {
      state.avatarImgPath = img
    },
    SET_RULES (state, rules) {
      state.rules = rules
    },
    SET_TOKEN (state, token) {
      state.token = token
      setToken(token)
    }
  },
  actions: {
    login ({ commit }, { userName, password }) {
      return new Promise((resolve, reject) => {
        login({ userName, password }).then(res => {
          // console.log(res)
          if (res.code === 200 && res.data.token) {
            commit('SET_TOKEN', res.data.token)
            resolve()
          } else {
            reject(new Error('错误---error'))
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    authorization ({ commit }, token) {
      return new Promise((resolve, reject) => {
        authorization().then(res => {
          // 401证明权限不足，或者token不对
          if (parseInt(res.code) === 401) {
            reject(new Error('token error'))
          } else {
            commit('SET_TOKEN', res.data.token)
            resolve(res.data.rules.page)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    logout ({ commit }) {
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', '')
        resolve()
      })
    },
    getUserInfo ({ state, commit }) {
      return new Promise((resolve, reject) => {
        try {
          getUserInfo(state.token).then(res => {
            const data = res.data
            commit('SET_USER_NAME', data.userName)
            commit('SET_IMG', data.img)
            resolve(data)
          }).catch(err => {
            reject(err)
          })
        } catch (error) {
          reject(error)
        }
      })
    }
  }
}
