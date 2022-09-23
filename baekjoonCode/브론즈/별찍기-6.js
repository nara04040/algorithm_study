const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();

for (let i = Number(input); i > 0; i--) {
  console.log(" ".repeat(Number(input) - i) + "*".repeat(i * 2 - 1));
}
