#! /usr/bin/env node
// console.log(process.argv);
import { program } from 'commander';
import { myHelp } from '../lib/core/help.js';
import { myCommander } from '../lib/core/myCommand.js';

myHelp(program);
myCommander(program);

program.parse(process.argv);
