const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().split("\n");

for (let i = 1; i < input.length; i++) {
  let result = input[i][0].toUpperCase() + input[i].slice(1);
  console.log(result);
}
// 런타임에러... 오ㅑㅐ지?
