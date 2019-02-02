const fs = require('fs')
const yaml = require('yaml')
const { strOptions } = require('yaml/schema')
const step = require('./step')
const addParallel = require('./add-parallel')

module.exports = {
  addParallel,
  step,
  generate: (pipelines) => {
    strOptions.fold.lineWidth = 0
    const str = yaml.stringify(pipelines)
    fs.writeFileSync('bitbucket-pipelines.yml', str)
  },
}
