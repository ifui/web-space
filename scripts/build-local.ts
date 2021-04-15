import webpack from 'webpack'
import config from '../config'
import webpackLocalConfig from '../config/webpack/webpack.local'

// 线上环境配置
const multipleConfig: webpack.Configuration[] = []

config.forEach(val => {
  if (val.build) multipleConfig.push(webpackLocalConfig(val))
})

if (multipleConfig.length === 0) {
  throw new Error(
    '需要编译文件为空，请确保 config/index.ts 中至少一项存在 build 为 true'
  )
}

// console.log(webpackConfig)

webpack(multipleConfig, (err, stats) => {
  if (err) {
    console.error(err.stack || err)
    return
  }

  const info = stats.toJson()

  if (stats.hasErrors()) {
    console.error(info.errors)
  }

  if (stats.hasWarnings()) {
    console.warn(info.warnings)
  }

  // 输出成功消息
  console.log(
    stats.toString({
      colors: true
    })
  )
})
