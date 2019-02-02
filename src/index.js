const fs = require('fs')
const yaml = require('yaml')
const { strOptions } = require('yaml/schema')
const step = require('./step')
const addParallel = require('./add-parallel')
const addString = require('./helpers/add-string')

module.exports = {
  image: addString('image')(),
  addParallel,
  step,
}
