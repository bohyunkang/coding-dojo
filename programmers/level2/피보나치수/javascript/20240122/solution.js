function solution(n) {
  const number = [0, 1];

  for (let i = 2; i <= n; i += 1) {
    number.push((number[i - 1] + number[i - 2]) % 1234567);
  }

  return number[n];
}

console.log(solution(3), '정답: 2');
console.log(solution(5), '정답: 5');
