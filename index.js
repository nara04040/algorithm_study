const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input = line.toString().trim();
}).on("close", function () {
  console.log(obj[input]);
  process.exit();
});
