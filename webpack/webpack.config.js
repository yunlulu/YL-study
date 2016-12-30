var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports={
     //插件项
    // plugins: [commonsPlugin],
    devtool:"eval-source-map",
    entry:__dirname+"/public/main.js",
    output:{
        path:__dirname+"/app/js",
        filename:"test.js"
    },
    devServer: {
    port:8000,
    host:"172.16.9.82",
    contentBase: "./app",//本地服务器所加载的页面所在的目录
    colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },
  module:{
     //加载器配置
        loaders: [
            //.css 文件使用 style-loader 和 css-loader 来处理
            { test: /\.css$/, loader: 'style-loader!css-loader'},
            //.js 文件使用 jsx-loader 来编译处理
            // { test: /\.js$/, loader: 'jsx-loader?harmony' },
            //.scss 文件使用 style-loader、css-loader 和 sass-loader 反向来编译处理
            { test: /\.scss$/, loader: 'css!style!sass?sourceMap'},
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    resolve: {
        //查找module的话从这里开始查找
        // root:"E:/yunlulu/YL-git/YL-study/webpack/public/", //绝对路径
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.json', '.scss'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        // alias: {
        //     content : 'content.js',//后续直接 require('AppStore') 即可
        //     content2 : 'content2.js'
        // }
    }
}