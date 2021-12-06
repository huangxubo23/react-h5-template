# react-h5-template
当前H5项目，是由[Create React App](https://github.com/facebook/create-react-app)创建而来。使用`viewport`的移动端适配方案，在编写css时只要根据750px设计稿输入具体的px值即可。如果是其它尺寸的设计稿，可在`webpack.config.js`修改`viewportWidth`的对应设计的值。
```js
  require('postcss-px-to-viewport')({
    unitToConvert: 'px',
    viewportWidth: 750, // (Number) The width of the viewport.
    unitPrecision: 5, // (Number) The decimal numbers to allow the REM units to grow to.
    propList: ['*'],
    viewportUnit: 'vw',
    fontViewportUnit: 'vw',
    selectorBlackList: [],
    minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
    mediaQuery: false,
    replace: true,
    exclude: undefined,
    include: undefined,
    landscape: false,
  }),
```

## 技术栈
* React + TypeScript + Less
* 移动端适配方案：`viewport`
* 移动端UI组件：[Ant Design Mobile](https://mobile.ant.design/zh)
* 移动端图表：[AntV F2](https://f2.antv.vision/zh)

当前项目定义了`Ant Design Mobile`UI组件风格，后续可在`theme.less`修改。

可在`variables.less`定义less全局变量，方便统一样式的统一管理。

可在`routes/index.ts`配置路由。

## 项目启动
```
yarn start 或 npm start
```

启动后在浏览器访问： [http://localhost:3000](http://localhost:3000)。网页支持热更新，在控制台中也看到`lint`相关的提示。

如果需要本地配置跨域，可以`.env.development`进行配置修改。

## 项目打包
```
npm run build
```

## Todo
* 目前并没有状态管理的需求，后续如果有需要可以使用useContext或redux等。
* 后续如果有角色权限管理，再加入路由控制。
