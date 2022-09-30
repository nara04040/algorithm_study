// 0930 복습
// function solution(s) {
//   function solution(s) {
//     var answer = true;
//     let pN = 0;
//     let yN = 0;
//     for (let i = 0; i < s.length; i++) {
//       s = s.toLowerCase();
//       if (s[i].includes("p")) {
//         pN++;
//       } else if (s[i].includes("y")) {
//         yN++;
//       }
//     }
//     if (pN !== yN) {
//       answer = false;
//     }
//     return answer;
//   }
// }

// ==============================================================================
// 다른풀이1
// function solution(s) {
//   return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
// }
// 풀이 해설
// s 배열을 대문자로 변경후 "P", "Y" 로 split()한후 길이같은지 판별

// ==============================================================================
// 다른풀이2
function solution(s) {
  let str = s.toLowerCase();
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (str[i] === "p") {
      count++;
    } else if (str[i] === "y") {
      count--;
    }
  }
  return count === 0 ? true : false;
}
console.log(solution("pPoooyY")); // ture
console.log(solution("Pyy")); // false
