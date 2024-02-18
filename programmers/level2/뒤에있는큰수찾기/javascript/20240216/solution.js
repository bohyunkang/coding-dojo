/*
  풀이 1: 시간 초과(테케 20~23)
  for 1) 요소를 돌면서
  for 2) 해당 요소 인덱스 기준으로 그 다음 인덱스가 크면 그걸 반환, 아니면 다음 인덱스로, 없으면 -1
*/
function solution(numbers) {
  const answer = [];

  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      if (numbers[i] < numbers[j]) {
        answer.push(numbers[j]);
        break;
      }

      if (numbers[i] >= numbers[j]) {
        if (j === numbers.length - 1) {
          answer.push(-1);
          break;
        }

        continue;
      }
    }
  }

  answer.push(-1);

  return answer;
}

// 풀이 2: 모든 케이스 통과!
function solution(numbers) {
  const answer = new Array(numbers.length).fill(-1);

  const stack = [];

  for (let i = numbers.length - 1; i >= 0; i -= 1) {
    while (stack.length !== 0 && numbers[i] >= stack.at(-1)) {
      stack.pop();
    }

    if (stack.length !== 0) {
      answer[i] = stack.at(-1);
    }

    stack.push(numbers[i]);
  }

  return answer;
}

console.log(solution([2, 3, 3, 5]), '정답: [3, 5, 5, -1]');
console.log(solution([9, 1, 5, 3, 6, 2]), '정답: [-1, 5, 6, 6, -1, -1]');
console.log(solution([9, 1, 5, 3]), '정답: [-1, 5, -1, -1]');
