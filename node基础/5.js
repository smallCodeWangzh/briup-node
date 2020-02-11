const fs = require("fs");
const path =  require("path");

let strpath = path.join(__dirname,"data.txt");

fs.writeFile(strpath,"Hello.js",(err) => { // 如果文件不存在就创建
	if(err) return;
	console.info("success");
});

fs.writeFile(strpath,Buffer.from("ddd"),"utf8",(err) => {
	if(err) return;
	console.info("success");
})

/*
	fs.writeFile(filepath,content,encoding,(err) => {
	
	});


*/
