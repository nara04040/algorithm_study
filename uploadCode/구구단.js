// example.txt => /dev/stdin

const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim();

for (let i = 1; i < 10; i++) {
  console.log(`${input} * ${i} = ${input * i}`);
}
