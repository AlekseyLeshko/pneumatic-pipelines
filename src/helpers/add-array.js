const { pipe, mergeDeepLeft, mergeDeepWith, concat } = require('ramda')
const checkProp = require('./check-prop')

module.exports = propName => arr => pipe(
  checkProp(propName, []),
  (step) => ({
    ...step,
    [propName]: concat(step[propName], arr),
  }),
)
