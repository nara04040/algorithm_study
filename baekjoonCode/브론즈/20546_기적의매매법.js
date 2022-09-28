const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
/**
 * dayPrice = MachineDuck 하루 거래일마다의 가격
 * totalCost = 총 예산
 * 접근방식
 *  1. BNP , TIMING 방식 따로 만든다음 접근
 *  2. 준현 > 성민 => "BNP", 준현 < 성민 => "TIMING" , 준현 = 성민 => "SAMESAME"
 */
// 준현
const BNP = (totalCost, dayPrice) => {
  let priceNum = 0;
  // 거래일이 14일 , 14일동안 for문을 돈다
  for (let i = 0; i < 14; i++) {
    if (totalCost / dayPrice[i]) {
      priceNum += parseInt(totalCost / dayPrice[i]); // 전량구입
      totalCost %= dayPrice[i]; // 남는돈
    }
  }
  return priceNum * dayPrice[13] + totalCost; // 샀을때 * 거래일 제일 마지막 가격 + 남은가격
};
// 성민
const TIMING = (totalCost, dayPrice) => {
  for (let i = 0; i < 14; i++) {
    let increase = 0;
    let decrease = 0;
    let priceNum = 0;
    if (dayPrice[i] > dayPrice[i - 1]) {
      // 만약 i번째날 하루 전날보다 올랐으면? => 오늘가격 상승
      increase++; // increase에 1을 올린다
      decrease = 0; // decrease는 초기화
    }
    if (dayPrice[i] < dayPrice[i - 1]) {
      // i번쩨날의 하루전날이 가격이 더비쌈 => 오늘가격 하락
      decrease++;
      increase = 0;
    }
    if (increase === 3) {
      // 만약 3일연속 상승한다면 매도
      totalCost += dayPrice[i] * priceNum;
      priceNum = 0;
      increase = 0;
    }
    if (decrease === 3) {
      // 만약 3일연속 하락한다면 매수
      priceNum += parseInt(totalCost / dayPrice[i]);
      totalCost %= dayPrice[i];
      decrease = 0;
    }
    return priceNum * dayPrice[13] + totalCost;
  }
};

const solution = (input) => {
  let totalCost = parseInt(input[0]);
  let dayPrice = input[1].split(" ").map((el) => +el); // 하루마다 가격
  if (BNP(totalCost, dayPrice) > TIMING(totalCost, dayPrice)) {
    return "BNP";
  }
  if (BNP(totalCost, dayPrice) < TIMING(totalCost, dayPrice)) {
    return "TIMING";
  }
  return "SAMESAME";
};

console.log(solution(input));
