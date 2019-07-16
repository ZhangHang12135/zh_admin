import Mock from 'mockjs'

const Random = Mock.Random

Random.extend({
  imgs () {
    const icons = ['zhizhuxia6', 'zhongjizhizhuxia', 'duye', 'sishi4', 'zhizhugewen']
    return this.pick(icons)
  }
})

export const getUserInfo = (options) => {
  const template = {
    userName: Random.cname(),
    img: Random.imgs()
  }
  return {
    code: 200,
    data: Mock.mock(template),
    mes: '用户信息'
  }
}
