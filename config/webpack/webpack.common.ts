import path from 'path'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import webpack from 'webpack'

const config: webpack.Configuration = {
  // 编译输出的js及路径
  output: {
    filename: 'js/[name].js?[hash]',
    path: path.resolve(__dirname, '../dist')
  },
  // 追溯源代码错误
  devtool: 'source-map',
  plugins: [
    new webpack.ProvidePlugin({
      react: 'anujs/dist/ReactIE'
    })
  ],
  module: {
    rules: [
      // support tsx | jsx
      {
        test: /\.(tsx|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/typescript'],
          plugins: [['@babel/plugin-transform-react-jsx']]
        }
      },
      // art-template
      {
        test: /\.art$/,
        loader: 'art-template-loader',
        options: {
          // art-template options (if necessary)
          // @see https://github.com/aui/art-template
        }
      },
      // 解决ES6转ES5
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      // 解决ES6转ES5
      {
        test: /\.ts$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-typescript']
        }
      },
      // eslint
      {
        test: /\.(ts|js｜tsx|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader',
        enforce: 'pre', // 预处理
        options: {
          formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
        }
      }
    ]
  },
  resolve: {
    // 别名
    alias: {
      '@': path.resolve(__dirname, '../../src'),
      // react: 'anujs',
      // 'react-dom': 'anujs',
      // For compatibility with IE please use the following configuration
      react: 'anujs/dist/ReactIE',
      'react-dom': 'anujs/dist/ReactIE',
      redux: 'anujs/lib/ReduxIE', /// This is mainly for IE6-8, because of the poor performance of the isPlainObject method in the official source code.
      // If you reference prop-types or create-react-class
      // Need to add the following alias
      'prop-types': 'anujs/lib/ReactPropTypes',
      'create-react-class': 'anujs/lib/createClass',
      // If you use the onTouchTap event on the mobile side
      // 'react-tap-event-plugin': 'anujs/lib/injectTapEventPlugin'
      devtools: 'anujs/lib/devtools'
    },
    extensions: ['.ts', '.js', '.tsx', 'jsx']
  },
  optimization: {
    minimizer: [
      // 解决IE8“缺少标识符”错误
      new UglifyJsPlugin({
        uglifyOptions: {
          ie8: true
        },
        sourceMap: true
      })
    ],
    // 单独打包
    splitChunks: {
      cacheGroups: {
        jquery: {
          test: /jquery-1x/,
          name: 'static/js/jquery-1x',
          chunks: 'all'
        }
      }
    }
  }
}

export default config
