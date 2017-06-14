var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var htmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname,"src/index.js"),
  output: {
      path: BUILD_PATH,
      // publicPath: "/build/", 
      filename: "bundle.js"
  },
  module: {
      loaders: [  
          
          {
            test: /\.js$/, 
            exclude: /node_modules/, 
            loader: "babel-loader", 
            query:
              {
                presets:['react','es2015','stage-2'] // babel配置：添加这三个presets用来处理js和jsx
              }
          },  { 
              test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/, 
              loader: 'url-loader?limit=100000' 
            },{
              test: /(\.less)$/,
               loader: 'style!css!less' //.scss 文件使用 style-loader、css-loader 和 less-loader 来编译处理
          }, {
              test: /(\.css)$/,
              loader: 'style!css'
          },{
              test: /\.(png|jpg)$/,
              loader: 'url?limit=40000'  //图片文件使用 url-loader 来处理，小于40000字节的直接转为base64
          },
          { test: /\.tsx$/, loader: 'ts-loader' },
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