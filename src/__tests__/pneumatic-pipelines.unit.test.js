const { pipe, mergeDeepLeft, mergeDeepWith, concat } = require('ramda')
const { step } = require('../index')

describe('pneumatic pipelines', () => {
  test('should return step', () => {
    const expected = {
      step: {
        caches: [ 'node', 'yarn' ],
        image: 'node:11.6.0',
        deployment: 'production',
        script: [
          'ENV=production',
          'yarn install',
          'yarn test',
          'yarn build',
        ],
        artifacts: [ 'dist/**', 'screenshots/**' ],
      },
    }

    const stepObj = pipe(
      step.addCaches(['node']),
      step.addCache('yarn'),
      step.addScripts([
        'ENV=production',
        'yarn install',
        'yarn test',
      ]),
      step.addScript('yarn build'),
      step.addArtifacts(['dist/**']),
      step.addArtifact('screenshots/**'),
      step.addImage('node:11.6.0'),
      step.addDeployment('production'),
    )()

    expect(stepObj).toEqual(expected)
  })
})
