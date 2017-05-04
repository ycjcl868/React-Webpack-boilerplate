var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var htmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname,"src/index.tsx"),
  output: {
      path: BUILD_PATH,
      // publicPath: "/build/", 
      filename: "bundle.js"
  },
  devtool: "source-map",
  module: {
      loaders: [  
            {
              test: /\.(css|less)$/,
              loaders: ['style', 'css', 'less'], //.scss 文件使用 style-loader、css-loader 和 less-loader 来编译处理
              include: APP_PATH
          }, {
              test: /\.(png|jpg)$/,
              loader: 'url?limit=40000'  //图片文件使用 url-loader 来处理，小于40000字节的直接转为base64
          },
          { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
          { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
          { test: /\.json$/, loader: "json" }
      ]
  },
  resolve:{
      extensions:['','.ts','.tsx','.js','.html','.json']   //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
  },
  devServer: {
      contentBase:BUILD_PATH,
      hot: true,  //热加载模式
      port: 8899,
      inline: true //inline模式(将webpack-dev-sever的客户端入口添加到包(bundle)中)
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname,'src/index.html'),
      filename: 'index.html',
      inject:'body'
    }),
    new webpack.NoErrorsPlugin(),//用来跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误
    new webpack.HotModuleReplacementPlugin()//全局开启代码热替换
  ]
};