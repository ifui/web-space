import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import config from '../config'
import webpackDevConfig from '../config/webpack/webpack.dev'

// 开发环境配置

const filterConfig = config.filter(item => {
  return item.devServer
})

const webpackConfig = webpackDevConfig(filterConfig)

// console.log(webpackConfig)

const compiler = webpack(webpackConfig)

const devServerOptions = Object.assign(
  {},
  {
    port: 8080,
    host: 'localhost',
    stats: {
      colors: true,
      modules: false,
      assets: false,
      children: false,
      entrypoints: false
    }
  },
  webpackConfig.devServer
)

const server = new WebpackDevServer(compiler, devServerOptions)

server.listen(devServerOptions.port, devServerOptions.host)
