function solution(numbers, target) {
  let answer = 0;

  makeTargetNumber(0, 0);

  function makeTargetNumber(index, value) {
    if (index < numbers.length) {
      makeTargetNumber(index + 1, value + numbers[index]);
      makeTargetNumber(index + 1, value - numbers[index]);
      return;
    }

    if (value === target) {
      answer += 1;
    }
  }

  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3), '정답: 5');
console.log(solution([4, 1, 2, 1], 4), '정답: 2');
