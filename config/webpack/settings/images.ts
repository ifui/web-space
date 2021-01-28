import { ISetting } from '../../../types'

export default (Setting: ISetting) => ({
  // 图片资源
  test: /\.(png|svg|jpg|gif|webp)$/,
  use: [
    {
      loader: 'url-loader',
      options: {
        // 图片输出的实际路径(相对于dist)
        outputPath: Setting.path.image,
        // 当小于某KB时转为base64
        limit: 10,
        esModule: false
      }
    }
  ]
})
