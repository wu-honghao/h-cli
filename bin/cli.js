#! /usr/bin/env node
// console.log(process.argv);
const { program } = require('commander');
const myhelp = require('../lib/core/help');
const mycommander = require('../lib/core/myCommand');

myhelp(program);
mycommander(program);

program.parse(process.argv);
