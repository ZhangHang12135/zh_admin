# zh_admin

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Bug
- [x] 动态权限加载，f5刷新主页，跳到404
  - 重复添加了\*路由，在beforeEach之前，页面就跳转到了404,过滤掉\*路由即可
- [X] 收缩菜单，显示二级菜单，右侧显示不全，被切掉了
  - 在layout页面设置了overflow: hidden,为了滚动，将超出的隐藏了，将dropdown设置transfer,即弹出层到body层就不会被切掉了
- [ ] 收缩菜单，鼠标移到三级菜单，二级菜单消失 -- 2019-7-22
- [ ] 收起侧边菜单，标题闪烁 -- 2019-7-22 14:54
  - 我想了一下，是因为菜单栏是慢慢展开的，展开到一般的时候，标题就显现了。
- [ ] 表格分页块，在数据未显示的时候就出来了，比较突兀

### 系统流程
登录页 => 登录 => 两次请求（login,getUserInfo），并将个人信息，token存在state,Cookie => 路由准备跳转(一般是首页)
=> 全局守卫拦截并发送验证请求（authorization）=> 后台验证token,并返回该用户路由权限（rules）=> 合并路由并动态挂载上去
=> 跳转到首页 => 菜单栏根据当前用户路由生成
