const fs = require('fs')
const input = fs.readFileSync('example.txt').toString().split(' ')
const resultA = input[0];
const resultB = input[1];

console.log(resultA - resultB);