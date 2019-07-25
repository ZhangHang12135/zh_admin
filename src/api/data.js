import axios from './index'

export const getTableData = () => {
  return axios.request({
    url: '/getTableData',
    method: 'post'
  })
}
export const getBigData = () => {
  return axios.request({
    url: '/getBigData',
    method: 'post'
  })
}
