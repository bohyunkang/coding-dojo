function solution(number) {
  let count = 0;

  for (let i = 0; i < number.length - 2; i += 1) {
    for (let j = i + 1; j < number.length - 1; j += 1) {
      for (let k = j + 1; k < number.length; k += 1) {
        if (number[i] + number[j] + number[k] === 0) {
          count += 1;
        }
      }
    }
  }

  return count;
}

console.log(solution([-2, 3, 0, 2, -5]), '정답: 2');
console.log(solution([-3, -2, -1, 0, 1, 2, 3]), '정답: 5');
console.log(solution([-1, 1, -1, 1]), '정답: 0');
