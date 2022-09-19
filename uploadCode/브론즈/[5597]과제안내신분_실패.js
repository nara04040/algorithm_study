const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

let total = input.length;
for (let i = 1; i < total; i++) {
  let arr = [];
  if (input.includes(i) === false) arr.push(i);
  console.log(arr);
}
