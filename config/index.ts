import { IBuildConfig } from '../types'

const Config: IBuildConfig[] = [
  {
    name: 'index',
    title: 'web-space',
    minify: true,
    devServer: true,
    build: true,
    ie8: true,
  },
]

export default Config
