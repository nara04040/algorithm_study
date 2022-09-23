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
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
input.shift();
input.sort();
let obj = {};
let result = "";

for (let i = 0; i < input.length; i++) {
  if (obj[input[i][0]]) {
    obj[input[i][0]]++;
  } else {
    obj[input[i][0]] = 1;
  }
}

for (let i in obj) {
  if (obj[i] >= 5) result += i;
}

console.log(result.length === 0 ? "PREDAJA" : result);
