#!/usr/bin/env node

const path = require('path')
const filename = process.argv[2]
const fs = require('fs')
const generate = require('../src/generate')

const currentDirectory = process.cwd()
const fullpath = path.resolve(currentDirectory, filename)
fs.statSync(fullpath)

const pipelines = require(fullpath)
generate(pipelines)
