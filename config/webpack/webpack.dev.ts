import common from './webpack.common'
import path from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import SettingDev from '../setting-dev'
import WebpackBar from 'webpackbar'
import SettingCss from './settings/css_dev'
import SettingHtml from './settings/html'
import SettingImages from './settings/images'
import SettingIconfont from './settings/iconfont'
import { merge } from 'webpack-merge'
import { IBuildConfig } from '../../types/IBuildConfig'
import { IE8Plugin } from '../../utils/supportIE8'

const webpack = (config: IBuildConfig[]) => {
  // 获取 name 值，设置编译输出目录
  const Setting = SettingDev(config)
  return merge(common, {
    mode: 'development',
    // 热更新
    devServer: {
      contentBase: path.resolve(__dirname, '../../dist'),
      host: '0.0.0.0',
      port: 8080,
      hot: false
    },
    // 入口js路径
    entry: Setting.entry,
    // 编译输出的js及路径
    output: {
      filename: Setting.path.js,
      path: Setting.path.output,
      publicPath: Setting.publicPath.output
    },
    plugins: [
      // 启动进度条
      new WebpackBar({}),
      // 分离样式到CSS文件
      new MiniCssExtractPlugin({
        filename: Setting.path.css
      }),
      ...IE8Plugin(Setting),
      // 设置html模板生成路径
      ...(Setting.HtmlWebpackPlugins as [])
    ],
    module: {
      rules: [
        // css
        ...SettingCss(Setting),
        // html
        SettingHtml(),
        // png jpg...
        SettingImages(Setting),
        // iconfont
        SettingIconfont(Setting)
      ]
    }
  })
}

export default webpack
