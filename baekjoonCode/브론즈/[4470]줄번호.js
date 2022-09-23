const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

for (let i = 1; i < input.length; i++) {
  console.log(i + "." + " " + input[i]);
}
