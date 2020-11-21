import { IBuildPath, IPublicPath } from './index'
import HtmlWebpackPlugin from 'html-webpack-plugin'
/**
 * 配置文件
 */
interface ISetting {
  path: IBuildPath
  publicPath: IPublicPath
  entry: {}
  HtmlWebpackPlugins: HtmlWebpackPlugin | HtmlWebpackPlugin[]
  ie8?: boolean
}
