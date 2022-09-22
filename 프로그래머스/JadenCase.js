function solution(s) {
  let answer = "";
  s = s.toLowerCase();

  for (let i = 0; i < s.length; i++) {
    if (i === 0 || s[i - 1] === " ") {
      answer += s[i].toUpperCase();
    } else {
      answer += s[i];
    }
  }
  return answer;
}

let arr = "3people unFollowed me";
console.log(solution(arr));
// 출력 : 3people Unfollowed Me

// let arr = s.split(' ');
//    arr.forEach(function(val) {
//        answer.push(val.slice(0,1).toUpperCase()+val.slice(1).toLowerCase())
//    })
//    return answer.join(' ')

// return s.toLowerCase().split(' ').map(i => i.charAt(0).toUpperCase() + i.slice(1)).join(' ')
