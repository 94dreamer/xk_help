React/Sass

### 填过的坑

1. 一编译就自动运行了eslint

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

2. 