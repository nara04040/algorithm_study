// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// let answer = 0;

// let input = fs
//   .readFileSync(file)
//   .toString()
//   .trim()
//   .split(" ")
//   .map((i) => (answer += Math.pow(Number(i), 2)));
// answer = answer % 10;

// console.log(answer);
// 우아하게 코드짜는법

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map((i) => parseInt(i, 10));
let sum = 0;
console.log(input);
for (let i = 0; i < input.length; i++) {
  sum += input[i] * input[i];
}

const answer = sum % 10;

console.log(answer);
// 설명
// 1. .map으로 string형태로된 배열을 숫자로된 배열로 바꿔준다.
// 2. 각자리를 제곱한 값을 구해야함으로 sum변수에 넣어준다. for문으로 돌려서 제곱값을 넣어주면 sum완성
// 3. 이 값을 10으로 나눠서 나머지값이 답!
