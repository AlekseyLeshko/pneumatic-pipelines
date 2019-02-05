const prestep = require('../prestep')

describe('prestep', () => {
  test('should return cache for yarn', () => {
    const expected = { caches: { yarn: '/root/.cache/yarn' } }

    expect(prestep.definition.cacheOfYarn()).toEqual(expected)
  })
})
