const parallel = require('../add-parallel')

describe('parallel', () => {
  test('should return parallel obj', () => {
    const firstStep = { name: 'first-step' }
    const secondStep = { name: 'second-step' }
    const expected = { parallel: [firstStep, secondStep] }

    expect(parallel([firstStep, secondStep])).toEqual(expected)
  })
})
