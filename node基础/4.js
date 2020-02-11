const fs = require("fs");
const path = require("path");

let strpath = path.join(__dirname,"dd.txt");
fs.readFile(strpath,(err,data) => {
	if(err) return;
	console.info(data); // 得到一个 buffer数组
});

fs.readFile(strpath,"utf8",(err,data) => {
	if(err) return;
	console.info(data); // 得到字符串
});

/*
	总结：
		要想操作文件，就需要导入fs模块
		fs.readFile(filepath,"utf-8",(error,data) => {
			console.info(error);
			console.info(data);
		});
		这个是将文件整个加载到内存中，然后操作
		如果文件比较大则比较耗时



*/