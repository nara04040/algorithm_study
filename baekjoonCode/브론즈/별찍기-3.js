const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString();

for (let i = input; i > 0; i--) {
  console.log("*".repeat(i));
}
