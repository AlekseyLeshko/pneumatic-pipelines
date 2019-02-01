const fs = require('fs')
const yaml = require('yaml')
const { strOptions } = require('yaml/schema')
const addItem = require('./helpers/add-item')
const addArray = require('./helpers/add-array')
const addString = require('./helpers/add-string')
const addParallel = require('./add-parallel')

const step = {
  addArtifact: addItem('artifacts'),
  addArtifacts: addArray('artifacts'),
  addCache: addItem('caches'),
  addCaches: addArray('caches'),
  addScript: addItem('script'),
  addScripts: addArray('script'),
  addImage: addString('image'),
  addDeployment: addString('deployment'),
  addName: addString('name'),
}

module.exports = {
  addParallel,
  step,
  generate: (pipelines) => {
    strOptions.fold.lineWidth = 0
    const str = yaml.stringify(pipelines)
    fs.writeFileSync('bitbucket-pipelines.yml', str)
  },
}
