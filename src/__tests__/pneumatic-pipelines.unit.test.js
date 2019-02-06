const { pipe } = require('ramda')
const { step, addDefinitions, addPipelines } = require('../index')

describe('pneumatic pipelines', () => {
  test('should return step', () => {
    const expected = {
      step: {
        name: 'awesome step',
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
      step.addName('awesome step'),
    )()

    expect(stepObj).toEqual(expected)
  })

  test('should return definitions', () => {
    const expected = {
      definitions: {
        caches: {
          yarn: '/root/.cache/yarn',
        },
      },
    }

    const obj = {
      caches: {
        yarn: '/root/.cache/yarn',
      },
    }

    expect(addDefinitions(obj)).toEqual(expected)
  })

  test('should return pipelines', () => {
    const expected = { pipelines: { default: {}, branchs: {} } }

    const obj = { default: {}, branchs: {} }

    expect(addPipelines(obj)).toEqual(expected)
  })
})
