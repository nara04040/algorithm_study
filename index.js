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
