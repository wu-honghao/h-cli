#! /usr/bin/env node
// console.log(process.argv);
const { program } = require('commander');

program.option('-f --framework <framework>', '设置框架');
program
    .command('create <project> [other...]')
    .alias('crt')
    .description('创建项目')
    .action((project, args) => {
        console.log(project);
        console.log(args);
    });
program.parse(process.argv);
