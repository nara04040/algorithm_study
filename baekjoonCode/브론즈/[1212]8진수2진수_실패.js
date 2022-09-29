// 문제
// 8진수가 주어졌을 때, 2진수로 변환하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 8진수가 주어진다. 주어지는 수의 길이는 333,334을 넘지 않는다.

// 출력
// 첫째 줄에 주어진 수를 2진수로 변환하여 출력한다. 수가 0인 경우를 제외하고는 반드시 1로 시작해야 한다.
// 예제 입력 1
// 314
// 예제 출력 1
// 11001100

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();

function solution(n) {
  let eight = ["000", "001", "010", "011", "100", "101", "110", "111"];
  let answer = "";
  for (let i = 0; i < n.length; i++) {
    answer += eight[n[i]];
  }
  let index = 0;
  while (answer[index] === "1" && answer.length !== 1) {
    answer += answer.substr(1);
  }
}

console.log(solution(314));
// 해설1=================================================================
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let number = fs.readFileSync(file).toString().trim();

// const two = ["000", "001", "010", "011", "100", "101", "110", "111"];
// let ans = "";
// for (let i = 0; i < number.length; i++) {
//   ans += two[Number(number[i])];
// }

// if (number === "0") {
//   console.log(0);
// } else {
//   while (ans[0] === "0") {
//     ans = ans.substr(1);
//   }
//   console.log(ans);
// }

// =========================================================
// function solution(s) {
//   let answer = "";
//   let bin = parseInt(s, 8).toString(2);
//   if (bin > 0) {
//     answer += bin;
//   }
//   return answer;
// }

// console.log(solution(input));

// let bin = parseInt(input, 8).toString(2);
// console.log(bin);
