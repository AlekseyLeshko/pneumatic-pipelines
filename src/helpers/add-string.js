const { mergeDeepLeft } = require('ramda')

const defaultMergeFun = ({ propName, value, obj}) =>
  mergeDeepLeft({ [propName]: value }, obj)

module.exports = propName =>
  (mergeFun = defaultMergeFun) =>
    value =>
      (obj = {}) =>
        mergeFun({ propName, value, obj})
