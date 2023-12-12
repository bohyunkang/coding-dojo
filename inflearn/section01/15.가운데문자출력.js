// 풀이 1
function solution(s) {
  const string = s.split('');
  const midIndex = Math.floor(string.length / 2);

  if (string.length % 2 === 0) {
    return string[midIndex - 1] + string[midIndex];
  }

  return string[midIndex];
}

console.log(solution('study'), '정답: u');
console.log(solution('good'), '정답: oo');

// 풀이 2: substring 사용
function solution2(s) {
  const midIndex = Math.floor(s.length / 2);

  if (s.length % 2 === 0) {
    return s.substring(midIndex - 1, midIndex + 1);
  }

  return s.substring(midIndex, midIndex + 1);
}

console.log(solution2('study'), '정답: u');
console.log(solution2('good'), '정답: oo');

// 풀이 3: substr 사용
function solution3(s) {
  const midIndex = Math.floor(s.length / 2);

  if (s.length % 2 === 0) {
    return s.substr(midIndex - 1, 2);
  }

  return s.substr(midIndex, 1);
}

console.log(solution3('study'), '정답: u');
console.log(solution3('good'), '정답: oo');
