import path from 'path'
import glob from 'glob'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { ISetting, IBuildConfig } from '../../../types'

export default (Setting: ISetting, config: IBuildConfig) => [
  // css
  {
    test: /\.css$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          // css中的图片路径增加前缀
          publicPath: Setting.publicPath.image
        }
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 2
        }
      },
      {
        loader: 'postcss-loader'
      },
      {
        loader: 'sass-loader'
      }
    ]
  },
  // sass
  {
    test: /\.scss$/,
    exclude: /\.module\.scss$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          // css中的图片路径增加前缀
          publicPath: Setting.publicPath.image,
          esModule: false
        }
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 2
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              [
                '@fullhuman/postcss-purgecss',
                {
                  content: [
                    ...glob.sync(
                      path.join(__dirname, '../../../src/views/**/*'),
                      {
                        nodir: true
                      }
                    ),
                    ...glob.sync(
                      path.join(__dirname, '../../../src/components/**/*'),
                      {
                        nodir: true
                      }
                    )
                  ],
                  safelist: config.cssSafelist, // 白名单
                  variables: true // 去除未使用变量
                }
              ]
            ]
          }
        }
      },
      {
        loader: 'sass-loader'
      }
    ]
  },
  // module sass
  {
    test: /\.module\.scss$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          // css中的图片路径增加前缀
          publicPath: Setting.publicPath.image,
          esModule: false
        }
      },
      {
        loader: '@teamsupercell/typings-for-css-modules-loader',
        options: {
          formatter: 'prettier'
        }
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
          modules: {
            compileType: 'module',
            localIdentName: '__[local]--[hash:base64:8]'
          }
        }
      },
      {
        loader: 'postcss-loader'
      },
      {
        loader: 'sass-loader'
      }
    ]
  }
]
