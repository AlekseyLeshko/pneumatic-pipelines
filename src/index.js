const addItem = require('./helpers/add-item')
const addArray = require('./helpers/add-array')
const addString = require('./helpers/add-string')

const addImage = addString('image')

const step = {
  addArtifact: addItem('artifacts'),
  addArtifacts: addArray('artifacts'),
  addCache: addItem('caches'),
  addCaches: addArray('caches'),
  addScript: addItem('script'),
  addScripts: addArray('script'),
  addImage,
  addDeployment: addString('deployment'),
  addName: addString('name'),
}

module.exports = {
  addImage,
  step,
}
