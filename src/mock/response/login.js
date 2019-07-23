export const login = () => {
  return {
    code: 200,
    data: {
      token: 'xxx'
    },
    mes: 'Welcome'
  }
}
export const authorization = () => {
  return {
    code: 200,
    data: {
      token: 'xxx',
      rules: {
        page: {
          home: true,
          layout: true,
          table_page: true,
          icon_page: true,
          table: true
        }
      },
      mes: '认证成功'
    }
  }
}
