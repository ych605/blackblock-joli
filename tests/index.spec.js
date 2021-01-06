import joli from '../src/index'
const chai = require('chai')
const expect = chai.expect
const R = require('ramda')

describe('Test joli', function() {
	let maxNum, resultDict

	beforeEach(function() {
		resultDict = {
			0: 'a',
			4: 'aa',
			26: 'abc',
			254: 'cccc'
		}

		maxNum = R.pipe(Object.keys, R.map(parseInt), (arr) => Math.max(...arr))(
			resultDict
		)
	})

	describe('if string abcd is used', function() {
		const generator = joli({
			chars: 'abcd'
		})

		it('should return the correct string during different passes', function() {
			for (let i = 0; i <= maxNum; i++) {
				const key = i.toString()
				const generatedValue = generator.next().value

				if (resultDict.hasOwnProperty(key)) {
					expect(generatedValue).to.equal(resultDict[key])
				}
			}
		})
	})

	describe('if array abcd is used', function() {
		const generator = joli({
			chars: ['a', 'b', 'c', 'd']
		})

		it('should return the correct string during different passes', function() {
			for (let i = 0; i <= maxNum; i++) {
				const key = i.toString()
				const generatedValue = generator.next().value

				if (resultDict.hasOwnProperty(key)) {
					expect(generatedValue).to.equal(resultDict[key])
				}
			}
		})
	})
})
