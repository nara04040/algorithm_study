const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();

function solution(s) {
  let answer = "";
  let bin = parseInt(s, 8).toString(2);
  if (bin > 0) {
    answer += bin;
  }
  return answer;
}

console.log(solution(input));

// let bin = parseInt(input, 8).toString(2);
// console.log(bin);
