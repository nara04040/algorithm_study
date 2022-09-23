// 0923 복습
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

// ========================================================================
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(file).toString().trim().split("\n").map(Number);

// // let max = Math.max.apply(null, input);
// // let indexN = input.indexOf(max.toString());
// // console.log(max);
// // console.log(indexN);
// =======================================================================
// let max = input[0];
// let maxIdx = 0;

// for (let i = 1; i < 9; i++) {
//   if (max < input[i]) {
//     max = input[i];
//     maxIdx = i;
//   }
// }

// console.log(max);
// console.log(maxIdx + 1);

// ===========================정답1=======================================

// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(file).toString().split("\n");
// // console.log(input); ["3", "29", "38", "12", "57", "74", "40", "85", "61"];
// // 스트링으로 변환되어 배열이 된 입력값을 숫자로 변환한다.
// // 최댓값을 구한다.
// // indexOf로 최댓값을 대입해서 몇번째인지 표시한다.
// // 여기서는 인덱스가 아닌 단순히 몇번째인지 알려는 것 그래서 + 1
// input = input.map(Number);
// let max = input[0];
// let maxIndex = 0;

// for (let i = 0; i < input.length; i++) {
//   if (max < input[i]) {
//     max = input[i];
//     maxIndex = i;
//   }
// }

// console.log(max + "\n" + (maxIndex + 1));
