const { pickBy } = require('ramda')

module.exports = obj =>
  pickBy(v => v !== undefined, obj)
