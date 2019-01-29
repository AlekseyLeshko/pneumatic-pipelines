const addArray = require('./add-array')

module.exports = propName => value => addArray(propName)([value])
