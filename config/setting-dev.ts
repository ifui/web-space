import path from 'path'
import getEntry from '../utils/getEntry'
import createHtmlWebpackPlugin from '../utils/createHtmlWebpackPlugin'
import { ISetting, IBuildConfig } from '../types'

/**
 * 开发环境配置
 * @param config 配置文件
 */
const SettingDev = (config: IBuildConfig[]) => {
  const setting: ISetting = {
    entry: getEntry(config),
    path: {
      js: 'js/[name].js',
      css: 'css/[name].css',
      iconfont: 'iconfont',
      image: 'images',
      output: path.resolve(__dirname, '../dist'),
    },
    publicPath: {
      output: '',
      css: '../../',
      iconfont: '../../',
      image: '../../',
    },
    HtmlWebpackPlugins: createHtmlWebpackPlugin.multiplePlugin(config),
    ie8: config.some(val => val.ie8),
  }

  return setting
}

export default SettingDev
