const { pipe } = require('ramda')
const {
  step, addDefinitions, addPipelines,
  addImage,
} = require('../index')

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
        'after-script': [
          'echo "after script has run!"',
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
      step.addAfterScript(['echo "after script has run!"']),
      step.addArtifacts(['dist/**']),
      step.addArtifact('screenshots/**'),
      step.addImage('node:11.6.0'),
      step.addDeployment('production'),
      step.addName('awesome step'),
    )()

    expect(stepObj).toEqual(expected)
  })

  test('should build pipelines', () => {
    const expected = {
      image: 'node:11',
      pipelines: { default: {}, branchs: {} },
      definitions: {
        caches: {
          yarn: '/root/.cache/yarn',
        },
      },
    }

    const fun = pipe(
      addImage('node:11'),
      addDefinitions({
        caches: {
          yarn: '/root/.cache/yarn',
        },
      }),
      addPipelines({
        default: {},
        branchs: {},
      }),
    )

    expect(fun()).toEqual(expected)
  })
})
