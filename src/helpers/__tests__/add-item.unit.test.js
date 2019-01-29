const addItem = require('../add-item')

const addArtifact = addItem('artifacts')

describe('add prop', () => {
  test('should add prop in an object', () => {
    const artifact = 'dist/**'
    const expected = { artifacts: [ artifact ] }

    expect(addArtifact(artifact)({})).toEqual(expected)
  })

  test('should update prop in an object', () => {
    const artifact = 'dist/**'
    const testObj = { artifacts: [ 'test' ] }
    const expected = { artifacts: [ ...testObj.artifacts, artifact ] }

    expect(addArtifact(artifact)(testObj)).toEqual(expected)
  })
})
