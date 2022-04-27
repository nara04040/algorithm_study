const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const yoon = Number(input);
if ((yoon % 4 === 0 && yoon % 100 !== 0) || yoon % 400 === 0) {
  console.log("1");
} else {
  console.log("0");
}
