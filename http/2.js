/*
	实现不同的请求得到不同的资源
*/

const http = require("http");
const fs = require("fs");
const path = require("path");

let readFile = (filename,resp) => {
	filename = path.join(__dirname,"static",filename);
	fs.readFile(filename,"utf-8",(err,data) => {
		if(err) {
			// 处理中文乱码
			resp.writeHead(200,{
				"Content-Type" : "text/html; charset=utf8"
			});
			resp.end("文件不存在");
		} else {
			resp.end(data);
		}
	})
}

http.createServer((req,resp) => {
	let ss = "index.html";
	if(req.url != "/") { //访问首页
		ss = req.url;
	}
	readFile(ss,resp);
}).listen(8899);