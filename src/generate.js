const fs = require('fs')
const yaml = require('yaml')
const { strOptions } = require('yaml/schema')

strOptions.fold.lineWidth = 0

module.exports = (pipelines, fileName = 'bitbucket-pipelines.yml') =>
  fs.writeFileSync(fileName, yaml.stringify(pipelines))
