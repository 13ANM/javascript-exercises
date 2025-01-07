const snakeCase = (str) => {
	const tokens = str.split(/[^A-Za-z]+/).filter(Boolean)

	const transformed = tokens.map((token) => {
		const uppercaseCount = (token.match(/[A-Z]/g) || []).length

		if (uppercaseCount === 1 && /^[a-z]/.test(token)) {
			token = token.replace(/([a-z])([A-Z])/g, '$1_$2')
		}

		return token.toLowerCase()
	})

	return transformed.join('_')
}

// Do not edit below this line
module.exports = snakeCase
