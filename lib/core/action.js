import inquirer from 'inquirer';
import config from '../../config.js';
import { downloadFun } from './download.js';

export const myAction = async (project, args) => {
    const answer = await inquirer.prompt([
        { type: 'list', name: 'framwork', choices: config.framwork, message: '请选择你所使用的框架' },
    ]);

    answer && downloadFun(config.framworkUrl[answer.framwork], project);
};
