function solution(n) {
  let answer = 0;
  let divisor = 1;

  while (n > 0) {
    if (n % divisor === 0) {
      answer += 1;
    }

    n -= divisor;
    divisor += 1;
  }

  return answer;
}

console.log(solution(15), '정답: 4');
