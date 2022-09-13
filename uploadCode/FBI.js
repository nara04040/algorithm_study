let input = require("fs").readFileSync("example.txt").toString().split("\n");
// function agent() {
//   for (let i = 0; i < input.length; i++) {
//     let result = 0;
//     let findFbi = input[i].includes("FBI");
//     if (findFbi === true) {
//       return (result += 1);
//     } else {
//       return "HE GOT AWAY!";
//     }
//   }
// }
// console.log(agent(input));

function agent() {
  for (let i = 0; i < input.length; i++) {
    if (input[i].includes("FBI")) {
      answer += i + 1 + " ";
    }
    // let findFbi = input[i].indexOf("FBI");
    // console.log(findFbi === true);
  }
}
console.log(agent(input));
