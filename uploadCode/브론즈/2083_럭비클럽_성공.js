const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  // console.log(input[i]);
  let [name, age, weight] = input[i].split(" ");
  if (age > 17 || weight >= 80) {
    console.log(`${name} Senior`);
  } else {
    console.log(`${name} Junior`);
  }
}

// function solution(s) {
//   let answer = "";
//   for (let i = 0; i < s.length - 1; i++) {
//     let name = s[i].split(" ").shift().split("\n");
//     answer += name;

//     let adult = s[i].split(" ");
//     adult.shift();

//     if (adult[0] > 17 || adult[1] > 80) return (answer += "Senior");
//   }
//   return answer;
// }
