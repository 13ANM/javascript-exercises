const sumAll = (start, finish) => {
	if (!Number.isInteger(start) || !Number.isInteger(finish)) return 'ERROR'

	if (start < 0 || finish < 0) return 'ERROR'

	if (start > finish) [start, finish] = [finish, start]

	const sumUpToFinish = (finish * (finish + 1)) / 2

	const sumUpToStartMinusOne = ((start - 1) * start) / 2

	return sumUpToFinish - sumUpToStartMinusOne
}

// Do not edit below this line
module.exports = sumAll
