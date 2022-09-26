const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [measure, ...input] = fs.readFileSync(file).toString().trim().split("\n");
console.log(input);
