const checkProp = require('../check-prop')

describe('check prop', () => {
  test('should add new prop in an object', () => {
    const name = 'new-name'
    const testObj = { test: 'test' }
    const expected = { ...testObj, name }

    expect(checkProp('name', name)(testObj)).toEqual(expected)
  })

  test('should add new prop for an undefined object', () => {
    const name = 'new-name'

    expect(checkProp('name', name)()).toEqual({ name })
  })

  test('should add new prop without value', () => {
    expect(checkProp('name')()).toEqual({ name: '' })
  })

  test('should add undefined prop', () => {
    expect(checkProp()()).toEqual({})
  })

  test('should update prop', () => {
    const name = 'new-name'
    const testObj = { test: 'test', name: 'name' }
    const expected = { ...testObj, name }

    expect(checkProp('name', name)(testObj)).toEqual(expected)
  })
})
