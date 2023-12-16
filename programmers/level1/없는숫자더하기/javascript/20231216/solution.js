// 풀이 1
function solution(numbers) {
  let answer = 0;

  for (let i = 0; i < 10; i += 1) {
    if (!numbers.includes(i)) {
      answer += i;
    }
  }

  return answer;
}

// 풀이 2
function solution(numbers) {
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  return 45 - sum;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]), '정답: 14');
console.log(solution([5, 8, 4, 0, 6, 7, 9]), '정답: 6');
