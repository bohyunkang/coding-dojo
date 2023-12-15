function solution(num) {
  let answer = 0;
  let number = num;

  while (number !== 1 || answer >= 500) {
    if (answer > 500) {
      return -1;
    }

    if (number % 2 === 0) {
      number /= 2;
      answer += 1;
      continue;
    }

    if (number % 2 === 1) {
      number *= 3;
      number += 1;
      answer += 1;
      continue;
    }
  }

  return answer;
}

console.log(solution(6), '정답: 8');
console.log(solution(16), '정답: 4');
console.log(solution(626331), '정답: -1');
