const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

// function solution(t, arr) {
//   for (let i = 0; i < t; i++) {
//     // let num = arr[i * 2];
//     let tempArr = arr[i * 2 + 1].split(" ").map((item) => +item);

//     // 대소 구분
//     const maxN = Math.max(...tempArr);
//     const minN = Math.min(...tempArr);
//     console.log(maxN, minN);
//   }
// }
// solution(t, ...arr);

const total = Number(input[0]);
for (let i = 1; i < total + 1; i++) {
  let arr = input[i * 2].split(" ");
  console.log(`${Math.min(...arr)} ${Math.max(...arr)}`);
}
