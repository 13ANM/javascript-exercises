const add = (num, num2) => num + num2

const subtract = (num, num2) => num - num2

const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0)

const multiply = (arr) => arr.reduce((acc, cur) => acc * cur, 1)

const power = (num, num2) => num ** num2

const factorial = (num) => {
	if (num === 0) return 1

	let result = 1

	for (let i = 1; i <= num; i++) {
		result *= i
	}

	return result
}

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
}
