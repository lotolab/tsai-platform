'use strict';

const path = require('path')

const projectDir = __dirname

const tsconfigPath = path.join(projectDir,'bin/gulp/tsconfig.json')

require('ts-node').register({
    project:tsconfigPath
})

require('./bin/gulp/gulpfile')