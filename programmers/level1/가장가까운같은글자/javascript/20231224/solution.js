// 풀이 1
function solution(s) {
  const answer = [];

  for (let i = 0; i < s.length; i += 1) {
    if (s.indexOf(s[i]) !== i) {
      const nearestIndex = s.lastIndexOf(s[i], i) - s.lastIndexOf(s[i], i - 1);
      answer.push(nearestIndex);
      continue;
    }

    answer.push(-1);
  }

  return answer;
}

// 풀이 2
function solution(s) {
  return s
    .split('')
    .map((char, i) =>
      s.indexOf(char) !== i
        ? s.lastIndexOf(char, i) - s.lastIndexOf(char, i - 1)
        : -1,
    );
}

console.log(solution('banana'), '정답: [-1, -1, -1, 2, 2, 2]');
console.log(solution('foobar'), '정답: [-1, -1, 1, -1, -1, -1]');
