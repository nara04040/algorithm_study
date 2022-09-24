const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
let tscN = input.shift();

// for (let i = 0; i < tscN; i++) {
//   let [tscN2, str] = input[i].split("");

// }

for (let i = 0; i < tscN; i++) {
  let answer = "";
  let [tscN2, ...str] = input[i].split("");
  if (str[0] === " ") {
    str.shift();
  }

  for (let j = 0; j < str.length; j++) {
    answer += str[j].repeat(tscN2);
  }
  console.log(answer);
}
