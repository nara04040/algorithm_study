const fs = require("fs");
const { parse } = require("path");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().split("").map(Number);
// "1", " " , "2"
let A = input[0];
let B = input[2];
console.log(A + B);
