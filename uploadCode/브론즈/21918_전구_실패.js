const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

let [N, M] = input[0].split(" ").map(Number);
let bulbs = input[1].split(" ").map(Number);
let a, b, c;

for (let i = 2; i < M + 2; i++) {
  [a, b, c] = input[i].split(" ").map(Number);

  if (a === 1) {
    bulbs[b - 1] = c;
  } else if (a === 2) {
    for (let j = b - 1; j <= c - 1; j++) {
      bulbs[j] = bulbs[j] === 0 ? 1 : 0;
    }
  } else if (a === 3) {
    for (let j = b - 1; j <= c - 1; j++) {
      bulbs[j] = 0;
    }
  } else {
    for (let j = b - 1; j <= c - 1; j++) {
      bulbs[j] = 1;
    }
  }
}
console.log(bulbs.join(" "));

// ==========================================================================
// const fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let [NM, s, ...input] = fs.readFileSync(file).toString().trim().split("\n");

// const [N, M] = NM.split(" ");
// const state = s.split(" ");

// for (let i = 0; i < M; i++) {
//   const [a, b, c] = input[i].split(" ");
//   switch (a) {
//     case "1":
//       state[b - 1] = c;
//       break;
//     case "2":
//       for (let j = b - 1; j <= c - 1; j++) state[j] = state[j] === "0" ? "1" : "0";
//       break;
//     case "3":
//       for (let j = b - 1; j <= c - 1; j++) state[j] = "0";
//       break;
//     case "4":
//       for (let j = b - 1; j <= c - 1; j++) state[j] = "1";
//       break;
//     default:
//       break;
//   }
// }

// console.log(state.join(" "));

// ==============================================================
// const fs = require("fs");
// const { parse } = require("path");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let [tcc, bulbState, ...input] = fs.readFileSync(file).toString().trim().split("\n");

// let bulb = tcc[0];
// let orderTotal = tcc[2];

// let orderList = [...input];
// let a = [...input][0];
// let b = [...input][1];
// let c = [...input][2];

// let leng = orderTotal;
// // let a = [...input][0];
// // let b = [...input][1];
// //i let c = [...input][2];

// for (let i = 0; i < leng; i++) {
//   let answer = "";
//   if (a === 1) {
//     // i번째 전구의 상태를 x로 변경한다.
//     function Forder(orderList) {
//       answer.push();
//     }
//   }
//   if (a === 2) {
//     // l번째부터 r번째까지 전구의 상태를 변경
//     function Sorder() {}
//   }
//   if (a === 3) {
//     // l번째부터 r번째까지 전구를 끈다
//     function Torder() {}
//   }
//   if (a === 4) {
//     // l번째부터 r번째까지 전구를 킨다
//     function Forder() {}
//   }
//   console.log(answer);
// }

// // 1. 전구 갯수랑 명령을 몇번돌릴지를 생각
// // 2. 전구는 첫 상태는 다 꺼져있음
// // 3. for문을 명령어 갯수만큼 돌려주고 필요한 1,2,3,4번 명령어가 나올때마다 명령을 실행시킴.
// // 4. 실행 결과를 answer에 담아준다.
