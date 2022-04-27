// example.txt => /dev/stdin
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n"); // input에서 A와B 사이에 공간이 있기에 일단 공간을 기준으로 짤라준다.

for (let i = 1; i <= input[0]; i++) {
  // 1~input[0] 까지 포함
  let number = input[i].split(" "); // number를 빈칸을 기준으로 나눠준다.
  console.log(Number(number[0]) + Number(number[1]));
}
