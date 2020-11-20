import path from 'path'
import { IBuildConfig } from '../types'

/**
 * 获取入口
 *
 * @param name
 */
const getEntry = function (config: IBuildConfig[]) {
  let entries: any = {}
  config.forEach(val => {
    entries[val.name] = path.resolve(
      __dirname,
      `../src/views/${val.name}/index.ts`
    )
  })

  return entries
}

export default getEntry
