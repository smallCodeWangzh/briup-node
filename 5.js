var sum = function(a,b) {
	return parseInt(a) * parseInt(b);
}

// 模块导出,这种导出，导出的是对象本身
module.exports = sum;