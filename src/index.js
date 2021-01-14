'use strict'
const generateChar = require('./generateChar')

function uniqueStrGenerator(symbol, index = 0) {
	return () => generateChar(symbol, index++)
}

module.exports = uniqueStrGenerator
