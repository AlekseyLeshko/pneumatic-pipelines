const { mergeDeepLeft } = require('ramda')
const addItem = require('./helpers/add-item')
const addArray = require('./helpers/add-array')
const addString = require('./helpers/add-string')

const mergeForStep = ({ propName, value, obj }) => mergeDeepLeft({ step: { [propName]: value } }, obj)

module.exports = {
  addArtifact: addItem('artifacts'),
  addArtifacts: addArray('artifacts'),
  addCache: addItem('caches'),
  addCaches: addArray('caches'),
  addScript: addItem('script'),
  addScripts: addArray('script'),
  addImage: addString('image')(mergeForStep),
  addDeployment: addString('deployment')(mergeForStep),
  addName: addString('name')(mergeForStep),
}
