const addArtifact = require('../add-artifact')

describe('add artifact', () => {
  test('should add artifact in an object', () => {
    const artifact = 'dist/**'
    const expected = { artifacts: [ artifact ] }

    expect(addArtifact(artifact)({})).toEqual(expected)
  })

  test('should update artifact in an object', () => {
    const artifact = 'dist/**'
    const testObj = { artifacts: [ 'test' ] }
    const expected = { artifacts: [ ...testObj.artifacts, artifact ] }

    expect(addArtifact(artifact)(testObj)).toEqual(expected)
  })
})
