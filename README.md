# react-h5-template
当前H5项目，是由[Create React App](https://github.com/facebook/create-react-app)创建而来。使用`viewport`的移动端适配方案，在编写css时只要根据750px设计稿输入具体的px值即可。如果是其它尺寸的设计稿，可在`webpack.config.js`修改`viewportWidth`的对应设计的值。
```js
  require('postcss-px-to-viewport')({
    unitToConvert: 'px', // 要转化的单位
    viewportWidth: 750, // UI设计稿的宽度
    unitPrecision: 5, // 转换后的精度，即小数点位数
    propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
    viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
    fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
    selectorBlackList: [], // 指定不转换为视窗单位的类名
    minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
    mediaQuery: false, // 是否在媒体查询的css代码中也进行转换，默认false
    replace: true, // 是否转换后直接更换属性值
    exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
    include: undefined,
    landscape: false, // 是否处理横屏情况
  })
```

## 技术栈
* React + TypeScript + Less
* 移动端适配方案：`viewport`
* 移动端UI组件：[Ant Design Mobile](https://mobile.ant.design/zh)
* 移动端图表：[AntV F2](https://f2.antv.vision/zh)

当前项目定义了`Ant Design Mobile`UI组件风格，后续可在`theme.less`修改。

可在`variables.less`定义less全局变量，方便统一样式的统一管理。

`react-router`使用的是最新v6版本，可在`routes/index.tsx`配置路由，react-router从v5升级到v6可查看[upgrading-from-v5](https://reactrouter.com/docs/en/v6/upgrading/v5#upgrading-from-v5)。如果需要使用v5版本，可使用`react-router-v5`分支。

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
