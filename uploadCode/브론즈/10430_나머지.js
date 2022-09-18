const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [A, B, C] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("")
  .filter((element) => element !== null && element !== undefined && element !== " ");
let numA = Number(A);
let numB = Number(B);
let numC = Number(C);
console.log((numA + numB) % numC);
console.log((numA % numC) + ((numB % numC) % numC));
console.log((numA * numB) % numC);
console.log(((numA % numC) * (numB % numC)) % numC);
