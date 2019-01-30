const { pipe, concat } = require('ramda')
const checkProp = require('./check-prop')

module.exports = propName => arr => pipe(
  checkProp(propName, []),
  (obj) => ({
    step: {
      ...obj.step,
      [propName]: concat(obj.step[propName], arr),
    },
  }),
)
