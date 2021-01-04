import generateChar from './generateChar'
import memoize from 'fast-memoize'

const defaultOptions = {
  chars: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_'
}

const memoizedFn = memoize(generateChar)

function * uniqueStrGenerator (options = defaultOptions) {
  let i = 0
  while (true) {
    yield memoizedFn(options.chars, i)
    i++
  }
}

export default uniqueStrGenerator
