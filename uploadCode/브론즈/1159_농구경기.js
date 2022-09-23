// 0923복습
const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

function solution(input) {
  let playN = input.shift();
  let obj = {};
  let answer = "";

  for (let i = 1; i < playN; i++) {
    if (obj[input[i][0]]) {
      obj[input[i][0]]++; // obj에 첫글자를 추가해라
    } else {
      obj[input[i][0]] = 1; //아니면 1을 넣어라
    }
  }

  for (let i in obj) {
    // obj안에 를 순회하는걸 i에 넣고
    if (obj[i] >= 5) {
      // 만약 obj의 element에 숫자가 5이상이면?
      answer += i; // answer에 요소들을 넣어라
    }
  }

  if (answer.length === 0) {
    //만약 answer문자열에 아무것도 없으면?
    console.log("PREDAJA"); // predaja를 도출
  }
  return answer;
}

console.log(solution(input));

// =================================================================
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let [playN, ...input] = fs.readFileSync(file).toString().trim().split("\n");

// // 나의 전략 :
// // 1. 일단 선수 인원만큼 for를 돌려서 이름을 다 받아낸다.
// // 2. 이후 맨 앞글자만 나오게 만든다
// // 3. 앞글자 중복된게 있다면(이걸 구현 잘못한거같아) 문자열에 넣어서 출력한다.

// for (let i = 0; i < playN; i++) {
//   let newArr = input[i][0].split("").map((item) => item);
//   let result = "";
//   for (let j = 0; j < newArr.length; j++) {
//     if (newArr === newArr[j]) {
//       result.push(newArr[j]);
//     }
//     console.log(newArr);
//   }
// }

// ===============================정답==================================================
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// input.shift();
// input.sort();
// let obj = {};
// let result = "";

// for (let i = 0; i < input.length; i++) {
//   if (obj[input[i][0]]) {
//     obj[input[i][0]]++;
//   } else {
//     obj[input[i][0]] = 1;
//   }
// }

// for (let i in obj) {
//   if (obj[i] >= 5) result += i;
// }

// console.log(result.length === 0 ? "PREDAJA" : result);
