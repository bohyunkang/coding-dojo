function solution(n, m, section) {
  let answer = 0;
  let maxRange = Number.MIN_SAFE_INTEGER;

  section.forEach((range) => {
    if (maxRange < range) {
      answer += 1;
      maxRange = range + m - 1;
    }
  });

  return answer;
}

console.log(solution(8, 4, [2, 3, 6]), '정답: 2');
// console.log(solution(5, 4, [1, 3]), '정답: 1');
// console.log(solution(4, 1, [1, 2, 3, 4]), '정답: 4');
// console.log(solution(10, 2, [1, 3, 6, 8, 10]), '정답: 5');
// console.log(solution(5, 2, [1, 4]), '정답: 2');
// console.log(solution(5, 2, [1, 2, 5]), '정답: 2');
