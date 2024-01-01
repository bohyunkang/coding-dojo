function solution(s) {
  let answer = 0;
  let current;
  let count = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (count === 0) {
      answer += 1;
      current = s[i];
      count += 1;
      continue;
    }

    if (current !== s[i]) {
      count -= 1;
      continue;
    }

    if (current === s[i]) {
      count += 1;
    }
  }

  return answer;
}

console.log(solution('banana'), '정답: 3');
console.log(solution('abracadabra'), '정답: 6');
console.log(solution('aaabbaccccabba'), '정답: 3');
