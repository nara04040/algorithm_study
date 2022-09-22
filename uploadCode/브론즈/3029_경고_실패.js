// const fs = require("fs");
// const { parse } = require("path");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let [nowT, thT] = fs.readFileSync(file).toString().trim().split("\n");

// nowT = nowT.split(":");
// thT = thT.split(":");

// let hh = nowT[0];
// // hh >=0 , hh <= 23
// let mm = nowT[1];
// let ss = nowT[2];
// // mm,ss >= 0, ss <= 59

// // 만약  현재시간 = 20:00:00, 던질시간 04:00:00이라면 24시간기준 총 08:00:00을 기다려야한다.

// ===================================================================
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// console.log(h1, m1, s1);
// console.log(h2, m2, s2);

function solution(input) {
  const [h1, m1, s1] = input[0].split(":").map((x) => +x);
  const [h2, m2, s2] = input[1].split(":").map((x) => +x);
  let time = h2 * 3600 + m2 * 60 + s2 - (h1 * 3600 + m1 * 60 + s1);
  if (time <= 0) time += 3600 * 24;
  let h = Math.floor(time / 3600) + "";
  time = time % 3600;
  let m = Math.floor(time / 60) + "";
  time = time % 60;
  let s = time + "";

  console.log(`${h.padStart(2, "0")}:${m.padStart(2, "0")}:${s.padStart(2, "0")}`);
}
solution(input);
