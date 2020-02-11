/*
	文件夹操作
*/
const fs = require("fs");
const path = require("path");

/*let mdpath = path.join(__dirname,"abc");

fs.mkdir(mdpath,(error) => {
	console.info(error);
})
*/
fs.readdir(__dirname,(error,data) => {
	console.info(data);
})


fs.readdir(__dirname,(error,data) => {
	if(error) return;
	data.forEach((element,index) => {
		fs.stat(element,(error,stat) => {
			if(stat.isFile()) {
				console.info(element + " is File ");
			} else if(stat.isDirectory()) {
				console.info(element + " is Directory");
			}
		})
	})
});

let mdpath = path.join(__dirname,"abc");
fs.rmdir(mdpath,(err) => {
	console.info(err);
})