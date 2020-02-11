/*
	let -  const
*/
// 以前js语法 var
console.info(flag);  // 打印结果为 undefiend 因为会与解析
var flag = 3;

/*
	 es6 语法
	 es6中 let用来定义变量，定义的变量必须先初始化后使用
	 语法更加严谨相当于java中定义变量
*/
let sun  = 1;
console.info(sun);

/*
	跟java中一样，let定义的变量名不允许重复定义(在同一个作用域内)
*/
//let kk = 3;
let kk = 4;  // 相当于定义了全局变量
/*
	跟java中一样，let定义的变量作用范围只能是某一个块
*/
{
	let kkl = 4; // 相当于定义了局部变量
	console.info(kkl); // 打印结果为 4
}
console.info(kkl); //  执行报错，因为这个kkl不在那个作用范围，所以就会报错

/*
	总结：
		let用来声明变量，变量一定要初始化才能够使用。
		相同的变量名不能够定义两次(不同的块是可以定义两次)。
		变量都有自己的作用范围，如果在作用范围外使用变量，那么变量就会失效
		总而言之，跟java中定义变量类似。
*/

//---------------------------------------------------------------------------------------
/*
	const 在es6中用来定义常量
*/
const a = 1;
a = 2; // 执行报错，因为常量只能被赋值一次，跟java中定义常量类似




















