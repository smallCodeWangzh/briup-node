/*
	处理post发送过来的参数
*/

const querystring = require("querystring");
const http = require("http");

/*
http.createServer((req,resp) => {
	let data = "";
	req.on("data",(chunk) => {
		data += chunk;
	});

	req.on("end",() => {
		console.info(data); // 打印结果 name=lisi&password=123
		console.info(querystring.parse(data)); // { name: 'lisi', password: '123' }
	});

}).listen(8888);
*/

let data = {name : "lisi",password : "123",hobby : ["122","144"]};
console.info(querystring.stringify(data)); 

