/*
	函数相关扩展
		1.函数默认值
*/
// 早期默认值做法
function foo(param) {
	let p = param || "lisi";
	console.info(p);
}

foo(); // 打印结果 lisi
foo("wangwu"); // 打印结果 wangwu

/*
	1. es6中参数默认赋值
*/
function fkk(param = "李四") {
	console.info(param);
}

fkk();	// 打印结果： 李四
fkk("王五"); // 打印结果： 王五

/*
	2. 参数对象默认值
*/
function kkk({username,password}) {
	console.info(username);
	console.info(password);
}

//kkk();  // 打印报错
kkk({}); // 打印结果 undefined undefined
kkk({"username" : "lisi","password" : 12}); // 打印结果 lisi 12

function kk({username,password} = {"username" : "wangwu","password" : 56}) {
	console.info(username);
	console.info(password);
}

kk(); // 打印结果 wangwu 56
kk({"username" : "lisi","password" : 12}); // 打印结果 lisi 12

/*
	es6中函数拓展符 ... 类似java中的可变参
*/
function mm (a,...c) {
	console.info(a);
	console.info(c);
}
mm(1,4,5,6,6); // 打印结果 1 [ 4, 5, 6, 6 ]

/*
function dd (...g,b){
	console.info(g);
	console.info(b);
}
dd(1,2,3,4,5,7);
	与可变参一样，必须放最后
*/
/*
	函数拓展赋值
*/
function ll(a,b,c,d) {
	console.info(a + b + c + d);
}

let kkg = [1,2,4,5]; // 定义数组

ll(...kkg); // 利用函数拓展符进行解构赋值

/*
	利用rest参数进行合并数组
*/
let bbn = [1,2,3,4,5];
let nmk = [7,8,9,0,4,5];
let m1m = [...bbn,...nmk];
console.info(m1m);











