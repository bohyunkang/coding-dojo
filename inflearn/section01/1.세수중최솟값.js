function solution(a, b, c) {
  const numbers = arguments;

  let answer = numbers[0];

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] <= answer) {
      answer = numbers[i];
    }
  }

  return answer;
}

// test
console.log(solution(6, 5, 11));
console.log(solution(12, 8, 2));
