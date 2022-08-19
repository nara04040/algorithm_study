const fs = require('fs')
const inputData = fs.readFileSync('/dev/stdin').toString().split(' ').map(value => +value)
// stdin을 불러와서 , .toString()문자열로 바꾼다음 , .split(' '), 공백 기준으로 나누고, .map() 새로운 배열로 만든다음, (value => +value) 속성값을 숫자형태로 바꿔라

const [a, b] = inputData
// inputData를 [a,b]로 선언, 배열로 선언이 가능하구나,,, 확인 머리에 기억, inputData의 첫번째 값이 a로 들어가고 두번째 값이 b로 들어간다. (구조분해할당)
console.log(a + b)