// 인쇄되는 사항들을 다 반복문으로 돌린다. [o]
// 꺼낸 요소가 뒷요소보다 다르면 배열 맨뒤로 넣는다. [o]
// 만약 같다면 count증가 [o]
// location 이 0이라면 count를 return 하고 끝낸다[o]
// 한번 끝낼때마다 location값을 줄인다. [o]
// -1이될때 배열 끝으로 보낸다 [o]

function solution(priorities, location) {
  let max;
  let count = 0;

  // 반복문으로 순회
  // max = 배열중에서 제일 큰 요소
  while (true) {
    max = Math.max(null, ...priorities);
    let n = priorities.shift();

    if (n === max) {
      count++;
      if (location === 0) {
        return count;
      }
    } else {
      priorities.push(n);
    }
    location--;
    if (location === -1) {
      location = priorities.length - 1;
    }
  }
}

let arr = [2, 1, 3, 2];
console.log(solution(arr, 2));

// ===================================================================
/**
 * 인쇄되는걸 다 반복문으로 순회한다. [ㅇ]
 * 맨앞의 문서를 꺼내고 우선순위를 판별 []
 * 우선순위가 높다면 맨뒤로 넣는다 [ ㅇ]
 * 문서 꺼낼때마다 자신의 문서 위치를 바꾼다 [ㅇ]
 * 이것을 반복한다.
 *  */

// function solution(priorities, location) {
//   let answer = 0;
//   let count = 0;
//   while (priorities.length > 0) {
//     let firstDoc = priorities.shift();
//     // console.log(firstD);

//     // 만약 맨앞 문서보다 우선순위가 높은게 존재하다면?
//     if (priorities.filter((e) => e > firstDoc).length > 0) {
//       // 배열의 맨뒤에 넣는다
//       priorities.push(firstDoc);
//     } else {
//       // 카운트를 올리고
//       count++;
//       // location에 해당되는 문서가 자신의 문서라면?
//       if (location === 0) {
//         // 반복문을 종료한다
//         return (answer = count);
//       }
//     }
//     //문서 꺼낼때마다 문서위치를 바꾼다
//     location--;

//     // 만약 내문서가 제일뒤에갔다면?
//     if (location === -1) {
//         // 인덱스 위치도 바꾼다
//       location = priorities.length - 1;
//     }
//   }
//   return answer;
// }

// let arr = [2, 1, 3, 2];
// console.log(solution(arr, 2));
