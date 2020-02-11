/*
	路径相关操作
*/
const path = require("path");

console.info(path.basename("/a/b/c/d.txt")); // 打印结果 d.txt
console.info(path.basename("/a/b/c/d.txt",".txt")); // 打印结果 d

console.info(path.dirname("/a/b/c/d.txt")); // 打印结果 /a/b/c
console.info(path.dirname(__filename)); //  打印结果 E:\briup-node\node基础

console.info(path.isAbsolute("c://d//e//a.txt")); // 打印结果 true
console.info(path.isAbsolute("/a/b/c/g.jj")); // 打印结果 true

console.info(path.extname("/a/v/b.txt")); // 打印结果 .txt

/*
	path.parse(path)  string --> object
	path.format(obj)  obj ----> string
*/

/*
	打印结果
	{
	 root: '/',  根路径
	 dir: '/a/b/v', 父目录
	 base: 'c.txt',  文件名 + 拓展名
	 ext: '.txt',  文件拓展名
	 name: 'c' 文件名
	}
*/
console.info(path.parse("/a/b/v/c.txt")); // 得到的是一个对象
console.info(path.format({
	root : "C://",
	dir  : "C://a//b",
	base : "c.txt"
}));

console.info(path.join("/av/b/c","/k/l/p")); //打印结果 \av\b\c\k\l\p
console.info(path.normalize("/a/./c/../p")); // 打印结果 /a/p
console.info(path.resolve('/foo/bar', './baz')); // 打印结果 /foo/bar/baz

console.info(path.delimiter); // 打印环境变量分隔符 window ； linux :
console.info(path.sep); //打印环境分隔符 windows \ linux /


/*
	总结：
	要想使用node中的path,那么首先需要导入path模块
	const path = require("path");
	path.basename(path); // 获取路径末尾的文件名带拓展名
	path.basename(path,extname); // 获取路径末尾文件名
	path.dirname(path); // 获取文件目录，
	path.isAbsolute(path); // 判断文件路径是不是绝对路径
	path.parse(path); // 得到一个路径对象，具体内容如下：
	{
	 root: '/',  根路径
	 dir: '/a/b/v', 父目录
	 base: 'c.txt',  文件名 + 拓展名
	 ext: '.txt',  文件拓展名
	 name: 'c' 文件名
	}

	path.format(obj); // 得到一个string类型路径

	path.join(string1,string2,string3); // 拼接路径名
	path.normalize(path); // 规范路径
	path.resolve(path1,path2); // 计算相对路径

	path.delimter // 得到环境变量的分隔符 windows ； Linux :
	path.sep // 得到路径的分隔符 window \   linux /


*/

