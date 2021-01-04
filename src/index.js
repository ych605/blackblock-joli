import generateChar from './generateChar'

const defaultOptions = {
  chars: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_'
}

function * uniqueStrGenerator (options = defaultOptions) {
  let i = 0
  while (true) {
    yield generateChar(options.chars, i)
    i++
  }
}

export default uniqueStrGenerator
