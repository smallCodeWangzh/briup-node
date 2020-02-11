/*
	箭头函数，类似于java中的拉姆达表达式
*/
function aa() {
	console.info("aaa");
}
aa();


/*
 	如果要转换为箭头函数
 	数据类型 函数名 = (参数列表) => 函数体
*/
let ni = ()  => console.info("ccc");
ni();

/*
	如果想要传入参数
*/
let kk = (mm = "nn",lisi = ">>") => {
	console.info(mm);
	console.info(lisi);
}

kk();
console.info("-----------------------------------------")
/*
	循环遍历
*/
let qq = [11,22,3,4];

// 传统方式遍历数组
qq.forEach(function(index,elemnt) {
	console.info(index + ">>>" + elemnt);
});

// 箭头函数方式遍历数组
qq.forEach((index,element)  => {
	console.info(index + ">>>" + element);
})













