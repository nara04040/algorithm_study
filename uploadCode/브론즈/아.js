let input = require("fs").readFileSync("example.txt").toString().split("\n");
let maxSay = input[0];
let docSay = input[1];

function sayAh() {
  if (maxSay > docSay) {
    return "no";
  } else {
    return "go";
  }
}
console.log(sayAh(input));
