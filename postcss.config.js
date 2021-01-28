/* eslint-disable @typescript-eslint/no-var-requires */
// const path = require('path')
// const glob = require('glob')

module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    require('autoprefixer'),
    require('postcss-nested'),
    require('postcss-flexbugs-fixes')
    // 按需加载CSS
    //   require('@fullhuman/postcss-purgecss')({
    //     content: [
    //       ...glob.sync(path.join(__dirname, './src/views/**/*'), {
    //         nodir: true
    //       }),
    //       ...glob.sync(path.join(__dirname, './src/components/**/*'), {
    //         nodir: true
    //       })
    //     ],
    //     safelist: config.cssSafelist, // 白名单
    //     variables: true // 去除未使用变量
    //   })
  ]
}
