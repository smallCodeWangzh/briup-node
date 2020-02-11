/*
	es6中的解构赋值
*/

/*
	传统赋值方式
	这种赋值方式比较麻烦，所以我们可以采用数组结构赋值
*/
let a = 1;
let b = 1;
let c = 3;

let d = 1,g = 2; l = 4;
console.info(a,b,c);
console.info(d,g,l);

/*
	数组结构赋值
*/
let[a1,b1,c1] = [1,2,3];
console.info(a1,b1,c1); // 打印结果 1，2，3

let[a2,b2,c2] = [5,6,7,8,89];
console.info(a2,b2,c2);  // 打印结果 5，6，7 也就是说后面的值数量大于变量的数量也可以

let[a3,b3,c3] = [,4,5]; 
console.info(a3,b3,c3); // 打印结果 undefined 4,5 第一个变量名没有赋值，所以undefined

let[a4 = 1,a5,a6] = [,7,9];
console.info(a4,a5,a6); // 打印结果：1，7，9 因为a4有一个默认值

let[m1 = 4,m2,m3] = [7,8,9]; 
console.info(m1,m2,m3); // 打印结果7，8，9,如果有赋值就会把默认值给覆盖掉

/*
	总结：

		数组解构赋值三种方式：
		let[变量名1,变量名2] = [值1，值2];
		let[变量名1,变量名2] = [，值2];
		let[变量名1 = 默认值1,变量名2] = [，值2];

*/
console.info("----------------------------------------------------");
/*
	字符串解构赋值
*/

let[w,e,r] = "helloword";
console.info(w,e,r); // 打印结果 h e l

let[t,y,f] = "lo"; 
console.info(t,y,f); // 打印结果 l o undefined

let{length} = "adfa";
console.info(length); // 打印结果 4， 得到的是字符传的长度


console.info("----------------------------------------------------");
/*
	对象解构赋值
*/
let {n,q} = {n : 1,q : "lisi"}; 
console.info(n,q); // 打印结果 1，lisi   n，q均为对象属性

// 给对象属性起别名
let{p:mm,kj} = {p : "wangwu",kj : 1};
console.info(mm,kj); // 打印结果为：wangwu,1

let{gg:hh,qq} = {hh : "lisi",qq : "yy"};
console.info(hh,qq); // 打印结果为 undefined,yy 赋值时不能够通过别名赋值，否则undefined

let{qa:zx,vb} = {qa : "lisi",vb : "dd"};
//console.info(qa,vb); // 执行报错，如果给对象的属性起了别名，那么在使用这个属性时，只能使用别名，而不能够使用属性名，否则报错



// 对象解构赋值特殊赋值
let{cos,sin,random} = Math;
console.info(typeof cos); // 打印结果为 function
console.info(typeof sin); // 打印结果为 function
console.info(typeof random); // 打印结果为 function

let{u,i,o} = Math;
console.info(typeof u);   // 打印 undefined
console.info(typeof i);  // 打印 undefined
console.info(typeof o); // 打印 undefined

// 对象解构赋值默认值
let{u5="ddd",m} = {m:"rr"};
console.info(u5,m); // 打印结果 ddd rr

let{u6:jj = "lisi",mn} = {mn:"dddd"};
console.info(jj,mn); // 打印结果 lisi dddd
/*
	总结：
		要想进行特殊赋值，属性名必须要与赋值的对象名中的成员保持一直
	
*/






























