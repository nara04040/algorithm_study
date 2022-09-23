// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(file).toString().trim().split("\n");

// // for (let i = 0; i < input.length - 1; i++) {
// //   console.log(input[i].split("").reverse().join(""));
// // }

// function reverseChar(s) {
//   let answer = "";
//   for (let i = 0; i < input.length - 1; i++) {
//     answer += input[i].split("").reverse().join("") + "\n";
//   }
//   return answer;
// }
// console.log(reverseChar(input));

// ==========================9.23 복습================================
const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

// for (let i = 0; i < input.length - 1; i++) {
//   let result = input[i].split("").reverse().join("") + "\n";
//   console.log(result); // console.log() 가 하나 출력하나출력이라서?
// }

function solution(input) {
  let answer = "";
  for (let i = 0; i < input.length - 1; i++) {
    answer += input[i].split("").reverse().join("") + "\n";
  }
  return answer;
}
console.log(solution(input));
