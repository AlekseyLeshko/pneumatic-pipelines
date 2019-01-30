const addItem = require('../add-item')

const addArtifact = addItem('artifacts')

describe('add prop', () => {
  test('should add prop in an object', () => {
    const artifact = 'dist/**'
    const expected = { step: { artifacts: [ artifact ] } }

    expect(addArtifact(artifact)({})).toEqual(expected)
  })

  test('should update prop in an object', () => {
    const artifact = 'dist/**'
    const testObj = { step: { artifacts: [ 'test' ] } }
    const expected = { step: { artifacts: [ ...testObj.step.artifacts, artifact ] } }

    expect(addArtifact(artifact)(testObj)).toEqual(expected)
  })
})
