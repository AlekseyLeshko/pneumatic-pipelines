const addArray = require('../add-array.js')

const addArtifacts = addArray('artifacts')

describe('add array', () => {
  test('should add array in an object', () => {
    const artifacts = [ 'dist/**', 'screenshots/**' ]
    const testObj = {}
    const expected = { step: { artifacts } }

    expect(addArtifacts(artifacts)(testObj)).toEqual(expected)
  })

  test('should update array in an object', () => {
    const artifacts = [ 'dist/**', 'screenshots/**' ]
    const testObj = { step: { artifacts: [ 'test' ] } }
    const expected = {
      step: {
        artifacts: [
          ...testObj.step.artifacts,
          ...artifacts,
        ],
      },
    }

    expect(addArtifacts(artifacts)(testObj)).toEqual(expected)
  })

  test('should add array in undefined', () => {
    const artifacts = [ 'dist/**', 'screenshots/**' ]
    const expected = { step: { artifacts } }

    expect(addArtifacts(artifacts)()).toEqual(expected)
  })
})
