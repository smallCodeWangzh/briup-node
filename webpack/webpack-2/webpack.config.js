const path = require("path");
const webpack = require("webpack");
const htmlwebpackplugin = require("html-webpack-plugin");


module.exports = {
    entry : path.join(__dirname,"./src/main.js"),
    output : {
        path : path.join(__dirname,"./dist"),
        filename : "bundle.js"
    },
    devServer : {
        open : true, // 默认打开浏览器
        port : 3007,
        contentBase : "src",
        hot : true
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin(),
        new htmlwebpackplugin({
            template : path.join(__dirname,"./src/index.html"),
            filename : "index.html"
        })
    ],
    module :  {
        rules : [
            {
                test : /\.css$/,use : ["style-loader","css-loader"]
            },
            {
                test : /\.(png|jpg|gif)$/,use : "url-loader?limit"
            },
        ]
    }

}