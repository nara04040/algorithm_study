const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

let answer = "";
for (let i = 1; i <= input; i++) {
  answer += i + "\n"; // "\n을 추가한 이유는 출력을 시간초과가 일어남으로 문자열에 결과값과 개행문자를 넣어 마지막에 출력 해줘야한다."
}
console.log(answer);
