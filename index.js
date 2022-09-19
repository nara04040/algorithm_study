const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [nowT, throwT] = fs.readFileSync(file).toString().trim().split("\n");

for (let i = 0; )