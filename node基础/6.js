/*
	大文件操作(流式操作)
*/
const path = require("path");
const fs = require("fs");

/*
	将一个大文件复制到另外个地方，操作大文件就需要用到流
*/
let srcpath = path.join("E:\\BaiduNetdiskDownload","02 CSS3.7z.001");
let depath = path.join("C:\\Users\\wangzh\\Desktop","1.zip");
let readStream =  fs.createReadStream(srcpath);
let writeStream = fs.createWriteStream(depath);

// 基于事件复制
/*let num = 1;
readStream.on("data",(chunk) => {
	num ++;
	writeStream.write(chunk);
})
readStream.on("end",() => {
	console.info("success:" + num);
})

*/
// 调用方法复制
readStream.pipe(writeStream); // 速度稍微较快