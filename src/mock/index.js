import Mock from 'mockjs'
import { login, authorization } from './response/login'
import { getUserInfo } from './response/user'
import { getTableData } from './response/data'

// Mock.setup({
//   timeout: 1000
// })

// 拦截并响应
Mock.mock(/\/login/, 'post', login)
Mock.mock(/\/getUserInfo/, 'get', getUserInfo)
Mock.mock(/\/authorization/, 'get', authorization)
Mock.mock(/\/getTableData/, 'post', getTableData)

export default Mock
