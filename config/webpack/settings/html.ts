export default () => ({
  // HTML 图片提取打包
  test: /\.(html)$/,
  use: {
    loader: 'html-loader',
    options: {
      attributes: {
        list: [
          {
            tag: 'img',
            attribute: 'data-src',
            type: 'src'
          }
        ]
      },
      minimize: true
    }
  }
})
