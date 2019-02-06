const step = require('./step')
const addParallel = require('./add-parallel')
const addString = require('./helpers/add-string')
const prestep = require('./prestep')
const simpleObj = require('./helpers/simple-obj')

module.exports = {
  addImage: addString('image')(),
  addParallel,
  step,
  prestep,
  addDefinitions: simpleObj('definitions'),
  addPipelines: simpleObj('pipelines'),
}
