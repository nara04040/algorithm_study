const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// 줄기준으로 테스트케이스를 정제해준다.

// for문으로 돌리며 split으로 A와 B를 나눈후 더해준다.
for (let i = 1; i <= input[0]; i++) {
  let num = input[i].split(" ");
  console.log(`Case #${i}: ${Number(num[0]) + Number(num[1])}`);
}

/*
오답이유 
1. i의 범위를 i < input[0]으로해서 case4까지만 나왔다.
2. Case #i: num으로 나와야하는데 Case #i : num 으로 나옴. 출력을 그대로 하는법을 배우자 
*/
