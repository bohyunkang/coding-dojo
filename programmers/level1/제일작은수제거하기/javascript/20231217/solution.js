// 풀이 1
function solution(arr) {
  if (arr.length === 1) {
    return [-1];
  }

  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i += 1) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  return arr.filter((num) => num !== min);
}

// 풀이 2
function solution(arr) {
  const min = Math.min(...arr);
  const answer = arr.filter((num) => num !== min);

  return answer.length !== 0 ? answer : [-1];
}

console.log(solution([4, 3, 2, 1]), '정답: [4, 3, 2]');
console.log(solution([10]), '정답: [-1]');
