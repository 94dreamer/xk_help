React/Sass

本项目一套嵌入APP的H5页面，本来是纯SPA页面，后面考虑APP原生回退问题，改成了两套。

`npm dev` 为开发环境，搭载了webpack-dev-server热重载服务器，轻松实现无刷开发😉

`npm buid` 为正式环境，依赖路由参数，打包后的index.js大概为300kb左右。

项目代码利用`process.env.NODE_ENV`环境变量决定 部分组件的引用 和 关键交互代码的后果。


### 填过的坑

#### 1. 一编译就自动运行了eslint

因为我在webpack.config.js里面写了

```
preLoaders: [
      {
        test: /\.jsx$|\.js$/,
        loader: 'eslint-loader',
        include: `${__dirname}/src`,
        exclude: /bundle\.js$/
      }
    ]
```

#### 2. 开发环境下因为模版编译到dist下导致react组建内的img的src引用一直有错

解决办法是webpack-dev-server配置更改,contentBase由`./dist`改成了`./src`。

```
devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './src',
    port: 8080
},
```


#### 3. 部分android机内置浏览器支持JS特性低，不支持 Object.assign的ES6语法 ，JSON.parse这种ES5的api还是支持的。

原因是 Babel 默认只转换新的JavaScript句法，而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Obejct.assign）都不会转码。Babel不转码的API非常多，详细清单可以查看 [definitions.js](https://github.com/babel/babel/blob/master/packages/babel-plugin-transform-runtime/src/definitions.js) 文件

解决办法：让Babel转译这些ES6的API，我们安装这个插件：

`npm install --save-dev babel-polyfill`

然后，在需要使用的文件顶部引入

`import "babel-polyfill"`或者`require('babel-polyfill')`

webpack.config.js中这样：

```
module.exports = {
	entry:['babel-polyfill','./app/js']
}
```



