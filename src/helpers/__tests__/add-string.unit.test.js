const { mergeDeepLeft } = require('ramda')
const addString = require('../add-string')

describe('add string', () => {
  test('should add image prop', () => {
    const addImage = addString('image')()
    const expected = { image: 'node:11.6.0' }

    expect(addImage('node:11.6.0')()).toEqual(expected)
  })

  test('should use default props', () => {
    const addImage = addString('image')()
    const expected = { image: 'node:11.6.0' }

    expect(addImage('node:11.6.0')()).toEqual(expected)
  })

  test('should use custome merge function', () => {
    const mergeFun = ({ propName, value, obj }) => mergeDeepLeft({ step: { [propName]: value } }, obj)
    const addImage = addString('image')(mergeFun)
    const expected = { step: { image: 'node:11.6.0' } }

    expect(addImage('node:11.6.0')()).toEqual(expected)
  })

  test('should update prop', () => {
    const addImage = addString('image')()
    const expected = { image: 'node:11.6.0' }
    const obj = { image: 'node:11.0.0' }

    expect(addImage('node:11.6.0')(obj)).toEqual(expected)
  })
})
