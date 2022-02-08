#!/usr/bin/env node
const lib = require('imooc-cli-lib');
const argv = require('process').argv;
const command = argv[2];
const options = argv.slice(3);
const [option,param] = options;
console.log(option);
console.log(param);
// console.log(argv)
if(lib[command]){
    lib[command](option,param);
}else{
    console.log('请输入命令');
}
// console.log(lib.sum(1,2));
// console.log('imooc cli !!!');