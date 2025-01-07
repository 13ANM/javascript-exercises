const findTheOldest = (arr) => {
	const getAge = (birth, death) => {
		if (!death) {
			death = new Date().getFullYear()
		}
		return death - birth
	}

	return arr.reduce((oldest, current) => {
		const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
		const currentAge = getAge(current.yearOfBirth, current.yearOfDeath)

		return oldestAge < currentAge ? current : oldest
	})
}

// Do not edit below this line
module.exports = findTheOldest
