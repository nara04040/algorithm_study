// 문제 : https://school.programmers.co.kr/learn/courses/30/lessons/42578

// 접근방식
// 옷들이 주어질때 서로 다른 옷 조합을 리턴해라
// 1. 배열을 for문을 돌린다.
//      1. yellow_hat
//      2. blue_sunglasses
//      3. green_turban
//      4. yellow_hat + blue_sunglasses
//      5. green_turban + blue_sunglasses

function solution(clothes) {
  let answer;
  let map = new Map();

  for (let cloth of clothes) {
    // console.log(cloth[1]);
    map.set(cloth[1], map.get(cloth[1]) + 1 || 1);
  }
  let values = [...map.values()];
  let result = values.reduce((a, b) => a * (b + 1), 1) - 1;
  return result;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
); // 5가나와야함
