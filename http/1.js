/*
	实现一个简单的服务器功能
*/
const http = require("http");
/*
let server = http.createServer(); // 创建服务器实例对象
server.on("request",(req,resp) => {
	resp.end("鲁迅曾经说过：你向往的地方，别人已经来去自如");
}),

server.listen(3000); // 监听端口
*/

/*
	对上面代码进行简化
*/
/*
http.createServer((req,resp) => {
	resp.end("good");
}).listen(3000);
*/

http.createServer((req,resp) => {
	resp.end("good");
}).listen(3000,"127.0.0.1",() => { // 启动成功以后调用,以及指定ip访问  
	console.info("run.....");
})

/*
	总结：
		要想通过node.js实现一个简单服务器
		首先要创建服务器实例对象
		http.createServer((request,response) => {
			resp.end(obj);
		}).listen(port);

*/




