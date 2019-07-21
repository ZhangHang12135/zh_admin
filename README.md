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
- [] 收缩菜单，显示二级菜单，右侧显示不全，被切掉了
