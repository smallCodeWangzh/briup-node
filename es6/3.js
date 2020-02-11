/*
	字符串相关函数：
	includes(); 跟java中字符串includes()功能差不多
	startsWith();  跟java中字符串startsWith()功能差不多
	endsWith(); 跟java中字符串 endWith()功能差不多
*/

/*
	 includes:
	 	 一个字符串是否包含另一个字串
	 	如果包含返回true，不包含返回false
*/
console.info("hello word".includes("word"));// true 
console.info("hello word".includes("word1"));// false

console.info("hello word".includes("word",7));// false 代表从第七个位置开始判断(从左往右)
console.info("hello word".includes("word"));// true 代表从第一个位置开始判断(从左往右)

console.info("--------------------------------------------------");

/*
	startsWith：
		一个字符串是否以另一个字串开始
		如果是 返回true，否则返回false
*/
console.info("hello word".startsWith("hello")); //true
console.info("hello word".startsWith("hhh")); //false
console.info("hello word".startsWith("l",3)); //true 代表从第几个位置开始判断


console.info("------------------------------------------------");
/*
	endsWith:
		判断一个字符串是否以另一个字符串结尾
		如果是范围 true 否则返回发false
*/
console.info("hello word".endsWith("d")); // true
console.info("hello word".endsWith("word",7));  // false 代表从第几个位置开始

/*
	模板字符串
*/
let aa = {
	username:"lisi",
	age : 1
}
// 早期填充数据类型
let tag = "<div><span>" + aa.username + "</span><span>" + aa.age + "</span></div>"
console.info(tag);

var fn = function(info) {
	return parseInt(info) + 2;
}

// es6中填充数据类型,跟jsp中的el表达式差不多
let tag1 = `
			<div>
				<span>${aa.username}</span>	
				<span>${aa.age}</span>	
				<span>${1 + 1 }</span>
				<span>${fn(4)}</span>
			</div>
`;

console.info(tag1);












