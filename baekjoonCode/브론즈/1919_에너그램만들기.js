const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [a, b] = fs.readFileSync(file).toString().trim().split("\n");

let stackA = [];
let stackB = [];
let answer = 0;
for (let x of a) {
  stackA.push(x);
}
for (let y of b) {
  stackB.push(y);
}
// 다찢어서 배열에 넣어준다.

for (let i = 0; i < a.length; i++) {
  const d = stackA.pop(); //각 끝자리의 요소를 뽑아낸다
  if (stackB.includes(d)) {
    // 만약 끝자리의 요소가 포함되어있다면?
    stackB.splice(stackB.indexOf(d, 0), 1);
  } else {
    answer++;
  }
}

console.log(answer + stackB.length);
//근데 이 방법은 에너그램이 성립이 되나?
// [a,b,b,a] 이게 에너그램이 아닌가?

// input :
// aabbcc
// xxyybb
