export const baseURL = process.env.NODE_ENV === 'production'
  ? '/api/'
  : ''
/**
 * @description token在Cookie中存储的天数
 */
export const cookieExpires = 1
