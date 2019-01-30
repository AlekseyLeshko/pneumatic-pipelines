const { mergeDeepLeft } = require('ramda')

module.exports = propName => value => (obj) => mergeDeepLeft({ step: { [propName]: value } }, obj)
