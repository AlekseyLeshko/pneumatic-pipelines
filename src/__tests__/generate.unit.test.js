const fs = require('fs')
const generate = require('../generate')

const pipelines = {
  image: 'node:11.0.0',
  pipelines: { default: {} },
}

describe('generate', () => {
  beforeEach(() => fs.writeFileSync = jest.fn())

  afterEach(() => {
    expect(fs.writeFileSync).toHaveBeenCalled()
    fs.writeFileSync.mockReset()
  })

  test('should create yaml file', () => {
    generate(pipelines)

    const params = fs.writeFileSync.mock.calls[0]
    expect(params[0]).toEqual('bitbucket-pipelines.yml')
    expect(typeof params[1]).toEqual('string')
  })

  test('should create yaml file with name', () => {
    const fileName = '.travis.yml'

    generate(pipelines, fileName)

    const params = fs.writeFileSync.mock.calls[0]
    expect(params[0]).toEqual(fileName)
    expect(typeof params[1]).toEqual('string')
  })
})
