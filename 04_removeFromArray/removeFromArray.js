const removeFromArray = (arr, ...args) => {
	return arr.filter((val) => !args.includes(val))
}

// Do not edit below this line
module.exports = removeFromArray
