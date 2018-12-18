## 项目解决的几个问题 :100:
1. react 前后端同构
2. ant.desin 主题文件配置
3. 模块的按需加载
4. 模块拆包
5. 响应式布局

## 项目介绍 :art:
1. 该项目前端主要使用了React + Redux + Immutable.js
2. 使用antd.desin作为主要UI组件
3. 前端构建工具使用webpack
4. 使用node.js搭建中层,转发后端数据接口,中间层采用Koa开发框架。

## 安装项目

1. `git clone https://leesx@gitlab.com/leesx/isomorphic-koa-react.git`
2. `cd isomorphic-koa-react`

## 启动项目 :rocket:
> 最重要的!!!:本项目运行环境  :bug:

1. node.js `^7.7.4`
2. npm `^4.2.1`
3. webpack `^1.14.0`
4. Koa `^2.2.0`

```
npm install  //安装依赖包
```
### 开发环境中 :fire:
1. 启动webpackserver静态资源服务器。启动端口:3031
```
npm run debug:client
```
2. 启动中间层nodejs服务器。启动端口:3032
```
npm run debug:server
```


- 也可以使用 `npm run debug` 合并以上命令启动。
- 在浏览器中打开 localhost:3032 查看本项目
#### 部署
```
#!/bin/sh
ls \platform
cd platform
git checkout dev
git pull
npm install
npm run build
nohup pm2 start npm -- run start &
```
### 其他说明 :tada:
```
                    src ----
                            |
                            |—————— client  // 主要存放前端资源文件
                            |
                            |—————— common  //前端跟服务器端公用的组件  ----------------------------------
                            |                                                                       |-----containers                                                                                                         |
                            |                                                                       |
                            |                                                                       |-----components
                            |                                                                       |
                            |                                                                       |-----reducers
                            |                                                                       |
                            |                                                                       |-----store
                            |                                                                       |
                            |                                                                       |-----routers
                            |                                                                       |
                            |                                                                       |-----helpers
                            |
                            |—————— server  //node.js中间层服务器文件
                            |
        package.json -------|-- npm安装包依赖文件
                            |
webpack.config.dev.js ------|-- 开发环境webpack配置文件
                            |
webpack.config.prod.js -----|-- 生产环境webpack配置文件
                            |
webpack.config.dll.js ------|-- 生成公用模块动态链文件
                            |
manifest.development.json --|-- 动态生成的公用模块映射文件(开发环境的,由npm run debug:dll命令生成)
                            |
manifest.production.json ---|-- 动态生成的公用模块映射文件(生产环境环境的)
                            |
.babelrc -------------------|-- babel配置文件
                            |
                            |
.editorconfig---------------|-- IDE编辑器配置文件,统一代码格式
                            |
theme.config.js ------------|-- ant.design主题文件配置文件
                            |


```
