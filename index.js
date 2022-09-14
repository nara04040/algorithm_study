const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(file).toString().trim().split("\n");
let vowel = ["a", "e", "i", "o", "u"];
for (let i = 0; i < input.length - 1; i++) {
  let newArr = new Set(input[i]).length;
  let inputLength = input[i].length;
  // console.log(newArr - inputLength);
}
