function generateChar(chars, currentPass) {
	const str = []

	const recursion = (passingCount) => {
		if (passingCount < chars.length) {
			str.unshift(chars[passingCount])
			return str.join('')
		}
		const charIndex = Math.floor(passingCount / chars.length) - 1
		const remainder = passingCount % chars.length
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
