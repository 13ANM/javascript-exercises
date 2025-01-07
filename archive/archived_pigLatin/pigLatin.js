const pigLatin = function (string) {
	return string
		.split(' ')
		.map((word) => {
			const index = firstVowelIndex(word)
			const beginning = word.slice(0, index)
			const ending = word.slice(index)
			return `${ending}${beginning}ay`
		})
		.join(' ')
}

const firstVowelIndex = function (word) {
	const vowels = word.match(/[aeiou]/i)
	if (!vowels) return 0

	let firstIndex = word.search(/[aeiou]/i)

	if (
		word[firstIndex].toLowerCase() === 'u' &&
		firstIndex > 0 &&
		word[firstIndex - 1].toLowerCase() === 'q'
	) {
		firstIndex += 1
	}

	return firstIndex
}

module.exports = pigLatin
