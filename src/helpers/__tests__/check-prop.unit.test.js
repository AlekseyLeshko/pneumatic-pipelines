const checkProp = require('../check-prop')

describe('check prop', () => {
  test('should add new prop in an object', () => {
    const name = 'new-name'
    const testObj = { step: { test: 'test' } }
    const expected = { step: { ...testObj.step, name } }

    expect(checkProp('name', name)(testObj)).toEqual(expected)
  })

  test('should add new prop for an undefined object', () => {
    const name = 'new-name'

    expect(checkProp('name', name)()).toEqual({ step: { name } })
  })

  test('should add new prop without value', () => {
    expect(checkProp('name')()).toEqual({ step: { name: '' } })
  })

  test('should add undefined prop', () => {
    expect(checkProp()()).toEqual({ step: {} })
  })

  test('should update prop', () => {
    const newName = 'new-name'
    const testObj = { step: { test: 'test', name: 'name' } }

    expect(checkProp('name', newName)(testObj)).toEqual(testObj)
  })
})
