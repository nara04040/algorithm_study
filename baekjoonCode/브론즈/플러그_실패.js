const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [tcc, ...tsc] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let sumTsc = [...tsc].reduce(function add(sum, currValue) {
  return sum + currValue;
}, 0);

// console.log(sumTsc);
// console.log(tcc);
function solution(s) {
  if (s === 1) {
    return 1;
  } else {
    return sumTsc - 1;
  }
}
console.log(solution(...tsc));
