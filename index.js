let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("");

// console.log(input);
let a = new Array(26).fill(0);

// console.log(a);
for (let i = 0; i < input.length; i++) {
  console.log(input[i]);
}
