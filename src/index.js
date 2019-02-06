const step = require('./step')
const addParallel = require('./add-parallel')
const addString = require('./helpers/add-string')
const prestep = require('./prestep')

module.exports = {
  image: addString('image')(),
  addParallel,
  step,
  prestep,
  addDefinitions: (obj) => ({
    definitions: obj,
  }),
}
