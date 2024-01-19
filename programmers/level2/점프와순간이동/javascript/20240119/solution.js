/**
 * [풀이 과정]
 * 1. 가야하는 거리 n이 짝수라면 2를 나누어주어도 에너지는 소비되지 않음
 * - 순간이동으로 이동 가능하므로 목표 거리가 바뀐다고 생각해도 됨: 54와 27은 같은 에너지를 소비함
 * 2. 가야하는 거리 n이 홀수라면 에너지를 1 사용할 수밖에 없음
 * - 무조건 점프를 해야 하는 경우: 27은 26보다 에너지를 1 더 소비함
 * - 즉, n이 0이 될때까지 짝수라면 나누고, 홀수라면 에너지를 1 사용하면 됨
 */
function solution(n) {
  let answer = 0;

  while (n >= 1) {
    if (n % 2 === 0) {
      n /= 2;
      continue;
    }

    n -= 1;
    answer += 1;
  }

  return answer;
}

console.log(solution(5), '정답: 2');
console.log(solution(6), '정답: 2');
console.log(solution(5000), '정답: 5');
