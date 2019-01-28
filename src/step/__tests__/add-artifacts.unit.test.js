const addArtifacts = require('../add-artifacts')

describe('add artifacts', () => {
  test('should add artifacts in an object', () => {
    const artifacts = [ 'dist/**', 'screenshots/**' ]
    const testObj = {}
    const expected = {
      artifacts,
    }

    expect(addArtifacts(artifacts)(testObj)).toEqual(expected)
  })

  test('should update artifacts in an object', () => {
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
