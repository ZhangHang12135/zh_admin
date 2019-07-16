import axios from './index'

export const login = ({ userName, password }) => {
  return axios.request({
    url: '/login',
    data: {
      userName,
      password
    },
    method: 'post'
  })
}

export const authorization = () => {
  return axios.request({
    url: '/authorization',
    method: 'get'
  })
}

export const getUserInfo = (token) => {
  return axios.request({
    url: '/getUserInfo',
    params: {
      token
    },
    method: 'get'
  })
}
