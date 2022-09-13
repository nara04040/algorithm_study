# baekjoon

 👻 사용법
1. index에 푼다.
2. example에 예제를 넣는다!
3. 백준에 올릴때는 /dev/stdin으로 바꾸자!

공부방향 : 자료구조 -> 알고리즘 -> 실전문제풀

- input 받아오는법
const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(file).toString().trim()
