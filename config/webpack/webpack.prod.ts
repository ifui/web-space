import common from './webpack.common'
import SettingCss from './settings/css'
import SettingHtml from './settings/html'
import SettingImages from './settings/images'
import SettingIconfont from './settings/iconfont'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import WebpackBar from 'webpackbar'
import { merge } from 'webpack-merge'
import { IBuildConfig } from '../../types/IBuildConfig'
import SettingProd from '../setting-prod'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { IE8Plugin } from '../../utils/supportIE8'

const webpack = (config: IBuildConfig) => {
  // 获取 name 值，设置编译输出目录
  const Setting = SettingProd(config)
  return merge(common, {
    mode: 'production',
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
      // 自动清空已有旧文件
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [config.name, `${config.name}.html`]
      }),
      // 分离样式到CSS文件
      new MiniCssExtractPlugin({
        filename: Setting.path.css
      }) as any,
      ...IE8Plugin(Setting),
      // 设置html模板生成路径
      Setting.HtmlWebpackPlugins as HtmlWebpackPlugin
    ],
    module: {
      rules: [
        // css
        ...SettingCss(Setting, config),
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
