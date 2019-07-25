import { doCustomTimes } from '@/lib/tools'
import Mock from 'mockjs'

export const getTableData = () => {
  const template = {
    name: '@cname',
    'age|18-25': 0,
    email: '@email'
  }
  let arr = []
  doCustomTimes(100, () => {
    arr.push(Mock.mock(template))
  })
  return arr
}
export const getBigData = () => {
  const template = {
    name: '@cname',
    'age|18-45': 0,
    birthday: '@date',
    personalId: '@id',
    adress: '@city(true)',
    zip: '@zip'
  }
  let arr = []
  doCustomTimes(10000, () => {
    let item = Mock.mock(template)
    item = Object.values(item)
    arr.push(item)
  })
  return arr
}
