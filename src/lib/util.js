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

export const setTitle = (title = 'Senven') => {
  window.document.title = title
}
