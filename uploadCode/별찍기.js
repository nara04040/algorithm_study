const fs = require("fs");
const input = fs.readFileSync("example.txt").toString();
let star = "";
for (let i = 0; i < input; i++) {
  star += "*";
  console.log(star);
}
