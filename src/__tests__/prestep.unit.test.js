const prestep = require('../prestep')

describe('prestep', () => {
  test('should return cache for yarn', () => {
    const expected = { caches: { yarn: '/usr/local/share/.cache/yarn/v4' } }

    expect(prestep.definition.cacheOfYarn()).toEqual(expected)
  })
})
