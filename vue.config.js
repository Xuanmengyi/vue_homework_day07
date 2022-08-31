const {
  defineConfig
} = require('@vue/cli-service')
const {
  join
} = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      open: true,
      port: 8888,
      host: 'localhost'
    },
    resolve: {
      alias: {
        cpns: join(__dirname, 'src/components')
      }
    }
  }
})
