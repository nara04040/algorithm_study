const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [num1, op, num2] = fs.readFileSync(file).toString().trim().split("\n");

let Num1 = num1.length - 1;
let Num2 = num2.length - 1;
const bigger = Math.max(Num1, Num2);
const smaller = Math.min(Num1, Num2);

const result =
  op === "*"
    ? "1" + "0".repeat(Num1 + Num2)
    : Num1 === Num2
    ? "2" + "0".repeat(Num1)
    : "1" + "0".repeat(bigger - smaller - 1) + "1" + "0".repeat(smaller);
console.log(result);

// 에러이유 : Number을 사용한다면 출력결과가 다르기에
// 방법 1 Num1,2를  BigInt()를 사용한다.
// https://joooing.tistory.com/entry/Javascript-소수점floating-point-계산-오류 : Number오류에대한 참고
