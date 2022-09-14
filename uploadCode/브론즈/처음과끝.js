let input = require("fs").readFileSync("example.txt").toString().split("\n");

for (let x of input) {
  let fword = x.substring(0, 1);
  let lword = x.substring(x.length - 1, x.length);
  console.log(fword + lword);
}
