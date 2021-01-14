const generateChar = require('../../src/generateChar')

function generator(symbol, index = 0) {
	return () => generateChar(symbol, index++)
}

module.exports = generator
