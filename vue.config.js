const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'prodution' ? '/' : '/'
// 检测是否是生产环境（打包），不是的话就是开发环境，直接在根目录下即可
module.exports = {
  lintOnSave: false,
  publicPath: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))// 表示用@代表到src这一级的目录 ex: @/api = ..src/api
      .set('_c', resolve('src/components'))
    config.module
      .rule('image')
      .test(/\.(jpg)$/)
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .end()
  },
  // 打包时，不生成.map文件,加快打包速度，减少生成体积
  productionSourceMap: false,
  devServer: {
    // proxy: 'http://localhost:3000'
    // 告诉开发服务器，将任何未知请求，就是没有匹配到任何静态文件的请求都代理到这个URL,来满足跨域需求
  }
}
