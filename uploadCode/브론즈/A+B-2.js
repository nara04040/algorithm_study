// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// let input = fs
//   .readFileSync(file)
//   .toString()
//   .trim()
//   .split("\n")
//   .map((i) => Number(i));
// console.log(input[0] + input[1]);

// 다른풀이 1
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// let [a, b] = fs.readFileSync(file).toString().trim().split("\n").map(Number);
// console.log(a + b);
