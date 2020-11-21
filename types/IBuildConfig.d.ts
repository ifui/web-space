import { IPurgecssSafelist } from '../types/IPurgecss'

/**
 * 构建表模型
 * @param name 名称
 * @param title 站点名称
 * @param path 编译输出路径
 * @param minify 是否压缩 默认 true
 * @param hash 生成资源文件链接后是否添加唯一 HASH 值
 * @param cssSafelist 分离无用css白名单
 * @param build 是否需要编译输出
 * @param devServer 本地测试服务时，是否启动（建议不需要的关闭，加快编译速度），默认 false
 * @param webpackConfig webpack配置文件路径
 * @param ie8 是否需要支持IE8
 */
export interface IBuildConfig {
  name: string
  title: string
  minify?: boolean
  hash?: boolean
  cssSafelist?: IPurgecssSafelist | Array<string | RegExp>
  build?: boolean
  devServer?: boolean
  webpackConfig?: string
  ie8?: boolean
}
