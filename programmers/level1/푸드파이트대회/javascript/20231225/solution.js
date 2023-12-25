function solution(food) {
  const oneServing = food.map((item, i) => `${i}`.repeat(Math.floor(item / 2)));

  return oneServing.join('') + 0 + oneServing.reverse().join('');
}

console.log(solution([1, 3, 4, 6]), '정답: 1223330333221');
console.log(solution([1, 7, 1, 2]), '정답: 111303111');
console.log(solution([1, 2, 2, 2, 2]), '정답: 123404321');
