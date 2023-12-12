function solution(N) {
  const numbers = Array(N)
    .fill()
    .map((_, i) => i + 1);

  // const numbers = Array.from({ length: N }).map((_, i) => i + 1);

  return numbers.reduce((sum, current) => sum + current, 0);
}

console.log(solution(6), '기대하는 값: 21');
console.log(solution(10), '기대하는 값: 55');
