const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  let num = input[i].split(" ");
  console.log(
    `Case #${i}: ${num[0]} + ${num[1]} = ${Number(num[0]) + Number(num[1])}`
  );
}
