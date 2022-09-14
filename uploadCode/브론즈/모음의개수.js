const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

// function findVowel() {
//   for (let i = 0; i < input.length; i++) {
//     let a = input[i].split("");
//     let answer = 0;
//     let vowel = ["a", "e", "i", "o", "u"];
//     switch (true) {
//       case a.includes("a"):
//         answer++;
//       case a.includes("e"):
//         answer++;
//     }
//   }
// }

// console.log(findVowel(input));

// function findVowel() {
//   let answer = 0;
//   let vowel = ["a", "e", "i", "o", "u"];

//   for (let x of input) {
//     if (vowel.includes(x)) {
//       answer++;
//     }
//   }
//   return answer;
// }

// console.log(findVowel(input));

function vowelFind(s) {
  let count = 0;
  let vowel = ["a", "e", "i", "o", "u"];

  for (let x of s) {
    if (vowel.includes(x)) {
      count++;
    }
  }

  return count;
}

console.log(vowelFind(input[0]));
console.log(vowelFind(input[1]));
console.log(vowelFind(input[2]));
