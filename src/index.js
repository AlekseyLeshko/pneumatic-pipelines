const addItem = require('./helpers/add-item.js')
const addArray = require('./helpers/add-array.js')

const step = {
  addArtifact: addItem('artifacts'),
  addArtifacts: addArray('artifacts'),
  addCache: addItem('caches'),
  addCaches: addArray('caches'),
  addScript: addItem('script'),
  addScripts: addArray('script'),
}

module.exports = { step }
