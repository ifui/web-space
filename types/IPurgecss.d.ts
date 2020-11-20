/**
 * 分离无用 CSS 白名单
 */
export interface IPurgecssSafelist {
  // 标准写法
  standard?: Array<RegExp | string>
  deep?: RegExp[]
  greedy?: RegExp[]
  variables?: Array<RegExp | string>
  keyframes?: Array<RegExp | string>
}
