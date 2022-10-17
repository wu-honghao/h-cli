const myaction = require('../core/action');

const myCommander = program => {
    program.command('create <project> [other...]').alias('crt').description('创建项目').action(myaction);
};

module.exports = myCommander;
