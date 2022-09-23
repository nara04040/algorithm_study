const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n").map(Number);
let max = input[0];
let maxIndex = 0;
for (let i = 0; i < input.length; i++) {
  if (max < input[i]) {
    max = input[i];
    maxIndex = i;
  }
}
console.log(max + "\n" + (maxIndex + 1));
