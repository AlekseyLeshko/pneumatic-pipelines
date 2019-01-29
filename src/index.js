const addItem = require('./helpers/add-item')
const addArray = require('./helpers/add-array')
const addString = require('./helpers/add-string')

const step = {
  addArtifact: addItem('artifacts'),
  addArtifacts: addArray('artifacts'),
  addCache: addItem('caches'),
  addCaches: addArray('caches'),
  addScript: addItem('script'),
  addScripts: addArray('script'),
  addImage: addString('image'),
  addDeployment: addString('deployment'),
}

module.exports = { step }
