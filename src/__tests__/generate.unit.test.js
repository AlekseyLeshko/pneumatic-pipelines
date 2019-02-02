const fs = require('fs')
const generate = require('../generate')

describe('generate', () => {
  test('should write file with yaml', () => {
    fs.writeFileSync = jest.fn()
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
})
