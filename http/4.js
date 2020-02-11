/*
	处理post发送过来的参数
*/

const querystring = require("querystring");
const http = require("http");

http.createServer((req,resp) => {
	let data = "";
	req.on("data",(chunk) => {
		data += chunk;
	});
	req.on("end",() =>) {
		console.info(data);
	}


}).listen(8888);