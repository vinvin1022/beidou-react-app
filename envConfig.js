// 设置环境变量
// eslint-disable-next-line @typescript-eslint/no-var-requires
const chalk = require('chalk');
const configArgv = JSON.parse(process.env.npm_config_argv);
const original = configArgv.original.slice(2);
console.log(configArgv)
const stage = original[0] ? original[0].replace(/-/g, '') : 'test';
let envName = {
  test: 'http://webapi.test.sxmaps.com/',
  pre: 'http://pre-webapi.sxmaps.com/',
  prod: 'https://webapi.sxmaps.com/'
};

//匹配取值
// let WEB_URL = envName[process.env.REACT_APP_KEY];
let WEB_URL = envName[stage || 'test'];
console.log(chalk.green(`当前环境：${stage}`));
console.log(chalk.green(`当前api地址：${WEB_URL}`));
module.exports = {
  WEB_URL,
  stage
};
