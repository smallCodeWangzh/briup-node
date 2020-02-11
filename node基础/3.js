const fs = require("fs")
fs.stat("./dd.txt",(err,stat) => { // 这个是异步方法，基于回调函数
	if(err) return;
	console.info(stat);
});

let ss = fs.statSync("./dd.txt"); // 这个是同步方法
console.info(ss);

/*
	关于同步与异步浅谈理解：
		在js中，是单线程操作，当我们有时候会遇到一些耗时的操作，
		那么就会阻塞在那个操作上，等那个操作完成才能往下执行，
		这样就导致有可能有一些UI加载不出来。
		再后来,在js中引入了事件队列，只要在执行的过程中遇到了耗时的
		操作，那么就把这个操作放入事件队列中，主线程再接着往下执行，
		等主线程执行完成再去执行事件队列里面的任务。这样看起来就相当于
		异步执行。

		一般耗时操作基本上为：
			文件IO
			网络IO
*/

fs.stat("./dd.txt",(err,stat) => {
	/*
		err 表示回调函数回调时，文件的操作有没有错误
		如果没有错误，那么err值为 null
		stat 关于描述文件信息的一个对象
	*/
	if(err) return;
	if(stat.isFile()) {
		console.info("文件");
	} else if(stat.isDirectory()) {
		console.info("目录");
	}

	/*
		atime: 最后一次访问时间
		birthtime: 创建时间文件
		mtime : 最后一个修改文件内容的时间
		ctime : 最后一次修改文件状态的时间

	*/

});


