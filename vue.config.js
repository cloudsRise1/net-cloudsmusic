const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

const { defineConfig } = require('@vue/cli-service')


module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
    configureWebpack: {
      // provide the app's title in webpack's name field, so that
      // it can be accessed in index.html to inject the correct title.
      resolve: {
          alias: {
              '@': resolve('src')
          }
      }
  },
  devServer: { 
    proxy: {//解决跨域问题
        '/api': {
            // 此处的写法，目的是为了 将 /api 替换成 https://autumnfish.cn/
            target: 'https://autumnfish.cn',
            // 允许跨域
            changeOrigin: true,
            ws: true,
            pathRewrite: {
                '^/api': ''
            }
        }
    }
  }
})
