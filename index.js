const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();
let num = +Number(input);
let result = "";

for (let i = 0; i < num; i++) {
  //   console.log(" ".repeat(i) + "*".repeat(input - i + 1) + "=");
  let space = " ";
  space += " ".repeat(i);

  for (let j = num - i; j > num - i - 1; j--) {
    let star = "";
    star += "*".repeat(j);
    result += space + star + "\n";
  }
}
console.log(result);
