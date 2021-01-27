import CopyWebpackPlugin from 'copy-webpack-plugin'
import webpack from 'webpack'
import chalk from 'chalk'
import { ISetting } from '../types'

const IE8Plugin = (Setting: ISetting) => {
  if (!Setting.ie8) {
    return []
  }
  console.log(chalk.green('✔ 已启用IE8支持'))
  return [
    // 全局应用JQuery 1.x版本（支持IE8）
    new webpack.ProvidePlugin({
      $: 'jquery-1x',
      jQuery: 'jquery-1x',
      'window.jQuery': 'jquery-1x'
    }),
    // 将包直接复制过去
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/statics/support-ie',
          to: Setting.publicPath.output + 'support-ie'
        }
      ]
    })
  ]
}

export { IE8Plugin }
