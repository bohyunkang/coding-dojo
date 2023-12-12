function solution(N) {
  const dozen = 12;
  const answer = N / dozen;

  return Math.ceil(answer);
}

console.log(solution(25), '기대하는 값: 3');
console.log(solution(178), '기대하는 값: 15');
