import path from 'path'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import webpack from 'webpack'

const config: webpack.Configuration = {
  // 编译输出的js及路径
  output: {
    filename: 'js/[name].js?[hash]',
    path: path.resolve(__dirname, '../dist'),
  },
  // 追溯源代码错误
  devtool: 'source-map',
  module: {
    rules: [
      // art-template
      {
        test: /\.art$/,
        loader: 'art-template-loader',
        options: {
          // art-template options (if necessary)
          // @see https://github.com/aui/art-template
        },
      },
      // 解决ES6转ES5
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      // 解决ES6转ES5
      {
        test: /\.ts$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-typescript'],
        },
      },
      // eslint
      {
        test: /\.(tsx|jsx|ts|js)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader',
        enforce: 'pre', //预处理
        options: {
          formatter: require('eslint-friendly-formatter'), // 指定错误报告的格式规范
        },
      },
    ],
  },
  resolve: {
    // 别名
    alias: {
      '@': path.resolve(__dirname, '../../src'),
    },
    extensions: ['.ts', '.js'],
  },
  optimization: {
    minimizer: [
      // 解决IE8“缺少标识符”错误
      new UglifyJsPlugin({
        uglifyOptions: {
          ie8: true,
        },
      }),
    ],
    // 单独打包
    splitChunks: {
      cacheGroups: {
        jquery: {
          test: /jquery-1x/,
          name: 'static/js/jquery-1x',
          chunks: 'all',
        },
      },
    },
  },
}

export default config
