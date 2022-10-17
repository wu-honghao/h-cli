import download from 'download-git-repo';
import ora from 'ora';
import chalk from 'chalk';

const log = console.log;

export const downloadFun = (url, project) => {
    const spinner = ora().start();
    spinner.text = '代码正在下载...';
    download('direct:' + url, project, { clone: true }, function (err) {
        if (!err) {
            spinner.succeed('代码下载成功');
            log(chalk.blue.bold('Done!'), chalk.bold('you can:'));

            console.log('cd ' + project);
            console.log('npm install');
            console.log('npm run dev');
        } else {
            spinner.fail('代码下载失败');
        }
    });
};
