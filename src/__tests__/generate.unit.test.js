const fs = require('fs')
const generate = require('../generate')

describe('generate', () => {
  beforeEach(() => {
    fs.writeFileSync = jest.fn()
  })

  afterEach(() => {
    fs.writeFileSync.mockReset()
  })

  test('should create yaml file', () => {
    const pipelines = {
      image: 'node:11.0.0',
      pipelines: { default: {} },
    }

    generate(pipelines)

    expect(fs.writeFileSync).toHaveBeenCalled()
    const params = fs.writeFileSync.mock.calls[0]
    expect(params[0]).toEqual('bitbucket-pipelines.yml')
    expect(typeof params[1]).toEqual('string')
  })

  test('should create yaml file with name', () => {
    const pipelines = {
      image: 'node:11.0.0',
      pipelines: { default: {} },
    }
    const fileName = '.travis.yml'

    generate(pipelines, fileName)

    expect(fs.writeFileSync).toHaveBeenCalled()
    const params = fs.writeFileSync.mock.calls[0]
    expect(params[0]).toEqual(fileName)
    expect(typeof params[1]).toEqual('string')
  })
})
