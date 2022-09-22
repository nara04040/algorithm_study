function solution(left, right) {
  let answer = 0;
  for (let i = left; i < right + 1; i++) {
    let count = 0;
    for (let j = 1; j < i; j++) {}
  }
  return answer;
}

let left = 13;
let right = 17;
console.log(solution(left, right));

// ===============================================================
// function count(number) {
//   let count = 0;
//   for (let i = 1; i < number + 1; i++) {
//     if (number % i === 0) {
//       // number를 1~ number + 1까를 나눠서 떨어지면?
//       count += 1; // count를 1증가
//     }
//   }
//   if (count % 2 === 0) {
//     return number; //짝수면 number드가라
//   } else {
//     return -number; // 홀수면 음수 드가라
//   }
// }

// function solution(left, right) {
//   let answer = 0;
//   for (let i = left; i < right + 1; i++) {
//     answer += count(i);
//   }
//   return answer;
// }

// let left = 13;
// let right = 17;
// console.log(solution(left, right));
