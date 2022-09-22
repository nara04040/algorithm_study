const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [NM, s, ...input] = fs.readFileSync(file).toString().trim().split("\n");
