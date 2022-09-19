const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();

// 윤년이면 1, 아니면 0
// if (yoon) return 1 else {return 0}
// 여기서 윤년은 4의 배수이면서 100의 배수가아닐때 또는 400의 배수
// yoon = *4 && !=== *100 || === *400

function yoonY(s) {
  let answer = 0;
  if ((s % 4 === 0 && s % 100 !== 0) || s % 400 === 0) {
    answer++;
  } else {
    answer = 0;
  }
  return answer;
}
console.log(yoonY(input));
