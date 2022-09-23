const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split(" ").map(Number);
// console.log(input);
let chess = [1, 1, 2, 2, 2, 8];

let answer = input.map((i, index) => {
  //   console.log(index, i);
  return chess[index] - i;
});

console.log(...answer);
// console.log(answer);
