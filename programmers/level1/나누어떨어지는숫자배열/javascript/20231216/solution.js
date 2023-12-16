function solution(arr, divisor) {
  const array = arr.sort((a, b) => a - b);

  if (divisor === 1) {
    return array;
  }

  const answer = array.reduce(
    (acc, cur) => (cur % divisor === 0 ? [...acc, cur] : [...acc]),
    [],
  );

  return answer.length ? answer : [-1];
}

console.log(solution([5, 9, 7, 10], 5), '정답: [5, 10]');
console.log(solution([2, 36, 1, 3], 1), '정답: [1, 2, 3, 36]');
console.log(solution([3, 2, 6], 10), '정답: [-1]');
