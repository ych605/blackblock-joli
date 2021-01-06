// import memoize from 'fast-memoize'

// const recursion = (passingCount, str, chars) => {
// 	if (passingCount < chars.length) {
// 		str.unshift(chars[passingCount])
// 		return str.join('')
// 	}
//
// 	const charIndex = Math.floor(passingCount / chars.length) - 1
// 	const remainder = passingCount % chars.length
// 	str.unshift(chars[remainder])
// 	return recursion(charIndex, str, chars)
// }
//
// function generateChar(chars, currentPass) {
// 	const str = []
// 	return recursion(currentPass, str, chars)
// }
//
// export default generateChar
