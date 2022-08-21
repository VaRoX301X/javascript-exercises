const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	if (arr.length == 0) {
    return 0;
  } else {
    return arr.reduce((a, b) => a + b, 0)
  }
};

const multiply = function(arr) {
  let total = 1;
  for (let i=0; i<arr.length; i++) {
		total = total * arr[i]; 
	}
	return total; 
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
	let total = 1;
  for (let i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
