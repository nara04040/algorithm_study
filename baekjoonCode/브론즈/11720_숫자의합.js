// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(file).toString().trim().split("\n");

// let num = Number(input[0]);
// let num2 = input[1].split("");
// let sum = 0;

// for (let i = 0; i < num; i++) {
//   sum += Number(num2[i]);
// }
// console.log(sum);

// 나의 풀이
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let [A, B] = fs.readFileSync(file).toString().trim().split("\n");

// let b = B.split("");
// let result = b.reduce((acc, cur) => {
//   return acc + cur;
// });
// console.log(result); // 틀림

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [A, B] = fs.readFileSync(file).toString().trim().split("\n");

let b = B.split("");
let result = b.reduce((acc, cur) => {
  return acc + cur * 1;
}, 0);
console.log(result); // 정답

// 정답이유  arr.reduce((acc,cur) => {
// return acc + cur * 1 여기에 곱하기 1을 해줘야함
// }, 0) // 끝에 0넣어야함 reduce함수에대한 이론 다시보기
