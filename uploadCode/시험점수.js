const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let score = parseInt(input);

if (100 >= score && score >= 90) {
  console.log("A");
} else if (89 >= score && score >= 80) {
  console.log("B");
} else if (79 >= score && score >= 70) {
  console.log("C");
} else if (69 >= score && score >= 60) {
  console.log("D");
} else {
  console.log("F");
}
