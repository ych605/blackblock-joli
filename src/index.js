import generateChar from './generateChar'

function* uniqueStrGenerator(options) {
	let i = 0
	while (true) {
		yield generateChar(options.chars, i)
		i++
	}
}

export default uniqueStrGenerator
