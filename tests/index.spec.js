import joli from '../src/index'
const chai = require('chai')
const expect = chai.expect
const R = require('ramda')

describe('Test joli', function () {
  describe('if charset abcd is used', function () {
    const generator = joli({
        chars: 'abcd'
    })

    const resultDict = {
      0: 'a',
      4: 'aa',
      26: 'abc',
      254: 'cccc'
    }

    it('should return the correct string in different pass', function () {
      const maxNum = R.pipe(
        Object.keys,
        R.map(parseInt),
        (arr) => Math.max(...arr)
      )(resultDict)

      for(let i = 0; i <= maxNum; i++ ){
        const key = i.toString()
        const generatedValue = generator.next().value

        if(resultDict.hasOwnProperty(key)){
          expect(generatedValue).to.equal(resultDict[key])
        }
      }
    })
  })
})
