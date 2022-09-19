const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

let total = input.length;
for (let i = 1; i < total; i++) {
  let arr = [];
  if (input.includes(i) === false) arr.push(i);
  console.log(arr);
}

// 정답
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(file).toString().trim().split("\n").map(Number);

// let answer = [];

// for (let i = 1; i <= 30; i++) {
//   if (!input.includes(i)) {
//     answer.push(i);
//   }
// }
// answer.sort((a, b) => a - b);
// console.log(answer.join("\n"));
