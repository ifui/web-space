import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { IBuildConfig } from '../types'

/**
 * 获取 HtmlWebpackPlugin
 *
 * @param name
 * @param minify
 */
const getHtmlWebpackPlugin = (config: IBuildConfig[]) => {
  const htmlPlugins = config.map(val => {
    return new HtmlWebpackPlugin({
      filename: `${val.name}.html`,
      template: path.resolve(
        __dirname,
        `../src/views/${val.name}/html/index.art`
      ),
      chunks: [val.name],
      minify: val.minify ? val.minify : true,
      title: val.title,
    })
  })
  return htmlPlugins
}

export default getHtmlWebpackPlugin
