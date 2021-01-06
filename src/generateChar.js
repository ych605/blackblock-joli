import memoize from 'fast-memoize'

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

	const memoized = memoize(recursion)
	return memoized(currentPass)
}

export default generateChar
