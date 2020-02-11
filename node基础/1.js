/*
	Buffer基础,buffer就是一个本质是一个数组
	所以在创建这个对象时需要指定数组大小
*/

// 此种创建数据方式已经过时
//let buffer = new Buffer(5);
//console.info(buffer);

let buff = Buffer.alloc(5);
console.info(buff) // 打印结果 <Buffer 00 00 00 00 00>

let buff2 = Buffer.from("abc");
console.info(buff2); // 打印结果 <Buffer 61 62 63> 字母的asc编码

buff2 = Buffer.from([0x61,0x67]);
console.info(buff2.toString());

/*
	-------------------------------------------
	Buffer中的静态方法
*/
let buffer = Buffer.alloc(4); //创建一个buff对象，数组大小为4的Buffer对象
buffer = Buffer.from("lisi"); // 创建一个buffer对象，内容已经初始化
buffer = Buffer.from([0x61,0x62]); //创建一个buffer对象，里面传入一个数组

buffer = Buffer.from("你好"); // 默认采用utf8编码
console.info(buffer.toString());

buffer = Buffer.from("你好","hex");
console.info(buffer);

let buf = Buffer.isEncoding("utf-8");  // 判断是否支持该编码 true
console.info(buf);

buf = Buffer.isEncoding("gbk");
console.info(buf); // 打印结果 false

//----------------------------------------
let buffr = Buffer.byteLength("你好"); // 获取字符串字节数
console.info(buffr); //  打印结果为 6 默认编码为asc编码，一个汉字三个字节

let bufg = "\u00bd + \u00bc = \u00be";
console.info(`${bufg}:${Buffer.byteLength(bufg)}`); // 打印结果 ½ + ¼ = ¾:12
// ------------------------------------------------------------
/*
	实例方法:
		此方法不能够通过类名直接调用，需要创建实例对象
	write
	slice
	toString
	toJson
*/
let oop = Buffer.alloc(5);
// oop.write("hello"); // 表示往buffer里面写入hello字符串
// console.info(oop.toString()); // 将buffer转换成字符串

// oop.write("hello",2); // 表示从索引为2的位置将hello写进去，索引从0开始
// console.info(oop); // 将buffer转换成字符串

// oop.write("hello",1,2); // 表示从索引为2的位置写入，到第四个位置结束
// console.info(oop);

oop.write("nihao");

let ll = oop.slice(3,4); // 截取，会得到一个新的数组
console.info(ll === oop); // 两个buffer不一样
console.info(ll); 
console.info(ll.toString());

ll = Buffer.from([0x62,0x95,0x96]);
let mm = JSON.stringify(ll); // 这个方法加了一定自己的逻辑判断，同时会自动调用toJSON方法
console.info(mm); // 得到一个json数组

ll = Buffer.from("nihao");
mm = JSON.stringify(ll);
console.info(mm);
// ---------------------------------------------------------
/*
	Buffer总结：
		Buffer本质是一个数组
	创建Buffer对象的方式
		Buffer.alloc(size);
		Buffer.from(string,encoding);
		Buffer.from([]);
	静态方法：
		Buffer.byteLength(buff); 
		Buffer.byteLength(string); 
		Buffer.concat(buff1,buff2);
		Buffer.isBuffer();
	实例方法：
		let buffer = Buffer.alloc(5);
		buffer.write(content[,start,end,encoding]);
		buffer.slice(start,end);
		buffer.toJSON();
		JSON.stringify(buffer);
*/







