import common from './webpack.common'
import path from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import SettingDev from '../setting-dev'
import WebpackBar from 'webpackbar'
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
      host: '127.0.0.1',
      port: 8080,
      hot: false,
    },
    // 入口js路径
    entry: Setting.entry,
    // 编译输出的js及路径
    output: {
      filename: Setting.path.js,
      path: Setting.path.output,
      publicPath: Setting.publicPath.output,
    },
    plugins: [
      // 启动进度条
      new WebpackBar({}),
      // 分离样式到CSS文件
      new MiniCssExtractPlugin({
        filename: Setting.path.css,
      }),
      ...IE8Plugin(Setting),
      // 设置html模板生成路径
      ...(Setting.HtmlWebpackPlugins as []),
    ],
    module: {
      rules: [
        // css
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // css中的图片路径增加前缀
                publicPath: Setting.publicPath.image,
              },
            },
            {
              loader: 'css-loader', // 将 CSS 转化成 CommonJS 模块
            },
            {
              loader: 'postcss-loader', // 自动添加浏览器前缀
            },
          ],
        },
        // sass
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // css中的图片路径增加前缀
                publicPath: Setting.publicPath.image,
                esModule: false,
              },
            },
            {
              loader: 'css-loader', // 将 CSS 转化成 CommonJS 模块
            },
            {
              loader: 'postcss-loader', // 自动添加浏览器前缀
            },
            {
              loader: 'sass-loader', // 将 Sass 编译成 CSS
            },
          ],
        },
        // HTML 图片提取打包
        {
          test: /\.(html)$/,
          use: {
            loader: 'html-loader',
            options: {
              attributes: {
                list: [
                  {
                    tag: 'img',
                    attribute: 'data-src',
                    type: 'src',
                  },
                ],
              },
              minimize: true,
            },
          },
        },
        // 图片资源
        {
          test: /\.(png|svg|jpg|gif|webp)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                // 图片输出的实际路径(相对于dist)
                outputPath: Setting.path.image,
                // 当小于某KB时转为base64
                limit: 10,
                esModule: false,
              },
            },
          ],
        },
        // iconfont
        {
          test: /\.(woff|woff2|eot|ttf|svg)$/,
          use: {
            loader: 'file-loader',
            options: {
              // 保留原文件名和后缀名
              name: '[name].[ext]',
              // 输出到dist/目录
              outputPath: Setting.path.iconfont,
            },
          },
        },
      ],
    },
  })
}

export default webpack
