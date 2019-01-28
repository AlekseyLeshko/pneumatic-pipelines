const checkProp = require('../check-prop')
const { pipe, mergeDeepLeft, mergeDeepWith, concat } = require('ramda')

module.exports = artifacts => pipe(
  checkProp('artifacts', []),
  (step) => ({
    ...step,
    artifacts: concat(step.artifacts, artifacts),
  }),
)
