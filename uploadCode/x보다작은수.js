const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let inputs = [];
inputs = input[0].split(" "); // inputs라는 빈배열을 만들고 input[0]인 10 5를 ' ' 를 기준으로 나눈뒤 배열에 넣어준다.

// 이 다음 스텝은? '10' 와 '5' 를 배열에 넣었으니 10까지의 숫자배열을 5미만까지 반환해야하니까
// 10까를 변수 지정해주고, 5까지의 변수도 지정해주자
let totalNumber = inputs[0];
let limitNumber = inputs[1];

// input[1]에 있는 숫자배열을 가져와보자
let numbers = input[1];
// 자 이걸로 뭐할까? ' ' 기준으로 split해보자
numbers = input[1].split(" ");

// 자 정답으로할 result도 선언해주고
result = "";

// 이제부터 for문을 돌면서 주어진 조건으로 정답을 반환해보자!
for (let i = 0; i < totalNumber; i++) {
  // 만약 numbers(무작위숫자배열)의 인수들이 limitNumber(5까지) 미만이라면!
  if (Number(numbers[i]) < limitNumber) {
    // result값에 numbers[i]인수들을 하나씩 추가해주자 그리고 space도 추가해주자!
    result += numbers[i] + " ";
  }
}
console.log(result);
//고생해써
