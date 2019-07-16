import Mock from 'mockjs'
import { login, authorization } from './response/login'
import { getUserInfo } from './response/user'

// Mock.setup({
//   timeout: 1000
// })

// 拦截并响应
Mock.mock(/\/login/, 'post', login)
Mock.mock(/\/getUserInfo/, 'get', getUserInfo)
Mock.mock(/\/authorization/, 'get', authorization)

export default Mock
