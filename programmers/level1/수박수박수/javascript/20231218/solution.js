// 풀이 1
function solution(n) {
  let answer = '';

  for (let i = 0; i < n; i += 1) {
    if (i % 2 === 0) {
      answer += '수';
    }

    if (i % 2 === 1) {
      answer += '박';
    }
  }

  return answer;
}

// 풀이 2
function solution(n) {
  return '수박'.repeat(n).slice(0, n);
}

console.log(solution(3), '정답: 수박수');
console.log(solution(4), '정답: 수박수박');
