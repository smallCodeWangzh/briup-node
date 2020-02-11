const path = require("path");


// 配置 打包文件
module.exports = {
    entry : path.join(__dirname,"./src/main.js"),
    output : {
        path : path.join(__dirname,"./dist"),
        filename : "bundle.js"
    }
}