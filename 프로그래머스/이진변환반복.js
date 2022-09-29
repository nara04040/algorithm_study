// 문제 설명
// 0과 1로 이루어진 어떤 문자열 x에 대한 이진 변환을 다음과 같이 정의합니다.

// x의 모든 0을 제거합니다.
// x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
// 예를 들어, x = "0111010"이라면, x에 이진 변환을 가하면 x = "0111010" -> "1111" -> "100" 이 됩니다.

// 0과 1로 이루어진 문자열 s가 매개변수로 주어집니다. s가 "1"이 될 때까지 계속해서 s에 이진 변환을 가했을 때,
// 이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아 return 하도록 solution 함수를 완성해주세요.

//  1.  x 의 모든 0 을 제거한다. [o]
//  2.  c = x.length라고 한다.  [ ]
//  3.  result2진법으로 표현한 문자열로 바꾼다.?   [ ]
//  4.

// function solution(s) {
//   let answer = [];
//   for (let x of s) {
//     if (x !== "0") {
//       answer += x[0];
//     } else
//   }
//   return answer;
// }

// let str = "110010101001";
// console.log(solution(str));
// ...??
//  ============================정답2==================================
/**
 * deleteZero = 삭제한 0의 갯수
 * count = 이진변환 횟수
 *  1. originLength에 원본 배열 길이를 담는다.
 *  2. s배열을 1만 남게 정제한다.
 *  3. 이 1만 남은 배열을 다시 담는다. leng
 *  4. 원본 배열 길이와 1만 남게 정제한 배열의 길이를 빼면 0으로 형성된 배열의 길이를 안다
 *    4-1. 0만으로 이뤄진 배열을 변수로 담는다.
 *  5. 1만 남은 배열을 2진법으로 바꿔준다.
 *  6. 2진법으로 바꾼것을 count해준다.
 */
function solution(s) {
  let deleteZero = 0;
  let binaryCount = 0;

  while (s.length !== 1) {
    const originLength = s.length;
    // console.log(originLength);
    s = s
      .split("")
      .filter((v) => v === "1")
      .join("");
    const leng = s.length;
    // console.log(leng);
    deleteZero += originLength - leng;
    s = leng.toString(2);
    binaryCount++;
  }
  return [binaryCount, deleteZero];
}
let str = "110010101001";
console.log(solution(str));

// =========================정답1=============================
// 2진법으로 숫자 변환 함수
// const convertBinaryNumber = (number) => {
//   const quotArr = [];
//   // number가 0이 이상일때 멈춤
//   while (number > 0) {
//     quotArr.unshift(number % 2);
//     number = Math.floor(number / 2);
//   }
//   return quotArr.join("");
// };

// const solution = (s) => {
//   let convertCnt = 0;
//   let deleteCnt = 0;
//   let cnt = 3;

//   while (s !== "1") {
//     let beforeLength = s.length;
//     s = s.replace(/0/g, "");
//     deleteCnt += beforeLength - s.length;
//     s = convertBinaryNumber(s.length);
//     convertCnt++;
//   }
//   return [convertCnt, deleteCnt];
// };

// let str = "110010101001";
// console.log(solution(str));
