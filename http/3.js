/*
	处理get请求
*/
const url = require("url");
const http = require("http");

http.createServer((req,resp) => {
	console.info(url.parse(req.url)); // 解析url的数据
	console.info(url.parse(req.url).query); // 得到发送过来的参数 字符串形式
	console.info(url.parse(req.url,true).query);  // 对象形式
}).listen(9999);


