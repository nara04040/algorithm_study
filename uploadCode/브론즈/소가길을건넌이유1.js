const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  input = input.slice(1).map((v) => v.split(" ").map(Number));
  let cows = new Map();
  let answer = 0;

  for (let cow of input) {
    const [num, pos] = cow;
    if (!cows.has(num)) cows.set(num, pos);
    else {
      if (cows.get(num) === pos) continue;
      else {
        cows.set(num, pos);
        answer++;
      }
    }
  }

  return answer;
}

console.log(solution(input));

// ===========================================================================
// 소가 건너간 최소횟수를 출력
// 3 1 은 소의 번호가 3번이고 왼쪽이면 0 , 오른쪽이면 1을 나타내므로 3번소가 오른쪽에 있다는 말이다.
// input[i] : 소들의 전체 배열, 여기서 최소
// 풀이 아이디어 : 1에서0 || 0에서1로 바뀔때마다 몇번소에 1을 추가한다.
// 추가한 번호를 return 한다.
// 3번소는 1->0, 0->1로 바뀜, 2번건넘
// 4번소도 1->0으로 바뀜 1번  나머지는 없음 즉 총 3번소 2번, 4번소 1번이므로 3번 건넘
// let total = input[0];

// for (let i = 1; i < total; i++) {
//   let count = 0;
//   let [cowN, cowPo] = input[i].split(" ");
//   if (cowPo === 1 || cowPo === 0) {
//     return count++;
//   }
//   let cowN = input[i][0];
// }

// =======================================================================
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(file).toString().trim().split("\n");
// input = input.map((value) => value.split(" ").map((el) => +el));
// // 소가 건너간 최소횟수를 출력
// // 3 1 은 소의 번호가 3번이고 왼쪽이면 0 , 오른쪽이면 1을 나타내므로 3번소가 오른쪽에 있다는 말이다.
// // input[i] : 소들의 전체 배열, 여기서 최소
// // 풀이 아이디어 : 1에서0 || 0에서1로 바뀔때마다 count에 1을 추가한다.
// // 추가한 번호를 return 한다.
// // 3번소는 1->0, 0->1로 바뀜, 2번건넘
// // 4번소도 1->0으로 바뀜 1번  나머지는 없음 즉 총 3번소 2번, 4번소 1번이므로 3번 건넘
// const [N] = input[0];
// let obj = {};
// let count = 0;

// for (let i = 1; i < N + 1; i++) {
//   if (input[i][0] in obj && obj[input[i][0]] !== input[i][1]) {
//     count++;
//   }
//   obj[input[i][0]] = input[i][1];
// }

// console.log(count)
//===========================================================================================
// for (let i = 1; i < total; i++) {
//   let [cowN, cowPo] = input[i].split(" ");
//   if (cowPo === "1") {
//     count++;
//   }
//   console.log(count);
// }
