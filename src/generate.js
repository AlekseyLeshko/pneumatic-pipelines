const fs = require('fs')
const yaml = require('yaml')
const { strOptions } = require('yaml/schema')

module.exports = (pipelines) => {
  strOptions.fold.lineWidth = 0
  const str = yaml.stringify(pipelines)
  fs.writeFileSync('bitbucket-pipelines.yml', str)
}
