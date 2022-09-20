const fs = require("fs");
const { parse } = require("path");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n").map(Number);

function solution(input) {
  let answer = [];
  for (let i = 1; i <= 30; i++) {
    if (!input.includes(i)) {
      answer.push(i);
    }
  }
  return answer;
}
console.log(solution(input));
