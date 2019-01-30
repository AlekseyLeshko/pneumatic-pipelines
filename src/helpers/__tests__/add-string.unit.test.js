const addString = require('../add-string')

const addImage = addString('image')

describe('add string', () => {
  test('should add image', () => {
    const expected = { step: { image: 'node:11.6.0' } }

    expect(addImage('node:11.6.0')({})).toEqual(expected)
  })

  test('should update image', () => {
    const expected = { step: { image: 'node:11.6.0' } }
    const step = { step: { image: 'node:11.0.0' } }

    expect(addImage('node:11.6.0')(step)).toEqual(expected)
  })
})
