var webpack = require('webpack');
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var extractCSS = new ExtractTextPlugin('css/[name].css?[contenthash]')
// var cssLoader = extractCSS.extract(['css'])
// var sassLoader = extractCSS.extract(['css', 'sass']);

module.exports={
     //插件项
    // plugins: [commonsPlugin],
    devtool:"eval-source-map",
    entry:{global:__dirname+'/public/js/main.js'},
    output:{
        path:__dirname+"/dest",
        filename:"/js/[name].js",
        publicPath:"../"
    },
    devServer: {
    port:8000,
    host:"localhost",
    contentBase: "./app",//本地服务器所加载的页面所在的目录
    colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转  
    inline: true//实时刷新
  },
  module:{
     //加载器配置
        loaders: [
            //.css 文件使用 style-loader 和 css-loader 来处理
            { test: /\.css$/, loader:ExtractTextPlugin.extract("style-loader","css-loader")},
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&&name=images/[hash].[ext]'}
        ]
    },
   
     externals: {jquery: 'window.$'},
     plugins: [new ExtractTextPlugin("css/[name].css")
     ]
}