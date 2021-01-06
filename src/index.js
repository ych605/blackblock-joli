const generateChar = require('./generateChar')

function* uniqueStrGenerator(options) {
	let i = 0
	while (true) {
		yield generateChar(options.chars, i)
		i++
	}
}

module.exports = uniqueStrGenerator
