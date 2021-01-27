import HtmlWebpackPlugin from 'html-webpack-plugin'
import htmlWebpackPluginOptions from '../config/html-webpack-plugin'
import { IBuildConfig } from '../types'

export default class createHtmlWebpackPlugin {
  static multiplePlugin(config: IBuildConfig[]) {
    let options: HtmlWebpackPlugin.Options
    const htmlPlugins = config.map(val => {
      options = htmlWebpackPluginOptions(val)
      return new HtmlWebpackPlugin(options)
    })
    return htmlPlugins
  }

  static singlePlugin(config: IBuildConfig) {
    const options = htmlWebpackPluginOptions(config)
    return new HtmlWebpackPlugin(options)
  }
}
