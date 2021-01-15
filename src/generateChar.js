'use strict'
function generateChar(chars, currentPass, cache) {
	let str = ''

	const recursion = (passingCount) => {
		if (passingCount < chars.length) {
			const result = chars[passingCount] + str
			cache[currentPass] = result
			return result
		}

		if (cache[passingCount]) {
			return cache[passingCount] + str
		}

		const charIndex = Math.floor(passingCount / chars.length) - 1
		const remainder = passingCount % chars.length
		str = chars[remainder] + str
		return recursion(charIndex)
	}

	return recursion(currentPass)
}

module.exports = generateChar
