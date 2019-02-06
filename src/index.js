const step = require('./step')
const addParallel = require('./add-parallel')
const addString = require('./helpers/add-string')

module.exports = {
  image: addString('image')(),
  addParallel,
  step,
  addDefinitions: (obj) => ({
    definitions: obj,
  }),
}
