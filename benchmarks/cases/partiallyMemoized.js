const memoize = require('fast-memoize')

const divide = (a, b) => a / b
const memoizedDivide = memoize(divide)

const remainder = (a, b) => a % b
const memoizedRemainder = memoize(remainder)

const memoizedFloor = memoize(Math.floor)

function generateChar(chars, currentPass) {
	const str = []

	const recursion = (passingCount) => {
		if (passingCount < chars.length) {
			str.unshift(chars[passingCount])
			return str.join('')
		}

		const charIndex =
			memoizedFloor(memoizedDivide(passingCount, chars.length)) - 1
		const remainder = memoizedRemainder(passingCount, chars.length)
		str.unshift(chars[remainder])
		return recursion(charIndex)
	}

	return recursion(currentPass)
}

function* uniqueStrGenerator(options) {
	let i = 0
	while (true) {
		yield generateChar(options.chars, i)
		i++
	}
}

module.exports = uniqueStrGenerator
