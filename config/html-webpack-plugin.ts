import path from 'path'
import { IBuildConfig } from '../types'

const htmlWebpackPluginOptions = (config: IBuildConfig) => {
  return {
    filename: `${config.name}.html`,
    template: path.resolve(
      __dirname,
      `../src/views/${config.name}/html/index.art`
    ),
    chunks: [config.name],
    minify: config.minify ? config.minify : true,
    title: config.title,
  }
}

export default htmlWebpackPluginOptions
