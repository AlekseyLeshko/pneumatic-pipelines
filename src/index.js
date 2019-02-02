const fs = require('fs')
const yaml = require('yaml')
const { strOptions } = require('yaml/schema')
const step = require('./step')
const addParallel = require('./add-parallel')

module.exports = {
  addParallel,
  step,
}
