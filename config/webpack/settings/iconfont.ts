import { ISetting } from '../../../types'

export default (Setting: ISetting) => ({
  // iconfont
  test: /\.(woff|woff2|eot|ttf|svg)$/,
  use: {
    loader: 'file-loader',
    options: {
      // 保留原文件名和后缀名
      name: '[name].[ext]',
      // 输出到dist/目录
      outputPath: Setting.path.iconfont
    }
  }
})
