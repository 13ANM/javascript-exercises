const caesar = (string, amount) => {
	if (amount < 0) {
		return caesar(string, amount + 26)
	}

	let output = ''

	for (let i = 0; i < string.length; i++) {
		let c = string[i]

		if (c.match(/[a-z]/i)) {
			let code = string.charCodeAt(i)

			if (code >= 65 && code <= 90) {
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65)
			} else if (code >= 97 && code <= 122) {
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97)
			}
		}

		output += c
	}

	return output
}

// Do not edit below this line
module.exports = caesar
