const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// 첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력
/**
 * 풀이 방식 : 최솟값과 최댓값을 구하여 공백을 넣어서 출력하자
 * 문자열로 바꾸고 공백으로 나눠주자.
 */

let count = Number(input[0]); // count 를 선언
let numbers = input[1].split(" ").map((x) => Number(x));

let max = numbers[0]; //max 는 최댓값
let min = numbers[0];

// for문을 써서 count를 돌면서
for (let i = 1; i < count; i++) {
  if (max < numbers[i]) {
    max = numbers[i];
  }

  if (min > numbers[i]) {
    min = numbers[i];
  }
}
console.log(`${min} ${max}`);
