import { ISetting, IBuildConfig } from '../types'
import createHtmlWebpackPlugin from '../utils/createHtmlWebpackPlugin'
import path from 'path'

/**
 * 线上环境配置
 * @param config 配置文件
 */
const SettingLocal = (config: IBuildConfig) => {
  const setting: ISetting = {
    entry: {
      [config.name]: `./src/views/${config.name}/index.ts`,
    },
    path: {
      js: `${config.name}/js/[name].js`,
      css: `${config.name}/css/[name].css`,
      iconfont: `${config.name}/iconfont`,
      image: `${config.name}/images`,
      output: path.resolve(__dirname, '../dist'),
    },
    publicPath: {
      output: '',
      css: '../../',
      iconfont: '../../',
      image: '../../',
    },
    HtmlWebpackPlugins: createHtmlWebpackPlugin.singlePlugin(config),
    ie8: config.ie8 ? config.ie8 : false,
  }

  return setting
}

export default SettingLocal
