const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [lNum, lState, ...input] = fs.readFileSync(file).toString().trim().split("\n");

/**
 * lNum : 전구의 개수
 * lState : 전구의 현재상태 (0은 꺼져있는 , 1은 켜져있는)
 * ... input :
 */

// 전구를 제어하는 명령어 4개있음
// 1번 : i번째 상태를 x로
// 2번 : l ~ r번째까지 상태변경 => 켜있는건 끄고 , 끈건 키고
// 3번 : l번째부터 r번째까지 전구를 끈다.
// 4번 : l번째부터 r번째까지의 전구를 킨다.
