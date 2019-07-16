import axios from 'axios'
import { baseURL } from '@/config'
import { getToken } from './util'
// import { Spin } from 'iview'

class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {} // 请求队列
  }
  getInsideConfig () {
    const config = {
      basURL: this.baseUrl,
      headers: {
        // 请求头部设置
      }
    }
    return config
  }
  distroy (url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hiden()
    }
  }
  /**
   * @description 拦截器
   * @param {axios instance} instance
   * @param {url} url
   */
  interceptors (instance, url) {
    // 请求拦截器
    instance.interceptors.request.use(config => {
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
        // Spin.show()
      }
      // 请求队列+1
      this.queue[url] = true
      // 添加验证头
      config.headers['Authorizeation'] = getToken()
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 返回拦截器
    instance.interceptors.response.use(res => {
      this.distroy(url)
      // 直接拿到请求的数据
      const { data } = res
      return data
    }, error => {
      this.distroy(url)
      return Promise.reject(error.response.data)
    })
  }
  request (options) {
    const instance = axios.create()
    // 合并请求
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

export default HttpRequest
