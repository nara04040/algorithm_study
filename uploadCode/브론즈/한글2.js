const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();

// console.log(input.charCodeAt());
let answer = input.charCodeAt() - 44031;
console.log(answer);
