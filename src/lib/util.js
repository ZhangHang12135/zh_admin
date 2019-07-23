import Cookies from 'js-cookie'
import { cookieExpires } from '@/config'

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
