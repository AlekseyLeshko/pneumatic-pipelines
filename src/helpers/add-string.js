const { mergeDeepLeft } = require('ramda')

module.exports = propName => value => (obj = { step: {} }) => mergeDeepLeft({ step: { [propName]: value } }, obj)
