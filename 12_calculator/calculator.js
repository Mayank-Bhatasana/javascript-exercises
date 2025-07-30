const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let sum = 0;
    for (let i = 0; i < arr.length; i++) sum += arr[i];
    return sum;
};

const multiply = function(arr) {
  let sum = 1;
  for (let i = 0; i < arr.length; i++) sum *= arr[i];
  return sum;
};

const power = function(n1, n2) {
	return Math.pow(n1, n2)
};

const factorial = function(n) {
	if (n === 0) return 1;
    return n * factorial(n - 1);
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
