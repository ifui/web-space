import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { ISetting } from '../../../types'

export default (Setting: ISetting) => [
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
        loader: 'postcss-loader'
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
