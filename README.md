# web-space 标准前端脚手架

> 这款脚手架工具主要是为了方便还在使用 `CMS` 模版语法的程序员
>
> 在这个 `vue` `react` 等前端技术流行的时代，依然还在使用 `CMS` 语法的程序员想必一定是十分无奈
>
> 因为用不到最新的技术栈，无疑是非常吃亏的，而且往往会要求程序员兼容低版本的`IE8`
>
> 编写一个网页需要花费很大的功夫
>
> 在本脚手架中你只要正常使用 TS+ES6 语法，剩下的我来搞定
>
> 所幸你可以使用这个脚手架，在用到最新技术的同时，也可以极大加快你的开发速度，相信我，你的选择没有错

## 特性

- 支持 `TypeScript`
- 支持 `IE8+`
- 支持 `JSX`
- 支持多页面多入口开发
- 支持按需打包，按需开发，加快构建速度
- 默认使用 `SCSS`
- 默认使用 `art-template` 模板语法，可以极大减少代码量
- 编译时自动去除无用 `CSS` 样式，减小文件大小
- 可选择是否压缩 `JS` 或者 `HTML` 文件
- 为资源文件自动生成 `URL`，不必担心线上找不到路径
- 配置简单明了，所有配置均可在 `config/setting-*` 中进行修改

## 快速上手

### 安装

`git clone https://github.com/ifui/web-space.git`

`cd web-space`

`npm install`

### 运行

`npm run serve`

### 本地打包

`npm run build-local`

### 线上打包

`npm run build-prod`
