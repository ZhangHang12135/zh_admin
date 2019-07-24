export const login = (options) => {
  return {
    code: 200,
    data: {
      token: 'xxx'
    },
    mes: 'Welcome'
  }
}
export const authorization = (options) => {
  let response = {
    code: 200,
    data: {
      token: 'xxx',
      rules: {
        page: {
          layout: true,
          home: true,
          // 组件页
          components: true,
          edit_table: true,
          big_data_table: true,
          // 图标页
          _icon_page: true,
          icon_page: true,
          // 个人博客
          blog: true
        }
      },
      mes: '认证成功'
    }
  }
  return response
}
