const addArray = require('./add-array')
const { pipe, mergeDeepLeft, mergeDeepWith, concat } = require('ramda')

module.exports = propName => value => (obj) => mergeDeepLeft({ [propName]: value }, obj)
