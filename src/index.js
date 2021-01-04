import generateChar from './generateChar'
import memoize from 'fast-memoize'

const memoizedFn = memoize(generateChar)

function * uniqueStrGenerator (options) {
  let i = 0
  while (true) {
    yield memoizedFn(options.chars, i)
    i++
  }
}

export default uniqueStrGenerator
