console.info("lisi");

function sum(n) {
	var sum = 0;
	for(var i = 0; i <= n; i++) {
		sum += i;
	}
	return sum;
}

var result = sum(100);
console.info(result);