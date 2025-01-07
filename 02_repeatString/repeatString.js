const repeatString = (string, times) => {
	let container = ''

	if (times < 0) {
		return 'ERROR'
	}

	for (let i = 0; i < times; i++) {
		container += string
	}

	return container
}

// Do not edit below this line
module.exports = repeatString
