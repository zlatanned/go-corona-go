#!/usr/bin/env node
require('dotenv').config();
const cli = require('./src/cli').handler(process.argv);