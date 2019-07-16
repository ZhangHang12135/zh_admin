import Mock from 'mockjs'

const Random = Mock.Random
export const getUserInfo = (options) => {
  const template = {
    userName: Random.cname(),
    img: Random.extend({
      imgs () {
        const icons = ['zhizhuxia6', 'zhongjizhizhuxia', 'duye', 'sishi4', 'zhizhugewen']
        return this.pick(icons)
      }
    })
  }
  return Mock.mock(template)
}
