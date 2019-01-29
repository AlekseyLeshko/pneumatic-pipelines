const addArray = require('../add-array.js')

const addArtifacts = addArray('artifacts')

describe('add array', () => {
  test('should add array in an object', () => {
    const artifacts = [ 'dist/**', 'screenshots/**' ]
    const testObj = {}
    const expected = {
      artifacts,
    }

    expect(addArtifacts(artifacts)(testObj)).toEqual(expected)
  })

  test('should update array in an object', () => {
    const artifacts = [ 'dist/**', 'screenshots/**' ]
    const testObj = { artifacts: [ 'test' ] }
    const expected = {
      artifacts: [
        ...testObj.artifacts,
        ...artifacts,
      ],
    }

    expect(addArtifacts(artifacts)(testObj)).toEqual(expected)
  })
})
